/*! jQuery v3.6.0 | (c) OpenJS Foundation and other contributors | jquery.org/license */
!(function (e, t) {
  "use strict";
  "object" == typeof module && "object" == typeof module.exports
    ? (module.exports = e.document
        ? t(e, !0)
        : function (e) {
            if (!e.document)
              throw new Error("jQuery requires a window with a document");
            return t(e);
          })
    : t(e);
})("undefined" != typeof window ? window : this, function (C, e) {
  "use strict";
  var t = [],
    r = Object.getPrototypeOf,
    s = t.slice,
    g = t.flat
      ? function (e) {
          return t.flat.call(e);
        }
      : function (e) {
          return t.concat.apply([], e);
        },
    u = t.push,
    i = t.indexOf,
    n = {},
    o = n.toString,
    v = n.hasOwnProperty,
    a = v.toString,
    l = a.call(Object),
    y = {},
    m = function (e) {
      return (
        "function" == typeof e &&
        "number" != typeof e.nodeType &&
        "function" != typeof e.item
      );
    },
    x = function (e) {
      return null != e && e === e.window;
    },
    E = C.document,
    c = { type: !0, src: !0, nonce: !0, noModule: !0 };
  function b(e, t, n) {
    var r,
      i,
      o = (n = n || E).createElement("script");
    if (((o.text = e), t))
      for (r in c)
        (i = t[r] || (t.getAttribute && t.getAttribute(r))) &&
          o.setAttribute(r, i);
    n.head.appendChild(o).parentNode.removeChild(o);
  }
  function w(e) {
    return null == e
      ? e + ""
      : "object" == typeof e || "function" == typeof e
      ? n[o.call(e)] || "object"
      : typeof e;
  }
  var f = "3.6.0",
    S = function (e, t) {
      return new S.fn.init(e, t);
    };
  function p(e) {
    var t = !!e && "length" in e && e.length,
      n = w(e);
    return (
      !m(e) &&
      !x(e) &&
      ("array" === n ||
        0 === t ||
        ("number" == typeof t && 0 < t && t - 1 in e))
    );
  }
  (S.fn = S.prototype =
    {
      jquery: f,
      constructor: S,
      length: 0,
      toArray: function () {
        return s.call(this);
      },
      get: function (e) {
        return null == e
          ? s.call(this)
          : e < 0
          ? this[e + this.length]
          : this[e];
      },
      pushStack: function (e) {
        var t = S.merge(this.constructor(), e);
        return (t.prevObject = this), t;
      },
      each: function (e) {
        return S.each(this, e);
      },
      map: function (n) {
        return this.pushStack(
          S.map(this, function (e, t) {
            return n.call(e, t, e);
          })
        );
      },
      slice: function () {
        return this.pushStack(s.apply(this, arguments));
      },
      first: function () {
        return this.eq(0);
      },
      last: function () {
        return this.eq(-1);
      },
      even: function () {
        return this.pushStack(
          S.grep(this, function (e, t) {
            return (t + 1) % 2;
          })
        );
      },
      odd: function () {
        return this.pushStack(
          S.grep(this, function (e, t) {
            return t % 2;
          })
        );
      },
      eq: function (e) {
        var t = this.length,
          n = +e + (e < 0 ? t : 0);
        return this.pushStack(0 <= n && n < t ? [this[n]] : []);
      },
      end: function () {
        return this.prevObject || this.constructor();
      },
      push: u,
      sort: t.sort,
      splice: t.splice,
    }),
    (S.extend = S.fn.extend =
      function () {
        var e,
          t,
          n,
          r,
          i,
          o,
          a = arguments[0] || {},
          s = 1,
          u = arguments.length,
          l = !1;
        for (
          "boolean" == typeof a && ((l = a), (a = arguments[s] || {}), s++),
            "object" == typeof a || m(a) || (a = {}),
            s === u && ((a = this), s--);
          s < u;
          s++
        )
          if (null != (e = arguments[s]))
            for (t in e)
              (r = e[t]),
                "__proto__" !== t &&
                  a !== r &&
                  (l && r && (S.isPlainObject(r) || (i = Array.isArray(r)))
                    ? ((n = a[t]),
                      (o =
                        i && !Array.isArray(n)
                          ? []
                          : i || S.isPlainObject(n)
                          ? n
                          : {}),
                      (i = !1),
                      (a[t] = S.extend(l, o, r)))
                    : void 0 !== r && (a[t] = r));
        return a;
      }),
    S.extend({
      expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function (e) {
        throw new Error(e);
      },
      noop: function () {},
      isPlainObject: function (e) {
        var t, n;
        return (
          !(!e || "[object Object]" !== o.call(e)) &&
          (!(t = r(e)) ||
            ("function" ==
              typeof (n = v.call(t, "constructor") && t.constructor) &&
              a.call(n) === l))
        );
      },
      isEmptyObject: function (e) {
        var t;
        for (t in e) return !1;
        return !0;
      },
      globalEval: function (e, t, n) {
        b(e, { nonce: t && t.nonce }, n);
      },
      each: function (e, t) {
        var n,
          r = 0;
        if (p(e)) {
          for (n = e.length; r < n; r++)
            if (!1 === t.call(e[r], r, e[r])) break;
        } else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
        return e;
      },
      makeArray: function (e, t) {
        var n = t || [];
        return (
          null != e &&
            (p(Object(e))
              ? S.merge(n, "string" == typeof e ? [e] : e)
              : u.call(n, e)),
          n
        );
      },
      inArray: function (e, t, n) {
        return null == t ? -1 : i.call(t, e, n);
      },
      merge: function (e, t) {
        for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
        return (e.length = i), e;
      },
      grep: function (e, t, n) {
        for (var r = [], i = 0, o = e.length, a = !n; i < o; i++)
          !t(e[i], i) !== a && r.push(e[i]);
        return r;
      },
      map: function (e, t, n) {
        var r,
          i,
          o = 0,
          a = [];
        if (p(e))
          for (r = e.length; o < r; o++)
            null != (i = t(e[o], o, n)) && a.push(i);
        else for (o in e) null != (i = t(e[o], o, n)) && a.push(i);
        return g(a);
      },
      guid: 1,
      support: y,
    }),
    "function" == typeof Symbol && (S.fn[Symbol.iterator] = t[Symbol.iterator]),
    S.each(
      "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
        " "
      ),
      function (e, t) {
        n["[object " + t + "]"] = t.toLowerCase();
      }
    );
  var d = (function (n) {
    var e,
      d,
      b,
      o,
      i,
      h,
      f,
      g,
      w,
      u,
      l,
      T,
      C,
      a,
      E,
      v,
      s,
      c,
      y,
      S = "sizzle" + 1 * new Date(),
      p = n.document,
      k = 0,
      r = 0,
      m = ue(),
      x = ue(),
      A = ue(),
      N = ue(),
      j = function (e, t) {
        return e === t && (l = !0), 0;
      },
      D = {}.hasOwnProperty,
      t = [],
      q = t.pop,
      L = t.push,
      H = t.push,
      O = t.slice,
      P = function (e, t) {
        for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
        return -1;
      },
      R =
        "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
      M = "[\\x20\\t\\r\\n\\f]",
      I =
        "(?:\\\\[\\da-fA-F]{1,6}" +
        M +
        "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
      W =
        "\\[" +
        M +
        "*(" +
        I +
        ")(?:" +
        M +
        "*([*^$|!~]?=)" +
        M +
        "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
        I +
        "))|)" +
        M +
        "*\\]",
      F =
        ":(" +
        I +
        ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
        W +
        ")*)|.*)\\)|)",
      B = new RegExp(M + "+", "g"),
      $ = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
      _ = new RegExp("^" + M + "*," + M + "*"),
      z = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
      U = new RegExp(M + "|>"),
      X = new RegExp(F),
      V = new RegExp("^" + I + "$"),
      G = {
        ID: new RegExp("^#(" + I + ")"),
        CLASS: new RegExp("^\\.(" + I + ")"),
        TAG: new RegExp("^(" + I + "|[*])"),
        ATTR: new RegExp("^" + W),
        PSEUDO: new RegExp("^" + F),
        CHILD: new RegExp(
          "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
            M +
            "*(even|odd|(([+-]|)(\\d*)n|)" +
            M +
            "*(?:([+-]|)" +
            M +
            "*(\\d+)|))" +
            M +
            "*\\)|)",
          "i"
        ),
        bool: new RegExp("^(?:" + R + ")$", "i"),
        needsContext: new RegExp(
          "^" +
            M +
            "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
            M +
            "*((?:-\\d)?\\d*)" +
            M +
            "*\\)|)(?=[^-]|$)",
          "i"
        ),
      },
      Y = /HTML$/i,
      Q = /^(?:input|select|textarea|button)$/i,
      J = /^h\d$/i,
      K = /^[^{]+\{\s*\[native \w/,
      Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      ee = /[+~]/,
      te = new RegExp("\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\([^\\r\\n\\f])", "g"),
      ne = function (e, t) {
        var n = "0x" + e.slice(1) - 65536;
        return (
          t ||
          (n < 0
            ? String.fromCharCode(n + 65536)
            : String.fromCharCode((n >> 10) | 55296, (1023 & n) | 56320))
        );
      },
      re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
      ie = function (e, t) {
        return t
          ? "\0" === e
            ? "\ufffd"
            : e.slice(0, -1) +
              "\\" +
              e.charCodeAt(e.length - 1).toString(16) +
              " "
          : "\\" + e;
      },
      oe = function () {
        T();
      },
      ae = be(
        function (e) {
          return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase();
        },
        { dir: "parentNode", next: "legend" }
      );
    try {
      H.apply((t = O.call(p.childNodes)), p.childNodes),
        t[p.childNodes.length].nodeType;
    } catch (e) {
      H = {
        apply: t.length
          ? function (e, t) {
              L.apply(e, O.call(t));
            }
          : function (e, t) {
              var n = e.length,
                r = 0;
              while ((e[n++] = t[r++]));
              e.length = n - 1;
            },
      };
    }
    function se(t, e, n, r) {
      var i,
        o,
        a,
        s,
        u,
        l,
        c,
        f = e && e.ownerDocument,
        p = e ? e.nodeType : 9;
      if (
        ((n = n || []),
        "string" != typeof t || !t || (1 !== p && 9 !== p && 11 !== p))
      )
        return n;
      if (!r && (T(e), (e = e || C), E)) {
        if (11 !== p && (u = Z.exec(t)))
          if ((i = u[1])) {
            if (9 === p) {
              if (!(a = e.getElementById(i))) return n;
              if (a.id === i) return n.push(a), n;
            } else if (f && (a = f.getElementById(i)) && y(e, a) && a.id === i)
              return n.push(a), n;
          } else {
            if (u[2]) return H.apply(n, e.getElementsByTagName(t)), n;
            if (
              (i = u[3]) &&
              d.getElementsByClassName &&
              e.getElementsByClassName
            )
              return H.apply(n, e.getElementsByClassName(i)), n;
          }
        if (
          d.qsa &&
          !N[t + " "] &&
          (!v || !v.test(t)) &&
          (1 !== p || "object" !== e.nodeName.toLowerCase())
        ) {
          if (((c = t), (f = e), 1 === p && (U.test(t) || z.test(t)))) {
            ((f = (ee.test(t) && ye(e.parentNode)) || e) === e && d.scope) ||
              ((s = e.getAttribute("id"))
                ? (s = s.replace(re, ie))
                : e.setAttribute("id", (s = S))),
              (o = (l = h(t)).length);
            while (o--) l[o] = (s ? "#" + s : ":scope") + " " + xe(l[o]);
            c = l.join(",");
          }
          try {
            return H.apply(n, f.querySelectorAll(c)), n;
          } catch (e) {
            N(t, !0);
          } finally {
            s === S && e.removeAttribute("id");
          }
        }
      }
      return g(t.replace($, "$1"), e, n, r);
    }
    function ue() {
      var r = [];
      return function e(t, n) {
        return (
          r.push(t + " ") > b.cacheLength && delete e[r.shift()],
          (e[t + " "] = n)
        );
      };
    }
    function le(e) {
      return (e[S] = !0), e;
    }
    function ce(e) {
      var t = C.createElement("fieldset");
      try {
        return !!e(t);
      } catch (e) {
        return !1;
      } finally {
        t.parentNode && t.parentNode.removeChild(t), (t = null);
      }
    }
    function fe(e, t) {
      var n = e.split("|"),
        r = n.length;
      while (r--) b.attrHandle[n[r]] = t;
    }
    function pe(e, t) {
      var n = t && e,
        r =
          n &&
          1 === e.nodeType &&
          1 === t.nodeType &&
          e.sourceIndex - t.sourceIndex;
      if (r) return r;
      if (n) while ((n = n.nextSibling)) if (n === t) return -1;
      return e ? 1 : -1;
    }
    function de(t) {
      return function (e) {
        return "input" === e.nodeName.toLowerCase() && e.type === t;
      };
    }
    function he(n) {
      return function (e) {
        var t = e.nodeName.toLowerCase();
        return ("input" === t || "button" === t) && e.type === n;
      };
    }
    function ge(t) {
      return function (e) {
        return "form" in e
          ? e.parentNode && !1 === e.disabled
            ? "label" in e
              ? "label" in e.parentNode
                ? e.parentNode.disabled === t
                : e.disabled === t
              : e.isDisabled === t || (e.isDisabled !== !t && ae(e) === t)
            : e.disabled === t
          : "label" in e && e.disabled === t;
      };
    }
    function ve(a) {
      return le(function (o) {
        return (
          (o = +o),
          le(function (e, t) {
            var n,
              r = a([], e.length, o),
              i = r.length;
            while (i--) e[(n = r[i])] && (e[n] = !(t[n] = e[n]));
          })
        );
      });
    }
    function ye(e) {
      return e && "undefined" != typeof e.getElementsByTagName && e;
    }
    for (e in ((d = se.support = {}),
    (i = se.isXML =
      function (e) {
        var t = e && e.namespaceURI,
          n = e && (e.ownerDocument || e).documentElement;
        return !Y.test(t || (n && n.nodeName) || "HTML");
      }),
    (T = se.setDocument =
      function (e) {
        var t,
          n,
          r = e ? e.ownerDocument || e : p;
        return (
          r != C &&
            9 === r.nodeType &&
            r.documentElement &&
            ((a = (C = r).documentElement),
            (E = !i(C)),
            p != C &&
              (n = C.defaultView) &&
              n.top !== n &&
              (n.addEventListener
                ? n.addEventListener("unload", oe, !1)
                : n.attachEvent && n.attachEvent("onunload", oe)),
            (d.scope = ce(function (e) {
              return (
                a.appendChild(e).appendChild(C.createElement("div")),
                "undefined" != typeof e.querySelectorAll &&
                  !e.querySelectorAll(":scope fieldset div").length
              );
            })),
            (d.attributes = ce(function (e) {
              return (e.className = "i"), !e.getAttribute("className");
            })),
            (d.getElementsByTagName = ce(function (e) {
              return (
                e.appendChild(C.createComment("")),
                !e.getElementsByTagName("*").length
              );
            })),
            (d.getElementsByClassName = K.test(C.getElementsByClassName)),
            (d.getById = ce(function (e) {
              return (
                (a.appendChild(e).id = S),
                !C.getElementsByName || !C.getElementsByName(S).length
              );
            })),
            d.getById
              ? ((b.filter.ID = function (e) {
                  var t = e.replace(te, ne);
                  return function (e) {
                    return e.getAttribute("id") === t;
                  };
                }),
                (b.find.ID = function (e, t) {
                  if ("undefined" != typeof t.getElementById && E) {
                    var n = t.getElementById(e);
                    return n ? [n] : [];
                  }
                }))
              : ((b.filter.ID = function (e) {
                  var n = e.replace(te, ne);
                  return function (e) {
                    var t =
                      "undefined" != typeof e.getAttributeNode &&
                      e.getAttributeNode("id");
                    return t && t.value === n;
                  };
                }),
                (b.find.ID = function (e, t) {
                  if ("undefined" != typeof t.getElementById && E) {
                    var n,
                      r,
                      i,
                      o = t.getElementById(e);
                    if (o) {
                      if ((n = o.getAttributeNode("id")) && n.value === e)
                        return [o];
                      (i = t.getElementsByName(e)), (r = 0);
                      while ((o = i[r++]))
                        if ((n = o.getAttributeNode("id")) && n.value === e)
                          return [o];
                    }
                    return [];
                  }
                })),
            (b.find.TAG = d.getElementsByTagName
              ? function (e, t) {
                  return "undefined" != typeof t.getElementsByTagName
                    ? t.getElementsByTagName(e)
                    : d.qsa
                    ? t.querySelectorAll(e)
                    : void 0;
                }
              : function (e, t) {
                  var n,
                    r = [],
                    i = 0,
                    o = t.getElementsByTagName(e);
                  if ("*" === e) {
                    while ((n = o[i++])) 1 === n.nodeType && r.push(n);
                    return r;
                  }
                  return o;
                }),
            (b.find.CLASS =
              d.getElementsByClassName &&
              function (e, t) {
                if ("undefined" != typeof t.getElementsByClassName && E)
                  return t.getElementsByClassName(e);
              }),
            (s = []),
            (v = []),
            (d.qsa = K.test(C.querySelectorAll)) &&
              (ce(function (e) {
                var t;
                (a.appendChild(e).innerHTML =
                  "<a id='" +
                  S +
                  "'></a><select id='" +
                  S +
                  "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                  e.querySelectorAll("[msallowcapture^='']").length &&
                    v.push("[*^$]=" + M + "*(?:''|\"\")"),
                  e.querySelectorAll("[selected]").length ||
                    v.push("\\[" + M + "*(?:value|" + R + ")"),
                  e.querySelectorAll("[id~=" + S + "-]").length || v.push("~="),
                  (t = C.createElement("input")).setAttribute("name", ""),
                  e.appendChild(t),
                  e.querySelectorAll("[name='']").length ||
                    v.push("\\[" + M + "*name" + M + "*=" + M + "*(?:''|\"\")"),
                  e.querySelectorAll(":checked").length || v.push(":checked"),
                  e.querySelectorAll("a#" + S + "+*").length ||
                    v.push(".#.+[+~]"),
                  e.querySelectorAll("\\\f"),
                  v.push("[\\r\\n\\f]");
              }),
              ce(function (e) {
                e.innerHTML =
                  "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = C.createElement("input");
                t.setAttribute("type", "hidden"),
                  e.appendChild(t).setAttribute("name", "D"),
                  e.querySelectorAll("[name=d]").length &&
                    v.push("name" + M + "*[*^$|!~]?="),
                  2 !== e.querySelectorAll(":enabled").length &&
                    v.push(":enabled", ":disabled"),
                  (a.appendChild(e).disabled = !0),
                  2 !== e.querySelectorAll(":disabled").length &&
                    v.push(":enabled", ":disabled"),
                  e.querySelectorAll("*,:x"),
                  v.push(",.*:");
              })),
            (d.matchesSelector = K.test(
              (c =
                a.matches ||
                a.webkitMatchesSelector ||
                a.mozMatchesSelector ||
                a.oMatchesSelector ||
                a.msMatchesSelector)
            )) &&
              ce(function (e) {
                (d.disconnectedMatch = c.call(e, "*")),
                  c.call(e, "[s!='']:x"),
                  s.push("!=", F);
              }),
            (v = v.length && new RegExp(v.join("|"))),
            (s = s.length && new RegExp(s.join("|"))),
            (t = K.test(a.compareDocumentPosition)),
            (y =
              t || K.test(a.contains)
                ? function (e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                      r = t && t.parentNode;
                    return (
                      e === r ||
                      !(
                        !r ||
                        1 !== r.nodeType ||
                        !(n.contains
                          ? n.contains(r)
                          : e.compareDocumentPosition &&
                            16 & e.compareDocumentPosition(r))
                      )
                    );
                  }
                : function (e, t) {
                    if (t) while ((t = t.parentNode)) if (t === e) return !0;
                    return !1;
                  }),
            (j = t
              ? function (e, t) {
                  if (e === t) return (l = !0), 0;
                  var n =
                    !e.compareDocumentPosition - !t.compareDocumentPosition;
                  return (
                    n ||
                    (1 &
                      (n =
                        (e.ownerDocument || e) == (t.ownerDocument || t)
                          ? e.compareDocumentPosition(t)
                          : 1) ||
                    (!d.sortDetached && t.compareDocumentPosition(e) === n)
                      ? e == C || (e.ownerDocument == p && y(p, e))
                        ? -1
                        : t == C || (t.ownerDocument == p && y(p, t))
                        ? 1
                        : u
                        ? P(u, e) - P(u, t)
                        : 0
                      : 4 & n
                      ? -1
                      : 1)
                  );
                }
              : function (e, t) {
                  if (e === t) return (l = !0), 0;
                  var n,
                    r = 0,
                    i = e.parentNode,
                    o = t.parentNode,
                    a = [e],
                    s = [t];
                  if (!i || !o)
                    return e == C
                      ? -1
                      : t == C
                      ? 1
                      : i
                      ? -1
                      : o
                      ? 1
                      : u
                      ? P(u, e) - P(u, t)
                      : 0;
                  if (i === o) return pe(e, t);
                  n = e;
                  while ((n = n.parentNode)) a.unshift(n);
                  n = t;
                  while ((n = n.parentNode)) s.unshift(n);
                  while (a[r] === s[r]) r++;
                  return r
                    ? pe(a[r], s[r])
                    : a[r] == p
                    ? -1
                    : s[r] == p
                    ? 1
                    : 0;
                })),
          C
        );
      }),
    (se.matches = function (e, t) {
      return se(e, null, null, t);
    }),
    (se.matchesSelector = function (e, t) {
      if (
        (T(e),
        d.matchesSelector &&
          E &&
          !N[t + " "] &&
          (!s || !s.test(t)) &&
          (!v || !v.test(t)))
      )
        try {
          var n = c.call(e, t);
          if (
            n ||
            d.disconnectedMatch ||
            (e.document && 11 !== e.document.nodeType)
          )
            return n;
        } catch (e) {
          N(t, !0);
        }
      return 0 < se(t, C, null, [e]).length;
    }),
    (se.contains = function (e, t) {
      return (e.ownerDocument || e) != C && T(e), y(e, t);
    }),
    (se.attr = function (e, t) {
      (e.ownerDocument || e) != C && T(e);
      var n = b.attrHandle[t.toLowerCase()],
        r = n && D.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !E) : void 0;
      return void 0 !== r
        ? r
        : d.attributes || !E
        ? e.getAttribute(t)
        : (r = e.getAttributeNode(t)) && r.specified
        ? r.value
        : null;
    }),
    (se.escape = function (e) {
      return (e + "").replace(re, ie);
    }),
    (se.error = function (e) {
      throw new Error("Syntax error, unrecognized expression: " + e);
    }),
    (se.uniqueSort = function (e) {
      var t,
        n = [],
        r = 0,
        i = 0;
      if (
        ((l = !d.detectDuplicates),
        (u = !d.sortStable && e.slice(0)),
        e.sort(j),
        l)
      ) {
        while ((t = e[i++])) t === e[i] && (r = n.push(i));
        while (r--) e.splice(n[r], 1);
      }
      return (u = null), e;
    }),
    (o = se.getText =
      function (e) {
        var t,
          n = "",
          r = 0,
          i = e.nodeType;
        if (i) {
          if (1 === i || 9 === i || 11 === i) {
            if ("string" == typeof e.textContent) return e.textContent;
            for (e = e.firstChild; e; e = e.nextSibling) n += o(e);
          } else if (3 === i || 4 === i) return e.nodeValue;
        } else while ((t = e[r++])) n += o(t);
        return n;
      }),
    ((b = se.selectors =
      {
        cacheLength: 50,
        createPseudo: le,
        match: G,
        attrHandle: {},
        find: {},
        relative: {
          ">": { dir: "parentNode", first: !0 },
          " ": { dir: "parentNode" },
          "+": { dir: "previousSibling", first: !0 },
          "~": { dir: "previousSibling" },
        },
        preFilter: {
          ATTR: function (e) {
            return (
              (e[1] = e[1].replace(te, ne)),
              (e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne)),
              "~=" === e[2] && (e[3] = " " + e[3] + " "),
              e.slice(0, 4)
            );
          },
          CHILD: function (e) {
            return (
              (e[1] = e[1].toLowerCase()),
              "nth" === e[1].slice(0, 3)
                ? (e[3] || se.error(e[0]),
                  (e[4] = +(e[4]
                    ? e[5] + (e[6] || 1)
                    : 2 * ("even" === e[3] || "odd" === e[3]))),
                  (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                : e[3] && se.error(e[0]),
              e
            );
          },
          PSEUDO: function (e) {
            var t,
              n = !e[6] && e[2];
            return G.CHILD.test(e[0])
              ? null
              : (e[3]
                  ? (e[2] = e[4] || e[5] || "")
                  : n &&
                    X.test(n) &&
                    (t = h(n, !0)) &&
                    (t = n.indexOf(")", n.length - t) - n.length) &&
                    ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                e.slice(0, 3));
          },
        },
        filter: {
          TAG: function (e) {
            var t = e.replace(te, ne).toLowerCase();
            return "*" === e
              ? function () {
                  return !0;
                }
              : function (e) {
                  return e.nodeName && e.nodeName.toLowerCase() === t;
                };
          },
          CLASS: function (e) {
            var t = m[e + " "];
            return (
              t ||
              ((t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) &&
                m(e, function (e) {
                  return t.test(
                    ("string" == typeof e.className && e.className) ||
                      ("undefined" != typeof e.getAttribute &&
                        e.getAttribute("class")) ||
                      ""
                  );
                }))
            );
          },
          ATTR: function (n, r, i) {
            return function (e) {
              var t = se.attr(e, n);
              return null == t
                ? "!=" === r
                : !r ||
                    ((t += ""),
                    "=" === r
                      ? t === i
                      : "!=" === r
                      ? t !== i
                      : "^=" === r
                      ? i && 0 === t.indexOf(i)
                      : "*=" === r
                      ? i && -1 < t.indexOf(i)
                      : "$=" === r
                      ? i && t.slice(-i.length) === i
                      : "~=" === r
                      ? -1 < (" " + t.replace(B, " ") + " ").indexOf(i)
                      : "|=" === r &&
                        (t === i || t.slice(0, i.length + 1) === i + "-"));
            };
          },
          CHILD: function (h, e, t, g, v) {
            var y = "nth" !== h.slice(0, 3),
              m = "last" !== h.slice(-4),
              x = "of-type" === e;
            return 1 === g && 0 === v
              ? function (e) {
                  return !!e.parentNode;
                }
              : function (e, t, n) {
                  var r,
                    i,
                    o,
                    a,
                    s,
                    u,
                    l = y !== m ? "nextSibling" : "previousSibling",
                    c = e.parentNode,
                    f = x && e.nodeName.toLowerCase(),
                    p = !n && !x,
                    d = !1;
                  if (c) {
                    if (y) {
                      while (l) {
                        a = e;
                        while ((a = a[l]))
                          if (
                            x
                              ? a.nodeName.toLowerCase() === f
                              : 1 === a.nodeType
                          )
                            return !1;
                        u = l = "only" === h && !u && "nextSibling";
                      }
                      return !0;
                    }
                    if (((u = [m ? c.firstChild : c.lastChild]), m && p)) {
                      (d =
                        (s =
                          (r =
                            (i =
                              (o = (a = c)[S] || (a[S] = {}))[a.uniqueID] ||
                              (o[a.uniqueID] = {}))[h] || [])[0] === k &&
                          r[1]) && r[2]),
                        (a = s && c.childNodes[s]);
                      while ((a = (++s && a && a[l]) || (d = s = 0) || u.pop()))
                        if (1 === a.nodeType && ++d && a === e) {
                          i[h] = [k, s, d];
                          break;
                        }
                    } else if (
                      (p &&
                        (d = s =
                          (r =
                            (i =
                              (o = (a = e)[S] || (a[S] = {}))[a.uniqueID] ||
                              (o[a.uniqueID] = {}))[h] || [])[0] === k && r[1]),
                      !1 === d)
                    )
                      while ((a = (++s && a && a[l]) || (d = s = 0) || u.pop()))
                        if (
                          (x
                            ? a.nodeName.toLowerCase() === f
                            : 1 === a.nodeType) &&
                          ++d &&
                          (p &&
                            ((i =
                              (o = a[S] || (a[S] = {}))[a.uniqueID] ||
                              (o[a.uniqueID] = {}))[h] = [k, d]),
                          a === e)
                        )
                          break;
                    return (d -= v) === g || (d % g == 0 && 0 <= d / g);
                  }
                };
          },
          PSEUDO: function (e, o) {
            var t,
              a =
                b.pseudos[e] ||
                b.setFilters[e.toLowerCase()] ||
                se.error("unsupported pseudo: " + e);
            return a[S]
              ? a(o)
              : 1 < a.length
              ? ((t = [e, e, "", o]),
                b.setFilters.hasOwnProperty(e.toLowerCase())
                  ? le(function (e, t) {
                      var n,
                        r = a(e, o),
                        i = r.length;
                      while (i--) e[(n = P(e, r[i]))] = !(t[n] = r[i]);
                    })
                  : function (e) {
                      return a(e, 0, t);
                    })
              : a;
          },
        },
        pseudos: {
          not: le(function (e) {
            var r = [],
              i = [],
              s = f(e.replace($, "$1"));
            return s[S]
              ? le(function (e, t, n, r) {
                  var i,
                    o = s(e, null, r, []),
                    a = e.length;
                  while (a--) (i = o[a]) && (e[a] = !(t[a] = i));
                })
              : function (e, t, n) {
                  return (r[0] = e), s(r, null, n, i), (r[0] = null), !i.pop();
                };
          }),
          has: le(function (t) {
            return function (e) {
              return 0 < se(t, e).length;
            };
          }),
          contains: le(function (t) {
            return (
              (t = t.replace(te, ne)),
              function (e) {
                return -1 < (e.textContent || o(e)).indexOf(t);
              }
            );
          }),
          lang: le(function (n) {
            return (
              V.test(n || "") || se.error("unsupported lang: " + n),
              (n = n.replace(te, ne).toLowerCase()),
              function (e) {
                var t;
                do {
                  if (
                    (t = E
                      ? e.lang
                      : e.getAttribute("xml:lang") || e.getAttribute("lang"))
                  )
                    return (
                      (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                    );
                } while ((e = e.parentNode) && 1 === e.nodeType);
                return !1;
              }
            );
          }),
          target: function (e) {
            var t = n.location && n.location.hash;
            return t && t.slice(1) === e.id;
          },
          root: function (e) {
            return e === a;
          },
          focus: function (e) {
            return (
              e === C.activeElement &&
              (!C.hasFocus || C.hasFocus()) &&
              !!(e.type || e.href || ~e.tabIndex)
            );
          },
          enabled: ge(!1),
          disabled: ge(!0),
          checked: function (e) {
            var t = e.nodeName.toLowerCase();
            return (
              ("input" === t && !!e.checked) || ("option" === t && !!e.selected)
            );
          },
          selected: function (e) {
            return (
              e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
            );
          },
          empty: function (e) {
            for (e = e.firstChild; e; e = e.nextSibling)
              if (e.nodeType < 6) return !1;
            return !0;
          },
          parent: function (e) {
            return !b.pseudos.empty(e);
          },
          header: function (e) {
            return J.test(e.nodeName);
          },
          input: function (e) {
            return Q.test(e.nodeName);
          },
          button: function (e) {
            var t = e.nodeName.toLowerCase();
            return ("input" === t && "button" === e.type) || "button" === t;
          },
          text: function (e) {
            var t;
            return (
              "input" === e.nodeName.toLowerCase() &&
              "text" === e.type &&
              (null == (t = e.getAttribute("type")) ||
                "text" === t.toLowerCase())
            );
          },
          first: ve(function () {
            return [0];
          }),
          last: ve(function (e, t) {
            return [t - 1];
          }),
          eq: ve(function (e, t, n) {
            return [n < 0 ? n + t : n];
          }),
          even: ve(function (e, t) {
            for (var n = 0; n < t; n += 2) e.push(n);
            return e;
          }),
          odd: ve(function (e, t) {
            for (var n = 1; n < t; n += 2) e.push(n);
            return e;
          }),
          lt: ve(function (e, t, n) {
            for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r; ) e.push(r);
            return e;
          }),
          gt: ve(function (e, t, n) {
            for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r);
            return e;
          }),
        },
      }).pseudos.nth = b.pseudos.eq),
    { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
      b.pseudos[e] = de(e);
    for (e in { submit: !0, reset: !0 }) b.pseudos[e] = he(e);
    function me() {}
    function xe(e) {
      for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
      return r;
    }
    function be(s, e, t) {
      var u = e.dir,
        l = e.next,
        c = l || u,
        f = t && "parentNode" === c,
        p = r++;
      return e.first
        ? function (e, t, n) {
            while ((e = e[u])) if (1 === e.nodeType || f) return s(e, t, n);
            return !1;
          }
        : function (e, t, n) {
            var r,
              i,
              o,
              a = [k, p];
            if (n) {
              while ((e = e[u]))
                if ((1 === e.nodeType || f) && s(e, t, n)) return !0;
            } else
              while ((e = e[u]))
                if (1 === e.nodeType || f)
                  if (
                    ((i =
                      (o = e[S] || (e[S] = {}))[e.uniqueID] ||
                      (o[e.uniqueID] = {})),
                    l && l === e.nodeName.toLowerCase())
                  )
                    e = e[u] || e;
                  else {
                    if ((r = i[c]) && r[0] === k && r[1] === p)
                      return (a[2] = r[2]);
                    if (((i[c] = a)[2] = s(e, t, n))) return !0;
                  }
            return !1;
          };
    }
    function we(i) {
      return 1 < i.length
        ? function (e, t, n) {
            var r = i.length;
            while (r--) if (!i[r](e, t, n)) return !1;
            return !0;
          }
        : i[0];
    }
    function Te(e, t, n, r, i) {
      for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)
        (o = e[s]) && ((n && !n(o, r, i)) || (a.push(o), l && t.push(s)));
      return a;
    }
    function Ce(d, h, g, v, y, e) {
      return (
        v && !v[S] && (v = Ce(v)),
        y && !y[S] && (y = Ce(y, e)),
        le(function (e, t, n, r) {
          var i,
            o,
            a,
            s = [],
            u = [],
            l = t.length,
            c =
              e ||
              (function (e, t, n) {
                for (var r = 0, i = t.length; r < i; r++) se(e, t[r], n);
                return n;
              })(h || "*", n.nodeType ? [n] : n, []),
            f = !d || (!e && h) ? c : Te(c, s, d, n, r),
            p = g ? (y || (e ? d : l || v) ? [] : t) : f;
          if ((g && g(f, p, n, r), v)) {
            (i = Te(p, u)), v(i, [], n, r), (o = i.length);
            while (o--) (a = i[o]) && (p[u[o]] = !(f[u[o]] = a));
          }
          if (e) {
            if (y || d) {
              if (y) {
                (i = []), (o = p.length);
                while (o--) (a = p[o]) && i.push((f[o] = a));
                y(null, (p = []), i, r);
              }
              o = p.length;
              while (o--)
                (a = p[o]) &&
                  -1 < (i = y ? P(e, a) : s[o]) &&
                  (e[i] = !(t[i] = a));
            }
          } else (p = Te(p === t ? p.splice(l, p.length) : p)), y ? y(null, t, p, r) : H.apply(t, p);
        })
      );
    }
    function Ee(e) {
      for (
        var i,
          t,
          n,
          r = e.length,
          o = b.relative[e[0].type],
          a = o || b.relative[" "],
          s = o ? 1 : 0,
          u = be(
            function (e) {
              return e === i;
            },
            a,
            !0
          ),
          l = be(
            function (e) {
              return -1 < P(i, e);
            },
            a,
            !0
          ),
          c = [
            function (e, t, n) {
              var r =
                (!o && (n || t !== w)) ||
                ((i = t).nodeType ? u(e, t, n) : l(e, t, n));
              return (i = null), r;
            },
          ];
        s < r;
        s++
      )
        if ((t = b.relative[e[s].type])) c = [be(we(c), t)];
        else {
          if ((t = b.filter[e[s].type].apply(null, e[s].matches))[S]) {
            for (n = ++s; n < r; n++) if (b.relative[e[n].type]) break;
            return Ce(
              1 < s && we(c),
              1 < s &&
                xe(
                  e
                    .slice(0, s - 1)
                    .concat({ value: " " === e[s - 2].type ? "*" : "" })
                ).replace($, "$1"),
              t,
              s < n && Ee(e.slice(s, n)),
              n < r && Ee((e = e.slice(n))),
              n < r && xe(e)
            );
          }
          c.push(t);
        }
      return we(c);
    }
    return (
      (me.prototype = b.filters = b.pseudos),
      (b.setFilters = new me()),
      (h = se.tokenize =
        function (e, t) {
          var n,
            r,
            i,
            o,
            a,
            s,
            u,
            l = x[e + " "];
          if (l) return t ? 0 : l.slice(0);
          (a = e), (s = []), (u = b.preFilter);
          while (a) {
            for (o in ((n && !(r = _.exec(a))) ||
              (r && (a = a.slice(r[0].length) || a), s.push((i = []))),
            (n = !1),
            (r = z.exec(a)) &&
              ((n = r.shift()),
              i.push({ value: n, type: r[0].replace($, " ") }),
              (a = a.slice(n.length))),
            b.filter))
              !(r = G[o].exec(a)) ||
                (u[o] && !(r = u[o](r))) ||
                ((n = r.shift()),
                i.push({ value: n, type: o, matches: r }),
                (a = a.slice(n.length)));
            if (!n) break;
          }
          return t ? a.length : a ? se.error(e) : x(e, s).slice(0);
        }),
      (f = se.compile =
        function (e, t) {
          var n,
            v,
            y,
            m,
            x,
            r,
            i = [],
            o = [],
            a = A[e + " "];
          if (!a) {
            t || (t = h(e)), (n = t.length);
            while (n--) (a = Ee(t[n]))[S] ? i.push(a) : o.push(a);
            (a = A(
              e,
              ((v = o),
              (m = 0 < (y = i).length),
              (x = 0 < v.length),
              (r = function (e, t, n, r, i) {
                var o,
                  a,
                  s,
                  u = 0,
                  l = "0",
                  c = e && [],
                  f = [],
                  p = w,
                  d = e || (x && b.find.TAG("*", i)),
                  h = (k += null == p ? 1 : Math.random() || 0.1),
                  g = d.length;
                for (
                  i && (w = t == C || t || i);
                  l !== g && null != (o = d[l]);
                  l++
                ) {
                  if (x && o) {
                    (a = 0), t || o.ownerDocument == C || (T(o), (n = !E));
                    while ((s = v[a++]))
                      if (s(o, t || C, n)) {
                        r.push(o);
                        break;
                      }
                    i && (k = h);
                  }
                  m && ((o = !s && o) && u--, e && c.push(o));
                }
                if (((u += l), m && l !== u)) {
                  a = 0;
                  while ((s = y[a++])) s(c, f, t, n);
                  if (e) {
                    if (0 < u) while (l--) c[l] || f[l] || (f[l] = q.call(r));
                    f = Te(f);
                  }
                  H.apply(r, f),
                    i &&
                      !e &&
                      0 < f.length &&
                      1 < u + y.length &&
                      se.uniqueSort(r);
                }
                return i && ((k = h), (w = p)), c;
              }),
              m ? le(r) : r)
            )).selector = e;
          }
          return a;
        }),
      (g = se.select =
        function (e, t, n, r) {
          var i,
            o,
            a,
            s,
            u,
            l = "function" == typeof e && e,
            c = !r && h((e = l.selector || e));
          if (((n = n || []), 1 === c.length)) {
            if (
              2 < (o = c[0] = c[0].slice(0)).length &&
              "ID" === (a = o[0]).type &&
              9 === t.nodeType &&
              E &&
              b.relative[o[1].type]
            ) {
              if (!(t = (b.find.ID(a.matches[0].replace(te, ne), t) || [])[0]))
                return n;
              l && (t = t.parentNode), (e = e.slice(o.shift().value.length));
            }
            i = G.needsContext.test(e) ? 0 : o.length;
            while (i--) {
              if (((a = o[i]), b.relative[(s = a.type)])) break;
              if (
                (u = b.find[s]) &&
                (r = u(
                  a.matches[0].replace(te, ne),
                  (ee.test(o[0].type) && ye(t.parentNode)) || t
                ))
              ) {
                if ((o.splice(i, 1), !(e = r.length && xe(o))))
                  return H.apply(n, r), n;
                break;
              }
            }
          }
          return (
            (l || f(e, c))(
              r,
              t,
              !E,
              n,
              !t || (ee.test(e) && ye(t.parentNode)) || t
            ),
            n
          );
        }),
      (d.sortStable = S.split("").sort(j).join("") === S),
      (d.detectDuplicates = !!l),
      T(),
      (d.sortDetached = ce(function (e) {
        return 1 & e.compareDocumentPosition(C.createElement("fieldset"));
      })),
      ce(function (e) {
        return (
          (e.innerHTML = "<a href='#'></a>"),
          "#" === e.firstChild.getAttribute("href")
        );
      }) ||
        fe("type|href|height|width", function (e, t, n) {
          if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
        }),
      (d.attributes &&
        ce(function (e) {
          return (
            (e.innerHTML = "<input/>"),
            e.firstChild.setAttribute("value", ""),
            "" === e.firstChild.getAttribute("value")
          );
        })) ||
        fe("value", function (e, t, n) {
          if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
        }),
      ce(function (e) {
        return null == e.getAttribute("disabled");
      }) ||
        fe(R, function (e, t, n) {
          var r;
          if (!n)
            return !0 === e[t]
              ? t.toLowerCase()
              : (r = e.getAttributeNode(t)) && r.specified
              ? r.value
              : null;
        }),
      se
    );
  })(C);
  (S.find = d),
    (S.expr = d.selectors),
    (S.expr[":"] = S.expr.pseudos),
    (S.uniqueSort = S.unique = d.uniqueSort),
    (S.text = d.getText),
    (S.isXMLDoc = d.isXML),
    (S.contains = d.contains),
    (S.escapeSelector = d.escape);
  var h = function (e, t, n) {
      var r = [],
        i = void 0 !== n;
      while ((e = e[t]) && 9 !== e.nodeType)
        if (1 === e.nodeType) {
          if (i && S(e).is(n)) break;
          r.push(e);
        }
      return r;
    },
    T = function (e, t) {
      for (var n = []; e; e = e.nextSibling)
        1 === e.nodeType && e !== t && n.push(e);
      return n;
    },
    k = S.expr.match.needsContext;
  function A(e, t) {
    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
  }
  var N = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
  function j(e, n, r) {
    return m(n)
      ? S.grep(e, function (e, t) {
          return !!n.call(e, t, e) !== r;
        })
      : n.nodeType
      ? S.grep(e, function (e) {
          return (e === n) !== r;
        })
      : "string" != typeof n
      ? S.grep(e, function (e) {
          return -1 < i.call(n, e) !== r;
        })
      : S.filter(n, e, r);
  }
  (S.filter = function (e, t, n) {
    var r = t[0];
    return (
      n && (e = ":not(" + e + ")"),
      1 === t.length && 1 === r.nodeType
        ? S.find.matchesSelector(r, e)
          ? [r]
          : []
        : S.find.matches(
            e,
            S.grep(t, function (e) {
              return 1 === e.nodeType;
            })
          )
    );
  }),
    S.fn.extend({
      find: function (e) {
        var t,
          n,
          r = this.length,
          i = this;
        if ("string" != typeof e)
          return this.pushStack(
            S(e).filter(function () {
              for (t = 0; t < r; t++) if (S.contains(i[t], this)) return !0;
            })
          );
        for (n = this.pushStack([]), t = 0; t < r; t++) S.find(e, i[t], n);
        return 1 < r ? S.uniqueSort(n) : n;
      },
      filter: function (e) {
        return this.pushStack(j(this, e || [], !1));
      },
      not: function (e) {
        return this.pushStack(j(this, e || [], !0));
      },
      is: function (e) {
        return !!j(this, "string" == typeof e && k.test(e) ? S(e) : e || [], !1)
          .length;
      },
    });
  var D,
    q = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
  ((S.fn.init = function (e, t, n) {
    var r, i;
    if (!e) return this;
    if (((n = n || D), "string" == typeof e)) {
      if (
        !(r =
          "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length
            ? [null, e, null]
            : q.exec(e)) ||
        (!r[1] && t)
      )
        return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
      if (r[1]) {
        if (
          ((t = t instanceof S ? t[0] : t),
          S.merge(
            this,
            S.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : E, !0)
          ),
          N.test(r[1]) && S.isPlainObject(t))
        )
          for (r in t) m(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
        return this;
      }
      return (
        (i = E.getElementById(r[2])) && ((this[0] = i), (this.length = 1)), this
      );
    }
    return e.nodeType
      ? ((this[0] = e), (this.length = 1), this)
      : m(e)
      ? void 0 !== n.ready
        ? n.ready(e)
        : e(S)
      : S.makeArray(e, this);
  }).prototype = S.fn),
    (D = S(E));
  var L = /^(?:parents|prev(?:Until|All))/,
    H = { children: !0, contents: !0, next: !0, prev: !0 };
  function O(e, t) {
    while ((e = e[t]) && 1 !== e.nodeType);
    return e;
  }
  S.fn.extend({
    has: function (e) {
      var t = S(e, this),
        n = t.length;
      return this.filter(function () {
        for (var e = 0; e < n; e++) if (S.contains(this, t[e])) return !0;
      });
    },
    closest: function (e, t) {
      var n,
        r = 0,
        i = this.length,
        o = [],
        a = "string" != typeof e && S(e);
      if (!k.test(e))
        for (; r < i; r++)
          for (n = this[r]; n && n !== t; n = n.parentNode)
            if (
              n.nodeType < 11 &&
              (a
                ? -1 < a.index(n)
                : 1 === n.nodeType && S.find.matchesSelector(n, e))
            ) {
              o.push(n);
              break;
            }
      return this.pushStack(1 < o.length ? S.uniqueSort(o) : o);
    },
    index: function (e) {
      return e
        ? "string" == typeof e
          ? i.call(S(e), this[0])
          : i.call(this, e.jquery ? e[0] : e)
        : this[0] && this[0].parentNode
        ? this.first().prevAll().length
        : -1;
    },
    add: function (e, t) {
      return this.pushStack(S.uniqueSort(S.merge(this.get(), S(e, t))));
    },
    addBack: function (e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    },
  }),
    S.each(
      {
        parent: function (e) {
          var t = e.parentNode;
          return t && 11 !== t.nodeType ? t : null;
        },
        parents: function (e) {
          return h(e, "parentNode");
        },
        parentsUntil: function (e, t, n) {
          return h(e, "parentNode", n);
        },
        next: function (e) {
          return O(e, "nextSibling");
        },
        prev: function (e) {
          return O(e, "previousSibling");
        },
        nextAll: function (e) {
          return h(e, "nextSibling");
        },
        prevAll: function (e) {
          return h(e, "previousSibling");
        },
        nextUntil: function (e, t, n) {
          return h(e, "nextSibling", n);
        },
        prevUntil: function (e, t, n) {
          return h(e, "previousSibling", n);
        },
        siblings: function (e) {
          return T((e.parentNode || {}).firstChild, e);
        },
        children: function (e) {
          return T(e.firstChild);
        },
        contents: function (e) {
          return null != e.contentDocument && r(e.contentDocument)
            ? e.contentDocument
            : (A(e, "template") && (e = e.content || e),
              S.merge([], e.childNodes));
        },
      },
      function (r, i) {
        S.fn[r] = function (e, t) {
          var n = S.map(this, i, e);
          return (
            "Until" !== r.slice(-5) && (t = e),
            t && "string" == typeof t && (n = S.filter(t, n)),
            1 < this.length &&
              (H[r] || S.uniqueSort(n), L.test(r) && n.reverse()),
            this.pushStack(n)
          );
        };
      }
    );
  var P = /[^\x20\t\r\n\f]+/g;
  function R(e) {
    return e;
  }
  function M(e) {
    throw e;
  }
  function I(e, t, n, r) {
    var i;
    try {
      e && m((i = e.promise))
        ? i.call(e).done(t).fail(n)
        : e && m((i = e.then))
        ? i.call(e, t, n)
        : t.apply(void 0, [e].slice(r));
    } catch (e) {
      n.apply(void 0, [e]);
    }
  }
  (S.Callbacks = function (r) {
    var e, n;
    r =
      "string" == typeof r
        ? ((e = r),
          (n = {}),
          S.each(e.match(P) || [], function (e, t) {
            n[t] = !0;
          }),
          n)
        : S.extend({}, r);
    var i,
      t,
      o,
      a,
      s = [],
      u = [],
      l = -1,
      c = function () {
        for (a = a || r.once, o = i = !0; u.length; l = -1) {
          t = u.shift();
          while (++l < s.length)
            !1 === s[l].apply(t[0], t[1]) &&
              r.stopOnFalse &&
              ((l = s.length), (t = !1));
        }
        r.memory || (t = !1), (i = !1), a && (s = t ? [] : "");
      },
      f = {
        add: function () {
          return (
            s &&
              (t && !i && ((l = s.length - 1), u.push(t)),
              (function n(e) {
                S.each(e, function (e, t) {
                  m(t)
                    ? (r.unique && f.has(t)) || s.push(t)
                    : t && t.length && "string" !== w(t) && n(t);
                });
              })(arguments),
              t && !i && c()),
            this
          );
        },
        remove: function () {
          return (
            S.each(arguments, function (e, t) {
              var n;
              while (-1 < (n = S.inArray(t, s, n)))
                s.splice(n, 1), n <= l && l--;
            }),
            this
          );
        },
        has: function (e) {
          return e ? -1 < S.inArray(e, s) : 0 < s.length;
        },
        empty: function () {
          return s && (s = []), this;
        },
        disable: function () {
          return (a = u = []), (s = t = ""), this;
        },
        disabled: function () {
          return !s;
        },
        lock: function () {
          return (a = u = []), t || i || (s = t = ""), this;
        },
        locked: function () {
          return !!a;
        },
        fireWith: function (e, t) {
          return (
            a ||
              ((t = [e, (t = t || []).slice ? t.slice() : t]),
              u.push(t),
              i || c()),
            this
          );
        },
        fire: function () {
          return f.fireWith(this, arguments), this;
        },
        fired: function () {
          return !!o;
        },
      };
    return f;
  }),
    S.extend({
      Deferred: function (e) {
        var o = [
            [
              "notify",
              "progress",
              S.Callbacks("memory"),
              S.Callbacks("memory"),
              2,
            ],
            [
              "resolve",
              "done",
              S.Callbacks("once memory"),
              S.Callbacks("once memory"),
              0,
              "resolved",
            ],
            [
              "reject",
              "fail",
              S.Callbacks("once memory"),
              S.Callbacks("once memory"),
              1,
              "rejected",
            ],
          ],
          i = "pending",
          a = {
            state: function () {
              return i;
            },
            always: function () {
              return s.done(arguments).fail(arguments), this;
            },
            catch: function (e) {
              return a.then(null, e);
            },
            pipe: function () {
              var i = arguments;
              return S.Deferred(function (r) {
                S.each(o, function (e, t) {
                  var n = m(i[t[4]]) && i[t[4]];
                  s[t[1]](function () {
                    var e = n && n.apply(this, arguments);
                    e && m(e.promise)
                      ? e
                          .promise()
                          .progress(r.notify)
                          .done(r.resolve)
                          .fail(r.reject)
                      : r[t[0] + "With"](this, n ? [e] : arguments);
                  });
                }),
                  (i = null);
              }).promise();
            },
            then: function (t, n, r) {
              var u = 0;
              function l(i, o, a, s) {
                return function () {
                  var n = this,
                    r = arguments,
                    e = function () {
                      var e, t;
                      if (!(i < u)) {
                        if ((e = a.apply(n, r)) === o.promise())
                          throw new TypeError("Thenable self-resolution");
                        (t =
                          e &&
                          ("object" == typeof e || "function" == typeof e) &&
                          e.then),
                          m(t)
                            ? s
                              ? t.call(e, l(u, o, R, s), l(u, o, M, s))
                              : (u++,
                                t.call(
                                  e,
                                  l(u, o, R, s),
                                  l(u, o, M, s),
                                  l(u, o, R, o.notifyWith)
                                ))
                            : (a !== R && ((n = void 0), (r = [e])),
                              (s || o.resolveWith)(n, r));
                      }
                    },
                    t = s
                      ? e
                      : function () {
                          try {
                            e();
                          } catch (e) {
                            S.Deferred.exceptionHook &&
                              S.Deferred.exceptionHook(e, t.stackTrace),
                              u <= i + 1 &&
                                (a !== M && ((n = void 0), (r = [e])),
                                o.rejectWith(n, r));
                          }
                        };
                  i
                    ? t()
                    : (S.Deferred.getStackHook &&
                        (t.stackTrace = S.Deferred.getStackHook()),
                      C.setTimeout(t));
                };
              }
              return S.Deferred(function (e) {
                o[0][3].add(l(0, e, m(r) ? r : R, e.notifyWith)),
                  o[1][3].add(l(0, e, m(t) ? t : R)),
                  o[2][3].add(l(0, e, m(n) ? n : M));
              }).promise();
            },
            promise: function (e) {
              return null != e ? S.extend(e, a) : a;
            },
          },
          s = {};
        return (
          S.each(o, function (e, t) {
            var n = t[2],
              r = t[5];
            (a[t[1]] = n.add),
              r &&
                n.add(
                  function () {
                    i = r;
                  },
                  o[3 - e][2].disable,
                  o[3 - e][3].disable,
                  o[0][2].lock,
                  o[0][3].lock
                ),
              n.add(t[3].fire),
              (s[t[0]] = function () {
                return (
                  s[t[0] + "With"](this === s ? void 0 : this, arguments), this
                );
              }),
              (s[t[0] + "With"] = n.fireWith);
          }),
          a.promise(s),
          e && e.call(s, s),
          s
        );
      },
      when: function (e) {
        var n = arguments.length,
          t = n,
          r = Array(t),
          i = s.call(arguments),
          o = S.Deferred(),
          a = function (t) {
            return function (e) {
              (r[t] = this),
                (i[t] = 1 < arguments.length ? s.call(arguments) : e),
                --n || o.resolveWith(r, i);
            };
          };
        if (
          n <= 1 &&
          (I(e, o.done(a(t)).resolve, o.reject, !n),
          "pending" === o.state() || m(i[t] && i[t].then))
        )
          return o.then();
        while (t--) I(i[t], a(t), o.reject);
        return o.promise();
      },
    });
  var W = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  (S.Deferred.exceptionHook = function (e, t) {
    C.console &&
      C.console.warn &&
      e &&
      W.test(e.name) &&
      C.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t);
  }),
    (S.readyException = function (e) {
      C.setTimeout(function () {
        throw e;
      });
    });
  var F = S.Deferred();
  function B() {
    E.removeEventListener("DOMContentLoaded", B),
      C.removeEventListener("load", B),
      S.ready();
  }
  (S.fn.ready = function (e) {
    return (
      F.then(e)["catch"](function (e) {
        S.readyException(e);
      }),
      this
    );
  }),
    S.extend({
      isReady: !1,
      readyWait: 1,
      ready: function (e) {
        (!0 === e ? --S.readyWait : S.isReady) ||
          ((S.isReady = !0) !== e && 0 < --S.readyWait) ||
          F.resolveWith(E, [S]);
      },
    }),
    (S.ready.then = F.then),
    "complete" === E.readyState ||
    ("loading" !== E.readyState && !E.documentElement.doScroll)
      ? C.setTimeout(S.ready)
      : (E.addEventListener("DOMContentLoaded", B),
        C.addEventListener("load", B));
  var $ = function (e, t, n, r, i, o, a) {
      var s = 0,
        u = e.length,
        l = null == n;
      if ("object" === w(n))
        for (s in ((i = !0), n)) $(e, t, s, n[s], !0, o, a);
      else if (
        void 0 !== r &&
        ((i = !0),
        m(r) || (a = !0),
        l &&
          (a
            ? (t.call(e, r), (t = null))
            : ((l = t),
              (t = function (e, t, n) {
                return l.call(S(e), n);
              }))),
        t)
      )
        for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
      return i ? e : l ? t.call(e) : u ? t(e[0], n) : o;
    },
    _ = /^-ms-/,
    z = /-([a-z])/g;
  function U(e, t) {
    return t.toUpperCase();
  }
  function X(e) {
    return e.replace(_, "ms-").replace(z, U);
  }
  var V = function (e) {
    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
  };
  function G() {
    this.expando = S.expando + G.uid++;
  }
  (G.uid = 1),
    (G.prototype = {
      cache: function (e) {
        var t = e[this.expando];
        return (
          t ||
            ((t = {}),
            V(e) &&
              (e.nodeType
                ? (e[this.expando] = t)
                : Object.defineProperty(e, this.expando, {
                    value: t,
                    configurable: !0,
                  }))),
          t
        );
      },
      set: function (e, t, n) {
        var r,
          i = this.cache(e);
        if ("string" == typeof t) i[X(t)] = n;
        else for (r in t) i[X(r)] = t[r];
        return i;
      },
      get: function (e, t) {
        return void 0 === t
          ? this.cache(e)
          : e[this.expando] && e[this.expando][X(t)];
      },
      access: function (e, t, n) {
        return void 0 === t || (t && "string" == typeof t && void 0 === n)
          ? this.get(e, t)
          : (this.set(e, t, n), void 0 !== n ? n : t);
      },
      remove: function (e, t) {
        var n,
          r = e[this.expando];
        if (void 0 !== r) {
          if (void 0 !== t) {
            n = (t = Array.isArray(t)
              ? t.map(X)
              : (t = X(t)) in r
              ? [t]
              : t.match(P) || []).length;
            while (n--) delete r[t[n]];
          }
          (void 0 === t || S.isEmptyObject(r)) &&
            (e.nodeType ? (e[this.expando] = void 0) : delete e[this.expando]);
        }
      },
      hasData: function (e) {
        var t = e[this.expando];
        return void 0 !== t && !S.isEmptyObject(t);
      },
    });
  var Y = new G(),
    Q = new G(),
    J = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    K = /[A-Z]/g;
  function Z(e, t, n) {
    var r, i;
    if (void 0 === n && 1 === e.nodeType)
      if (
        ((r = "data-" + t.replace(K, "-$&").toLowerCase()),
        "string" == typeof (n = e.getAttribute(r)))
      ) {
        try {
          n =
            "true" === (i = n) ||
            ("false" !== i &&
              ("null" === i
                ? null
                : i === +i + ""
                ? +i
                : J.test(i)
                ? JSON.parse(i)
                : i));
        } catch (e) {}
        Q.set(e, t, n);
      } else n = void 0;
    return n;
  }
  S.extend({
    hasData: function (e) {
      return Q.hasData(e) || Y.hasData(e);
    },
    data: function (e, t, n) {
      return Q.access(e, t, n);
    },
    removeData: function (e, t) {
      Q.remove(e, t);
    },
    _data: function (e, t, n) {
      return Y.access(e, t, n);
    },
    _removeData: function (e, t) {
      Y.remove(e, t);
    },
  }),
    S.fn.extend({
      data: function (n, e) {
        var t,
          r,
          i,
          o = this[0],
          a = o && o.attributes;
        if (void 0 === n) {
          if (
            this.length &&
            ((i = Q.get(o)), 1 === o.nodeType && !Y.get(o, "hasDataAttrs"))
          ) {
            t = a.length;
            while (t--)
              a[t] &&
                0 === (r = a[t].name).indexOf("data-") &&
                ((r = X(r.slice(5))), Z(o, r, i[r]));
            Y.set(o, "hasDataAttrs", !0);
          }
          return i;
        }
        return "object" == typeof n
          ? this.each(function () {
              Q.set(this, n);
            })
          : $(
              this,
              function (e) {
                var t;
                if (o && void 0 === e)
                  return void 0 !== (t = Q.get(o, n))
                    ? t
                    : void 0 !== (t = Z(o, n))
                    ? t
                    : void 0;
                this.each(function () {
                  Q.set(this, n, e);
                });
              },
              null,
              e,
              1 < arguments.length,
              null,
              !0
            );
      },
      removeData: function (e) {
        return this.each(function () {
          Q.remove(this, e);
        });
      },
    }),
    S.extend({
      queue: function (e, t, n) {
        var r;
        if (e)
          return (
            (t = (t || "fx") + "queue"),
            (r = Y.get(e, t)),
            n &&
              (!r || Array.isArray(n)
                ? (r = Y.access(e, t, S.makeArray(n)))
                : r.push(n)),
            r || []
          );
      },
      dequeue: function (e, t) {
        t = t || "fx";
        var n = S.queue(e, t),
          r = n.length,
          i = n.shift(),
          o = S._queueHooks(e, t);
        "inprogress" === i && ((i = n.shift()), r--),
          i &&
            ("fx" === t && n.unshift("inprogress"),
            delete o.stop,
            i.call(
              e,
              function () {
                S.dequeue(e, t);
              },
              o
            )),
          !r && o && o.empty.fire();
      },
      _queueHooks: function (e, t) {
        var n = t + "queueHooks";
        return (
          Y.get(e, n) ||
          Y.access(e, n, {
            empty: S.Callbacks("once memory").add(function () {
              Y.remove(e, [t + "queue", n]);
            }),
          })
        );
      },
    }),
    S.fn.extend({
      queue: function (t, n) {
        var e = 2;
        return (
          "string" != typeof t && ((n = t), (t = "fx"), e--),
          arguments.length < e
            ? S.queue(this[0], t)
            : void 0 === n
            ? this
            : this.each(function () {
                var e = S.queue(this, t, n);
                S._queueHooks(this, t),
                  "fx" === t && "inprogress" !== e[0] && S.dequeue(this, t);
              })
        );
      },
      dequeue: function (e) {
        return this.each(function () {
          S.dequeue(this, e);
        });
      },
      clearQueue: function (e) {
        return this.queue(e || "fx", []);
      },
      promise: function (e, t) {
        var n,
          r = 1,
          i = S.Deferred(),
          o = this,
          a = this.length,
          s = function () {
            --r || i.resolveWith(o, [o]);
          };
        "string" != typeof e && ((t = e), (e = void 0)), (e = e || "fx");
        while (a--)
          (n = Y.get(o[a], e + "queueHooks")) &&
            n.empty &&
            (r++, n.empty.add(s));
        return s(), i.promise(t);
      },
    });
  var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$", "i"),
    ne = ["Top", "Right", "Bottom", "Left"],
    re = E.documentElement,
    ie = function (e) {
      return S.contains(e.ownerDocument, e);
    },
    oe = { composed: !0 };
  re.getRootNode &&
    (ie = function (e) {
      return (
        S.contains(e.ownerDocument, e) || e.getRootNode(oe) === e.ownerDocument
      );
    });
  var ae = function (e, t) {
    return (
      "none" === (e = t || e).style.display ||
      ("" === e.style.display && ie(e) && "none" === S.css(e, "display"))
    );
  };
  function se(e, t, n, r) {
    var i,
      o,
      a = 20,
      s = r
        ? function () {
            return r.cur();
          }
        : function () {
            return S.css(e, t, "");
          },
      u = s(),
      l = (n && n[3]) || (S.cssNumber[t] ? "" : "px"),
      c =
        e.nodeType &&
        (S.cssNumber[t] || ("px" !== l && +u)) &&
        te.exec(S.css(e, t));
    if (c && c[3] !== l) {
      (u /= 2), (l = l || c[3]), (c = +u || 1);
      while (a--)
        S.style(e, t, c + l),
          (1 - o) * (1 - (o = s() / u || 0.5)) <= 0 && (a = 0),
          (c /= o);
      (c *= 2), S.style(e, t, c + l), (n = n || []);
    }
    return (
      n &&
        ((c = +c || +u || 0),
        (i = n[1] ? c + (n[1] + 1) * n[2] : +n[2]),
        r && ((r.unit = l), (r.start = c), (r.end = i))),
      i
    );
  }
  var ue = {};
  function le(e, t) {
    for (var n, r, i, o, a, s, u, l = [], c = 0, f = e.length; c < f; c++)
      (r = e[c]).style &&
        ((n = r.style.display),
        t
          ? ("none" === n &&
              ((l[c] = Y.get(r, "display") || null),
              l[c] || (r.style.display = "")),
            "" === r.style.display &&
              ae(r) &&
              (l[c] =
                ((u = a = o = void 0),
                (a = (i = r).ownerDocument),
                (s = i.nodeName),
                (u = ue[s]) ||
                  ((o = a.body.appendChild(a.createElement(s))),
                  (u = S.css(o, "display")),
                  o.parentNode.removeChild(o),
                  "none" === u && (u = "block"),
                  (ue[s] = u)))))
          : "none" !== n && ((l[c] = "none"), Y.set(r, "display", n)));
    for (c = 0; c < f; c++) null != l[c] && (e[c].style.display = l[c]);
    return e;
  }
  S.fn.extend({
    show: function () {
      return le(this, !0);
    },
    hide: function () {
      return le(this);
    },
    toggle: function (e) {
      return "boolean" == typeof e
        ? e
          ? this.show()
          : this.hide()
        : this.each(function () {
            ae(this) ? S(this).show() : S(this).hide();
          });
    },
  });
  var ce,
    fe,
    pe = /^(?:checkbox|radio)$/i,
    de = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
    he = /^$|^module$|\/(?:java|ecma)script/i;
  (ce = E.createDocumentFragment().appendChild(E.createElement("div"))),
    (fe = E.createElement("input")).setAttribute("type", "radio"),
    fe.setAttribute("checked", "checked"),
    fe.setAttribute("name", "t"),
    ce.appendChild(fe),
    (y.checkClone = ce.cloneNode(!0).cloneNode(!0).lastChild.checked),
    (ce.innerHTML = "<textarea>x</textarea>"),
    (y.noCloneChecked = !!ce.cloneNode(!0).lastChild.defaultValue),
    (ce.innerHTML = "<option></option>"),
    (y.option = !!ce.lastChild);
  var ge = {
    thead: [1, "<table>", "</table>"],
    col: [2, "<table><colgroup>", "</colgroup></table>"],
    tr: [2, "<table><tbody>", "</tbody></table>"],
    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    _default: [0, "", ""],
  };
  function ve(e, t) {
    var n;
    return (
      (n =
        "undefined" != typeof e.getElementsByTagName
          ? e.getElementsByTagName(t || "*")
          : "undefined" != typeof e.querySelectorAll
          ? e.querySelectorAll(t || "*")
          : []),
      void 0 === t || (t && A(e, t)) ? S.merge([e], n) : n
    );
  }
  function ye(e, t) {
    for (var n = 0, r = e.length; n < r; n++)
      Y.set(e[n], "globalEval", !t || Y.get(t[n], "globalEval"));
  }
  (ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead),
    (ge.th = ge.td),
    y.option ||
      (ge.optgroup = ge.option =
        [1, "<select multiple='multiple'>", "</select>"]);
  var me = /<|&#?\w+;/;
  function xe(e, t, n, r, i) {
    for (
      var o,
        a,
        s,
        u,
        l,
        c,
        f = t.createDocumentFragment(),
        p = [],
        d = 0,
        h = e.length;
      d < h;
      d++
    )
      if ((o = e[d]) || 0 === o)
        if ("object" === w(o)) S.merge(p, o.nodeType ? [o] : o);
        else if (me.test(o)) {
          (a = a || f.appendChild(t.createElement("div"))),
            (s = (de.exec(o) || ["", ""])[1].toLowerCase()),
            (u = ge[s] || ge._default),
            (a.innerHTML = u[1] + S.htmlPrefilter(o) + u[2]),
            (c = u[0]);
          while (c--) a = a.lastChild;
          S.merge(p, a.childNodes), ((a = f.firstChild).textContent = "");
        } else p.push(t.createTextNode(o));
    (f.textContent = ""), (d = 0);
    while ((o = p[d++]))
      if (r && -1 < S.inArray(o, r)) i && i.push(o);
      else if (
        ((l = ie(o)), (a = ve(f.appendChild(o), "script")), l && ye(a), n)
      ) {
        c = 0;
        while ((o = a[c++])) he.test(o.type || "") && n.push(o);
      }
    return f;
  }
  var be = /^([^.]*)(?:\.(.+)|)/;
  function we() {
    return !0;
  }
  function Te() {
    return !1;
  }
  function Ce(e, t) {
    return (
      (e ===
        (function () {
          try {
            return E.activeElement;
          } catch (e) {}
        })()) ==
      ("focus" === t)
    );
  }
  function Ee(e, t, n, r, i, o) {
    var a, s;
    if ("object" == typeof t) {
      for (s in ("string" != typeof n && ((r = r || n), (n = void 0)), t))
        Ee(e, s, n, r, t[s], o);
      return e;
    }
    if (
      (null == r && null == i
        ? ((i = n), (r = n = void 0))
        : null == i &&
          ("string" == typeof n
            ? ((i = r), (r = void 0))
            : ((i = r), (r = n), (n = void 0))),
      !1 === i)
    )
      i = Te;
    else if (!i) return e;
    return (
      1 === o &&
        ((a = i),
        ((i = function (e) {
          return S().off(e), a.apply(this, arguments);
        }).guid = a.guid || (a.guid = S.guid++))),
      e.each(function () {
        S.event.add(this, t, i, r, n);
      })
    );
  }
  function Se(e, i, o) {
    o
      ? (Y.set(e, i, !1),
        S.event.add(e, i, {
          namespace: !1,
          handler: function (e) {
            var t,
              n,
              r = Y.get(this, i);
            if (1 & e.isTrigger && this[i]) {
              if (r.length)
                (S.event.special[i] || {}).delegateType && e.stopPropagation();
              else if (
                ((r = s.call(arguments)),
                Y.set(this, i, r),
                (t = o(this, i)),
                this[i](),
                r !== (n = Y.get(this, i)) || t ? Y.set(this, i, !1) : (n = {}),
                r !== n)
              )
                return (
                  e.stopImmediatePropagation(), e.preventDefault(), n && n.value
                );
            } else
              r.length &&
                (Y.set(this, i, {
                  value: S.event.trigger(
                    S.extend(r[0], S.Event.prototype),
                    r.slice(1),
                    this
                  ),
                }),
                e.stopImmediatePropagation());
          },
        }))
      : void 0 === Y.get(e, i) && S.event.add(e, i, we);
  }
  (S.event = {
    global: {},
    add: function (t, e, n, r, i) {
      var o,
        a,
        s,
        u,
        l,
        c,
        f,
        p,
        d,
        h,
        g,
        v = Y.get(t);
      if (V(t)) {
        n.handler && ((n = (o = n).handler), (i = o.selector)),
          i && S.find.matchesSelector(re, i),
          n.guid || (n.guid = S.guid++),
          (u = v.events) || (u = v.events = Object.create(null)),
          (a = v.handle) ||
            (a = v.handle =
              function (e) {
                return "undefined" != typeof S && S.event.triggered !== e.type
                  ? S.event.dispatch.apply(t, arguments)
                  : void 0;
              }),
          (l = (e = (e || "").match(P) || [""]).length);
        while (l--)
          (d = g = (s = be.exec(e[l]) || [])[1]),
            (h = (s[2] || "").split(".").sort()),
            d &&
              ((f = S.event.special[d] || {}),
              (d = (i ? f.delegateType : f.bindType) || d),
              (f = S.event.special[d] || {}),
              (c = S.extend(
                {
                  type: d,
                  origType: g,
                  data: r,
                  handler: n,
                  guid: n.guid,
                  selector: i,
                  needsContext: i && S.expr.match.needsContext.test(i),
                  namespace: h.join("."),
                },
                o
              )),
              (p = u[d]) ||
                (((p = u[d] = []).delegateCount = 0),
                (f.setup && !1 !== f.setup.call(t, r, h, a)) ||
                  (t.addEventListener && t.addEventListener(d, a))),
              f.add &&
                (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)),
              i ? p.splice(p.delegateCount++, 0, c) : p.push(c),
              (S.event.global[d] = !0));
      }
    },
    remove: function (e, t, n, r, i) {
      var o,
        a,
        s,
        u,
        l,
        c,
        f,
        p,
        d,
        h,
        g,
        v = Y.hasData(e) && Y.get(e);
      if (v && (u = v.events)) {
        l = (t = (t || "").match(P) || [""]).length;
        while (l--)
          if (
            ((d = g = (s = be.exec(t[l]) || [])[1]),
            (h = (s[2] || "").split(".").sort()),
            d)
          ) {
            (f = S.event.special[d] || {}),
              (p = u[(d = (r ? f.delegateType : f.bindType) || d)] || []),
              (s =
                s[2] &&
                new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)")),
              (a = o = p.length);
            while (o--)
              (c = p[o]),
                (!i && g !== c.origType) ||
                  (n && n.guid !== c.guid) ||
                  (s && !s.test(c.namespace)) ||
                  (r && r !== c.selector && ("**" !== r || !c.selector)) ||
                  (p.splice(o, 1),
                  c.selector && p.delegateCount--,
                  f.remove && f.remove.call(e, c));
            a &&
              !p.length &&
              ((f.teardown && !1 !== f.teardown.call(e, h, v.handle)) ||
                S.removeEvent(e, d, v.handle),
              delete u[d]);
          } else for (d in u) S.event.remove(e, d + t[l], n, r, !0);
        S.isEmptyObject(u) && Y.remove(e, "handle events");
      }
    },
    dispatch: function (e) {
      var t,
        n,
        r,
        i,
        o,
        a,
        s = new Array(arguments.length),
        u = S.event.fix(e),
        l = (Y.get(this, "events") || Object.create(null))[u.type] || [],
        c = S.event.special[u.type] || {};
      for (s[0] = u, t = 1; t < arguments.length; t++) s[t] = arguments[t];
      if (
        ((u.delegateTarget = this),
        !c.preDispatch || !1 !== c.preDispatch.call(this, u))
      ) {
        (a = S.event.handlers.call(this, u, l)), (t = 0);
        while ((i = a[t++]) && !u.isPropagationStopped()) {
          (u.currentTarget = i.elem), (n = 0);
          while ((o = i.handlers[n++]) && !u.isImmediatePropagationStopped())
            (u.rnamespace &&
              !1 !== o.namespace &&
              !u.rnamespace.test(o.namespace)) ||
              ((u.handleObj = o),
              (u.data = o.data),
              void 0 !==
                (r = (
                  (S.event.special[o.origType] || {}).handle || o.handler
                ).apply(i.elem, s)) &&
                !1 === (u.result = r) &&
                (u.preventDefault(), u.stopPropagation()));
        }
        return c.postDispatch && c.postDispatch.call(this, u), u.result;
      }
    },
    handlers: function (e, t) {
      var n,
        r,
        i,
        o,
        a,
        s = [],
        u = t.delegateCount,
        l = e.target;
      if (u && l.nodeType && !("click" === e.type && 1 <= e.button))
        for (; l !== this; l = l.parentNode || this)
          if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
            for (o = [], a = {}, n = 0; n < u; n++)
              void 0 === a[(i = (r = t[n]).selector + " ")] &&
                (a[i] = r.needsContext
                  ? -1 < S(i, this).index(l)
                  : S.find(i, this, null, [l]).length),
                a[i] && o.push(r);
            o.length && s.push({ elem: l, handlers: o });
          }
      return (
        (l = this), u < t.length && s.push({ elem: l, handlers: t.slice(u) }), s
      );
    },
    addProp: function (t, e) {
      Object.defineProperty(S.Event.prototype, t, {
        enumerable: !0,
        configurable: !0,
        get: m(e)
          ? function () {
              if (this.originalEvent) return e(this.originalEvent);
            }
          : function () {
              if (this.originalEvent) return this.originalEvent[t];
            },
        set: function (e) {
          Object.defineProperty(this, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: e,
          });
        },
      });
    },
    fix: function (e) {
      return e[S.expando] ? e : new S.Event(e);
    },
    special: {
      load: { noBubble: !0 },
      click: {
        setup: function (e) {
          var t = this || e;
          return (
            pe.test(t.type) && t.click && A(t, "input") && Se(t, "click", we),
            !1
          );
        },
        trigger: function (e) {
          var t = this || e;
          return (
            pe.test(t.type) && t.click && A(t, "input") && Se(t, "click"), !0
          );
        },
        _default: function (e) {
          var t = e.target;
          return (
            (pe.test(t.type) &&
              t.click &&
              A(t, "input") &&
              Y.get(t, "click")) ||
            A(t, "a")
          );
        },
      },
      beforeunload: {
        postDispatch: function (e) {
          void 0 !== e.result &&
            e.originalEvent &&
            (e.originalEvent.returnValue = e.result);
        },
      },
    },
  }),
    (S.removeEvent = function (e, t, n) {
      e.removeEventListener && e.removeEventListener(t, n);
    }),
    (S.Event = function (e, t) {
      if (!(this instanceof S.Event)) return new S.Event(e, t);
      e && e.type
        ? ((this.originalEvent = e),
          (this.type = e.type),
          (this.isDefaultPrevented =
            e.defaultPrevented ||
            (void 0 === e.defaultPrevented && !1 === e.returnValue)
              ? we
              : Te),
          (this.target =
            e.target && 3 === e.target.nodeType
              ? e.target.parentNode
              : e.target),
          (this.currentTarget = e.currentTarget),
          (this.relatedTarget = e.relatedTarget))
        : (this.type = e),
        t && S.extend(this, t),
        (this.timeStamp = (e && e.timeStamp) || Date.now()),
        (this[S.expando] = !0);
    }),
    (S.Event.prototype = {
      constructor: S.Event,
      isDefaultPrevented: Te,
      isPropagationStopped: Te,
      isImmediatePropagationStopped: Te,
      isSimulated: !1,
      preventDefault: function () {
        var e = this.originalEvent;
        (this.isDefaultPrevented = we),
          e && !this.isSimulated && e.preventDefault();
      },
      stopPropagation: function () {
        var e = this.originalEvent;
        (this.isPropagationStopped = we),
          e && !this.isSimulated && e.stopPropagation();
      },
      stopImmediatePropagation: function () {
        var e = this.originalEvent;
        (this.isImmediatePropagationStopped = we),
          e && !this.isSimulated && e.stopImmediatePropagation(),
          this.stopPropagation();
      },
    }),
    S.each(
      {
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: !0,
      },
      S.event.addProp
    ),
    S.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
      S.event.special[e] = {
        setup: function () {
          return Se(this, e, Ce), !1;
        },
        trigger: function () {
          return Se(this, e), !0;
        },
        _default: function () {
          return !0;
        },
        delegateType: t,
      };
    }),
    S.each(
      {
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout",
      },
      function (e, i) {
        S.event.special[e] = {
          delegateType: i,
          bindType: i,
          handle: function (e) {
            var t,
              n = e.relatedTarget,
              r = e.handleObj;
            return (
              (n && (n === this || S.contains(this, n))) ||
                ((e.type = r.origType),
                (t = r.handler.apply(this, arguments)),
                (e.type = i)),
              t
            );
          },
        };
      }
    ),
    S.fn.extend({
      on: function (e, t, n, r) {
        return Ee(this, e, t, n, r);
      },
      one: function (e, t, n, r) {
        return Ee(this, e, t, n, r, 1);
      },
      off: function (e, t, n) {
        var r, i;
        if (e && e.preventDefault && e.handleObj)
          return (
            (r = e.handleObj),
            S(e.delegateTarget).off(
              r.namespace ? r.origType + "." + r.namespace : r.origType,
              r.selector,
              r.handler
            ),
            this
          );
        if ("object" == typeof e) {
          for (i in e) this.off(i, t, e[i]);
          return this;
        }
        return (
          (!1 !== t && "function" != typeof t) || ((n = t), (t = void 0)),
          !1 === n && (n = Te),
          this.each(function () {
            S.event.remove(this, e, n, t);
          })
        );
      },
    });
  var ke = /<script|<style|<link/i,
    Ae = /checked\s*(?:[^=]|=\s*.checked.)/i,
    Ne = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
  function je(e, t) {
    return (
      (A(e, "table") &&
        A(11 !== t.nodeType ? t : t.firstChild, "tr") &&
        S(e).children("tbody")[0]) ||
      e
    );
  }
  function De(e) {
    return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
  }
  function qe(e) {
    return (
      "true/" === (e.type || "").slice(0, 5)
        ? (e.type = e.type.slice(5))
        : e.removeAttribute("type"),
      e
    );
  }
  function Le(e, t) {
    var n, r, i, o, a, s;
    if (1 === t.nodeType) {
      if (Y.hasData(e) && (s = Y.get(e).events))
        for (i in (Y.remove(t, "handle events"), s))
          for (n = 0, r = s[i].length; n < r; n++) S.event.add(t, i, s[i][n]);
      Q.hasData(e) && ((o = Q.access(e)), (a = S.extend({}, o)), Q.set(t, a));
    }
  }
  function He(n, r, i, o) {
    r = g(r);
    var e,
      t,
      a,
      s,
      u,
      l,
      c = 0,
      f = n.length,
      p = f - 1,
      d = r[0],
      h = m(d);
    if (h || (1 < f && "string" == typeof d && !y.checkClone && Ae.test(d)))
      return n.each(function (e) {
        var t = n.eq(e);
        h && (r[0] = d.call(this, e, t.html())), He(t, r, i, o);
      });
    if (
      f &&
      ((t = (e = xe(r, n[0].ownerDocument, !1, n, o)).firstChild),
      1 === e.childNodes.length && (e = t),
      t || o)
    ) {
      for (s = (a = S.map(ve(e, "script"), De)).length; c < f; c++)
        (u = e),
          c !== p &&
            ((u = S.clone(u, !0, !0)), s && S.merge(a, ve(u, "script"))),
          i.call(n[c], u, c);
      if (s)
        for (l = a[a.length - 1].ownerDocument, S.map(a, qe), c = 0; c < s; c++)
          (u = a[c]),
            he.test(u.type || "") &&
              !Y.access(u, "globalEval") &&
              S.contains(l, u) &&
              (u.src && "module" !== (u.type || "").toLowerCase()
                ? S._evalUrl &&
                  !u.noModule &&
                  S._evalUrl(
                    u.src,
                    { nonce: u.nonce || u.getAttribute("nonce") },
                    l
                  )
                : b(u.textContent.replace(Ne, ""), u, l));
    }
    return n;
  }
  function Oe(e, t, n) {
    for (var r, i = t ? S.filter(t, e) : e, o = 0; null != (r = i[o]); o++)
      n || 1 !== r.nodeType || S.cleanData(ve(r)),
        r.parentNode &&
          (n && ie(r) && ye(ve(r, "script")), r.parentNode.removeChild(r));
    return e;
  }
  S.extend({
    htmlPrefilter: function (e) {
      return e;
    },
    clone: function (e, t, n) {
      var r,
        i,
        o,
        a,
        s,
        u,
        l,
        c = e.cloneNode(!0),
        f = ie(e);
      if (
        !(
          y.noCloneChecked ||
          (1 !== e.nodeType && 11 !== e.nodeType) ||
          S.isXMLDoc(e)
        )
      )
        for (a = ve(c), r = 0, i = (o = ve(e)).length; r < i; r++)
          (s = o[r]),
            (u = a[r]),
            void 0,
            "input" === (l = u.nodeName.toLowerCase()) && pe.test(s.type)
              ? (u.checked = s.checked)
              : ("input" !== l && "textarea" !== l) ||
                (u.defaultValue = s.defaultValue);
      if (t)
        if (n)
          for (o = o || ve(e), a = a || ve(c), r = 0, i = o.length; r < i; r++)
            Le(o[r], a[r]);
        else Le(e, c);
      return (
        0 < (a = ve(c, "script")).length && ye(a, !f && ve(e, "script")), c
      );
    },
    cleanData: function (e) {
      for (var t, n, r, i = S.event.special, o = 0; void 0 !== (n = e[o]); o++)
        if (V(n)) {
          if ((t = n[Y.expando])) {
            if (t.events)
              for (r in t.events)
                i[r] ? S.event.remove(n, r) : S.removeEvent(n, r, t.handle);
            n[Y.expando] = void 0;
          }
          n[Q.expando] && (n[Q.expando] = void 0);
        }
    },
  }),
    S.fn.extend({
      detach: function (e) {
        return Oe(this, e, !0);
      },
      remove: function (e) {
        return Oe(this, e);
      },
      text: function (e) {
        return $(
          this,
          function (e) {
            return void 0 === e
              ? S.text(this)
              : this.empty().each(function () {
                  (1 !== this.nodeType &&
                    11 !== this.nodeType &&
                    9 !== this.nodeType) ||
                    (this.textContent = e);
                });
          },
          null,
          e,
          arguments.length
        );
      },
      append: function () {
        return He(this, arguments, function (e) {
          (1 !== this.nodeType &&
            11 !== this.nodeType &&
            9 !== this.nodeType) ||
            je(this, e).appendChild(e);
        });
      },
      prepend: function () {
        return He(this, arguments, function (e) {
          if (
            1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType
          ) {
            var t = je(this, e);
            t.insertBefore(e, t.firstChild);
          }
        });
      },
      before: function () {
        return He(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this);
        });
      },
      after: function () {
        return He(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
        });
      },
      empty: function () {
        for (var e, t = 0; null != (e = this[t]); t++)
          1 === e.nodeType && (S.cleanData(ve(e, !1)), (e.textContent = ""));
        return this;
      },
      clone: function (e, t) {
        return (
          (e = null != e && e),
          (t = null == t ? e : t),
          this.map(function () {
            return S.clone(this, e, t);
          })
        );
      },
      html: function (e) {
        return $(
          this,
          function (e) {
            var t = this[0] || {},
              n = 0,
              r = this.length;
            if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
            if (
              "string" == typeof e &&
              !ke.test(e) &&
              !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]
            ) {
              e = S.htmlPrefilter(e);
              try {
                for (; n < r; n++)
                  1 === (t = this[n] || {}).nodeType &&
                    (S.cleanData(ve(t, !1)), (t.innerHTML = e));
                t = 0;
              } catch (e) {}
            }
            t && this.empty().append(e);
          },
          null,
          e,
          arguments.length
        );
      },
      replaceWith: function () {
        var n = [];
        return He(
          this,
          arguments,
          function (e) {
            var t = this.parentNode;
            S.inArray(this, n) < 0 &&
              (S.cleanData(ve(this)), t && t.replaceChild(e, this));
          },
          n
        );
      },
    }),
    S.each(
      {
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith",
      },
      function (e, a) {
        S.fn[e] = function (e) {
          for (var t, n = [], r = S(e), i = r.length - 1, o = 0; o <= i; o++)
            (t = o === i ? this : this.clone(!0)),
              S(r[o])[a](t),
              u.apply(n, t.get());
          return this.pushStack(n);
        };
      }
    );
  var Pe = new RegExp("^(" + ee + ")(?!px)[a-z%]+$", "i"),
    Re = function (e) {
      var t = e.ownerDocument.defaultView;
      return (t && t.opener) || (t = C), t.getComputedStyle(e);
    },
    Me = function (e, t, n) {
      var r,
        i,
        o = {};
      for (i in t) (o[i] = e.style[i]), (e.style[i] = t[i]);
      for (i in ((r = n.call(e)), t)) e.style[i] = o[i];
      return r;
    },
    Ie = new RegExp(ne.join("|"), "i");
  function We(e, t, n) {
    var r,
      i,
      o,
      a,
      s = e.style;
    return (
      (n = n || Re(e)) &&
        ("" !== (a = n.getPropertyValue(t) || n[t]) ||
          ie(e) ||
          (a = S.style(e, t)),
        !y.pixelBoxStyles() &&
          Pe.test(a) &&
          Ie.test(t) &&
          ((r = s.width),
          (i = s.minWidth),
          (o = s.maxWidth),
          (s.minWidth = s.maxWidth = s.width = a),
          (a = n.width),
          (s.width = r),
          (s.minWidth = i),
          (s.maxWidth = o))),
      void 0 !== a ? a + "" : a
    );
  }
  function Fe(e, t) {
    return {
      get: function () {
        if (!e()) return (this.get = t).apply(this, arguments);
        delete this.get;
      },
    };
  }
  !(function () {
    function e() {
      if (l) {
        (u.style.cssText =
          "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
          (l.style.cssText =
            "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
          re.appendChild(u).appendChild(l);
        var e = C.getComputedStyle(l);
        (n = "1%" !== e.top),
          (s = 12 === t(e.marginLeft)),
          (l.style.right = "60%"),
          (o = 36 === t(e.right)),
          (r = 36 === t(e.width)),
          (l.style.position = "absolute"),
          (i = 12 === t(l.offsetWidth / 3)),
          re.removeChild(u),
          (l = null);
      }
    }
    function t(e) {
      return Math.round(parseFloat(e));
    }
    var n,
      r,
      i,
      o,
      a,
      s,
      u = E.createElement("div"),
      l = E.createElement("div");
    l.style &&
      ((l.style.backgroundClip = "content-box"),
      (l.cloneNode(!0).style.backgroundClip = ""),
      (y.clearCloneStyle = "content-box" === l.style.backgroundClip),
      S.extend(y, {
        boxSizingReliable: function () {
          return e(), r;
        },
        pixelBoxStyles: function () {
          return e(), o;
        },
        pixelPosition: function () {
          return e(), n;
        },
        reliableMarginLeft: function () {
          return e(), s;
        },
        scrollboxSize: function () {
          return e(), i;
        },
        reliableTrDimensions: function () {
          var e, t, n, r;
          return (
            null == a &&
              ((e = E.createElement("table")),
              (t = E.createElement("tr")),
              (n = E.createElement("div")),
              (e.style.cssText =
                "position:absolute;left:-11111px;border-collapse:separate"),
              (t.style.cssText = "border:1px solid"),
              (t.style.height = "1px"),
              (n.style.height = "9px"),
              (n.style.display = "block"),
              re.appendChild(e).appendChild(t).appendChild(n),
              (r = C.getComputedStyle(t)),
              (a =
                parseInt(r.height, 10) +
                  parseInt(r.borderTopWidth, 10) +
                  parseInt(r.borderBottomWidth, 10) ===
                t.offsetHeight),
              re.removeChild(e)),
            a
          );
        },
      }));
  })();
  var Be = ["Webkit", "Moz", "ms"],
    $e = E.createElement("div").style,
    _e = {};
  function ze(e) {
    var t = S.cssProps[e] || _e[e];
    return (
      t ||
      (e in $e
        ? e
        : (_e[e] =
            (function (e) {
              var t = e[0].toUpperCase() + e.slice(1),
                n = Be.length;
              while (n--) if ((e = Be[n] + t) in $e) return e;
            })(e) || e))
    );
  }
  var Ue = /^(none|table(?!-c[ea]).+)/,
    Xe = /^--/,
    Ve = { position: "absolute", visibility: "hidden", display: "block" },
    Ge = { letterSpacing: "0", fontWeight: "400" };
  function Ye(e, t, n) {
    var r = te.exec(t);
    return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
  }
  function Qe(e, t, n, r, i, o) {
    var a = "width" === t ? 1 : 0,
      s = 0,
      u = 0;
    if (n === (r ? "border" : "content")) return 0;
    for (; a < 4; a += 2)
      "margin" === n && (u += S.css(e, n + ne[a], !0, i)),
        r
          ? ("content" === n && (u -= S.css(e, "padding" + ne[a], !0, i)),
            "margin" !== n &&
              (u -= S.css(e, "border" + ne[a] + "Width", !0, i)))
          : ((u += S.css(e, "padding" + ne[a], !0, i)),
            "padding" !== n
              ? (u += S.css(e, "border" + ne[a] + "Width", !0, i))
              : (s += S.css(e, "border" + ne[a] + "Width", !0, i)));
    return (
      !r &&
        0 <= o &&
        (u +=
          Math.max(
            0,
            Math.ceil(
              e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - 0.5
            )
          ) || 0),
      u
    );
  }
  function Je(e, t, n) {
    var r = Re(e),
      i =
        (!y.boxSizingReliable() || n) &&
        "border-box" === S.css(e, "boxSizing", !1, r),
      o = i,
      a = We(e, t, r),
      s = "offset" + t[0].toUpperCase() + t.slice(1);
    if (Pe.test(a)) {
      if (!n) return a;
      a = "auto";
    }
    return (
      ((!y.boxSizingReliable() && i) ||
        (!y.reliableTrDimensions() && A(e, "tr")) ||
        "auto" === a ||
        (!parseFloat(a) && "inline" === S.css(e, "display", !1, r))) &&
        e.getClientRects().length &&
        ((i = "border-box" === S.css(e, "boxSizing", !1, r)),
        (o = s in e) && (a = e[s])),
      (a = parseFloat(a) || 0) +
        Qe(e, t, n || (i ? "border" : "content"), o, r, a) +
        "px"
    );
  }
  function Ke(e, t, n, r, i) {
    return new Ke.prototype.init(e, t, n, r, i);
  }
  S.extend({
    cssHooks: {
      opacity: {
        get: function (e, t) {
          if (t) {
            var n = We(e, "opacity");
            return "" === n ? "1" : n;
          }
        },
      },
    },
    cssNumber: {
      animationIterationCount: !0,
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      gridArea: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnStart: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowStart: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
    },
    cssProps: {},
    style: function (e, t, n, r) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var i,
          o,
          a,
          s = X(t),
          u = Xe.test(t),
          l = e.style;
        if (
          (u || (t = ze(s)), (a = S.cssHooks[t] || S.cssHooks[s]), void 0 === n)
        )
          return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
        "string" === (o = typeof n) &&
          (i = te.exec(n)) &&
          i[1] &&
          ((n = se(e, t, i)), (o = "number")),
          null != n &&
            n == n &&
            ("number" !== o ||
              u ||
              (n += (i && i[3]) || (S.cssNumber[s] ? "" : "px")),
            y.clearCloneStyle ||
              "" !== n ||
              0 !== t.indexOf("background") ||
              (l[t] = "inherit"),
            (a && "set" in a && void 0 === (n = a.set(e, n, r))) ||
              (u ? l.setProperty(t, n) : (l[t] = n)));
      }
    },
    css: function (e, t, n, r) {
      var i,
        o,
        a,
        s = X(t);
      return (
        Xe.test(t) || (t = ze(s)),
        (a = S.cssHooks[t] || S.cssHooks[s]) &&
          "get" in a &&
          (i = a.get(e, !0, n)),
        void 0 === i && (i = We(e, t, r)),
        "normal" === i && t in Ge && (i = Ge[t]),
        "" === n || n
          ? ((o = parseFloat(i)), !0 === n || isFinite(o) ? o || 0 : i)
          : i
      );
    },
  }),
    S.each(["height", "width"], function (e, u) {
      S.cssHooks[u] = {
        get: function (e, t, n) {
          if (t)
            return !Ue.test(S.css(e, "display")) ||
              (e.getClientRects().length && e.getBoundingClientRect().width)
              ? Je(e, u, n)
              : Me(e, Ve, function () {
                  return Je(e, u, n);
                });
        },
        set: function (e, t, n) {
          var r,
            i = Re(e),
            o = !y.scrollboxSize() && "absolute" === i.position,
            a = (o || n) && "border-box" === S.css(e, "boxSizing", !1, i),
            s = n ? Qe(e, u, n, a, i) : 0;
          return (
            a &&
              o &&
              (s -= Math.ceil(
                e["offset" + u[0].toUpperCase() + u.slice(1)] -
                  parseFloat(i[u]) -
                  Qe(e, u, "border", !1, i) -
                  0.5
              )),
            s &&
              (r = te.exec(t)) &&
              "px" !== (r[3] || "px") &&
              ((e.style[u] = t), (t = S.css(e, u))),
            Ye(0, t, s)
          );
        },
      };
    }),
    (S.cssHooks.marginLeft = Fe(y.reliableMarginLeft, function (e, t) {
      if (t)
        return (
          (parseFloat(We(e, "marginLeft")) ||
            e.getBoundingClientRect().left -
              Me(e, { marginLeft: 0 }, function () {
                return e.getBoundingClientRect().left;
              })) + "px"
        );
    })),
    S.each({ margin: "", padding: "", border: "Width" }, function (i, o) {
      (S.cssHooks[i + o] = {
        expand: function (e) {
          for (
            var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e];
            t < 4;
            t++
          )
            n[i + ne[t] + o] = r[t] || r[t - 2] || r[0];
          return n;
        },
      }),
        "margin" !== i && (S.cssHooks[i + o].set = Ye);
    }),
    S.fn.extend({
      css: function (e, t) {
        return $(
          this,
          function (e, t, n) {
            var r,
              i,
              o = {},
              a = 0;
            if (Array.isArray(t)) {
              for (r = Re(e), i = t.length; a < i; a++)
                o[t[a]] = S.css(e, t[a], !1, r);
              return o;
            }
            return void 0 !== n ? S.style(e, t, n) : S.css(e, t);
          },
          e,
          t,
          1 < arguments.length
        );
      },
    }),
    (((S.Tween = Ke).prototype = {
      constructor: Ke,
      init: function (e, t, n, r, i, o) {
        (this.elem = e),
          (this.prop = n),
          (this.easing = i || S.easing._default),
          (this.options = t),
          (this.start = this.now = this.cur()),
          (this.end = r),
          (this.unit = o || (S.cssNumber[n] ? "" : "px"));
      },
      cur: function () {
        var e = Ke.propHooks[this.prop];
        return e && e.get ? e.get(this) : Ke.propHooks._default.get(this);
      },
      run: function (e) {
        var t,
          n = Ke.propHooks[this.prop];
        return (
          this.options.duration
            ? (this.pos = t =
                S.easing[this.easing](
                  e,
                  this.options.duration * e,
                  0,
                  1,
                  this.options.duration
                ))
            : (this.pos = t = e),
          (this.now = (this.end - this.start) * t + this.start),
          this.options.step &&
            this.options.step.call(this.elem, this.now, this),
          n && n.set ? n.set(this) : Ke.propHooks._default.set(this),
          this
        );
      },
    }).init.prototype = Ke.prototype),
    ((Ke.propHooks = {
      _default: {
        get: function (e) {
          var t;
          return 1 !== e.elem.nodeType ||
            (null != e.elem[e.prop] && null == e.elem.style[e.prop])
            ? e.elem[e.prop]
            : (t = S.css(e.elem, e.prop, "")) && "auto" !== t
            ? t
            : 0;
        },
        set: function (e) {
          S.fx.step[e.prop]
            ? S.fx.step[e.prop](e)
            : 1 !== e.elem.nodeType ||
              (!S.cssHooks[e.prop] && null == e.elem.style[ze(e.prop)])
            ? (e.elem[e.prop] = e.now)
            : S.style(e.elem, e.prop, e.now + e.unit);
        },
      },
    }).scrollTop = Ke.propHooks.scrollLeft =
      {
        set: function (e) {
          e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
        },
      }),
    (S.easing = {
      linear: function (e) {
        return e;
      },
      swing: function (e) {
        return 0.5 - Math.cos(e * Math.PI) / 2;
      },
      _default: "swing",
    }),
    (S.fx = Ke.prototype.init),
    (S.fx.step = {});
  var Ze,
    et,
    tt,
    nt,
    rt = /^(?:toggle|show|hide)$/,
    it = /queueHooks$/;
  function ot() {
    et &&
      (!1 === E.hidden && C.requestAnimationFrame
        ? C.requestAnimationFrame(ot)
        : C.setTimeout(ot, S.fx.interval),
      S.fx.tick());
  }
  function at() {
    return (
      C.setTimeout(function () {
        Ze = void 0;
      }),
      (Ze = Date.now())
    );
  }
  function st(e, t) {
    var n,
      r = 0,
      i = { height: e };
    for (t = t ? 1 : 0; r < 4; r += 2 - t)
      i["margin" + (n = ne[r])] = i["padding" + n] = e;
    return t && (i.opacity = i.width = e), i;
  }
  function ut(e, t, n) {
    for (
      var r,
        i = (lt.tweeners[t] || []).concat(lt.tweeners["*"]),
        o = 0,
        a = i.length;
      o < a;
      o++
    )
      if ((r = i[o].call(n, t, e))) return r;
  }
  function lt(o, e, t) {
    var n,
      a,
      r = 0,
      i = lt.prefilters.length,
      s = S.Deferred().always(function () {
        delete u.elem;
      }),
      u = function () {
        if (a) return !1;
        for (
          var e = Ze || at(),
            t = Math.max(0, l.startTime + l.duration - e),
            n = 1 - (t / l.duration || 0),
            r = 0,
            i = l.tweens.length;
          r < i;
          r++
        )
          l.tweens[r].run(n);
        return (
          s.notifyWith(o, [l, n, t]),
          n < 1 && i
            ? t
            : (i || s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l]), !1)
        );
      },
      l = s.promise({
        elem: o,
        props: S.extend({}, e),
        opts: S.extend(!0, { specialEasing: {}, easing: S.easing._default }, t),
        originalProperties: e,
        originalOptions: t,
        startTime: Ze || at(),
        duration: t.duration,
        tweens: [],
        createTween: function (e, t) {
          var n = S.Tween(
            o,
            l.opts,
            e,
            t,
            l.opts.specialEasing[e] || l.opts.easing
          );
          return l.tweens.push(n), n;
        },
        stop: function (e) {
          var t = 0,
            n = e ? l.tweens.length : 0;
          if (a) return this;
          for (a = !0; t < n; t++) l.tweens[t].run(1);
          return (
            e
              ? (s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l, e]))
              : s.rejectWith(o, [l, e]),
            this
          );
        },
      }),
      c = l.props;
    for (
      !(function (e, t) {
        var n, r, i, o, a;
        for (n in e)
          if (
            ((i = t[(r = X(n))]),
            (o = e[n]),
            Array.isArray(o) && ((i = o[1]), (o = e[n] = o[0])),
            n !== r && ((e[r] = o), delete e[n]),
            (a = S.cssHooks[r]) && ("expand" in a))
          )
            for (n in ((o = a.expand(o)), delete e[r], o))
              (n in e) || ((e[n] = o[n]), (t[n] = i));
          else t[r] = i;
      })(c, l.opts.specialEasing);
      r < i;
      r++
    )
      if ((n = lt.prefilters[r].call(l, o, c, l.opts)))
        return (
          m(n.stop) &&
            (S._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)),
          n
        );
    return (
      S.map(c, ut, l),
      m(l.opts.start) && l.opts.start.call(o, l),
      l
        .progress(l.opts.progress)
        .done(l.opts.done, l.opts.complete)
        .fail(l.opts.fail)
        .always(l.opts.always),
      S.fx.timer(S.extend(u, { elem: o, anim: l, queue: l.opts.queue })),
      l
    );
  }
  (S.Animation = S.extend(lt, {
    tweeners: {
      "*": [
        function (e, t) {
          var n = this.createTween(e, t);
          return se(n.elem, e, te.exec(t), n), n;
        },
      ],
    },
    tweener: function (e, t) {
      m(e) ? ((t = e), (e = ["*"])) : (e = e.match(P));
      for (var n, r = 0, i = e.length; r < i; r++)
        (n = e[r]),
          (lt.tweeners[n] = lt.tweeners[n] || []),
          lt.tweeners[n].unshift(t);
    },
    prefilters: [
      function (e, t, n) {
        var r,
          i,
          o,
          a,
          s,
          u,
          l,
          c,
          f = "width" in t || "height" in t,
          p = this,
          d = {},
          h = e.style,
          g = e.nodeType && ae(e),
          v = Y.get(e, "fxshow");
        for (r in (n.queue ||
          (null == (a = S._queueHooks(e, "fx")).unqueued &&
            ((a.unqueued = 0),
            (s = a.empty.fire),
            (a.empty.fire = function () {
              a.unqueued || s();
            })),
          a.unqueued++,
          p.always(function () {
            p.always(function () {
              a.unqueued--, S.queue(e, "fx").length || a.empty.fire();
            });
          })),
        t))
          if (((i = t[r]), rt.test(i))) {
            if (
              (delete t[r],
              (o = o || "toggle" === i),
              i === (g ? "hide" : "show"))
            ) {
              if ("show" !== i || !v || void 0 === v[r]) continue;
              g = !0;
            }
            d[r] = (v && v[r]) || S.style(e, r);
          }
        if ((u = !S.isEmptyObject(t)) || !S.isEmptyObject(d))
          for (r in (f &&
            1 === e.nodeType &&
            ((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
            null == (l = v && v.display) && (l = Y.get(e, "display")),
            "none" === (c = S.css(e, "display")) &&
              (l
                ? (c = l)
                : (le([e], !0),
                  (l = e.style.display || l),
                  (c = S.css(e, "display")),
                  le([e]))),
            ("inline" === c || ("inline-block" === c && null != l)) &&
              "none" === S.css(e, "float") &&
              (u ||
                (p.done(function () {
                  h.display = l;
                }),
                null == l && ((c = h.display), (l = "none" === c ? "" : c))),
              (h.display = "inline-block"))),
          n.overflow &&
            ((h.overflow = "hidden"),
            p.always(function () {
              (h.overflow = n.overflow[0]),
                (h.overflowX = n.overflow[1]),
                (h.overflowY = n.overflow[2]);
            })),
          (u = !1),
          d))
            u ||
              (v
                ? "hidden" in v && (g = v.hidden)
                : (v = Y.access(e, "fxshow", { display: l })),
              o && (v.hidden = !g),
              g && le([e], !0),
              p.done(function () {
                for (r in (g || le([e]), Y.remove(e, "fxshow"), d))
                  S.style(e, r, d[r]);
              })),
              (u = ut(g ? v[r] : 0, r, p)),
              r in v ||
                ((v[r] = u.start), g && ((u.end = u.start), (u.start = 0)));
      },
    ],
    prefilter: function (e, t) {
      t ? lt.prefilters.unshift(e) : lt.prefilters.push(e);
    },
  })),
    (S.speed = function (e, t, n) {
      var r =
        e && "object" == typeof e
          ? S.extend({}, e)
          : {
              complete: n || (!n && t) || (m(e) && e),
              duration: e,
              easing: (n && t) || (t && !m(t) && t),
            };
      return (
        S.fx.off
          ? (r.duration = 0)
          : "number" != typeof r.duration &&
            (r.duration in S.fx.speeds
              ? (r.duration = S.fx.speeds[r.duration])
              : (r.duration = S.fx.speeds._default)),
        (null != r.queue && !0 !== r.queue) || (r.queue = "fx"),
        (r.old = r.complete),
        (r.complete = function () {
          m(r.old) && r.old.call(this), r.queue && S.dequeue(this, r.queue);
        }),
        r
      );
    }),
    S.fn.extend({
      fadeTo: function (e, t, n, r) {
        return this.filter(ae)
          .css("opacity", 0)
          .show()
          .end()
          .animate({ opacity: t }, e, n, r);
      },
      animate: function (t, e, n, r) {
        var i = S.isEmptyObject(t),
          o = S.speed(e, n, r),
          a = function () {
            var e = lt(this, S.extend({}, t), o);
            (i || Y.get(this, "finish")) && e.stop(!0);
          };
        return (
          (a.finish = a),
          i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
        );
      },
      stop: function (i, e, o) {
        var a = function (e) {
          var t = e.stop;
          delete e.stop, t(o);
        };
        return (
          "string" != typeof i && ((o = e), (e = i), (i = void 0)),
          e && this.queue(i || "fx", []),
          this.each(function () {
            var e = !0,
              t = null != i && i + "queueHooks",
              n = S.timers,
              r = Y.get(this);
            if (t) r[t] && r[t].stop && a(r[t]);
            else for (t in r) r[t] && r[t].stop && it.test(t) && a(r[t]);
            for (t = n.length; t--; )
              n[t].elem !== this ||
                (null != i && n[t].queue !== i) ||
                (n[t].anim.stop(o), (e = !1), n.splice(t, 1));
            (!e && o) || S.dequeue(this, i);
          })
        );
      },
      finish: function (a) {
        return (
          !1 !== a && (a = a || "fx"),
          this.each(function () {
            var e,
              t = Y.get(this),
              n = t[a + "queue"],
              r = t[a + "queueHooks"],
              i = S.timers,
              o = n ? n.length : 0;
            for (
              t.finish = !0,
                S.queue(this, a, []),
                r && r.stop && r.stop.call(this, !0),
                e = i.length;
              e--;

            )
              i[e].elem === this &&
                i[e].queue === a &&
                (i[e].anim.stop(!0), i.splice(e, 1));
            for (e = 0; e < o; e++)
              n[e] && n[e].finish && n[e].finish.call(this);
            delete t.finish;
          })
        );
      },
    }),
    S.each(["toggle", "show", "hide"], function (e, r) {
      var i = S.fn[r];
      S.fn[r] = function (e, t, n) {
        return null == e || "boolean" == typeof e
          ? i.apply(this, arguments)
          : this.animate(st(r, !0), e, t, n);
      };
    }),
    S.each(
      {
        slideDown: st("show"),
        slideUp: st("hide"),
        slideToggle: st("toggle"),
        fadeIn: { opacity: "show" },
        fadeOut: { opacity: "hide" },
        fadeToggle: { opacity: "toggle" },
      },
      function (e, r) {
        S.fn[e] = function (e, t, n) {
          return this.animate(r, e, t, n);
        };
      }
    ),
    (S.timers = []),
    (S.fx.tick = function () {
      var e,
        t = 0,
        n = S.timers;
      for (Ze = Date.now(); t < n.length; t++)
        (e = n[t])() || n[t] !== e || n.splice(t--, 1);
      n.length || S.fx.stop(), (Ze = void 0);
    }),
    (S.fx.timer = function (e) {
      S.timers.push(e), S.fx.start();
    }),
    (S.fx.interval = 13),
    (S.fx.start = function () {
      et || ((et = !0), ot());
    }),
    (S.fx.stop = function () {
      et = null;
    }),
    (S.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
    (S.fn.delay = function (r, e) {
      return (
        (r = (S.fx && S.fx.speeds[r]) || r),
        (e = e || "fx"),
        this.queue(e, function (e, t) {
          var n = C.setTimeout(e, r);
          t.stop = function () {
            C.clearTimeout(n);
          };
        })
      );
    }),
    (tt = E.createElement("input")),
    (nt = E.createElement("select").appendChild(E.createElement("option"))),
    (tt.type = "checkbox"),
    (y.checkOn = "" !== tt.value),
    (y.optSelected = nt.selected),
    ((tt = E.createElement("input")).value = "t"),
    (tt.type = "radio"),
    (y.radioValue = "t" === tt.value);
  var ct,
    ft = S.expr.attrHandle;
  S.fn.extend({
    attr: function (e, t) {
      return $(this, S.attr, e, t, 1 < arguments.length);
    },
    removeAttr: function (e) {
      return this.each(function () {
        S.removeAttr(this, e);
      });
    },
  }),
    S.extend({
      attr: function (e, t, n) {
        var r,
          i,
          o = e.nodeType;
        if (3 !== o && 8 !== o && 2 !== o)
          return "undefined" == typeof e.getAttribute
            ? S.prop(e, t, n)
            : ((1 === o && S.isXMLDoc(e)) ||
                (i =
                  S.attrHooks[t.toLowerCase()] ||
                  (S.expr.match.bool.test(t) ? ct : void 0)),
              void 0 !== n
                ? null === n
                  ? void S.removeAttr(e, t)
                  : i && "set" in i && void 0 !== (r = i.set(e, n, t))
                  ? r
                  : (e.setAttribute(t, n + ""), n)
                : i && "get" in i && null !== (r = i.get(e, t))
                ? r
                : null == (r = S.find.attr(e, t))
                ? void 0
                : r);
      },
      attrHooks: {
        type: {
          set: function (e, t) {
            if (!y.radioValue && "radio" === t && A(e, "input")) {
              var n = e.value;
              return e.setAttribute("type", t), n && (e.value = n), t;
            }
          },
        },
      },
      removeAttr: function (e, t) {
        var n,
          r = 0,
          i = t && t.match(P);
        if (i && 1 === e.nodeType) while ((n = i[r++])) e.removeAttribute(n);
      },
    }),
    (ct = {
      set: function (e, t, n) {
        return !1 === t ? S.removeAttr(e, n) : e.setAttribute(n, n), n;
      },
    }),
    S.each(S.expr.match.bool.source.match(/\w+/g), function (e, t) {
      var a = ft[t] || S.find.attr;
      ft[t] = function (e, t, n) {
        var r,
          i,
          o = t.toLowerCase();
        return (
          n ||
            ((i = ft[o]),
            (ft[o] = r),
            (r = null != a(e, t, n) ? o : null),
            (ft[o] = i)),
          r
        );
      };
    });
  var pt = /^(?:input|select|textarea|button)$/i,
    dt = /^(?:a|area)$/i;
  function ht(e) {
    return (e.match(P) || []).join(" ");
  }
  function gt(e) {
    return (e.getAttribute && e.getAttribute("class")) || "";
  }
  function vt(e) {
    return Array.isArray(e) ? e : ("string" == typeof e && e.match(P)) || [];
  }
  S.fn.extend({
    prop: function (e, t) {
      return $(this, S.prop, e, t, 1 < arguments.length);
    },
    removeProp: function (e) {
      return this.each(function () {
        delete this[S.propFix[e] || e];
      });
    },
  }),
    S.extend({
      prop: function (e, t, n) {
        var r,
          i,
          o = e.nodeType;
        if (3 !== o && 8 !== o && 2 !== o)
          return (
            (1 === o && S.isXMLDoc(e)) ||
              ((t = S.propFix[t] || t), (i = S.propHooks[t])),
            void 0 !== n
              ? i && "set" in i && void 0 !== (r = i.set(e, n, t))
                ? r
                : (e[t] = n)
              : i && "get" in i && null !== (r = i.get(e, t))
              ? r
              : e[t]
          );
      },
      propHooks: {
        tabIndex: {
          get: function (e) {
            var t = S.find.attr(e, "tabindex");
            return t
              ? parseInt(t, 10)
              : pt.test(e.nodeName) || (dt.test(e.nodeName) && e.href)
              ? 0
              : -1;
          },
        },
      },
      propFix: { for: "htmlFor", class: "className" },
    }),
    y.optSelected ||
      (S.propHooks.selected = {
        get: function (e) {
          var t = e.parentNode;
          return t && t.parentNode && t.parentNode.selectedIndex, null;
        },
        set: function (e) {
          var t = e.parentNode;
          t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
        },
      }),
    S.each(
      [
        "tabIndex",
        "readOnly",
        "maxLength",
        "cellSpacing",
        "cellPadding",
        "rowSpan",
        "colSpan",
        "useMap",
        "frameBorder",
        "contentEditable",
      ],
      function () {
        S.propFix[this.toLowerCase()] = this;
      }
    ),
    S.fn.extend({
      addClass: function (t) {
        var e,
          n,
          r,
          i,
          o,
          a,
          s,
          u = 0;
        if (m(t))
          return this.each(function (e) {
            S(this).addClass(t.call(this, e, gt(this)));
          });
        if ((e = vt(t)).length)
          while ((n = this[u++]))
            if (((i = gt(n)), (r = 1 === n.nodeType && " " + ht(i) + " "))) {
              a = 0;
              while ((o = e[a++]))
                r.indexOf(" " + o + " ") < 0 && (r += o + " ");
              i !== (s = ht(r)) && n.setAttribute("class", s);
            }
        return this;
      },
      removeClass: function (t) {
        var e,
          n,
          r,
          i,
          o,
          a,
          s,
          u = 0;
        if (m(t))
          return this.each(function (e) {
            S(this).removeClass(t.call(this, e, gt(this)));
          });
        if (!arguments.length) return this.attr("class", "");
        if ((e = vt(t)).length)
          while ((n = this[u++]))
            if (((i = gt(n)), (r = 1 === n.nodeType && " " + ht(i) + " "))) {
              a = 0;
              while ((o = e[a++]))
                while (-1 < r.indexOf(" " + o + " "))
                  r = r.replace(" " + o + " ", " ");
              i !== (s = ht(r)) && n.setAttribute("class", s);
            }
        return this;
      },
      toggleClass: function (i, t) {
        var o = typeof i,
          a = "string" === o || Array.isArray(i);
        return "boolean" == typeof t && a
          ? t
            ? this.addClass(i)
            : this.removeClass(i)
          : m(i)
          ? this.each(function (e) {
              S(this).toggleClass(i.call(this, e, gt(this), t), t);
            })
          : this.each(function () {
              var e, t, n, r;
              if (a) {
                (t = 0), (n = S(this)), (r = vt(i));
                while ((e = r[t++]))
                  n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
              } else (void 0 !== i && "boolean" !== o) || ((e = gt(this)) && Y.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === i ? "" : Y.get(this, "__className__") || ""));
            });
      },
      hasClass: function (e) {
        var t,
          n,
          r = 0;
        t = " " + e + " ";
        while ((n = this[r++]))
          if (1 === n.nodeType && -1 < (" " + ht(gt(n)) + " ").indexOf(t))
            return !0;
        return !1;
      },
    });
  var yt = /\r/g;
  S.fn.extend({
    val: function (n) {
      var r,
        e,
        i,
        t = this[0];
      return arguments.length
        ? ((i = m(n)),
          this.each(function (e) {
            var t;
            1 === this.nodeType &&
              (null == (t = i ? n.call(this, e, S(this).val()) : n)
                ? (t = "")
                : "number" == typeof t
                ? (t += "")
                : Array.isArray(t) &&
                  (t = S.map(t, function (e) {
                    return null == e ? "" : e + "";
                  })),
              ((r =
                S.valHooks[this.type] ||
                S.valHooks[this.nodeName.toLowerCase()]) &&
                "set" in r &&
                void 0 !== r.set(this, t, "value")) ||
                (this.value = t));
          }))
        : t
        ? (r = S.valHooks[t.type] || S.valHooks[t.nodeName.toLowerCase()]) &&
          "get" in r &&
          void 0 !== (e = r.get(t, "value"))
          ? e
          : "string" == typeof (e = t.value)
          ? e.replace(yt, "")
          : null == e
          ? ""
          : e
        : void 0;
    },
  }),
    S.extend({
      valHooks: {
        option: {
          get: function (e) {
            var t = S.find.attr(e, "value");
            return null != t ? t : ht(S.text(e));
          },
        },
        select: {
          get: function (e) {
            var t,
              n,
              r,
              i = e.options,
              o = e.selectedIndex,
              a = "select-one" === e.type,
              s = a ? null : [],
              u = a ? o + 1 : i.length;
            for (r = o < 0 ? u : a ? o : 0; r < u; r++)
              if (
                ((n = i[r]).selected || r === o) &&
                !n.disabled &&
                (!n.parentNode.disabled || !A(n.parentNode, "optgroup"))
              ) {
                if (((t = S(n).val()), a)) return t;
                s.push(t);
              }
            return s;
          },
          set: function (e, t) {
            var n,
              r,
              i = e.options,
              o = S.makeArray(t),
              a = i.length;
            while (a--)
              ((r = i[a]).selected =
                -1 < S.inArray(S.valHooks.option.get(r), o)) && (n = !0);
            return n || (e.selectedIndex = -1), o;
          },
        },
      },
    }),
    S.each(["radio", "checkbox"], function () {
      (S.valHooks[this] = {
        set: function (e, t) {
          if (Array.isArray(t))
            return (e.checked = -1 < S.inArray(S(e).val(), t));
        },
      }),
        y.checkOn ||
          (S.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value;
          });
    }),
    (y.focusin = "onfocusin" in C);
  var mt = /^(?:focusinfocus|focusoutblur)$/,
    xt = function (e) {
      e.stopPropagation();
    };
  S.extend(S.event, {
    trigger: function (e, t, n, r) {
      var i,
        o,
        a,
        s,
        u,
        l,
        c,
        f,
        p = [n || E],
        d = v.call(e, "type") ? e.type : e,
        h = v.call(e, "namespace") ? e.namespace.split(".") : [];
      if (
        ((o = f = a = n = n || E),
        3 !== n.nodeType &&
          8 !== n.nodeType &&
          !mt.test(d + S.event.triggered) &&
          (-1 < d.indexOf(".") && ((d = (h = d.split(".")).shift()), h.sort()),
          (u = d.indexOf(":") < 0 && "on" + d),
          ((e = e[S.expando]
            ? e
            : new S.Event(d, "object" == typeof e && e)).isTrigger = r ? 2 : 3),
          (e.namespace = h.join(".")),
          (e.rnamespace = e.namespace
            ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)")
            : null),
          (e.result = void 0),
          e.target || (e.target = n),
          (t = null == t ? [e] : S.makeArray(t, [e])),
          (c = S.event.special[d] || {}),
          r || !c.trigger || !1 !== c.trigger.apply(n, t)))
      ) {
        if (!r && !c.noBubble && !x(n)) {
          for (
            s = c.delegateType || d, mt.test(s + d) || (o = o.parentNode);
            o;
            o = o.parentNode
          )
            p.push(o), (a = o);
          a === (n.ownerDocument || E) &&
            p.push(a.defaultView || a.parentWindow || C);
        }
        i = 0;
        while ((o = p[i++]) && !e.isPropagationStopped())
          (f = o),
            (e.type = 1 < i ? s : c.bindType || d),
            (l =
              (Y.get(o, "events") || Object.create(null))[e.type] &&
              Y.get(o, "handle")) && l.apply(o, t),
            (l = u && o[u]) &&
              l.apply &&
              V(o) &&
              ((e.result = l.apply(o, t)),
              !1 === e.result && e.preventDefault());
        return (
          (e.type = d),
          r ||
            e.isDefaultPrevented() ||
            (c._default && !1 !== c._default.apply(p.pop(), t)) ||
            !V(n) ||
            (u &&
              m(n[d]) &&
              !x(n) &&
              ((a = n[u]) && (n[u] = null),
              (S.event.triggered = d),
              e.isPropagationStopped() && f.addEventListener(d, xt),
              n[d](),
              e.isPropagationStopped() && f.removeEventListener(d, xt),
              (S.event.triggered = void 0),
              a && (n[u] = a))),
          e.result
        );
      }
    },
    simulate: function (e, t, n) {
      var r = S.extend(new S.Event(), n, { type: e, isSimulated: !0 });
      S.event.trigger(r, null, t);
    },
  }),
    S.fn.extend({
      trigger: function (e, t) {
        return this.each(function () {
          S.event.trigger(e, t, this);
        });
      },
      triggerHandler: function (e, t) {
        var n = this[0];
        if (n) return S.event.trigger(e, t, n, !0);
      },
    }),
    y.focusin ||
      S.each({ focus: "focusin", blur: "focusout" }, function (n, r) {
        var i = function (e) {
          S.event.simulate(r, e.target, S.event.fix(e));
        };
        S.event.special[r] = {
          setup: function () {
            var e = this.ownerDocument || this.document || this,
              t = Y.access(e, r);
            t || e.addEventListener(n, i, !0), Y.access(e, r, (t || 0) + 1);
          },
          teardown: function () {
            var e = this.ownerDocument || this.document || this,
              t = Y.access(e, r) - 1;
            t
              ? Y.access(e, r, t)
              : (e.removeEventListener(n, i, !0), Y.remove(e, r));
          },
        };
      });
  var bt = C.location,
    wt = { guid: Date.now() },
    Tt = /\?/;
  S.parseXML = function (e) {
    var t, n;
    if (!e || "string" != typeof e) return null;
    try {
      t = new C.DOMParser().parseFromString(e, "text/xml");
    } catch (e) {}
    return (
      (n = t && t.getElementsByTagName("parsererror")[0]),
      (t && !n) ||
        S.error(
          "Invalid XML: " +
            (n
              ? S.map(n.childNodes, function (e) {
                  return e.textContent;
                }).join("\n")
              : e)
        ),
      t
    );
  };
  var Ct = /\[\]$/,
    Et = /\r?\n/g,
    St = /^(?:submit|button|image|reset|file)$/i,
    kt = /^(?:input|select|textarea|keygen)/i;
  function At(n, e, r, i) {
    var t;
    if (Array.isArray(e))
      S.each(e, function (e, t) {
        r || Ct.test(n)
          ? i(n, t)
          : At(
              n + "[" + ("object" == typeof t && null != t ? e : "") + "]",
              t,
              r,
              i
            );
      });
    else if (r || "object" !== w(e)) i(n, e);
    else for (t in e) At(n + "[" + t + "]", e[t], r, i);
  }
  (S.param = function (e, t) {
    var n,
      r = [],
      i = function (e, t) {
        var n = m(t) ? t() : t;
        r[r.length] =
          encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
      };
    if (null == e) return "";
    if (Array.isArray(e) || (e.jquery && !S.isPlainObject(e)))
      S.each(e, function () {
        i(this.name, this.value);
      });
    else for (n in e) At(n, e[n], t, i);
    return r.join("&");
  }),
    S.fn.extend({
      serialize: function () {
        return S.param(this.serializeArray());
      },
      serializeArray: function () {
        return this.map(function () {
          var e = S.prop(this, "elements");
          return e ? S.makeArray(e) : this;
        })
          .filter(function () {
            var e = this.type;
            return (
              this.name &&
              !S(this).is(":disabled") &&
              kt.test(this.nodeName) &&
              !St.test(e) &&
              (this.checked || !pe.test(e))
            );
          })
          .map(function (e, t) {
            var n = S(this).val();
            return null == n
              ? null
              : Array.isArray(n)
              ? S.map(n, function (e) {
                  return { name: t.name, value: e.replace(Et, "\r\n") };
                })
              : { name: t.name, value: n.replace(Et, "\r\n") };
          })
          .get();
      },
    });
  var Nt = /%20/g,
    jt = /#.*$/,
    Dt = /([?&])_=[^&]*/,
    qt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    Lt = /^(?:GET|HEAD)$/,
    Ht = /^\/\//,
    Ot = {},
    Pt = {},
    Rt = "*/".concat("*"),
    Mt = E.createElement("a");
  function It(o) {
    return function (e, t) {
      "string" != typeof e && ((t = e), (e = "*"));
      var n,
        r = 0,
        i = e.toLowerCase().match(P) || [];
      if (m(t))
        while ((n = i[r++]))
          "+" === n[0]
            ? ((n = n.slice(1) || "*"), (o[n] = o[n] || []).unshift(t))
            : (o[n] = o[n] || []).push(t);
    };
  }
  function Wt(t, i, o, a) {
    var s = {},
      u = t === Pt;
    function l(e) {
      var r;
      return (
        (s[e] = !0),
        S.each(t[e] || [], function (e, t) {
          var n = t(i, o, a);
          return "string" != typeof n || u || s[n]
            ? u
              ? !(r = n)
              : void 0
            : (i.dataTypes.unshift(n), l(n), !1);
        }),
        r
      );
    }
    return l(i.dataTypes[0]) || (!s["*"] && l("*"));
  }
  function Ft(e, t) {
    var n,
      r,
      i = S.ajaxSettings.flatOptions || {};
    for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
    return r && S.extend(!0, e, r), e;
  }
  (Mt.href = bt.href),
    S.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: bt.href,
        type: "GET",
        isLocal:
          /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
            bt.protocol
          ),
        global: !0,
        processData: !0,
        async: !0,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        accepts: {
          "*": Rt,
          text: "text/plain",
          html: "text/html",
          xml: "application/xml, text/xml",
          json: "application/json, text/javascript",
        },
        contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
        responseFields: {
          xml: "responseXML",
          text: "responseText",
          json: "responseJSON",
        },
        converters: {
          "* text": String,
          "text html": !0,
          "text json": JSON.parse,
          "text xml": S.parseXML,
        },
        flatOptions: { url: !0, context: !0 },
      },
      ajaxSetup: function (e, t) {
        return t ? Ft(Ft(e, S.ajaxSettings), t) : Ft(S.ajaxSettings, e);
      },
      ajaxPrefilter: It(Ot),
      ajaxTransport: It(Pt),
      ajax: function (e, t) {
        "object" == typeof e && ((t = e), (e = void 0)), (t = t || {});
        var c,
          f,
          p,
          n,
          d,
          r,
          h,
          g,
          i,
          o,
          v = S.ajaxSetup({}, t),
          y = v.context || v,
          m = v.context && (y.nodeType || y.jquery) ? S(y) : S.event,
          x = S.Deferred(),
          b = S.Callbacks("once memory"),
          w = v.statusCode || {},
          a = {},
          s = {},
          u = "canceled",
          T = {
            readyState: 0,
            getResponseHeader: function (e) {
              var t;
              if (h) {
                if (!n) {
                  n = {};
                  while ((t = qt.exec(p)))
                    n[t[1].toLowerCase() + " "] = (
                      n[t[1].toLowerCase() + " "] || []
                    ).concat(t[2]);
                }
                t = n[e.toLowerCase() + " "];
              }
              return null == t ? null : t.join(", ");
            },
            getAllResponseHeaders: function () {
              return h ? p : null;
            },
            setRequestHeader: function (e, t) {
              return (
                null == h &&
                  ((e = s[e.toLowerCase()] = s[e.toLowerCase()] || e),
                  (a[e] = t)),
                this
              );
            },
            overrideMimeType: function (e) {
              return null == h && (v.mimeType = e), this;
            },
            statusCode: function (e) {
              var t;
              if (e)
                if (h) T.always(e[T.status]);
                else for (t in e) w[t] = [w[t], e[t]];
              return this;
            },
            abort: function (e) {
              var t = e || u;
              return c && c.abort(t), l(0, t), this;
            },
          };
        if (
          (x.promise(T),
          (v.url = ((e || v.url || bt.href) + "").replace(
            Ht,
            bt.protocol + "//"
          )),
          (v.type = t.method || t.type || v.method || v.type),
          (v.dataTypes = (v.dataType || "*").toLowerCase().match(P) || [""]),
          null == v.crossDomain)
        ) {
          r = E.createElement("a");
          try {
            (r.href = v.url),
              (r.href = r.href),
              (v.crossDomain =
                Mt.protocol + "//" + Mt.host != r.protocol + "//" + r.host);
          } catch (e) {
            v.crossDomain = !0;
          }
        }
        if (
          (v.data &&
            v.processData &&
            "string" != typeof v.data &&
            (v.data = S.param(v.data, v.traditional)),
          Wt(Ot, v, t, T),
          h)
        )
          return T;
        for (i in ((g = S.event && v.global) &&
          0 == S.active++ &&
          S.event.trigger("ajaxStart"),
        (v.type = v.type.toUpperCase()),
        (v.hasContent = !Lt.test(v.type)),
        (f = v.url.replace(jt, "")),
        v.hasContent
          ? v.data &&
            v.processData &&
            0 ===
              (v.contentType || "").indexOf(
                "application/x-www-form-urlencoded"
              ) &&
            (v.data = v.data.replace(Nt, "+"))
          : ((o = v.url.slice(f.length)),
            v.data &&
              (v.processData || "string" == typeof v.data) &&
              ((f += (Tt.test(f) ? "&" : "?") + v.data), delete v.data),
            !1 === v.cache &&
              ((f = f.replace(Dt, "$1")),
              (o = (Tt.test(f) ? "&" : "?") + "_=" + wt.guid++ + o)),
            (v.url = f + o)),
        v.ifModified &&
          (S.lastModified[f] &&
            T.setRequestHeader("If-Modified-Since", S.lastModified[f]),
          S.etag[f] && T.setRequestHeader("If-None-Match", S.etag[f])),
        ((v.data && v.hasContent && !1 !== v.contentType) || t.contentType) &&
          T.setRequestHeader("Content-Type", v.contentType),
        T.setRequestHeader(
          "Accept",
          v.dataTypes[0] && v.accepts[v.dataTypes[0]]
            ? v.accepts[v.dataTypes[0]] +
                ("*" !== v.dataTypes[0] ? ", " + Rt + "; q=0.01" : "")
            : v.accepts["*"]
        ),
        v.headers))
          T.setRequestHeader(i, v.headers[i]);
        if (v.beforeSend && (!1 === v.beforeSend.call(y, T, v) || h))
          return T.abort();
        if (
          ((u = "abort"),
          b.add(v.complete),
          T.done(v.success),
          T.fail(v.error),
          (c = Wt(Pt, v, t, T)))
        ) {
          if (((T.readyState = 1), g && m.trigger("ajaxSend", [T, v]), h))
            return T;
          v.async &&
            0 < v.timeout &&
            (d = C.setTimeout(function () {
              T.abort("timeout");
            }, v.timeout));
          try {
            (h = !1), c.send(a, l);
          } catch (e) {
            if (h) throw e;
            l(-1, e);
          }
        } else l(-1, "No Transport");
        function l(e, t, n, r) {
          var i,
            o,
            a,
            s,
            u,
            l = t;
          h ||
            ((h = !0),
            d && C.clearTimeout(d),
            (c = void 0),
            (p = r || ""),
            (T.readyState = 0 < e ? 4 : 0),
            (i = (200 <= e && e < 300) || 304 === e),
            n &&
              (s = (function (e, t, n) {
                var r,
                  i,
                  o,
                  a,
                  s = e.contents,
                  u = e.dataTypes;
                while ("*" === u[0])
                  u.shift(),
                    void 0 === r &&
                      (r = e.mimeType || t.getResponseHeader("Content-Type"));
                if (r)
                  for (i in s)
                    if (s[i] && s[i].test(r)) {
                      u.unshift(i);
                      break;
                    }
                if (u[0] in n) o = u[0];
                else {
                  for (i in n) {
                    if (!u[0] || e.converters[i + " " + u[0]]) {
                      o = i;
                      break;
                    }
                    a || (a = i);
                  }
                  o = o || a;
                }
                if (o) return o !== u[0] && u.unshift(o), n[o];
              })(v, T, n)),
            !i &&
              -1 < S.inArray("script", v.dataTypes) &&
              S.inArray("json", v.dataTypes) < 0 &&
              (v.converters["text script"] = function () {}),
            (s = (function (e, t, n, r) {
              var i,
                o,
                a,
                s,
                u,
                l = {},
                c = e.dataTypes.slice();
              if (c[1])
                for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
              o = c.shift();
              while (o)
                if (
                  (e.responseFields[o] && (n[e.responseFields[o]] = t),
                  !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                  (u = o),
                  (o = c.shift()))
                )
                  if ("*" === o) o = u;
                  else if ("*" !== u && u !== o) {
                    if (!(a = l[u + " " + o] || l["* " + o]))
                      for (i in l)
                        if (
                          (s = i.split(" "))[1] === o &&
                          (a = l[u + " " + s[0]] || l["* " + s[0]])
                        ) {
                          !0 === a
                            ? (a = l[i])
                            : !0 !== l[i] && ((o = s[0]), c.unshift(s[1]));
                          break;
                        }
                    if (!0 !== a)
                      if (a && e["throws"]) t = a(t);
                      else
                        try {
                          t = a(t);
                        } catch (e) {
                          return {
                            state: "parsererror",
                            error: a
                              ? e
                              : "No conversion from " + u + " to " + o,
                          };
                        }
                  }
              return { state: "success", data: t };
            })(v, s, T, i)),
            i
              ? (v.ifModified &&
                  ((u = T.getResponseHeader("Last-Modified")) &&
                    (S.lastModified[f] = u),
                  (u = T.getResponseHeader("etag")) && (S.etag[f] = u)),
                204 === e || "HEAD" === v.type
                  ? (l = "nocontent")
                  : 304 === e
                  ? (l = "notmodified")
                  : ((l = s.state), (o = s.data), (i = !(a = s.error))))
              : ((a = l), (!e && l) || ((l = "error"), e < 0 && (e = 0))),
            (T.status = e),
            (T.statusText = (t || l) + ""),
            i ? x.resolveWith(y, [o, l, T]) : x.rejectWith(y, [T, l, a]),
            T.statusCode(w),
            (w = void 0),
            g && m.trigger(i ? "ajaxSuccess" : "ajaxError", [T, v, i ? o : a]),
            b.fireWith(y, [T, l]),
            g &&
              (m.trigger("ajaxComplete", [T, v]),
              --S.active || S.event.trigger("ajaxStop")));
        }
        return T;
      },
      getJSON: function (e, t, n) {
        return S.get(e, t, n, "json");
      },
      getScript: function (e, t) {
        return S.get(e, void 0, t, "script");
      },
    }),
    S.each(["get", "post"], function (e, i) {
      S[i] = function (e, t, n, r) {
        return (
          m(t) && ((r = r || n), (n = t), (t = void 0)),
          S.ajax(
            S.extend(
              { url: e, type: i, dataType: r, data: t, success: n },
              S.isPlainObject(e) && e
            )
          )
        );
      };
    }),
    S.ajaxPrefilter(function (e) {
      var t;
      for (t in e.headers)
        "content-type" === t.toLowerCase() &&
          (e.contentType = e.headers[t] || "");
    }),
    (S._evalUrl = function (e, t, n) {
      return S.ajax({
        url: e,
        type: "GET",
        dataType: "script",
        cache: !0,
        async: !1,
        global: !1,
        converters: { "text script": function () {} },
        dataFilter: function (e) {
          S.globalEval(e, t, n);
        },
      });
    }),
    S.fn.extend({
      wrapAll: function (e) {
        var t;
        return (
          this[0] &&
            (m(e) && (e = e.call(this[0])),
            (t = S(e, this[0].ownerDocument).eq(0).clone(!0)),
            this[0].parentNode && t.insertBefore(this[0]),
            t
              .map(function () {
                var e = this;
                while (e.firstElementChild) e = e.firstElementChild;
                return e;
              })
              .append(this)),
          this
        );
      },
      wrapInner: function (n) {
        return m(n)
          ? this.each(function (e) {
              S(this).wrapInner(n.call(this, e));
            })
          : this.each(function () {
              var e = S(this),
                t = e.contents();
              t.length ? t.wrapAll(n) : e.append(n);
            });
      },
      wrap: function (t) {
        var n = m(t);
        return this.each(function (e) {
          S(this).wrapAll(n ? t.call(this, e) : t);
        });
      },
      unwrap: function (e) {
        return (
          this.parent(e)
            .not("body")
            .each(function () {
              S(this).replaceWith(this.childNodes);
            }),
          this
        );
      },
    }),
    (S.expr.pseudos.hidden = function (e) {
      return !S.expr.pseudos.visible(e);
    }),
    (S.expr.pseudos.visible = function (e) {
      return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
    }),
    (S.ajaxSettings.xhr = function () {
      try {
        return new C.XMLHttpRequest();
      } catch (e) {}
    });
  var Bt = { 0: 200, 1223: 204 },
    $t = S.ajaxSettings.xhr();
  (y.cors = !!$t && "withCredentials" in $t),
    (y.ajax = $t = !!$t),
    S.ajaxTransport(function (i) {
      var o, a;
      if (y.cors || ($t && !i.crossDomain))
        return {
          send: function (e, t) {
            var n,
              r = i.xhr();
            if (
              (r.open(i.type, i.url, i.async, i.username, i.password),
              i.xhrFields)
            )
              for (n in i.xhrFields) r[n] = i.xhrFields[n];
            for (n in (i.mimeType &&
              r.overrideMimeType &&
              r.overrideMimeType(i.mimeType),
            i.crossDomain ||
              e["X-Requested-With"] ||
              (e["X-Requested-With"] = "XMLHttpRequest"),
            e))
              r.setRequestHeader(n, e[n]);
            (o = function (e) {
              return function () {
                o &&
                  ((o =
                    a =
                    r.onload =
                    r.onerror =
                    r.onabort =
                    r.ontimeout =
                    r.onreadystatechange =
                      null),
                  "abort" === e
                    ? r.abort()
                    : "error" === e
                    ? "number" != typeof r.status
                      ? t(0, "error")
                      : t(r.status, r.statusText)
                    : t(
                        Bt[r.status] || r.status,
                        r.statusText,
                        "text" !== (r.responseType || "text") ||
                          "string" != typeof r.responseText
                          ? { binary: r.response }
                          : { text: r.responseText },
                        r.getAllResponseHeaders()
                      ));
              };
            }),
              (r.onload = o()),
              (a = r.onerror = r.ontimeout = o("error")),
              void 0 !== r.onabort
                ? (r.onabort = a)
                : (r.onreadystatechange = function () {
                    4 === r.readyState &&
                      C.setTimeout(function () {
                        o && a();
                      });
                  }),
              (o = o("abort"));
            try {
              r.send((i.hasContent && i.data) || null);
            } catch (e) {
              if (o) throw e;
            }
          },
          abort: function () {
            o && o();
          },
        };
    }),
    S.ajaxPrefilter(function (e) {
      e.crossDomain && (e.contents.script = !1);
    }),
    S.ajaxSetup({
      accepts: {
        script:
          "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
      },
      contents: { script: /\b(?:java|ecma)script\b/ },
      converters: {
        "text script": function (e) {
          return S.globalEval(e), e;
        },
      },
    }),
    S.ajaxPrefilter("script", function (e) {
      void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
    }),
    S.ajaxTransport("script", function (n) {
      var r, i;
      if (n.crossDomain || n.scriptAttrs)
        return {
          send: function (e, t) {
            (r = S("<script>")
              .attr(n.scriptAttrs || {})
              .prop({ charset: n.scriptCharset, src: n.url })
              .on(
                "load error",
                (i = function (e) {
                  r.remove(),
                    (i = null),
                    e && t("error" === e.type ? 404 : 200, e.type);
                })
              )),
              E.head.appendChild(r[0]);
          },
          abort: function () {
            i && i();
          },
        };
    });
  var _t,
    zt = [],
    Ut = /(=)\?(?=&|$)|\?\?/;
  S.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function () {
      var e = zt.pop() || S.expando + "_" + wt.guid++;
      return (this[e] = !0), e;
    },
  }),
    S.ajaxPrefilter("json jsonp", function (e, t, n) {
      var r,
        i,
        o,
        a =
          !1 !== e.jsonp &&
          (Ut.test(e.url)
            ? "url"
            : "string" == typeof e.data &&
              0 ===
                (e.contentType || "").indexOf(
                  "application/x-www-form-urlencoded"
                ) &&
              Ut.test(e.data) &&
              "data");
      if (a || "jsonp" === e.dataTypes[0])
        return (
          (r = e.jsonpCallback =
            m(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback),
          a
            ? (e[a] = e[a].replace(Ut, "$1" + r))
            : !1 !== e.jsonp &&
              (e.url += (Tt.test(e.url) ? "&" : "?") + e.jsonp + "=" + r),
          (e.converters["script json"] = function () {
            return o || S.error(r + " was not called"), o[0];
          }),
          (e.dataTypes[0] = "json"),
          (i = C[r]),
          (C[r] = function () {
            o = arguments;
          }),
          n.always(function () {
            void 0 === i ? S(C).removeProp(r) : (C[r] = i),
              e[r] && ((e.jsonpCallback = t.jsonpCallback), zt.push(r)),
              o && m(i) && i(o[0]),
              (o = i = void 0);
          }),
          "script"
        );
    }),
    (y.createHTMLDocument =
      (((_t = E.implementation.createHTMLDocument("").body).innerHTML =
        "<form></form><form></form>"),
      2 === _t.childNodes.length)),
    (S.parseHTML = function (e, t, n) {
      return "string" != typeof e
        ? []
        : ("boolean" == typeof t && ((n = t), (t = !1)),
          t ||
            (y.createHTMLDocument
              ? (((r = (t =
                  E.implementation.createHTMLDocument("")).createElement(
                  "base"
                )).href = E.location.href),
                t.head.appendChild(r))
              : (t = E)),
          (o = !n && []),
          (i = N.exec(e))
            ? [t.createElement(i[1])]
            : ((i = xe([e], t, o)),
              o && o.length && S(o).remove(),
              S.merge([], i.childNodes)));
      var r, i, o;
    }),
    (S.fn.load = function (e, t, n) {
      var r,
        i,
        o,
        a = this,
        s = e.indexOf(" ");
      return (
        -1 < s && ((r = ht(e.slice(s))), (e = e.slice(0, s))),
        m(t)
          ? ((n = t), (t = void 0))
          : t && "object" == typeof t && (i = "POST"),
        0 < a.length &&
          S.ajax({ url: e, type: i || "GET", dataType: "html", data: t })
            .done(function (e) {
              (o = arguments),
                a.html(r ? S("<div>").append(S.parseHTML(e)).find(r) : e);
            })
            .always(
              n &&
                function (e, t) {
                  a.each(function () {
                    n.apply(this, o || [e.responseText, t, e]);
                  });
                }
            ),
        this
      );
    }),
    (S.expr.pseudos.animated = function (t) {
      return S.grep(S.timers, function (e) {
        return t === e.elem;
      }).length;
    }),
    (S.offset = {
      setOffset: function (e, t, n) {
        var r,
          i,
          o,
          a,
          s,
          u,
          l = S.css(e, "position"),
          c = S(e),
          f = {};
        "static" === l && (e.style.position = "relative"),
          (s = c.offset()),
          (o = S.css(e, "top")),
          (u = S.css(e, "left")),
          ("absolute" === l || "fixed" === l) && -1 < (o + u).indexOf("auto")
            ? ((a = (r = c.position()).top), (i = r.left))
            : ((a = parseFloat(o) || 0), (i = parseFloat(u) || 0)),
          m(t) && (t = t.call(e, n, S.extend({}, s))),
          null != t.top && (f.top = t.top - s.top + a),
          null != t.left && (f.left = t.left - s.left + i),
          "using" in t ? t.using.call(e, f) : c.css(f);
      },
    }),
    S.fn.extend({
      offset: function (t) {
        if (arguments.length)
          return void 0 === t
            ? this
            : this.each(function (e) {
                S.offset.setOffset(this, t, e);
              });
        var e,
          n,
          r = this[0];
        return r
          ? r.getClientRects().length
            ? ((e = r.getBoundingClientRect()),
              (n = r.ownerDocument.defaultView),
              { top: e.top + n.pageYOffset, left: e.left + n.pageXOffset })
            : { top: 0, left: 0 }
          : void 0;
      },
      position: function () {
        if (this[0]) {
          var e,
            t,
            n,
            r = this[0],
            i = { top: 0, left: 0 };
          if ("fixed" === S.css(r, "position")) t = r.getBoundingClientRect();
          else {
            (t = this.offset()),
              (n = r.ownerDocument),
              (e = r.offsetParent || n.documentElement);
            while (
              e &&
              (e === n.body || e === n.documentElement) &&
              "static" === S.css(e, "position")
            )
              e = e.parentNode;
            e &&
              e !== r &&
              1 === e.nodeType &&
              (((i = S(e).offset()).top += S.css(e, "borderTopWidth", !0)),
              (i.left += S.css(e, "borderLeftWidth", !0)));
          }
          return {
            top: t.top - i.top - S.css(r, "marginTop", !0),
            left: t.left - i.left - S.css(r, "marginLeft", !0),
          };
        }
      },
      offsetParent: function () {
        return this.map(function () {
          var e = this.offsetParent;
          while (e && "static" === S.css(e, "position")) e = e.offsetParent;
          return e || re;
        });
      },
    }),
    S.each(
      { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
      function (t, i) {
        var o = "pageYOffset" === i;
        S.fn[t] = function (e) {
          return $(
            this,
            function (e, t, n) {
              var r;
              if (
                (x(e) ? (r = e) : 9 === e.nodeType && (r = e.defaultView),
                void 0 === n)
              )
                return r ? r[i] : e[t];
              r
                ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset)
                : (e[t] = n);
            },
            t,
            e,
            arguments.length
          );
        };
      }
    ),
    S.each(["top", "left"], function (e, n) {
      S.cssHooks[n] = Fe(y.pixelPosition, function (e, t) {
        if (t)
          return (t = We(e, n)), Pe.test(t) ? S(e).position()[n] + "px" : t;
      });
    }),
    S.each({ Height: "height", Width: "width" }, function (a, s) {
      S.each(
        { padding: "inner" + a, content: s, "": "outer" + a },
        function (r, o) {
          S.fn[o] = function (e, t) {
            var n = arguments.length && (r || "boolean" != typeof e),
              i = r || (!0 === e || !0 === t ? "margin" : "border");
            return $(
              this,
              function (e, t, n) {
                var r;
                return x(e)
                  ? 0 === o.indexOf("outer")
                    ? e["inner" + a]
                    : e.document.documentElement["client" + a]
                  : 9 === e.nodeType
                  ? ((r = e.documentElement),
                    Math.max(
                      e.body["scroll" + a],
                      r["scroll" + a],
                      e.body["offset" + a],
                      r["offset" + a],
                      r["client" + a]
                    ))
                  : void 0 === n
                  ? S.css(e, t, i)
                  : S.style(e, t, n, i);
              },
              s,
              n ? e : void 0,
              n
            );
          };
        }
      );
    }),
    S.each(
      [
        "ajaxStart",
        "ajaxStop",
        "ajaxComplete",
        "ajaxError",
        "ajaxSuccess",
        "ajaxSend",
      ],
      function (e, t) {
        S.fn[t] = function (e) {
          return this.on(t, e);
        };
      }
    ),
    S.fn.extend({
      bind: function (e, t, n) {
        return this.on(e, null, t, n);
      },
      unbind: function (e, t) {
        return this.off(e, null, t);
      },
      delegate: function (e, t, n, r) {
        return this.on(t, e, n, r);
      },
      undelegate: function (e, t, n) {
        return 1 === arguments.length
          ? this.off(e, "**")
          : this.off(t, e || "**", n);
      },
      hover: function (e, t) {
        return this.mouseenter(e).mouseleave(t || e);
      },
    }),
    S.each(
      "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
        " "
      ),
      function (e, n) {
        S.fn[n] = function (e, t) {
          return 0 < arguments.length
            ? this.on(n, null, e, t)
            : this.trigger(n);
        };
      }
    );
  var Xt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
  (S.proxy = function (e, t) {
    var n, r, i;
    if (("string" == typeof t && ((n = e[t]), (t = e), (e = n)), m(e)))
      return (
        (r = s.call(arguments, 2)),
        ((i = function () {
          return e.apply(t || this, r.concat(s.call(arguments)));
        }).guid = e.guid =
          e.guid || S.guid++),
        i
      );
  }),
    (S.holdReady = function (e) {
      e ? S.readyWait++ : S.ready(!0);
    }),
    (S.isArray = Array.isArray),
    (S.parseJSON = JSON.parse),
    (S.nodeName = A),
    (S.isFunction = m),
    (S.isWindow = x),
    (S.camelCase = X),
    (S.type = w),
    (S.now = Date.now),
    (S.isNumeric = function (e) {
      var t = S.type(e);
      return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
    }),
    (S.trim = function (e) {
      return null == e ? "" : (e + "").replace(Xt, "");
    }),
    "function" == typeof define &&
      define.amd &&
      define("jquery", [], function () {
        return S;
      });
  var Vt = C.jQuery,
    Gt = C.$;
  return (
    (S.noConflict = function (e) {
      return C.$ === S && (C.$ = Gt), e && C.jQuery === S && (C.jQuery = Vt), S;
    }),
    "undefined" == typeof e && (C.jQuery = C.$ = S),
    S
  );
});
/*! Bootstrap v4.6.0 (https://getbootstrap.com/) * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors) * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE) */
!(function (t, e) {
  "object" == typeof exports && "undefined" != typeof module
    ? e(exports, require("jquery"))
    : "function" == typeof define && define.amd
    ? define(["exports", "jquery"], e)
    : e(
        ((t =
          "undefined" != typeof globalThis ? globalThis : t || self).bootstrap =
          {}),
        t.jQuery
      );
})(this, function (t, e) {
  "use strict";
  function n(t) {
    return t && "object" == typeof t && "default" in t ? t : { default: t };
  }
  var i = n(e);
  function o(t, e) {
    for (var n = 0; n < e.length; n++) {
      var i = e[n];
      (i.enumerable = i.enumerable || !1),
        (i.configurable = !0),
        "value" in i && (i.writable = !0),
        Object.defineProperty(t, i.key, i);
    }
  }
  function r(t, e, n) {
    return e && o(t.prototype, e), n && o(t, n), t;
  }
  function a() {
    return (a =
      Object.assign ||
      function (t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = arguments[e];
          for (var i in n)
            Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
        }
        return t;
      }).apply(this, arguments);
  }
  function s(t) {
    var e = this,
      n = !1;
    return (
      i.default(this).one(l.TRANSITION_END, function () {
        n = !0;
      }),
      setTimeout(function () {
        n || l.triggerTransitionEnd(e);
      }, t),
      this
    );
  }
  var l = {
    TRANSITION_END: "bsTransitionEnd",
    getUID: function (t) {
      do {
        t += ~~(1e6 * Math.random());
      } while (document.getElementById(t));
      return t;
    },
    getSelectorFromElement: function (t) {
      var e = t.getAttribute("data-target");
      if (!e || "#" === e) {
        var n = t.getAttribute("href");
        e = n && "#" !== n ? n.trim() : "";
      }
      try {
        return document.querySelector(e) ? e : null;
      } catch (t) {
        return null;
      }
    },
    getTransitionDurationFromElement: function (t) {
      if (!t) return 0;
      var e = i.default(t).css("transition-duration"),
        n = i.default(t).css("transition-delay"),
        o = parseFloat(e),
        r = parseFloat(n);
      return o || r
        ? ((e = e.split(",")[0]),
          (n = n.split(",")[0]),
          1e3 * (parseFloat(e) + parseFloat(n)))
        : 0;
    },
    reflow: function (t) {
      return t.offsetHeight;
    },
    triggerTransitionEnd: function (t) {
      i.default(t).trigger("transitionend");
    },
    supportsTransitionEnd: function () {
      return Boolean("transitionend");
    },
    isElement: function (t) {
      return (t[0] || t).nodeType;
    },
    typeCheckConfig: function (t, e, n) {
      for (var i in n)
        if (Object.prototype.hasOwnProperty.call(n, i)) {
          var o = n[i],
            r = e[i],
            a =
              r && l.isElement(r)
                ? "element"
                : null === (s = r) || "undefined" == typeof s
                ? "" + s
                : {}.toString
                    .call(s)
                    .match(/\s([a-z]+)/i)[1]
                    .toLowerCase();
          if (!new RegExp(o).test(a))
            throw new Error(
              t.toUpperCase() +
                ': Option "' +
                i +
                '" provided type "' +
                a +
                '" but expected type "' +
                o +
                '".'
            );
        }
      var s;
    },
    findShadowRoot: function (t) {
      if (!document.documentElement.attachShadow) return null;
      if ("function" == typeof t.getRootNode) {
        var e = t.getRootNode();
        return e instanceof ShadowRoot ? e : null;
      }
      return t instanceof ShadowRoot
        ? t
        : t.parentNode
        ? l.findShadowRoot(t.parentNode)
        : null;
    },
    jQueryDetection: function () {
      if ("undefined" == typeof i.default)
        throw new TypeError(
          "Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript."
        );
      var t = i.default.fn.jquery.split(" ")[0].split(".");
      if (
        (t[0] < 2 && t[1] < 9) ||
        (1 === t[0] && 9 === t[1] && t[2] < 1) ||
        t[0] >= 4
      )
        throw new Error(
          "Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0"
        );
    },
  };
  l.jQueryDetection(),
    (i.default.fn.emulateTransitionEnd = s),
    (i.default.event.special[l.TRANSITION_END] = {
      bindType: "transitionend",
      delegateType: "transitionend",
      handle: function (t) {
        if (i.default(t.target).is(this))
          return t.handleObj.handler.apply(this, arguments);
      },
    });
  var u = "alert",
    f = i.default.fn[u],
    d = (function () {
      function t(t) {
        this._element = t;
      }
      var e = t.prototype;
      return (
        (e.close = function (t) {
          var e = this._element;
          t && (e = this._getRootElement(t)),
            this._triggerCloseEvent(e).isDefaultPrevented() ||
              this._removeElement(e);
        }),
        (e.dispose = function () {
          i.default.removeData(this._element, "bs.alert"),
            (this._element = null);
        }),
        (e._getRootElement = function (t) {
          var e = l.getSelectorFromElement(t),
            n = !1;
          return (
            e && (n = document.querySelector(e)),
            n || (n = i.default(t).closest(".alert")[0]),
            n
          );
        }),
        (e._triggerCloseEvent = function (t) {
          var e = i.default.Event("close.bs.alert");
          return i.default(t).trigger(e), e;
        }),
        (e._removeElement = function (t) {
          var e = this;
          if (
            (i.default(t).removeClass("show"), i.default(t).hasClass("fade"))
          ) {
            var n = l.getTransitionDurationFromElement(t);
            i.default(t)
              .one(l.TRANSITION_END, function (n) {
                return e._destroyElement(t, n);
              })
              .emulateTransitionEnd(n);
          } else this._destroyElement(t);
        }),
        (e._destroyElement = function (t) {
          i.default(t).detach().trigger("closed.bs.alert").remove();
        }),
        (t._jQueryInterface = function (e) {
          return this.each(function () {
            var n = i.default(this),
              o = n.data("bs.alert");
            o || ((o = new t(this)), n.data("bs.alert", o)),
              "close" === e && o[e](this);
          });
        }),
        (t._handleDismiss = function (t) {
          return function (e) {
            e && e.preventDefault(), t.close(this);
          };
        }),
        r(t, null, [
          {
            key: "VERSION",
            get: function () {
              return "4.6.0";
            },
          },
        ]),
        t
      );
    })();
  i
    .default(document)
    .on(
      "click.bs.alert.data-api",
      '[data-dismiss="alert"]',
      d._handleDismiss(new d())
    ),
    (i.default.fn[u] = d._jQueryInterface),
    (i.default.fn[u].Constructor = d),
    (i.default.fn[u].noConflict = function () {
      return (i.default.fn[u] = f), d._jQueryInterface;
    });
  var c = i.default.fn.button,
    h = (function () {
      function t(t) {
        (this._element = t), (this.shouldAvoidTriggerChange = !1);
      }
      var e = t.prototype;
      return (
        (e.toggle = function () {
          var t = !0,
            e = !0,
            n = i.default(this._element).closest('[data-toggle="buttons"]')[0];
          if (n) {
            var o = this._element.querySelector('input:not([type="hidden"])');
            if (o) {
              if ("radio" === o.type)
                if (o.checked && this._element.classList.contains("active"))
                  t = !1;
                else {
                  var r = n.querySelector(".active");
                  r && i.default(r).removeClass("active");
                }
              t &&
                (("checkbox" !== o.type && "radio" !== o.type) ||
                  (o.checked = !this._element.classList.contains("active")),
                this.shouldAvoidTriggerChange ||
                  i.default(o).trigger("change")),
                o.focus(),
                (e = !1);
            }
          }
          this._element.hasAttribute("disabled") ||
            this._element.classList.contains("disabled") ||
            (e &&
              this._element.setAttribute(
                "aria-pressed",
                !this._element.classList.contains("active")
              ),
            t && i.default(this._element).toggleClass("active"));
        }),
        (e.dispose = function () {
          i.default.removeData(this._element, "bs.button"),
            (this._element = null);
        }),
        (t._jQueryInterface = function (e, n) {
          return this.each(function () {
            var o = i.default(this),
              r = o.data("bs.button");
            r || ((r = new t(this)), o.data("bs.button", r)),
              (r.shouldAvoidTriggerChange = n),
              "toggle" === e && r[e]();
          });
        }),
        r(t, null, [
          {
            key: "VERSION",
            get: function () {
              return "4.6.0";
            },
          },
        ]),
        t
      );
    })();
  i
    .default(document)
    .on("click.bs.button.data-api", '[data-toggle^="button"]', function (t) {
      var e = t.target,
        n = e;
      if (
        (i.default(e).hasClass("btn") || (e = i.default(e).closest(".btn")[0]),
        !e || e.hasAttribute("disabled") || e.classList.contains("disabled"))
      )
        t.preventDefault();
      else {
        var o = e.querySelector('input:not([type="hidden"])');
        if (
          o &&
          (o.hasAttribute("disabled") || o.classList.contains("disabled"))
        )
          return void t.preventDefault();
        ("INPUT" !== n.tagName && "LABEL" === e.tagName) ||
          h._jQueryInterface.call(
            i.default(e),
            "toggle",
            "INPUT" === n.tagName
          );
      }
    })
    .on(
      "focus.bs.button.data-api blur.bs.button.data-api",
      '[data-toggle^="button"]',
      function (t) {
        var e = i.default(t.target).closest(".btn")[0];
        i.default(e).toggleClass("focus", /^focus(in)?$/.test(t.type));
      }
    ),
    i.default(window).on("load.bs.button.data-api", function () {
      for (
        var t = [].slice.call(
            document.querySelectorAll('[data-toggle="buttons"] .btn')
          ),
          e = 0,
          n = t.length;
        e < n;
        e++
      ) {
        var i = t[e],
          o = i.querySelector('input:not([type="hidden"])');
        o.checked || o.hasAttribute("checked")
          ? i.classList.add("active")
          : i.classList.remove("active");
      }
      for (
        var r = 0,
          a = (t = [].slice.call(
            document.querySelectorAll('[data-toggle="button"]')
          )).length;
        r < a;
        r++
      ) {
        var s = t[r];
        "true" === s.getAttribute("aria-pressed")
          ? s.classList.add("active")
          : s.classList.remove("active");
      }
    }),
    (i.default.fn.button = h._jQueryInterface),
    (i.default.fn.button.Constructor = h),
    (i.default.fn.button.noConflict = function () {
      return (i.default.fn.button = c), h._jQueryInterface;
    });
  var p = "carousel",
    m = ".bs.carousel",
    g = i.default.fn[p],
    v = {
      interval: 5e3,
      keyboard: !0,
      slide: !1,
      pause: "hover",
      wrap: !0,
      touch: !0,
    },
    _ = {
      interval: "(number|boolean)",
      keyboard: "boolean",
      slide: "(boolean|string)",
      pause: "(string|boolean)",
      wrap: "boolean",
      touch: "boolean",
    },
    b = { TOUCH: "touch", PEN: "pen" },
    y = (function () {
      function t(t, e) {
        (this._items = null),
          (this._interval = null),
          (this._activeElement = null),
          (this._isPaused = !1),
          (this._isSliding = !1),
          (this.touchTimeout = null),
          (this.touchStartX = 0),
          (this.touchDeltaX = 0),
          (this._config = this._getConfig(e)),
          (this._element = t),
          (this._indicatorsElement = this._element.querySelector(
            ".carousel-indicators"
          )),
          (this._touchSupported =
            "ontouchstart" in document.documentElement ||
            navigator.maxTouchPoints > 0),
          (this._pointerEvent = Boolean(
            window.PointerEvent || window.MSPointerEvent
          )),
          this._addEventListeners();
      }
      var e = t.prototype;
      return (
        (e.next = function () {
          this._isSliding || this._slide("next");
        }),
        (e.nextWhenVisible = function () {
          var t = i.default(this._element);
          !document.hidden &&
            t.is(":visible") &&
            "hidden" !== t.css("visibility") &&
            this.next();
        }),
        (e.prev = function () {
          this._isSliding || this._slide("prev");
        }),
        (e.pause = function (t) {
          t || (this._isPaused = !0),
            this._element.querySelector(
              ".carousel-item-next, .carousel-item-prev"
            ) && (l.triggerTransitionEnd(this._element), this.cycle(!0)),
            clearInterval(this._interval),
            (this._interval = null);
        }),
        (e.cycle = function (t) {
          t || (this._isPaused = !1),
            this._interval &&
              (clearInterval(this._interval), (this._interval = null)),
            this._config.interval &&
              !this._isPaused &&
              (this._updateInterval(),
              (this._interval = setInterval(
                (document.visibilityState
                  ? this.nextWhenVisible
                  : this.next
                ).bind(this),
                this._config.interval
              )));
        }),
        (e.to = function (t) {
          var e = this;
          this._activeElement = this._element.querySelector(
            ".active.carousel-item"
          );
          var n = this._getItemIndex(this._activeElement);
          if (!(t > this._items.length - 1 || t < 0))
            if (this._isSliding)
              i.default(this._element).one("slid.bs.carousel", function () {
                return e.to(t);
              });
            else {
              if (n === t) return this.pause(), void this.cycle();
              var o = t > n ? "next" : "prev";
              this._slide(o, this._items[t]);
            }
        }),
        (e.dispose = function () {
          i.default(this._element).off(m),
            i.default.removeData(this._element, "bs.carousel"),
            (this._items = null),
            (this._config = null),
            (this._element = null),
            (this._interval = null),
            (this._isPaused = null),
            (this._isSliding = null),
            (this._activeElement = null),
            (this._indicatorsElement = null);
        }),
        (e._getConfig = function (t) {
          return (t = a({}, v, t)), l.typeCheckConfig(p, t, _), t;
        }),
        (e._handleSwipe = function () {
          var t = Math.abs(this.touchDeltaX);
          if (!(t <= 40)) {
            var e = t / this.touchDeltaX;
            (this.touchDeltaX = 0), e > 0 && this.prev(), e < 0 && this.next();
          }
        }),
        (e._addEventListeners = function () {
          var t = this;
          this._config.keyboard &&
            i.default(this._element).on("keydown.bs.carousel", function (e) {
              return t._keydown(e);
            }),
            "hover" === this._config.pause &&
              i
                .default(this._element)
                .on("mouseenter.bs.carousel", function (e) {
                  return t.pause(e);
                })
                .on("mouseleave.bs.carousel", function (e) {
                  return t.cycle(e);
                }),
            this._config.touch && this._addTouchEventListeners();
        }),
        (e._addTouchEventListeners = function () {
          var t = this;
          if (this._touchSupported) {
            var e = function (e) {
                t._pointerEvent && b[e.originalEvent.pointerType.toUpperCase()]
                  ? (t.touchStartX = e.originalEvent.clientX)
                  : t._pointerEvent ||
                    (t.touchStartX = e.originalEvent.touches[0].clientX);
              },
              n = function (e) {
                t._pointerEvent &&
                  b[e.originalEvent.pointerType.toUpperCase()] &&
                  (t.touchDeltaX = e.originalEvent.clientX - t.touchStartX),
                  t._handleSwipe(),
                  "hover" === t._config.pause &&
                    (t.pause(),
                    t.touchTimeout && clearTimeout(t.touchTimeout),
                    (t.touchTimeout = setTimeout(function (e) {
                      return t.cycle(e);
                    }, 500 + t._config.interval)));
              };
            i
              .default(this._element.querySelectorAll(".carousel-item img"))
              .on("dragstart.bs.carousel", function (t) {
                return t.preventDefault();
              }),
              this._pointerEvent
                ? (i
                    .default(this._element)
                    .on("pointerdown.bs.carousel", function (t) {
                      return e(t);
                    }),
                  i
                    .default(this._element)
                    .on("pointerup.bs.carousel", function (t) {
                      return n(t);
                    }),
                  this._element.classList.add("pointer-event"))
                : (i
                    .default(this._element)
                    .on("touchstart.bs.carousel", function (t) {
                      return e(t);
                    }),
                  i
                    .default(this._element)
                    .on("touchmove.bs.carousel", function (e) {
                      return (function (e) {
                        e.originalEvent.touches &&
                        e.originalEvent.touches.length > 1
                          ? (t.touchDeltaX = 0)
                          : (t.touchDeltaX =
                              e.originalEvent.touches[0].clientX -
                              t.touchStartX);
                      })(e);
                    }),
                  i
                    .default(this._element)
                    .on("touchend.bs.carousel", function (t) {
                      return n(t);
                    }));
          }
        }),
        (e._keydown = function (t) {
          if (!/input|textarea/i.test(t.target.tagName))
            switch (t.which) {
              case 37:
                t.preventDefault(), this.prev();
                break;
              case 39:
                t.preventDefault(), this.next();
            }
        }),
        (e._getItemIndex = function (t) {
          return (
            (this._items =
              t && t.parentNode
                ? [].slice.call(t.parentNode.querySelectorAll(".carousel-item"))
                : []),
            this._items.indexOf(t)
          );
        }),
        (e._getItemByDirection = function (t, e) {
          var n = "next" === t,
            i = "prev" === t,
            o = this._getItemIndex(e),
            r = this._items.length - 1;
          if (((i && 0 === o) || (n && o === r)) && !this._config.wrap)
            return e;
          var a = (o + ("prev" === t ? -1 : 1)) % this._items.length;
          return -1 === a
            ? this._items[this._items.length - 1]
            : this._items[a];
        }),
        (e._triggerSlideEvent = function (t, e) {
          var n = this._getItemIndex(t),
            o = this._getItemIndex(
              this._element.querySelector(".active.carousel-item")
            ),
            r = i.default.Event("slide.bs.carousel", {
              relatedTarget: t,
              direction: e,
              from: o,
              to: n,
            });
          return i.default(this._element).trigger(r), r;
        }),
        (e._setActiveIndicatorElement = function (t) {
          if (this._indicatorsElement) {
            var e = [].slice.call(
              this._indicatorsElement.querySelectorAll(".active")
            );
            i.default(e).removeClass("active");
            var n = this._indicatorsElement.children[this._getItemIndex(t)];
            n && i.default(n).addClass("active");
          }
        }),
        (e._updateInterval = function () {
          var t =
            this._activeElement ||
            this._element.querySelector(".active.carousel-item");
          if (t) {
            var e = parseInt(t.getAttribute("data-interval"), 10);
            e
              ? ((this._config.defaultInterval =
                  this._config.defaultInterval || this._config.interval),
                (this._config.interval = e))
              : (this._config.interval =
                  this._config.defaultInterval || this._config.interval);
          }
        }),
        (e._slide = function (t, e) {
          var n,
            o,
            r,
            a = this,
            s = this._element.querySelector(".active.carousel-item"),
            u = this._getItemIndex(s),
            f = e || (s && this._getItemByDirection(t, s)),
            d = this._getItemIndex(f),
            c = Boolean(this._interval);
          if (
            ("next" === t
              ? ((n = "carousel-item-left"),
                (o = "carousel-item-next"),
                (r = "left"))
              : ((n = "carousel-item-right"),
                (o = "carousel-item-prev"),
                (r = "right")),
            f && i.default(f).hasClass("active"))
          )
            this._isSliding = !1;
          else if (
            !this._triggerSlideEvent(f, r).isDefaultPrevented() &&
            s &&
            f
          ) {
            (this._isSliding = !0),
              c && this.pause(),
              this._setActiveIndicatorElement(f),
              (this._activeElement = f);
            var h = i.default.Event("slid.bs.carousel", {
              relatedTarget: f,
              direction: r,
              from: u,
              to: d,
            });
            if (i.default(this._element).hasClass("slide")) {
              i.default(f).addClass(o),
                l.reflow(f),
                i.default(s).addClass(n),
                i.default(f).addClass(n);
              var p = l.getTransitionDurationFromElement(s);
              i.default(s)
                .one(l.TRANSITION_END, function () {
                  i
                    .default(f)
                    .removeClass(n + " " + o)
                    .addClass("active"),
                    i.default(s).removeClass("active " + o + " " + n),
                    (a._isSliding = !1),
                    setTimeout(function () {
                      return i.default(a._element).trigger(h);
                    }, 0);
                })
                .emulateTransitionEnd(p);
            } else
              i.default(s).removeClass("active"),
                i.default(f).addClass("active"),
                (this._isSliding = !1),
                i.default(this._element).trigger(h);
            c && this.cycle();
          }
        }),
        (t._jQueryInterface = function (e) {
          return this.each(function () {
            var n = i.default(this).data("bs.carousel"),
              o = a({}, v, i.default(this).data());
            "object" == typeof e && (o = a({}, o, e));
            var r = "string" == typeof e ? e : o.slide;
            if (
              (n ||
                ((n = new t(this, o)), i.default(this).data("bs.carousel", n)),
              "number" == typeof e)
            )
              n.to(e);
            else if ("string" == typeof r) {
              if ("undefined" == typeof n[r])
                throw new TypeError('No method named "' + r + '"');
              n[r]();
            } else o.interval && o.ride && (n.pause(), n.cycle());
          });
        }),
        (t._dataApiClickHandler = function (e) {
          var n = l.getSelectorFromElement(this);
          if (n) {
            var o = i.default(n)[0];
            if (o && i.default(o).hasClass("carousel")) {
              var r = a({}, i.default(o).data(), i.default(this).data()),
                s = this.getAttribute("data-slide-to");
              s && (r.interval = !1),
                t._jQueryInterface.call(i.default(o), r),
                s && i.default(o).data("bs.carousel").to(s),
                e.preventDefault();
            }
          }
        }),
        r(t, null, [
          {
            key: "VERSION",
            get: function () {
              return "4.6.0";
            },
          },
          {
            key: "Default",
            get: function () {
              return v;
            },
          },
        ]),
        t
      );
    })();
  i
    .default(document)
    .on(
      "click.bs.carousel.data-api",
      "[data-slide], [data-slide-to]",
      y._dataApiClickHandler
    ),
    i.default(window).on("load.bs.carousel.data-api", function () {
      for (
        var t = [].slice.call(
            document.querySelectorAll('[data-ride="carousel"]')
          ),
          e = 0,
          n = t.length;
        e < n;
        e++
      ) {
        var o = i.default(t[e]);
        y._jQueryInterface.call(o, o.data());
      }
    }),
    (i.default.fn[p] = y._jQueryInterface),
    (i.default.fn[p].Constructor = y),
    (i.default.fn[p].noConflict = function () {
      return (i.default.fn[p] = g), y._jQueryInterface;
    });
  var w = "collapse",
    E = i.default.fn[w],
    T = { toggle: !0, parent: "" },
    C = { toggle: "boolean", parent: "(string|element)" },
    S = (function () {
      function t(t, e) {
        (this._isTransitioning = !1),
          (this._element = t),
          (this._config = this._getConfig(e)),
          (this._triggerArray = [].slice.call(
            document.querySelectorAll(
              '[data-toggle="collapse"][href="#' +
                t.id +
                '"],[data-toggle="collapse"][data-target="#' +
                t.id +
                '"]'
            )
          ));
        for (
          var n = [].slice.call(
              document.querySelectorAll('[data-toggle="collapse"]')
            ),
            i = 0,
            o = n.length;
          i < o;
          i++
        ) {
          var r = n[i],
            a = l.getSelectorFromElement(r),
            s = [].slice
              .call(document.querySelectorAll(a))
              .filter(function (e) {
                return e === t;
              });
          null !== a &&
            s.length > 0 &&
            ((this._selector = a), this._triggerArray.push(r));
        }
        (this._parent = this._config.parent ? this._getParent() : null),
          this._config.parent ||
            this._addAriaAndCollapsedClass(this._element, this._triggerArray),
          this._config.toggle && this.toggle();
      }
      var e = t.prototype;
      return (
        (e.toggle = function () {
          i.default(this._element).hasClass("show") ? this.hide() : this.show();
        }),
        (e.show = function () {
          var e,
            n,
            o = this;
          if (
            !this._isTransitioning &&
            !i.default(this._element).hasClass("show") &&
            (this._parent &&
              0 ===
                (e = [].slice
                  .call(this._parent.querySelectorAll(".show, .collapsing"))
                  .filter(function (t) {
                    return "string" == typeof o._config.parent
                      ? t.getAttribute("data-parent") === o._config.parent
                      : t.classList.contains("collapse");
                  })).length &&
              (e = null),
            !(
              e &&
              (n = i.default(e).not(this._selector).data("bs.collapse")) &&
              n._isTransitioning
            ))
          ) {
            var r = i.default.Event("show.bs.collapse");
            if (
              (i.default(this._element).trigger(r), !r.isDefaultPrevented())
            ) {
              e &&
                (t._jQueryInterface.call(
                  i.default(e).not(this._selector),
                  "hide"
                ),
                n || i.default(e).data("bs.collapse", null));
              var a = this._getDimension();
              i
                .default(this._element)
                .removeClass("collapse")
                .addClass("collapsing"),
                (this._element.style[a] = 0),
                this._triggerArray.length &&
                  i
                    .default(this._triggerArray)
                    .removeClass("collapsed")
                    .attr("aria-expanded", !0),
                this.setTransitioning(!0);
              var s = "scroll" + (a[0].toUpperCase() + a.slice(1)),
                u = l.getTransitionDurationFromElement(this._element);
              i
                .default(this._element)
                .one(l.TRANSITION_END, function () {
                  i
                    .default(o._element)
                    .removeClass("collapsing")
                    .addClass("collapse show"),
                    (o._element.style[a] = ""),
                    o.setTransitioning(!1),
                    i.default(o._element).trigger("shown.bs.collapse");
                })
                .emulateTransitionEnd(u),
                (this._element.style[a] = this._element[s] + "px");
            }
          }
        }),
        (e.hide = function () {
          var t = this;
          if (
            !this._isTransitioning &&
            i.default(this._element).hasClass("show")
          ) {
            var e = i.default.Event("hide.bs.collapse");
            if (
              (i.default(this._element).trigger(e), !e.isDefaultPrevented())
            ) {
              var n = this._getDimension();
              (this._element.style[n] =
                this._element.getBoundingClientRect()[n] + "px"),
                l.reflow(this._element),
                i
                  .default(this._element)
                  .addClass("collapsing")
                  .removeClass("collapse show");
              var o = this._triggerArray.length;
              if (o > 0)
                for (var r = 0; r < o; r++) {
                  var a = this._triggerArray[r],
                    s = l.getSelectorFromElement(a);
                  if (null !== s)
                    i
                      .default([].slice.call(document.querySelectorAll(s)))
                      .hasClass("show") ||
                      i
                        .default(a)
                        .addClass("collapsed")
                        .attr("aria-expanded", !1);
                }
              this.setTransitioning(!0);
              this._element.style[n] = "";
              var u = l.getTransitionDurationFromElement(this._element);
              i.default(this._element)
                .one(l.TRANSITION_END, function () {
                  t.setTransitioning(!1),
                    i
                      .default(t._element)
                      .removeClass("collapsing")
                      .addClass("collapse")
                      .trigger("hidden.bs.collapse");
                })
                .emulateTransitionEnd(u);
            }
          }
        }),
        (e.setTransitioning = function (t) {
          this._isTransitioning = t;
        }),
        (e.dispose = function () {
          i.default.removeData(this._element, "bs.collapse"),
            (this._config = null),
            (this._parent = null),
            (this._element = null),
            (this._triggerArray = null),
            (this._isTransitioning = null);
        }),
        (e._getConfig = function (t) {
          return (
            ((t = a({}, T, t)).toggle = Boolean(t.toggle)),
            l.typeCheckConfig(w, t, C),
            t
          );
        }),
        (e._getDimension = function () {
          return i.default(this._element).hasClass("width")
            ? "width"
            : "height";
        }),
        (e._getParent = function () {
          var e,
            n = this;
          l.isElement(this._config.parent)
            ? ((e = this._config.parent),
              "undefined" != typeof this._config.parent.jquery &&
                (e = this._config.parent[0]))
            : (e = document.querySelector(this._config.parent));
          var o =
              '[data-toggle="collapse"][data-parent="' +
              this._config.parent +
              '"]',
            r = [].slice.call(e.querySelectorAll(o));
          return (
            i.default(r).each(function (e, i) {
              n._addAriaAndCollapsedClass(t._getTargetFromElement(i), [i]);
            }),
            e
          );
        }),
        (e._addAriaAndCollapsedClass = function (t, e) {
          var n = i.default(t).hasClass("show");
          e.length &&
            i.default(e).toggleClass("collapsed", !n).attr("aria-expanded", n);
        }),
        (t._getTargetFromElement = function (t) {
          var e = l.getSelectorFromElement(t);
          return e ? document.querySelector(e) : null;
        }),
        (t._jQueryInterface = function (e) {
          return this.each(function () {
            var n = i.default(this),
              o = n.data("bs.collapse"),
              r = a({}, T, n.data(), "object" == typeof e && e ? e : {});
            if (
              (!o &&
                r.toggle &&
                "string" == typeof e &&
                /show|hide/.test(e) &&
                (r.toggle = !1),
              o || ((o = new t(this, r)), n.data("bs.collapse", o)),
              "string" == typeof e)
            ) {
              if ("undefined" == typeof o[e])
                throw new TypeError('No method named "' + e + '"');
              o[e]();
            }
          });
        }),
        r(t, null, [
          {
            key: "VERSION",
            get: function () {
              return "4.6.0";
            },
          },
          {
            key: "Default",
            get: function () {
              return T;
            },
          },
        ]),
        t
      );
    })();
  i
    .default(document)
    .on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function (t) {
      "A" === t.currentTarget.tagName && t.preventDefault();
      var e = i.default(this),
        n = l.getSelectorFromElement(this),
        o = [].slice.call(document.querySelectorAll(n));
      i.default(o).each(function () {
        var t = i.default(this),
          n = t.data("bs.collapse") ? "toggle" : e.data();
        S._jQueryInterface.call(t, n);
      });
    }),
    (i.default.fn[w] = S._jQueryInterface),
    (i.default.fn[w].Constructor = S),
    (i.default.fn[w].noConflict = function () {
      return (i.default.fn[w] = E), S._jQueryInterface;
    });
  var D =
      "undefined" != typeof window &&
      "undefined" != typeof document &&
      "undefined" != typeof navigator,
    N = (function () {
      for (var t = ["Edge", "Trident", "Firefox"], e = 0; e < t.length; e += 1)
        if (D && navigator.userAgent.indexOf(t[e]) >= 0) return 1;
      return 0;
    })();
  var k =
    D && window.Promise
      ? function (t) {
          var e = !1;
          return function () {
            e ||
              ((e = !0),
              window.Promise.resolve().then(function () {
                (e = !1), t();
              }));
          };
        }
      : function (t) {
          var e = !1;
          return function () {
            e ||
              ((e = !0),
              setTimeout(function () {
                (e = !1), t();
              }, N));
          };
        };
  function A(t) {
    return t && "[object Function]" === {}.toString.call(t);
  }
  function I(t, e) {
    if (1 !== t.nodeType) return [];
    var n = t.ownerDocument.defaultView.getComputedStyle(t, null);
    return e ? n[e] : n;
  }
  function O(t) {
    return "HTML" === t.nodeName ? t : t.parentNode || t.host;
  }
  function x(t) {
    if (!t) return document.body;
    switch (t.nodeName) {
      case "HTML":
      case "BODY":
        return t.ownerDocument.body;
      case "#document":
        return t.body;
    }
    var e = I(t),
      n = e.overflow,
      i = e.overflowX,
      o = e.overflowY;
    return /(auto|scroll|overlay)/.test(n + o + i) ? t : x(O(t));
  }
  function j(t) {
    return t && t.referenceNode ? t.referenceNode : t;
  }
  var L = D && !(!window.MSInputMethodContext || !document.documentMode),
    P = D && /MSIE 10/.test(navigator.userAgent);
  function F(t) {
    return 11 === t ? L : 10 === t ? P : L || P;
  }
  function R(t) {
    if (!t) return document.documentElement;
    for (
      var e = F(10) ? document.body : null, n = t.offsetParent || null;
      n === e && t.nextElementSibling;

    )
      n = (t = t.nextElementSibling).offsetParent;
    var i = n && n.nodeName;
    return i && "BODY" !== i && "HTML" !== i
      ? -1 !== ["TH", "TD", "TABLE"].indexOf(n.nodeName) &&
        "static" === I(n, "position")
        ? R(n)
        : n
      : t
      ? t.ownerDocument.documentElement
      : document.documentElement;
  }
  function H(t) {
    return null !== t.parentNode ? H(t.parentNode) : t;
  }
  function M(t, e) {
    if (!(t && t.nodeType && e && e.nodeType)) return document.documentElement;
    var n = t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_FOLLOWING,
      i = n ? t : e,
      o = n ? e : t,
      r = document.createRange();
    r.setStart(i, 0), r.setEnd(o, 0);
    var a,
      s,
      l = r.commonAncestorContainer;
    if ((t !== l && e !== l) || i.contains(o))
      return "BODY" === (s = (a = l).nodeName) ||
        ("HTML" !== s && R(a.firstElementChild) !== a)
        ? R(l)
        : l;
    var u = H(t);
    return u.host ? M(u.host, e) : M(t, H(e).host);
  }
  function q(t) {
    var e =
        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "top",
      n = "top" === e ? "scrollTop" : "scrollLeft",
      i = t.nodeName;
    if ("BODY" === i || "HTML" === i) {
      var o = t.ownerDocument.documentElement,
        r = t.ownerDocument.scrollingElement || o;
      return r[n];
    }
    return t[n];
  }
  function B(t, e) {
    var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
      i = q(e, "top"),
      o = q(e, "left"),
      r = n ? -1 : 1;
    return (
      (t.top += i * r),
      (t.bottom += i * r),
      (t.left += o * r),
      (t.right += o * r),
      t
    );
  }
  function Q(t, e) {
    var n = "x" === e ? "Left" : "Top",
      i = "Left" === n ? "Right" : "Bottom";
    return (
      parseFloat(t["border" + n + "Width"]) +
      parseFloat(t["border" + i + "Width"])
    );
  }
  function W(t, e, n, i) {
    return Math.max(
      e["offset" + t],
      e["scroll" + t],
      n["client" + t],
      n["offset" + t],
      n["scroll" + t],
      F(10)
        ? parseInt(n["offset" + t]) +
            parseInt(i["margin" + ("Height" === t ? "Top" : "Left")]) +
            parseInt(i["margin" + ("Height" === t ? "Bottom" : "Right")])
        : 0
    );
  }
  function U(t) {
    var e = t.body,
      n = t.documentElement,
      i = F(10) && getComputedStyle(n);
    return { height: W("Height", e, n, i), width: W("Width", e, n, i) };
  }
  var V = function (t, e) {
      if (!(t instanceof e))
        throw new TypeError("Cannot call a class as a function");
    },
    Y = (function () {
      function t(t, e) {
        for (var n = 0; n < e.length; n++) {
          var i = e[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(t, i.key, i);
        }
      }
      return function (e, n, i) {
        return n && t(e.prototype, n), i && t(e, i), e;
      };
    })(),
    z = function (t, e, n) {
      return (
        e in t
          ? Object.defineProperty(t, e, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (t[e] = n),
        t
      );
    },
    X =
      Object.assign ||
      function (t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = arguments[e];
          for (var i in n)
            Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
        }
        return t;
      };
  function K(t) {
    return X({}, t, { right: t.left + t.width, bottom: t.top + t.height });
  }
  function G(t) {
    var e = {};
    try {
      if (F(10)) {
        e = t.getBoundingClientRect();
        var n = q(t, "top"),
          i = q(t, "left");
        (e.top += n), (e.left += i), (e.bottom += n), (e.right += i);
      } else e = t.getBoundingClientRect();
    } catch (t) {}
    var o = {
        left: e.left,
        top: e.top,
        width: e.right - e.left,
        height: e.bottom - e.top,
      },
      r = "HTML" === t.nodeName ? U(t.ownerDocument) : {},
      a = r.width || t.clientWidth || o.width,
      s = r.height || t.clientHeight || o.height,
      l = t.offsetWidth - a,
      u = t.offsetHeight - s;
    if (l || u) {
      var f = I(t);
      (l -= Q(f, "x")), (u -= Q(f, "y")), (o.width -= l), (o.height -= u);
    }
    return K(o);
  }
  function $(t, e) {
    var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
      i = F(10),
      o = "HTML" === e.nodeName,
      r = G(t),
      a = G(e),
      s = x(t),
      l = I(e),
      u = parseFloat(l.borderTopWidth),
      f = parseFloat(l.borderLeftWidth);
    n && o && ((a.top = Math.max(a.top, 0)), (a.left = Math.max(a.left, 0)));
    var d = K({
      top: r.top - a.top - u,
      left: r.left - a.left - f,
      width: r.width,
      height: r.height,
    });
    if (((d.marginTop = 0), (d.marginLeft = 0), !i && o)) {
      var c = parseFloat(l.marginTop),
        h = parseFloat(l.marginLeft);
      (d.top -= u - c),
        (d.bottom -= u - c),
        (d.left -= f - h),
        (d.right -= f - h),
        (d.marginTop = c),
        (d.marginLeft = h);
    }
    return (
      (i && !n ? e.contains(s) : e === s && "BODY" !== s.nodeName) &&
        (d = B(d, e)),
      d
    );
  }
  function J(t) {
    var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
      n = t.ownerDocument.documentElement,
      i = $(t, n),
      o = Math.max(n.clientWidth, window.innerWidth || 0),
      r = Math.max(n.clientHeight, window.innerHeight || 0),
      a = e ? 0 : q(n),
      s = e ? 0 : q(n, "left"),
      l = {
        top: a - i.top + i.marginTop,
        left: s - i.left + i.marginLeft,
        width: o,
        height: r,
      };
    return K(l);
  }
  function Z(t) {
    var e = t.nodeName;
    if ("BODY" === e || "HTML" === e) return !1;
    if ("fixed" === I(t, "position")) return !0;
    var n = O(t);
    return !!n && Z(n);
  }
  function tt(t) {
    if (!t || !t.parentElement || F()) return document.documentElement;
    for (var e = t.parentElement; e && "none" === I(e, "transform"); )
      e = e.parentElement;
    return e || document.documentElement;
  }
  function et(t, e, n, i) {
    var o = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
      r = { top: 0, left: 0 },
      a = o ? tt(t) : M(t, j(e));
    if ("viewport" === i) r = J(a, o);
    else {
      var s = void 0;
      "scrollParent" === i
        ? "BODY" === (s = x(O(e))).nodeName &&
          (s = t.ownerDocument.documentElement)
        : (s = "window" === i ? t.ownerDocument.documentElement : i);
      var l = $(s, a, o);
      if ("HTML" !== s.nodeName || Z(a)) r = l;
      else {
        var u = U(t.ownerDocument),
          f = u.height,
          d = u.width;
        (r.top += l.top - l.marginTop),
          (r.bottom = f + l.top),
          (r.left += l.left - l.marginLeft),
          (r.right = d + l.left);
      }
    }
    var c = "number" == typeof (n = n || 0);
    return (
      (r.left += c ? n : n.left || 0),
      (r.top += c ? n : n.top || 0),
      (r.right -= c ? n : n.right || 0),
      (r.bottom -= c ? n : n.bottom || 0),
      r
    );
  }
  function nt(t) {
    return t.width * t.height;
  }
  function it(t, e, n, i, o) {
    var r = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
    if (-1 === t.indexOf("auto")) return t;
    var a = et(n, i, r, o),
      s = {
        top: { width: a.width, height: e.top - a.top },
        right: { width: a.right - e.right, height: a.height },
        bottom: { width: a.width, height: a.bottom - e.bottom },
        left: { width: e.left - a.left, height: a.height },
      },
      l = Object.keys(s)
        .map(function (t) {
          return X({ key: t }, s[t], { area: nt(s[t]) });
        })
        .sort(function (t, e) {
          return e.area - t.area;
        }),
      u = l.filter(function (t) {
        var e = t.width,
          i = t.height;
        return e >= n.clientWidth && i >= n.clientHeight;
      }),
      f = u.length > 0 ? u[0].key : l[0].key,
      d = t.split("-")[1];
    return f + (d ? "-" + d : "");
  }
  function ot(t, e, n) {
    var i =
        arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
      o = i ? tt(e) : M(e, j(n));
    return $(n, o, i);
  }
  function rt(t) {
    var e = t.ownerDocument.defaultView.getComputedStyle(t),
      n = parseFloat(e.marginTop || 0) + parseFloat(e.marginBottom || 0),
      i = parseFloat(e.marginLeft || 0) + parseFloat(e.marginRight || 0);
    return { width: t.offsetWidth + i, height: t.offsetHeight + n };
  }
  function at(t) {
    var e = { left: "right", right: "left", bottom: "top", top: "bottom" };
    return t.replace(/left|right|bottom|top/g, function (t) {
      return e[t];
    });
  }
  function st(t, e, n) {
    n = n.split("-")[0];
    var i = rt(t),
      o = { width: i.width, height: i.height },
      r = -1 !== ["right", "left"].indexOf(n),
      a = r ? "top" : "left",
      s = r ? "left" : "top",
      l = r ? "height" : "width",
      u = r ? "width" : "height";
    return (
      (o[a] = e[a] + e[l] / 2 - i[l] / 2),
      (o[s] = n === s ? e[s] - i[u] : e[at(s)]),
      o
    );
  }
  function lt(t, e) {
    return Array.prototype.find ? t.find(e) : t.filter(e)[0];
  }
  function ut(t, e, n) {
    return (
      (void 0 === n
        ? t
        : t.slice(
            0,
            (function (t, e, n) {
              if (Array.prototype.findIndex)
                return t.findIndex(function (t) {
                  return t[e] === n;
                });
              var i = lt(t, function (t) {
                return t[e] === n;
              });
              return t.indexOf(i);
            })(t, "name", n)
          )
      ).forEach(function (t) {
        t.function &&
          console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
        var n = t.function || t.fn;
        t.enabled &&
          A(n) &&
          ((e.offsets.popper = K(e.offsets.popper)),
          (e.offsets.reference = K(e.offsets.reference)),
          (e = n(e, t)));
      }),
      e
    );
  }
  function ft() {
    if (!this.state.isDestroyed) {
      var t = {
        instance: this,
        styles: {},
        arrowStyles: {},
        attributes: {},
        flipped: !1,
        offsets: {},
      };
      (t.offsets.reference = ot(
        this.state,
        this.popper,
        this.reference,
        this.options.positionFixed
      )),
        (t.placement = it(
          this.options.placement,
          t.offsets.reference,
          this.popper,
          this.reference,
          this.options.modifiers.flip.boundariesElement,
          this.options.modifiers.flip.padding
        )),
        (t.originalPlacement = t.placement),
        (t.positionFixed = this.options.positionFixed),
        (t.offsets.popper = st(this.popper, t.offsets.reference, t.placement)),
        (t.offsets.popper.position = this.options.positionFixed
          ? "fixed"
          : "absolute"),
        (t = ut(this.modifiers, t)),
        this.state.isCreated
          ? this.options.onUpdate(t)
          : ((this.state.isCreated = !0), this.options.onCreate(t));
    }
  }
  function dt(t, e) {
    return t.some(function (t) {
      var n = t.name;
      return t.enabled && n === e;
    });
  }
  function ct(t) {
    for (
      var e = [!1, "ms", "Webkit", "Moz", "O"],
        n = t.charAt(0).toUpperCase() + t.slice(1),
        i = 0;
      i < e.length;
      i++
    ) {
      var o = e[i],
        r = o ? "" + o + n : t;
      if ("undefined" != typeof document.body.style[r]) return r;
    }
    return null;
  }
  function ht() {
    return (
      (this.state.isDestroyed = !0),
      dt(this.modifiers, "applyStyle") &&
        (this.popper.removeAttribute("x-placement"),
        (this.popper.style.position = ""),
        (this.popper.style.top = ""),
        (this.popper.style.left = ""),
        (this.popper.style.right = ""),
        (this.popper.style.bottom = ""),
        (this.popper.style.willChange = ""),
        (this.popper.style[ct("transform")] = "")),
      this.disableEventListeners(),
      this.options.removeOnDestroy &&
        this.popper.parentNode.removeChild(this.popper),
      this
    );
  }
  function pt(t) {
    var e = t.ownerDocument;
    return e ? e.defaultView : window;
  }
  function mt(t, e, n, i) {
    (n.updateBound = i),
      pt(t).addEventListener("resize", n.updateBound, { passive: !0 });
    var o = x(t);
    return (
      (function t(e, n, i, o) {
        var r = "BODY" === e.nodeName,
          a = r ? e.ownerDocument.defaultView : e;
        a.addEventListener(n, i, { passive: !0 }),
          r || t(x(a.parentNode), n, i, o),
          o.push(a);
      })(o, "scroll", n.updateBound, n.scrollParents),
      (n.scrollElement = o),
      (n.eventsEnabled = !0),
      n
    );
  }
  function gt() {
    this.state.eventsEnabled ||
      (this.state = mt(
        this.reference,
        this.options,
        this.state,
        this.scheduleUpdate
      ));
  }
  function vt() {
    var t, e;
    this.state.eventsEnabled &&
      (cancelAnimationFrame(this.scheduleUpdate),
      (this.state =
        ((t = this.reference),
        (e = this.state),
        pt(t).removeEventListener("resize", e.updateBound),
        e.scrollParents.forEach(function (t) {
          t.removeEventListener("scroll", e.updateBound);
        }),
        (e.updateBound = null),
        (e.scrollParents = []),
        (e.scrollElement = null),
        (e.eventsEnabled = !1),
        e)));
  }
  function _t(t) {
    return "" !== t && !isNaN(parseFloat(t)) && isFinite(t);
  }
  function bt(t, e) {
    Object.keys(e).forEach(function (n) {
      var i = "";
      -1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(n) &&
        _t(e[n]) &&
        (i = "px"),
        (t.style[n] = e[n] + i);
    });
  }
  var yt = D && /Firefox/i.test(navigator.userAgent);
  function wt(t, e, n) {
    var i = lt(t, function (t) {
        return t.name === e;
      }),
      o =
        !!i &&
        t.some(function (t) {
          return t.name === n && t.enabled && t.order < i.order;
        });
    if (!o) {
      var r = "`" + e + "`",
        a = "`" + n + "`";
      console.warn(
        a +
          " modifier is required by " +
          r +
          " modifier in order to work, be sure to include it before " +
          r +
          "!"
      );
    }
    return o;
  }
  var Et = [
      "auto-start",
      "auto",
      "auto-end",
      "top-start",
      "top",
      "top-end",
      "right-start",
      "right",
      "right-end",
      "bottom-end",
      "bottom",
      "bottom-start",
      "left-end",
      "left",
      "left-start",
    ],
    Tt = Et.slice(3);
  function Ct(t) {
    var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
      n = Tt.indexOf(t),
      i = Tt.slice(n + 1).concat(Tt.slice(0, n));
    return e ? i.reverse() : i;
  }
  var St = "flip",
    Dt = "clockwise",
    Nt = "counterclockwise";
  function kt(t, e, n, i) {
    var o = [0, 0],
      r = -1 !== ["right", "left"].indexOf(i),
      a = t.split(/(\+|\-)/).map(function (t) {
        return t.trim();
      }),
      s = a.indexOf(
        lt(a, function (t) {
          return -1 !== t.search(/,|\s/);
        })
      );
    a[s] &&
      -1 === a[s].indexOf(",") &&
      console.warn(
        "Offsets separated by white space(s) are deprecated, use a comma (,) instead."
      );
    var l = /\s*,\s*|\s+/,
      u =
        -1 !== s
          ? [
              a.slice(0, s).concat([a[s].split(l)[0]]),
              [a[s].split(l)[1]].concat(a.slice(s + 1)),
            ]
          : [a];
    return (
      (u = u.map(function (t, i) {
        var o = (1 === i ? !r : r) ? "height" : "width",
          a = !1;
        return t
          .reduce(function (t, e) {
            return "" === t[t.length - 1] && -1 !== ["+", "-"].indexOf(e)
              ? ((t[t.length - 1] = e), (a = !0), t)
              : a
              ? ((t[t.length - 1] += e), (a = !1), t)
              : t.concat(e);
          }, [])
          .map(function (t) {
            return (function (t, e, n, i) {
              var o = t.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
                r = +o[1],
                a = o[2];
              if (!r) return t;
              if (0 === a.indexOf("%")) {
                var s = void 0;
                switch (a) {
                  case "%p":
                    s = n;
                    break;
                  case "%":
                  case "%r":
                  default:
                    s = i;
                }
                return (K(s)[e] / 100) * r;
              }
              if ("vh" === a || "vw" === a)
                return (
                  (("vh" === a
                    ? Math.max(
                        document.documentElement.clientHeight,
                        window.innerHeight || 0
                      )
                    : Math.max(
                        document.documentElement.clientWidth,
                        window.innerWidth || 0
                      )) /
                    100) *
                  r
                );
              return r;
            })(t, o, e, n);
          });
      })).forEach(function (t, e) {
        t.forEach(function (n, i) {
          _t(n) && (o[e] += n * ("-" === t[i - 1] ? -1 : 1));
        });
      }),
      o
    );
  }
  var At = {
      placement: "bottom",
      positionFixed: !1,
      eventsEnabled: !0,
      removeOnDestroy: !1,
      onCreate: function () {},
      onUpdate: function () {},
      modifiers: {
        shift: {
          order: 100,
          enabled: !0,
          fn: function (t) {
            var e = t.placement,
              n = e.split("-")[0],
              i = e.split("-")[1];
            if (i) {
              var o = t.offsets,
                r = o.reference,
                a = o.popper,
                s = -1 !== ["bottom", "top"].indexOf(n),
                l = s ? "left" : "top",
                u = s ? "width" : "height",
                f = {
                  start: z({}, l, r[l]),
                  end: z({}, l, r[l] + r[u] - a[u]),
                };
              t.offsets.popper = X({}, a, f[i]);
            }
            return t;
          },
        },
        offset: {
          order: 200,
          enabled: !0,
          fn: function (t, e) {
            var n = e.offset,
              i = t.placement,
              o = t.offsets,
              r = o.popper,
              a = o.reference,
              s = i.split("-")[0],
              l = void 0;
            return (
              (l = _t(+n) ? [+n, 0] : kt(n, r, a, s)),
              "left" === s
                ? ((r.top += l[0]), (r.left -= l[1]))
                : "right" === s
                ? ((r.top += l[0]), (r.left += l[1]))
                : "top" === s
                ? ((r.left += l[0]), (r.top -= l[1]))
                : "bottom" === s && ((r.left += l[0]), (r.top += l[1])),
              (t.popper = r),
              t
            );
          },
          offset: 0,
        },
        preventOverflow: {
          order: 300,
          enabled: !0,
          fn: function (t, e) {
            var n = e.boundariesElement || R(t.instance.popper);
            t.instance.reference === n && (n = R(n));
            var i = ct("transform"),
              o = t.instance.popper.style,
              r = o.top,
              a = o.left,
              s = o[i];
            (o.top = ""), (o.left = ""), (o[i] = "");
            var l = et(
              t.instance.popper,
              t.instance.reference,
              e.padding,
              n,
              t.positionFixed
            );
            (o.top = r), (o.left = a), (o[i] = s), (e.boundaries = l);
            var u = e.priority,
              f = t.offsets.popper,
              d = {
                primary: function (t) {
                  var n = f[t];
                  return (
                    f[t] < l[t] &&
                      !e.escapeWithReference &&
                      (n = Math.max(f[t], l[t])),
                    z({}, t, n)
                  );
                },
                secondary: function (t) {
                  var n = "right" === t ? "left" : "top",
                    i = f[n];
                  return (
                    f[t] > l[t] &&
                      !e.escapeWithReference &&
                      (i = Math.min(
                        f[n],
                        l[t] - ("right" === t ? f.width : f.height)
                      )),
                    z({}, n, i)
                  );
                },
              };
            return (
              u.forEach(function (t) {
                var e =
                  -1 !== ["left", "top"].indexOf(t) ? "primary" : "secondary";
                f = X({}, f, d[e](t));
              }),
              (t.offsets.popper = f),
              t
            );
          },
          priority: ["left", "right", "top", "bottom"],
          padding: 5,
          boundariesElement: "scrollParent",
        },
        keepTogether: {
          order: 400,
          enabled: !0,
          fn: function (t) {
            var e = t.offsets,
              n = e.popper,
              i = e.reference,
              o = t.placement.split("-")[0],
              r = Math.floor,
              a = -1 !== ["top", "bottom"].indexOf(o),
              s = a ? "right" : "bottom",
              l = a ? "left" : "top",
              u = a ? "width" : "height";
            return (
              n[s] < r(i[l]) && (t.offsets.popper[l] = r(i[l]) - n[u]),
              n[l] > r(i[s]) && (t.offsets.popper[l] = r(i[s])),
              t
            );
          },
        },
        arrow: {
          order: 500,
          enabled: !0,
          fn: function (t, e) {
            var n;
            if (!wt(t.instance.modifiers, "arrow", "keepTogether")) return t;
            var i = e.element;
            if ("string" == typeof i) {
              if (!(i = t.instance.popper.querySelector(i))) return t;
            } else if (!t.instance.popper.contains(i))
              return (
                console.warn(
                  "WARNING: `arrow.element` must be child of its popper element!"
                ),
                t
              );
            var o = t.placement.split("-")[0],
              r = t.offsets,
              a = r.popper,
              s = r.reference,
              l = -1 !== ["left", "right"].indexOf(o),
              u = l ? "height" : "width",
              f = l ? "Top" : "Left",
              d = f.toLowerCase(),
              c = l ? "left" : "top",
              h = l ? "bottom" : "right",
              p = rt(i)[u];
            s[h] - p < a[d] && (t.offsets.popper[d] -= a[d] - (s[h] - p)),
              s[d] + p > a[h] && (t.offsets.popper[d] += s[d] + p - a[h]),
              (t.offsets.popper = K(t.offsets.popper));
            var m = s[d] + s[u] / 2 - p / 2,
              g = I(t.instance.popper),
              v = parseFloat(g["margin" + f]),
              _ = parseFloat(g["border" + f + "Width"]),
              b = m - t.offsets.popper[d] - v - _;
            return (
              (b = Math.max(Math.min(a[u] - p, b), 0)),
              (t.arrowElement = i),
              (t.offsets.arrow =
                (z((n = {}), d, Math.round(b)), z(n, c, ""), n)),
              t
            );
          },
          element: "[x-arrow]",
        },
        flip: {
          order: 600,
          enabled: !0,
          fn: function (t, e) {
            if (dt(t.instance.modifiers, "inner")) return t;
            if (t.flipped && t.placement === t.originalPlacement) return t;
            var n = et(
                t.instance.popper,
                t.instance.reference,
                e.padding,
                e.boundariesElement,
                t.positionFixed
              ),
              i = t.placement.split("-")[0],
              o = at(i),
              r = t.placement.split("-")[1] || "",
              a = [];
            switch (e.behavior) {
              case St:
                a = [i, o];
                break;
              case Dt:
                a = Ct(i);
                break;
              case Nt:
                a = Ct(i, !0);
                break;
              default:
                a = e.behavior;
            }
            return (
              a.forEach(function (s, l) {
                if (i !== s || a.length === l + 1) return t;
                (i = t.placement.split("-")[0]), (o = at(i));
                var u = t.offsets.popper,
                  f = t.offsets.reference,
                  d = Math.floor,
                  c =
                    ("left" === i && d(u.right) > d(f.left)) ||
                    ("right" === i && d(u.left) < d(f.right)) ||
                    ("top" === i && d(u.bottom) > d(f.top)) ||
                    ("bottom" === i && d(u.top) < d(f.bottom)),
                  h = d(u.left) < d(n.left),
                  p = d(u.right) > d(n.right),
                  m = d(u.top) < d(n.top),
                  g = d(u.bottom) > d(n.bottom),
                  v =
                    ("left" === i && h) ||
                    ("right" === i && p) ||
                    ("top" === i && m) ||
                    ("bottom" === i && g),
                  _ = -1 !== ["top", "bottom"].indexOf(i),
                  b =
                    !!e.flipVariations &&
                    ((_ && "start" === r && h) ||
                      (_ && "end" === r && p) ||
                      (!_ && "start" === r && m) ||
                      (!_ && "end" === r && g)),
                  y =
                    !!e.flipVariationsByContent &&
                    ((_ && "start" === r && p) ||
                      (_ && "end" === r && h) ||
                      (!_ && "start" === r && g) ||
                      (!_ && "end" === r && m)),
                  w = b || y;
                (c || v || w) &&
                  ((t.flipped = !0),
                  (c || v) && (i = a[l + 1]),
                  w &&
                    (r = (function (t) {
                      return "end" === t ? "start" : "start" === t ? "end" : t;
                    })(r)),
                  (t.placement = i + (r ? "-" + r : "")),
                  (t.offsets.popper = X(
                    {},
                    t.offsets.popper,
                    st(t.instance.popper, t.offsets.reference, t.placement)
                  )),
                  (t = ut(t.instance.modifiers, t, "flip")));
              }),
              t
            );
          },
          behavior: "flip",
          padding: 5,
          boundariesElement: "viewport",
          flipVariations: !1,
          flipVariationsByContent: !1,
        },
        inner: {
          order: 700,
          enabled: !1,
          fn: function (t) {
            var e = t.placement,
              n = e.split("-")[0],
              i = t.offsets,
              o = i.popper,
              r = i.reference,
              a = -1 !== ["left", "right"].indexOf(n),
              s = -1 === ["top", "left"].indexOf(n);
            return (
              (o[a ? "left" : "top"] =
                r[n] - (s ? o[a ? "width" : "height"] : 0)),
              (t.placement = at(e)),
              (t.offsets.popper = K(o)),
              t
            );
          },
        },
        hide: {
          order: 800,
          enabled: !0,
          fn: function (t) {
            if (!wt(t.instance.modifiers, "hide", "preventOverflow")) return t;
            var e = t.offsets.reference,
              n = lt(t.instance.modifiers, function (t) {
                return "preventOverflow" === t.name;
              }).boundaries;
            if (
              e.bottom < n.top ||
              e.left > n.right ||
              e.top > n.bottom ||
              e.right < n.left
            ) {
              if (!0 === t.hide) return t;
              (t.hide = !0), (t.attributes["x-out-of-boundaries"] = "");
            } else {
              if (!1 === t.hide) return t;
              (t.hide = !1), (t.attributes["x-out-of-boundaries"] = !1);
            }
            return t;
          },
        },
        computeStyle: {
          order: 850,
          enabled: !0,
          fn: function (t, e) {
            var n = e.x,
              i = e.y,
              o = t.offsets.popper,
              r = lt(t.instance.modifiers, function (t) {
                return "applyStyle" === t.name;
              }).gpuAcceleration;
            void 0 !== r &&
              console.warn(
                "WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!"
              );
            var a = void 0 !== r ? r : e.gpuAcceleration,
              s = R(t.instance.popper),
              l = G(s),
              u = { position: o.position },
              f = (function (t, e) {
                var n = t.offsets,
                  i = n.popper,
                  o = n.reference,
                  r = Math.round,
                  a = Math.floor,
                  s = function (t) {
                    return t;
                  },
                  l = r(o.width),
                  u = r(i.width),
                  f = -1 !== ["left", "right"].indexOf(t.placement),
                  d = -1 !== t.placement.indexOf("-"),
                  c = e ? (f || d || l % 2 == u % 2 ? r : a) : s,
                  h = e ? r : s;
                return {
                  left: c(
                    l % 2 == 1 && u % 2 == 1 && !d && e ? i.left - 1 : i.left
                  ),
                  top: h(i.top),
                  bottom: h(i.bottom),
                  right: c(i.right),
                };
              })(t, window.devicePixelRatio < 2 || !yt),
              d = "bottom" === n ? "top" : "bottom",
              c = "right" === i ? "left" : "right",
              h = ct("transform"),
              p = void 0,
              m = void 0;
            if (
              ((m =
                "bottom" === d
                  ? "HTML" === s.nodeName
                    ? -s.clientHeight + f.bottom
                    : -l.height + f.bottom
                  : f.top),
              (p =
                "right" === c
                  ? "HTML" === s.nodeName
                    ? -s.clientWidth + f.right
                    : -l.width + f.right
                  : f.left),
              a && h)
            )
              (u[h] = "translate3d(" + p + "px, " + m + "px, 0)"),
                (u[d] = 0),
                (u[c] = 0),
                (u.willChange = "transform");
            else {
              var g = "bottom" === d ? -1 : 1,
                v = "right" === c ? -1 : 1;
              (u[d] = m * g), (u[c] = p * v), (u.willChange = d + ", " + c);
            }
            var _ = { "x-placement": t.placement };
            return (
              (t.attributes = X({}, _, t.attributes)),
              (t.styles = X({}, u, t.styles)),
              (t.arrowStyles = X({}, t.offsets.arrow, t.arrowStyles)),
              t
            );
          },
          gpuAcceleration: !0,
          x: "bottom",
          y: "right",
        },
        applyStyle: {
          order: 900,
          enabled: !0,
          fn: function (t) {
            var e, n;
            return (
              bt(t.instance.popper, t.styles),
              (e = t.instance.popper),
              (n = t.attributes),
              Object.keys(n).forEach(function (t) {
                !1 !== n[t] ? e.setAttribute(t, n[t]) : e.removeAttribute(t);
              }),
              t.arrowElement &&
                Object.keys(t.arrowStyles).length &&
                bt(t.arrowElement, t.arrowStyles),
              t
            );
          },
          onLoad: function (t, e, n, i, o) {
            var r = ot(o, e, t, n.positionFixed),
              a = it(
                n.placement,
                r,
                e,
                t,
                n.modifiers.flip.boundariesElement,
                n.modifiers.flip.padding
              );
            return (
              e.setAttribute("x-placement", a),
              bt(e, { position: n.positionFixed ? "fixed" : "absolute" }),
              n
            );
          },
          gpuAcceleration: void 0,
        },
      },
    },
    It = (function () {
      function t(e, n) {
        var i = this,
          o =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        V(this, t),
          (this.scheduleUpdate = function () {
            return requestAnimationFrame(i.update);
          }),
          (this.update = k(this.update.bind(this))),
          (this.options = X({}, t.Defaults, o)),
          (this.state = { isDestroyed: !1, isCreated: !1, scrollParents: [] }),
          (this.reference = e && e.jquery ? e[0] : e),
          (this.popper = n && n.jquery ? n[0] : n),
          (this.options.modifiers = {}),
          Object.keys(X({}, t.Defaults.modifiers, o.modifiers)).forEach(
            function (e) {
              i.options.modifiers[e] = X(
                {},
                t.Defaults.modifiers[e] || {},
                o.modifiers ? o.modifiers[e] : {}
              );
            }
          ),
          (this.modifiers = Object.keys(this.options.modifiers)
            .map(function (t) {
              return X({ name: t }, i.options.modifiers[t]);
            })
            .sort(function (t, e) {
              return t.order - e.order;
            })),
          this.modifiers.forEach(function (t) {
            t.enabled &&
              A(t.onLoad) &&
              t.onLoad(i.reference, i.popper, i.options, t, i.state);
          }),
          this.update();
        var r = this.options.eventsEnabled;
        r && this.enableEventListeners(), (this.state.eventsEnabled = r);
      }
      return (
        Y(t, [
          {
            key: "update",
            value: function () {
              return ft.call(this);
            },
          },
          {
            key: "destroy",
            value: function () {
              return ht.call(this);
            },
          },
          {
            key: "enableEventListeners",
            value: function () {
              return gt.call(this);
            },
          },
          {
            key: "disableEventListeners",
            value: function () {
              return vt.call(this);
            },
          },
        ]),
        t
      );
    })();
  (It.Utils = ("undefined" != typeof window ? window : global).PopperUtils),
    (It.placements = Et),
    (It.Defaults = At);
  var Ot = "dropdown",
    xt = i.default.fn[Ot],
    jt = new RegExp("38|40|27"),
    Lt = {
      offset: 0,
      flip: !0,
      boundary: "scrollParent",
      reference: "toggle",
      display: "dynamic",
      popperConfig: null,
    },
    Pt = {
      offset: "(number|string|function)",
      flip: "boolean",
      boundary: "(string|element)",
      reference: "(string|element)",
      display: "string",
      popperConfig: "(null|object)",
    },
    Ft = (function () {
      function t(t, e) {
        (this._element = t),
          (this._popper = null),
          (this._config = this._getConfig(e)),
          (this._menu = this._getMenuElement()),
          (this._inNavbar = this._detectNavbar()),
          this._addEventListeners();
      }
      var e = t.prototype;
      return (
        (e.toggle = function () {
          if (
            !this._element.disabled &&
            !i.default(this._element).hasClass("disabled")
          ) {
            var e = i.default(this._menu).hasClass("show");
            t._clearMenus(), e || this.show(!0);
          }
        }),
        (e.show = function (e) {
          if (
            (void 0 === e && (e = !1),
            !(
              this._element.disabled ||
              i.default(this._element).hasClass("disabled") ||
              i.default(this._menu).hasClass("show")
            ))
          ) {
            var n = { relatedTarget: this._element },
              o = i.default.Event("show.bs.dropdown", n),
              r = t._getParentFromElement(this._element);
            if ((i.default(r).trigger(o), !o.isDefaultPrevented())) {
              if (!this._inNavbar && e) {
                if ("undefined" == typeof It)
                  throw new TypeError(
                    "Bootstrap's dropdowns require Popper (https://popper.js.org)"
                  );
                var a = this._element;
                "parent" === this._config.reference
                  ? (a = r)
                  : l.isElement(this._config.reference) &&
                    ((a = this._config.reference),
                    "undefined" != typeof this._config.reference.jquery &&
                      (a = this._config.reference[0])),
                  "scrollParent" !== this._config.boundary &&
                    i.default(r).addClass("position-static"),
                  (this._popper = new It(
                    a,
                    this._menu,
                    this._getPopperConfig()
                  ));
              }
              "ontouchstart" in document.documentElement &&
                0 === i.default(r).closest(".navbar-nav").length &&
                i
                  .default(document.body)
                  .children()
                  .on("mouseover", null, i.default.noop),
                this._element.focus(),
                this._element.setAttribute("aria-expanded", !0),
                i.default(this._menu).toggleClass("show"),
                i
                  .default(r)
                  .toggleClass("show")
                  .trigger(i.default.Event("shown.bs.dropdown", n));
            }
          }
        }),
        (e.hide = function () {
          if (
            !this._element.disabled &&
            !i.default(this._element).hasClass("disabled") &&
            i.default(this._menu).hasClass("show")
          ) {
            var e = { relatedTarget: this._element },
              n = i.default.Event("hide.bs.dropdown", e),
              o = t._getParentFromElement(this._element);
            i.default(o).trigger(n),
              n.isDefaultPrevented() ||
                (this._popper && this._popper.destroy(),
                i.default(this._menu).toggleClass("show"),
                i
                  .default(o)
                  .toggleClass("show")
                  .trigger(i.default.Event("hidden.bs.dropdown", e)));
          }
        }),
        (e.dispose = function () {
          i.default.removeData(this._element, "bs.dropdown"),
            i.default(this._element).off(".bs.dropdown"),
            (this._element = null),
            (this._menu = null),
            null !== this._popper &&
              (this._popper.destroy(), (this._popper = null));
        }),
        (e.update = function () {
          (this._inNavbar = this._detectNavbar()),
            null !== this._popper && this._popper.scheduleUpdate();
        }),
        (e._addEventListeners = function () {
          var t = this;
          i.default(this._element).on("click.bs.dropdown", function (e) {
            e.preventDefault(), e.stopPropagation(), t.toggle();
          });
        }),
        (e._getConfig = function (t) {
          return (
            (t = a(
              {},
              this.constructor.Default,
              i.default(this._element).data(),
              t
            )),
            l.typeCheckConfig(Ot, t, this.constructor.DefaultType),
            t
          );
        }),
        (e._getMenuElement = function () {
          if (!this._menu) {
            var e = t._getParentFromElement(this._element);
            e && (this._menu = e.querySelector(".dropdown-menu"));
          }
          return this._menu;
        }),
        (e._getPlacement = function () {
          var t = i.default(this._element.parentNode),
            e = "bottom-start";
          return (
            t.hasClass("dropup")
              ? (e = i.default(this._menu).hasClass("dropdown-menu-right")
                  ? "top-end"
                  : "top-start")
              : t.hasClass("dropright")
              ? (e = "right-start")
              : t.hasClass("dropleft")
              ? (e = "left-start")
              : i.default(this._menu).hasClass("dropdown-menu-right") &&
                (e = "bottom-end"),
            e
          );
        }),
        (e._detectNavbar = function () {
          return i.default(this._element).closest(".navbar").length > 0;
        }),
        (e._getOffset = function () {
          var t = this,
            e = {};
          return (
            "function" == typeof this._config.offset
              ? (e.fn = function (e) {
                  return (
                    (e.offsets = a(
                      {},
                      e.offsets,
                      t._config.offset(e.offsets, t._element) || {}
                    )),
                    e
                  );
                })
              : (e.offset = this._config.offset),
            e
          );
        }),
        (e._getPopperConfig = function () {
          var t = {
            placement: this._getPlacement(),
            modifiers: {
              offset: this._getOffset(),
              flip: { enabled: this._config.flip },
              preventOverflow: { boundariesElement: this._config.boundary },
            },
          };
          return (
            "static" === this._config.display &&
              (t.modifiers.applyStyle = { enabled: !1 }),
            a({}, t, this._config.popperConfig)
          );
        }),
        (t._jQueryInterface = function (e) {
          return this.each(function () {
            var n = i.default(this).data("bs.dropdown");
            if (
              (n ||
                ((n = new t(this, "object" == typeof e ? e : null)),
                i.default(this).data("bs.dropdown", n)),
              "string" == typeof e)
            ) {
              if ("undefined" == typeof n[e])
                throw new TypeError('No method named "' + e + '"');
              n[e]();
            }
          });
        }),
        (t._clearMenus = function (e) {
          if (!e || (3 !== e.which && ("keyup" !== e.type || 9 === e.which)))
            for (
              var n = [].slice.call(
                  document.querySelectorAll('[data-toggle="dropdown"]')
                ),
                o = 0,
                r = n.length;
              o < r;
              o++
            ) {
              var a = t._getParentFromElement(n[o]),
                s = i.default(n[o]).data("bs.dropdown"),
                l = { relatedTarget: n[o] };
              if ((e && "click" === e.type && (l.clickEvent = e), s)) {
                var u = s._menu;
                if (
                  i.default(a).hasClass("show") &&
                  !(
                    e &&
                    (("click" === e.type &&
                      /input|textarea/i.test(e.target.tagName)) ||
                      ("keyup" === e.type && 9 === e.which)) &&
                    i.default.contains(a, e.target)
                  )
                ) {
                  var f = i.default.Event("hide.bs.dropdown", l);
                  i.default(a).trigger(f),
                    f.isDefaultPrevented() ||
                      ("ontouchstart" in document.documentElement &&
                        i
                          .default(document.body)
                          .children()
                          .off("mouseover", null, i.default.noop),
                      n[o].setAttribute("aria-expanded", "false"),
                      s._popper && s._popper.destroy(),
                      i.default(u).removeClass("show"),
                      i
                        .default(a)
                        .removeClass("show")
                        .trigger(i.default.Event("hidden.bs.dropdown", l)));
                }
              }
            }
        }),
        (t._getParentFromElement = function (t) {
          var e,
            n = l.getSelectorFromElement(t);
          return n && (e = document.querySelector(n)), e || t.parentNode;
        }),
        (t._dataApiKeydownHandler = function (e) {
          if (
            !(/input|textarea/i.test(e.target.tagName)
              ? 32 === e.which ||
                (27 !== e.which &&
                  ((40 !== e.which && 38 !== e.which) ||
                    i.default(e.target).closest(".dropdown-menu").length))
              : !jt.test(e.which)) &&
            !this.disabled &&
            !i.default(this).hasClass("disabled")
          ) {
            var n = t._getParentFromElement(this),
              o = i.default(n).hasClass("show");
            if (o || 27 !== e.which) {
              if (
                (e.preventDefault(),
                e.stopPropagation(),
                !o || 27 === e.which || 32 === e.which)
              )
                return (
                  27 === e.which &&
                    i
                      .default(n.querySelector('[data-toggle="dropdown"]'))
                      .trigger("focus"),
                  void i.default(this).trigger("click")
                );
              var r = [].slice
                .call(
                  n.querySelectorAll(
                    ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)"
                  )
                )
                .filter(function (t) {
                  return i.default(t).is(":visible");
                });
              if (0 !== r.length) {
                var a = r.indexOf(e.target);
                38 === e.which && a > 0 && a--,
                  40 === e.which && a < r.length - 1 && a++,
                  a < 0 && (a = 0),
                  r[a].focus();
              }
            }
          }
        }),
        r(t, null, [
          {
            key: "VERSION",
            get: function () {
              return "4.6.0";
            },
          },
          {
            key: "Default",
            get: function () {
              return Lt;
            },
          },
          {
            key: "DefaultType",
            get: function () {
              return Pt;
            },
          },
        ]),
        t
      );
    })();
  i
    .default(document)
    .on(
      "keydown.bs.dropdown.data-api",
      '[data-toggle="dropdown"]',
      Ft._dataApiKeydownHandler
    )
    .on(
      "keydown.bs.dropdown.data-api",
      ".dropdown-menu",
      Ft._dataApiKeydownHandler
    )
    .on("click.bs.dropdown.data-api keyup.bs.dropdown.data-api", Ft._clearMenus)
    .on("click.bs.dropdown.data-api", '[data-toggle="dropdown"]', function (t) {
      t.preventDefault(),
        t.stopPropagation(),
        Ft._jQueryInterface.call(i.default(this), "toggle");
    })
    .on("click.bs.dropdown.data-api", ".dropdown form", function (t) {
      t.stopPropagation();
    }),
    (i.default.fn[Ot] = Ft._jQueryInterface),
    (i.default.fn[Ot].Constructor = Ft),
    (i.default.fn[Ot].noConflict = function () {
      return (i.default.fn[Ot] = xt), Ft._jQueryInterface;
    });
  var Rt = i.default.fn.modal,
    Ht = { backdrop: !0, keyboard: !0, focus: !0, show: !0 },
    Mt = {
      backdrop: "(boolean|string)",
      keyboard: "boolean",
      focus: "boolean",
      show: "boolean",
    },
    qt = (function () {
      function t(t, e) {
        (this._config = this._getConfig(e)),
          (this._element = t),
          (this._dialog = t.querySelector(".modal-dialog")),
          (this._backdrop = null),
          (this._isShown = !1),
          (this._isBodyOverflowing = !1),
          (this._ignoreBackdropClick = !1),
          (this._isTransitioning = !1),
          (this._scrollbarWidth = 0);
      }
      var e = t.prototype;
      return (
        (e.toggle = function (t) {
          return this._isShown ? this.hide() : this.show(t);
        }),
        (e.show = function (t) {
          var e = this;
          if (!this._isShown && !this._isTransitioning) {
            i.default(this._element).hasClass("fade") &&
              (this._isTransitioning = !0);
            var n = i.default.Event("show.bs.modal", { relatedTarget: t });
            i.default(this._element).trigger(n),
              this._isShown ||
                n.isDefaultPrevented() ||
                ((this._isShown = !0),
                this._checkScrollbar(),
                this._setScrollbar(),
                this._adjustDialog(),
                this._setEscapeEvent(),
                this._setResizeEvent(),
                i
                  .default(this._element)
                  .on(
                    "click.dismiss.bs.modal",
                    '[data-dismiss="modal"]',
                    function (t) {
                      return e.hide(t);
                    }
                  ),
                i
                  .default(this._dialog)
                  .on("mousedown.dismiss.bs.modal", function () {
                    i.default(e._element).one(
                      "mouseup.dismiss.bs.modal",
                      function (t) {
                        i.default(t.target).is(e._element) &&
                          (e._ignoreBackdropClick = !0);
                      }
                    );
                  }),
                this._showBackdrop(function () {
                  return e._showElement(t);
                }));
          }
        }),
        (e.hide = function (t) {
          var e = this;
          if (
            (t && t.preventDefault(), this._isShown && !this._isTransitioning)
          ) {
            var n = i.default.Event("hide.bs.modal");
            if (
              (i.default(this._element).trigger(n),
              this._isShown && !n.isDefaultPrevented())
            ) {
              this._isShown = !1;
              var o = i.default(this._element).hasClass("fade");
              if (
                (o && (this._isTransitioning = !0),
                this._setEscapeEvent(),
                this._setResizeEvent(),
                i.default(document).off("focusin.bs.modal"),
                i.default(this._element).removeClass("show"),
                i.default(this._element).off("click.dismiss.bs.modal"),
                i.default(this._dialog).off("mousedown.dismiss.bs.modal"),
                o)
              ) {
                var r = l.getTransitionDurationFromElement(this._element);
                i.default(this._element)
                  .one(l.TRANSITION_END, function (t) {
                    return e._hideModal(t);
                  })
                  .emulateTransitionEnd(r);
              } else this._hideModal();
            }
          }
        }),
        (e.dispose = function () {
          [window, this._element, this._dialog].forEach(function (t) {
            return i.default(t).off(".bs.modal");
          }),
            i.default(document).off("focusin.bs.modal"),
            i.default.removeData(this._element, "bs.modal"),
            (this._config = null),
            (this._element = null),
            (this._dialog = null),
            (this._backdrop = null),
            (this._isShown = null),
            (this._isBodyOverflowing = null),
            (this._ignoreBackdropClick = null),
            (this._isTransitioning = null),
            (this._scrollbarWidth = null);
        }),
        (e.handleUpdate = function () {
          this._adjustDialog();
        }),
        (e._getConfig = function (t) {
          return (t = a({}, Ht, t)), l.typeCheckConfig("modal", t, Mt), t;
        }),
        (e._triggerBackdropTransition = function () {
          var t = this,
            e = i.default.Event("hidePrevented.bs.modal");
          if ((i.default(this._element).trigger(e), !e.isDefaultPrevented())) {
            var n =
              this._element.scrollHeight >
              document.documentElement.clientHeight;
            n || (this._element.style.overflowY = "hidden"),
              this._element.classList.add("modal-static");
            var o = l.getTransitionDurationFromElement(this._dialog);
            i.default(this._element).off(l.TRANSITION_END),
              i
                .default(this._element)
                .one(l.TRANSITION_END, function () {
                  t._element.classList.remove("modal-static"),
                    n ||
                      i
                        .default(t._element)
                        .one(l.TRANSITION_END, function () {
                          t._element.style.overflowY = "";
                        })
                        .emulateTransitionEnd(t._element, o);
                })
                .emulateTransitionEnd(o),
              this._element.focus();
          }
        }),
        (e._showElement = function (t) {
          var e = this,
            n = i.default(this._element).hasClass("fade"),
            o = this._dialog ? this._dialog.querySelector(".modal-body") : null;
          (this._element.parentNode &&
            this._element.parentNode.nodeType === Node.ELEMENT_NODE) ||
            document.body.appendChild(this._element),
            (this._element.style.display = "block"),
            this._element.removeAttribute("aria-hidden"),
            this._element.setAttribute("aria-modal", !0),
            this._element.setAttribute("role", "dialog"),
            i.default(this._dialog).hasClass("modal-dialog-scrollable") && o
              ? (o.scrollTop = 0)
              : (this._element.scrollTop = 0),
            n && l.reflow(this._element),
            i.default(this._element).addClass("show"),
            this._config.focus && this._enforceFocus();
          var r = i.default.Event("shown.bs.modal", { relatedTarget: t }),
            a = function () {
              e._config.focus && e._element.focus(),
                (e._isTransitioning = !1),
                i.default(e._element).trigger(r);
            };
          if (n) {
            var s = l.getTransitionDurationFromElement(this._dialog);
            i.default(this._dialog)
              .one(l.TRANSITION_END, a)
              .emulateTransitionEnd(s);
          } else a();
        }),
        (e._enforceFocus = function () {
          var t = this;
          i.default(document)
            .off("focusin.bs.modal")
            .on("focusin.bs.modal", function (e) {
              document !== e.target &&
                t._element !== e.target &&
                0 === i.default(t._element).has(e.target).length &&
                t._element.focus();
            });
        }),
        (e._setEscapeEvent = function () {
          var t = this;
          this._isShown
            ? i
                .default(this._element)
                .on("keydown.dismiss.bs.modal", function (e) {
                  t._config.keyboard && 27 === e.which
                    ? (e.preventDefault(), t.hide())
                    : t._config.keyboard ||
                      27 !== e.which ||
                      t._triggerBackdropTransition();
                })
            : this._isShown ||
              i.default(this._element).off("keydown.dismiss.bs.modal");
        }),
        (e._setResizeEvent = function () {
          var t = this;
          this._isShown
            ? i.default(window).on("resize.bs.modal", function (e) {
                return t.handleUpdate(e);
              })
            : i.default(window).off("resize.bs.modal");
        }),
        (e._hideModal = function () {
          var t = this;
          (this._element.style.display = "none"),
            this._element.setAttribute("aria-hidden", !0),
            this._element.removeAttribute("aria-modal"),
            this._element.removeAttribute("role"),
            (this._isTransitioning = !1),
            this._showBackdrop(function () {
              i.default(document.body).removeClass("modal-open"),
                t._resetAdjustments(),
                t._resetScrollbar(),
                i.default(t._element).trigger("hidden.bs.modal");
            });
        }),
        (e._removeBackdrop = function () {
          this._backdrop &&
            (i.default(this._backdrop).remove(), (this._backdrop = null));
        }),
        (e._showBackdrop = function (t) {
          var e = this,
            n = i.default(this._element).hasClass("fade") ? "fade" : "";
          if (this._isShown && this._config.backdrop) {
            if (
              ((this._backdrop = document.createElement("div")),
              (this._backdrop.className = "modal-backdrop"),
              n && this._backdrop.classList.add(n),
              i.default(this._backdrop).appendTo(document.body),
              i
                .default(this._element)
                .on("click.dismiss.bs.modal", function (t) {
                  e._ignoreBackdropClick
                    ? (e._ignoreBackdropClick = !1)
                    : t.target === t.currentTarget &&
                      ("static" === e._config.backdrop
                        ? e._triggerBackdropTransition()
                        : e.hide());
                }),
              n && l.reflow(this._backdrop),
              i.default(this._backdrop).addClass("show"),
              !t)
            )
              return;
            if (!n) return void t();
            var o = l.getTransitionDurationFromElement(this._backdrop);
            i.default(this._backdrop)
              .one(l.TRANSITION_END, t)
              .emulateTransitionEnd(o);
          } else if (!this._isShown && this._backdrop) {
            i.default(this._backdrop).removeClass("show");
            var r = function () {
              e._removeBackdrop(), t && t();
            };
            if (i.default(this._element).hasClass("fade")) {
              var a = l.getTransitionDurationFromElement(this._backdrop);
              i.default(this._backdrop)
                .one(l.TRANSITION_END, r)
                .emulateTransitionEnd(a);
            } else r();
          } else t && t();
        }),
        (e._adjustDialog = function () {
          var t =
            this._element.scrollHeight > document.documentElement.clientHeight;
          !this._isBodyOverflowing &&
            t &&
            (this._element.style.paddingLeft = this._scrollbarWidth + "px"),
            this._isBodyOverflowing &&
              !t &&
              (this._element.style.paddingRight = this._scrollbarWidth + "px");
        }),
        (e._resetAdjustments = function () {
          (this._element.style.paddingLeft = ""),
            (this._element.style.paddingRight = "");
        }),
        (e._checkScrollbar = function () {
          var t = document.body.getBoundingClientRect();
          (this._isBodyOverflowing =
            Math.round(t.left + t.right) < window.innerWidth),
            (this._scrollbarWidth = this._getScrollbarWidth());
        }),
        (e._setScrollbar = function () {
          var t = this;
          if (this._isBodyOverflowing) {
            var e = [].slice.call(
                document.querySelectorAll(
                  ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top"
                )
              ),
              n = [].slice.call(document.querySelectorAll(".sticky-top"));
            i.default(e).each(function (e, n) {
              var o = n.style.paddingRight,
                r = i.default(n).css("padding-right");
              i.default(n)
                .data("padding-right", o)
                .css("padding-right", parseFloat(r) + t._scrollbarWidth + "px");
            }),
              i.default(n).each(function (e, n) {
                var o = n.style.marginRight,
                  r = i.default(n).css("margin-right");
                i.default(n)
                  .data("margin-right", o)
                  .css(
                    "margin-right",
                    parseFloat(r) - t._scrollbarWidth + "px"
                  );
              });
            var o = document.body.style.paddingRight,
              r = i.default(document.body).css("padding-right");
            i.default(document.body)
              .data("padding-right", o)
              .css(
                "padding-right",
                parseFloat(r) + this._scrollbarWidth + "px"
              );
          }
          i.default(document.body).addClass("modal-open");
        }),
        (e._resetScrollbar = function () {
          var t = [].slice.call(
            document.querySelectorAll(
              ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top"
            )
          );
          i.default(t).each(function (t, e) {
            var n = i.default(e).data("padding-right");
            i.default(e).removeData("padding-right"),
              (e.style.paddingRight = n || "");
          });
          var e = [].slice.call(document.querySelectorAll(".sticky-top"));
          i.default(e).each(function (t, e) {
            var n = i.default(e).data("margin-right");
            "undefined" != typeof n &&
              i.default(e).css("margin-right", n).removeData("margin-right");
          });
          var n = i.default(document.body).data("padding-right");
          i.default(document.body).removeData("padding-right"),
            (document.body.style.paddingRight = n || "");
        }),
        (e._getScrollbarWidth = function () {
          var t = document.createElement("div");
          (t.className = "modal-scrollbar-measure"),
            document.body.appendChild(t);
          var e = t.getBoundingClientRect().width - t.clientWidth;
          return document.body.removeChild(t), e;
        }),
        (t._jQueryInterface = function (e, n) {
          return this.each(function () {
            var o = i.default(this).data("bs.modal"),
              r = a(
                {},
                Ht,
                i.default(this).data(),
                "object" == typeof e && e ? e : {}
              );
            if (
              (o || ((o = new t(this, r)), i.default(this).data("bs.modal", o)),
              "string" == typeof e)
            ) {
              if ("undefined" == typeof o[e])
                throw new TypeError('No method named "' + e + '"');
              o[e](n);
            } else r.show && o.show(n);
          });
        }),
        r(t, null, [
          {
            key: "VERSION",
            get: function () {
              return "4.6.0";
            },
          },
          {
            key: "Default",
            get: function () {
              return Ht;
            },
          },
        ]),
        t
      );
    })();
  i
    .default(document)
    .on("click.bs.modal.data-api", '[data-toggle="modal"]', function (t) {
      var e,
        n = this,
        o = l.getSelectorFromElement(this);
      o && (e = document.querySelector(o));
      var r = i.default(e).data("bs.modal")
        ? "toggle"
        : a({}, i.default(e).data(), i.default(this).data());
      ("A" !== this.tagName && "AREA" !== this.tagName) || t.preventDefault();
      var s = i.default(e).one("show.bs.modal", function (t) {
        t.isDefaultPrevented() ||
          s.one("hidden.bs.modal", function () {
            i.default(n).is(":visible") && n.focus();
          });
      });
      qt._jQueryInterface.call(i.default(e), r, this);
    }),
    (i.default.fn.modal = qt._jQueryInterface),
    (i.default.fn.modal.Constructor = qt),
    (i.default.fn.modal.noConflict = function () {
      return (i.default.fn.modal = Rt), qt._jQueryInterface;
    });
  var Bt = [
      "background",
      "cite",
      "href",
      "itemtype",
      "longdesc",
      "poster",
      "src",
      "xlink:href",
    ],
    Qt = {
      "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
      a: ["target", "href", "title", "rel"],
      area: [],
      b: [],
      br: [],
      col: [],
      code: [],
      div: [],
      em: [],
      hr: [],
      h1: [],
      h2: [],
      h3: [],
      h4: [],
      h5: [],
      h6: [],
      i: [],
      img: ["src", "srcset", "alt", "title", "width", "height"],
      li: [],
      ol: [],
      p: [],
      pre: [],
      s: [],
      small: [],
      span: [],
      sub: [],
      sup: [],
      strong: [],
      u: [],
      ul: [],
    },
    Wt = /^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/gi,
    Ut =
      /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;
  function Vt(t, e, n) {
    if (0 === t.length) return t;
    if (n && "function" == typeof n) return n(t);
    for (
      var i = new window.DOMParser().parseFromString(t, "text/html"),
        o = Object.keys(e),
        r = [].slice.call(i.body.querySelectorAll("*")),
        a = function (t, n) {
          var i = r[t],
            a = i.nodeName.toLowerCase();
          if (-1 === o.indexOf(i.nodeName.toLowerCase()))
            return i.parentNode.removeChild(i), "continue";
          var s = [].slice.call(i.attributes),
            l = [].concat(e["*"] || [], e[a] || []);
          s.forEach(function (t) {
            (function (t, e) {
              var n = t.nodeName.toLowerCase();
              if (-1 !== e.indexOf(n))
                return (
                  -1 === Bt.indexOf(n) ||
                  Boolean(t.nodeValue.match(Wt) || t.nodeValue.match(Ut))
                );
              for (
                var i = e.filter(function (t) {
                    return t instanceof RegExp;
                  }),
                  o = 0,
                  r = i.length;
                o < r;
                o++
              )
                if (n.match(i[o])) return !0;
              return !1;
            })(t, l) || i.removeAttribute(t.nodeName);
          });
        },
        s = 0,
        l = r.length;
      s < l;
      s++
    )
      a(s);
    return i.body.innerHTML;
  }
  var Yt = "tooltip",
    zt = i.default.fn[Yt],
    Xt = new RegExp("(^|\\s)bs-tooltip\\S+", "g"),
    Kt = ["sanitize", "whiteList", "sanitizeFn"],
    Gt = {
      animation: "boolean",
      template: "string",
      title: "(string|element|function)",
      trigger: "string",
      delay: "(number|object)",
      html: "boolean",
      selector: "(string|boolean)",
      placement: "(string|function)",
      offset: "(number|string|function)",
      container: "(string|element|boolean)",
      fallbackPlacement: "(string|array)",
      boundary: "(string|element)",
      customClass: "(string|function)",
      sanitize: "boolean",
      sanitizeFn: "(null|function)",
      whiteList: "object",
      popperConfig: "(null|object)",
    },
    $t = {
      AUTO: "auto",
      TOP: "top",
      RIGHT: "right",
      BOTTOM: "bottom",
      LEFT: "left",
    },
    Jt = {
      animation: !0,
      template:
        '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
      trigger: "hover focus",
      title: "",
      delay: 0,
      html: !1,
      selector: !1,
      placement: "top",
      offset: 0,
      container: !1,
      fallbackPlacement: "flip",
      boundary: "scrollParent",
      customClass: "",
      sanitize: !0,
      sanitizeFn: null,
      whiteList: Qt,
      popperConfig: null,
    },
    Zt = {
      HIDE: "hide.bs.tooltip",
      HIDDEN: "hidden.bs.tooltip",
      SHOW: "show.bs.tooltip",
      SHOWN: "shown.bs.tooltip",
      INSERTED: "inserted.bs.tooltip",
      CLICK: "click.bs.tooltip",
      FOCUSIN: "focusin.bs.tooltip",
      FOCUSOUT: "focusout.bs.tooltip",
      MOUSEENTER: "mouseenter.bs.tooltip",
      MOUSELEAVE: "mouseleave.bs.tooltip",
    },
    te = (function () {
      function t(t, e) {
        if ("undefined" == typeof It)
          throw new TypeError(
            "Bootstrap's tooltips require Popper (https://popper.js.org)"
          );
        (this._isEnabled = !0),
          (this._timeout = 0),
          (this._hoverState = ""),
          (this._activeTrigger = {}),
          (this._popper = null),
          (this.element = t),
          (this.config = this._getConfig(e)),
          (this.tip = null),
          this._setListeners();
      }
      var e = t.prototype;
      return (
        (e.enable = function () {
          this._isEnabled = !0;
        }),
        (e.disable = function () {
          this._isEnabled = !1;
        }),
        (e.toggleEnabled = function () {
          this._isEnabled = !this._isEnabled;
        }),
        (e.toggle = function (t) {
          if (this._isEnabled)
            if (t) {
              var e = this.constructor.DATA_KEY,
                n = i.default(t.currentTarget).data(e);
              n ||
                ((n = new this.constructor(
                  t.currentTarget,
                  this._getDelegateConfig()
                )),
                i.default(t.currentTarget).data(e, n)),
                (n._activeTrigger.click = !n._activeTrigger.click),
                n._isWithActiveTrigger()
                  ? n._enter(null, n)
                  : n._leave(null, n);
            } else {
              if (i.default(this.getTipElement()).hasClass("show"))
                return void this._leave(null, this);
              this._enter(null, this);
            }
        }),
        (e.dispose = function () {
          clearTimeout(this._timeout),
            i.default.removeData(this.element, this.constructor.DATA_KEY),
            i.default(this.element).off(this.constructor.EVENT_KEY),
            i
              .default(this.element)
              .closest(".modal")
              .off("hide.bs.modal", this._hideModalHandler),
            this.tip && i.default(this.tip).remove(),
            (this._isEnabled = null),
            (this._timeout = null),
            (this._hoverState = null),
            (this._activeTrigger = null),
            this._popper && this._popper.destroy(),
            (this._popper = null),
            (this.element = null),
            (this.config = null),
            (this.tip = null);
        }),
        (e.show = function () {
          var t = this;
          if ("none" === i.default(this.element).css("display"))
            throw new Error("Please use show on visible elements");
          var e = i.default.Event(this.constructor.Event.SHOW);
          if (this.isWithContent() && this._isEnabled) {
            i.default(this.element).trigger(e);
            var n = l.findShadowRoot(this.element),
              o = i.default.contains(
                null !== n ? n : this.element.ownerDocument.documentElement,
                this.element
              );
            if (e.isDefaultPrevented() || !o) return;
            var r = this.getTipElement(),
              a = l.getUID(this.constructor.NAME);
            r.setAttribute("id", a),
              this.element.setAttribute("aria-describedby", a),
              this.setContent(),
              this.config.animation && i.default(r).addClass("fade");
            var s =
                "function" == typeof this.config.placement
                  ? this.config.placement.call(this, r, this.element)
                  : this.config.placement,
              u = this._getAttachment(s);
            this.addAttachmentClass(u);
            var f = this._getContainer();
            i.default(r).data(this.constructor.DATA_KEY, this),
              i.default.contains(
                this.element.ownerDocument.documentElement,
                this.tip
              ) || i.default(r).appendTo(f),
              i.default(this.element).trigger(this.constructor.Event.INSERTED),
              (this._popper = new It(
                this.element,
                r,
                this._getPopperConfig(u)
              )),
              i.default(r).addClass("show"),
              i.default(r).addClass(this.config.customClass),
              "ontouchstart" in document.documentElement &&
                i
                  .default(document.body)
                  .children()
                  .on("mouseover", null, i.default.noop);
            var d = function () {
              t.config.animation && t._fixTransition();
              var e = t._hoverState;
              (t._hoverState = null),
                i.default(t.element).trigger(t.constructor.Event.SHOWN),
                "out" === e && t._leave(null, t);
            };
            if (i.default(this.tip).hasClass("fade")) {
              var c = l.getTransitionDurationFromElement(this.tip);
              i.default(this.tip)
                .one(l.TRANSITION_END, d)
                .emulateTransitionEnd(c);
            } else d();
          }
        }),
        (e.hide = function (t) {
          var e = this,
            n = this.getTipElement(),
            o = i.default.Event(this.constructor.Event.HIDE),
            r = function () {
              "show" !== e._hoverState &&
                n.parentNode &&
                n.parentNode.removeChild(n),
                e._cleanTipClass(),
                e.element.removeAttribute("aria-describedby"),
                i.default(e.element).trigger(e.constructor.Event.HIDDEN),
                null !== e._popper && e._popper.destroy(),
                t && t();
            };
          if ((i.default(this.element).trigger(o), !o.isDefaultPrevented())) {
            if (
              (i.default(n).removeClass("show"),
              "ontouchstart" in document.documentElement &&
                i
                  .default(document.body)
                  .children()
                  .off("mouseover", null, i.default.noop),
              (this._activeTrigger.click = !1),
              (this._activeTrigger.focus = !1),
              (this._activeTrigger.hover = !1),
              i.default(this.tip).hasClass("fade"))
            ) {
              var a = l.getTransitionDurationFromElement(n);
              i.default(n).one(l.TRANSITION_END, r).emulateTransitionEnd(a);
            } else r();
            this._hoverState = "";
          }
        }),
        (e.update = function () {
          null !== this._popper && this._popper.scheduleUpdate();
        }),
        (e.isWithContent = function () {
          return Boolean(this.getTitle());
        }),
        (e.addAttachmentClass = function (t) {
          i.default(this.getTipElement()).addClass("bs-tooltip-" + t);
        }),
        (e.getTipElement = function () {
          return (
            (this.tip = this.tip || i.default(this.config.template)[0]),
            this.tip
          );
        }),
        (e.setContent = function () {
          var t = this.getTipElement();
          this.setElementContent(
            i.default(t.querySelectorAll(".tooltip-inner")),
            this.getTitle()
          ),
            i.default(t).removeClass("fade show");
        }),
        (e.setElementContent = function (t, e) {
          "object" != typeof e || (!e.nodeType && !e.jquery)
            ? this.config.html
              ? (this.config.sanitize &&
                  (e = Vt(e, this.config.whiteList, this.config.sanitizeFn)),
                t.html(e))
              : t.text(e)
            : this.config.html
            ? i.default(e).parent().is(t) || t.empty().append(e)
            : t.text(i.default(e).text());
        }),
        (e.getTitle = function () {
          var t = this.element.getAttribute("data-original-title");
          return (
            t ||
              (t =
                "function" == typeof this.config.title
                  ? this.config.title.call(this.element)
                  : this.config.title),
            t
          );
        }),
        (e._getPopperConfig = function (t) {
          var e = this;
          return a(
            {},
            {
              placement: t,
              modifiers: {
                offset: this._getOffset(),
                flip: { behavior: this.config.fallbackPlacement },
                arrow: { element: ".arrow" },
                preventOverflow: { boundariesElement: this.config.boundary },
              },
              onCreate: function (t) {
                t.originalPlacement !== t.placement &&
                  e._handlePopperPlacementChange(t);
              },
              onUpdate: function (t) {
                return e._handlePopperPlacementChange(t);
              },
            },
            this.config.popperConfig
          );
        }),
        (e._getOffset = function () {
          var t = this,
            e = {};
          return (
            "function" == typeof this.config.offset
              ? (e.fn = function (e) {
                  return (
                    (e.offsets = a(
                      {},
                      e.offsets,
                      t.config.offset(e.offsets, t.element) || {}
                    )),
                    e
                  );
                })
              : (e.offset = this.config.offset),
            e
          );
        }),
        (e._getContainer = function () {
          return !1 === this.config.container
            ? document.body
            : l.isElement(this.config.container)
            ? i.default(this.config.container)
            : i.default(document).find(this.config.container);
        }),
        (e._getAttachment = function (t) {
          return $t[t.toUpperCase()];
        }),
        (e._setListeners = function () {
          var t = this;
          this.config.trigger.split(" ").forEach(function (e) {
            if ("click" === e)
              i.default(t.element).on(
                t.constructor.Event.CLICK,
                t.config.selector,
                function (e) {
                  return t.toggle(e);
                }
              );
            else if ("manual" !== e) {
              var n =
                  "hover" === e
                    ? t.constructor.Event.MOUSEENTER
                    : t.constructor.Event.FOCUSIN,
                o =
                  "hover" === e
                    ? t.constructor.Event.MOUSELEAVE
                    : t.constructor.Event.FOCUSOUT;
              i.default(t.element)
                .on(n, t.config.selector, function (e) {
                  return t._enter(e);
                })
                .on(o, t.config.selector, function (e) {
                  return t._leave(e);
                });
            }
          }),
            (this._hideModalHandler = function () {
              t.element && t.hide();
            }),
            i
              .default(this.element)
              .closest(".modal")
              .on("hide.bs.modal", this._hideModalHandler),
            this.config.selector
              ? (this.config = a({}, this.config, {
                  trigger: "manual",
                  selector: "",
                }))
              : this._fixTitle();
        }),
        (e._fixTitle = function () {
          var t = typeof this.element.getAttribute("data-original-title");
          (this.element.getAttribute("title") || "string" !== t) &&
            (this.element.setAttribute(
              "data-original-title",
              this.element.getAttribute("title") || ""
            ),
            this.element.setAttribute("title", ""));
        }),
        (e._enter = function (t, e) {
          var n = this.constructor.DATA_KEY;
          (e = e || i.default(t.currentTarget).data(n)) ||
            ((e = new this.constructor(
              t.currentTarget,
              this._getDelegateConfig()
            )),
            i.default(t.currentTarget).data(n, e)),
            t &&
              (e._activeTrigger["focusin" === t.type ? "focus" : "hover"] = !0),
            i.default(e.getTipElement()).hasClass("show") ||
            "show" === e._hoverState
              ? (e._hoverState = "show")
              : (clearTimeout(e._timeout),
                (e._hoverState = "show"),
                e.config.delay && e.config.delay.show
                  ? (e._timeout = setTimeout(function () {
                      "show" === e._hoverState && e.show();
                    }, e.config.delay.show))
                  : e.show());
        }),
        (e._leave = function (t, e) {
          var n = this.constructor.DATA_KEY;
          (e = e || i.default(t.currentTarget).data(n)) ||
            ((e = new this.constructor(
              t.currentTarget,
              this._getDelegateConfig()
            )),
            i.default(t.currentTarget).data(n, e)),
            t &&
              (e._activeTrigger["focusout" === t.type ? "focus" : "hover"] =
                !1),
            e._isWithActiveTrigger() ||
              (clearTimeout(e._timeout),
              (e._hoverState = "out"),
              e.config.delay && e.config.delay.hide
                ? (e._timeout = setTimeout(function () {
                    "out" === e._hoverState && e.hide();
                  }, e.config.delay.hide))
                : e.hide());
        }),
        (e._isWithActiveTrigger = function () {
          for (var t in this._activeTrigger)
            if (this._activeTrigger[t]) return !0;
          return !1;
        }),
        (e._getConfig = function (t) {
          var e = i.default(this.element).data();
          return (
            Object.keys(e).forEach(function (t) {
              -1 !== Kt.indexOf(t) && delete e[t];
            }),
            "number" ==
              typeof (t = a(
                {},
                this.constructor.Default,
                e,
                "object" == typeof t && t ? t : {}
              )).delay && (t.delay = { show: t.delay, hide: t.delay }),
            "number" == typeof t.title && (t.title = t.title.toString()),
            "number" == typeof t.content && (t.content = t.content.toString()),
            l.typeCheckConfig(Yt, t, this.constructor.DefaultType),
            t.sanitize &&
              (t.template = Vt(t.template, t.whiteList, t.sanitizeFn)),
            t
          );
        }),
        (e._getDelegateConfig = function () {
          var t = {};
          if (this.config)
            for (var e in this.config)
              this.constructor.Default[e] !== this.config[e] &&
                (t[e] = this.config[e]);
          return t;
        }),
        (e._cleanTipClass = function () {
          var t = i.default(this.getTipElement()),
            e = t.attr("class").match(Xt);
          null !== e && e.length && t.removeClass(e.join(""));
        }),
        (e._handlePopperPlacementChange = function (t) {
          (this.tip = t.instance.popper),
            this._cleanTipClass(),
            this.addAttachmentClass(this._getAttachment(t.placement));
        }),
        (e._fixTransition = function () {
          var t = this.getTipElement(),
            e = this.config.animation;
          null === t.getAttribute("x-placement") &&
            (i.default(t).removeClass("fade"),
            (this.config.animation = !1),
            this.hide(),
            this.show(),
            (this.config.animation = e));
        }),
        (t._jQueryInterface = function (e) {
          return this.each(function () {
            var n = i.default(this),
              o = n.data("bs.tooltip"),
              r = "object" == typeof e && e;
            if (
              (o || !/dispose|hide/.test(e)) &&
              (o || ((o = new t(this, r)), n.data("bs.tooltip", o)),
              "string" == typeof e)
            ) {
              if ("undefined" == typeof o[e])
                throw new TypeError('No method named "' + e + '"');
              o[e]();
            }
          });
        }),
        r(t, null, [
          {
            key: "VERSION",
            get: function () {
              return "4.6.0";
            },
          },
          {
            key: "Default",
            get: function () {
              return Jt;
            },
          },
          {
            key: "NAME",
            get: function () {
              return Yt;
            },
          },
          {
            key: "DATA_KEY",
            get: function () {
              return "bs.tooltip";
            },
          },
          {
            key: "Event",
            get: function () {
              return Zt;
            },
          },
          {
            key: "EVENT_KEY",
            get: function () {
              return ".bs.tooltip";
            },
          },
          {
            key: "DefaultType",
            get: function () {
              return Gt;
            },
          },
        ]),
        t
      );
    })();
  (i.default.fn[Yt] = te._jQueryInterface),
    (i.default.fn[Yt].Constructor = te),
    (i.default.fn[Yt].noConflict = function () {
      return (i.default.fn[Yt] = zt), te._jQueryInterface;
    });
  var ee = "popover",
    ne = i.default.fn[ee],
    ie = new RegExp("(^|\\s)bs-popover\\S+", "g"),
    oe = a({}, te.Default, {
      placement: "right",
      trigger: "click",
      content: "",
      template:
        '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
    }),
    re = a({}, te.DefaultType, { content: "(string|element|function)" }),
    ae = {
      HIDE: "hide.bs.popover",
      HIDDEN: "hidden.bs.popover",
      SHOW: "show.bs.popover",
      SHOWN: "shown.bs.popover",
      INSERTED: "inserted.bs.popover",
      CLICK: "click.bs.popover",
      FOCUSIN: "focusin.bs.popover",
      FOCUSOUT: "focusout.bs.popover",
      MOUSEENTER: "mouseenter.bs.popover",
      MOUSELEAVE: "mouseleave.bs.popover",
    },
    se = (function (t) {
      var e, n;
      function o() {
        return t.apply(this, arguments) || this;
      }
      (n = t),
        ((e = o).prototype = Object.create(n.prototype)),
        (e.prototype.constructor = e),
        (e.__proto__ = n);
      var a = o.prototype;
      return (
        (a.isWithContent = function () {
          return this.getTitle() || this._getContent();
        }),
        (a.addAttachmentClass = function (t) {
          i.default(this.getTipElement()).addClass("bs-popover-" + t);
        }),
        (a.getTipElement = function () {
          return (
            (this.tip = this.tip || i.default(this.config.template)[0]),
            this.tip
          );
        }),
        (a.setContent = function () {
          var t = i.default(this.getTipElement());
          this.setElementContent(t.find(".popover-header"), this.getTitle());
          var e = this._getContent();
          "function" == typeof e && (e = e.call(this.element)),
            this.setElementContent(t.find(".popover-body"), e),
            t.removeClass("fade show");
        }),
        (a._getContent = function () {
          return (
            this.element.getAttribute("data-content") || this.config.content
          );
        }),
        (a._cleanTipClass = function () {
          var t = i.default(this.getTipElement()),
            e = t.attr("class").match(ie);
          null !== e && e.length > 0 && t.removeClass(e.join(""));
        }),
        (o._jQueryInterface = function (t) {
          return this.each(function () {
            var e = i.default(this).data("bs.popover"),
              n = "object" == typeof t ? t : null;
            if (
              (e || !/dispose|hide/.test(t)) &&
              (e ||
                ((e = new o(this, n)), i.default(this).data("bs.popover", e)),
              "string" == typeof t)
            ) {
              if ("undefined" == typeof e[t])
                throw new TypeError('No method named "' + t + '"');
              e[t]();
            }
          });
        }),
        r(o, null, [
          {
            key: "VERSION",
            get: function () {
              return "4.6.0";
            },
          },
          {
            key: "Default",
            get: function () {
              return oe;
            },
          },
          {
            key: "NAME",
            get: function () {
              return ee;
            },
          },
          {
            key: "DATA_KEY",
            get: function () {
              return "bs.popover";
            },
          },
          {
            key: "Event",
            get: function () {
              return ae;
            },
          },
          {
            key: "EVENT_KEY",
            get: function () {
              return ".bs.popover";
            },
          },
          {
            key: "DefaultType",
            get: function () {
              return re;
            },
          },
        ]),
        o
      );
    })(te);
  (i.default.fn[ee] = se._jQueryInterface),
    (i.default.fn[ee].Constructor = se),
    (i.default.fn[ee].noConflict = function () {
      return (i.default.fn[ee] = ne), se._jQueryInterface;
    });
  var le = "scrollspy",
    ue = i.default.fn[le],
    fe = { offset: 10, method: "auto", target: "" },
    de = { offset: "number", method: "string", target: "(string|element)" },
    ce = (function () {
      function t(t, e) {
        var n = this;
        (this._element = t),
          (this._scrollElement = "BODY" === t.tagName ? window : t),
          (this._config = this._getConfig(e)),
          (this._selector =
            this._config.target +
            " .nav-link," +
            this._config.target +
            " .list-group-item," +
            this._config.target +
            " .dropdown-item"),
          (this._offsets = []),
          (this._targets = []),
          (this._activeTarget = null),
          (this._scrollHeight = 0),
          i
            .default(this._scrollElement)
            .on("scroll.bs.scrollspy", function (t) {
              return n._process(t);
            }),
          this.refresh(),
          this._process();
      }
      var e = t.prototype;
      return (
        (e.refresh = function () {
          var t = this,
            e =
              this._scrollElement === this._scrollElement.window
                ? "offset"
                : "position",
            n = "auto" === this._config.method ? e : this._config.method,
            o = "position" === n ? this._getScrollTop() : 0;
          (this._offsets = []),
            (this._targets = []),
            (this._scrollHeight = this._getScrollHeight()),
            [].slice
              .call(document.querySelectorAll(this._selector))
              .map(function (t) {
                var e,
                  r = l.getSelectorFromElement(t);
                if ((r && (e = document.querySelector(r)), e)) {
                  var a = e.getBoundingClientRect();
                  if (a.width || a.height)
                    return [i.default(e)[n]().top + o, r];
                }
                return null;
              })
              .filter(function (t) {
                return t;
              })
              .sort(function (t, e) {
                return t[0] - e[0];
              })
              .forEach(function (e) {
                t._offsets.push(e[0]), t._targets.push(e[1]);
              });
        }),
        (e.dispose = function () {
          i.default.removeData(this._element, "bs.scrollspy"),
            i.default(this._scrollElement).off(".bs.scrollspy"),
            (this._element = null),
            (this._scrollElement = null),
            (this._config = null),
            (this._selector = null),
            (this._offsets = null),
            (this._targets = null),
            (this._activeTarget = null),
            (this._scrollHeight = null);
        }),
        (e._getConfig = function (t) {
          if (
            "string" !=
              typeof (t = a({}, fe, "object" == typeof t && t ? t : {}))
                .target &&
            l.isElement(t.target)
          ) {
            var e = i.default(t.target).attr("id");
            e || ((e = l.getUID(le)), i.default(t.target).attr("id", e)),
              (t.target = "#" + e);
          }
          return l.typeCheckConfig(le, t, de), t;
        }),
        (e._getScrollTop = function () {
          return this._scrollElement === window
            ? this._scrollElement.pageYOffset
            : this._scrollElement.scrollTop;
        }),
        (e._getScrollHeight = function () {
          return (
            this._scrollElement.scrollHeight ||
            Math.max(
              document.body.scrollHeight,
              document.documentElement.scrollHeight
            )
          );
        }),
        (e._getOffsetHeight = function () {
          return this._scrollElement === window
            ? window.innerHeight
            : this._scrollElement.getBoundingClientRect().height;
        }),
        (e._process = function () {
          var t = this._getScrollTop() + this._config.offset,
            e = this._getScrollHeight(),
            n = this._config.offset + e - this._getOffsetHeight();
          if ((this._scrollHeight !== e && this.refresh(), t >= n)) {
            var i = this._targets[this._targets.length - 1];
            this._activeTarget !== i && this._activate(i);
          } else {
            if (
              this._activeTarget &&
              t < this._offsets[0] &&
              this._offsets[0] > 0
            )
              return (this._activeTarget = null), void this._clear();
            for (var o = this._offsets.length; o--; ) {
              this._activeTarget !== this._targets[o] &&
                t >= this._offsets[o] &&
                ("undefined" == typeof this._offsets[o + 1] ||
                  t < this._offsets[o + 1]) &&
                this._activate(this._targets[o]);
            }
          }
        }),
        (e._activate = function (t) {
          (this._activeTarget = t), this._clear();
          var e = this._selector.split(",").map(function (e) {
              return (
                e + '[data-target="' + t + '"],' + e + '[href="' + t + '"]'
              );
            }),
            n = i.default(
              [].slice.call(document.querySelectorAll(e.join(",")))
            );
          n.hasClass("dropdown-item")
            ? (n
                .closest(".dropdown")
                .find(".dropdown-toggle")
                .addClass("active"),
              n.addClass("active"))
            : (n.addClass("active"),
              n
                .parents(".nav, .list-group")
                .prev(".nav-link, .list-group-item")
                .addClass("active"),
              n
                .parents(".nav, .list-group")
                .prev(".nav-item")
                .children(".nav-link")
                .addClass("active")),
            i
              .default(this._scrollElement)
              .trigger("activate.bs.scrollspy", { relatedTarget: t });
        }),
        (e._clear = function () {
          [].slice
            .call(document.querySelectorAll(this._selector))
            .filter(function (t) {
              return t.classList.contains("active");
            })
            .forEach(function (t) {
              return t.classList.remove("active");
            });
        }),
        (t._jQueryInterface = function (e) {
          return this.each(function () {
            var n = i.default(this).data("bs.scrollspy");
            if (
              (n ||
                ((n = new t(this, "object" == typeof e && e)),
                i.default(this).data("bs.scrollspy", n)),
              "string" == typeof e)
            ) {
              if ("undefined" == typeof n[e])
                throw new TypeError('No method named "' + e + '"');
              n[e]();
            }
          });
        }),
        r(t, null, [
          {
            key: "VERSION",
            get: function () {
              return "4.6.0";
            },
          },
          {
            key: "Default",
            get: function () {
              return fe;
            },
          },
        ]),
        t
      );
    })();
  i.default(window).on("load.bs.scrollspy.data-api", function () {
    for (
      var t = [].slice.call(document.querySelectorAll('[data-spy="scroll"]')),
        e = t.length;
      e--;

    ) {
      var n = i.default(t[e]);
      ce._jQueryInterface.call(n, n.data());
    }
  }),
    (i.default.fn[le] = ce._jQueryInterface),
    (i.default.fn[le].Constructor = ce),
    (i.default.fn[le].noConflict = function () {
      return (i.default.fn[le] = ue), ce._jQueryInterface;
    });
  var he = i.default.fn.tab,
    pe = (function () {
      function t(t) {
        this._element = t;
      }
      var e = t.prototype;
      return (
        (e.show = function () {
          var t = this;
          if (
            !(
              (this._element.parentNode &&
                this._element.parentNode.nodeType === Node.ELEMENT_NODE &&
                i.default(this._element).hasClass("active")) ||
              i.default(this._element).hasClass("disabled")
            )
          ) {
            var e,
              n,
              o = i.default(this._element).closest(".nav, .list-group")[0],
              r = l.getSelectorFromElement(this._element);
            if (o) {
              var a =
                "UL" === o.nodeName || "OL" === o.nodeName
                  ? "> li > .active"
                  : ".active";
              n = (n = i.default.makeArray(i.default(o).find(a)))[n.length - 1];
            }
            var s = i.default.Event("hide.bs.tab", {
                relatedTarget: this._element,
              }),
              u = i.default.Event("show.bs.tab", { relatedTarget: n });
            if (
              (n && i.default(n).trigger(s),
              i.default(this._element).trigger(u),
              !u.isDefaultPrevented() && !s.isDefaultPrevented())
            ) {
              r && (e = document.querySelector(r)),
                this._activate(this._element, o);
              var f = function () {
                var e = i.default.Event("hidden.bs.tab", {
                    relatedTarget: t._element,
                  }),
                  o = i.default.Event("shown.bs.tab", { relatedTarget: n });
                i.default(n).trigger(e), i.default(t._element).trigger(o);
              };
              e ? this._activate(e, e.parentNode, f) : f();
            }
          }
        }),
        (e.dispose = function () {
          i.default.removeData(this._element, "bs.tab"), (this._element = null);
        }),
        (e._activate = function (t, e, n) {
          var o = this,
            r = (
              !e || ("UL" !== e.nodeName && "OL" !== e.nodeName)
                ? i.default(e).children(".active")
                : i.default(e).find("> li > .active")
            )[0],
            a = n && r && i.default(r).hasClass("fade"),
            s = function () {
              return o._transitionComplete(t, r, n);
            };
          if (r && a) {
            var u = l.getTransitionDurationFromElement(r);
            i.default(r)
              .removeClass("show")
              .one(l.TRANSITION_END, s)
              .emulateTransitionEnd(u);
          } else s();
        }),
        (e._transitionComplete = function (t, e, n) {
          if (e) {
            i.default(e).removeClass("active");
            var o = i.default(e.parentNode).find("> .dropdown-menu .active")[0];
            o && i.default(o).removeClass("active"),
              "tab" === e.getAttribute("role") &&
                e.setAttribute("aria-selected", !1);
          }
          if (
            (i.default(t).addClass("active"),
            "tab" === t.getAttribute("role") &&
              t.setAttribute("aria-selected", !0),
            l.reflow(t),
            t.classList.contains("fade") && t.classList.add("show"),
            t.parentNode && i.default(t.parentNode).hasClass("dropdown-menu"))
          ) {
            var r = i.default(t).closest(".dropdown")[0];
            if (r) {
              var a = [].slice.call(r.querySelectorAll(".dropdown-toggle"));
              i.default(a).addClass("active");
            }
            t.setAttribute("aria-expanded", !0);
          }
          n && n();
        }),
        (t._jQueryInterface = function (e) {
          return this.each(function () {
            var n = i.default(this),
              o = n.data("bs.tab");
            if (
              (o || ((o = new t(this)), n.data("bs.tab", o)),
              "string" == typeof e)
            ) {
              if ("undefined" == typeof o[e])
                throw new TypeError('No method named "' + e + '"');
              o[e]();
            }
          });
        }),
        r(t, null, [
          {
            key: "VERSION",
            get: function () {
              return "4.6.0";
            },
          },
        ]),
        t
      );
    })();
  i
    .default(document)
    .on(
      "click.bs.tab.data-api",
      '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
      function (t) {
        t.preventDefault(), pe._jQueryInterface.call(i.default(this), "show");
      }
    ),
    (i.default.fn.tab = pe._jQueryInterface),
    (i.default.fn.tab.Constructor = pe),
    (i.default.fn.tab.noConflict = function () {
      return (i.default.fn.tab = he), pe._jQueryInterface;
    });
  var me = i.default.fn.toast,
    ge = { animation: "boolean", autohide: "boolean", delay: "number" },
    ve = { animation: !0, autohide: !0, delay: 500 },
    _e = (function () {
      function t(t, e) {
        (this._element = t),
          (this._config = this._getConfig(e)),
          (this._timeout = null),
          this._setListeners();
      }
      var e = t.prototype;
      return (
        (e.show = function () {
          var t = this,
            e = i.default.Event("show.bs.toast");
          if ((i.default(this._element).trigger(e), !e.isDefaultPrevented())) {
            this._clearTimeout(),
              this._config.animation && this._element.classList.add("fade");
            var n = function () {
              t._element.classList.remove("showing"),
                t._element.classList.add("show"),
                i.default(t._element).trigger("shown.bs.toast"),
                t._config.autohide &&
                  (t._timeout = setTimeout(function () {
                    t.hide();
                  }, t._config.delay));
            };
            if (
              (this._element.classList.remove("hide"),
              l.reflow(this._element),
              this._element.classList.add("showing"),
              this._config.animation)
            ) {
              var o = l.getTransitionDurationFromElement(this._element);
              i.default(this._element)
                .one(l.TRANSITION_END, n)
                .emulateTransitionEnd(o);
            } else n();
          }
        }),
        (e.hide = function () {
          if (this._element.classList.contains("show")) {
            var t = i.default.Event("hide.bs.toast");
            i.default(this._element).trigger(t),
              t.isDefaultPrevented() || this._close();
          }
        }),
        (e.dispose = function () {
          this._clearTimeout(),
            this._element.classList.contains("show") &&
              this._element.classList.remove("show"),
            i.default(this._element).off("click.dismiss.bs.toast"),
            i.default.removeData(this._element, "bs.toast"),
            (this._element = null),
            (this._config = null);
        }),
        (e._getConfig = function (t) {
          return (
            (t = a(
              {},
              ve,
              i.default(this._element).data(),
              "object" == typeof t && t ? t : {}
            )),
            l.typeCheckConfig("toast", t, this.constructor.DefaultType),
            t
          );
        }),
        (e._setListeners = function () {
          var t = this;
          i.default(this._element).on(
            "click.dismiss.bs.toast",
            '[data-dismiss="toast"]',
            function () {
              return t.hide();
            }
          );
        }),
        (e._close = function () {
          var t = this,
            e = function () {
              t._element.classList.add("hide"),
                i.default(t._element).trigger("hidden.bs.toast");
            };
          if (
            (this._element.classList.remove("show"), this._config.animation)
          ) {
            var n = l.getTransitionDurationFromElement(this._element);
            i.default(this._element)
              .one(l.TRANSITION_END, e)
              .emulateTransitionEnd(n);
          } else e();
        }),
        (e._clearTimeout = function () {
          clearTimeout(this._timeout), (this._timeout = null);
        }),
        (t._jQueryInterface = function (e) {
          return this.each(function () {
            var n = i.default(this),
              o = n.data("bs.toast");
            if (
              (o ||
                ((o = new t(this, "object" == typeof e && e)),
                n.data("bs.toast", o)),
              "string" == typeof e)
            ) {
              if ("undefined" == typeof o[e])
                throw new TypeError('No method named "' + e + '"');
              o[e](this);
            }
          });
        }),
        r(t, null, [
          {
            key: "VERSION",
            get: function () {
              return "4.6.0";
            },
          },
          {
            key: "DefaultType",
            get: function () {
              return ge;
            },
          },
          {
            key: "Default",
            get: function () {
              return ve;
            },
          },
        ]),
        t
      );
    })();
  (i.default.fn.toast = _e._jQueryInterface),
    (i.default.fn.toast.Constructor = _e),
    (i.default.fn.toast.noConflict = function () {
      return (i.default.fn.toast = me), _e._jQueryInterface;
    }),
    (t.Alert = d),
    (t.Button = h),
    (t.Carousel = y),
    (t.Collapse = S),
    (t.Dropdown = Ft),
    (t.Modal = qt),
    (t.Popover = se),
    (t.Scrollspy = ce),
    (t.Tab = pe),
    (t.Toast = _e),
    (t.Tooltip = te),
    (t.Util = l),
    Object.defineProperty(t, "__esModule", { value: !0 });
});
/*! jQuery easing 1.3 */
(function (factory) {
  if (typeof define === "function" && define.amd) {
    define(["jquery"], function ($) {
      return factory($);
    });
  } else if (typeof module === "object" && typeof module.exports === "object") {
    exports = factory(require("jquery"));
  } else {
    factory(jQuery);
  }
})(function ($) {
  $.easing.jswing = $.easing.swing;
  var pow = Math.pow,
    sqrt = Math.sqrt,
    sin = Math.sin,
    cos = Math.cos,
    PI = Math.PI,
    c1 = 1.70158,
    c2 = c1 * 1.525,
    c3 = c1 + 1,
    c4 = (2 * PI) / 3,
    c5 = (2 * PI) / 4.5;
  function bounceOut(x) {
    var n1 = 7.5625,
      d1 = 2.75;
    if (x < 1 / d1) {
      return n1 * x * x;
    } else if (x < 2 / d1) {
      return n1 * (x -= 1.5 / d1) * x + 0.75;
    } else if (x < 2.5 / d1) {
      return n1 * (x -= 2.25 / d1) * x + 0.9375;
    } else {
      return n1 * (x -= 2.625 / d1) * x + 0.984375;
    }
  }
  $.extend($.easing, {
    def: "easeOutQuad",
    swing: function (x) {
      return $.easing[$.easing.def](x);
    },
    easeInQuad: function (x) {
      return x * x;
    },
    easeOutQuad: function (x) {
      return 1 - (1 - x) * (1 - x);
    },
    easeInOutQuad: function (x) {
      return x < 0.5 ? 2 * x * x : 1 - pow(-2 * x + 2, 2) / 2;
    },
    easeInCubic: function (x) {
      return x * x * x;
    },
    easeOutCubic: function (x) {
      return 1 - pow(1 - x, 3);
    },
    easeInOutCubic: function (x) {
      return x < 0.5 ? 4 * x * x * x : 1 - pow(-2 * x + 2, 3) / 2;
    },
    easeInQuart: function (x) {
      return x * x * x * x;
    },
    easeOutQuart: function (x) {
      return 1 - pow(1 - x, 4);
    },
    easeInOutQuart: function (x) {
      return x < 0.5 ? 8 * x * x * x * x : 1 - pow(-2 * x + 2, 4) / 2;
    },
    easeInQuint: function (x) {
      return x * x * x * x * x;
    },
    easeOutQuint: function (x) {
      return 1 - pow(1 - x, 5);
    },
    easeInOutQuint: function (x) {
      return x < 0.5 ? 16 * x * x * x * x * x : 1 - pow(-2 * x + 2, 5) / 2;
    },
    easeInSine: function (x) {
      return 1 - cos((x * PI) / 2);
    },
    easeOutSine: function (x) {
      return sin((x * PI) / 2);
    },
    easeInOutSine: function (x) {
      return -(cos(PI * x) - 1) / 2;
    },
    easeInExpo: function (x) {
      return x === 0 ? 0 : pow(2, 10 * x - 10);
    },
    easeOutExpo: function (x) {
      return x === 1 ? 1 : 1 - pow(2, -10 * x);
    },
    easeInOutExpo: function (x) {
      return x === 0
        ? 0
        : x === 1
        ? 1
        : x < 0.5
        ? pow(2, 20 * x - 10) / 2
        : (2 - pow(2, -20 * x + 10)) / 2;
    },
    easeInCirc: function (x) {
      return 1 - sqrt(1 - pow(x, 2));
    },
    easeOutCirc: function (x) {
      return sqrt(1 - pow(x - 1, 2));
    },
    easeInOutCirc: function (x) {
      return x < 0.5
        ? (1 - sqrt(1 - pow(2 * x, 2))) / 2
        : (sqrt(1 - pow(-2 * x + 2, 2)) + 1) / 2;
    },
    easeInElastic: function (x) {
      return x === 0
        ? 0
        : x === 1
        ? 1
        : -pow(2, 10 * x - 10) * sin((x * 10 - 10.75) * c4);
    },
    easeOutElastic: function (x) {
      return x === 0
        ? 0
        : x === 1
        ? 1
        : pow(2, -10 * x) * sin((x * 10 - 0.75) * c4) + 1;
    },
    easeInOutElastic: function (x) {
      return x === 0
        ? 0
        : x === 1
        ? 1
        : x < 0.5
        ? -(pow(2, 20 * x - 10) * sin((20 * x - 11.125) * c5)) / 2
        : (pow(2, -20 * x + 10) * sin((20 * x - 11.125) * c5)) / 2 + 1;
    },
    easeInBack: function (x) {
      return c3 * x * x * x - c1 * x * x;
    },
    easeOutBack: function (x) {
      return 1 + c3 * pow(x - 1, 3) + c1 * pow(x - 1, 2);
    },
    easeInOutBack: function (x) {
      return x < 0.5
        ? (pow(2 * x, 2) * ((c2 + 1) * 2 * x - c2)) / 2
        : (pow(2 * x - 2, 2) * ((c2 + 1) * (x * 2 - 2) + c2) + 2) / 2;
    },
    easeInBounce: function (x) {
      return 1 - bounceOut(1 - x);
    },
    easeOutBounce: bounceOut,
    easeInOutBounce: function (x) {
      return x < 0.5
        ? (1 - bounceOut(1 - 2 * x)) / 2
        : (1 + bounceOut(2 * x - 1)) / 2;
    },
  });
});
/*! The Final Countdown for jQuery v2.2.0 ( http://hilios.github.io/jQuery.countdown/ )*/
!(function (a) {
  "use strict";
  "function" == typeof define && define.amd ? define(["jquery"], a) : a(jQuery);
})(function (a) {
  "use strict";
  function b(a) {
    if (a instanceof Date) return a;
    if (String(a).match(g))
      return (
        String(a).match(/^[0-9]*$/) && (a = Number(a)),
        String(a).match(/\-/) && (a = String(a).replace(/\-/g, "/")),
        new Date(a)
      );
    throw new Error("Couldn't cast `" + a + "` to a date object.");
  }
  function c(a) {
    var b = a.toString().replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1");
    return new RegExp(b);
  }
  function d(a) {
    return function (b) {
      var d = b.match(/%(-|!)?[A-Z]{1}(:[^;]+;)?/gi);
      if (d)
        for (var f = 0, g = d.length; f < g; ++f) {
          var h = d[f].match(/%(-|!)?([a-zA-Z]{1})(:[^;]+;)?/),
            j = c(h[0]),
            k = h[1] || "",
            l = h[3] || "",
            m = null;
          (h = h[2]),
            i.hasOwnProperty(h) && ((m = i[h]), (m = Number(a[m]))),
            null !== m &&
              ("!" === k && (m = e(l, m)),
              "" === k && m < 10 && (m = "0" + m.toString()),
              (b = b.replace(j, m.toString())));
        }
      return (b = b.replace(/%%/, "%"));
    };
  }
  function e(a, b) {
    var c = "s",
      d = "";
    return (
      a &&
        ((a = a.replace(/(:|;|\s)/gi, "").split(/\,/)),
        1 === a.length ? (c = a[0]) : ((d = a[0]), (c = a[1]))),
      Math.abs(b) > 1 ? c : d
    );
  }
  var f = [],
    g = [],
    h = { precision: 100, elapse: !1, defer: !1 };
  g.push(/^[0-9]*$/.source),
    g.push(/([0-9]{1,2}\/){2}[0-9]{4}( [0-9]{1,2}(:[0-9]{2}){2})?/.source),
    g.push(/[0-9]{4}([\/\-][0-9]{1,2}){2}( [0-9]{1,2}(:[0-9]{2}){2})?/.source),
    (g = new RegExp(g.join("|")));
  var i = {
      Y: "years",
      m: "months",
      n: "daysToMonth",
      d: "daysToWeek",
      w: "weeks",
      W: "weeksToMonth",
      H: "hours",
      M: "minutes",
      S: "seconds",
      D: "totalDays",
      I: "totalHours",
      N: "totalMinutes",
      T: "totalSeconds",
    },
    j = function (b, c, d) {
      (this.el = b),
        (this.$el = a(b)),
        (this.interval = null),
        (this.offset = {}),
        (this.options = a.extend({}, h)),
        (this.instanceNumber = f.length),
        f.push(this),
        this.$el.data("countdown-instance", this.instanceNumber),
        d &&
          ("function" == typeof d
            ? (this.$el.on("update.countdown", d),
              this.$el.on("stoped.countdown", d),
              this.$el.on("finish.countdown", d))
            : (this.options = a.extend({}, h, d))),
        this.setFinalDate(c),
        this.options.defer === !1 && this.start();
    };
  a.extend(j.prototype, {
    start: function () {
      null !== this.interval && clearInterval(this.interval);
      var a = this;
      this.update(),
        (this.interval = setInterval(function () {
          a.update.call(a);
        }, this.options.precision));
    },
    stop: function () {
      clearInterval(this.interval),
        (this.interval = null),
        this.dispatchEvent("stoped");
    },
    toggle: function () {
      this.interval ? this.stop() : this.start();
    },
    pause: function () {
      this.stop();
    },
    resume: function () {
      this.start();
    },
    remove: function () {
      this.stop.call(this),
        (f[this.instanceNumber] = null),
        delete this.$el.data().countdownInstance;
    },
    setFinalDate: function (a) {
      this.finalDate = b(a);
    },
    update: function () {
      if (0 === this.$el.closest("html").length) return void this.remove();
      var b,
        c = void 0 !== a._data(this.el, "events"),
        d = new Date();
      (b = this.finalDate.getTime() - d.getTime()),
        (b = Math.ceil(b / 1e3)),
        (b = !this.options.elapse && b < 0 ? 0 : Math.abs(b)),
        this.totalSecsLeft !== b &&
          c &&
          ((this.totalSecsLeft = b),
          (this.elapsed = d >= this.finalDate),
          (this.offset = {
            seconds: this.totalSecsLeft % 60,
            minutes: Math.floor(this.totalSecsLeft / 60) % 60,
            hours: Math.floor(this.totalSecsLeft / 60 / 60) % 24,
            days: Math.floor(this.totalSecsLeft / 60 / 60 / 24) % 7,
            daysToWeek: Math.floor(this.totalSecsLeft / 60 / 60 / 24) % 7,
            daysToMonth: Math.floor(
              (this.totalSecsLeft / 60 / 60 / 24) % 30.4368
            ),
            weeks: Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 7),
            weeksToMonth: Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 7) % 4,
            months: Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 30.4368),
            years: Math.abs(this.finalDate.getFullYear() - d.getFullYear()),
            totalDays: Math.floor(this.totalSecsLeft / 60 / 60 / 24),
            totalHours: Math.floor(this.totalSecsLeft / 60 / 60),
            totalMinutes: Math.floor(this.totalSecsLeft / 60),
            totalSeconds: this.totalSecsLeft,
          }),
          this.options.elapse || 0 !== this.totalSecsLeft
            ? this.dispatchEvent("update")
            : (this.stop(), this.dispatchEvent("finish")));
    },
    dispatchEvent: function (b) {
      var c = a.Event(b + ".countdown");
      (c.finalDate = this.finalDate),
        (c.elapsed = this.elapsed),
        (c.offset = a.extend({}, this.offset)),
        (c.strftime = d(this.offset)),
        this.$el.trigger(c);
    },
  }),
    (a.fn.countdown = function () {
      var b = Array.prototype.slice.call(arguments, 0);
      return this.each(function () {
        var c = a(this).data("countdown-instance");
        if (void 0 !== c) {
          var d = f[c],
            e = b[0];
          j.prototype.hasOwnProperty(e)
            ? d[e].apply(d, b.slice(1))
            : null === String(e).match(/^[$A-Z_][0-9A-Z_$]*$/i)
            ? (d.setFinalDate.call(d, e), d.start())
            : a.error(
                "Method %s does not exist on jQuery.countdown".replace(
                  /\%s/gi,
                  e
                )
              );
        } else new j(this, b[0], b[1]);
      });
    });
});
/*! More info at [www.dropzonejs.com](http://www.dropzonejs.com) * Copyright (c) 2012, Matias Meno */
("use strict");
var _createClass = (function () {
  function e(e, t) {
    for (var i = 0; i < t.length; i++) {
      var n = t[i];
      (n.enumerable = n.enumerable || !1),
        (n.configurable = !0),
        "value" in n && (n.writable = !0),
        Object.defineProperty(e, n.key, n);
    }
  }
  return function (t, i, n) {
    return i && e(t.prototype, i), n && e(t, n), t;
  };
})();
function _possibleConstructorReturn(e, t) {
  if (!e)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
}
function _inherits(e, t) {
  if ("function" != typeof t && null !== t)
    throw new TypeError(
      "Super expression must either be null or a function, not " + typeof t
    );
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
  })),
    t &&
      (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
}
function _classCallCheck(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
var Emitter = (function () {
    function e() {
      _classCallCheck(this, e);
    }
    return (
      _createClass(e, [
        {
          key: "on",
          value: function (e, t) {
            return (
              (this._callbacks = this._callbacks || {}),
              this._callbacks[e] || (this._callbacks[e] = []),
              this._callbacks[e].push(t),
              this
            );
          },
        },
        {
          key: "emit",
          value: function (e) {
            this._callbacks = this._callbacks || {};
            var t = this._callbacks[e];
            if (t) {
              for (
                var i = arguments.length, n = Array(i > 1 ? i - 1 : 0), r = 1;
                r < i;
                r++
              )
                n[r - 1] = arguments[r];
              for (var o = 0, a = (a = t); ; ) {
                if (o >= a.length) break;
                a[o++].apply(this, n);
              }
            }
            return this;
          },
        },
        {
          key: "off",
          value: function (e, t) {
            if (!this._callbacks || 0 === arguments.length)
              return (this._callbacks = {}), this;
            var i = this._callbacks[e];
            if (!i) return this;
            if (1 === arguments.length) return delete this._callbacks[e], this;
            for (var n = 0; n < i.length; n++) {
              if (i[n] === t) {
                i.splice(n, 1);
                break;
              }
            }
            return this;
          },
        },
      ]),
      e
    );
  })(),
  Dropzone = (function (e) {
    function t(e, i) {
      _classCallCheck(this, t);
      var n,
        r = _possibleConstructorReturn(
          this,
          (t.__proto__ || Object.getPrototypeOf(t)).call(this)
        ),
        o = void 0;
      if (
        ((r.element = e),
        (r.version = t.version),
        (r.defaultOptions.previewTemplate =
          r.defaultOptions.previewTemplate.replace(/\n*/g, "")),
        (r.clickableElements = []),
        (r.listeners = []),
        (r.files = []),
        "string" == typeof r.element &&
          (r.element = document.querySelector(r.element)),
        !r.element || null == r.element.nodeType)
      )
        throw new Error("Invalid dropzone element.");
      if (r.element.dropzone) throw new Error("Dropzone already attached.");
      t.instances.push(r), (r.element.dropzone = r);
      var a,
        s = null != (n = t.optionsForElement(r.element)) ? n : {};
      if (
        ((r.options = t.extend({}, r.defaultOptions, s, null != i ? i : {})),
        r.options.forceFallback || !t.isBrowserSupported())
      )
        return (
          (a = r.options.fallback.call(r)), _possibleConstructorReturn(r, a)
        );
      if (
        (null == r.options.url &&
          (r.options.url = r.element.getAttribute("action")),
        !r.options.url)
      )
        throw new Error("No URL provided.");
      if (r.options.acceptedFiles && r.options.acceptedMimeTypes)
        throw new Error(
          "You can't provide both 'acceptedFiles' and 'acceptedMimeTypes'. 'acceptedMimeTypes' is deprecated."
        );
      if (r.options.uploadMultiple && r.options.chunking)
        throw new Error("You cannot set both: uploadMultiple and chunking.");
      return (
        r.options.acceptedMimeTypes &&
          ((r.options.acceptedFiles = r.options.acceptedMimeTypes),
          delete r.options.acceptedMimeTypes),
        null != r.options.renameFilename &&
          (r.options.renameFile = function (e) {
            return r.options.renameFilename.call(r, e.name, e);
          }),
        (r.options.method = r.options.method.toUpperCase()),
        (o = r.getExistingFallback()) &&
          o.parentNode &&
          o.parentNode.removeChild(o),
        !1 !== r.options.previewsContainer &&
          (r.options.previewsContainer
            ? (r.previewsContainer = t.getElement(
                r.options.previewsContainer,
                "previewsContainer"
              ))
            : (r.previewsContainer = r.element)),
        r.options.clickable &&
          (!0 === r.options.clickable
            ? (r.clickableElements = [r.element])
            : (r.clickableElements = t.getElements(
                r.options.clickable,
                "clickable"
              ))),
        r.init(),
        r
      );
    }
    return (
      _inherits(t, Emitter),
      _createClass(t, null, [
        {
          key: "initClass",
          value: function () {
            (this.prototype.Emitter = Emitter),
              (this.prototype.events = [
                "drop",
                "dragstart",
                "dragend",
                "dragenter",
                "dragover",
                "dragleave",
                "addedfile",
                "addedfiles",
                "removedfile",
                "thumbnail",
                "error",
                "errormultiple",
                "processing",
                "processingmultiple",
                "uploadprogress",
                "totaluploadprogress",
                "sending",
                "sendingmultiple",
                "success",
                "successmultiple",
                "canceled",
                "canceledmultiple",
                "complete",
                "completemultiple",
                "reset",
                "maxfilesexceeded",
                "maxfilesreached",
                "queuecomplete",
              ]),
              (this.prototype.defaultOptions = {
                url: null,
                method: "post",
                withCredentials: !1,
                timeout: 3e4,
                parallelUploads: 2,
                uploadMultiple: !1,
                chunking: !1,
                forceChunking: !1,
                chunkSize: 2e6,
                parallelChunkUploads: !1,
                retryChunks: !1,
                retryChunksLimit: 3,
                maxFilesize: 256,
                paramName: "file",
                createImageThumbnails: !0,
                maxThumbnailFilesize: 10,
                thumbnailWidth: 120,
                thumbnailHeight: 120,
                thumbnailMethod: "crop",
                resizeWidth: null,
                resizeHeight: null,
                resizeMimeType: null,
                resizeQuality: 0.8,
                resizeMethod: "contain",
                filesizeBase: 1e3,
                maxFiles: null,
                headers: null,
                clickable: !0,
                ignoreHiddenFiles: !0,
                acceptedFiles: null,
                acceptedMimeTypes: null,
                autoProcessQueue: !0,
                autoQueue: !0,
                addRemoveLinks: !1,
                previewsContainer: null,
                hiddenInputContainer: "body",
                capture: null,
                renameFilename: null,
                renameFile: null,
                forceFallback: !1,
                dictDefaultMessage: "Drop files here to upload",
                dictFallbackMessage:
                  "Your browser does not support drag'n'drop file uploads.",
                dictFallbackText:
                  "Please use the fallback form below to upload your files like in the olden days.",
                dictFileTooBig:
                  "File is too big ({{filesize}}MiB). Max filesize: {{maxFilesize}}MiB.",
                dictInvalidFileType: "You can't upload files of this type.",
                dictResponseError: "Server responded with {{statusCode}} code.",
                dictCancelUpload: "Cancel upload",
                dictUploadCanceled: "Upload canceled.",
                dictCancelUploadConfirmation:
                  "Are you sure you want to cancel this upload?",
                dictRemoveFile: "Remove file",
                dictRemoveFileConfirmation: null,
                dictMaxFilesExceeded: "You can not upload any more files.",
                dictFileSizeUnits: {
                  tb: "TB",
                  gb: "GB",
                  mb: "MB",
                  kb: "KB",
                  b: "b",
                },
                init: function () {},
                params: function (e, t, i) {
                  if (i)
                    return {
                      dzuuid: i.file.upload.uuid,
                      dzchunkindex: i.index,
                      dztotalfilesize: i.file.size,
                      dzchunksize: this.options.chunkSize,
                      dztotalchunkcount: i.file.upload.totalChunkCount,
                      dzchunkbyteoffset: i.index * this.options.chunkSize,
                    };
                },
                accept: function (e, t) {
                  return t();
                },
                chunksUploaded: function (e, t) {
                  t();
                },
                fallback: function () {
                  var e = void 0;
                  this.element.className =
                    this.element.className + " dz-browser-not-supported";
                  for (
                    var i = 0,
                      n = (n = this.element.getElementsByTagName("div"));
                    ;

                  ) {
                    if (i >= n.length) break;
                    var r = n[i++];
                    if (/(^| )dz-message($| )/.test(r.className)) {
                      (e = r), (r.className = "dz-message");
                      break;
                    }
                  }
                  e ||
                    ((e = t.createElement(
                      '<div class="dz-message"><span></span></div>'
                    )),
                    this.element.appendChild(e));
                  var o = e.getElementsByTagName("span")[0];
                  return (
                    o &&
                      (null != o.textContent
                        ? (o.textContent = this.options.dictFallbackMessage)
                        : null != o.innerText &&
                          (o.innerText = this.options.dictFallbackMessage)),
                    this.element.appendChild(this.getFallbackForm())
                  );
                },
                resize: function (e, t, i, n) {
                  var r = {
                      srcX: 0,
                      srcY: 0,
                      srcWidth: e.width,
                      srcHeight: e.height,
                    },
                    o = e.width / e.height;
                  null == t && null == i
                    ? ((t = r.srcWidth), (i = r.srcHeight))
                    : null == t
                    ? (t = i * o)
                    : null == i && (i = t / o);
                  var a =
                    (t = Math.min(t, r.srcWidth)) /
                    (i = Math.min(i, r.srcHeight));
                  if (r.srcWidth > t || r.srcHeight > i)
                    if ("crop" === n)
                      o > a
                        ? ((r.srcHeight = e.height),
                          (r.srcWidth = r.srcHeight * a))
                        : ((r.srcWidth = e.width),
                          (r.srcHeight = r.srcWidth / a));
                    else {
                      if ("contain" !== n)
                        throw new Error("Unknown resizeMethod '" + n + "'");
                      o > a ? (i = t / o) : (t = i * o);
                    }
                  return (
                    (r.srcX = (e.width - r.srcWidth) / 2),
                    (r.srcY = (e.height - r.srcHeight) / 2),
                    (r.trgWidth = t),
                    (r.trgHeight = i),
                    r
                  );
                },
                transformFile: function (e, t) {
                  return (this.options.resizeWidth ||
                    this.options.resizeHeight) &&
                    e.type.match(/image.*/)
                    ? this.resizeImage(
                        e,
                        this.options.resizeWidth,
                        this.options.resizeHeight,
                        this.options.resizeMethod,
                        t
                      )
                    : t(e);
                },
                previewTemplate:
                  '<div class="dz-preview dz-file-preview">\n  <div class="dz-image"><img data-dz-thumbnail /></div>\n  <div class="dz-details">\n    <div class="dz-size"><span data-dz-size></span></div>\n    <div class="dz-filename"><span data-dz-name></span></div>\n  </div>\n  <div class="dz-progress"><span class="dz-upload" data-dz-uploadprogress></span></div>\n  <div class="dz-error-message"><span data-dz-errormessage></span></div>\n  <div class="dz-success-mark">\n    <svg width="54px" height="54px" viewBox="0 0 54 54" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">\n      <title>Check</title>\n      <defs></defs>\n      <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">\n        <path d="M23.5,31.8431458 L17.5852419,25.9283877 C16.0248253,24.3679711 13.4910294,24.366835 11.9289322,25.9289322 C10.3700136,27.4878508 10.3665912,30.0234455 11.9283877,31.5852419 L20.4147581,40.0716123 C20.5133999,40.1702541 20.6159315,40.2626649 20.7218615,40.3488435 C22.2835669,41.8725651 24.794234,41.8626202 26.3461564,40.3106978 L43.3106978,23.3461564 C44.8771021,21.7797521 44.8758057,19.2483887 43.3137085,17.6862915 C41.7547899,16.1273729 39.2176035,16.1255422 37.6538436,17.6893022 L23.5,31.8431458 Z M27,53 C41.3594035,53 53,41.3594035 53,27 C53,12.6405965 41.3594035,1 27,1 C12.6405965,1 1,12.6405965 1,27 C1,41.3594035 12.6405965,53 27,53 Z" id="Oval-2" stroke-opacity="0.198794158" stroke="#747474" fill-opacity="0.816519475" fill="#FFFFFF" sketch:type="MSShapeGroup"></path>\n      </g>\n    </svg>\n  </div>\n  <div class="dz-error-mark">\n    <svg width="54px" height="54px" viewBox="0 0 54 54" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">\n      <title>Error</title>\n      <defs></defs>\n      <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">\n        <g id="Check-+-Oval-2" sketch:type="MSLayerGroup" stroke="#747474" stroke-opacity="0.198794158" fill="#FFFFFF" fill-opacity="0.816519475">\n          <path d="M32.6568542,29 L38.3106978,23.3461564 C39.8771021,21.7797521 39.8758057,19.2483887 38.3137085,17.6862915 C36.7547899,16.1273729 34.2176035,16.1255422 32.6538436,17.6893022 L27,23.3431458 L21.3461564,17.6893022 C19.7823965,16.1255422 17.2452101,16.1273729 15.6862915,17.6862915 C14.1241943,19.2483887 14.1228979,21.7797521 15.6893022,23.3461564 L21.3431458,29 L15.6893022,34.6538436 C14.1228979,36.2202479 14.1241943,38.7516113 15.6862915,40.3137085 C17.2452101,41.8726271 19.7823965,41.8744578 21.3461564,40.3106978 L27,34.6568542 L32.6538436,40.3106978 C34.2176035,41.8744578 36.7547899,41.8726271 38.3137085,40.3137085 C39.8758057,38.7516113 39.8771021,36.2202479 38.3106978,34.6538436 L32.6568542,29 Z M27,53 C41.3594035,53 53,41.3594035 53,27 C53,12.6405965 41.3594035,1 27,1 C12.6405965,1 1,12.6405965 1,27 C1,41.3594035 12.6405965,53 27,53 Z" id="Oval-2" sketch:type="MSShapeGroup"></path>\n        </g>\n      </g>\n    </svg>\n  </div>\n</div>',
                drop: function (e) {
                  return this.element.classList.remove("dz-drag-hover");
                },
                dragstart: function (e) {},
                dragend: function (e) {
                  return this.element.classList.remove("dz-drag-hover");
                },
                dragenter: function (e) {
                  return this.element.classList.add("dz-drag-hover");
                },
                dragover: function (e) {
                  return this.element.classList.add("dz-drag-hover");
                },
                dragleave: function (e) {
                  return this.element.classList.remove("dz-drag-hover");
                },
                paste: function (e) {},
                reset: function () {
                  return this.element.classList.remove("dz-started");
                },
                addedfile: function (e) {
                  var i = this;
                  if (
                    (this.element === this.previewsContainer &&
                      this.element.classList.add("dz-started"),
                    this.previewsContainer)
                  ) {
                    (e.previewElement = t.createElement(
                      this.options.previewTemplate.trim()
                    )),
                      (e.previewTemplate = e.previewElement),
                      this.previewsContainer.appendChild(e.previewElement);
                    for (
                      var n = 0,
                        r = (r =
                          e.previewElement.querySelectorAll("[data-dz-name]"));
                      ;

                    ) {
                      if (n >= r.length) break;
                      var o = r[n++];
                      o.textContent = e.name;
                    }
                    for (
                      var a = 0,
                        s = (s =
                          e.previewElement.querySelectorAll("[data-dz-size]"));
                      !(a >= s.length);

                    )
                      (o = s[a++]).innerHTML = this.filesize(e.size);
                    this.options.addRemoveLinks &&
                      ((e._removeLink = t.createElement(
                        '<a class="dz-remove" href="javascript:undefined;" data-dz-remove>' +
                          this.options.dictRemoveFile +
                          "</a>"
                      )),
                      e.previewElement.appendChild(e._removeLink));
                    for (
                      var l = function (n) {
                          return (
                            n.preventDefault(),
                            n.stopPropagation(),
                            e.status === t.UPLOADING
                              ? t.confirm(
                                  i.options.dictCancelUploadConfirmation,
                                  function () {
                                    return i.removeFile(e);
                                  }
                                )
                              : i.options.dictRemoveFileConfirmation
                              ? t.confirm(
                                  i.options.dictRemoveFileConfirmation,
                                  function () {
                                    return i.removeFile(e);
                                  }
                                )
                              : i.removeFile(e)
                          );
                        },
                        u = 0,
                        d = (d =
                          e.previewElement.querySelectorAll(
                            "[data-dz-remove]"
                          ));
                      ;

                    ) {
                      if (u >= d.length) break;
                      d[u++].addEventListener("click", l);
                    }
                  }
                },
                removedfile: function (e) {
                  return (
                    null != e.previewElement &&
                      null != e.previewElement.parentNode &&
                      e.previewElement.parentNode.removeChild(e.previewElement),
                    this._updateMaxFilesReachedClass()
                  );
                },
                thumbnail: function (e, t) {
                  if (e.previewElement) {
                    e.previewElement.classList.remove("dz-file-preview");
                    for (
                      var i = 0,
                        n = (n = e.previewElement.querySelectorAll(
                          "[data-dz-thumbnail]"
                        ));
                      ;

                    ) {
                      if (i >= n.length) break;
                      var r = n[i++];
                      (r.alt = e.name), (r.src = t);
                    }
                    return setTimeout(function () {
                      return e.previewElement.classList.add("dz-image-preview");
                    }, 1);
                  }
                },
                error: function (e, t) {
                  if (e.previewElement) {
                    e.previewElement.classList.add("dz-error"),
                      "String" != typeof t && t.error && (t = t.error);
                    for (
                      var i = 0,
                        n = (n = e.previewElement.querySelectorAll(
                          "[data-dz-errormessage]"
                        ));
                      ;

                    ) {
                      if (i >= n.length) break;
                      n[i++].textContent = t;
                    }
                  }
                },
                errormultiple: function () {},
                processing: function (e) {
                  if (
                    e.previewElement &&
                    (e.previewElement.classList.add("dz-processing"),
                    e._removeLink)
                  )
                    return (e._removeLink.textContent =
                      this.options.dictCancelUpload);
                },
                processingmultiple: function () {},
                uploadprogress: function (e, t, i) {
                  if (e.previewElement)
                    for (
                      var n = 0,
                        r = (r = e.previewElement.querySelectorAll(
                          "[data-dz-uploadprogress]"
                        ));
                      ;

                    ) {
                      if (n >= r.length) break;
                      var o = r[n++];
                      "PROGRESS" === o.nodeName
                        ? (o.value = t)
                        : (o.style.width = t + "%");
                    }
                },
                totaluploadprogress: function () {},
                sending: function () {},
                sendingmultiple: function () {},
                success: function (e) {
                  if (e.previewElement)
                    return e.previewElement.classList.add("dz-success");
                },
                successmultiple: function () {},
                canceled: function (e) {
                  return this.emit("error", e, this.options.dictUploadCanceled);
                },
                canceledmultiple: function () {},
                complete: function (e) {
                  if (
                    (e._removeLink &&
                      (e._removeLink.textContent = this.options.dictRemoveFile),
                    e.previewElement)
                  )
                    return e.previewElement.classList.add("dz-complete");
                },
                completemultiple: function () {},
                maxfilesexceeded: function () {},
                maxfilesreached: function () {},
                queuecomplete: function () {},
                addedfiles: function () {},
              }),
              (this.prototype._thumbnailQueue = []),
              (this.prototype._processingThumbnail = !1);
          },
        },
        {
          key: "extend",
          value: function (e) {
            for (
              var t = arguments.length, i = Array(t > 1 ? t - 1 : 0), n = 1;
              n < t;
              n++
            )
              i[n - 1] = arguments[n];
            for (var r = 0, o = (o = i); ; ) {
              if (r >= o.length) break;
              var a = o[r++];
              for (var s in a) {
                var l = a[s];
                e[s] = l;
              }
            }
            return e;
          },
        },
      ]),
      _createClass(
        t,
        [
          {
            key: "getAcceptedFiles",
            value: function () {
              return this.files
                .filter(function (e) {
                  return e.accepted;
                })
                .map(function (e) {
                  return e;
                });
            },
          },
          {
            key: "getRejectedFiles",
            value: function () {
              return this.files
                .filter(function (e) {
                  return !e.accepted;
                })
                .map(function (e) {
                  return e;
                });
            },
          },
          {
            key: "getFilesWithStatus",
            value: function (e) {
              return this.files
                .filter(function (t) {
                  return t.status === e;
                })
                .map(function (e) {
                  return e;
                });
            },
          },
          {
            key: "getQueuedFiles",
            value: function () {
              return this.getFilesWithStatus(t.QUEUED);
            },
          },
          {
            key: "getUploadingFiles",
            value: function () {
              return this.getFilesWithStatus(t.UPLOADING);
            },
          },
          {
            key: "getAddedFiles",
            value: function () {
              return this.getFilesWithStatus(t.ADDED);
            },
          },
          {
            key: "getActiveFiles",
            value: function () {
              return this.files
                .filter(function (e) {
                  return e.status === t.UPLOADING || e.status === t.QUEUED;
                })
                .map(function (e) {
                  return e;
                });
            },
          },
          {
            key: "init",
            value: function () {
              var e = this;
              if (
                ("form" === this.element.tagName &&
                  this.element.setAttribute("enctype", "multipart/form-data"),
                this.element.classList.contains("dropzone") &&
                  !this.element.querySelector(".dz-message") &&
                  this.element.appendChild(
                    t.createElement(
                      '<div class="dz-default dz-message"><span>' +
                        this.options.dictDefaultMessage +
                        "</span></div>"
                    )
                  ),
                this.clickableElements.length)
              ) {
                !(function t() {
                  return (
                    e.hiddenFileInput &&
                      e.hiddenFileInput.parentNode.removeChild(
                        e.hiddenFileInput
                      ),
                    (e.hiddenFileInput = document.createElement("input")),
                    e.hiddenFileInput.setAttribute("type", "file"),
                    (null === e.options.maxFiles || e.options.maxFiles > 1) &&
                      e.hiddenFileInput.setAttribute("multiple", "multiple"),
                    (e.hiddenFileInput.className = "dz-hidden-input"),
                    null !== e.options.acceptedFiles &&
                      e.hiddenFileInput.setAttribute(
                        "accept",
                        e.options.acceptedFiles
                      ),
                    null !== e.options.capture &&
                      e.hiddenFileInput.setAttribute(
                        "capture",
                        e.options.capture
                      ),
                    (e.hiddenFileInput.style.visibility = "hidden"),
                    (e.hiddenFileInput.style.position = "absolute"),
                    (e.hiddenFileInput.style.top = "0"),
                    (e.hiddenFileInput.style.left = "0"),
                    (e.hiddenFileInput.style.height = "0"),
                    (e.hiddenFileInput.style.width = "0"),
                    document
                      .querySelector(e.options.hiddenInputContainer)
                      .appendChild(e.hiddenFileInput),
                    e.hiddenFileInput.addEventListener("change", function () {
                      var i = e.hiddenFileInput.files;
                      if (i.length)
                        for (var n = 0, r = (r = i); !(n >= r.length); ) {
                          var o = r[n++];
                          e.addFile(o);
                        }
                      return e.emit("addedfiles", i), t();
                    })
                  );
                })();
              }
              this.URL = null !== window.URL ? window.URL : window.webkitURL;
              for (var i = 0, n = (n = this.events); ; ) {
                if (i >= n.length) break;
                var r = n[i++];
                this.on(r, this.options[r]);
              }
              this.on("uploadprogress", function () {
                return e.updateTotalUploadProgress();
              }),
                this.on("removedfile", function () {
                  return e.updateTotalUploadProgress();
                }),
                this.on("canceled", function (t) {
                  return e.emit("complete", t);
                }),
                this.on("complete", function (t) {
                  if (
                    0 === e.getAddedFiles().length &&
                    0 === e.getUploadingFiles().length &&
                    0 === e.getQueuedFiles().length
                  )
                    return setTimeout(function () {
                      return e.emit("queuecomplete");
                    }, 0);
                });
              var o = function (e) {
                return (
                  e.stopPropagation(),
                  e.preventDefault ? e.preventDefault() : (e.returnValue = !1)
                );
              };
              return (
                (this.listeners = [
                  {
                    element: this.element,
                    events: {
                      dragstart: function (t) {
                        return e.emit("dragstart", t);
                      },
                      dragenter: function (t) {
                        return o(t), e.emit("dragenter", t);
                      },
                      dragover: function (t) {
                        var i = void 0;
                        try {
                          i = t.dataTransfer.effectAllowed;
                        } catch (e) {}
                        return (
                          (t.dataTransfer.dropEffect =
                            "move" === i || "linkMove" === i ? "move" : "copy"),
                          o(t),
                          e.emit("dragover", t)
                        );
                      },
                      dragleave: function (t) {
                        return e.emit("dragleave", t);
                      },
                      drop: function (t) {
                        return o(t), e.drop(t);
                      },
                      dragend: function (t) {
                        return e.emit("dragend", t);
                      },
                    },
                  },
                ]),
                this.clickableElements.forEach(function (i) {
                  return e.listeners.push({
                    element: i,
                    events: {
                      click: function (n) {
                        return (
                          (i !== e.element ||
                            n.target === e.element ||
                            t.elementInside(
                              n.target,
                              e.element.querySelector(".dz-message")
                            )) &&
                            e.hiddenFileInput.click(),
                          !0
                        );
                      },
                    },
                  });
                }),
                this.enable(),
                this.options.init.call(this)
              );
            },
          },
          {
            key: "destroy",
            value: function () {
              return (
                this.disable(),
                this.removeAllFiles(!0),
                (null != this.hiddenFileInput
                  ? this.hiddenFileInput.parentNode
                  : void 0) &&
                  (this.hiddenFileInput.parentNode.removeChild(
                    this.hiddenFileInput
                  ),
                  (this.hiddenFileInput = null)),
                delete this.element.dropzone,
                t.instances.splice(t.instances.indexOf(this), 1)
              );
            },
          },
          {
            key: "updateTotalUploadProgress",
            value: function () {
              var e = void 0,
                t = 0,
                i = 0;
              if (this.getActiveFiles().length) {
                for (var n = 0, r = (r = this.getActiveFiles()); ; ) {
                  if (n >= r.length) break;
                  var o = r[n++];
                  (t += o.upload.bytesSent), (i += o.upload.total);
                }
                e = (100 * t) / i;
              } else e = 100;
              return this.emit("totaluploadprogress", e, i, t);
            },
          },
          {
            key: "_getParamName",
            value: function (e) {
              return "function" == typeof this.options.paramName
                ? this.options.paramName(e)
                : this.options.paramName +
                    (this.options.uploadMultiple ? "[" + e + "]" : "");
            },
          },
          {
            key: "_renameFile",
            value: function (e) {
              return "function" != typeof this.options.renameFile
                ? e.name
                : this.options.renameFile(e);
            },
          },
          {
            key: "getFallbackForm",
            value: function () {
              var e,
                i = void 0;
              if ((e = this.getExistingFallback())) return e;
              var n = '<div class="dz-fallback">';
              this.options.dictFallbackText &&
                (n += "<p>" + this.options.dictFallbackText + "</p>"),
                (n +=
                  '<input type="file" name="' +
                  this._getParamName(0) +
                  '" ' +
                  (this.options.uploadMultiple
                    ? 'multiple="multiple"'
                    : void 0) +
                  ' /><input type="submit" value="Upload!"></div>');
              var r = t.createElement(n);
              return (
                "FORM" !== this.element.tagName
                  ? (i = t.createElement(
                      '<form action="' +
                        this.options.url +
                        '" enctype="multipart/form-data" method="' +
                        this.options.method +
                        '"></form>'
                    )).appendChild(r)
                  : (this.element.setAttribute(
                      "enctype",
                      "multipart/form-data"
                    ),
                    this.element.setAttribute("method", this.options.method)),
                null != i ? i : r
              );
            },
          },
          {
            key: "getExistingFallback",
            value: function () {
              for (
                var e = function (e) {
                    for (var t = 0, i = (i = e); ; ) {
                      if (t >= i.length) break;
                      var n = i[t++];
                      if (/(^| )fallback($| )/.test(n.className)) return n;
                    }
                  },
                  t = ["div", "form"],
                  i = 0;
                i < t.length;
                i++
              ) {
                var n,
                  r = t[i];
                if ((n = e(this.element.getElementsByTagName(r)))) return n;
              }
            },
          },
          {
            key: "setupEventListeners",
            value: function () {
              return this.listeners.map(function (e) {
                return (function () {
                  var t = [];
                  for (var i in e.events) {
                    var n = e.events[i];
                    t.push(e.element.addEventListener(i, n, !1));
                  }
                  return t;
                })();
              });
            },
          },
          {
            key: "removeEventListeners",
            value: function () {
              return this.listeners.map(function (e) {
                return (function () {
                  var t = [];
                  for (var i in e.events) {
                    var n = e.events[i];
                    t.push(e.element.removeEventListener(i, n, !1));
                  }
                  return t;
                })();
              });
            },
          },
          {
            key: "disable",
            value: function () {
              var e = this;
              return (
                this.clickableElements.forEach(function (e) {
                  return e.classList.remove("dz-clickable");
                }),
                this.removeEventListeners(),
                (this.disabled = !0),
                this.files.map(function (t) {
                  return e.cancelUpload(t);
                })
              );
            },
          },
          {
            key: "enable",
            value: function () {
              return (
                delete this.disabled,
                this.clickableElements.forEach(function (e) {
                  return e.classList.add("dz-clickable");
                }),
                this.setupEventListeners()
              );
            },
          },
          {
            key: "filesize",
            value: function (e) {
              var t = 0,
                i = "b";
              if (e > 0) {
                for (
                  var n = ["tb", "gb", "mb", "kb", "b"], r = 0;
                  r < n.length;
                  r++
                ) {
                  var o = n[r];
                  if (e >= Math.pow(this.options.filesizeBase, 4 - r) / 10) {
                    (t = e / Math.pow(this.options.filesizeBase, 4 - r)),
                      (i = o);
                    break;
                  }
                }
                t = Math.round(10 * t) / 10;
              }
              return (
                "<strong>" +
                t +
                "</strong> " +
                this.options.dictFileSizeUnits[i]
              );
            },
          },
          {
            key: "_updateMaxFilesReachedClass",
            value: function () {
              return null != this.options.maxFiles &&
                this.getAcceptedFiles().length >= this.options.maxFiles
                ? (this.getAcceptedFiles().length === this.options.maxFiles &&
                    this.emit("maxfilesreached", this.files),
                  this.element.classList.add("dz-max-files-reached"))
                : this.element.classList.remove("dz-max-files-reached");
            },
          },
          {
            key: "drop",
            value: function (e) {
              if (e.dataTransfer) {
                this.emit("drop", e);
                for (var t = [], i = 0; i < e.dataTransfer.files.length; i++)
                  t[i] = e.dataTransfer.files[i];
                if ((this.emit("addedfiles", t), t.length)) {
                  var n = e.dataTransfer.items;
                  n && n.length && null != n[0].webkitGetAsEntry
                    ? this._addFilesFromItems(n)
                    : this.handleFiles(t);
                }
              }
            },
          },
          {
            key: "paste",
            value: function (e) {
              if (
                null !=
                __guard__(null != e ? e.clipboardData : void 0, function (e) {
                  return e.items;
                })
              ) {
                this.emit("paste", e);
                var t = e.clipboardData.items;
                return t.length ? this._addFilesFromItems(t) : void 0;
              }
            },
          },
          {
            key: "handleFiles",
            value: function (e) {
              for (var t = 0, i = (i = e); ; ) {
                if (t >= i.length) break;
                var n = i[t++];
                this.addFile(n);
              }
            },
          },
          {
            key: "_addFilesFromItems",
            value: function (e) {
              var t = this;
              return (function () {
                for (var i = [], n = 0, r = (r = e); ; ) {
                  if (n >= r.length) break;
                  var o,
                    a = r[n++];
                  null != a.webkitGetAsEntry && (o = a.webkitGetAsEntry())
                    ? o.isFile
                      ? i.push(t.addFile(a.getAsFile()))
                      : o.isDirectory
                      ? i.push(t._addFilesFromDirectory(o, o.name))
                      : i.push(void 0)
                    : null != a.getAsFile &&
                      (null == a.kind || "file" === a.kind)
                    ? i.push(t.addFile(a.getAsFile()))
                    : i.push(void 0);
                }
                return i;
              })();
            },
          },
          {
            key: "_addFilesFromDirectory",
            value: function (e, t) {
              var i = this,
                n = e.createReader(),
                r = function (e) {
                  return __guardMethod__(console, "log", function (t) {
                    return t.log(e);
                  });
                };
              return (function e() {
                return n.readEntries(function (n) {
                  if (n.length > 0) {
                    for (var r = 0, o = (o = n); !(r >= o.length); ) {
                      var a = o[r++];
                      a.isFile
                        ? a.file(function (e) {
                            if (
                              !i.options.ignoreHiddenFiles ||
                              "." !== e.name.substring(0, 1)
                            )
                              return (
                                (e.fullPath = t + "/" + e.name), i.addFile(e)
                              );
                          })
                        : a.isDirectory &&
                          i._addFilesFromDirectory(a, t + "/" + a.name);
                    }
                    e();
                  }
                  return null;
                }, r);
              })();
            },
          },
          {
            key: "accept",
            value: function (e, i) {
              return e.size > 1024 * this.options.maxFilesize * 1024
                ? i(
                    this.options.dictFileTooBig
                      .replace(
                        "{{filesize}}",
                        Math.round(e.size / 1024 / 10.24) / 100
                      )
                      .replace("{{maxFilesize}}", this.options.maxFilesize)
                  )
                : t.isValidFile(e, this.options.acceptedFiles)
                ? null != this.options.maxFiles &&
                  this.getAcceptedFiles().length >= this.options.maxFiles
                  ? (i(
                      this.options.dictMaxFilesExceeded.replace(
                        "{{maxFiles}}",
                        this.options.maxFiles
                      )
                    ),
                    this.emit("maxfilesexceeded", e))
                  : this.options.accept.call(this, e, i)
                : i(this.options.dictInvalidFileType);
            },
          },
          {
            key: "addFile",
            value: function (e) {
              var i = this;
              return (
                (e.upload = {
                  uuid: t.uuidv4(),
                  progress: 0,
                  total: e.size,
                  bytesSent: 0,
                  filename: this._renameFile(e),
                  chunked:
                    this.options.chunking &&
                    (this.options.forceChunking ||
                      e.size > this.options.chunkSize),
                  totalChunkCount: Math.ceil(e.size / this.options.chunkSize),
                }),
                this.files.push(e),
                (e.status = t.ADDED),
                this.emit("addedfile", e),
                this._enqueueThumbnail(e),
                this.accept(e, function (t) {
                  return (
                    t
                      ? ((e.accepted = !1), i._errorProcessing([e], t))
                      : ((e.accepted = !0),
                        i.options.autoQueue && i.enqueueFile(e)),
                    i._updateMaxFilesReachedClass()
                  );
                })
              );
            },
          },
          {
            key: "enqueueFiles",
            value: function (e) {
              for (var t = 0, i = (i = e); ; ) {
                if (t >= i.length) break;
                var n = i[t++];
                this.enqueueFile(n);
              }
              return null;
            },
          },
          {
            key: "enqueueFile",
            value: function (e) {
              var i = this;
              if (e.status !== t.ADDED || !0 !== e.accepted)
                throw new Error(
                  "This file can't be queued because it has already been processed or was rejected."
                );
              if (((e.status = t.QUEUED), this.options.autoProcessQueue))
                return setTimeout(function () {
                  return i.processQueue();
                }, 0);
            },
          },
          {
            key: "_enqueueThumbnail",
            value: function (e) {
              var t = this;
              if (
                this.options.createImageThumbnails &&
                e.type.match(/image.*/) &&
                e.size <= 1024 * this.options.maxThumbnailFilesize * 1024
              )
                return (
                  this._thumbnailQueue.push(e),
                  setTimeout(function () {
                    return t._processThumbnailQueue();
                  }, 0)
                );
            },
          },
          {
            key: "_processThumbnailQueue",
            value: function () {
              var e = this;
              if (
                !this._processingThumbnail &&
                0 !== this._thumbnailQueue.length
              ) {
                this._processingThumbnail = !0;
                var t = this._thumbnailQueue.shift();
                return this.createThumbnail(
                  t,
                  this.options.thumbnailWidth,
                  this.options.thumbnailHeight,
                  this.options.thumbnailMethod,
                  !0,
                  function (i) {
                    return (
                      e.emit("thumbnail", t, i),
                      (e._processingThumbnail = !1),
                      e._processThumbnailQueue()
                    );
                  }
                );
              }
            },
          },
          {
            key: "removeFile",
            value: function (e) {
              if (
                (e.status === t.UPLOADING && this.cancelUpload(e),
                (this.files = without(this.files, e)),
                this.emit("removedfile", e),
                0 === this.files.length)
              )
                return this.emit("reset");
            },
          },
          {
            key: "removeAllFiles",
            value: function (e) {
              null == e && (e = !1);
              for (var i = 0, n = (n = this.files.slice()); ; ) {
                if (i >= n.length) break;
                var r = n[i++];
                (r.status !== t.UPLOADING || e) && this.removeFile(r);
              }
              return null;
            },
          },
          {
            key: "resizeImage",
            value: function (e, i, n, r, o) {
              var a = this;
              return this.createThumbnail(e, i, n, r, !1, function (i, n) {
                if (null == n) return o(e);
                var r = a.options.resizeMimeType;
                null == r && (r = e.type);
                var s = n.toDataURL(r, a.options.resizeQuality);
                return (
                  ("image/jpeg" !== r && "image/jpg" !== r) ||
                    (s = ExifRestore.restore(e.dataURL, s)),
                  o(t.dataURItoBlob(s))
                );
              });
            },
          },
          {
            key: "createThumbnail",
            value: function (e, t, i, n, r, o) {
              var a = this,
                s = new FileReader();
              return (
                (s.onload = function () {
                  if (((e.dataURL = s.result), "image/svg+xml" !== e.type))
                    return a.createThumbnailFromUrl(e, t, i, n, r, o);
                  null != o && o(s.result);
                }),
                s.readAsDataURL(e)
              );
            },
          },
          {
            key: "createThumbnailFromUrl",
            value: function (e, t, i, n, r, o, a) {
              var s = this,
                l = document.createElement("img");
              return (
                a && (l.crossOrigin = a),
                (l.onload = function () {
                  var a = function (e) {
                    return e(1);
                  };
                  return (
                    "undefined" != typeof EXIF &&
                      null !== EXIF &&
                      r &&
                      (a = function (e) {
                        return EXIF.getData(l, function () {
                          return e(EXIF.getTag(this, "Orientation"));
                        });
                      }),
                    a(function (r) {
                      (e.width = l.width), (e.height = l.height);
                      var a = s.options.resize.call(s, e, t, i, n),
                        u = document.createElement("canvas"),
                        d = u.getContext("2d");
                      switch (
                        ((u.width = a.trgWidth),
                        (u.height = a.trgHeight),
                        r > 4 &&
                          ((u.width = a.trgHeight), (u.height = a.trgWidth)),
                        r)
                      ) {
                        case 2:
                          d.translate(u.width, 0), d.scale(-1, 1);
                          break;
                        case 3:
                          d.translate(u.width, u.height), d.rotate(Math.PI);
                          break;
                        case 4:
                          d.translate(0, u.height), d.scale(1, -1);
                          break;
                        case 5:
                          d.rotate(0.5 * Math.PI), d.scale(1, -1);
                          break;
                        case 6:
                          d.rotate(0.5 * Math.PI), d.translate(0, -u.height);
                          break;
                        case 7:
                          d.rotate(0.5 * Math.PI),
                            d.translate(u.width, -u.height),
                            d.scale(-1, 1);
                          break;
                        case 8:
                          d.rotate(-0.5 * Math.PI), d.translate(-u.width, 0);
                      }
                      drawImageIOSFix(
                        d,
                        l,
                        null != a.srcX ? a.srcX : 0,
                        null != a.srcY ? a.srcY : 0,
                        a.srcWidth,
                        a.srcHeight,
                        null != a.trgX ? a.trgX : 0,
                        null != a.trgY ? a.trgY : 0,
                        a.trgWidth,
                        a.trgHeight
                      );
                      var c = u.toDataURL("image/png");
                      if (null != o) return o(c, u);
                    })
                  );
                }),
                null != o && (l.onerror = o),
                (l.src = e.dataURL)
              );
            },
          },
          {
            key: "processQueue",
            value: function () {
              var e = this.options.parallelUploads,
                t = this.getUploadingFiles().length,
                i = t;
              if (!(t >= e)) {
                var n = this.getQueuedFiles();
                if (n.length > 0) {
                  if (this.options.uploadMultiple)
                    return this.processFiles(n.slice(0, e - t));
                  for (; i < e; ) {
                    if (!n.length) return;
                    this.processFile(n.shift()), i++;
                  }
                }
              }
            },
          },
          {
            key: "processFile",
            value: function (e) {
              return this.processFiles([e]);
            },
          },
          {
            key: "processFiles",
            value: function (e) {
              for (var i = 0, n = (n = e); ; ) {
                if (i >= n.length) break;
                var r = n[i++];
                (r.processing = !0),
                  (r.status = t.UPLOADING),
                  this.emit("processing", r);
              }
              return (
                this.options.uploadMultiple &&
                  this.emit("processingmultiple", e),
                this.uploadFiles(e)
              );
            },
          },
          {
            key: "_getFilesWithXhr",
            value: function (e) {
              return this.files
                .filter(function (t) {
                  return t.xhr === e;
                })
                .map(function (e) {
                  return e;
                });
            },
          },
          {
            key: "cancelUpload",
            value: function (e) {
              if (e.status === t.UPLOADING) {
                for (
                  var i = this._getFilesWithXhr(e.xhr), n = 0, r = (r = i);
                  ;

                ) {
                  if (n >= r.length) break;
                  r[n++].status = t.CANCELED;
                }
                void 0 !== e.xhr && e.xhr.abort();
                for (var o = 0, a = (a = i); ; ) {
                  if (o >= a.length) break;
                  var s = a[o++];
                  this.emit("canceled", s);
                }
                this.options.uploadMultiple && this.emit("canceledmultiple", i);
              } else
                (e.status !== t.ADDED && e.status !== t.QUEUED) ||
                  ((e.status = t.CANCELED),
                  this.emit("canceled", e),
                  this.options.uploadMultiple &&
                    this.emit("canceledmultiple", [e]));
              if (this.options.autoProcessQueue) return this.processQueue();
            },
          },
          {
            key: "resolveOption",
            value: function (e) {
              if ("function" == typeof e) {
                for (
                  var t = arguments.length, i = Array(t > 1 ? t - 1 : 0), n = 1;
                  n < t;
                  n++
                )
                  i[n - 1] = arguments[n];
                return e.apply(this, i);
              }
              return e;
            },
          },
          {
            key: "uploadFile",
            value: function (e) {
              return this.uploadFiles([e]);
            },
          },
          {
            key: "uploadFiles",
            value: function (e) {
              var i = this;
              this._transformFiles(e, function (n) {
                if (e[0].upload.chunked) {
                  var r = e[0],
                    o = n[0];
                  r.upload.chunks = [];
                  var a = function () {
                    for (var n = 0; void 0 !== r.upload.chunks[n]; ) n++;
                    if (!(n >= r.upload.totalChunkCount)) {
                      0;
                      var a = n * i.options.chunkSize,
                        s = Math.min(a + i.options.chunkSize, r.size),
                        l = {
                          name: i._getParamName(0),
                          data: o.webkitSlice
                            ? o.webkitSlice(a, s)
                            : o.slice(a, s),
                          filename: r.upload.filename,
                          chunkIndex: n,
                        };
                      (r.upload.chunks[n] = {
                        file: r,
                        index: n,
                        dataBlock: l,
                        status: t.UPLOADING,
                        progress: 0,
                        retries: 0,
                      }),
                        i._uploadData(e, [l]);
                    }
                  };
                  if (
                    ((r.upload.finishedChunkUpload = function (n) {
                      var o = !0;
                      (n.status = t.SUCCESS), (n.dataBlock = null);
                      for (var s = 0; s < r.upload.totalChunkCount; s++) {
                        if (void 0 === r.upload.chunks[s]) return a();
                        r.upload.chunks[s].status !== t.SUCCESS && (o = !1);
                      }
                      o &&
                        i.options.chunksUploaded(r, function () {
                          i._finished(e, "", null);
                        });
                    }),
                    i.options.parallelChunkUploads)
                  )
                    for (var s = 0; s < r.upload.totalChunkCount; s++) a();
                  else a();
                } else {
                  for (var l = [], u = 0; u < e.length; u++)
                    l[u] = {
                      name: i._getParamName(u),
                      data: n[u],
                      filename: e[u].upload.filename,
                    };
                  i._uploadData(e, l);
                }
              });
            },
          },
          {
            key: "_getChunk",
            value: function (e, t) {
              for (var i = 0; i < e.upload.totalChunkCount; i++)
                if (
                  void 0 !== e.upload.chunks[i] &&
                  e.upload.chunks[i].xhr === t
                )
                  return e.upload.chunks[i];
            },
          },
          {
            key: "_uploadData",
            value: function (e, i) {
              for (
                var n = this, r = new XMLHttpRequest(), o = 0, a = (a = e);
                ;

              ) {
                if (o >= a.length) break;
                a[o++].xhr = r;
              }
              e[0].upload.chunked &&
                (e[0].upload.chunks[i[0].chunkIndex].xhr = r);
              var s = this.resolveOption(this.options.method, e),
                l = this.resolveOption(this.options.url, e);
              r.open(s, l, !0),
                (r.timeout = this.resolveOption(this.options.timeout, e)),
                (r.withCredentials = !!this.options.withCredentials),
                (r.onload = function (t) {
                  n._finishedUploading(e, r, t);
                }),
                (r.onerror = function () {
                  n._handleUploadError(e, r);
                }),
                ((null != r.upload ? r.upload : r).onprogress = function (t) {
                  return n._updateFilesUploadProgress(e, r, t);
                });
              var u = {
                Accept: "application/json",
                "Cache-Control": "no-cache",
                "X-Requested-With": "XMLHttpRequest",
              };
              this.options.headers && t.extend(u, this.options.headers);
              for (var d in u) {
                var c = u[d];
                c && r.setRequestHeader(d, c);
              }
              var p = new FormData();
              if (this.options.params) {
                var h = this.options.params;
                "function" == typeof h &&
                  (h = h.call(
                    this,
                    e,
                    r,
                    e[0].upload.chunked ? this._getChunk(e[0], r) : null
                  ));
                for (var f in h) {
                  var m = h[f];
                  p.append(f, m);
                }
              }
              for (var v = 0, g = (g = e); ; ) {
                if (v >= g.length) break;
                var k = g[v++];
                this.emit("sending", k, r, p);
              }
              this.options.uploadMultiple &&
                this.emit("sendingmultiple", e, r, p),
                this._addFormElementData(p);
              for (var y = 0; y < i.length; y++) {
                var b = i[y];
                p.append(b.name, b.data, b.filename);
              }
              this.submitRequest(r, p, e);
            },
          },
          {
            key: "_transformFiles",
            value: function (e, t) {
              for (
                var i = this,
                  n = [],
                  r = 0,
                  o = function (o) {
                    i.options.transformFile.call(i, e[o], function (i) {
                      (n[o] = i), ++r === e.length && t(n);
                    });
                  },
                  a = 0;
                a < e.length;
                a++
              )
                o(a);
            },
          },
          {
            key: "_addFormElementData",
            value: function (e) {
              if ("FORM" === this.element.tagName)
                for (
                  var t = 0,
                    i = (i = this.element.querySelectorAll(
                      "input, textarea, select, button"
                    ));
                  ;

                ) {
                  if (t >= i.length) break;
                  var n = i[t++],
                    r = n.getAttribute("name"),
                    o = n.getAttribute("type");
                  if ((o && (o = o.toLowerCase()), void 0 !== r && null !== r))
                    if ("SELECT" === n.tagName && n.hasAttribute("multiple"))
                      for (var a = 0, s = (s = n.options); ; ) {
                        if (a >= s.length) break;
                        var l = s[a++];
                        l.selected && e.append(r, l.value);
                      }
                    else
                      (!o ||
                        ("checkbox" !== o && "radio" !== o) ||
                        n.checked) &&
                        e.append(r, n.value);
                }
            },
          },
          {
            key: "_updateFilesUploadProgress",
            value: function (e, t, i) {
              var n = void 0;
              if (void 0 !== i) {
                if (((n = (100 * i.loaded) / i.total), e[0].upload.chunked)) {
                  var r = e[0],
                    o = this._getChunk(r, t);
                  (o.progress = n),
                    (o.total = i.total),
                    (o.bytesSent = i.loaded);
                  (r.upload.progress = 0),
                    (r.upload.total = 0),
                    (r.upload.bytesSent = 0);
                  for (var a = 0; a < r.upload.totalChunkCount; a++)
                    void 0 !== r.upload.chunks[a] &&
                      void 0 !== r.upload.chunks[a].progress &&
                      ((r.upload.progress += r.upload.chunks[a].progress),
                      (r.upload.total += r.upload.chunks[a].total),
                      (r.upload.bytesSent += r.upload.chunks[a].bytesSent));
                  r.upload.progress =
                    r.upload.progress / r.upload.totalChunkCount;
                } else
                  for (var s = 0, l = (l = e); ; ) {
                    if (s >= l.length) break;
                    var u = l[s++];
                    (u.upload.progress = n),
                      (u.upload.total = i.total),
                      (u.upload.bytesSent = i.loaded);
                  }
                for (var d = 0, c = (c = e); ; ) {
                  if (d >= c.length) break;
                  var p = c[d++];
                  this.emit(
                    "uploadprogress",
                    p,
                    p.upload.progress,
                    p.upload.bytesSent
                  );
                }
              } else {
                var h = !0;
                n = 100;
                for (var f = 0, m = (m = e); ; ) {
                  if (f >= m.length) break;
                  var v = m[f++];
                  (100 === v.upload.progress &&
                    v.upload.bytesSent === v.upload.total) ||
                    (h = !1),
                    (v.upload.progress = n),
                    (v.upload.bytesSent = v.upload.total);
                }
                if (h) return;
                for (var g = 0, k = (k = e); ; ) {
                  if (g >= k.length) break;
                  var y = k[g++];
                  this.emit("uploadprogress", y, n, y.upload.bytesSent);
                }
              }
            },
          },
          {
            key: "_finishedUploading",
            value: function (e, i, n) {
              var r = void 0;
              if (e[0].status !== t.CANCELED && 4 === i.readyState) {
                if (
                  "arraybuffer" !== i.responseType &&
                  "blob" !== i.responseType &&
                  ((r = i.responseText),
                  i.getResponseHeader("content-type") &&
                    ~i
                      .getResponseHeader("content-type")
                      .indexOf("application/json"))
                )
                  try {
                    r = JSON.parse(r);
                  } catch (e) {
                    (n = e), (r = "Invalid JSON response from server.");
                  }
                this._updateFilesUploadProgress(e),
                  200 <= i.status && i.status < 300
                    ? e[0].upload.chunked
                      ? e[0].upload.finishedChunkUpload(this._getChunk(e[0], i))
                      : this._finished(e, r, n)
                    : this._handleUploadError(e, i, r);
              }
            },
          },
          {
            key: "_handleUploadError",
            value: function (e, i, n) {
              if (e[0].status !== t.CANCELED) {
                if (e[0].upload.chunked && this.options.retryChunks) {
                  var r = this._getChunk(e[0], i);
                  if (r.retries++ < this.options.retryChunksLimit)
                    return void this._uploadData(e, [r.dataBlock]);
                  console.warn("Retried this chunk too often. Giving up.");
                }
                for (var o = 0, a = (a = e); ; ) {
                  if (o >= a.length) break;
                  a[o++];
                  this._errorProcessing(
                    e,
                    n ||
                      this.options.dictResponseError.replace(
                        "{{statusCode}}",
                        i.status
                      ),
                    i
                  );
                }
              }
            },
          },
          {
            key: "submitRequest",
            value: function (e, t, i) {
              e.send(t);
            },
          },
          {
            key: "_finished",
            value: function (e, i, n) {
              for (var r = 0, o = (o = e); ; ) {
                if (r >= o.length) break;
                var a = o[r++];
                (a.status = t.SUCCESS),
                  this.emit("success", a, i, n),
                  this.emit("complete", a);
              }
              if (
                (this.options.uploadMultiple &&
                  (this.emit("successmultiple", e, i, n),
                  this.emit("completemultiple", e)),
                this.options.autoProcessQueue)
              )
                return this.processQueue();
            },
          },
          {
            key: "_errorProcessing",
            value: function (e, i, n) {
              for (var r = 0, o = (o = e); ; ) {
                if (r >= o.length) break;
                var a = o[r++];
                (a.status = t.ERROR),
                  this.emit("error", a, i, n),
                  this.emit("complete", a);
              }
              if (
                (this.options.uploadMultiple &&
                  (this.emit("errormultiple", e, i, n),
                  this.emit("completemultiple", e)),
                this.options.autoProcessQueue)
              )
                return this.processQueue();
            },
          },
        ],
        [
          {
            key: "uuidv4",
            value: function () {
              return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
                /[xy]/g,
                function (e) {
                  var t = (16 * Math.random()) | 0;
                  return ("x" === e ? t : (3 & t) | 8).toString(16);
                }
              );
            },
          },
        ]
      ),
      t
    );
  })();
Dropzone.initClass(),
  (Dropzone.version = "5.4.0"),
  (Dropzone.options = {}),
  (Dropzone.optionsForElement = function (e) {
    return e.getAttribute("id")
      ? Dropzone.options[camelize(e.getAttribute("id"))]
      : void 0;
  }),
  (Dropzone.instances = []),
  (Dropzone.forElement = function (e) {
    if (
      ("string" == typeof e && (e = document.querySelector(e)),
      null == (null != e ? e.dropzone : void 0))
    )
      throw new Error(
        "No Dropzone found for given element. This is probably because you're trying to access it before Dropzone had the time to initialize. Use the `init` option to setup any additional observers on your Dropzone."
      );
    return e.dropzone;
  }),
  (Dropzone.autoDiscover = !0),
  (Dropzone.discover = function () {
    var e = void 0;
    if (document.querySelectorAll) e = document.querySelectorAll(".dropzone");
    else {
      e = [];
      var t = function (t) {
        return (function () {
          for (var i = [], n = 0, r = (r = t); ; ) {
            if (n >= r.length) break;
            var o = r[n++];
            /(^| )dropzone($| )/.test(o.className)
              ? i.push(e.push(o))
              : i.push(void 0);
          }
          return i;
        })();
      };
      t(document.getElementsByTagName("div")),
        t(document.getElementsByTagName("form"));
    }
    return (function () {
      for (var t = [], i = 0, n = (n = e); ; ) {
        if (i >= n.length) break;
        var r = n[i++];
        !1 !== Dropzone.optionsForElement(r)
          ? t.push(new Dropzone(r))
          : t.push(void 0);
      }
      return t;
    })();
  }),
  (Dropzone.blacklistedBrowsers = [
    /opera.*(Macintosh|Windows Phone).*version\/12/i,
  ]),
  (Dropzone.isBrowserSupported = function () {
    var e = !0;
    if (
      window.File &&
      window.FileReader &&
      window.FileList &&
      window.Blob &&
      window.FormData &&
      document.querySelector
    )
      if ("classList" in document.createElement("a"))
        for (var t = 0, i = (i = Dropzone.blacklistedBrowsers); ; ) {
          if (t >= i.length) break;
          i[t++].test(navigator.userAgent) && (e = !1);
        }
      else e = !1;
    else e = !1;
    return e;
  }),
  (Dropzone.dataURItoBlob = function (e) {
    for (
      var t = atob(e.split(",")[1]),
        i = e.split(",")[0].split(":")[1].split(";")[0],
        n = new ArrayBuffer(t.length),
        r = new Uint8Array(n),
        o = 0,
        a = t.length,
        s = 0 <= a;
      s ? o <= a : o >= a;
      s ? o++ : o--
    )
      r[o] = t.charCodeAt(o);
    return new Blob([n], { type: i });
  });
var without = function (e, t) {
    return e
      .filter(function (e) {
        return e !== t;
      })
      .map(function (e) {
        return e;
      });
  },
  camelize = function (e) {
    return e.replace(/[\-_](\w)/g, function (e) {
      return e.charAt(1).toUpperCase();
    });
  };
(Dropzone.createElement = function (e) {
  var t = document.createElement("div");
  return (t.innerHTML = e), t.childNodes[0];
}),
  (Dropzone.elementInside = function (e, t) {
    if (e === t) return !0;
    for (; (e = e.parentNode); ) if (e === t) return !0;
    return !1;
  }),
  (Dropzone.getElement = function (e, t) {
    var i = void 0;
    if (
      ("string" == typeof e
        ? (i = document.querySelector(e))
        : null != e.nodeType && (i = e),
      null == i)
    )
      throw new Error(
        "Invalid `" +
          t +
          "` option provided. Please provide a CSS selector or a plain HTML element."
      );
    return i;
  }),
  (Dropzone.getElements = function (e, t) {
    var i = void 0,
      n = void 0;
    if (e instanceof Array) {
      n = [];
      try {
        for (var r = 0, o = (o = e); !(r >= o.length); )
          (i = o[r++]), n.push(this.getElement(i, t));
      } catch (e) {
        n = null;
      }
    } else if ("string" == typeof e) {
      n = [];
      for (
        var a = 0, s = (s = document.querySelectorAll(e));
        !(a >= s.length);

      )
        (i = s[a++]), n.push(i);
    } else null != e.nodeType && (n = [e]);
    if (null == n || !n.length)
      throw new Error(
        "Invalid `" +
          t +
          "` option provided. Please provide a CSS selector, a plain HTML element or a list of those."
      );
    return n;
  }),
  (Dropzone.confirm = function (e, t, i) {
    return window.confirm(e) ? t() : null != i ? i() : void 0;
  }),
  (Dropzone.isValidFile = function (e, t) {
    if (!t) return !0;
    t = t.split(",");
    for (var i = e.type, n = i.replace(/\/.*$/, ""), r = 0, o = (o = t); ; ) {
      if (r >= o.length) break;
      var a = o[r++];
      if ("." === (a = a.trim()).charAt(0)) {
        if (
          -1 !==
          e.name
            .toLowerCase()
            .indexOf(a.toLowerCase(), e.name.length - a.length)
        )
          return !0;
      } else if (/\/\*$/.test(a)) {
        if (n === a.replace(/\/.*$/, "")) return !0;
      } else if (i === a) return !0;
    }
    return !1;
  }),
  "undefined" != typeof jQuery &&
    null !== jQuery &&
    (jQuery.fn.dropzone = function (e) {
      return this.each(function () {
        return new Dropzone(this, e);
      });
    }),
  "undefined" != typeof module && null !== module
    ? (module.exports = Dropzone)
    : (window.Dropzone = Dropzone),
  (Dropzone.ADDED = "added"),
  (Dropzone.QUEUED = "queued"),
  (Dropzone.ACCEPTED = Dropzone.QUEUED),
  (Dropzone.UPLOADING = "uploading"),
  (Dropzone.PROCESSING = Dropzone.UPLOADING),
  (Dropzone.CANCELED = "canceled"),
  (Dropzone.ERROR = "error"),
  (Dropzone.SUCCESS = "success");
var detectVerticalSquash = function (e) {
    e.naturalWidth;
    var t = e.naturalHeight,
      i = document.createElement("canvas");
    (i.width = 1), (i.height = t);
    var n = i.getContext("2d");
    n.drawImage(e, 0, 0);
    for (
      var r = n.getImageData(1, 0, 1, t).data, o = 0, a = t, s = t;
      s > o;

    ) {
      0 === r[4 * (s - 1) + 3] ? (a = s) : (o = s), (s = (a + o) >> 1);
    }
    var l = s / t;
    return 0 === l ? 1 : l;
  },
  drawImageIOSFix = function (e, t, i, n, r, o, a, s, l, u) {
    var d = detectVerticalSquash(t);
    return e.drawImage(t, i, n, r, o, a, s, l, u / d);
  },
  ExifRestore = (function () {
    function e() {
      _classCallCheck(this, e);
    }
    return (
      _createClass(e, null, [
        {
          key: "initClass",
          value: function () {
            this.KEY_STR =
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
          },
        },
        {
          key: "encode64",
          value: function (e) {
            for (
              var t = "",
                i = void 0,
                n = void 0,
                r = "",
                o = void 0,
                a = void 0,
                s = void 0,
                l = "",
                u = 0;
              (o = (i = e[u++]) >> 2),
                (a = ((3 & i) << 4) | ((n = e[u++]) >> 4)),
                (s = ((15 & n) << 2) | ((r = e[u++]) >> 6)),
                (l = 63 & r),
                isNaN(n) ? (s = l = 64) : isNaN(r) && (l = 64),
                (t =
                  t +
                  this.KEY_STR.charAt(o) +
                  this.KEY_STR.charAt(a) +
                  this.KEY_STR.charAt(s) +
                  this.KEY_STR.charAt(l)),
                (i = n = r = ""),
                (o = a = s = l = ""),
                u < e.length;

            );
            return t;
          },
        },
        {
          key: "restore",
          value: function (e, t) {
            if (!e.match("data:image/jpeg;base64,")) return t;
            var i = this.decode64(e.replace("data:image/jpeg;base64,", "")),
              n = this.slice2Segments(i),
              r = this.exifManipulation(t, n);
            return "data:image/jpeg;base64," + this.encode64(r);
          },
        },
        {
          key: "exifManipulation",
          value: function (e, t) {
            var i = this.getExifArray(t),
              n = this.insertExif(e, i);
            return new Uint8Array(n);
          },
        },
        {
          key: "getExifArray",
          value: function (e) {
            for (var t = void 0, i = 0; i < e.length; ) {
              if ((255 === (t = e[i])[0]) & (225 === t[1])) return t;
              i++;
            }
            return [];
          },
        },
        {
          key: "insertExif",
          value: function (e, t) {
            var i = e.replace("data:image/jpeg;base64,", ""),
              n = this.decode64(i),
              r = n.indexOf(255, 3),
              o = n.slice(0, r),
              a = n.slice(r),
              s = o;
            return (s = (s = s.concat(t)).concat(a));
          },
        },
        {
          key: "slice2Segments",
          value: function (e) {
            for (var t = 0, i = []; ; ) {
              if ((255 === e[t]) & (218 === e[t + 1])) break;
              if ((255 === e[t]) & (216 === e[t + 1])) t += 2;
              else {
                var n = t + (256 * e[t + 2] + e[t + 3]) + 2,
                  r = e.slice(t, n);
                i.push(r), (t = n);
              }
              if (t > e.length) break;
            }
            return i;
          },
        },
        {
          key: "decode64",
          value: function (e) {
            var t = void 0,
              i = void 0,
              n = "",
              r = void 0,
              o = void 0,
              a = "",
              s = 0,
              l = [];
            for (
              /[^A-Za-z0-9\+\/\=]/g.exec(e) &&
                console.warn(
                  "There were invalid base64 characters in the input text.\nValid base64 characters are A-Z, a-z, 0-9, '+', '/',and '='\nExpect errors in decoding."
                ),
                e = e.replace(/[^A-Za-z0-9\+\/\=]/g, "");
              (t =
                (this.KEY_STR.indexOf(e.charAt(s++)) << 2) |
                ((r = this.KEY_STR.indexOf(e.charAt(s++))) >> 4)),
                (i =
                  ((15 & r) << 4) |
                  ((o = this.KEY_STR.indexOf(e.charAt(s++))) >> 2)),
                (n =
                  ((3 & o) << 6) | (a = this.KEY_STR.indexOf(e.charAt(s++)))),
                l.push(t),
                64 !== o && l.push(i),
                64 !== a && l.push(n),
                (t = i = n = ""),
                (r = o = a = ""),
                s < e.length;

            );
            return l;
          },
        },
      ]),
      e
    );
  })();
ExifRestore.initClass();
var contentLoaded = function (e, t) {
  var i = !1,
    n = !0,
    r = e.document,
    o = r.documentElement,
    a = r.addEventListener ? "addEventListener" : "attachEvent",
    s = r.addEventListener ? "removeEventListener" : "detachEvent",
    l = r.addEventListener ? "" : "on",
    u = function n(o) {
      if ("readystatechange" !== o.type || "complete" === r.readyState)
        return (
          ("load" === o.type ? e : r)[s](l + o.type, n, !1),
          !i && (i = !0) ? t.call(e, o.type || o) : void 0
        );
    };
  if ("complete" !== r.readyState) {
    if (r.createEventObject && o.doScroll) {
      try {
        n = !e.frameElement;
      } catch (e) {}
      n &&
        (function e() {
          try {
            o.doScroll("left");
          } catch (t) {
            return void setTimeout(e, 50);
          }
          return u("poll");
        })();
    }
    return (
      r[a](l + "DOMContentLoaded", u, !1),
      r[a](l + "readystatechange", u, !1),
      e[a](l + "load", u, !1)
    );
  }
};
function __guard__(e, t) {
  return void 0 !== e && null !== e ? t(e) : void 0;
}
function __guardMethod__(e, t, i) {
  return void 0 !== e && null !== e && "function" == typeof e[t]
    ? i(e, t)
    : void 0;
}
(Dropzone._autoDiscoverFunction = function () {
  if (Dropzone.autoDiscover) return Dropzone.discover();
}),
  contentLoaded(window, Dropzone._autoDiscoverFunction);
/*! jQuery Form Plugin * version: 4.3.0 * Requires jQuery v1.7.2 or later * Project repository: https://github.com/jquery-form/form * Copyright 2017 Kevin Morris * Copyright 2006 M. Alsup * Dual licensed under the LGPL-2.1+ or MIT licenses * https://github.com/jquery-form/form#license */
!(function (r) {
  "function" == typeof define && define.amd
    ? define(["jquery"], r)
    : "object" == typeof module && module.exports
    ? (module.exports = function (e, t) {
        return (
          void 0 === t &&
            (t =
              "undefined" != typeof window
                ? require("jquery")
                : require("jquery")(e)),
          r(t),
          t
        );
      })
    : r(jQuery);
})(function (q) {
  "use strict";
  var m = /\r?\n/g,
    S = {};
  (S.fileapi = void 0 !== q('<input type="file">').get(0).files),
    (S.formdata = void 0 !== window.FormData);
  var _ = !!q.fn.prop;
  function o(e) {
    var t = e.data;
    e.isDefaultPrevented() ||
      (e.preventDefault(), q(e.target).closest("form").ajaxSubmit(t));
  }
  function i(e) {
    var t = e.target,
      r = q(t);
    if (!r.is("[type=submit],[type=image]")) {
      var a = r.closest("[type=submit]");
      if (0 === a.length) return;
      t = a[0];
    }
    var n,
      o = t.form;
    "image" === (o.clk = t).type &&
      (void 0 !== e.offsetX
        ? ((o.clk_x = e.offsetX), (o.clk_y = e.offsetY))
        : "function" == typeof q.fn.offset
        ? ((n = r.offset()),
          (o.clk_x = e.pageX - n.left),
          (o.clk_y = e.pageY - n.top))
        : ((o.clk_x = e.pageX - t.offsetLeft),
          (o.clk_y = e.pageY - t.offsetTop))),
      setTimeout(function () {
        o.clk = o.clk_x = o.clk_y = null;
      }, 100);
  }
  function N() {
    var e;
    q.fn.ajaxSubmit.debug &&
      ((e = "[jquery.form] " + Array.prototype.join.call(arguments, "")),
      window.console && window.console.log
        ? window.console.log(e)
        : window.opera && window.opera.postError && window.opera.postError(e));
  }
  (q.fn.attr2 = function () {
    if (!_) return this.attr.apply(this, arguments);
    var e = this.prop.apply(this, arguments);
    return (e && e.jquery) || "string" == typeof e
      ? e
      : this.attr.apply(this, arguments);
  }),
    (q.fn.ajaxSubmit = function (M, e, t, r) {
      if (!this.length)
        return (
          N("ajaxSubmit: skipping submit process - no element selected"), this
        );
      var O,
        a,
        n,
        o,
        X = this;
      "function" == typeof M
        ? (M = { success: M })
        : "string" == typeof M || (!1 === M && 0 < arguments.length)
        ? ((M = { url: M, data: e, dataType: t }),
          "function" == typeof r && (M.success = r))
        : void 0 === M && (M = {}),
        (O = M.method || M.type || this.attr2("method")),
        (n =
          (n =
            (n =
              "string" == typeof (a = M.url || this.attr2("action"))
                ? q.trim(a)
                : "") ||
            window.location.href ||
            "") && (n.match(/^([^#]+)/) || [])[1]),
        (o =
          /(MSIE|Trident)/.test(navigator.userAgent || "") &&
          /^https/i.test(window.location.href || "")
            ? "javascript:false"
            : "about:blank"),
        (M = q.extend(
          !0,
          {
            url: n,
            success: q.ajaxSettings.success,
            type: O || q.ajaxSettings.type,
            iframeSrc: o,
          },
          M
        ));
      var i = {};
      if ((this.trigger("form-pre-serialize", [this, M, i]), i.veto))
        return (
          N("ajaxSubmit: submit vetoed via form-pre-serialize trigger"), this
        );
      if (M.beforeSerialize && !1 === M.beforeSerialize(this, M))
        return (
          N("ajaxSubmit: submit aborted via beforeSerialize callback"), this
        );
      var s = M.traditional;
      void 0 === s && (s = q.ajaxSettings.traditional);
      var u,
        c,
        C = [],
        l = this.formToArray(M.semantic, C, M.filtering);
      if (
        (M.data &&
          ((c = q.isFunction(M.data) ? M.data(l) : M.data),
          (M.extraData = c),
          (u = q.param(c, s))),
        M.beforeSubmit && !1 === M.beforeSubmit(l, this, M))
      )
        return N("ajaxSubmit: submit aborted via beforeSubmit callback"), this;
      if ((this.trigger("form-submit-validate", [l, this, M, i]), i.veto))
        return (
          N("ajaxSubmit: submit vetoed via form-submit-validate trigger"), this
        );
      var f = q.param(l, s);
      u && (f = f ? f + "&" + u : u),
        "GET" === M.type.toUpperCase()
          ? ((M.url += (0 <= M.url.indexOf("?") ? "&" : "?") + f),
            (M.data = null))
          : (M.data = f);
      var d,
        m,
        p,
        h = [];
      M.resetForm &&
        h.push(function () {
          X.resetForm();
        }),
        M.clearForm &&
          h.push(function () {
            X.clearForm(M.includeHidden);
          }),
        !M.dataType && M.target
          ? ((d = M.success || function () {}),
            h.push(function (e, t, r) {
              var a = arguments,
                n = M.replaceTarget ? "replaceWith" : "html";
              q(M.target)
                [n](e)
                .each(function () {
                  d.apply(this, a);
                });
            }))
          : M.success &&
            (q.isArray(M.success) ? q.merge(h, M.success) : h.push(M.success)),
        (M.success = function (e, t, r) {
          for (var a = M.context || this, n = 0, o = h.length; n < o; n++)
            h[n].apply(a, [e, t, r || X, X]);
        }),
        M.error &&
          ((m = M.error),
          (M.error = function (e, t, r) {
            var a = M.context || this;
            m.apply(a, [e, t, r, X]);
          })),
        M.complete &&
          ((p = M.complete),
          (M.complete = function (e, t) {
            var r = M.context || this;
            p.apply(r, [e, t, X]);
          }));
      var v =
          0 <
          q("input[type=file]:enabled", this).filter(function () {
            return "" !== q(this).val();
          }).length,
        g = "multipart/form-data",
        x = X.attr("enctype") === g || X.attr("encoding") === g,
        y = S.fileapi && S.formdata;
      N("fileAPI :" + y);
      var b,
        T = (v || x) && !y;
      !1 !== M.iframe && (M.iframe || T)
        ? M.closeKeepAlive
          ? q.get(M.closeKeepAlive, function () {
              b = w(l);
            })
          : (b = w(l))
        : (b =
            (v || x) && y
              ? (function (e) {
                  for (var r = new FormData(), t = 0; t < e.length; t++)
                    r.append(e[t].name, e[t].value);
                  if (M.extraData) {
                    var a = (function (e) {
                      var t,
                        r,
                        a = q.param(e, M.traditional).split("&"),
                        n = a.length,
                        o = [];
                      for (t = 0; t < n; t++)
                        (a[t] = a[t].replace(/\+/g, " ")),
                          (r = a[t].split("=")),
                          o.push([
                            decodeURIComponent(r[0]),
                            decodeURIComponent(r[1]),
                          ]);
                      return o;
                    })(M.extraData);
                    for (t = 0; t < a.length; t++)
                      a[t] && r.append(a[t][0], a[t][1]);
                  }
                  M.data = null;
                  var n = q.extend(!0, {}, q.ajaxSettings, M, {
                    contentType: !1,
                    processData: !1,
                    cache: !1,
                    type: O || "POST",
                  });
                  M.uploadProgress &&
                    (n.xhr = function () {
                      var e = q.ajaxSettings.xhr();
                      return (
                        e.upload &&
                          e.upload.addEventListener(
                            "progress",
                            function (e) {
                              var t = 0,
                                r = e.loaded || e.position,
                                a = e.total;
                              e.lengthComputable &&
                                (t = Math.ceil((r / a) * 100)),
                                M.uploadProgress(e, r, a, t);
                            },
                            !1
                          ),
                        e
                      );
                    });
                  n.data = null;
                  var o = n.beforeSend;
                  return (
                    (n.beforeSend = function (e, t) {
                      M.formData ? (t.data = M.formData) : (t.data = r),
                        o && o.call(this, e, t);
                    }),
                    q.ajax(n)
                  );
                })(l)
              : q.ajax(M)),
        X.removeData("jqxhr").data("jqxhr", b);
      for (var j = 0; j < C.length; j++) C[j] = null;
      return this.trigger("form-submit-notify", [this, M]), this;
      function w(e) {
        var t,
          r,
          l,
          f,
          o,
          d,
          m,
          p,
          a,
          n,
          h,
          v,
          i = X[0],
          g = q.Deferred();
        if (
          ((g.abort = function (e) {
            p.abort(e);
          }),
          e)
        )
          for (r = 0; r < C.length; r++)
            (t = q(C[r])),
              _ ? t.prop("disabled", !1) : t.removeAttr("disabled");
        ((l = q.extend(!0, {}, q.ajaxSettings, M)).context = l.context || l),
          (o = "jqFormIO" + new Date().getTime());
        var s = i.ownerDocument,
          u = X.closest("body");
        if (
          (l.iframeTarget
            ? (n = (d = q(l.iframeTarget, s)).attr2("name"))
              ? (o = n)
              : d.attr2("name", o)
            : (d = q(
                '<iframe name="' + o + '" src="' + l.iframeSrc + '" />',
                s
              )).css({ position: "absolute", top: "-1000px", left: "-1000px" }),
          (m = d[0]),
          (p = {
            aborted: 0,
            responseText: null,
            responseXML: null,
            status: 0,
            statusText: "n/a",
            getAllResponseHeaders: function () {},
            getResponseHeader: function () {},
            setRequestHeader: function () {},
            abort: function (e) {
              var t = "timeout" === e ? "timeout" : "aborted";
              N("aborting upload... " + t), (this.aborted = 1);
              try {
                m.contentWindow.document.execCommand &&
                  m.contentWindow.document.execCommand("Stop");
              } catch (e) {}
              d.attr("src", l.iframeSrc),
                (p.error = t),
                l.error && l.error.call(l.context, p, t, e),
                f && q.event.trigger("ajaxError", [p, l, t]),
                l.complete && l.complete.call(l.context, p, t);
            },
          }),
          (f = l.global) && 0 == q.active++ && q.event.trigger("ajaxStart"),
          f && q.event.trigger("ajaxSend", [p, l]),
          l.beforeSend && !1 === l.beforeSend.call(l.context, p, l))
        )
          return l.global && q.active--, g.reject(), g;
        if (p.aborted) return g.reject(), g;
        (a = i.clk) &&
          (n = a.name) &&
          !a.disabled &&
          ((l.extraData = l.extraData || {}),
          (l.extraData[n] = a.value),
          "image" === a.type &&
            ((l.extraData[n + ".x"] = i.clk_x),
            (l.extraData[n + ".y"] = i.clk_y)));
        var x = 1,
          y = 2;
        function b(t) {
          var r = null;
          try {
            t.contentWindow && (r = t.contentWindow.document);
          } catch (e) {
            N("cannot get iframe.contentWindow document: " + e);
          }
          if (r) return r;
          try {
            r = t.contentDocument ? t.contentDocument : t.document;
          } catch (e) {
            N("cannot get iframe.contentDocument: " + e), (r = t.document);
          }
          return r;
        }
        var c = q("meta[name=csrf-token]").attr("content"),
          T = q("meta[name=csrf-param]").attr("content");
        function j() {
          var e = X.attr2("target"),
            t = X.attr2("action"),
            r =
              X.attr("enctype") || X.attr("encoding") || "multipart/form-data";
          i.setAttribute("target", o),
            (O && !/post/i.test(O)) || i.setAttribute("method", "POST"),
            t !== l.url && i.setAttribute("action", l.url),
            l.skipEncodingOverride ||
              (O && !/post/i.test(O)) ||
              X.attr({
                encoding: "multipart/form-data",
                enctype: "multipart/form-data",
              }),
            l.timeout &&
              (v = setTimeout(function () {
                (h = !0), A(x);
              }, l.timeout));
          var a = [];
          try {
            if (l.extraData)
              for (var n in l.extraData)
                l.extraData.hasOwnProperty(n) &&
                  (q.isPlainObject(l.extraData[n]) &&
                  l.extraData[n].hasOwnProperty("name") &&
                  l.extraData[n].hasOwnProperty("value")
                    ? a.push(
                        q(
                          '<input type="hidden" name="' +
                            l.extraData[n].name +
                            '">',
                          s
                        )
                          .val(l.extraData[n].value)
                          .appendTo(i)[0]
                      )
                    : a.push(
                        q('<input type="hidden" name="' + n + '">', s)
                          .val(l.extraData[n])
                          .appendTo(i)[0]
                      ));
            l.iframeTarget || d.appendTo(u),
              m.attachEvent
                ? m.attachEvent("onload", A)
                : m.addEventListener("load", A, !1),
              setTimeout(function e() {
                try {
                  var t = b(m).readyState;
                  N("state = " + t),
                    t &&
                      "uninitialized" === t.toLowerCase() &&
                      setTimeout(e, 50);
                } catch (e) {
                  N("Server abort: ", e, " (", e.name, ")"),
                    A(y),
                    v && clearTimeout(v),
                    (v = void 0);
                }
              }, 15);
            try {
              i.submit();
            } catch (e) {
              document.createElement("form").submit.apply(i);
            }
          } finally {
            i.setAttribute("action", t),
              i.setAttribute("enctype", r),
              e ? i.setAttribute("target", e) : X.removeAttr("target"),
              q(a).remove();
          }
        }
        T && c && ((l.extraData = l.extraData || {}), (l.extraData[T] = c)),
          l.forceSync ? j() : setTimeout(j, 10);
        var w,
          S,
          k,
          D = 50;
        function A(e) {
          if (!p.aborted && !k) {
            if (
              ((S = b(m)) || (N("cannot access response document"), (e = y)),
              e === x && p)
            )
              return p.abort("timeout"), void g.reject(p, "timeout");
            if (e === y && p)
              return (
                p.abort("server abort"),
                void g.reject(p, "error", "server abort")
              );
            if ((S && S.location.href !== l.iframeSrc) || h) {
              m.detachEvent
                ? m.detachEvent("onload", A)
                : m.removeEventListener("load", A, !1);
              var t,
                r = "success";
              try {
                if (h) throw "timeout";
                var a = "xml" === l.dataType || S.XMLDocument || q.isXMLDoc(S);
                if (
                  (N("isXml=" + a),
                  !a &&
                    window.opera &&
                    (null === S.body || !S.body.innerHTML) &&
                    --D)
                )
                  return (
                    N("requeing onLoad callback, DOM not available"),
                    void setTimeout(A, 250)
                  );
                var n = S.body ? S.body : S.documentElement;
                (p.responseText = n ? n.innerHTML : null),
                  (p.responseXML = S.XMLDocument ? S.XMLDocument : S),
                  a && (l.dataType = "xml"),
                  (p.getResponseHeader = function (e) {
                    return { "content-type": l.dataType }[e.toLowerCase()];
                  }),
                  n &&
                    ((p.status = Number(n.getAttribute("status")) || p.status),
                    (p.statusText =
                      n.getAttribute("statusText") || p.statusText));
                var o,
                  i,
                  s,
                  u = (l.dataType || "").toLowerCase(),
                  c = /(json|script|text)/.test(u);
                c || l.textarea
                  ? (o = S.getElementsByTagName("textarea")[0])
                    ? ((p.responseText = o.value),
                      (p.status = Number(o.getAttribute("status")) || p.status),
                      (p.statusText =
                        o.getAttribute("statusText") || p.statusText))
                    : c &&
                      ((i = S.getElementsByTagName("pre")[0]),
                      (s = S.getElementsByTagName("body")[0]),
                      i
                        ? (p.responseText = i.textContent
                            ? i.textContent
                            : i.innerText)
                        : s &&
                          (p.responseText = s.textContent
                            ? s.textContent
                            : s.innerText))
                  : "xml" === u &&
                    !p.responseXML &&
                    p.responseText &&
                    (p.responseXML = F(p.responseText));
                try {
                  w = E(p, u, l);
                } catch (e) {
                  (r = "parsererror"), (p.error = t = e || r);
                }
              } catch (e) {
                N("error caught: ", e), (r = "error"), (p.error = t = e || r);
              }
              p.aborted && (N("upload aborted"), (r = null)),
                p.status &&
                  (r =
                    (200 <= p.status && p.status < 300) || 304 === p.status
                      ? "success"
                      : "error"),
                "success" === r
                  ? (l.success && l.success.call(l.context, w, "success", p),
                    g.resolve(p.responseText, "success", p),
                    f && q.event.trigger("ajaxSuccess", [p, l]))
                  : r &&
                    (void 0 === t && (t = p.statusText),
                    l.error && l.error.call(l.context, p, r, t),
                    g.reject(p, "error", t),
                    f && q.event.trigger("ajaxError", [p, l, t])),
                f && q.event.trigger("ajaxComplete", [p, l]),
                f && !--q.active && q.event.trigger("ajaxStop"),
                l.complete && l.complete.call(l.context, p, r),
                (k = !0),
                l.timeout && clearTimeout(v),
                setTimeout(function () {
                  l.iframeTarget ? d.attr("src", l.iframeSrc) : d.remove(),
                    (p.responseXML = null);
                }, 100);
            }
          }
        }
        var F =
            q.parseXML ||
            function (e, t) {
              return (
                window.ActiveXObject
                  ? (((t = new ActiveXObject("Microsoft.XMLDOM")).async =
                      "false"),
                    t.loadXML(e))
                  : (t = new DOMParser().parseFromString(e, "text/xml")),
                t &&
                t.documentElement &&
                "parsererror" !== t.documentElement.nodeName
                  ? t
                  : null
              );
            },
          L =
            q.parseJSON ||
            function (e) {
              return window.eval("(" + e + ")");
            },
          E = function (e, t, r) {
            var a = e.getResponseHeader("content-type") || "",
              n = ("xml" === t || !t) && 0 <= a.indexOf("xml"),
              o = n ? e.responseXML : e.responseText;
            return (
              n &&
                "parsererror" === o.documentElement.nodeName &&
                q.error &&
                q.error("parsererror"),
              r && r.dataFilter && (o = r.dataFilter(o, t)),
              "string" == typeof o &&
                (("json" === t || !t) && 0 <= a.indexOf("json")
                  ? (o = L(o))
                  : ("script" === t || !t) &&
                    0 <= a.indexOf("javascript") &&
                    q.globalEval(o)),
              o
            );
          };
        return g;
      }
    }),
    (q.fn.ajaxForm = function (e, t, r, a) {
      if (
        (("string" == typeof e || (!1 === e && 0 < arguments.length)) &&
          ((e = { url: e, data: t, dataType: r }),
          "function" == typeof a && (e.success = a)),
        ((e = e || {}).delegation = e.delegation && q.isFunction(q.fn.on)),
        e.delegation || 0 !== this.length)
      )
        return e.delegation
          ? (q(document)
              .off("submit.form-plugin", this.selector, o)
              .off("click.form-plugin", this.selector, i)
              .on("submit.form-plugin", this.selector, e, o)
              .on("click.form-plugin", this.selector, e, i),
            this)
          : (e.beforeFormUnbind && e.beforeFormUnbind(this, e),
            this.ajaxFormUnbind()
              .on("submit.form-plugin", e, o)
              .on("click.form-plugin", e, i));
      var n = { s: this.selector, c: this.context };
      return (
        !q.isReady && n.s
          ? (N("DOM not ready, queuing ajaxForm"),
            q(function () {
              q(n.s, n.c).ajaxForm(e);
            }))
          : N(
              "terminating; zero elements found by selector" +
                (q.isReady ? "" : " (DOM not ready)")
            ),
        this
      );
    }),
    (q.fn.ajaxFormUnbind = function () {
      return this.off("submit.form-plugin click.form-plugin");
    }),
    (q.fn.formToArray = function (e, t, r) {
      var a = [];
      if (0 === this.length) return a;
      var n,
        o,
        i,
        s,
        u,
        c,
        l,
        f,
        d,
        m,
        p = this[0],
        h = this.attr("id"),
        v =
          (v =
            e || void 0 === p.elements
              ? p.getElementsByTagName("*")
              : p.elements) && q.makeArray(v);
      if (
        (h &&
          (e || /(Edge|Trident)\//.test(navigator.userAgent)) &&
          (n = q(':input[form="' + h + '"]').get()).length &&
          (v = (v || []).concat(n)),
        !v || !v.length)
      )
        return a;
      for (
        q.isFunction(r) && (v = q.map(v, r)), o = 0, c = v.length;
        o < c;
        o++
      )
        if ((m = (u = v[o]).name) && !u.disabled)
          if (e && p.clk && "image" === u.type)
            p.clk === u &&
              (a.push({ name: m, value: q(u).val(), type: u.type }),
              a.push(
                { name: m + ".x", value: p.clk_x },
                { name: m + ".y", value: p.clk_y }
              ));
          else if ((s = q.fieldValue(u, !0)) && s.constructor === Array)
            for (t && t.push(u), i = 0, l = s.length; i < l; i++)
              a.push({ name: m, value: s[i] });
          else if (S.fileapi && "file" === u.type) {
            t && t.push(u);
            var g = u.files;
            if (g.length)
              for (i = 0; i < g.length; i++)
                a.push({ name: m, value: g[i], type: u.type });
            else a.push({ name: m, value: "", type: u.type });
          } else
            null != s &&
              (t && t.push(u),
              a.push({
                name: m,
                value: s,
                type: u.type,
                required: u.required,
              }));
      return (
        e ||
          !p.clk ||
          ((m = (d = (f = q(p.clk))[0]).name) &&
            !d.disabled &&
            "image" === d.type &&
            (a.push({ name: m, value: f.val() }),
            a.push(
              { name: m + ".x", value: p.clk_x },
              { name: m + ".y", value: p.clk_y }
            ))),
        a
      );
    }),
    (q.fn.formSerialize = function (e) {
      return q.param(this.formToArray(e));
    }),
    (q.fn.fieldSerialize = function (n) {
      var o = [];
      return (
        this.each(function () {
          var e = this.name;
          if (e) {
            var t = q.fieldValue(this, n);
            if (t && t.constructor === Array)
              for (var r = 0, a = t.length; r < a; r++)
                o.push({ name: e, value: t[r] });
            else null != t && o.push({ name: this.name, value: t });
          }
        }),
        q.param(o)
      );
    }),
    (q.fn.fieldValue = function (e) {
      for (var t = [], r = 0, a = this.length; r < a; r++) {
        var n = this[r],
          o = q.fieldValue(n, e);
        null == o ||
          (o.constructor === Array && !o.length) ||
          (o.constructor === Array ? q.merge(t, o) : t.push(o));
      }
      return t;
    }),
    (q.fieldValue = function (e, t) {
      var r = e.name,
        a = e.type,
        n = e.tagName.toLowerCase();
      if (
        (void 0 === t && (t = !0),
        t &&
          (!r ||
            e.disabled ||
            "reset" === a ||
            "button" === a ||
            (("checkbox" === a || "radio" === a) && !e.checked) ||
            (("submit" === a || "image" === a) && e.form && e.form.clk !== e) ||
            ("select" === n && -1 === e.selectedIndex)))
      )
        return null;
      if ("select" !== n) return q(e).val().replace(m, "\r\n");
      var o = e.selectedIndex;
      if (o < 0) return null;
      for (
        var i = [],
          s = e.options,
          u = "select-one" === a,
          c = u ? o + 1 : s.length,
          l = u ? o : 0;
        l < c;
        l++
      ) {
        var f = s[l];
        if (f.selected && !f.disabled) {
          var d =
            (d = f.value) ||
            (f.attributes && f.attributes.value && !f.attributes.value.specified
              ? f.text
              : f.value);
          if (u) return d;
          i.push(d);
        }
      }
      return i;
    }),
    (q.fn.clearForm = function (e) {
      return this.each(function () {
        q("input,select,textarea", this).clearFields(e);
      });
    }),
    (q.fn.clearFields = q.fn.clearInputs =
      function (r) {
        var a =
          /^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i;
        return this.each(function () {
          var e = this.type,
            t = this.tagName.toLowerCase();
          a.test(e) || "textarea" === t
            ? (this.value = "")
            : "checkbox" === e || "radio" === e
            ? (this.checked = !1)
            : "select" === t
            ? (this.selectedIndex = -1)
            : "file" === e
            ? /MSIE/.test(navigator.userAgent)
              ? q(this).replaceWith(q(this).clone(!0))
              : q(this).val("")
            : r &&
              ((!0 === r && /hidden/.test(e)) ||
                ("string" == typeof r && q(this).is(r))) &&
              (this.value = "");
        });
      }),
    (q.fn.resetForm = function () {
      return this.each(function () {
        var t = q(this),
          e = this.tagName.toLowerCase();
        switch (e) {
          case "input":
            this.checked = this.defaultChecked;
          case "textarea":
            return (this.value = this.defaultValue), !0;
          case "option":
          case "optgroup":
            var r = t.parents("select");
            return (
              r.length && r[0].multiple
                ? "option" === e
                  ? (this.selected = this.defaultSelected)
                  : t.find("option").resetForm()
                : r.resetForm(),
              !0
            );
          case "select":
            return (
              t.find("option").each(function (e) {
                if (
                  ((this.selected = this.defaultSelected),
                  this.defaultSelected && !t[0].multiple)
                )
                  return (t[0].selectedIndex = e), !1;
              }),
              !0
            );
          case "label":
            var a = q(t.attr("for")),
              n = t.find("input,select,textarea");
            return a[0] && n.unshift(a[0]), n.resetForm(), !0;
          case "form":
            return (
              ("function" != typeof this.reset &&
                ("object" != typeof this.reset || this.reset.nodeType)) ||
                this.reset(),
              !0
            );
          default:
            return t.find("form,input,label,select,textarea").resetForm(), !0;
        }
      });
    }),
    (q.fn.enable = function (e) {
      return (
        void 0 === e && (e = !0),
        this.each(function () {
          this.disabled = !e;
        })
      );
    }),
    (q.fn.selected = function (r) {
      return (
        void 0 === r && (r = !0),
        this.each(function () {
          var e,
            t = this.type;
          "checkbox" === t || "radio" === t
            ? (this.checked = r)
            : "option" === this.tagName.toLowerCase() &&
              ((e = q(this).parent("select")),
              r &&
                e[0] &&
                "select-one" === e[0].type &&
                e.find("option").selected(!1),
              (this.selected = r));
        })
      );
    }),
    (q.fn.ajaxSubmit.debug = !1);
});
/*! jQuery Validation Plugin - v1.19.3 - 1/9/2021 * https://jqueryvalidation.org/ * Copyright (c) 2021 Jörn Zaefferer; Licensed MIT */
!(function (a) {
  "function" == typeof define && define.amd
    ? define(["jquery"], a)
    : "object" == typeof module && module.exports
    ? (module.exports = a(require("jquery")))
    : a(jQuery);
})(function (a) {
  a.extend(a.fn, {
    validate: function (b) {
      if (!this.length)
        return void (
          b &&
          b.debug &&
          window.console &&
          console.warn("Nothing selected, can't validate, returning nothing.")
        );
      var c = a.data(this[0], "validator");
      return c
        ? c
        : (this.attr("novalidate", "novalidate"),
          (c = new a.validator(b, this[0])),
          a.data(this[0], "validator", c),
          c.settings.onsubmit &&
            (this.on("click.validate", ":submit", function (b) {
              (c.submitButton = b.currentTarget),
                a(this).hasClass("cancel") && (c.cancelSubmit = !0),
                void 0 !== a(this).attr("formnovalidate") &&
                  (c.cancelSubmit = !0);
            }),
            this.on("submit.validate", function (b) {
              function d() {
                var d, e;
                return (
                  c.submitButton &&
                    (c.settings.submitHandler || c.formSubmitted) &&
                    (d = a("<input type='hidden'/>")
                      .attr("name", c.submitButton.name)
                      .val(a(c.submitButton).val())
                      .appendTo(c.currentForm)),
                  !(c.settings.submitHandler && !c.settings.debug) ||
                    ((e = c.settings.submitHandler.call(c, c.currentForm, b)),
                    d && d.remove(),
                    void 0 !== e && e)
                );
              }
              return (
                c.settings.debug && b.preventDefault(),
                c.cancelSubmit
                  ? ((c.cancelSubmit = !1), d())
                  : c.form()
                  ? c.pendingRequest
                    ? ((c.formSubmitted = !0), !1)
                    : d()
                  : (c.focusInvalid(), !1)
              );
            })),
          c);
    },
    valid: function () {
      var b, c, d;
      return (
        a(this[0]).is("form")
          ? (b = this.validate().form())
          : ((d = []),
            (b = !0),
            (c = a(this[0].form).validate()),
            this.each(function () {
              (b = c.element(this) && b), b || (d = d.concat(c.errorList));
            }),
            (c.errorList = d)),
        b
      );
    },
    rules: function (b, c) {
      var d,
        e,
        f,
        g,
        h,
        i,
        j = this[0],
        k =
          "undefined" != typeof this.attr("contenteditable") &&
          "false" !== this.attr("contenteditable");
      if (
        null != j &&
        (!j.form &&
          k &&
          ((j.form = this.closest("form")[0]), (j.name = this.attr("name"))),
        null != j.form)
      ) {
        if (b)
          switch (
            ((d = a.data(j.form, "validator").settings),
            (e = d.rules),
            (f = a.validator.staticRules(j)),
            b)
          ) {
            case "add":
              a.extend(f, a.validator.normalizeRule(c)),
                delete f.messages,
                (e[j.name] = f),
                c.messages &&
                  (d.messages[j.name] = a.extend(
                    d.messages[j.name],
                    c.messages
                  ));
              break;
            case "remove":
              return c
                ? ((i = {}),
                  a.each(c.split(/\s/), function (a, b) {
                    (i[b] = f[b]), delete f[b];
                  }),
                  i)
                : (delete e[j.name], f);
          }
        return (
          (g = a.validator.normalizeRules(
            a.extend(
              {},
              a.validator.classRules(j),
              a.validator.attributeRules(j),
              a.validator.dataRules(j),
              a.validator.staticRules(j)
            ),
            j
          )),
          g.required &&
            ((h = g.required),
            delete g.required,
            (g = a.extend({ required: h }, g))),
          g.remote &&
            ((h = g.remote), delete g.remote, (g = a.extend(g, { remote: h }))),
          g
        );
      }
    },
  });
  var b = function (a) {
    return a.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
  };
  a.extend(a.expr.pseudos || a.expr[":"], {
    blank: function (c) {
      return !b("" + a(c).val());
    },
    filled: function (c) {
      var d = a(c).val();
      return null !== d && !!b("" + d);
    },
    unchecked: function (b) {
      return !a(b).prop("checked");
    },
  }),
    (a.validator = function (b, c) {
      (this.settings = a.extend(!0, {}, a.validator.defaults, b)),
        (this.currentForm = c),
        this.init();
    }),
    (a.validator.format = function (b, c) {
      return 1 === arguments.length
        ? function () {
            var c = a.makeArray(arguments);
            return c.unshift(b), a.validator.format.apply(this, c);
          }
        : void 0 === c
        ? b
        : (arguments.length > 2 &&
            c.constructor !== Array &&
            (c = a.makeArray(arguments).slice(1)),
          c.constructor !== Array && (c = [c]),
          a.each(c, function (a, c) {
            b = b.replace(new RegExp("\\{" + a + "\\}", "g"), function () {
              return c;
            });
          }),
          b);
    }),
    a.extend(a.validator, {
      defaults: {
        messages: {},
        groups: {},
        rules: {},
        errorClass: "error",
        pendingClass: "pending",
        validClass: "valid",
        errorElement: "label",
        focusCleanup: !1,
        focusInvalid: !0,
        errorContainer: a([]),
        errorLabelContainer: a([]),
        onsubmit: !0,
        ignore: ":hidden",
        ignoreTitle: !1,
        onfocusin: function (a) {
          (this.lastActive = a),
            this.settings.focusCleanup &&
              (this.settings.unhighlight &&
                this.settings.unhighlight.call(
                  this,
                  a,
                  this.settings.errorClass,
                  this.settings.validClass
                ),
              this.hideThese(this.errorsFor(a)));
        },
        onfocusout: function (a) {
          this.checkable(a) ||
            (!(a.name in this.submitted) && this.optional(a)) ||
            this.element(a);
        },
        onkeyup: function (b, c) {
          var d = [16, 17, 18, 20, 35, 36, 37, 38, 39, 40, 45, 144, 225];
          (9 === c.which && "" === this.elementValue(b)) ||
            a.inArray(c.keyCode, d) !== -1 ||
            ((b.name in this.submitted || b.name in this.invalid) &&
              this.element(b));
        },
        onclick: function (a) {
          a.name in this.submitted
            ? this.element(a)
            : a.parentNode.name in this.submitted && this.element(a.parentNode);
        },
        highlight: function (b, c, d) {
          "radio" === b.type
            ? this.findByName(b.name).addClass(c).removeClass(d)
            : a(b).addClass(c).removeClass(d);
        },
        unhighlight: function (b, c, d) {
          "radio" === b.type
            ? this.findByName(b.name).removeClass(c).addClass(d)
            : a(b).removeClass(c).addClass(d);
        },
      },
      setDefaults: function (b) {
        a.extend(a.validator.defaults, b);
      },
      messages: {
        required: "This field is required.",
        remote: "Please fix this field.",
        email: "Please enter a valid email address.",
        url: "Please enter a valid URL.",
        date: "Please enter a valid date.",
        dateISO: "Please enter a valid date (ISO).",
        number: "Please enter a valid number.",
        digits: "Please enter only digits.",
        equalTo: "Please enter the same value again.",
        maxlength: a.validator.format(
          "Please enter no more than {0} characters."
        ),
        minlength: a.validator.format("Please enter at least {0} characters."),
        rangelength: a.validator.format(
          "Please enter a value between {0} and {1} characters long."
        ),
        range: a.validator.format("Please enter a value between {0} and {1}."),
        max: a.validator.format(
          "Please enter a value less than or equal to {0}."
        ),
        min: a.validator.format(
          "Please enter a value greater than or equal to {0}."
        ),
        step: a.validator.format("Please enter a multiple of {0}."),
      },
      autoCreateRanges: !1,
      prototype: {
        init: function () {
          function b(b) {
            var c =
              "undefined" != typeof a(this).attr("contenteditable") &&
              "false" !== a(this).attr("contenteditable");
            if (
              (!this.form &&
                c &&
                ((this.form = a(this).closest("form")[0]),
                (this.name = a(this).attr("name"))),
              d === this.form)
            ) {
              var e = a.data(this.form, "validator"),
                f = "on" + b.type.replace(/^validate/, ""),
                g = e.settings;
              g[f] && !a(this).is(g.ignore) && g[f].call(e, this, b);
            }
          }
          (this.labelContainer = a(this.settings.errorLabelContainer)),
            (this.errorContext =
              (this.labelContainer.length && this.labelContainer) ||
              a(this.currentForm)),
            (this.containers = a(this.settings.errorContainer).add(
              this.settings.errorLabelContainer
            )),
            (this.submitted = {}),
            (this.valueCache = {}),
            (this.pendingRequest = 0),
            (this.pending = {}),
            (this.invalid = {}),
            this.reset();
          var c,
            d = this.currentForm,
            e = (this.groups = {});
          a.each(this.settings.groups, function (b, c) {
            "string" == typeof c && (c = c.split(/\s/)),
              a.each(c, function (a, c) {
                e[c] = b;
              });
          }),
            (c = this.settings.rules),
            a.each(c, function (b, d) {
              c[b] = a.validator.normalizeRule(d);
            }),
            a(this.currentForm)
              .on(
                "focusin.validate focusout.validate keyup.validate",
                ":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], [type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox'], [contenteditable], [type='button']",
                b
              )
              .on(
                "click.validate",
                "select, option, [type='radio'], [type='checkbox']",
                b
              ),
            this.settings.invalidHandler &&
              a(this.currentForm).on(
                "invalid-form.validate",
                this.settings.invalidHandler
              );
        },
        form: function () {
          return (
            this.checkForm(),
            a.extend(this.submitted, this.errorMap),
            (this.invalid = a.extend({}, this.errorMap)),
            this.valid() ||
              a(this.currentForm).triggerHandler("invalid-form", [this]),
            this.showErrors(),
            this.valid()
          );
        },
        checkForm: function () {
          this.prepareForm();
          for (
            var a = 0, b = (this.currentElements = this.elements());
            b[a];
            a++
          )
            this.check(b[a]);
          return this.valid();
        },
        element: function (b) {
          var c,
            d,
            e = this.clean(b),
            f = this.validationTargetFor(e),
            g = this,
            h = !0;
          return (
            void 0 === f
              ? delete this.invalid[e.name]
              : (this.prepareElement(f),
                (this.currentElements = a(f)),
                (d = this.groups[f.name]),
                d &&
                  a.each(this.groups, function (a, b) {
                    b === d &&
                      a !== f.name &&
                      ((e = g.validationTargetFor(g.clean(g.findByName(a)))),
                      e &&
                        e.name in g.invalid &&
                        (g.currentElements.push(e), (h = g.check(e) && h)));
                  }),
                (c = this.check(f) !== !1),
                (h = h && c),
                c ? (this.invalid[f.name] = !1) : (this.invalid[f.name] = !0),
                this.numberOfInvalids() ||
                  (this.toHide = this.toHide.add(this.containers)),
                this.showErrors(),
                a(b).attr("aria-invalid", !c)),
            h
          );
        },
        showErrors: function (b) {
          if (b) {
            var c = this;
            a.extend(this.errorMap, b),
              (this.errorList = a.map(this.errorMap, function (a, b) {
                return { message: a, element: c.findByName(b)[0] };
              })),
              (this.successList = a.grep(this.successList, function (a) {
                return !(a.name in b);
              }));
          }
          this.settings.showErrors
            ? this.settings.showErrors.call(this, this.errorMap, this.errorList)
            : this.defaultShowErrors();
        },
        resetForm: function () {
          a.fn.resetForm && a(this.currentForm).resetForm(),
            (this.invalid = {}),
            (this.submitted = {}),
            this.prepareForm(),
            this.hideErrors();
          var b = this.elements()
            .removeData("previousValue")
            .removeAttr("aria-invalid");
          this.resetElements(b);
        },
        resetElements: function (a) {
          var b;
          if (this.settings.unhighlight)
            for (b = 0; a[b]; b++)
              this.settings.unhighlight.call(
                this,
                a[b],
                this.settings.errorClass,
                ""
              ),
                this.findByName(a[b].name).removeClass(
                  this.settings.validClass
                );
          else
            a.removeClass(this.settings.errorClass).removeClass(
              this.settings.validClass
            );
        },
        numberOfInvalids: function () {
          return this.objectLength(this.invalid);
        },
        objectLength: function (a) {
          var b,
            c = 0;
          for (b in a) void 0 !== a[b] && null !== a[b] && a[b] !== !1 && c++;
          return c;
        },
        hideErrors: function () {
          this.hideThese(this.toHide);
        },
        hideThese: function (a) {
          a.not(this.containers).text(""), this.addWrapper(a).hide();
        },
        valid: function () {
          return 0 === this.size();
        },
        size: function () {
          return this.errorList.length;
        },
        focusInvalid: function () {
          if (this.settings.focusInvalid)
            try {
              a(
                this.findLastActive() ||
                  (this.errorList.length && this.errorList[0].element) ||
                  []
              )
                .filter(":visible")
                .trigger("focus")
                .trigger("focusin");
            } catch (b) {}
        },
        findLastActive: function () {
          var b = this.lastActive;
          return (
            b &&
            1 ===
              a.grep(this.errorList, function (a) {
                return a.element.name === b.name;
              }).length &&
            b
          );
        },
        elements: function () {
          var b = this,
            c = {};
          return a(this.currentForm)
            .find("input, select, textarea, [contenteditable]")
            .not(":submit, :reset, :image, :disabled")
            .not(this.settings.ignore)
            .filter(function () {
              var d = this.name || a(this).attr("name"),
                e =
                  "undefined" != typeof a(this).attr("contenteditable") &&
                  "false" !== a(this).attr("contenteditable");
              return (
                !d &&
                  b.settings.debug &&
                  window.console &&
                  console.error("%o has no name assigned", this),
                e &&
                  ((this.form = a(this).closest("form")[0]), (this.name = d)),
                this.form === b.currentForm &&
                  !(d in c || !b.objectLength(a(this).rules())) &&
                  ((c[d] = !0), !0)
              );
            });
        },
        clean: function (b) {
          return a(b)[0];
        },
        errors: function () {
          var b = this.settings.errorClass.split(" ").join(".");
          return a(this.settings.errorElement + "." + b, this.errorContext);
        },
        resetInternals: function () {
          (this.successList = []),
            (this.errorList = []),
            (this.errorMap = {}),
            (this.toShow = a([])),
            (this.toHide = a([]));
        },
        reset: function () {
          this.resetInternals(), (this.currentElements = a([]));
        },
        prepareForm: function () {
          this.reset(), (this.toHide = this.errors().add(this.containers));
        },
        prepareElement: function (a) {
          this.reset(), (this.toHide = this.errorsFor(a));
        },
        elementValue: function (b) {
          var c,
            d,
            e = a(b),
            f = b.type,
            g =
              "undefined" != typeof e.attr("contenteditable") &&
              "false" !== e.attr("contenteditable");
          return "radio" === f || "checkbox" === f
            ? this.findByName(b.name).filter(":checked").val()
            : "number" === f && "undefined" != typeof b.validity
            ? b.validity.badInput
              ? "NaN"
              : e.val()
            : ((c = g ? e.text() : e.val()),
              "file" === f
                ? "C:\\fakepath\\" === c.substr(0, 12)
                  ? c.substr(12)
                  : ((d = c.lastIndexOf("/")),
                    d >= 0
                      ? c.substr(d + 1)
                      : ((d = c.lastIndexOf("\\")),
                        d >= 0 ? c.substr(d + 1) : c))
                : "string" == typeof c
                ? c.replace(/\r/g, "")
                : c);
        },
        check: function (b) {
          b = this.validationTargetFor(this.clean(b));
          var c,
            d,
            e,
            f,
            g = a(b).rules(),
            h = a.map(g, function (a, b) {
              return b;
            }).length,
            i = !1,
            j = this.elementValue(b);
          "function" == typeof g.normalizer
            ? (f = g.normalizer)
            : "function" == typeof this.settings.normalizer &&
              (f = this.settings.normalizer),
            f && ((j = f.call(b, j)), delete g.normalizer);
          for (d in g) {
            e = { method: d, parameters: g[d] };
            try {
              if (
                ((c = a.validator.methods[d].call(this, j, b, e.parameters)),
                "dependency-mismatch" === c && 1 === h)
              ) {
                i = !0;
                continue;
              }
              if (((i = !1), "pending" === c))
                return void (this.toHide = this.toHide.not(this.errorsFor(b)));
              if (!c) return this.formatAndAdd(b, e), !1;
            } catch (k) {
              throw (
                (this.settings.debug &&
                  window.console &&
                  console.log(
                    "Exception occurred when checking element " +
                      b.id +
                      ", check the '" +
                      e.method +
                      "' method.",
                    k
                  ),
                k instanceof TypeError &&
                  (k.message +=
                    ".  Exception occurred when checking element " +
                    b.id +
                    ", check the '" +
                    e.method +
                    "' method."),
                k)
              );
            }
          }
          if (!i) return this.objectLength(g) && this.successList.push(b), !0;
        },
        customDataMessage: function (b, c) {
          return (
            a(b).data(
              "msg" + c.charAt(0).toUpperCase() + c.substring(1).toLowerCase()
            ) || a(b).data("msg")
          );
        },
        customMessage: function (a, b) {
          var c = this.settings.messages[a];
          return c && (c.constructor === String ? c : c[b]);
        },
        findDefined: function () {
          for (var a = 0; a < arguments.length; a++)
            if (void 0 !== arguments[a]) return arguments[a];
        },
        defaultMessage: function (b, c) {
          "string" == typeof c && (c = { method: c });
          var d = this.findDefined(
              this.customMessage(b.name, c.method),
              this.customDataMessage(b, c.method),
              (!this.settings.ignoreTitle && b.title) || void 0,
              a.validator.messages[c.method],
              "<strong>Warning: No message defined for " + b.name + "</strong>"
            ),
            e = /\$?\{(\d+)\}/g;
          return (
            "function" == typeof d
              ? (d = d.call(this, c.parameters, b))
              : e.test(d) &&
                (d = a.validator.format(d.replace(e, "{$1}"), c.parameters)),
            d
          );
        },
        formatAndAdd: function (a, b) {
          var c = this.defaultMessage(a, b);
          this.errorList.push({ message: c, element: a, method: b.method }),
            (this.errorMap[a.name] = c),
            (this.submitted[a.name] = c);
        },
        addWrapper: function (a) {
          return (
            this.settings.wrapper &&
              (a = a.add(a.parent(this.settings.wrapper))),
            a
          );
        },
        defaultShowErrors: function () {
          var a, b, c;
          for (a = 0; this.errorList[a]; a++)
            (c = this.errorList[a]),
              this.settings.highlight &&
                this.settings.highlight.call(
                  this,
                  c.element,
                  this.settings.errorClass,
                  this.settings.validClass
                ),
              this.showLabel(c.element, c.message);
          if (
            (this.errorList.length &&
              (this.toShow = this.toShow.add(this.containers)),
            this.settings.success)
          )
            for (a = 0; this.successList[a]; a++)
              this.showLabel(this.successList[a]);
          if (this.settings.unhighlight)
            for (a = 0, b = this.validElements(); b[a]; a++)
              this.settings.unhighlight.call(
                this,
                b[a],
                this.settings.errorClass,
                this.settings.validClass
              );
          (this.toHide = this.toHide.not(this.toShow)),
            this.hideErrors(),
            this.addWrapper(this.toShow).show();
        },
        validElements: function () {
          return this.currentElements.not(this.invalidElements());
        },
        invalidElements: function () {
          return a(this.errorList).map(function () {
            return this.element;
          });
        },
        showLabel: function (b, c) {
          var d,
            e,
            f,
            g,
            h = this.errorsFor(b),
            i = this.idOrName(b),
            j = a(b).attr("aria-describedby");
          h.length
            ? (h
                .removeClass(this.settings.validClass)
                .addClass(this.settings.errorClass),
              h.html(c))
            : ((h = a("<" + this.settings.errorElement + ">")
                .attr("id", i + "-error")
                .addClass(this.settings.errorClass)
                .html(c || "")),
              (d = h),
              this.settings.wrapper &&
                (d = h
                  .hide()
                  .show()
                  .wrap("<" + this.settings.wrapper + "/>")
                  .parent()),
              this.labelContainer.length
                ? this.labelContainer.append(d)
                : this.settings.errorPlacement
                ? this.settings.errorPlacement.call(this, d, a(b))
                : d.insertAfter(b),
              h.is("label")
                ? h.attr("for", i)
                : 0 ===
                    h.parents("label[for='" + this.escapeCssMeta(i) + "']")
                      .length &&
                  ((f = h.attr("id")),
                  j
                    ? j.match(
                        new RegExp("\\b" + this.escapeCssMeta(f) + "\\b")
                      ) || (j += " " + f)
                    : (j = f),
                  a(b).attr("aria-describedby", j),
                  (e = this.groups[b.name]),
                  e &&
                    ((g = this),
                    a.each(g.groups, function (b, c) {
                      c === e &&
                        a(
                          "[name='" + g.escapeCssMeta(b) + "']",
                          g.currentForm
                        ).attr("aria-describedby", h.attr("id"));
                    })))),
            !c &&
              this.settings.success &&
              (h.text(""),
              "string" == typeof this.settings.success
                ? h.addClass(this.settings.success)
                : this.settings.success(h, b)),
            (this.toShow = this.toShow.add(h));
        },
        errorsFor: function (b) {
          var c = this.escapeCssMeta(this.idOrName(b)),
            d = a(b).attr("aria-describedby"),
            e = "label[for='" + c + "'], label[for='" + c + "'] *";
          return (
            d && (e = e + ", #" + this.escapeCssMeta(d).replace(/\s+/g, ", #")),
            this.errors().filter(e)
          );
        },
        escapeCssMeta: function (a) {
          return a.replace(/([\\!"#$%&'()*+,.\/:;<=>?@\[\]^`{|}~])/g, "\\$1");
        },
        idOrName: function (a) {
          return (
            this.groups[a.name] || (this.checkable(a) ? a.name : a.id || a.name)
          );
        },
        validationTargetFor: function (b) {
          return (
            this.checkable(b) && (b = this.findByName(b.name)),
            a(b).not(this.settings.ignore)[0]
          );
        },
        checkable: function (a) {
          return /radio|checkbox/i.test(a.type);
        },
        findByName: function (b) {
          return a(this.currentForm).find(
            "[name='" + this.escapeCssMeta(b) + "']"
          );
        },
        getLength: function (b, c) {
          switch (c.nodeName.toLowerCase()) {
            case "select":
              return a("option:selected", c).length;
            case "input":
              if (this.checkable(c))
                return this.findByName(c.name).filter(":checked").length;
          }
          return b.length;
        },
        depend: function (a, b) {
          return (
            !this.dependTypes[typeof a] || this.dependTypes[typeof a](a, b)
          );
        },
        dependTypes: {
          boolean: function (a) {
            return a;
          },
          string: function (b, c) {
            return !!a(b, c.form).length;
          },
          function: function (a, b) {
            return a(b);
          },
        },
        optional: function (b) {
          var c = this.elementValue(b);
          return (
            !a.validator.methods.required.call(this, c, b) &&
            "dependency-mismatch"
          );
        },
        startRequest: function (b) {
          this.pending[b.name] ||
            (this.pendingRequest++,
            a(b).addClass(this.settings.pendingClass),
            (this.pending[b.name] = !0));
        },
        stopRequest: function (b, c) {
          this.pendingRequest--,
            this.pendingRequest < 0 && (this.pendingRequest = 0),
            delete this.pending[b.name],
            a(b).removeClass(this.settings.pendingClass),
            c && 0 === this.pendingRequest && this.formSubmitted && this.form()
              ? (a(this.currentForm).submit(),
                this.submitButton &&
                  a(
                    "input:hidden[name='" + this.submitButton.name + "']",
                    this.currentForm
                  ).remove(),
                (this.formSubmitted = !1))
              : !c &&
                0 === this.pendingRequest &&
                this.formSubmitted &&
                (a(this.currentForm).triggerHandler("invalid-form", [this]),
                (this.formSubmitted = !1));
        },
        previousValue: function (b, c) {
          return (
            (c = ("string" == typeof c && c) || "remote"),
            a.data(b, "previousValue") ||
              a.data(b, "previousValue", {
                old: null,
                valid: !0,
                message: this.defaultMessage(b, { method: c }),
              })
          );
        },
        destroy: function () {
          this.resetForm(),
            a(this.currentForm)
              .off(".validate")
              .removeData("validator")
              .find(".validate-equalTo-blur")
              .off(".validate-equalTo")
              .removeClass("validate-equalTo-blur")
              .find(".validate-lessThan-blur")
              .off(".validate-lessThan")
              .removeClass("validate-lessThan-blur")
              .find(".validate-lessThanEqual-blur")
              .off(".validate-lessThanEqual")
              .removeClass("validate-lessThanEqual-blur")
              .find(".validate-greaterThanEqual-blur")
              .off(".validate-greaterThanEqual")
              .removeClass("validate-greaterThanEqual-blur")
              .find(".validate-greaterThan-blur")
              .off(".validate-greaterThan")
              .removeClass("validate-greaterThan-blur");
        },
      },
      classRuleSettings: {
        required: { required: !0 },
        email: { email: !0 },
        url: { url: !0 },
        date: { date: !0 },
        dateISO: { dateISO: !0 },
        number: { number: !0 },
        digits: { digits: !0 },
        creditcard: { creditcard: !0 },
      },
      addClassRules: function (b, c) {
        b.constructor === String
          ? (this.classRuleSettings[b] = c)
          : a.extend(this.classRuleSettings, b);
      },
      classRules: function (b) {
        var c = {},
          d = a(b).attr("class");
        return (
          d &&
            a.each(d.split(" "), function () {
              this in a.validator.classRuleSettings &&
                a.extend(c, a.validator.classRuleSettings[this]);
            }),
          c
        );
      },
      normalizeAttributeRule: function (a, b, c, d) {
        /min|max|step/.test(c) &&
          (null === b || /number|range|text/.test(b)) &&
          ((d = Number(d)), isNaN(d) && (d = void 0)),
          d || 0 === d ? (a[c] = d) : b === c && "range" !== b && (a[c] = !0);
      },
      attributeRules: function (b) {
        var c,
          d,
          e = {},
          f = a(b),
          g = b.getAttribute("type");
        for (c in a.validator.methods)
          "required" === c
            ? ((d = b.getAttribute(c)), "" === d && (d = !0), (d = !!d))
            : (d = f.attr(c)),
            this.normalizeAttributeRule(e, g, c, d);
        return (
          e.maxlength &&
            /-1|2147483647|524288/.test(e.maxlength) &&
            delete e.maxlength,
          e
        );
      },
      dataRules: function (b) {
        var c,
          d,
          e = {},
          f = a(b),
          g = b.getAttribute("type");
        for (c in a.validator.methods)
          (d = f.data(
            "rule" + c.charAt(0).toUpperCase() + c.substring(1).toLowerCase()
          )),
            "" === d && (d = !0),
            this.normalizeAttributeRule(e, g, c, d);
        return e;
      },
      staticRules: function (b) {
        var c = {},
          d = a.data(b.form, "validator");
        return (
          d.settings.rules &&
            (c = a.validator.normalizeRule(d.settings.rules[b.name]) || {}),
          c
        );
      },
      normalizeRules: function (b, c) {
        return (
          a.each(b, function (d, e) {
            if (e === !1) return void delete b[d];
            if (e.param || e.depends) {
              var f = !0;
              switch (typeof e.depends) {
                case "string":
                  f = !!a(e.depends, c.form).length;
                  break;
                case "function":
                  f = e.depends.call(c, c);
              }
              f
                ? (b[d] = void 0 === e.param || e.param)
                : (a.data(c.form, "validator").resetElements(a(c)),
                  delete b[d]);
            }
          }),
          a.each(b, function (a, d) {
            b[a] = "function" == typeof d && "normalizer" !== a ? d(c) : d;
          }),
          a.each(["minlength", "maxlength"], function () {
            b[this] && (b[this] = Number(b[this]));
          }),
          a.each(["rangelength", "range"], function () {
            var a;
            b[this] &&
              (Array.isArray(b[this])
                ? (b[this] = [Number(b[this][0]), Number(b[this][1])])
                : "string" == typeof b[this] &&
                  ((a = b[this].replace(/[\[\]]/g, "").split(/[\s,]+/)),
                  (b[this] = [Number(a[0]), Number(a[1])])));
          }),
          a.validator.autoCreateRanges &&
            (null != b.min &&
              null != b.max &&
              ((b.range = [b.min, b.max]), delete b.min, delete b.max),
            null != b.minlength &&
              null != b.maxlength &&
              ((b.rangelength = [b.minlength, b.maxlength]),
              delete b.minlength,
              delete b.maxlength)),
          b
        );
      },
      normalizeRule: function (b) {
        if ("string" == typeof b) {
          var c = {};
          a.each(b.split(/\s/), function () {
            c[this] = !0;
          }),
            (b = c);
        }
        return b;
      },
      addMethod: function (b, c, d) {
        (a.validator.methods[b] = c),
          (a.validator.messages[b] =
            void 0 !== d ? d : a.validator.messages[b]),
          c.length < 3 &&
            a.validator.addClassRules(b, a.validator.normalizeRule(b));
      },
      methods: {
        required: function (b, c, d) {
          if (!this.depend(d, c)) return "dependency-mismatch";
          if ("select" === c.nodeName.toLowerCase()) {
            var e = a(c).val();
            return e && e.length > 0;
          }
          return this.checkable(c)
            ? this.getLength(b, c) > 0
            : void 0 !== b && null !== b && b.length > 0;
        },
        email: function (a, b) {
          return (
            this.optional(b) ||
            /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(
              a
            )
          );
        },
        url: function (a, b) {
          return (
            this.optional(b) ||
            /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\.)+(?:[a-z\u00a1-\uffff]{2,}\.?))(?::\d{2,5})?(?:[\/?#]\S*)?$/i.test(
              a
            )
          );
        },
        date: (function () {
          var a = !1;
          return function (b, c) {
            return (
              a ||
                ((a = !0),
                this.settings.debug &&
                  window.console &&
                  console.warn(
                    "The `date` method is deprecated and will be removed in version '2.0.0'.\nPlease don't use it, since it relies on the Date constructor, which\nbehaves very differently across browsers and locales. Use `dateISO`\ninstead or one of the locale specific methods in `localizations/`\nand `additional-methods.js`."
                  )),
              this.optional(c) || !/Invalid|NaN/.test(new Date(b).toString())
            );
          };
        })(),
        dateISO: function (a, b) {
          return (
            this.optional(b) ||
            /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(
              a
            )
          );
        },
        number: function (a, b) {
          return (
            this.optional(b) ||
            /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(a)
          );
        },
        digits: function (a, b) {
          return this.optional(b) || /^\d+$/.test(a);
        },
        minlength: function (a, b, c) {
          var d = Array.isArray(a) ? a.length : this.getLength(a, b);
          return this.optional(b) || d >= c;
        },
        maxlength: function (a, b, c) {
          var d = Array.isArray(a) ? a.length : this.getLength(a, b);
          return this.optional(b) || d <= c;
        },
        rangelength: function (a, b, c) {
          var d = Array.isArray(a) ? a.length : this.getLength(a, b);
          return this.optional(b) || (d >= c[0] && d <= c[1]);
        },
        min: function (a, b, c) {
          return this.optional(b) || a >= c;
        },
        max: function (a, b, c) {
          return this.optional(b) || a <= c;
        },
        range: function (a, b, c) {
          return this.optional(b) || (a >= c[0] && a <= c[1]);
        },
        step: function (b, c, d) {
          var e,
            f = a(c).attr("type"),
            g = "Step attribute on input type " + f + " is not supported.",
            h = ["text", "number", "range"],
            i = new RegExp("\\b" + f + "\\b"),
            j = f && !i.test(h.join()),
            k = function (a) {
              var b = ("" + a).match(/(?:\.(\d+))?$/);
              return b && b[1] ? b[1].length : 0;
            },
            l = function (a) {
              return Math.round(a * Math.pow(10, e));
            },
            m = !0;
          if (j) throw new Error(g);
          return (
            (e = k(d)),
            (k(b) > e || l(b) % l(d) !== 0) && (m = !1),
            this.optional(c) || m
          );
        },
        equalTo: function (b, c, d) {
          var e = a(d);
          return (
            this.settings.onfocusout &&
              e.not(".validate-equalTo-blur").length &&
              e
                .addClass("validate-equalTo-blur")
                .on("blur.validate-equalTo", function () {
                  a(c).valid();
                }),
            b === e.val()
          );
        },
        remote: function (b, c, d, e) {
          if (this.optional(c)) return "dependency-mismatch";
          e = ("string" == typeof e && e) || "remote";
          var f,
            g,
            h,
            i = this.previousValue(c, e);
          return (
            this.settings.messages[c.name] ||
              (this.settings.messages[c.name] = {}),
            (i.originalMessage =
              i.originalMessage || this.settings.messages[c.name][e]),
            (this.settings.messages[c.name][e] = i.message),
            (d = ("string" == typeof d && { url: d }) || d),
            (h = a.param(a.extend({ data: b }, d.data))),
            i.old === h
              ? i.valid
              : ((i.old = h),
                (f = this),
                this.startRequest(c),
                (g = {}),
                (g[c.name] = b),
                a.ajax(
                  a.extend(
                    !0,
                    {
                      mode: "abort",
                      port: "validate" + c.name,
                      dataType: "json",
                      data: g,
                      context: f.currentForm,
                      success: function (a) {
                        var d,
                          g,
                          h,
                          j = a === !0 || "true" === a;
                        (f.settings.messages[c.name][e] = i.originalMessage),
                          j
                            ? ((h = f.formSubmitted),
                              f.resetInternals(),
                              (f.toHide = f.errorsFor(c)),
                              (f.formSubmitted = h),
                              f.successList.push(c),
                              (f.invalid[c.name] = !1),
                              f.showErrors())
                            : ((d = {}),
                              (g =
                                a ||
                                f.defaultMessage(c, {
                                  method: e,
                                  parameters: b,
                                })),
                              (d[c.name] = i.message = g),
                              (f.invalid[c.name] = !0),
                              f.showErrors(d)),
                          (i.valid = j),
                          f.stopRequest(c, j);
                      },
                    },
                    d
                  )
                ),
                "pending")
          );
        },
      },
    });
  var c,
    d = {};
  return (
    a.ajaxPrefilter
      ? a.ajaxPrefilter(function (a, b, c) {
          var e = a.port;
          "abort" === a.mode && (d[e] && d[e].abort(), (d[e] = c));
        })
      : ((c = a.ajax),
        (a.ajax = function (b) {
          var e = ("mode" in b ? b : a.ajaxSettings).mode,
            f = ("port" in b ? b : a.ajaxSettings).port;
          return "abort" === e
            ? (d[f] && d[f].abort(), (d[f] = c.apply(this, arguments)), d[f])
            : c.apply(this, arguments);
        })),
    a
  );
});
/*! Select2 4.0.6-rc.1 | https://github.com/select2/select2/blob/master/LICENSE.md */
!(function (a) {
  "function" == typeof define && define.amd
    ? define(["jquery"], a)
    : "object" == typeof module && module.exports
    ? (module.exports = function (b, c) {
        return (
          void 0 === c &&
            (c =
              "undefined" != typeof window
                ? require("jquery")
                : require("jquery")(b)),
          a(c),
          c
        );
      })
    : a(jQuery);
})(function (a) {
  var b = (function () {
      if (a && a.fn && a.fn.select2 && a.fn.select2.amd)
        var b = a.fn.select2.amd;
      var b;
      return (
        (function () {
          if (!b || !b.requirejs) {
            b ? (c = b) : (b = {});
            var a, c, d;
            !(function (b) {
              function e(a, b) {
                return v.call(a, b);
              }
              function f(a, b) {
                var c,
                  d,
                  e,
                  f,
                  g,
                  h,
                  i,
                  j,
                  k,
                  l,
                  m,
                  n,
                  o = b && b.split("/"),
                  p = t.map,
                  q = (p && p["*"]) || {};
                if (a) {
                  for (
                    a = a.split("/"),
                      g = a.length - 1,
                      t.nodeIdCompat &&
                        x.test(a[g]) &&
                        (a[g] = a[g].replace(x, "")),
                      "." === a[0].charAt(0) &&
                        o &&
                        ((n = o.slice(0, o.length - 1)), (a = n.concat(a))),
                      k = 0;
                    k < a.length;
                    k++
                  )
                    if ("." === (m = a[k])) a.splice(k, 1), (k -= 1);
                    else if (".." === m) {
                      if (
                        0 === k ||
                        (1 === k && ".." === a[2]) ||
                        ".." === a[k - 1]
                      )
                        continue;
                      k > 0 && (a.splice(k - 1, 2), (k -= 2));
                    }
                  a = a.join("/");
                }
                if ((o || q) && p) {
                  for (c = a.split("/"), k = c.length; k > 0; k -= 1) {
                    if (((d = c.slice(0, k).join("/")), o))
                      for (l = o.length; l > 0; l -= 1)
                        if ((e = p[o.slice(0, l).join("/")]) && (e = e[d])) {
                          (f = e), (h = k);
                          break;
                        }
                    if (f) break;
                    !i && q && q[d] && ((i = q[d]), (j = k));
                  }
                  !f && i && ((f = i), (h = j)),
                    f && (c.splice(0, h, f), (a = c.join("/")));
                }
                return a;
              }
              function g(a, c) {
                return function () {
                  var d = w.call(arguments, 0);
                  return (
                    "string" != typeof d[0] && 1 === d.length && d.push(null),
                    o.apply(b, d.concat([a, c]))
                  );
                };
              }
              function h(a) {
                return function (b) {
                  return f(b, a);
                };
              }
              function i(a) {
                return function (b) {
                  r[a] = b;
                };
              }
              function j(a) {
                if (e(s, a)) {
                  var c = s[a];
                  delete s[a], (u[a] = !0), n.apply(b, c);
                }
                if (!e(r, a) && !e(u, a)) throw new Error("No " + a);
                return r[a];
              }
              function k(a) {
                var b,
                  c = a ? a.indexOf("!") : -1;
                return (
                  c > -1 &&
                    ((b = a.substring(0, c)),
                    (a = a.substring(c + 1, a.length))),
                  [b, a]
                );
              }
              function l(a) {
                return a ? k(a) : [];
              }
              function m(a) {
                return function () {
                  return (t && t.config && t.config[a]) || {};
                };
              }
              var n,
                o,
                p,
                q,
                r = {},
                s = {},
                t = {},
                u = {},
                v = Object.prototype.hasOwnProperty,
                w = [].slice,
                x = /\.js$/;
              (p = function (a, b) {
                var c,
                  d = k(a),
                  e = d[0],
                  g = b[1];
                return (
                  (a = d[1]),
                  e && ((e = f(e, g)), (c = j(e))),
                  e
                    ? (a = c && c.normalize ? c.normalize(a, h(g)) : f(a, g))
                    : ((a = f(a, g)),
                      (d = k(a)),
                      (e = d[0]),
                      (a = d[1]),
                      e && (c = j(e))),
                  { f: e ? e + "!" + a : a, n: a, pr: e, p: c }
                );
              }),
                (q = {
                  require: function (a) {
                    return g(a);
                  },
                  exports: function (a) {
                    var b = r[a];
                    return void 0 !== b ? b : (r[a] = {});
                  },
                  module: function (a) {
                    return { id: a, uri: "", exports: r[a], config: m(a) };
                  },
                }),
                (n = function (a, c, d, f) {
                  var h,
                    k,
                    m,
                    n,
                    o,
                    t,
                    v,
                    w = [],
                    x = typeof d;
                  if (
                    ((f = f || a),
                    (t = l(f)),
                    "undefined" === x || "function" === x)
                  ) {
                    for (
                      c =
                        !c.length && d.length
                          ? ["require", "exports", "module"]
                          : c,
                        o = 0;
                      o < c.length;
                      o += 1
                    )
                      if (((n = p(c[o], t)), "require" === (k = n.f)))
                        w[o] = q.require(a);
                      else if ("exports" === k) (w[o] = q.exports(a)), (v = !0);
                      else if ("module" === k) h = w[o] = q.module(a);
                      else if (e(r, k) || e(s, k) || e(u, k)) w[o] = j(k);
                      else {
                        if (!n.p) throw new Error(a + " missing " + k);
                        n.p.load(n.n, g(f, !0), i(k), {}), (w[o] = r[k]);
                      }
                    (m = d ? d.apply(r[a], w) : void 0),
                      a &&
                        (h && h.exports !== b && h.exports !== r[a]
                          ? (r[a] = h.exports)
                          : (m === b && v) || (r[a] = m));
                  } else a && (r[a] = d);
                }),
                (a =
                  c =
                  o =
                    function (a, c, d, e, f) {
                      if ("string" == typeof a)
                        return q[a] ? q[a](c) : j(p(a, l(c)).f);
                      if (!a.splice) {
                        if (((t = a), t.deps && o(t.deps, t.callback), !c))
                          return;
                        c.splice ? ((a = c), (c = d), (d = null)) : (a = b);
                      }
                      return (
                        (c = c || function () {}),
                        "function" == typeof d && ((d = e), (e = f)),
                        e
                          ? n(b, a, c, d)
                          : setTimeout(function () {
                              n(b, a, c, d);
                            }, 4),
                        o
                      );
                    }),
                (o.config = function (a) {
                  return o(a);
                }),
                (a._defined = r),
                (d = function (a, b, c) {
                  if ("string" != typeof a)
                    throw new Error(
                      "See almond README: incorrect module build, no module name"
                    );
                  b.splice || ((c = b), (b = [])),
                    e(r, a) || e(s, a) || (s[a] = [a, b, c]);
                }),
                (d.amd = { jQuery: !0 });
            })(),
              (b.requirejs = a),
              (b.require = c),
              (b.define = d);
          }
        })(),
        b.define("almond", function () {}),
        b.define("jquery", [], function () {
          var b = a || $;
          return (
            null == b &&
              console &&
              console.error &&
              console.error(
                "Select2: An instance of jQuery or a jQuery-compatible library was not found. Make sure that you are including jQuery before Select2 on your web page."
              ),
            b
          );
        }),
        b.define("select2/utils", ["jquery"], function (a) {
          function b(a) {
            var b = a.prototype,
              c = [];
            for (var d in b) {
              "function" == typeof b[d] && "constructor" !== d && c.push(d);
            }
            return c;
          }
          var c = {};
          (c.Extend = function (a, b) {
            function c() {
              this.constructor = a;
            }
            var d = {}.hasOwnProperty;
            for (var e in b) d.call(b, e) && (a[e] = b[e]);
            return (
              (c.prototype = b.prototype),
              (a.prototype = new c()),
              (a.__super__ = b.prototype),
              a
            );
          }),
            (c.Decorate = function (a, c) {
              function d() {
                var b = Array.prototype.unshift,
                  d = c.prototype.constructor.length,
                  e = a.prototype.constructor;
                d > 0 &&
                  (b.call(arguments, a.prototype.constructor),
                  (e = c.prototype.constructor)),
                  e.apply(this, arguments);
              }
              function e() {
                this.constructor = d;
              }
              var f = b(c),
                g = b(a);
              (c.displayName = a.displayName), (d.prototype = new e());
              for (var h = 0; h < g.length; h++) {
                var i = g[h];
                d.prototype[i] = a.prototype[i];
              }
              for (
                var j = function (a) {
                    var b = function () {};
                    (a in d.prototype) && (b = d.prototype[a]);
                    var e = c.prototype[a];
                    return function () {
                      return (
                        Array.prototype.unshift.call(arguments, b),
                        e.apply(this, arguments)
                      );
                    };
                  },
                  k = 0;
                k < f.length;
                k++
              ) {
                var l = f[k];
                d.prototype[l] = j(l);
              }
              return d;
            });
          var d = function () {
            this.listeners = {};
          };
          (d.prototype.on = function (a, b) {
            (this.listeners = this.listeners || {}),
              a in this.listeners
                ? this.listeners[a].push(b)
                : (this.listeners[a] = [b]);
          }),
            (d.prototype.trigger = function (a) {
              var b = Array.prototype.slice,
                c = b.call(arguments, 1);
              (this.listeners = this.listeners || {}),
                null == c && (c = []),
                0 === c.length && c.push({}),
                (c[0]._type = a),
                a in this.listeners &&
                  this.invoke(this.listeners[a], b.call(arguments, 1)),
                "*" in this.listeners &&
                  this.invoke(this.listeners["*"], arguments);
            }),
            (d.prototype.invoke = function (a, b) {
              for (var c = 0, d = a.length; c < d; c++) a[c].apply(this, b);
            }),
            (c.Observable = d),
            (c.generateChars = function (a) {
              for (var b = "", c = 0; c < a; c++) {
                b += Math.floor(36 * Math.random()).toString(36);
              }
              return b;
            }),
            (c.bind = function (a, b) {
              return function () {
                a.apply(b, arguments);
              };
            }),
            (c._convertData = function (a) {
              for (var b in a) {
                var c = b.split("-"),
                  d = a;
                if (1 !== c.length) {
                  for (var e = 0; e < c.length; e++) {
                    var f = c[e];
                    (f = f.substring(0, 1).toLowerCase() + f.substring(1)),
                      f in d || (d[f] = {}),
                      e == c.length - 1 && (d[f] = a[b]),
                      (d = d[f]);
                  }
                  delete a[b];
                }
              }
              return a;
            }),
            (c.hasScroll = function (b, c) {
              var d = a(c),
                e = c.style.overflowX,
                f = c.style.overflowY;
              return (
                (e !== f || ("hidden" !== f && "visible" !== f)) &&
                ("scroll" === e ||
                  "scroll" === f ||
                  d.innerHeight() < c.scrollHeight ||
                  d.innerWidth() < c.scrollWidth)
              );
            }),
            (c.escapeMarkup = function (a) {
              var b = {
                "\\": "&#92;",
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#39;",
                "/": "&#47;",
              };
              return "string" != typeof a
                ? a
                : String(a).replace(/[&<>"'\/\\]/g, function (a) {
                    return b[a];
                  });
            }),
            (c.appendMany = function (b, c) {
              if ("1.7" === a.fn.jquery.substr(0, 3)) {
                var d = a();
                a.map(c, function (a) {
                  d = d.add(a);
                }),
                  (c = d);
              }
              b.append(c);
            }),
            (c.__cache = {});
          var e = 0;
          return (
            (c.GetUniqueElementId = function (a) {
              var b = a.getAttribute("data-select2-id");
              return (
                null == b &&
                  (a.id
                    ? ((b = a.id), a.setAttribute("data-select2-id", b))
                    : (a.setAttribute("data-select2-id", ++e),
                      (b = e.toString()))),
                b
              );
            }),
            (c.StoreData = function (a, b, d) {
              var e = c.GetUniqueElementId(a);
              c.__cache[e] || (c.__cache[e] = {}), (c.__cache[e][b] = d);
            }),
            (c.GetData = function (b, d) {
              var e = c.GetUniqueElementId(b);
              return d
                ? c.__cache[e] && null != c.__cache[e][d]
                  ? c.__cache[e][d]
                  : a(b).data(d)
                : c.__cache[e];
            }),
            (c.RemoveData = function (a) {
              var b = c.GetUniqueElementId(a);
              null != c.__cache[b] && delete c.__cache[b];
            }),
            c
          );
        }),
        b.define("select2/results", ["jquery", "./utils"], function (a, b) {
          function c(a, b, d) {
            (this.$element = a),
              (this.data = d),
              (this.options = b),
              c.__super__.constructor.call(this);
          }
          return (
            b.Extend(c, b.Observable),
            (c.prototype.render = function () {
              var b = a(
                '<ul class="select2-results__options" role="tree"></ul>'
              );
              return (
                this.options.get("multiple") &&
                  b.attr("aria-multiselectable", "true"),
                (this.$results = b),
                b
              );
            }),
            (c.prototype.clear = function () {
              this.$results.empty();
            }),
            (c.prototype.displayMessage = function (b) {
              var c = this.options.get("escapeMarkup");
              this.clear(), this.hideLoading();
              var d = a(
                  '<li role="treeitem" aria-live="assertive" class="select2-results__option"></li>'
                ),
                e = this.options.get("translations").get(b.message);
              d.append(c(e(b.args))),
                (d[0].className += " select2-results__message"),
                this.$results.append(d);
            }),
            (c.prototype.hideMessages = function () {
              this.$results.find(".select2-results__message").remove();
            }),
            (c.prototype.append = function (a) {
              this.hideLoading();
              var b = [];
              if (null == a.results || 0 === a.results.length)
                return void (
                  0 === this.$results.children().length &&
                  this.trigger("results:message", { message: "noResults" })
                );
              a.results = this.sort(a.results);
              for (var c = 0; c < a.results.length; c++) {
                var d = a.results[c],
                  e = this.option(d);
                b.push(e);
              }
              this.$results.append(b);
            }),
            (c.prototype.position = function (a, b) {
              b.find(".select2-results").append(a);
            }),
            (c.prototype.sort = function (a) {
              return this.options.get("sorter")(a);
            }),
            (c.prototype.highlightFirstItem = function () {
              var a = this.$results.find(
                  ".select2-results__option[aria-selected]"
                ),
                b = a.filter("[aria-selected=true]");
              b.length > 0
                ? b.first().trigger("mouseenter")
                : a.first().trigger("mouseenter"),
                this.ensureHighlightVisible();
            }),
            (c.prototype.setClasses = function () {
              var c = this;
              this.data.current(function (d) {
                var e = a.map(d, function (a) {
                  return a.id.toString();
                });
                c.$results
                  .find(".select2-results__option[aria-selected]")
                  .each(function () {
                    var c = a(this),
                      d = b.GetData(this, "data"),
                      f = "" + d.id;
                    (null != d.element && d.element.selected) ||
                    (null == d.element && a.inArray(f, e) > -1)
                      ? c.attr("aria-selected", "true")
                      : c.attr("aria-selected", "false");
                  });
              });
            }),
            (c.prototype.showLoading = function (a) {
              this.hideLoading();
              var b = this.options.get("translations").get("searching"),
                c = { disabled: !0, loading: !0, text: b(a) },
                d = this.option(c);
              (d.className += " loading-results"), this.$results.prepend(d);
            }),
            (c.prototype.hideLoading = function () {
              this.$results.find(".loading-results").remove();
            }),
            (c.prototype.option = function (c) {
              var d = document.createElement("li");
              d.className = "select2-results__option";
              var e = { role: "treeitem", "aria-selected": "false" };
              c.disabled &&
                (delete e["aria-selected"], (e["aria-disabled"] = "true")),
                null == c.id && delete e["aria-selected"],
                null != c._resultId && (d.id = c._resultId),
                c.title && (d.title = c.title),
                c.children &&
                  ((e.role = "group"),
                  (e["aria-label"] = c.text),
                  delete e["aria-selected"]);
              for (var f in e) {
                var g = e[f];
                d.setAttribute(f, g);
              }
              if (c.children) {
                var h = a(d),
                  i = document.createElement("strong");
                i.className = "select2-results__group";
                a(i);
                this.template(c, i);
                for (var j = [], k = 0; k < c.children.length; k++) {
                  var l = c.children[k],
                    m = this.option(l);
                  j.push(m);
                }
                var n = a("<ul></ul>", {
                  class:
                    "select2-results__options select2-results__options--nested",
                });
                n.append(j), h.append(i), h.append(n);
              } else this.template(c, d);
              return b.StoreData(d, "data", c), d;
            }),
            (c.prototype.bind = function (c, d) {
              var e = this,
                f = c.id + "-results";
              this.$results.attr("id", f),
                c.on("results:all", function (a) {
                  e.clear(),
                    e.append(a.data),
                    c.isOpen() && (e.setClasses(), e.highlightFirstItem());
                }),
                c.on("results:append", function (a) {
                  e.append(a.data), c.isOpen() && e.setClasses();
                }),
                c.on("query", function (a) {
                  e.hideMessages(), e.showLoading(a);
                }),
                c.on("select", function () {
                  c.isOpen() && (e.setClasses(), e.highlightFirstItem());
                }),
                c.on("unselect", function () {
                  c.isOpen() && (e.setClasses(), e.highlightFirstItem());
                }),
                c.on("open", function () {
                  e.$results.attr("aria-expanded", "true"),
                    e.$results.attr("aria-hidden", "false"),
                    e.setClasses(),
                    e.ensureHighlightVisible();
                }),
                c.on("close", function () {
                  e.$results.attr("aria-expanded", "false"),
                    e.$results.attr("aria-hidden", "true"),
                    e.$results.removeAttr("aria-activedescendant");
                }),
                c.on("results:toggle", function () {
                  var a = e.getHighlightedResults();
                  0 !== a.length && a.trigger("mouseup");
                }),
                c.on("results:select", function () {
                  var a = e.getHighlightedResults();
                  if (0 !== a.length) {
                    var c = b.GetData(a[0], "data");
                    "true" == a.attr("aria-selected")
                      ? e.trigger("close", {})
                      : e.trigger("select", { data: c });
                  }
                }),
                c.on("results:previous", function () {
                  var a = e.getHighlightedResults(),
                    b = e.$results.find("[aria-selected]"),
                    c = b.index(a);
                  if (!(c <= 0)) {
                    var d = c - 1;
                    0 === a.length && (d = 0);
                    var f = b.eq(d);
                    f.trigger("mouseenter");
                    var g = e.$results.offset().top,
                      h = f.offset().top,
                      i = e.$results.scrollTop() + (h - g);
                    0 === d
                      ? e.$results.scrollTop(0)
                      : h - g < 0 && e.$results.scrollTop(i);
                  }
                }),
                c.on("results:next", function () {
                  var a = e.getHighlightedResults(),
                    b = e.$results.find("[aria-selected]"),
                    c = b.index(a),
                    d = c + 1;
                  if (!(d >= b.length)) {
                    var f = b.eq(d);
                    f.trigger("mouseenter");
                    var g =
                        e.$results.offset().top + e.$results.outerHeight(!1),
                      h = f.offset().top + f.outerHeight(!1),
                      i = e.$results.scrollTop() + h - g;
                    0 === d
                      ? e.$results.scrollTop(0)
                      : h > g && e.$results.scrollTop(i);
                  }
                }),
                c.on("results:focus", function (a) {
                  a.element.addClass("select2-results__option--highlighted");
                }),
                c.on("results:message", function (a) {
                  e.displayMessage(a);
                }),
                a.fn.mousewheel &&
                  this.$results.on("mousewheel", function (a) {
                    var b = e.$results.scrollTop(),
                      c = e.$results.get(0).scrollHeight - b + a.deltaY,
                      d = a.deltaY > 0 && b - a.deltaY <= 0,
                      f = a.deltaY < 0 && c <= e.$results.height();
                    d
                      ? (e.$results.scrollTop(0),
                        a.preventDefault(),
                        a.stopPropagation())
                      : f &&
                        (e.$results.scrollTop(
                          e.$results.get(0).scrollHeight - e.$results.height()
                        ),
                        a.preventDefault(),
                        a.stopPropagation());
                  }),
                this.$results.on(
                  "mouseup",
                  ".select2-results__option[aria-selected]",
                  function (c) {
                    var d = a(this),
                      f = b.GetData(this, "data");
                    if ("true" === d.attr("aria-selected"))
                      return void (e.options.get("multiple")
                        ? e.trigger("unselect", { originalEvent: c, data: f })
                        : e.trigger("close", {}));
                    e.trigger("select", { originalEvent: c, data: f });
                  }
                ),
                this.$results.on(
                  "mouseenter",
                  ".select2-results__option[aria-selected]",
                  function (c) {
                    var d = b.GetData(this, "data");
                    e
                      .getHighlightedResults()
                      .removeClass("select2-results__option--highlighted"),
                      e.trigger("results:focus", { data: d, element: a(this) });
                  }
                );
            }),
            (c.prototype.getHighlightedResults = function () {
              return this.$results.find(
                ".select2-results__option--highlighted"
              );
            }),
            (c.prototype.destroy = function () {
              this.$results.remove();
            }),
            (c.prototype.ensureHighlightVisible = function () {
              var a = this.getHighlightedResults();
              if (0 !== a.length) {
                var b = this.$results.find("[aria-selected]"),
                  c = b.index(a),
                  d = this.$results.offset().top,
                  e = a.offset().top,
                  f = this.$results.scrollTop() + (e - d),
                  g = e - d;
                (f -= 2 * a.outerHeight(!1)),
                  c <= 2
                    ? this.$results.scrollTop(0)
                    : (g > this.$results.outerHeight() || g < 0) &&
                      this.$results.scrollTop(f);
              }
            }),
            (c.prototype.template = function (b, c) {
              var d = this.options.get("templateResult"),
                e = this.options.get("escapeMarkup"),
                f = d(b, c);
              null == f
                ? (c.style.display = "none")
                : "string" == typeof f
                ? (c.innerHTML = e(f))
                : a(c).append(f);
            }),
            c
          );
        }),
        b.define("select2/keys", [], function () {
          return {
            BACKSPACE: 8,
            TAB: 9,
            ENTER: 13,
            SHIFT: 16,
            CTRL: 17,
            ALT: 18,
            ESC: 27,
            SPACE: 32,
            PAGE_UP: 33,
            PAGE_DOWN: 34,
            END: 35,
            HOME: 36,
            LEFT: 37,
            UP: 38,
            RIGHT: 39,
            DOWN: 40,
            DELETE: 46,
          };
        }),
        b.define(
          "select2/selection/base",
          ["jquery", "../utils", "../keys"],
          function (a, b, c) {
            function d(a, b) {
              (this.$element = a),
                (this.options = b),
                d.__super__.constructor.call(this);
            }
            return (
              b.Extend(d, b.Observable),
              (d.prototype.render = function () {
                var c = a(
                  '<span class="select2-selection" role="combobox"  aria-haspopup="true" aria-expanded="false"></span>'
                );
                return (
                  (this._tabindex = 0),
                  null != b.GetData(this.$element[0], "old-tabindex")
                    ? (this._tabindex = b.GetData(
                        this.$element[0],
                        "old-tabindex"
                      ))
                    : null != this.$element.attr("tabindex") &&
                      (this._tabindex = this.$element.attr("tabindex")),
                  c.attr("title", this.$element.attr("title")),
                  c.attr("tabindex", this._tabindex),
                  (this.$selection = c),
                  c
                );
              }),
              (d.prototype.bind = function (a, b) {
                var d = this,
                  e = (a.id, a.id + "-results");
                (this.container = a),
                  this.$selection.on("focus", function (a) {
                    d.trigger("focus", a);
                  }),
                  this.$selection.on("blur", function (a) {
                    d._handleBlur(a);
                  }),
                  this.$selection.on("keydown", function (a) {
                    d.trigger("keypress", a),
                      a.which === c.SPACE && a.preventDefault();
                  }),
                  a.on("results:focus", function (a) {
                    d.$selection.attr(
                      "aria-activedescendant",
                      a.data._resultId
                    );
                  }),
                  a.on("selection:update", function (a) {
                    d.update(a.data);
                  }),
                  a.on("open", function () {
                    d.$selection.attr("aria-expanded", "true"),
                      d.$selection.attr("aria-owns", e),
                      d._attachCloseHandler(a);
                  }),
                  a.on("close", function () {
                    d.$selection.attr("aria-expanded", "false"),
                      d.$selection.removeAttr("aria-activedescendant"),
                      d.$selection.removeAttr("aria-owns"),
                      d.$selection.focus(),
                      window.setTimeout(function () {
                        d.$selection.focus();
                      }, 0),
                      d._detachCloseHandler(a);
                  }),
                  a.on("enable", function () {
                    d.$selection.attr("tabindex", d._tabindex);
                  }),
                  a.on("disable", function () {
                    d.$selection.attr("tabindex", "-1");
                  });
              }),
              (d.prototype._handleBlur = function (b) {
                var c = this;
                window.setTimeout(function () {
                  document.activeElement == c.$selection[0] ||
                    a.contains(c.$selection[0], document.activeElement) ||
                    c.trigger("blur", b);
                }, 1);
              }),
              (d.prototype._attachCloseHandler = function (c) {
                a(document.body).on("mousedown.select2." + c.id, function (c) {
                  var d = a(c.target),
                    e = d.closest(".select2");
                  a(".select2.select2-container--open").each(function () {
                    a(this),
                      this != e[0] &&
                        b.GetData(this, "element").select2("close");
                  });
                });
              }),
              (d.prototype._detachCloseHandler = function (b) {
                a(document.body).off("mousedown.select2." + b.id);
              }),
              (d.prototype.position = function (a, b) {
                b.find(".selection").append(a);
              }),
              (d.prototype.destroy = function () {
                this._detachCloseHandler(this.container);
              }),
              (d.prototype.update = function (a) {
                throw new Error(
                  "The `update` method must be defined in child classes."
                );
              }),
              d
            );
          }
        ),
        b.define(
          "select2/selection/single",
          ["jquery", "./base", "../utils", "../keys"],
          function (a, b, c, d) {
            function e() {
              e.__super__.constructor.apply(this, arguments);
            }
            return (
              c.Extend(e, b),
              (e.prototype.render = function () {
                var a = e.__super__.render.call(this);
                return (
                  a.addClass("select2-selection--single"),
                  a.html(
                    '<span class="select2-selection__rendered"></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>'
                  ),
                  a
                );
              }),
              (e.prototype.bind = function (a, b) {
                var c = this;
                e.__super__.bind.apply(this, arguments);
                var d = a.id + "-container";
                this.$selection
                  .find(".select2-selection__rendered")
                  .attr("id", d)
                  .attr("role", "textbox")
                  .attr("aria-readonly", "true"),
                  this.$selection.attr("aria-labelledby", d),
                  this.$selection.on("mousedown", function (a) {
                    1 === a.which && c.trigger("toggle", { originalEvent: a });
                  }),
                  this.$selection.on("focus", function (a) {}),
                  this.$selection.on("blur", function (a) {}),
                  a.on("focus", function (b) {
                    a.isOpen() || c.$selection.focus();
                  });
              }),
              (e.prototype.clear = function () {
                var a = this.$selection.find(".select2-selection__rendered");
                a.empty(), a.removeAttr("title");
              }),
              (e.prototype.display = function (a, b) {
                var c = this.options.get("templateSelection");
                return this.options.get("escapeMarkup")(c(a, b));
              }),
              (e.prototype.selectionContainer = function () {
                return a("<span></span>");
              }),
              (e.prototype.update = function (a) {
                if (0 === a.length) return void this.clear();
                var b = a[0],
                  c = this.$selection.find(".select2-selection__rendered"),
                  d = this.display(b, c);
                c.empty().append(d), c.attr("title", b.title || b.text);
              }),
              e
            );
          }
        ),
        b.define(
          "select2/selection/multiple",
          ["jquery", "./base", "../utils"],
          function (a, b, c) {
            function d(a, b) {
              d.__super__.constructor.apply(this, arguments);
            }
            return (
              c.Extend(d, b),
              (d.prototype.render = function () {
                var a = d.__super__.render.call(this);
                return (
                  a.addClass("select2-selection--multiple"),
                  a.html('<ul class="select2-selection__rendered"></ul>'),
                  a
                );
              }),
              (d.prototype.bind = function (b, e) {
                var f = this;
                d.__super__.bind.apply(this, arguments),
                  this.$selection.on("click", function (a) {
                    f.trigger("toggle", { originalEvent: a });
                  }),
                  this.$selection.on(
                    "click",
                    ".select2-selection__choice__remove",
                    function (b) {
                      if (!f.options.get("disabled")) {
                        var d = a(this),
                          e = d.parent(),
                          g = c.GetData(e[0], "data");
                        f.trigger("unselect", { originalEvent: b, data: g });
                      }
                    }
                  );
              }),
              (d.prototype.clear = function () {
                var a = this.$selection.find(".select2-selection__rendered");
                a.empty(), a.removeAttr("title");
              }),
              (d.prototype.display = function (a, b) {
                var c = this.options.get("templateSelection");
                return this.options.get("escapeMarkup")(c(a, b));
              }),
              (d.prototype.selectionContainer = function () {
                return a(
                  '<li class="select2-selection__choice"><span class="select2-selection__choice__remove" role="presentation">&times;</span></li>'
                );
              }),
              (d.prototype.update = function (a) {
                if ((this.clear(), 0 !== a.length)) {
                  for (var b = [], d = 0; d < a.length; d++) {
                    var e = a[d],
                      f = this.selectionContainer(),
                      g = this.display(e, f);
                    f.append(g),
                      f.attr("title", e.title || e.text),
                      c.StoreData(f[0], "data", e),
                      b.push(f);
                  }
                  var h = this.$selection.find(".select2-selection__rendered");
                  c.appendMany(h, b);
                }
              }),
              d
            );
          }
        ),
        b.define("select2/selection/placeholder", ["../utils"], function (a) {
          function b(a, b, c) {
            (this.placeholder = this.normalizePlaceholder(
              c.get("placeholder")
            )),
              a.call(this, b, c);
          }
          return (
            (b.prototype.normalizePlaceholder = function (a, b) {
              return "string" == typeof b && (b = { id: "", text: b }), b;
            }),
            (b.prototype.createPlaceholder = function (a, b) {
              var c = this.selectionContainer();
              return (
                c.html(this.display(b)),
                c
                  .addClass("select2-selection__placeholder")
                  .removeClass("select2-selection__choice"),
                c
              );
            }),
            (b.prototype.update = function (a, b) {
              var c = 1 == b.length && b[0].id != this.placeholder.id;
              if (b.length > 1 || c) return a.call(this, b);
              this.clear();
              var d = this.createPlaceholder(this.placeholder);
              this.$selection.find(".select2-selection__rendered").append(d);
            }),
            b
          );
        }),
        b.define(
          "select2/selection/allowClear",
          ["jquery", "../keys", "../utils"],
          function (a, b, c) {
            function d() {}
            return (
              (d.prototype.bind = function (a, b, c) {
                var d = this;
                a.call(this, b, c),
                  null == this.placeholder &&
                    this.options.get("debug") &&
                    window.console &&
                    console.error &&
                    console.error(
                      "Select2: The `allowClear` option should be used in combination with the `placeholder` option."
                    ),
                  this.$selection.on(
                    "mousedown",
                    ".select2-selection__clear",
                    function (a) {
                      d._handleClear(a);
                    }
                  ),
                  b.on("keypress", function (a) {
                    d._handleKeyboardClear(a, b);
                  });
              }),
              (d.prototype._handleClear = function (a, b) {
                if (!this.options.get("disabled")) {
                  var d = this.$selection.find(".select2-selection__clear");
                  if (0 !== d.length) {
                    b.stopPropagation();
                    var e = c.GetData(d[0], "data"),
                      f = this.$element.val();
                    this.$element.val(this.placeholder.id);
                    var g = { data: e };
                    if ((this.trigger("clear", g), g.prevented))
                      return void this.$element.val(f);
                    for (var h = 0; h < e.length; h++)
                      if (
                        ((g = { data: e[h] }),
                        this.trigger("unselect", g),
                        g.prevented)
                      )
                        return void this.$element.val(f);
                    this.$element.trigger("change"), this.trigger("toggle", {});
                  }
                }
              }),
              (d.prototype._handleKeyboardClear = function (a, c, d) {
                d.isOpen() ||
                  (c.which != b.DELETE && c.which != b.BACKSPACE) ||
                  this._handleClear(c);
              }),
              (d.prototype.update = function (b, d) {
                if (
                  (b.call(this, d),
                  !(
                    this.$selection.find(".select2-selection__placeholder")
                      .length > 0 || 0 === d.length
                  ))
                ) {
                  var e = a(
                    '<span class="select2-selection__clear">&times;</span>'
                  );
                  c.StoreData(e[0], "data", d),
                    this.$selection
                      .find(".select2-selection__rendered")
                      .prepend(e);
                }
              }),
              d
            );
          }
        ),
        b.define(
          "select2/selection/search",
          ["jquery", "../utils", "../keys"],
          function (a, b, c) {
            function d(a, b, c) {
              a.call(this, b, c);
            }
            return (
              (d.prototype.render = function (b) {
                var c = a(
                  '<li class="select2-search select2-search--inline"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" role="textbox" aria-autocomplete="list" /></li>'
                );
                (this.$searchContainer = c), (this.$search = c.find("input"));
                var d = b.call(this);
                return this._transferTabIndex(), d;
              }),
              (d.prototype.bind = function (a, d, e) {
                var f = this;
                a.call(this, d, e),
                  d.on("open", function () {
                    f.$search.trigger("focus");
                  }),
                  d.on("close", function () {
                    f.$search.val(""),
                      f.$search.removeAttr("aria-activedescendant"),
                      f.$search.trigger("focus");
                  }),
                  d.on("enable", function () {
                    f.$search.prop("disabled", !1), f._transferTabIndex();
                  }),
                  d.on("disable", function () {
                    f.$search.prop("disabled", !0);
                  }),
                  d.on("focus", function (a) {
                    f.$search.trigger("focus");
                  }),
                  d.on("results:focus", function (a) {
                    f.$search.attr("aria-activedescendant", a.id);
                  }),
                  this.$selection.on(
                    "focusin",
                    ".select2-search--inline",
                    function (a) {
                      f.trigger("focus", a);
                    }
                  ),
                  this.$selection.on(
                    "focusout",
                    ".select2-search--inline",
                    function (a) {
                      f._handleBlur(a);
                    }
                  ),
                  this.$selection.on(
                    "keydown",
                    ".select2-search--inline",
                    function (a) {
                      if (
                        (a.stopPropagation(),
                        f.trigger("keypress", a),
                        (f._keyUpPrevented = a.isDefaultPrevented()),
                        a.which === c.BACKSPACE && "" === f.$search.val())
                      ) {
                        var d = f.$searchContainer.prev(
                          ".select2-selection__choice"
                        );
                        if (d.length > 0) {
                          var e = b.GetData(d[0], "data");
                          f.searchRemoveChoice(e), a.preventDefault();
                        }
                      }
                    }
                  );
                var g = document.documentMode,
                  h = g && g <= 11;
                this.$selection.on(
                  "input.searchcheck",
                  ".select2-search--inline",
                  function (a) {
                    if (h)
                      return void f.$selection.off(
                        "input.search input.searchcheck"
                      );
                    f.$selection.off("keyup.search");
                  }
                ),
                  this.$selection.on(
                    "keyup.search input.search",
                    ".select2-search--inline",
                    function (a) {
                      if (h && "input" === a.type)
                        return void f.$selection.off(
                          "input.search input.searchcheck"
                        );
                      var b = a.which;
                      b != c.SHIFT &&
                        b != c.CTRL &&
                        b != c.ALT &&
                        b != c.TAB &&
                        f.handleSearch(a);
                    }
                  );
              }),
              (d.prototype._transferTabIndex = function (a) {
                this.$search.attr("tabindex", this.$selection.attr("tabindex")),
                  this.$selection.attr("tabindex", "-1");
              }),
              (d.prototype.createPlaceholder = function (a, b) {
                this.$search.attr("placeholder", b.text);
              }),
              (d.prototype.update = function (a, b) {
                var c = this.$search[0] == document.activeElement;
                if (
                  (this.$search.attr("placeholder", ""),
                  a.call(this, b),
                  this.$selection
                    .find(".select2-selection__rendered")
                    .append(this.$searchContainer),
                  this.resizeSearch(),
                  c)
                ) {
                  this.$element.find("[data-select2-tag]").length
                    ? this.$element.focus()
                    : this.$search.focus();
                }
              }),
              (d.prototype.handleSearch = function () {
                if ((this.resizeSearch(), !this._keyUpPrevented)) {
                  var a = this.$search.val();
                  this.trigger("query", { term: a });
                }
                this._keyUpPrevented = !1;
              }),
              (d.prototype.searchRemoveChoice = function (a, b) {
                this.trigger("unselect", { data: b }),
                  this.$search.val(b.text),
                  this.handleSearch();
              }),
              (d.prototype.resizeSearch = function () {
                this.$search.css("width", "25px");
                var a = "";
                if ("" !== this.$search.attr("placeholder"))
                  a = this.$selection
                    .find(".select2-selection__rendered")
                    .innerWidth();
                else {
                  a = 0.75 * (this.$search.val().length + 1) + "em";
                }
                this.$search.css("width", a);
              }),
              d
            );
          }
        ),
        b.define("select2/selection/eventRelay", ["jquery"], function (a) {
          function b() {}
          return (
            (b.prototype.bind = function (b, c, d) {
              var e = this,
                f = [
                  "open",
                  "opening",
                  "close",
                  "closing",
                  "select",
                  "selecting",
                  "unselect",
                  "unselecting",
                  "clear",
                  "clearing",
                ],
                g = [
                  "opening",
                  "closing",
                  "selecting",
                  "unselecting",
                  "clearing",
                ];
              b.call(this, c, d),
                c.on("*", function (b, c) {
                  if (-1 !== a.inArray(b, f)) {
                    c = c || {};
                    var d = a.Event("select2:" + b, { params: c });
                    e.$element.trigger(d),
                      -1 !== a.inArray(b, g) &&
                        (c.prevented = d.isDefaultPrevented());
                  }
                });
            }),
            b
          );
        }),
        b.define("select2/translation", ["jquery", "require"], function (a, b) {
          function c(a) {
            this.dict = a || {};
          }
          return (
            (c.prototype.all = function () {
              return this.dict;
            }),
            (c.prototype.get = function (a) {
              return this.dict[a];
            }),
            (c.prototype.extend = function (b) {
              this.dict = a.extend({}, b.all(), this.dict);
            }),
            (c._cache = {}),
            (c.loadPath = function (a) {
              if (!(a in c._cache)) {
                var d = b(a);
                c._cache[a] = d;
              }
              return new c(c._cache[a]);
            }),
            c
          );
        }),
        b.define("select2/diacritics", [], function () {
          return {
            "Ⓐ": "A",
            Ａ: "A",
            À: "A",
            Á: "A",
            Â: "A",
            Ầ: "A",
            Ấ: "A",
            Ẫ: "A",
            Ẩ: "A",
            Ã: "A",
            Ā: "A",
            Ă: "A",
            Ằ: "A",
            Ắ: "A",
            Ẵ: "A",
            Ẳ: "A",
            Ȧ: "A",
            Ǡ: "A",
            Ä: "A",
            Ǟ: "A",
            Ả: "A",
            Å: "A",
            Ǻ: "A",
            Ǎ: "A",
            Ȁ: "A",
            Ȃ: "A",
            Ạ: "A",
            Ậ: "A",
            Ặ: "A",
            Ḁ: "A",
            Ą: "A",
            Ⱥ: "A",
            Ɐ: "A",
            Ꜳ: "AA",
            Æ: "AE",
            Ǽ: "AE",
            Ǣ: "AE",
            Ꜵ: "AO",
            Ꜷ: "AU",
            Ꜹ: "AV",
            Ꜻ: "AV",
            Ꜽ: "AY",
            "Ⓑ": "B",
            Ｂ: "B",
            Ḃ: "B",
            Ḅ: "B",
            Ḇ: "B",
            Ƀ: "B",
            Ƃ: "B",
            Ɓ: "B",
            "Ⓒ": "C",
            Ｃ: "C",
            Ć: "C",
            Ĉ: "C",
            Ċ: "C",
            Č: "C",
            Ç: "C",
            Ḉ: "C",
            Ƈ: "C",
            Ȼ: "C",
            Ꜿ: "C",
            "Ⓓ": "D",
            Ｄ: "D",
            Ḋ: "D",
            Ď: "D",
            Ḍ: "D",
            Ḑ: "D",
            Ḓ: "D",
            Ḏ: "D",
            Đ: "D",
            Ƌ: "D",
            Ɗ: "D",
            Ɖ: "D",
            Ꝺ: "D",
            Ǳ: "DZ",
            Ǆ: "DZ",
            ǲ: "Dz",
            ǅ: "Dz",
            "Ⓔ": "E",
            Ｅ: "E",
            È: "E",
            É: "E",
            Ê: "E",
            Ề: "E",
            Ế: "E",
            Ễ: "E",
            Ể: "E",
            Ẽ: "E",
            Ē: "E",
            Ḕ: "E",
            Ḗ: "E",
            Ĕ: "E",
            Ė: "E",
            Ë: "E",
            Ẻ: "E",
            Ě: "E",
            Ȅ: "E",
            Ȇ: "E",
            Ẹ: "E",
            Ệ: "E",
            Ȩ: "E",
            Ḝ: "E",
            Ę: "E",
            Ḙ: "E",
            Ḛ: "E",
            Ɛ: "E",
            Ǝ: "E",
            "Ⓕ": "F",
            Ｆ: "F",
            Ḟ: "F",
            Ƒ: "F",
            Ꝼ: "F",
            "Ⓖ": "G",
            Ｇ: "G",
            Ǵ: "G",
            Ĝ: "G",
            Ḡ: "G",
            Ğ: "G",
            Ġ: "G",
            Ǧ: "G",
            Ģ: "G",
            Ǥ: "G",
            Ɠ: "G",
            Ꞡ: "G",
            Ᵹ: "G",
            Ꝿ: "G",
            "Ⓗ": "H",
            Ｈ: "H",
            Ĥ: "H",
            Ḣ: "H",
            Ḧ: "H",
            Ȟ: "H",
            Ḥ: "H",
            Ḩ: "H",
            Ḫ: "H",
            Ħ: "H",
            Ⱨ: "H",
            Ⱶ: "H",
            Ɥ: "H",
            "Ⓘ": "I",
            Ｉ: "I",
            Ì: "I",
            Í: "I",
            Î: "I",
            Ĩ: "I",
            Ī: "I",
            Ĭ: "I",
            İ: "I",
            Ï: "I",
            Ḯ: "I",
            Ỉ: "I",
            Ǐ: "I",
            Ȉ: "I",
            Ȋ: "I",
            Ị: "I",
            Į: "I",
            Ḭ: "I",
            Ɨ: "I",
            "Ⓙ": "J",
            Ｊ: "J",
            Ĵ: "J",
            Ɉ: "J",
            "Ⓚ": "K",
            Ｋ: "K",
            Ḱ: "K",
            Ǩ: "K",
            Ḳ: "K",
            Ķ: "K",
            Ḵ: "K",
            Ƙ: "K",
            Ⱪ: "K",
            Ꝁ: "K",
            Ꝃ: "K",
            Ꝅ: "K",
            Ꞣ: "K",
            "Ⓛ": "L",
            Ｌ: "L",
            Ŀ: "L",
            Ĺ: "L",
            Ľ: "L",
            Ḷ: "L",
            Ḹ: "L",
            Ļ: "L",
            Ḽ: "L",
            Ḻ: "L",
            Ł: "L",
            Ƚ: "L",
            Ɫ: "L",
            Ⱡ: "L",
            Ꝉ: "L",
            Ꝇ: "L",
            Ꞁ: "L",
            Ǉ: "LJ",
            ǈ: "Lj",
            "Ⓜ": "M",
            Ｍ: "M",
            Ḿ: "M",
            Ṁ: "M",
            Ṃ: "M",
            Ɱ: "M",
            Ɯ: "M",
            "Ⓝ": "N",
            Ｎ: "N",
            Ǹ: "N",
            Ń: "N",
            Ñ: "N",
            Ṅ: "N",
            Ň: "N",
            Ṇ: "N",
            Ņ: "N",
            Ṋ: "N",
            Ṉ: "N",
            Ƞ: "N",
            Ɲ: "N",
            Ꞑ: "N",
            Ꞥ: "N",
            Ǌ: "NJ",
            ǋ: "Nj",
            "Ⓞ": "O",
            Ｏ: "O",
            Ò: "O",
            Ó: "O",
            Ô: "O",
            Ồ: "O",
            Ố: "O",
            Ỗ: "O",
            Ổ: "O",
            Õ: "O",
            Ṍ: "O",
            Ȭ: "O",
            Ṏ: "O",
            Ō: "O",
            Ṑ: "O",
            Ṓ: "O",
            Ŏ: "O",
            Ȯ: "O",
            Ȱ: "O",
            Ö: "O",
            Ȫ: "O",
            Ỏ: "O",
            Ő: "O",
            Ǒ: "O",
            Ȍ: "O",
            Ȏ: "O",
            Ơ: "O",
            Ờ: "O",
            Ớ: "O",
            Ỡ: "O",
            Ở: "O",
            Ợ: "O",
            Ọ: "O",
            Ộ: "O",
            Ǫ: "O",
            Ǭ: "O",
            Ø: "O",
            Ǿ: "O",
            Ɔ: "O",
            Ɵ: "O",
            Ꝋ: "O",
            Ꝍ: "O",
            Ƣ: "OI",
            Ꝏ: "OO",
            Ȣ: "OU",
            "Ⓟ": "P",
            Ｐ: "P",
            Ṕ: "P",
            Ṗ: "P",
            Ƥ: "P",
            Ᵽ: "P",
            Ꝑ: "P",
            Ꝓ: "P",
            Ꝕ: "P",
            "Ⓠ": "Q",
            Ｑ: "Q",
            Ꝗ: "Q",
            Ꝙ: "Q",
            Ɋ: "Q",
            "Ⓡ": "R",
            Ｒ: "R",
            Ŕ: "R",
            Ṙ: "R",
            Ř: "R",
            Ȑ: "R",
            Ȓ: "R",
            Ṛ: "R",
            Ṝ: "R",
            Ŗ: "R",
            Ṟ: "R",
            Ɍ: "R",
            Ɽ: "R",
            Ꝛ: "R",
            Ꞧ: "R",
            Ꞃ: "R",
            "Ⓢ": "S",
            Ｓ: "S",
            ẞ: "S",
            Ś: "S",
            Ṥ: "S",
            Ŝ: "S",
            Ṡ: "S",
            Š: "S",
            Ṧ: "S",
            Ṣ: "S",
            Ṩ: "S",
            Ș: "S",
            Ş: "S",
            Ȿ: "S",
            Ꞩ: "S",
            Ꞅ: "S",
            "Ⓣ": "T",
            Ｔ: "T",
            Ṫ: "T",
            Ť: "T",
            Ṭ: "T",
            Ț: "T",
            Ţ: "T",
            Ṱ: "T",
            Ṯ: "T",
            Ŧ: "T",
            Ƭ: "T",
            Ʈ: "T",
            Ⱦ: "T",
            Ꞇ: "T",
            Ꜩ: "TZ",
            "Ⓤ": "U",
            Ｕ: "U",
            Ù: "U",
            Ú: "U",
            Û: "U",
            Ũ: "U",
            Ṹ: "U",
            Ū: "U",
            Ṻ: "U",
            Ŭ: "U",
            Ü: "U",
            Ǜ: "U",
            Ǘ: "U",
            Ǖ: "U",
            Ǚ: "U",
            Ủ: "U",
            Ů: "U",
            Ű: "U",
            Ǔ: "U",
            Ȕ: "U",
            Ȗ: "U",
            Ư: "U",
            Ừ: "U",
            Ứ: "U",
            Ữ: "U",
            Ử: "U",
            Ự: "U",
            Ụ: "U",
            Ṳ: "U",
            Ų: "U",
            Ṷ: "U",
            Ṵ: "U",
            Ʉ: "U",
            "Ⓥ": "V",
            Ｖ: "V",
            Ṽ: "V",
            Ṿ: "V",
            Ʋ: "V",
            Ꝟ: "V",
            Ʌ: "V",
            Ꝡ: "VY",
            "Ⓦ": "W",
            Ｗ: "W",
            Ẁ: "W",
            Ẃ: "W",
            Ŵ: "W",
            Ẇ: "W",
            Ẅ: "W",
            Ẉ: "W",
            Ⱳ: "W",
            "Ⓧ": "X",
            Ｘ: "X",
            Ẋ: "X",
            Ẍ: "X",
            "Ⓨ": "Y",
            Ｙ: "Y",
            Ỳ: "Y",
            Ý: "Y",
            Ŷ: "Y",
            Ỹ: "Y",
            Ȳ: "Y",
            Ẏ: "Y",
            Ÿ: "Y",
            Ỷ: "Y",
            Ỵ: "Y",
            Ƴ: "Y",
            Ɏ: "Y",
            Ỿ: "Y",
            "Ⓩ": "Z",
            Ｚ: "Z",
            Ź: "Z",
            Ẑ: "Z",
            Ż: "Z",
            Ž: "Z",
            Ẓ: "Z",
            Ẕ: "Z",
            Ƶ: "Z",
            Ȥ: "Z",
            Ɀ: "Z",
            Ⱬ: "Z",
            Ꝣ: "Z",
            "ⓐ": "a",
            ａ: "a",
            ẚ: "a",
            à: "a",
            á: "a",
            â: "a",
            ầ: "a",
            ấ: "a",
            ẫ: "a",
            ẩ: "a",
            ã: "a",
            ā: "a",
            ă: "a",
            ằ: "a",
            ắ: "a",
            ẵ: "a",
            ẳ: "a",
            ȧ: "a",
            ǡ: "a",
            ä: "a",
            ǟ: "a",
            ả: "a",
            å: "a",
            ǻ: "a",
            ǎ: "a",
            ȁ: "a",
            ȃ: "a",
            ạ: "a",
            ậ: "a",
            ặ: "a",
            ḁ: "a",
            ą: "a",
            ⱥ: "a",
            ɐ: "a",
            ꜳ: "aa",
            æ: "ae",
            ǽ: "ae",
            ǣ: "ae",
            ꜵ: "ao",
            ꜷ: "au",
            ꜹ: "av",
            ꜻ: "av",
            ꜽ: "ay",
            "ⓑ": "b",
            ｂ: "b",
            ḃ: "b",
            ḅ: "b",
            ḇ: "b",
            ƀ: "b",
            ƃ: "b",
            ɓ: "b",
            "ⓒ": "c",
            ｃ: "c",
            ć: "c",
            ĉ: "c",
            ċ: "c",
            č: "c",
            ç: "c",
            ḉ: "c",
            ƈ: "c",
            ȼ: "c",
            ꜿ: "c",
            ↄ: "c",
            "ⓓ": "d",
            ｄ: "d",
            ḋ: "d",
            ď: "d",
            ḍ: "d",
            ḑ: "d",
            ḓ: "d",
            ḏ: "d",
            đ: "d",
            ƌ: "d",
            ɖ: "d",
            ɗ: "d",
            ꝺ: "d",
            ǳ: "dz",
            ǆ: "dz",
            "ⓔ": "e",
            ｅ: "e",
            è: "e",
            é: "e",
            ê: "e",
            ề: "e",
            ế: "e",
            ễ: "e",
            ể: "e",
            ẽ: "e",
            ē: "e",
            ḕ: "e",
            ḗ: "e",
            ĕ: "e",
            ė: "e",
            ë: "e",
            ẻ: "e",
            ě: "e",
            ȅ: "e",
            ȇ: "e",
            ẹ: "e",
            ệ: "e",
            ȩ: "e",
            ḝ: "e",
            ę: "e",
            ḙ: "e",
            ḛ: "e",
            ɇ: "e",
            ɛ: "e",
            ǝ: "e",
            "ⓕ": "f",
            ｆ: "f",
            ḟ: "f",
            ƒ: "f",
            ꝼ: "f",
            "ⓖ": "g",
            ｇ: "g",
            ǵ: "g",
            ĝ: "g",
            ḡ: "g",
            ğ: "g",
            ġ: "g",
            ǧ: "g",
            ģ: "g",
            ǥ: "g",
            ɠ: "g",
            ꞡ: "g",
            ᵹ: "g",
            ꝿ: "g",
            "ⓗ": "h",
            ｈ: "h",
            ĥ: "h",
            ḣ: "h",
            ḧ: "h",
            ȟ: "h",
            ḥ: "h",
            ḩ: "h",
            ḫ: "h",
            ẖ: "h",
            ħ: "h",
            ⱨ: "h",
            ⱶ: "h",
            ɥ: "h",
            ƕ: "hv",
            "ⓘ": "i",
            ｉ: "i",
            ì: "i",
            í: "i",
            î: "i",
            ĩ: "i",
            ī: "i",
            ĭ: "i",
            ï: "i",
            ḯ: "i",
            ỉ: "i",
            ǐ: "i",
            ȉ: "i",
            ȋ: "i",
            ị: "i",
            į: "i",
            ḭ: "i",
            ɨ: "i",
            ı: "i",
            "ⓙ": "j",
            ｊ: "j",
            ĵ: "j",
            ǰ: "j",
            ɉ: "j",
            "ⓚ": "k",
            ｋ: "k",
            ḱ: "k",
            ǩ: "k",
            ḳ: "k",
            ķ: "k",
            ḵ: "k",
            ƙ: "k",
            ⱪ: "k",
            ꝁ: "k",
            ꝃ: "k",
            ꝅ: "k",
            ꞣ: "k",
            "ⓛ": "l",
            ｌ: "l",
            ŀ: "l",
            ĺ: "l",
            ľ: "l",
            ḷ: "l",
            ḹ: "l",
            ļ: "l",
            ḽ: "l",
            ḻ: "l",
            ſ: "l",
            ł: "l",
            ƚ: "l",
            ɫ: "l",
            ⱡ: "l",
            ꝉ: "l",
            ꞁ: "l",
            ꝇ: "l",
            ǉ: "lj",
            "ⓜ": "m",
            ｍ: "m",
            ḿ: "m",
            ṁ: "m",
            ṃ: "m",
            ɱ: "m",
            ɯ: "m",
            "ⓝ": "n",
            ｎ: "n",
            ǹ: "n",
            ń: "n",
            ñ: "n",
            ṅ: "n",
            ň: "n",
            ṇ: "n",
            ņ: "n",
            ṋ: "n",
            ṉ: "n",
            ƞ: "n",
            ɲ: "n",
            ŉ: "n",
            ꞑ: "n",
            ꞥ: "n",
            ǌ: "nj",
            "ⓞ": "o",
            ｏ: "o",
            ò: "o",
            ó: "o",
            ô: "o",
            ồ: "o",
            ố: "o",
            ỗ: "o",
            ổ: "o",
            õ: "o",
            ṍ: "o",
            ȭ: "o",
            ṏ: "o",
            ō: "o",
            ṑ: "o",
            ṓ: "o",
            ŏ: "o",
            ȯ: "o",
            ȱ: "o",
            ö: "o",
            ȫ: "o",
            ỏ: "o",
            ő: "o",
            ǒ: "o",
            ȍ: "o",
            ȏ: "o",
            ơ: "o",
            ờ: "o",
            ớ: "o",
            ỡ: "o",
            ở: "o",
            ợ: "o",
            ọ: "o",
            ộ: "o",
            ǫ: "o",
            ǭ: "o",
            ø: "o",
            ǿ: "o",
            ɔ: "o",
            ꝋ: "o",
            ꝍ: "o",
            ɵ: "o",
            ƣ: "oi",
            ȣ: "ou",
            ꝏ: "oo",
            "ⓟ": "p",
            ｐ: "p",
            ṕ: "p",
            ṗ: "p",
            ƥ: "p",
            ᵽ: "p",
            ꝑ: "p",
            ꝓ: "p",
            ꝕ: "p",
            "ⓠ": "q",
            ｑ: "q",
            ɋ: "q",
            ꝗ: "q",
            ꝙ: "q",
            "ⓡ": "r",
            ｒ: "r",
            ŕ: "r",
            ṙ: "r",
            ř: "r",
            ȑ: "r",
            ȓ: "r",
            ṛ: "r",
            ṝ: "r",
            ŗ: "r",
            ṟ: "r",
            ɍ: "r",
            ɽ: "r",
            ꝛ: "r",
            ꞧ: "r",
            ꞃ: "r",
            "ⓢ": "s",
            ｓ: "s",
            ß: "s",
            ś: "s",
            ṥ: "s",
            ŝ: "s",
            ṡ: "s",
            š: "s",
            ṧ: "s",
            ṣ: "s",
            ṩ: "s",
            ș: "s",
            ş: "s",
            ȿ: "s",
            ꞩ: "s",
            ꞅ: "s",
            ẛ: "s",
            "ⓣ": "t",
            ｔ: "t",
            ṫ: "t",
            ẗ: "t",
            ť: "t",
            ṭ: "t",
            ț: "t",
            ţ: "t",
            ṱ: "t",
            ṯ: "t",
            ŧ: "t",
            ƭ: "t",
            ʈ: "t",
            ⱦ: "t",
            ꞇ: "t",
            ꜩ: "tz",
            "ⓤ": "u",
            ｕ: "u",
            ù: "u",
            ú: "u",
            û: "u",
            ũ: "u",
            ṹ: "u",
            ū: "u",
            ṻ: "u",
            ŭ: "u",
            ü: "u",
            ǜ: "u",
            ǘ: "u",
            ǖ: "u",
            ǚ: "u",
            ủ: "u",
            ů: "u",
            ű: "u",
            ǔ: "u",
            ȕ: "u",
            ȗ: "u",
            ư: "u",
            ừ: "u",
            ứ: "u",
            ữ: "u",
            ử: "u",
            ự: "u",
            ụ: "u",
            ṳ: "u",
            ų: "u",
            ṷ: "u",
            ṵ: "u",
            ʉ: "u",
            "ⓥ": "v",
            ｖ: "v",
            ṽ: "v",
            ṿ: "v",
            ʋ: "v",
            ꝟ: "v",
            ʌ: "v",
            ꝡ: "vy",
            "ⓦ": "w",
            ｗ: "w",
            ẁ: "w",
            ẃ: "w",
            ŵ: "w",
            ẇ: "w",
            ẅ: "w",
            ẘ: "w",
            ẉ: "w",
            ⱳ: "w",
            "ⓧ": "x",
            ｘ: "x",
            ẋ: "x",
            ẍ: "x",
            "ⓨ": "y",
            ｙ: "y",
            ỳ: "y",
            ý: "y",
            ŷ: "y",
            ỹ: "y",
            ȳ: "y",
            ẏ: "y",
            ÿ: "y",
            ỷ: "y",
            ẙ: "y",
            ỵ: "y",
            ƴ: "y",
            ɏ: "y",
            ỿ: "y",
            "ⓩ": "z",
            ｚ: "z",
            ź: "z",
            ẑ: "z",
            ż: "z",
            ž: "z",
            ẓ: "z",
            ẕ: "z",
            ƶ: "z",
            ȥ: "z",
            ɀ: "z",
            ⱬ: "z",
            ꝣ: "z",
            Ά: "Α",
            Έ: "Ε",
            Ή: "Η",
            Ί: "Ι",
            Ϊ: "Ι",
            Ό: "Ο",
            Ύ: "Υ",
            Ϋ: "Υ",
            Ώ: "Ω",
            ά: "α",
            έ: "ε",
            ή: "η",
            ί: "ι",
            ϊ: "ι",
            ΐ: "ι",
            ό: "ο",
            ύ: "υ",
            ϋ: "υ",
            ΰ: "υ",
            ω: "ω",
            ς: "σ",
          };
        }),
        b.define("select2/data/base", ["../utils"], function (a) {
          function b(a, c) {
            b.__super__.constructor.call(this);
          }
          return (
            a.Extend(b, a.Observable),
            (b.prototype.current = function (a) {
              throw new Error(
                "The `current` method must be defined in child classes."
              );
            }),
            (b.prototype.query = function (a, b) {
              throw new Error(
                "The `query` method must be defined in child classes."
              );
            }),
            (b.prototype.bind = function (a, b) {}),
            (b.prototype.destroy = function () {}),
            (b.prototype.generateResultId = function (b, c) {
              var d = b.id + "-result-";
              return (
                (d += a.generateChars(4)),
                null != c.id
                  ? (d += "-" + c.id.toString())
                  : (d += "-" + a.generateChars(4)),
                d
              );
            }),
            b
          );
        }),
        b.define(
          "select2/data/select",
          ["./base", "../utils", "jquery"],
          function (a, b, c) {
            function d(a, b) {
              (this.$element = a),
                (this.options = b),
                d.__super__.constructor.call(this);
            }
            return (
              b.Extend(d, a),
              (d.prototype.current = function (a) {
                var b = [],
                  d = this;
                this.$element.find(":selected").each(function () {
                  var a = c(this),
                    e = d.item(a);
                  b.push(e);
                }),
                  a(b);
              }),
              (d.prototype.select = function (a) {
                var b = this;
                if (((a.selected = !0), c(a.element).is("option")))
                  return (
                    (a.element.selected = !0),
                    void this.$element.trigger("change")
                  );
                if (this.$element.prop("multiple"))
                  this.current(function (d) {
                    var e = [];
                    (a = [a]), a.push.apply(a, d);
                    for (var f = 0; f < a.length; f++) {
                      var g = a[f].id;
                      -1 === c.inArray(g, e) && e.push(g);
                    }
                    b.$element.val(e), b.$element.trigger("change");
                  });
                else {
                  var d = a.id;
                  this.$element.val(d), this.$element.trigger("change");
                }
              }),
              (d.prototype.unselect = function (a) {
                var b = this;
                if (this.$element.prop("multiple")) {
                  if (((a.selected = !1), c(a.element).is("option")))
                    return (
                      (a.element.selected = !1),
                      void this.$element.trigger("change")
                    );
                  this.current(function (d) {
                    for (var e = [], f = 0; f < d.length; f++) {
                      var g = d[f].id;
                      g !== a.id && -1 === c.inArray(g, e) && e.push(g);
                    }
                    b.$element.val(e), b.$element.trigger("change");
                  });
                }
              }),
              (d.prototype.bind = function (a, b) {
                var c = this;
                (this.container = a),
                  a.on("select", function (a) {
                    c.select(a.data);
                  }),
                  a.on("unselect", function (a) {
                    c.unselect(a.data);
                  });
              }),
              (d.prototype.destroy = function () {
                this.$element.find("*").each(function () {
                  b.RemoveData(this);
                });
              }),
              (d.prototype.query = function (a, b) {
                var d = [],
                  e = this;
                this.$element.children().each(function () {
                  var b = c(this);
                  if (b.is("option") || b.is("optgroup")) {
                    var f = e.item(b),
                      g = e.matches(a, f);
                    null !== g && d.push(g);
                  }
                }),
                  b({ results: d });
              }),
              (d.prototype.addOptions = function (a) {
                b.appendMany(this.$element, a);
              }),
              (d.prototype.option = function (a) {
                var d;
                a.children
                  ? ((d = document.createElement("optgroup")),
                    (d.label = a.text))
                  : ((d = document.createElement("option")),
                    void 0 !== d.textContent
                      ? (d.textContent = a.text)
                      : (d.innerText = a.text)),
                  void 0 !== a.id && (d.value = a.id),
                  a.disabled && (d.disabled = !0),
                  a.selected && (d.selected = !0),
                  a.title && (d.title = a.title);
                var e = c(d),
                  f = this._normalizeItem(a);
                return (f.element = d), b.StoreData(d, "data", f), e;
              }),
              (d.prototype.item = function (a) {
                var d = {};
                if (null != (d = b.GetData(a[0], "data"))) return d;
                if (a.is("option"))
                  d = {
                    id: a.val(),
                    text: a.text(),
                    disabled: a.prop("disabled"),
                    selected: a.prop("selected"),
                    title: a.prop("title"),
                  };
                else if (a.is("optgroup")) {
                  d = {
                    text: a.prop("label"),
                    children: [],
                    title: a.prop("title"),
                  };
                  for (
                    var e = a.children("option"), f = [], g = 0;
                    g < e.length;
                    g++
                  ) {
                    var h = c(e[g]),
                      i = this.item(h);
                    f.push(i);
                  }
                  d.children = f;
                }
                return (
                  (d = this._normalizeItem(d)),
                  (d.element = a[0]),
                  b.StoreData(a[0], "data", d),
                  d
                );
              }),
              (d.prototype._normalizeItem = function (a) {
                a !== Object(a) && (a = { id: a, text: a }),
                  (a = c.extend({}, { text: "" }, a));
                var b = { selected: !1, disabled: !1 };
                return (
                  null != a.id && (a.id = a.id.toString()),
                  null != a.text && (a.text = a.text.toString()),
                  null == a._resultId &&
                    a.id &&
                    null != this.container &&
                    (a._resultId = this.generateResultId(this.container, a)),
                  c.extend({}, b, a)
                );
              }),
              (d.prototype.matches = function (a, b) {
                return this.options.get("matcher")(a, b);
              }),
              d
            );
          }
        ),
        b.define(
          "select2/data/array",
          ["./select", "../utils", "jquery"],
          function (a, b, c) {
            function d(a, b) {
              var c = b.get("data") || [];
              d.__super__.constructor.call(this, a, b),
                this.addOptions(this.convertToOptions(c));
            }
            return (
              b.Extend(d, a),
              (d.prototype.select = function (a) {
                var b = this.$element.find("option").filter(function (b, c) {
                  return c.value == a.id.toString();
                });
                0 === b.length && ((b = this.option(a)), this.addOptions(b)),
                  d.__super__.select.call(this, a);
              }),
              (d.prototype.convertToOptions = function (a) {
                function d(a) {
                  return function () {
                    return c(this).val() == a.id;
                  };
                }
                for (
                  var e = this,
                    f = this.$element.find("option"),
                    g = f
                      .map(function () {
                        return e.item(c(this)).id;
                      })
                      .get(),
                    h = [],
                    i = 0;
                  i < a.length;
                  i++
                ) {
                  var j = this._normalizeItem(a[i]);
                  if (c.inArray(j.id, g) >= 0) {
                    var k = f.filter(d(j)),
                      l = this.item(k),
                      m = c.extend(!0, {}, j, l),
                      n = this.option(m);
                    k.replaceWith(n);
                  } else {
                    var o = this.option(j);
                    if (j.children) {
                      var p = this.convertToOptions(j.children);
                      b.appendMany(o, p);
                    }
                    h.push(o);
                  }
                }
                return h;
              }),
              d
            );
          }
        ),
        b.define(
          "select2/data/ajax",
          ["./array", "../utils", "jquery"],
          function (a, b, c) {
            function d(a, b) {
              (this.ajaxOptions = this._applyDefaults(b.get("ajax"))),
                null != this.ajaxOptions.processResults &&
                  (this.processResults = this.ajaxOptions.processResults),
                d.__super__.constructor.call(this, a, b);
            }
            return (
              b.Extend(d, a),
              (d.prototype._applyDefaults = function (a) {
                var b = {
                  data: function (a) {
                    return c.extend({}, a, { q: a.term });
                  },
                  transport: function (a, b, d) {
                    var e = c.ajax(a);
                    return e.then(b), e.fail(d), e;
                  },
                };
                return c.extend({}, b, a, !0);
              }),
              (d.prototype.processResults = function (a) {
                return a;
              }),
              (d.prototype.query = function (a, b) {
                function d() {
                  var d = f.transport(
                    f,
                    function (d) {
                      var f = e.processResults(d, a);
                      e.options.get("debug") &&
                        window.console &&
                        console.error &&
                        ((f && f.results && c.isArray(f.results)) ||
                          console.error(
                            "Select2: The AJAX results did not return an array in the `results` key of the response."
                          )),
                        b(f);
                    },
                    function () {
                      ("status" in d && (0 === d.status || "0" === d.status)) ||
                        e.trigger("results:message", {
                          message: "errorLoading",
                        });
                    }
                  );
                  e._request = d;
                }
                var e = this;
                null != this._request &&
                  (c.isFunction(this._request.abort) && this._request.abort(),
                  (this._request = null));
                var f = c.extend({ type: "GET" }, this.ajaxOptions);
                "function" == typeof f.url &&
                  (f.url = f.url.call(this.$element, a)),
                  "function" == typeof f.data &&
                    (f.data = f.data.call(this.$element, a)),
                  this.ajaxOptions.delay && null != a.term
                    ? (this._queryTimeout &&
                        window.clearTimeout(this._queryTimeout),
                      (this._queryTimeout = window.setTimeout(
                        d,
                        this.ajaxOptions.delay
                      )))
                    : d();
              }),
              d
            );
          }
        ),
        b.define("select2/data/tags", ["jquery"], function (a) {
          function b(b, c, d) {
            var e = d.get("tags"),
              f = d.get("createTag");
            void 0 !== f && (this.createTag = f);
            var g = d.get("insertTag");
            if (
              (void 0 !== g && (this.insertTag = g),
              b.call(this, c, d),
              a.isArray(e))
            )
              for (var h = 0; h < e.length; h++) {
                var i = e[h],
                  j = this._normalizeItem(i),
                  k = this.option(j);
                this.$element.append(k);
              }
          }
          return (
            (b.prototype.query = function (a, b, c) {
              function d(a, f) {
                for (var g = a.results, h = 0; h < g.length; h++) {
                  var i = g[h],
                    j = null != i.children && !d({ results: i.children }, !0);
                  if (
                    (i.text || "").toUpperCase() ===
                      (b.term || "").toUpperCase() ||
                    j
                  )
                    return !f && ((a.data = g), void c(a));
                }
                if (f) return !0;
                var k = e.createTag(b);
                if (null != k) {
                  var l = e.option(k);
                  l.attr("data-select2-tag", !0),
                    e.addOptions([l]),
                    e.insertTag(g, k);
                }
                (a.results = g), c(a);
              }
              var e = this;
              if ((this._removeOldTags(), null == b.term || null != b.page))
                return void a.call(this, b, c);
              a.call(this, b, d);
            }),
            (b.prototype.createTag = function (b, c) {
              var d = a.trim(c.term);
              return "" === d ? null : { id: d, text: d };
            }),
            (b.prototype.insertTag = function (a, b, c) {
              b.unshift(c);
            }),
            (b.prototype._removeOldTags = function (b) {
              this._lastTag;
              this.$element.find("option[data-select2-tag]").each(function () {
                this.selected || a(this).remove();
              });
            }),
            b
          );
        }),
        b.define("select2/data/tokenizer", ["jquery"], function (a) {
          function b(a, b, c) {
            var d = c.get("tokenizer");
            void 0 !== d && (this.tokenizer = d), a.call(this, b, c);
          }
          return (
            (b.prototype.bind = function (a, b, c) {
              a.call(this, b, c),
                (this.$search =
                  b.dropdown.$search ||
                  b.selection.$search ||
                  c.find(".select2-search__field"));
            }),
            (b.prototype.query = function (b, c, d) {
              function e(b) {
                var c = g._normalizeItem(b);
                if (
                  !g.$element.find("option").filter(function () {
                    return a(this).val() === c.id;
                  }).length
                ) {
                  var d = g.option(c);
                  d.attr("data-select2-tag", !0),
                    g._removeOldTags(),
                    g.addOptions([d]);
                }
                f(c);
              }
              function f(a) {
                g.trigger("select", { data: a });
              }
              var g = this;
              c.term = c.term || "";
              var h = this.tokenizer(c, this.options, e);
              h.term !== c.term &&
                (this.$search.length &&
                  (this.$search.val(h.term), this.$search.focus()),
                (c.term = h.term)),
                b.call(this, c, d);
            }),
            (b.prototype.tokenizer = function (b, c, d, e) {
              for (
                var f = d.get("tokenSeparators") || [],
                  g = c.term,
                  h = 0,
                  i =
                    this.createTag ||
                    function (a) {
                      return { id: a.term, text: a.term };
                    };
                h < g.length;

              ) {
                var j = g[h];
                if (-1 !== a.inArray(j, f)) {
                  var k = g.substr(0, h),
                    l = a.extend({}, c, { term: k }),
                    m = i(l);
                  null != m
                    ? (e(m), (g = g.substr(h + 1) || ""), (h = 0))
                    : h++;
                } else h++;
              }
              return { term: g };
            }),
            b
          );
        }),
        b.define("select2/data/minimumInputLength", [], function () {
          function a(a, b, c) {
            (this.minimumInputLength = c.get("minimumInputLength")),
              a.call(this, b, c);
          }
          return (
            (a.prototype.query = function (a, b, c) {
              if (
                ((b.term = b.term || ""),
                b.term.length < this.minimumInputLength)
              )
                return void this.trigger("results:message", {
                  message: "inputTooShort",
                  args: {
                    minimum: this.minimumInputLength,
                    input: b.term,
                    params: b,
                  },
                });
              a.call(this, b, c);
            }),
            a
          );
        }),
        b.define("select2/data/maximumInputLength", [], function () {
          function a(a, b, c) {
            (this.maximumInputLength = c.get("maximumInputLength")),
              a.call(this, b, c);
          }
          return (
            (a.prototype.query = function (a, b, c) {
              if (
                ((b.term = b.term || ""),
                this.maximumInputLength > 0 &&
                  b.term.length > this.maximumInputLength)
              )
                return void this.trigger("results:message", {
                  message: "inputTooLong",
                  args: {
                    maximum: this.maximumInputLength,
                    input: b.term,
                    params: b,
                  },
                });
              a.call(this, b, c);
            }),
            a
          );
        }),
        b.define("select2/data/maximumSelectionLength", [], function () {
          function a(a, b, c) {
            (this.maximumSelectionLength = c.get("maximumSelectionLength")),
              a.call(this, b, c);
          }
          return (
            (a.prototype.query = function (a, b, c) {
              var d = this;
              this.current(function (e) {
                var f = null != e ? e.length : 0;
                if (
                  d.maximumSelectionLength > 0 &&
                  f >= d.maximumSelectionLength
                )
                  return void d.trigger("results:message", {
                    message: "maximumSelected",
                    args: { maximum: d.maximumSelectionLength },
                  });
                a.call(d, b, c);
              });
            }),
            a
          );
        }),
        b.define("select2/dropdown", ["jquery", "./utils"], function (a, b) {
          function c(a, b) {
            (this.$element = a),
              (this.options = b),
              c.__super__.constructor.call(this);
          }
          return (
            b.Extend(c, b.Observable),
            (c.prototype.render = function () {
              var b = a(
                '<span class="select2-dropdown"><span class="select2-results"></span></span>'
              );
              return (
                b.attr("dir", this.options.get("dir")), (this.$dropdown = b), b
              );
            }),
            (c.prototype.bind = function () {}),
            (c.prototype.position = function (a, b) {}),
            (c.prototype.destroy = function () {
              this.$dropdown.remove();
            }),
            c
          );
        }),
        b.define(
          "select2/dropdown/search",
          ["jquery", "../utils"],
          function (a, b) {
            function c() {}
            return (
              (c.prototype.render = function (b) {
                var c = b.call(this),
                  d = a(
                    '<span class="select2-search select2-search--dropdown"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" role="textbox" /></span>'
                  );
                return (
                  (this.$searchContainer = d),
                  (this.$search = d.find("input")),
                  c.prepend(d),
                  c
                );
              }),
              (c.prototype.bind = function (b, c, d) {
                var e = this;
                b.call(this, c, d),
                  this.$search.on("keydown", function (a) {
                    e.trigger("keypress", a),
                      (e._keyUpPrevented = a.isDefaultPrevented());
                  }),
                  this.$search.on("input", function (b) {
                    a(this).off("keyup");
                  }),
                  this.$search.on("keyup input", function (a) {
                    e.handleSearch(a);
                  }),
                  c.on("open", function () {
                    e.$search.attr("tabindex", 0),
                      e.$search.focus(),
                      window.setTimeout(function () {
                        e.$search.focus();
                      }, 0);
                  }),
                  c.on("close", function () {
                    e.$search.attr("tabindex", -1),
                      e.$search.val(""),
                      e.$search.blur();
                  }),
                  c.on("focus", function () {
                    c.isOpen() || e.$search.focus();
                  }),
                  c.on("results:all", function (a) {
                    if (null == a.query.term || "" === a.query.term) {
                      e.showSearch(a)
                        ? e.$searchContainer.removeClass("select2-search--hide")
                        : e.$searchContainer.addClass("select2-search--hide");
                    }
                  });
              }),
              (c.prototype.handleSearch = function (a) {
                if (!this._keyUpPrevented) {
                  var b = this.$search.val();
                  this.trigger("query", { term: b });
                }
                this._keyUpPrevented = !1;
              }),
              (c.prototype.showSearch = function (a, b) {
                return !0;
              }),
              c
            );
          }
        ),
        b.define("select2/dropdown/hidePlaceholder", [], function () {
          function a(a, b, c, d) {
            (this.placeholder = this.normalizePlaceholder(
              c.get("placeholder")
            )),
              a.call(this, b, c, d);
          }
          return (
            (a.prototype.append = function (a, b) {
              (b.results = this.removePlaceholder(b.results)), a.call(this, b);
            }),
            (a.prototype.normalizePlaceholder = function (a, b) {
              return "string" == typeof b && (b = { id: "", text: b }), b;
            }),
            (a.prototype.removePlaceholder = function (a, b) {
              for (var c = b.slice(0), d = b.length - 1; d >= 0; d--) {
                var e = b[d];
                this.placeholder.id === e.id && c.splice(d, 1);
              }
              return c;
            }),
            a
          );
        }),
        b.define("select2/dropdown/infiniteScroll", ["jquery"], function (a) {
          function b(a, b, c, d) {
            (this.lastParams = {}),
              a.call(this, b, c, d),
              (this.$loadingMore = this.createLoadingMore()),
              (this.loading = !1);
          }
          return (
            (b.prototype.append = function (a, b) {
              this.$loadingMore.remove(),
                (this.loading = !1),
                a.call(this, b),
                this.showLoadingMore(b) &&
                  this.$results.append(this.$loadingMore);
            }),
            (b.prototype.bind = function (b, c, d) {
              var e = this;
              b.call(this, c, d),
                c.on("query", function (a) {
                  (e.lastParams = a), (e.loading = !0);
                }),
                c.on("query:append", function (a) {
                  (e.lastParams = a), (e.loading = !0);
                }),
                this.$results.on("scroll", function () {
                  var b = a.contains(
                    document.documentElement,
                    e.$loadingMore[0]
                  );
                  if (!e.loading && b) {
                    e.$results.offset().top + e.$results.outerHeight(!1) + 50 >=
                      e.$loadingMore.offset().top +
                        e.$loadingMore.outerHeight(!1) && e.loadMore();
                  }
                });
            }),
            (b.prototype.loadMore = function () {
              this.loading = !0;
              var b = a.extend({}, { page: 1 }, this.lastParams);
              b.page++, this.trigger("query:append", b);
            }),
            (b.prototype.showLoadingMore = function (a, b) {
              return b.pagination && b.pagination.more;
            }),
            (b.prototype.createLoadingMore = function () {
              var b = a(
                  '<li class="select2-results__option select2-results__option--load-more"role="treeitem" aria-disabled="true"></li>'
                ),
                c = this.options.get("translations").get("loadingMore");
              return b.html(c(this.lastParams)), b;
            }),
            b
          );
        }),
        b.define(
          "select2/dropdown/attachBody",
          ["jquery", "../utils"],
          function (a, b) {
            function c(b, c, d) {
              (this.$dropdownParent =
                d.get("dropdownParent") || a(document.body)),
                b.call(this, c, d);
            }
            return (
              (c.prototype.bind = function (a, b, c) {
                var d = this,
                  e = !1;
                a.call(this, b, c),
                  b.on("open", function () {
                    d._showDropdown(),
                      d._attachPositioningHandler(b),
                      e ||
                        ((e = !0),
                        b.on("results:all", function () {
                          d._positionDropdown(), d._resizeDropdown();
                        }),
                        b.on("results:append", function () {
                          d._positionDropdown(), d._resizeDropdown();
                        }));
                  }),
                  b.on("close", function () {
                    d._hideDropdown(), d._detachPositioningHandler(b);
                  }),
                  this.$dropdownContainer.on("mousedown", function (a) {
                    a.stopPropagation();
                  });
              }),
              (c.prototype.destroy = function (a) {
                a.call(this), this.$dropdownContainer.remove();
              }),
              (c.prototype.position = function (a, b, c) {
                b.attr("class", c.attr("class")),
                  b.removeClass("select2"),
                  b.addClass("select2-container--open"),
                  b.css({ position: "absolute", top: -999999 }),
                  (this.$container = c);
              }),
              (c.prototype.render = function (b) {
                var c = a("<span></span>"),
                  d = b.call(this);
                return c.append(d), (this.$dropdownContainer = c), c;
              }),
              (c.prototype._hideDropdown = function (a) {
                this.$dropdownContainer.detach();
              }),
              (c.prototype._attachPositioningHandler = function (c, d) {
                var e = this,
                  f = "scroll.select2." + d.id,
                  g = "resize.select2." + d.id,
                  h = "orientationchange.select2." + d.id,
                  i = this.$container.parents().filter(b.hasScroll);
                i.each(function () {
                  b.StoreData(this, "select2-scroll-position", {
                    x: a(this).scrollLeft(),
                    y: a(this).scrollTop(),
                  });
                }),
                  i.on(f, function (c) {
                    var d = b.GetData(this, "select2-scroll-position");
                    a(this).scrollTop(d.y);
                  }),
                  a(window).on(f + " " + g + " " + h, function (a) {
                    e._positionDropdown(), e._resizeDropdown();
                  });
              }),
              (c.prototype._detachPositioningHandler = function (c, d) {
                var e = "scroll.select2." + d.id,
                  f = "resize.select2." + d.id,
                  g = "orientationchange.select2." + d.id;
                this.$container.parents().filter(b.hasScroll).off(e),
                  a(window).off(e + " " + f + " " + g);
              }),
              (c.prototype._positionDropdown = function () {
                var b = a(window),
                  c = this.$dropdown.hasClass("select2-dropdown--above"),
                  d = this.$dropdown.hasClass("select2-dropdown--below"),
                  e = null,
                  f = this.$container.offset();
                f.bottom = f.top + this.$container.outerHeight(!1);
                var g = { height: this.$container.outerHeight(!1) };
                (g.top = f.top), (g.bottom = f.top + g.height);
                var h = { height: this.$dropdown.outerHeight(!1) },
                  i = {
                    top: b.scrollTop(),
                    bottom: b.scrollTop() + b.height(),
                  },
                  j = i.top < f.top - h.height,
                  k = i.bottom > f.bottom + h.height,
                  l = { left: f.left, top: g.bottom },
                  m = this.$dropdownParent;
                "static" === m.css("position") && (m = m.offsetParent());
                var n = m.offset();
                (l.top -= n.top),
                  (l.left -= n.left),
                  c || d || (e = "below"),
                  k || !j || c ? !j && k && c && (e = "below") : (e = "above"),
                  ("above" == e || (c && "below" !== e)) &&
                    (l.top = g.top - n.top - h.height),
                  null != e &&
                    (this.$dropdown
                      .removeClass(
                        "select2-dropdown--below select2-dropdown--above"
                      )
                      .addClass("select2-dropdown--" + e),
                    this.$container
                      .removeClass(
                        "select2-container--below select2-container--above"
                      )
                      .addClass("select2-container--" + e)),
                  this.$dropdownContainer.css(l);
              }),
              (c.prototype._resizeDropdown = function () {
                var a = { width: this.$container.outerWidth(!1) + "px" };
                this.options.get("dropdownAutoWidth") &&
                  ((a.minWidth = a.width),
                  (a.position = "relative"),
                  (a.width = "auto")),
                  this.$dropdown.css(a);
              }),
              (c.prototype._showDropdown = function (a) {
                this.$dropdownContainer.appendTo(this.$dropdownParent),
                  this._positionDropdown(),
                  this._resizeDropdown();
              }),
              c
            );
          }
        ),
        b.define("select2/dropdown/minimumResultsForSearch", [], function () {
          function a(b) {
            for (var c = 0, d = 0; d < b.length; d++) {
              var e = b[d];
              e.children ? (c += a(e.children)) : c++;
            }
            return c;
          }
          function b(a, b, c, d) {
            (this.minimumResultsForSearch = c.get("minimumResultsForSearch")),
              this.minimumResultsForSearch < 0 &&
                (this.minimumResultsForSearch = 1 / 0),
              a.call(this, b, c, d);
          }
          return (
            (b.prototype.showSearch = function (b, c) {
              return (
                !(a(c.data.results) < this.minimumResultsForSearch) &&
                b.call(this, c)
              );
            }),
            b
          );
        }),
        b.define("select2/dropdown/selectOnClose", ["../utils"], function (a) {
          function b() {}
          return (
            (b.prototype.bind = function (a, b, c) {
              var d = this;
              a.call(this, b, c),
                b.on("close", function (a) {
                  d._handleSelectOnClose(a);
                });
            }),
            (b.prototype._handleSelectOnClose = function (b, c) {
              if (c && null != c.originalSelect2Event) {
                var d = c.originalSelect2Event;
                if ("select" === d._type || "unselect" === d._type) return;
              }
              var e = this.getHighlightedResults();
              if (!(e.length < 1)) {
                var f = a.GetData(e[0], "data");
                (null != f.element && f.element.selected) ||
                  (null == f.element && f.selected) ||
                  this.trigger("select", { data: f });
              }
            }),
            b
          );
        }),
        b.define("select2/dropdown/closeOnSelect", [], function () {
          function a() {}
          return (
            (a.prototype.bind = function (a, b, c) {
              var d = this;
              a.call(this, b, c),
                b.on("select", function (a) {
                  d._selectTriggered(a);
                }),
                b.on("unselect", function (a) {
                  d._selectTriggered(a);
                });
            }),
            (a.prototype._selectTriggered = function (a, b) {
              var c = b.originalEvent;
              (c && c.ctrlKey) ||
                this.trigger("close", {
                  originalEvent: c,
                  originalSelect2Event: b,
                });
            }),
            a
          );
        }),
        b.define("select2/i18n/en", [], function () {
          return {
            errorLoading: function () {
              return "The results could not be loaded.";
            },
            inputTooLong: function (a) {
              var b = a.input.length - a.maximum,
                c = "Please delete " + b + " character";
              return 1 != b && (c += "s"), c;
            },
            inputTooShort: function (a) {
              return (
                "Please enter " +
                (a.minimum - a.input.length) +
                " or more characters"
              );
            },
            loadingMore: function () {
              return "Loading more results…";
            },
            maximumSelected: function (a) {
              var b = "You can only select " + a.maximum + " item";
              return 1 != a.maximum && (b += "s"), b;
            },
            noResults: function () {
              return "No results found";
            },
            searching: function () {
              return "Searching…";
            },
          };
        }),
        b.define(
          "select2/defaults",
          [
            "jquery",
            "require",
            "./results",
            "./selection/single",
            "./selection/multiple",
            "./selection/placeholder",
            "./selection/allowClear",
            "./selection/search",
            "./selection/eventRelay",
            "./utils",
            "./translation",
            "./diacritics",
            "./data/select",
            "./data/array",
            "./data/ajax",
            "./data/tags",
            "./data/tokenizer",
            "./data/minimumInputLength",
            "./data/maximumInputLength",
            "./data/maximumSelectionLength",
            "./dropdown",
            "./dropdown/search",
            "./dropdown/hidePlaceholder",
            "./dropdown/infiniteScroll",
            "./dropdown/attachBody",
            "./dropdown/minimumResultsForSearch",
            "./dropdown/selectOnClose",
            "./dropdown/closeOnSelect",
            "./i18n/en",
          ],
          function (
            a,
            b,
            c,
            d,
            e,
            f,
            g,
            h,
            i,
            j,
            k,
            l,
            m,
            n,
            o,
            p,
            q,
            r,
            s,
            t,
            u,
            v,
            w,
            x,
            y,
            z,
            A,
            B,
            C
          ) {
            function D() {
              this.reset();
            }
            return (
              (D.prototype.apply = function (l) {
                if (
                  ((l = a.extend(!0, {}, this.defaults, l)),
                  null == l.dataAdapter)
                ) {
                  if (
                    (null != l.ajax
                      ? (l.dataAdapter = o)
                      : null != l.data
                      ? (l.dataAdapter = n)
                      : (l.dataAdapter = m),
                    l.minimumInputLength > 0 &&
                      (l.dataAdapter = j.Decorate(l.dataAdapter, r)),
                    l.maximumInputLength > 0 &&
                      (l.dataAdapter = j.Decorate(l.dataAdapter, s)),
                    l.maximumSelectionLength > 0 &&
                      (l.dataAdapter = j.Decorate(l.dataAdapter, t)),
                    l.tags && (l.dataAdapter = j.Decorate(l.dataAdapter, p)),
                    (null == l.tokenSeparators && null == l.tokenizer) ||
                      (l.dataAdapter = j.Decorate(l.dataAdapter, q)),
                    null != l.query)
                  ) {
                    var C = b(l.amdBase + "compat/query");
                    l.dataAdapter = j.Decorate(l.dataAdapter, C);
                  }
                  if (null != l.initSelection) {
                    var D = b(l.amdBase + "compat/initSelection");
                    l.dataAdapter = j.Decorate(l.dataAdapter, D);
                  }
                }
                if (
                  (null == l.resultsAdapter &&
                    ((l.resultsAdapter = c),
                    null != l.ajax &&
                      (l.resultsAdapter = j.Decorate(l.resultsAdapter, x)),
                    null != l.placeholder &&
                      (l.resultsAdapter = j.Decorate(l.resultsAdapter, w)),
                    l.selectOnClose &&
                      (l.resultsAdapter = j.Decorate(l.resultsAdapter, A))),
                  null == l.dropdownAdapter)
                ) {
                  if (l.multiple) l.dropdownAdapter = u;
                  else {
                    var E = j.Decorate(u, v);
                    l.dropdownAdapter = E;
                  }
                  if (
                    (0 !== l.minimumResultsForSearch &&
                      (l.dropdownAdapter = j.Decorate(l.dropdownAdapter, z)),
                    l.closeOnSelect &&
                      (l.dropdownAdapter = j.Decorate(l.dropdownAdapter, B)),
                    null != l.dropdownCssClass ||
                      null != l.dropdownCss ||
                      null != l.adaptDropdownCssClass)
                  ) {
                    var F = b(l.amdBase + "compat/dropdownCss");
                    l.dropdownAdapter = j.Decorate(l.dropdownAdapter, F);
                  }
                  l.dropdownAdapter = j.Decorate(l.dropdownAdapter, y);
                }
                if (null == l.selectionAdapter) {
                  if (
                    (l.multiple
                      ? (l.selectionAdapter = e)
                      : (l.selectionAdapter = d),
                    null != l.placeholder &&
                      (l.selectionAdapter = j.Decorate(l.selectionAdapter, f)),
                    l.allowClear &&
                      (l.selectionAdapter = j.Decorate(l.selectionAdapter, g)),
                    l.multiple &&
                      (l.selectionAdapter = j.Decorate(l.selectionAdapter, h)),
                    null != l.containerCssClass ||
                      null != l.containerCss ||
                      null != l.adaptContainerCssClass)
                  ) {
                    var G = b(l.amdBase + "compat/containerCss");
                    l.selectionAdapter = j.Decorate(l.selectionAdapter, G);
                  }
                  l.selectionAdapter = j.Decorate(l.selectionAdapter, i);
                }
                if ("string" == typeof l.language)
                  if (l.language.indexOf("-") > 0) {
                    var H = l.language.split("-"),
                      I = H[0];
                    l.language = [l.language, I];
                  } else l.language = [l.language];
                if (a.isArray(l.language)) {
                  var J = new k();
                  l.language.push("en");
                  for (var K = l.language, L = 0; L < K.length; L++) {
                    var M = K[L],
                      N = {};
                    try {
                      N = k.loadPath(M);
                    } catch (a) {
                      try {
                        (M = this.defaults.amdLanguageBase + M),
                          (N = k.loadPath(M));
                      } catch (a) {
                        l.debug &&
                          window.console &&
                          console.warn &&
                          console.warn(
                            'Select2: The language file for "' +
                              M +
                              '" could not be automatically loaded. A fallback will be used instead.'
                          );
                        continue;
                      }
                    }
                    J.extend(N);
                  }
                  l.translations = J;
                } else {
                  var O = k.loadPath(this.defaults.amdLanguageBase + "en"),
                    P = new k(l.language);
                  P.extend(O), (l.translations = P);
                }
                return l;
              }),
              (D.prototype.reset = function () {
                function b(a) {
                  function b(a) {
                    return l[a] || a;
                  }
                  return a.replace(/[^\u0000-\u007E]/g, b);
                }
                function c(d, e) {
                  if ("" === a.trim(d.term)) return e;
                  if (e.children && e.children.length > 0) {
                    for (
                      var f = a.extend(!0, {}, e), g = e.children.length - 1;
                      g >= 0;
                      g--
                    ) {
                      null == c(d, e.children[g]) && f.children.splice(g, 1);
                    }
                    return f.children.length > 0 ? f : c(d, f);
                  }
                  var h = b(e.text).toUpperCase(),
                    i = b(d.term).toUpperCase();
                  return h.indexOf(i) > -1 ? e : null;
                }
                this.defaults = {
                  amdBase: "./",
                  amdLanguageBase: "./i18n/",
                  closeOnSelect: !0,
                  debug: !1,
                  dropdownAutoWidth: !1,
                  escapeMarkup: j.escapeMarkup,
                  language: C,
                  matcher: c,
                  minimumInputLength: 0,
                  maximumInputLength: 0,
                  maximumSelectionLength: 0,
                  minimumResultsForSearch: 0,
                  selectOnClose: !1,
                  sorter: function (a) {
                    return a;
                  },
                  templateResult: function (a) {
                    return a.text;
                  },
                  templateSelection: function (a) {
                    return a.text;
                  },
                  theme: "default",
                  width: "resolve",
                };
              }),
              (D.prototype.set = function (b, c) {
                var d = a.camelCase(b),
                  e = {};
                e[d] = c;
                var f = j._convertData(e);
                a.extend(!0, this.defaults, f);
              }),
              new D()
            );
          }
        ),
        b.define(
          "select2/options",
          ["require", "jquery", "./defaults", "./utils"],
          function (a, b, c, d) {
            function e(b, e) {
              if (
                ((this.options = b),
                null != e && this.fromElement(e),
                (this.options = c.apply(this.options)),
                e && e.is("input"))
              ) {
                var f = a(this.get("amdBase") + "compat/inputData");
                this.options.dataAdapter = d.Decorate(
                  this.options.dataAdapter,
                  f
                );
              }
            }
            return (
              (e.prototype.fromElement = function (a) {
                var c = ["select2"];
                null == this.options.multiple &&
                  (this.options.multiple = a.prop("multiple")),
                  null == this.options.disabled &&
                    (this.options.disabled = a.prop("disabled")),
                  null == this.options.language &&
                    (a.prop("lang")
                      ? (this.options.language = a.prop("lang").toLowerCase())
                      : a.closest("[lang]").prop("lang") &&
                        (this.options.language = a
                          .closest("[lang]")
                          .prop("lang"))),
                  null == this.options.dir &&
                    (a.prop("dir")
                      ? (this.options.dir = a.prop("dir"))
                      : a.closest("[dir]").prop("dir")
                      ? (this.options.dir = a.closest("[dir]").prop("dir"))
                      : (this.options.dir = "ltr")),
                  a.prop("disabled", this.options.disabled),
                  a.prop("multiple", this.options.multiple),
                  d.GetData(a[0], "select2Tags") &&
                    (this.options.debug &&
                      window.console &&
                      console.warn &&
                      console.warn(
                        'Select2: The `data-select2-tags` attribute has been changed to use the `data-data` and `data-tags="true"` attributes and will be removed in future versions of Select2.'
                      ),
                    d.StoreData(a[0], "data", d.GetData(a[0], "select2Tags")),
                    d.StoreData(a[0], "tags", !0)),
                  d.GetData(a[0], "ajaxUrl") &&
                    (this.options.debug &&
                      window.console &&
                      console.warn &&
                      console.warn(
                        "Select2: The `data-ajax-url` attribute has been changed to `data-ajax--url` and support for the old attribute will be removed in future versions of Select2."
                      ),
                    a.attr("ajax--url", d.GetData(a[0], "ajaxUrl")),
                    d.StoreData(a[0], "ajax-Url", d.GetData(a[0], "ajaxUrl")));
                var e = {};
                e =
                  b.fn.jquery &&
                  "1." == b.fn.jquery.substr(0, 2) &&
                  a[0].dataset
                    ? b.extend(!0, {}, a[0].dataset, d.GetData(a[0]))
                    : d.GetData(a[0]);
                var f = b.extend(!0, {}, e);
                f = d._convertData(f);
                for (var g in f)
                  b.inArray(g, c) > -1 ||
                    (b.isPlainObject(this.options[g])
                      ? b.extend(this.options[g], f[g])
                      : (this.options[g] = f[g]));
                return this;
              }),
              (e.prototype.get = function (a) {
                return this.options[a];
              }),
              (e.prototype.set = function (a, b) {
                this.options[a] = b;
              }),
              e
            );
          }
        ),
        b.define(
          "select2/core",
          ["jquery", "./options", "./utils", "./keys"],
          function (a, b, c, d) {
            var e = function (a, d) {
              null != c.GetData(a[0], "select2") &&
                c.GetData(a[0], "select2").destroy(),
                (this.$element = a),
                (this.id = this._generateId(a)),
                (d = d || {}),
                (this.options = new b(d, a)),
                e.__super__.constructor.call(this);
              var f = a.attr("tabindex") || 0;
              c.StoreData(a[0], "old-tabindex", f), a.attr("tabindex", "-1");
              var g = this.options.get("dataAdapter");
              this.dataAdapter = new g(a, this.options);
              var h = this.render();
              this._placeContainer(h);
              var i = this.options.get("selectionAdapter");
              (this.selection = new i(a, this.options)),
                (this.$selection = this.selection.render()),
                this.selection.position(this.$selection, h);
              var j = this.options.get("dropdownAdapter");
              (this.dropdown = new j(a, this.options)),
                (this.$dropdown = this.dropdown.render()),
                this.dropdown.position(this.$dropdown, h);
              var k = this.options.get("resultsAdapter");
              (this.results = new k(a, this.options, this.dataAdapter)),
                (this.$results = this.results.render()),
                this.results.position(this.$results, this.$dropdown);
              var l = this;
              this._bindAdapters(),
                this._registerDomEvents(),
                this._registerDataEvents(),
                this._registerSelectionEvents(),
                this._registerDropdownEvents(),
                this._registerResultsEvents(),
                this._registerEvents(),
                this.dataAdapter.current(function (a) {
                  l.trigger("selection:update", { data: a });
                }),
                a.addClass("select2-hidden-accessible"),
                a.attr("aria-hidden", "true"),
                this._syncAttributes(),
                c.StoreData(a[0], "select2", this),
                a.data("select2", this);
            };
            return (
              c.Extend(e, c.Observable),
              (e.prototype._generateId = function (a) {
                var b = "";
                return (
                  (b =
                    null != a.attr("id")
                      ? a.attr("id")
                      : null != a.attr("name")
                      ? a.attr("name") + "-" + c.generateChars(2)
                      : c.generateChars(4)),
                  (b = b.replace(/(:|\.|\[|\]|,)/g, "")),
                  (b = "select2-" + b)
                );
              }),
              (e.prototype._placeContainer = function (a) {
                a.insertAfter(this.$element);
                var b = this._resolveWidth(
                  this.$element,
                  this.options.get("width")
                );
                null != b && a.css("width", b);
              }),
              (e.prototype._resolveWidth = function (a, b) {
                var c =
                  /^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;
                if ("resolve" == b) {
                  var d = this._resolveWidth(a, "style");
                  return null != d ? d : this._resolveWidth(a, "element");
                }
                if ("element" == b) {
                  var e = a.outerWidth(!1);
                  return e <= 0 ? "auto" : e + "px";
                }
                if ("style" == b) {
                  var f = a.attr("style");
                  if ("string" != typeof f) return null;
                  for (
                    var g = f.split(";"), h = 0, i = g.length;
                    h < i;
                    h += 1
                  ) {
                    var j = g[h].replace(/\s/g, ""),
                      k = j.match(c);
                    if (null !== k && k.length >= 1) return k[1];
                  }
                  return null;
                }
                return b;
              }),
              (e.prototype._bindAdapters = function () {
                this.dataAdapter.bind(this, this.$container),
                  this.selection.bind(this, this.$container),
                  this.dropdown.bind(this, this.$container),
                  this.results.bind(this, this.$container);
              }),
              (e.prototype._registerDomEvents = function () {
                var b = this;
                this.$element.on("change.select2", function () {
                  b.dataAdapter.current(function (a) {
                    b.trigger("selection:update", { data: a });
                  });
                }),
                  this.$element.on("focus.select2", function (a) {
                    b.trigger("focus", a);
                  }),
                  (this._syncA = c.bind(this._syncAttributes, this)),
                  (this._syncS = c.bind(this._syncSubtree, this)),
                  this.$element[0].attachEvent &&
                    this.$element[0].attachEvent(
                      "onpropertychange",
                      this._syncA
                    );
                var d =
                  window.MutationObserver ||
                  window.WebKitMutationObserver ||
                  window.MozMutationObserver;
                null != d
                  ? ((this._observer = new d(function (c) {
                      a.each(c, b._syncA), a.each(c, b._syncS);
                    })),
                    this._observer.observe(this.$element[0], {
                      attributes: !0,
                      childList: !0,
                      subtree: !1,
                    }))
                  : this.$element[0].addEventListener &&
                    (this.$element[0].addEventListener(
                      "DOMAttrModified",
                      b._syncA,
                      !1
                    ),
                    this.$element[0].addEventListener(
                      "DOMNodeInserted",
                      b._syncS,
                      !1
                    ),
                    this.$element[0].addEventListener(
                      "DOMNodeRemoved",
                      b._syncS,
                      !1
                    ));
              }),
              (e.prototype._registerDataEvents = function () {
                var a = this;
                this.dataAdapter.on("*", function (b, c) {
                  a.trigger(b, c);
                });
              }),
              (e.prototype._registerSelectionEvents = function () {
                var b = this,
                  c = ["toggle", "focus"];
                this.selection.on("toggle", function () {
                  b.toggleDropdown();
                }),
                  this.selection.on("focus", function (a) {
                    b.focus(a);
                  }),
                  this.selection.on("*", function (d, e) {
                    -1 === a.inArray(d, c) && b.trigger(d, e);
                  });
              }),
              (e.prototype._registerDropdownEvents = function () {
                var a = this;
                this.dropdown.on("*", function (b, c) {
                  a.trigger(b, c);
                });
              }),
              (e.prototype._registerResultsEvents = function () {
                var a = this;
                this.results.on("*", function (b, c) {
                  a.trigger(b, c);
                });
              }),
              (e.prototype._registerEvents = function () {
                var a = this;
                this.on("open", function () {
                  a.$container.addClass("select2-container--open");
                }),
                  this.on("close", function () {
                    a.$container.removeClass("select2-container--open");
                  }),
                  this.on("enable", function () {
                    a.$container.removeClass("select2-container--disabled");
                  }),
                  this.on("disable", function () {
                    a.$container.addClass("select2-container--disabled");
                  }),
                  this.on("blur", function () {
                    a.$container.removeClass("select2-container--focus");
                  }),
                  this.on("query", function (b) {
                    a.isOpen() || a.trigger("open", {}),
                      this.dataAdapter.query(b, function (c) {
                        a.trigger("results:all", { data: c, query: b });
                      });
                  }),
                  this.on("query:append", function (b) {
                    this.dataAdapter.query(b, function (c) {
                      a.trigger("results:append", { data: c, query: b });
                    });
                  }),
                  this.on("keypress", function (b) {
                    var c = b.which;
                    a.isOpen()
                      ? c === d.ESC || c === d.TAB || (c === d.UP && b.altKey)
                        ? (a.close(), b.preventDefault())
                        : c === d.ENTER
                        ? (a.trigger("results:select", {}), b.preventDefault())
                        : c === d.SPACE && b.ctrlKey
                        ? (a.trigger("results:toggle", {}), b.preventDefault())
                        : c === d.UP
                        ? (a.trigger("results:previous", {}),
                          b.preventDefault())
                        : c === d.DOWN &&
                          (a.trigger("results:next", {}), b.preventDefault())
                      : (c === d.ENTER ||
                          c === d.SPACE ||
                          (c === d.DOWN && b.altKey)) &&
                        (a.open(), b.preventDefault());
                  });
              }),
              (e.prototype._syncAttributes = function () {
                this.options.set("disabled", this.$element.prop("disabled")),
                  this.options.get("disabled")
                    ? (this.isOpen() && this.close(),
                      this.trigger("disable", {}))
                    : this.trigger("enable", {});
              }),
              (e.prototype._syncSubtree = function (a, b) {
                var c = !1,
                  d = this;
                if (
                  !a ||
                  !a.target ||
                  "OPTION" === a.target.nodeName ||
                  "OPTGROUP" === a.target.nodeName
                ) {
                  if (b)
                    if (b.addedNodes && b.addedNodes.length > 0)
                      for (var e = 0; e < b.addedNodes.length; e++) {
                        var f = b.addedNodes[e];
                        f.selected && (c = !0);
                      }
                    else
                      b.removedNodes && b.removedNodes.length > 0 && (c = !0);
                  else c = !0;
                  c &&
                    this.dataAdapter.current(function (a) {
                      d.trigger("selection:update", { data: a });
                    });
                }
              }),
              (e.prototype.trigger = function (a, b) {
                var c = e.__super__.trigger,
                  d = {
                    open: "opening",
                    close: "closing",
                    select: "selecting",
                    unselect: "unselecting",
                    clear: "clearing",
                  };
                if ((void 0 === b && (b = {}), a in d)) {
                  var f = d[a],
                    g = { prevented: !1, name: a, args: b };
                  if ((c.call(this, f, g), g.prevented))
                    return void (b.prevented = !0);
                }
                c.call(this, a, b);
              }),
              (e.prototype.toggleDropdown = function () {
                this.options.get("disabled") ||
                  (this.isOpen() ? this.close() : this.open());
              }),
              (e.prototype.open = function () {
                this.isOpen() || this.trigger("query", {});
              }),
              (e.prototype.close = function () {
                this.isOpen() && this.trigger("close", {});
              }),
              (e.prototype.isOpen = function () {
                return this.$container.hasClass("select2-container--open");
              }),
              (e.prototype.hasFocus = function () {
                return this.$container.hasClass("select2-container--focus");
              }),
              (e.prototype.focus = function (a) {
                this.hasFocus() ||
                  (this.$container.addClass("select2-container--focus"),
                  this.trigger("focus", {}));
              }),
              (e.prototype.enable = function (a) {
                this.options.get("debug") &&
                  window.console &&
                  console.warn &&
                  console.warn(
                    'Select2: The `select2("enable")` method has been deprecated and will be removed in later Select2 versions. Use $element.prop("disabled") instead.'
                  ),
                  (null != a && 0 !== a.length) || (a = [!0]);
                var b = !a[0];
                this.$element.prop("disabled", b);
              }),
              (e.prototype.data = function () {
                this.options.get("debug") &&
                  arguments.length > 0 &&
                  window.console &&
                  console.warn &&
                  console.warn(
                    'Select2: Data can no longer be set using `select2("data")`. You should consider setting the value instead using `$element.val()`.'
                  );
                var a = [];
                return (
                  this.dataAdapter.current(function (b) {
                    a = b;
                  }),
                  a
                );
              }),
              (e.prototype.val = function (b) {
                if (
                  (this.options.get("debug") &&
                    window.console &&
                    console.warn &&
                    console.warn(
                      'Select2: The `select2("val")` method has been deprecated and will be removed in later Select2 versions. Use $element.val() instead.'
                    ),
                  null == b || 0 === b.length)
                )
                  return this.$element.val();
                var c = b[0];
                a.isArray(c) &&
                  (c = a.map(c, function (a) {
                    return a.toString();
                  })),
                  this.$element.val(c).trigger("change");
              }),
              (e.prototype.destroy = function () {
                this.$container.remove(),
                  this.$element[0].detachEvent &&
                    this.$element[0].detachEvent(
                      "onpropertychange",
                      this._syncA
                    ),
                  null != this._observer
                    ? (this._observer.disconnect(), (this._observer = null))
                    : this.$element[0].removeEventListener &&
                      (this.$element[0].removeEventListener(
                        "DOMAttrModified",
                        this._syncA,
                        !1
                      ),
                      this.$element[0].removeEventListener(
                        "DOMNodeInserted",
                        this._syncS,
                        !1
                      ),
                      this.$element[0].removeEventListener(
                        "DOMNodeRemoved",
                        this._syncS,
                        !1
                      )),
                  (this._syncA = null),
                  (this._syncS = null),
                  this.$element.off(".select2"),
                  this.$element.attr(
                    "tabindex",
                    c.GetData(this.$element[0], "old-tabindex")
                  ),
                  this.$element.removeClass("select2-hidden-accessible"),
                  this.$element.attr("aria-hidden", "false"),
                  c.RemoveData(this.$element[0]),
                  this.$element.removeData("select2"),
                  this.dataAdapter.destroy(),
                  this.selection.destroy(),
                  this.dropdown.destroy(),
                  this.results.destroy(),
                  (this.dataAdapter = null),
                  (this.selection = null),
                  (this.dropdown = null),
                  (this.results = null);
              }),
              (e.prototype.render = function () {
                var b = a(
                  '<span class="select2 select2-container"><span class="selection"></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>'
                );
                return (
                  b.attr("dir", this.options.get("dir")),
                  (this.$container = b),
                  this.$container.addClass(
                    "select2-container--" + this.options.get("theme")
                  ),
                  c.StoreData(b[0], "element", this.$element),
                  b
                );
              }),
              e
            );
          }
        ),
        b.define("jquery-mousewheel", ["jquery"], function (a) {
          return a;
        }),
        b.define(
          "jquery.select2",
          [
            "jquery",
            "jquery-mousewheel",
            "./select2/core",
            "./select2/defaults",
            "./select2/utils",
          ],
          function (a, b, c, d, e) {
            if (null == a.fn.select2) {
              var f = ["open", "close", "destroy"];
              a.fn.select2 = function (b) {
                if ("object" == typeof (b = b || {}))
                  return (
                    this.each(function () {
                      var d = a.extend(!0, {}, b);
                      new c(a(this), d);
                    }),
                    this
                  );
                if ("string" == typeof b) {
                  var d,
                    g = Array.prototype.slice.call(arguments, 1);
                  return (
                    this.each(function () {
                      var a = e.GetData(this, "select2");
                      null == a &&
                        window.console &&
                        console.error &&
                        console.error(
                          "The select2('" +
                            b +
                            "') method was called on an element that is not using Select2."
                        ),
                        (d = a[b].apply(a, g));
                    }),
                    a.inArray(b, f) > -1 ? this : d
                  );
                }
                throw new Error("Invalid arguments for Select2: " + b);
              };
            }
            return (
              null == a.fn.select2.defaults && (a.fn.select2.defaults = d), c
            );
          }
        ),
        { define: b.define, require: b.require }
      );
    })(),
    c = b.require("jquery.select2");
  return (a.fn.select2.amd = b), c;
});
/*! DataTables 1.10.24 ©2008-2021 SpryMedia Ltd - datatables.net/license */
var $jscomp = $jscomp || {};
$jscomp.scope = {};
$jscomp.findInternal = function (k, y, z) {
  k instanceof String && (k = String(k));
  for (var q = k.length, G = 0; G < q; G++) {
    var O = k[G];
    if (y.call(z, O, G, k)) return { i: G, v: O };
  }
  return { i: -1, v: void 0 };
};
$jscomp.ASSUME_ES5 = !1;
$jscomp.ASSUME_NO_NATIVE_MAP = !1;
$jscomp.ASSUME_NO_NATIVE_SET = !1;
$jscomp.SIMPLE_FROUND_POLYFILL = !1;
$jscomp.ISOLATE_POLYFILLS = !1;
$jscomp.defineProperty =
  $jscomp.ASSUME_ES5 || "function" == typeof Object.defineProperties
    ? Object.defineProperty
    : function (k, y, z) {
        if (k == Array.prototype || k == Object.prototype) return k;
        k[y] = z.value;
        return k;
      };
$jscomp.getGlobal = function (k) {
  k = [
    "object" == typeof globalThis && globalThis,
    k,
    "object" == typeof window && window,
    "object" == typeof self && self,
    "object" == typeof global && global,
  ];
  for (var y = 0; y < k.length; ++y) {
    var z = k[y];
    if (z && z.Math == Math) return z;
  }
  throw Error("Cannot find global object");
};
$jscomp.global = $jscomp.getGlobal(this);
$jscomp.IS_SYMBOL_NATIVE =
  "function" === typeof Symbol && "symbol" === typeof Symbol("x");
$jscomp.TRUST_ES6_POLYFILLS =
  !$jscomp.ISOLATE_POLYFILLS || $jscomp.IS_SYMBOL_NATIVE;
$jscomp.polyfills = {};
$jscomp.propertyToPolyfillSymbol = {};
$jscomp.POLYFILL_PREFIX = "$jscp$";
var $jscomp$lookupPolyfilledValue = function (k, y) {
  var z = $jscomp.propertyToPolyfillSymbol[y];
  if (null == z) return k[y];
  z = k[z];
  return void 0 !== z ? z : k[y];
};
$jscomp.polyfill = function (k, y, z, q) {
  y &&
    ($jscomp.ISOLATE_POLYFILLS
      ? $jscomp.polyfillIsolated(k, y, z, q)
      : $jscomp.polyfillUnisolated(k, y, z, q));
};
$jscomp.polyfillUnisolated = function (k, y, z, q) {
  z = $jscomp.global;
  k = k.split(".");
  for (q = 0; q < k.length - 1; q++) {
    var G = k[q];
    if (!(G in z)) return;
    z = z[G];
  }
  k = k[k.length - 1];
  q = z[k];
  y = y(q);
  y != q &&
    null != y &&
    $jscomp.defineProperty(z, k, { configurable: !0, writable: !0, value: y });
};
$jscomp.polyfillIsolated = function (k, y, z, q) {
  var G = k.split(".");
  k = 1 === G.length;
  q = G[0];
  q = !k && q in $jscomp.polyfills ? $jscomp.polyfills : $jscomp.global;
  for (var O = 0; O < G.length - 1; O++) {
    var ma = G[O];
    if (!(ma in q)) return;
    q = q[ma];
  }
  G = G[G.length - 1];
  z = $jscomp.IS_SYMBOL_NATIVE && "es6" === z ? q[G] : null;
  y = y(z);
  null != y &&
    (k
      ? $jscomp.defineProperty($jscomp.polyfills, G, {
          configurable: !0,
          writable: !0,
          value: y,
        })
      : y !== z &&
        (($jscomp.propertyToPolyfillSymbol[G] = $jscomp.IS_SYMBOL_NATIVE
          ? $jscomp.global.Symbol(G)
          : $jscomp.POLYFILL_PREFIX + G),
        (G = $jscomp.propertyToPolyfillSymbol[G]),
        $jscomp.defineProperty(q, G, {
          configurable: !0,
          writable: !0,
          value: y,
        })));
};
$jscomp.polyfill(
  "Array.prototype.find",
  function (k) {
    return k
      ? k
      : function (y, z) {
          return $jscomp.findInternal(this, y, z).v;
        };
  },
  "es6",
  "es3"
);
(function (k) {
  "function" === typeof define && define.amd
    ? define(["jquery"], function (y) {
        return k(y, window, document);
      })
    : "object" === typeof exports
    ? (module.exports = function (y, z) {
        y || (y = window);
        z ||
          (z =
            "undefined" !== typeof window
              ? require("jquery")
              : require("jquery")(y));
        return k(z, y, y.document);
      })
    : k(jQuery, window, document);
})(function (k, y, z, q) {
  function G(a) {
    var b,
      c,
      d = {};
    k.each(a, function (e, f) {
      (b = e.match(/^([^A-Z]+?)([A-Z])/)) &&
        -1 !== "a aa ai ao as b fn i m o s ".indexOf(b[1] + " ") &&
        ((c = e.replace(b[0], b[2].toLowerCase())),
        (d[c] = e),
        "o" === b[1] && G(a[e]));
    });
    a._hungarianMap = d;
  }
  function O(a, b, c) {
    a._hungarianMap || G(a);
    var d;
    k.each(b, function (e, f) {
      d = a._hungarianMap[e];
      d === q ||
        (!c && b[d] !== q) ||
        ("o" === d.charAt(0)
          ? (b[d] || (b[d] = {}), k.extend(!0, b[d], b[e]), O(a[d], b[d], c))
          : (b[d] = b[e]));
    });
  }
  function ma(a) {
    var b = u.defaults.oLanguage,
      c = b.sDecimal;
    c && Va(c);
    if (a) {
      var d = a.sZeroRecords;
      !a.sEmptyTable &&
        d &&
        "No data available in table" === b.sEmptyTable &&
        V(a, a, "sZeroRecords", "sEmptyTable");
      !a.sLoadingRecords &&
        d &&
        "Loading..." === b.sLoadingRecords &&
        V(a, a, "sZeroRecords", "sLoadingRecords");
      a.sInfoThousands && (a.sThousands = a.sInfoThousands);
      (a = a.sDecimal) && c !== a && Va(a);
    }
  }
  function yb(a) {
    R(a, "ordering", "bSort");
    R(a, "orderMulti", "bSortMulti");
    R(a, "orderClasses", "bSortClasses");
    R(a, "orderCellsTop", "bSortCellsTop");
    R(a, "order", "aaSorting");
    R(a, "orderFixed", "aaSortingFixed");
    R(a, "paging", "bPaginate");
    R(a, "pagingType", "sPaginationType");
    R(a, "pageLength", "iDisplayLength");
    R(a, "searching", "bFilter");
    "boolean" === typeof a.sScrollX && (a.sScrollX = a.sScrollX ? "100%" : "");
    "boolean" === typeof a.scrollX && (a.scrollX = a.scrollX ? "100%" : "");
    if ((a = a.aoSearchCols))
      for (var b = 0, c = a.length; b < c; b++)
        a[b] && O(u.models.oSearch, a[b]);
  }
  function zb(a) {
    R(a, "orderable", "bSortable");
    R(a, "orderData", "aDataSort");
    R(a, "orderSequence", "asSorting");
    R(a, "orderDataType", "sortDataType");
    var b = a.aDataSort;
    "number" !== typeof b || Array.isArray(b) || (a.aDataSort = [b]);
  }
  function Ab(a) {
    if (!u.__browser) {
      var b = {};
      u.__browser = b;
      var c = k("<div/>")
          .css({
            position: "fixed",
            top: 0,
            left: -1 * k(y).scrollLeft(),
            height: 1,
            width: 1,
            overflow: "hidden",
          })
          .append(
            k("<div/>")
              .css({
                position: "absolute",
                top: 1,
                left: 1,
                width: 100,
                overflow: "scroll",
              })
              .append(k("<div/>").css({ width: "100%", height: 10 }))
          )
          .appendTo("body"),
        d = c.children(),
        e = d.children();
      b.barWidth = d[0].offsetWidth - d[0].clientWidth;
      b.bScrollOversize = 100 === e[0].offsetWidth && 100 !== d[0].clientWidth;
      b.bScrollbarLeft = 1 !== Math.round(e.offset().left);
      b.bBounding = c[0].getBoundingClientRect().width ? !0 : !1;
      c.remove();
    }
    k.extend(a.oBrowser, u.__browser);
    a.oScroll.iBarWidth = u.__browser.barWidth;
  }
  function Bb(a, b, c, d, e, f) {
    var g = !1;
    if (c !== q) {
      var h = c;
      g = !0;
    }
    for (; d !== e; )
      a.hasOwnProperty(d) &&
        ((h = g ? b(h, a[d], d, a) : a[d]), (g = !0), (d += f));
    return h;
  }
  function Wa(a, b) {
    var c = u.defaults.column,
      d = a.aoColumns.length;
    c = k.extend({}, u.models.oColumn, c, {
      nTh: b ? b : z.createElement("th"),
      sTitle: c.sTitle ? c.sTitle : b ? b.innerHTML : "",
      aDataSort: c.aDataSort ? c.aDataSort : [d],
      mData: c.mData ? c.mData : d,
      idx: d,
    });
    a.aoColumns.push(c);
    c = a.aoPreSearchCols;
    c[d] = k.extend({}, u.models.oSearch, c[d]);
    Da(a, d, k(b).data());
  }
  function Da(a, b, c) {
    b = a.aoColumns[b];
    var d = a.oClasses,
      e = k(b.nTh);
    if (!b.sWidthOrig) {
      b.sWidthOrig = e.attr("width") || null;
      var f = (e.attr("style") || "").match(/width:\s*(\d+[pxem%]+)/);
      f && (b.sWidthOrig = f[1]);
    }
    c !== q &&
      null !== c &&
      (zb(c),
      O(u.defaults.column, c, !0),
      c.mDataProp === q || c.mData || (c.mData = c.mDataProp),
      c.sType && (b._sManualType = c.sType),
      c.className && !c.sClass && (c.sClass = c.className),
      c.sClass && e.addClass(c.sClass),
      k.extend(b, c),
      V(b, c, "sWidth", "sWidthOrig"),
      c.iDataSort !== q && (b.aDataSort = [c.iDataSort]),
      V(b, c, "aDataSort"));
    var g = b.mData,
      h = ia(g),
      l = b.mRender ? ia(b.mRender) : null;
    c = function (n) {
      return "string" === typeof n && -1 !== n.indexOf("@");
    };
    b._bAttrSrc = k.isPlainObject(g) && (c(g.sort) || c(g.type) || c(g.filter));
    b._setter = null;
    b.fnGetData = function (n, m, p) {
      var t = h(n, m, q, p);
      return l && m ? l(t, m, n, p) : t;
    };
    b.fnSetData = function (n, m, p) {
      return da(g)(n, m, p);
    };
    "number" !== typeof g && (a._rowReadObject = !0);
    a.oFeatures.bSort || ((b.bSortable = !1), e.addClass(d.sSortableNone));
    a = -1 !== k.inArray("asc", b.asSorting);
    c = -1 !== k.inArray("desc", b.asSorting);
    b.bSortable && (a || c)
      ? a && !c
        ? ((b.sSortingClass = d.sSortableAsc),
          (b.sSortingClassJUI = d.sSortJUIAscAllowed))
        : !a && c
        ? ((b.sSortingClass = d.sSortableDesc),
          (b.sSortingClassJUI = d.sSortJUIDescAllowed))
        : ((b.sSortingClass = d.sSortable), (b.sSortingClassJUI = d.sSortJUI))
      : ((b.sSortingClass = d.sSortableNone), (b.sSortingClassJUI = ""));
  }
  function ra(a) {
    if (!1 !== a.oFeatures.bAutoWidth) {
      var b = a.aoColumns;
      Xa(a);
      for (var c = 0, d = b.length; c < d; c++)
        b[c].nTh.style.width = b[c].sWidth;
    }
    b = a.oScroll;
    ("" === b.sY && "" === b.sX) || Ea(a);
    H(a, null, "column-sizing", [a]);
  }
  function sa(a, b) {
    a = Fa(a, "bVisible");
    return "number" === typeof a[b] ? a[b] : null;
  }
  function ta(a, b) {
    a = Fa(a, "bVisible");
    b = k.inArray(b, a);
    return -1 !== b ? b : null;
  }
  function na(a) {
    var b = 0;
    k.each(a.aoColumns, function (c, d) {
      d.bVisible && "none" !== k(d.nTh).css("display") && b++;
    });
    return b;
  }
  function Fa(a, b) {
    var c = [];
    k.map(a.aoColumns, function (d, e) {
      d[b] && c.push(e);
    });
    return c;
  }
  function Ya(a) {
    var b = a.aoColumns,
      c = a.aoData,
      d = u.ext.type.detect,
      e,
      f,
      g;
    var h = 0;
    for (e = b.length; h < e; h++) {
      var l = b[h];
      var n = [];
      if (!l.sType && l._sManualType) l.sType = l._sManualType;
      else if (!l.sType) {
        var m = 0;
        for (f = d.length; m < f; m++) {
          var p = 0;
          for (g = c.length; p < g; p++) {
            n[p] === q && (n[p] = S(a, p, h, "type"));
            var t = d[m](n[p], a);
            if (!t && m !== d.length - 1) break;
            if ("html" === t) break;
          }
          if (t) {
            l.sType = t;
            break;
          }
        }
        l.sType || (l.sType = "string");
      }
    }
  }
  function Cb(a, b, c, d) {
    var e,
      f,
      g,
      h = a.aoColumns;
    if (b)
      for (e = b.length - 1; 0 <= e; e--) {
        var l = b[e];
        var n = l.targets !== q ? l.targets : l.aTargets;
        Array.isArray(n) || (n = [n]);
        var m = 0;
        for (f = n.length; m < f; m++)
          if ("number" === typeof n[m] && 0 <= n[m]) {
            for (; h.length <= n[m]; ) Wa(a);
            d(n[m], l);
          } else if ("number" === typeof n[m] && 0 > n[m])
            d(h.length + n[m], l);
          else if ("string" === typeof n[m]) {
            var p = 0;
            for (g = h.length; p < g; p++)
              ("_all" == n[m] || k(h[p].nTh).hasClass(n[m])) && d(p, l);
          }
      }
    if (c) for (e = 0, a = c.length; e < a; e++) d(e, c[e]);
  }
  function ea(a, b, c, d) {
    var e = a.aoData.length,
      f = k.extend(!0, {}, u.models.oRow, { src: c ? "dom" : "data", idx: e });
    f._aData = b;
    a.aoData.push(f);
    for (var g = a.aoColumns, h = 0, l = g.length; h < l; h++)
      g[h].sType = null;
    a.aiDisplayMaster.push(e);
    b = a.rowIdFn(b);
    b !== q && (a.aIds[b] = f);
    (!c && a.oFeatures.bDeferRender) || Za(a, e, c, d);
    return e;
  }
  function Ga(a, b) {
    var c;
    b instanceof k || (b = k(b));
    return b.map(function (d, e) {
      c = $a(a, e);
      return ea(a, c.data, e, c.cells);
    });
  }
  function S(a, b, c, d) {
    var e = a.iDraw,
      f = a.aoColumns[c],
      g = a.aoData[b]._aData,
      h = f.sDefaultContent,
      l = f.fnGetData(g, d, { settings: a, row: b, col: c });
    if (l === q)
      return (
        a.iDrawError != e &&
          null === h &&
          (aa(
            a,
            0,
            "Requested unknown parameter " +
              ("function" == typeof f.mData
                ? "{function}"
                : "'" + f.mData + "'") +
              " for row " +
              b +
              ", column " +
              c,
            4
          ),
          (a.iDrawError = e)),
        h
      );
    if ((l === g || null === l) && null !== h && d !== q) l = h;
    else if ("function" === typeof l) return l.call(g);
    return null === l && "display" == d ? "" : l;
  }
  function Db(a, b, c, d) {
    a.aoColumns[c].fnSetData(a.aoData[b]._aData, d, {
      settings: a,
      row: b,
      col: c,
    });
  }
  function ab(a) {
    return k.map(a.match(/(\\.|[^\.])+/g) || [""], function (b) {
      return b.replace(/\\\./g, ".");
    });
  }
  function ia(a) {
    if (k.isPlainObject(a)) {
      var b = {};
      k.each(a, function (d, e) {
        e && (b[d] = ia(e));
      });
      return function (d, e, f, g) {
        var h = b[e] || b._;
        return h !== q ? h(d, e, f, g) : d;
      };
    }
    if (null === a)
      return function (d) {
        return d;
      };
    if ("function" === typeof a)
      return function (d, e, f, g) {
        return a(d, e, f, g);
      };
    if (
      "string" !== typeof a ||
      (-1 === a.indexOf(".") && -1 === a.indexOf("[") && -1 === a.indexOf("("))
    )
      return function (d, e) {
        return d[a];
      };
    var c = function (d, e, f) {
      if ("" !== f) {
        var g = ab(f);
        for (var h = 0, l = g.length; h < l; h++) {
          f = g[h].match(ua);
          var n = g[h].match(oa);
          if (f) {
            g[h] = g[h].replace(ua, "");
            "" !== g[h] && (d = d[g[h]]);
            n = [];
            g.splice(0, h + 1);
            g = g.join(".");
            if (Array.isArray(d))
              for (h = 0, l = d.length; h < l; h++) n.push(c(d[h], e, g));
            d = f[0].substring(1, f[0].length - 1);
            d = "" === d ? n : n.join(d);
            break;
          } else if (n) {
            g[h] = g[h].replace(oa, "");
            d = d[g[h]]();
            continue;
          }
          if (null === d || d[g[h]] === q) return q;
          d = d[g[h]];
        }
      }
      return d;
    };
    return function (d, e) {
      return c(d, e, a);
    };
  }
  function da(a) {
    if (k.isPlainObject(a)) return da(a._);
    if (null === a) return function () {};
    if ("function" === typeof a)
      return function (c, d, e) {
        a(c, "set", d, e);
      };
    if (
      "string" !== typeof a ||
      (-1 === a.indexOf(".") && -1 === a.indexOf("[") && -1 === a.indexOf("("))
    )
      return function (c, d) {
        c[a] = d;
      };
    var b = function (c, d, e) {
      e = ab(e);
      var f = e[e.length - 1];
      for (var g, h, l = 0, n = e.length - 1; l < n; l++) {
        if ("__proto__" === e[l] || "constructor" === e[l])
          throw Error("Cannot set prototype values");
        g = e[l].match(ua);
        h = e[l].match(oa);
        if (g) {
          e[l] = e[l].replace(ua, "");
          c[e[l]] = [];
          f = e.slice();
          f.splice(0, l + 1);
          g = f.join(".");
          if (Array.isArray(d))
            for (h = 0, n = d.length; h < n; h++)
              (f = {}), b(f, d[h], g), c[e[l]].push(f);
          else c[e[l]] = d;
          return;
        }
        h && ((e[l] = e[l].replace(oa, "")), (c = c[e[l]](d)));
        if (null === c[e[l]] || c[e[l]] === q) c[e[l]] = {};
        c = c[e[l]];
      }
      if (f.match(oa)) c[f.replace(oa, "")](d);
      else c[f.replace(ua, "")] = d;
    };
    return function (c, d) {
      return b(c, d, a);
    };
  }
  function bb(a) {
    return T(a.aoData, "_aData");
  }
  function Ha(a) {
    a.aoData.length = 0;
    a.aiDisplayMaster.length = 0;
    a.aiDisplay.length = 0;
    a.aIds = {};
  }
  function Ia(a, b, c) {
    for (var d = -1, e = 0, f = a.length; e < f; e++)
      a[e] == b ? (d = e) : a[e] > b && a[e]--;
    -1 != d && c === q && a.splice(d, 1);
  }
  function va(a, b, c, d) {
    var e = a.aoData[b],
      f,
      g = function (l, n) {
        for (; l.childNodes.length; ) l.removeChild(l.firstChild);
        l.innerHTML = S(a, b, n, "display");
      };
    if ("dom" !== c && ((c && "auto" !== c) || "dom" !== e.src)) {
      var h = e.anCells;
      if (h)
        if (d !== q) g(h[d], d);
        else for (c = 0, f = h.length; c < f; c++) g(h[c], c);
    } else e._aData = $a(a, e, d, d === q ? q : e._aData).data;
    e._aSortData = null;
    e._aFilterData = null;
    g = a.aoColumns;
    if (d !== q) g[d].sType = null;
    else {
      c = 0;
      for (f = g.length; c < f; c++) g[c].sType = null;
      cb(a, e);
    }
  }
  function $a(a, b, c, d) {
    var e = [],
      f = b.firstChild,
      g,
      h = 0,
      l,
      n = a.aoColumns,
      m = a._rowReadObject;
    d = d !== q ? d : m ? {} : [];
    var p = function (x, r) {
        if ("string" === typeof x) {
          var A = x.indexOf("@");
          -1 !== A && ((A = x.substring(A + 1)), da(x)(d, r.getAttribute(A)));
        }
      },
      t = function (x) {
        if (c === q || c === h)
          (g = n[h]),
            (l = x.innerHTML.trim()),
            g && g._bAttrSrc
              ? (da(g.mData._)(d, l),
                p(g.mData.sort, x),
                p(g.mData.type, x),
                p(g.mData.filter, x))
              : m
              ? (g._setter || (g._setter = da(g.mData)), g._setter(d, l))
              : (d[h] = l);
        h++;
      };
    if (f)
      for (; f; ) {
        var v = f.nodeName.toUpperCase();
        if ("TD" == v || "TH" == v) t(f), e.push(f);
        f = f.nextSibling;
      }
    else for (e = b.anCells, f = 0, v = e.length; f < v; f++) t(e[f]);
    (b = b.firstChild ? b : b.nTr) &&
      (b = b.getAttribute("id")) &&
      da(a.rowId)(d, b);
    return { data: d, cells: e };
  }
  function Za(a, b, c, d) {
    var e = a.aoData[b],
      f = e._aData,
      g = [],
      h,
      l;
    if (null === e.nTr) {
      var n = c || z.createElement("tr");
      e.nTr = n;
      e.anCells = g;
      n._DT_RowIndex = b;
      cb(a, e);
      var m = 0;
      for (h = a.aoColumns.length; m < h; m++) {
        var p = a.aoColumns[m];
        e = (l = c ? !1 : !0) ? z.createElement(p.sCellType) : d[m];
        e._DT_CellIndex = { row: b, column: m };
        g.push(e);
        if (
          l ||
          !(
            (!p.mRender && p.mData === m) ||
            (k.isPlainObject(p.mData) && p.mData._ === m + ".display")
          )
        )
          e.innerHTML = S(a, b, m, "display");
        p.sClass && (e.className += " " + p.sClass);
        p.bVisible && !c
          ? n.appendChild(e)
          : !p.bVisible && c && e.parentNode.removeChild(e);
        p.fnCreatedCell &&
          p.fnCreatedCell.call(a.oInstance, e, S(a, b, m), f, b, m);
      }
      H(a, "aoRowCreatedCallback", null, [n, f, b, g]);
    }
  }
  function cb(a, b) {
    var c = b.nTr,
      d = b._aData;
    if (c) {
      if ((a = a.rowIdFn(d))) c.id = a;
      d.DT_RowClass &&
        ((a = d.DT_RowClass.split(" ")),
        (b.__rowc = b.__rowc ? Ja(b.__rowc.concat(a)) : a),
        k(c).removeClass(b.__rowc.join(" ")).addClass(d.DT_RowClass));
      d.DT_RowAttr && k(c).attr(d.DT_RowAttr);
      d.DT_RowData && k(c).data(d.DT_RowData);
    }
  }
  function Eb(a) {
    var b,
      c,
      d = a.nTHead,
      e = a.nTFoot,
      f = 0 === k("th, td", d).length,
      g = a.oClasses,
      h = a.aoColumns;
    f && (c = k("<tr/>").appendTo(d));
    var l = 0;
    for (b = h.length; l < b; l++) {
      var n = h[l];
      var m = k(n.nTh).addClass(n.sClass);
      f && m.appendTo(c);
      a.oFeatures.bSort &&
        (m.addClass(n.sSortingClass),
        !1 !== n.bSortable &&
          (m.attr("tabindex", a.iTabIndex).attr("aria-controls", a.sTableId),
          db(a, n.nTh, l)));
      n.sTitle != m[0].innerHTML && m.html(n.sTitle);
      eb(a, "header")(a, m, n, g);
    }
    f && wa(a.aoHeader, d);
    k(d).children("tr").attr("role", "row");
    k(d).children("tr").children("th, td").addClass(g.sHeaderTH);
    k(e).children("tr").children("th, td").addClass(g.sFooterTH);
    if (null !== e)
      for (a = a.aoFooter[0], l = 0, b = a.length; l < b; l++)
        (n = h[l]),
          (n.nTf = a[l].cell),
          n.sClass && k(n.nTf).addClass(n.sClass);
  }
  function xa(a, b, c) {
    var d,
      e,
      f = [],
      g = [],
      h = a.aoColumns.length;
    if (b) {
      c === q && (c = !1);
      var l = 0;
      for (d = b.length; l < d; l++) {
        f[l] = b[l].slice();
        f[l].nTr = b[l].nTr;
        for (e = h - 1; 0 <= e; e--)
          a.aoColumns[e].bVisible || c || f[l].splice(e, 1);
        g.push([]);
      }
      l = 0;
      for (d = f.length; l < d; l++) {
        if ((a = f[l].nTr)) for (; (e = a.firstChild); ) a.removeChild(e);
        e = 0;
        for (b = f[l].length; e < b; e++) {
          var n = (h = 1);
          if (g[l][e] === q) {
            a.appendChild(f[l][e].cell);
            for (
              g[l][e] = 1;
              f[l + h] !== q && f[l][e].cell == f[l + h][e].cell;

            )
              (g[l + h][e] = 1), h++;
            for (; f[l][e + n] !== q && f[l][e].cell == f[l][e + n].cell; ) {
              for (c = 0; c < h; c++) g[l + c][e + n] = 1;
              n++;
            }
            k(f[l][e].cell).attr("rowspan", h).attr("colspan", n);
          }
        }
      }
    }
  }
  function fa(a) {
    var b = H(a, "aoPreDrawCallback", "preDraw", [a]);
    if (-1 !== k.inArray(!1, b)) U(a, !1);
    else {
      b = [];
      var c = 0,
        d = a.asStripeClasses,
        e = d.length,
        f = a.oLanguage,
        g = a.iInitDisplayStart,
        h = "ssp" == P(a),
        l = a.aiDisplay;
      a.bDrawing = !0;
      g !== q &&
        -1 !== g &&
        ((a._iDisplayStart = h ? g : g >= a.fnRecordsDisplay() ? 0 : g),
        (a.iInitDisplayStart = -1));
      g = a._iDisplayStart;
      var n = a.fnDisplayEnd();
      if (a.bDeferLoading) (a.bDeferLoading = !1), a.iDraw++, U(a, !1);
      else if (!h) a.iDraw++;
      else if (!a.bDestroying && !Fb(a)) return;
      if (0 !== l.length)
        for (f = h ? a.aoData.length : n, h = h ? 0 : g; h < f; h++) {
          var m = l[h],
            p = a.aoData[m];
          null === p.nTr && Za(a, m);
          var t = p.nTr;
          if (0 !== e) {
            var v = d[c % e];
            p._sRowStripe != v &&
              (k(t).removeClass(p._sRowStripe).addClass(v),
              (p._sRowStripe = v));
          }
          H(a, "aoRowCallback", null, [t, p._aData, c, h, m]);
          b.push(t);
          c++;
        }
      else
        (c = f.sZeroRecords),
          1 == a.iDraw && "ajax" == P(a)
            ? (c = f.sLoadingRecords)
            : f.sEmptyTable && 0 === a.fnRecordsTotal() && (c = f.sEmptyTable),
          (b[0] = k("<tr/>", { class: e ? d[0] : "" }).append(
            k("<td />", {
              valign: "top",
              colSpan: na(a),
              class: a.oClasses.sRowEmpty,
            }).html(c)
          )[0]);
      H(a, "aoHeaderCallback", "header", [
        k(a.nTHead).children("tr")[0],
        bb(a),
        g,
        n,
        l,
      ]);
      H(a, "aoFooterCallback", "footer", [
        k(a.nTFoot).children("tr")[0],
        bb(a),
        g,
        n,
        l,
      ]);
      d = k(a.nTBody);
      d.children().detach();
      d.append(k(b));
      H(a, "aoDrawCallback", "draw", [a]);
      a.bSorted = !1;
      a.bFiltered = !1;
      a.bDrawing = !1;
    }
  }
  function ja(a, b) {
    var c = a.oFeatures,
      d = c.bFilter;
    c.bSort && Gb(a);
    d ? ya(a, a.oPreviousSearch) : (a.aiDisplay = a.aiDisplayMaster.slice());
    !0 !== b && (a._iDisplayStart = 0);
    a._drawHold = b;
    fa(a);
    a._drawHold = !1;
  }
  function Hb(a) {
    var b = a.oClasses,
      c = k(a.nTable);
    c = k("<div/>").insertBefore(c);
    var d = a.oFeatures,
      e = k("<div/>", {
        id: a.sTableId + "_wrapper",
        class: b.sWrapper + (a.nTFoot ? "" : " " + b.sNoFooter),
      });
    a.nHolding = c[0];
    a.nTableWrapper = e[0];
    a.nTableReinsertBefore = a.nTable.nextSibling;
    for (var f = a.sDom.split(""), g, h, l, n, m, p, t = 0; t < f.length; t++) {
      g = null;
      h = f[t];
      if ("<" == h) {
        l = k("<div/>")[0];
        n = f[t + 1];
        if ("'" == n || '"' == n) {
          m = "";
          for (p = 2; f[t + p] != n; ) (m += f[t + p]), p++;
          "H" == m ? (m = b.sJUIHeader) : "F" == m && (m = b.sJUIFooter);
          -1 != m.indexOf(".")
            ? ((n = m.split(".")),
              (l.id = n[0].substr(1, n[0].length - 1)),
              (l.className = n[1]))
            : "#" == m.charAt(0)
            ? (l.id = m.substr(1, m.length - 1))
            : (l.className = m);
          t += p;
        }
        e.append(l);
        e = k(l);
      } else if (">" == h) e = e.parent();
      else if ("l" == h && d.bPaginate && d.bLengthChange) g = Ib(a);
      else if ("f" == h && d.bFilter) g = Jb(a);
      else if ("r" == h && d.bProcessing) g = Kb(a);
      else if ("t" == h) g = Lb(a);
      else if ("i" == h && d.bInfo) g = Mb(a);
      else if ("p" == h && d.bPaginate) g = Nb(a);
      else if (0 !== u.ext.feature.length)
        for (l = u.ext.feature, p = 0, n = l.length; p < n; p++)
          if (h == l[p].cFeature) {
            g = l[p].fnInit(a);
            break;
          }
      g &&
        ((l = a.aanFeatures), l[h] || (l[h] = []), l[h].push(g), e.append(g));
    }
    c.replaceWith(e);
    a.nHolding = null;
  }
  function wa(a, b) {
    b = k(b).children("tr");
    var c, d, e;
    a.splice(0, a.length);
    var f = 0;
    for (e = b.length; f < e; f++) a.push([]);
    f = 0;
    for (e = b.length; f < e; f++) {
      var g = b[f];
      for (c = g.firstChild; c; ) {
        if (
          "TD" == c.nodeName.toUpperCase() ||
          "TH" == c.nodeName.toUpperCase()
        ) {
          var h = 1 * c.getAttribute("colspan");
          var l = 1 * c.getAttribute("rowspan");
          h = h && 0 !== h && 1 !== h ? h : 1;
          l = l && 0 !== l && 1 !== l ? l : 1;
          var n = 0;
          for (d = a[f]; d[n]; ) n++;
          var m = n;
          var p = 1 === h ? !0 : !1;
          for (d = 0; d < h; d++)
            for (n = 0; n < l; n++)
              (a[f + n][m + d] = { cell: c, unique: p }), (a[f + n].nTr = g);
        }
        c = c.nextSibling;
      }
    }
  }
  function Ka(a, b, c) {
    var d = [];
    c || ((c = a.aoHeader), b && ((c = []), wa(c, b)));
    b = 0;
    for (var e = c.length; b < e; b++)
      for (var f = 0, g = c[b].length; f < g; f++)
        !c[b][f].unique || (d[f] && a.bSortCellsTop) || (d[f] = c[b][f].cell);
    return d;
  }
  function La(a, b, c) {
    H(a, "aoServerParams", "serverParams", [b]);
    if (b && Array.isArray(b)) {
      var d = {},
        e = /(.*?)\[\]$/;
      k.each(b, function (m, p) {
        (m = p.name.match(e))
          ? ((m = m[0]), d[m] || (d[m] = []), d[m].push(p.value))
          : (d[p.name] = p.value);
      });
      b = d;
    }
    var f = a.ajax,
      g = a.oInstance,
      h = function (m) {
        H(a, null, "xhr", [a, m, a.jqXHR]);
        c(m);
      };
    if (k.isPlainObject(f) && f.data) {
      var l = f.data;
      var n = "function" === typeof l ? l(b, a) : l;
      b = "function" === typeof l && n ? n : k.extend(!0, b, n);
      delete f.data;
    }
    n = {
      data: b,
      success: function (m) {
        var p = m.error || m.sError;
        p && aa(a, 0, p);
        a.json = m;
        h(m);
      },
      dataType: "json",
      cache: !1,
      type: a.sServerMethod,
      error: function (m, p, t) {
        t = H(a, null, "xhr", [a, null, a.jqXHR]);
        -1 === k.inArray(!0, t) &&
          ("parsererror" == p
            ? aa(a, 0, "Invalid JSON response", 1)
            : 4 === m.readyState && aa(a, 0, "Ajax error", 7));
        U(a, !1);
      },
    };
    a.oAjaxData = b;
    H(a, null, "preXhr", [a, b]);
    a.fnServerData
      ? a.fnServerData.call(
          g,
          a.sAjaxSource,
          k.map(b, function (m, p) {
            return { name: p, value: m };
          }),
          h,
          a
        )
      : a.sAjaxSource || "string" === typeof f
      ? (a.jqXHR = k.ajax(k.extend(n, { url: f || a.sAjaxSource })))
      : "function" === typeof f
      ? (a.jqXHR = f.call(g, b, h, a))
      : ((a.jqXHR = k.ajax(k.extend(n, f))), (f.data = l));
  }
  function Fb(a) {
    return a.bAjaxDataGet
      ? (a.iDraw++,
        U(a, !0),
        La(a, Ob(a), function (b) {
          Pb(a, b);
        }),
        !1)
      : !0;
  }
  function Ob(a) {
    var b = a.aoColumns,
      c = b.length,
      d = a.oFeatures,
      e = a.oPreviousSearch,
      f = a.aoPreSearchCols,
      g = [],
      h = pa(a);
    var l = a._iDisplayStart;
    var n = !1 !== d.bPaginate ? a._iDisplayLength : -1;
    var m = function (x, r) {
      g.push({ name: x, value: r });
    };
    m("sEcho", a.iDraw);
    m("iColumns", c);
    m("sColumns", T(b, "sName").join(","));
    m("iDisplayStart", l);
    m("iDisplayLength", n);
    var p = {
      draw: a.iDraw,
      columns: [],
      order: [],
      start: l,
      length: n,
      search: { value: e.sSearch, regex: e.bRegex },
    };
    for (l = 0; l < c; l++) {
      var t = b[l];
      var v = f[l];
      n = "function" == typeof t.mData ? "function" : t.mData;
      p.columns.push({
        data: n,
        name: t.sName,
        searchable: t.bSearchable,
        orderable: t.bSortable,
        search: { value: v.sSearch, regex: v.bRegex },
      });
      m("mDataProp_" + l, n);
      d.bFilter &&
        (m("sSearch_" + l, v.sSearch),
        m("bRegex_" + l, v.bRegex),
        m("bSearchable_" + l, t.bSearchable));
      d.bSort && m("bSortable_" + l, t.bSortable);
    }
    d.bFilter && (m("sSearch", e.sSearch), m("bRegex", e.bRegex));
    d.bSort &&
      (k.each(h, function (x, r) {
        p.order.push({ column: r.col, dir: r.dir });
        m("iSortCol_" + x, r.col);
        m("sSortDir_" + x, r.dir);
      }),
      m("iSortingCols", h.length));
    b = u.ext.legacy.ajax;
    return null === b ? (a.sAjaxSource ? g : p) : b ? g : p;
  }
  function Pb(a, b) {
    var c = function (g, h) {
        return b[g] !== q ? b[g] : b[h];
      },
      d = Ma(a, b),
      e = c("sEcho", "draw"),
      f = c("iTotalRecords", "recordsTotal");
    c = c("iTotalDisplayRecords", "recordsFiltered");
    if (e !== q) {
      if (1 * e < a.iDraw) return;
      a.iDraw = 1 * e;
    }
    Ha(a);
    a._iRecordsTotal = parseInt(f, 10);
    a._iRecordsDisplay = parseInt(c, 10);
    e = 0;
    for (f = d.length; e < f; e++) ea(a, d[e]);
    a.aiDisplay = a.aiDisplayMaster.slice();
    a.bAjaxDataGet = !1;
    fa(a);
    a._bInitComplete || Na(a, b);
    a.bAjaxDataGet = !0;
    U(a, !1);
  }
  function Ma(a, b) {
    a =
      k.isPlainObject(a.ajax) && a.ajax.dataSrc !== q
        ? a.ajax.dataSrc
        : a.sAjaxDataProp;
    return "data" === a ? b.aaData || b[a] : "" !== a ? ia(a)(b) : b;
  }
  function Jb(a) {
    var b = a.oClasses,
      c = a.sTableId,
      d = a.oLanguage,
      e = a.oPreviousSearch,
      f = a.aanFeatures,
      g = '<input type="search" class="' + b.sFilterInput + '"/>',
      h = d.sSearch;
    h = h.match(/_INPUT_/) ? h.replace("_INPUT_", g) : h + g;
    b = k("<div/>", {
      id: f.f ? null : c + "_filter",
      class: b.sFilter,
    }).append(k("<label/>").append(h));
    var l = function () {
      var m = this.value ? this.value : "";
      m != e.sSearch &&
        (ya(a, {
          sSearch: m,
          bRegex: e.bRegex,
          bSmart: e.bSmart,
          bCaseInsensitive: e.bCaseInsensitive,
        }),
        (a._iDisplayStart = 0),
        fa(a));
    };
    f = null !== a.searchDelay ? a.searchDelay : "ssp" === P(a) ? 400 : 0;
    var n = k("input", b)
      .val(e.sSearch)
      .attr("placeholder", d.sSearchPlaceholder)
      .on("keyup.DT search.DT input.DT paste.DT cut.DT", f ? fb(l, f) : l)
      .on("mouseup", function (m) {
        setTimeout(function () {
          l.call(n[0]);
        }, 10);
      })
      .on("keypress.DT", function (m) {
        if (13 == m.keyCode) return !1;
      })
      .attr("aria-controls", c);
    k(a.nTable).on("search.dt.DT", function (m, p) {
      if (a === p)
        try {
          n[0] !== z.activeElement && n.val(e.sSearch);
        } catch (t) {}
    });
    return b[0];
  }
  function ya(a, b, c) {
    var d = a.oPreviousSearch,
      e = a.aoPreSearchCols,
      f = function (h) {
        d.sSearch = h.sSearch;
        d.bRegex = h.bRegex;
        d.bSmart = h.bSmart;
        d.bCaseInsensitive = h.bCaseInsensitive;
      },
      g = function (h) {
        return h.bEscapeRegex !== q ? !h.bEscapeRegex : h.bRegex;
      };
    Ya(a);
    if ("ssp" != P(a)) {
      Qb(a, b.sSearch, c, g(b), b.bSmart, b.bCaseInsensitive);
      f(b);
      for (b = 0; b < e.length; b++)
        Rb(a, e[b].sSearch, b, g(e[b]), e[b].bSmart, e[b].bCaseInsensitive);
      Sb(a);
    } else f(b);
    a.bFiltered = !0;
    H(a, null, "search", [a]);
  }
  function Sb(a) {
    for (
      var b = u.ext.search, c = a.aiDisplay, d, e, f = 0, g = b.length;
      f < g;
      f++
    ) {
      for (var h = [], l = 0, n = c.length; l < n; l++)
        (e = c[l]),
          (d = a.aoData[e]),
          b[f](a, d._aFilterData, e, d._aData, l) && h.push(e);
      c.length = 0;
      k.merge(c, h);
    }
  }
  function Rb(a, b, c, d, e, f) {
    if ("" !== b) {
      var g = [],
        h = a.aiDisplay;
      d = gb(b, d, e, f);
      for (e = 0; e < h.length; e++)
        (b = a.aoData[h[e]]._aFilterData[c]), d.test(b) && g.push(h[e]);
      a.aiDisplay = g;
    }
  }
  function Qb(a, b, c, d, e, f) {
    e = gb(b, d, e, f);
    var g = a.oPreviousSearch.sSearch,
      h = a.aiDisplayMaster;
    f = [];
    0 !== u.ext.search.length && (c = !0);
    var l = Tb(a);
    if (0 >= b.length) a.aiDisplay = h.slice();
    else {
      if (l || c || d || g.length > b.length || 0 !== b.indexOf(g) || a.bSorted)
        a.aiDisplay = h.slice();
      b = a.aiDisplay;
      for (c = 0; c < b.length; c++)
        e.test(a.aoData[b[c]]._sFilterRow) && f.push(b[c]);
      a.aiDisplay = f;
    }
  }
  function gb(a, b, c, d) {
    a = b ? a : hb(a);
    c &&
      (a =
        "^(?=.*?" +
        k
          .map(a.match(/"[^"]+"|[^ ]+/g) || [""], function (e) {
            if ('"' === e.charAt(0)) {
              var f = e.match(/^"(.*)"$/);
              e = f ? f[1] : e;
            }
            return e.replace('"', "");
          })
          .join(")(?=.*?") +
        ").*$");
    return new RegExp(a, d ? "i" : "");
  }
  function Tb(a) {
    var b = a.aoColumns,
      c,
      d,
      e = u.ext.type.search;
    var f = !1;
    var g = 0;
    for (c = a.aoData.length; g < c; g++) {
      var h = a.aoData[g];
      if (!h._aFilterData) {
        var l = [];
        var n = 0;
        for (d = b.length; n < d; n++) {
          f = b[n];
          if (f.bSearchable) {
            var m = S(a, g, n, "filter");
            e[f.sType] && (m = e[f.sType](m));
            null === m && (m = "");
            "string" !== typeof m && m.toString && (m = m.toString());
          } else m = "";
          m.indexOf &&
            -1 !== m.indexOf("&") &&
            ((Oa.innerHTML = m), (m = rc ? Oa.textContent : Oa.innerText));
          m.replace && (m = m.replace(/[\r\n\u2028]/g, ""));
          l.push(m);
        }
        h._aFilterData = l;
        h._sFilterRow = l.join("  ");
        f = !0;
      }
    }
    return f;
  }
  function Ub(a) {
    return {
      search: a.sSearch,
      smart: a.bSmart,
      regex: a.bRegex,
      caseInsensitive: a.bCaseInsensitive,
    };
  }
  function Vb(a) {
    return {
      sSearch: a.search,
      bSmart: a.smart,
      bRegex: a.regex,
      bCaseInsensitive: a.caseInsensitive,
    };
  }
  function Mb(a) {
    var b = a.sTableId,
      c = a.aanFeatures.i,
      d = k("<div/>", { class: a.oClasses.sInfo, id: c ? null : b + "_info" });
    c ||
      (a.aoDrawCallback.push({ fn: Wb, sName: "information" }),
      d.attr("role", "status").attr("aria-live", "polite"),
      k(a.nTable).attr("aria-describedby", b + "_info"));
    return d[0];
  }
  function Wb(a) {
    var b = a.aanFeatures.i;
    if (0 !== b.length) {
      var c = a.oLanguage,
        d = a._iDisplayStart + 1,
        e = a.fnDisplayEnd(),
        f = a.fnRecordsTotal(),
        g = a.fnRecordsDisplay(),
        h = g ? c.sInfo : c.sInfoEmpty;
      g !== f && (h += " " + c.sInfoFiltered);
      h += c.sInfoPostFix;
      h = Xb(a, h);
      c = c.fnInfoCallback;
      null !== c && (h = c.call(a.oInstance, a, d, e, f, g, h));
      k(b).html(h);
    }
  }
  function Xb(a, b) {
    var c = a.fnFormatNumber,
      d = a._iDisplayStart + 1,
      e = a._iDisplayLength,
      f = a.fnRecordsDisplay(),
      g = -1 === e;
    return b
      .replace(/_START_/g, c.call(a, d))
      .replace(/_END_/g, c.call(a, a.fnDisplayEnd()))
      .replace(/_MAX_/g, c.call(a, a.fnRecordsTotal()))
      .replace(/_TOTAL_/g, c.call(a, f))
      .replace(/_PAGE_/g, c.call(a, g ? 1 : Math.ceil(d / e)))
      .replace(/_PAGES_/g, c.call(a, g ? 1 : Math.ceil(f / e)));
  }
  function za(a) {
    var b = a.iInitDisplayStart,
      c = a.aoColumns;
    var d = a.oFeatures;
    var e = a.bDeferLoading;
    if (a.bInitialised) {
      Hb(a);
      Eb(a);
      xa(a, a.aoHeader);
      xa(a, a.aoFooter);
      U(a, !0);
      d.bAutoWidth && Xa(a);
      var f = 0;
      for (d = c.length; f < d; f++) {
        var g = c[f];
        g.sWidth && (g.nTh.style.width = K(g.sWidth));
      }
      H(a, null, "preInit", [a]);
      ja(a);
      c = P(a);
      if ("ssp" != c || e)
        "ajax" == c
          ? La(
              a,
              [],
              function (h) {
                var l = Ma(a, h);
                for (f = 0; f < l.length; f++) ea(a, l[f]);
                a.iInitDisplayStart = b;
                ja(a);
                U(a, !1);
                Na(a, h);
              },
              a
            )
          : (U(a, !1), Na(a));
    } else
      setTimeout(function () {
        za(a);
      }, 200);
  }
  function Na(a, b) {
    a._bInitComplete = !0;
    (b || a.oInit.aaData) && ra(a);
    H(a, null, "plugin-init", [a, b]);
    H(a, "aoInitComplete", "init", [a, b]);
  }
  function ib(a, b) {
    b = parseInt(b, 10);
    a._iDisplayLength = b;
    jb(a);
    H(a, null, "length", [a, b]);
  }
  function Ib(a) {
    var b = a.oClasses,
      c = a.sTableId,
      d = a.aLengthMenu,
      e = Array.isArray(d[0]),
      f = e ? d[0] : d;
    d = e ? d[1] : d;
    e = k("<select/>", {
      name: c + "_length",
      "aria-controls": c,
      class: b.sLengthSelect,
    });
    for (var g = 0, h = f.length; g < h; g++)
      e[0][g] = new Option(
        "number" === typeof d[g] ? a.fnFormatNumber(d[g]) : d[g],
        f[g]
      );
    var l = k("<div><label/></div>").addClass(b.sLength);
    a.aanFeatures.l || (l[0].id = c + "_length");
    l.children().append(
      a.oLanguage.sLengthMenu.replace("_MENU_", e[0].outerHTML)
    );
    k("select", l)
      .val(a._iDisplayLength)
      .on("change.DT", function (n) {
        ib(a, k(this).val());
        fa(a);
      });
    k(a.nTable).on("length.dt.DT", function (n, m, p) {
      a === m && k("select", l).val(p);
    });
    return l[0];
  }
  function Nb(a) {
    var b = a.sPaginationType,
      c = u.ext.pager[b],
      d = "function" === typeof c,
      e = function (g) {
        fa(g);
      };
    b = k("<div/>").addClass(a.oClasses.sPaging + b)[0];
    var f = a.aanFeatures;
    d || c.fnInit(a, b, e);
    f.p ||
      ((b.id = a.sTableId + "_paginate"),
      a.aoDrawCallback.push({
        fn: function (g) {
          if (d) {
            var h = g._iDisplayStart,
              l = g._iDisplayLength,
              n = g.fnRecordsDisplay(),
              m = -1 === l;
            h = m ? 0 : Math.ceil(h / l);
            l = m ? 1 : Math.ceil(n / l);
            n = c(h, l);
            var p;
            m = 0;
            for (p = f.p.length; m < p; m++)
              eb(g, "pageButton")(g, f.p[m], m, n, h, l);
          } else c.fnUpdate(g, e);
        },
        sName: "pagination",
      }));
    return b;
  }
  function kb(a, b, c) {
    var d = a._iDisplayStart,
      e = a._iDisplayLength,
      f = a.fnRecordsDisplay();
    0 === f || -1 === e
      ? (d = 0)
      : "number" === typeof b
      ? ((d = b * e), d > f && (d = 0))
      : "first" == b
      ? (d = 0)
      : "previous" == b
      ? ((d = 0 <= e ? d - e : 0), 0 > d && (d = 0))
      : "next" == b
      ? d + e < f && (d += e)
      : "last" == b
      ? (d = Math.floor((f - 1) / e) * e)
      : aa(a, 0, "Unknown paging action: " + b, 5);
    b = a._iDisplayStart !== d;
    a._iDisplayStart = d;
    b && (H(a, null, "page", [a]), c && fa(a));
    return b;
  }
  function Kb(a) {
    return k("<div/>", {
      id: a.aanFeatures.r ? null : a.sTableId + "_processing",
      class: a.oClasses.sProcessing,
    })
      .html(a.oLanguage.sProcessing)
      .insertBefore(a.nTable)[0];
  }
  function U(a, b) {
    a.oFeatures.bProcessing &&
      k(a.aanFeatures.r).css("display", b ? "block" : "none");
    H(a, null, "processing", [a, b]);
  }
  function Lb(a) {
    var b = k(a.nTable);
    b.attr("role", "grid");
    var c = a.oScroll;
    if ("" === c.sX && "" === c.sY) return a.nTable;
    var d = c.sX,
      e = c.sY,
      f = a.oClasses,
      g = b.children("caption"),
      h = g.length ? g[0]._captionSide : null,
      l = k(b[0].cloneNode(!1)),
      n = k(b[0].cloneNode(!1)),
      m = b.children("tfoot");
    m.length || (m = null);
    l = k("<div/>", { class: f.sScrollWrapper })
      .append(
        k("<div/>", { class: f.sScrollHead })
          .css({
            overflow: "hidden",
            position: "relative",
            border: 0,
            width: d ? (d ? K(d) : null) : "100%",
          })
          .append(
            k("<div/>", { class: f.sScrollHeadInner })
              .css({ "box-sizing": "content-box", width: c.sXInner || "100%" })
              .append(
                l
                  .removeAttr("id")
                  .css("margin-left", 0)
                  .append("top" === h ? g : null)
                  .append(b.children("thead"))
              )
          )
      )
      .append(
        k("<div/>", { class: f.sScrollBody })
          .css({
            position: "relative",
            overflow: "auto",
            width: d ? K(d) : null,
          })
          .append(b)
      );
    m &&
      l.append(
        k("<div/>", { class: f.sScrollFoot })
          .css({
            overflow: "hidden",
            border: 0,
            width: d ? (d ? K(d) : null) : "100%",
          })
          .append(
            k("<div/>", { class: f.sScrollFootInner }).append(
              n
                .removeAttr("id")
                .css("margin-left", 0)
                .append("bottom" === h ? g : null)
                .append(b.children("tfoot"))
            )
          )
      );
    b = l.children();
    var p = b[0];
    f = b[1];
    var t = m ? b[2] : null;
    if (d)
      k(f).on("scroll.DT", function (v) {
        v = this.scrollLeft;
        p.scrollLeft = v;
        m && (t.scrollLeft = v);
      });
    k(f).css("max-height", e);
    c.bCollapse || k(f).css("height", e);
    a.nScrollHead = p;
    a.nScrollBody = f;
    a.nScrollFoot = t;
    a.aoDrawCallback.push({ fn: Ea, sName: "scrolling" });
    return l[0];
  }
  function Ea(a) {
    var b = a.oScroll,
      c = b.sX,
      d = b.sXInner,
      e = b.sY;
    b = b.iBarWidth;
    var f = k(a.nScrollHead),
      g = f[0].style,
      h = f.children("div"),
      l = h[0].style,
      n = h.children("table");
    h = a.nScrollBody;
    var m = k(h),
      p = h.style,
      t = k(a.nScrollFoot).children("div"),
      v = t.children("table"),
      x = k(a.nTHead),
      r = k(a.nTable),
      A = r[0],
      E = A.style,
      I = a.nTFoot ? k(a.nTFoot) : null,
      W = a.oBrowser,
      M = W.bScrollOversize,
      C = T(a.aoColumns, "nTh"),
      B = [],
      ba = [],
      X = [],
      lb = [],
      Aa,
      Yb = function (F) {
        F = F.style;
        F.paddingTop = "0";
        F.paddingBottom = "0";
        F.borderTopWidth = "0";
        F.borderBottomWidth = "0";
        F.height = 0;
      };
    var ha = h.scrollHeight > h.clientHeight;
    if (a.scrollBarVis !== ha && a.scrollBarVis !== q)
      (a.scrollBarVis = ha), ra(a);
    else {
      a.scrollBarVis = ha;
      r.children("thead, tfoot").remove();
      if (I) {
        var ka = I.clone().prependTo(r);
        var la = I.find("tr");
        ka = ka.find("tr");
      }
      var mb = x.clone().prependTo(r);
      x = x.find("tr");
      ha = mb.find("tr");
      mb.find("th, td").removeAttr("tabindex");
      c || ((p.width = "100%"), (f[0].style.width = "100%"));
      k.each(Ka(a, mb), function (F, Y) {
        Aa = sa(a, F);
        Y.style.width = a.aoColumns[Aa].sWidth;
      });
      I &&
        Z(function (F) {
          F.style.width = "";
        }, ka);
      f = r.outerWidth();
      "" === c
        ? ((E.width = "100%"),
          M &&
            (r.find("tbody").height() > h.offsetHeight ||
              "scroll" == m.css("overflow-y")) &&
            (E.width = K(r.outerWidth() - b)),
          (f = r.outerWidth()))
        : "" !== d && ((E.width = K(d)), (f = r.outerWidth()));
      Z(Yb, ha);
      Z(function (F) {
        X.push(F.innerHTML);
        B.push(K(k(F).css("width")));
      }, ha);
      Z(function (F, Y) {
        -1 !== k.inArray(F, C) && (F.style.width = B[Y]);
      }, x);
      k(ha).height(0);
      I &&
        (Z(Yb, ka),
        Z(function (F) {
          lb.push(F.innerHTML);
          ba.push(K(k(F).css("width")));
        }, ka),
        Z(function (F, Y) {
          F.style.width = ba[Y];
        }, la),
        k(ka).height(0));
      Z(function (F, Y) {
        F.innerHTML = '<div class="dataTables_sizing">' + X[Y] + "</div>";
        F.childNodes[0].style.height = "0";
        F.childNodes[0].style.overflow = "hidden";
        F.style.width = B[Y];
      }, ha);
      I &&
        Z(function (F, Y) {
          F.innerHTML = '<div class="dataTables_sizing">' + lb[Y] + "</div>";
          F.childNodes[0].style.height = "0";
          F.childNodes[0].style.overflow = "hidden";
          F.style.width = ba[Y];
        }, ka);
      r.outerWidth() < f
        ? ((la =
            h.scrollHeight > h.offsetHeight || "scroll" == m.css("overflow-y")
              ? f + b
              : f),
          M &&
            (h.scrollHeight > h.offsetHeight ||
              "scroll" == m.css("overflow-y")) &&
            (E.width = K(la - b)),
          ("" !== c && "" === d) || aa(a, 1, "Possible column misalignment", 6))
        : (la = "100%");
      p.width = K(la);
      g.width = K(la);
      I && (a.nScrollFoot.style.width = K(la));
      !e && M && (p.height = K(A.offsetHeight + b));
      c = r.outerWidth();
      n[0].style.width = K(c);
      l.width = K(c);
      d = r.height() > h.clientHeight || "scroll" == m.css("overflow-y");
      e = "padding" + (W.bScrollbarLeft ? "Left" : "Right");
      l[e] = d ? b + "px" : "0px";
      I &&
        ((v[0].style.width = K(c)),
        (t[0].style.width = K(c)),
        (t[0].style[e] = d ? b + "px" : "0px"));
      r.children("colgroup").insertBefore(r.children("thead"));
      m.trigger("scroll");
      (!a.bSorted && !a.bFiltered) || a._drawHold || (h.scrollTop = 0);
    }
  }
  function Z(a, b, c) {
    for (var d = 0, e = 0, f = b.length, g, h; e < f; ) {
      g = b[e].firstChild;
      for (h = c ? c[e].firstChild : null; g; )
        1 === g.nodeType && (c ? a(g, h, d) : a(g, d), d++),
          (g = g.nextSibling),
          (h = c ? h.nextSibling : null);
      e++;
    }
  }
  function Xa(a) {
    var b = a.nTable,
      c = a.aoColumns,
      d = a.oScroll,
      e = d.sY,
      f = d.sX,
      g = d.sXInner,
      h = c.length,
      l = Fa(a, "bVisible"),
      n = k("th", a.nTHead),
      m = b.getAttribute("width"),
      p = b.parentNode,
      t = !1,
      v,
      x = a.oBrowser;
    d = x.bScrollOversize;
    (v = b.style.width) && -1 !== v.indexOf("%") && (m = v);
    for (v = 0; v < l.length; v++) {
      var r = c[l[v]];
      null !== r.sWidth && ((r.sWidth = Zb(r.sWidthOrig, p)), (t = !0));
    }
    if (d || (!t && !f && !e && h == na(a) && h == n.length))
      for (v = 0; v < h; v++)
        (l = sa(a, v)), null !== l && (c[l].sWidth = K(n.eq(v).width()));
    else {
      h = k(b).clone().css("visibility", "hidden").removeAttr("id");
      h.find("tbody tr").remove();
      var A = k("<tr/>").appendTo(h.find("tbody"));
      h.find("thead, tfoot").remove();
      h.append(k(a.nTHead).clone()).append(k(a.nTFoot).clone());
      h.find("tfoot th, tfoot td").css("width", "");
      n = Ka(a, h.find("thead")[0]);
      for (v = 0; v < l.length; v++)
        (r = c[l[v]]),
          (n[v].style.width =
            null !== r.sWidthOrig && "" !== r.sWidthOrig
              ? K(r.sWidthOrig)
              : ""),
          r.sWidthOrig &&
            f &&
            k(n[v]).append(
              k("<div/>").css({
                width: r.sWidthOrig,
                margin: 0,
                padding: 0,
                border: 0,
                height: 1,
              })
            );
      if (a.aoData.length)
        for (v = 0; v < l.length; v++)
          (t = l[v]),
            (r = c[t]),
            k($b(a, t)).clone(!1).append(r.sContentPadding).appendTo(A);
      k("[name]", h).removeAttr("name");
      r = k("<div/>")
        .css(
          f || e
            ? {
                position: "absolute",
                top: 0,
                left: 0,
                height: 1,
                right: 0,
                overflow: "hidden",
              }
            : {}
        )
        .append(h)
        .appendTo(p);
      f && g
        ? h.width(g)
        : f
        ? (h.css("width", "auto"),
          h.removeAttr("width"),
          h.width() < p.clientWidth && m && h.width(p.clientWidth))
        : e
        ? h.width(p.clientWidth)
        : m && h.width(m);
      for (v = e = 0; v < l.length; v++)
        (p = k(n[v])),
          (g = p.outerWidth() - p.width()),
          (p = x.bBounding
            ? Math.ceil(n[v].getBoundingClientRect().width)
            : p.outerWidth()),
          (e += p),
          (c[l[v]].sWidth = K(p - g));
      b.style.width = K(e);
      r.remove();
    }
    m && (b.style.width = K(m));
    (!m && !f) ||
      a._reszEvt ||
      ((b = function () {
        k(y).on(
          "resize.DT-" + a.sInstance,
          fb(function () {
            ra(a);
          })
        );
      }),
      d ? setTimeout(b, 1e3) : b(),
      (a._reszEvt = !0));
  }
  function Zb(a, b) {
    if (!a) return 0;
    a = k("<div/>")
      .css("width", K(a))
      .appendTo(b || z.body);
    b = a[0].offsetWidth;
    a.remove();
    return b;
  }
  function $b(a, b) {
    var c = ac(a, b);
    if (0 > c) return null;
    var d = a.aoData[c];
    return d.nTr ? d.anCells[b] : k("<td/>").html(S(a, c, b, "display"))[0];
  }
  function ac(a, b) {
    for (var c, d = -1, e = -1, f = 0, g = a.aoData.length; f < g; f++)
      (c = S(a, f, b, "display") + ""),
        (c = c.replace(sc, "")),
        (c = c.replace(/&nbsp;/g, " ")),
        c.length > d && ((d = c.length), (e = f));
    return e;
  }
  function K(a) {
    return null === a
      ? "0px"
      : "number" == typeof a
      ? 0 > a
        ? "0px"
        : a + "px"
      : a.match(/\d$/)
      ? a + "px"
      : a;
  }
  function pa(a) {
    var b = [],
      c = a.aoColumns;
    var d = a.aaSortingFixed;
    var e = k.isPlainObject(d);
    var f = [];
    var g = function (m) {
      m.length && !Array.isArray(m[0]) ? f.push(m) : k.merge(f, m);
    };
    Array.isArray(d) && g(d);
    e && d.pre && g(d.pre);
    g(a.aaSorting);
    e && d.post && g(d.post);
    for (a = 0; a < f.length; a++) {
      var h = f[a][0];
      g = c[h].aDataSort;
      d = 0;
      for (e = g.length; d < e; d++) {
        var l = g[d];
        var n = c[l].sType || "string";
        f[a]._idx === q && (f[a]._idx = k.inArray(f[a][1], c[l].asSorting));
        b.push({
          src: h,
          col: l,
          dir: f[a][1],
          index: f[a]._idx,
          type: n,
          formatter: u.ext.type.order[n + "-pre"],
        });
      }
    }
    return b;
  }
  function Gb(a) {
    var b,
      c = [],
      d = u.ext.type.order,
      e = a.aoData,
      f = 0,
      g = a.aiDisplayMaster;
    Ya(a);
    var h = pa(a);
    var l = 0;
    for (b = h.length; l < b; l++) {
      var n = h[l];
      n.formatter && f++;
      bc(a, n.col);
    }
    if ("ssp" != P(a) && 0 !== h.length) {
      l = 0;
      for (b = g.length; l < b; l++) c[g[l]] = l;
      f === h.length
        ? g.sort(function (m, p) {
            var t,
              v = h.length,
              x = e[m]._aSortData,
              r = e[p]._aSortData;
            for (t = 0; t < v; t++) {
              var A = h[t];
              var E = x[A.col];
              var I = r[A.col];
              E = E < I ? -1 : E > I ? 1 : 0;
              if (0 !== E) return "asc" === A.dir ? E : -E;
            }
            E = c[m];
            I = c[p];
            return E < I ? -1 : E > I ? 1 : 0;
          })
        : g.sort(function (m, p) {
            var t,
              v = h.length,
              x = e[m]._aSortData,
              r = e[p]._aSortData;
            for (t = 0; t < v; t++) {
              var A = h[t];
              var E = x[A.col];
              var I = r[A.col];
              A = d[A.type + "-" + A.dir] || d["string-" + A.dir];
              E = A(E, I);
              if (0 !== E) return E;
            }
            E = c[m];
            I = c[p];
            return E < I ? -1 : E > I ? 1 : 0;
          });
    }
    a.bSorted = !0;
  }
  function cc(a) {
    var b = a.aoColumns,
      c = pa(a);
    a = a.oLanguage.oAria;
    for (var d = 0, e = b.length; d < e; d++) {
      var f = b[d];
      var g = f.asSorting;
      var h = f.sTitle.replace(/<.*?>/g, "");
      var l = f.nTh;
      l.removeAttribute("aria-sort");
      f.bSortable &&
        (0 < c.length && c[0].col == d
          ? (l.setAttribute(
              "aria-sort",
              "asc" == c[0].dir ? "ascending" : "descending"
            ),
            (f = g[c[0].index + 1] || g[0]))
          : (f = g[0]),
        (h += "asc" === f ? a.sSortAscending : a.sSortDescending));
      l.setAttribute("aria-label", h);
    }
  }
  function nb(a, b, c, d) {
    var e = a.aaSorting,
      f = a.aoColumns[b].asSorting,
      g = function (h, l) {
        var n = h._idx;
        n === q && (n = k.inArray(h[1], f));
        return n + 1 < f.length ? n + 1 : l ? null : 0;
      };
    "number" === typeof e[0] && (e = a.aaSorting = [e]);
    c && a.oFeatures.bSortMulti
      ? ((c = k.inArray(b, T(e, "0"))),
        -1 !== c
          ? ((b = g(e[c], !0)),
            null === b && 1 === e.length && (b = 0),
            null === b ? e.splice(c, 1) : ((e[c][1] = f[b]), (e[c]._idx = b)))
          : (e.push([b, f[0], 0]), (e[e.length - 1]._idx = 0)))
      : e.length && e[0][0] == b
      ? ((b = g(e[0])), (e.length = 1), (e[0][1] = f[b]), (e[0]._idx = b))
      : ((e.length = 0), e.push([b, f[0]]), (e[0]._idx = 0));
    ja(a);
    "function" == typeof d && d(a);
  }
  function db(a, b, c, d) {
    var e = a.aoColumns[c];
    ob(b, {}, function (f) {
      !1 !== e.bSortable &&
        (a.oFeatures.bProcessing
          ? (U(a, !0),
            setTimeout(function () {
              nb(a, c, f.shiftKey, d);
              "ssp" !== P(a) && U(a, !1);
            }, 0))
          : nb(a, c, f.shiftKey, d));
    });
  }
  function Pa(a) {
    var b = a.aLastSort,
      c = a.oClasses.sSortColumn,
      d = pa(a),
      e = a.oFeatures,
      f;
    if (e.bSort && e.bSortClasses) {
      e = 0;
      for (f = b.length; e < f; e++) {
        var g = b[e].src;
        k(T(a.aoData, "anCells", g)).removeClass(c + (2 > e ? e + 1 : 3));
      }
      e = 0;
      for (f = d.length; e < f; e++)
        (g = d[e].src),
          k(T(a.aoData, "anCells", g)).addClass(c + (2 > e ? e + 1 : 3));
    }
    a.aLastSort = d;
  }
  function bc(a, b) {
    var c = a.aoColumns[b],
      d = u.ext.order[c.sSortDataType],
      e;
    d && (e = d.call(a.oInstance, a, b, ta(a, b)));
    for (
      var f, g = u.ext.type.order[c.sType + "-pre"], h = 0, l = a.aoData.length;
      h < l;
      h++
    )
      if (
        ((c = a.aoData[h]),
        c._aSortData || (c._aSortData = []),
        !c._aSortData[b] || d)
      )
        (f = d ? e[h] : S(a, h, b, "sort")), (c._aSortData[b] = g ? g(f) : f);
  }
  function Qa(a) {
    if (a.oFeatures.bStateSave && !a.bDestroying) {
      var b = {
        time: +new Date(),
        start: a._iDisplayStart,
        length: a._iDisplayLength,
        order: k.extend(!0, [], a.aaSorting),
        search: Ub(a.oPreviousSearch),
        columns: k.map(a.aoColumns, function (c, d) {
          return { visible: c.bVisible, search: Ub(a.aoPreSearchCols[d]) };
        }),
      };
      H(a, "aoStateSaveParams", "stateSaveParams", [a, b]);
      a.oSavedState = b;
      a.fnStateSaveCallback.call(a.oInstance, a, b);
    }
  }
  function dc(a, b, c) {
    var d,
      e,
      f = a.aoColumns;
    b = function (h) {
      if (h && h.time) {
        var l = H(a, "aoStateLoadParams", "stateLoadParams", [a, h]);
        if (
          -1 === k.inArray(!1, l) &&
          ((l = a.iStateDuration),
          !(
            (0 < l && h.time < +new Date() - 1e3 * l) ||
            (h.columns && f.length !== h.columns.length)
          ))
        ) {
          a.oLoadedState = k.extend(!0, {}, h);
          h.start !== q &&
            ((a._iDisplayStart = h.start), (a.iInitDisplayStart = h.start));
          h.length !== q && (a._iDisplayLength = h.length);
          h.order !== q &&
            ((a.aaSorting = []),
            k.each(h.order, function (n, m) {
              a.aaSorting.push(m[0] >= f.length ? [0, m[1]] : m);
            }));
          h.search !== q && k.extend(a.oPreviousSearch, Vb(h.search));
          if (h.columns)
            for (d = 0, e = h.columns.length; d < e; d++)
              (l = h.columns[d]),
                l.visible !== q && (f[d].bVisible = l.visible),
                l.search !== q && k.extend(a.aoPreSearchCols[d], Vb(l.search));
          H(a, "aoStateLoaded", "stateLoaded", [a, h]);
        }
      }
      c();
    };
    if (a.oFeatures.bStateSave) {
      var g = a.fnStateLoadCallback.call(a.oInstance, a, b);
      g !== q && b(g);
    } else c();
  }
  function Ra(a) {
    var b = u.settings;
    a = k.inArray(a, T(b, "nTable"));
    return -1 !== a ? b[a] : null;
  }
  function aa(a, b, c, d) {
    c =
      "DataTables warning: " + (a ? "table id=" + a.sTableId + " - " : "") + c;
    d &&
      (c +=
        ". For more information about this error, please see http://datatables.net/tn/" +
        d);
    if (b) y.console && console.log && console.log(c);
    else if (
      ((b = u.ext),
      (b = b.sErrMode || b.errMode),
      a && H(a, null, "error", [a, d, c]),
      "alert" == b)
    )
      alert(c);
    else {
      if ("throw" == b) throw Error(c);
      "function" == typeof b && b(a, d, c);
    }
  }
  function V(a, b, c, d) {
    Array.isArray(c)
      ? k.each(c, function (e, f) {
          Array.isArray(f) ? V(a, b, f[0], f[1]) : V(a, b, f);
        })
      : (d === q && (d = c), b[c] !== q && (a[d] = b[c]));
  }
  function pb(a, b, c) {
    var d;
    for (d in b)
      if (b.hasOwnProperty(d)) {
        var e = b[d];
        k.isPlainObject(e)
          ? (k.isPlainObject(a[d]) || (a[d] = {}), k.extend(!0, a[d], e))
          : c && "data" !== d && "aaData" !== d && Array.isArray(e)
          ? (a[d] = e.slice())
          : (a[d] = e);
      }
    return a;
  }
  function ob(a, b, c) {
    k(a)
      .on("click.DT", b, function (d) {
        k(a).trigger("blur");
        c(d);
      })
      .on("keypress.DT", b, function (d) {
        13 === d.which && (d.preventDefault(), c(d));
      })
      .on("selectstart.DT", function () {
        return !1;
      });
  }
  function Q(a, b, c, d) {
    c && a[b].push({ fn: c, sName: d });
  }
  function H(a, b, c, d) {
    var e = [];
    b &&
      (e = k.map(a[b].slice().reverse(), function (f, g) {
        return f.fn.apply(a.oInstance, d);
      }));
    null !== c &&
      ((b = k.Event(c + ".dt")), k(a.nTable).trigger(b, d), e.push(b.result));
    return e;
  }
  function jb(a) {
    var b = a._iDisplayStart,
      c = a.fnDisplayEnd(),
      d = a._iDisplayLength;
    b >= c && (b = c - d);
    b -= b % d;
    if (-1 === d || 0 > b) b = 0;
    a._iDisplayStart = b;
  }
  function eb(a, b) {
    a = a.renderer;
    var c = u.ext.renderer[b];
    return k.isPlainObject(a) && a[b]
      ? c[a[b]] || c._
      : "string" === typeof a
      ? c[a] || c._
      : c._;
  }
  function P(a) {
    return a.oFeatures.bServerSide
      ? "ssp"
      : a.ajax || a.sAjaxSource
      ? "ajax"
      : "dom";
  }
  function Ba(a, b) {
    var c = ec.numbers_length,
      d = Math.floor(c / 2);
    b <= c
      ? (a = qa(0, b))
      : a <= d
      ? ((a = qa(0, c - 2)), a.push("ellipsis"), a.push(b - 1))
      : (a >= b - 1 - d
          ? (a = qa(b - (c - 2), b))
          : ((a = qa(a - d + 2, a + d - 1)), a.push("ellipsis"), a.push(b - 1)),
        a.splice(0, 0, "ellipsis"),
        a.splice(0, 0, 0));
    a.DT_el = "span";
    return a;
  }
  function Va(a) {
    k.each(
      {
        num: function (b) {
          return Sa(b, a);
        },
        "num-fmt": function (b) {
          return Sa(b, a, qb);
        },
        "html-num": function (b) {
          return Sa(b, a, Ta);
        },
        "html-num-fmt": function (b) {
          return Sa(b, a, Ta, qb);
        },
      },
      function (b, c) {
        L.type.order[b + a + "-pre"] = c;
        b.match(/^html\-/) && (L.type.search[b + a] = L.type.search.html);
      }
    );
  }
  function fc(a) {
    return function () {
      var b = [Ra(this[u.ext.iApiIndex])].concat(
        Array.prototype.slice.call(arguments)
      );
      return u.ext.internal[a].apply(this, b);
    };
  }
  var u = function (a) {
      this.$ = function (f, g) {
        return this.api(!0).$(f, g);
      };
      this._ = function (f, g) {
        return this.api(!0).rows(f, g).data();
      };
      this.api = function (f) {
        return f ? new D(Ra(this[L.iApiIndex])) : new D(this);
      };
      this.fnAddData = function (f, g) {
        var h = this.api(!0);
        f =
          Array.isArray(f) && (Array.isArray(f[0]) || k.isPlainObject(f[0]))
            ? h.rows.add(f)
            : h.row.add(f);
        (g === q || g) && h.draw();
        return f.flatten().toArray();
      };
      this.fnAdjustColumnSizing = function (f) {
        var g = this.api(!0).columns.adjust(),
          h = g.settings()[0],
          l = h.oScroll;
        f === q || f ? g.draw(!1) : ("" !== l.sX || "" !== l.sY) && Ea(h);
      };
      this.fnClearTable = function (f) {
        var g = this.api(!0).clear();
        (f === q || f) && g.draw();
      };
      this.fnClose = function (f) {
        this.api(!0).row(f).child.hide();
      };
      this.fnDeleteRow = function (f, g, h) {
        var l = this.api(!0);
        f = l.rows(f);
        var n = f.settings()[0],
          m = n.aoData[f[0][0]];
        f.remove();
        g && g.call(this, n, m);
        (h === q || h) && l.draw();
        return m;
      };
      this.fnDestroy = function (f) {
        this.api(!0).destroy(f);
      };
      this.fnDraw = function (f) {
        this.api(!0).draw(f);
      };
      this.fnFilter = function (f, g, h, l, n, m) {
        n = this.api(!0);
        null === g || g === q
          ? n.search(f, h, l, m)
          : n.column(g).search(f, h, l, m);
        n.draw();
      };
      this.fnGetData = function (f, g) {
        var h = this.api(!0);
        if (f !== q) {
          var l = f.nodeName ? f.nodeName.toLowerCase() : "";
          return g !== q || "td" == l || "th" == l
            ? h.cell(f, g).data()
            : h.row(f).data() || null;
        }
        return h.data().toArray();
      };
      this.fnGetNodes = function (f) {
        var g = this.api(!0);
        return f !== q ? g.row(f).node() : g.rows().nodes().flatten().toArray();
      };
      this.fnGetPosition = function (f) {
        var g = this.api(!0),
          h = f.nodeName.toUpperCase();
        return "TR" == h
          ? g.row(f).index()
          : "TD" == h || "TH" == h
          ? ((f = g.cell(f).index()), [f.row, f.columnVisible, f.column])
          : null;
      };
      this.fnIsOpen = function (f) {
        return this.api(!0).row(f).child.isShown();
      };
      this.fnOpen = function (f, g, h) {
        return this.api(!0).row(f).child(g, h).show().child()[0];
      };
      this.fnPageChange = function (f, g) {
        f = this.api(!0).page(f);
        (g === q || g) && f.draw(!1);
      };
      this.fnSetColumnVis = function (f, g, h) {
        f = this.api(!0).column(f).visible(g);
        (h === q || h) && f.columns.adjust().draw();
      };
      this.fnSettings = function () {
        return Ra(this[L.iApiIndex]);
      };
      this.fnSort = function (f) {
        this.api(!0).order(f).draw();
      };
      this.fnSortListener = function (f, g, h) {
        this.api(!0).order.listener(f, g, h);
      };
      this.fnUpdate = function (f, g, h, l, n) {
        var m = this.api(!0);
        h === q || null === h ? m.row(g).data(f) : m.cell(g, h).data(f);
        (n === q || n) && m.columns.adjust();
        (l === q || l) && m.draw();
        return 0;
      };
      this.fnVersionCheck = L.fnVersionCheck;
      var b = this,
        c = a === q,
        d = this.length;
      c && (a = {});
      this.oApi = this.internal = L.internal;
      for (var e in u.ext.internal) e && (this[e] = fc(e));
      this.each(function () {
        var f = {},
          g = 1 < d ? pb(f, a, !0) : a,
          h = 0,
          l;
        f = this.getAttribute("id");
        var n = !1,
          m = u.defaults,
          p = k(this);
        if ("table" != this.nodeName.toLowerCase())
          aa(
            null,
            0,
            "Non-table node initialisation (" + this.nodeName + ")",
            2
          );
        else {
          yb(m);
          zb(m.column);
          O(m, m, !0);
          O(m.column, m.column, !0);
          O(m, k.extend(g, p.data()), !0);
          var t = u.settings;
          h = 0;
          for (l = t.length; h < l; h++) {
            var v = t[h];
            if (
              v.nTable == this ||
              (v.nTHead && v.nTHead.parentNode == this) ||
              (v.nTFoot && v.nTFoot.parentNode == this)
            ) {
              var x = g.bRetrieve !== q ? g.bRetrieve : m.bRetrieve;
              if (c || x) return v.oInstance;
              if (g.bDestroy !== q ? g.bDestroy : m.bDestroy) {
                v.oInstance.fnDestroy();
                break;
              } else {
                aa(v, 0, "Cannot reinitialise DataTable", 3);
                return;
              }
            }
            if (v.sTableId == this.id) {
              t.splice(h, 1);
              break;
            }
          }
          if (null === f || "" === f)
            this.id = f = "DataTables_Table_" + u.ext._unique++;
          var r = k.extend(!0, {}, u.models.oSettings, {
            sDestroyWidth: p[0].style.width,
            sInstance: f,
            sTableId: f,
          });
          r.nTable = this;
          r.oApi = b.internal;
          r.oInit = g;
          t.push(r);
          r.oInstance = 1 === b.length ? b : p.dataTable();
          yb(g);
          ma(g.oLanguage);
          g.aLengthMenu &&
            !g.iDisplayLength &&
            (g.iDisplayLength = Array.isArray(g.aLengthMenu[0])
              ? g.aLengthMenu[0][0]
              : g.aLengthMenu[0]);
          g = pb(k.extend(!0, {}, m), g);
          V(
            r.oFeatures,
            g,
            "bPaginate bLengthChange bFilter bSort bSortMulti bInfo bProcessing bAutoWidth bSortClasses bServerSide bDeferRender".split(
              " "
            )
          );
          V(r, g, [
            "asStripeClasses",
            "ajax",
            "fnServerData",
            "fnFormatNumber",
            "sServerMethod",
            "aaSorting",
            "aaSortingFixed",
            "aLengthMenu",
            "sPaginationType",
            "sAjaxSource",
            "sAjaxDataProp",
            "iStateDuration",
            "sDom",
            "bSortCellsTop",
            "iTabIndex",
            "fnStateLoadCallback",
            "fnStateSaveCallback",
            "renderer",
            "searchDelay",
            "rowId",
            ["iCookieDuration", "iStateDuration"],
            ["oSearch", "oPreviousSearch"],
            ["aoSearchCols", "aoPreSearchCols"],
            ["iDisplayLength", "_iDisplayLength"],
          ]);
          V(r.oScroll, g, [
            ["sScrollX", "sX"],
            ["sScrollXInner", "sXInner"],
            ["sScrollY", "sY"],
            ["bScrollCollapse", "bCollapse"],
          ]);
          V(r.oLanguage, g, "fnInfoCallback");
          Q(r, "aoDrawCallback", g.fnDrawCallback, "user");
          Q(r, "aoServerParams", g.fnServerParams, "user");
          Q(r, "aoStateSaveParams", g.fnStateSaveParams, "user");
          Q(r, "aoStateLoadParams", g.fnStateLoadParams, "user");
          Q(r, "aoStateLoaded", g.fnStateLoaded, "user");
          Q(r, "aoRowCallback", g.fnRowCallback, "user");
          Q(r, "aoRowCreatedCallback", g.fnCreatedRow, "user");
          Q(r, "aoHeaderCallback", g.fnHeaderCallback, "user");
          Q(r, "aoFooterCallback", g.fnFooterCallback, "user");
          Q(r, "aoInitComplete", g.fnInitComplete, "user");
          Q(r, "aoPreDrawCallback", g.fnPreDrawCallback, "user");
          r.rowIdFn = ia(g.rowId);
          Ab(r);
          var A = r.oClasses;
          k.extend(A, u.ext.classes, g.oClasses);
          p.addClass(A.sTable);
          r.iInitDisplayStart === q &&
            ((r.iInitDisplayStart = g.iDisplayStart),
            (r._iDisplayStart = g.iDisplayStart));
          null !== g.iDeferLoading &&
            ((r.bDeferLoading = !0),
            (f = Array.isArray(g.iDeferLoading)),
            (r._iRecordsDisplay = f ? g.iDeferLoading[0] : g.iDeferLoading),
            (r._iRecordsTotal = f ? g.iDeferLoading[1] : g.iDeferLoading));
          var E = r.oLanguage;
          k.extend(!0, E, g.oLanguage);
          E.sUrl
            ? (k.ajax({
                dataType: "json",
                url: E.sUrl,
                success: function (C) {
                  ma(C);
                  O(m.oLanguage, C);
                  k.extend(!0, E, C);
                  H(r, null, "i18n", [r]);
                  za(r);
                },
                error: function () {
                  za(r);
                },
              }),
              (n = !0))
            : H(r, null, "i18n", [r]);
          null === g.asStripeClasses &&
            (r.asStripeClasses = [A.sStripeOdd, A.sStripeEven]);
          f = r.asStripeClasses;
          var I = p.children("tbody").find("tr").eq(0);
          -1 !==
            k.inArray(
              !0,
              k.map(f, function (C, B) {
                return I.hasClass(C);
              })
            ) &&
            (k("tbody tr", this).removeClass(f.join(" ")),
            (r.asDestroyStripes = f.slice()));
          f = [];
          t = this.getElementsByTagName("thead");
          0 !== t.length && (wa(r.aoHeader, t[0]), (f = Ka(r)));
          if (null === g.aoColumns)
            for (t = [], h = 0, l = f.length; h < l; h++) t.push(null);
          else t = g.aoColumns;
          h = 0;
          for (l = t.length; h < l; h++) Wa(r, f ? f[h] : null);
          Cb(r, g.aoColumnDefs, t, function (C, B) {
            Da(r, C, B);
          });
          if (I.length) {
            var W = function (C, B) {
              return null !== C.getAttribute("data-" + B) ? B : null;
            };
            k(I[0])
              .children("th, td")
              .each(function (C, B) {
                var ba = r.aoColumns[C];
                if (ba.mData === C) {
                  var X = W(B, "sort") || W(B, "order");
                  B = W(B, "filter") || W(B, "search");
                  if (null !== X || null !== B)
                    (ba.mData = {
                      _: C + ".display",
                      sort: null !== X ? C + ".@data-" + X : q,
                      type: null !== X ? C + ".@data-" + X : q,
                      filter: null !== B ? C + ".@data-" + B : q,
                    }),
                      Da(r, C);
                }
              });
          }
          var M = r.oFeatures;
          f = function () {
            if (g.aaSorting === q) {
              var C = r.aaSorting;
              h = 0;
              for (l = C.length; h < l; h++)
                C[h][1] = r.aoColumns[h].asSorting[0];
            }
            Pa(r);
            M.bSort &&
              Q(r, "aoDrawCallback", function () {
                if (r.bSorted) {
                  var ba = pa(r),
                    X = {};
                  k.each(ba, function (lb, Aa) {
                    X[Aa.src] = Aa.dir;
                  });
                  H(r, null, "order", [r, ba, X]);
                  cc(r);
                }
              });
            Q(
              r,
              "aoDrawCallback",
              function () {
                (r.bSorted || "ssp" === P(r) || M.bDeferRender) && Pa(r);
              },
              "sc"
            );
            C = p.children("caption").each(function () {
              this._captionSide = k(this).css("caption-side");
            });
            var B = p.children("thead");
            0 === B.length && (B = k("<thead/>").appendTo(p));
            r.nTHead = B[0];
            B = p.children("tbody");
            0 === B.length && (B = k("<tbody/>").appendTo(p));
            r.nTBody = B[0];
            B = p.children("tfoot");
            0 === B.length &&
              0 < C.length &&
              ("" !== r.oScroll.sX || "" !== r.oScroll.sY) &&
              (B = k("<tfoot/>").appendTo(p));
            0 === B.length || 0 === B.children().length
              ? p.addClass(A.sNoFooter)
              : 0 < B.length && ((r.nTFoot = B[0]), wa(r.aoFooter, r.nTFoot));
            if (g.aaData)
              for (h = 0; h < g.aaData.length; h++) ea(r, g.aaData[h]);
            else
              (r.bDeferLoading || "dom" == P(r)) &&
                Ga(r, k(r.nTBody).children("tr"));
            r.aiDisplay = r.aiDisplayMaster.slice();
            r.bInitialised = !0;
            !1 === n && za(r);
          };
          g.bStateSave
            ? ((M.bStateSave = !0),
              Q(r, "aoDrawCallback", Qa, "state_save"),
              dc(r, g, f))
            : f();
        }
      });
      b = null;
      return this;
    },
    L,
    w,
    J,
    rb = {},
    gc = /[\r\n\u2028]/g,
    Ta = /<.*?>/g,
    tc =
      /^\d{2,4}[\.\/\-]\d{1,2}[\.\/\-]\d{1,2}([T ]{1}\d{1,2}[:\.]\d{2}([\.:]\d{2})?)?$/,
    uc = /(\/|\.|\*|\+|\?|\||\(|\)|\[|\]|\{|\}|\\|\$|\^|\-)/g,
    qb = /['\u00A0,$£€¥%\u2009\u202F\u20BD\u20a9\u20BArfkɃΞ]/gi,
    ca = function (a) {
      return a && !0 !== a && "-" !== a ? !1 : !0;
    },
    hc = function (a) {
      var b = parseInt(a, 10);
      return !isNaN(b) && isFinite(a) ? b : null;
    },
    ic = function (a, b) {
      rb[b] || (rb[b] = new RegExp(hb(b), "g"));
      return "string" === typeof a && "." !== b
        ? a.replace(/\./g, "").replace(rb[b], ".")
        : a;
    },
    sb = function (a, b, c) {
      var d = "string" === typeof a;
      if (ca(a)) return !0;
      b && d && (a = ic(a, b));
      c && d && (a = a.replace(qb, ""));
      return !isNaN(parseFloat(a)) && isFinite(a);
    },
    jc = function (a, b, c) {
      return ca(a)
        ? !0
        : ca(a) || "string" === typeof a
        ? sb(a.replace(Ta, ""), b, c)
          ? !0
          : null
        : null;
    },
    T = function (a, b, c) {
      var d = [],
        e = 0,
        f = a.length;
      if (c !== q) for (; e < f; e++) a[e] && a[e][b] && d.push(a[e][b][c]);
      else for (; e < f; e++) a[e] && d.push(a[e][b]);
      return d;
    },
    Ca = function (a, b, c, d) {
      var e = [],
        f = 0,
        g = b.length;
      if (d !== q) for (; f < g; f++) a[b[f]][c] && e.push(a[b[f]][c][d]);
      else for (; f < g; f++) e.push(a[b[f]][c]);
      return e;
    },
    qa = function (a, b) {
      var c = [];
      if (b === q) {
        b = 0;
        var d = a;
      } else (d = b), (b = a);
      for (a = b; a < d; a++) c.push(a);
      return c;
    },
    kc = function (a) {
      for (var b = [], c = 0, d = a.length; c < d; c++) a[c] && b.push(a[c]);
      return b;
    },
    Ja = function (a) {
      a: {
        if (!(2 > a.length)) {
          var b = a.slice().sort();
          for (var c = b[0], d = 1, e = b.length; d < e; d++) {
            if (b[d] === c) {
              b = !1;
              break a;
            }
            c = b[d];
          }
        }
        b = !0;
      }
      if (b) return a.slice();
      b = [];
      e = a.length;
      var f,
        g = 0;
      d = 0;
      a: for (; d < e; d++) {
        c = a[d];
        for (f = 0; f < g; f++) if (b[f] === c) continue a;
        b.push(c);
        g++;
      }
      return b;
    },
    lc = function (a, b) {
      if (Array.isArray(b)) for (var c = 0; c < b.length; c++) lc(a, b[c]);
      else a.push(b);
      return a;
    };
  Array.isArray ||
    (Array.isArray = function (a) {
      return "[object Array]" === Object.prototype.toString.call(a);
    });
  String.prototype.trim ||
    (String.prototype.trim = function () {
      return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
    });
  u.util = {
    throttle: function (a, b) {
      var c = b !== q ? b : 200,
        d,
        e;
      return function () {
        var f = this,
          g = +new Date(),
          h = arguments;
        d && g < d + c
          ? (clearTimeout(e),
            (e = setTimeout(function () {
              d = q;
              a.apply(f, h);
            }, c)))
          : ((d = g), a.apply(f, h));
      };
    },
    escapeRegex: function (a) {
      return a.replace(uc, "\\$1");
    },
  };
  var R = function (a, b, c) {
      a[b] !== q && (a[c] = a[b]);
    },
    ua = /\[.*?\]$/,
    oa = /\(\)$/,
    hb = u.util.escapeRegex,
    Oa = k("<div>")[0],
    rc = Oa.textContent !== q,
    sc = /<.*?>/g,
    fb = u.util.throttle,
    mc = [],
    N = Array.prototype,
    vc = function (a) {
      var b,
        c = u.settings,
        d = k.map(c, function (f, g) {
          return f.nTable;
        });
      if (a) {
        if (a.nTable && a.oApi) return [a];
        if (a.nodeName && "table" === a.nodeName.toLowerCase()) {
          var e = k.inArray(a, d);
          return -1 !== e ? [c[e]] : null;
        }
        if (a && "function" === typeof a.settings)
          return a.settings().toArray();
        "string" === typeof a ? (b = k(a)) : a instanceof k && (b = a);
      } else return [];
      if (b)
        return b
          .map(function (f) {
            e = k.inArray(this, d);
            return -1 !== e ? c[e] : null;
          })
          .toArray();
    };
  var D = function (a, b) {
    if (!(this instanceof D)) return new D(a, b);
    var c = [],
      d = function (g) {
        (g = vc(g)) && c.push.apply(c, g);
      };
    if (Array.isArray(a)) for (var e = 0, f = a.length; e < f; e++) d(a[e]);
    else d(a);
    this.context = Ja(c);
    b && k.merge(this, b);
    this.selector = { rows: null, cols: null, opts: null };
    D.extend(this, this, mc);
  };
  u.Api = D;
  k.extend(D.prototype, {
    any: function () {
      return 0 !== this.count();
    },
    concat: N.concat,
    context: [],
    count: function () {
      return this.flatten().length;
    },
    each: function (a) {
      for (var b = 0, c = this.length; b < c; b++)
        a.call(this, this[b], b, this);
      return this;
    },
    eq: function (a) {
      var b = this.context;
      return b.length > a ? new D(b[a], this[a]) : null;
    },
    filter: function (a) {
      var b = [];
      if (N.filter) b = N.filter.call(this, a, this);
      else
        for (var c = 0, d = this.length; c < d; c++)
          a.call(this, this[c], c, this) && b.push(this[c]);
      return new D(this.context, b);
    },
    flatten: function () {
      var a = [];
      return new D(this.context, a.concat.apply(a, this.toArray()));
    },
    join: N.join,
    indexOf:
      N.indexOf ||
      function (a, b) {
        b = b || 0;
        for (var c = this.length; b < c; b++) if (this[b] === a) return b;
        return -1;
      },
    iterator: function (a, b, c, d) {
      var e = [],
        f,
        g,
        h = this.context,
        l,
        n = this.selector;
      "string" === typeof a && ((d = c), (c = b), (b = a), (a = !1));
      var m = 0;
      for (f = h.length; m < f; m++) {
        var p = new D(h[m]);
        if ("table" === b) {
          var t = c.call(p, h[m], m);
          t !== q && e.push(t);
        } else if ("columns" === b || "rows" === b)
          (t = c.call(p, h[m], this[m], m)), t !== q && e.push(t);
        else if (
          "column" === b ||
          "column-rows" === b ||
          "row" === b ||
          "cell" === b
        ) {
          var v = this[m];
          "column-rows" === b && (l = Ua(h[m], n.opts));
          var x = 0;
          for (g = v.length; x < g; x++)
            (t = v[x]),
              (t =
                "cell" === b
                  ? c.call(p, h[m], t.row, t.column, m, x)
                  : c.call(p, h[m], t, m, x, l)),
              t !== q && e.push(t);
        }
      }
      return e.length || d
        ? ((a = new D(h, a ? e.concat.apply([], e) : e)),
          (b = a.selector),
          (b.rows = n.rows),
          (b.cols = n.cols),
          (b.opts = n.opts),
          a)
        : this;
    },
    lastIndexOf:
      N.lastIndexOf ||
      function (a, b) {
        return this.indexOf.apply(this.toArray.reverse(), arguments);
      },
    length: 0,
    map: function (a) {
      var b = [];
      if (N.map) b = N.map.call(this, a, this);
      else
        for (var c = 0, d = this.length; c < d; c++)
          b.push(a.call(this, this[c], c));
      return new D(this.context, b);
    },
    pluck: function (a) {
      return this.map(function (b) {
        return b[a];
      });
    },
    pop: N.pop,
    push: N.push,
    reduce:
      N.reduce ||
      function (a, b) {
        return Bb(this, a, b, 0, this.length, 1);
      },
    reduceRight:
      N.reduceRight ||
      function (a, b) {
        return Bb(this, a, b, this.length - 1, -1, -1);
      },
    reverse: N.reverse,
    selector: null,
    shift: N.shift,
    slice: function () {
      return new D(this.context, this);
    },
    sort: N.sort,
    splice: N.splice,
    toArray: function () {
      return N.slice.call(this);
    },
    to$: function () {
      return k(this);
    },
    toJQuery: function () {
      return k(this);
    },
    unique: function () {
      return new D(this.context, Ja(this));
    },
    unshift: N.unshift,
  });
  D.extend = function (a, b, c) {
    if (c.length && b && (b instanceof D || b.__dt_wrapper)) {
      var d,
        e = function (h, l, n) {
          return function () {
            var m = l.apply(h, arguments);
            D.extend(m, m, n.methodExt);
            return m;
          };
        };
      var f = 0;
      for (d = c.length; f < d; f++) {
        var g = c[f];
        b[g.name] =
          "function" === g.type
            ? e(a, g.val, g)
            : "object" === g.type
            ? {}
            : g.val;
        b[g.name].__dt_wrapper = !0;
        D.extend(a, b[g.name], g.propExt);
      }
    }
  };
  D.register = w = function (a, b) {
    if (Array.isArray(a))
      for (var c = 0, d = a.length; c < d; c++) D.register(a[c], b);
    else {
      d = a.split(".");
      var e = mc,
        f;
      a = 0;
      for (c = d.length; a < c; a++) {
        var g = (f = -1 !== d[a].indexOf("()")) ? d[a].replace("()", "") : d[a];
        a: {
          var h = 0;
          for (var l = e.length; h < l; h++)
            if (e[h].name === g) {
              h = e[h];
              break a;
            }
          h = null;
        }
        h ||
          ((h = {
            name: g,
            val: {},
            methodExt: [],
            propExt: [],
            type: "object",
          }),
          e.push(h));
        a === c - 1
          ? ((h.val = b),
            (h.type =
              "function" === typeof b
                ? "function"
                : k.isPlainObject(b)
                ? "object"
                : "other"))
          : (e = f ? h.methodExt : h.propExt);
      }
    }
  };
  D.registerPlural = J = function (a, b, c) {
    D.register(a, c);
    D.register(b, function () {
      var d = c.apply(this, arguments);
      return d === this
        ? this
        : d instanceof D
        ? d.length
          ? Array.isArray(d[0])
            ? new D(d.context, d[0])
            : d[0]
          : q
        : d;
    });
  };
  var nc = function (a, b) {
    if (Array.isArray(a))
      return k.map(a, function (d) {
        return nc(d, b);
      });
    if ("number" === typeof a) return [b[a]];
    var c = k.map(b, function (d, e) {
      return d.nTable;
    });
    return k(c)
      .filter(a)
      .map(function (d) {
        d = k.inArray(this, c);
        return b[d];
      })
      .toArray();
  };
  w("tables()", function (a) {
    return a !== q && null !== a ? new D(nc(a, this.context)) : this;
  });
  w("table()", function (a) {
    a = this.tables(a);
    var b = a.context;
    return b.length ? new D(b[0]) : a;
  });
  J("tables().nodes()", "table().node()", function () {
    return this.iterator(
      "table",
      function (a) {
        return a.nTable;
      },
      1
    );
  });
  J("tables().body()", "table().body()", function () {
    return this.iterator(
      "table",
      function (a) {
        return a.nTBody;
      },
      1
    );
  });
  J("tables().header()", "table().header()", function () {
    return this.iterator(
      "table",
      function (a) {
        return a.nTHead;
      },
      1
    );
  });
  J("tables().footer()", "table().footer()", function () {
    return this.iterator(
      "table",
      function (a) {
        return a.nTFoot;
      },
      1
    );
  });
  J("tables().containers()", "table().container()", function () {
    return this.iterator(
      "table",
      function (a) {
        return a.nTableWrapper;
      },
      1
    );
  });
  w("draw()", function (a) {
    return this.iterator("table", function (b) {
      "page" === a
        ? fa(b)
        : ("string" === typeof a && (a = "full-hold" === a ? !1 : !0),
          ja(b, !1 === a));
    });
  });
  w("page()", function (a) {
    return a === q
      ? this.page.info().page
      : this.iterator("table", function (b) {
          kb(b, a);
        });
  });
  w("page.info()", function (a) {
    if (0 === this.context.length) return q;
    a = this.context[0];
    var b = a._iDisplayStart,
      c = a.oFeatures.bPaginate ? a._iDisplayLength : -1,
      d = a.fnRecordsDisplay(),
      e = -1 === c;
    return {
      page: e ? 0 : Math.floor(b / c),
      pages: e ? 1 : Math.ceil(d / c),
      start: b,
      end: a.fnDisplayEnd(),
      length: c,
      recordsTotal: a.fnRecordsTotal(),
      recordsDisplay: d,
      serverSide: "ssp" === P(a),
    };
  });
  w("page.len()", function (a) {
    return a === q
      ? 0 !== this.context.length
        ? this.context[0]._iDisplayLength
        : q
      : this.iterator("table", function (b) {
          ib(b, a);
        });
  });
  var oc = function (a, b, c) {
    if (c) {
      var d = new D(a);
      d.one("draw", function () {
        c(d.ajax.json());
      });
    }
    if ("ssp" == P(a)) ja(a, b);
    else {
      U(a, !0);
      var e = a.jqXHR;
      e && 4 !== e.readyState && e.abort();
      La(a, [], function (f) {
        Ha(a);
        f = Ma(a, f);
        for (var g = 0, h = f.length; g < h; g++) ea(a, f[g]);
        ja(a, b);
        U(a, !1);
      });
    }
  };
  w("ajax.json()", function () {
    var a = this.context;
    if (0 < a.length) return a[0].json;
  });
  w("ajax.params()", function () {
    var a = this.context;
    if (0 < a.length) return a[0].oAjaxData;
  });
  w("ajax.reload()", function (a, b) {
    return this.iterator("table", function (c) {
      oc(c, !1 === b, a);
    });
  });
  w("ajax.url()", function (a) {
    var b = this.context;
    if (a === q) {
      if (0 === b.length) return q;
      b = b[0];
      return b.ajax
        ? k.isPlainObject(b.ajax)
          ? b.ajax.url
          : b.ajax
        : b.sAjaxSource;
    }
    return this.iterator("table", function (c) {
      k.isPlainObject(c.ajax) ? (c.ajax.url = a) : (c.ajax = a);
    });
  });
  w("ajax.url().load()", function (a, b) {
    return this.iterator("table", function (c) {
      oc(c, !1 === b, a);
    });
  });
  var tb = function (a, b, c, d, e) {
      var f = [],
        g,
        h,
        l;
      var n = typeof b;
      (b && "string" !== n && "function" !== n && b.length !== q) || (b = [b]);
      n = 0;
      for (h = b.length; n < h; n++) {
        var m =
          b[n] && b[n].split && !b[n].match(/[\[\(:]/)
            ? b[n].split(",")
            : [b[n]];
        var p = 0;
        for (l = m.length; p < l; p++)
          (g = c("string" === typeof m[p] ? m[p].trim() : m[p])) &&
            g.length &&
            (f = f.concat(g));
      }
      a = L.selector[a];
      if (a.length) for (n = 0, h = a.length; n < h; n++) f = a[n](d, e, f);
      return Ja(f);
    },
    ub = function (a) {
      a || (a = {});
      a.filter && a.search === q && (a.search = a.filter);
      return k.extend({ search: "none", order: "current", page: "all" }, a);
    },
    vb = function (a) {
      for (var b = 0, c = a.length; b < c; b++)
        if (0 < a[b].length)
          return (
            (a[0] = a[b]),
            (a[0].length = 1),
            (a.length = 1),
            (a.context = [a.context[b]]),
            a
          );
      a.length = 0;
      return a;
    },
    Ua = function (a, b) {
      var c = [],
        d = a.aiDisplay;
      var e = a.aiDisplayMaster;
      var f = b.search;
      var g = b.order;
      b = b.page;
      if ("ssp" == P(a)) return "removed" === f ? [] : qa(0, e.length);
      if ("current" == b)
        for (g = a._iDisplayStart, a = a.fnDisplayEnd(); g < a; g++)
          c.push(d[g]);
      else if ("current" == g || "applied" == g)
        if ("none" == f) c = e.slice();
        else if ("applied" == f) c = d.slice();
        else {
          if ("removed" == f) {
            var h = {};
            g = 0;
            for (a = d.length; g < a; g++) h[d[g]] = null;
            c = k.map(e, function (l) {
              return h.hasOwnProperty(l) ? null : l;
            });
          }
        }
      else if ("index" == g || "original" == g)
        for (g = 0, a = a.aoData.length; g < a; g++)
          "none" == f
            ? c.push(g)
            : ((e = k.inArray(g, d)),
              ((-1 === e && "removed" == f) || (0 <= e && "applied" == f)) &&
                c.push(g));
      return c;
    },
    wc = function (a, b, c) {
      var d;
      return tb(
        "row",
        b,
        function (e) {
          var f = hc(e),
            g = a.aoData;
          if (null !== f && !c) return [f];
          d || (d = Ua(a, c));
          if (null !== f && -1 !== k.inArray(f, d)) return [f];
          if (null === e || e === q || "" === e) return d;
          if ("function" === typeof e)
            return k.map(d, function (l) {
              var n = g[l];
              return e(l, n._aData, n.nTr) ? l : null;
            });
          if (e.nodeName) {
            f = e._DT_RowIndex;
            var h = e._DT_CellIndex;
            if (f !== q) return g[f] && g[f].nTr === e ? [f] : [];
            if (h)
              return g[h.row] && g[h.row].nTr === e.parentNode ? [h.row] : [];
            f = k(e).closest("*[data-dt-row]");
            return f.length ? [f.data("dt-row")] : [];
          }
          if (
            "string" === typeof e &&
            "#" === e.charAt(0) &&
            ((f = a.aIds[e.replace(/^#/, "")]), f !== q)
          )
            return [f.idx];
          f = kc(Ca(a.aoData, d, "nTr"));
          return k(f)
            .filter(e)
            .map(function () {
              return this._DT_RowIndex;
            })
            .toArray();
        },
        a,
        c
      );
    };
  w("rows()", function (a, b) {
    a === q ? (a = "") : k.isPlainObject(a) && ((b = a), (a = ""));
    b = ub(b);
    var c = this.iterator(
      "table",
      function (d) {
        return wc(d, a, b);
      },
      1
    );
    c.selector.rows = a;
    c.selector.opts = b;
    return c;
  });
  w("rows().nodes()", function () {
    return this.iterator(
      "row",
      function (a, b) {
        return a.aoData[b].nTr || q;
      },
      1
    );
  });
  w("rows().data()", function () {
    return this.iterator(
      !0,
      "rows",
      function (a, b) {
        return Ca(a.aoData, b, "_aData");
      },
      1
    );
  });
  J("rows().cache()", "row().cache()", function (a) {
    return this.iterator(
      "row",
      function (b, c) {
        b = b.aoData[c];
        return "search" === a ? b._aFilterData : b._aSortData;
      },
      1
    );
  });
  J("rows().invalidate()", "row().invalidate()", function (a) {
    return this.iterator("row", function (b, c) {
      va(b, c, a);
    });
  });
  J("rows().indexes()", "row().index()", function () {
    return this.iterator(
      "row",
      function (a, b) {
        return b;
      },
      1
    );
  });
  J("rows().ids()", "row().id()", function (a) {
    for (var b = [], c = this.context, d = 0, e = c.length; d < e; d++)
      for (var f = 0, g = this[d].length; f < g; f++) {
        var h = c[d].rowIdFn(c[d].aoData[this[d][f]]._aData);
        b.push((!0 === a ? "#" : "") + h);
      }
    return new D(c, b);
  });
  J("rows().remove()", "row().remove()", function () {
    var a = this;
    this.iterator("row", function (b, c, d) {
      var e = b.aoData,
        f = e[c],
        g,
        h;
      e.splice(c, 1);
      var l = 0;
      for (g = e.length; l < g; l++) {
        var n = e[l];
        var m = n.anCells;
        null !== n.nTr && (n.nTr._DT_RowIndex = l);
        if (null !== m)
          for (n = 0, h = m.length; n < h; n++) m[n]._DT_CellIndex.row = l;
      }
      Ia(b.aiDisplayMaster, c);
      Ia(b.aiDisplay, c);
      Ia(a[d], c, !1);
      0 < b._iRecordsDisplay && b._iRecordsDisplay--;
      jb(b);
      c = b.rowIdFn(f._aData);
      c !== q && delete b.aIds[c];
    });
    this.iterator("table", function (b) {
      for (var c = 0, d = b.aoData.length; c < d; c++) b.aoData[c].idx = c;
    });
    return this;
  });
  w("rows.add()", function (a) {
    var b = this.iterator(
        "table",
        function (d) {
          var e,
            f = [];
          var g = 0;
          for (e = a.length; g < e; g++) {
            var h = a[g];
            h.nodeName && "TR" === h.nodeName.toUpperCase()
              ? f.push(Ga(d, h)[0])
              : f.push(ea(d, h));
          }
          return f;
        },
        1
      ),
      c = this.rows(-1);
    c.pop();
    k.merge(c, b);
    return c;
  });
  w("row()", function (a, b) {
    return vb(this.rows(a, b));
  });
  w("row().data()", function (a) {
    var b = this.context;
    if (a === q)
      return b.length && this.length ? b[0].aoData[this[0]]._aData : q;
    var c = b[0].aoData[this[0]];
    c._aData = a;
    Array.isArray(a) && c.nTr && c.nTr.id && da(b[0].rowId)(a, c.nTr.id);
    va(b[0], this[0], "data");
    return this;
  });
  w("row().node()", function () {
    var a = this.context;
    return a.length && this.length ? a[0].aoData[this[0]].nTr || null : null;
  });
  w("row.add()", function (a) {
    a instanceof k && a.length && (a = a[0]);
    var b = this.iterator("table", function (c) {
      return a.nodeName && "TR" === a.nodeName.toUpperCase()
        ? Ga(c, a)[0]
        : ea(c, a);
    });
    return this.row(b[0]);
  });
  var xc = function (a, b, c, d) {
      var e = [],
        f = function (g, h) {
          if (Array.isArray(g) || g instanceof k)
            for (var l = 0, n = g.length; l < n; l++) f(g[l], h);
          else
            g.nodeName && "tr" === g.nodeName.toLowerCase()
              ? e.push(g)
              : ((l = k("<tr><td></td></tr>").addClass(h)),
                (k("td", l).addClass(h).html(g)[0].colSpan = na(a)),
                e.push(l[0]));
        };
      f(c, d);
      b._details && b._details.detach();
      b._details = k(e);
      b._detailsShow && b._details.insertAfter(b.nTr);
    },
    wb = function (a, b) {
      var c = a.context;
      c.length &&
        (a = c[0].aoData[b !== q ? b : a[0]]) &&
        a._details &&
        (a._details.remove(), (a._detailsShow = q), (a._details = q));
    },
    pc = function (a, b) {
      var c = a.context;
      c.length &&
        a.length &&
        ((a = c[0].aoData[a[0]]),
        a._details &&
          ((a._detailsShow = b)
            ? a._details.insertAfter(a.nTr)
            : a._details.detach(),
          yc(c[0])));
    },
    yc = function (a) {
      var b = new D(a),
        c = a.aoData;
      b.off(
        "draw.dt.DT_details column-visibility.dt.DT_details destroy.dt.DT_details"
      );
      0 < T(c, "_details").length &&
        (b.on("draw.dt.DT_details", function (d, e) {
          a === e &&
            b
              .rows({ page: "current" })
              .eq(0)
              .each(function (f) {
                f = c[f];
                f._detailsShow && f._details.insertAfter(f.nTr);
              });
        }),
        b.on("column-visibility.dt.DT_details", function (d, e, f, g) {
          if (a === e)
            for (e = na(e), f = 0, g = c.length; f < g; f++)
              (d = c[f]),
                d._details &&
                  d._details.children("td[colspan]").attr("colspan", e);
        }),
        b.on("destroy.dt.DT_details", function (d, e) {
          if (a === e)
            for (d = 0, e = c.length; d < e; d++) c[d]._details && wb(b, d);
        }));
    };
  w("row().child()", function (a, b) {
    var c = this.context;
    if (a === q)
      return c.length && this.length ? c[0].aoData[this[0]]._details : q;
    !0 === a
      ? this.child.show()
      : !1 === a
      ? wb(this)
      : c.length && this.length && xc(c[0], c[0].aoData[this[0]], a, b);
    return this;
  });
  w(["row().child.show()", "row().child().show()"], function (a) {
    pc(this, !0);
    return this;
  });
  w(["row().child.hide()", "row().child().hide()"], function () {
    pc(this, !1);
    return this;
  });
  w(["row().child.remove()", "row().child().remove()"], function () {
    wb(this);
    return this;
  });
  w("row().child.isShown()", function () {
    var a = this.context;
    return a.length && this.length
      ? a[0].aoData[this[0]]._detailsShow || !1
      : !1;
  });
  var zc = /^([^:]+):(name|visIdx|visible)$/,
    qc = function (a, b, c, d, e) {
      c = [];
      d = 0;
      for (var f = e.length; d < f; d++) c.push(S(a, e[d], b));
      return c;
    },
    Ac = function (a, b, c) {
      var d = a.aoColumns,
        e = T(d, "sName"),
        f = T(d, "nTh");
      return tb(
        "column",
        b,
        function (g) {
          var h = hc(g);
          if ("" === g) return qa(d.length);
          if (null !== h) return [0 <= h ? h : d.length + h];
          if ("function" === typeof g) {
            var l = Ua(a, c);
            return k.map(d, function (p, t) {
              return g(t, qc(a, t, 0, 0, l), f[t]) ? t : null;
            });
          }
          var n = "string" === typeof g ? g.match(zc) : "";
          if (n)
            switch (n[2]) {
              case "visIdx":
              case "visible":
                h = parseInt(n[1], 10);
                if (0 > h) {
                  var m = k.map(d, function (p, t) {
                    return p.bVisible ? t : null;
                  });
                  return [m[m.length + h]];
                }
                return [sa(a, h)];
              case "name":
                return k.map(e, function (p, t) {
                  return p === n[1] ? t : null;
                });
              default:
                return [];
            }
          if (g.nodeName && g._DT_CellIndex) return [g._DT_CellIndex.column];
          h = k(f)
            .filter(g)
            .map(function () {
              return k.inArray(this, f);
            })
            .toArray();
          if (h.length || !g.nodeName) return h;
          h = k(g).closest("*[data-dt-column]");
          return h.length ? [h.data("dt-column")] : [];
        },
        a,
        c
      );
    };
  w("columns()", function (a, b) {
    a === q ? (a = "") : k.isPlainObject(a) && ((b = a), (a = ""));
    b = ub(b);
    var c = this.iterator(
      "table",
      function (d) {
        return Ac(d, a, b);
      },
      1
    );
    c.selector.cols = a;
    c.selector.opts = b;
    return c;
  });
  J("columns().header()", "column().header()", function (a, b) {
    return this.iterator(
      "column",
      function (c, d) {
        return c.aoColumns[d].nTh;
      },
      1
    );
  });
  J("columns().footer()", "column().footer()", function (a, b) {
    return this.iterator(
      "column",
      function (c, d) {
        return c.aoColumns[d].nTf;
      },
      1
    );
  });
  J("columns().data()", "column().data()", function () {
    return this.iterator("column-rows", qc, 1);
  });
  J("columns().dataSrc()", "column().dataSrc()", function () {
    return this.iterator(
      "column",
      function (a, b) {
        return a.aoColumns[b].mData;
      },
      1
    );
  });
  J("columns().cache()", "column().cache()", function (a) {
    return this.iterator(
      "column-rows",
      function (b, c, d, e, f) {
        return Ca(
          b.aoData,
          f,
          "search" === a ? "_aFilterData" : "_aSortData",
          c
        );
      },
      1
    );
  });
  J("columns().nodes()", "column().nodes()", function () {
    return this.iterator(
      "column-rows",
      function (a, b, c, d, e) {
        return Ca(a.aoData, e, "anCells", b);
      },
      1
    );
  });
  J("columns().visible()", "column().visible()", function (a, b) {
    var c = this,
      d = this.iterator("column", function (e, f) {
        if (a === q) return e.aoColumns[f].bVisible;
        var g = e.aoColumns,
          h = g[f],
          l = e.aoData,
          n;
        if (a !== q && h.bVisible !== a) {
          if (a) {
            var m = k.inArray(!0, T(g, "bVisible"), f + 1);
            g = 0;
            for (n = l.length; g < n; g++) {
              var p = l[g].nTr;
              e = l[g].anCells;
              p && p.insertBefore(e[f], e[m] || null);
            }
          } else k(T(e.aoData, "anCells", f)).detach();
          h.bVisible = a;
        }
      });
    a !== q &&
      this.iterator("table", function (e) {
        xa(e, e.aoHeader);
        xa(e, e.aoFooter);
        e.aiDisplay.length ||
          k(e.nTBody).find("td[colspan]").attr("colspan", na(e));
        Qa(e);
        c.iterator("column", function (f, g) {
          H(f, null, "column-visibility", [f, g, a, b]);
        });
        (b === q || b) && c.columns.adjust();
      });
    return d;
  });
  J("columns().indexes()", "column().index()", function (a) {
    return this.iterator(
      "column",
      function (b, c) {
        return "visible" === a ? ta(b, c) : c;
      },
      1
    );
  });
  w("columns.adjust()", function () {
    return this.iterator(
      "table",
      function (a) {
        ra(a);
      },
      1
    );
  });
  w("column.index()", function (a, b) {
    if (0 !== this.context.length) {
      var c = this.context[0];
      if ("fromVisible" === a || "toData" === a) return sa(c, b);
      if ("fromData" === a || "toVisible" === a) return ta(c, b);
    }
  });
  w("column()", function (a, b) {
    return vb(this.columns(a, b));
  });
  var Bc = function (a, b, c) {
    var d = a.aoData,
      e = Ua(a, c),
      f = kc(Ca(d, e, "anCells")),
      g = k(lc([], f)),
      h,
      l = a.aoColumns.length,
      n,
      m,
      p,
      t,
      v,
      x;
    return tb(
      "cell",
      b,
      function (r) {
        var A = "function" === typeof r;
        if (null === r || r === q || A) {
          n = [];
          m = 0;
          for (p = e.length; m < p; m++)
            for (h = e[m], t = 0; t < l; t++)
              (v = { row: h, column: t }),
                A
                  ? ((x = d[h]),
                    r(v, S(a, h, t), x.anCells ? x.anCells[t] : null) &&
                      n.push(v))
                  : n.push(v);
          return n;
        }
        if (k.isPlainObject(r))
          return r.column !== q && r.row !== q && -1 !== k.inArray(r.row, e)
            ? [r]
            : [];
        A = g
          .filter(r)
          .map(function (E, I) {
            return { row: I._DT_CellIndex.row, column: I._DT_CellIndex.column };
          })
          .toArray();
        if (A.length || !r.nodeName) return A;
        x = k(r).closest("*[data-dt-row]");
        return x.length
          ? [{ row: x.data("dt-row"), column: x.data("dt-column") }]
          : [];
      },
      a,
      c
    );
  };
  w("cells()", function (a, b, c) {
    k.isPlainObject(a) &&
      (a.row === q ? ((c = a), (a = null)) : ((c = b), (b = null)));
    k.isPlainObject(b) && ((c = b), (b = null));
    if (null === b || b === q)
      return this.iterator("table", function (m) {
        return Bc(m, a, ub(c));
      });
    var d = c ? { page: c.page, order: c.order, search: c.search } : {},
      e = this.columns(b, d),
      f = this.rows(a, d),
      g,
      h,
      l,
      n;
    d = this.iterator(
      "table",
      function (m, p) {
        m = [];
        g = 0;
        for (h = f[p].length; g < h; g++)
          for (l = 0, n = e[p].length; l < n; l++)
            m.push({ row: f[p][g], column: e[p][l] });
        return m;
      },
      1
    );
    d = c && c.selected ? this.cells(d, c) : d;
    k.extend(d.selector, { cols: b, rows: a, opts: c });
    return d;
  });
  J("cells().nodes()", "cell().node()", function () {
    return this.iterator(
      "cell",
      function (a, b, c) {
        return (a = a.aoData[b]) && a.anCells ? a.anCells[c] : q;
      },
      1
    );
  });
  w("cells().data()", function () {
    return this.iterator(
      "cell",
      function (a, b, c) {
        return S(a, b, c);
      },
      1
    );
  });
  J("cells().cache()", "cell().cache()", function (a) {
    a = "search" === a ? "_aFilterData" : "_aSortData";
    return this.iterator(
      "cell",
      function (b, c, d) {
        return b.aoData[c][a][d];
      },
      1
    );
  });
  J("cells().render()", "cell().render()", function (a) {
    return this.iterator(
      "cell",
      function (b, c, d) {
        return S(b, c, d, a);
      },
      1
    );
  });
  J("cells().indexes()", "cell().index()", function () {
    return this.iterator(
      "cell",
      function (a, b, c) {
        return { row: b, column: c, columnVisible: ta(a, c) };
      },
      1
    );
  });
  J("cells().invalidate()", "cell().invalidate()", function (a) {
    return this.iterator("cell", function (b, c, d) {
      va(b, c, a, d);
    });
  });
  w("cell()", function (a, b, c) {
    return vb(this.cells(a, b, c));
  });
  w("cell().data()", function (a) {
    var b = this.context,
      c = this[0];
    if (a === q)
      return b.length && c.length ? S(b[0], c[0].row, c[0].column) : q;
    Db(b[0], c[0].row, c[0].column, a);
    va(b[0], c[0].row, "data", c[0].column);
    return this;
  });
  w("order()", function (a, b) {
    var c = this.context;
    if (a === q) return 0 !== c.length ? c[0].aaSorting : q;
    "number" === typeof a
      ? (a = [[a, b]])
      : a.length &&
        !Array.isArray(a[0]) &&
        (a = Array.prototype.slice.call(arguments));
    return this.iterator("table", function (d) {
      d.aaSorting = a.slice();
    });
  });
  w("order.listener()", function (a, b, c) {
    return this.iterator("table", function (d) {
      db(d, a, b, c);
    });
  });
  w("order.fixed()", function (a) {
    if (!a) {
      var b = this.context;
      b = b.length ? b[0].aaSortingFixed : q;
      return Array.isArray(b) ? { pre: b } : b;
    }
    return this.iterator("table", function (c) {
      c.aaSortingFixed = k.extend(!0, {}, a);
    });
  });
  w(["columns().order()", "column().order()"], function (a) {
    var b = this;
    return this.iterator("table", function (c, d) {
      var e = [];
      k.each(b[d], function (f, g) {
        e.push([g, a]);
      });
      c.aaSorting = e;
    });
  });
  w("search()", function (a, b, c, d) {
    var e = this.context;
    return a === q
      ? 0 !== e.length
        ? e[0].oPreviousSearch.sSearch
        : q
      : this.iterator("table", function (f) {
          f.oFeatures.bFilter &&
            ya(
              f,
              k.extend({}, f.oPreviousSearch, {
                sSearch: a + "",
                bRegex: null === b ? !1 : b,
                bSmart: null === c ? !0 : c,
                bCaseInsensitive: null === d ? !0 : d,
              }),
              1
            );
        });
  });
  J("columns().search()", "column().search()", function (a, b, c, d) {
    return this.iterator("column", function (e, f) {
      var g = e.aoPreSearchCols;
      if (a === q) return g[f].sSearch;
      e.oFeatures.bFilter &&
        (k.extend(g[f], {
          sSearch: a + "",
          bRegex: null === b ? !1 : b,
          bSmart: null === c ? !0 : c,
          bCaseInsensitive: null === d ? !0 : d,
        }),
        ya(e, e.oPreviousSearch, 1));
    });
  });
  w("state()", function () {
    return this.context.length ? this.context[0].oSavedState : null;
  });
  w("state.clear()", function () {
    return this.iterator("table", function (a) {
      a.fnStateSaveCallback.call(a.oInstance, a, {});
    });
  });
  w("state.loaded()", function () {
    return this.context.length ? this.context[0].oLoadedState : null;
  });
  w("state.save()", function () {
    return this.iterator("table", function (a) {
      Qa(a);
    });
  });
  u.versionCheck = u.fnVersionCheck = function (a) {
    var b = u.version.split(".");
    a = a.split(".");
    for (var c, d, e = 0, f = a.length; e < f; e++)
      if (
        ((c = parseInt(b[e], 10) || 0), (d = parseInt(a[e], 10) || 0), c !== d)
      )
        return c > d;
    return !0;
  };
  u.isDataTable = u.fnIsDataTable = function (a) {
    var b = k(a).get(0),
      c = !1;
    if (a instanceof u.Api) return !0;
    k.each(u.settings, function (d, e) {
      d = e.nScrollHead ? k("table", e.nScrollHead)[0] : null;
      var f = e.nScrollFoot ? k("table", e.nScrollFoot)[0] : null;
      if (e.nTable === b || d === b || f === b) c = !0;
    });
    return c;
  };
  u.tables = u.fnTables = function (a) {
    var b = !1;
    k.isPlainObject(a) && ((b = a.api), (a = a.visible));
    var c = k.map(u.settings, function (d) {
      if (!a || (a && k(d.nTable).is(":visible"))) return d.nTable;
    });
    return b ? new D(c) : c;
  };
  u.camelToHungarian = O;
  w("$()", function (a, b) {
    b = this.rows(b).nodes();
    b = k(b);
    return k([].concat(b.filter(a).toArray(), b.find(a).toArray()));
  });
  k.each(["on", "one", "off"], function (a, b) {
    w(b + "()", function () {
      var c = Array.prototype.slice.call(arguments);
      c[0] = k
        .map(c[0].split(/\s/), function (e) {
          return e.match(/\.dt\b/) ? e : e + ".dt";
        })
        .join(" ");
      var d = k(this.tables().nodes());
      d[b].apply(d, c);
      return this;
    });
  });
  w("clear()", function () {
    return this.iterator("table", function (a) {
      Ha(a);
    });
  });
  w("settings()", function () {
    return new D(this.context, this.context);
  });
  w("init()", function () {
    var a = this.context;
    return a.length ? a[0].oInit : null;
  });
  w("data()", function () {
    return this.iterator("table", function (a) {
      return T(a.aoData, "_aData");
    }).flatten();
  });
  w("destroy()", function (a) {
    a = a || !1;
    return this.iterator("table", function (b) {
      var c = b.nTableWrapper.parentNode,
        d = b.oClasses,
        e = b.nTable,
        f = b.nTBody,
        g = b.nTHead,
        h = b.nTFoot,
        l = k(e);
      f = k(f);
      var n = k(b.nTableWrapper),
        m = k.map(b.aoData, function (t) {
          return t.nTr;
        }),
        p;
      b.bDestroying = !0;
      H(b, "aoDestroyCallback", "destroy", [b]);
      a || new D(b).columns().visible(!0);
      n.off(".DT").find(":not(tbody *)").off(".DT");
      k(y).off(".DT-" + b.sInstance);
      e != g.parentNode && (l.children("thead").detach(), l.append(g));
      h && e != h.parentNode && (l.children("tfoot").detach(), l.append(h));
      b.aaSorting = [];
      b.aaSortingFixed = [];
      Pa(b);
      k(m).removeClass(b.asStripeClasses.join(" "));
      k("th, td", g).removeClass(
        d.sSortable +
          " " +
          d.sSortableAsc +
          " " +
          d.sSortableDesc +
          " " +
          d.sSortableNone
      );
      f.children().detach();
      f.append(m);
      g = a ? "remove" : "detach";
      l[g]();
      n[g]();
      !a &&
        c &&
        (c.insertBefore(e, b.nTableReinsertBefore),
        l.css("width", b.sDestroyWidth).removeClass(d.sTable),
        (p = b.asDestroyStripes.length) &&
          f.children().each(function (t) {
            k(this).addClass(b.asDestroyStripes[t % p]);
          }));
      c = k.inArray(b, u.settings);
      -1 !== c && u.settings.splice(c, 1);
    });
  });
  k.each(["column", "row", "cell"], function (a, b) {
    w(b + "s().every()", function (c) {
      var d = this.selector.opts,
        e = this;
      return this.iterator(b, function (f, g, h, l, n) {
        c.call(e[b](g, "cell" === b ? h : d, "cell" === b ? d : q), g, h, l, n);
      });
    });
  });
  w("i18n()", function (a, b, c) {
    var d = this.context[0];
    a = ia(a)(d.oLanguage);
    a === q && (a = b);
    c !== q && k.isPlainObject(a) && (a = a[c] !== q ? a[c] : a._);
    return a.replace("%d", c);
  });
  u.version = "1.10.24";
  u.settings = [];
  u.models = {};
  u.models.oSearch = {
    bCaseInsensitive: !0,
    sSearch: "",
    bRegex: !1,
    bSmart: !0,
  };
  u.models.oRow = {
    nTr: null,
    anCells: null,
    _aData: [],
    _aSortData: null,
    _aFilterData: null,
    _sFilterRow: null,
    _sRowStripe: "",
    src: null,
    idx: -1,
  };
  u.models.oColumn = {
    idx: null,
    aDataSort: null,
    asSorting: null,
    bSearchable: null,
    bSortable: null,
    bVisible: null,
    _sManualType: null,
    _bAttrSrc: !1,
    fnCreatedCell: null,
    fnGetData: null,
    fnSetData: null,
    mData: null,
    mRender: null,
    nTh: null,
    nTf: null,
    sClass: null,
    sContentPadding: null,
    sDefaultContent: null,
    sName: null,
    sSortDataType: "std",
    sSortingClass: null,
    sSortingClassJUI: null,
    sTitle: null,
    sType: null,
    sWidth: null,
    sWidthOrig: null,
  };
  u.defaults = {
    aaData: null,
    aaSorting: [[0, "asc"]],
    aaSortingFixed: [],
    ajax: null,
    aLengthMenu: [10, 25, 50, 100],
    aoColumns: null,
    aoColumnDefs: null,
    aoSearchCols: [],
    asStripeClasses: null,
    bAutoWidth: !0,
    bDeferRender: !1,
    bDestroy: !1,
    bFilter: !0,
    bInfo: !0,
    bLengthChange: !0,
    bPaginate: !0,
    bProcessing: !1,
    bRetrieve: !1,
    bScrollCollapse: !1,
    bServerSide: !1,
    bSort: !0,
    bSortMulti: !0,
    bSortCellsTop: !1,
    bSortClasses: !0,
    bStateSave: !1,
    fnCreatedRow: null,
    fnDrawCallback: null,
    fnFooterCallback: null,
    fnFormatNumber: function (a) {
      return a
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, this.oLanguage.sThousands);
    },
    fnHeaderCallback: null,
    fnInfoCallback: null,
    fnInitComplete: null,
    fnPreDrawCallback: null,
    fnRowCallback: null,
    fnServerData: null,
    fnServerParams: null,
    fnStateLoadCallback: function (a) {
      try {
        return JSON.parse(
          (-1 === a.iStateDuration ? sessionStorage : localStorage).getItem(
            "DataTables_" + a.sInstance + "_" + location.pathname
          )
        );
      } catch (b) {
        return {};
      }
    },
    fnStateLoadParams: null,
    fnStateLoaded: null,
    fnStateSaveCallback: function (a, b) {
      try {
        (-1 === a.iStateDuration ? sessionStorage : localStorage).setItem(
          "DataTables_" + a.sInstance + "_" + location.pathname,
          JSON.stringify(b)
        );
      } catch (c) {}
    },
    fnStateSaveParams: null,
    iStateDuration: 7200,
    iDeferLoading: null,
    iDisplayLength: 10,
    iDisplayStart: 0,
    iTabIndex: 0,
    oClasses: {},
    oLanguage: {
      oAria: {
        sSortAscending: ": activate to sort column ascending",
        sSortDescending: ": activate to sort column descending",
      },
      oPaginate: {
        sFirst: "First",
        sLast: "Last",
        sNext: "Next",
        sPrevious: "Previous",
      },
      sEmptyTable: "No data available in table",
      sInfo: "Showing _START_ to _END_ of _TOTAL_ entries",
      sInfoEmpty: "Showing 0 to 0 of 0 entries",
      sInfoFiltered: "(filtered from _MAX_ total entries)",
      sInfoPostFix: "",
      sDecimal: "",
      sThousands: ",",
      sLengthMenu: "Show _MENU_ entries",
      sLoadingRecords: "Loading...",
      sProcessing: "Processing...",
      sSearch: "Search:",
      sSearchPlaceholder: "",
      sUrl: "",
      sZeroRecords: "No matching records found",
    },
    oSearch: k.extend({}, u.models.oSearch),
    sAjaxDataProp: "data",
    sAjaxSource: null,
    sDom: "lfrtip",
    searchDelay: null,
    sPaginationType: "simple_numbers",
    sScrollX: "",
    sScrollXInner: "",
    sScrollY: "",
    sServerMethod: "GET",
    renderer: null,
    rowId: "DT_RowId",
  };
  G(u.defaults);
  u.defaults.column = {
    aDataSort: null,
    iDataSort: -1,
    asSorting: ["asc", "desc"],
    bSearchable: !0,
    bSortable: !0,
    bVisible: !0,
    fnCreatedCell: null,
    mData: null,
    mRender: null,
    sCellType: "td",
    sClass: "",
    sContentPadding: "",
    sDefaultContent: null,
    sName: "",
    sSortDataType: "std",
    sTitle: null,
    sType: null,
    sWidth: null,
  };
  G(u.defaults.column);
  u.models.oSettings = {
    oFeatures: {
      bAutoWidth: null,
      bDeferRender: null,
      bFilter: null,
      bInfo: null,
      bLengthChange: null,
      bPaginate: null,
      bProcessing: null,
      bServerSide: null,
      bSort: null,
      bSortMulti: null,
      bSortClasses: null,
      bStateSave: null,
    },
    oScroll: {
      bCollapse: null,
      iBarWidth: 0,
      sX: null,
      sXInner: null,
      sY: null,
    },
    oLanguage: { fnInfoCallback: null },
    oBrowser: {
      bScrollOversize: !1,
      bScrollbarLeft: !1,
      bBounding: !1,
      barWidth: 0,
    },
    ajax: null,
    aanFeatures: [],
    aoData: [],
    aiDisplay: [],
    aiDisplayMaster: [],
    aIds: {},
    aoColumns: [],
    aoHeader: [],
    aoFooter: [],
    oPreviousSearch: {},
    aoPreSearchCols: [],
    aaSorting: null,
    aaSortingFixed: [],
    asStripeClasses: null,
    asDestroyStripes: [],
    sDestroyWidth: 0,
    aoRowCallback: [],
    aoHeaderCallback: [],
    aoFooterCallback: [],
    aoDrawCallback: [],
    aoRowCreatedCallback: [],
    aoPreDrawCallback: [],
    aoInitComplete: [],
    aoStateSaveParams: [],
    aoStateLoadParams: [],
    aoStateLoaded: [],
    sTableId: "",
    nTable: null,
    nTHead: null,
    nTFoot: null,
    nTBody: null,
    nTableWrapper: null,
    bDeferLoading: !1,
    bInitialised: !1,
    aoOpenRows: [],
    sDom: null,
    searchDelay: null,
    sPaginationType: "two_button",
    iStateDuration: 0,
    aoStateSave: [],
    aoStateLoad: [],
    oSavedState: null,
    oLoadedState: null,
    sAjaxSource: null,
    sAjaxDataProp: null,
    bAjaxDataGet: !0,
    jqXHR: null,
    json: q,
    oAjaxData: q,
    fnServerData: null,
    aoServerParams: [],
    sServerMethod: null,
    fnFormatNumber: null,
    aLengthMenu: null,
    iDraw: 0,
    bDrawing: !1,
    iDrawError: -1,
    _iDisplayLength: 10,
    _iDisplayStart: 0,
    _iRecordsTotal: 0,
    _iRecordsDisplay: 0,
    oClasses: {},
    bFiltered: !1,
    bSorted: !1,
    bSortCellsTop: null,
    oInit: null,
    aoDestroyCallback: [],
    fnRecordsTotal: function () {
      return "ssp" == P(this)
        ? 1 * this._iRecordsTotal
        : this.aiDisplayMaster.length;
    },
    fnRecordsDisplay: function () {
      return "ssp" == P(this)
        ? 1 * this._iRecordsDisplay
        : this.aiDisplay.length;
    },
    fnDisplayEnd: function () {
      var a = this._iDisplayLength,
        b = this._iDisplayStart,
        c = b + a,
        d = this.aiDisplay.length,
        e = this.oFeatures,
        f = e.bPaginate;
      return e.bServerSide
        ? !1 === f || -1 === a
          ? b + d
          : Math.min(b + a, this._iRecordsDisplay)
        : !f || c > d || -1 === a
        ? d
        : c;
    },
    oInstance: null,
    sInstance: null,
    iTabIndex: 0,
    nScrollHead: null,
    nScrollFoot: null,
    aLastSort: [],
    oPlugins: {},
    rowIdFn: null,
    rowId: null,
  };
  u.ext = L = {
    buttons: {},
    classes: {},
    builder: "-source-",
    errMode: "alert",
    feature: [],
    search: [],
    selector: { cell: [], column: [], row: [] },
    internal: {},
    legacy: { ajax: null },
    pager: {},
    renderer: { pageButton: {}, header: {} },
    order: {},
    type: { detect: [], search: {}, order: {} },
    _unique: 0,
    fnVersionCheck: u.fnVersionCheck,
    iApiIndex: 0,
    oJUIClasses: {},
    sVersion: u.version,
  };
  k.extend(L, {
    afnFiltering: L.search,
    aTypes: L.type.detect,
    ofnSearch: L.type.search,
    oSort: L.type.order,
    afnSortData: L.order,
    aoFeatures: L.feature,
    oApi: L.internal,
    oStdClasses: L.classes,
    oPagination: L.pager,
  });
  k.extend(u.ext.classes, {
    sTable: "dataTable",
    sNoFooter: "no-footer",
    sPageButton: "paginate_button",
    sPageButtonActive: "current",
    sPageButtonDisabled: "disabled",
    sStripeOdd: "odd",
    sStripeEven: "even",
    sRowEmpty: "dataTables_empty",
    sWrapper: "dataTables_wrapper",
    sFilter: "dataTables_filter",
    sInfo: "dataTables_info",
    sPaging: "dataTables_paginate paging_",
    sLength: "dataTables_length",
    sProcessing: "dataTables_processing",
    sSortAsc: "sorting_asc",
    sSortDesc: "sorting_desc",
    sSortable: "sorting",
    sSortableAsc: "sorting_desc_disabled",
    sSortableDesc: "sorting_asc_disabled",
    sSortableNone: "sorting_disabled",
    sSortColumn: "sorting_",
    sFilterInput: "",
    sLengthSelect: "",
    sScrollWrapper: "dataTables_scroll",
    sScrollHead: "dataTables_scrollHead",
    sScrollHeadInner: "dataTables_scrollHeadInner",
    sScrollBody: "dataTables_scrollBody",
    sScrollFoot: "dataTables_scrollFoot",
    sScrollFootInner: "dataTables_scrollFootInner",
    sHeaderTH: "",
    sFooterTH: "",
    sSortJUIAsc: "",
    sSortJUIDesc: "",
    sSortJUI: "",
    sSortJUIAscAllowed: "",
    sSortJUIDescAllowed: "",
    sSortJUIWrapper: "",
    sSortIcon: "",
    sJUIHeader: "",
    sJUIFooter: "",
  });
  var ec = u.ext.pager;
  k.extend(ec, {
    simple: function (a, b) {
      return ["previous", "next"];
    },
    full: function (a, b) {
      return ["first", "previous", "next", "last"];
    },
    numbers: function (a, b) {
      return [Ba(a, b)];
    },
    simple_numbers: function (a, b) {
      return ["previous", Ba(a, b), "next"];
    },
    full_numbers: function (a, b) {
      return ["first", "previous", Ba(a, b), "next", "last"];
    },
    first_last_numbers: function (a, b) {
      return ["first", Ba(a, b), "last"];
    },
    _numbers: Ba,
    numbers_length: 7,
  });
  k.extend(!0, u.ext.renderer, {
    pageButton: {
      _: function (a, b, c, d, e, f) {
        var g = a.oClasses,
          h = a.oLanguage.oPaginate,
          l = a.oLanguage.oAria.paginate || {},
          n,
          m,
          p = 0,
          t = function (x, r) {
            var A,
              E = g.sPageButtonDisabled,
              I = function (B) {
                kb(a, B.data.action, !0);
              };
            var W = 0;
            for (A = r.length; W < A; W++) {
              var M = r[W];
              if (Array.isArray(M)) {
                var C = k("<" + (M.DT_el || "div") + "/>").appendTo(x);
                t(C, M);
              } else {
                n = null;
                m = M;
                C = a.iTabIndex;
                switch (M) {
                  case "ellipsis":
                    x.append('<span class="ellipsis">&#x2026;</span>');
                    break;
                  case "first":
                    n = h.sFirst;
                    0 === e && ((C = -1), (m += " " + E));
                    break;
                  case "previous":
                    n = h.sPrevious;
                    0 === e && ((C = -1), (m += " " + E));
                    break;
                  case "next":
                    n = h.sNext;
                    if (0 === f || e === f - 1) (C = -1), (m += " " + E);
                    break;
                  case "last":
                    n = h.sLast;
                    if (0 === f || e === f - 1) (C = -1), (m += " " + E);
                    break;
                  default:
                    (n = a.fnFormatNumber(M + 1)),
                      (m = e === M ? g.sPageButtonActive : "");
                }
                null !== n &&
                  ((C = k("<a>", {
                    class: g.sPageButton + " " + m,
                    "aria-controls": a.sTableId,
                    "aria-label": l[M],
                    "data-dt-idx": p,
                    tabindex: C,
                    id:
                      0 === c && "string" === typeof M
                        ? a.sTableId + "_" + M
                        : null,
                  })
                    .html(n)
                    .appendTo(x)),
                  ob(C, { action: M }, I),
                  p++);
              }
            }
          };
        try {
          var v = k(b).find(z.activeElement).data("dt-idx");
        } catch (x) {}
        t(k(b).empty(), d);
        v !== q &&
          k(b)
            .find("[data-dt-idx=" + v + "]")
            .trigger("focus");
      },
    },
  });
  k.extend(u.ext.type.detect, [
    function (a, b) {
      b = b.oLanguage.sDecimal;
      return sb(a, b) ? "num" + b : null;
    },
    function (a, b) {
      if (a && !(a instanceof Date) && !tc.test(a)) return null;
      b = Date.parse(a);
      return (null !== b && !isNaN(b)) || ca(a) ? "date" : null;
    },
    function (a, b) {
      b = b.oLanguage.sDecimal;
      return sb(a, b, !0) ? "num-fmt" + b : null;
    },
    function (a, b) {
      b = b.oLanguage.sDecimal;
      return jc(a, b) ? "html-num" + b : null;
    },
    function (a, b) {
      b = b.oLanguage.sDecimal;
      return jc(a, b, !0) ? "html-num-fmt" + b : null;
    },
    function (a, b) {
      return ca(a) || ("string" === typeof a && -1 !== a.indexOf("<"))
        ? "html"
        : null;
    },
  ]);
  k.extend(u.ext.type.search, {
    html: function (a) {
      return ca(a)
        ? a
        : "string" === typeof a
        ? a.replace(gc, " ").replace(Ta, "")
        : "";
    },
    string: function (a) {
      return ca(a) ? a : "string" === typeof a ? a.replace(gc, " ") : a;
    },
  });
  var Sa = function (a, b, c, d) {
    if (0 !== a && (!a || "-" === a)) return -Infinity;
    b && (a = ic(a, b));
    a.replace && (c && (a = a.replace(c, "")), d && (a = a.replace(d, "")));
    return 1 * a;
  };
  k.extend(L.type.order, {
    "date-pre": function (a) {
      a = Date.parse(a);
      return isNaN(a) ? -Infinity : a;
    },
    "html-pre": function (a) {
      return ca(a)
        ? ""
        : a.replace
        ? a.replace(/<.*?>/g, "").toLowerCase()
        : a + "";
    },
    "string-pre": function (a) {
      return ca(a)
        ? ""
        : "string" === typeof a
        ? a.toLowerCase()
        : a.toString
        ? a.toString()
        : "";
    },
    "string-asc": function (a, b) {
      return a < b ? -1 : a > b ? 1 : 0;
    },
    "string-desc": function (a, b) {
      return a < b ? 1 : a > b ? -1 : 0;
    },
  });
  Va("");
  k.extend(!0, u.ext.renderer, {
    header: {
      _: function (a, b, c, d) {
        k(a.nTable).on("order.dt.DT", function (e, f, g, h) {
          a === f &&
            ((e = c.idx),
            b
              .removeClass(d.sSortAsc + " " + d.sSortDesc)
              .addClass(
                "asc" == h[e]
                  ? d.sSortAsc
                  : "desc" == h[e]
                  ? d.sSortDesc
                  : c.sSortingClass
              ));
        });
      },
      jqueryui: function (a, b, c, d) {
        k("<div/>")
          .addClass(d.sSortJUIWrapper)
          .append(b.contents())
          .append(k("<span/>").addClass(d.sSortIcon + " " + c.sSortingClassJUI))
          .appendTo(b);
        k(a.nTable).on("order.dt.DT", function (e, f, g, h) {
          a === f &&
            ((e = c.idx),
            b
              .removeClass(d.sSortAsc + " " + d.sSortDesc)
              .addClass(
                "asc" == h[e]
                  ? d.sSortAsc
                  : "desc" == h[e]
                  ? d.sSortDesc
                  : c.sSortingClass
              ),
            b
              .find("span." + d.sSortIcon)
              .removeClass(
                d.sSortJUIAsc +
                  " " +
                  d.sSortJUIDesc +
                  " " +
                  d.sSortJUI +
                  " " +
                  d.sSortJUIAscAllowed +
                  " " +
                  d.sSortJUIDescAllowed
              )
              .addClass(
                "asc" == h[e]
                  ? d.sSortJUIAsc
                  : "desc" == h[e]
                  ? d.sSortJUIDesc
                  : c.sSortingClassJUI
              ));
        });
      },
    },
  });
  var xb = function (a) {
    return "string" === typeof a
      ? a
          .replace(/&/g, "&amp;")
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;")
          .replace(/"/g, "&quot;")
      : a;
  };
  u.render = {
    number: function (a, b, c, d, e) {
      return {
        display: function (f) {
          if ("number" !== typeof f && "string" !== typeof f) return f;
          var g = 0 > f ? "-" : "",
            h = parseFloat(f);
          if (isNaN(h)) return xb(f);
          h = h.toFixed(c);
          f = Math.abs(h);
          h = parseInt(f, 10);
          f = c ? b + (f - h).toFixed(c).substring(2) : "";
          return (
            g +
            (d || "") +
            h.toString().replace(/\B(?=(\d{3})+(?!\d))/g, a) +
            f +
            (e || "")
          );
        },
      };
    },
    text: function () {
      return { display: xb, filter: xb };
    },
  };
  k.extend(u.ext.internal, {
    _fnExternApiFunc: fc,
    _fnBuildAjax: La,
    _fnAjaxUpdate: Fb,
    _fnAjaxParameters: Ob,
    _fnAjaxUpdateDraw: Pb,
    _fnAjaxDataSrc: Ma,
    _fnAddColumn: Wa,
    _fnColumnOptions: Da,
    _fnAdjustColumnSizing: ra,
    _fnVisibleToColumnIndex: sa,
    _fnColumnIndexToVisible: ta,
    _fnVisbleColumns: na,
    _fnGetColumns: Fa,
    _fnColumnTypes: Ya,
    _fnApplyColumnDefs: Cb,
    _fnHungarianMap: G,
    _fnCamelToHungarian: O,
    _fnLanguageCompat: ma,
    _fnBrowserDetect: Ab,
    _fnAddData: ea,
    _fnAddTr: Ga,
    _fnNodeToDataIndex: function (a, b) {
      return b._DT_RowIndex !== q ? b._DT_RowIndex : null;
    },
    _fnNodeToColumnIndex: function (a, b, c) {
      return k.inArray(c, a.aoData[b].anCells);
    },
    _fnGetCellData: S,
    _fnSetCellData: Db,
    _fnSplitObjNotation: ab,
    _fnGetObjectDataFn: ia,
    _fnSetObjectDataFn: da,
    _fnGetDataMaster: bb,
    _fnClearTable: Ha,
    _fnDeleteIndex: Ia,
    _fnInvalidate: va,
    _fnGetRowElements: $a,
    _fnCreateTr: Za,
    _fnBuildHead: Eb,
    _fnDrawHead: xa,
    _fnDraw: fa,
    _fnReDraw: ja,
    _fnAddOptionsHtml: Hb,
    _fnDetectHeader: wa,
    _fnGetUniqueThs: Ka,
    _fnFeatureHtmlFilter: Jb,
    _fnFilterComplete: ya,
    _fnFilterCustom: Sb,
    _fnFilterColumn: Rb,
    _fnFilter: Qb,
    _fnFilterCreateSearch: gb,
    _fnEscapeRegex: hb,
    _fnFilterData: Tb,
    _fnFeatureHtmlInfo: Mb,
    _fnUpdateInfo: Wb,
    _fnInfoMacros: Xb,
    _fnInitialise: za,
    _fnInitComplete: Na,
    _fnLengthChange: ib,
    _fnFeatureHtmlLength: Ib,
    _fnFeatureHtmlPaginate: Nb,
    _fnPageChange: kb,
    _fnFeatureHtmlProcessing: Kb,
    _fnProcessingDisplay: U,
    _fnFeatureHtmlTable: Lb,
    _fnScrollDraw: Ea,
    _fnApplyToChildren: Z,
    _fnCalculateColumnWidths: Xa,
    _fnThrottle: fb,
    _fnConvertToWidth: Zb,
    _fnGetWidestNode: $b,
    _fnGetMaxLenString: ac,
    _fnStringToCss: K,
    _fnSortFlatten: pa,
    _fnSort: Gb,
    _fnSortAria: cc,
    _fnSortListener: nb,
    _fnSortAttachListener: db,
    _fnSortingClasses: Pa,
    _fnSortData: bc,
    _fnSaveState: Qa,
    _fnLoadState: dc,
    _fnSettingsFromNode: Ra,
    _fnLog: aa,
    _fnMap: V,
    _fnBindAction: ob,
    _fnCallbackReg: Q,
    _fnCallbackFire: H,
    _fnLengthOverflow: jb,
    _fnRenderer: eb,
    _fnDataSource: P,
    _fnRowAttributes: cb,
    _fnExtend: pb,
    _fnCalculateEnd: function () {},
  });
  k.fn.dataTable = u;
  u.$ = k;
  k.fn.dataTableSettings = u.settings;
  k.fn.dataTableExt = u.ext;
  k.fn.DataTable = function (a) {
    return k(this).dataTable(a).api();
  };
  k.each(u, function (a, b) {
    k.fn.DataTable[a] = b;
  });
  return k.fn.dataTable;
});
/*! DataTables Bootstrap 4 integration ©2011-2017 SpryMedia Ltd - datatables.net/license*/
!(function (e) {
  "function" == typeof define && define.amd
    ? define(["jquery", "datatables.net"], function (a) {
        return e(a, window, document);
      })
    : "object" == typeof exports
    ? (module.exports = function (a, t) {
        return (
          a || (a = window),
          (t && t.fn.dataTable) || (t = require("datatables.net")(a, t).$),
          e(t, a, a.document)
        );
      })
    : e(jQuery, window, document);
})(function (e, a, t, n) {
  var o = e.fn.dataTable;
  return (
    e.extend(!0, o.defaults, {
      dom: "<'row'<'col-sm-12 col-md-6'l><'col-sm-12 col-md-6'f>><'row'<'col-sm-12'tr>><'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7'p>>",
      renderer: "bootstrap",
    }),
    e.extend(o.ext.classes, {
      sWrapper: "dataTables_wrapper dt-bootstrap4",
      sFilterInput: "form-control form-control-sm",
      sLengthSelect:
        "custom-select custom-select-sm form-control form-control-sm",
      sProcessing: "dataTables_processing card",
      sPageButton: "paginate_button page-item",
    }),
    (o.ext.renderer.pageButton.bootstrap = function (a, s, r, d, i, l) {
      var c,
        u,
        p,
        f = new o.Api(a),
        m = a.oClasses,
        b = a.oLanguage.oPaginate,
        g = a.oLanguage.oAria.paginate || {},
        x = 0,
        w = function (t, n) {
          var o,
            s,
            d,
            p,
            h = function (a) {
              a.preventDefault(),
                !e(a.currentTarget).hasClass("disabled") &&
                  f.page() != a.data.action &&
                  f.page(a.data.action).draw("page");
            };
          for (o = 0, s = n.length; o < s; o++)
            if (((p = n[o]), e.isArray(p))) w(t, p);
            else {
              switch (((u = c = ""), p)) {
                case "ellipsis":
                  (c = "&#x2026;"), (u = "disabled");
                  break;
                case "first":
                  (c = b.sFirst), (u = p + (0 < i ? "" : " disabled"));
                  break;
                case "previous":
                  (c = b.sPrevious), (u = p + (0 < i ? "" : " disabled"));
                  break;
                case "next":
                  (c = b.sNext), (u = p + (i < l - 1 ? "" : " disabled"));
                  break;
                case "last":
                  (c = b.sLast), (u = p + (i < l - 1 ? "" : " disabled"));
                  break;
                default:
                  (c = p + 1), (u = i === p ? "active" : "");
              }
              c &&
                ((d = e("<li>", {
                  class: m.sPageButton + " " + u,
                  id:
                    0 === r && "string" == typeof p
                      ? a.sTableId + "_" + p
                      : null,
                })
                  .append(
                    e("<a>", {
                      href: "#",
                      "aria-controls": a.sTableId,
                      "aria-label": g[p],
                      "data-dt-idx": x,
                      tabindex: a.iTabIndex,
                      class: "page-link",
                    }).html(c)
                  )
                  .appendTo(t)),
                a.oApi._fnBindAction(d, { action: p }, h),
                x++);
            }
        };
      try {
        p = e(s).find(t.activeElement).data("dt-idx");
      } catch (e) {}
      w(e(s).empty().html('<ul class="pagination"/>').children("ul"), d),
        p !== n &&
          e(s)
            .find("[data-dt-idx=" + p + "]")
            .focus();
    }),
    o
  );
});
/*! Datepicker for Bootstrap * Copyright 2012 Stefan Petre * Improvements by Andrew Rowls * Licensed under the Apache License v2.0 */
!(function (t, e) {
  function i() {
    return new Date(Date.UTC.apply(Date, arguments));
  }
  function a() {
    var t = new Date();
    return i(t.getFullYear(), t.getMonth(), t.getDate());
  }
  function s(t) {
    return function () {
      return this[t].apply(this, arguments);
    };
  }
  function n(e, i) {
    function a(t, e) {
      return e.toLowerCase();
    }
    var s,
      n = t(e).data(),
      r = {},
      h = new RegExp("^" + i.toLowerCase() + "([A-Z])");
    i = new RegExp("^" + i.toLowerCase());
    for (var o in n) i.test(o) && ((s = o.replace(h, a)), (r[s] = n[o]));
    return r;
  }
  function r(e) {
    var i = {};
    if (f[e] || ((e = e.split("-")[0]), f[e])) {
      var a = f[e];
      return (
        t.each(p, function (t, e) {
          e in a && (i[e] = a[e]);
        }),
        i
      );
    }
  }
  var h = t(window),
    o = (function () {
      var e = {
        get: function (t) {
          return this.slice(t)[0];
        },
        contains: function (t) {
          for (var e = t && t.valueOf(), i = 0, a = this.length; a > i; i++)
            if (this[i].valueOf() === e) return i;
          return -1;
        },
        remove: function (t) {
          this.splice(t, 1);
        },
        replace: function (e) {
          e &&
            (t.isArray(e) || (e = [e]), this.clear(), this.push.apply(this, e));
        },
        clear: function () {
          this.splice(0);
        },
        copy: function () {
          var t = new o();
          return t.replace(this), t;
        },
      };
      return function () {
        var i = [];
        return i.push.apply(i, arguments), t.extend(i, e), i;
      };
    })(),
    d = function (e, i) {
      (this.dates = new o()),
        (this.viewDate = a()),
        (this.focusDate = null),
        this._process_options(i),
        (this.element = t(e)),
        (this.isInline = !1),
        (this.isInput = this.element.is("input")),
        (this.component = this.element.is(".date")
          ? this.element.find(".add-on, .input-group-addon, .btn")
          : !1),
        (this.hasInput = this.component && this.element.find("input").length),
        this.component && 0 === this.component.length && (this.component = !1),
        (this.picker = t(g.template)),
        this._buildEvents(),
        this._attachEvents(),
        this.isInline
          ? this.picker.addClass("datepicker-inline").appendTo(this.element)
          : this.picker.addClass("datepicker-dropdown dropdown-menu"),
        this.o.rtl && this.picker.addClass("datepicker-rtl"),
        (this.viewMode = this.o.startView),
        this.o.calendarWeeks &&
          this.picker.find("tfoot th.today").attr("colspan", function (t, e) {
            return parseInt(e) + 1;
          }),
        (this._allow_update = !1),
        this.setStartDate(this._o.startDate),
        this.setEndDate(this._o.endDate),
        this.setDaysOfWeekDisabled(this.o.daysOfWeekDisabled),
        this.fillDow(),
        this.fillMonths(),
        (this._allow_update = !0),
        this.update(),
        this.showMode(),
        this.isInline && this.show();
    };
  d.prototype = {
    constructor: d,
    _process_options: function (e) {
      this._o = t.extend({}, this._o, e);
      var i = (this.o = t.extend({}, this._o)),
        a = i.language;
      switch (
        (f[a] || ((a = a.split("-")[0]), f[a] || (a = u.language)),
        (i.language = a),
        i.startView)
      ) {
        case 2:
        case "decade":
          i.startView = 2;
          break;
        case 1:
        case "year":
          i.startView = 1;
          break;
        default:
          i.startView = 0;
      }
      switch (i.minViewMode) {
        case 1:
        case "months":
          i.minViewMode = 1;
          break;
        case 2:
        case "years":
          i.minViewMode = 2;
          break;
        default:
          i.minViewMode = 0;
      }
      (i.startView = Math.max(i.startView, i.minViewMode)),
        i.multidate !== !0 &&
          ((i.multidate = Number(i.multidate) || !1),
          (i.multidate = i.multidate !== !1 ? Math.max(0, i.multidate) : 1)),
        (i.multidateSeparator = String(i.multidateSeparator)),
        (i.weekStart %= 7),
        (i.weekEnd = (i.weekStart + 6) % 7);
      var s = g.parseFormat(i.format);
      i.startDate !== -1 / 0 &&
        (i.startDate = i.startDate
          ? i.startDate instanceof Date
            ? this._local_to_utc(this._zero_time(i.startDate))
            : g.parseDate(i.startDate, s, i.language)
          : -1 / 0),
        1 / 0 !== i.endDate &&
          (i.endDate = i.endDate
            ? i.endDate instanceof Date
              ? this._local_to_utc(this._zero_time(i.endDate))
              : g.parseDate(i.endDate, s, i.language)
            : 1 / 0),
        (i.daysOfWeekDisabled = i.daysOfWeekDisabled || []),
        t.isArray(i.daysOfWeekDisabled) ||
          (i.daysOfWeekDisabled = i.daysOfWeekDisabled.split(/[,\s]*/)),
        (i.daysOfWeekDisabled = t.map(i.daysOfWeekDisabled, function (t) {
          return parseInt(t, 10);
        }));
      var n = String(i.orientation).toLowerCase().split(/\s+/g),
        r = i.orientation.toLowerCase();
      if (
        ((n = t.grep(n, function (t) {
          return /^auto|left|right|top|bottom$/.test(t);
        })),
        (i.orientation = { x: "auto", y: "auto" }),
        r && "auto" !== r)
      )
        if (1 === n.length)
          switch (n[0]) {
            case "top":
            case "bottom":
              i.orientation.y = n[0];
              break;
            case "left":
            case "right":
              i.orientation.x = n[0];
          }
        else
          (r = t.grep(n, function (t) {
            return /^left|right$/.test(t);
          })),
            (i.orientation.x = r[0] || "auto"),
            (r = t.grep(n, function (t) {
              return /^top|bottom$/.test(t);
            })),
            (i.orientation.y = r[0] || "auto");
      else;
    },
    _events: [],
    _secondaryEvents: [],
    _applyEvents: function (t) {
      for (var i, a, s, n = 0; n < t.length; n++)
        (i = t[n][0]),
          2 === t[n].length
            ? ((a = e), (s = t[n][1]))
            : 3 === t[n].length && ((a = t[n][1]), (s = t[n][2])),
          i.on(s, a);
    },
    _unapplyEvents: function (t) {
      for (var i, a, s, n = 0; n < t.length; n++)
        (i = t[n][0]),
          2 === t[n].length
            ? ((s = e), (a = t[n][1]))
            : 3 === t[n].length && ((s = t[n][1]), (a = t[n][2])),
          i.off(a, s);
    },
    _buildEvents: function () {
      this.isInput
        ? (this._events = [
            [
              this.element,
              {
                focus: t.proxy(this.show, this),
                keyup: t.proxy(function (e) {
                  -1 ===
                    t.inArray(e.keyCode, [27, 37, 39, 38, 40, 32, 13, 9]) &&
                    this.update();
                }, this),
                keydown: t.proxy(this.keydown, this),
              },
            ],
          ])
        : this.component && this.hasInput
        ? (this._events = [
            [
              this.element.find("input"),
              {
                focus: t.proxy(this.show, this),
                keyup: t.proxy(function (e) {
                  -1 ===
                    t.inArray(e.keyCode, [27, 37, 39, 38, 40, 32, 13, 9]) &&
                    this.update();
                }, this),
                keydown: t.proxy(this.keydown, this),
              },
            ],
            [this.component, { click: t.proxy(this.show, this) }],
          ])
        : this.element.is("div")
        ? (this.isInline = !0)
        : (this._events = [
            [this.element, { click: t.proxy(this.show, this) }],
          ]),
        this._events.push(
          [
            this.element,
            "*",
            {
              blur: t.proxy(function (t) {
                this._focused_from = t.target;
              }, this),
            },
          ],
          [
            this.element,
            {
              blur: t.proxy(function (t) {
                this._focused_from = t.target;
              }, this),
            },
          ]
        ),
        (this._secondaryEvents = [
          [this.picker, { click: t.proxy(this.click, this) }],
          [t(window), { resize: t.proxy(this.place, this) }],
          [
            t(document),
            {
              "mousedown touchstart": t.proxy(function (t) {
                this.element.is(t.target) ||
                  this.element.find(t.target).length ||
                  this.picker.is(t.target) ||
                  this.picker.find(t.target).length ||
                  this.hide();
              }, this),
            },
          ],
        ]);
    },
    _attachEvents: function () {
      this._detachEvents(), this._applyEvents(this._events);
    },
    _detachEvents: function () {
      this._unapplyEvents(this._events);
    },
    _attachSecondaryEvents: function () {
      this._detachSecondaryEvents(), this._applyEvents(this._secondaryEvents);
    },
    _detachSecondaryEvents: function () {
      this._unapplyEvents(this._secondaryEvents);
    },
    _trigger: function (e, i) {
      var a = i || this.dates.get(-1),
        s = this._utc_to_local(a);
      this.element.trigger({
        type: e,
        date: s,
        dates: t.map(this.dates, this._utc_to_local),
        format: t.proxy(function (t, e) {
          0 === arguments.length
            ? ((t = this.dates.length - 1), (e = this.o.format))
            : "string" == typeof t && ((e = t), (t = this.dates.length - 1)),
            (e = e || this.o.format);
          var i = this.dates.get(t);
          return g.formatDate(i, e, this.o.language);
        }, this),
      });
    },
    show: function () {
      this.isInline || this.picker.appendTo("body"),
        this.picker.show(),
        this.place(),
        this._attachSecondaryEvents(),
        this._trigger("show");
    },
    hide: function () {
      this.isInline ||
        (this.picker.is(":visible") &&
          ((this.focusDate = null),
          this.picker.hide().detach(),
          this._detachSecondaryEvents(),
          (this.viewMode = this.o.startView),
          this.showMode(),
          this.o.forceParse &&
            ((this.isInput && this.element.val()) ||
              (this.hasInput && this.element.find("input").val())) &&
            this.setValue(),
          this._trigger("hide")));
    },
    remove: function () {
      this.hide(),
        this._detachEvents(),
        this._detachSecondaryEvents(),
        this.picker.remove(),
        delete this.element.data().datepicker,
        this.isInput || delete this.element.data().date;
    },
    _utc_to_local: function (t) {
      return t && new Date(t.getTime() + 6e4 * t.getTimezoneOffset());
    },
    _local_to_utc: function (t) {
      return t && new Date(t.getTime() - 6e4 * t.getTimezoneOffset());
    },
    _zero_time: function (t) {
      return t && new Date(t.getFullYear(), t.getMonth(), t.getDate());
    },
    _zero_utc_time: function (t) {
      return (
        t &&
        new Date(Date.UTC(t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate()))
      );
    },
    getDates: function () {
      return t.map(this.dates, this._utc_to_local);
    },
    getUTCDates: function () {
      return t.map(this.dates, function (t) {
        return new Date(t);
      });
    },
    getDate: function () {
      return this._utc_to_local(this.getUTCDate());
    },
    getUTCDate: function () {
      return new Date(this.dates.get(-1));
    },
    setDates: function () {
      var e = t.isArray(arguments[0]) ? arguments[0] : arguments;
      this.update.apply(this, e), this._trigger("changeDate"), this.setValue();
    },
    setUTCDates: function () {
      var e = t.isArray(arguments[0]) ? arguments[0] : arguments;
      this.update.apply(this, t.map(e, this._utc_to_local)),
        this._trigger("changeDate"),
        this.setValue();
    },
    setDate: s("setDates"),
    setUTCDate: s("setUTCDates"),
    setValue: function () {
      var t = this.getFormattedDate();
      this.isInput
        ? this.element.val(t).change()
        : this.component && this.element.find("input").val(t).change();
    },
    getFormattedDate: function (i) {
      i === e && (i = this.o.format);
      var a = this.o.language;
      return t
        .map(this.dates, function (t) {
          return g.formatDate(t, i, a);
        })
        .join(this.o.multidateSeparator);
    },
    setStartDate: function (t) {
      this._process_options({ startDate: t }),
        this.update(),
        this.updateNavArrows();
    },
    setEndDate: function (t) {
      this._process_options({ endDate: t }),
        this.update(),
        this.updateNavArrows();
    },
    setDaysOfWeekDisabled: function (t) {
      this._process_options({ daysOfWeekDisabled: t }),
        this.update(),
        this.updateNavArrows();
    },
    place: function () {
      if (!this.isInline) {
        var e = this.picker.outerWidth(),
          i = this.picker.outerHeight(),
          a = 10,
          s = h.width(),
          n = h.height(),
          r = h.scrollTop(),
          o =
            parseInt(
              this.element
                .parents()
                .filter(function () {
                  return "auto" !== t(this).css("z-index");
                })
                .first()
                .css("z-index")
            ) + 10,
          d = this.component
            ? this.component.parent().offset()
            : this.element.offset(),
          l = this.component
            ? this.component.outerHeight(!0)
            : this.element.outerHeight(!1),
          c = this.component
            ? this.component.outerWidth(!0)
            : this.element.outerWidth(!1),
          u = d.left,
          p = d.top;
        this.picker.removeClass(
          "datepicker-orient-top datepicker-orient-bottom datepicker-orient-right datepicker-orient-left"
        ),
          "auto" !== this.o.orientation.x
            ? (this.picker.addClass(
                "datepicker-orient-" + this.o.orientation.x
              ),
              "right" === this.o.orientation.x && (u -= e - c))
            : (this.picker.addClass("datepicker-orient-left"),
              d.left < 0
                ? (u -= d.left - a)
                : d.left + e > s && (u = s - e - a));
        var f,
          g,
          v = this.o.orientation.y;
        "auto" === v &&
          ((f = -r + d.top - i),
          (g = r + n - (d.top + l + i)),
          (v = Math.max(f, g) === g ? "top" : "bottom")),
          this.picker.addClass("datepicker-orient-" + v),
          "top" === v
            ? (p += l)
            : (p -= i + parseInt(this.picker.css("padding-top"))),
          this.picker.css({ top: p, left: u, zIndex: o });
      }
    },
    _allow_update: !0,
    update: function () {
      if (this._allow_update) {
        var e = this.dates.copy(),
          i = [],
          a = !1;
        arguments.length
          ? (t.each(
              arguments,
              t.proxy(function (t, e) {
                e instanceof Date && (e = this._local_to_utc(e)), i.push(e);
              }, this)
            ),
            (a = !0))
          : ((i = this.isInput
              ? this.element.val()
              : this.element.data("date") || this.element.find("input").val()),
            (i =
              i && this.o.multidate ? i.split(this.o.multidateSeparator) : [i]),
            delete this.element.data().date),
          (i = t.map(
            i,
            t.proxy(function (t) {
              return g.parseDate(t, this.o.format, this.o.language);
            }, this)
          )),
          (i = t.grep(
            i,
            t.proxy(function (t) {
              return t < this.o.startDate || t > this.o.endDate || !t;
            }, this),
            !0
          )),
          this.dates.replace(i),
          this.dates.length
            ? (this.viewDate = new Date(this.dates.get(-1)))
            : this.viewDate < this.o.startDate
            ? (this.viewDate = new Date(this.o.startDate))
            : this.viewDate > this.o.endDate &&
              (this.viewDate = new Date(this.o.endDate)),
          a
            ? this.setValue()
            : i.length &&
              String(e) !== String(this.dates) &&
              this._trigger("changeDate"),
          !this.dates.length && e.length && this._trigger("clearDate"),
          this.fill();
      }
    },
    fillDow: function () {
      var t = this.o.weekStart,
        e = "<tr>";
      if (this.o.calendarWeeks) {
        var i = '<th class="cw">&nbsp;</th>';
        (e += i),
          this.picker.find(".datepicker-days thead tr:first-child").prepend(i);
      }
      for (; t < this.o.weekStart + 7; )
        e += '<th class="dow">' + f[this.o.language].daysMin[t++ % 7] + "</th>";
      (e += "</tr>"), this.picker.find(".datepicker-days thead").append(e);
    },
    fillMonths: function () {
      for (var t = "", e = 0; 12 > e; )
        t +=
          '<span class="month">' +
          f[this.o.language].monthsShort[e++] +
          "</span>";
      this.picker.find(".datepicker-months td").html(t);
    },
    setRange: function (e) {
      e && e.length
        ? (this.range = t.map(e, function (t) {
            return t.valueOf();
          }))
        : delete this.range,
        this.fill();
    },
    getClassNames: function (e) {
      var i = [],
        a = this.viewDate.getUTCFullYear(),
        s = this.viewDate.getUTCMonth(),
        n = new Date();
      return (
        e.getUTCFullYear() < a ||
        (e.getUTCFullYear() === a && e.getUTCMonth() < s)
          ? i.push("old")
          : (e.getUTCFullYear() > a ||
              (e.getUTCFullYear() === a && e.getUTCMonth() > s)) &&
            i.push("new"),
        this.focusDate &&
          e.valueOf() === this.focusDate.valueOf() &&
          i.push("focused"),
        this.o.todayHighlight &&
          e.getUTCFullYear() === n.getFullYear() &&
          e.getUTCMonth() === n.getMonth() &&
          e.getUTCDate() === n.getDate() &&
          i.push("today"),
        -1 !== this.dates.contains(e) && i.push("active"),
        (e.valueOf() < this.o.startDate ||
          e.valueOf() > this.o.endDate ||
          -1 !== t.inArray(e.getUTCDay(), this.o.daysOfWeekDisabled)) &&
          i.push("disabled"),
        this.range &&
          (e > this.range[0] &&
            e < this.range[this.range.length - 1] &&
            i.push("range"),
          -1 !== t.inArray(e.valueOf(), this.range) && i.push("selected")),
        i
      );
    },
    fill: function () {
      var a,
        s = new Date(this.viewDate),
        n = s.getUTCFullYear(),
        r = s.getUTCMonth(),
        h =
          this.o.startDate !== -1 / 0
            ? this.o.startDate.getUTCFullYear()
            : -1 / 0,
        o =
          this.o.startDate !== -1 / 0 ? this.o.startDate.getUTCMonth() : -1 / 0,
        d = 1 / 0 !== this.o.endDate ? this.o.endDate.getUTCFullYear() : 1 / 0,
        l = 1 / 0 !== this.o.endDate ? this.o.endDate.getUTCMonth() : 1 / 0,
        c = f[this.o.language].today || f.en.today || "",
        u = f[this.o.language].clear || f.en.clear || "";
      this.picker
        .find(".datepicker-days thead th.datepicker-switch")
        .text(f[this.o.language].months[r] + " " + n),
        this.picker
          .find("tfoot th.today")
          .text(c)
          .toggle(this.o.todayBtn !== !1),
        this.picker
          .find("tfoot th.clear")
          .text(u)
          .toggle(this.o.clearBtn !== !1),
        this.updateNavArrows(),
        this.fillMonths();
      var p = i(n, r - 1, 28),
        v = g.getDaysInMonth(p.getUTCFullYear(), p.getUTCMonth());
      p.setUTCDate(v),
        p.setUTCDate(v - ((p.getUTCDay() - this.o.weekStart + 7) % 7));
      var D = new Date(p);
      D.setUTCDate(D.getUTCDate() + 42), (D = D.valueOf());
      for (var m, y = []; p.valueOf() < D; ) {
        if (
          p.getUTCDay() === this.o.weekStart &&
          (y.push("<tr>"), this.o.calendarWeeks)
        ) {
          var w = new Date(
              +p + ((this.o.weekStart - p.getUTCDay() - 7) % 7) * 864e5
            ),
            k = new Date(Number(w) + ((11 - w.getUTCDay()) % 7) * 864e5),
            _ = new Date(
              Number((_ = i(k.getUTCFullYear(), 0, 1))) +
                ((11 - _.getUTCDay()) % 7) * 864e5
            ),
            C = (k - _) / 864e5 / 7 + 1;
          y.push('<td class="cw">' + C + "</td>");
        }
        if (
          ((m = this.getClassNames(p)),
          m.push("day"),
          this.o.beforeShowDay !== t.noop)
        ) {
          var T = this.o.beforeShowDay(this._utc_to_local(p));
          T === e
            ? (T = {})
            : "boolean" == typeof T
            ? (T = { enabled: T })
            : "string" == typeof T && (T = { classes: T }),
            T.enabled === !1 && m.push("disabled"),
            T.classes && (m = m.concat(T.classes.split(/\s+/))),
            T.tooltip && (a = T.tooltip);
        }
        (m = t.unique(m)),
          y.push(
            '<td class="' +
              m.join(" ") +
              '"' +
              (a ? ' title="' + a + '"' : "") +
              ">" +
              p.getUTCDate() +
              "</td>"
          ),
          p.getUTCDay() === this.o.weekEnd && y.push("</tr>"),
          p.setUTCDate(p.getUTCDate() + 1);
      }
      this.picker.find(".datepicker-days tbody").empty().append(y.join(""));
      var b = this.picker
        .find(".datepicker-months")
        .find("th:eq(1)")
        .text(n)
        .end()
        .find("span")
        .removeClass("active");
      t.each(this.dates, function (t, e) {
        e.getUTCFullYear() === n && b.eq(e.getUTCMonth()).addClass("active");
      }),
        (h > n || n > d) && b.addClass("disabled"),
        n === h && b.slice(0, o).addClass("disabled"),
        n === d && b.slice(l + 1).addClass("disabled"),
        (y = ""),
        (n = 10 * parseInt(n / 10, 10));
      var U = this.picker
        .find(".datepicker-years")
        .find("th:eq(1)")
        .text(n + "-" + (n + 9))
        .end()
        .find("td");
      n -= 1;
      for (
        var M,
          x = t.map(this.dates, function (t) {
            return t.getUTCFullYear();
          }),
          S = -1;
        11 > S;
        S++
      )
        (M = ["year"]),
          -1 === S ? M.push("old") : 10 === S && M.push("new"),
          -1 !== t.inArray(n, x) && M.push("active"),
          (h > n || n > d) && M.push("disabled"),
          (y += '<span class="' + M.join(" ") + '">' + n + "</span>"),
          (n += 1);
      U.html(y);
    },
    updateNavArrows: function () {
      if (this._allow_update) {
        var t = new Date(this.viewDate),
          e = t.getUTCFullYear(),
          i = t.getUTCMonth();
        switch (this.viewMode) {
          case 0:
            this.o.startDate !== -1 / 0 &&
            e <= this.o.startDate.getUTCFullYear() &&
            i <= this.o.startDate.getUTCMonth()
              ? this.picker.find(".prev").css({ visibility: "hidden" })
              : this.picker.find(".prev").css({ visibility: "visible" }),
              1 / 0 !== this.o.endDate &&
              e >= this.o.endDate.getUTCFullYear() &&
              i >= this.o.endDate.getUTCMonth()
                ? this.picker.find(".next").css({ visibility: "hidden" })
                : this.picker.find(".next").css({ visibility: "visible" });
            break;
          case 1:
          case 2:
            this.o.startDate !== -1 / 0 &&
            e <= this.o.startDate.getUTCFullYear()
              ? this.picker.find(".prev").css({ visibility: "hidden" })
              : this.picker.find(".prev").css({ visibility: "visible" }),
              1 / 0 !== this.o.endDate && e >= this.o.endDate.getUTCFullYear()
                ? this.picker.find(".next").css({ visibility: "hidden" })
                : this.picker.find(".next").css({ visibility: "visible" });
        }
      }
    },
    click: function (e) {
      e.preventDefault();
      var a,
        s,
        n,
        r = t(e.target).closest("span, td, th");
      if (1 === r.length)
        switch (r[0].nodeName.toLowerCase()) {
          case "th":
            switch (r[0].className) {
              case "datepicker-switch":
                this.showMode(1);
                break;
              case "prev":
              case "next":
                var h =
                  g.modes[this.viewMode].navStep *
                  ("prev" === r[0].className ? -1 : 1);
                switch (this.viewMode) {
                  case 0:
                    (this.viewDate = this.moveMonth(this.viewDate, h)),
                      this._trigger("changeMonth", this.viewDate);
                    break;
                  case 1:
                  case 2:
                    (this.viewDate = this.moveYear(this.viewDate, h)),
                      1 === this.viewMode &&
                        this._trigger("changeYear", this.viewDate);
                }
                this.fill();
                break;
              case "today":
                var o = new Date();
                (o = i(o.getFullYear(), o.getMonth(), o.getDate(), 0, 0, 0)),
                  this.showMode(-2);
                var d = "linked" === this.o.todayBtn ? null : "view";
                this._setDate(o, d);
                break;
              case "clear":
                var l;
                this.isInput
                  ? (l = this.element)
                  : this.component && (l = this.element.find("input")),
                  l && l.val("").change(),
                  this.update(),
                  this._trigger("changeDate"),
                  this.o.autoclose && this.hide();
            }
            break;
          case "span":
            r.is(".disabled") ||
              (this.viewDate.setUTCDate(1),
              r.is(".month")
                ? ((n = 1),
                  (s = r.parent().find("span").index(r)),
                  (a = this.viewDate.getUTCFullYear()),
                  this.viewDate.setUTCMonth(s),
                  this._trigger("changeMonth", this.viewDate),
                  1 === this.o.minViewMode && this._setDate(i(a, s, n)))
                : ((n = 1),
                  (s = 0),
                  (a = parseInt(r.text(), 10) || 0),
                  this.viewDate.setUTCFullYear(a),
                  this._trigger("changeYear", this.viewDate),
                  2 === this.o.minViewMode && this._setDate(i(a, s, n))),
              this.showMode(-1),
              this.fill());
            break;
          case "td":
            r.is(".day") &&
              !r.is(".disabled") &&
              ((n = parseInt(r.text(), 10) || 1),
              (a = this.viewDate.getUTCFullYear()),
              (s = this.viewDate.getUTCMonth()),
              r.is(".old")
                ? 0 === s
                  ? ((s = 11), (a -= 1))
                  : (s -= 1)
                : r.is(".new") && (11 === s ? ((s = 0), (a += 1)) : (s += 1)),
              this._setDate(i(a, s, n)));
        }
      this.picker.is(":visible") &&
        this._focused_from &&
        t(this._focused_from).focus(),
        delete this._focused_from;
    },
    _toggle_multidate: function (t) {
      var e = this.dates.contains(t);
      if (
        (t
          ? -1 !== e
            ? this.dates.remove(e)
            : this.dates.push(t)
          : this.dates.clear(),
        "number" == typeof this.o.multidate)
      )
        for (; this.dates.length > this.o.multidate; ) this.dates.remove(0);
    },
    _setDate: function (t, e) {
      (e && "date" !== e) || this._toggle_multidate(t && new Date(t)),
        (e && "view" !== e) || (this.viewDate = t && new Date(t)),
        this.fill(),
        this.setValue(),
        this._trigger("changeDate");
      var i;
      this.isInput
        ? (i = this.element)
        : this.component && (i = this.element.find("input")),
        i && i.change(),
        !this.o.autoclose || (e && "date" !== e) || this.hide();
    },
    moveMonth: function (t, i) {
      if (!t) return e;
      if (!i) return t;
      var a,
        s,
        n = new Date(t.valueOf()),
        r = n.getUTCDate(),
        h = n.getUTCMonth(),
        o = Math.abs(i);
      if (((i = i > 0 ? 1 : -1), 1 === o))
        (s =
          -1 === i
            ? function () {
                return n.getUTCMonth() === h;
              }
            : function () {
                return n.getUTCMonth() !== a;
              }),
          (a = h + i),
          n.setUTCMonth(a),
          (0 > a || a > 11) && (a = (a + 12) % 12);
      else {
        for (var d = 0; o > d; d++) n = this.moveMonth(n, i);
        (a = n.getUTCMonth()),
          n.setUTCDate(r),
          (s = function () {
            return a !== n.getUTCMonth();
          });
      }
      for (; s(); ) n.setUTCDate(--r), n.setUTCMonth(a);
      return n;
    },
    moveYear: function (t, e) {
      return this.moveMonth(t, 12 * e);
    },
    dateWithinRange: function (t) {
      return t >= this.o.startDate && t <= this.o.endDate;
    },
    keydown: function (t) {
      if (this.picker.is(":not(:visible)"))
        return 27 === t.keyCode && this.show(), void 0;
      var e,
        i,
        s,
        n = !1,
        r = this.focusDate || this.viewDate;
      switch (t.keyCode) {
        case 27:
          this.focusDate
            ? ((this.focusDate = null),
              (this.viewDate = this.dates.get(-1) || this.viewDate),
              this.fill())
            : this.hide(),
            t.preventDefault();
          break;
        case 37:
        case 39:
          if (!this.o.keyboardNavigation) break;
          (e = 37 === t.keyCode ? -1 : 1),
            t.ctrlKey
              ? ((i = this.moveYear(this.dates.get(-1) || a(), e)),
                (s = this.moveYear(r, e)),
                this._trigger("changeYear", this.viewDate))
              : t.shiftKey
              ? ((i = this.moveMonth(this.dates.get(-1) || a(), e)),
                (s = this.moveMonth(r, e)),
                this._trigger("changeMonth", this.viewDate))
              : ((i = new Date(this.dates.get(-1) || a())),
                i.setUTCDate(i.getUTCDate() + e),
                (s = new Date(r)),
                s.setUTCDate(r.getUTCDate() + e)),
            this.dateWithinRange(i) &&
              ((this.focusDate = this.viewDate = s),
              this.setValue(),
              this.fill(),
              t.preventDefault());
          break;
        case 38:
        case 40:
          if (!this.o.keyboardNavigation) break;
          (e = 38 === t.keyCode ? -1 : 1),
            t.ctrlKey
              ? ((i = this.moveYear(this.dates.get(-1) || a(), e)),
                (s = this.moveYear(r, e)),
                this._trigger("changeYear", this.viewDate))
              : t.shiftKey
              ? ((i = this.moveMonth(this.dates.get(-1) || a(), e)),
                (s = this.moveMonth(r, e)),
                this._trigger("changeMonth", this.viewDate))
              : ((i = new Date(this.dates.get(-1) || a())),
                i.setUTCDate(i.getUTCDate() + 7 * e),
                (s = new Date(r)),
                s.setUTCDate(r.getUTCDate() + 7 * e)),
            this.dateWithinRange(i) &&
              ((this.focusDate = this.viewDate = s),
              this.setValue(),
              this.fill(),
              t.preventDefault());
          break;
        case 32:
          break;
        case 13:
          (r = this.focusDate || this.dates.get(-1) || this.viewDate),
            this._toggle_multidate(r),
            (n = !0),
            (this.focusDate = null),
            (this.viewDate = this.dates.get(-1) || this.viewDate),
            this.setValue(),
            this.fill(),
            this.picker.is(":visible") &&
              (t.preventDefault(), this.o.autoclose && this.hide());
          break;
        case 9:
          (this.focusDate = null),
            (this.viewDate = this.dates.get(-1) || this.viewDate),
            this.fill(),
            this.hide();
      }
      if (n) {
        this.dates.length
          ? this._trigger("changeDate")
          : this._trigger("clearDate");
        var h;
        this.isInput
          ? (h = this.element)
          : this.component && (h = this.element.find("input")),
          h && h.change();
      }
    },
    showMode: function (t) {
      t &&
        (this.viewMode = Math.max(
          this.o.minViewMode,
          Math.min(2, this.viewMode + t)
        )),
        this.picker
          .find(">div")
          .hide()
          .filter(".datepicker-" + g.modes[this.viewMode].clsName)
          .css("display", "block"),
        this.updateNavArrows();
    },
  };
  var l = function (e, i) {
    (this.element = t(e)),
      (this.inputs = t.map(i.inputs, function (t) {
        return t.jquery ? t[0] : t;
      })),
      delete i.inputs,
      t(this.inputs)
        .datepicker(i)
        .bind("changeDate", t.proxy(this.dateUpdated, this)),
      (this.pickers = t.map(this.inputs, function (e) {
        return t(e).data("datepicker");
      })),
      this.updateDates();
  };
  l.prototype = {
    updateDates: function () {
      (this.dates = t.map(this.pickers, function (t) {
        return t.getUTCDate();
      })),
        this.updateRanges();
    },
    updateRanges: function () {
      var e = t.map(this.dates, function (t) {
        return t.valueOf();
      });
      t.each(this.pickers, function (t, i) {
        i.setRange(e);
      });
    },
    dateUpdated: function (e) {
      if (!this.updating) {
        this.updating = !0;
        var i = t(e.target).data("datepicker"),
          a = i.getUTCDate(),
          s = t.inArray(e.target, this.inputs),
          n = this.inputs.length;
        if (-1 !== s) {
          if (
            (t.each(this.pickers, function (t, e) {
              e.getUTCDate() || e.setUTCDate(a);
            }),
            a < this.dates[s])
          )
            for (; s >= 0 && a < this.dates[s]; )
              this.pickers[s--].setUTCDate(a);
          else if (a > this.dates[s])
            for (; n > s && a > this.dates[s]; )
              this.pickers[s++].setUTCDate(a);
          this.updateDates(), delete this.updating;
        }
      }
    },
    remove: function () {
      t.map(this.pickers, function (t) {
        t.remove();
      }),
        delete this.element.data().datepicker;
    },
  };
  var c = t.fn.datepicker;
  t.fn.datepicker = function (i) {
    var a = Array.apply(null, arguments);
    a.shift();
    var s;
    return (
      this.each(function () {
        var h = t(this),
          o = h.data("datepicker"),
          c = "object" == typeof i && i;
        if (!o) {
          var p = n(this, "date"),
            f = t.extend({}, u, p, c),
            g = r(f.language),
            v = t.extend({}, u, g, p, c);
          if (h.is(".input-daterange") || v.inputs) {
            var D = { inputs: v.inputs || h.find("input").toArray() };
            h.data("datepicker", (o = new l(this, t.extend(v, D))));
          } else h.data("datepicker", (o = new d(this, v)));
        }
        return "string" == typeof i &&
          "function" == typeof o[i] &&
          ((s = o[i].apply(o, a)), s !== e)
          ? !1
          : void 0;
      }),
      s !== e ? s : this
    );
  };
  var u = (t.fn.datepicker.defaults = {
      autoclose: !1,
      beforeShowDay: t.noop,
      calendarWeeks: !1,
      clearBtn: !1,
      daysOfWeekDisabled: [],
      endDate: 1 / 0,
      forceParse: !0,
      format: "mm/dd/yyyy",
      keyboardNavigation: !0,
      language: "en",
      minViewMode: 0,
      multidate: !1,
      multidateSeparator: ",",
      orientation: "auto",
      rtl: !1,
      startDate: -1 / 0,
      startView: 0,
      todayBtn: !1,
      todayHighlight: !1,
      weekStart: 0,
    }),
    p = (t.fn.datepicker.locale_opts = ["format", "rtl", "weekStart"]);
  t.fn.datepicker.Constructor = d;
  var f = (t.fn.datepicker.dates = {
      en: {
        days: [
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
        months: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ],
        monthsShort: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
        today: "Today",
        clear: "Clear",
      },
    }),
    g = {
      modes: [
        { clsName: "days", navFnc: "Month", navStep: 1 },
        { clsName: "months", navFnc: "FullYear", navStep: 1 },
        { clsName: "years", navFnc: "FullYear", navStep: 10 },
      ],
      isLeapYear: function (t) {
        return (t % 4 === 0 && t % 100 !== 0) || t % 400 === 0;
      },
      getDaysInMonth: function (t, e) {
        return [
          31,
          g.isLeapYear(t) ? 29 : 28,
          31,
          30,
          31,
          30,
          31,
          31,
          30,
          31,
          30,
          31,
        ][e];
      },
      validParts: /dd?|DD?|mm?|MM?|yy(?:yy)?/g,
      nonpunctuation: /[^ -\/:-@\[\u3400-\u9fff-`{-~\t\n\r]+/g,
      parseFormat: function (t) {
        var e = t.replace(this.validParts, "\x00").split("\x00"),
          i = t.match(this.validParts);
        if (!e || !e.length || !i || 0 === i.length)
          throw new Error("Invalid date format.");
        return { separators: e, parts: i };
      },
      parseDate: function (a, s, n) {
        function r() {
          var t = this.slice(0, u[l].length),
            e = u[l].slice(0, t.length);
          return t === e;
        }
        if (!a) return e;
        if (a instanceof Date) return a;
        "string" == typeof s && (s = g.parseFormat(s));
        var h,
          o,
          l,
          c = /([\-+]\d+)([dmwy])/,
          u = a.match(/([\-+]\d+)([dmwy])/g);
        if (/^[\-+]\d+[dmwy]([\s,]+[\-+]\d+[dmwy])*$/.test(a)) {
          for (a = new Date(), l = 0; l < u.length; l++)
            switch (((h = c.exec(u[l])), (o = parseInt(h[1])), h[2])) {
              case "d":
                a.setUTCDate(a.getUTCDate() + o);
                break;
              case "m":
                a = d.prototype.moveMonth.call(d.prototype, a, o);
                break;
              case "w":
                a.setUTCDate(a.getUTCDate() + 7 * o);
                break;
              case "y":
                a = d.prototype.moveYear.call(d.prototype, a, o);
            }
          return i(
            a.getUTCFullYear(),
            a.getUTCMonth(),
            a.getUTCDate(),
            0,
            0,
            0
          );
        }
        (u = (a && a.match(this.nonpunctuation)) || []), (a = new Date());
        var p,
          v,
          D = {},
          m = ["yyyy", "yy", "M", "MM", "m", "mm", "d", "dd"],
          y = {
            yyyy: function (t, e) {
              return t.setUTCFullYear(e);
            },
            yy: function (t, e) {
              return t.setUTCFullYear(2e3 + e);
            },
            m: function (t, e) {
              if (isNaN(t)) return t;
              for (e -= 1; 0 > e; ) e += 12;
              for (e %= 12, t.setUTCMonth(e); t.getUTCMonth() !== e; )
                t.setUTCDate(t.getUTCDate() - 1);
              return t;
            },
            d: function (t, e) {
              return t.setUTCDate(e);
            },
          };
        (y.M = y.MM = y.mm = y.m),
          (y.dd = y.d),
          (a = i(a.getFullYear(), a.getMonth(), a.getDate(), 0, 0, 0));
        var w = s.parts.slice();
        if (
          (u.length !== w.length &&
            (w = t(w)
              .filter(function (e, i) {
                return -1 !== t.inArray(i, m);
              })
              .toArray()),
          u.length === w.length)
        ) {
          var k;
          for (l = 0, k = w.length; k > l; l++) {
            if (((p = parseInt(u[l], 10)), (h = w[l]), isNaN(p)))
              switch (h) {
                case "MM":
                  (v = t(f[n].months).filter(r)),
                    (p = t.inArray(v[0], f[n].months) + 1);
                  break;
                case "M":
                  (v = t(f[n].monthsShort).filter(r)),
                    (p = t.inArray(v[0], f[n].monthsShort) + 1);
              }
            D[h] = p;
          }
          var _, C;
          for (l = 0; l < m.length; l++)
            (C = m[l]),
              C in D &&
                !isNaN(D[C]) &&
                ((_ = new Date(a)), y[C](_, D[C]), isNaN(_) || (a = _));
        }
        return a;
      },
      formatDate: function (e, i, a) {
        if (!e) return "";
        "string" == typeof i && (i = g.parseFormat(i));
        var s = {
          d: e.getUTCDate(),
          D: f[a].daysShort[e.getUTCDay()],
          DD: f[a].days[e.getUTCDay()],
          m: e.getUTCMonth() + 1,
          M: f[a].monthsShort[e.getUTCMonth()],
          MM: f[a].months[e.getUTCMonth()],
          yy: e.getUTCFullYear().toString().substring(2),
          yyyy: e.getUTCFullYear(),
        };
        (s.dd = (s.d < 10 ? "0" : "") + s.d),
          (s.mm = (s.m < 10 ? "0" : "") + s.m),
          (e = []);
        for (
          var n = t.extend([], i.separators), r = 0, h = i.parts.length;
          h >= r;
          r++
        )
          n.length && e.push(n.shift()), e.push(s[i.parts[r]]);
        return e.join("");
      },
      headTemplate:
        '<thead><tr><th class="prev">&laquo;</th><th colspan="5" class="datepicker-switch"></th><th class="next">&raquo;</th></tr></thead>',
      contTemplate: '<tbody><tr><td colspan="7"></td></tr></tbody>',
      footTemplate:
        '<tfoot><tr><th colspan="7" class="today"></th></tr><tr><th colspan="7" class="clear"></th></tr></tfoot>',
    };
  (g.template =
    '<div class="datepicker"><div class="datepicker-days"><table class=" table-condensed">' +
    g.headTemplate +
    "<tbody></tbody>" +
    g.footTemplate +
    '</table></div><div class="datepicker-months"><table class="table-condensed">' +
    g.headTemplate +
    g.contTemplate +
    g.footTemplate +
    '</table></div><div class="datepicker-years"><table class="table-condensed">' +
    g.headTemplate +
    g.contTemplate +
    g.footTemplate +
    "</table></div></div>"),
    (t.fn.datepicker.DPGlobal = g),
    (t.fn.datepicker.noConflict = function () {
      return (t.fn.datepicker = c), this;
    }),
    t(document).on(
      "focus.datepicker.data-api click.datepicker.data-api",
      '[data-provide="datepicker"]',
      function (e) {
        var i = t(this);
        i.data("datepicker") || (e.preventDefault(), i.datepicker("show"));
      }
    ),
    t(function () {
      t('[data-provide="datepicker-inline"]').datepicker();
    });
})(window.jQuery);
/*! Clipboard.js v2.0.1 * https://zenorocha.github.io/clipboard.js *  * Licensed MIT © Zeno Rocha */
!(function (t, e) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = e())
    : "function" == typeof define && define.amd
    ? define([], e)
    : "object" == typeof exports
    ? (exports.ClipboardJS = e())
    : (t.ClipboardJS = e());
})(this, function () {
  return (function (t) {
    function e(o) {
      if (n[o]) return n[o].exports;
      var r = (n[o] = { i: o, l: !1, exports: {} });
      return t[o].call(r.exports, r, r.exports, e), (r.l = !0), r.exports;
    }
    var n = {};
    return (
      (e.m = t),
      (e.c = n),
      (e.i = function (t) {
        return t;
      }),
      (e.d = function (t, n, o) {
        e.o(t, n) ||
          Object.defineProperty(t, n, {
            configurable: !1,
            enumerable: !0,
            get: o,
          });
      }),
      (e.n = function (t) {
        var n =
          t && t.__esModule
            ? function () {
                return t.default;
              }
            : function () {
                return t;
              };
        return e.d(n, "a", n), n;
      }),
      (e.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
      }),
      (e.p = ""),
      e((e.s = 3))
    );
  })([
    function (t, e, n) {
      var o, r, i;
      !(function (a, c) {
        (r = [t, n(7)]),
          (o = c),
          void 0 !== (i = "function" == typeof o ? o.apply(e, r) : o) &&
            (t.exports = i);
      })(0, function (t, e) {
        "use strict";
        function n(t, e) {
          if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function");
        }
        var o = (function (t) {
            return t && t.__esModule ? t : { default: t };
          })(e),
          r =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                },
          i = (function () {
            function t(t, e) {
              for (var n = 0; n < e.length; n++) {
                var o = e[n];
                (o.enumerable = o.enumerable || !1),
                  (o.configurable = !0),
                  "value" in o && (o.writable = !0),
                  Object.defineProperty(t, o.key, o);
              }
            }
            return function (e, n, o) {
              return n && t(e.prototype, n), o && t(e, o), e;
            };
          })(),
          a = (function () {
            function t(e) {
              n(this, t), this.resolveOptions(e), this.initSelection();
            }
            return (
              i(t, [
                {
                  key: "resolveOptions",
                  value: function () {
                    var t =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {};
                    (this.action = t.action),
                      (this.container = t.container),
                      (this.emitter = t.emitter),
                      (this.target = t.target),
                      (this.text = t.text),
                      (this.trigger = t.trigger),
                      (this.selectedText = "");
                  },
                },
                {
                  key: "initSelection",
                  value: function () {
                    this.text
                      ? this.selectFake()
                      : this.target && this.selectTarget();
                  },
                },
                {
                  key: "selectFake",
                  value: function () {
                    var t = this,
                      e = "rtl" == document.documentElement.getAttribute("dir");
                    this.removeFake(),
                      (this.fakeHandlerCallback = function () {
                        return t.removeFake();
                      }),
                      (this.fakeHandler =
                        this.container.addEventListener(
                          "click",
                          this.fakeHandlerCallback
                        ) || !0),
                      (this.fakeElem = document.createElement("textarea")),
                      (this.fakeElem.style.fontSize = "12pt"),
                      (this.fakeElem.style.border = "0"),
                      (this.fakeElem.style.padding = "0"),
                      (this.fakeElem.style.margin = "0"),
                      (this.fakeElem.style.position = "absolute"),
                      (this.fakeElem.style[e ? "right" : "left"] = "-9999px");
                    var n =
                      window.pageYOffset || document.documentElement.scrollTop;
                    (this.fakeElem.style.top = n + "px"),
                      this.fakeElem.setAttribute("readonly", ""),
                      (this.fakeElem.value = this.text),
                      this.container.appendChild(this.fakeElem),
                      (this.selectedText = (0, o.default)(this.fakeElem)),
                      this.copyText();
                  },
                },
                {
                  key: "removeFake",
                  value: function () {
                    this.fakeHandler &&
                      (this.container.removeEventListener(
                        "click",
                        this.fakeHandlerCallback
                      ),
                      (this.fakeHandler = null),
                      (this.fakeHandlerCallback = null)),
                      this.fakeElem &&
                        (this.container.removeChild(this.fakeElem),
                        (this.fakeElem = null));
                  },
                },
                {
                  key: "selectTarget",
                  value: function () {
                    (this.selectedText = (0, o.default)(this.target)),
                      this.copyText();
                  },
                },
                {
                  key: "copyText",
                  value: function () {
                    var t = void 0;
                    try {
                      t = document.execCommand(this.action);
                    } catch (e) {
                      t = !1;
                    }
                    this.handleResult(t);
                  },
                },
                {
                  key: "handleResult",
                  value: function (t) {
                    this.emitter.emit(t ? "success" : "error", {
                      action: this.action,
                      text: this.selectedText,
                      trigger: this.trigger,
                      clearSelection: this.clearSelection.bind(this),
                    });
                  },
                },
                {
                  key: "clearSelection",
                  value: function () {
                    this.trigger && this.trigger.focus(),
                      window.getSelection().removeAllRanges();
                  },
                },
                {
                  key: "destroy",
                  value: function () {
                    this.removeFake();
                  },
                },
                {
                  key: "action",
                  set: function () {
                    var t =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : "copy";
                    if (
                      ((this._action = t),
                      "copy" !== this._action && "cut" !== this._action)
                    )
                      throw new Error(
                        'Invalid "action" value, use either "copy" or "cut"'
                      );
                  },
                  get: function () {
                    return this._action;
                  },
                },
                {
                  key: "target",
                  set: function (t) {
                    if (void 0 !== t) {
                      if (
                        !t ||
                        "object" !== (void 0 === t ? "undefined" : r(t)) ||
                        1 !== t.nodeType
                      )
                        throw new Error(
                          'Invalid "target" value, use a valid Element'
                        );
                      if ("copy" === this.action && t.hasAttribute("disabled"))
                        throw new Error(
                          'Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute'
                        );
                      if (
                        "cut" === this.action &&
                        (t.hasAttribute("readonly") ||
                          t.hasAttribute("disabled"))
                      )
                        throw new Error(
                          'Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes'
                        );
                      this._target = t;
                    }
                  },
                  get: function () {
                    return this._target;
                  },
                },
              ]),
              t
            );
          })();
        t.exports = a;
      });
    },
    function (t, e, n) {
      function o(t, e, n) {
        if (!t && !e && !n) throw new Error("Missing required arguments");
        if (!c.string(e))
          throw new TypeError("Second argument must be a String");
        if (!c.fn(n)) throw new TypeError("Third argument must be a Function");
        if (c.node(t)) return r(t, e, n);
        if (c.nodeList(t)) return i(t, e, n);
        if (c.string(t)) return a(t, e, n);
        throw new TypeError(
          "First argument must be a String, HTMLElement, HTMLCollection, or NodeList"
        );
      }
      function r(t, e, n) {
        return (
          t.addEventListener(e, n),
          {
            destroy: function () {
              t.removeEventListener(e, n);
            },
          }
        );
      }
      function i(t, e, n) {
        return (
          Array.prototype.forEach.call(t, function (t) {
            t.addEventListener(e, n);
          }),
          {
            destroy: function () {
              Array.prototype.forEach.call(t, function (t) {
                t.removeEventListener(e, n);
              });
            },
          }
        );
      }
      function a(t, e, n) {
        return u(document.body, t, e, n);
      }
      var c = n(6),
        u = n(5);
      t.exports = o;
    },
    function (t, e) {
      function n() {}
      (n.prototype = {
        on: function (t, e, n) {
          var o = this.e || (this.e = {});
          return (o[t] || (o[t] = [])).push({ fn: e, ctx: n }), this;
        },
        once: function (t, e, n) {
          function o() {
            r.off(t, o), e.apply(n, arguments);
          }
          var r = this;
          return (o._ = e), this.on(t, o, n);
        },
        emit: function (t) {
          var e = [].slice.call(arguments, 1),
            n = ((this.e || (this.e = {}))[t] || []).slice(),
            o = 0,
            r = n.length;
          for (o; o < r; o++) n[o].fn.apply(n[o].ctx, e);
          return this;
        },
        off: function (t, e) {
          var n = this.e || (this.e = {}),
            o = n[t],
            r = [];
          if (o && e)
            for (var i = 0, a = o.length; i < a; i++)
              o[i].fn !== e && o[i].fn._ !== e && r.push(o[i]);
          return r.length ? (n[t] = r) : delete n[t], this;
        },
      }),
        (t.exports = n);
    },
    function (t, e, n) {
      var o, r, i;
      !(function (a, c) {
        (r = [t, n(0), n(2), n(1)]),
          (o = c),
          void 0 !== (i = "function" == typeof o ? o.apply(e, r) : o) &&
            (t.exports = i);
      })(0, function (t, e, n, o) {
        "use strict";
        function r(t) {
          return t && t.__esModule ? t : { default: t };
        }
        function i(t, e) {
          if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function");
        }
        function a(t, e) {
          if (!t)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return !e || ("object" != typeof e && "function" != typeof e) ? t : e;
        }
        function c(t, e) {
          if ("function" != typeof e && null !== e)
            throw new TypeError(
              "Super expression must either be null or a function, not " +
                typeof e
            );
          (t.prototype = Object.create(e && e.prototype, {
            constructor: {
              value: t,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          })),
            e &&
              (Object.setPrototypeOf
                ? Object.setPrototypeOf(t, e)
                : (t.__proto__ = e));
        }
        function u(t, e) {
          var n = "data-clipboard-" + t;
          if (e.hasAttribute(n)) return e.getAttribute(n);
        }
        var l = r(e),
          s = r(n),
          f = r(o),
          d =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                },
          h = (function () {
            function t(t, e) {
              for (var n = 0; n < e.length; n++) {
                var o = e[n];
                (o.enumerable = o.enumerable || !1),
                  (o.configurable = !0),
                  "value" in o && (o.writable = !0),
                  Object.defineProperty(t, o.key, o);
              }
            }
            return function (e, n, o) {
              return n && t(e.prototype, n), o && t(e, o), e;
            };
          })(),
          p = (function (t) {
            function e(t, n) {
              i(this, e);
              var o = a(
                this,
                (e.__proto__ || Object.getPrototypeOf(e)).call(this)
              );
              return o.resolveOptions(n), o.listenClick(t), o;
            }
            return (
              c(e, t),
              h(
                e,
                [
                  {
                    key: "resolveOptions",
                    value: function () {
                      var t =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : {};
                      (this.action =
                        "function" == typeof t.action
                          ? t.action
                          : this.defaultAction),
                        (this.target =
                          "function" == typeof t.target
                            ? t.target
                            : this.defaultTarget),
                        (this.text =
                          "function" == typeof t.text
                            ? t.text
                            : this.defaultText),
                        (this.container =
                          "object" === d(t.container)
                            ? t.container
                            : document.body);
                    },
                  },
                  {
                    key: "listenClick",
                    value: function (t) {
                      var e = this;
                      this.listener = (0, f.default)(t, "click", function (t) {
                        return e.onClick(t);
                      });
                    },
                  },
                  {
                    key: "onClick",
                    value: function (t) {
                      var e = t.delegateTarget || t.currentTarget;
                      this.clipboardAction && (this.clipboardAction = null),
                        (this.clipboardAction = new l.default({
                          action: this.action(e),
                          target: this.target(e),
                          text: this.text(e),
                          container: this.container,
                          trigger: e,
                          emitter: this,
                        }));
                    },
                  },
                  {
                    key: "defaultAction",
                    value: function (t) {
                      return u("action", t);
                    },
                  },
                  {
                    key: "defaultTarget",
                    value: function (t) {
                      var e = u("target", t);
                      if (e) return document.querySelector(e);
                    },
                  },
                  {
                    key: "defaultText",
                    value: function (t) {
                      return u("text", t);
                    },
                  },
                  {
                    key: "destroy",
                    value: function () {
                      this.listener.destroy(),
                        this.clipboardAction &&
                          (this.clipboardAction.destroy(),
                          (this.clipboardAction = null));
                    },
                  },
                ],
                [
                  {
                    key: "isSupported",
                    value: function () {
                      var t =
                          arguments.length > 0 && void 0 !== arguments[0]
                            ? arguments[0]
                            : ["copy", "cut"],
                        e = "string" == typeof t ? [t] : t,
                        n = !!document.queryCommandSupported;
                      return (
                        e.forEach(function (t) {
                          n = n && !!document.queryCommandSupported(t);
                        }),
                        n
                      );
                    },
                  },
                ]
              ),
              e
            );
          })(s.default);
        t.exports = p;
      });
    },
    function (t, e) {
      function n(t, e) {
        for (; t && t.nodeType !== o; ) {
          if ("function" == typeof t.matches && t.matches(e)) return t;
          t = t.parentNode;
        }
      }
      var o = 9;
      if ("undefined" != typeof Element && !Element.prototype.matches) {
        var r = Element.prototype;
        r.matches =
          r.matchesSelector ||
          r.mozMatchesSelector ||
          r.msMatchesSelector ||
          r.oMatchesSelector ||
          r.webkitMatchesSelector;
      }
      t.exports = n;
    },
    function (t, e, n) {
      function o(t, e, n, o, r) {
        var a = i.apply(this, arguments);
        return (
          t.addEventListener(n, a, r),
          {
            destroy: function () {
              t.removeEventListener(n, a, r);
            },
          }
        );
      }
      function r(t, e, n, r, i) {
        return "function" == typeof t.addEventListener
          ? o.apply(null, arguments)
          : "function" == typeof n
          ? o.bind(null, document).apply(null, arguments)
          : ("string" == typeof t && (t = document.querySelectorAll(t)),
            Array.prototype.map.call(t, function (t) {
              return o(t, e, n, r, i);
            }));
      }
      function i(t, e, n, o) {
        return function (n) {
          (n.delegateTarget = a(n.target, e)), n.delegateTarget && o.call(t, n);
        };
      }
      var a = n(4);
      t.exports = r;
    },
    function (t, e) {
      (e.node = function (t) {
        return void 0 !== t && t instanceof HTMLElement && 1 === t.nodeType;
      }),
        (e.nodeList = function (t) {
          var n = Object.prototype.toString.call(t);
          return (
            void 0 !== t &&
            ("[object NodeList]" === n || "[object HTMLCollection]" === n) &&
            "length" in t &&
            (0 === t.length || e.node(t[0]))
          );
        }),
        (e.string = function (t) {
          return "string" == typeof t || t instanceof String;
        }),
        (e.fn = function (t) {
          return "[object Function]" === Object.prototype.toString.call(t);
        });
    },
    function (t, e) {
      function n(t) {
        var e;
        if ("SELECT" === t.nodeName) t.focus(), (e = t.value);
        else if ("INPUT" === t.nodeName || "TEXTAREA" === t.nodeName) {
          var n = t.hasAttribute("readonly");
          n || t.setAttribute("readonly", ""),
            t.select(),
            t.setSelectionRange(0, t.value.length),
            n || t.removeAttribute("readonly"),
            (e = t.value);
        } else {
          t.hasAttribute("contenteditable") && t.focus();
          var o = window.getSelection(),
            r = document.createRange();
          r.selectNodeContents(t),
            o.removeAllRanges(),
            o.addRange(r),
            (e = o.toString());
        }
        return e;
      }
      t.exports = n;
    },
  ]);
});

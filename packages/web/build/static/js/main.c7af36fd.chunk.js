(this["webpackJsonp@podhouse/web"] =
  this["webpackJsonp@podhouse/web"] || []).push([
  [0],
  {
    282: function (n, e, t) {
      "use strict";
      t.r(e);
      var r = t(1),
        i = t(0),
        a = t.n(i),
        o = t(176),
        c = t.n(o),
        s = t(53),
        d = t(320),
        l = t(317),
        u = t(74),
        f = t(178),
        p = t(5),
        j = t(283),
        h = t(284),
        b = Object(h.a)({
          id: "auth",
          initial: "getstarted",
          states: {
            getstarted: {
              on: { SIGNIN: "signin", SIGNUP: "signup", FORGOT: "forgot" },
            },
            signin: {
              on: { SIGNUP: "signup", FORGOT: "forgot", RESET: "reset" },
            },
            signup: { on: { SIGNIN: "signin", FORGOT: "forgot" } },
            forgot: { on: { SIGNIN: "signin", SIGNUP: "signup" } },
            reset: { on: { SUCCESS: "success", ERROR: "signin" } },
            success: { type: "final" },
          },
        }),
        x = function () {
          var n = Object(j.a)(b),
            e = Object(p.a)(n, 2),
            t = e[0],
            r = e[1],
            a = Object(i.useState)(!1),
            o = Object(p.a)(a, 2),
            c = o[0],
            s = o[1];
          return {
            current: t,
            auth: c,
            handleAuth: function () {
              s(!1 === c);
            },
            send: r,
          };
        },
        g = a.a.createContext(void 0),
        m = function (n) {
          var e = n.children,
            t = x(),
            i = [t.current, t.auth, t.handleAuth, t.send];
          return Object(r.jsx)(g.Provider, { value: i, children: e });
        },
        O = function () {
          var n = Object(i.useContext)(g);
          if (void 0 === n)
            throw new Error("useAuth can only be used inside AuthProvider");
          return n;
        },
        v = Object(h.a)({
          id: "settings",
          initial: "close",
          states: {
            close: { on: { OPEN: "open" } },
            open: { on: { CLOSE: "close" } },
          },
        }),
        w = function () {
          var n = Object(j.a)(v),
            e = Object(p.a)(n, 2),
            t = e[0],
            r = e[1];
          return {
            settings: t,
            handleSettings: function () {
              t.matches("close") ? r("OPEN") : r("CLOSE");
            },
          };
        },
        y = a.a.createContext(void 0),
        k = function (n) {
          var e = n.children,
            t = w(),
            i = [t.settings, t.handleSettings];
          return Object(r.jsx)(y.Provider, { value: i, children: e });
        },
        C = function () {
          var n = Object(i.useContext)(y);
          if (void 0 === n)
            throw new Error(
              "useSettings can only be used inside SettingsProvider"
            );
          return n;
        },
        S = Object(h.a)({
          id: "queue",
          initial: "close",
          states: {
            close: { on: { OPEN: "open" } },
            open: { on: { CLOSE: "close" } },
          },
        }),
        E = function () {
          var n = Object(j.a)(S),
            e = Object(p.a)(n, 2),
            t = e[0],
            r = e[1];
          return {
            queue: t,
            handleQueue: function () {
              t.matches("close") ? r("OPEN") : r("CLOSE");
            },
          };
        },
        P = a.a.createContext(void 0),
        z = function (n) {
          var e = n.children,
            t = E(),
            i = [t.queue, t.handleQueue];
          return Object(r.jsx)(P.Provider, { value: i, children: e });
        },
        I = function () {
          var n = Object(i.useContext)(P);
          if (void 0 === n)
            throw new Error("useQueue can only be used inside QueueProvider");
          return n;
        },
        W = Object(h.a)({
          id: "rate",
          initial: "close",
          states: {
            close: { on: { OPEN: "open" } },
            open: { on: { CLOSE: "close" } },
          },
        }),
        R = function () {
          var n = Object(j.a)(W),
            e = Object(p.a)(n, 2),
            t = e[0],
            r = e[1];
          return {
            rate: t,
            handleRate: function () {
              t.matches("close") ? r("OPEN") : r("CLOSE");
            },
          };
        },
        N = a.a.createContext(void 0),
        F = function (n) {
          var e = n.children,
            t = R(),
            i = [t.rate, t.handleRate];
          return Object(r.jsx)(N.Provider, { value: i, children: e });
        },
        L = function () {
          var n = Object(i.useContext)(N);
          if (void 0 === n)
            throw new Error("useRate can only be used inside RateProvider");
          return n;
        },
        T = t(27),
        M = t(7),
        q = t(6);
      function B() {
        var n = Object(M.a)([
          "\n  width: 100%;\n  height: 100vh;\n  min-height: -webkit-fill-available;\n  display: flex;\n\n  @media screen and (min-width: 800px) {\n    width: 100%;\n    height: 100vh;\n    min-height: -webkit-fill-available;\n    display: grid;\n    grid-template-rows: 70px 1fr 100px;\n    grid-template-columns: 210px 1fr;\n  }\n",
        ]);
        return (
          (B = function () {
            return n;
          }),
          n
        );
      }
      var D = q.a.div(B());
      function G() {
        var n = Object(M.a)([
          '\n  display: none;\n\n  @media screen and (min-width: 800px) {\n    width: 100%;\n    height: 100%;\n    display: grid;\n    grid-area: header;\n    grid-template-columns: 500px 1fr;\n    grid-template-rows: 1fr;\n    grid-template-areas: "search settings";\n    grid-column-gap: 30px;\n    background: #ffffff;\n    border-bottom: 1px solid #f3f3f3;\n    padding-left: 30px;\n    padding-right: 30px;\n    z-index: 1;\n    grid-column: 2 / 3;\n    grid-row: 1 / 2;\n  }\n',
        ]);
        return (
          (G = function () {
            return n;
          }),
          n
        );
      }
      var V = q.a.header(G()),
        U = t(294),
        _ = t(295),
        H = t(321),
        Z = t(322);
      function A() {
        var n = Object(M.a)([
          "\n  display: flex;\n  width: 100%;\n  height: 100%;\n  grid-area: search;\n  align-items: center;\n  grid-column: 1 / 2;\n  grid-row: 1 / 2;\n",
        ]);
        return (
          (A = function () {
            return n;
          }),
          n
        );
      }
      var J = q.a.div(A()),
        Q = function () {
          return Object(r.jsx)(J, {
            children: Object(r.jsxs)(U.a, {
              children: [
                Object(r.jsx)(_.a, {
                  pointerEvents: "none",
                  children: Object(r.jsx)(Z.a, { color: "gray.300" }),
                }),
                Object(r.jsx)(H.a, {
                  type: "text",
                  placeholder: "Search",
                  size: "md",
                }),
              ],
            }),
          });
        },
        K = t(296);
      function Y() {
        var n = Object(M.a)([
          "\n  width: fit-content;\n  height: 100%;\n  grid-column: 2 / 3;\n  grid-row: 1 / 2;\n  display: flex;\n  justify-self: flex-end;\n  justify-content: flex-end;\n  align-items: center;\n\n  svg {\n    :hover {\n      cursor: pointer;\n    }\n  }\n",
        ]);
        return (
          (Y = function () {
            return n;
          }),
          n
        );
      }
      var X = q.a.div(Y()),
        $ = function () {
          var n = O(),
            e = Object(p.a)(n, 3)[2],
            t = C();
          Object(p.a)(t, 2)[1];
          return Object(r.jsx)(X, {
            children: Object(r.jsx)(K.a, { onClick: e, children: "Login" }),
          });
        },
        nn = function () {
          return Object(r.jsxs)(V, {
            children: [Object(r.jsx)(Q, {}), Object(r.jsx)($, {})],
          });
        },
        en = t(106),
        tn = t.n(en),
        rn = t(297),
        an = t(298),
        on = t(299),
        cn = t(300),
        sn = t(301);
      function dn() {
        var n = Object(M.a)([
          "\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  @media screen and (min-width: 800px) {\n    width: auto;\n    height: auto;\n    display: grid;\n    grid-template-columns: max-content minmax(min-content, max-content);\n    grid-template-rows: 1fr;\n    grid-column-gap: 10px;\n    justify-self: flex-start;\n\n    :hover {\n      svg {\n        stroke: #101010;\n      }\n\n      a {\n        color: #101010;\n      }\n    }\n  }\n\n  #link-desktop {\n    display: none;\n\n    @media screen and (min-width: 800px) {\n      display: block;\n      justify-self: flex-start;\n    }\n  }\n",
        ]);
        return (
          (dn = function () {
            return n;
          }),
          n
        );
      }
      function ln() {
        var n = Object(M.a)([
          "\n  width: 100%;\n  max-width: 500px;\n  height: 100%;\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  grid-template-rows: 1fr;\n  align-items: center;\n  justify-content: center;\n  justify-self: center;\n\n  .favorites {\n    display: none;\n  }\n\n  @media screen and (min-width: 800px) {\n    grid-template-columns: 1fr;\n    grid-template-rows: repeat(3, max-content);\n    grid-row-gap: 30px;\n    padding: 0 30px 0 30px;\n\n    .favorites {\n      display: grid;\n    }\n\n    .search,\n    .settings {\n      display: none;\n    }\n  }\n",
        ]);
        return (
          (ln = function () {
            return n;
          }),
          n
        );
      }
      var un = q.a.div(ln()),
        fn = q.a.div(dn()),
        pn = function () {
          return Object(r.jsxs)(un, {
            children: [
              Object(r.jsxs)(fn, {
                className: "browse",
                children: [
                  Object(r.jsx)(K.a, {
                    href: "/",
                    children: Object(r.jsx)(rn.a, {
                      size: 16,
                      strokeWidth: 1.7,
                    }),
                  }),
                  Object(r.jsx)(s.b, {
                    id: "link-desktop",
                    to: "/",
                    children: "Browse",
                  }),
                ],
              }),
              Object(r.jsxs)(fn, {
                className: "subscriptions",
                children: [
                  Object(r.jsx)(K.a, {
                    href: "/subscriptions",
                    children: Object(r.jsx)(an.a, {
                      size: 16,
                      strokeWidth: 1.7,
                    }),
                  }),
                  Object(r.jsx)(s.b, {
                    id: "link-desktop",
                    to: "/subscriptions",
                    children: "Subscriptions",
                  }),
                ],
              }),
              Object(r.jsxs)(fn, {
                className: "favorites",
                children: [
                  Object(r.jsx)(K.a, {
                    href: "/favorites",
                    children: Object(r.jsx)(on.a, {
                      size: 16,
                      strokeWidth: 1.7,
                    }),
                  }),
                  Object(r.jsx)(s.b, {
                    id: "link-desktop",
                    to: "/favorites",
                    children: "Favorites",
                  }),
                ],
              }),
              Object(r.jsx)(fn, {
                className: "search",
                children: Object(r.jsx)(K.a, {
                  href: "/search",
                  children: Object(r.jsx)(cn.a, { size: 16, strokeWidth: 1.7 }),
                }),
              }),
              Object(r.jsx)(fn, {
                className: "settings",
                children: Object(r.jsx)(K.a, {
                  href: "/settings",
                  children: Object(r.jsx)(sn.a, { size: 16, strokeWidth: 1.7 }),
                }),
              }),
            ],
          });
        };
      function jn() {
        var n = Object(M.a)([
          "\n  display: none;\n\n  @media screen and (min-width: 800px) {\n    display: block;\n    cursor: pointer;\n    grid-column: 1 / 2;\n    grid-row: 3 / 4;\n  }\n",
        ]);
        return (
          (jn = function () {
            return n;
          }),
          n
        );
      }
      function hn() {
        var n = Object(M.a)([
          "\n  display: none;\n\n  @media screen and (min-width: 800px) {\n    display: flex;\n    align-items: center;\n    justify-content: flex-start;\n    padding: 0 30px 0 30px;\n    grid-column: 1 / 2;\n    grid-row: 1 / 2;\n  }\n",
        ]);
        return (
          (hn = function () {
            return n;
          }),
          n
        );
      }
      function bn() {
        var n = Object(M.a)([
          "\n  width: 100%;\n  height: 100%;\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: 1fr;\n\n  @media screen and (min-width: 800px) {\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-template-rows: 80px 1fr 210px;\n    grid-row-gap: 30px;\n  }\n",
        ]);
        return (
          (bn = function () {
            return n;
          }),
          n
        );
      }
      function xn() {
        var n = Object(M.a)([
          "\n  width: 100%;\n  height: 60px;\n  bottom: 0px;\n  position: fixed;\n  background: #ffffff;\n  z-index: 100;\n\n  @media screen and (min-width: 800px) {\n    grid-column: 1 / 2;\n    grid-row: 1 / 3;\n    width: 100%;\n    height: 100%;\n    position: inherit;\n    z-index: 0;\n    background: #ffffff;\n    border-right: 1px solid #f3f3f3;\n  }\n",
        ]);
        return (
          (xn = function () {
            return n;
          }),
          n
        );
      }
      var gn = q.a.aside(xn()),
        mn = q.a.div(bn()),
        On = q.a.div(hn()),
        vn = q.a.img(jn());
      function wn() {
        return (wn =
          Object.assign ||
          function (n) {
            for (var e = 1; e < arguments.length; e++) {
              var t = arguments[e];
              for (var r in t)
                Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r]);
            }
            return n;
          }).apply(this, arguments);
      }
      function yn(n, e) {
        if (null == n) return {};
        var t,
          r,
          i = (function (n, e) {
            if (null == n) return {};
            var t,
              r,
              i = {},
              a = Object.keys(n);
            for (r = 0; r < a.length; r++)
              (t = a[r]), e.indexOf(t) >= 0 || (i[t] = n[t]);
            return i;
          })(n, e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(n);
          for (r = 0; r < a.length; r++)
            (t = a[r]),
              e.indexOf(t) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(n, t) &&
                  (i[t] = n[t]));
        }
        return i;
      }
      var kn = i.createElement("path", {
          d:
            "M17.0111 25.6514C17.0111 30.1134 14.0251 33.4043 10.7082 33.4043C7.39136 33.4043 4.40527 30.1134 4.40527 25.6514C4.40527 21.1894 7.39136 17.8984 10.7082 17.8984C14.0251 17.8984 17.0111 21.1894 17.0111 25.6514Z",
          stroke: "black",
          strokeWidth: 2.25505,
        }),
        Cn = i.createElement("path", {
          d:
            "M7.52716 8.55301C8.25368 10.9996 8.49179 13.2894 8.32441 14.9939C8.24051 15.8489 8.05983 16.5018 7.83145 16.9443C7.60504 17.3828 7.37855 17.5338 7.21734 17.5823C7.05605 17.6308 6.7844 17.6297 6.35601 17.3881C5.92384 17.1443 5.4168 16.6981 4.88046 16.0297C3.81126 14.6971 2.7619 12.6514 2.03539 10.2048C1.30887 7.75826 1.07077 5.46847 1.2381 3.76396C1.32203 2.90895 1.5027 2.25602 1.73111 1.81351C1.9575 1.37494 2.18397 1.22402 2.34524 1.17551C2.5065 1.12701 2.77811 1.12812 3.2065 1.36976C3.63872 1.61356 4.14574 2.05966 4.68208 2.7281C5.75128 4.06069 6.80064 6.10646 7.52716 8.55301Z",
          stroke: "black",
          strokeWidth: 2.25505,
        }),
        Sn = i.createElement("path", {
          d:
            "M21.7823 12.3607C20.6 14.6201 19.1779 16.4234 17.8731 17.5231C17.2186 18.0747 16.6355 18.4139 16.1647 18.5691C15.698 18.7229 15.4312 18.6712 15.2823 18.5923C15.1334 18.5133 14.9401 18.3212 14.8022 17.8469C14.663 17.3684 14.611 16.6926 14.6927 15.8374C14.8556 14.1324 15.5286 11.9321 16.7109 9.67272C17.8932 7.41344 19.3154 5.61011 20.6201 4.51044C21.2747 3.95881 21.8578 3.61966 22.3286 3.46444C22.7953 3.31061 23.062 3.36231 23.2109 3.44125C23.3599 3.52018 23.5531 3.71227 23.6911 4.1866C23.8303 4.66516 23.8823 5.34094 23.8005 6.19616C23.6376 7.9011 22.9646 10.1015 21.7823 12.3607Z",
          stroke: "black",
          strokeWidth: 2.25505,
        }),
        En = i.createElement("path", {
          d:
            "M21.5586 41.2398C20.2228 43.7924 16.222 44.7805 12.353 42.7299C8.48399 40.6792 7.03033 36.7999 8.36613 34.2473C9.70193 31.6947 13.7028 30.7065 17.5718 32.7572C21.4407 34.8079 22.8944 38.6871 21.5586 41.2398Z",
          stroke: "black",
          strokeWidth: 2.25505,
        });
      function Pn(n, e) {
        var t = n.title,
          r = n.titleId,
          a = yn(n, ["title", "titleId"]);
        return i.createElement(
          "svg",
          wn(
            {
              width: 25,
              height: 45,
              viewBox: "0 0 25 45",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ref: e,
              "aria-labelledby": r,
            },
            a
          ),
          t ? i.createElement("title", { id: r }, t) : null,
          kn,
          Cn,
          Sn,
          En
        );
      }
      var zn = i.forwardRef(Pn),
        In =
          (t.p,
          function () {
            return Object(r.jsx)(gn, {
              children: Object(r.jsx)(tn.a, {
                universal: !0,
                autoHide: !0,
                autoHideTimeout: 100,
                autoHideDuration: 100,
                children: Object(r.jsxs)(mn, {
                  children: [
                    Object(r.jsx)(On, {
                      children: Object(r.jsx)(K.a, {
                        href: "/app",
                        variant: "secondary",
                        size: "normal",
                        children: Object(r.jsx)(zn, {}),
                      }),
                    }),
                    Object(r.jsx)(pn, {}),
                    Object(r.jsx)(K.a, {
                      href: "/app/episode/[episode]",
                      variant: "secondary",
                      size: "normal",
                      children: Object(r.jsx)(vn, {
                        src:
                          "https://upload.wikimedia.org/wikipedia/commons/f/f2/99%25_Invisible_logo.jpg",
                        alt: "Podcast logo",
                      }),
                    }),
                  ],
                }),
              }),
            });
          });
      function Wn() {
        var n = Object(M.a)([
          '\n  width: 100%;\n  height: 70px;\n  position: fixed;\n  bottom: 59px;\n  display: grid;\n  grid-template-columns: max-content 1fr;\n  grid-template-rows: 14px 1fr;\n  grid-column-gap: 20px;\n  grid-area: "player";\n  background: #ffffff;\n  box-sizing: border-box;\n  cursor: pointer;\n  padding: 0;\n\n  @media screen and (min-width: 800px) {\n    width: 100%;\n    height: auto;\n    max-height: 140px;\n    grid-row: 3 / 4;\n    grid-column: 1 / 3;\n    grid-template-columns: 1fr minmax(auto, 390px) 1fr;\n    grid-template-rows: 1fr;\n    grid-area: "player";\n    padding: 15px 30px;\n    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.05);\n    background: #ffffff;\n    z-index: 1;\n    cursor: default;\n    position: inherit;\n  }\n\n  @media screen and (min-width: 1020px) {\n    grid-template-columns: 1fr minmax(auto, 390px) 1fr;\n    grid-template-rows: 1fr;\n    position: inherit;\n  }\n',
        ]);
        return (
          (Wn = function () {
            return n;
          }),
          n
        );
      }
      var Rn = q.a.div(Wn());
      function Nn() {
        var n = Object(M.a)([
          "\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  grid-row: 1 / 2;\n  grid-column: 2 / 3;\n",
        ]);
        return (
          (Nn = function () {
            return n;
          }),
          n
        );
      }
      function Fn() {
        var n = Object(M.a)([
          "\n  display: none;\n\n  .like-button {\n    display: none;\n  }\n\n  @media screen and (min-width: 800px) {\n    width: 100%;\n    height: 50px;\n    display: grid;\n    grid-template-columns: max-content 20px;\n    grid-template-rows: max-content max-content;\n    grid-gap: 10px;\n    justify-items: flex-start;\n\n    .like-button {\n      display: block;\n    }\n  }\n",
        ]);
        return (
          (Fn = function () {
            return n;
          }),
          n
        );
      }
      function Ln() {
        var n = Object(M.a)([
          "\n  width: 40px;\n  height: 40px;\n  background-image: url(",
          ");\n  background-size: cover;\n  border-radius: 5px;\n  align-self: center;\n\n  @media screen and (min-width: 800px) {\n    display: none;\n  }\n",
        ]);
        return (
          (Ln = function () {
            return n;
          }),
          n
        );
      }
      function Tn() {
        var n = Object(M.a)([
          "\n  width: 50px;\n  height: 50px;\n  display: flex;\n  align-self: center;\n  justify-self: center;\n  grid-column: 1 / 2;\n  grid-row: 2 / 3;\n  z-index: 10;\n  margin-left: 30px;\n\n  @media screen and (min-width: 800px) {\n    width: 100%;\n    height: 100%;\n    grid-column: 1 / 2;\n    grid-row: 1 / 2;\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-template-rows: 1fr;\n    align-items: center;\n    margin: 0;\n  }\n",
        ]);
        return (
          (Tn = function () {
            return n;
          }),
          n
        );
      }
      var Mn = q.a.div(Tn()),
        qn = q.a.div(Ln(), function (n) {
          return n.avatar;
        }),
        Bn = q.a.div(Fn()),
        Dn = q.a.div(Nn()),
        Gn = { cursor: "pointer" },
        Vn = function (n) {
          var e = n.ready,
            t = n.currentPodcast,
            i = t.avatar,
            a = t.name,
            o = t.episode;
          return e
            ? Object(r.jsxs)(Mn, {
                children: [
                  Object(r.jsx)(qn, { avatar: i }),
                  Object(r.jsxs)(Bn, {
                    children: [
                      Object(r.jsx)(K.a, {
                        href: "/app/episode/123",
                        children: o,
                      }),
                      Object(r.jsx)(K.a, {
                        href: "/app/podcast/123",
                        children: a,
                      }),
                      Object(r.jsx)(Dn, {
                        children: Object(r.jsx)(on.a, {
                          className: "like-button",
                          size: 16,
                          strokeWidth: 1.7,
                          color: "#101010",
                          style: Gn,
                          onClick: function () {},
                        }),
                      }),
                    ],
                  }),
                ],
              })
            : null;
        },
        Un = t(303),
        _n = t(304),
        Hn = t(305),
        Zn = t(306),
        An = t(318),
        Jn = t(302);
      function Qn() {
        var n = Object(M.a)([
          "\n  display: none;\n\n  @media screen and (min-width: 800px) {\n    display: block;\n    color: #101010;\n    justify-self: center;\n  }\n",
        ]);
        return (
          (Qn = function () {
            return n;
          }),
          n
        );
      }
      function Kn() {
        var n = Object(M.a)([
          "\n  width: 100%;\n  height: 100%;\n  grid-column: 1 / 3;\n  grid-row: 1 / 2;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  @media screen and (min-width: 800px) {\n    grid-column: 1 / 2;\n    grid-row: 2 / 3;\n    display: grid;\n    grid-template-columns: 50px 1fr 50px;\n    grid-template-rows: 1fr;\n  }\n",
        ]);
        return (
          (Kn = function () {
            return n;
          }),
          n
        );
      }
      function Yn() {
        var n = Object(M.a)([
          "\n  grid-column: 1 / 3;\n  grid-row: 2 / 3;\n  width: auto;\n  height: auto;\n  display: grid;\n  grid-template-columns: max-content max-content max-content;\n  grid-template-rows: 1fr;\n  grid-column-gap: 20px;\n  background: none;\n  justify-self: flex-end;\n  align-items: center;\n  justify-items: flex-end;\n  justify-self: center;\n\n  @media screen and (min-width: 800px) {\n    grid-column: 1 / 2;\n    grid-row: 1 / 2;\n    justify-self: center;\n    justify-items: center;\n  }\n",
        ]);
        return (
          (Yn = function () {
            return n;
          }),
          n
        );
      }
      function Xn() {
        var n = Object(M.a)([
          "\n  grid-row: 1 / 3;\n  grid-column: 1 / 3;\n  display: grid;\n  grid-template-columns: 50px 1fr;\n  grid-template-rows: 14px 1fr;\n  grid-column-gap: 20px;\n  background: none;\n\n  @media screen and (min-width: 800px) {\n    grid-column: 2 / 3;\n    grid-row: 1 / 2;\n    grid-template-columns: 1fr;\n    grid-template-rows: 1fr 1fr;\n  }\n",
        ]);
        return (
          (Xn = function () {
            return n;
          }),
          n
        );
      }
      var $n = q.a.div(Xn()),
        ne = q.a.div(Yn()),
        ee = q.a.div(Kn()),
        te = Object(q.a)(Jn.a)(Qn()),
        re = { cursor: "pointer" },
        ie = function (n) {
          var e = n.ready,
            t = n.playing,
            i = (n.seek, n.duration, n.onPlay),
            a = n.onPause,
            o = (n.onSeek, n.onBackward),
            c = n.onForward;
          return e
            ? Object(r.jsxs)($n, {
                children: [
                  Object(r.jsxs)(ne, {
                    children: [
                      Object(r.jsx)(Hn.a, {
                        size: 18,
                        color: "#101010",
                        style: re,
                        strokeWidth: 2,
                        onClick: function () {
                          return o(15);
                        },
                      }),
                      t
                        ? Object(r.jsx)(Un.a, {
                            size: 28,
                            color: "#101010",
                            strokeWidth: 1.7,
                            style: re,
                            onClick: a,
                          })
                        : Object(r.jsx)(_n.a, {
                            size: 28,
                            color: "#101010",
                            strokeWidth: 1.7,
                            style: re,
                            onClick: i,
                          }),
                      Object(r.jsx)(Zn.a, {
                        size: 18,
                        color: "#101010",
                        style: re,
                        strokeWidth: 2,
                        onClick: function () {
                          return c(15);
                        },
                      }),
                    ],
                  }),
                  Object(r.jsxs)(ee, {
                    children: [
                      Object(r.jsx)(te, { fontSize: "sm", children: "1:21" }),
                      Object(r.jsxs)(An.a, {
                        colorScheme: "brand",
                        defaultValue: 30,
                        children: [
                          Object(r.jsx)(An.d, {
                            children: Object(r.jsx)(An.b, {}),
                          }),
                          Object(r.jsx)(An.c, {}),
                        ],
                      }),
                      Object(r.jsx)(te, { fontSize: "sm", children: "45:12" }),
                    ],
                  }),
                ],
              })
            : null;
        },
        ae = t(311),
        oe = t(312);
      function ce() {
        var n = Object(M.a)([
          "\n  display: none;\n\n  @media screen and (min-width: 800px) {\n    width: auto;\n    height: 100%;\n    grid-column: 3/ 4;\n    grid-row: 1 / 2;\n    display: grid;\n    grid-template-columns: repeat(3, max-content);\n    grid-template-rows: 1fr;\n    grid-column-gap: 15px;\n    align-items: center;\n    justify-content: space-evenly;\n    justify-self: flex-end;\n  }\n",
        ]);
        return (
          (ce = function () {
            return n;
          }),
          n
        );
      }
      var se = q.a.div(ce()),
        de = t(307),
        le = t(308),
        ue = t(309),
        fe = t(310);
      function pe() {
        var n = Object(M.a)([
          "\n  display: none;\n\n  @media screen and (min-width: 800px) {\n    width: auto;\n    height: 100%;\n    grid-column: 3 / 4;\n    grid-row: 1 / 2;\n    display: grid;\n    grid-template-columns: max-content 80px;\n    grid-template-rows: 1fr;\n    grid-column-gap: 15px;\n    align-items: center;\n    justify-content: space-evenly;\n    justify-self: flex-end;\n  }\n",
        ]);
        return (
          (pe = function () {
            return n;
          }),
          n
        );
      }
      var je = q.a.div(pe()),
        he = { cursor: "pointer" },
        be = function (n) {
          var e = n.ready,
            t = n.volume,
            i = n.muted,
            a = (n.onVolume, n.onMute);
          return e
            ? Object(r.jsxs)(je, {
                children: [
                  0 === t || i
                    ? Object(r.jsx)(de.a, {
                        size: 20,
                        strokeWidth: 1.7,
                        color: "#101010",
                        style: he,
                        onClick: a,
                      })
                    : 0.1 === t
                    ? Object(r.jsx)(le.a, {
                        size: 20,
                        strokeWidth: 1.7,
                        color: "#101010",
                        style: he,
                        onClick: a,
                      })
                    : t > 0.1 && t < 0.5
                    ? Object(r.jsx)(ue.a, {
                        size: 20,
                        strokeWidth: 1.7,
                        color: "#101010",
                        style: he,
                        onClick: a,
                      })
                    : Object(r.jsx)(fe.a, {
                        size: 20,
                        strokeWidth: 1.7,
                        color: "#101010",
                        style: he,
                        onClick: a,
                      }),
                  Object(r.jsxs)(An.a, {
                    defaultValue: 30,
                    children: [
                      Object(r.jsx)(An.d, {
                        children: Object(r.jsx)(An.b, {}),
                      }),
                      Object(r.jsx)(An.c, {}),
                    ],
                  }),
                ],
              })
            : null;
        },
        xe = { cursor: "pointer" },
        ge = function (n) {
          var e = n.ready,
            t = n.volume,
            i = n.muted,
            a = n.onVolume,
            o = n.onMute,
            c = I(),
            s = Object(p.a)(c, 2)[1],
            d = L(),
            l = Object(p.a)(d, 2)[1];
          return Object(r.jsxs)(se, {
            children: [
              Object(r.jsx)(ae.a, {
                size: 20,
                strokeWidth: 1.7,
                color: "#101010",
                style: xe,
                onClick: s,
              }),
              Object(r.jsx)(oe.a, {
                size: 20,
                strokeWidth: 1.7,
                color: "#101010",
                style: xe,
                onClick: l,
              }),
              Object(r.jsx)(be, {
                ready: e,
                volume: t,
                muted: i,
                onVolume: a,
                onMute: o,
              }),
            ],
          });
        },
        me = {
          avatar:
            "https://upload.wikimedia.org/wikipedia/commons/f/f2/99%25_Invisible_logo.jpg",
          name: "WTF with Marc Maron Podcast",
          episode: "Episode 1137 - John Legend",
        },
        Oe = function () {
          var n = Object(u.b)({
              src:
                "https://storage.googleapis.com/media-session/elephants-dream/the-wires.mp3",
              preload: !0,
              volume: 1,
              rate: 1,
              autoplay: !1,
            }),
            e = n.ready,
            t = n.playing,
            i = n.seek,
            a = n.duration,
            o = n.volume,
            c = n.muted,
            s = n.onPlay,
            d = n.onPause,
            l = n.onSeek,
            f = n.onVolume,
            p = n.onMute,
            j = n.onBackward,
            h = n.onForward;
          return Object(r.jsxs)(Rn, {
            children: [
              Object(r.jsx)(Vn, { ready: e, currentPodcast: me }),
              Object(r.jsx)(ie, {
                ready: e,
                playing: t,
                seek: i,
                duration: a,
                onPlay: s,
                onPause: d,
                onSeek: l,
                onBackward: j,
                onForward: h,
              }),
              Object(r.jsx)(ge, {
                ready: e,
                volume: o,
                muted: c,
                onVolume: f,
                onMute: p,
              }),
            ],
          });
        };
      function ve() {
        var n = Object(M.a)([
          "\n  width: 100%;\n  height: 100%;\n  grid-row: 1 / 2;\n  grid-column: 1 / 2;\n  background: #ffffff;\n\n  @media screen and (min-width: 800px) {\n    width: 100%;\n    height: 100%;\n    grid-row: 2 / 3;\n    grid-column: 2 / 3;\n    background: #ffffff;\n  }\n",
        ]);
        return (
          (ve = function () {
            return n;
          }),
          n
        );
      }
      var we = q.a.main(ve()),
        ye = function (n) {
          var e = n.children;
          return Object(r.jsx)(we, { children: e });
        },
        ke = function () {
          return Object(r.jsx)("div", {
            children: Object(r.jsx)("h1", { children: "Browse" }),
          });
        },
        Ce = function () {
          return Object(r.jsx)("div", {
            children: Object(r.jsx)("h1", { children: "Subscriptions" }),
          });
        },
        Se = function () {
          return Object(r.jsx)("div", {
            children: Object(r.jsx)("h1", { children: "Favorites" }),
          });
        },
        Ee = function () {
          return Object(r.jsx)("div", {
            children: Object(r.jsx)("h1", { children: "Settings" }),
          });
        },
        Pe = function () {
          return Object(r.jsx)("div", {
            children: Object(r.jsx)("h1", { children: "Podcast" }),
          });
        },
        ze = function () {
          return Object(r.jsx)("div", {
            children: Object(r.jsx)("h1", { children: "Episode" }),
          });
        },
        Ie = function () {
          return Object(r.jsx)("div", {
            children: Object(r.jsx)("h1", { children: "Genres" }),
          });
        };
      function We() {
        var n = Object(M.a)([
          "\n  font-family: Inter;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 17px;\n  color: #b7b7b7;\n  text-decoration: none;\n",
        ]);
        return (
          (We = function () {
            return n;
          }),
          n
        );
      }
      function Re() {
        var n = Object(M.a)([
          "\n  display: flex;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  background: #f3f3f3;\n  padding-left: 20px;\n  cursor: pointer;\n\n  &:hover {\n    background: #b7b7b7;\n\n    a {\n      color: #101010;\n      cursor: pointer;\n    }\n  }\n",
        ]);
        return (
          (Re = function () {
            return n;
          }),
          n
        );
      }
      function Ne() {
        var n = Object(M.a)([
          "\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 500px;\n  height: auto;\n  background: #f3f3f3;\n  border-radius: 5px;\n  position: absolute;\n",
        ]);
        return (
          (Ne = function () {
            return n;
          }),
          n
        );
      }
      function Fe() {
        var n = Object(M.a)([
          "\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.4);\n  position: absolute;\n  z-index: 10;\n  padding: 30px;\n",
        ]);
        return (
          (Fe = function () {
            return n;
          }),
          n
        );
      }
      var Le = q.a.div(Fe()),
        Te = q.a.div(Ne());
      q.a.div(Re()), q.a.a(We());
      function Me() {
        var n = Object(M.a)([
          "\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: max-content max-content max-content;\n  grid-row-gap: 10px;\n",
        ]);
        return (
          (Me = function () {
            return n;
          }),
          n
        );
      }
      function qe() {
        var n = Object(M.a)([
          "\n  display: grid;\n  grid-template-columns: max-content;\n  grid-template-rows: 1fr;\n  grid-column-gap: 10px;\n  justify-self: center;\n",
        ]);
        return (
          (qe = function () {
            return n;
          }),
          n
        );
      }
      function Be() {
        var n = Object(M.a)([
          "\n  width: 100%;\n  height: 100%;\n  background-color: #ffffff;\n  display: grid;\n  grid-template-rows: repeat(auto-fill, max-content);\n  grid-template-columns: 1fr;\n  grid-row-gap: 20px;\n  align-items: center;\n  justify-items: center;\n  align-self: center;\n  justify-self: center;\n",
        ]);
        return (
          (Be = function () {
            return n;
          }),
          n
        );
      }
      function De() {
        var n = Object(M.a)([
          "\n  width: 100%;\n  height: 100%;\n  max-width: 400px;\n  align-self: center;\n  justify-self: center;\n  text-align: center;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  justify-content: flex-center;\n",
        ]);
        return (
          (De = function () {
            return n;
          }),
          n
        );
      }
      function Ge() {
        var n = Object(M.a)([
          "\n  width: 100%;\n  height: 100%;\n  max-width: 440px;\n  max-height: 100%;\n  box-shadow: none;\n  display: grid;\n  background-color: #ffffff;\n  grid-template-columns: 1fr;\n  grid-template-rows: repeat(2, minmax(min-content, max-content));\n  grid-row-gap: 20px;\n",
        ]);
        return (
          (Ge = function () {
            return n;
          }),
          n
        );
      }
      function Ve() {
        var n = Object(M.a)([
          "\n  width: 100%;\n  height: 100%;\n  background-color: #ffffff;\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: max-content max-content;\n  grid-row-gap: 20px;\n  align-items: center;\n  justify-items: center;\n  padding: 30px;\n  border-radius: 5px;\n",
        ]);
        return (
          (Ve = function () {
            return n;
          }),
          n
        );
      }
      var Ue = q.a.div(Ve()),
        _e = q.a.div(Ge()),
        He = q.a.div(De()),
        Ze = q.a.form(Be()),
        Ae = q.a.div(qe()),
        Je = q.a.div(Me());
      function Qe() {
        return (Qe =
          Object.assign ||
          function (n) {
            for (var e = 1; e < arguments.length; e++) {
              var t = arguments[e];
              for (var r in t)
                Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r]);
            }
            return n;
          }).apply(this, arguments);
      }
      function Ke(n, e) {
        if (null == n) return {};
        var t,
          r,
          i = (function (n, e) {
            if (null == n) return {};
            var t,
              r,
              i = {},
              a = Object.keys(n);
            for (r = 0; r < a.length; r++)
              (t = a[r]), e.indexOf(t) >= 0 || (i[t] = n[t]);
            return i;
          })(n, e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(n);
          for (r = 0; r < a.length; r++)
            (t = a[r]),
              e.indexOf(t) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(n, t) &&
                  (i[t] = n[t]));
        }
        return i;
      }
      var Ye = i.createElement("path", {
          d:
            "M22.5475 34.2025C22.5475 40.1519 18.5896 44.5398 14.1931 44.5398C9.79682 44.5398 5.83887 40.1519 5.83887 34.2025C5.83887 28.2531 9.79682 23.8652 14.1931 23.8652C18.5896 23.8652 22.5475 28.2531 22.5475 34.2025Z",
          stroke: "black",
          strokeWidth: 2.25505,
        }),
        Xe = i.createElement("path", {
          d:
            "M9.97689 11.4053C10.9399 14.6674 11.2555 17.7204 11.0336 19.9931C10.9224 21.1332 10.6829 22.0036 10.3802 22.5937C10.0801 23.1784 9.77991 23.3797 9.56623 23.4444C9.35245 23.509 8.99238 23.5075 8.42457 23.1854C7.85174 22.8603 7.17968 22.2655 6.46879 21.3742C5.05159 19.5974 3.66071 16.8698 2.69773 13.6077C1.73476 10.3457 1.41917 7.29259 1.64096 5.01992C1.75221 3.8799 1.99167 3.00933 2.29443 2.41932C2.5945 1.83455 2.89467 1.63332 3.10843 1.56865C3.32218 1.50398 3.68219 1.50546 4.25 1.82765C4.82289 2.15271 5.49493 2.74751 6.20583 3.63877C7.62302 5.41556 9.01392 8.14325 9.97689 11.4053Z",
          stroke: "black",
          strokeWidth: 2.25505,
        }),
        $e = i.createElement("path", {
          d:
            "M28.8717 16.4803C27.3046 19.4928 25.4196 21.8971 23.6902 23.3634C22.8226 24.099 22.0498 24.5512 21.4257 24.7581C20.8071 24.9632 20.4535 24.8943 20.2562 24.789C20.0587 24.6838 19.8026 24.4276 19.6198 23.7953C19.4352 23.1572 19.3663 22.2561 19.4747 21.1158C19.6906 18.8426 20.5826 15.9088 22.1497 12.8963C23.7168 9.88394 25.6018 7.47949 27.3313 6.01326C28.1988 5.27776 28.9717 4.82556 29.5957 4.61861C30.2143 4.4135 30.5679 4.48243 30.7653 4.58768C30.9627 4.69292 31.2188 4.94904 31.4017 5.58149C31.5862 6.21957 31.6551 7.1206 31.5468 8.26089C31.3308 10.5342 30.4388 13.468 28.8717 16.4803Z",
          stroke: "black",
          strokeWidth: 2.25505,
        }),
        nt = i.createElement("path", {
          d:
            "M28.5751 54.9857C26.8045 58.3892 21.5016 59.7067 16.3734 56.9725C11.2452 54.2382 9.31837 49.0659 11.0889 45.6624C12.8595 42.2589 18.1625 40.9413 23.2907 43.6756C28.4188 46.4098 30.3456 51.5822 28.5751 54.9857Z",
          stroke: "black",
          strokeWidth: 2.25505,
        });
      function et(n, e) {
        var t = n.title,
          r = n.titleId,
          a = Ke(n, ["title", "titleId"]);
        return i.createElement(
          "svg",
          Qe(
            {
              width: 34,
              height: 60,
              viewBox: "0 0 34 60",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ref: e,
              "aria-labelledby": r,
            },
            a
          ),
          t ? i.createElement("title", { id: r }, t) : null,
          Ye,
          Xe,
          $e,
          nt
        );
      }
      var tt = i.forwardRef(et),
        rt =
          (t.p,
          function (n) {
            var e = n.children;
            return Object(r.jsxs)(Ue, {
              children: [
                Object(r.jsx)(tt, {}),
                Object(r.jsx)(_e, { children: e }),
              ],
            });
          }),
        it = t(319),
        at = function () {
          var n = O(),
            e = Object(p.a)(n, 4)[3];
          return Object(r.jsxs)(r.Fragment, {
            children: [
              Object(r.jsx)(He, {
                children: Object(r.jsx)(Jn.a, {
                  children: "Listen to your favorite podcasts",
                }),
              }),
              Object(r.jsxs)(Je, {
                children: [
                  Object(r.jsx)(it.a, {
                    colorScheme: "blue",
                    type: "button",
                    width: "100%",
                    onClick: function () {
                      return e("SIGNUP");
                    },
                    children: "Sign up with email",
                  }),
                  Object(r.jsx)(He, {
                    children: Object(r.jsx)(Jn.a, { children: "or" }),
                  }),
                  Object(r.jsx)(it.a, {
                    colorScheme: "blue",
                    type: "button",
                    width: "100%",
                    onClick: function () {
                      return e("SIGNIN");
                    },
                    children: "Sign in with email",
                  }),
                ],
              }),
            ],
          });
        },
        ot = t(89),
        ct = t(108),
        st = t(61),
        dt = t(55),
        lt = t(313),
        ut = t(314),
        ft = st.a().shape({
          email: st.b().email("Email is invalid").required("Email is required"),
          password: st.b().required("Password is required"),
        }),
        pt = function () {
          var n = O(),
            e = Object(p.a)(n, 4)[3],
            t = Object(ot.useForm)({
              mode: "onChange",
              reValidateMode: "onChange",
              resolver: Object(ct.yupResolver)(ft),
            }),
            i = t.register,
            a = t.handleSubmit,
            o = (t.setError, t.errors),
            c = t.formState;
          t.getValues;
          return Object(r.jsxs)(r.Fragment, {
            children: [
              Object(r.jsx)(He, {
                children: Object(r.jsx)(Jn.a, {
                  children: "Listen to your favorite podcasts",
                }),
              }),
              Object(r.jsxs)(Ze, {
                onSubmit: a(function () {}),
                children: [
                  Object(r.jsxs)(dt.a, {
                    isInvalid: o.email && !0,
                    children: [
                      Object(r.jsx)(lt.a, {
                        htmlFor: "email",
                        children: "Email",
                      }),
                      Object(r.jsx)(H.a, {
                        name: "email",
                        placeholder: "Email",
                        ref: i,
                      }),
                      Object(r.jsx)(ut.a, {
                        children: o.email && o.email.message,
                      }),
                    ],
                  }),
                  Object(r.jsxs)(dt.a, {
                    isInvalid: o.password && !0,
                    children: [
                      Object(r.jsx)(lt.a, {
                        htmlFor: "password",
                        children: "Password",
                      }),
                      Object(r.jsx)(H.a, {
                        name: "password",
                        placeholder: "Password",
                        ref: i,
                      }),
                      Object(r.jsx)(ut.a, {
                        children: o.password && o.password.message,
                      }),
                    ],
                  }),
                  Object(r.jsx)(it.a, {
                    colorScheme: "blue",
                    type: "submit",
                    width: "100%",
                    isDisabled: !c.isValid,
                    isLoading: c.isSubmitting,
                    children: "Sign in",
                  }),
                  Object(r.jsx)(Ae, {
                    children: Object(r.jsx)(K.a, {
                      variant: "secondary",
                      size: "normal",
                      onClick: function () {
                        return e("SIGNUP");
                      },
                      children: "Don't have an account?",
                    }),
                  }),
                ],
              }),
            ],
          });
        },
        jt = st.a().shape({
          email: st.b().email("Email is invalid").required("Email is required"),
          password: st.b().required("Password is required"),
        }),
        ht = function () {
          var n = O(),
            e = Object(p.a)(n, 4)[3],
            t = Object(ot.useForm)({
              mode: "onChange",
              reValidateMode: "onChange",
              resolver: Object(ct.yupResolver)(jt),
            }),
            i = t.register,
            a = t.handleSubmit,
            o = (t.setError, t.errors),
            c = t.formState;
          t.getValues;
          return Object(r.jsxs)(r.Fragment, {
            children: [
              Object(r.jsx)(He, {
                children: Object(r.jsx)(Jn.a, {
                  children: "Listen to your favorite podcasts",
                }),
              }),
              Object(r.jsxs)(Ze, {
                onSubmit: a(function () {}),
                children: [
                  Object(r.jsxs)(dt.a, {
                    isInvalid: o.email && !0,
                    children: [
                      Object(r.jsx)(lt.a, {
                        htmlFor: "email",
                        children: "Email",
                      }),
                      Object(r.jsx)(H.a, {
                        name: "email",
                        placeholder: "Email",
                        ref: i,
                      }),
                      Object(r.jsx)(ut.a, {
                        children: o.email && o.email.message,
                      }),
                    ],
                  }),
                  Object(r.jsxs)(dt.a, {
                    isInvalid: o.password && !0,
                    children: [
                      Object(r.jsx)(lt.a, {
                        htmlFor: "password",
                        children: "Password",
                      }),
                      Object(r.jsx)(H.a, {
                        name: "password",
                        placeholder: "Password",
                        ref: i,
                      }),
                      Object(r.jsx)(ut.a, {
                        children: o.password && o.password.message,
                      }),
                    ],
                  }),
                  Object(r.jsx)(it.a, {
                    colorScheme: "blue",
                    type: "submit",
                    width: "100%",
                    isDisabled: !c.isValid,
                    isLoading: c.isSubmitting,
                    children: "Sign up",
                  }),
                  Object(r.jsx)(Ae, {
                    children: Object(r.jsx)(K.a, {
                      onClick: function () {
                        return e("SIGNIN");
                      },
                      children: "Already have an account?",
                    }),
                  }),
                ],
              }),
            ],
          });
        },
        bt = function (n, e) {
          Object(i.useEffect)(
            function () {
              var t = function (t) {
                n.current && !n.current.contains(t.target) && e(t);
              };
              return (
                document.addEventListener("mousedown", t),
                document.addEventListener("touchstart", t),
                function () {
                  document.removeEventListener("mousedown", t),
                    document.removeEventListener("touchstart", t);
                }
              );
            },
            [n, e]
          );
        },
        xt = function () {
          var n = O(),
            e = Object(p.a)(n, 3),
            t = e[0],
            a = e[2],
            o = Object(i.useRef)();
          bt(o, function () {
            return a();
          });
          return Object(r.jsx)(Le, {
            children: Object(r.jsx)(Te, {
              ref: o,
              children: Object(r.jsx)(rt, {
                children: t.matches("getstarted")
                  ? Object(r.jsx)(at, {})
                  : t.matches("signin")
                  ? Object(r.jsx)(pt, {})
                  : t.matches("signup")
                  ? Object(r.jsx)(ht, {})
                  : void 0,
              }),
            }),
          });
        };
      function gt() {
        var n = Object(M.a)([
          "\n  font-family: Inter;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 17px;\n  color: #b7b7b7;\n  text-decoration: none;\n",
        ]);
        return (
          (gt = function () {
            return n;
          }),
          n
        );
      }
      function mt() {
        var n = Object(M.a)([
          "\n  display: flex;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  background: #ffffff;\n  padding-left: 20px;\n  cursor: pointer;\n\n  a {\n    text-decoration: none;\n  }\n\n  &:hover {\n    background: #f3f3f3;\n\n    a {\n      color: #101010;\n    }\n  }\n",
        ]);
        return (
          (mt = function () {
            return n;
          }),
          n
        );
      }
      function Ot() {
        var n = Object(M.a)([
          "\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: repeat(3, 35px);\n  grid-row-gap: 5px;\n  align-items: center;\n  justify-content: center;\n  top: 70px;\n  width: 140px;\n  height: auto;\n  padding-top: 5px;\n  padding-bottom: 5px;\n  background: #ffffff;\n  border-radius: 5px;\n  right: 30px;\n  position: absolute;\n  align-self: flex-end;\n  z-index: 2;\n  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.05);\n  -webkit-box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.05);\n  -moz-box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.05);\n",
        ]);
        return (
          (Ot = function () {
            return n;
          }),
          n
        );
      }
      var vt = q.a.div(Ot()),
        wt = q.a.div(mt()),
        yt = (q.a.a(gt()), "podhouse"),
        kt = function () {
          return [
            function () {
              return (function () {
                var n =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : "";
                n && "" !== n && null !== n
                  ? localStorage.setItem(yt, n)
                  : localStorage.removeItem(yt);
              })("");
            },
          ];
        },
        Ct = function () {
          var n = C(),
            e = Object(p.a)(n, 2)[1],
            t = kt(),
            a = Object(p.a)(t, 1)[0],
            o = Object(i.useRef)();
          bt(o, function () {
            return e();
          });
          var c = function () {
            a(), e();
          };
          return Object(r.jsxs)(vt, {
            ref: o,
            children: [
              Object(r.jsx)(wt, {
                children: Object(r.jsx)(K.a, {
                  href: "mailto:leonardomso11@gmail.com",
                  target: "_blank",
                  rel: "noopener",
                  children: "Feedback",
                }),
              }),
              Object(r.jsx)(wt, {
                children: Object(r.jsx)(s.b, {
                  to: "/settings",
                  children: "Settings",
                }),
              }),
              Object(r.jsx)(wt, {
                onClick: c,
                children: Object(r.jsx)(K.a, {
                  onClick: c,
                  children: "Logout",
                }),
              }),
            ],
          });
        };
      function St() {
        var n = Object(M.a)([
          "\n  width: 100%;\n  height: 100%;\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: repeat(auto-fill, 50px);\n  grid-row-gap: 10px;\n",
        ]);
        return (
          (St = function () {
            return n;
          }),
          n
        );
      }
      function Et() {
        var n = Object(M.a)([
          "\n  width: 100%;\n  height: fit-content;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: 1fr;\n  grid-column-gap: 20px;\n  align-items: center;\n",
        ]);
        return (
          (Et = function () {
            return n;
          }),
          n
        );
      }
      function Pt() {
        var n = Object(M.a)([
          "\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: max-content 1fr;\n  grid-row-gap: 20px;\n  align-items: center;\n  justify-content: center;\n  bottom: 80px;\n  width: 400px;\n  height: 280px;\n  padding: 20px;\n  background: #f3f3f3;\n  border-radius: 5px;\n  right: 30px;\n  position: absolute;\n  align-self: flex-end;\n  z-index: 2;\n  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.05);\n  -webkit-box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.05);\n  -moz-box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.05);\n",
        ]);
        return (
          (Pt = function () {
            return n;
          }),
          n
        );
      }
      var zt = q.a.div(Pt()),
        It = q.a.div(Et()),
        Wt = q.a.div(St()),
        Rt = t(315);
      function Nt() {
        var n = Object(M.a)([
          "\n  grid-column: 2 / 3;\n  grid-row: 1 / 2;\n  width: 100%;\n  height: fit-content;\n  display: grid;\n  grid-template-rows: max-content max-content;\n  grid-template-columns: 1fr;\n  grid-row-gap: 5px;\n  justify-items: flex-start;\n",
        ]);
        return (
          (Nt = function () {
            return n;
          }),
          n
        );
      }
      function Ft() {
        var n = Object(M.a)([
          "\n  grid-column: 1 / 2;\n  grid-row: 1 / 2;\n  width: 50px;\n  height: 50px;\n  border-radius: 5px;\n  cursor: pointer;\n  object-fit: cover;\n",
        ]);
        return (
          (Ft = function () {
            return n;
          }),
          n
        );
      }
      function Lt() {
        var n = Object(M.a)([
          "\n  width: 100%;\n  height: 50px;\n  display: grid;\n  grid-template-columns: 50px 1fr max-content;\n  grid-template-rows: 1fr;\n  grid-column-gap: 10px;\n  align-items: center;\n",
        ]);
        return (
          (Lt = function () {
            return n;
          }),
          n
        );
      }
      var Tt = q.a.div(Lt()),
        Mt = q.a.img(Ft()),
        qt = q.a.div(Nt()),
        Bt = function (n) {
          var e = n.avatar,
            t = n.episode,
            i = n.name;
          return Object(r.jsxs)(Tt, {
            children: [
              Object(r.jsx)(Mt, { src: e }),
              Object(r.jsxs)(qt, {
                children: [
                  Object(r.jsx)(K.a, { href: "/app/episode/123", children: t }),
                  Object(r.jsx)(Jn.a, { children: i }),
                ],
              }),
              Object(r.jsx)(Rt.a, {
                size: 16,
                strokeWidth: 1.7,
                color: "#B7B7B7",
                onClick: function () {
                  return console.log("X clicked");
                },
              }),
            ],
          });
        },
        Dt = [
          {
            episode: "403 - Return of Yokai",
            name: "99% Invisible",
            avatar:
              "https://upload.wikimedia.org/wikipedia/commons/f/f2/99%25_Invisible_logo.jpg",
          },
          {
            episode: "403 - Return of Yokai",
            name: "99% Invisible",
            avatar:
              "https://upload.wikimedia.org/wikipedia/commons/f/f2/99%25_Invisible_logo.jpg",
          },
        ],
        Gt = function () {
          var n = I(),
            e = Object(p.a)(n, 2)[1],
            t = Object(i.useRef)();
          return (
            bt(t, function () {
              return e();
            }),
            Object(r.jsxs)(zt, {
              ref: t,
              children: [
                Object(r.jsxs)(It, {
                  children: [
                    Object(r.jsx)(Jn.a, { children: "Up next" }),
                    Object(r.jsx)(K.a, {
                      onClick: function () {},
                      children: "Clear all",
                    }),
                  ],
                }),
                Object(r.jsx)(tn.a, {
                  universal: !0,
                  autoHide: !0,
                  autoHideTimeout: 100,
                  autoHideDuration: 100,
                  children: Object(r.jsx)(Wt, {
                    children: Dt.map(function (n) {
                      var e = n.episode,
                        t = n.name,
                        i = n.avatar;
                      return Object(r.jsx)(
                        Bt,
                        { episode: e, name: t, avatar: i },
                        e
                      );
                    }),
                  }),
                }),
              ],
            })
          );
        };
      function Vt() {
        var n = Object(M.a)([
          "\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 17px;\n  text-decoration: none;\n",
        ]);
        return (
          (Vt = function () {
            return n;
          }),
          n
        );
      }
      function Ut() {
        var n = Object(M.a)([
          "\n  display: flex;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  background: ",
          ";\n  color: ",
          ';\n  padding-left: 20px;\n  cursor: pointer;\n\n  &:hover {\n    background: "#ffffff";\n    color: "#ffffff";\n  }\n',
        ]);
        return (
          (Ut = function () {
            return n;
          }),
          n
        );
      }
      function _t() {
        var n = Object(M.a)([
          "\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: repeat(5, 35px);\n  grid-row-gap: 5px;\n  align-items: center;\n  justify-content: center;\n  bottom: 80px;\n  width: 70px;\n  height: auto;\n  padding-top: 5px;\n  padding-bottom: 5px;\n  background: #f3f3f3;\n  border-radius: 5px;\n  right: 135px;\n  position: absolute;\n  align-self: flex-end;\n  z-index: 2;\n  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.05);\n  -webkit-box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.05);\n  -moz-box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.05);\n",
        ]);
        return (
          (_t = function () {
            return n;
          }),
          n
        );
      }
      var Ht = q.a.div(_t()),
        Zt = q.a.div(
          Ut(),
          function (n) {
            return n.active ? "#f3f3f3" : "#ffffff";
          },
          function (n) {
            return n.active ? "#ffffff" : "#f3f3f3";
          }
        ),
        At = q.a.a(Vt()),
        Jt = function (n) {
          var e = n.handleRate,
            t = Object(u.b)({}),
            a = t.rate,
            o = t.onRate,
            c = Object(i.useRef)();
          return (
            bt(c, function () {
              return e();
            }),
            Object(r.jsxs)(Ht, {
              ref: c,
              children: [
                Object(r.jsx)(Zt, {
                  onClick: function () {
                    return o(0.5);
                  },
                  active: 0.5 === a,
                  children: Object(r.jsx)(At, { children: "0.5x" }),
                }),
                Object(r.jsx)(Zt, {
                  onClick: function () {
                    return o(1);
                  },
                  active: 1 === a,
                  children: Object(r.jsx)(At, { children: "1.0x" }),
                }),
                Object(r.jsx)(Zt, {
                  onClick: function () {
                    return o(1.5);
                  },
                  active: 1.5 === a,
                  children: Object(r.jsx)(At, { children: "1.5x" }),
                }),
                Object(r.jsx)(Zt, {
                  onClick: function () {
                    return o(2);
                  },
                  active: 2 === a,
                  children: Object(r.jsx)(At, { children: "2.0x" }),
                }),
                Object(r.jsx)(Zt, {
                  onClick: function () {
                    return o(3);
                  },
                  active: 3 === a,
                  children: Object(r.jsx)(At, { children: "3.0x" }),
                }),
              ],
            })
          );
        },
        Qt = function () {
          var n = O(),
            e = Object(p.a)(n, 2)[1],
            t = C(),
            i = Object(p.a)(t, 1)[0],
            a = I(),
            o = Object(p.a)(a, 1)[0],
            c = L(),
            s = Object(p.a)(c, 2),
            d = s[0],
            l = s[1];
          return Object(r.jsxs)(r.Fragment, {
            children: [
              !0 === e ? Object(r.jsx)(xt, {}) : null,
              i.matches("open") ? Object(r.jsx)(Ct, {}) : null,
              o.matches("open") ? Object(r.jsx)(Gt, {}) : null,
              d.matches("open") ? Object(r.jsx)(Jt, { handleRate: l }) : null,
              Object(r.jsxs)(D, {
                children: [
                  Object(r.jsx)(ye, {
                    children: Object(r.jsxs)(T.c, {
                      children: [
                        Object(r.jsx)(T.a, {
                          exact: !0,
                          path: "/",
                          component: ke,
                        }),
                        Object(r.jsx)(T.a, {
                          exact: !0,
                          path: "/subscriptions",
                          component: Ce,
                        }),
                        Object(r.jsx)(T.a, {
                          exact: !0,
                          path: "/favorites",
                          component: Se,
                        }),
                        Object(r.jsx)(T.a, {
                          exact: !0,
                          path: "/settings",
                          component: Ee,
                        }),
                        Object(r.jsx)(T.a, {
                          exact: !0,
                          path: "/podcast",
                          component: Pe,
                        }),
                        Object(r.jsx)(T.a, {
                          exact: !0,
                          path: "/episode",
                          component: ze,
                        }),
                        Object(r.jsx)(T.a, {
                          exact: !0,
                          path: "/genres",
                          component: Ie,
                        }),
                      ],
                    }),
                  }),
                  Object(r.jsx)(nn, {}),
                  Object(r.jsx)(Oe, {}),
                  Object(r.jsx)(In, {}),
                ],
              }),
            ],
          });
        },
        Kt = t(316),
        Yt = Object(Kt.a)({
          styles: {
            global: { "html, body": { fontFamily: "Inter", fontSize: 14 } },
          },
          colors: {
            brand: {
              50: "#f7f7f7",
              100: "#ededed",
              200: "#e1e1e1",
              300: "#cecece",
              400: "#a9a9a9",
              500: "#888888",
              600: "#616161",
              700: "#4e4e4e",
              800: "#303030",
              900: "#101010",
            },
          },
        }),
        Xt = t(17),
        $t = t(22),
        nr = t.n($t),
        er = t(38),
        tr = t(128),
        rr = function (n) {
          return "mutation" === n.operationKind;
        },
        ir = function (n) {
          return "query" === n.operationKind;
        },
        ar = function (n) {
          return !(!n || !n.force);
        },
        or = function (n) {
          var e = n.headers.get("content-type");
          return e && -1 !== e.indexOf("application/json")
            ? n.json()
            : n.text();
        };
      function cr(n, e, t) {
        return t
          ? (function (n, e, t) {
              var r = new FormData();
              return (
                r.append("name", n.name),
                r.append("query", n.operationKind),
                r.append("variables", JSON.stringify(e)),
                Object.keys(t).forEach(function (n) {
                  Object.prototype.hasOwnProperty.call(t, n) &&
                    r.append(n, t[n]);
                }),
                r
              );
            })(n, e, t)
          : (function (n, e) {
              return JSON.stringify({
                name: n.name,
                query: n.text,
                variables: e,
              });
            })(n, e);
      }
      var sr = function (n) {
          return n
            ? { Accept: "*/*" }
            : {
                Accept: "application/json",
                "Content-type": "application/json",
              };
        },
        dr = t(185),
        lr = !(
          "undefined" === typeof window ||
          !window.document ||
          !window.document.createElement
        ),
        ur = {
          canUseDOM: lr,
          canUseWorkers: "undefined" !== typeof Worker,
          canUseEventListeners:
            lr && !(!window.addEventListener && !window.attachEvent),
          canUseViewport: lr && !!window.screen,
          isInWorker: !lr,
        },
        fr = [1e3, 3e3];
      var pr = function (n, e) {
          var t = e || {},
            r = t.fetchTimeout,
            i = t.retryDelays,
            a = Object(dr.a)(t, ["fetchTimeout", "retryDelays"]),
            o = null != r ? r : 15e3,
            c = null != i ? i : fr;
          function s(n) {
            return ur.canUseDOM && n <= c.length;
          }
          var d = 0,
            l = 0;
          return new Promise(function (e, t) {
            function r() {
              d++, (l = Date.now());
              var r = !0,
                c = fetch(n, a),
                u = setTimeout(function () {
                  (r = !1),
                    s(d)
                      ? (console.log(
                          !1,
                          "fetchWithRetries: HTTP timeout, retrying."
                        ),
                        i())
                      : t(
                          new Error(
                            "fetchWithRetries(): Failed to get response from server, tried ".concat(
                              d,
                              " times."
                            )
                          )
                        );
                }, o);
              c.then(function (n) {
                if ((clearTimeout(u), r))
                  if (n.status >= 200 && n.status < 300) e(n);
                  else if (401 === n.status) e(n);
                  else if (s(d))
                    console.log(!1, "fetchWithRetries: HTTP error, retrying."),
                      i();
                  else {
                    var a = new Error(
                      "fetchWithRetries(): Still no successful response after ".concat(
                        d,
                        " retries, giving up."
                      )
                    );
                    (a.response = n), t(a);
                  }
              }).catch(function (n) {
                clearTimeout(u), s(d) ? i() : t(n);
              });
            }
            function i() {
              var n = c[d - 1];
              setTimeout(r, l + n - Date.now());
            }
            r();
          });
        },
        jr = (function () {
          var n = Object(er.a)(
            nr.a.mark(function n(e, t, r) {
              var i, a, o, c, s, d, l, u, f;
              return nr.a.wrap(
                function (n) {
                  for (;;)
                    switch ((n.prev = n.next)) {
                      case 0:
                        return (
                          (n.prev = 0),
                          (i = cr(e, t, r)),
                          (a = localStorage.getItem(yt)),
                          (o = Object(tr.a)(
                            Object(tr.a)({}, sr(r)),
                            {},
                            { authorization: a }
                          )),
                          (c = rr(e)),
                          (s = c ? fetch : pr),
                          (n.next = 8),
                          s("https://podhouse-server.herokuapp.com/graphql", {
                            method: "POST",
                            headers: o,
                            body: i,
                            fetchTimeout: 2e4,
                            retryDelays: [1e3, 3e3, 5e3],
                          })
                        );
                      case 8:
                        return (d = n.sent), (n.next = 11), or(d);
                      case 11:
                        if (((l = n.sent), 401 !== d.status)) {
                          n.next = 14;
                          break;
                        }
                        throw l.errors;
                      case 14:
                        if (!rr(e) || !l.errors) {
                          n.next = 16;
                          break;
                        }
                        throw l;
                      case 16:
                        if (l.data) {
                          n.next = 18;
                          break;
                        }
                        throw l.errors;
                      case 18:
                        return n.abrupt("return", l);
                      case 21:
                        if (
                          ((n.prev = 21),
                          (n.t0 = n.catch(0)),
                          console.log("err: ", n.t0),
                          (u = new RegExp(
                            /Still no successful response after/
                          )),
                          (f = new RegExp(/Failed to fetch/)),
                          !u.test(n.t0.message) && !f.test(n.t0.message))
                        ) {
                          n.next = 28;
                          break;
                        }
                        throw new Error(
                          "Unavailable service. Try again later."
                        );
                      case 28:
                        throw n.t0;
                      case 29:
                      case "end":
                        return n.stop();
                    }
                },
                n,
                null,
                [[0, 21]]
              );
            })
          );
          return function (e, t, r) {
            return n.apply(this, arguments);
          };
        })(),
        hr = new Xt.QueryResponseCache({ size: 250, ttl: 6e4 }),
        br = (function () {
          var n = Object(er.a)(
            nr.a.mark(function n(e, t, r, i) {
              var a, o, c;
              return nr.a.wrap(function (n) {
                for (;;)
                  switch ((n.prev = n.next)) {
                    case 0:
                      if (((a = e.text), !rr(e))) {
                        n.next = 4;
                        break;
                      }
                      return hr.clear(), n.abrupt("return", jr(e, t, i));
                    case 4:
                      if (((o = hr.get(a, t)), !ir(e) || null === o || ar(r))) {
                        n.next = 7;
                        break;
                      }
                      return n.abrupt("return", o);
                    case 7:
                      return (n.next = 9), jr(e, t, i);
                    case 9:
                      return (
                        (c = n.sent) && hr.set(a, t, c), n.abrupt("return", c)
                      );
                    case 12:
                    case "end":
                      return n.stop();
                  }
              }, n);
            })
          );
          return function (e, t, r, i) {
            return n.apply(this, arguments);
          };
        })(),
        xr = Xt.Network.create(br),
        gr = new Xt.Environment({
          network: xr,
          store: new Xt.Store(new Xt.RecordSource(), {
            gcReleaseBufferSize: 10,
          }),
        }),
        mr = function () {
          return Object(r.jsx)(f.RelayEnvironmentProvider, {
            environment: gr,
            children: Object(r.jsxs)(s.a, {
              children: [
                Object(r.jsx)(d.a, {
                  theme: Yt,
                  children: Object(r.jsx)(u.a, {
                    children: Object(r.jsx)(m, {
                      children: Object(r.jsx)(k, {
                        children: Object(r.jsx)(z, {
                          children: Object(r.jsx)(F, {
                            children: Object(r.jsx)(Qt, {}),
                          }),
                        }),
                      }),
                    }),
                  }),
                }),
                Object(r.jsx)(l.a, {}),
              ],
            }),
          });
        };
      Boolean(
        "localhost" === window.location.hostname ||
          "[::1]" === window.location.hostname ||
          window.location.hostname.match(
            /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
          )
      );
      var Or = function (n) {
        n &&
          n instanceof Function &&
          t
            .e(3)
            .then(t.bind(null, 323))
            .then(function (e) {
              var t = e.getCLS,
                r = e.getFID,
                i = e.getFCP,
                a = e.getLCP,
                o = e.getTTFB;
              t(n), r(n), i(n), a(n), o(n);
            });
      };
      c.a.render(
        Object(r.jsx)(a.a.StrictMode, { children: Object(r.jsx)(mr, {}) }),
        document.getElementById("root")
      ),
        "serviceWorker" in navigator &&
          navigator.serviceWorker.ready
            .then(function (n) {
              n.unregister();
            })
            .catch(function (n) {
              console.error(n.message);
            }),
        Or();
    },
  },
  [[282, 1, 2]],
]);
//# sourceMappingURL=main.c7af36fd.chunk.js.map

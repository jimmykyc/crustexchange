(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [193], {
        40570: function (e, t, n) {
            "use strict";
            var r = n(41799),
                s = n(69396),
                i = n(99534),
                a = n(85893),
                l = (n(67294), {
                    xs: "h-6 text-xs px-2",
                    sm: "h-8 text-sm px-2",
                    md: "h-10 text-base px-3",
                    lg: "h-12 text-lg px-3",
                    xl: "h-14 text-lg px-4"
                }),
                c = "border border-blue-500",
                o = {
                    "gr-blue-ocean": "gradientBg",
                    "glass-teal": "bg-teal-600/20 ".concat("border border-teal-600", " text-[#08e7fe]"),
                    "glass-blue": "bg-blue-700/20  ".concat(c, " text-blue-400")
                };
            t.Z = function (e) {
                var t = e.className,
                    n = e.color,
                    c = e.borderRadius,
                    d = void 0 === c ? "rounded-lg" : c,
                    h = e.size,
                    u = void 0 === h ? "md" : h,
                    p = e.onClick,
                    x = e.disabled,
                    f = e.children,
                    m = e.style,
                    g = (0, i.Z)(e, ["className", "color", "borderRadius", "size", "onClick", "disabled", "children", "style"]);
                return (0, a.jsx)("button", (0, s.Z)((0, r.Z)({
                    className: "button ".concat("undefined" !== typeof n ? o[n] : "", " ").concat(l[u], " ").concat(d, " ").concat(t),
                    disabled: x,
                    onClick: p,
                    style: m
                }, g), {
                    children: f
                }))
            }
        },
        57741: function (e, t, n) {
            "use strict";
            n.d(t, {
                Z: function () {
                    return o
                }
            });
            var r = n(85893),
                s = n(41664),
                i = n.n(s),
                a = n(45106);

            function l() {
                return (0, r.jsxs)("div", {
                    
                })
            }
            var c = n(28822);

            function o(e) {
                var t = e.cta || !1;
                return (0, r.jsxs)("footer", {
                    children: [t && (0, r.jsx)(l, {}), (0, r.jsxs)("div", {
                        className: "flex items-center border-t border-[#1F2B33] py-12 mx-12 md:mx-36",
                        children: [(0, r.jsxs)("div", {
                            className: "hidden lg:flex items-center gap-6 w-1/3",
                            children: [(0, r.jsx)(i(), {
                                href: "/legal",
                                children: "Terms of Use"
                            }), (0, r.jsx)(i(), {
                                href: "/legal",
                                children: "Privacy Policy"
                            }), (0, r.jsx)(i(), {
                                href: "/legal",
                                children: "Cookie Policy"
                            })]
                        }), (0, r.jsx)("div", {
                            className: "w-1/3",
                            children: (0, r.jsx)(i(), {
                                href: "/",
                                children: (0, r.jsx)("img", {
                                    className: "h-12 block mx-auto",
                                    src: "/assets/logo.png"
                                })
                            })
                        }), (0, r.jsx)("div", {
                            className: "w-1/3 text-right",
                            children: (0, r.jsx)("div", {
                                className: "hidden lg:block",
                                children: (0, r.jsx)(c.Z, {})
                            })
                        })]
                    })]
                })
            }
        },
        45106: function (e, t, n) {
            "use strict";
            n.d(t, {
                Z: function () {
                    return w
                }
            });
            var r = n(47568),
                s = n(41799),
                i = n(69396),
                a = n(34051),
                l = n.n(a),
                c = n(85893),
                o = n(51438),
                d = n(52951),
                h = (n(82257), n(50626), n(16690), n(5201), n(14642), n(15503)),
                u = n(34155);
            if (!h.Z.apps.length) {
                var p = ("production" === u.env.APP_ENV || u.env.APP_ENV, {
                    apiKey: "AIzaSyBuljRc2KDJYI8gFdYfEC1en16OfDYI4QI",
                    authDomain: "vela-exchange-production.firebaseapp.com",
                    projectId: "vela-exchange-production",
                    storageBucket: "vela-exchange-production.appspot.com",
                    messagingSenderId: "1089639379842",
                    appId: "1:1089639379842:web:dd37ba564b4bd9778c559b",
                    measurementId: "G-L6EPHDMTQE"
                });
                h.Z.initializeApp(p), h.Z.auth().setPersistence(h.Z.auth.Auth.Persistence.LOCAL), window.firebase = h.Z
            }
            var x = h.Z,
                f = new(function () {
                    function e() {
                        (0, o.Z)(this, e), this.api = "/api/controler"
                    }
                    var t = e.prototype;
                    return t.post = function (e, t) {
                        return (0, r.Z)(l().mark((function n() {
                            return l().wrap((function (n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        return n.next = 2, fetch(e, (0, s.Z)({
                                            method: "POST"
                                        }, t));
                                    case 2:
                                        return n.abrupt("return", n.sent);
                                    case 3:
                                    case "end":
                                        return n.stop()
                                }
                            }), n)
                        })))()
                    }, t.addEmailSignup = function (e) {
                        var t = this;
                        return (0, r.Z)(l().mark((function n() {
                            return l().wrap((function (n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        return n.prev = 0, n.next = 3, t.emailSignups.add({
                                            email: e
                                        });
                                    case 3:
                                        return n.abrupt("return", Promise.resolve(!0));
                                    case 6:
                                        return n.prev = 6, n.t0 = n.catch(0), console.log(n.t0), n.abrupt("return", Promise.resolve(!1));
                                    case 10:
                                    case "end":
                                        return n.stop()
                                }
                            }), n, null, [
                                [0, 6]
                            ])
                        })))()
                    }, t.addEmail = function (e) {
                        var t = this;
                        return (0, r.Z)(l().mark((function n() {
                            var r;
                            return l().wrap((function (n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        return n.prev = 0, n.next = 3, t.post("".concat(t.api), {
                                            body: JSON.stringify({
                                                action: "ADD_EMAIL",
                                                payload: e
                                            })
                                        });
                                    case 3:
                                        return r = n.sent, n.abrupt("return", r);
                                    case 7:
                                        return n.prev = 7, n.t0 = n.catch(0), console.log(n.t0), n.abrupt("return", Promise.reject(n.t0));
                                    case 11:
                                    case "end":
                                        return n.stop()
                                }
                            }), n, null, [
                                [0, 7]
                            ])
                        })))()
                    }, t.captchaVerify = function (e) {
                        var t = this;
                        return (0, r.Z)(l().mark((function n() {
                            var r;
                            return l().wrap((function (n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        return n.prev = 0, console.log(e), n.next = 4, t.post("".concat(t.api), {
                                            body: JSON.stringify({
                                                action: "CAPTCHA_VERIFY",
                                                payload: {
                                                    captcha: e
                                                }
                                            })
                                        });
                                    case 4:
                                        return r = n.sent, n.abrupt("return", r.json());
                                    case 8:
                                        return n.prev = 8, n.t0 = n.catch(0), console.log(n.t0), n.abrupt("return", n.t0);
                                    case 12:
                                    case "end":
                                        return n.stop()
                                }
                            }), n, null, [
                                [0, 8]
                            ])
                        })))()
                    }, (0, d.Z)(e, [{
                        key: "emailSignups",
                        get: function () {
                            return x ? x.firestore().collection("/email-signups") : null
                        }
                    }]), e
                }()),
                m = n(6185),
                g = n(67294),
                v = n(34853),
                j = n(55678),
                C = n(40570);

            function w() {
                var e, t = (0, g.useState)(null),
                    n = t[0],
                    a = t[1],
                    o = (0, g.useState)(null),
                    d = o[0],
                    h = o[1],
                    u = (0, g.useRef)(null),
                    p = (0, g.useState)(!1),
                    x = p[0],
                    w = p[1],
                    b = (0, g.useState)(!1),
                    L = b[0],
                    N = b[1],
                    y = function () {
                        var e = (0, r.Z)(l().mark((function e() {
                            var t;
                            return l().wrap((function (e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return w(!0), e.prev = 1, e.next = 4, f.addEmail({
                                            email: null === n || void 0 === n ? void 0 : n.email,
                                            type: "base"
                                        });
                                    case 4:
                                        if (400 !== (t = e.sent).status) {
                                            e.next = 10;
                                            break
                                        }
                                        return j.Am.error("This email has already signed up!"), w(!1), N(!1), e.abrupt("return");
                                    case 10:
                                        if (201 !== t.status) {
                                            e.next = 18;
                                            break
                                        }
                                        return j.Am.success("You have successfully signed up! Please confirm your subscription which sent to your email address"), e.next = 14, f.addEmailSignup(null === n || void 0 === n ? void 0 : n.email);
                                    case 14:
                                        h(null), a(null), e.next = 19;
                                        break;
                                    case 18:
                                        j.Am.error("Something went wrong, please try again!");
                                    case 19:
                                        N(!1), w(!1), e.next = 29;
                                        break;
                                    case 23:
                                        e.prev = 23, e.t0 = e.catch(1), console.log("handleBetaSignUp err", e.t0), w(!1), j.Am.error("Something went wrong, please try again!"), N(!1);
                                    case 29:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [1, 23]
                            ])
                        })));
                        return function () {
                            return e.apply(this, arguments)
                        }
                    }(),
                    Z = function () {
                        var e = (0, r.Z)(l().mark((function e(t) {
                            return l().wrap((function (e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (t) {
                                            e.next = 2;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 2:
                                        return e.next = 4, f.captchaVerify(t);
                                    case 4:
                                        if (200 !== e.sent.status) {
                                            e.next = 9;
                                            break
                                        }
                                        return e.next = 8, y();
                                    case 8:
                                        u && u.current && u.current.reset && u.current.reset();
                                    case 9:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function (t) {
                            return e.apply(this, arguments)
                        }
                    }();
                return (0, c.jsxs)("div", {
                    className: "flex mt-12 w-full mx-auto flex-wrap lg:flex-nowrap",
                    children: [(0, c.jsx)("input", {
                        autoComplete: "on",
                        className: "border border-1 rounded-lg py-3 px-6 w-full mb-6 lg:mb-0 lg:w-3/5 lg:mr-6 inputText",
                        onBlur: function (e) {
                            e.target.value && !(0, m.validateEmail)(e.target.value) && h((0, i.Z)((0, s.Z)({}, d), {
                                email: "Please enter a valid email!"
                            }))
                        },
                        onChange: function (e) {
                            h((0, i.Z)((0, s.Z)({}, d), {
                                email: null
                            })), a((0, i.Z)((0, s.Z)({}, n), {
                                email: e.target.value
                            }))
                        },
                        placeholder: "Enter your email address...",
                        type: "email",
                        value: null !== (e = null === n || void 0 === n ? void 0 : n.email) && void 0 !== e ? e : ""
                    }), (0, c.jsx)(C.Z, {
                        className: "w-full lg:w-2/5 ".concat(L ? "!hidden" : ""),
                        color: "gr-blue-ocean",
                        disabled: (null === d || void 0 === d ? void 0 : d.email) || !(null === n || void 0 === n ? void 0 : n.email),
                        onClick: function () {
                            return N(!L)
                        },
                        size: "lg",
                        children: x ? (0, c.jsx)(m.Spinner, {
                            className: "animate-spin"
                        }) : "Join Newsletter"
                    }), (0, c.jsx)("div", {
                        className: "relative ".concat(L ? "" : "hidden"),
                        children: (0, c.jsx)(v.Z, {
                            onChange: Z,
                            ref: u,
                            sitekey: "6Lc1O3siAAAAAK9T9ZdwjjjucDtqvU-ql9AvCFpm"
                        })
                    })]
                })
            }
        },
        26166: function (e, t, n) {
            "use strict";
            n.d(t, {
                Z: function () {
                    return c
                }
            });
            var r = n(85893),
                s = n(41664),
                i = n.n(s),
                a = n(67294),
                l = n(40570);

            function c(e) {
                var t = e.padded,
                    n = (0, a.useState)(!1),
                    s = n[0],
                    c = n[1],
                    o = function () {
                        window && window.open("#", "_blank")
                    };
                return (0, r.jsxs)("nav", {
                    className: "flex items-stretch justify-between contain-width w-full mx-auto ".concat(t && "mx-6 md:mx-36"),
                    children: [(0, r.jsx)("div", {
                        className: "fixed z-50 top-0 right-0 left-0 bottom-0 bg-slate-900 ".concat(s ? "flex flex-col" : "hidden"),
                        children: (0, r.jsxs)("div", {
                            className: "py-6 px-6 md:px-36 md:py-12 relative",
                            children: [(0, r.jsxs)("div", {
                                className: "flex justify-between",
                                children: [(0, r.jsx)(i(), {
                                    href: "/",
                                    children: (0, r.jsx)("img", {
                                        className: "h-12",
                                        src: "../../../assets/logo.png"
                                    })
                                }), (0, r.jsx)("div", {
                                    className: "flex items-center cursor-pointer lg:hidden",
                                    onClick: function () {
                                        c(!1)
                                    },
                                    children: (0, r.jsx)("svg", {
                                        fill: "#ffffff",
                                        height: "40",
                                        viewBox: "0 0 460.775 460.775",
                                        width: "40",
                                        children: (0, r.jsx)("path", {
                                            d: "M285.08,230.397L456.218,59.27c6.076-6.077,6.076-15.911,0-21.986L423.511,4.565c-2.913-2.911-6.866-4.55-10.992-4.55 c-4.127,0-8.08,1.639-10.993,4.55l-171.138,171.14L59.25,4.565c-2.913-2.911-6.866-4.55-10.993-4.55 c-4.126,0-8.08,1.639-10.992,4.55L4.558,37.284c-6.077,6.075-6.077,15.909,0,21.986l171.138,171.128L4.575,401.505 c-6.074,6.077-6.074,15.911,0,21.986l32.709,32.719c2.911,2.911,6.865,4.55,10.992,4.55c4.127,0,8.08-1.639,10.994-4.55 l171.117-171.12l171.118,171.12c2.913,2.911,6.866,4.55,10.993,4.55c4.128,0,8.081-1.639,10.992-4.55l32.709-32.719 c6.074-6.075,6.074-15.909,0-21.986L285.08,230.397z"
                                        })
                                    })
                                })]
                            }), (0, r.jsxs)("ul", {
                                className: "mt-12 text-center flex flex-col gap-6",
                                children: [(0, r.jsx)("li", {
                                    children: (0, r.jsx)(i(), {
                                        className: "cursor-pointer",
                                        href: "",
                                        children: ""
                                    })
                                
                                }), (0, r.jsx)("li", {
                                    children: (0, r.jsx)(i(), {
                                        className: "cursor-pointer",
                                        href: "",
                                        children: ""
                                    })
                                }), (0, r.jsx)("li", {
                                    children: (0, r.jsx)(i(), {
                                        className: "cursor-pointer",
                                        href: "https://crust-exchange.gitbook.io/crust-finance/",
                                        children: "Docs"
                                    })
                                }), (0, r.jsx)("li", {
                                    children: (0, r.jsx)(i(), {
                                        className: "cursor-pointer",
                                        href: "",
                                        children: "Terms Of Use"
                                    })
                                }), (0, r.jsx)("li", {
                                    children: (0, r.jsx)(i(), {
                                        className: "cursor-pointer",
                                        href: "",
                                        children: "Privacy Policy"
                                    })
                                }), (0, r.jsx)("li", {
                                    children: (0, r.jsx)(i(), {
                                        className: "cursor-pointer",
                                        href: "",
                                        children: "Cookie Policy"
                                    })
                                }), (0, r.jsx)("li", {
                                    children: (0, r.jsxs)(l.Z, {
                                        className: "mt-12 w-full",
                                        color: "glass-teal",
                                        onClick: o,
                                        size: "lg",
                                        children: [(0, r.jsx)("span", {
                                            className: "mr-3",
                                            children: (0, r.jsxs)("svg", {
                                                fill: "none",
                                                height: "24",
                                                viewBox: "0 0 24 24",
                                                width: "24",
                                                xmlns: "http://www.w3.org/2000/svg",
                                                children: [(0, r.jsx)("g", {
                                                    clipPath: "url(#clip0_3098_10827)",
                                                    children: (0, r.jsx)("path", {
                                                        d: "M4 21.6951H8.1087V23H10.163V22.3476H14.2717V23H16.3261V21.6951L20.4348 21.6951V18.7181C20.4339 17.1123 19.7642 15.5725 18.5729 14.4368L15.6201 11.6026L15.1489 6.36285C15.0793 5.53475 14.8141 4.73235 14.3733 4.01562C13.9324 3.29889 13.3272 2.68635 12.6029 2.22378L12.2174 2L11.8319 2.22378C11.1077 2.68642 10.5027 3.29899 10.0619 4.01572C9.62115 4.73245 9.35609 5.5348 9.28652 6.36285L8.81539 11.6026L5.94821 14.335L5.86261 14.4368C4.67108 15.5727 4.00122 17.1127 4 18.7187L4 21.6951ZM5.36957 20.3903V18.7181C5.36825 17.4574 5.89153 16.2477 6.82473 15.3541L8.79348 13.4986V16.4756H10.163V11.9086L10.6342 6.48485C10.73 5.38419 11.3532 4.42837 12.2174 3.712C13.0816 4.42837 13.7047 5.38419 13.8013 6.48485L14.2717 11.9705L14.2717 16.4756H15.6413L15.6413 13.4986L17.6101 15.3541C18.5433 16.2477 19.0665 17.4574 19.0652 18.7181V20.3903H14.2717V21.0427H10.163V20.3903H5.36957ZM11.5326 7.3415L12.9022 7.3415V6.03663H11.5326V7.3415ZM15.6413 19.0854H17.6957V17.7805H15.6413V19.0854Z",
                                                        fill: "#08E7FE"
                                                    })
                                                }), (0, r.jsx)("defs", {
                                                    children: (0, r.jsx)("clipPath", {
                                                        id: "clip0_3098_10827",
                                                        children: (0, r.jsx)("rect", {
                                                            fill: "white",
                                                            height: "24",
                                                            width: "24"
                                                        })
                                                    })
                                                })]
                                            })
                                        }), "Launch App"]
                                    })
                                })]
                            })]
                        })
                    }), (0, r.jsx)(i(), {
                        href: "/",
                        children: (0, r.jsx)("img", {
                            className: "h-12 cursor-pointer",
                            src: "../../../assets/logo.png"
                        })
                    }), (0, r.jsxs)("div", {
                        className: "flex text-lg",
                        children: [(0, r.jsxs)("div", {
                            className: "gap-12 justify-center items-center hidden lg:flex",
                            children: [(0, r.jsx)(i(), {
                                className: "cursor-pointer",
                                href: "",
                                children: ""
                            }), (0, r.jsx)(i(), {
                                className: "cursor-pointer",
                                href: "",
                                children: ""
                            }), (0, r.jsx)(i(), {
                                className: "cursor-pointer",
                                href: "",
                                target: "_blank",
                                children: ""
                            }), (0, r.jsx)(i(), {
                                className: "cursor-pointer",
                                href: "https://crust-exchange.gitbook.io/crust-finance/",
                                children: "Docs"
                            }), (0, r.jsxs)(l.Z, {
                                color: "glass-teal",
                                onClick: o,
                                size: "lg",
                                children: [(0, r.jsx)("span", {
                                    className: "mr-3",
                                    children: (0, r.jsxs)("svg", {
                                        fill: "none",
                                        height: "24",
                                        viewBox: "0 0 24 24",
                                        width: "24",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        children: [(0, r.jsx)("g", {
                                            clipPath: "url(#clip0_3098_10827)",
                                            children: (0, r.jsx)("path", {
                                                d: "M4 21.6951H8.1087V23H10.163V22.3476H14.2717V23H16.3261V21.6951L20.4348 21.6951V18.7181C20.4339 17.1123 19.7642 15.5725 18.5729 14.4368L15.6201 11.6026L15.1489 6.36285C15.0793 5.53475 14.8141 4.73235 14.3733 4.01562C13.9324 3.29889 13.3272 2.68635 12.6029 2.22378L12.2174 2L11.8319 2.22378C11.1077 2.68642 10.5027 3.29899 10.0619 4.01572C9.62115 4.73245 9.35609 5.5348 9.28652 6.36285L8.81539 11.6026L5.94821 14.335L5.86261 14.4368C4.67108 15.5727 4.00122 17.1127 4 18.7187L4 21.6951ZM5.36957 20.3903V18.7181C5.36825 17.4574 5.89153 16.2477 6.82473 15.3541L8.79348 13.4986V16.4756H10.163V11.9086L10.6342 6.48485C10.73 5.38419 11.3532 4.42837 12.2174 3.712C13.0816 4.42837 13.7047 5.38419 13.8013 6.48485L14.2717 11.9705L14.2717 16.4756H15.6413L15.6413 13.4986L17.6101 15.3541C18.5433 16.2477 19.0665 17.4574 19.0652 18.7181V20.3903H14.2717V21.0427H10.163V20.3903H5.36957ZM11.5326 7.3415L12.9022 7.3415V6.03663H11.5326V7.3415ZM15.6413 19.0854H17.6957V17.7805H15.6413V19.0854Z",
                                                fill: "#08E7FE"
                                            })
                                        }), (0, r.jsx)("defs", {
                                            children: (0, r.jsx)("clipPath", {
                                                id: "clip0_3098_10827",
                                                children: (0, r.jsx)("rect", {
                                                    fill: "white",
                                                    height: "24",
                                                    width: "24"
                                                })
                                            })
                                        })]
                                    })
                                }), "Launch App"]
                            })]
                        }), (0, r.jsx)("div", {
                            className: "flex items-center cursor-pointer lg:hidden",
                            onClick: function () {
                                c(!0)
                            },
                            children: (0, r.jsxs)("svg", {
                                height: "40",
                                viewBox: "0 0 100 80",
                                width: "40",
                                children: [(0, r.jsx)("rect", {
                                    fill: "#fff",
                                    height: "10",
                                    width: "100"
                                }), (0, r.jsx)("rect", {
                                    fill: "#fff",
                                    height: "10",
                                    width: "100",
                                    y: "30"
                                }), (0, r.jsx)("rect", {
                                    fill: "#fff",
                                    height: "10",
                                    width: "100",
                                    y: "60"
                                })]
                            })
                        })]
                    })]
                })
            }
        },
        86e3: function (e, t, n) {
            "use strict";
            var r = n(85893),
                s = n(9008),
                i = n.n(s);
            t.Z = function (e) {
                var t = e.title,
                    n = e.pageClass,
                    s = e.children,
                    a = "",
                    l = "",
                    c = "",
                    o = "",
                    d = "";
                return (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsxs)(i(), {
                        children: [(0, r.jsx)("title", {
                            children: t
                        }), (0, r.jsx)("meta", {
                            content: l,
                            name: "description"
                        }), (0, r.jsx)("meta", {
                            content: "",
                            itemProp: "image"
                        }), (0, r.jsx)("link", {
                            href: "assets/logo.png",
                            rel: "icon"
                        }), (0, r.jsx)("meta", {
                            content: d,
                            property: "og:url"
                        }), (0, r.jsx)("meta", {
                            content: "website",
                            property: "og:type"
                        }), (0, r.jsx)("meta", {
                            content: a,
                            property: "og:title"
                        }), (0, r.jsx)("meta", {
                            content: l,
                            property: "og:description"
                        }), (0, r.jsx)("meta", {
                            content: "",
                            property: "og:image"
                        }), (0, r.jsx)("meta", {
                            content: c,
                            property: "og:image:alt"
                        }), (0, r.jsx)("meta", {
                            content: "summary_large_image",
                            name: "twitter:card"
                        }), (0, r.jsx)("meta", {
                            content: o,
                            name: "twitter:site"
                        }), (0, r.jsx)("meta", {
                            content: a,
                            name: "twitter:title"
                        }), (0, r.jsx)("meta", {
                            content: l,
                            name: "twitter:description"
                        }), (0, r.jsx)("meta", {
                            content: "",
                            name: "twitter:image"
                        }), (0, r.jsx)("meta", {
                            content: c,
                            name: "twitter:image:alt"
                        })]
                    }), (0, r.jsx)("div", {
                        className: "".concat(n, " page"),
                        children: s
                    })]
                })
            }
        },
        28822: function (e, t, n) {
            "use strict";
            n.d(t, {
                Z: function () {
                    return s
                }
            });
            var r = n(85893);

            function s() {
                var e = function (e) {
                    window.open(e, "_blank")
                };
                return (0, r.jsxs)("div", {
                    className: "flex justify-end",
                    children: [(0, r.jsx)("div", {
                        className: "mr-6 cursor-pointer",
                        onClick: function () {
                            return e("https://twitter.com/CrustExchange")
                        },
                        children: (0, r.jsxs)("svg", {
                            fill: "none",
                            height: "32",
                            viewBox: "0 0 32 32",
                            width: "32",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: [(0, r.jsx)("g", {
                                clipPath: "url(#clip0_1435_7168)",
                                children: (0, r.jsx)("path", {
                                    d: "M29.5484 7.54124C28.5305 7.99149 27.451 8.2872 26.3458 8.41857C27.5108 7.72181 28.3827 6.62525 28.7991 5.33324C27.7058 5.9839 26.5071 6.4399 25.2578 6.68657C24.4186 5.78867 23.3062 5.19319 22.0937 4.99268C20.8812 4.79218 19.6363 4.99789 18.5528 5.57784C17.4692 6.15779 16.6076 7.07948 16.1019 8.19963C15.5962 9.31977 15.4748 10.5756 15.7564 11.7719C13.5392 11.6608 11.3702 11.0846 9.39014 10.0808C7.41008 9.07698 5.66326 7.66797 4.26309 5.94524C3.76748 6.7965 3.50703 7.7642 3.50843 8.74924C3.50843 10.6826 4.49243 12.3906 5.98843 13.3906C5.10311 13.3627 4.23727 13.1236 3.46309 12.6932V12.7626C3.46336 14.0502 3.90892 15.2981 4.72422 16.2946C5.53953 17.2912 6.6744 17.9752 7.93643 18.2306C7.11458 18.4533 6.25284 18.4861 5.41643 18.3266C5.77225 19.4349 6.46577 20.4042 7.39988 21.0987C8.334 21.7933 9.46193 22.1783 10.6258 22.1999C9.46907 23.1083 8.14466 23.7799 6.72827 24.1761C5.31187 24.5724 3.83126 24.6856 2.37109 24.5092C4.92002 26.1485 7.88722 27.0187 10.9178 27.0159C21.1751 27.0159 26.7844 18.5186 26.7844 11.1492C26.7844 10.9092 26.7778 10.6666 26.7671 10.4292C27.8589 9.64013 28.8012 8.66259 29.5498 7.54257L29.5484 7.54124Z",
                                    fill: "white"
                                })
                            }), (0, r.jsx)("defs", {
                                children: (0, r.jsx)("clipPath", {
                                    id: "clip0_1435_7168",
                                    children: (0, r.jsx)("rect", {
                                        fill: "white",
                                        height: "32",
                                        width: "32"
                                    })
                                })
                            })]
                        })
                    }), (0, r.jsx)("div", {
                        className: "mr-6 cursor-pointer",
                        onClick: function () {
                            return e("https://discord.com/invite/crust-exchange")
                        },
                        children: (0, r.jsxs)("svg", {
                            fill: "none",
                            height: "32",
                            viewBox: "0 0 32 32",
                            width: "32",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: [(0, r.jsx)("g", {
                                clipPath: "url(#clip0_2574_11474)",
                                children: (0, r.jsx)("path", {
                                    d: "M13.4347 14.6667C14.2347 14.6667 14.8827 15.2667 14.868 16.0001C14.868 16.7334 14.236 17.3334 13.4347 17.3334C12.648 17.3334 12 16.7334 12 16.0001C12 15.2667 12.6333 14.6667 13.4347 14.6667ZM18.5653 14.6667C19.3667 14.6667 20 15.2667 20 16.0001C20 16.7334 19.3667 17.3334 18.5653 17.3334C17.7787 17.3334 17.132 16.7334 17.132 16.0001C17.132 15.2667 17.764 14.6667 18.5653 14.6667ZM25.188 2.66675C26.7387 2.66675 28 3.95475 28 5.55075V30.6667L25.052 28.0067L23.392 26.4387L21.636 24.7721L22.364 27.3627H6.812C5.26133 27.3627 4 26.0747 4 24.4787V5.55075C4 3.95475 5.26133 2.66675 6.812 2.66675H25.1867H25.188ZM19.8947 20.9507C22.9253 20.8534 24.092 18.8227 24.092 18.8227C24.092 14.3147 22.116 10.6601 22.116 10.6601C20.1427 9.14941 18.2627 9.19075 18.2627 9.19075L18.0707 9.41475C20.4027 10.1427 21.4853 11.1934 21.4853 11.1934C20.2121 10.4761 18.8089 10.0192 17.3573 9.84941C16.4366 9.74542 15.5066 9.75438 14.588 9.87608C14.5053 9.87608 14.436 9.89075 14.3547 9.90408C13.8747 9.94675 12.708 10.1281 11.2413 10.7867C10.7347 11.0241 10.432 11.1934 10.432 11.1934C10.432 11.1934 11.5707 10.0867 14.0387 9.35875L13.9013 9.19075C13.9013 9.19075 12.0227 9.14941 10.048 10.6614C10.048 10.6614 8.07333 14.3147 8.07333 18.8227C8.07333 18.8227 9.22533 20.8521 12.256 20.9507C12.256 20.9507 12.7627 20.3214 13.176 19.7894C11.4333 19.2561 10.776 18.1361 10.776 18.1361C10.776 18.1361 10.912 18.2347 11.1587 18.3747C11.172 18.3881 11.1853 18.4027 11.2133 18.4161C11.2547 18.4454 11.296 18.4587 11.3373 18.4867C11.68 18.6827 12.0227 18.8361 12.3373 18.9627C12.9 19.1867 13.572 19.4107 14.3547 19.5654C15.5271 19.7952 16.7325 19.7998 17.9067 19.5787C18.5906 19.4567 19.2578 19.2549 19.8947 18.9774C20.3747 18.7947 20.9093 18.5281 21.472 18.1507C21.472 18.1507 20.7867 19.2987 18.9893 19.8174C19.4013 20.3494 19.896 20.9507 19.896 20.9507H19.8947Z",
                                    fill: "white"
                                })
                            }), (0, r.jsx)("defs", {
                                children: (0, r.jsx)("clipPath", {
                                    id: "clip0_2574_11474",
                                    children: (0, r.jsx)("rect", {
                                        fill: "white",
                                        height: "32",
                                        width: "32"
                                    })
                                })
                            })]
                        })
                    }), (0, r.jsx)("div", {
                        className: "mr-6 cursor-pointer",
                        onClick: function () {
                            return e("#")
                        },
                        children: (0, r.jsxs)("svg", {
                            fill: "none",
                            height: "32",
                            viewBox: "0 0 32 32",
                            width: "32",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: [(0, r.jsx)("path", {
                                d: "M18.0499 16.3036C18.0499 21.3312 14.0093 25.4068 9.02511 25.4068C4.04097 25.4068 0 21.3303 0 16.3036C0 11.2768 4.04067 7.19995 9.02511 7.19995C14.0096 7.19995 18.0499 11.2759 18.0499 16.3036Z",
                                fill: "white"
                            }), (0, r.jsx)("path", {
                                d: "M27.9509 16.3035C27.9509 21.0359 25.9306 24.8738 23.4383 24.8738C20.9461 24.8738 18.9258 21.0359 18.9258 16.3035C18.9258 11.5711 20.9458 7.73315 23.438 7.73315C25.9303 7.73315 27.9506 11.5698 27.9506 16.3035",
                                fill: "white"
                            }), (0, r.jsx)("path", {
                                d: "M32 16.3036C32 20.5427 31.2896 23.9813 30.4129 23.9813C29.5363 23.9813 28.8262 20.5437 28.8262 16.3036C28.8262 12.0636 29.5366 8.62598 30.4129 8.62598C31.2893 8.62598 32 12.0633 32 16.3036Z",
                                fill: "white"
                            })]
                        })
                    }), (0, r.jsx)("div", {
                        className: "cursor-pointer",
                        onClick: function () {
                            return e("https://t.me/CrustExchange")
                        },
                        children: (0, r.jsxs)("svg", {
                            fill: "none",
                            height: "32",
                            viewBox: "0 0 32 32",
                            width: "32",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: [(0, r.jsx)("g", {
                                clipPath: "url(#clip0_2574_11478)",
                                children: (0, r.jsx)("path", {
                                    d: "M15.9993 29.3334C8.63535 29.3334 2.66602 23.3641 2.66602 16.0001C2.66602 8.63608 8.63535 2.66675 15.9993 2.66675C23.3633 2.66675 29.3327 8.63608 29.3327 16.0001C29.3327 23.3641 23.3633 29.3334 15.9993 29.3334ZM11.8527 17.5601L11.87 17.5507L13.03 21.3774C13.1793 21.7921 13.3847 21.8667 13.634 21.8321C13.8847 21.7987 14.0167 21.6641 14.1807 21.5067L15.7647 19.9761L19.1647 22.4934C19.786 22.8361 20.2327 22.6587 20.3873 21.9174L22.5967 11.4881C22.8407 10.5174 22.414 10.1281 21.6607 10.4374L8.68335 15.4507C7.79802 15.8054 7.80335 16.3014 8.52335 16.5214L11.8527 17.5614V17.5601Z",
                                    fill: "white"
                                })
                            }), (0, r.jsx)("defs", {
                                children: (0, r.jsx)("clipPath", {
                                    id: "clip0_2574_11478",
                                    children: (0, r.jsx)("rect", {
                                        fill: "white",
                                        height: "32",
                                        width: "32"
                                    })
                                })
                            })]
                        })
                    })]
                })
            }
        },
        88677: function () {},
        62808: function () {},
        46601: function () {},
        89214: function () {},
        52361: function () {},
        94616: function () {},
        6567: function () {},
        87500: function () {}
    }
]);
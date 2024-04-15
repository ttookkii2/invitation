(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [888], {
        6840: function(n, o, i) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/_app", function() {
                return i(4178)
            }])
        },
        4178: function(n, o, i) {
            "use strict";
            i.r(o), i.d(o, {
                default: function() {
                    return r
                }
            });
            var t = i(5893);
            i(3814);
            var u = i(4298),
                a = i.n(u),
                e = i(7294);

            function r(n) {
                let {
                    Component: o,
                    pageProps: i
                } = n, u = () => {
                    var n, o;
                    !window.Kakao || (null === (n = window.Kakao) || void 0 === n ? void 0 : n.isInitialized()) || null === (o = window.Kakao) || void 0 === o || o.init("85dcc27223f8590a9070704449045077")
                };
                return (0, e.useEffect)(() => {
                    u()
                }, []), (0, t.jsxs)(t.Fragment, {
                    children: [(0, t.jsx)(o, {
                        ...i
                    }), (0, t.jsx)(a(), {
                        src: "https://developers.kakao.com/sdk/js/kakao.js",
                        onLoad: u
                    })]
                })
            }
        },
        3814: function() {},
        4298: function(n, o, i) {
            n.exports = i(5442)
        }
    },
    function(n) {
        var o = function(o) {
            return n(n.s = o)
        };
        n.O(0, [774, 179], function() {
            return o(6840), o(6885)
        }), _N_E = n.O()
    }
]);

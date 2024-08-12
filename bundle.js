/*! For license information please see bundle.js.LICENSE.txt */
(() => {
  var t = {
      439: () => {
        function t(e) {
          return (
            (t =
              'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      'function' == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? 'symbol'
                      : typeof t;
                  }),
            t(e)
          );
        }
        function e(t, e) {
          for (var r = 0; r < e.length; r++) {
            var o = e[r];
            (o.enumerable = o.enumerable || !1),
              (o.configurable = !0),
              'value' in o && (o.writable = !0),
              Object.defineProperty(t, n(o.key), o);
          }
        }
        function n(e) {
          var n = (function (e) {
            if ('object' != t(e) || !e) return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 !== n) {
              var r = n.call(e, 'string');
              if ('object' != t(r)) return r;
              throw new TypeError(
                '@@toPrimitive must return a primitive value.'
              );
            }
            return String(e);
          })(e);
          return 'symbol' == t(n) ? n : n + '';
        }
        function r(t) {
          var e = 'function' == typeof Map ? new Map() : void 0;
          return (
            (r = function (t) {
              if (
                null === t ||
                !(function (t) {
                  try {
                    return (
                      -1 !== Function.toString.call(t).indexOf('[native code]')
                    );
                  } catch (e) {
                    return 'function' == typeof t;
                  }
                })(t)
              )
                return t;
              if ('function' != typeof t)
                throw new TypeError(
                  'Super expression must either be null or a function'
                );
              if (void 0 !== e) {
                if (e.has(t)) return e.get(t);
                e.set(t, n);
              }
              function n() {
                return (function (t, e, n) {
                  if (o()) return Reflect.construct.apply(null, arguments);
                  var r = [null];
                  r.push.apply(r, e);
                  var i = new (t.bind.apply(t, r))();
                  return n && a(i, n.prototype), i;
                })(t, arguments, i(this).constructor);
              }
              return (
                (n.prototype = Object.create(t.prototype, {
                  constructor: {
                    value: n,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0,
                  },
                })),
                a(n, t)
              );
            }),
            r(t)
          );
        }
        function o() {
          try {
            var t = !Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {})
            );
          } catch (t) {}
          return (o = function () {
            return !!t;
          })();
        }
        function a(t, e) {
          return (
            (a = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (t, e) {
                  return (t.__proto__ = e), t;
                }),
            a(t, e)
          );
        }
        function i(t) {
          return (
            (i = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (t) {
                  return t.__proto__ || Object.getPrototypeOf(t);
                }),
            i(t)
          );
        }
        var s = (function (n) {
          function r() {
            var e;
            return (
              (function (t, e) {
                if (!(t instanceof e))
                  throw new TypeError('Cannot call a class as a function');
              })(this, r),
              ((e = (function (e, n, r) {
                return (
                  (n = i(n)),
                  (function (e, n) {
                    if (n && ('object' == t(n) || 'function' == typeof n))
                      return n;
                    if (void 0 !== n)
                      throw new TypeError(
                        'Derived constructors may only return object or undefined'
                      );
                    return (function (t) {
                      if (void 0 === t)
                        throw new ReferenceError(
                          "this hasn't been initialised - super() hasn't been called"
                        );
                      return t;
                    })(e);
                  })(
                    e,
                    o()
                      ? Reflect.construct(n, r || [], i(e).constructor)
                      : n.apply(e, r)
                  )
                );
              })(this, r)).attachShadow({ mode: 'open' }).innerHTML =
                '\n      <style>\n        #loading {\n          position: fixed;\n          top: 50%;\n          left: 50%;\n          transform: translate(-50%, -50%);\n          background: rgba(0, 0, 0, 0.7);\n          color: white;\n          padding: 1rem;\n          border-radius: 8px;\n          z-index: 1000;\n          display: none;\n        }\n        #loading.show {\n          display: block;\n        }\n      </style>\n      <div id="loading">Loading...</div>\n    '),
              e
            );
          }
          return (
            (function (t, e) {
              if ('function' != typeof e && null !== e)
                throw new TypeError(
                  'Super expression must either be null or a function'
                );
              (t.prototype = Object.create(e && e.prototype, {
                constructor: { value: t, writable: !0, configurable: !0 },
              })),
                Object.defineProperty(t, 'prototype', { writable: !1 }),
                e && a(t, e);
            })(r, n),
            (s = r),
            (c = [
              {
                key: 'show',
                value: function () {
                  this.shadowRoot
                    .querySelector('#loading')
                    .classList.add('show');
                },
              },
              {
                key: 'hide',
                value: function () {
                  this.shadowRoot
                    .querySelector('#loading')
                    .classList.remove('show');
                },
              },
            ]) && e(s.prototype, c),
            Object.defineProperty(s, 'prototype', { writable: !1 }),
            s
          );
          var s, c;
        })(r(HTMLElement));
        customElements.define('loading-indicator', s);
      },
      754: () => {
        function t(e) {
          return (
            (t =
              'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      'function' == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? 'symbol'
                      : typeof t;
                  }),
            t(e)
          );
        }
        function e(t, e) {
          for (var n = 0; n < e.length; n++) {
            var r = e[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              'value' in r && (r.writable = !0),
              Object.defineProperty(t, i(r.key), r);
          }
        }
        function n(t) {
          var e = 'function' == typeof Map ? new Map() : void 0;
          return (
            (n = function (t) {
              if (
                null === t ||
                !(function (t) {
                  try {
                    return (
                      -1 !== Function.toString.call(t).indexOf('[native code]')
                    );
                  } catch (e) {
                    return 'function' == typeof t;
                  }
                })(t)
              )
                return t;
              if ('function' != typeof t)
                throw new TypeError(
                  'Super expression must either be null or a function'
                );
              if (void 0 !== e) {
                if (e.has(t)) return e.get(t);
                e.set(t, n);
              }
              function n() {
                return (function (t, e, n) {
                  if (r()) return Reflect.construct.apply(null, arguments);
                  var a = [null];
                  a.push.apply(a, e);
                  var i = new (t.bind.apply(t, a))();
                  return n && o(i, n.prototype), i;
                })(t, arguments, a(this).constructor);
              }
              return (
                (n.prototype = Object.create(t.prototype, {
                  constructor: {
                    value: n,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0,
                  },
                })),
                o(n, t)
              );
            }),
            n(t)
          );
        }
        function r() {
          try {
            var t = !Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {})
            );
          } catch (t) {}
          return (r = function () {
            return !!t;
          })();
        }
        function o(t, e) {
          return (
            (o = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (t, e) {
                  return (t.__proto__ = e), t;
                }),
            o(t, e)
          );
        }
        function a(t) {
          return (
            (a = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (t) {
                  return t.__proto__ || Object.getPrototypeOf(t);
                }),
            a(t)
          );
        }
        function i(e) {
          var n = (function (e) {
            if ('object' != t(e) || !e) return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 !== n) {
              var r = n.call(e, 'string');
              if ('object' != t(r)) return r;
              throw new TypeError(
                '@@toPrimitive must return a primitive value.'
              );
            }
            return String(e);
          })(e);
          return 'symbol' == t(n) ? n : n + '';
        }
        var s = (function (n) {
          function s() {
            var e, n, o, c;
            return (
              (function (t, e) {
                if (!(t instanceof e))
                  throw new TypeError('Cannot call a class as a function');
              })(this, s),
              (e = (function (e, n, o) {
                return (
                  (n = a(n)),
                  (function (e, n) {
                    if (n && ('object' == t(n) || 'function' == typeof n))
                      return n;
                    if (void 0 !== n)
                      throw new TypeError(
                        'Derived constructors may only return object or undefined'
                      );
                    return (function (t) {
                      if (void 0 === t)
                        throw new ReferenceError(
                          "this hasn't been initialised - super() hasn't been called"
                        );
                      return t;
                    })(e);
                  })(
                    e,
                    r()
                      ? Reflect.construct(n, o || [], a(e).constructor)
                      : n.apply(e, o)
                  )
                );
              })(this, s)),
              (n = e),
              (c = function (t) {
                window.dispatchEvent(
                  new CustomEvent('filter-notes', { detail: t })
                );
              }),
              (o = i((o = 'handleShowNotes'))) in n
                ? Object.defineProperty(n, o, {
                    value: c,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (n[o] = c),
              (e.attachShadow({ mode: 'open' }).innerHTML =
                '\n      <style>\n        section {\n          margin-bottom: 1rem;\n          padding: 1rem; \n          padding-right: 2rem;  \n          padding-left: 2rem; \n          background: white;\n          border-radius: 8px;\n          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n          display: flex;\n          gap: 0.5rem;\n        }\n        button {\n          background-color: #6c757d;\n          color: white;\n          border: none;\n          padding: 0.5rem 1rem;\n          border-radius: 4px;\n          cursor: pointer;\n        }\n        button:hover {\n          background-color: #343a40;\n        }\n      </style>\n      <section id="note-options">\n        <button id="showNotes">Catatan Aktif</button>\n        <button id="showArchived">Catatan Arsip</button>\n      </section>\n    '),
              e
            );
          }
          return (
            (function (t, e) {
              if ('function' != typeof e && null !== e)
                throw new TypeError(
                  'Super expression must either be null or a function'
                );
              (t.prototype = Object.create(e && e.prototype, {
                constructor: { value: t, writable: !0, configurable: !0 },
              })),
                Object.defineProperty(t, 'prototype', { writable: !1 }),
                e && o(t, e);
            })(s, n),
            (c = s),
            (u = [
              {
                key: 'connectedCallback',
                value: function () {
                  var t = this;
                  this.shadowRoot
                    .getElementById('showNotes')
                    .addEventListener('click', function () {
                      return t.handleShowNotes(!1);
                    }),
                    this.shadowRoot
                      .getElementById('showArchived')
                      .addEventListener('click', function () {
                        return t.handleShowNotes(!0);
                      });
                },
              },
              {
                key: 'disconnectedCallback',
                value: function () {
                  var t = this;
                  this.shadowRoot
                    .getElementById('showNotes')
                    .removeEventListener('click', function () {
                      return t.handleShowNotes(!1);
                    }),
                    this.shadowRoot
                      .getElementById('showArchived')
                      .removeEventListener('click', function () {
                        return t.handleShowNotes(!0);
                      });
                },
              },
            ]) && e(c.prototype, u),
            Object.defineProperty(c, 'prototype', { writable: !1 }),
            c
          );
          var c, u;
        })(n(HTMLElement));
        customElements.define('note-options', s);
      },
      318: () => {
        function t(e) {
          return (
            (t =
              'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      'function' == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? 'symbol'
                      : typeof t;
                  }),
            t(e)
          );
        }
        function e(t, e) {
          for (var n = 0; n < e.length; n++) {
            var r = e[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              'value' in r && (r.writable = !0),
              Object.defineProperty(t, i(r.key), r);
          }
        }
        function n(t) {
          var e = 'function' == typeof Map ? new Map() : void 0;
          return (
            (n = function (t) {
              if (
                null === t ||
                !(function (t) {
                  try {
                    return (
                      -1 !== Function.toString.call(t).indexOf('[native code]')
                    );
                  } catch (e) {
                    return 'function' == typeof t;
                  }
                })(t)
              )
                return t;
              if ('function' != typeof t)
                throw new TypeError(
                  'Super expression must either be null or a function'
                );
              if (void 0 !== e) {
                if (e.has(t)) return e.get(t);
                e.set(t, n);
              }
              function n() {
                return (function (t, e, n) {
                  if (r()) return Reflect.construct.apply(null, arguments);
                  var a = [null];
                  a.push.apply(a, e);
                  var i = new (t.bind.apply(t, a))();
                  return n && o(i, n.prototype), i;
                })(t, arguments, a(this).constructor);
              }
              return (
                (n.prototype = Object.create(t.prototype, {
                  constructor: {
                    value: n,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0,
                  },
                })),
                o(n, t)
              );
            }),
            n(t)
          );
        }
        function r() {
          try {
            var t = !Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {})
            );
          } catch (t) {}
          return (r = function () {
            return !!t;
          })();
        }
        function o(t, e) {
          return (
            (o = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (t, e) {
                  return (t.__proto__ = e), t;
                }),
            o(t, e)
          );
        }
        function a(t) {
          return (
            (a = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (t) {
                  return t.__proto__ || Object.getPrototypeOf(t);
                }),
            a(t)
          );
        }
        function i(e) {
          var n = (function (e) {
            if ('object' != t(e) || !e) return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 !== n) {
              var r = n.call(e, 'string');
              if ('object' != t(r)) return r;
              throw new TypeError(
                '@@toPrimitive must return a primitive value.'
              );
            }
            return String(e);
          })(e);
          return 'symbol' == t(n) ? n : n + '';
        }
        var s = (function (n) {
          function s() {
            var e, n, o, c;
            return (
              (function (t, e) {
                if (!(t instanceof e))
                  throw new TypeError('Cannot call a class as a function');
              })(this, s),
              (e = (function (e, n, o) {
                return (
                  (n = a(n)),
                  (function (e, n) {
                    if (n && ('object' == t(n) || 'function' == typeof n))
                      return n;
                    if (void 0 !== n)
                      throw new TypeError(
                        'Derived constructors may only return object or undefined'
                      );
                    return (function (t) {
                      if (void 0 === t)
                        throw new ReferenceError(
                          "this hasn't been initialised - super() hasn't been called"
                        );
                      return t;
                    })(e);
                  })(
                    e,
                    r()
                      ? Reflect.construct(n, o || [], a(e).constructor)
                      : n.apply(e, o)
                  )
                );
              })(this, s)),
              (n = e),
              (c = function () {
                window.dispatchEvent(
                  new CustomEvent('search-note', {
                    detail: e.shadowRoot
                      .getElementById('searchInput')
                      .value.toLowerCase(),
                  })
                );
              }),
              (o = i((o = 'handleSearchInput'))) in n
                ? Object.defineProperty(n, o, {
                    value: c,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (n[o] = c),
              (e.attachShadow({ mode: 'open' }).innerHTML =
                '\n      <style>\n        section {\n          margin-bottom: 1rem;\n          padding: 1rem; \n          padding-right: 2rem;  \n          padding-left: 2rem; \n          background: white;\n          border-radius: 8px;\n          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n        }\n        input[type="text"] {\n          width: calc(100% - 1rem);\n          padding: 0.5rem;\n          margin-bottom: 0.5rem;\n          border: 1px solid #ccc;\n          border-radius: 4px;\n        }\n      </style>\n      <section id="search">\n        <h2>Pencarian Catatan</h2>\n        <input type="text" id="searchInput" placeholder="Cari berdasarkan judul atau isi">\n      </section>\n    '),
              e
            );
          }
          return (
            (function (t, e) {
              if ('function' != typeof e && null !== e)
                throw new TypeError(
                  'Super expression must either be null or a function'
                );
              (t.prototype = Object.create(e && e.prototype, {
                constructor: { value: t, writable: !0, configurable: !0 },
              })),
                Object.defineProperty(t, 'prototype', { writable: !1 }),
                e && o(t, e);
            })(s, n),
            (c = s),
            (u = [
              {
                key: 'connectedCallback',
                value: function () {
                  this.shadowRoot
                    .getElementById('searchInput')
                    .addEventListener('input', this.handleSearchInput);
                },
              },
              {
                key: 'disconnectedCallback',
                value: function () {
                  this.shadowRoot
                    .getElementById('searchInput')
                    .removeEventListener('input', this.handleSearchInput);
                },
              },
            ]) && e(c.prototype, u),
            Object.defineProperty(c, 'prototype', { writable: !1 }),
            c
          );
          var c, u;
        })(n(HTMLElement));
        customElements.define('search-note', s);
      },
      159: (t, e, n) => {
        'use strict';
        n.d(e, { A: () => s });
        var r = n(601),
          o = n.n(r),
          a = n(314),
          i = n.n(a)()(o());
        i.push([
          t.id,
          "body {\n    font-family: 'Roboto', sans-serif;\n    background-color: #f0f4f8;\n    margin: 0;\n    padding: 0;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    min-height: 100vh;\n}\n\nheader {\n    background-color: #6c757d;\n    color: white;\n    padding: 1rem;\n    width: 100%;\n    text-align: center;\n}\n\nmain {\n    width: 90%;\n    max-width: 1200px;\n    padding: 1rem;\n    margin-top: 1rem;\n    margin-bottom: 5rem;\n    flex: 1;\n}\n\n#notesContainer {\n    display: grid;\n    gap: 1rem;\n    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n}\n\n.note {\n    background-color: white;\n    padding: 1rem;\n    border-radius: 8px;\n    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);\n    display: grid;\n    grid-template-rows: auto 1fr auto;\n    min-height: 200px;\n    box-sizing: border-box;\n    overflow: hidden;\n    text-overflow: ellipsis;\n}\n\n.note-header h3 {\n    font-family: 'serif';\n    background-color: #f0f0f0;\n    padding: 8px;\n    border-radius: 8px;\n    margin: 0;\n    color: #6c757d;\n    border-bottom: 2px solid #6c757d;\n    text-align: center;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n}\n\n.note-body {\n    margin: 16px 0;\n    border-top: 1px solid #ccc;\n    padding-top: 16px;\n    box-sizing: border-box;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n}\n\n.note-footer {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    margin-top: 16px;\n}\n\n.note-id {\n    font-family: 'Serif';\n    font-size: 0.8em;\n    border: 1px solid #ddd;\n    padding: 4px 8px;\n    border-radius: 8px;\n}\n\n.note-date {\n    font-family: 'Serif';\n    font-size: 0.8em;\n}\n\n.note-buttons {\n    display: flex;\n    gap: 0.5rem;\n}\n\n.note-buttons button {\n    background: none;\n    border: none;\n    cursor: pointer;\n    font-size: 1.2em;\n    color: #6c757d;\n}\n\n.note-buttons button:hover {\n    color: #5a6268;\n}\n\nfooter {\n    background-color: #333;\n    color: white;\n    padding: 2rem;\n    text-align: center;\n    width: 100%;\n    position: relative;\n}\n\n.footer-container {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    max-width: 1200px;\n    margin: 0 auto;\n}\n\n.footer-section {\n    flex: 1;\n    min-width: 200px;\n    padding: 1rem;\n}\n\n.footer-section h4 {\n    margin-top: 0;\n}\n\n.footer-section a {\n    color: #fff;\n    text-decoration: none;\n    display: block;\n    margin: 0.5rem 0;\n}\n\n.footer-section a:hover {\n    text-decoration: underline;\n}\n\n@media (max-width: 600px) {\n    #notesContainer {\n        grid-template-columns: 1fr;\n    }\n\n    .note {\n        padding: 0.5rem;\n        min-height: 150px;\n    }\n\n    .footer-container {\n        flex-direction: column;\n        align-items: center;\n    }\n}\n",
          '',
        ]);
        const s = i;
      },
      314: (t) => {
        'use strict';
        t.exports = function (t) {
          var e = [];
          return (
            (e.toString = function () {
              return this.map(function (e) {
                var n = '',
                  r = void 0 !== e[5];
                return (
                  e[4] && (n += '@supports ('.concat(e[4], ') {')),
                  e[2] && (n += '@media '.concat(e[2], ' {')),
                  r &&
                    (n += '@layer'.concat(
                      e[5].length > 0 ? ' '.concat(e[5]) : '',
                      ' {'
                    )),
                  (n += t(e)),
                  r && (n += '}'),
                  e[2] && (n += '}'),
                  e[4] && (n += '}'),
                  n
                );
              }).join('');
            }),
            (e.i = function (t, n, r, o, a) {
              'string' == typeof t && (t = [[null, t, void 0]]);
              var i = {};
              if (r)
                for (var s = 0; s < this.length; s++) {
                  var c = this[s][0];
                  null != c && (i[c] = !0);
                }
              for (var u = 0; u < t.length; u++) {
                var l = [].concat(t[u]);
                (r && i[l[0]]) ||
                  (void 0 !== a &&
                    (void 0 === l[5] ||
                      (l[1] = '@layer'
                        .concat(l[5].length > 0 ? ' '.concat(l[5]) : '', ' {')
                        .concat(l[1], '}')),
                    (l[5] = a)),
                  n &&
                    (l[2]
                      ? ((l[1] = '@media '
                          .concat(l[2], ' {')
                          .concat(l[1], '}')),
                        (l[2] = n))
                      : (l[2] = n)),
                  o &&
                    (l[4]
                      ? ((l[1] = '@supports ('
                          .concat(l[4], ') {')
                          .concat(l[1], '}')),
                        (l[4] = o))
                      : (l[4] = ''.concat(o))),
                  e.push(l));
              }
            }),
            e
          );
        };
      },
      601: (t) => {
        'use strict';
        t.exports = function (t) {
          return t[1];
        };
      },
      72: (t) => {
        'use strict';
        var e = [];
        function n(t) {
          for (var n = -1, r = 0; r < e.length; r++)
            if (e[r].identifier === t) {
              n = r;
              break;
            }
          return n;
        }
        function r(t, r) {
          for (var a = {}, i = [], s = 0; s < t.length; s++) {
            var c = t[s],
              u = r.base ? c[0] + r.base : c[0],
              l = a[u] || 0,
              d = ''.concat(u, ' ').concat(l);
            a[u] = l + 1;
            var f = n(d),
              p = {
                css: c[1],
                media: c[2],
                sourceMap: c[3],
                supports: c[4],
                layer: c[5],
              };
            if (-1 !== f) e[f].references++, e[f].updater(p);
            else {
              var h = o(p, r);
              (r.byIndex = s),
                e.splice(s, 0, { identifier: d, updater: h, references: 1 });
            }
            i.push(d);
          }
          return i;
        }
        function o(t, e) {
          var n = e.domAPI(e);
          return (
            n.update(t),
            function (e) {
              if (e) {
                if (
                  e.css === t.css &&
                  e.media === t.media &&
                  e.sourceMap === t.sourceMap &&
                  e.supports === t.supports &&
                  e.layer === t.layer
                )
                  return;
                n.update((t = e));
              } else n.remove();
            }
          );
        }
        t.exports = function (t, o) {
          var a = r((t = t || []), (o = o || {}));
          return function (t) {
            t = t || [];
            for (var i = 0; i < a.length; i++) {
              var s = n(a[i]);
              e[s].references--;
            }
            for (var c = r(t, o), u = 0; u < a.length; u++) {
              var l = n(a[u]);
              0 === e[l].references && (e[l].updater(), e.splice(l, 1));
            }
            a = c;
          };
        };
      },
      659: (t) => {
        'use strict';
        var e = {};
        t.exports = function (t, n) {
          var r = (function (t) {
            if (void 0 === e[t]) {
              var n = document.querySelector(t);
              if (
                window.HTMLIFrameElement &&
                n instanceof window.HTMLIFrameElement
              )
                try {
                  n = n.contentDocument.head;
                } catch (t) {
                  n = null;
                }
              e[t] = n;
            }
            return e[t];
          })(t);
          if (!r)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
            );
          r.appendChild(n);
        };
      },
      540: (t) => {
        'use strict';
        t.exports = function (t) {
          var e = document.createElement('style');
          return t.setAttributes(e, t.attributes), t.insert(e, t.options), e;
        };
      },
      56: (t, e, n) => {
        'use strict';
        t.exports = function (t) {
          var e = n.nc;
          e && t.setAttribute('nonce', e);
        };
      },
      825: (t) => {
        'use strict';
        t.exports = function (t) {
          if ('undefined' == typeof document)
            return { update: function () {}, remove: function () {} };
          var e = t.insertStyleElement(t);
          return {
            update: function (n) {
              !(function (t, e, n) {
                var r = '';
                n.supports && (r += '@supports ('.concat(n.supports, ') {')),
                  n.media && (r += '@media '.concat(n.media, ' {'));
                var o = void 0 !== n.layer;
                o &&
                  (r += '@layer'.concat(
                    n.layer.length > 0 ? ' '.concat(n.layer) : '',
                    ' {'
                  )),
                  (r += n.css),
                  o && (r += '}'),
                  n.media && (r += '}'),
                  n.supports && (r += '}');
                var a = n.sourceMap;
                a &&
                  'undefined' != typeof btoa &&
                  (r +=
                    '\n/*# sourceMappingURL=data:application/json;base64,'.concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(a)))),
                      ' */'
                    )),
                  e.styleTagTransform(r, t, e.options);
              })(e, t, n);
            },
            remove: function () {
              !(function (t) {
                if (null === t.parentNode) return !1;
                t.parentNode.removeChild(t);
              })(e);
            },
          };
        };
      },
      113: (t) => {
        'use strict';
        t.exports = function (t, e) {
          if (e.styleSheet) e.styleSheet.cssText = t;
          else {
            for (; e.firstChild; ) e.removeChild(e.firstChild);
            e.appendChild(document.createTextNode(t));
          }
        };
      },
      465: function (t) {
        (t.exports = (function () {
          'use strict';
          function t(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
            return r;
          }
          function e(t, e, n) {
            if ('function' == typeof t ? t === e : t.has(e))
              return arguments.length < 3 ? e : n;
            throw new TypeError(
              'Private element is not present on this object'
            );
          }
          function n(t, e, n) {
            return (
              (e = c(e)),
              (function (t, e) {
                if (e && ('object' == typeof e || 'function' == typeof e))
                  return e;
                if (void 0 !== e)
                  throw new TypeError(
                    'Derived constructors may only return object or undefined'
                  );
                return (function (t) {
                  if (void 0 === t)
                    throw new ReferenceError(
                      "this hasn't been initialised - super() hasn't been called"
                    );
                  return t;
                })(t);
              })(
                t,
                u()
                  ? Reflect.construct(e, n || [], c(t).constructor)
                  : e.apply(t, n)
              )
            );
          }
          function r(t, e) {
            if (!(t instanceof e))
              throw new TypeError('Cannot call a class as a function');
          }
          function o(t, n) {
            return t.get(e(t, n));
          }
          function a(t, e, n) {
            (function (t, e) {
              if (e.has(t))
                throw new TypeError(
                  'Cannot initialize the same private elements twice on an object'
                );
            })(t, e),
              e.set(t, n);
          }
          function i(t, e, n) {
            return (
              e &&
                (function (t, e) {
                  for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    (r.enumerable = r.enumerable || !1),
                      (r.configurable = !0),
                      'value' in r && (r.writable = !0),
                      Object.defineProperty(t, p(r.key), r);
                  }
                })(t.prototype, e),
              Object.defineProperty(t, 'prototype', { writable: !1 }),
              t
            );
          }
          function s() {
            return (
              (s =
                'undefined' != typeof Reflect && Reflect.get
                  ? Reflect.get.bind()
                  : function (t, e, n) {
                      var r = (function (t, e) {
                        for (
                          ;
                          !{}.hasOwnProperty.call(t, e) && null !== (t = c(t));

                        );
                        return t;
                      })(t, e);
                      if (r) {
                        var o = Object.getOwnPropertyDescriptor(r, e);
                        return o.get
                          ? o.get.call(arguments.length < 3 ? t : n)
                          : o.value;
                      }
                    }),
              s.apply(null, arguments)
            );
          }
          function c(t) {
            return (
              (c = Object.setPrototypeOf
                ? Object.getPrototypeOf.bind()
                : function (t) {
                    return t.__proto__ || Object.getPrototypeOf(t);
                  }),
              c(t)
            );
          }
          function u() {
            try {
              var t = !Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              );
            } catch (t) {}
            return (u = function () {
              return !!t;
            })();
          }
          function l(t, e) {
            return (
              (l = Object.setPrototypeOf
                ? Object.setPrototypeOf.bind()
                : function (t, e) {
                    return (t.__proto__ = e), t;
                  }),
              l(t, e)
            );
          }
          function d(t, e) {
            return (
              (function (t) {
                if (Array.isArray(t)) return t;
              })(t) ||
              (function (t, e) {
                var n =
                  null == t
                    ? null
                    : ('undefined' != typeof Symbol && t[Symbol.iterator]) ||
                      t['@@iterator'];
                if (null != n) {
                  var r,
                    o,
                    a,
                    i,
                    s = [],
                    c = !0,
                    u = !1;
                  try {
                    if (((a = (n = n.call(t)).next), 0 === e));
                    else
                      for (
                        ;
                        !(c = (r = a.call(n)).done) &&
                        (s.push(r.value), s.length !== e);
                        c = !0
                      );
                  } catch (t) {
                    (u = !0), (o = t);
                  } finally {
                    try {
                      if (
                        !c &&
                        null != n.return &&
                        ((i = n.return()), Object(i) !== i)
                      )
                        return;
                    } finally {
                      if (u) throw o;
                    }
                  }
                  return s;
                }
              })(t, e) ||
              m(t, e) ||
              (function () {
                throw new TypeError(
                  'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
                );
              })()
            );
          }
          function f(e) {
            return (
              (function (e) {
                if (Array.isArray(e)) return t(e);
              })(e) ||
              (function (t) {
                if (
                  ('undefined' != typeof Symbol &&
                    null != t[Symbol.iterator]) ||
                  null != t['@@iterator']
                )
                  return Array.from(t);
              })(e) ||
              m(e) ||
              (function () {
                throw new TypeError(
                  'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
                );
              })()
            );
          }
          function p(t) {
            var e = (function (t, e) {
              if ('object' != typeof t || !t) return t;
              var n = t[Symbol.toPrimitive];
              if (void 0 !== n) {
                var r = n.call(t, e);
                if ('object' != typeof r) return r;
                throw new TypeError(
                  '@@toPrimitive must return a primitive value.'
                );
              }
              return String(t);
            })(t, 'string');
            return 'symbol' == typeof e ? e : e + '';
          }
          function h(t) {
            return (
              (h =
                'function' == typeof Symbol &&
                'symbol' == typeof Symbol.iterator
                  ? function (t) {
                      return typeof t;
                    }
                  : function (t) {
                      return t &&
                        'function' == typeof Symbol &&
                        t.constructor === Symbol &&
                        t !== Symbol.prototype
                        ? 'symbol'
                        : typeof t;
                    }),
              h(t)
            );
          }
          function m(e, n) {
            if (e) {
              if ('string' == typeof e) return t(e, n);
              var r = {}.toString.call(e).slice(8, -1);
              return (
                'Object' === r && e.constructor && (r = e.constructor.name),
                'Map' === r || 'Set' === r
                  ? Array.from(e)
                  : 'Arguments' === r ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                    ? t(e, n)
                    : void 0
              );
            }
          }
          var w = {},
            v = function (t) {
              return new Promise(function (e) {
                if (!t) return e();
                var n = window.scrollX,
                  r = window.scrollY;
                (w.restoreFocusTimeout = setTimeout(function () {
                  w.previousActiveElement instanceof HTMLElement
                    ? (w.previousActiveElement.focus(),
                      (w.previousActiveElement = null))
                    : document.body && document.body.focus(),
                    e();
                }, 100)),
                  window.scrollTo(n, r);
              });
            },
            g = 'swal2-',
            y = [
              'container',
              'shown',
              'height-auto',
              'iosfix',
              'popup',
              'modal',
              'no-backdrop',
              'no-transition',
              'toast',
              'toast-shown',
              'show',
              'hide',
              'close',
              'title',
              'html-container',
              'actions',
              'confirm',
              'deny',
              'cancel',
              'default-outline',
              'footer',
              'icon',
              'icon-content',
              'image',
              'input',
              'file',
              'range',
              'select',
              'radio',
              'checkbox',
              'label',
              'textarea',
              'inputerror',
              'input-label',
              'validation-message',
              'progress-steps',
              'active-progress-step',
              'progress-step',
              'progress-step-line',
              'loader',
              'loading',
              'styled',
              'top',
              'top-start',
              'top-end',
              'top-left',
              'top-right',
              'center',
              'center-start',
              'center-end',
              'center-left',
              'center-right',
              'bottom',
              'bottom-start',
              'bottom-end',
              'bottom-left',
              'bottom-right',
              'grow-row',
              'grow-column',
              'grow-fullscreen',
              'rtl',
              'timer-progress-bar',
              'timer-progress-bar-container',
              'scrollbar-measure',
              'icon-success',
              'icon-warning',
              'icon-info',
              'icon-question',
              'icon-error',
            ].reduce(function (t, e) {
              return (t[e] = g + e), t;
            }, {}),
            b = ['success', 'warning', 'info', 'question', 'error'].reduce(
              function (t, e) {
                return (t[e] = g + e), t;
              },
              {}
            ),
            x = 'SweetAlert2:',
            k = function (t) {
              return t.charAt(0).toUpperCase() + t.slice(1);
            },
            E = function (t) {
              console.warn(
                ''.concat(x, ' ').concat('object' === h(t) ? t.join(' ') : t)
              );
            },
            C = function (t) {
              console.error(''.concat(x, ' ').concat(t));
            },
            S = [],
            O = function (t) {
              var e,
                n =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : null;
              (e = '"'
                .concat(
                  t,
                  '" is deprecated and will be removed in the next major release.'
                )
                .concat(n ? ' Use "'.concat(n, '" instead.') : '')),
                S.includes(e) || (S.push(e), E(e));
            },
            L = function (t) {
              return 'function' == typeof t ? t() : t;
            },
            P = function (t) {
              return t && 'function' == typeof t.toPromise;
            },
            j = function (t) {
              return P(t) ? t.toPromise() : Promise.resolve(t);
            },
            A = function (t) {
              return t && Promise.resolve(t) === t;
            },
            T = function () {
              return document.body.querySelector('.'.concat(y.container));
            },
            B = function (t) {
              var e = T();
              return e ? e.querySelector(t) : null;
            },
            M = function (t) {
              return B('.'.concat(t));
            },
            I = function () {
              return M(y.popup);
            },
            _ = function () {
              return M(y.icon);
            },
            N = function () {
              return M(y.title);
            },
            D = function () {
              return M(y['html-container']);
            },
            H = function () {
              return M(y.image);
            },
            q = function () {
              return M(y['progress-steps']);
            },
            R = function () {
              return M(y['validation-message']);
            },
            z = function () {
              return B('.'.concat(y.actions, ' .').concat(y.confirm));
            },
            F = function () {
              return B('.'.concat(y.actions, ' .').concat(y.cancel));
            },
            V = function () {
              return B('.'.concat(y.actions, ' .').concat(y.deny));
            },
            G = function () {
              return B('.'.concat(y.loader));
            },
            U = function () {
              return M(y.actions);
            },
            Y = function () {
              return M(y.footer);
            },
            $ = function () {
              return M(y['timer-progress-bar']);
            },
            W = function () {
              return M(y.close);
            },
            Z = function () {
              var t = I();
              if (!t) return [];
              var e = t.querySelectorAll(
                  '[tabindex]:not([tabindex="-1"]):not([tabindex="0"])'
                ),
                n = Array.from(e).sort(function (t, e) {
                  var n = parseInt(t.getAttribute('tabindex') || '0'),
                    r = parseInt(e.getAttribute('tabindex') || '0');
                  return n > r ? 1 : n < r ? -1 : 0;
                }),
                r = t.querySelectorAll(
                  '\n  a[href],\n  area[href],\n  input:not([disabled]),\n  select:not([disabled]),\n  textarea:not([disabled]),\n  button:not([disabled]),\n  iframe,\n  object,\n  embed,\n  [tabindex="0"],\n  [contenteditable],\n  audio[controls],\n  video[controls],\n  summary\n'
                ),
                o = Array.from(r).filter(function (t) {
                  return '-1' !== t.getAttribute('tabindex');
                });
              return f(new Set(n.concat(o))).filter(function (t) {
                return pt(t);
              });
            },
            K = function () {
              return (
                Q(document.body, y.shown) &&
                !Q(document.body, y['toast-shown']) &&
                !Q(document.body, y['no-backdrop'])
              );
            },
            X = function () {
              var t = I();
              return !!t && Q(t, y.toast);
            },
            J = function (t, e) {
              if (((t.textContent = ''), e)) {
                var n = new DOMParser().parseFromString(e, 'text/html'),
                  r = n.querySelector('head');
                r &&
                  Array.from(r.childNodes).forEach(function (e) {
                    t.appendChild(e);
                  });
                var o = n.querySelector('body');
                o &&
                  Array.from(o.childNodes).forEach(function (e) {
                    e instanceof HTMLVideoElement ||
                    e instanceof HTMLAudioElement
                      ? t.appendChild(e.cloneNode(!0))
                      : t.appendChild(e);
                  });
              }
            },
            Q = function (t, e) {
              if (!e) return !1;
              for (var n = e.split(/\s+/), r = 0; r < n.length; r++)
                if (!t.classList.contains(n[r])) return !1;
              return !0;
            },
            tt = function (t, e, n) {
              if (
                ((function (t, e) {
                  Array.from(t.classList).forEach(function (n) {
                    Object.values(y).includes(n) ||
                      Object.values(b).includes(n) ||
                      Object.values(e.showClass || {}).includes(n) ||
                      t.classList.remove(n);
                  });
                })(t, e),
                e.customClass)
              ) {
                var r = e.customClass[n];
                r &&
                  ('string' == typeof r || r.forEach
                    ? ot(t, r)
                    : E(
                        'Invalid type of customClass.'
                          .concat(
                            n,
                            '! Expected string or iterable object, got "'
                          )
                          .concat(h(r), '"')
                      ));
              }
            },
            et = function (t, e) {
              if (!e) return null;
              switch (e) {
                case 'select':
                case 'textarea':
                case 'file':
                  return t.querySelector(
                    '.'.concat(y.popup, ' > .').concat(y[e])
                  );
                case 'checkbox':
                  return t.querySelector(
                    '.'.concat(y.popup, ' > .').concat(y.checkbox, ' input')
                  );
                case 'radio':
                  return (
                    t.querySelector(
                      '.'
                        .concat(y.popup, ' > .')
                        .concat(y.radio, ' input:checked')
                    ) ||
                    t.querySelector(
                      '.'
                        .concat(y.popup, ' > .')
                        .concat(y.radio, ' input:first-child')
                    )
                  );
                case 'range':
                  return t.querySelector(
                    '.'.concat(y.popup, ' > .').concat(y.range, ' input')
                  );
                default:
                  return t.querySelector(
                    '.'.concat(y.popup, ' > .').concat(y.input)
                  );
              }
            },
            nt = function (t) {
              if ((t.focus(), 'file' !== t.type)) {
                var e = t.value;
                (t.value = ''), (t.value = e);
              }
            },
            rt = function (t, e, n) {
              t &&
                e &&
                ('string' == typeof e && (e = e.split(/\s+/).filter(Boolean)),
                e.forEach(function (e) {
                  Array.isArray(t)
                    ? t.forEach(function (t) {
                        n ? t.classList.add(e) : t.classList.remove(e);
                      })
                    : n
                      ? t.classList.add(e)
                      : t.classList.remove(e);
                }));
            },
            ot = function (t, e) {
              rt(t, e, !0);
            },
            at = function (t, e) {
              rt(t, e, !1);
            },
            it = function (t, e) {
              for (var n = Array.from(t.children), r = 0; r < n.length; r++) {
                var o = n[r];
                if (o instanceof HTMLElement && Q(o, e)) return o;
              }
            },
            st = function (t, e, n) {
              n === ''.concat(parseInt(n)) && (n = parseInt(n)),
                n || 0 === parseInt(n)
                  ? t.style.setProperty(
                      e,
                      'number' == typeof n ? ''.concat(n, 'px') : n
                    )
                  : t.style.removeProperty(e);
            },
            ct = function (t) {
              var e =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : 'flex';
              t && (t.style.display = e);
            },
            ut = function (t) {
              t && (t.style.display = 'none');
            },
            lt = function (t) {
              var e =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : 'block';
              t &&
                new MutationObserver(function () {
                  ft(t, t.innerHTML, e);
                }).observe(t, { childList: !0, subtree: !0 });
            },
            dt = function (t, e, n, r) {
              var o = t.querySelector(e);
              o && o.style.setProperty(n, r);
            },
            ft = function (t, e) {
              e
                ? ct(
                    t,
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : 'flex'
                  )
                : ut(t);
            },
            pt = function (t) {
              return !(
                !t ||
                !(t.offsetWidth || t.offsetHeight || t.getClientRects().length)
              );
            },
            ht = function (t) {
              return !!(t.scrollHeight > t.clientHeight);
            },
            mt = function (t) {
              var e = window.getComputedStyle(t),
                n = parseFloat(e.getPropertyValue('animation-duration') || '0'),
                r = parseFloat(
                  e.getPropertyValue('transition-duration') || '0'
                );
              return n > 0 || r > 0;
            },
            wt = function (t) {
              var e =
                  arguments.length > 1 &&
                  void 0 !== arguments[1] &&
                  arguments[1],
                n = $();
              n &&
                pt(n) &&
                (e && ((n.style.transition = 'none'), (n.style.width = '100%')),
                setTimeout(function () {
                  (n.style.transition = 'width '.concat(t / 1e3, 's linear')),
                    (n.style.width = '0%');
                }, 10));
            },
            vt = function () {
              return (
                'undefined' == typeof window || 'undefined' == typeof document
              );
            },
            gt = '\n <div aria-labelledby="'
              .concat(y.title, '" aria-describedby="')
              .concat(y['html-container'], '" class="')
              .concat(
                y.popup,
                '" tabindex="-1">\n   <button type="button" class="'
              )
              .concat(y.close, '"></button>\n   <ul class="')
              .concat(y['progress-steps'], '"></ul>\n   <div class="')
              .concat(y.icon, '"></div>\n   <img class="')
              .concat(y.image, '" />\n   <h2 class="')
              .concat(y.title, '" id="')
              .concat(y.title, '"></h2>\n   <div class="')
              .concat(y['html-container'], '" id="')
              .concat(y['html-container'], '"></div>\n   <input class="')
              .concat(y.input, '" id="')
              .concat(y.input, '" />\n   <input type="file" class="')
              .concat(y.file, '" />\n   <div class="')
              .concat(
                y.range,
                '">\n     <input type="range" />\n     <output></output>\n   </div>\n   <select class="'
              )
              .concat(y.select, '" id="')
              .concat(y.select, '"></select>\n   <div class="')
              .concat(y.radio, '"></div>\n   <label class="')
              .concat(y.checkbox, '">\n     <input type="checkbox" id="')
              .concat(y.checkbox, '" />\n     <span class="')
              .concat(y.label, '"></span>\n   </label>\n   <textarea class="')
              .concat(y.textarea, '" id="')
              .concat(y.textarea, '"></textarea>\n   <div class="')
              .concat(y['validation-message'], '" id="')
              .concat(y['validation-message'], '"></div>\n   <div class="')
              .concat(y.actions, '">\n     <div class="')
              .concat(y.loader, '"></div>\n     <button type="button" class="')
              .concat(
                y.confirm,
                '"></button>\n     <button type="button" class="'
              )
              .concat(y.deny, '"></button>\n     <button type="button" class="')
              .concat(y.cancel, '"></button>\n   </div>\n   <div class="')
              .concat(y.footer, '"></div>\n   <div class="')
              .concat(
                y['timer-progress-bar-container'],
                '">\n     <div class="'
              )
              .concat(y['timer-progress-bar'], '"></div>\n   </div>\n </div>\n')
              .replace(/(^|\n)\s*/g, ''),
            yt = function () {
              w.currentInstance.resetValidationMessage();
            },
            bt = function (t) {
              var e,
                n,
                r,
                o,
                a,
                i,
                s,
                c,
                u,
                l,
                d =
                  !!(e = T()) &&
                  (e.remove(),
                  at(
                    [document.documentElement, document.body],
                    [y['no-backdrop'], y['toast-shown'], y['has-column']]
                  ),
                  !0);
              if (vt()) C('SweetAlert2 requires document to initialize');
              else {
                var f = document.createElement('div');
                (f.className = y.container),
                  d && ot(f, y['no-transition']),
                  J(f, gt);
                var p =
                  'string' == typeof (l = t.target)
                    ? document.querySelector(l)
                    : l;
                p.appendChild(f),
                  (function (t) {
                    var e = I();
                    e.setAttribute('role', t.toast ? 'alert' : 'dialog'),
                      e.setAttribute(
                        'aria-live',
                        t.toast ? 'polite' : 'assertive'
                      ),
                      t.toast || e.setAttribute('aria-modal', 'true');
                  })(t),
                  (function (t) {
                    'rtl' === window.getComputedStyle(t).direction &&
                      ot(T(), y.rtl);
                  })(p),
                  (n = I()),
                  (r = it(n, y.input)),
                  (o = it(n, y.file)),
                  (a = n.querySelector('.'.concat(y.range, ' input'))),
                  (i = n.querySelector('.'.concat(y.range, ' output'))),
                  (s = it(n, y.select)),
                  (c = n.querySelector('.'.concat(y.checkbox, ' input'))),
                  (u = it(n, y.textarea)),
                  (r.oninput = yt),
                  (o.onchange = yt),
                  (s.onchange = yt),
                  (c.onchange = yt),
                  (u.oninput = yt),
                  (a.oninput = function () {
                    yt(), (i.value = a.value);
                  }),
                  (a.onchange = function () {
                    yt(), (i.value = a.value);
                  });
              }
            },
            xt = function (t, e) {
              t instanceof HTMLElement
                ? e.appendChild(t)
                : 'object' === h(t)
                  ? kt(t, e)
                  : t && J(e, t);
            },
            kt = function (t, e) {
              t.jquery ? Et(e, t) : J(e, t.toString());
            },
            Et = function (t, e) {
              if (((t.textContent = ''), 0 in e))
                for (var n = 0; n in e; n++) t.appendChild(e[n].cloneNode(!0));
              else t.appendChild(e.cloneNode(!0));
            },
            Ct = (function () {
              if (vt()) return !1;
              var t = document.createElement('div');
              return void 0 !== t.style.webkitAnimation
                ? 'webkitAnimationEnd'
                : void 0 !== t.style.animation && 'animationend';
            })(),
            St = function (t, e) {
              var n = U(),
                r = G();
              n &&
                r &&
                (e.showConfirmButton || e.showDenyButton || e.showCancelButton
                  ? ct(n)
                  : ut(n),
                tt(n, e, 'actions'),
                (function (t, e, n) {
                  var r = z(),
                    o = V(),
                    a = F();
                  r &&
                    o &&
                    a &&
                    (Ot(r, 'confirm', n),
                    Ot(o, 'deny', n),
                    Ot(a, 'cancel', n),
                    (function (t, e, n, r) {
                      r.buttonsStyling
                        ? (ot([t, e, n], y.styled),
                          r.confirmButtonColor &&
                            ((t.style.backgroundColor = r.confirmButtonColor),
                            ot(t, y['default-outline'])),
                          r.denyButtonColor &&
                            ((e.style.backgroundColor = r.denyButtonColor),
                            ot(e, y['default-outline'])),
                          r.cancelButtonColor &&
                            ((n.style.backgroundColor = r.cancelButtonColor),
                            ot(n, y['default-outline'])))
                        : at([t, e, n], y.styled);
                    })(r, o, a, n),
                    n.reverseButtons &&
                      (n.toast
                        ? (t.insertBefore(a, r), t.insertBefore(o, r))
                        : (t.insertBefore(a, e),
                          t.insertBefore(o, e),
                          t.insertBefore(r, e))));
                })(n, r, e),
                J(r, e.loaderHtml || ''),
                tt(r, e, 'loader'));
            };
          function Ot(t, e, n) {
            var r = k(e);
            ft(t, n['show'.concat(r, 'Button')], 'inline-block'),
              J(t, n[''.concat(e, 'ButtonText')] || ''),
              t.setAttribute(
                'aria-label',
                n[''.concat(e, 'ButtonAriaLabel')] || ''
              ),
              (t.className = y[e]),
              tt(t, n, ''.concat(e, 'Button'));
          }
          var Lt = function (t, e) {
            var n = T();
            n &&
              ((function (t, e) {
                'string' == typeof e
                  ? (t.style.background = e)
                  : e ||
                    ot(
                      [document.documentElement, document.body],
                      y['no-backdrop']
                    );
              })(n, e.backdrop),
              (function (t, e) {
                e &&
                  (e in y
                    ? ot(t, y[e])
                    : (E(
                        'The "position" parameter is not valid, defaulting to "center"'
                      ),
                      ot(t, y.center)));
              })(n, e.position),
              (function (t, e) {
                e && ot(t, y['grow-'.concat(e)]);
              })(n, e.grow),
              tt(n, e, 'container'));
          };
          var Pt = { innerParams: new WeakMap(), domCache: new WeakMap() },
            jt = [
              'input',
              'file',
              'range',
              'select',
              'radio',
              'checkbox',
              'textarea',
            ],
            At = function (t) {
              if (t.input)
                if (Dt[t.input]) {
                  var e = _t(t.input);
                  if (e) {
                    var n = Dt[t.input](e, t);
                    ct(e),
                      t.inputAutoFocus &&
                        setTimeout(function () {
                          nt(n);
                        });
                  }
                } else
                  C(
                    'Unexpected type of input! Expected '
                      .concat(Object.keys(Dt).join(' | '), ', got "')
                      .concat(t.input, '"')
                  );
            },
            Tt = function (t, e) {
              var n = I();
              if (n) {
                var r = et(n, t);
                if (r)
                  for (var o in ((function (t) {
                    for (var e = 0; e < t.attributes.length; e++) {
                      var n = t.attributes[e].name;
                      ['id', 'type', 'value', 'style'].includes(n) ||
                        t.removeAttribute(n);
                    }
                  })(r),
                  e))
                    r.setAttribute(o, e[o]);
              }
            },
            Bt = function (t) {
              if (t.input) {
                var e = _t(t.input);
                e && tt(e, t, 'input');
              }
            },
            Mt = function (t, e) {
              !t.placeholder &&
                e.inputPlaceholder &&
                (t.placeholder = e.inputPlaceholder);
            },
            It = function (t, e, n) {
              if (n.inputLabel) {
                var r = document.createElement('label'),
                  o = y['input-label'];
                r.setAttribute('for', t.id),
                  (r.className = o),
                  'object' === h(n.customClass) &&
                    ot(r, n.customClass.inputLabel),
                  (r.innerText = n.inputLabel),
                  e.insertAdjacentElement('beforebegin', r);
              }
            },
            _t = function (t) {
              var e = I();
              if (e) return it(e, y[t] || y.input);
            },
            Nt = function (t, e) {
              ['string', 'number'].includes(h(e))
                ? (t.value = ''.concat(e))
                : A(e) ||
                  E(
                    'Unexpected type of inputValue! Expected "string", "number" or "Promise", got "'.concat(
                      h(e),
                      '"'
                    )
                  );
            },
            Dt = {};
          (Dt.text =
            Dt.email =
            Dt.password =
            Dt.number =
            Dt.tel =
            Dt.url =
            Dt.search =
            Dt.date =
            Dt['datetime-local'] =
            Dt.time =
            Dt.week =
            Dt.month =
              function (t, e) {
                return (
                  Nt(t, e.inputValue),
                  It(t, t, e),
                  Mt(t, e),
                  (t.type = e.input),
                  t
                );
              }),
            (Dt.file = function (t, e) {
              return It(t, t, e), Mt(t, e), t;
            }),
            (Dt.range = function (t, e) {
              var n = t.querySelector('input'),
                r = t.querySelector('output');
              return (
                Nt(n, e.inputValue),
                (n.type = e.input),
                Nt(r, e.inputValue),
                It(n, t, e),
                t
              );
            }),
            (Dt.select = function (t, e) {
              if (((t.textContent = ''), e.inputPlaceholder)) {
                var n = document.createElement('option');
                J(n, e.inputPlaceholder),
                  (n.value = ''),
                  (n.disabled = !0),
                  (n.selected = !0),
                  t.appendChild(n);
              }
              return It(t, t, e), t;
            }),
            (Dt.radio = function (t) {
              return (t.textContent = ''), t;
            }),
            (Dt.checkbox = function (t, e) {
              var n = et(I(), 'checkbox');
              (n.value = '1'), (n.checked = Boolean(e.inputValue));
              var r = t.querySelector('span');
              return J(r, e.inputPlaceholder), n;
            }),
            (Dt.textarea = function (t, e) {
              Nt(t, e.inputValue), Mt(t, e), It(t, t, e);
              return (
                setTimeout(function () {
                  if ('MutationObserver' in window) {
                    var n = parseInt(window.getComputedStyle(I()).width);
                    new MutationObserver(function () {
                      if (document.body.contains(t)) {
                        var r =
                          t.offsetWidth +
                          ((o = t),
                          parseInt(window.getComputedStyle(o).marginLeft) +
                            parseInt(window.getComputedStyle(o).marginRight));
                        r > n
                          ? (I().style.width = ''.concat(r, 'px'))
                          : st(I(), 'width', e.width);
                      }
                      var o;
                    }).observe(t, {
                      attributes: !0,
                      attributeFilter: ['style'],
                    });
                  }
                }),
                t
              );
            });
          var Ht = function (t, e) {
              var n = D();
              n &&
                (lt(n),
                tt(n, e, 'htmlContainer'),
                e.html
                  ? (xt(e.html, n), ct(n, 'block'))
                  : e.text
                    ? ((n.textContent = e.text), ct(n, 'block'))
                    : ut(n),
                (function (t, e) {
                  var n = I();
                  if (n) {
                    var r = Pt.innerParams.get(t),
                      o = !r || e.input !== r.input;
                    jt.forEach(function (t) {
                      var r = it(n, y[t]);
                      r &&
                        (Tt(t, e.inputAttributes),
                        (r.className = y[t]),
                        o && ut(r));
                    }),
                      e.input && (o && At(e), Bt(e));
                  }
                })(t, e));
            },
            qt = function (t, e) {
              for (var n = 0, r = Object.entries(b); n < r.length; n++) {
                var o = d(r[n], 2),
                  a = o[0],
                  i = o[1];
                e.icon !== a && at(t, i);
              }
              ot(t, e.icon && b[e.icon]), Ft(t, e), Rt(), tt(t, e, 'icon');
            },
            Rt = function () {
              var t = I();
              if (t)
                for (
                  var e = window
                      .getComputedStyle(t)
                      .getPropertyValue('background-color'),
                    n = t.querySelectorAll(
                      '[class^=swal2-success-circular-line], .swal2-success-fix'
                    ),
                    r = 0;
                  r < n.length;
                  r++
                )
                  n[r].style.backgroundColor = e;
            },
            zt = function (t, e) {
              if (e.icon || e.iconHtml) {
                var n = t.innerHTML,
                  r = '';
                e.iconHtml
                  ? (r = Vt(e.iconHtml))
                  : 'success' === e.icon
                    ? ((r =
                        '\n  <div class="swal2-success-circular-line-left"></div>\n  <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>\n  <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>\n  <div class="swal2-success-circular-line-right"></div>\n'),
                      (n = n.replace(/ style=".*?"/g, '')))
                    : 'error' === e.icon
                      ? (r =
                          '\n  <span class="swal2-x-mark">\n    <span class="swal2-x-mark-line-left"></span>\n    <span class="swal2-x-mark-line-right"></span>\n  </span>\n')
                      : e.icon &&
                        (r = Vt(
                          { question: '?', warning: '!', info: 'i' }[e.icon]
                        )),
                  n.trim() !== r.trim() && J(t, r);
              }
            },
            Ft = function (t, e) {
              if (e.iconColor) {
                (t.style.color = e.iconColor),
                  (t.style.borderColor = e.iconColor);
                for (
                  var n = 0,
                    r = [
                      '.swal2-success-line-tip',
                      '.swal2-success-line-long',
                      '.swal2-x-mark-line-left',
                      '.swal2-x-mark-line-right',
                    ];
                  n < r.length;
                  n++
                ) {
                  dt(t, r[n], 'background-color', e.iconColor);
                }
                dt(t, '.swal2-success-ring', 'border-color', e.iconColor);
              }
            },
            Vt = function (t) {
              return '<div class="'
                .concat(y['icon-content'], '">')
                .concat(t, '</div>');
            },
            Gt = function (t, e) {
              var n = e.showClass || {};
              (t.className = ''
                .concat(y.popup, ' ')
                .concat(pt(t) ? n.popup : '')),
                e.toast
                  ? (ot(
                      [document.documentElement, document.body],
                      y['toast-shown']
                    ),
                    ot(t, y.toast))
                  : ot(t, y.modal),
                tt(t, e, 'popup'),
                'string' == typeof e.customClass && ot(t, e.customClass),
                e.icon && ot(t, y['icon-'.concat(e.icon)]);
            },
            Ut = function (t) {
              var e = document.createElement('li');
              return ot(e, y['progress-step']), J(e, t), e;
            },
            Yt = function (t) {
              var e = document.createElement('li');
              return (
                ot(e, y['progress-step-line']),
                t.progressStepsDistance &&
                  st(e, 'width', t.progressStepsDistance),
                e
              );
            },
            $t = function (t, e) {
              (function (t, e) {
                var n = T(),
                  r = I();
                if (n && r) {
                  if (e.toast) {
                    st(n, 'width', e.width), (r.style.width = '100%');
                    var o = G();
                    o && r.insertBefore(o, _());
                  } else st(r, 'width', e.width);
                  st(r, 'padding', e.padding),
                    e.color && (r.style.color = e.color),
                    e.background && (r.style.background = e.background),
                    ut(R()),
                    Gt(r, e);
                }
              })(0, e),
                Lt(0, e),
                (function (t, e) {
                  var n = q();
                  if (n) {
                    var r = e.progressSteps,
                      o = e.currentProgressStep;
                    r && 0 !== r.length && void 0 !== o
                      ? (ct(n),
                        (n.textContent = ''),
                        o >= r.length &&
                          E(
                            'Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)'
                          ),
                        r.forEach(function (t, a) {
                          var i = Ut(t);
                          if (
                            (n.appendChild(i),
                            a === o && ot(i, y['active-progress-step']),
                            a !== r.length - 1)
                          ) {
                            var s = Yt(e);
                            n.appendChild(s);
                          }
                        }))
                      : ut(n);
                  }
                })(0, e),
                (function (t, e) {
                  var n = Pt.innerParams.get(t),
                    r = _();
                  if (r) {
                    if (n && e.icon === n.icon) return zt(r, e), void qt(r, e);
                    if (e.icon || e.iconHtml) {
                      if (e.icon && -1 === Object.keys(b).indexOf(e.icon))
                        return (
                          C(
                            'Unknown icon! Expected "success", "error", "warning", "info" or "question", got "'.concat(
                              e.icon,
                              '"'
                            )
                          ),
                          void ut(r)
                        );
                      ct(r),
                        zt(r, e),
                        qt(r, e),
                        ot(r, e.showClass && e.showClass.icon);
                    } else ut(r);
                  }
                })(t, e),
                (function (t, e) {
                  var n = H();
                  n &&
                    (e.imageUrl
                      ? (ct(n, ''),
                        n.setAttribute('src', e.imageUrl),
                        n.setAttribute('alt', e.imageAlt || ''),
                        st(n, 'width', e.imageWidth),
                        st(n, 'height', e.imageHeight),
                        (n.className = y.image),
                        tt(n, e, 'image'))
                      : ut(n));
                })(0, e),
                (function (t, e) {
                  var n = N();
                  n &&
                    (lt(n),
                    ft(n, e.title || e.titleText, 'block'),
                    e.title && xt(e.title, n),
                    e.titleText && (n.innerText = e.titleText),
                    tt(n, e, 'title'));
                })(0, e),
                (function (t, e) {
                  var n = W();
                  n &&
                    (J(n, e.closeButtonHtml || ''),
                    tt(n, e, 'closeButton'),
                    ft(n, e.showCloseButton),
                    n.setAttribute('aria-label', e.closeButtonAriaLabel || ''));
                })(0, e),
                Ht(t, e),
                St(0, e),
                (function (t, e) {
                  var n = Y();
                  n &&
                    (lt(n),
                    ft(n, e.footer, 'block'),
                    e.footer && xt(e.footer, n),
                    tt(n, e, 'footer'));
                })(0, e);
              var n = I();
              'function' == typeof e.didRender && n && e.didRender(n);
            },
            Wt = function () {
              var t;
              return null === (t = z()) || void 0 === t ? void 0 : t.click();
            },
            Zt = Object.freeze({
              cancel: 'cancel',
              backdrop: 'backdrop',
              close: 'close',
              esc: 'esc',
              timer: 'timer',
            }),
            Kt = function (t) {
              t.keydownTarget &&
                t.keydownHandlerAdded &&
                (t.keydownTarget.removeEventListener(
                  'keydown',
                  t.keydownHandler,
                  { capture: t.keydownListenerCapture }
                ),
                (t.keydownHandlerAdded = !1));
            },
            Xt = function (t, e) {
              var n,
                r = Z();
              if (r.length)
                return (
                  (t += e) === r.length
                    ? (t = 0)
                    : -1 === t && (t = r.length - 1),
                  void r[t].focus()
                );
              null === (n = I()) || void 0 === n || n.focus();
            },
            Jt = ['ArrowRight', 'ArrowDown'],
            Qt = ['ArrowLeft', 'ArrowUp'],
            te = function (t, e, n) {
              t &&
                (e.isComposing ||
                  229 === e.keyCode ||
                  (t.stopKeydownPropagation && e.stopPropagation(),
                  'Enter' === e.key
                    ? ee(e, t)
                    : 'Tab' === e.key
                      ? ne(e)
                      : [].concat(Jt, Qt).includes(e.key)
                        ? re(e.key)
                        : 'Escape' === e.key && oe(e, t, n)));
            },
            ee = function (t, e) {
              if (L(e.allowEnterKey)) {
                var n = et(I(), e.input);
                if (
                  t.target &&
                  n &&
                  t.target instanceof HTMLElement &&
                  t.target.outerHTML === n.outerHTML
                ) {
                  if (['textarea', 'file'].includes(e.input)) return;
                  Wt(), t.preventDefault();
                }
              }
            },
            ne = function (t) {
              for (var e = t.target, n = Z(), r = -1, o = 0; o < n.length; o++)
                if (e === n[o]) {
                  r = o;
                  break;
                }
              t.shiftKey ? Xt(r, -1) : Xt(r, 1),
                t.stopPropagation(),
                t.preventDefault();
            },
            re = function (t) {
              var e = U(),
                n = z(),
                r = V(),
                o = F();
              if (e && n && r && o) {
                var a = [n, r, o];
                if (
                  !(document.activeElement instanceof HTMLElement) ||
                  a.includes(document.activeElement)
                ) {
                  var i = Jt.includes(t)
                      ? 'nextElementSibling'
                      : 'previousElementSibling',
                    s = document.activeElement;
                  if (s) {
                    for (var c = 0; c < e.children.length; c++) {
                      if (!(s = s[i])) return;
                      if (s instanceof HTMLButtonElement && pt(s)) break;
                    }
                    s instanceof HTMLButtonElement && s.focus();
                  }
                }
              }
            },
            oe = function (t, e, n) {
              L(e.allowEscapeKey) && (t.preventDefault(), n(Zt.esc));
            },
            ae = {
              swalPromiseResolve: new WeakMap(),
              swalPromiseReject: new WeakMap(),
            },
            ie = function () {
              Array.from(document.body.children).forEach(function (t) {
                t.hasAttribute('data-previous-aria-hidden')
                  ? (t.setAttribute(
                      'aria-hidden',
                      t.getAttribute('data-previous-aria-hidden') || ''
                    ),
                    t.removeAttribute('data-previous-aria-hidden'))
                  : t.removeAttribute('aria-hidden');
              });
            },
            se = 'undefined' != typeof window && !!window.GestureEvent,
            ce = function () {
              var t,
                e = T();
              e &&
                ((e.ontouchstart = function (e) {
                  t = ue(e);
                }),
                (e.ontouchmove = function (e) {
                  t && (e.preventDefault(), e.stopPropagation());
                }));
            },
            ue = function (t) {
              var e = t.target,
                n = T(),
                r = D();
              return !(
                !n ||
                !r ||
                le(t) ||
                de(t) ||
                (e !== n &&
                  (ht(n) ||
                    !(e instanceof HTMLElement) ||
                    'INPUT' === e.tagName ||
                    'TEXTAREA' === e.tagName ||
                    (ht(r) && r.contains(e))))
              );
            },
            le = function (t) {
              return (
                t.touches &&
                t.touches.length &&
                'stylus' === t.touches[0].touchType
              );
            },
            de = function (t) {
              return t.touches && t.touches.length > 1;
            },
            fe = null,
            pe = function (t) {
              null === fe &&
                (document.body.scrollHeight > window.innerHeight ||
                  'scroll' === t) &&
                ((fe = parseInt(
                  window
                    .getComputedStyle(document.body)
                    .getPropertyValue('padding-right')
                )),
                (document.body.style.paddingRight = ''.concat(
                  fe +
                    (function () {
                      var t = document.createElement('div');
                      (t.className = y['scrollbar-measure']),
                        document.body.appendChild(t);
                      var e = t.getBoundingClientRect().width - t.clientWidth;
                      return document.body.removeChild(t), e;
                    })(),
                  'px'
                )));
            };
          function he(t, e, n, r) {
            X()
              ? ke(t, r)
              : (v(n).then(function () {
                  return ke(t, r);
                }),
                Kt(w)),
              se
                ? (e.setAttribute('style', 'display:none !important'),
                  e.removeAttribute('class'),
                  (e.innerHTML = ''))
                : e.remove(),
              K() &&
                (null !== fe &&
                  ((document.body.style.paddingRight = ''.concat(fe, 'px')),
                  (fe = null)),
                (function () {
                  if (Q(document.body, y.iosfix)) {
                    var t = parseInt(document.body.style.top, 10);
                    at(document.body, y.iosfix),
                      (document.body.style.top = ''),
                      (document.body.scrollTop = -1 * t);
                  }
                })(),
                ie()),
              at(
                [document.documentElement, document.body],
                [y.shown, y['height-auto'], y['no-backdrop'], y['toast-shown']]
              );
          }
          function me(t) {
            t = ye(t);
            var e = ae.swalPromiseResolve.get(this),
              n = we(this);
            this.isAwaitingPromise
              ? t.isDismissed || (ge(this), e(t))
              : n && e(t);
          }
          var we = function (t) {
            var e = I();
            if (!e) return !1;
            var n = Pt.innerParams.get(t);
            if (!n || Q(e, n.hideClass.popup)) return !1;
            at(e, n.showClass.popup), ot(e, n.hideClass.popup);
            var r = T();
            return (
              at(r, n.showClass.backdrop),
              ot(r, n.hideClass.backdrop),
              be(t, e, n),
              !0
            );
          };
          function ve(t) {
            var e = ae.swalPromiseReject.get(this);
            ge(this), e && e(t);
          }
          var ge = function (t) {
              t.isAwaitingPromise &&
                (delete t.isAwaitingPromise,
                Pt.innerParams.get(t) || t._destroy());
            },
            ye = function (t) {
              return void 0 === t
                ? { isConfirmed: !1, isDenied: !1, isDismissed: !0 }
                : Object.assign(
                    { isConfirmed: !1, isDenied: !1, isDismissed: !1 },
                    t
                  );
            },
            be = function (t, e, n) {
              var r = T(),
                o = Ct && mt(e);
              'function' == typeof n.willClose && n.willClose(e),
                o
                  ? xe(t, e, r, n.returnFocus, n.didClose)
                  : he(t, r, n.returnFocus, n.didClose);
            },
            xe = function (t, e, n, r, o) {
              Ct &&
                ((w.swalCloseEventFinishedCallback = he.bind(null, t, n, r, o)),
                e.addEventListener(Ct, function (t) {
                  t.target === e &&
                    (w.swalCloseEventFinishedCallback(),
                    delete w.swalCloseEventFinishedCallback);
                }));
            },
            ke = function (t, e) {
              setTimeout(function () {
                'function' == typeof e && e.bind(t.params)(),
                  t._destroy && t._destroy();
              });
            },
            Ee = function (t) {
              var e = I();
              if ((e || new or(), (e = I()))) {
                var n = G();
                X() ? ut(_()) : Ce(e, t),
                  ct(n),
                  e.setAttribute('data-loading', 'true'),
                  e.setAttribute('aria-busy', 'true'),
                  e.focus();
              }
            },
            Ce = function (t, e) {
              var n = U(),
                r = G();
              n &&
                r &&
                (!e && pt(z()) && (e = z()),
                ct(n),
                e &&
                  (ut(e),
                  r.setAttribute('data-button-to-replace', e.className),
                  n.insertBefore(r, e)),
                ot([t, n], y.loading));
            },
            Se = function (t) {
              return t.checked ? 1 : 0;
            },
            Oe = function (t) {
              return t.checked ? t.value : null;
            },
            Le = function (t) {
              return t.files && t.files.length
                ? null !== t.getAttribute('multiple')
                  ? t.files
                  : t.files[0]
                : null;
            },
            Pe = function (t, e) {
              var n = I();
              if (n) {
                var r = function (t) {
                  'select' === e.input
                    ? (function (t, e, n) {
                        var r = it(t, y.select);
                        if (r) {
                          var o = function (t, e, r) {
                            var o = document.createElement('option');
                            (o.value = r),
                              J(o, e),
                              (o.selected = Te(r, n.inputValue)),
                              t.appendChild(o);
                          };
                          e.forEach(function (t) {
                            var e = t[0],
                              n = t[1];
                            if (Array.isArray(n)) {
                              var a = document.createElement('optgroup');
                              (a.label = e),
                                (a.disabled = !1),
                                r.appendChild(a),
                                n.forEach(function (t) {
                                  return o(a, t[1], t[0]);
                                });
                            } else o(r, n, e);
                          }),
                            r.focus();
                        }
                      })(n, Ae(t), e)
                    : 'radio' === e.input &&
                      (function (t, e, n) {
                        var r = it(t, y.radio);
                        if (r) {
                          e.forEach(function (t) {
                            var e = t[0],
                              o = t[1],
                              a = document.createElement('input'),
                              i = document.createElement('label');
                            (a.type = 'radio'),
                              (a.name = y.radio),
                              (a.value = e),
                              Te(e, n.inputValue) && (a.checked = !0);
                            var s = document.createElement('span');
                            J(s, o),
                              (s.className = y.label),
                              i.appendChild(a),
                              i.appendChild(s),
                              r.appendChild(i);
                          });
                          var o = r.querySelectorAll('input');
                          o.length && o[0].focus();
                        }
                      })(n, Ae(t), e);
                };
                P(e.inputOptions) || A(e.inputOptions)
                  ? (Ee(z()),
                    j(e.inputOptions).then(function (e) {
                      t.hideLoading(), r(e);
                    }))
                  : 'object' === h(e.inputOptions)
                    ? r(e.inputOptions)
                    : C(
                        'Unexpected type of inputOptions! Expected object, Map or Promise, got '.concat(
                          h(e.inputOptions)
                        )
                      );
              }
            },
            je = function (t, e) {
              var n = t.getInput();
              n &&
                (ut(n),
                j(e.inputValue)
                  .then(function (r) {
                    (n.value =
                      'number' === e.input
                        ? ''.concat(parseFloat(r) || 0)
                        : ''.concat(r)),
                      ct(n),
                      n.focus(),
                      t.hideLoading();
                  })
                  .catch(function (e) {
                    C('Error in inputValue promise: '.concat(e)),
                      (n.value = ''),
                      ct(n),
                      n.focus(),
                      t.hideLoading();
                  }));
            };
          var Ae = function (t) {
              var e = [];
              return (
                t instanceof Map
                  ? t.forEach(function (t, n) {
                      var r = t;
                      'object' === h(r) && (r = Ae(r)), e.push([n, r]);
                    })
                  : Object.keys(t).forEach(function (n) {
                      var r = t[n];
                      'object' === h(r) && (r = Ae(r)), e.push([n, r]);
                    }),
                e
              );
            },
            Te = function (t, e) {
              return !!e && e.toString() === t.toString();
            },
            Be = void 0,
            Me = function (t, e) {
              var n = Pt.innerParams.get(t);
              if (n.input) {
                var r = t.getInput(),
                  o = (function (t, e) {
                    var n = t.getInput();
                    if (!n) return null;
                    switch (e.input) {
                      case 'checkbox':
                        return Se(n);
                      case 'radio':
                        return Oe(n);
                      case 'file':
                        return Le(n);
                      default:
                        return e.inputAutoTrim ? n.value.trim() : n.value;
                    }
                  })(t, n);
                n.inputValidator
                  ? Ie(t, o, e)
                  : r && !r.checkValidity()
                    ? (t.enableButtons(),
                      t.showValidationMessage(
                        n.validationMessage || r.validationMessage
                      ))
                    : 'deny' === e
                      ? _e(t, o)
                      : He(t, o);
              } else
                C(
                  'The "input" parameter is needed to be set when using returnInputValueOn'.concat(
                    k(e)
                  )
                );
            },
            Ie = function (t, e, n) {
              var r = Pt.innerParams.get(t);
              t.disableInput(),
                Promise.resolve()
                  .then(function () {
                    return j(r.inputValidator(e, r.validationMessage));
                  })
                  .then(function (r) {
                    t.enableButtons(),
                      t.enableInput(),
                      r
                        ? t.showValidationMessage(r)
                        : 'deny' === n
                          ? _e(t, e)
                          : He(t, e);
                  });
            },
            _e = function (t, e) {
              var n = Pt.innerParams.get(t || Be);
              n.showLoaderOnDeny && Ee(V()),
                n.preDeny
                  ? ((t.isAwaitingPromise = !0),
                    Promise.resolve()
                      .then(function () {
                        return j(n.preDeny(e, n.validationMessage));
                      })
                      .then(function (n) {
                        !1 === n
                          ? (t.hideLoading(), ge(t))
                          : t.close({
                              isDenied: !0,
                              value: void 0 === n ? e : n,
                            });
                      })
                      .catch(function (e) {
                        return De(t || Be, e);
                      }))
                  : t.close({ isDenied: !0, value: e });
            },
            Ne = function (t, e) {
              t.close({ isConfirmed: !0, value: e });
            },
            De = function (t, e) {
              t.rejectPromise(e);
            },
            He = function (t, e) {
              var n = Pt.innerParams.get(t || Be);
              n.showLoaderOnConfirm && Ee(),
                n.preConfirm
                  ? (t.resetValidationMessage(),
                    (t.isAwaitingPromise = !0),
                    Promise.resolve()
                      .then(function () {
                        return j(n.preConfirm(e, n.validationMessage));
                      })
                      .then(function (n) {
                        pt(R()) || !1 === n
                          ? (t.hideLoading(), ge(t))
                          : Ne(t, void 0 === n ? e : n);
                      })
                      .catch(function (e) {
                        return De(t || Be, e);
                      }))
                  : Ne(t, e);
            };
          function qe() {
            var t = Pt.innerParams.get(this);
            if (t) {
              var e = Pt.domCache.get(this);
              ut(e.loader),
                X() ? t.icon && ct(_()) : Re(e),
                at([e.popup, e.actions], y.loading),
                e.popup.removeAttribute('aria-busy'),
                e.popup.removeAttribute('data-loading'),
                (e.confirmButton.disabled = !1),
                (e.denyButton.disabled = !1),
                (e.cancelButton.disabled = !1);
            }
          }
          var Re = function (t) {
            var e = t.popup.getElementsByClassName(
              t.loader.getAttribute('data-button-to-replace')
            );
            e.length
              ? ct(e[0], 'inline-block')
              : !pt(z()) && !pt(V()) && !pt(F()) && ut(t.actions);
          };
          function ze() {
            var t = Pt.innerParams.get(this),
              e = Pt.domCache.get(this);
            return e ? et(e.popup, t.input) : null;
          }
          function Fe(t, e, n) {
            var r = Pt.domCache.get(t);
            e.forEach(function (t) {
              r[t].disabled = n;
            });
          }
          function Ve(t, e) {
            var n = I();
            if (n && t)
              if ('radio' === t.type)
                for (
                  var r = n.querySelectorAll('[name="'.concat(y.radio, '"]')),
                    o = 0;
                  o < r.length;
                  o++
                )
                  r[o].disabled = e;
              else t.disabled = e;
          }
          function Ge() {
            Fe(this, ['confirmButton', 'denyButton', 'cancelButton'], !1);
          }
          function Ue() {
            Fe(this, ['confirmButton', 'denyButton', 'cancelButton'], !0);
          }
          function Ye() {
            Ve(this.getInput(), !1);
          }
          function $e() {
            Ve(this.getInput(), !0);
          }
          function We(t) {
            var e = Pt.domCache.get(this),
              n = Pt.innerParams.get(this);
            J(e.validationMessage, t),
              (e.validationMessage.className = y['validation-message']),
              n.customClass &&
                n.customClass.validationMessage &&
                ot(e.validationMessage, n.customClass.validationMessage),
              ct(e.validationMessage);
            var r = this.getInput();
            r &&
              (r.setAttribute('aria-invalid', 'true'),
              r.setAttribute('aria-describedby', y['validation-message']),
              nt(r),
              ot(r, y.inputerror));
          }
          function Ze() {
            var t = Pt.domCache.get(this);
            t.validationMessage && ut(t.validationMessage);
            var e = this.getInput();
            e &&
              (e.removeAttribute('aria-invalid'),
              e.removeAttribute('aria-describedby'),
              at(e, y.inputerror));
          }
          var Ke = {
              title: '',
              titleText: '',
              text: '',
              html: '',
              footer: '',
              icon: void 0,
              iconColor: void 0,
              iconHtml: void 0,
              template: void 0,
              toast: !1,
              animation: !0,
              showClass: {
                popup: 'swal2-show',
                backdrop: 'swal2-backdrop-show',
                icon: 'swal2-icon-show',
              },
              hideClass: {
                popup: 'swal2-hide',
                backdrop: 'swal2-backdrop-hide',
                icon: 'swal2-icon-hide',
              },
              customClass: {},
              target: 'body',
              color: void 0,
              backdrop: !0,
              heightAuto: !0,
              allowOutsideClick: !0,
              allowEscapeKey: !0,
              allowEnterKey: !0,
              stopKeydownPropagation: !0,
              keydownListenerCapture: !1,
              showConfirmButton: !0,
              showDenyButton: !1,
              showCancelButton: !1,
              preConfirm: void 0,
              preDeny: void 0,
              confirmButtonText: 'OK',
              confirmButtonAriaLabel: '',
              confirmButtonColor: void 0,
              denyButtonText: 'No',
              denyButtonAriaLabel: '',
              denyButtonColor: void 0,
              cancelButtonText: 'Cancel',
              cancelButtonAriaLabel: '',
              cancelButtonColor: void 0,
              buttonsStyling: !0,
              reverseButtons: !1,
              focusConfirm: !0,
              focusDeny: !1,
              focusCancel: !1,
              returnFocus: !0,
              showCloseButton: !1,
              closeButtonHtml: '&times;',
              closeButtonAriaLabel: 'Close this dialog',
              loaderHtml: '',
              showLoaderOnConfirm: !1,
              showLoaderOnDeny: !1,
              imageUrl: void 0,
              imageWidth: void 0,
              imageHeight: void 0,
              imageAlt: '',
              timer: void 0,
              timerProgressBar: !1,
              width: void 0,
              padding: void 0,
              background: void 0,
              input: void 0,
              inputPlaceholder: '',
              inputLabel: '',
              inputValue: '',
              inputOptions: {},
              inputAutoFocus: !0,
              inputAutoTrim: !0,
              inputAttributes: {},
              inputValidator: void 0,
              returnInputValueOnDeny: !1,
              validationMessage: void 0,
              grow: !1,
              position: 'center',
              progressSteps: [],
              currentProgressStep: void 0,
              progressStepsDistance: void 0,
              willOpen: void 0,
              didOpen: void 0,
              didRender: void 0,
              willClose: void 0,
              didClose: void 0,
              didDestroy: void 0,
              scrollbarPadding: !0,
            },
            Xe = [
              'allowEscapeKey',
              'allowOutsideClick',
              'background',
              'buttonsStyling',
              'cancelButtonAriaLabel',
              'cancelButtonColor',
              'cancelButtonText',
              'closeButtonAriaLabel',
              'closeButtonHtml',
              'color',
              'confirmButtonAriaLabel',
              'confirmButtonColor',
              'confirmButtonText',
              'currentProgressStep',
              'customClass',
              'denyButtonAriaLabel',
              'denyButtonColor',
              'denyButtonText',
              'didClose',
              'didDestroy',
              'footer',
              'hideClass',
              'html',
              'icon',
              'iconColor',
              'iconHtml',
              'imageAlt',
              'imageHeight',
              'imageUrl',
              'imageWidth',
              'preConfirm',
              'preDeny',
              'progressSteps',
              'returnFocus',
              'reverseButtons',
              'showCancelButton',
              'showCloseButton',
              'showConfirmButton',
              'showDenyButton',
              'text',
              'title',
              'titleText',
              'willClose',
            ],
            Je = { allowEnterKey: void 0 },
            Qe = [
              'allowOutsideClick',
              'allowEnterKey',
              'backdrop',
              'focusConfirm',
              'focusDeny',
              'focusCancel',
              'returnFocus',
              'heightAuto',
              'keydownListenerCapture',
            ],
            tn = function (t) {
              return Object.prototype.hasOwnProperty.call(Ke, t);
            },
            en = function (t) {
              return -1 !== Xe.indexOf(t);
            },
            nn = function (t) {
              return Je[t];
            },
            rn = function (t) {
              tn(t) || E('Unknown parameter "'.concat(t, '"'));
            },
            on = function (t) {
              Qe.includes(t) &&
                E('The parameter "'.concat(t, '" is incompatible with toasts'));
            },
            an = function (t) {
              var e = nn(t);
              e && O(t, e);
            };
          function sn(t) {
            var e = I(),
              n = Pt.innerParams.get(this);
            if (e && !Q(e, n.hideClass.popup)) {
              var r = cn(t),
                o = Object.assign({}, n, r);
              $t(this, o),
                Pt.innerParams.set(this, o),
                Object.defineProperties(this, {
                  params: {
                    value: Object.assign({}, this.params, t),
                    writable: !1,
                    enumerable: !0,
                  },
                });
            } else
              E(
                "You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup."
              );
          }
          var cn = function (t) {
            var e = {};
            return (
              Object.keys(t).forEach(function (n) {
                en(n)
                  ? (e[n] = t[n])
                  : E('Invalid parameter to update: '.concat(n));
              }),
              e
            );
          };
          function un() {
            var t = Pt.domCache.get(this),
              e = Pt.innerParams.get(this);
            e
              ? (t.popup &&
                  w.swalCloseEventFinishedCallback &&
                  (w.swalCloseEventFinishedCallback(),
                  delete w.swalCloseEventFinishedCallback),
                'function' == typeof e.didDestroy && e.didDestroy(),
                ln(this))
              : dn(this);
          }
          var ln = function (t) {
              dn(t),
                delete t.params,
                delete w.keydownHandler,
                delete w.keydownTarget,
                delete w.currentInstance;
            },
            dn = function (t) {
              t.isAwaitingPromise
                ? (fn(Pt, t), (t.isAwaitingPromise = !0))
                : (fn(ae, t),
                  fn(Pt, t),
                  delete t.isAwaitingPromise,
                  delete t.disableButtons,
                  delete t.enableButtons,
                  delete t.getInput,
                  delete t.disableInput,
                  delete t.enableInput,
                  delete t.hideLoading,
                  delete t.disableLoading,
                  delete t.showValidationMessage,
                  delete t.resetValidationMessage,
                  delete t.close,
                  delete t.closePopup,
                  delete t.closeModal,
                  delete t.closeToast,
                  delete t.rejectPromise,
                  delete t.update,
                  delete t._destroy);
            },
            fn = function (t, e) {
              for (var n in t) t[n].delete(e);
            },
            pn = Object.freeze({
              __proto__: null,
              _destroy: un,
              close: me,
              closeModal: me,
              closePopup: me,
              closeToast: me,
              disableButtons: Ue,
              disableInput: $e,
              disableLoading: qe,
              enableButtons: Ge,
              enableInput: Ye,
              getInput: ze,
              handleAwaitingPromise: ge,
              hideLoading: qe,
              rejectPromise: ve,
              resetValidationMessage: Ze,
              showValidationMessage: We,
              update: sn,
            }),
            hn = function (t, e, n) {
              e.popup.onclick = function () {
                (t && (mn(t) || t.timer || t.input)) || n(Zt.close);
              };
            },
            mn = function (t) {
              return !!(
                t.showConfirmButton ||
                t.showDenyButton ||
                t.showCancelButton ||
                t.showCloseButton
              );
            },
            wn = !1,
            vn = function (t) {
              t.popup.onmousedown = function () {
                t.container.onmouseup = function (e) {
                  (t.container.onmouseup = function () {}),
                    e.target === t.container && (wn = !0);
                };
              };
            },
            gn = function (t) {
              t.container.onmousedown = function (e) {
                e.target === t.container && e.preventDefault(),
                  (t.popup.onmouseup = function (e) {
                    (t.popup.onmouseup = function () {}),
                      (e.target === t.popup ||
                        (e.target instanceof HTMLElement &&
                          t.popup.contains(e.target))) &&
                        (wn = !0);
                  });
              };
            },
            yn = function (t, e, n) {
              e.container.onclick = function (r) {
                wn
                  ? (wn = !1)
                  : r.target === e.container &&
                    L(t.allowOutsideClick) &&
                    n(Zt.backdrop);
              };
            },
            bn = function (t) {
              return (
                t instanceof Element ||
                (function (t) {
                  return 'object' === h(t) && t.jquery;
                })(t)
              );
            };
          var xn = function () {
              if (w.timeout)
                return (
                  (function () {
                    var t = $();
                    if (t) {
                      var e = parseInt(window.getComputedStyle(t).width);
                      t.style.removeProperty('transition'),
                        (t.style.width = '100%');
                      var n =
                        (e / parseInt(window.getComputedStyle(t).width)) * 100;
                      t.style.width = ''.concat(n, '%');
                    }
                  })(),
                  w.timeout.stop()
                );
            },
            kn = function () {
              if (w.timeout) {
                var t = w.timeout.start();
                return wt(t), t;
              }
            },
            En = !1,
            Cn = {};
          var Sn,
            On = function (t) {
              for (var e = t.target; e && e !== document; e = e.parentNode)
                for (var n in Cn) {
                  var r = e.getAttribute(n);
                  if (r) return void Cn[n].fire({ template: r });
                }
            },
            Ln = Object.freeze({
              __proto__: null,
              argsToParams: function (t) {
                var e = {};
                return (
                  'object' !== h(t[0]) || bn(t[0])
                    ? ['title', 'html', 'icon'].forEach(function (n, r) {
                        var o = t[r];
                        'string' == typeof o || bn(o)
                          ? (e[n] = o)
                          : void 0 !== o &&
                            C(
                              'Unexpected type of '
                                .concat(
                                  n,
                                  '! Expected "string" or "Element", got '
                                )
                                .concat(h(o))
                            );
                      })
                    : Object.assign(e, t[0]),
                  e
                );
              },
              bindClickHandler: function () {
                (Cn[
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : 'data-swal-template'
                ] = this),
                  En ||
                    (document.body.addEventListener('click', On), (En = !0));
              },
              clickCancel: function () {
                var t;
                return null === (t = F()) || void 0 === t ? void 0 : t.click();
              },
              clickConfirm: Wt,
              clickDeny: function () {
                var t;
                return null === (t = V()) || void 0 === t ? void 0 : t.click();
              },
              enableLoading: Ee,
              fire: function () {
                for (
                  var t = arguments.length, e = new Array(t), n = 0;
                  n < t;
                  n++
                )
                  e[n] = arguments[n];
                return (function (t, e, n) {
                  if (u()) return Reflect.construct.apply(null, arguments);
                  var r = [null];
                  return r.push.apply(r, e), new (t.bind.apply(t, r))();
                })(this, e);
              },
              getActions: U,
              getCancelButton: F,
              getCloseButton: W,
              getConfirmButton: z,
              getContainer: T,
              getDenyButton: V,
              getFocusableElements: Z,
              getFooter: Y,
              getHtmlContainer: D,
              getIcon: _,
              getIconContent: function () {
                return M(y['icon-content']);
              },
              getImage: H,
              getInputLabel: function () {
                return M(y['input-label']);
              },
              getLoader: G,
              getPopup: I,
              getProgressSteps: q,
              getTimerLeft: function () {
                return w.timeout && w.timeout.getTimerLeft();
              },
              getTimerProgressBar: $,
              getTitle: N,
              getValidationMessage: R,
              increaseTimer: function (t) {
                if (w.timeout) {
                  var e = w.timeout.increase(t);
                  return wt(e, !0), e;
                }
              },
              isDeprecatedParameter: nn,
              isLoading: function () {
                var t = I();
                return !!t && t.hasAttribute('data-loading');
              },
              isTimerRunning: function () {
                return !(!w.timeout || !w.timeout.isRunning());
              },
              isUpdatableParameter: en,
              isValidParameter: tn,
              isVisible: function () {
                return pt(I());
              },
              mixin: function (t) {
                var e = (function (e) {
                  function o() {
                    return r(this, o), n(this, o, arguments);
                  }
                  return (
                    (function (t, e) {
                      if ('function' != typeof e && null !== e)
                        throw new TypeError(
                          'Super expression must either be null or a function'
                        );
                      (t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                          value: t,
                          writable: !0,
                          configurable: !0,
                        },
                      })),
                        Object.defineProperty(t, 'prototype', { writable: !1 }),
                        e && l(t, e);
                    })(o, e),
                    i(o, [
                      {
                        key: '_main',
                        value: function (e, n) {
                          return ((r = '_main'),
                          (a = this),
                          (i = s(c(o.prototype), r, a)),
                          function (t) {
                            return i.apply(a, t);
                          })([e, Object.assign({}, t, n)]);
                          var r, a, i;
                        },
                      },
                    ])
                  );
                })(this);
                return e;
              },
              resumeTimer: kn,
              showLoading: Ee,
              stopTimer: xn,
              toggleTimer: function () {
                var t = w.timeout;
                return t && (t.running ? xn() : kn());
              },
            }),
            Pn = (function () {
              return i(
                function t(e, n) {
                  r(this, t),
                    (this.callback = e),
                    (this.remaining = n),
                    (this.running = !1),
                    this.start();
                },
                [
                  {
                    key: 'start',
                    value: function () {
                      return (
                        this.running ||
                          ((this.running = !0),
                          (this.started = new Date()),
                          (this.id = setTimeout(
                            this.callback,
                            this.remaining
                          ))),
                        this.remaining
                      );
                    },
                  },
                  {
                    key: 'stop',
                    value: function () {
                      return (
                        this.started &&
                          this.running &&
                          ((this.running = !1),
                          clearTimeout(this.id),
                          (this.remaining -=
                            new Date().getTime() - this.started.getTime())),
                        this.remaining
                      );
                    },
                  },
                  {
                    key: 'increase',
                    value: function (t) {
                      var e = this.running;
                      return (
                        e && this.stop(),
                        (this.remaining += t),
                        e && this.start(),
                        this.remaining
                      );
                    },
                  },
                  {
                    key: 'getTimerLeft',
                    value: function () {
                      return (
                        this.running && (this.stop(), this.start()),
                        this.remaining
                      );
                    },
                  },
                  {
                    key: 'isRunning',
                    value: function () {
                      return this.running;
                    },
                  },
                ]
              );
            })(),
            jn = ['swal-title', 'swal-html', 'swal-footer'],
            An = function (t) {
              var e = {};
              return (
                Array.from(t.querySelectorAll('swal-param')).forEach(
                  function (t) {
                    Hn(t, ['name', 'value']);
                    var n = t.getAttribute('name'),
                      r = t.getAttribute('value');
                    n &&
                      r &&
                      ('boolean' == typeof Ke[n]
                        ? (e[n] = 'false' !== r)
                        : 'object' === h(Ke[n])
                          ? (e[n] = JSON.parse(r))
                          : (e[n] = r));
                  }
                ),
                e
              );
            },
            Tn = function (t) {
              var e = {};
              return (
                Array.from(t.querySelectorAll('swal-function-param')).forEach(
                  function (t) {
                    var n = t.getAttribute('name'),
                      r = t.getAttribute('value');
                    n && r && (e[n] = new Function('return '.concat(r))());
                  }
                ),
                e
              );
            },
            Bn = function (t) {
              var e = {};
              return (
                Array.from(t.querySelectorAll('swal-button')).forEach(
                  function (t) {
                    Hn(t, ['type', 'color', 'aria-label']);
                    var n = t.getAttribute('type');
                    n &&
                      ['confirm', 'cancel', 'deny'].includes(n) &&
                      ((e[''.concat(n, 'ButtonText')] = t.innerHTML),
                      (e['show'.concat(k(n), 'Button')] = !0),
                      t.hasAttribute('color') &&
                        (e[''.concat(n, 'ButtonColor')] =
                          t.getAttribute('color')),
                      t.hasAttribute('aria-label') &&
                        (e[''.concat(n, 'ButtonAriaLabel')] =
                          t.getAttribute('aria-label')));
                  }
                ),
                e
              );
            },
            Mn = function (t) {
              var e = {},
                n = t.querySelector('swal-image');
              return (
                n &&
                  (Hn(n, ['src', 'width', 'height', 'alt']),
                  n.hasAttribute('src') &&
                    (e.imageUrl = n.getAttribute('src') || void 0),
                  n.hasAttribute('width') &&
                    (e.imageWidth = n.getAttribute('width') || void 0),
                  n.hasAttribute('height') &&
                    (e.imageHeight = n.getAttribute('height') || void 0),
                  n.hasAttribute('alt') &&
                    (e.imageAlt = n.getAttribute('alt') || void 0)),
                e
              );
            },
            In = function (t) {
              var e = {},
                n = t.querySelector('swal-icon');
              return (
                n &&
                  (Hn(n, ['type', 'color']),
                  n.hasAttribute('type') && (e.icon = n.getAttribute('type')),
                  n.hasAttribute('color') &&
                    (e.iconColor = n.getAttribute('color')),
                  (e.iconHtml = n.innerHTML)),
                e
              );
            },
            _n = function (t) {
              var e = {},
                n = t.querySelector('swal-input');
              n &&
                (Hn(n, ['type', 'label', 'placeholder', 'value']),
                (e.input = n.getAttribute('type') || 'text'),
                n.hasAttribute('label') &&
                  (e.inputLabel = n.getAttribute('label')),
                n.hasAttribute('placeholder') &&
                  (e.inputPlaceholder = n.getAttribute('placeholder')),
                n.hasAttribute('value') &&
                  (e.inputValue = n.getAttribute('value')));
              var r = Array.from(t.querySelectorAll('swal-input-option'));
              return (
                r.length &&
                  ((e.inputOptions = {}),
                  r.forEach(function (t) {
                    Hn(t, ['value']);
                    var n = t.getAttribute('value');
                    if (n) {
                      var r = t.innerHTML;
                      e.inputOptions[n] = r;
                    }
                  })),
                e
              );
            },
            Nn = function (t, e) {
              var n = {};
              for (var r in e) {
                var o = e[r],
                  a = t.querySelector(o);
                a &&
                  (Hn(a, []),
                  (n[o.replace(/^swal-/, '')] = a.innerHTML.trim()));
              }
              return n;
            },
            Dn = function (t) {
              var e = jn.concat([
                'swal-param',
                'swal-function-param',
                'swal-button',
                'swal-image',
                'swal-icon',
                'swal-input',
                'swal-input-option',
              ]);
              Array.from(t.children).forEach(function (t) {
                var n = t.tagName.toLowerCase();
                e.includes(n) || E('Unrecognized element <'.concat(n, '>'));
              });
            },
            Hn = function (t, e) {
              Array.from(t.attributes).forEach(function (n) {
                -1 === e.indexOf(n.name) &&
                  E([
                    'Unrecognized attribute "'
                      .concat(n.name, '" on <')
                      .concat(t.tagName.toLowerCase(), '>.'),
                    ''.concat(
                      e.length
                        ? 'Allowed attributes are: '.concat(e.join(', '))
                        : 'To set the value, use HTML within the element.'
                    ),
                  ]);
              });
            },
            qn = function (t) {
              var e = T(),
                n = I();
              'function' == typeof t.willOpen && t.willOpen(n);
              var r = window.getComputedStyle(document.body).overflowY;
              Vn(e, n, t),
                setTimeout(function () {
                  zn(e, n);
                }, 10),
                K() &&
                  (Fn(e, t.scrollbarPadding, r),
                  (function () {
                    var t = T();
                    Array.from(document.body.children).forEach(function (e) {
                      e.contains(t) ||
                        (e.hasAttribute('aria-hidden') &&
                          e.setAttribute(
                            'data-previous-aria-hidden',
                            e.getAttribute('aria-hidden') || ''
                          ),
                        e.setAttribute('aria-hidden', 'true'));
                    });
                  })()),
                X() ||
                  w.previousActiveElement ||
                  (w.previousActiveElement = document.activeElement),
                'function' == typeof t.didOpen &&
                  setTimeout(function () {
                    return t.didOpen(n);
                  }),
                at(e, y['no-transition']);
            },
            Rn = function (t) {
              var e = I();
              if (t.target === e && Ct) {
                var n = T();
                e.removeEventListener(Ct, Rn), (n.style.overflowY = 'auto');
              }
            },
            zn = function (t, e) {
              Ct && mt(e)
                ? ((t.style.overflowY = 'hidden'), e.addEventListener(Ct, Rn))
                : (t.style.overflowY = 'auto');
            },
            Fn = function (t, e, n) {
              (function () {
                if (se && !Q(document.body, y.iosfix)) {
                  var t = document.body.scrollTop;
                  (document.body.style.top = ''.concat(-1 * t, 'px')),
                    ot(document.body, y.iosfix),
                    ce();
                }
              })(),
                e && 'hidden' !== n && pe(n),
                setTimeout(function () {
                  t.scrollTop = 0;
                });
            },
            Vn = function (t, e, n) {
              ot(t, n.showClass.backdrop),
                n.animation
                  ? (e.style.setProperty('opacity', '0', 'important'),
                    ct(e, 'grid'),
                    setTimeout(function () {
                      ot(e, n.showClass.popup),
                        e.style.removeProperty('opacity');
                    }, 10))
                  : ct(e, 'grid'),
                ot([document.documentElement, document.body], y.shown),
                n.heightAuto &&
                  n.backdrop &&
                  !n.toast &&
                  ot(
                    [document.documentElement, document.body],
                    y['height-auto']
                  );
            },
            Gn = {
              email: function (t, e) {
                return /^[a-zA-Z0-9.+_'-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]+$/.test(
                  t
                )
                  ? Promise.resolve()
                  : Promise.resolve(e || 'Invalid email address');
              },
              url: function (t, e) {
                return /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(
                  t
                )
                  ? Promise.resolve()
                  : Promise.resolve(e || 'Invalid URL');
              },
            };
          function Un(t) {
            (function (t) {
              t.inputValidator ||
                ('email' === t.input && (t.inputValidator = Gn.email),
                'url' === t.input && (t.inputValidator = Gn.url));
            })(t),
              t.showLoaderOnConfirm &&
                !t.preConfirm &&
                E(
                  'showLoaderOnConfirm is set to true, but preConfirm is not defined.\nshowLoaderOnConfirm should be used together with preConfirm, see usage example:\nhttps://sweetalert2.github.io/#ajax-request'
                ),
              (function (t) {
                (!t.target ||
                  ('string' == typeof t.target &&
                    !document.querySelector(t.target)) ||
                  ('string' != typeof t.target && !t.target.appendChild)) &&
                  (E('Target parameter is not valid, defaulting to "body"'),
                  (t.target = 'body'));
              })(t),
              'string' == typeof t.title &&
                (t.title = t.title.split('\n').join('<br />')),
              bt(t);
          }
          var Yn = new WeakMap(),
            $n = (function () {
              return i(
                function t() {
                  if (
                    (r(this, t),
                    a(this, Yn, void 0),
                    'undefined' != typeof window)
                  ) {
                    Sn = this;
                    for (
                      var n = arguments.length, o = new Array(n), i = 0;
                      i < n;
                      i++
                    )
                      o[i] = arguments[i];
                    var s = Object.freeze(this.constructor.argsToParams(o));
                    (this.params = s),
                      (this.isAwaitingPromise = !1),
                      (c = Yn),
                      (u = this),
                      (l = this._main(Sn.params)),
                      c.set(e(c, u), l);
                  }
                  var c, u, l;
                },
                [
                  {
                    key: '_main',
                    value: function (t) {
                      var e =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : {};
                      if (
                        ((function (t) {
                          for (var e in (!1 === t.backdrop &&
                            t.allowOutsideClick &&
                            E(
                              '"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`'
                            ),
                          t))
                            rn(e), t.toast && on(e), an(e);
                        })(Object.assign({}, e, t)),
                        w.currentInstance)
                      ) {
                        var n = ae.swalPromiseResolve.get(w.currentInstance),
                          r = w.currentInstance.isAwaitingPromise;
                        w.currentInstance._destroy(),
                          r || n({ isDismissed: !0 }),
                          K() && ie();
                      }
                      w.currentInstance = Sn;
                      var o = Zn(t, e);
                      Un(o),
                        Object.freeze(o),
                        w.timeout && (w.timeout.stop(), delete w.timeout),
                        clearTimeout(w.restoreFocusTimeout);
                      var a = Kn(Sn);
                      return $t(Sn, o), Pt.innerParams.set(Sn, o), Wn(Sn, a, o);
                    },
                  },
                  {
                    key: 'then',
                    value: function (t) {
                      return o(Yn, this).then(t);
                    },
                  },
                  {
                    key: 'finally',
                    value: function (t) {
                      return o(Yn, this).finally(t);
                    },
                  },
                ]
              );
            })(),
            Wn = function (t, e, n) {
              return new Promise(function (r, o) {
                var a = function (e) {
                  t.close({ isDismissed: !0, dismiss: e });
                };
                ae.swalPromiseResolve.set(t, r),
                  ae.swalPromiseReject.set(t, o),
                  (e.confirmButton.onclick = function () {
                    !(function (t) {
                      var e = Pt.innerParams.get(t);
                      t.disableButtons(),
                        e.input ? Me(t, 'confirm') : He(t, !0);
                    })(t);
                  }),
                  (e.denyButton.onclick = function () {
                    !(function (t) {
                      var e = Pt.innerParams.get(t);
                      t.disableButtons(),
                        e.returnInputValueOnDeny ? Me(t, 'deny') : _e(t, !1);
                    })(t);
                  }),
                  (e.cancelButton.onclick = function () {
                    !(function (t, e) {
                      t.disableButtons(), e(Zt.cancel);
                    })(t, a);
                  }),
                  (e.closeButton.onclick = function () {
                    a(Zt.close);
                  }),
                  (function (t, e, n) {
                    t.toast ? hn(t, e, n) : (vn(e), gn(e), yn(t, e, n));
                  })(n, e, a),
                  (function (t, e, n) {
                    Kt(t),
                      e.toast ||
                        ((t.keydownHandler = function (t) {
                          return te(e, t, n);
                        }),
                        (t.keydownTarget = e.keydownListenerCapture
                          ? window
                          : I()),
                        (t.keydownListenerCapture = e.keydownListenerCapture),
                        t.keydownTarget.addEventListener(
                          'keydown',
                          t.keydownHandler,
                          { capture: t.keydownListenerCapture }
                        ),
                        (t.keydownHandlerAdded = !0));
                  })(w, n, a),
                  (function (t, e) {
                    'select' === e.input || 'radio' === e.input
                      ? Pe(t, e)
                      : ['text', 'email', 'number', 'tel', 'textarea'].some(
                          function (t) {
                            return t === e.input;
                          }
                        ) &&
                        (P(e.inputValue) || A(e.inputValue)) &&
                        (Ee(z()), je(t, e));
                  })(t, n),
                  qn(n),
                  Xn(w, n, a),
                  Jn(e, n),
                  setTimeout(function () {
                    e.container.scrollTop = 0;
                  });
              });
            },
            Zn = function (t, e) {
              var n = (function (t) {
                  var e =
                    'string' == typeof t.template
                      ? document.querySelector(t.template)
                      : t.template;
                  if (!e) return {};
                  var n = e.content;
                  return (
                    Dn(n),
                    Object.assign(
                      An(n),
                      Tn(n),
                      Bn(n),
                      Mn(n),
                      In(n),
                      _n(n),
                      Nn(n, jn)
                    )
                  );
                })(t),
                r = Object.assign({}, Ke, e, n, t);
              return (
                (r.showClass = Object.assign({}, Ke.showClass, r.showClass)),
                (r.hideClass = Object.assign({}, Ke.hideClass, r.hideClass)),
                !1 === r.animation &&
                  ((r.showClass = { backdrop: 'swal2-noanimation' }),
                  (r.hideClass = {})),
                r
              );
            },
            Kn = function (t) {
              var e = {
                popup: I(),
                container: T(),
                actions: U(),
                confirmButton: z(),
                denyButton: V(),
                cancelButton: F(),
                loader: G(),
                closeButton: W(),
                validationMessage: R(),
                progressSteps: q(),
              };
              return Pt.domCache.set(t, e), e;
            },
            Xn = function (t, e, n) {
              var r = $();
              ut(r),
                e.timer &&
                  ((t.timeout = new Pn(function () {
                    n('timer'), delete t.timeout;
                  }, e.timer)),
                  e.timerProgressBar &&
                    (ct(r),
                    tt(r, e, 'timerProgressBar'),
                    setTimeout(function () {
                      t.timeout && t.timeout.running && wt(e.timer);
                    })));
            },
            Jn = function (t, e) {
              if (!e.toast)
                return L(e.allowEnterKey)
                  ? void (Qn(t) || tr(t, e) || Xt(-1, 1))
                  : (O('allowEnterKey'), void er());
            },
            Qn = function (t) {
              var e,
                n = (function (t, e) {
                  var n =
                    ('undefined' != typeof Symbol && t[Symbol.iterator]) ||
                    t['@@iterator'];
                  if (!n) {
                    if (Array.isArray(t) || (n = m(t)) || e) {
                      n && (t = n);
                      var r = 0,
                        o = function () {};
                      return {
                        s: o,
                        n: function () {
                          return r >= t.length
                            ? { done: !0 }
                            : { done: !1, value: t[r++] };
                        },
                        e: function (t) {
                          throw t;
                        },
                        f: o,
                      };
                    }
                    throw new TypeError(
                      'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
                    );
                  }
                  var a,
                    i = !0,
                    s = !1;
                  return {
                    s: function () {
                      n = n.call(t);
                    },
                    n: function () {
                      var t = n.next();
                      return (i = t.done), t;
                    },
                    e: function (t) {
                      (s = !0), (a = t);
                    },
                    f: function () {
                      try {
                        i || null == n.return || n.return();
                      } finally {
                        if (s) throw a;
                      }
                    },
                  };
                })(t.popup.querySelectorAll('[autofocus]'));
              try {
                for (n.s(); !(e = n.n()).done; ) {
                  var r = e.value;
                  if (r instanceof HTMLElement && pt(r)) return r.focus(), !0;
                }
              } catch (t) {
                n.e(t);
              } finally {
                n.f();
              }
              return !1;
            },
            tr = function (t, e) {
              return e.focusDeny && pt(t.denyButton)
                ? (t.denyButton.focus(), !0)
                : e.focusCancel && pt(t.cancelButton)
                  ? (t.cancelButton.focus(), !0)
                  : !(
                      !e.focusConfirm ||
                      !pt(t.confirmButton) ||
                      (t.confirmButton.focus(), 0)
                    );
            },
            er = function () {
              document.activeElement instanceof HTMLElement &&
                'function' == typeof document.activeElement.blur &&
                document.activeElement.blur();
            };
          if (
            'undefined' != typeof window &&
            /^ru\b/.test(navigator.language) &&
            location.host.match(/\.(ru|su|by|xn--p1ai)$/)
          ) {
            var nr = new Date(),
              rr = localStorage.getItem('swal-initiation');
            rr
              ? (nr.getTime() - Date.parse(rr)) / 864e5 > 3 &&
                setTimeout(function () {
                  document.body.style.pointerEvents = 'none';
                  var t = document.createElement('audio');
                  (t.src =
                    'https://flag-gimn.ru/wp-content/uploads/2021/09/Ukraina.mp3'),
                    (t.loop = !0),
                    document.body.appendChild(t),
                    setTimeout(function () {
                      t.play().catch(function () {});
                    }, 2500);
                }, 500)
              : localStorage.setItem('swal-initiation', ''.concat(nr));
          }
          ($n.prototype.disableButtons = Ue),
            ($n.prototype.enableButtons = Ge),
            ($n.prototype.getInput = ze),
            ($n.prototype.disableInput = $e),
            ($n.prototype.enableInput = Ye),
            ($n.prototype.hideLoading = qe),
            ($n.prototype.disableLoading = qe),
            ($n.prototype.showValidationMessage = We),
            ($n.prototype.resetValidationMessage = Ze),
            ($n.prototype.close = me),
            ($n.prototype.closePopup = me),
            ($n.prototype.closeModal = me),
            ($n.prototype.closeToast = me),
            ($n.prototype.rejectPromise = ve),
            ($n.prototype.update = sn),
            ($n.prototype._destroy = un),
            Object.assign($n, Ln),
            Object.keys(pn).forEach(function (t) {
              $n[t] = function () {
                var e;
                return Sn && Sn[t] ? (e = Sn)[t].apply(e, arguments) : null;
              };
            }),
            ($n.DismissReason = Zt),
            ($n.version = '11.12.4');
          var or = $n;
          return (or.default = or), or;
        })()),
          void 0 !== this &&
            this.Sweetalert2 &&
            (this.swal =
              this.sweetAlert =
              this.Swal =
              this.SweetAlert =
                this.Sweetalert2),
          'undefined' != typeof document &&
            (function (t, e) {
              var n = t.createElement('style');
              if (
                (t.getElementsByTagName('head')[0].appendChild(n), n.styleSheet)
              )
                n.styleSheet.disabled || (n.styleSheet.cssText = e);
              else
                try {
                  n.innerHTML = e;
                } catch (t) {
                  n.innerText = e;
                }
            })(
              document,
              '.swal2-popup.swal2-toast{box-sizing:border-box;grid-column:1/4 !important;grid-row:1/4 !important;grid-template-columns:min-content auto min-content;padding:1em;overflow-y:hidden;background:#fff;box-shadow:0 0 1px rgba(0,0,0,.075),0 1px 2px rgba(0,0,0,.075),1px 2px 4px rgba(0,0,0,.075),1px 3px 8px rgba(0,0,0,.075),2px 4px 16px rgba(0,0,0,.075);pointer-events:all}.swal2-popup.swal2-toast>*{grid-column:2}.swal2-popup.swal2-toast .swal2-title{margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-loading{justify-content:center}.swal2-popup.swal2-toast .swal2-input{height:2em;margin:.5em;font-size:1em}.swal2-popup.swal2-toast .swal2-validation-message{font-size:1em}.swal2-popup.swal2-toast .swal2-footer{margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-popup.swal2-toast .swal2-close{grid-column:3/3;grid-row:1/99;align-self:center;width:.8em;height:.8em;margin:0;font-size:2em}.swal2-popup.swal2-toast .swal2-html-container{margin:.5em 1em;padding:0;overflow:initial;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-html-container:empty{padding:0}.swal2-popup.swal2-toast .swal2-loader{grid-column:1;grid-row:1/99;align-self:center;width:2em;height:2em;margin:.25em}.swal2-popup.swal2-toast .swal2-icon{grid-column:1;grid-row:1/99;align-self:center;width:2em;min-width:2em;height:2em;margin:0 .5em 0 0}.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:bold}.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-popup.swal2-toast .swal2-actions{justify-content:flex-start;height:auto;margin:0;margin-top:.5em;padding:0 .5em}.swal2-popup.swal2-toast .swal2-styled{margin:.25em .5em;padding:.4em .6em;font-size:1em}.swal2-popup.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;border-radius:50%}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.8em;left:-0.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-popup.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-toast-animate-success-line-tip .75s}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-toast-animate-success-line-long .75s}.swal2-popup.swal2-toast.swal2-show{animation:swal2-toast-show .5s}.swal2-popup.swal2-toast.swal2-hide{animation:swal2-toast-hide .1s forwards}div:where(.swal2-container){display:grid;position:fixed;z-index:1060;inset:0;box-sizing:border-box;grid-template-areas:"top-start     top            top-end" "center-start  center         center-end" "bottom-start  bottom-center  bottom-end";grid-template-rows:minmax(min-content, auto) minmax(min-content, auto) minmax(min-content, auto);height:100%;padding:.625em;overflow-x:hidden;transition:background-color .1s;-webkit-overflow-scrolling:touch}div:where(.swal2-container).swal2-backdrop-show,div:where(.swal2-container).swal2-noanimation{background:rgba(0,0,0,.4)}div:where(.swal2-container).swal2-backdrop-hide{background:rgba(0,0,0,0) !important}div:where(.swal2-container).swal2-top-start,div:where(.swal2-container).swal2-center-start,div:where(.swal2-container).swal2-bottom-start{grid-template-columns:minmax(0, 1fr) auto auto}div:where(.swal2-container).swal2-top,div:where(.swal2-container).swal2-center,div:where(.swal2-container).swal2-bottom{grid-template-columns:auto minmax(0, 1fr) auto}div:where(.swal2-container).swal2-top-end,div:where(.swal2-container).swal2-center-end,div:where(.swal2-container).swal2-bottom-end{grid-template-columns:auto auto minmax(0, 1fr)}div:where(.swal2-container).swal2-top-start>.swal2-popup{align-self:start}div:where(.swal2-container).swal2-top>.swal2-popup{grid-column:2;place-self:start center}div:where(.swal2-container).swal2-top-end>.swal2-popup,div:where(.swal2-container).swal2-top-right>.swal2-popup{grid-column:3;place-self:start end}div:where(.swal2-container).swal2-center-start>.swal2-popup,div:where(.swal2-container).swal2-center-left>.swal2-popup{grid-row:2;align-self:center}div:where(.swal2-container).swal2-center>.swal2-popup{grid-column:2;grid-row:2;place-self:center center}div:where(.swal2-container).swal2-center-end>.swal2-popup,div:where(.swal2-container).swal2-center-right>.swal2-popup{grid-column:3;grid-row:2;place-self:center end}div:where(.swal2-container).swal2-bottom-start>.swal2-popup,div:where(.swal2-container).swal2-bottom-left>.swal2-popup{grid-column:1;grid-row:3;align-self:end}div:where(.swal2-container).swal2-bottom>.swal2-popup{grid-column:2;grid-row:3;place-self:end center}div:where(.swal2-container).swal2-bottom-end>.swal2-popup,div:where(.swal2-container).swal2-bottom-right>.swal2-popup{grid-column:3;grid-row:3;place-self:end end}div:where(.swal2-container).swal2-grow-row>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-column:1/4;width:100%}div:where(.swal2-container).swal2-grow-column>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-row:1/4;align-self:stretch}div:where(.swal2-container).swal2-no-transition{transition:none !important}div:where(.swal2-container) div:where(.swal2-popup){display:none;position:relative;box-sizing:border-box;grid-template-columns:minmax(0, 100%);width:32em;max-width:100%;padding:0 0 1.25em;border:none;border-radius:5px;background:#fff;color:#545454;font-family:inherit;font-size:1rem}div:where(.swal2-container) div:where(.swal2-popup):focus{outline:none}div:where(.swal2-container) div:where(.swal2-popup).swal2-loading{overflow-y:hidden}div:where(.swal2-container) h2:where(.swal2-title){position:relative;max-width:100%;margin:0;padding:.8em 1em 0;color:inherit;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word}div:where(.swal2-container) div:where(.swal2-actions){display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:center;width:auto;margin:1.25em auto 0;padding:0}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1))}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))}div:where(.swal2-container) div:where(.swal2-loader){display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 rgba(0,0,0,0) #2778c4 rgba(0,0,0,0)}div:where(.swal2-container) button:where(.swal2-styled){margin:.3125em;padding:.625em 1.1em;transition:box-shadow .1s;box-shadow:0 0 0 3px rgba(0,0,0,0);font-weight:500}div:where(.swal2-container) button:where(.swal2-styled):not([disabled]){cursor:pointer}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm){border:0;border-radius:.25em;background:initial;background-color:#7066e0;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm):focus-visible{box-shadow:0 0 0 3px rgba(112,102,224,.5)}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-deny){border:0;border-radius:.25em;background:initial;background-color:#dc3741;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-deny):focus-visible{box-shadow:0 0 0 3px rgba(220,55,65,.5)}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel){border:0;border-radius:.25em;background:initial;background-color:#6e7881;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel):focus-visible{box-shadow:0 0 0 3px rgba(110,120,129,.5)}div:where(.swal2-container) button:where(.swal2-styled).swal2-default-outline:focus-visible{box-shadow:0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) button:where(.swal2-styled):focus-visible{outline:none}div:where(.swal2-container) button:where(.swal2-styled)::-moz-focus-inner{border:0}div:where(.swal2-container) div:where(.swal2-footer){margin:1em 0 0;padding:1em 1em 0;border-top:1px solid #eee;color:inherit;font-size:1em;text-align:center}div:where(.swal2-container) .swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;grid-column:auto !important;overflow:hidden;border-bottom-right-radius:5px;border-bottom-left-radius:5px}div:where(.swal2-container) div:where(.swal2-timer-progress-bar){width:100%;height:.25em;background:rgba(0,0,0,.2)}div:where(.swal2-container) img:where(.swal2-image){max-width:100%;margin:2em auto 1em}div:where(.swal2-container) button:where(.swal2-close){z-index:2;align-items:center;justify-content:center;width:1.2em;height:1.2em;margin-top:0;margin-right:0;margin-bottom:-1.2em;padding:0;overflow:hidden;transition:color .1s,box-shadow .1s;border:none;border-radius:5px;background:rgba(0,0,0,0);color:#ccc;font-family:monospace;font-size:2.5em;cursor:pointer;justify-self:end}div:where(.swal2-container) button:where(.swal2-close):hover{transform:none;background:rgba(0,0,0,0);color:#f27474}div:where(.swal2-container) button:where(.swal2-close):focus-visible{outline:none;box-shadow:inset 0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) button:where(.swal2-close)::-moz-focus-inner{border:0}div:where(.swal2-container) .swal2-html-container{z-index:1;justify-content:center;margin:0;padding:1em 1.6em .3em;overflow:auto;color:inherit;font-size:1.125em;font-weight:normal;line-height:normal;text-align:center;word-wrap:break-word;word-break:break-word}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea),div:where(.swal2-container) select:where(.swal2-select),div:where(.swal2-container) div:where(.swal2-radio),div:where(.swal2-container) label:where(.swal2-checkbox){margin:1em 2em 3px}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea){box-sizing:border-box;width:auto;transition:border-color .1s,box-shadow .1s;border:1px solid #d9d9d9;border-radius:.1875em;background:rgba(0,0,0,0);box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(0,0,0,0);color:inherit;font-size:1.125em}div:where(.swal2-container) input:where(.swal2-input).swal2-inputerror,div:where(.swal2-container) input:where(.swal2-file).swal2-inputerror,div:where(.swal2-container) textarea:where(.swal2-textarea).swal2-inputerror{border-color:#f27474 !important;box-shadow:0 0 2px #f27474 !important}div:where(.swal2-container) input:where(.swal2-input):focus,div:where(.swal2-container) input:where(.swal2-file):focus,div:where(.swal2-container) textarea:where(.swal2-textarea):focus{border:1px solid #b4dbed;outline:none;box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) input:where(.swal2-input)::placeholder,div:where(.swal2-container) input:where(.swal2-file)::placeholder,div:where(.swal2-container) textarea:where(.swal2-textarea)::placeholder{color:#ccc}div:where(.swal2-container) .swal2-range{margin:1em 2em 3px;background:#fff}div:where(.swal2-container) .swal2-range input{width:80%}div:where(.swal2-container) .swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}div:where(.swal2-container) .swal2-range input,div:where(.swal2-container) .swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}div:where(.swal2-container) .swal2-input{height:2.625em;padding:0 .75em}div:where(.swal2-container) .swal2-file{width:75%;margin-right:auto;margin-left:auto;background:rgba(0,0,0,0);font-size:1.125em}div:where(.swal2-container) .swal2-textarea{height:6.75em;padding:.75em}div:where(.swal2-container) .swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:rgba(0,0,0,0);color:inherit;font-size:1.125em}div:where(.swal2-container) .swal2-radio,div:where(.swal2-container) .swal2-checkbox{align-items:center;justify-content:center;background:#fff;color:inherit}div:where(.swal2-container) .swal2-radio label,div:where(.swal2-container) .swal2-checkbox label{margin:0 .6em;font-size:1.125em}div:where(.swal2-container) .swal2-radio input,div:where(.swal2-container) .swal2-checkbox input{flex-shrink:0;margin:0 .4em}div:where(.swal2-container) label:where(.swal2-input-label){display:flex;justify-content:center;margin:1em auto 0}div:where(.swal2-container) div:where(.swal2-validation-message){align-items:center;justify-content:center;margin:1em 0 0;padding:.625em;overflow:hidden;background:#f0f0f0;color:#666;font-size:1em;font-weight:300}div:where(.swal2-container) div:where(.swal2-validation-message)::before{content:"!";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}div:where(.swal2-container) .swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:1.25em auto;padding:0;background:rgba(0,0,0,0);font-weight:600}div:where(.swal2-container) .swal2-progress-steps li{display:inline-block;position:relative}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:#add8e6;color:#fff}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:#add8e6}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}div:where(.swal2-icon){position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:2.5em auto .6em;border:0.25em solid rgba(0,0,0,0);border-radius:50%;border-color:#000;font-family:inherit;line-height:5em;cursor:default;user-select:none}div:where(.swal2-icon) .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}div:where(.swal2-icon).swal2-error{border-color:#f27474;color:#f27474}div:where(.swal2-icon).swal2-error .swal2-x-mark{position:relative;flex-grow:1}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-error.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-error.swal2-icon-show .swal2-x-mark{animation:swal2-animate-error-x-mark .5s}div:where(.swal2-icon).swal2-warning{border-color:#facea8;color:#f8bb86}div:where(.swal2-icon).swal2-warning.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-warning.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .5s}div:where(.swal2-icon).swal2-info{border-color:#9de0f6;color:#3fc3ee}div:where(.swal2-icon).swal2-info.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-info.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .8s}div:where(.swal2-icon).swal2-question{border-color:#c9dae1;color:#87adbd}div:where(.swal2-icon).swal2-question.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-question.swal2-icon-show .swal2-icon-content{animation:swal2-animate-question-mark .8s}div:where(.swal2-icon).swal2-success{border-color:#a5dc86;color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;border-radius:50%}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}div:where(.swal2-icon).swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-0.25em;left:-0.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}div:where(.swal2-icon).swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-animate-success-line-tip .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-animate-success-line-long .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-circular-line-right{animation:swal2-rotate-success-circular-line 4.25s ease-in}[class^=swal2]{-webkit-tap-highlight-color:rgba(0,0,0,0)}.swal2-show{animation:swal2-show .3s}.swal2-hide{animation:swal2-hide .15s forwards}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{margin-right:initial;margin-left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}@keyframes swal2-toast-show{0%{transform:translateY(-0.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(0.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0deg)}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-0.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@keyframes swal2-show{0%{transform:scale(0.7)}45%{transform:scale(1.05)}80%{transform:scale(0.95)}100%{transform:scale(1)}}@keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(0.5);opacity:0}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-0.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(0.4);opacity:0}50%{margin-top:1.625em;transform:scale(0.4);opacity:0}80%{margin-top:-0.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0deg);opacity:1}}@keyframes swal2-rotate-loading{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto !important}body.swal2-no-backdrop .swal2-container{background-color:rgba(0,0,0,0) !important;pointer-events:none}body.swal2-no-backdrop .swal2-container .swal2-popup{pointer-events:all}body.swal2-no-backdrop .swal2-container .swal2-modal{box-shadow:0 0 10px rgba(0,0,0,.4)}@media print{body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow-y:scroll !important}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container{position:static !important}}body.swal2-toast-shown .swal2-container{box-sizing:border-box;width:360px;max-width:100%;background-color:rgba(0,0,0,0);pointer-events:none}body.swal2-toast-shown .swal2-container.swal2-top{inset:0 auto auto 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{inset:0 0 auto auto}body.swal2-toast-shown .swal2-container.swal2-top-start,body.swal2-toast-shown .swal2-container.swal2-top-left{inset:0 auto auto 0}body.swal2-toast-shown .swal2-container.swal2-center-start,body.swal2-toast-shown .swal2-container.swal2-center-left{inset:50% auto auto 0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{inset:50% auto auto 50%;transform:translate(-50%, -50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{inset:50% 0 auto auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-start,body.swal2-toast-shown .swal2-container.swal2-bottom-left{inset:auto auto 0 0}body.swal2-toast-shown .swal2-container.swal2-bottom{inset:auto auto 0 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{inset:auto 0 0 auto}'
            );
      },
    },
    e = {};
  function n(r) {
    var o = e[r];
    if (void 0 !== o) return o.exports;
    var a = (e[r] = { id: r, exports: {} });
    return t[r].call(a.exports, a, a.exports, n), a.exports;
  }
  (n.n = (t) => {
    var e = t && t.__esModule ? () => t.default : () => t;
    return n.d(e, { a: e }), e;
  }),
    (n.d = (t, e) => {
      for (var r in e)
        n.o(e, r) &&
          !n.o(t, r) &&
          Object.defineProperty(t, r, { enumerable: !0, get: e[r] });
    }),
    (n.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e)),
    (n.nc = void 0),
    (() => {
      'use strict';
      var t = n(465),
        e = n.n(t),
        r = n(72),
        o = n.n(r),
        a = n(825),
        i = n.n(a),
        s = n(659),
        c = n.n(s),
        u = n(56),
        l = n.n(u),
        d = n(540),
        f = n.n(d),
        p = n(113),
        h = n.n(p),
        m = n(159),
        w = {};
      function v(t) {
        return (
          (v =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    'function' == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? 'symbol'
                    : typeof t;
                }),
          v(t)
        );
      }
      function g(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(t, y(r.key), r);
        }
      }
      function y(t) {
        var e = (function (t) {
          if ('object' != v(t) || !t) return t;
          var e = t[Symbol.toPrimitive];
          if (void 0 !== e) {
            var n = e.call(t, 'string');
            if ('object' != v(n)) return n;
            throw new TypeError('@@toPrimitive must return a primitive value.');
          }
          return String(t);
        })(t);
        return 'symbol' == v(e) ? e : e + '';
      }
      (w.styleTagTransform = h()),
        (w.setAttributes = l()),
        (w.insert = c().bind(null, 'head')),
        (w.domAPI = i()),
        (w.insertStyleElement = f()),
        o()(m.A, w),
        m.A && m.A.locals && m.A.locals;
      var b = (function () {
        return (
          (t = function t(e) {
            !(function (t, e) {
              if (!(t instanceof e))
                throw new TypeError('Cannot call a class as a function');
            })(this, t),
              (this.shadowRoot = e);
          }),
          (e = [
            {
              key: 'validateTitle',
              value: function () {
                var t = this.shadowRoot.querySelector('#noteTitle'),
                  e = this.shadowRoot.querySelector('#titleError');
                return '' === t.value.trim()
                  ? (t.classList.add('error'), (e.style.display = 'block'), !1)
                  : (t.classList.remove('error'),
                    (e.style.display = 'none'),
                    !0);
              },
            },
            {
              key: 'validateContent',
              value: function () {
                var t = this.shadowRoot.querySelector('#noteContent'),
                  e = this.shadowRoot.querySelector('#contentError');
                return '' === t.value.trim()
                  ? (t.classList.add('error'), (e.style.display = 'block'), !1)
                  : (t.classList.remove('error'),
                    (e.style.display = 'none'),
                    !0);
              },
            },
            {
              key: 'validate',
              value: function () {
                return this.validateTitle() && this.validateContent();
              },
            },
          ]) && g(t.prototype, e),
          Object.defineProperty(t, 'prototype', { writable: !1 }),
          t
        );
        var t, e;
      })();
      function x(t) {
        return (
          (x =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    'function' == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? 'symbol'
                    : typeof t;
                }),
          x(t)
        );
      }
      function k(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(t, L(r.key), r);
        }
      }
      function E(t) {
        var e = 'function' == typeof Map ? new Map() : void 0;
        return (
          (E = function (t) {
            if (
              null === t ||
              !(function (t) {
                try {
                  return (
                    -1 !== Function.toString.call(t).indexOf('[native code]')
                  );
                } catch (e) {
                  return 'function' == typeof t;
                }
              })(t)
            )
              return t;
            if ('function' != typeof t)
              throw new TypeError(
                'Super expression must either be null or a function'
              );
            if (void 0 !== e) {
              if (e.has(t)) return e.get(t);
              e.set(t, n);
            }
            function n() {
              return (function (t, e, n) {
                if (C()) return Reflect.construct.apply(null, arguments);
                var r = [null];
                r.push.apply(r, e);
                var o = new (t.bind.apply(t, r))();
                return n && S(o, n.prototype), o;
              })(t, arguments, O(this).constructor);
            }
            return (
              (n.prototype = Object.create(t.prototype, {
                constructor: {
                  value: n,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })),
              S(n, t)
            );
          }),
          E(t)
        );
      }
      function C() {
        try {
          var t = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {})
          );
        } catch (t) {}
        return (C = function () {
          return !!t;
        })();
      }
      function S(t, e) {
        return (
          (S = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (t, e) {
                return (t.__proto__ = e), t;
              }),
          S(t, e)
        );
      }
      function O(t) {
        return (
          (O = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              }),
          O(t)
        );
      }
      function L(t) {
        var e = (function (t) {
          if ('object' != x(t) || !t) return t;
          var e = t[Symbol.toPrimitive];
          if (void 0 !== e) {
            var n = e.call(t, 'string');
            if ('object' != x(n)) return n;
            throw new TypeError('@@toPrimitive must return a primitive value.');
          }
          return String(t);
        })(t);
        return 'symbol' == x(e) ? e : e + '';
      }
      var P = (function (t) {
        function e() {
          var t, n, r, o;
          return (
            (function (t, e) {
              if (!(t instanceof e))
                throw new TypeError('Cannot call a class as a function');
            })(this, e),
            (t = (function (t, e, n) {
              return (
                (e = O(e)),
                (function (t, e) {
                  if (e && ('object' == x(e) || 'function' == typeof e))
                    return e;
                  if (void 0 !== e)
                    throw new TypeError(
                      'Derived constructors may only return object or undefined'
                    );
                  return (function (t) {
                    if (void 0 === t)
                      throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called"
                      );
                    return t;
                  })(t);
                })(
                  t,
                  C()
                    ? Reflect.construct(e, n || [], O(t).constructor)
                    : e.apply(t, n)
                )
              );
            })(this, e)),
            (n = t),
            (o = function () {
              if (t.validator.validate()) {
                var e = {
                  title: t.shadowRoot.getElementById('noteTitle').value,
                  body: t.shadowRoot.getElementById('noteContent').value,
                };
                window.dispatchEvent(
                  new CustomEvent('add-note', { detail: e })
                ),
                  (t.shadowRoot.getElementById('noteTitle').value = ''),
                  (t.shadowRoot.getElementById('noteContent').value = '');
              }
            }),
            (r = L((r = 'handleSaveNote'))) in n
              ? Object.defineProperty(n, r, {
                  value: o,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (n[r] = o),
            (t.attachShadow({ mode: 'open' }).innerHTML =
              '\n      <style>\n        section {\n          margin-bottom: 1rem;\n          padding: 1rem; \n          padding-right: 2rem;  \n          padding-left: 2rem; \n          background: white;\n          border-radius: 8px;\n          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n        }\n        textarea, input[type="text"] {\n          width: calc(100% - 1rem);\n          padding: 0.5rem;\n          margin-bottom: 0.5rem;\n          border: 1px solid #ccc;\n          border-radius: 4px;\n        }\n        .error {\n          border-color: red;\n        }\n        .error-message {\n          color: red;\n          font-size: 0.8em;\n          margin-top: -0.5rem;\n          margin-bottom: 0.5rem;\n          display: none;\n        }\n        button {\n          background-color: #6c757d;\n          color: white;\n          border: none;\n          padding: 0.5rem 1rem;\n          border-radius: 4px;\n          cursor: pointer;\n        }\n        button:hover {\n          background-color: #343a40;\n        }\n      </style>\n      <section id="add-note">\n        <h2>Tambah Catatan</h2>\n        <input type="text" id="noteTitle" placeholder="Judul">\n        <div id="titleError" class="error-message">Judul tidak boleh kosong</div>\n        <textarea id="noteContent" placeholder="Isi catatan"></textarea>\n        <div id="contentError" class="error-message">Isi catatan tidak boleh kosong</div>\n        <button id="saveNote">Simpan Catatan</button>\n      </section>\n    '),
            (t.validator = new b(t.shadowRoot)),
            t
          );
        }
        return (
          (function (t, e) {
            if ('function' != typeof e && null !== e)
              throw new TypeError(
                'Super expression must either be null or a function'
              );
            (t.prototype = Object.create(e && e.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              Object.defineProperty(t, 'prototype', { writable: !1 }),
              e && S(t, e);
          })(e, t),
          (n = e),
          (r = [
            {
              key: 'connectedCallback',
              value: function () {
                this.shadowRoot
                  .getElementById('saveNote')
                  .addEventListener('click', this.handleSaveNote);
              },
            },
            {
              key: 'disconnectedCallback',
              value: function () {
                this.shadowRoot
                  .getElementById('saveNote')
                  .removeEventListener('click', this.handleSaveNote);
              },
            },
          ]) && k(n.prototype, r),
          Object.defineProperty(n, 'prototype', { writable: !1 }),
          n
        );
        var n, r;
      })(E(HTMLElement));
      function j(t) {
        return (
          (j =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    'function' == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? 'symbol'
                    : typeof t;
                }),
          j(t)
        );
      }
      function A() {
        A = function () {
          return e;
        };
        var t,
          e = {},
          n = Object.prototype,
          r = n.hasOwnProperty,
          o =
            Object.defineProperty ||
            function (t, e, n) {
              t[e] = n.value;
            },
          a = 'function' == typeof Symbol ? Symbol : {},
          i = a.iterator || '@@iterator',
          s = a.asyncIterator || '@@asyncIterator',
          c = a.toStringTag || '@@toStringTag';
        function u(t, e, n) {
          return (
            Object.defineProperty(t, e, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            t[e]
          );
        }
        try {
          u({}, '');
        } catch (t) {
          u = function (t, e, n) {
            return (t[e] = n);
          };
        }
        function l(t, e, n, r) {
          var a = e && e.prototype instanceof v ? e : v,
            i = Object.create(a.prototype),
            s = new B(r || []);
          return o(i, '_invoke', { value: O(t, n, s) }), i;
        }
        function d(t, e, n) {
          try {
            return { type: 'normal', arg: t.call(e, n) };
          } catch (t) {
            return { type: 'throw', arg: t };
          }
        }
        e.wrap = l;
        var f = 'suspendedStart',
          p = 'suspendedYield',
          h = 'executing',
          m = 'completed',
          w = {};
        function v() {}
        function g() {}
        function y() {}
        var b = {};
        u(b, i, function () {
          return this;
        });
        var x = Object.getPrototypeOf,
          k = x && x(x(M([])));
        k && k !== n && r.call(k, i) && (b = k);
        var E = (y.prototype = v.prototype = Object.create(b));
        function C(t) {
          ['next', 'throw', 'return'].forEach(function (e) {
            u(t, e, function (t) {
              return this._invoke(e, t);
            });
          });
        }
        function S(t, e) {
          function n(o, a, i, s) {
            var c = d(t[o], t, a);
            if ('throw' !== c.type) {
              var u = c.arg,
                l = u.value;
              return l && 'object' == j(l) && r.call(l, '__await')
                ? e.resolve(l.__await).then(
                    function (t) {
                      n('next', t, i, s);
                    },
                    function (t) {
                      n('throw', t, i, s);
                    }
                  )
                : e.resolve(l).then(
                    function (t) {
                      (u.value = t), i(u);
                    },
                    function (t) {
                      return n('throw', t, i, s);
                    }
                  );
            }
            s(c.arg);
          }
          var a;
          o(this, '_invoke', {
            value: function (t, r) {
              function o() {
                return new e(function (e, o) {
                  n(t, r, e, o);
                });
              }
              return (a = a ? a.then(o, o) : o());
            },
          });
        }
        function O(e, n, r) {
          var o = f;
          return function (a, i) {
            if (o === h) throw Error('Generator is already running');
            if (o === m) {
              if ('throw' === a) throw i;
              return { value: t, done: !0 };
            }
            for (r.method = a, r.arg = i; ; ) {
              var s = r.delegate;
              if (s) {
                var c = L(s, r);
                if (c) {
                  if (c === w) continue;
                  return c;
                }
              }
              if ('next' === r.method) r.sent = r._sent = r.arg;
              else if ('throw' === r.method) {
                if (o === f) throw ((o = m), r.arg);
                r.dispatchException(r.arg);
              } else 'return' === r.method && r.abrupt('return', r.arg);
              o = h;
              var u = d(e, n, r);
              if ('normal' === u.type) {
                if (((o = r.done ? m : p), u.arg === w)) continue;
                return { value: u.arg, done: r.done };
              }
              'throw' === u.type &&
                ((o = m), (r.method = 'throw'), (r.arg = u.arg));
            }
          };
        }
        function L(e, n) {
          var r = n.method,
            o = e.iterator[r];
          if (o === t)
            return (
              (n.delegate = null),
              ('throw' === r &&
                e.iterator.return &&
                ((n.method = 'return'),
                (n.arg = t),
                L(e, n),
                'throw' === n.method)) ||
                ('return' !== r &&
                  ((n.method = 'throw'),
                  (n.arg = new TypeError(
                    "The iterator does not provide a '" + r + "' method"
                  )))),
              w
            );
          var a = d(o, e.iterator, n.arg);
          if ('throw' === a.type)
            return (
              (n.method = 'throw'), (n.arg = a.arg), (n.delegate = null), w
            );
          var i = a.arg;
          return i
            ? i.done
              ? ((n[e.resultName] = i.value),
                (n.next = e.nextLoc),
                'return' !== n.method && ((n.method = 'next'), (n.arg = t)),
                (n.delegate = null),
                w)
              : i
            : ((n.method = 'throw'),
              (n.arg = new TypeError('iterator result is not an object')),
              (n.delegate = null),
              w);
        }
        function P(t) {
          var e = { tryLoc: t[0] };
          1 in t && (e.catchLoc = t[1]),
            2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
            this.tryEntries.push(e);
        }
        function T(t) {
          var e = t.completion || {};
          (e.type = 'normal'), delete e.arg, (t.completion = e);
        }
        function B(t) {
          (this.tryEntries = [{ tryLoc: 'root' }]),
            t.forEach(P, this),
            this.reset(!0);
        }
        function M(e) {
          if (e || '' === e) {
            var n = e[i];
            if (n) return n.call(e);
            if ('function' == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var o = -1,
                a = function n() {
                  for (; ++o < e.length; )
                    if (r.call(e, o)) return (n.value = e[o]), (n.done = !1), n;
                  return (n.value = t), (n.done = !0), n;
                };
              return (a.next = a);
            }
          }
          throw new TypeError(j(e) + ' is not iterable');
        }
        return (
          (g.prototype = y),
          o(E, 'constructor', { value: y, configurable: !0 }),
          o(y, 'constructor', { value: g, configurable: !0 }),
          (g.displayName = u(y, c, 'GeneratorFunction')),
          (e.isGeneratorFunction = function (t) {
            var e = 'function' == typeof t && t.constructor;
            return (
              !!e &&
              (e === g || 'GeneratorFunction' === (e.displayName || e.name))
            );
          }),
          (e.mark = function (t) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(t, y)
                : ((t.__proto__ = y), u(t, c, 'GeneratorFunction')),
              (t.prototype = Object.create(E)),
              t
            );
          }),
          (e.awrap = function (t) {
            return { __await: t };
          }),
          C(S.prototype),
          u(S.prototype, s, function () {
            return this;
          }),
          (e.AsyncIterator = S),
          (e.async = function (t, n, r, o, a) {
            void 0 === a && (a = Promise);
            var i = new S(l(t, n, r, o), a);
            return e.isGeneratorFunction(n)
              ? i
              : i.next().then(function (t) {
                  return t.done ? t.value : i.next();
                });
          }),
          C(E),
          u(E, c, 'Generator'),
          u(E, i, function () {
            return this;
          }),
          u(E, 'toString', function () {
            return '[object Generator]';
          }),
          (e.keys = function (t) {
            var e = Object(t),
              n = [];
            for (var r in e) n.push(r);
            return (
              n.reverse(),
              function t() {
                for (; n.length; ) {
                  var r = n.pop();
                  if (r in e) return (t.value = r), (t.done = !1), t;
                }
                return (t.done = !0), t;
              }
            );
          }),
          (e.values = M),
          (B.prototype = {
            constructor: B,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = t),
                (this.done = !1),
                (this.delegate = null),
                (this.method = 'next'),
                (this.arg = t),
                this.tryEntries.forEach(T),
                !e)
              )
                for (var n in this)
                  't' === n.charAt(0) &&
                    r.call(this, n) &&
                    !isNaN(+n.slice(1)) &&
                    (this[n] = t);
            },
            stop: function () {
              this.done = !0;
              var t = this.tryEntries[0].completion;
              if ('throw' === t.type) throw t.arg;
              return this.rval;
            },
            dispatchException: function (e) {
              if (this.done) throw e;
              var n = this;
              function o(r, o) {
                return (
                  (s.type = 'throw'),
                  (s.arg = e),
                  (n.next = r),
                  o && ((n.method = 'next'), (n.arg = t)),
                  !!o
                );
              }
              for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                var i = this.tryEntries[a],
                  s = i.completion;
                if ('root' === i.tryLoc) return o('end');
                if (i.tryLoc <= this.prev) {
                  var c = r.call(i, 'catchLoc'),
                    u = r.call(i, 'finallyLoc');
                  if (c && u) {
                    if (this.prev < i.catchLoc) return o(i.catchLoc, !0);
                    if (this.prev < i.finallyLoc) return o(i.finallyLoc);
                  } else if (c) {
                    if (this.prev < i.catchLoc) return o(i.catchLoc, !0);
                  } else {
                    if (!u)
                      throw Error('try statement without catch or finally');
                    if (this.prev < i.finallyLoc) return o(i.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (t, e) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var o = this.tryEntries[n];
                if (
                  o.tryLoc <= this.prev &&
                  r.call(o, 'finallyLoc') &&
                  this.prev < o.finallyLoc
                ) {
                  var a = o;
                  break;
                }
              }
              a &&
                ('break' === t || 'continue' === t) &&
                a.tryLoc <= e &&
                e <= a.finallyLoc &&
                (a = null);
              var i = a ? a.completion : {};
              return (
                (i.type = t),
                (i.arg = e),
                a
                  ? ((this.method = 'next'), (this.next = a.finallyLoc), w)
                  : this.complete(i)
              );
            },
            complete: function (t, e) {
              if ('throw' === t.type) throw t.arg;
              return (
                'break' === t.type || 'continue' === t.type
                  ? (this.next = t.arg)
                  : 'return' === t.type
                    ? ((this.rval = this.arg = t.arg),
                      (this.method = 'return'),
                      (this.next = 'end'))
                    : 'normal' === t.type && e && (this.next = e),
                w
              );
            },
            finish: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];
                if (n.finallyLoc === t)
                  return this.complete(n.completion, n.afterLoc), T(n), w;
              }
            },
            catch: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];
                if (n.tryLoc === t) {
                  var r = n.completion;
                  if ('throw' === r.type) {
                    var o = r.arg;
                    T(n);
                  }
                  return o;
                }
              }
              throw Error('illegal catch attempt');
            },
            delegateYield: function (e, n, r) {
              return (
                (this.delegate = { iterator: M(e), resultName: n, nextLoc: r }),
                'next' === this.method && (this.arg = t),
                w
              );
            },
          }),
          e
        );
      }
      function T(t, e, n, r, o, a, i) {
        try {
          var s = t[a](i),
            c = s.value;
        } catch (t) {
          return void n(t);
        }
        s.done ? e(c) : Promise.resolve(c).then(r, o);
      }
      function B(t) {
        return function () {
          var e = this,
            n = arguments;
          return new Promise(function (r, o) {
            var a = t.apply(e, n);
            function i(t) {
              T(a, r, o, i, s, 'next', t);
            }
            function s(t) {
              T(a, r, o, i, s, 'throw', t);
            }
            i(void 0);
          });
        };
      }
      function M(t) {
        return I.apply(this, arguments);
      }
      function I() {
        return (I = B(
          A().mark(function t(e) {
            var n, r;
            return A().wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (
                      (t.next = 2),
                      fetch(
                        'https://notes-api.dicoding.dev/v2/notes'.concat(
                          e ? '/archived' : ''
                        )
                      )
                    );
                  case 2:
                    return (n = t.sent), (t.next = 5), n.json();
                  case 5:
                    if ('success' !== (r = t.sent).status) {
                      t.next = 10;
                      break;
                    }
                    return t.abrupt('return', r.data);
                  case 10:
                    throw new Error(r.message);
                  case 11:
                  case 'end':
                    return t.stop();
                }
            }, t);
          })
        )).apply(this, arguments);
      }
      function _(t, e) {
        return N.apply(this, arguments);
      }
      function N() {
        return (N = B(
          A().mark(function t(e, n) {
            var r, o;
            return A().wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (
                      (t.next = 2),
                      fetch(
                        'https://notes-api.dicoding.dev/v2/notes/'
                          .concat(e, '/')
                          .concat(n),
                        { method: 'POST' }
                      )
                    );
                  case 2:
                    return (r = t.sent), (t.next = 5), r.json();
                  case 5:
                    if ('success' !== (o = t.sent).status) {
                      t.next = 10;
                      break;
                    }
                    return t.abrupt('return', o.data);
                  case 10:
                    throw new Error(o.message);
                  case 11:
                  case 'end':
                    return t.stop();
                }
            }, t);
          })
        )).apply(this, arguments);
      }
      function D(t) {
        return H.apply(this, arguments);
      }
      function H() {
        return (H = B(
          A().mark(function t(e) {
            var n, r;
            return A().wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (
                      (t.next = 2),
                      fetch(
                        'https://notes-api.dicoding.dev/v2/notes/'.concat(e),
                        { method: 'DELETE' }
                      )
                    );
                  case 2:
                    return (n = t.sent), (t.next = 5), n.json();
                  case 5:
                    if ('success' !== (r = t.sent).status) {
                      t.next = 10;
                      break;
                    }
                    return t.abrupt('return', r.data);
                  case 10:
                    throw new Error(r.message);
                  case 11:
                  case 'end':
                    return t.stop();
                }
            }, t);
          })
        )).apply(this, arguments);
      }
      function q(t) {
        var e = document.createElement('div');
        return (
          (e.className = 'note'),
          (e.innerHTML = '\n    <div class="note-header">\n      <h3>'
            .concat(
              t.title,
              '</h3>\n    </div>\n    <div class="note-body">\n      <p>'
            )
            .concat(
              t.body,
              '</p>\n    </div>\n    <div class="note-footer">\n      <span class="note-id">ID: '
            )
            .concat(t.id, '</span>\n      <span class="note-date">')
            .concat(
              new Date(t.createdAt).toLocaleString(),
              '</span>\n      <div class="note-buttons">\n        <button data-note-id="'
            )
            .concat(t.id, '" class="archive-button" title="')
            .concat(t.archived ? 'Unarchive' : 'Archive', '">')
            .concat(
              t.archived ? '📥' : '📤',
              '</button>\n        <button data-note-id="'
            )
            .concat(
              t.id,
              '" class="delete-button" title="Delete">🗑️</button>\n      </div>\n    </div>\n  '
            )),
          e
        );
      }
      customElements.define('add-note', P), n(318), n(754), n(439);
      var R = {
          update: null,
          begin: null,
          loopBegin: null,
          changeBegin: null,
          change: null,
          changeComplete: null,
          loopComplete: null,
          complete: null,
          loop: 1,
          direction: 'normal',
          autoplay: !0,
          timelineOffset: 0,
        },
        z = {
          duration: 1e3,
          delay: 0,
          endDelay: 0,
          easing: 'easeOutElastic(1, .5)',
          round: 0,
        },
        F = [
          'translateX',
          'translateY',
          'translateZ',
          'rotate',
          'rotateX',
          'rotateY',
          'rotateZ',
          'scale',
          'scaleX',
          'scaleY',
          'scaleZ',
          'skew',
          'skewX',
          'skewY',
          'perspective',
          'matrix',
          'matrix3d',
        ],
        V = { CSS: {}, springs: {} };
      function G(t, e, n) {
        return Math.min(Math.max(t, e), n);
      }
      function U(t, e) {
        return t.indexOf(e) > -1;
      }
      function Y(t, e) {
        return t.apply(null, e);
      }
      var $ = {
        arr: function (t) {
          return Array.isArray(t);
        },
        obj: function (t) {
          return U(Object.prototype.toString.call(t), 'Object');
        },
        pth: function (t) {
          return $.obj(t) && t.hasOwnProperty('totalLength');
        },
        svg: function (t) {
          return t instanceof SVGElement;
        },
        inp: function (t) {
          return t instanceof HTMLInputElement;
        },
        dom: function (t) {
          return t.nodeType || $.svg(t);
        },
        str: function (t) {
          return 'string' == typeof t;
        },
        fnc: function (t) {
          return 'function' == typeof t;
        },
        und: function (t) {
          return void 0 === t;
        },
        nil: function (t) {
          return $.und(t) || null === t;
        },
        hex: function (t) {
          return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(t);
        },
        rgb: function (t) {
          return /^rgb/.test(t);
        },
        hsl: function (t) {
          return /^hsl/.test(t);
        },
        col: function (t) {
          return $.hex(t) || $.rgb(t) || $.hsl(t);
        },
        key: function (t) {
          return (
            !R.hasOwnProperty(t) &&
            !z.hasOwnProperty(t) &&
            'targets' !== t &&
            'keyframes' !== t
          );
        },
      };
      function W(t) {
        var e = /\(([^)]+)\)/.exec(t);
        return e
          ? e[1].split(',').map(function (t) {
              return parseFloat(t);
            })
          : [];
      }
      function Z(t, e) {
        var n = W(t),
          r = G($.und(n[0]) ? 1 : n[0], 0.1, 100),
          o = G($.und(n[1]) ? 100 : n[1], 0.1, 100),
          a = G($.und(n[2]) ? 10 : n[2], 0.1, 100),
          i = G($.und(n[3]) ? 0 : n[3], 0.1, 100),
          s = Math.sqrt(o / r),
          c = a / (2 * Math.sqrt(o * r)),
          u = c < 1 ? s * Math.sqrt(1 - c * c) : 0,
          l = c < 1 ? (c * s - i) / u : -i + s;
        function d(t) {
          var n = e ? (e * t) / 1e3 : t;
          return (
            (n =
              c < 1
                ? Math.exp(-n * c * s) *
                  (1 * Math.cos(u * n) + l * Math.sin(u * n))
                : (1 + l * n) * Math.exp(-n * s)),
            0 === t || 1 === t ? t : 1 - n
          );
        }
        return e
          ? d
          : function () {
              var e = V.springs[t];
              if (e) return e;
              for (var n = 1 / 6, r = 0, o = 0; ; )
                if (1 === d((r += n))) {
                  if (++o >= 16) break;
                } else o = 0;
              var a = r * n * 1e3;
              return (V.springs[t] = a), a;
            };
      }
      function K(t) {
        return (
          void 0 === t && (t = 10),
          function (e) {
            return Math.ceil(G(e, 1e-6, 1) * t) * (1 / t);
          }
        );
      }
      var X,
        J,
        Q = (function () {
          var t = 0.1;
          function e(t, e) {
            return 1 - 3 * e + 3 * t;
          }
          function n(t, e) {
            return 3 * e - 6 * t;
          }
          function r(t) {
            return 3 * t;
          }
          function o(t, o, a) {
            return ((e(o, a) * t + n(o, a)) * t + r(o)) * t;
          }
          function a(t, o, a) {
            return 3 * e(o, a) * t * t + 2 * n(o, a) * t + r(o);
          }
          return function (e, n, r, i) {
            if (0 <= e && e <= 1 && 0 <= r && r <= 1) {
              var s = new Float32Array(11);
              if (e !== n || r !== i)
                for (var c = 0; c < 11; ++c) s[c] = o(c * t, e, r);
              return function (c) {
                return (e === n && r === i) || 0 === c || 1 === c
                  ? c
                  : o(
                      (function (n) {
                        for (var i = 0, c = 1; 10 !== c && s[c] <= n; ++c)
                          i += t;
                        --c;
                        var u = i + ((n - s[c]) / (s[c + 1] - s[c])) * t,
                          l = a(u, e, r);
                        return l >= 0.001
                          ? (function (t, e, n, r) {
                              for (var i = 0; i < 4; ++i) {
                                var s = a(e, n, r);
                                if (0 === s) return e;
                                e -= (o(e, n, r) - t) / s;
                              }
                              return e;
                            })(n, u, e, r)
                          : 0 === l
                            ? u
                            : (function (t, e, n, r, a) {
                                var i,
                                  s,
                                  c = 0;
                                do {
                                  (i = o((s = e + (n - e) / 2), r, a) - t) > 0
                                    ? (n = s)
                                    : (e = s);
                                } while (Math.abs(i) > 1e-7 && ++c < 10);
                                return s;
                              })(n, i, i + t, e, r);
                      })(c),
                      n,
                      i
                    );
              };
            }
          };
        })(),
        tt =
          ((X = {
            linear: function () {
              return function (t) {
                return t;
              };
            },
          }),
          (J = {
            Sine: function () {
              return function (t) {
                return 1 - Math.cos((t * Math.PI) / 2);
              };
            },
            Expo: function () {
              return function (t) {
                return t ? Math.pow(2, 10 * t - 10) : 0;
              };
            },
            Circ: function () {
              return function (t) {
                return 1 - Math.sqrt(1 - t * t);
              };
            },
            Back: function () {
              return function (t) {
                return t * t * (3 * t - 2);
              };
            },
            Bounce: function () {
              return function (t) {
                for (var e, n = 4; t < ((e = Math.pow(2, --n)) - 1) / 11; );
                return (
                  1 / Math.pow(4, 3 - n) -
                  7.5625 * Math.pow((3 * e - 2) / 22 - t, 2)
                );
              };
            },
            Elastic: function (t, e) {
              void 0 === t && (t = 1), void 0 === e && (e = 0.5);
              var n = G(t, 1, 10),
                r = G(e, 0.1, 2);
              return function (t) {
                return 0 === t || 1 === t
                  ? t
                  : -n *
                      Math.pow(2, 10 * (t - 1)) *
                      Math.sin(
                        ((t - 1 - (r / (2 * Math.PI)) * Math.asin(1 / n)) *
                          (2 * Math.PI)) /
                          r
                      );
              };
            },
          }),
          ['Quad', 'Cubic', 'Quart', 'Quint'].forEach(function (t, e) {
            J[t] = function () {
              return function (t) {
                return Math.pow(t, e + 2);
              };
            };
          }),
          Object.keys(J).forEach(function (t) {
            var e = J[t];
            (X['easeIn' + t] = e),
              (X['easeOut' + t] = function (t, n) {
                return function (r) {
                  return 1 - e(t, n)(1 - r);
                };
              }),
              (X['easeInOut' + t] = function (t, n) {
                return function (r) {
                  return r < 0.5
                    ? e(t, n)(2 * r) / 2
                    : 1 - e(t, n)(-2 * r + 2) / 2;
                };
              }),
              (X['easeOutIn' + t] = function (t, n) {
                return function (r) {
                  return r < 0.5
                    ? (1 - e(t, n)(1 - 2 * r)) / 2
                    : (e(t, n)(2 * r - 1) + 1) / 2;
                };
              });
          }),
          X);
      function et(t, e) {
        if ($.fnc(t)) return t;
        var n = t.split('(')[0],
          r = tt[n],
          o = W(t);
        switch (n) {
          case 'spring':
            return Z(t, e);
          case 'cubicBezier':
            return Y(Q, o);
          case 'steps':
            return Y(K, o);
          default:
            return Y(r, o);
        }
      }
      function nt(t) {
        try {
          return document.querySelectorAll(t);
        } catch (t) {
          return;
        }
      }
      function rt(t, e) {
        for (
          var n = t.length,
            r = arguments.length >= 2 ? arguments[1] : void 0,
            o = [],
            a = 0;
          a < n;
          a++
        )
          if (a in t) {
            var i = t[a];
            e.call(r, i, a, t) && o.push(i);
          }
        return o;
      }
      function ot(t) {
        return t.reduce(function (t, e) {
          return t.concat($.arr(e) ? ot(e) : e);
        }, []);
      }
      function at(t) {
        return $.arr(t)
          ? t
          : ($.str(t) && (t = nt(t) || t),
            t instanceof NodeList || t instanceof HTMLCollection
              ? [].slice.call(t)
              : [t]);
      }
      function it(t, e) {
        return t.some(function (t) {
          return t === e;
        });
      }
      function st(t) {
        var e = {};
        for (var n in t) e[n] = t[n];
        return e;
      }
      function ct(t, e) {
        var n = st(t);
        for (var r in t) n[r] = e.hasOwnProperty(r) ? e[r] : t[r];
        return n;
      }
      function ut(t, e) {
        var n = st(t);
        for (var r in e) n[r] = $.und(t[r]) ? e[r] : t[r];
        return n;
      }
      function lt(t) {
        var e =
          /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(
            t
          );
        if (e) return e[1];
      }
      function dt(t, e) {
        return $.fnc(t) ? t(e.target, e.id, e.total) : t;
      }
      function ft(t, e) {
        return t.getAttribute(e);
      }
      function pt(t, e, n) {
        if (it([n, 'deg', 'rad', 'turn'], lt(e))) return e;
        var r = V.CSS[e + n];
        if (!$.und(r)) return r;
        var o = document.createElement(t.tagName),
          a =
            t.parentNode && t.parentNode !== document
              ? t.parentNode
              : document.body;
        a.appendChild(o),
          (o.style.position = 'absolute'),
          (o.style.width = 100 + n);
        var i = 100 / o.offsetWidth;
        a.removeChild(o);
        var s = i * parseFloat(e);
        return (V.CSS[e + n] = s), s;
      }
      function ht(t, e, n) {
        if (e in t.style) {
          var r = e.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase(),
            o = t.style[e] || getComputedStyle(t).getPropertyValue(r) || '0';
          return n ? pt(t, o, n) : o;
        }
      }
      function mt(t, e) {
        return $.dom(t) && !$.inp(t) && (!$.nil(ft(t, e)) || ($.svg(t) && t[e]))
          ? 'attribute'
          : $.dom(t) && it(F, e)
            ? 'transform'
            : $.dom(t) && 'transform' !== e && ht(t, e)
              ? 'css'
              : null != t[e]
                ? 'object'
                : void 0;
      }
      function wt(t) {
        if ($.dom(t)) {
          for (
            var e,
              n = t.style.transform || '',
              r = /(\w+)\(([^)]*)\)/g,
              o = new Map();
            (e = r.exec(n));

          )
            o.set(e[1], e[2]);
          return o;
        }
      }
      function vt(t, e, n, r) {
        switch (mt(t, e)) {
          case 'transform':
            return (function (t, e, n, r) {
              var o = U(e, 'scale')
                  ? 1
                  : 0 +
                    (function (t) {
                      return U(t, 'translate') || 'perspective' === t
                        ? 'px'
                        : U(t, 'rotate') || U(t, 'skew')
                          ? 'deg'
                          : void 0;
                    })(e),
                a = wt(t).get(e) || o;
              return (
                n && (n.transforms.list.set(e, a), (n.transforms.last = e)),
                r ? pt(t, a, r) : a
              );
            })(t, e, r, n);
          case 'css':
            return ht(t, e, n);
          case 'attribute':
            return ft(t, e);
          default:
            return t[e] || 0;
        }
      }
      function gt(t, e) {
        var n = /^(\*=|\+=|-=)/.exec(t);
        if (!n) return t;
        var r = lt(t) || 0,
          o = parseFloat(e),
          a = parseFloat(t.replace(n[0], ''));
        switch (n[0][0]) {
          case '+':
            return o + a + r;
          case '-':
            return o - a + r;
          case '*':
            return o * a + r;
        }
      }
      function yt(t, e) {
        if ($.col(t))
          return (function (t) {
            return $.rgb(t)
              ? (n = /rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec((e = t)))
                ? 'rgba(' + n[1] + ',1)'
                : e
              : $.hex(t)
                ? (function (t) {
                    var e = t.replace(
                        /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
                        function (t, e, n, r) {
                          return e + e + n + n + r + r;
                        }
                      ),
                      n = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
                    return (
                      'rgba(' +
                      parseInt(n[1], 16) +
                      ',' +
                      parseInt(n[2], 16) +
                      ',' +
                      parseInt(n[3], 16) +
                      ',1)'
                    );
                  })(t)
                : $.hsl(t)
                  ? (function (t) {
                      var e,
                        n,
                        r,
                        o =
                          /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(t) ||
                          /hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(
                            t
                          ),
                        a = parseInt(o[1], 10) / 360,
                        i = parseInt(o[2], 10) / 100,
                        s = parseInt(o[3], 10) / 100,
                        c = o[4] || 1;
                      function u(t, e, n) {
                        return (
                          n < 0 && (n += 1),
                          n > 1 && (n -= 1),
                          n < 1 / 6
                            ? t + 6 * (e - t) * n
                            : n < 0.5
                              ? e
                              : n < 2 / 3
                                ? t + (e - t) * (2 / 3 - n) * 6
                                : t
                        );
                      }
                      if (0 == i) e = n = r = s;
                      else {
                        var l = s < 0.5 ? s * (1 + i) : s + i - s * i,
                          d = 2 * s - l;
                        (e = u(d, l, a + 1 / 3)),
                          (n = u(d, l, a)),
                          (r = u(d, l, a - 1 / 3));
                      }
                      return (
                        'rgba(' +
                        255 * e +
                        ',' +
                        255 * n +
                        ',' +
                        255 * r +
                        ',' +
                        c +
                        ')'
                      );
                    })(t)
                  : void 0;
            var e, n;
          })(t);
        if (/\s/g.test(t)) return t;
        var n = lt(t),
          r = n ? t.substr(0, t.length - n.length) : t;
        return e ? r + e : r;
      }
      function bt(t, e) {
        return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2));
      }
      function xt(t) {
        for (var e, n = t.points, r = 0, o = 0; o < n.numberOfItems; o++) {
          var a = n.getItem(o);
          o > 0 && (r += bt(e, a)), (e = a);
        }
        return r;
      }
      function kt(t) {
        if (t.getTotalLength) return t.getTotalLength();
        switch (t.tagName.toLowerCase()) {
          case 'circle':
            return (function (t) {
              return 2 * Math.PI * ft(t, 'r');
            })(t);
          case 'rect':
            return (function (t) {
              return 2 * ft(t, 'width') + 2 * ft(t, 'height');
            })(t);
          case 'line':
            return (function (t) {
              return bt(
                { x: ft(t, 'x1'), y: ft(t, 'y1') },
                { x: ft(t, 'x2'), y: ft(t, 'y2') }
              );
            })(t);
          case 'polyline':
            return xt(t);
          case 'polygon':
            return (function (t) {
              var e = t.points;
              return xt(t) + bt(e.getItem(e.numberOfItems - 1), e.getItem(0));
            })(t);
        }
      }
      function Et(t, e) {
        var n = e || {},
          r =
            n.el ||
            (function (t) {
              for (var e = t.parentNode; $.svg(e) && $.svg(e.parentNode); )
                e = e.parentNode;
              return e;
            })(t),
          o = r.getBoundingClientRect(),
          a = ft(r, 'viewBox'),
          i = o.width,
          s = o.height,
          c = n.viewBox || (a ? a.split(' ') : [0, 0, i, s]);
        return {
          el: r,
          viewBox: c,
          x: c[0] / 1,
          y: c[1] / 1,
          w: i,
          h: s,
          vW: c[2],
          vH: c[3],
        };
      }
      function Ct(t, e, n) {
        function r(n) {
          void 0 === n && (n = 0);
          var r = e + n >= 1 ? e + n : 0;
          return t.el.getPointAtLength(r);
        }
        var o = Et(t.el, t.svg),
          a = r(),
          i = r(-1),
          s = r(1),
          c = n ? 1 : o.w / o.vW,
          u = n ? 1 : o.h / o.vH;
        switch (t.property) {
          case 'x':
            return (a.x - o.x) * c;
          case 'y':
            return (a.y - o.y) * u;
          case 'angle':
            return (180 * Math.atan2(s.y - i.y, s.x - i.x)) / Math.PI;
        }
      }
      function St(t, e) {
        var n = /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g,
          r = yt($.pth(t) ? t.totalLength : t, e) + '';
        return {
          original: r,
          numbers: r.match(n) ? r.match(n).map(Number) : [0],
          strings: $.str(t) || e ? r.split(n) : [],
        };
      }
      function Ot(t) {
        return rt(
          t ? ot($.arr(t) ? t.map(at) : at(t)) : [],
          function (t, e, n) {
            return n.indexOf(t) === e;
          }
        );
      }
      function Lt(t) {
        var e = Ot(t);
        return e.map(function (t, n) {
          return {
            target: t,
            id: n,
            total: e.length,
            transforms: { list: wt(t) },
          };
        });
      }
      function Pt(t, e) {
        var n = st(e);
        if (
          (/^spring/.test(n.easing) && (n.duration = Z(n.easing)), $.arr(t))
        ) {
          var r = t.length;
          2 !== r || $.obj(t[0])
            ? $.fnc(e.duration) || (n.duration = e.duration / r)
            : (t = { value: t });
        }
        var o = $.arr(t) ? t : [t];
        return o
          .map(function (t, n) {
            var r = $.obj(t) && !$.pth(t) ? t : { value: t };
            return (
              $.und(r.delay) && (r.delay = n ? 0 : e.delay),
              $.und(r.endDelay) &&
                (r.endDelay = n === o.length - 1 ? e.endDelay : 0),
              r
            );
          })
          .map(function (t) {
            return ut(t, n);
          });
      }
      var jt = {
        css: function (t, e, n) {
          return (t.style[e] = n);
        },
        attribute: function (t, e, n) {
          return t.setAttribute(e, n);
        },
        object: function (t, e, n) {
          return (t[e] = n);
        },
        transform: function (t, e, n, r, o) {
          if ((r.list.set(e, n), e === r.last || o)) {
            var a = '';
            r.list.forEach(function (t, e) {
              a += e + '(' + t + ') ';
            }),
              (t.style.transform = a);
          }
        },
      };
      function At(t, e) {
        Lt(t).forEach(function (t) {
          for (var n in e) {
            var r = dt(e[n], t),
              o = t.target,
              a = lt(r),
              i = vt(o, n, a, t),
              s = gt(yt(r, a || lt(i)), i),
              c = mt(o, n);
            jt[c](o, n, s, t.transforms, !0);
          }
        });
      }
      function Tt(t, e) {
        return rt(
          ot(
            t.map(function (t) {
              return e.map(function (e) {
                return (function (t, e) {
                  var n = mt(t.target, e.name);
                  if (n) {
                    var r = (function (t, e) {
                        var n;
                        return t.tweens.map(function (r) {
                          var o = (function (t, e) {
                              var n = {};
                              for (var r in t) {
                                var o = dt(t[r], e);
                                $.arr(o) &&
                                  1 ===
                                    (o = o.map(function (t) {
                                      return dt(t, e);
                                    })).length &&
                                  (o = o[0]),
                                  (n[r] = o);
                              }
                              return (
                                (n.duration = parseFloat(n.duration)),
                                (n.delay = parseFloat(n.delay)),
                                n
                              );
                            })(r, e),
                            a = o.value,
                            i = $.arr(a) ? a[1] : a,
                            s = lt(i),
                            c = vt(e.target, t.name, s, e),
                            u = n ? n.to.original : c,
                            l = $.arr(a) ? a[0] : u,
                            d = lt(l) || lt(c),
                            f = s || d;
                          return (
                            $.und(i) && (i = u),
                            (o.from = St(l, f)),
                            (o.to = St(gt(i, l), f)),
                            (o.start = n ? n.end : 0),
                            (o.end =
                              o.start + o.delay + o.duration + o.endDelay),
                            (o.easing = et(o.easing, o.duration)),
                            (o.isPath = $.pth(a)),
                            (o.isPathTargetInsideSVG =
                              o.isPath && $.svg(e.target)),
                            (o.isColor = $.col(o.from.original)),
                            o.isColor && (o.round = 1),
                            (n = o),
                            o
                          );
                        });
                      })(e, t),
                      o = r[r.length - 1];
                    return {
                      type: n,
                      property: e.name,
                      animatable: t,
                      tweens: r,
                      duration: o.end,
                      delay: r[0].delay,
                      endDelay: o.endDelay,
                    };
                  }
                })(t, e);
              });
            })
          ),
          function (t) {
            return !$.und(t);
          }
        );
      }
      function Bt(t, e) {
        var n = t.length,
          r = function (t) {
            return t.timelineOffset ? t.timelineOffset : 0;
          },
          o = {};
        return (
          (o.duration = n
            ? Math.max.apply(
                Math,
                t.map(function (t) {
                  return r(t) + t.duration;
                })
              )
            : e.duration),
          (o.delay = n
            ? Math.min.apply(
                Math,
                t.map(function (t) {
                  return r(t) + t.delay;
                })
              )
            : e.delay),
          (o.endDelay = n
            ? o.duration -
              Math.max.apply(
                Math,
                t.map(function (t) {
                  return r(t) + t.duration - t.endDelay;
                })
              )
            : e.endDelay),
          o
        );
      }
      var Mt = 0,
        It = [],
        _t = (function () {
          var t;
          function e(n) {
            for (var r = It.length, o = 0; o < r; ) {
              var a = It[o];
              a.paused ? (It.splice(o, 1), r--) : (a.tick(n), o++);
            }
            t = o > 0 ? requestAnimationFrame(e) : void 0;
          }
          return (
            'undefined' != typeof document &&
              document.addEventListener('visibilitychange', function () {
                Dt.suspendWhenDocumentHidden &&
                  (Nt()
                    ? (t = cancelAnimationFrame(t))
                    : (It.forEach(function (t) {
                        return t._onDocumentVisibility();
                      }),
                      _t()));
              }),
            function () {
              t ||
                (Nt() && Dt.suspendWhenDocumentHidden) ||
                !(It.length > 0) ||
                (t = requestAnimationFrame(e));
            }
          );
        })();
      function Nt() {
        return !!document && document.hidden;
      }
      function Dt(t) {
        void 0 === t && (t = {});
        var e,
          n = 0,
          r = 0,
          o = 0,
          a = 0,
          i = null;
        function s(t) {
          var e =
            window.Promise &&
            new Promise(function (t) {
              return (i = t);
            });
          return (t.finished = e), e;
        }
        var c = (function (t) {
          var e = ct(R, t),
            n = ct(z, t),
            r = (function (t, e) {
              var n = [],
                r = e.keyframes;
              for (var o in (r &&
                (e = ut(
                  (function (t) {
                    for (
                      var e = rt(
                          ot(
                            t.map(function (t) {
                              return Object.keys(t);
                            })
                          ),
                          function (t) {
                            return $.key(t);
                          }
                        ).reduce(function (t, e) {
                          return t.indexOf(e) < 0 && t.push(e), t;
                        }, []),
                        n = {},
                        r = function (r) {
                          var o = e[r];
                          n[o] = t.map(function (t) {
                            var e = {};
                            for (var n in t)
                              $.key(n)
                                ? n == o && (e.value = t[n])
                                : (e[n] = t[n]);
                            return e;
                          });
                        },
                        o = 0;
                      o < e.length;
                      o++
                    )
                      r(o);
                    return n;
                  })(r),
                  e
                )),
              e))
                $.key(o) && n.push({ name: o, tweens: Pt(e[o], t) });
              return n;
            })(n, t),
            o = Lt(t.targets),
            a = Tt(o, r),
            i = Bt(a, n),
            s = Mt;
          return (
            Mt++,
            ut(e, {
              id: s,
              children: [],
              animatables: o,
              animations: a,
              duration: i.duration,
              delay: i.delay,
              endDelay: i.endDelay,
            })
          );
        })(t);
        function u() {
          var t = c.direction;
          'alternate' !== t &&
            (c.direction = 'normal' !== t ? 'normal' : 'reverse'),
            (c.reversed = !c.reversed),
            e.forEach(function (t) {
              return (t.reversed = c.reversed);
            });
        }
        function l(t) {
          return c.reversed ? c.duration - t : t;
        }
        function d() {
          (n = 0), (r = l(c.currentTime) * (1 / Dt.speed));
        }
        function f(t, e) {
          e && e.seek(t - e.timelineOffset);
        }
        function p(t) {
          for (var e = 0, n = c.animations, r = n.length; e < r; ) {
            var o = n[e],
              a = o.animatable,
              i = o.tweens,
              s = i.length - 1,
              u = i[s];
            s &&
              (u =
                rt(i, function (e) {
                  return t < e.end;
                })[0] || u);
            for (
              var l = G(t - u.start - u.delay, 0, u.duration) / u.duration,
                d = isNaN(l) ? 1 : u.easing(l),
                f = u.to.strings,
                p = u.round,
                h = [],
                m = u.to.numbers.length,
                w = void 0,
                v = 0;
              v < m;
              v++
            ) {
              var g = void 0,
                y = u.to.numbers[v],
                b = u.from.numbers[v] || 0;
              (g = u.isPath
                ? Ct(u.value, d * y, u.isPathTargetInsideSVG)
                : b + d * (y - b)),
                p && ((u.isColor && v > 2) || (g = Math.round(g * p) / p)),
                h.push(g);
            }
            var x = f.length;
            if (x) {
              w = f[0];
              for (var k = 0; k < x; k++) {
                f[k];
                var E = f[k + 1],
                  C = h[k];
                isNaN(C) || (w += E ? C + E : C + ' ');
              }
            } else w = h[0];
            jt[o.type](a.target, o.property, w, a.transforms),
              (o.currentValue = w),
              e++;
          }
        }
        function h(t) {
          c[t] && !c.passThrough && c[t](c);
        }
        function m(t) {
          var d = c.duration,
            m = c.delay,
            w = d - c.endDelay,
            v = l(t);
          (c.progress = G((v / d) * 100, 0, 100)),
            (c.reversePlayback = v < c.currentTime),
            e &&
              (function (t) {
                if (c.reversePlayback) for (var n = a; n--; ) f(t, e[n]);
                else for (var r = 0; r < a; r++) f(t, e[r]);
              })(v),
            !c.began && c.currentTime > 0 && ((c.began = !0), h('begin')),
            !c.loopBegan &&
              c.currentTime > 0 &&
              ((c.loopBegan = !0), h('loopBegin')),
            v <= m && 0 !== c.currentTime && p(0),
            ((v >= w && c.currentTime !== d) || !d) && p(d),
            v > m && v < w
              ? (c.changeBegan ||
                  ((c.changeBegan = !0),
                  (c.changeCompleted = !1),
                  h('changeBegin')),
                h('change'),
                p(v))
              : c.changeBegan &&
                ((c.changeCompleted = !0),
                (c.changeBegan = !1),
                h('changeComplete')),
            (c.currentTime = G(v, 0, d)),
            c.began && h('update'),
            t >= d &&
              ((r = 0),
              c.remaining && !0 !== c.remaining && c.remaining--,
              c.remaining
                ? ((n = o),
                  h('loopComplete'),
                  (c.loopBegan = !1),
                  'alternate' === c.direction && u())
                : ((c.paused = !0),
                  c.completed ||
                    ((c.completed = !0),
                    h('loopComplete'),
                    h('complete'),
                    !c.passThrough && 'Promise' in window && (i(), s(c)))));
        }
        return (
          s(c),
          (c.reset = function () {
            var t = c.direction;
            (c.passThrough = !1),
              (c.currentTime = 0),
              (c.progress = 0),
              (c.paused = !0),
              (c.began = !1),
              (c.loopBegan = !1),
              (c.changeBegan = !1),
              (c.completed = !1),
              (c.changeCompleted = !1),
              (c.reversePlayback = !1),
              (c.reversed = 'reverse' === t),
              (c.remaining = c.loop),
              (e = c.children);
            for (var n = (a = e.length); n--; ) c.children[n].reset();
            ((c.reversed && !0 !== c.loop) ||
              ('alternate' === t && 1 === c.loop)) &&
              c.remaining++,
              p(c.reversed ? c.duration : 0);
          }),
          (c._onDocumentVisibility = d),
          (c.set = function (t, e) {
            return At(t, e), c;
          }),
          (c.tick = function (t) {
            (o = t), n || (n = o), m((o + (r - n)) * Dt.speed);
          }),
          (c.seek = function (t) {
            m(l(t));
          }),
          (c.pause = function () {
            (c.paused = !0), d();
          }),
          (c.play = function () {
            c.paused &&
              (c.completed && c.reset(),
              (c.paused = !1),
              It.push(c),
              d(),
              _t());
          }),
          (c.reverse = function () {
            u(), (c.completed = !c.reversed), d();
          }),
          (c.restart = function () {
            c.reset(), c.play();
          }),
          (c.remove = function (t) {
            qt(Ot(t), c);
          }),
          c.reset(),
          c.autoplay && c.play(),
          c
        );
      }
      function Ht(t, e) {
        for (var n = e.length; n--; )
          it(t, e[n].animatable.target) && e.splice(n, 1);
      }
      function qt(t, e) {
        var n = e.animations,
          r = e.children;
        Ht(t, n);
        for (var o = r.length; o--; ) {
          var a = r[o],
            i = a.animations;
          Ht(t, i), i.length || a.children.length || r.splice(o, 1);
        }
        n.length || r.length || e.pause();
      }
      (Dt.version = '3.2.1'),
        (Dt.speed = 1),
        (Dt.suspendWhenDocumentHidden = !0),
        (Dt.running = It),
        (Dt.remove = function (t) {
          for (var e = Ot(t), n = It.length; n--; ) qt(e, It[n]);
        }),
        (Dt.get = vt),
        (Dt.set = At),
        (Dt.convertPx = pt),
        (Dt.path = function (t, e) {
          var n = $.str(t) ? nt(t)[0] : t,
            r = e || 100;
          return function (t) {
            return {
              property: t,
              el: n,
              svg: Et(n),
              totalLength: kt(n) * (r / 100),
            };
          };
        }),
        (Dt.setDashoffset = function (t) {
          var e = kt(t);
          return t.setAttribute('stroke-dasharray', e), e;
        }),
        (Dt.stagger = function (t, e) {
          void 0 === e && (e = {});
          var n = e.direction || 'normal',
            r = e.easing ? et(e.easing) : null,
            o = e.grid,
            a = e.axis,
            i = e.from || 0,
            s = 'first' === i,
            c = 'center' === i,
            u = 'last' === i,
            l = $.arr(t),
            d = l ? parseFloat(t[0]) : parseFloat(t),
            f = l ? parseFloat(t[1]) : 0,
            p = lt(l ? t[1] : t) || 0,
            h = e.start || 0 + (l ? d : 0),
            m = [],
            w = 0;
          return function (t, e, v) {
            if (
              (s && (i = 0),
              c && (i = (v - 1) / 2),
              u && (i = v - 1),
              !m.length)
            ) {
              for (var g = 0; g < v; g++) {
                if (o) {
                  var y = c ? (o[0] - 1) / 2 : i % o[0],
                    b = c ? (o[1] - 1) / 2 : Math.floor(i / o[0]),
                    x = y - (g % o[0]),
                    k = b - Math.floor(g / o[0]),
                    E = Math.sqrt(x * x + k * k);
                  'x' === a && (E = -x), 'y' === a && (E = -k), m.push(E);
                } else m.push(Math.abs(i - g));
                w = Math.max.apply(Math, m);
              }
              r &&
                (m = m.map(function (t) {
                  return r(t / w) * w;
                })),
                'reverse' === n &&
                  (m = m.map(function (t) {
                    return a ? (t < 0 ? -1 * t : -t) : Math.abs(w - t);
                  }));
            }
            return (
              h + (l ? (f - d) / w : d) * (Math.round(100 * m[e]) / 100) + p
            );
          };
        }),
        (Dt.timeline = function (t) {
          void 0 === t && (t = {});
          var e = Dt(t);
          return (
            (e.duration = 0),
            (e.add = function (n, r) {
              var o = It.indexOf(e),
                a = e.children;
              function i(t) {
                t.passThrough = !0;
              }
              o > -1 && It.splice(o, 1);
              for (var s = 0; s < a.length; s++) i(a[s]);
              var c = ut(n, ct(z, t));
              c.targets = c.targets || t.targets;
              var u = e.duration;
              (c.autoplay = !1),
                (c.direction = e.direction),
                (c.timelineOffset = $.und(r) ? u : gt(r, u)),
                i(e),
                e.seek(c.timelineOffset);
              var l = Dt(c);
              i(l), a.push(l);
              var d = Bt(a, t);
              return (
                (e.delay = d.delay),
                (e.endDelay = d.endDelay),
                (e.duration = d.duration),
                e.seek(0),
                e.reset(),
                e.autoplay && e.play(),
                e
              );
            }),
            e
          );
        }),
        (Dt.easing = et),
        (Dt.penner = tt),
        (Dt.random = function (t, e) {
          return Math.floor(Math.random() * (e - t + 1)) + t;
        });
      const Rt = Dt;
      function zt(t) {
        return (
          (zt =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    'function' == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? 'symbol'
                    : typeof t;
                }),
          zt(t)
        );
      }
      function Ft() {
        Ft = function () {
          return e;
        };
        var t,
          e = {},
          n = Object.prototype,
          r = n.hasOwnProperty,
          o =
            Object.defineProperty ||
            function (t, e, n) {
              t[e] = n.value;
            },
          a = 'function' == typeof Symbol ? Symbol : {},
          i = a.iterator || '@@iterator',
          s = a.asyncIterator || '@@asyncIterator',
          c = a.toStringTag || '@@toStringTag';
        function u(t, e, n) {
          return (
            Object.defineProperty(t, e, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            t[e]
          );
        }
        try {
          u({}, '');
        } catch (t) {
          u = function (t, e, n) {
            return (t[e] = n);
          };
        }
        function l(t, e, n, r) {
          var a = e && e.prototype instanceof v ? e : v,
            i = Object.create(a.prototype),
            s = new A(r || []);
          return o(i, '_invoke', { value: O(t, n, s) }), i;
        }
        function d(t, e, n) {
          try {
            return { type: 'normal', arg: t.call(e, n) };
          } catch (t) {
            return { type: 'throw', arg: t };
          }
        }
        e.wrap = l;
        var f = 'suspendedStart',
          p = 'suspendedYield',
          h = 'executing',
          m = 'completed',
          w = {};
        function v() {}
        function g() {}
        function y() {}
        var b = {};
        u(b, i, function () {
          return this;
        });
        var x = Object.getPrototypeOf,
          k = x && x(x(T([])));
        k && k !== n && r.call(k, i) && (b = k);
        var E = (y.prototype = v.prototype = Object.create(b));
        function C(t) {
          ['next', 'throw', 'return'].forEach(function (e) {
            u(t, e, function (t) {
              return this._invoke(e, t);
            });
          });
        }
        function S(t, e) {
          function n(o, a, i, s) {
            var c = d(t[o], t, a);
            if ('throw' !== c.type) {
              var u = c.arg,
                l = u.value;
              return l && 'object' == zt(l) && r.call(l, '__await')
                ? e.resolve(l.__await).then(
                    function (t) {
                      n('next', t, i, s);
                    },
                    function (t) {
                      n('throw', t, i, s);
                    }
                  )
                : e.resolve(l).then(
                    function (t) {
                      (u.value = t), i(u);
                    },
                    function (t) {
                      return n('throw', t, i, s);
                    }
                  );
            }
            s(c.arg);
          }
          var a;
          o(this, '_invoke', {
            value: function (t, r) {
              function o() {
                return new e(function (e, o) {
                  n(t, r, e, o);
                });
              }
              return (a = a ? a.then(o, o) : o());
            },
          });
        }
        function O(e, n, r) {
          var o = f;
          return function (a, i) {
            if (o === h) throw Error('Generator is already running');
            if (o === m) {
              if ('throw' === a) throw i;
              return { value: t, done: !0 };
            }
            for (r.method = a, r.arg = i; ; ) {
              var s = r.delegate;
              if (s) {
                var c = L(s, r);
                if (c) {
                  if (c === w) continue;
                  return c;
                }
              }
              if ('next' === r.method) r.sent = r._sent = r.arg;
              else if ('throw' === r.method) {
                if (o === f) throw ((o = m), r.arg);
                r.dispatchException(r.arg);
              } else 'return' === r.method && r.abrupt('return', r.arg);
              o = h;
              var u = d(e, n, r);
              if ('normal' === u.type) {
                if (((o = r.done ? m : p), u.arg === w)) continue;
                return { value: u.arg, done: r.done };
              }
              'throw' === u.type &&
                ((o = m), (r.method = 'throw'), (r.arg = u.arg));
            }
          };
        }
        function L(e, n) {
          var r = n.method,
            o = e.iterator[r];
          if (o === t)
            return (
              (n.delegate = null),
              ('throw' === r &&
                e.iterator.return &&
                ((n.method = 'return'),
                (n.arg = t),
                L(e, n),
                'throw' === n.method)) ||
                ('return' !== r &&
                  ((n.method = 'throw'),
                  (n.arg = new TypeError(
                    "The iterator does not provide a '" + r + "' method"
                  )))),
              w
            );
          var a = d(o, e.iterator, n.arg);
          if ('throw' === a.type)
            return (
              (n.method = 'throw'), (n.arg = a.arg), (n.delegate = null), w
            );
          var i = a.arg;
          return i
            ? i.done
              ? ((n[e.resultName] = i.value),
                (n.next = e.nextLoc),
                'return' !== n.method && ((n.method = 'next'), (n.arg = t)),
                (n.delegate = null),
                w)
              : i
            : ((n.method = 'throw'),
              (n.arg = new TypeError('iterator result is not an object')),
              (n.delegate = null),
              w);
        }
        function P(t) {
          var e = { tryLoc: t[0] };
          1 in t && (e.catchLoc = t[1]),
            2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
            this.tryEntries.push(e);
        }
        function j(t) {
          var e = t.completion || {};
          (e.type = 'normal'), delete e.arg, (t.completion = e);
        }
        function A(t) {
          (this.tryEntries = [{ tryLoc: 'root' }]),
            t.forEach(P, this),
            this.reset(!0);
        }
        function T(e) {
          if (e || '' === e) {
            var n = e[i];
            if (n) return n.call(e);
            if ('function' == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var o = -1,
                a = function n() {
                  for (; ++o < e.length; )
                    if (r.call(e, o)) return (n.value = e[o]), (n.done = !1), n;
                  return (n.value = t), (n.done = !0), n;
                };
              return (a.next = a);
            }
          }
          throw new TypeError(zt(e) + ' is not iterable');
        }
        return (
          (g.prototype = y),
          o(E, 'constructor', { value: y, configurable: !0 }),
          o(y, 'constructor', { value: g, configurable: !0 }),
          (g.displayName = u(y, c, 'GeneratorFunction')),
          (e.isGeneratorFunction = function (t) {
            var e = 'function' == typeof t && t.constructor;
            return (
              !!e &&
              (e === g || 'GeneratorFunction' === (e.displayName || e.name))
            );
          }),
          (e.mark = function (t) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(t, y)
                : ((t.__proto__ = y), u(t, c, 'GeneratorFunction')),
              (t.prototype = Object.create(E)),
              t
            );
          }),
          (e.awrap = function (t) {
            return { __await: t };
          }),
          C(S.prototype),
          u(S.prototype, s, function () {
            return this;
          }),
          (e.AsyncIterator = S),
          (e.async = function (t, n, r, o, a) {
            void 0 === a && (a = Promise);
            var i = new S(l(t, n, r, o), a);
            return e.isGeneratorFunction(n)
              ? i
              : i.next().then(function (t) {
                  return t.done ? t.value : i.next();
                });
          }),
          C(E),
          u(E, c, 'Generator'),
          u(E, i, function () {
            return this;
          }),
          u(E, 'toString', function () {
            return '[object Generator]';
          }),
          (e.keys = function (t) {
            var e = Object(t),
              n = [];
            for (var r in e) n.push(r);
            return (
              n.reverse(),
              function t() {
                for (; n.length; ) {
                  var r = n.pop();
                  if (r in e) return (t.value = r), (t.done = !1), t;
                }
                return (t.done = !0), t;
              }
            );
          }),
          (e.values = T),
          (A.prototype = {
            constructor: A,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = t),
                (this.done = !1),
                (this.delegate = null),
                (this.method = 'next'),
                (this.arg = t),
                this.tryEntries.forEach(j),
                !e)
              )
                for (var n in this)
                  't' === n.charAt(0) &&
                    r.call(this, n) &&
                    !isNaN(+n.slice(1)) &&
                    (this[n] = t);
            },
            stop: function () {
              this.done = !0;
              var t = this.tryEntries[0].completion;
              if ('throw' === t.type) throw t.arg;
              return this.rval;
            },
            dispatchException: function (e) {
              if (this.done) throw e;
              var n = this;
              function o(r, o) {
                return (
                  (s.type = 'throw'),
                  (s.arg = e),
                  (n.next = r),
                  o && ((n.method = 'next'), (n.arg = t)),
                  !!o
                );
              }
              for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                var i = this.tryEntries[a],
                  s = i.completion;
                if ('root' === i.tryLoc) return o('end');
                if (i.tryLoc <= this.prev) {
                  var c = r.call(i, 'catchLoc'),
                    u = r.call(i, 'finallyLoc');
                  if (c && u) {
                    if (this.prev < i.catchLoc) return o(i.catchLoc, !0);
                    if (this.prev < i.finallyLoc) return o(i.finallyLoc);
                  } else if (c) {
                    if (this.prev < i.catchLoc) return o(i.catchLoc, !0);
                  } else {
                    if (!u)
                      throw Error('try statement without catch or finally');
                    if (this.prev < i.finallyLoc) return o(i.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (t, e) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var o = this.tryEntries[n];
                if (
                  o.tryLoc <= this.prev &&
                  r.call(o, 'finallyLoc') &&
                  this.prev < o.finallyLoc
                ) {
                  var a = o;
                  break;
                }
              }
              a &&
                ('break' === t || 'continue' === t) &&
                a.tryLoc <= e &&
                e <= a.finallyLoc &&
                (a = null);
              var i = a ? a.completion : {};
              return (
                (i.type = t),
                (i.arg = e),
                a
                  ? ((this.method = 'next'), (this.next = a.finallyLoc), w)
                  : this.complete(i)
              );
            },
            complete: function (t, e) {
              if ('throw' === t.type) throw t.arg;
              return (
                'break' === t.type || 'continue' === t.type
                  ? (this.next = t.arg)
                  : 'return' === t.type
                    ? ((this.rval = this.arg = t.arg),
                      (this.method = 'return'),
                      (this.next = 'end'))
                    : 'normal' === t.type && e && (this.next = e),
                w
              );
            },
            finish: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];
                if (n.finallyLoc === t)
                  return this.complete(n.completion, n.afterLoc), j(n), w;
              }
            },
            catch: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];
                if (n.tryLoc === t) {
                  var r = n.completion;
                  if ('throw' === r.type) {
                    var o = r.arg;
                    j(n);
                  }
                  return o;
                }
              }
              throw Error('illegal catch attempt');
            },
            delegateYield: function (e, n, r) {
              return (
                (this.delegate = { iterator: T(e), resultName: n, nextLoc: r }),
                'next' === this.method && (this.arg = t),
                w
              );
            },
          }),
          e
        );
      }
      function Vt(t, e, n, r, o, a, i) {
        try {
          var s = t[a](i),
            c = s.value;
        } catch (t) {
          return void n(t);
        }
        s.done ? e(c) : Promise.resolve(c).then(r, o);
      }
      function Gt(t) {
        return function () {
          var e = this,
            n = arguments;
          return new Promise(function (r, o) {
            var a = t.apply(e, n);
            function i(t) {
              Vt(a, r, o, i, s, 'next', t);
            }
            function s(t) {
              Vt(a, r, o, i, s, 'throw', t);
            }
            i(void 0);
          });
        };
      }
      function Ut() {
        return Yt.apply(this, arguments);
      }
      function Yt() {
        return (
          (Yt = Gt(
            Ft().mark(function t() {
              var n,
                r,
                o,
                a,
                i,
                s = arguments;
              return Ft().wrap(
                function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (
                          (n = s.length > 0 && void 0 !== s[0] ? s[0] : ''),
                          (r = s.length > 1 && void 0 !== s[1] && s[1]),
                          (o = document.getElementById('notesContainer')),
                          (t.next = 5),
                          new Promise(function (t) {
                            document.querySelector('loading-indicator').show(),
                              setTimeout(function () {
                                return t();
                              }, 400);
                          })
                        );
                      case 5:
                        return (
                          (o.innerHTML = ''), (t.prev = 6), (t.next = 9), M(r)
                        );
                      case 9:
                        (a = t.sent),
                          (i = n.toLowerCase()),
                          a.forEach(function (t) {
                            if (
                              t.title.toLowerCase().includes(i) ||
                              t.body.toLowerCase().includes(i)
                            ) {
                              var e = q(t);
                              o.appendChild(e);
                            }
                          }),
                          document
                            .querySelectorAll('.archive-button')
                            .forEach(function (t) {
                              t.addEventListener('click', function (t) {
                                var e = t.target.getAttribute('data-note-id');
                                'Unarchive' === t.target.title
                                  ? (function (t) {
                                      Wt.apply(this, arguments);
                                    })(e)
                                  : (function (t) {
                                      $t.apply(this, arguments);
                                    })(e);
                              });
                            }),
                          document
                            .querySelectorAll('.delete-button')
                            .forEach(function (t) {
                              t.addEventListener('click', function (t) {
                                !(function (t) {
                                  Zt.apply(this, arguments);
                                })(t.target.getAttribute('data-note-id'));
                              });
                            }),
                          Rt({
                            targets: '.note',
                            opacity: [0, 1],
                            translateY: [50, 0],
                            duration: 500,
                            easing: 'easeOutQuad',
                          }),
                          (t.next = 20);
                        break;
                      case 16:
                        (t.prev = 16),
                          (t.t0 = t.catch(6)),
                          e().fire({
                            icon: 'error',
                            title: 'Error',
                            text: t.t0.message || 'Ups terjadi kesalahan.',
                          }),
                          console.error('Error:', t.t0);
                      case 20:
                        return (
                          (t.prev = 20),
                          document.querySelector('loading-indicator').hide(),
                          t.finish(20)
                        );
                      case 23:
                      case 'end':
                        return t.stop();
                    }
                },
                t,
                null,
                [[6, 16, 20, 23]]
              );
            })
          )),
          Yt.apply(this, arguments)
        );
      }
      function $t() {
        return ($t = Gt(
          Ft().mark(function t(n) {
            return Ft().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (t.prev = 0), (t.next = 3), _(n, 'archive');
                    case 3:
                      e().fire({
                        icon: 'success',
                        title: 'Catatan di arsipkan',
                        text: 'Catatanmu berhasil di arsipkan!',
                      }),
                        Ut(
                          '',
                          'true' ===
                            document.querySelector('#note-options').dataset
                              .archived
                        ),
                        (t.next = 10);
                      break;
                    case 7:
                      (t.prev = 7),
                        (t.t0 = t.catch(0)),
                        e().fire({
                          icon: 'error',
                          title: 'Gagal untuk mengarsipkan catatan.',
                          text: t.t0.message,
                        });
                    case 10:
                    case 'end':
                      return t.stop();
                  }
              },
              t,
              null,
              [[0, 7]]
            );
          })
        )).apply(this, arguments);
      }
      function Wt() {
        return (Wt = Gt(
          Ft().mark(function t(n) {
            return Ft().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (t.prev = 0), (t.next = 3), _(n, 'unarchive');
                    case 3:
                      e().fire({
                        icon: 'success',
                        title: 'Catatan diarsipkan',
                        text: 'Catatan berhasil di aktifkan!',
                      }),
                        Ut(
                          '',
                          'true' ===
                            document.querySelector('#note-options').dataset
                              .archived
                        ),
                        (t.next = 10);
                      break;
                    case 7:
                      (t.prev = 7),
                        (t.t0 = t.catch(0)),
                        e().fire({
                          icon: 'error',
                          title: 'Gagal untuk mengaktifkan catatan.',
                          text: t.t0.message,
                        });
                    case 10:
                    case 'end':
                      return t.stop();
                  }
              },
              t,
              null,
              [[0, 7]]
            );
          })
        )).apply(this, arguments);
      }
      function Zt() {
        return (Zt = Gt(
          Ft().mark(function t(n) {
            return Ft().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (t.prev = 0), (t.next = 3), D(n);
                    case 3:
                      e().fire({
                        icon: 'success',
                        title: 'Catatan Dihapus',
                        text: 'Catatan berhasil di hapus!',
                      }),
                        Ut(
                          '',
                          'true' ===
                            document.querySelector('#note-options').dataset
                              .archived
                        ),
                        (t.next = 10);
                      break;
                    case 7:
                      (t.prev = 7),
                        (t.t0 = t.catch(0)),
                        e().fire({
                          icon: 'error',
                          title: 'Gagal untuk menghapus catatan!',
                          text: t.t0.message,
                        });
                    case 10:
                    case 'end':
                      return t.stop();
                  }
              },
              t,
              null,
              [[0, 7]]
            );
          })
        )).apply(this, arguments);
      }
      function Kt(t) {
        return (
          (Kt =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    'function' == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? 'symbol'
                    : typeof t;
                }),
          Kt(t)
        );
      }
      function Xt() {
        Xt = function () {
          return e;
        };
        var t,
          e = {},
          n = Object.prototype,
          r = n.hasOwnProperty,
          o =
            Object.defineProperty ||
            function (t, e, n) {
              t[e] = n.value;
            },
          a = 'function' == typeof Symbol ? Symbol : {},
          i = a.iterator || '@@iterator',
          s = a.asyncIterator || '@@asyncIterator',
          c = a.toStringTag || '@@toStringTag';
        function u(t, e, n) {
          return (
            Object.defineProperty(t, e, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            t[e]
          );
        }
        try {
          u({}, '');
        } catch (t) {
          u = function (t, e, n) {
            return (t[e] = n);
          };
        }
        function l(t, e, n, r) {
          var a = e && e.prototype instanceof v ? e : v,
            i = Object.create(a.prototype),
            s = new A(r || []);
          return o(i, '_invoke', { value: O(t, n, s) }), i;
        }
        function d(t, e, n) {
          try {
            return { type: 'normal', arg: t.call(e, n) };
          } catch (t) {
            return { type: 'throw', arg: t };
          }
        }
        e.wrap = l;
        var f = 'suspendedStart',
          p = 'suspendedYield',
          h = 'executing',
          m = 'completed',
          w = {};
        function v() {}
        function g() {}
        function y() {}
        var b = {};
        u(b, i, function () {
          return this;
        });
        var x = Object.getPrototypeOf,
          k = x && x(x(T([])));
        k && k !== n && r.call(k, i) && (b = k);
        var E = (y.prototype = v.prototype = Object.create(b));
        function C(t) {
          ['next', 'throw', 'return'].forEach(function (e) {
            u(t, e, function (t) {
              return this._invoke(e, t);
            });
          });
        }
        function S(t, e) {
          function n(o, a, i, s) {
            var c = d(t[o], t, a);
            if ('throw' !== c.type) {
              var u = c.arg,
                l = u.value;
              return l && 'object' == Kt(l) && r.call(l, '__await')
                ? e.resolve(l.__await).then(
                    function (t) {
                      n('next', t, i, s);
                    },
                    function (t) {
                      n('throw', t, i, s);
                    }
                  )
                : e.resolve(l).then(
                    function (t) {
                      (u.value = t), i(u);
                    },
                    function (t) {
                      return n('throw', t, i, s);
                    }
                  );
            }
            s(c.arg);
          }
          var a;
          o(this, '_invoke', {
            value: function (t, r) {
              function o() {
                return new e(function (e, o) {
                  n(t, r, e, o);
                });
              }
              return (a = a ? a.then(o, o) : o());
            },
          });
        }
        function O(e, n, r) {
          var o = f;
          return function (a, i) {
            if (o === h) throw Error('Generator is already running');
            if (o === m) {
              if ('throw' === a) throw i;
              return { value: t, done: !0 };
            }
            for (r.method = a, r.arg = i; ; ) {
              var s = r.delegate;
              if (s) {
                var c = L(s, r);
                if (c) {
                  if (c === w) continue;
                  return c;
                }
              }
              if ('next' === r.method) r.sent = r._sent = r.arg;
              else if ('throw' === r.method) {
                if (o === f) throw ((o = m), r.arg);
                r.dispatchException(r.arg);
              } else 'return' === r.method && r.abrupt('return', r.arg);
              o = h;
              var u = d(e, n, r);
              if ('normal' === u.type) {
                if (((o = r.done ? m : p), u.arg === w)) continue;
                return { value: u.arg, done: r.done };
              }
              'throw' === u.type &&
                ((o = m), (r.method = 'throw'), (r.arg = u.arg));
            }
          };
        }
        function L(e, n) {
          var r = n.method,
            o = e.iterator[r];
          if (o === t)
            return (
              (n.delegate = null),
              ('throw' === r &&
                e.iterator.return &&
                ((n.method = 'return'),
                (n.arg = t),
                L(e, n),
                'throw' === n.method)) ||
                ('return' !== r &&
                  ((n.method = 'throw'),
                  (n.arg = new TypeError(
                    "The iterator does not provide a '" + r + "' method"
                  )))),
              w
            );
          var a = d(o, e.iterator, n.arg);
          if ('throw' === a.type)
            return (
              (n.method = 'throw'), (n.arg = a.arg), (n.delegate = null), w
            );
          var i = a.arg;
          return i
            ? i.done
              ? ((n[e.resultName] = i.value),
                (n.next = e.nextLoc),
                'return' !== n.method && ((n.method = 'next'), (n.arg = t)),
                (n.delegate = null),
                w)
              : i
            : ((n.method = 'throw'),
              (n.arg = new TypeError('iterator result is not an object')),
              (n.delegate = null),
              w);
        }
        function P(t) {
          var e = { tryLoc: t[0] };
          1 in t && (e.catchLoc = t[1]),
            2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
            this.tryEntries.push(e);
        }
        function j(t) {
          var e = t.completion || {};
          (e.type = 'normal'), delete e.arg, (t.completion = e);
        }
        function A(t) {
          (this.tryEntries = [{ tryLoc: 'root' }]),
            t.forEach(P, this),
            this.reset(!0);
        }
        function T(e) {
          if (e || '' === e) {
            var n = e[i];
            if (n) return n.call(e);
            if ('function' == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var o = -1,
                a = function n() {
                  for (; ++o < e.length; )
                    if (r.call(e, o)) return (n.value = e[o]), (n.done = !1), n;
                  return (n.value = t), (n.done = !0), n;
                };
              return (a.next = a);
            }
          }
          throw new TypeError(Kt(e) + ' is not iterable');
        }
        return (
          (g.prototype = y),
          o(E, 'constructor', { value: y, configurable: !0 }),
          o(y, 'constructor', { value: g, configurable: !0 }),
          (g.displayName = u(y, c, 'GeneratorFunction')),
          (e.isGeneratorFunction = function (t) {
            var e = 'function' == typeof t && t.constructor;
            return (
              !!e &&
              (e === g || 'GeneratorFunction' === (e.displayName || e.name))
            );
          }),
          (e.mark = function (t) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(t, y)
                : ((t.__proto__ = y), u(t, c, 'GeneratorFunction')),
              (t.prototype = Object.create(E)),
              t
            );
          }),
          (e.awrap = function (t) {
            return { __await: t };
          }),
          C(S.prototype),
          u(S.prototype, s, function () {
            return this;
          }),
          (e.AsyncIterator = S),
          (e.async = function (t, n, r, o, a) {
            void 0 === a && (a = Promise);
            var i = new S(l(t, n, r, o), a);
            return e.isGeneratorFunction(n)
              ? i
              : i.next().then(function (t) {
                  return t.done ? t.value : i.next();
                });
          }),
          C(E),
          u(E, c, 'Generator'),
          u(E, i, function () {
            return this;
          }),
          u(E, 'toString', function () {
            return '[object Generator]';
          }),
          (e.keys = function (t) {
            var e = Object(t),
              n = [];
            for (var r in e) n.push(r);
            return (
              n.reverse(),
              function t() {
                for (; n.length; ) {
                  var r = n.pop();
                  if (r in e) return (t.value = r), (t.done = !1), t;
                }
                return (t.done = !0), t;
              }
            );
          }),
          (e.values = T),
          (A.prototype = {
            constructor: A,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = t),
                (this.done = !1),
                (this.delegate = null),
                (this.method = 'next'),
                (this.arg = t),
                this.tryEntries.forEach(j),
                !e)
              )
                for (var n in this)
                  't' === n.charAt(0) &&
                    r.call(this, n) &&
                    !isNaN(+n.slice(1)) &&
                    (this[n] = t);
            },
            stop: function () {
              this.done = !0;
              var t = this.tryEntries[0].completion;
              if ('throw' === t.type) throw t.arg;
              return this.rval;
            },
            dispatchException: function (e) {
              if (this.done) throw e;
              var n = this;
              function o(r, o) {
                return (
                  (s.type = 'throw'),
                  (s.arg = e),
                  (n.next = r),
                  o && ((n.method = 'next'), (n.arg = t)),
                  !!o
                );
              }
              for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                var i = this.tryEntries[a],
                  s = i.completion;
                if ('root' === i.tryLoc) return o('end');
                if (i.tryLoc <= this.prev) {
                  var c = r.call(i, 'catchLoc'),
                    u = r.call(i, 'finallyLoc');
                  if (c && u) {
                    if (this.prev < i.catchLoc) return o(i.catchLoc, !0);
                    if (this.prev < i.finallyLoc) return o(i.finallyLoc);
                  } else if (c) {
                    if (this.prev < i.catchLoc) return o(i.catchLoc, !0);
                  } else {
                    if (!u)
                      throw Error('try statement without catch or finally');
                    if (this.prev < i.finallyLoc) return o(i.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (t, e) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var o = this.tryEntries[n];
                if (
                  o.tryLoc <= this.prev &&
                  r.call(o, 'finallyLoc') &&
                  this.prev < o.finallyLoc
                ) {
                  var a = o;
                  break;
                }
              }
              a &&
                ('break' === t || 'continue' === t) &&
                a.tryLoc <= e &&
                e <= a.finallyLoc &&
                (a = null);
              var i = a ? a.completion : {};
              return (
                (i.type = t),
                (i.arg = e),
                a
                  ? ((this.method = 'next'), (this.next = a.finallyLoc), w)
                  : this.complete(i)
              );
            },
            complete: function (t, e) {
              if ('throw' === t.type) throw t.arg;
              return (
                'break' === t.type || 'continue' === t.type
                  ? (this.next = t.arg)
                  : 'return' === t.type
                    ? ((this.rval = this.arg = t.arg),
                      (this.method = 'return'),
                      (this.next = 'end'))
                    : 'normal' === t.type && e && (this.next = e),
                w
              );
            },
            finish: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];
                if (n.finallyLoc === t)
                  return this.complete(n.completion, n.afterLoc), j(n), w;
              }
            },
            catch: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];
                if (n.tryLoc === t) {
                  var r = n.completion;
                  if ('throw' === r.type) {
                    var o = r.arg;
                    j(n);
                  }
                  return o;
                }
              }
              throw Error('illegal catch attempt');
            },
            delegateYield: function (e, n, r) {
              return (
                (this.delegate = { iterator: T(e), resultName: n, nextLoc: r }),
                'next' === this.method && (this.arg = t),
                w
              );
            },
          }),
          e
        );
      }
      function Jt(t, e, n, r, o, a, i) {
        try {
          var s = t[a](i),
            c = s.value;
        } catch (t) {
          return void n(t);
        }
        s.done ? e(c) : Promise.resolve(c).then(r, o);
      }
      function Qt(t) {
        return function () {
          var e = this,
            n = arguments;
          return new Promise(function (r, o) {
            var a = t.apply(e, n);
            function i(t) {
              Jt(a, r, o, i, s, 'next', t);
            }
            function s(t) {
              Jt(a, r, o, i, s, 'throw', t);
            }
            i(void 0);
          });
        };
      }
      var te = 'https://notes-api.dicoding.dev/v2';
      function ee(t) {
        localStorage.setItem('displayStatus', t ? 'archived' : 'active');
      }
      function ne() {
        return 'archived' === localStorage.getItem('displayStatus');
      }
      function re(t) {
        return oe.apply(this, arguments);
      }
      function oe() {
        return (oe = Qt(
          Xt().mark(function t(n) {
            var r, o;
            return Xt().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (t.prev = 0),
                        (t.next = 3),
                        fetch(''.concat(te, '/notes'), {
                          method: 'POST',
                          headers: { 'Content-Type': 'application/json' },
                          body: JSON.stringify(n),
                        })
                      );
                    case 3:
                      return (r = t.sent), (t.next = 6), r.json();
                    case 6:
                      if ('success' !== (o = t.sent).status) {
                        t.next = 14;
                        break;
                      }
                      return (
                        e().fire({
                          icon: 'success',
                          title: 'Catatan ditambahkan',
                          text: 'Catatan berhasil di tambahkan!',
                        }),
                        ee(!1),
                        Ut('', !1),
                        t.abrupt('return', o.data)
                      );
                    case 14:
                      return (
                        e().fire({
                          icon: 'error',
                          title: 'Gagal untuk menambah catatan',
                          text: o.message,
                        }),
                        t.abrupt('return', null)
                      );
                    case 16:
                      t.next = 23;
                      break;
                    case 18:
                      return (
                        (t.prev = 18),
                        (t.t0 = t.catch(0)),
                        e().fire({
                          icon: 'error',
                          title: 'Error',
                          text: 'Ups terjadi masalah saat menambah catatan!',
                        }),
                        console.error('Error adding note:', t.t0),
                        t.abrupt('return', null)
                      );
                    case 23:
                    case 'end':
                      return t.stop();
                  }
              },
              t,
              null,
              [[0, 18]]
            );
          })
        )).apply(this, arguments);
      }
      window.addEventListener(
        'add-note',
        (function () {
          var t = Qt(
            Xt().mark(function t(e) {
              var n;
              return Xt().wrap(function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (n = e.detail), (t.next = 3), re(n);
                    case 3:
                    case 'end':
                      return t.stop();
                  }
              }, t);
            })
          );
          return function (e) {
            return t.apply(this, arguments);
          };
        })()
      ),
        window.addEventListener('search-note', function (t) {
          Ut(t.detail, ne());
        }),
        window.addEventListener('filter-notes', function (t) {
          var e = t.detail;
          ee(e), Ut('', e);
        }),
        Ut('', ne());
    })();
})();

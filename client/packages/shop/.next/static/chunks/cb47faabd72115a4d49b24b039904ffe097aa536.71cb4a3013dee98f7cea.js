(window.webpackJsonp = window.webpackJsonp || []).push([
  [7],
  {
    GuU3: function (e, t, n) {
      (function (t) {
        var n;
        e.exports = (function e(t, r, o) {
          function i(u, c) {
            if (!r[u]) {
              if (!t[u]) {
                if (!c && 'function' == typeof n && n) return n(u, !0);
                if (a) return a(u, !0);
                var f = new Error("Cannot find module '" + u + "'");
                throw ((f.code = 'MODULE_NOT_FOUND'), f);
              }
              var s = (r[u] = { exports: {} });
              t[u][0].call(
                s.exports,
                function (e) {
                  var n = t[u][1][e];
                  return i(n || e);
                },
                s,
                s.exports,
                e,
                t,
                r,
                o
              );
            }
            return r[u].exports;
          }
          for (var a = 'function' == typeof n && n, u = 0; u < o.length; u++)
            i(o[u]);
          return i;
        })(
          {
            1: [
              function (e, n, r) {
                (function (e) {
                  'use strict';
                  var t,
                    r,
                    o = e.MutationObserver || e.WebKitMutationObserver;
                  if (o) {
                    var i = 0,
                      a = new o(s),
                      u = e.document.createTextNode('');
                    a.observe(u, { characterData: !0 }),
                      (t = function () {
                        u.data = i = ++i % 2;
                      });
                  } else if (
                    e.setImmediate ||
                    'undefined' === typeof e.MessageChannel
                  )
                    t =
                      'document' in e &&
                      'onreadystatechange' in e.document.createElement('script')
                        ? function () {
                            var t = e.document.createElement('script');
                            (t.onreadystatechange = function () {
                              s(),
                                (t.onreadystatechange = null),
                                t.parentNode.removeChild(t),
                                (t = null);
                            }),
                              e.document.documentElement.appendChild(t);
                          }
                        : function () {
                            setTimeout(s, 0);
                          };
                  else {
                    var c = new e.MessageChannel();
                    (c.port1.onmessage = s),
                      (t = function () {
                        c.port2.postMessage(0);
                      });
                  }
                  var f = [];
                  function s() {
                    var e, t;
                    r = !0;
                    for (var n = f.length; n; ) {
                      for (t = f, f = [], e = -1; ++e < n; ) t[e]();
                      n = f.length;
                    }
                    r = !1;
                  }
                  n.exports = function (e) {
                    1 !== f.push(e) || r || t();
                  };
                }.call(
                  this,
                  'undefined' !== typeof t
                    ? t
                    : 'undefined' !== typeof self
                    ? self
                    : 'undefined' !== typeof window
                    ? window
                    : {}
                ));
              },
              {},
            ],
            2: [
              function (e, t, n) {
                'use strict';
                var r = e(1);
                function o() {}
                var i = {},
                  a = ['REJECTED'],
                  u = ['FULFILLED'],
                  c = ['PENDING'];
                function f(e) {
                  if ('function' !== typeof e)
                    throw new TypeError('resolver must be a function');
                  (this.state = c),
                    (this.queue = []),
                    (this.outcome = void 0),
                    e !== o && v(this, e);
                }
                function s(e, t, n) {
                  (this.promise = e),
                    'function' === typeof t &&
                      ((this.onFulfilled = t),
                      (this.callFulfilled = this.otherCallFulfilled)),
                    'function' === typeof n &&
                      ((this.onRejected = n),
                      (this.callRejected = this.otherCallRejected));
                }
                function l(e, t, n) {
                  r(function () {
                    var r;
                    try {
                      r = t(n);
                    } catch (o) {
                      return i.reject(e, o);
                    }
                    r === e
                      ? i.reject(
                          e,
                          new TypeError('Cannot resolve promise with itself')
                        )
                      : i.resolve(e, r);
                  });
                }
                function d(e) {
                  var t = e && e.then;
                  if (
                    e &&
                    ('object' === typeof e || 'function' === typeof e) &&
                    'function' === typeof t
                  )
                    return function () {
                      t.apply(e, arguments);
                    };
                }
                function v(e, t) {
                  var n = !1;
                  function r(t) {
                    n || ((n = !0), i.reject(e, t));
                  }
                  function o(t) {
                    n || ((n = !0), i.resolve(e, t));
                  }
                  var a = h(function () {
                    t(o, r);
                  });
                  'error' === a.status && r(a.value);
                }
                function h(e, t) {
                  var n = {};
                  try {
                    (n.value = e(t)), (n.status = 'success');
                  } catch (r) {
                    (n.status = 'error'), (n.value = r);
                  }
                  return n;
                }
                (t.exports = f),
                  (f.prototype.catch = function (e) {
                    return this.then(null, e);
                  }),
                  (f.prototype.then = function (e, t) {
                    if (
                      ('function' !== typeof e && this.state === u) ||
                      ('function' !== typeof t && this.state === a)
                    )
                      return this;
                    var n = new this.constructor(o);
                    return (
                      this.state !== c
                        ? l(n, this.state === u ? e : t, this.outcome)
                        : this.queue.push(new s(n, e, t)),
                      n
                    );
                  }),
                  (s.prototype.callFulfilled = function (e) {
                    i.resolve(this.promise, e);
                  }),
                  (s.prototype.otherCallFulfilled = function (e) {
                    l(this.promise, this.onFulfilled, e);
                  }),
                  (s.prototype.callRejected = function (e) {
                    i.reject(this.promise, e);
                  }),
                  (s.prototype.otherCallRejected = function (e) {
                    l(this.promise, this.onRejected, e);
                  }),
                  (i.resolve = function (e, t) {
                    var n = h(d, t);
                    if ('error' === n.status) return i.reject(e, n.value);
                    var r = n.value;
                    if (r) v(e, r);
                    else {
                      (e.state = u), (e.outcome = t);
                      for (var o = -1, a = e.queue.length; ++o < a; )
                        e.queue[o].callFulfilled(t);
                    }
                    return e;
                  }),
                  (i.reject = function (e, t) {
                    (e.state = a), (e.outcome = t);
                    for (var n = -1, r = e.queue.length; ++n < r; )
                      e.queue[n].callRejected(t);
                    return e;
                  }),
                  (f.resolve = function (e) {
                    return e instanceof this ? e : i.resolve(new this(o), e);
                  }),
                  (f.reject = function (e) {
                    var t = new this(o);
                    return i.reject(t, e);
                  }),
                  (f.all = function (e) {
                    var t = this;
                    if ('[object Array]' !== Object.prototype.toString.call(e))
                      return this.reject(new TypeError('must be an array'));
                    var n = e.length,
                      r = !1;
                    if (!n) return this.resolve([]);
                    for (
                      var a = new Array(n), u = 0, c = -1, f = new this(o);
                      ++c < n;

                    )
                      s(e[c], c);
                    return f;
                    function s(e, o) {
                      t.resolve(e).then(
                        function (e) {
                          (a[o] = e),
                            ++u !== n || r || ((r = !0), i.resolve(f, a));
                        },
                        function (e) {
                          r || ((r = !0), i.reject(f, e));
                        }
                      );
                    }
                  }),
                  (f.race = function (e) {
                    var t = this;
                    if ('[object Array]' !== Object.prototype.toString.call(e))
                      return this.reject(new TypeError('must be an array'));
                    var n = e.length,
                      r = !1;
                    if (!n) return this.resolve([]);
                    for (var a, u = -1, c = new this(o); ++u < n; )
                      (a = e[u]),
                        t.resolve(a).then(
                          function (e) {
                            r || ((r = !0), i.resolve(c, e));
                          },
                          function (e) {
                            r || ((r = !0), i.reject(c, e));
                          }
                        );
                    return c;
                  });
              },
              { 1: 1 },
            ],
            3: [
              function (e, n, r) {
                (function (t) {
                  'use strict';
                  'function' !== typeof t.Promise && (t.Promise = e(2));
                }.call(
                  this,
                  'undefined' !== typeof t
                    ? t
                    : 'undefined' !== typeof self
                    ? self
                    : 'undefined' !== typeof window
                    ? window
                    : {}
                ));
              },
              { 2: 2 },
            ],
            4: [
              function (e, t, n) {
                'use strict';
                var r =
                    'function' === typeof Symbol &&
                    'symbol' === typeof Symbol.iterator
                      ? function (e) {
                          return typeof e;
                        }
                      : function (e) {
                          return e &&
                            'function' === typeof Symbol &&
                            e.constructor === Symbol &&
                            e !== Symbol.prototype
                            ? 'symbol'
                            : typeof e;
                        },
                  o = (function () {
                    try {
                      if ('undefined' !== typeof indexedDB) return indexedDB;
                      if ('undefined' !== typeof webkitIndexedDB)
                        return webkitIndexedDB;
                      if ('undefined' !== typeof mozIndexedDB)
                        return mozIndexedDB;
                      if ('undefined' !== typeof OIndexedDB) return OIndexedDB;
                      if ('undefined' !== typeof msIndexedDB)
                        return msIndexedDB;
                    } catch (e) {
                      return;
                    }
                  })();
                function i(e, t) {
                  (e = e || []), (t = t || {});
                  try {
                    return new Blob(e, t);
                  } catch (o) {
                    if ('TypeError' !== o.name) throw o;
                    for (
                      var n = new ('undefined' !== typeof BlobBuilder
                          ? BlobBuilder
                          : 'undefined' !== typeof MSBlobBuilder
                          ? MSBlobBuilder
                          : 'undefined' !== typeof MozBlobBuilder
                          ? MozBlobBuilder
                          : WebKitBlobBuilder)(),
                        r = 0;
                      r < e.length;
                      r += 1
                    )
                      n.append(e[r]);
                    return n.getBlob(t.type);
                  }
                }
                'undefined' === typeof Promise && e(3);
                var a = Promise;
                function u(e, t) {
                  t &&
                    e.then(
                      function (e) {
                        t(null, e);
                      },
                      function (e) {
                        t(e);
                      }
                    );
                }
                function c(e, t, n) {
                  'function' === typeof t && e.then(t),
                    'function' === typeof n && e.catch(n);
                }
                function f(e) {
                  return (
                    'string' !== typeof e &&
                      (console.warn(
                        e + ' used as a key, but it is not a string.'
                      ),
                      (e = String(e))),
                    e
                  );
                }
                function s() {
                  if (
                    arguments.length &&
                    'function' === typeof arguments[arguments.length - 1]
                  )
                    return arguments[arguments.length - 1];
                }
                var l = 'local-forage-detect-blob-support',
                  d = void 0,
                  v = {},
                  h = Object.prototype.toString,
                  p = 'readonly',
                  y = 'readwrite';
                function b(e) {
                  return 'boolean' === typeof d
                    ? a.resolve(d)
                    : (function (e) {
                        return new a(function (t) {
                          var n = e.transaction(l, y),
                            r = i(['']);
                          n.objectStore(l).put(r, 'key'),
                            (n.onabort = function (e) {
                              e.preventDefault(), e.stopPropagation(), t(!1);
                            }),
                            (n.oncomplete = function () {
                              var e = navigator.userAgent.match(
                                  /Chrome\/(\d+)/
                                ),
                                n = navigator.userAgent.match(/Edge\//);
                              t(n || !e || parseInt(e[1], 10) >= 43);
                            });
                        }).catch(function () {
                          return !1;
                        });
                      })(e).then(function (e) {
                        return (d = e);
                      });
                }
                function m(e) {
                  var t = v[e.name],
                    n = {};
                  (n.promise = new a(function (e, t) {
                    (n.resolve = e), (n.reject = t);
                  })),
                    t.deferredOperations.push(n),
                    t.dbReady
                      ? (t.dbReady = t.dbReady.then(function () {
                          return n.promise;
                        }))
                      : (t.dbReady = n.promise);
                }
                function g(e) {
                  var t = v[e.name].deferredOperations.pop();
                  if (t) return t.resolve(), t.promise;
                }
                function _(e, t) {
                  var n = v[e.name].deferredOperations.pop();
                  if (n) return n.reject(t), n.promise;
                }
                function I(e, t) {
                  return new a(function (n, r) {
                    if (
                      ((v[e.name] = v[e.name] || {
                        forages: [],
                        db: null,
                        dbReady: null,
                        deferredOperations: [],
                      }),
                      e.db)
                    ) {
                      if (!t) return n(e.db);
                      m(e), e.db.close();
                    }
                    var i = [e.name];
                    t && i.push(e.version);
                    var a = o.open.apply(o, i);
                    t &&
                      (a.onupgradeneeded = function (t) {
                        var n = a.result;
                        try {
                          n.createObjectStore(e.storeName),
                            t.oldVersion <= 1 && n.createObjectStore(l);
                        } catch (r) {
                          if ('ConstraintError' !== r.name) throw r;
                          console.warn(
                            'The database "' +
                              e.name +
                              '" has been upgraded from version ' +
                              t.oldVersion +
                              ' to version ' +
                              t.newVersion +
                              ', but the storage "' +
                              e.storeName +
                              '" already exists.'
                          );
                        }
                      }),
                      (a.onerror = function (e) {
                        e.preventDefault(), r(a.error);
                      }),
                      (a.onsuccess = function () {
                        n(a.result), g(e);
                      });
                  });
                }
                function w(e) {
                  return I(e, !1);
                }
                function O(e) {
                  return I(e, !0);
                }
                function E(e, t) {
                  if (!e.db) return !0;
                  var n = !e.db.objectStoreNames.contains(e.storeName),
                    r = e.version < e.db.version,
                    o = e.version > e.db.version;
                  if (
                    (r &&
                      (e.version !== t &&
                        console.warn(
                          'The database "' +
                            e.name +
                            '" can\'t be downgraded from version ' +
                            e.db.version +
                            ' to version ' +
                            e.version +
                            '.'
                        ),
                      (e.version = e.db.version)),
                    o || n)
                  ) {
                    if (n) {
                      var i = e.db.version + 1;
                      i > e.version && (e.version = i);
                    }
                    return !0;
                  }
                  return !1;
                }
                function S(e) {
                  return i(
                    [
                      (function (e) {
                        for (
                          var t = e.length,
                            n = new ArrayBuffer(t),
                            r = new Uint8Array(n),
                            o = 0;
                          o < t;
                          o++
                        )
                          r[o] = e.charCodeAt(o);
                        return n;
                      })(atob(e.data)),
                    ],
                    { type: e.type }
                  );
                }
                function j(e) {
                  return e && e.__local_forage_encoded_blob;
                }
                function R(e) {
                  var t = this,
                    n = t._initReady().then(function () {
                      var e = v[t._dbInfo.name];
                      if (e && e.dbReady) return e.dbReady;
                    });
                  return c(n, e, e), n;
                }
                function N(e, t, n, r) {
                  void 0 === r && (r = 1);
                  try {
                    var o = e.db.transaction(e.storeName, t);
                    n(null, o);
                  } catch (i) {
                    if (
                      r > 0 &&
                      (!e.db ||
                        'InvalidStateError' === i.name ||
                        'NotFoundError' === i.name)
                    )
                      return a
                        .resolve()
                        .then(function () {
                          if (
                            !e.db ||
                            ('NotFoundError' === i.name &&
                              !e.db.objectStoreNames.contains(e.storeName) &&
                              e.version <= e.db.version)
                          )
                            return e.db && (e.version = e.db.version + 1), O(e);
                        })
                        .then(function () {
                          return (function (e) {
                            m(e);
                            for (
                              var t = v[e.name], n = t.forages, r = 0;
                              r < n.length;
                              r++
                            ) {
                              var o = n[r];
                              o._dbInfo.db &&
                                (o._dbInfo.db.close(), (o._dbInfo.db = null));
                            }
                            return (
                              (e.db = null),
                              w(e)
                                .then(function (t) {
                                  return (e.db = t), E(e) ? O(e) : t;
                                })
                                .then(function (r) {
                                  e.db = t.db = r;
                                  for (var o = 0; o < n.length; o++)
                                    n[o]._dbInfo.db = r;
                                })
                                .catch(function (t) {
                                  throw (_(e, t), t);
                                })
                            );
                          })(e).then(function () {
                            N(e, t, n, r - 1);
                          });
                        })
                        .catch(n);
                    n(i);
                  }
                }
                var C = {
                    _driver: 'asyncStorage',
                    _initStorage: function (e) {
                      var t = this,
                        n = { db: null };
                      if (e) for (var r in e) n[r] = e[r];
                      var o = v[n.name];
                      o ||
                        ((o = {
                          forages: [],
                          db: null,
                          dbReady: null,
                          deferredOperations: [],
                        }),
                        (v[n.name] = o)),
                        o.forages.push(t),
                        t._initReady ||
                          ((t._initReady = t.ready), (t.ready = R));
                      var i = [];
                      function u() {
                        return a.resolve();
                      }
                      for (var c = 0; c < o.forages.length; c++) {
                        var f = o.forages[c];
                        f !== t && i.push(f._initReady().catch(u));
                      }
                      var s = o.forages.slice(0);
                      return a
                        .all(i)
                        .then(function () {
                          return (n.db = o.db), w(n);
                        })
                        .then(function (e) {
                          return (
                            (n.db = e),
                            E(n, t._defaultConfig.version) ? O(n) : e
                          );
                        })
                        .then(function (e) {
                          (n.db = o.db = e), (t._dbInfo = n);
                          for (var r = 0; r < s.length; r++) {
                            var i = s[r];
                            i !== t &&
                              ((i._dbInfo.db = n.db),
                              (i._dbInfo.version = n.version));
                          }
                        });
                    },
                    _support: (function () {
                      try {
                        if (!o || !o.open) return !1;
                        var e =
                            'undefined' !== typeof openDatabase &&
                            /(Safari|iPhone|iPad|iPod)/.test(
                              navigator.userAgent
                            ) &&
                            !/Chrome/.test(navigator.userAgent) &&
                            !/BlackBerry/.test(navigator.platform),
                          t =
                            'function' === typeof fetch &&
                            -1 !== fetch.toString().indexOf('[native code');
                        return (
                          (!e || t) &&
                          'undefined' !== typeof indexedDB &&
                          'undefined' !== typeof IDBKeyRange
                        );
                      } catch (n) {
                        return !1;
                      }
                    })(),
                    iterate: function (e, t) {
                      var n = this,
                        r = new a(function (t, r) {
                          n.ready()
                            .then(function () {
                              N(n._dbInfo, p, function (o, i) {
                                if (o) return r(o);
                                try {
                                  var a = i
                                      .objectStore(n._dbInfo.storeName)
                                      .openCursor(),
                                    u = 1;
                                  (a.onsuccess = function () {
                                    var n = a.result;
                                    if (n) {
                                      var r = n.value;
                                      j(r) && (r = S(r));
                                      var o = e(r, n.key, u++);
                                      void 0 !== o ? t(o) : n.continue();
                                    } else t();
                                  }),
                                    (a.onerror = function () {
                                      r(a.error);
                                    });
                                } catch (c) {
                                  r(c);
                                }
                              });
                            })
                            .catch(r);
                        });
                      return u(r, t), r;
                    },
                    getItem: function (e, t) {
                      var n = this;
                      e = f(e);
                      var r = new a(function (t, r) {
                        n.ready()
                          .then(function () {
                            N(n._dbInfo, p, function (o, i) {
                              if (o) return r(o);
                              try {
                                var a = i
                                  .objectStore(n._dbInfo.storeName)
                                  .get(e);
                                (a.onsuccess = function () {
                                  var e = a.result;
                                  void 0 === e && (e = null),
                                    j(e) && (e = S(e)),
                                    t(e);
                                }),
                                  (a.onerror = function () {
                                    r(a.error);
                                  });
                              } catch (u) {
                                r(u);
                              }
                            });
                          })
                          .catch(r);
                      });
                      return u(r, t), r;
                    },
                    setItem: function (e, t, n) {
                      var r = this;
                      e = f(e);
                      var o = new a(function (n, o) {
                        var i;
                        r.ready()
                          .then(function () {
                            return (
                              (i = r._dbInfo),
                              '[object Blob]' === h.call(t)
                                ? b(i.db).then(function (e) {
                                    return e
                                      ? t
                                      : ((n = t),
                                        new a(function (e, t) {
                                          var r = new FileReader();
                                          (r.onerror = t),
                                            (r.onloadend = function (t) {
                                              var r = btoa(
                                                t.target.result || ''
                                              );
                                              e({
                                                __local_forage_encoded_blob: !0,
                                                data: r,
                                                type: n.type,
                                              });
                                            }),
                                            r.readAsBinaryString(n);
                                        }));
                                    var n;
                                  })
                                : t
                            );
                          })
                          .then(function (t) {
                            N(r._dbInfo, y, function (i, a) {
                              if (i) return o(i);
                              try {
                                var u = a.objectStore(r._dbInfo.storeName);
                                null === t && (t = void 0);
                                var c = u.put(t, e);
                                (a.oncomplete = function () {
                                  void 0 === t && (t = null), n(t);
                                }),
                                  (a.onabort = a.onerror = function () {
                                    var e = c.error
                                      ? c.error
                                      : c.transaction.error;
                                    o(e);
                                  });
                              } catch (f) {
                                o(f);
                              }
                            });
                          })
                          .catch(o);
                      });
                      return u(o, n), o;
                    },
                    removeItem: function (e, t) {
                      var n = this;
                      e = f(e);
                      var r = new a(function (t, r) {
                        n.ready()
                          .then(function () {
                            N(n._dbInfo, y, function (o, i) {
                              if (o) return r(o);
                              try {
                                var a = i
                                  .objectStore(n._dbInfo.storeName)
                                  .delete(e);
                                (i.oncomplete = function () {
                                  t();
                                }),
                                  (i.onerror = function () {
                                    r(a.error);
                                  }),
                                  (i.onabort = function () {
                                    var e = a.error
                                      ? a.error
                                      : a.transaction.error;
                                    r(e);
                                  });
                              } catch (u) {
                                r(u);
                              }
                            });
                          })
                          .catch(r);
                      });
                      return u(r, t), r;
                    },
                    clear: function (e) {
                      var t = this,
                        n = new a(function (e, n) {
                          t.ready()
                            .then(function () {
                              N(t._dbInfo, y, function (r, o) {
                                if (r) return n(r);
                                try {
                                  var i = o
                                    .objectStore(t._dbInfo.storeName)
                                    .clear();
                                  (o.oncomplete = function () {
                                    e();
                                  }),
                                    (o.onabort = o.onerror = function () {
                                      var e = i.error
                                        ? i.error
                                        : i.transaction.error;
                                      n(e);
                                    });
                                } catch (a) {
                                  n(a);
                                }
                              });
                            })
                            .catch(n);
                        });
                      return u(n, e), n;
                    },
                    length: function (e) {
                      var t = this,
                        n = new a(function (e, n) {
                          t.ready()
                            .then(function () {
                              N(t._dbInfo, p, function (r, o) {
                                if (r) return n(r);
                                try {
                                  var i = o
                                    .objectStore(t._dbInfo.storeName)
                                    .count();
                                  (i.onsuccess = function () {
                                    e(i.result);
                                  }),
                                    (i.onerror = function () {
                                      n(i.error);
                                    });
                                } catch (a) {
                                  n(a);
                                }
                              });
                            })
                            .catch(n);
                        });
                      return u(n, e), n;
                    },
                    key: function (e, t) {
                      var n = this,
                        r = new a(function (t, r) {
                          e < 0
                            ? t(null)
                            : n
                                .ready()
                                .then(function () {
                                  N(n._dbInfo, p, function (o, i) {
                                    if (o) return r(o);
                                    try {
                                      var a = i.objectStore(
                                          n._dbInfo.storeName
                                        ),
                                        u = !1,
                                        c = a.openKeyCursor();
                                      (c.onsuccess = function () {
                                        var n = c.result;
                                        n
                                          ? 0 === e
                                            ? t(n.key)
                                            : u
                                            ? t(n.key)
                                            : ((u = !0), n.advance(e))
                                          : t(null);
                                      }),
                                        (c.onerror = function () {
                                          r(c.error);
                                        });
                                    } catch (f) {
                                      r(f);
                                    }
                                  });
                                })
                                .catch(r);
                        });
                      return u(r, t), r;
                    },
                    keys: function (e) {
                      var t = this,
                        n = new a(function (e, n) {
                          t.ready()
                            .then(function () {
                              N(t._dbInfo, p, function (r, o) {
                                if (r) return n(r);
                                try {
                                  var i = o
                                      .objectStore(t._dbInfo.storeName)
                                      .openKeyCursor(),
                                    a = [];
                                  (i.onsuccess = function () {
                                    var t = i.result;
                                    t ? (a.push(t.key), t.continue()) : e(a);
                                  }),
                                    (i.onerror = function () {
                                      n(i.error);
                                    });
                                } catch (u) {
                                  n(u);
                                }
                              });
                            })
                            .catch(n);
                        });
                      return u(n, e), n;
                    },
                    dropInstance: function (e, t) {
                      t = s.apply(this, arguments);
                      var n,
                        r = this.config();
                      if (
                        ((e = ('function' !== typeof e && e) || {}).name ||
                          ((e.name = e.name || r.name),
                          (e.storeName = e.storeName || r.storeName)),
                        e.name)
                      ) {
                        var i =
                          e.name === r.name && this._dbInfo.db
                            ? a.resolve(this._dbInfo.db)
                            : w(e).then(function (t) {
                                var n = v[e.name],
                                  r = n.forages;
                                n.db = t;
                                for (var o = 0; o < r.length; o++)
                                  r[o]._dbInfo.db = t;
                                return t;
                              });
                        n = e.storeName
                          ? i.then(function (t) {
                              if (t.objectStoreNames.contains(e.storeName)) {
                                var n = t.version + 1;
                                m(e);
                                var r = v[e.name],
                                  i = r.forages;
                                t.close();
                                for (var u = 0; u < i.length; u++) {
                                  var c = i[u];
                                  (c._dbInfo.db = null),
                                    (c._dbInfo.version = n);
                                }
                                return new a(function (t, r) {
                                  var i = o.open(e.name, n);
                                  (i.onerror = function (e) {
                                    i.result.close(), r(e);
                                  }),
                                    (i.onupgradeneeded = function () {
                                      i.result.deleteObjectStore(e.storeName);
                                    }),
                                    (i.onsuccess = function () {
                                      var e = i.result;
                                      e.close(), t(e);
                                    });
                                })
                                  .then(function (e) {
                                    r.db = e;
                                    for (var t = 0; t < i.length; t++) {
                                      var n = i[t];
                                      (n._dbInfo.db = e), g(n._dbInfo);
                                    }
                                  })
                                  .catch(function (t) {
                                    throw (
                                      ((
                                        _(e, t) || a.resolve()
                                      ).catch(function () {}),
                                      t)
                                    );
                                  });
                              }
                            })
                          : i.then(function (t) {
                              m(e);
                              var n = v[e.name],
                                r = n.forages;
                              t.close();
                              for (var i = 0; i < r.length; i++)
                                r[i]._dbInfo.db = null;
                              return new a(function (t, n) {
                                var r = o.deleteDatabase(e.name);
                                (r.onerror = r.onblocked = function (e) {
                                  var t = r.result;
                                  t && t.close(), n(e);
                                }),
                                  (r.onsuccess = function () {
                                    var e = r.result;
                                    e && e.close(), t(e);
                                  });
                              })
                                .then(function (e) {
                                  n.db = e;
                                  for (var t = 0; t < r.length; t++)
                                    g(r[t]._dbInfo);
                                })
                                .catch(function (t) {
                                  throw (
                                    ((
                                      _(e, t) || a.resolve()
                                    ).catch(function () {}),
                                    t)
                                  );
                                });
                            });
                      } else n = a.reject('Invalid arguments');
                      return u(n, t), n;
                    },
                  },
                  A =
                    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
                  D = '~~local_forage_type~',
                  P = /^~~local_forage_type~([^~]+)~/,
                  T = '__lfsc__:',
                  k = T.length,
                  x = 'arbf',
                  B = 'blob',
                  L = 'si08',
                  F = 'ui08',
                  M = 'uic8',
                  U = 'si16',
                  q = 'si32',
                  H = 'ur16',
                  z = 'ui32',
                  G = 'fl32',
                  W = 'fl64',
                  J = k + x.length,
                  V = Object.prototype.toString;
                function K(e) {
                  var t,
                    n,
                    r,
                    o,
                    i,
                    a = 0.75 * e.length,
                    u = e.length,
                    c = 0;
                  '=' === e[e.length - 1] &&
                    (a--, '=' === e[e.length - 2] && a--);
                  var f = new ArrayBuffer(a),
                    s = new Uint8Array(f);
                  for (t = 0; t < u; t += 4)
                    (n = A.indexOf(e[t])),
                      (r = A.indexOf(e[t + 1])),
                      (o = A.indexOf(e[t + 2])),
                      (i = A.indexOf(e[t + 3])),
                      (s[c++] = (n << 2) | (r >> 4)),
                      (s[c++] = ((15 & r) << 4) | (o >> 2)),
                      (s[c++] = ((3 & o) << 6) | (63 & i));
                  return f;
                }
                function Q(e) {
                  var t,
                    n = new Uint8Array(e),
                    r = '';
                  for (t = 0; t < n.length; t += 3)
                    (r += A[n[t] >> 2]),
                      (r += A[((3 & n[t]) << 4) | (n[t + 1] >> 4)]),
                      (r += A[((15 & n[t + 1]) << 2) | (n[t + 2] >> 6)]),
                      (r += A[63 & n[t + 2]]);
                  return (
                    n.length % 3 === 2
                      ? (r = r.substring(0, r.length - 1) + '=')
                      : n.length % 3 === 1 &&
                        (r = r.substring(0, r.length - 2) + '=='),
                    r
                  );
                }
                var Y = {
                  serialize: function (e, t) {
                    var n = '';
                    if (
                      (e && (n = V.call(e)),
                      e &&
                        ('[object ArrayBuffer]' === n ||
                          (e.buffer &&
                            '[object ArrayBuffer]' === V.call(e.buffer))))
                    ) {
                      var r,
                        o = T;
                      e instanceof ArrayBuffer
                        ? ((r = e), (o += x))
                        : ((r = e.buffer),
                          '[object Int8Array]' === n
                            ? (o += L)
                            : '[object Uint8Array]' === n
                            ? (o += F)
                            : '[object Uint8ClampedArray]' === n
                            ? (o += M)
                            : '[object Int16Array]' === n
                            ? (o += U)
                            : '[object Uint16Array]' === n
                            ? (o += H)
                            : '[object Int32Array]' === n
                            ? (o += q)
                            : '[object Uint32Array]' === n
                            ? (o += z)
                            : '[object Float32Array]' === n
                            ? (o += G)
                            : '[object Float64Array]' === n
                            ? (o += W)
                            : t(
                                new Error('Failed to get type for BinaryArray')
                              )),
                        t(o + Q(r));
                    } else if ('[object Blob]' === n) {
                      var i = new FileReader();
                      (i.onload = function () {
                        var n = D + e.type + '~' + Q(this.result);
                        t(T + B + n);
                      }),
                        i.readAsArrayBuffer(e);
                    } else
                      try {
                        t(JSON.stringify(e));
                      } catch (a) {
                        console.error(
                          "Couldn't convert value into a JSON string: ",
                          e
                        ),
                          t(null, a);
                      }
                  },
                  deserialize: function (e) {
                    if (e.substring(0, k) !== T) return JSON.parse(e);
                    var t,
                      n = e.substring(J),
                      r = e.substring(k, J);
                    if (r === B && P.test(n)) {
                      var o = n.match(P);
                      (t = o[1]), (n = n.substring(o[0].length));
                    }
                    var a = K(n);
                    switch (r) {
                      case x:
                        return a;
                      case B:
                        return i([a], { type: t });
                      case L:
                        return new Int8Array(a);
                      case F:
                        return new Uint8Array(a);
                      case M:
                        return new Uint8ClampedArray(a);
                      case U:
                        return new Int16Array(a);
                      case H:
                        return new Uint16Array(a);
                      case q:
                        return new Int32Array(a);
                      case z:
                        return new Uint32Array(a);
                      case G:
                        return new Float32Array(a);
                      case W:
                        return new Float64Array(a);
                      default:
                        throw new Error('Unkown type: ' + r);
                    }
                  },
                  stringToBuffer: K,
                  bufferToString: Q,
                };
                function X(e, t, n, r) {
                  e.executeSql(
                    'CREATE TABLE IF NOT EXISTS ' +
                      t.storeName +
                      ' (id INTEGER PRIMARY KEY, key unique, value)',
                    [],
                    n,
                    r
                  );
                }
                function Z(e, t, n, r, o, i) {
                  e.executeSql(
                    n,
                    r,
                    o,
                    function (e, a) {
                      a.code === a.SYNTAX_ERR
                        ? e.executeSql(
                            "SELECT name FROM sqlite_master WHERE type='table' AND name = ?",
                            [t.storeName],
                            function (e, u) {
                              u.rows.length
                                ? i(e, a)
                                : X(
                                    e,
                                    t,
                                    function () {
                                      e.executeSql(n, r, o, i);
                                    },
                                    i
                                  );
                            },
                            i
                          )
                        : i(e, a);
                    },
                    i
                  );
                }
                function $(e, t, n, r) {
                  var o = this;
                  e = f(e);
                  var i = new a(function (i, a) {
                    o.ready()
                      .then(function () {
                        void 0 === t && (t = null);
                        var u = t,
                          c = o._dbInfo;
                        c.serializer.serialize(t, function (t, f) {
                          f
                            ? a(f)
                            : c.db.transaction(
                                function (n) {
                                  Z(
                                    n,
                                    c,
                                    'INSERT OR REPLACE INTO ' +
                                      c.storeName +
                                      ' (key, value) VALUES (?, ?)',
                                    [e, t],
                                    function () {
                                      i(u);
                                    },
                                    function (e, t) {
                                      a(t);
                                    }
                                  );
                                },
                                function (t) {
                                  if (t.code === t.QUOTA_ERR) {
                                    if (r > 0)
                                      return void i(
                                        $.apply(o, [e, u, n, r - 1])
                                      );
                                    a(t);
                                  }
                                }
                              );
                        });
                      })
                      .catch(a);
                  });
                  return u(i, n), i;
                }
                var ee = {
                  _driver: 'webSQLStorage',
                  _initStorage: function (e) {
                    var t = this,
                      n = { db: null };
                    if (e)
                      for (var r in e)
                        n[r] =
                          'string' !== typeof e[r] ? e[r].toString() : e[r];
                    var o = new a(function (e, r) {
                      try {
                        n.db = openDatabase(
                          n.name,
                          String(n.version),
                          n.description,
                          n.size
                        );
                      } catch (o) {
                        return r(o);
                      }
                      n.db.transaction(function (o) {
                        X(
                          o,
                          n,
                          function () {
                            (t._dbInfo = n), e();
                          },
                          function (e, t) {
                            r(t);
                          }
                        );
                      }, r);
                    });
                    return (n.serializer = Y), o;
                  },
                  _support: 'function' === typeof openDatabase,
                  iterate: function (e, t) {
                    var n = this,
                      r = new a(function (t, r) {
                        n.ready()
                          .then(function () {
                            var o = n._dbInfo;
                            o.db.transaction(function (n) {
                              Z(
                                n,
                                o,
                                'SELECT * FROM ' + o.storeName,
                                [],
                                function (n, r) {
                                  for (
                                    var i = r.rows, a = i.length, u = 0;
                                    u < a;
                                    u++
                                  ) {
                                    var c = i.item(u),
                                      f = c.value;
                                    if (
                                      (f && (f = o.serializer.deserialize(f)),
                                      void 0 !== (f = e(f, c.key, u + 1)))
                                    )
                                      return void t(f);
                                  }
                                  t();
                                },
                                function (e, t) {
                                  r(t);
                                }
                              );
                            });
                          })
                          .catch(r);
                      });
                    return u(r, t), r;
                  },
                  getItem: function (e, t) {
                    var n = this;
                    e = f(e);
                    var r = new a(function (t, r) {
                      n.ready()
                        .then(function () {
                          var o = n._dbInfo;
                          o.db.transaction(function (n) {
                            Z(
                              n,
                              o,
                              'SELECT * FROM ' +
                                o.storeName +
                                ' WHERE key = ? LIMIT 1',
                              [e],
                              function (e, n) {
                                var r = n.rows.length
                                  ? n.rows.item(0).value
                                  : null;
                                r && (r = o.serializer.deserialize(r)), t(r);
                              },
                              function (e, t) {
                                r(t);
                              }
                            );
                          });
                        })
                        .catch(r);
                    });
                    return u(r, t), r;
                  },
                  setItem: function (e, t, n) {
                    return $.apply(this, [e, t, n, 1]);
                  },
                  removeItem: function (e, t) {
                    var n = this;
                    e = f(e);
                    var r = new a(function (t, r) {
                      n.ready()
                        .then(function () {
                          var o = n._dbInfo;
                          o.db.transaction(function (n) {
                            Z(
                              n,
                              o,
                              'DELETE FROM ' + o.storeName + ' WHERE key = ?',
                              [e],
                              function () {
                                t();
                              },
                              function (e, t) {
                                r(t);
                              }
                            );
                          });
                        })
                        .catch(r);
                    });
                    return u(r, t), r;
                  },
                  clear: function (e) {
                    var t = this,
                      n = new a(function (e, n) {
                        t.ready()
                          .then(function () {
                            var r = t._dbInfo;
                            r.db.transaction(function (t) {
                              Z(
                                t,
                                r,
                                'DELETE FROM ' + r.storeName,
                                [],
                                function () {
                                  e();
                                },
                                function (e, t) {
                                  n(t);
                                }
                              );
                            });
                          })
                          .catch(n);
                      });
                    return u(n, e), n;
                  },
                  length: function (e) {
                    var t = this,
                      n = new a(function (e, n) {
                        t.ready()
                          .then(function () {
                            var r = t._dbInfo;
                            r.db.transaction(function (t) {
                              Z(
                                t,
                                r,
                                'SELECT COUNT(key) as c FROM ' + r.storeName,
                                [],
                                function (t, n) {
                                  var r = n.rows.item(0).c;
                                  e(r);
                                },
                                function (e, t) {
                                  n(t);
                                }
                              );
                            });
                          })
                          .catch(n);
                      });
                    return u(n, e), n;
                  },
                  key: function (e, t) {
                    var n = this,
                      r = new a(function (t, r) {
                        n.ready()
                          .then(function () {
                            var o = n._dbInfo;
                            o.db.transaction(function (n) {
                              Z(
                                n,
                                o,
                                'SELECT key FROM ' +
                                  o.storeName +
                                  ' WHERE id = ? LIMIT 1',
                                [e + 1],
                                function (e, n) {
                                  var r = n.rows.length
                                    ? n.rows.item(0).key
                                    : null;
                                  t(r);
                                },
                                function (e, t) {
                                  r(t);
                                }
                              );
                            });
                          })
                          .catch(r);
                      });
                    return u(r, t), r;
                  },
                  keys: function (e) {
                    var t = this,
                      n = new a(function (e, n) {
                        t.ready()
                          .then(function () {
                            var r = t._dbInfo;
                            r.db.transaction(function (t) {
                              Z(
                                t,
                                r,
                                'SELECT key FROM ' + r.storeName,
                                [],
                                function (t, n) {
                                  for (
                                    var r = [], o = 0;
                                    o < n.rows.length;
                                    o++
                                  )
                                    r.push(n.rows.item(o).key);
                                  e(r);
                                },
                                function (e, t) {
                                  n(t);
                                }
                              );
                            });
                          })
                          .catch(n);
                      });
                    return u(n, e), n;
                  },
                  dropInstance: function (e, t) {
                    t = s.apply(this, arguments);
                    var n = this.config();
                    (e = ('function' !== typeof e && e) || {}).name ||
                      ((e.name = e.name || n.name),
                      (e.storeName = e.storeName || n.storeName));
                    var r,
                      o = this;
                    return (
                      u(
                        (r = e.name
                          ? new a(function (t) {
                              var r;
                              (r =
                                e.name === n.name
                                  ? o._dbInfo.db
                                  : openDatabase(e.name, '', '', 0)),
                                e.storeName
                                  ? t({ db: r, storeNames: [e.storeName] })
                                  : t(
                                      (function (e) {
                                        return new a(function (t, n) {
                                          e.transaction(
                                            function (r) {
                                              r.executeSql(
                                                "SELECT name FROM sqlite_master WHERE type='table' AND name <> '__WebKitDatabaseInfoTable__'",
                                                [],
                                                function (n, r) {
                                                  for (
                                                    var o = [], i = 0;
                                                    i < r.rows.length;
                                                    i++
                                                  )
                                                    o.push(r.rows.item(i).name);
                                                  t({ db: e, storeNames: o });
                                                },
                                                function (e, t) {
                                                  n(t);
                                                }
                                              );
                                            },
                                            function (e) {
                                              n(e);
                                            }
                                          );
                                        });
                                      })(r)
                                    );
                            }).then(function (e) {
                              return new a(function (t, n) {
                                e.db.transaction(
                                  function (r) {
                                    function o(e) {
                                      return new a(function (t, n) {
                                        r.executeSql(
                                          'DROP TABLE IF EXISTS ' + e,
                                          [],
                                          function () {
                                            t();
                                          },
                                          function (e, t) {
                                            n(t);
                                          }
                                        );
                                      });
                                    }
                                    for (
                                      var i = [],
                                        u = 0,
                                        c = e.storeNames.length;
                                      u < c;
                                      u++
                                    )
                                      i.push(o(e.storeNames[u]));
                                    a.all(i)
                                      .then(function () {
                                        t();
                                      })
                                      .catch(function (e) {
                                        n(e);
                                      });
                                  },
                                  function (e) {
                                    n(e);
                                  }
                                );
                              });
                            })
                          : a.reject('Invalid arguments')),
                        t
                      ),
                      r
                    );
                  },
                };
                function te(e, t) {
                  var n = e.name + '/';
                  return (
                    e.storeName !== t.storeName && (n += e.storeName + '/'), n
                  );
                }
                function ne() {
                  return (
                    !(function () {
                      try {
                        return (
                          localStorage.setItem('_localforage_support_test', !0),
                          localStorage.removeItem('_localforage_support_test'),
                          !1
                        );
                      } catch (e) {
                        return !0;
                      }
                    })() || localStorage.length > 0
                  );
                }
                var re = {
                    _driver: 'localStorageWrapper',
                    _initStorage: function (e) {
                      var t = {};
                      if (e) for (var n in e) t[n] = e[n];
                      return (
                        (t.keyPrefix = te(e, this._defaultConfig)),
                        ne()
                          ? ((this._dbInfo = t),
                            (t.serializer = Y),
                            a.resolve())
                          : a.reject()
                      );
                    },
                    _support: (function () {
                      try {
                        return (
                          'undefined' !== typeof localStorage &&
                          'setItem' in localStorage &&
                          !!localStorage.setItem
                        );
                      } catch (e) {
                        return !1;
                      }
                    })(),
                    iterate: function (e, t) {
                      var n = this,
                        r = n.ready().then(function () {
                          for (
                            var t = n._dbInfo,
                              r = t.keyPrefix,
                              o = r.length,
                              i = localStorage.length,
                              a = 1,
                              u = 0;
                            u < i;
                            u++
                          ) {
                            var c = localStorage.key(u);
                            if (0 === c.indexOf(r)) {
                              var f = localStorage.getItem(c);
                              if (
                                (f && (f = t.serializer.deserialize(f)),
                                void 0 !== (f = e(f, c.substring(o), a++)))
                              )
                                return f;
                            }
                          }
                        });
                      return u(r, t), r;
                    },
                    getItem: function (e, t) {
                      var n = this;
                      e = f(e);
                      var r = n.ready().then(function () {
                        var t = n._dbInfo,
                          r = localStorage.getItem(t.keyPrefix + e);
                        return r && (r = t.serializer.deserialize(r)), r;
                      });
                      return u(r, t), r;
                    },
                    setItem: function (e, t, n) {
                      var r = this;
                      e = f(e);
                      var o = r.ready().then(function () {
                        void 0 === t && (t = null);
                        var n = t;
                        return new a(function (o, i) {
                          var a = r._dbInfo;
                          a.serializer.serialize(t, function (t, r) {
                            if (r) i(r);
                            else
                              try {
                                localStorage.setItem(a.keyPrefix + e, t), o(n);
                              } catch (u) {
                                ('QuotaExceededError' !== u.name &&
                                  'NS_ERROR_DOM_QUOTA_REACHED' !== u.name) ||
                                  i(u),
                                  i(u);
                              }
                          });
                        });
                      });
                      return u(o, n), o;
                    },
                    removeItem: function (e, t) {
                      var n = this;
                      e = f(e);
                      var r = n.ready().then(function () {
                        var t = n._dbInfo;
                        localStorage.removeItem(t.keyPrefix + e);
                      });
                      return u(r, t), r;
                    },
                    clear: function (e) {
                      var t = this,
                        n = t.ready().then(function () {
                          for (
                            var e = t._dbInfo.keyPrefix,
                              n = localStorage.length - 1;
                            n >= 0;
                            n--
                          ) {
                            var r = localStorage.key(n);
                            0 === r.indexOf(e) && localStorage.removeItem(r);
                          }
                        });
                      return u(n, e), n;
                    },
                    length: function (e) {
                      var t = this.keys().then(function (e) {
                        return e.length;
                      });
                      return u(t, e), t;
                    },
                    key: function (e, t) {
                      var n = this,
                        r = n.ready().then(function () {
                          var t,
                            r = n._dbInfo;
                          try {
                            t = localStorage.key(e);
                          } catch (o) {
                            t = null;
                          }
                          return t && (t = t.substring(r.keyPrefix.length)), t;
                        });
                      return u(r, t), r;
                    },
                    keys: function (e) {
                      var t = this,
                        n = t.ready().then(function () {
                          for (
                            var e = t._dbInfo,
                              n = localStorage.length,
                              r = [],
                              o = 0;
                            o < n;
                            o++
                          ) {
                            var i = localStorage.key(o);
                            0 === i.indexOf(e.keyPrefix) &&
                              r.push(i.substring(e.keyPrefix.length));
                          }
                          return r;
                        });
                      return u(n, e), n;
                    },
                    dropInstance: function (e, t) {
                      if (
                        ((t = s.apply(this, arguments)),
                        !(e = ('function' !== typeof e && e) || {}).name)
                      ) {
                        var n = this.config();
                        (e.name = e.name || n.name),
                          (e.storeName = e.storeName || n.storeName);
                      }
                      var r,
                        o = this;
                      return (
                        u(
                          (r = e.name
                            ? new a(function (t) {
                                e.storeName
                                  ? t(te(e, o._defaultConfig))
                                  : t(e.name + '/');
                              }).then(function (e) {
                                for (
                                  var t = localStorage.length - 1;
                                  t >= 0;
                                  t--
                                ) {
                                  var n = localStorage.key(t);
                                  0 === n.indexOf(e) &&
                                    localStorage.removeItem(n);
                                }
                              })
                            : a.reject('Invalid arguments')),
                          t
                        ),
                        r
                      );
                    },
                  },
                  oe = function (e, t) {
                    for (var n, r, o = e.length, i = 0; i < o; ) {
                      if (
                        (n = e[i]) === (r = t) ||
                        ('number' === typeof n &&
                          'number' === typeof r &&
                          isNaN(n) &&
                          isNaN(r))
                      )
                        return !0;
                      i++;
                    }
                    return !1;
                  },
                  ie =
                    Array.isArray ||
                    function (e) {
                      return (
                        '[object Array]' === Object.prototype.toString.call(e)
                      );
                    },
                  ae = {},
                  ue = {},
                  ce = { INDEXEDDB: C, WEBSQL: ee, LOCALSTORAGE: re },
                  fe = [
                    ce.INDEXEDDB._driver,
                    ce.WEBSQL._driver,
                    ce.LOCALSTORAGE._driver,
                  ],
                  se = ['dropInstance'],
                  le = [
                    'clear',
                    'getItem',
                    'iterate',
                    'key',
                    'keys',
                    'length',
                    'removeItem',
                    'setItem',
                  ].concat(se),
                  de = {
                    description: '',
                    driver: fe.slice(),
                    name: 'localforage',
                    size: 4980736,
                    storeName: 'keyvaluepairs',
                    version: 1,
                  };
                function ve(e, t) {
                  e[t] = function () {
                    var n = arguments;
                    return e.ready().then(function () {
                      return e[t].apply(e, n);
                    });
                  };
                }
                function he() {
                  for (var e = 1; e < arguments.length; e++) {
                    var t = arguments[e];
                    if (t)
                      for (var n in t)
                        t.hasOwnProperty(n) &&
                          (ie(t[n])
                            ? (arguments[0][n] = t[n].slice())
                            : (arguments[0][n] = t[n]));
                  }
                  return arguments[0];
                }
                var pe = new ((function () {
                  function e(t) {
                    for (var n in ((function (e, t) {
                      if (!(e instanceof t))
                        throw new TypeError(
                          'Cannot call a class as a function'
                        );
                    })(this, e),
                    ce))
                      if (ce.hasOwnProperty(n)) {
                        var r = ce[n],
                          o = r._driver;
                        (this[n] = o), ae[o] || this.defineDriver(r);
                      }
                    (this._defaultConfig = he({}, de)),
                      (this._config = he({}, this._defaultConfig, t)),
                      (this._driverSet = null),
                      (this._initDriver = null),
                      (this._ready = !1),
                      (this._dbInfo = null),
                      this._wrapLibraryMethodsWithReady(),
                      this.setDriver(this._config.driver).catch(function () {});
                  }
                  return (
                    (e.prototype.config = function (e) {
                      if (
                        'object' ===
                        ('undefined' === typeof e ? 'undefined' : r(e))
                      ) {
                        if (this._ready)
                          return new Error(
                            "Can't call config() after localforage has been used."
                          );
                        for (var t in e) {
                          if (
                            ('storeName' === t &&
                              (e[t] = e[t].replace(/\W/g, '_')),
                            'version' === t && 'number' !== typeof e[t])
                          )
                            return new Error(
                              'Database version must be a number.'
                            );
                          this._config[t] = e[t];
                        }
                        return (
                          !('driver' in e && e.driver) ||
                          this.setDriver(this._config.driver)
                        );
                      }
                      return 'string' === typeof e
                        ? this._config[e]
                        : this._config;
                    }),
                    (e.prototype.defineDriver = function (e, t, n) {
                      var r = new a(function (t, n) {
                        try {
                          var r = e._driver,
                            o = new Error(
                              'Custom driver not compliant; see https://mozilla.github.io/localForage/#definedriver'
                            );
                          if (!e._driver) return void n(o);
                          for (
                            var i = le.concat('_initStorage'),
                              c = 0,
                              f = i.length;
                            c < f;
                            c++
                          ) {
                            var s = i[c];
                            if (
                              (!oe(se, s) || e[s]) &&
                              'function' !== typeof e[s]
                            )
                              return void n(o);
                          }
                          !(function () {
                            for (
                              var t = function (e) {
                                  return function () {
                                    var t = new Error(
                                        'Method ' +
                                          e +
                                          ' is not implemented by the current driver'
                                      ),
                                      n = a.reject(t);
                                    return (
                                      u(n, arguments[arguments.length - 1]), n
                                    );
                                  };
                                },
                                n = 0,
                                r = se.length;
                              n < r;
                              n++
                            ) {
                              var o = se[n];
                              e[o] || (e[o] = t(o));
                            }
                          })();
                          var l = function (n) {
                            ae[r] &&
                              console.info(
                                'Redefining LocalForage driver: ' + r
                              ),
                              (ae[r] = e),
                              (ue[r] = n),
                              t();
                          };
                          '_support' in e
                            ? e._support && 'function' === typeof e._support
                              ? e._support().then(l, n)
                              : l(!!e._support)
                            : l(!0);
                        } catch (d) {
                          n(d);
                        }
                      });
                      return c(r, t, n), r;
                    }),
                    (e.prototype.driver = function () {
                      return this._driver || null;
                    }),
                    (e.prototype.getDriver = function (e, t, n) {
                      var r = ae[e]
                        ? a.resolve(ae[e])
                        : a.reject(new Error('Driver not found.'));
                      return c(r, t, n), r;
                    }),
                    (e.prototype.getSerializer = function (e) {
                      var t = a.resolve(Y);
                      return c(t, e), t;
                    }),
                    (e.prototype.ready = function (e) {
                      var t = this,
                        n = t._driverSet.then(function () {
                          return (
                            null === t._ready && (t._ready = t._initDriver()),
                            t._ready
                          );
                        });
                      return c(n, e, e), n;
                    }),
                    (e.prototype.setDriver = function (e, t, n) {
                      var r = this;
                      ie(e) || (e = [e]);
                      var o = this._getSupportedDrivers(e);
                      function i() {
                        r._config.driver = r.driver();
                      }
                      function u(e) {
                        return (
                          r._extend(e),
                          i(),
                          (r._ready = r._initStorage(r._config)),
                          r._ready
                        );
                      }
                      var f =
                        null !== this._driverSet
                          ? this._driverSet.catch(function () {
                              return a.resolve();
                            })
                          : a.resolve();
                      return (
                        (this._driverSet = f
                          .then(function () {
                            var e = o[0];
                            return (
                              (r._dbInfo = null),
                              (r._ready = null),
                              r.getDriver(e).then(function (e) {
                                (r._driver = e._driver),
                                  i(),
                                  r._wrapLibraryMethodsWithReady(),
                                  (r._initDriver = (function (e) {
                                    return function () {
                                      var t = 0;
                                      return (function n() {
                                        for (; t < e.length; ) {
                                          var o = e[t];
                                          return (
                                            t++,
                                            (r._dbInfo = null),
                                            (r._ready = null),
                                            r.getDriver(o).then(u).catch(n)
                                          );
                                        }
                                        i();
                                        var c = new Error(
                                          'No available storage method found.'
                                        );
                                        return (
                                          (r._driverSet = a.reject(c)),
                                          r._driverSet
                                        );
                                      })();
                                    };
                                  })(o));
                              })
                            );
                          })
                          .catch(function () {
                            i();
                            var e = new Error(
                              'No available storage method found.'
                            );
                            return (r._driverSet = a.reject(e)), r._driverSet;
                          })),
                        c(this._driverSet, t, n),
                        this._driverSet
                      );
                    }),
                    (e.prototype.supports = function (e) {
                      return !!ue[e];
                    }),
                    (e.prototype._extend = function (e) {
                      he(this, e);
                    }),
                    (e.prototype._getSupportedDrivers = function (e) {
                      for (var t = [], n = 0, r = e.length; n < r; n++) {
                        var o = e[n];
                        this.supports(o) && t.push(o);
                      }
                      return t;
                    }),
                    (e.prototype._wrapLibraryMethodsWithReady = function () {
                      for (var e = 0, t = le.length; e < t; e++)
                        ve(this, le[e]);
                    }),
                    (e.prototype.createInstance = function (t) {
                      return new e(t);
                    }),
                    e
                  );
                })())();
                t.exports = pe;
              },
              { 3: 3 },
            ],
          },
          {},
          [4]
        )(4);
      }.call(this, n('lpmq')));
    },
    tFEG: function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return P;
      }),
        n.d(t, 'b', function () {
          return T;
        });
      var r = n('zjfJ'),
        o = n('ERkP'),
        i = n.n(o),
        a = n('fGyu');
      function u(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function c(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? u(Object(n), !0).forEach(function (t) {
                Object(r.a)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : u(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function f(e, t) {
        var n = (e * Number(t.percentage)) / 100;
        return (n =
          n >= (null === t || void 0 === t ? void 0 : t.maximum_discount_amount)
            ? null === t || void 0 === t
              ? void 0
              : t.maximum_discount_amount
            : n);
      }
      function s(e) {
        return e.reduce(function (e, t) {
          return t.salePrice
            ? e + t.salePrice * t.quantity
            : e + t.price * t.quantity;
        }, 0);
      }
      var l = function (e) {
          var t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : null;
          if (null === e || 0 === e.length) return 0;
          var n = s(e),
            r = t ? f(n, t) : 0;
          return n - r;
        },
        d = function (e) {
          var t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : null;
          if (null === e || 0 === e.length) return 0;
          var n = s(e);
          return t ? f(n, t) : 0;
        },
        v = function (e, t) {
          var n = e.items.findIndex(function (e) {
            return e.id === t.payload.id;
          });
          if (n > -1) {
            var r = Object(a.a)(e.items);
            return (r[n].quantity += t.payload.quantity), r;
          }
          return [].concat(Object(a.a)(e.items), [t.payload]);
        },
        h = function (e, t) {
          return e.items.reduce(function (e, n) {
            if (n.id === t.payload.id) {
              var r = n.quantity - t.payload.quantity;
              return r > 0
                ? [].concat(Object(a.a)(e), [c(c({}, n), {}, { quantity: r })])
                : Object(a.a)(e);
            }
            return [].concat(Object(a.a)(e), [n]);
          }, []);
        },
        p = function (e, t) {
          return e.items.filter(function (e) {
            return e.id !== t.payload.id;
          });
        },
        y = function (e, t) {
          switch (t.type) {
            case 'REHYDRATE':
              return c(c({}, e), t.payload);
            case 'TOGGLE_CART':
              return c(c({}, e), {}, { isOpen: !e.isOpen });
            case 'ADD_ITEM':
              return c(c({}, e), {}, { items: v(e, t) });
            case 'REMOVE_ITEM':
              return c(c({}, e), {}, { items: h(e, t) });
            case 'CLEAR_ITEM_FROM_CART':
              return c(c({}, e), {}, { items: p(e, t) });
            case 'CLEAR_CART':
              return c(c({}, e), {}, { items: [] });
            case 'APPLY_COUPON':
              return c(c({}, e), {}, { coupon: t.payload });
            case 'REMOVE_COUPON':
              return c(c({}, e), {}, { coupon: null });
            case 'TOGGLE_RESTAURANT':
              return c(c({}, e), {}, { isRestaurant: !e.isRestaurant });
            default:
              throw new Error('Unknown action: '.concat(t.type));
          }
        },
        b = n('VtSi'),
        m = n.n(b),
        g = n('QsI/'),
        _ = n('GuU3'),
        I = n.n(_);
      function w(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      var O = function (e, t) {
          if (!e) return t;
          try {
            return JSON.parse(e);
          } catch (n) {
            return t;
          }
        },
        E = function (e, t) {
          return new Promise(function (n, r) {
            var o = ''.concat(e.key, '-version');
            I.a.getItem(o, function (i, a) {
              a !== e.version
                ? ((t = e.migrate(t)),
                  I.a.setItem(e.key, O(t), function (i) {
                    if (i) return r(i);
                    I.a.setItem(o, e.version, function (e) {
                      return e ? r(e) : n(t);
                    });
                  }))
                : n(t);
            });
          });
        },
        S = {
          key: '@session',
          version: 1,
          migrate: function (e) {
            return (function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2
                  ? w(Object(n), !0).forEach(function (t) {
                      Object(r.a)(e, t, n[t]);
                    })
                  : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(
                      e,
                      Object.getOwnPropertyDescriptors(n)
                    )
                  : w(Object(n)).forEach(function (t) {
                      Object.defineProperty(
                        e,
                        t,
                        Object.getOwnPropertyDescriptor(n, t)
                      );
                    });
              }
              return e;
            })({}, e);
          },
        },
        j = function (e, t) {
          var n = Object(o.useState)(!1),
            r = n[0],
            i = n[1],
            a = Object(o.useState)(null),
            u = a[0],
            c = a[1];
          return (
            Object(o.useEffect)(function () {
              function e() {
                return (e = Object(g.a)(
                  m.a.mark(function e() {
                    return m.a.wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.next = 2),
                              I.a.getItem(S.key, function (e, n) {
                                if (e) return i(!0), c(e);
                                var r = O(n);
                                'function' === typeof S.migrate
                                  ? E(S, r)
                                      .then(function (e) {
                                        return t(e);
                                      })
                                      .then(function () {
                                        return i(!0);
                                      })
                                  : (t(r), i(!0));
                              })
                            );
                          case 2:
                          case 'end':
                            return e.stop();
                        }
                    }, e);
                  })
                )).apply(this, arguments);
              }
              !(function () {
                e.apply(this, arguments);
              })();
            }, []),
            Object(o.useEffect)(
              function () {
                var t;
                I.a.setItem(
                  S.key,
                  (function (e) {
                    return (
                      'Array' === e.constructor.name ||
                      'Object' === e.constructor.name
                    );
                  })((t = e))
                    ? JSON.stringify(t)
                    : t
                );
              },
              [e]
            ),
            { rehydrated: r, error: u }
          );
        },
        R = i.a.createElement;
      function N(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function C(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? N(Object(n), !0).forEach(function (t) {
                Object(r.a)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : N(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var A = Object(o.createContext)({}),
        D = { isOpen: !1, items: [], isRestaurant: !1, coupon: null },
        P = function (e) {
          var t,
            n = e.children,
            r = (function () {
              var e,
                t =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : D,
                n = Object(o.useReducer)(y, t),
                r = n[0],
                i = n[1],
                a = function (e) {
                  var t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : 1;
                  i({
                    type: 'ADD_ITEM',
                    payload: C(C({}, e), {}, { quantity: t }),
                  });
                },
                u = function (e) {
                  var t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : 1;
                  i({
                    type: 'REMOVE_ITEM',
                    payload: C(C({}, e), {}, { quantity: t }),
                  });
                },
                c = function (e) {
                  i({ type: 'CLEAR_ITEM_FROM_CART', payload: e });
                },
                f = function () {
                  i({ type: 'CLEAR_CART' });
                },
                s = function () {
                  i({ type: 'TOGGLE_CART' });
                },
                v = function (e) {
                  i({ type: 'APPLY_COUPON', payload: e });
                },
                h = function () {
                  i({ type: 'REMOVE_COUPON' });
                },
                p = function (e) {
                  i({ type: 'REHYDRATE', payload: e });
                },
                b = function () {
                  i({ type: 'TOGGLE_RESTAURANT' });
                },
                m = function (e) {
                  var t;
                  return null === (t = r.items) || void 0 === t
                    ? void 0
                    : t.some(function (t) {
                        return t.id === e;
                      });
                },
                g = function (e) {
                  var t;
                  return null === (t = r.items) || void 0 === t
                    ? void 0
                    : t.find(function (t) {
                        return t.id === e;
                      });
                },
                _ = function () {
                  return l(r.items).toFixed(2);
                },
                I = function () {
                  return l(r.items, r.coupon).toFixed(2);
                },
                w = function () {
                  return d(r.items, r.coupon).toFixed(2);
                },
                O =
                  null === (e = r.items) || void 0 === e
                    ? void 0
                    : e.reduce(function (e, t) {
                        return e + t.quantity;
                      }, 0);
              return {
                state: r,
                getItemsCount: O,
                rehydrateLocalState: p,
                addItemHandler: a,
                removeItemHandler: u,
                clearItemFromCartHandler: c,
                clearCartHandler: f,
                isInCartHandler: m,
                getItemHandler: g,
                toggleCartHandler: s,
                getCartItemsTotalPrice: I,
                getCartItemsPrice: _,
                couponHandler: v,
                removeCouponHandler: h,
                getDiscount: w,
                toggleRestaurant: b,
              };
            })(),
            i = r.state,
            a = r.rehydrateLocalState,
            u = r.getItemsCount,
            c = r.addItemHandler,
            f = r.removeItemHandler,
            s = r.clearItemFromCartHandler,
            v = r.clearCartHandler,
            h = r.isInCartHandler,
            p = r.getItemHandler,
            b = r.toggleCartHandler,
            m = r.getCartItemsTotalPrice,
            g = r.couponHandler,
            _ = r.removeCouponHandler,
            I = r.getCartItemsPrice,
            w = r.getDiscount,
            O = r.toggleRestaurant,
            E = j(i, a);
          E.rehydrated, E.error;
          return R(
            A.Provider,
            {
              value: {
                isOpen: i.isOpen,
                items: i.items,
                coupon: i.coupon,
                isRestaurant: i.isRestaurant,
                cartItemsCount:
                  null === (t = i.items) || void 0 === t ? void 0 : t.length,
                itemsCount: u,
                addItem: c,
                removeItem: f,
                removeItemFromCart: s,
                clearCart: v,
                isInCart: h,
                getItem: p,
                toggleCart: b,
                calculatePrice: m,
                calculateSubTotalPrice: I,
                applyCoupon: g,
                removeCoupon: _,
                calculateDiscount: w,
                toggleRestaurant: O,
              },
            },
            n
          );
        },
        T = function () {
          return Object(o.useContext)(A);
        };
    },
  },
]);
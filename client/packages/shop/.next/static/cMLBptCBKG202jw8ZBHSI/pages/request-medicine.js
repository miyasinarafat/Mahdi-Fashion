(window.webpackJsonp = window.webpackJsonp || []).push([
  [32],
  {
    '6Bdc': function (e, t, n) {
      'use strict';
      var r = n('VtSi'),
        i = n.n(r),
        o = n('QsI/'),
        a = n('zygG'),
        c = n('ERkP'),
        u = n.n(c),
        l = n('L7b9'),
        s = n('ljKo'),
        d = n('VU+f'),
        f = n('fWan'),
        p = n('B68Z'),
        m = n('1U1M'),
        g = n('bQa+'),
        b = n('ViYO'),
        y = n('p2kv'),
        h = n('2SGB'),
        v = u.a.createElement,
        x = Object(s.d)({
          mapPropsToValues: function (e) {
            return {
              id: e.item.id || null,
              name: e.item.name || '',
              info: e.item.info || '',
            };
          },
          validationSchema: l
            .a()
            .shape({
              name: l.b().required('Title is required!'),
              info: l.b().required('Address is required'),
            }),
          handleSubmit: function (e) {},
        });
      t.a = x(function (e) {
        var t = e.isValid,
          n = e.item,
          r = e.values,
          u = e.touched,
          l = e.errors,
          x = (e.dirty, e.handleChange),
          O = e.handleBlur,
          w =
            (e.handleReset,
            e.isSubmitting,
            { id: r.id, type: 'secondary', name: r.name, info: r.info }),
          j = Object(c.useContext)(y.a),
          C = (j.state, j.dispatch),
          D = Object(m.a)(g.d),
          _ = Object(a.a)(D, 2),
          z = _[0],
          k =
            (_[1].data,
            (function () {
              var e = Object(o.a)(
                i.a.mark(function e() {
                  return i.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (!t) {
                            e.next = 6;
                            break;
                          }
                          return (
                            (e.next = 3),
                            z({
                              variables: { addressInput: JSON.stringify(w) },
                            })
                          );
                        case 3:
                          e.sent,
                            C({ type: 'ADD_OR_UPDATE_ADDRESS', payload: w }),
                            Object(d.b)();
                        case 6:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })());
        return v(
          s.b,
          null,
          v(b.b, null, n && n.id ? 'Edit Address' : 'Add New Address'),
          v(
            b.a,
            null,
            v(f.a, {
              id: 'name',
              type: 'text',
              placeholder: 'Enter Title',
              error: u.name && l.name,
              value: r.name,
              onChange: x,
              onBlur: O,
            })
          ),
          v(
            b.a,
            null,
            v(f.a, {
              id: 'info',
              as: 'textarea',
              placeholder: 'Enter Address',
              error: u.info && l.info,
              value: r.info,
              onChange: x,
              onBlur: O,
            })
          ),
          v(
            p.a,
            {
              onClick: k,
              type: 'submit',
              style: { width: '100%', height: '44px' },
            },
            v(h.a, { id: 'savedAddressId', defaultMessage: 'Save Address' })
          )
        );
      });
    },
    AzIi: function (e, t, n) {
      'use strict';
      n.r(t);
      var r = n('ERkP'),
        i = n.n(r),
        o = n('1U1M'),
        a = n('VU+f'),
        c = n('H8eV'),
        u = n('VtSi'),
        l = n.n(u),
        s = n('QsI/'),
        d = n('zygG'),
        f = n('7xIC'),
        p = n.n(f),
        m = n('B68Z'),
        g = n('B3Fo'),
        b = n('YBd4'),
        y = n('VnWI'),
        h = n('IdAm'),
        v = n('aWzz'),
        x = n.n(v),
        O = n('D57K'),
        w = new Map([
          ['avi', 'video/avi'],
          ['gif', 'image/gif'],
          ['ico', 'image/x-icon'],
          ['jpeg', 'image/jpeg'],
          ['jpg', 'image/jpeg'],
          ['mkv', 'video/x-matroska'],
          ['mov', 'video/quicktime'],
          ['mp4', 'video/mp4'],
          ['pdf', 'application/pdf'],
          ['png', 'image/png'],
          ['zip', 'application/zip'],
          ['doc', 'application/msword'],
          [
            'docx',
            'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
          ],
        ]);
      function j(e, t) {
        var n = (function (e) {
          var t = e.name;
          if (t && -1 !== t.lastIndexOf('.') && !e.type) {
            var n = t.split('.').pop().toLowerCase(),
              r = w.get(n);
            r &&
              Object.defineProperty(e, 'type', {
                value: r,
                writable: !1,
                configurable: !1,
                enumerable: !0,
              });
          }
          return e;
        })(e);
        if ('string' !== typeof n.path) {
          var r = e.webkitRelativePath;
          Object.defineProperty(n, 'path', {
            value:
              'string' === typeof t
                ? t
                : 'string' === typeof r && r.length > 0
                ? r
                : e.name,
            writable: !1,
            configurable: !1,
            enumerable: !0,
          });
        }
        return n;
      }
      var C = ['.DS_Store', 'Thumbs.db'];
      function D(e) {
        return O.b(this, void 0, void 0, function () {
          return O.d(this, function (t) {
            return [
              2,
              ((n = e),
              n.dataTransfer && e.dataTransfer
                ? z(e.dataTransfer, e.type)
                : _(e)),
            ];
            var n;
          });
        });
      }
      function _(e) {
        return (null !== e.target && e.target.files
          ? S(e.target.files)
          : []
        ).map(function (e) {
          return j(e);
        });
      }
      function z(e, t) {
        return O.b(this, void 0, void 0, function () {
          var n;
          return O.d(this, function (r) {
            switch (r.label) {
              case 0:
                return e.items
                  ? ((n = S(e.items).filter(function (e) {
                      return 'file' === e.kind;
                    })),
                    'drop' !== t ? [2, n] : [4, Promise.all(n.map(A))])
                  : [3, 2];
              case 1:
                return [2, k(I(r.sent()))];
              case 2:
                return [
                  2,
                  k(
                    S(e.files).map(function (e) {
                      return j(e);
                    })
                  ),
                ];
            }
          });
        });
      }
      function k(e) {
        return e.filter(function (e) {
          return -1 === C.indexOf(e.name);
        });
      }
      function S(e) {
        for (var t = [], n = 0; n < e.length; n++) {
          var r = e[n];
          t.push(r);
        }
        return t;
      }
      function A(e) {
        if ('function' !== typeof e.webkitGetAsEntry) return E(e);
        var t = e.webkitGetAsEntry();
        return t && t.isDirectory ? F(t) : E(e);
      }
      function I(e) {
        return e.reduce(function (e, t) {
          return O.f(e, Array.isArray(t) ? I(t) : [t]);
        }, []);
      }
      function E(e) {
        var t = e.getAsFile();
        if (!t) return Promise.reject(e + ' is not a File');
        var n = j(t);
        return Promise.resolve(n);
      }
      function N(e) {
        return O.b(this, void 0, void 0, function () {
          return O.d(this, function (t) {
            return [2, e.isDirectory ? F(e) : P(e)];
          });
        });
      }
      function F(e) {
        var t = e.createReader();
        return new Promise(function (e, n) {
          var r = [];
          !(function i() {
            var o = this;
            t.readEntries(
              function (t) {
                return O.b(o, void 0, void 0, function () {
                  var o, a, c;
                  return O.d(this, function (u) {
                    switch (u.label) {
                      case 0:
                        if (t.length) return [3, 5];
                        u.label = 1;
                      case 1:
                        return u.trys.push([1, 3, , 4]), [4, Promise.all(r)];
                      case 2:
                        return (o = u.sent()), e(o), [3, 4];
                      case 3:
                        return (a = u.sent()), n(a), [3, 4];
                      case 4:
                        return [3, 6];
                      case 5:
                        (c = Promise.all(t.map(N))),
                          r.push(c),
                          i(),
                          (u.label = 6);
                      case 6:
                        return [2];
                    }
                  });
                });
              },
              function (e) {
                n(e);
              }
            );
          })();
        });
      }
      function P(e) {
        return O.b(this, void 0, void 0, function () {
          return O.d(this, function (t) {
            return [
              2,
              new Promise(function (t, n) {
                e.file(
                  function (n) {
                    var r = j(n, e.fullPath);
                    t(r);
                  },
                  function (e) {
                    n(e);
                  }
                );
              }),
            ];
          });
        });
      }
      var T = n('ZkW+'),
        R = n.n(T);
      function q(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            if (
              !(
                Symbol.iterator in Object(e) ||
                '[object Arguments]' === Object.prototype.toString.call(e)
              )
            )
              return;
            var n = [],
              r = !0,
              i = !1,
              o = void 0;
            try {
              for (
                var a, c = e[Symbol.iterator]();
                !(r = (a = c.next()).done) &&
                (n.push(a.value), !t || n.length !== t);
                r = !0
              );
            } catch (u) {
              (i = !0), (o = u);
            } finally {
              try {
                r || null == c.return || c.return();
              } finally {
                if (i) throw o;
              }
            }
            return n;
          })(e, t) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance'
            );
          })()
        );
      }
      var L = function (e) {
          e = Array.isArray(e) && 1 === e.length ? e[0] : e;
          var t = Array.isArray(e) ? 'one of '.concat(e.join(', ')) : e;
          return {
            code: 'file-invalid-type',
            message: 'File type must be '.concat(t),
          };
        },
        M = function (e) {
          return {
            code: 'file-too-large',
            message: 'File is larger than '.concat(e, ' bytes'),
          };
        },
        W = function (e) {
          return {
            code: 'file-too-small',
            message: 'File is smaller than '.concat(e, ' bytes'),
          };
        },
        B = { code: 'too-many-files', message: 'Too many files' };
      function K(e, t) {
        var n = 'application/x-moz-file' === e.type || R()(e, t);
        return [n, n ? null : L(t)];
      }
      function U(e, t, n) {
        if (G(e.size))
          if (G(t) && G(n)) {
            if (e.size > n) return [!1, M(n)];
            if (e.size < t) return [!1, W(t)];
          } else {
            if (G(t) && e.size < t) return [!1, W(t)];
            if (G(n) && e.size > n) return [!1, M(n)];
          }
        return [!0, null];
      }
      function G(e) {
        return void 0 !== e && null !== e;
      }
      function H(e) {
        return 'function' === typeof e.isPropagationStopped
          ? e.isPropagationStopped()
          : 'undefined' !== typeof e.cancelBubble && e.cancelBubble;
      }
      function $(e) {
        return e.dataTransfer
          ? Array.prototype.some.call(e.dataTransfer.types, function (e) {
              return 'Files' === e || 'application/x-moz-file' === e;
            })
          : !!e.target && !!e.target.files;
      }
      function Q(e) {
        e.preventDefault();
      }
      function V() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        return function (e) {
          for (
            var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), i = 1;
            i < n;
            i++
          )
            r[i - 1] = arguments[i];
          return t.some(function (t) {
            return !H(e) && t && t.apply(void 0, [e].concat(r)), H(e);
          });
        };
      }
      function Y(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) {
              for (var t = 0, n = new Array(e.length); t < e.length; t++)
                n[t] = e[t];
              return n;
            }
          })(e) ||
          (function (e) {
            if (
              Symbol.iterator in Object(e) ||
              '[object Arguments]' === Object.prototype.toString.call(e)
            )
              return Array.from(e);
          })(e) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to spread non-iterable instance'
            );
          })()
        );
      }
      function J(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            if (
              !(
                Symbol.iterator in Object(e) ||
                '[object Arguments]' === Object.prototype.toString.call(e)
              )
            )
              return;
            var n = [],
              r = !0,
              i = !1,
              o = void 0;
            try {
              for (
                var a, c = e[Symbol.iterator]();
                !(r = (a = c.next()).done) &&
                (n.push(a.value), !t || n.length !== t);
                r = !0
              );
            } catch (u) {
              (i = !0), (o = u);
            } finally {
              try {
                r || null == c.return || c.return();
              } finally {
                if (i) throw o;
              }
            }
            return n;
          })(e, t) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance'
            );
          })()
        );
      }
      function Z(e, t) {
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
      function X(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Z(n, !0).forEach(function (t) {
                ee(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Z(n).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function ee(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function te(e, t) {
        if (null == e) return {};
        var n,
          r,
          i = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              i = {},
              o = Object.keys(e);
            for (r = 0; r < o.length; r++)
              (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
            return i;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          for (r = 0; r < o.length; r++)
            (n = o[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (i[n] = e[n]));
        }
        return i;
      }
      var ne = Object(r.forwardRef)(function (e, t) {
        var n = e.children,
          o = ie(te(e, ['children'])),
          a = o.open,
          c = te(o, ['open']);
        return (
          Object(r.useImperativeHandle)(
            t,
            function () {
              return { open: a };
            },
            [a]
          ),
          i.a.createElement(r.Fragment, null, n(X({}, c, { open: a })))
        );
      });
      (ne.displayName = 'Dropzone'),
        (ne.propTypes = {
          children: x.a.func,
          accept: x.a.oneOfType([x.a.string, x.a.arrayOf(x.a.string)]),
          multiple: x.a.bool,
          preventDropOnDocument: x.a.bool,
          noClick: x.a.bool,
          noKeyboard: x.a.bool,
          noDrag: x.a.bool,
          noDragEventsBubbling: x.a.bool,
          minSize: x.a.number,
          maxSize: x.a.number,
          disabled: x.a.bool,
          getFilesFromEvent: x.a.func,
          onFileDialogCancel: x.a.func,
          onDragEnter: x.a.func,
          onDragLeave: x.a.func,
          onDragOver: x.a.func,
          onDrop: x.a.func,
          onDropAccepted: x.a.func,
          onDropRejected: x.a.func,
        });
      var re = {
        isFocused: !1,
        isFileDialogActive: !1,
        isDragActive: !1,
        isDragAccept: !1,
        isDragReject: !1,
        draggedFiles: [],
        acceptedFiles: [],
        fileRejections: [],
      };
      function ie() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = e.accept,
          n = e.disabled,
          i = void 0 !== n && n,
          o = e.getFilesFromEvent,
          a = void 0 === o ? D : o,
          c = e.maxSize,
          u = void 0 === c ? 1 / 0 : c,
          l = e.minSize,
          s = void 0 === l ? 0 : l,
          d = e.multiple,
          f = void 0 === d || d,
          p = e.onDragEnter,
          m = e.onDragLeave,
          g = e.onDragOver,
          b = e.onDrop,
          y = e.onDropAccepted,
          h = e.onDropRejected,
          v = e.onFileDialogCancel,
          x = e.preventDropOnDocument,
          O = void 0 === x || x,
          w = e.noClick,
          j = void 0 !== w && w,
          C = e.noKeyboard,
          _ = void 0 !== C && C,
          z = e.noDrag,
          k = void 0 !== z && z,
          S = e.noDragEventsBubbling,
          A = void 0 !== S && S,
          I = Object(r.useRef)(null),
          E = Object(r.useRef)(null),
          N = J(Object(r.useReducer)(oe, re), 2),
          F = N[0],
          P = N[1],
          T = F.isFocused,
          R = F.isFileDialogActive,
          L = F.draggedFiles,
          M = Object(r.useCallback)(
            function () {
              E.current &&
                (P({ type: 'openDialog' }),
                (E.current.value = null),
                E.current.click());
            },
            [P]
          ),
          W = function () {
            R &&
              setTimeout(function () {
                E.current &&
                  (E.current.files.length ||
                    (P({ type: 'closeDialog' }),
                    'function' === typeof v && v()));
              }, 300);
          };
        Object(r.useEffect)(
          function () {
            return (
              window.addEventListener('focus', W, !1),
              function () {
                window.removeEventListener('focus', W, !1);
              }
            );
          },
          [E, R, v]
        );
        var G = Object(r.useCallback)(
            function (e) {
              I.current &&
                I.current.isEqualNode(e.target) &&
                ((32 !== e.keyCode && 13 !== e.keyCode) ||
                  (e.preventDefault(), M()));
            },
            [I, E]
          ),
          Z = Object(r.useCallback)(function () {
            P({ type: 'focus' });
          }, []),
          ne = Object(r.useCallback)(function () {
            P({ type: 'blur' });
          }, []),
          ie = Object(r.useCallback)(
            function () {
              j ||
                (!(function () {
                  var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : window.navigator.userAgent;
                  return (
                    (function (e) {
                      return (
                        -1 !== e.indexOf('MSIE') || -1 !== e.indexOf('Trident/')
                      );
                    })(e) ||
                    (function (e) {
                      return -1 !== e.indexOf('Edge/');
                    })(e)
                  );
                })()
                  ? M()
                  : setTimeout(M, 0));
            },
            [E, j]
          ),
          ae = Object(r.useRef)([]),
          ce = function (e) {
            (I.current && I.current.contains(e.target)) ||
              (e.preventDefault(), (ae.current = []));
          };
        Object(r.useEffect)(
          function () {
            return (
              O &&
                (document.addEventListener('dragover', Q, !1),
                document.addEventListener('drop', ce, !1)),
              function () {
                O &&
                  (document.removeEventListener('dragover', Q),
                  document.removeEventListener('drop', ce));
              }
            );
          },
          [I, O]
        );
        var ue = Object(r.useCallback)(
            function (e) {
              e.preventDefault(),
                e.persist(),
                ge(e),
                (ae.current = [].concat(Y(ae.current), [e.target])),
                $(e) &&
                  Promise.resolve(a(e)).then(function (t) {
                    (H(e) && !A) ||
                      (P({
                        draggedFiles: t,
                        isDragActive: !0,
                        type: 'setDraggedFiles',
                      }),
                      p && p(e));
                  });
            },
            [a, p, A]
          ),
          le = Object(r.useCallback)(
            function (e) {
              if ((e.preventDefault(), e.persist(), ge(e), e.dataTransfer))
                try {
                  e.dataTransfer.dropEffect = 'copy';
                } catch (t) {}
              return $(e) && g && g(e), !1;
            },
            [g, A]
          ),
          se = Object(r.useCallback)(
            function (e) {
              e.preventDefault(), e.persist(), ge(e);
              var t = ae.current.filter(function (e) {
                  return I.current && I.current.contains(e);
                }),
                n = t.indexOf(e.target);
              -1 !== n && t.splice(n, 1),
                (ae.current = t),
                t.length > 0 ||
                  (P({
                    isDragActive: !1,
                    type: 'setDraggedFiles',
                    draggedFiles: [],
                  }),
                  $(e) && m && m(e));
            },
            [I, m, A]
          ),
          de = Object(r.useCallback)(
            function (e) {
              e.preventDefault(),
                e.persist(),
                ge(e),
                (ae.current = []),
                $(e) &&
                  Promise.resolve(a(e)).then(function (n) {
                    if (!H(e) || A) {
                      var r = [],
                        i = [];
                      n.forEach(function (e) {
                        var n = J(K(e, t), 2),
                          o = n[0],
                          a = n[1],
                          c = J(U(e, s, u), 2),
                          l = c[0],
                          d = c[1];
                        if (o && l) r.push(e);
                        else {
                          var f = [a, d].filter(function (e) {
                            return e;
                          });
                          i.push({ file: e, errors: f });
                        }
                      }),
                        !f &&
                          r.length > 1 &&
                          (r.forEach(function (e) {
                            i.push({ file: e, errors: [B] });
                          }),
                          r.splice(0)),
                        P({
                          acceptedFiles: r,
                          fileRejections: i,
                          type: 'setFiles',
                        }),
                        b && b(r, i, e),
                        i.length > 0 && h && h(i, e),
                        r.length > 0 && y && y(r, e);
                    }
                  }),
                P({ type: 'reset' });
            },
            [f, t, s, u, a, b, y, h, A]
          ),
          fe = function (e) {
            return i ? null : e;
          },
          pe = function (e) {
            return _ ? null : fe(e);
          },
          me = function (e) {
            return k ? null : fe(e);
          },
          ge = function (e) {
            A && e.stopPropagation();
          },
          be = Object(r.useMemo)(
            function () {
              return function () {
                var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {},
                  t = e.refKey,
                  n = void 0 === t ? 'ref' : t,
                  r = e.onKeyDown,
                  o = e.onFocus,
                  a = e.onBlur,
                  c = e.onClick,
                  u = e.onDragEnter,
                  l = e.onDragOver,
                  s = e.onDragLeave,
                  d = e.onDrop,
                  f = te(e, [
                    'refKey',
                    'onKeyDown',
                    'onFocus',
                    'onBlur',
                    'onClick',
                    'onDragEnter',
                    'onDragOver',
                    'onDragLeave',
                    'onDrop',
                  ]);
                return X(
                  ee(
                    {
                      onKeyDown: pe(V(r, G)),
                      onFocus: pe(V(o, Z)),
                      onBlur: pe(V(a, ne)),
                      onClick: fe(V(c, ie)),
                      onDragEnter: me(V(u, ue)),
                      onDragOver: me(V(l, le)),
                      onDragLeave: me(V(s, se)),
                      onDrop: me(V(d, de)),
                    },
                    n,
                    I
                  ),
                  i || _ ? {} : { tabIndex: 0 },
                  {},
                  f
                );
              };
            },
            [I, G, Z, ne, ie, ue, le, se, de, _, k, i]
          ),
          ye = Object(r.useCallback)(function (e) {
            e.stopPropagation();
          }, []),
          he = Object(r.useMemo)(
            function () {
              return function () {
                var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {},
                  n = e.refKey,
                  r = void 0 === n ? 'ref' : n,
                  i = e.onChange,
                  o = e.onClick,
                  a = te(e, ['refKey', 'onChange', 'onClick']),
                  c = ee(
                    {
                      accept: t,
                      multiple: f,
                      type: 'file',
                      style: { display: 'none' },
                      onChange: fe(V(i, de)),
                      onClick: fe(V(o, ye)),
                      autoComplete: 'off',
                      tabIndex: -1,
                    },
                    r,
                    E
                  );
                return X({}, c, {}, a);
              };
            },
            [E, t, f, de, i]
          ),
          ve = L.length,
          xe =
            ve > 0 &&
            (function (e) {
              var t = e.files,
                n = e.accept,
                r = e.minSize,
                i = e.maxSize;
              return (
                !(!e.multiple && t.length > 1) &&
                t.every(function (e) {
                  var t = q(K(e, n), 1)[0],
                    o = q(U(e, r, i), 1)[0];
                  return t && o;
                })
              );
            })({ files: L, accept: t, minSize: s, maxSize: u, multiple: f });
        return X({}, F, {
          isDragAccept: xe,
          isDragReject: ve > 0 && !xe,
          isFocused: T && !i,
          getRootProps: be,
          getInputProps: he,
          rootRef: I,
          inputRef: E,
          open: fe(M),
        });
      }
      function oe(e, t) {
        switch (t.type) {
          case 'focus':
            return X({}, e, { isFocused: !0 });
          case 'blur':
            return X({}, e, { isFocused: !1 });
          case 'openDialog':
            return X({}, e, { isFileDialogActive: !0 });
          case 'closeDialog':
            return X({}, e, { isFileDialogActive: !1 });
          case 'setDraggedFiles':
            var n = t.isDragActive;
            return X({}, e, { draggedFiles: t.draggedFiles, isDragActive: n });
          case 'setFiles':
            return X({}, e, {
              acceptedFiles: t.acceptedFiles,
              fileRejections: t.fileRejections,
            });
          case 'reset':
            return X({}, e, {
              isFileDialogActive: !1,
              isDragActive: !1,
              draggedFiles: [],
              acceptedFiles: [],
              fileRejections: [],
            });
          default:
            return e;
        }
      }
      var ae = n('2SGB'),
        ce = n('j/s1'),
        ue = n('tZdC'),
        le = ce.e.span.withConfig({
          displayName: 'uploadstyle__Text',
          componentId: 'sc-1b9g9f4-0',
        })(
          [
            'font-family:',
            ';font-size:',
            'px;font-weight:',
            ';color:',
            ';margin-top:15px;text-align:center;',
          ],
          Object(ue.a)('fonts.body', 'Lato'),
          Object(ue.a)('fontSizes.base', '15'),
          Object(ue.a)('fontWeights.regular', '400'),
          Object(ue.a)('colors.text.label', '#909090')
        ),
        se = ce.e.span.withConfig({
          displayName: 'uploadstyle__TextHighlighted',
          componentId: 'sc-1b9g9f4-1',
        })(['color:', ';'], Object(ue.a)('colors.primary.regular', '#009e7f')),
        de = ce.e.div.withConfig({
          displayName: 'uploadstyle__Container',
          componentId: 'sc-1b9g9f4-2',
        })(
          [
            'width:100%;display:flex;flex-direction:column;align-items:center;padding:50px 30px;border:2px dashed ',
            ';background-color:',
            ';color:',
            ';outline:none;cursor:pointer;',
          ],
          Object(ue.a)('colors.gray.500', '#f1f1f1'),
          Object(ue.a)('colors.white', '#ffffff'),
          Object(ue.a)('colors.gray.900', '#bdbdbd')
        ),
        fe = ce.e.aside.withConfig({
          displayName: 'uploadstyle__ThumbsContainer',
          componentId: 'sc-1b9g9f4-3',
        })(['display:flex;flex-direction:row;flex-wrap:wrap;margin-top:16px;']),
        pe = ce.e.div.withConfig({
          displayName: 'uploadstyle__Thumb',
          componentId: 'sc-1b9g9f4-4',
        })(
          [
            'border:1px solid ',
            ';display:inline-flex;border-radius:2px;margin-bottom:8px;margin-right:8px;width:100px;height:100px;padding:4px;box-sizing:border-box;',
          ],
          Object(ue.a)('colors.gray.500', '#f1f1f1')
        ),
        me = ce.e.div.withConfig({
          displayName: 'uploadstyle__ThumbInner',
          componentId: 'sc-1b9g9f4-5',
        })(['display:flex;min-width:0;overflow:hidden;']),
        ge = ce.e.img.withConfig({
          displayName: 'uploadstyle__Img',
          componentId: 'sc-1b9g9f4-6',
        })(['display:block;width:auto;height:100%;']),
        be = n('KKLf'),
        ye = i.a.createElement,
        he = function (e) {
          var t = e.onChange,
            n = e.imageURL,
            o = e.intlUploadText,
            a = Object(r.useState)(n ? [{ name: 'demo', preview: n }] : []),
            c = a[0],
            u = a[1],
            l = ie({
              accept: 'image/*',
              multiple: !1,
              onDrop: Object(r.useCallback)(
                function (e) {
                  u(
                    e.map(function (e) {
                      return Object.assign(e, {
                        preview: URL.createObjectURL(e),
                      });
                    })
                  ),
                    t(e);
                },
                [t]
              ),
            }),
            s = l.getRootProps,
            d = l.getInputProps,
            f = c.map(function (e) {
              return ye(
                pe,
                { key: e.name },
                ye(me, null, ye(ge, { src: e.preview, alt: e.name }))
              );
            });
          return (
            Object(r.useEffect)(
              function () {
                return function () {
                  c.forEach(function (e) {
                    return URL.revokeObjectURL(e.preview);
                  });
                };
              },
              [c]
            ),
            ye(
              'section',
              { className: 'container uploader' },
              ye(
                de,
                s(),
                ye('input', d()),
                ye(be.a, null),
                ye(
                  le,
                  null,
                  o
                    ? ye(ae.a, { id: o })
                    : ye(
                        i.a.Fragment,
                        null,
                        ye(se, null, 'Drag/Upload'),
                        ' your file here'
                      )
                )
              ),
              f && ye(fe, null, f)
            )
          );
        },
        ve = n('6Bdc'),
        xe = n('6zwy'),
        Oe = n('bQa+'),
        we = n('4Jh2'),
        je = n('fDRB'),
        Ce = n('Y0uC'),
        De = ce.e.div.withConfig({
          displayName: 'request-productstyle__FormWrapper',
          componentId: 'sc-1dcz2c-0',
        })(
          [
            'background-color:',
            ';position:relative;padding:130px 0 60px 0;@media (max-width:990px){padding:0;padding-top:60px;}',
          ],
          Object(ue.a)('colors.gray.200', '#f7f7f7')
        ),
        _e = ce.e.div.withConfig({
          displayName: 'request-productstyle__Container',
          componentId: 'sc-1dcz2c-1',
        })(
          [
            'background-color:',
            ';border:1px solid ',
            ';padding:60px;border-radius:',
            ';overflow:hidden;position:relative;@media (min-width:990px){width:870px;margin-left:auto;margin-right:auto;}@media (max-width:480px){padding:30px;}',
          ],
          Object(ue.a)('colors.white', '#ffffff'),
          Object(ue.a)('colors.gray.500', '#f1f1f1'),
          Object(ue.a)('radii.base', '6px')
        ),
        ze = ce.e.div.withConfig({
          displayName: 'request-productstyle__FormTitleWrapper',
          componentId: 'sc-1dcz2c-2',
        })([
          'width:100%;display:flex;align-items:center;justify-content:center;margin-bottom:50px;',
        ]),
        ke = ce.e.h3.withConfig({
          displayName: 'request-productstyle__FormTitle',
          componentId: 'sc-1dcz2c-3',
        })(
          [
            'font-family:',
            ';font-size:',
            'px;font-weight:',
            ';color:',
            ';line-height:1.2;margin:0px;',
          ],
          Object(ue.a)('fonts.body', 'Lato'),
          Object(ue.a)('fontSizes.lg', '21'),
          Object(ue.a)('fontWeights.bold', '700'),
          Object(ue.a)('colors.primary.regular', '#009e7f')
        ),
        Se = ce.e.span.withConfig({
          displayName: 'request-productstyle__NoteText',
          componentId: 'sc-1dcz2c-4',
        })(
          [
            'font-family:',
            ';font-size:',
            'px;font-weight:',
            ';color:',
            ';line-height:1.5;',
          ],
          Object(ue.a)('fonts.body', 'Lato'),
          Object(ue.a)('fontSizes.base', '15'),
          Object(ue.a)('fontWeights.regular', '400'),
          Object(ue.a)('colors.text.bold', '#0D1136')
        ),
        Ae = ce.e.h3.withConfig({
          displayName: 'request-productstyle__Heading',
          componentId: 'sc-1dcz2c-5',
        })(
          [
            'font-family:',
            ';font-size:',
            'px;font-weight:',
            ';color:',
            ';line-height:1.2;margin-bottom:20px;',
          ],
          Object(ue.a)('fonts.body', 'Lato'),
          Object(ue.a)('fontSizes.base', '15'),
          Object(ue.a)('fontWeights.bold', '700'),
          Object(ue.a)('colors.text.bold', '#0D1136')
        ),
        Ie = Object(ce.e)(Ce.a).withConfig({
          displayName: 'request-productstyle__Col',
          componentId: 'sc-1dcz2c-6',
        })([
          '@media only screen and (min-width:0em) and (max-width:47.99em){margin-bottom:50px;&:last-child{margin-bottom:0;}}',
        ]),
        Ee = Object(ce.e)(Ce.b).withConfig({
          displayName: 'request-productstyle__Row',
          componentId: 'sc-1dcz2c-7',
        })([
          'margin-top:50px;@media only screen and (min-width:0em) and (max-width:47.99em){margin-bottom:30px;}',
        ]),
        Ne =
          (ce.e.div.withConfig({
            displayName: 'request-productstyle__DeliverySchedule',
            componentId: 'sc-1dcz2c-8',
          })([
            'margin-top:60px;.radioGroup{justify-content:space-between;> label{margin-right:0;flex:calc(33.3333333333% - 10px);max-width:calc(33.3333333333% - 10px);padding:11px 15px;@media (max-width:700px){flex:calc(50% - 10px);max-width:calc(50% - 10px);}@media (max-width:480px){flex:100%;max-width:100%;margin-right:0;}}}',
          ]),
          ce.e.div.withConfig({
            displayName: 'request-productstyle__DeliveryAddress',
            componentId: 'sc-1dcz2c-9',
          })(['margin-top:30px;'])),
        Fe = ce.e.div.withConfig({
          displayName: 'request-productstyle__ButtonGroup',
          componentId: 'sc-1dcz2c-10',
        })(
          [
            'display:flex;flex-direction:column;.radioGroup{flex-grow:1;justify-content:space-between;label{margin-top:0;flex:calc(33.333333333% - 10px);max-width:calc(33.333333333% - 10px);margin-bottom:15px;&:nth-child(3n){margin-right:0;}@media (max-width:700px){flex:calc(50% - 10px);max-width:calc(50% - 10px);&:nth-child(3n){margin-right:15px;}&:nth-child(2n){margin-right:0;}}@media (max-width:480px){flex:100%;max-width:100%;margin-right:0;&:nth-child(3n){margin-right:0;}&:nth-child(2n){margin-right:0;}}}}.add-button{flex:calc(33.3333333333% - 10px);max-width:calc(33.3333333333% - 10px);flex-shrink:0;height:auto;min-height:77px;border:1px dashed ',
            ';margin-bottom:15px;margin-left:0;margin-right:auto;&:hover{border-color:',
            ';}@media (max-width:700px){flex:calc(50% - 10px);max-width:calc(50% - 10px);}@media (max-width:480px){flex:100%;max-width:100%;}}',
          ],
          Object(ue.a)('colors.gray.500', '#f1f1f1'),
          Object(ue.a)('colors.primary.regular', '#009e7f')
        ),
        Pe = ce.e.div.withConfig({
          displayName: 'request-productstyle__Contact',
          componentId: 'sc-1dcz2c-11',
        })(['margin-top:30px;']),
        Te =
          (ce.e.div.withConfig({
            displayName: 'request-productstyle__PaymentOption',
            componentId: 'sc-1dcz2c-12',
          })(
            [
              "margin-top:60px;padding-top:60px;position:relative;&:before{content:'';position:absolute;width:150%;height:1px;top:0;left:50%;transform:translateX(-50%);display:block;background:",
              ';}',
            ],
            Object(ue.a)('colors.gray.500', '#f1f1f1')
          ),
          ce.e.div.withConfig({
            displayName: 'request-productstyle__PaymentCardList',
            componentId: 'sc-1dcz2c-13',
          })(
            [
              'display:flex;align-items:stretch;justify-content:space-between;margin-top:15px;.payment-card-radio{display:block;cursor:pointer;position:relative;> input{position:absolute;top:0;left:0;opacity:0;&:checked{& ~ .payment-card{border-color:',
              ';}}}.payment-card{pointer-events:none;}}',
            ],
            Object(ue.a)('colors.primary.regular', '#009e7f')
          ),
          ce.e.div.withConfig({
            displayName: 'request-productstyle__SavedCard',
            componentId: 'sc-1dcz2c-14',
          })(
            [
              'flex:calc(100% - 120px);max-width:calc(100% - 120px);.saved-card-title{font-family:',
              ';font-size:',
              'px;font-weight:',
              ';color:',
              ';margin-bottom:10px;display:block;}',
            ],
            Object(ue.a)('fonts.body', 'Lato'),
            Object(ue.a)('fontSizes.sm', '13'),
            Object(ue.a)('fontWeights.bold', '700'),
            Object(ue.a)('colors.primary.regular', '#009e7f')
          ),
          ce.e.div.withConfig({
            displayName: 'request-productstyle__AddCard',
            componentId: 'sc-1dcz2c-15',
          })(
            [
              'flex:105px;max-width:105px;flex-shrink:0;display:flex;flex-direction:column;.reusecore__button{flex-grow:1;height:auto;border:1px dashed ',
              ';border-radius:',
              ';padding:0 5px;flex-direction:column;svg{width:18px;height:auto;}.btn-icon{margin-bottom:5px;}&:hover{border-color:',
              ';}}.safe-label{font-family:',
              ';font-size:',
              'px;font-weight:',
              ';color:',
              ';display:flex;align-items:center;justify-content:flex-end;margin-bottom:10px;> svg{fill:currentColor;margin-right:4px;}}',
            ],
            Object(ue.a)('colors.gray.500', '#f1f1f1'),
            Object(ue.a)('radii.base', '6px'),
            Object(ue.a)('colors.primary.regular', '#009e7f'),
            Object(ue.a)('fonts.body', 'Lato'),
            Object(ue.a)('fontSizes.sm', '13'),
            Object(ue.a)('fontWeights.bold', '700'),
            Object(ue.a)('colors.text.regular', '#77798c')
          ),
          ce.e.div.withConfig({
            displayName: 'request-productstyle__OtherPayOption',
            componentId: 'sc-1dcz2c-16',
          })(
            [
              'margin-top:15px;display:flex;align-items:stretch;.other-pay-radio{flex-grow:1;span{display:block;border-radius:',
              ';background-color:',
              ';border:1px solid ',
              ';text-align:center;padding:12px 20px;cursor:pointer;color:',
              ';font-family:',
              ';font-size:',
              'px;font-weight:',
              ';line-height:24px;-webkit-transition:all 0.25s ease;transition:all 0.25s ease;}input{position:absolute;top:0;left:0;opacity:0;&:checked{& ~ span{border-color:',
              ';background-color:',
              ';}}}&.cash-on-delivery{flex:320px;max-width:230px;margin-left:15px;}}',
            ],
            Object(ue.a)('radii.base', '6px'),
            Object(ue.a)('colors.gray.200', '#f7f7f7'),
            Object(ue.a)('colors.gray.200', '#f7f7f7'),
            Object(ue.a)('colors.text.bold', '#0D1136'),
            Object(ue.a)('fonts.body', 'Lato'),
            Object(ue.a)('fontSizes.sm', '13'),
            Object(ue.a)('fontWeights.regular', '400'),
            Object(ue.a)('colors.primary.regular', '#009e7f'),
            Object(ue.a)('colors.white', '#ffffff')
          ),
          ce.e.div.withConfig({
            displayName: 'request-productstyle__SubmitBtnWrapper',
            componentId: 'sc-1dcz2c-17',
          })(['margin-top:60px;.reusecore__button{width:100%;}'])),
        Re =
          (ce.e.div.withConfig({
            displayName: 'request-productstyle__PaymentGroupWrapper',
            componentId: 'sc-1dcz2c-18',
          })(['']),
          ce.e.div.withConfig({
            displayName: 'request-productstyle__AddAddressWrapper',
            componentId: 'sc-1dcz2c-19',
          })([
            'textarea{font-family:lato;}.field-wrapper{margin-bottom:30px;}',
          ]),
          ce.e.div.withConfig({
            displayName: 'request-productstyle__AddcontactWrapper',
            componentId: 'sc-1dcz2c-20',
          })(
            [
              'textarea{font-family:lato;}.field-wrapper,.button_outline{margin-bottom:30px;}.button_outline{border:1px dashed ',
              ';.btn-icon{margin-right:5px;}&:hover{border-color:',
              ';}}',
            ],
            Object(ue.a)('colors.gray.500', '#f1f1f1'),
            Object(ue.a)('colors.primary.regular', '#009e7f')
          ),
          ce.e.div.withConfig({
            displayName: 'request-productstyle__AuthenticationOverlay',
            componentId: 'sc-1dcz2c-21',
          })([
            'width:100%;height:100%;display:flex;flex-direction:column;align-items:center;justify-content:flex-start;background-color:rgba(255,255,255,0.9);position:absolute;top:0;left:0;bottom:0;right:0;padding-top:300px;z-index:100;button{box-shadow:0 0 36px rgba(0,0,0,0.16);}',
          ]),
          ce.e.span.withConfig({
            displayName: 'request-productstyle__InfoText',
            componentId: 'sc-1dcz2c-22',
          })(
            [
              'font-family:',
              ';font-size:',
              'px;font-weight:',
              ';color:',
              ';margin-bottom:15px;margin-top:15px;',
            ],
            Object(ue.a)('fonts.body', 'Lato'),
            Object(ue.a)('fontSizes.base', '15'),
            Object(ue.a)('fontWeights.regular', '400'),
            Object(ue.a)('colors.text.bold', '#0D1136')
          ),
          ce.e.div.withConfig({
            displayName: 'request-productstyle__OrderSummary',
            componentId: 'sc-1dcz2c-23',
          })(
            [
              'width:100%;display:flex;flex-direction:column;padding:60px;border-radius:',
              ';background-color:',
              ';@media (max-width:767px){padding:30px;}',
            ],
            Object(ue.a)('radii.base', '6px'),
            Object(ue.a)('colors.gray.200', '#f7f7f7')
          ),
          ce.e.span.withConfig({
            displayName: 'request-productstyle__OrderLabel',
            componentId: 'sc-1dcz2c-24',
          })(
            [
              'color:',
              ';font-family:',
              ';font-size:',
              'px;font-weight:',
              ';line-height:24px;',
            ],
            Object(ue.a)('colors.text.bold', '#0D1136'),
            Object(ue.a)('fonts.body', 'Lato'),
            Object(ue.a)('fontSizes.base', '15'),
            Object(ue.a)('fontWeights.regular', '400')
          )),
        qe =
          (ce.e.span.withConfig({
            displayName: 'request-productstyle__OrderAmount',
            componentId: 'sc-1dcz2c-25',
          })(
            [
              'font-family:',
              ';font-size:',
              'px;color:',
              ';line-height:24px;font-weight:',
              ';',
            ],
            Object(ue.a)('fonts.body', 'Lato'),
            Object(ue.a)('fontSizes.base', '15'),
            Object(ue.a)('colors.text.bold', '#0D1136'),
            Object(ue.a)('fontWeights.bold', '700')
          ),
          ce.e.div.withConfig({
            displayName: 'request-productstyle__OrderSummaryItem',
            componentId: 'sc-1dcz2c-26',
          })(
            [
              'width:100%;display:flex;align-items:center;justify-content:space-between;position:relative;&.voucherWrapper{@media (max-width:630px){flex-direction:column;align-items:flex-start;',
              '{margin-bottom:10px;}}}.couponDisplayBox{width:50%;@media (max-width:767px){width:60%;}@media (max-width:630px){width:100%;}}',
            ],
            Re
          ),
          ce.e.div.withConfig({
            displayName: 'request-productstyle__CouponBoxWrapper',
            componentId: 'sc-1dcz2c-27',
          })([
            'position:relative;display:flex;align-items:center;width:50%;@media (max-width:767px){width:60%;}@media (max-width:630px){width:100%;}.couponCodeText{margin-right:auto;}',
          ]),
          ce.e.p.withConfig({
            displayName: 'request-productstyle__CouponCode',
            componentId: 'sc-1dcz2c-28',
          })(
            [
              'font-family:',
              ';font-size:',
              'px;font-weight:',
              ';color:',
              ';width:100%;display:flex;justify-content:center;span{font-weight:',
              ';color:',
              ';margin-left:5px;}',
            ],
            Object(ue.a)('fonts.body', 'Lato'),
            Object(ue.a)('fontSizes.base', '15'),
            Object(ue.a)('fontWeights.bold', '700'),
            Object(ue.a)('colors.text.regular', '#77798c'),
            Object(ue.a)('fontWeights.bold', '700'),
            Object(ue.a)('colors.primary.regular', '#009e7f')
          ),
          Object(ce.e)('span').withConfig({
            displayName: 'request-productstyle__ErrorMsg',
            componentId: 'sc-1dcz2c-29',
          })(
            [
              'font-family:',
              ';font-size:',
              'px;font-weight:',
              ';color:',
              ';padding-top:10px;display:flex;justify-content:center;position:absolute;left:20px;bottom:-25px;',
            ],
            Object(ue.a)('fonts.body', 'Lato'),
            Object(ue.a)('fontSizes.base', '15'),
            Object(ue.a)('fontWeights.regular', '400'),
            Object(ue.a)('colors.secondary.hover', '#FF282F')
          ),
          De),
        Le = n('p2kv'),
        Me = i.a.createElement,
        We = function () {
          var e = Object(r.useContext)(Le.a),
            t = e.state,
            n = e.dispatch,
            i = Object(r.useState)(!1),
            c = i[0],
            u = i[1],
            f = Object(r.useState)(!1),
            v = (f[0], f[1], t.address),
            x = t.contact,
            O = Object(r.useState)(''),
            w = O[0],
            j = O[1],
            C = Object(r.useState)(''),
            D = C[0],
            _ = C[1],
            z = Object(r.useState)(''),
            k = z[0],
            S = z[1],
            A = Object(r.useState)(''),
            I = A[0],
            E = A[1],
            N = Object(o.a)(je.a),
            F = Object(d.a)(N, 1)[0],
            P = Object(o.a)(Oe.b),
            T = Object(d.a)(P, 1)[0],
            R = Object(o.a)(we.a),
            q = Object(d.a)(R, 1)[0],
            L = (function () {
              var e = Object(s.a)(
                l.a.mark(function e() {
                  return l.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          u(!0), p.a.push('/medicine'), u(!1);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })(),
            M = function (e) {
              var t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {},
                n =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : 'add-address-modal';
              Object(a.c)({
                show: !0,
                config: {
                  width: 360,
                  height: 'auto',
                  enableResizing: !1,
                  disableDragging: !0,
                  className: n,
                },
                closeOnClickOutside: !0,
                component: e,
                componentProps: { item: t },
              });
            },
            W = (function () {
              var e = Object(s.a)(
                l.a.mark(function e(t, r, i) {
                  var o;
                  return l.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if ('edit' !== r) {
                            e.next = 5;
                            break;
                          }
                          (o = 'address' === i ? ve.a : xe.a),
                            M(o, t),
                            (e.next = 21);
                          break;
                        case 5:
                          (e.t0 = i),
                            (e.next =
                              'payment' === e.t0
                                ? 8
                                : 'contact' === e.t0
                                ? 12
                                : 'address' === e.t0
                                ? 16
                                : 20);
                          break;
                        case 8:
                          return (
                            n({ type: 'DELETE_CARD', payload: t.id }),
                            (e.next = 11),
                            q({ variables: { cardId: JSON.stringify(t.id) } })
                          );
                        case 11:
                          return e.abrupt('return', e.sent);
                        case 12:
                          return (
                            n({ type: 'DELETE_CONTACT', payload: t.id }),
                            (e.next = 15),
                            F({
                              variables: { contactId: JSON.stringify(t.id) },
                            })
                          );
                        case 15:
                          return e.abrupt('return', e.sent);
                        case 16:
                          return (
                            n({ type: 'DELETE_ADDRESS', payload: t.id }),
                            (e.next = 19),
                            T({
                              variables: { addressId: JSON.stringify(t.id) },
                            })
                          );
                        case 19:
                          return e.abrupt('return', e.sent);
                        case 20:
                          return e.abrupt('return', !1);
                        case 21:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function (t, n, r) {
                return e.apply(this, arguments);
              };
            })();
          return Me(
            'form',
            null,
            Me(
              qe,
              null,
              Me(
                _e,
                null,
                Me(
                  ze,
                  null,
                  Me(
                    ke,
                    null,
                    Me(ae.a, {
                      id: 'reqMedicine',
                      defaultMessage: 'Request Medicine',
                    })
                  )
                ),
                Me(
                  Ae,
                  null,
                  Me(ae.a, { id: 'noteHead', defaultMessage: 'Note' })
                ),
                Me(
                  Se,
                  null,
                  Me(ae.a, {
                    id: 'noteDescription',
                    defaultMessage:
                      'Product availability & price will confirm over phone. Delivery Charge inside the city ${inside} & outside the city ${outside}.',
                    values: { inside: 5, outside: 10 },
                  })
                ),
                Me(
                  Ee,
                  null,
                  Me(
                    Ie,
                    { xs: 12, sm: 6, md: 6, lg: 6 },
                    Me(h.a, null, Me(ae.a, { id: 'rmMedicineName' })),
                    Me(y.a, {
                      type: 'text',
                      label: 'Medicine Name',
                      name: 'medicine-Name',
                      placeholder: 'Enter medicine name',
                      value: w,
                      onChange: function (e) {
                        return j(e.target.value);
                      },
                      backgroundColor: '#F7F7F7',
                      height: '48px',
                    })
                  ),
                  Me(
                    Ie,
                    { xs: 12, sm: 6, md: 6, lg: 6 },
                    Me(h.a, null, Me(ae.a, { id: 'rmMedicineQuantity' })),
                    Me(y.a, {
                      type: 'text',
                      label: 'Quantity',
                      name: 'quantity',
                      placeholder: 'Enter quantity',
                      value: D,
                      onChange: function (e) {
                        return _(e.target.value);
                      },
                      backgroundColor: '#F7F7F7',
                      height: '48px',
                    })
                  )
                ),
                Me(
                  Ee,
                  null,
                  Me(
                    Ie,
                    { xs: 12, sm: 6, md: 6, lg: 6 },
                    Me(h.a, null, Me(ae.a, { id: 'rmMedicineName' })),
                    Me(y.a, {
                      type: 'text',
                      label: 'Medicine Name',
                      name: 'medicine-Name',
                      placeholder: 'Enter medicine name',
                      value: k,
                      onChange: function (e) {
                        return S(e.target.value);
                      },
                      backgroundColor: '#F7F7F7',
                      height: '48px',
                    })
                  ),
                  Me(
                    Ie,
                    { xs: 12, sm: 6, md: 6, lg: 6 },
                    Me(h.a, null, Me(ae.a, { id: 'rmMedicineQuantity' })),
                    Me(y.a, {
                      type: 'text',
                      label: 'Quantity',
                      name: 'quantity',
                      placeholder: 'Enter quantity',
                      value: I,
                      onChange: function (e) {
                        return E(e.target.value);
                      },
                      backgroundColor: '#F7F7F7',
                      height: '48px',
                    })
                  )
                ),
                Me(
                  Ee,
                  null,
                  Me(
                    Ie,
                    { xs: 12, sm: 12, md: 12, lg: 12 },
                    Me(
                      Ae,
                      null,
                      Me(ae.a, {
                        id: 'rmPrescripttionUpload',
                        defaultMessage: 'Upload your prescription',
                      })
                    )
                  ),
                  Me(
                    Ie,
                    { xs: 12, sm: 12, md: 12, lg: 12 },
                    Me(he, { onChange: '', intlUploadText: 'rmUploadText' })
                  )
                ),
                Me(
                  Ne,
                  null,
                  Me(
                    Ae,
                    null,
                    Me(ae.a, {
                      id: 'checkoutDeliveryAddress',
                      defaultMessage: 'Select Your Delivery Address',
                    })
                  ),
                  Me(
                    Fe,
                    null,
                    Me(b.a, {
                      items: v,
                      component: function (e) {
                        return Me(g.a, {
                          id: e.id,
                          key: e.id,
                          title: e.name,
                          content: e.info,
                          name: 'address',
                          checked: 'primary' === e.type,
                          onChange: function () {
                            return n({
                              type: 'SET_PRIMARY_ADDRESS',
                              payload: e.id.toString(),
                            });
                          },
                          onEdit: function () {
                            return W(e, 'edit', 'address');
                          },
                          onDelete: function () {
                            return W(e, 'delete', 'address');
                          },
                        });
                      },
                      secondaryComponent: Me(
                        m.a,
                        {
                          size: 'big',
                          variant: 'outlined',
                          type: 'button',
                          className: 'add-button',
                          onClick: function () {
                            return M(ve.a, 'add-address-modal');
                          },
                        },
                        Me(ae.a, {
                          id: 'addAddressBtn',
                          defaultMessage: 'Add Adderss',
                        })
                      ),
                    })
                  )
                ),
                Me(
                  Pe,
                  null,
                  Me(
                    Ae,
                    null,
                    Me(ae.a, {
                      id: 'contactNumberText',
                      defaultMessage: 'Select Your Contact Number',
                    })
                  ),
                  Me(
                    Fe,
                    null,
                    Me(b.a, {
                      items: x,
                      component: function (e) {
                        return Me(g.a, {
                          id: e.id,
                          key: e.id,
                          title: e.type,
                          content: e.number,
                          checked: 'primary' === e.type,
                          onChange: function () {
                            return n({
                              type: 'SET_PRIMARY_CONTACT',
                              payload: e.id.toString(),
                            });
                          },
                          name: 'contact',
                          onEdit: function () {
                            return W(e, 'edit', 'contact');
                          },
                          onDelete: function () {
                            return W(e, 'delete', 'contact');
                          },
                        });
                      },
                      secondaryComponent: Me(
                        m.a,
                        {
                          size: 'big',
                          variant: 'outlined',
                          type: 'button',
                          className: 'add-button',
                          onClick: function () {
                            return M(xe.a, {}, 'add-contact-modal');
                          },
                        },
                        Me(ae.a, {
                          id: 'addContactBtn',
                          defaultMessage: 'Add Contact',
                        })
                      ),
                    })
                  )
                ),
                Me(
                  Te,
                  null,
                  Me(
                    m.a,
                    {
                      type: 'button',
                      onClick: L,
                      size: 'big',
                      loading: c,
                      style: { width: '100%' },
                    },
                    Me(ae.a, {
                      id: 'submitRequest',
                      defaultMessage: 'Submit Request',
                    })
                  )
                )
              )
            )
          );
        },
        Be = n('yR3f'),
        Ke = n('4HXp'),
        Ue = n('quMH'),
        Ge = i.a.createElement;
      t.default = function (e) {
        var t = e.deviceType,
          n = Object(o.b)(Be.a),
          r = n.data,
          u = n.error;
        if (n.loading) return Ge('div', null, 'loading...');
        if (u) return Ge(Ue.default, { message: u.message });
        return Ge(
          i.a.Fragment,
          null,
          Ge(c.a, {
            title: 'Request Medicine - Mahdi Fashion',
            description: 'Request Medicine Details',
          }),
          Ge(
            Ke.a,
            { initData: r.me },
            Ge(a.a, null, Ge(We, { token: !0, deviceType: t }))
          )
        );
      };
    },
    IdAm: function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return a;
      });
      var r = n('j/s1'),
        i = n('OBVT'),
        o = n('GkOb'),
        a = r.e.label.withConfig({
          displayName: 'label__Label',
          componentId: 'cmzjwx-0',
        })(
          Object(i.a)({
            fontSize: 'base',
            fontWeight: 'bold',
            color: 'text.bold',
            lineHeight: '19px',
            mb: '15px',
            display: 'flex',
          }),
          Object(o.d)(o.c, o.h, o.f)
        );
    },
    KKLf: function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return o;
      });
      var r = n('ERkP'),
        i = n.n(r).a.createElement,
        o = function (e) {
          e.color;
          var t = e.width,
            n = void 0 === t ? '41px' : t,
            r = e.height;
          return i(
            'svg',
            {
              xmlns: 'http://www.w3.org/2000/svg',
              width: n,
              height: void 0 === r ? '30px' : r,
              viewBox: '0 0 40.909 30',
            },
            i(
              'g',
              { transform: 'translate(0 -73.091)' },
              i('path', {
                'data-name': 'Path 2125',
                d:
                  'M39.129,89.827A8.064,8.064,0,0,0,34.58,86.94,5.446,5.446,0,0,0,30,78.546a5.207,5.207,0,0,0-3.537,1.321,10.921,10.921,0,0,0-10.1-6.776,10.511,10.511,0,0,0-7.713,3.2A10.508,10.508,0,0,0,5.454,84q0,.277.043.916A9.528,9.528,0,0,0,0,93.546a9.193,9.193,0,0,0,2.8,6.743,9.191,9.191,0,0,0,6.744,2.8H32.728a8.172,8.172,0,0,0,6.4-13.264Zm-12.06-.575a.656.656,0,0,1-.479.2H21.818v7.5a.691.691,0,0,1-.681.681H17.045a.691.691,0,0,1-.682-.681v-7.5H11.59a.655.655,0,0,1-.681-.681.8.8,0,0,1,.213-.512L18.6,80.783a.722.722,0,0,1,.98,0l7.5,7.5a.663.663,0,0,1,.191.49A.656.656,0,0,1,27.07,89.252Z',
                transform: 'translate(0)',
                fill: '#e6e6e6',
              })
            )
          );
        };
    },
    Y0uC: function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return B;
      }),
        n.d(t, 'b', function () {
          return P;
        });
      var r = n('aWzz'),
        i = n.n(r),
        o = n('j/s1'),
        a = n('nbN/'),
        c = n.n(a);
      function u(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function l(e, t) {
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
      function s(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? l(Object(n), !0).forEach(function (t) {
                u(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : l(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function d(e, t) {
        return t || (t = e.slice(0)), (e.raw = t), e;
      }
      function f() {
        var e = d(['\n    @media ', ' {\n      ', '\n    }\n  ']);
        return (
          (f = function () {
            return e;
          }),
          e
        );
      }
      var p = {
          gridSize: 12,
          gutterWidth: 1,
          outerMargin: 2,
          mediaQuery: 'only screen',
          container: { sm: 46, md: 61, lg: 76 },
          breakpoints: { xs: 0, sm: 48, md: 64, lg: 75 },
        },
        m = [],
        g = function (e) {
          return JSON.stringify((e.theme && e.theme.flexboxgrid) || {});
        },
        b = function (e) {
          var t = (e.theme && e.theme.flexboxgrid) || {},
            n = s({}, p, {}, t, {
              container: s({}, p.container, {}, t.container),
              breakpoints: s({}, p.breakpoints, {}, t.breakpoints),
            });
          return (
            (n.media = Object.keys(n.breakpoints).reduce(function (e, t) {
              var r = n.breakpoints[t];
              return (
                (e[t] = (function (e) {
                  return function () {
                    return Object(o.d)(f(), e, o.d.apply(void 0, arguments));
                  };
                })(
                  [n.mediaQuery, 0 !== t && '(min-width: ' + r + 'em)']
                    .filter(Boolean)
                    .join(' and ')
                )),
                e
              );
            }, {})),
            n
          );
        },
        y = ['xs', 'sm', 'md', 'lg'];
      function h(e) {
        var t = g(e);
        if (m[0] === t) return m[1];
        var n = b(e);
        return (m[0] = t), (m[1] = n), n;
      }
      function v() {
        var e = d(['\n        width: ', 'rem;\n      ']);
        return (
          (v = function () {
            return e;
          }),
          e
        );
      }
      function x() {
        var e = d(['\n    ', '\n  ']);
        return (
          (x = function () {
            return e;
          }),
          e
        );
      }
      function O() {
        var e = d([
          '\n  margin-right: auto;\n  margin-left: auto;\n  padding-right: ',
          ';\n  padding-left: ',
          ';\n\n  ',
          '\n',
        ]);
        return (
          (O = function () {
            return e;
          }),
          e
        );
      }
      var w = o.e.div(
        O(),
        function (e) {
          return h(e).outerMargin + 'rem';
        },
        function (e) {
          return h(e).outerMargin + 'rem';
        },
        function (e) {
          return (
            !e.fluid &&
            Object(o.d)(
              x(),
              y.map(function (t) {
                return (
                  h(e).container[t] &&
                  h(e).media[t](v(), function (e) {
                    return h(e).container[t];
                  })
                );
              })
            )
          );
        }
      );
      function j() {
        var e = d(['\n    order: 1;\n  ']);
        return (
          (j = function () {
            return e;
          }),
          e
        );
      }
      function C() {
        var e = d(['\n    order: -1;\n  ']);
        return (
          (C = function () {
            return e;
          }),
          e
        );
      }
      function D() {
        var e = d(['\n    justify-content: space-between;\n  ']);
        return (
          (D = function () {
            return e;
          }),
          e
        );
      }
      function _() {
        var e = d(['\n    justify-content: space-around;\n  ']);
        return (
          (_ = function () {
            return e;
          }),
          e
        );
      }
      function z() {
        var e = d(['\n    align-items: flex-end;\n  ']);
        return (
          (z = function () {
            return e;
          }),
          e
        );
      }
      function k() {
        var e = d(['\n    align-items: center;\n  ']);
        return (
          (k = function () {
            return e;
          }),
          e
        );
      }
      function S() {
        var e = d(['\n    align-items: flex-start;\n  ']);
        return (
          (S = function () {
            return e;
          }),
          e
        );
      }
      function A() {
        var e = d(['\n    justify-content: flex-end;\n  ']);
        return (
          (A = function () {
            return e;
          }),
          e
        );
      }
      function I() {
        var e = d(['\n    justify-content: center;\n  ']);
        return (
          (I = function () {
            return e;
          }),
          e
        );
      }
      function E() {
        var e = d(['\n    justify-content: flex-start;\n  ']);
        return (
          (E = function () {
            return e;
          }),
          e
        );
      }
      function N() {
        var e = d([
          '\n  box-sizing: border-box;\n  display: flex;\n  flex: 0 1 auto;\n  flex-direction: row;\n  flex-wrap: wrap;\n  margin-right: ',
          'rem;\n  margin-left: ',
          'rem;\n\n  ',
          '\n\n  ',
          '\n\n  ',
          '\n\n  ',
          '\n\n  ',
          '\n\n  ',
          '\n\n  ',
          '\n\n  ',
          '\n\n  ',
          '\n\n  ',
          '\n\n  ',
          '\n',
        ]);
        return (
          (N = function () {
            return e;
          }),
          e
        );
      }
      (w.displayName = 'Grid'),
        (w.propTypes = { fluid: i.a.bool, children: i.a.node });
      var F = i.a.oneOf(y),
        P = o.e.div(
          N(),
          function (e) {
            return (h(e).gutterWidth / 2) * -1;
          },
          function (e) {
            return (h(e).gutterWidth / 2) * -1;
          },
          function (e) {
            return e.reverse && '\n    flex-direction: row-reverse;\n  ';
          },
          function (e) {
            return e.start && h(e).media[e.start](E());
          },
          function (e) {
            return e.center && h(e).media[e.center](I());
          },
          function (e) {
            return e.end && h(e).media[e.end](A());
          },
          function (e) {
            return e.top && h(e).media[e.top](S());
          },
          function (e) {
            return e.middle && h(e).media[e.middle](k());
          },
          function (e) {
            return e.bottom && h(e).media[e.bottom](z());
          },
          function (e) {
            return e.around && h(e).media[e.around](_());
          },
          function (e) {
            return e.between && h(e).media[e.between](D());
          },
          function (e) {
            return e.first && h(e).media[e.first](C());
          },
          function (e) {
            return e.last && h(e).media[e.last](j());
          }
        );
      function T() {
        var e = d(['\n        margin-left: ', '%;\n      ']);
        return (
          (T = function () {
            return e;
          }),
          e
        );
      }
      function R() {
        var e = d(['', '']);
        return (
          (R = function () {
            return e;
          }),
          e
        );
      }
      function q() {
        var e = d([
          '\n  box-sizing: border-box;\n  flex: 0 0 auto;\n  padding-right: ',
          'rem;\n  padding-left: ',
          'rem;\n\n  ',
          '\n\n  ',
          '\n\n  ',
          '\n',
        ]);
        return (
          (q = function () {
            return e;
          }),
          e
        );
      }
      (P.displayName = 'Row'),
        (P.propTypes = {
          reverse: i.a.bool,
          start: F,
          center: F,
          end: F,
          top: F,
          middle: F,
          bottom: F,
          around: F,
          between: F,
          first: F,
          last: F,
          children: i.a.node,
        });
      var L = i.a.oneOfType([i.a.number, i.a.bool]),
        M = y.map(function (e) {
          return e + 'Offset';
        }),
        W = y.reduce(function (e, t) {
          return (e[t] = L), (e[t + 'Offset'] = i.a.number), e;
        }, {}),
        B = o.e.div(
          q(),
          function (e) {
            return h(e).gutterWidth / 2;
          },
          function (e) {
            return h(e).gutterWidth / 2;
          },
          function (e) {
            return e.reverse && '\n    flex-direction: column-reverse;\n  ';
          },
          function (e) {
            return Object.keys(e)
              .filter(function (e) {
                return ~y.indexOf(e);
              })
              .sort(function (e, t) {
                return y.indexOf(e) - y.indexOf(t);
              })
              .map(function (t) {
                return h(e).media[t](
                  R(),
                  c()(e[t])
                    ? '\n        flex-basis: ' +
                        (100 / h(e).gridSize) * e[t] +
                        '%;\n        max-width: ' +
                        (100 / h(e).gridSize) * e[t] +
                        '%;\n        display: block;\n      '
                    : e[t]
                    ? '\n          flex-grow: 1;\n          flex-basis: 0;\n          max-width: 100%;\n          display: block;\n        '
                    : 'display: none;'
                );
              });
          },
          function (e) {
            return Object.keys(e)
              .filter(function (e) {
                return ~M.indexOf(e);
              })
              .map(function (t) {
                return h(e).media[t.replace(/Offset$/, '')](
                  T(),
                  (100 / h(e).gridSize) * e[t]
                );
              });
          }
        );
      (B.displayName = 'Col'),
        (B.propTypes = s({}, W, { reverse: i.a.bool, children: i.a.node }));
    },
    YBd4: function (e, t, n) {
      'use strict';
      var r = n('ERkP'),
        i = n.n(r),
        o = n('j/s1'),
        a = i.a.createElement,
        c = o.e.div.withConfig({
          displayName: 'radio-group__RadioGroupWrapper',
          componentId: 'uzzs37-0',
        })(['display:flex;flex-wrap:wrap;']);
      t.a = function (e) {
        var t = e.items,
          n = void 0 === t ? [] : t,
          r = e.component,
          i = e.containerClassName,
          o = e.secondaryComponent;
        return a(
          c,
          { className: 'radioGroup '.concat(i).trim() },
          null === n || void 0 === n
            ? void 0
            : n.map(function (e, t) {
                return r && r(e, t);
              }),
          o && o
        );
      };
    },
    'ZkW+': function (e, t) {
      e.exports = (function (e) {
        function t(r) {
          if (n[r]) return n[r].exports;
          var i = (n[r] = { i: r, l: !1, exports: {} });
          return e[r].call(i.exports, i, i.exports, t), (i.l = !0), i.exports;
        }
        var n = {};
        return (
          (t.m = e),
          (t.c = n),
          (t.d = function (e, n, r) {
            t.o(e, n) ||
              Object.defineProperty(e, n, {
                configurable: !1,
                enumerable: !0,
                get: r,
              });
          }),
          (t.n = function (e) {
            var n =
              e && e.__esModule
                ? function () {
                    return e.default;
                  }
                : function () {
                    return e;
                  };
            return t.d(n, 'a', n), n;
          }),
          (t.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
          }),
          (t.p = ''),
          t((t.s = 0))
        );
      })([
        function (e, t, n) {
          'use strict';
          (t.__esModule = !0),
            (t.default = function (e, t) {
              if (e && t) {
                var n = Array.isArray(t) ? t : t.split(','),
                  r = e.name || '',
                  i = e.type || '',
                  o = i.replace(/\/.*$/, '');
                return n.some(function (e) {
                  var t = e.trim();
                  return '.' === t.charAt(0)
                    ? r.toLowerCase().endsWith(t.toLowerCase())
                    : t.endsWith('/*')
                    ? o === t.replace(/\/.*$/, '')
                    : i === t;
                });
              }
              return !0;
            });
        },
      ]);
    },
    ehrm: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/request-medicine',
        function () {
          return n('AzIi');
        },
      ]);
    },
    fDRB: function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return u;
      });
      var r = n('KD1n'),
        i = n('H5qd'),
        o = n.n(i);
      function a() {
        var e = Object(r.a)([
          '\n  mutation($contactId: String!) {\n    deleteContact(contactId: $contactId) {\n      id\n      name\n      contact {\n        id\n        type\n        number\n      }\n    }\n  }\n',
        ]);
        return (
          (a = function () {
            return e;
          }),
          e
        );
      }
      function c() {
        var e = Object(r.a)([
          '\n  mutation($contactInput: String!) {\n    updateContact(contactInput: $contactInput) {\n      id\n      name\n      contact {\n        id\n        type\n        number\n      }\n    }\n  }\n',
        ]);
        return (
          (c = function () {
            return e;
          }),
          e
        );
      }
      o()(c());
      var u = o()(a());
    },
    'nbN/': function (e, t) {
      var n = 1 / 0,
        r = 17976931348623157e292,
        i = NaN,
        o = '[object Symbol]',
        a = /^\s+|\s+$/g,
        c = /^[-+]0x[0-9a-f]+$/i,
        u = /^0b[01]+$/i,
        l = /^0o[0-7]+$/i,
        s = parseInt,
        d = Object.prototype.toString;
      function f(e) {
        var t = typeof e;
        return !!e && ('object' == t || 'function' == t);
      }
      e.exports = function (e) {
        return (
          'number' == typeof e &&
          e ==
            (function (e) {
              var t = (function (e) {
                  if (!e) return 0 === e ? e : 0;
                  if (
                    (e = (function (e) {
                      if ('number' == typeof e) return e;
                      if (
                        (function (e) {
                          return (
                            'symbol' == typeof e ||
                            ((function (e) {
                              return !!e && 'object' == typeof e;
                            })(e) &&
                              d.call(e) == o)
                          );
                        })(e)
                      )
                        return i;
                      if (f(e)) {
                        var t =
                          'function' == typeof e.valueOf ? e.valueOf() : e;
                        e = f(t) ? t + '' : t;
                      }
                      if ('string' != typeof e) return 0 === e ? e : +e;
                      e = e.replace(a, '');
                      var n = u.test(e);
                      return n || l.test(e)
                        ? s(e.slice(2), n ? 2 : 8)
                        : c.test(e)
                        ? i
                        : +e;
                    })(e)) === n ||
                    e === -n
                  ) {
                    return (e < 0 ? -1 : 1) * r;
                  }
                  return e === e ? e : 0;
                })(e),
                p = t % 1;
              return t === t ? (p ? t - p : t) : 0;
            })(e)
        );
      };
    },
  },
  [['ehrm', 1, 0, 2, 3, 4, 5, 6, 9, 12]],
]);

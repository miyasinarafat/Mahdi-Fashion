(window.webpackJsonp = window.webpackJsonp || []).push([
  [18],
  {
    DSo7: function (e, t) {
      e.exports = function (e) {
        if ('undefined' !== typeof Symbol && Symbol.iterator in Object(e))
          return Array.from(e);
      };
    },
    H8eV: function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return s;
      });
      var r = n('ERkP'),
        o = n.n(r),
        i = n('ysqo'),
        a = n.n(i),
        c = o.a.createElement,
        s = function (e) {
          var t = e.title,
            n = e.description,
            r = e.canonical,
            o = e.css,
            i = e.js,
            s = e.image;
          return c(
            a.a,
            null,
            c('title', null, t),
            c('meta', { name: 'description', content: n }),
            c('meta', {
              name: 'viewport',
              content: 'width=device-width,minimum-scale=1,initial-scale=1',
            }),
            c('meta', { property: 'og:type', content: 'website' }),
            c('meta', { name: 'og:title', property: 'og:title', content: t }),
            c('meta', {
              name: 'og:description',
              property: 'og:description',
              content: n,
            }),
            c('meta', { property: 'og:site_name', content: 'Proper Noun' }),
            c('meta', { property: 'og:url', content: ''.concat(r) }),
            c('meta', { name: 'twitter:card', content: 'summary' }),
            c('meta', { name: 'twitter:title', content: t }),
            c('meta', { name: 'twitter:description', content: n }),
            c('meta', { name: 'twitter:site', content: '@propernounco' }),
            c('meta', { name: 'twitter:creator', content: '@propernounco' }),
            o && c('link', { rel: 'stylesheet', href: ''.concat(o) }),
            c(
              'meta',
              s
                ? { property: 'og:image', content: ''.concat(s) }
                : {
                    property: 'og:image',
                    content:
                      'https://www.propernoun.co/static/images/proper-noun-social.png',
                  }
            ),
            s && c('meta', { name: 'twitter:image', content: ''.concat(s) }),
            r && c('link', { rel: 'canonical', href: ''.concat(r) }),
            i && c('script', { type: 'text/javascript', src: ''.concat(i) })
          );
        };
    },
    J9Yr: function (e, t, n) {
      'use strict';
      var r = n('zQIG'),
        o = n('N7I1'),
        i = n('8mBC'),
        a = n('I/kN'),
        c = n('cMav'),
        s = n('pSQP'),
        u = n('iN+R');
      function l(e) {
        var t = (function () {
          if ('undefined' === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ('function' === typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = s(e);
          if (t) {
            var o = s(this).constructor;
            n = Reflect.construct(r, arguments, o);
          } else n = r.apply(this, arguments);
          return c(this, n);
        };
      }
      (t.__esModule = !0), (t.default = void 0);
      var p = n('ERkP'),
        f = !1;
      t.default = function () {
        var e,
          t = new Set();
        function n(n) {
          (e = n.props.reduceComponentsToState(u(t), n.props)),
            n.props.handleStateChange && n.props.handleStateChange(e);
        }
        return (function (c) {
          a(u, c);
          var s = l(u);
          function u(e) {
            var i;
            return (
              r(this, u), (i = s.call(this, e)), f && (t.add(o(i)), n(o(i))), i
            );
          }
          return (
            i(u, null, [
              {
                key: 'rewind',
                value: function () {
                  var n = e;
                  return (e = void 0), t.clear(), n;
                },
              },
            ]),
            i(u, [
              {
                key: 'componentDidMount',
                value: function () {
                  t.add(this), n(this);
                },
              },
              {
                key: 'componentDidUpdate',
                value: function () {
                  n(this);
                },
              },
              {
                key: 'componentWillUnmount',
                value: function () {
                  t.delete(this), n(this);
                },
              },
              {
                key: 'render',
                value: function () {
                  return null;
                },
              },
            ]),
            u
          );
        })(p.Component);
      };
    },
    O94r: function (e, t, n) {
      var r;
      !(function () {
        'use strict';
        var n = {}.hasOwnProperty;
        function o() {
          for (var e = [], t = 0; t < arguments.length; t++) {
            var r = arguments[t];
            if (r) {
              var i = typeof r;
              if ('string' === i || 'number' === i) e.push(r);
              else if (Array.isArray(r) && r.length) {
                var a = o.apply(null, r);
                a && e.push(a);
              } else if ('object' === i)
                for (var c in r) n.call(r, c) && r[c] && e.push(c);
            }
          }
          return e.join(' ');
        }
        e.exports
          ? ((o.default = o), (e.exports = o))
          : void 0 ===
              (r = function () {
                return o;
              }.apply(t, [])) || (e.exports = r);
      })();
    },
    TZT2: function (e, t, n) {
      'use strict';
      var r;
      (t.__esModule = !0), (t.AmpStateContext = void 0);
      var o = ((r = n('ERkP')) && r.__esModule
        ? r
        : { default: r }
      ).default.createContext({});
      t.AmpStateContext = o;
    },
    bJOg: function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return ae;
      });
      var r = n('ERkP'),
        o = n.n(r),
        i = n('O94r'),
        a = n.n(i),
        c = n('Pu0A'),
        s = n.n(c),
        u = (function () {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                'value' in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
            }
          }
          return function (t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t;
          };
        })();
      function l(e, t, n) {
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
      var p = (function (e) {
          function t() {
            return (
              (function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError('Cannot call a class as a function');
              })(this, t),
              (function (e, t) {
                if (!e)
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                return !t || ('object' !== typeof t && 'function' !== typeof t)
                  ? e
                  : t;
              })(
                this,
                (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments)
              )
            );
          }
          return (
            (function (e, t) {
              if ('function' !== typeof t && null !== t)
                throw new TypeError(
                  'Super expression must either be null or a function, not ' +
                    typeof t
                );
              (e.prototype = Object.create(t && t.prototype, {
                constructor: {
                  value: e,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })),
                t &&
                  (Object.setPrototypeOf
                    ? Object.setPrototypeOf(e, t)
                    : (e.__proto__ = t));
            })(t, e),
            u(t, [
              {
                key: 'shouldComponentUpdate',
                value: function (e) {
                  return this.props.forceRender || !s()(this.props, e);
                },
              },
              {
                key: 'render',
                value: function () {
                  var e;
                  if (
                    ((this._isActived =
                      this.props.forceRender ||
                      this._isActived ||
                      this.props.isActive),
                    !this._isActived)
                  )
                    return null;
                  var t = this.props,
                    n = t.prefixCls,
                    r = t.isActive,
                    i = t.children,
                    c = t.destroyInactivePanel,
                    s = t.forceRender,
                    u = t.role,
                    p = a()(
                      n + '-content',
                      (l((e = {}), n + '-content-active', r),
                      l(e, n + '-content-inactive', !r),
                      e)
                    ),
                    f =
                      s || r || !c
                        ? o.a.createElement(
                            'div',
                            { className: n + '-content-box' },
                            i
                          )
                        : null;
                  return o.a.createElement('div', { className: p, role: u }, f);
                },
              },
            ]),
            t
          );
        })(r.Component),
        f = function (e) {
          var t = e.prototype;
          if (!t || !t.isReactComponent)
            throw new Error('Can only polyfill class components');
          return 'function' !== typeof t.componentWillReceiveProps
            ? e
            : o.a.Profiler
            ? ((t.UNSAFE_componentWillReceiveProps =
                t.componentWillReceiveProps),
              delete t.componentWillReceiveProps,
              e)
            : e;
        };
      function d(e) {
        var t = [];
        return (
          o.a.Children.forEach(e, function (e) {
            t.push(e);
          }),
          t
        );
      }
      function m(e, t) {
        var n = null;
        return (
          e &&
            e.forEach(function (e) {
              n || (e && e.key === t && (n = e));
            }),
          n
        );
      }
      function v(e, t, n) {
        var r = null;
        return (
          e &&
            e.forEach(function (e) {
              if (e && e.key === t && e.props[n]) {
                if (r)
                  throw new Error(
                    'two child with same key for <rc-animate> children'
                  );
                r = e;
              }
            }),
          r
        );
      }
      var h = n('7nmT'),
        y = n.n(h),
        b = {
          transitionstart: {
            transition: 'transitionstart',
            WebkitTransition: 'webkitTransitionStart',
            MozTransition: 'mozTransitionStart',
            OTransition: 'oTransitionStart',
            msTransition: 'MSTransitionStart',
          },
          animationstart: {
            animation: 'animationstart',
            WebkitAnimation: 'webkitAnimationStart',
            MozAnimation: 'mozAnimationStart',
            OAnimation: 'oAnimationStart',
            msAnimation: 'MSAnimationStart',
          },
        },
        E = {
          transitionend: {
            transition: 'transitionend',
            WebkitTransition: 'webkitTransitionEnd',
            MozTransition: 'mozTransitionEnd',
            OTransition: 'oTransitionEnd',
            msTransition: 'MSTransitionEnd',
          },
          animationend: {
            animation: 'animationend',
            WebkitAnimation: 'webkitAnimationEnd',
            MozAnimation: 'mozAnimationEnd',
            OAnimation: 'oAnimationEnd',
            msAnimation: 'MSAnimationEnd',
          },
        },
        w = [],
        k = [];
      function A(e, t, n) {
        e.addEventListener(t, n, !1);
      }
      function g(e, t, n) {
        e.removeEventListener(t, n, !1);
      }
      'undefined' !== typeof window &&
        'undefined' !== typeof document &&
        (function () {
          var e = document.createElement('div').style;
          function t(t, n) {
            for (var r in t)
              if (t.hasOwnProperty(r)) {
                var o = t[r];
                for (var i in o)
                  if (i in e) {
                    n.push(o[i]);
                    break;
                  }
              }
          }
          'AnimationEvent' in window ||
            (delete b.animationstart.animation,
            delete E.animationend.animation),
            'TransitionEvent' in window ||
              (delete b.transitionstart.transition,
              delete E.transitionend.transition),
            t(b, w),
            t(E, k);
        })();
      var P = {
          startEvents: w,
          addStartEventListener: function (e, t) {
            0 !== w.length
              ? w.forEach(function (n) {
                  A(e, n, t);
                })
              : window.setTimeout(t, 0);
          },
          removeStartEventListener: function (e, t) {
            0 !== w.length &&
              w.forEach(function (n) {
                g(e, n, t);
              });
          },
          endEvents: k,
          addEndEventListener: function (e, t) {
            0 !== k.length
              ? k.forEach(function (n) {
                  A(e, n, t);
                })
              : window.setTimeout(t, 0);
          },
          removeEndEventListener: function (e, t) {
            0 !== k.length &&
              k.forEach(function (n) {
                g(e, n, t);
              });
          },
        },
        C =
          'function' === typeof Symbol && 'symbol' === typeof Symbol.iterator
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
        T = 0 !== P.endEvents.length,
        O = ['Webkit', 'Moz', 'O', 'ms'],
        _ = ['-webkit-', '-moz-', '-o-', 'ms-', ''];
      function S(e, t) {
        for (
          var n = window.getComputedStyle(e, null), r = '', o = 0;
          o < _.length && !(r = n.getPropertyValue(_[o] + t));
          o++
        );
        return r;
      }
      function L(e) {
        if (T) {
          var t = parseFloat(S(e, 'transition-delay')) || 0,
            n = parseFloat(S(e, 'transition-duration')) || 0,
            r = parseFloat(S(e, 'animation-delay')) || 0,
            o = parseFloat(S(e, 'animation-duration')) || 0,
            i = Math.max(n + t, o + r);
          e.rcEndAnimTimeout = setTimeout(function () {
            (e.rcEndAnimTimeout = null), e.rcEndListener && e.rcEndListener();
          }, 1e3 * i + 200);
        }
      }
      function x(e) {
        e.rcEndAnimTimeout &&
          (clearTimeout(e.rcEndAnimTimeout), (e.rcEndAnimTimeout = null));
      }
      var j = function (e, t, n) {
        var r = 'object' === ('undefined' === typeof t ? 'undefined' : C(t)),
          o = r ? t.name : t,
          i = r ? t.active : t + '-active',
          a = n,
          c = void 0,
          s = void 0;
        return (
          n &&
            '[object Object]' === Object.prototype.toString.call(n) &&
            ((a = n.end), (c = n.start), (s = n.active)),
          e.rcEndListener && e.rcEndListener(),
          (e.rcEndListener = function (t) {
            (t && t.target !== e) ||
              (e.rcAnimTimeout &&
                (clearTimeout(e.rcAnimTimeout), (e.rcAnimTimeout = null)),
              x(e),
              e.classList.remove(o),
              e.classList.remove(i),
              P.removeEndEventListener(e, e.rcEndListener),
              (e.rcEndListener = null),
              a && a());
          }),
          P.addEndEventListener(e, e.rcEndListener),
          c && c(),
          e.classList.add(o),
          (e.rcAnimTimeout = setTimeout(function () {
            (e.rcAnimTimeout = null),
              e.classList.add(i),
              s && setTimeout(s, 0),
              L(e);
          }, 30)),
          {
            stop: function () {
              e.rcEndListener && e.rcEndListener();
            },
          }
        );
      };
      (j.style = function (e, t, n) {
        e.rcEndListener && e.rcEndListener(),
          (e.rcEndListener = function (t) {
            (t && t.target !== e) ||
              (e.rcAnimTimeout &&
                (clearTimeout(e.rcAnimTimeout), (e.rcAnimTimeout = null)),
              x(e),
              P.removeEndEventListener(e, e.rcEndListener),
              (e.rcEndListener = null),
              n && n());
          }),
          P.addEndEventListener(e, e.rcEndListener),
          (e.rcAnimTimeout = setTimeout(function () {
            for (var n in t) t.hasOwnProperty(n) && (e.style[n] = t[n]);
            (e.rcAnimTimeout = null), L(e);
          }, 0));
      }),
        (j.setTransition = function (e, t, n) {
          var r = t,
            o = n;
          void 0 === n && ((o = r), (r = '')),
            (r = r || ''),
            O.forEach(function (t) {
              e.style[t + 'Transition' + r] = o;
            });
        }),
        (j.isCssAnimationSupported = T);
      var R = j,
        K = {
          isAppearSupported: function (e) {
            return (
              (e.transitionName && e.transitionAppear) || e.animation.appear
            );
          },
          isEnterSupported: function (e) {
            return (e.transitionName && e.transitionEnter) || e.animation.enter;
          },
          isLeaveSupported: function (e) {
            return (e.transitionName && e.transitionLeave) || e.animation.leave;
          },
          allowAppearCallback: function (e) {
            return e.transitionAppear || e.animation.appear;
          },
          allowEnterCallback: function (e) {
            return e.transitionEnter || e.animation.enter;
          },
          allowLeaveCallback: function (e) {
            return e.transitionLeave || e.animation.leave;
          },
        },
        M = (function () {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                'value' in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
            }
          }
          return function (t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t;
          };
        })();
      var I = {
          enter: 'transitionEnter',
          appear: 'transitionAppear',
          leave: 'transitionLeave',
        },
        N = (function (e) {
          function t() {
            return (
              (function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError('Cannot call a class as a function');
              })(this, t),
              (function (e, t) {
                if (!e)
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                return !t || ('object' !== typeof t && 'function' !== typeof t)
                  ? e
                  : t;
              })(
                this,
                (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments)
              )
            );
          }
          return (
            (function (e, t) {
              if ('function' !== typeof t && null !== t)
                throw new TypeError(
                  'Super expression must either be null or a function, not ' +
                    typeof t
                );
              (e.prototype = Object.create(t && t.prototype, {
                constructor: {
                  value: e,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })),
                t &&
                  (Object.setPrototypeOf
                    ? Object.setPrototypeOf(e, t)
                    : (e.__proto__ = t));
            })(t, e),
            M(t, [
              {
                key: 'componentWillUnmount',
                value: function () {
                  this.stop();
                },
              },
              {
                key: 'componentWillEnter',
                value: function (e) {
                  K.isEnterSupported(this.props)
                    ? this.transition('enter', e)
                    : e();
                },
              },
              {
                key: 'componentWillAppear',
                value: function (e) {
                  K.isAppearSupported(this.props)
                    ? this.transition('appear', e)
                    : e();
                },
              },
              {
                key: 'componentWillLeave',
                value: function (e) {
                  K.isLeaveSupported(this.props)
                    ? this.transition('leave', e)
                    : e();
                },
              },
              {
                key: 'transition',
                value: function (e, t) {
                  var n = this,
                    r = y.a.findDOMNode(this),
                    o = this.props,
                    i = o.transitionName,
                    a = 'object' === typeof i;
                  this.stop();
                  var c = function () {
                    (n.stopper = null), t();
                  };
                  if ((T || !o.animation[e]) && i && o[I[e]]) {
                    var s = a ? i[e] : i + '-' + e,
                      u = s + '-active';
                    a && i[e + 'Active'] && (u = i[e + 'Active']),
                      (this.stopper = R(r, { name: s, active: u }, c));
                  } else this.stopper = o.animation[e](r, c);
                },
              },
              {
                key: 'stop',
                value: function () {
                  var e = this.stopper;
                  e && ((this.stopper = null), e.stop());
                },
              },
              {
                key: 'render',
                value: function () {
                  return this.props.children;
                },
              },
            ]),
            t
          );
        })(o.a.Component),
        D =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          },
        W = (function () {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                'value' in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
            }
          }
          return function (t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t;
          };
        })();
      var z = 'rc_animate_' + Date.now();
      function F(e) {
        var t = e.children;
        return o.a.isValidElement(t) && !t.key
          ? o.a.cloneElement(t, { key: z })
          : t;
      }
      function H() {}
      var U = (function (e) {
        function t(e) {
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function');
          })(this, t);
          var n = (function (e, t) {
            if (!e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return !t || ('object' !== typeof t && 'function' !== typeof t)
              ? e
              : t;
          })(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
          return (
            V.call(n),
            (n.currentlyAnimatingKeys = {}),
            (n.keysToEnter = []),
            (n.keysToLeave = []),
            (n.state = { children: d(F(e)) }),
            (n.childrenRefs = {}),
            n
          );
        }
        return (
          (function (e, t) {
            if ('function' !== typeof t && null !== t)
              throw new TypeError(
                'Super expression must either be null or a function, not ' +
                  typeof t
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0,
              },
            })),
              t &&
                (Object.setPrototypeOf
                  ? Object.setPrototypeOf(e, t)
                  : (e.__proto__ = t));
          })(t, e),
          W(t, [
            {
              key: 'componentDidMount',
              value: function () {
                var e = this,
                  t = this.props.showProp,
                  n = this.state.children;
                t &&
                  (n = n.filter(function (e) {
                    return !!e.props[t];
                  })),
                  n.forEach(function (t) {
                    t && e.performAppear(t.key);
                  });
              },
            },
            {
              key: 'componentWillReceiveProps',
              value: function (e) {
                var t = this;
                this.nextProps = e;
                var n = d(F(e)),
                  r = this.props;
                r.exclusive &&
                  Object.keys(this.currentlyAnimatingKeys).forEach(function (
                    e
                  ) {
                    t.stop(e);
                  });
                var i = r.showProp,
                  a = this.currentlyAnimatingKeys,
                  c = r.exclusive ? d(F(r)) : this.state.children,
                  s = [];
                i
                  ? (c.forEach(function (e) {
                      var t,
                        r,
                        a,
                        c = e && m(n, e.key),
                        u = void 0;
                      (u =
                        (c && c.props[i]) || !e.props[i]
                          ? c
                          : o.a.cloneElement(
                              c || e,
                              ((a = !0),
                              (r = i) in (t = {})
                                ? Object.defineProperty(t, r, {
                                    value: a,
                                    enumerable: !0,
                                    configurable: !0,
                                    writable: !0,
                                  })
                                : (t[r] = a),
                              t)
                            )) && s.push(u);
                    }),
                    n.forEach(function (e) {
                      (e && m(c, e.key)) || s.push(e);
                    }))
                  : (s = (function (e, t) {
                      var n = [],
                        r = {},
                        o = [];
                      return (
                        e.forEach(function (e) {
                          e && m(t, e.key)
                            ? o.length && ((r[e.key] = o), (o = []))
                            : o.push(e);
                        }),
                        t.forEach(function (e) {
                          e &&
                            Object.prototype.hasOwnProperty.call(r, e.key) &&
                            (n = n.concat(r[e.key])),
                            n.push(e);
                        }),
                        (n = n.concat(o))
                      );
                    })(c, n)),
                  this.setState({ children: s }),
                  n.forEach(function (e) {
                    var n = e && e.key;
                    if (!e || !a[n]) {
                      var r = e && m(c, n);
                      if (i) {
                        var o = e.props[i];
                        if (r) !v(c, n, i) && o && t.keysToEnter.push(n);
                        else o && t.keysToEnter.push(n);
                      } else r || t.keysToEnter.push(n);
                    }
                  }),
                  c.forEach(function (e) {
                    var r = e && e.key;
                    if (!e || !a[r]) {
                      var o = e && m(n, r);
                      if (i) {
                        var c = e.props[i];
                        if (o) !v(n, r, i) && c && t.keysToLeave.push(r);
                        else c && t.keysToLeave.push(r);
                      } else o || t.keysToLeave.push(r);
                    }
                  });
              },
            },
            {
              key: 'componentDidUpdate',
              value: function () {
                var e = this.keysToEnter;
                (this.keysToEnter = []), e.forEach(this.performEnter);
                var t = this.keysToLeave;
                (this.keysToLeave = []), t.forEach(this.performLeave);
              },
            },
            {
              key: 'isValidChildByKey',
              value: function (e, t) {
                var n = this.props.showProp;
                return n ? v(e, t, n) : m(e, t);
              },
            },
            {
              key: 'stop',
              value: function (e) {
                delete this.currentlyAnimatingKeys[e];
                var t = this.childrenRefs[e];
                t && t.stop();
              },
            },
            {
              key: 'render',
              value: function () {
                var e = this,
                  t = this.props;
                this.nextProps = t;
                var n = this.state.children,
                  r = null;
                n &&
                  (r = n.map(function (n) {
                    if (null === n || void 0 === n) return n;
                    if (!n.key)
                      throw new Error('must set key for <rc-animate> children');
                    return o.a.createElement(
                      N,
                      {
                        key: n.key,
                        ref: function (t) {
                          e.childrenRefs[n.key] = t;
                        },
                        animation: t.animation,
                        transitionName: t.transitionName,
                        transitionEnter: t.transitionEnter,
                        transitionAppear: t.transitionAppear,
                        transitionLeave: t.transitionLeave,
                      },
                      n
                    );
                  }));
                var i = t.component;
                if (i) {
                  var a = t;
                  return (
                    'string' === typeof i &&
                      (a = D(
                        { className: t.className, style: t.style },
                        t.componentProps
                      )),
                    o.a.createElement(i, a, r)
                  );
                }
                return r[0] || null;
              },
            },
          ]),
          t
        );
      })(o.a.Component);
      (U.isAnimate = !0),
        (U.defaultProps = {
          animation: {},
          component: 'span',
          componentProps: {},
          transitionEnter: !0,
          transitionLeave: !0,
          transitionAppear: !1,
          onEnd: H,
          onEnter: H,
          onLeave: H,
          onAppear: H,
        });
      var V = function () {
          var e = this;
          (this.performEnter = function (t) {
            e.childrenRefs[t] &&
              ((e.currentlyAnimatingKeys[t] = !0),
              e.childrenRefs[t].componentWillEnter(
                e.handleDoneAdding.bind(e, t, 'enter')
              ));
          }),
            (this.performAppear = function (t) {
              e.childrenRefs[t] &&
                ((e.currentlyAnimatingKeys[t] = !0),
                e.childrenRefs[t].componentWillAppear(
                  e.handleDoneAdding.bind(e, t, 'appear')
                ));
            }),
            (this.handleDoneAdding = function (t, n) {
              var r = e.props;
              if (
                (delete e.currentlyAnimatingKeys[t],
                !r.exclusive || r === e.nextProps)
              ) {
                var o = d(F(r));
                e.isValidChildByKey(o, t)
                  ? 'appear' === n
                    ? K.allowAppearCallback(r) &&
                      (r.onAppear(t), r.onEnd(t, !0))
                    : K.allowEnterCallback(r) && (r.onEnter(t), r.onEnd(t, !0))
                  : e.performLeave(t);
              }
            }),
            (this.performLeave = function (t) {
              e.childrenRefs[t] &&
                ((e.currentlyAnimatingKeys[t] = !0),
                e.childrenRefs[t].componentWillLeave(
                  e.handleDoneLeaving.bind(e, t)
                ));
            }),
            (this.handleDoneLeaving = function (t) {
              var n = e.props;
              if (
                (delete e.currentlyAnimatingKeys[t],
                !n.exclusive || n === e.nextProps)
              ) {
                var r = d(F(n));
                if (e.isValidChildByKey(r, t)) e.performEnter(t);
                else {
                  var o = function () {
                    K.allowLeaveCallback(n) && (n.onLeave(t), n.onEnd(t, !1));
                  };
                  !(function (e, t, n) {
                    var r = e.length === t.length;
                    return (
                      r &&
                        e.forEach(function (e, o) {
                          var i = t[o];
                          e &&
                            i &&
                            ((e && !i) || (!e && i)
                              ? (r = !1)
                              : e.key !== i.key
                              ? (r = !1)
                              : n && e.props[n] !== i.props[n] && (r = !1));
                        }),
                      r
                    );
                  })(e.state.children, r, n.showProp)
                    ? e.setState({ children: r }, o)
                    : o();
                }
              }
            });
        },
        q = f(U),
        J = (function () {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                'value' in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
            }
          }
          return function (t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t;
          };
        })();
      function B(e, t, n) {
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
      function Y(e, t) {
        if (!e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return !t || ('object' !== typeof t && 'function' !== typeof t) ? e : t;
      }
      var Q = (function (e) {
        function t() {
          var e, n, r;
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function');
          })(this, t);
          for (var o = arguments.length, i = Array(o), a = 0; a < o; a++)
            i[a] = arguments[a];
          return (
            (n = r = Y(
              this,
              (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(
                e,
                [this].concat(i)
              )
            )),
            (r.handleItemClick = function () {
              var e = r.props,
                t = e.onItemClick,
                n = e.panelKey;
              'function' === typeof t && t(n);
            }),
            (r.handleKeyPress = function (e) {
              ('Enter' !== e.key && 13 !== e.keyCode && 13 !== e.which) ||
                r.handleItemClick();
            }),
            Y(r, n)
          );
        }
        return (
          (function (e, t) {
            if ('function' !== typeof t && null !== t)
              throw new TypeError(
                'Super expression must either be null or a function, not ' +
                  typeof t
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0,
              },
            })),
              t &&
                (Object.setPrototypeOf
                  ? Object.setPrototypeOf(e, t)
                  : (e.__proto__ = t));
          })(t, e),
          J(t, [
            {
              key: 'shouldComponentUpdate',
              value: function (e) {
                return !s()(this.props, e);
              },
            },
            {
              key: 'render',
              value: function () {
                var e,
                  t = this.props,
                  n = t.className,
                  r = t.id,
                  i = t.style,
                  c = t.prefixCls,
                  s = t.header,
                  u = t.headerClass,
                  l = t.children,
                  f = t.isActive,
                  d = t.showArrow,
                  m = t.destroyInactivePanel,
                  v = t.disabled,
                  h = t.accordion,
                  y = t.forceRender,
                  b = t.expandIcon,
                  E = t.extra,
                  w = a()(c + '-header', B({}, u, u)),
                  k = a()(
                    (B((e = {}), c + '-item', !0),
                    B(e, c + '-item-active', f),
                    B(e, c + '-item-disabled', v),
                    e),
                    n
                  ),
                  A = o.a.createElement('i', { className: 'arrow' });
                return (
                  d && 'function' === typeof b && (A = b(this.props)),
                  o.a.createElement(
                    'div',
                    { className: k, style: i, id: r },
                    o.a.createElement(
                      'div',
                      {
                        className: w,
                        onClick: this.handleItemClick,
                        role: h ? 'tab' : 'button',
                        tabIndex: v ? -1 : 0,
                        'aria-expanded': '' + f,
                        onKeyPress: this.handleKeyPress,
                      },
                      d && A,
                      s,
                      E &&
                        o.a.createElement('div', { className: c + '-extra' }, E)
                    ),
                    o.a.createElement(
                      q,
                      {
                        showProp: 'isActive',
                        exclusive: !0,
                        component: '',
                        animation: this.props.openAnimation,
                      },
                      o.a.createElement(
                        p,
                        {
                          prefixCls: c,
                          isActive: f,
                          destroyInactivePanel: m,
                          forceRender: y,
                          role: h ? 'tabpanel' : null,
                        },
                        l
                      )
                    )
                  )
                );
              },
            },
          ]),
          t
        );
      })(r.Component);
      Q.defaultProps = {
        showArrow: !0,
        isActive: !1,
        destroyInactivePanel: !1,
        onItemClick: function () {},
        headerClass: '',
        forceRender: !1,
      };
      var Z = Q;
      function $(e, t, n, r) {
        var o = void 0;
        return R(e, n, {
          start: function () {
            t
              ? ((o = e.offsetHeight), (e.style.height = 0))
              : (e.style.height = e.offsetHeight + 'px');
          },
          active: function () {
            e.style.height = (t ? o : 0) + 'px';
          },
          end: function () {
            (e.style.height = ''), r();
          },
        });
      }
      var G = function (e) {
          return {
            enter: function (t, n) {
              return $(t, !0, e + '-anim', n);
            },
            leave: function (t, n) {
              return $(t, !1, e + '-anim', n);
            },
          };
        },
        X = n('kvVz'),
        ee = (function () {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                'value' in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
            }
          }
          return function (t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t;
          };
        })();
      function te(e, t, n) {
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
      function ne(e) {
        var t = e;
        return (
          Array.isArray(t) || (t = t ? [t] : []),
          t.map(function (e) {
            return String(e);
          })
        );
      }
      var re = (function (e) {
          function t(e) {
            !(function (e, t) {
              if (!(e instanceof t))
                throw new TypeError('Cannot call a class as a function');
            })(this, t);
            var n = (function (e, t) {
              if (!e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return !t || ('object' !== typeof t && 'function' !== typeof t)
                ? e
                : t;
            })(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
            oe.call(n);
            var r = e.activeKey,
              o = e.defaultActiveKey;
            return (
              'activeKey' in e && (o = r),
              (n.state = {
                openAnimation: e.openAnimation || G(e.prefixCls),
                activeKey: ne(o),
              }),
              n
            );
          }
          return (
            (function (e, t) {
              if ('function' !== typeof t && null !== t)
                throw new TypeError(
                  'Super expression must either be null or a function, not ' +
                    typeof t
                );
              (e.prototype = Object.create(t && t.prototype, {
                constructor: {
                  value: e,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })),
                t &&
                  (Object.setPrototypeOf
                    ? Object.setPrototypeOf(e, t)
                    : (e.__proto__ = t));
            })(t, e),
            ee(
              t,
              [
                {
                  key: 'shouldComponentUpdate',
                  value: function (e, t) {
                    return !s()(this.props, e) || !s()(this.state, t);
                  },
                },
                {
                  key: 'render',
                  value: function () {
                    var e,
                      t = this.props,
                      n = t.prefixCls,
                      r = t.className,
                      i = t.style,
                      c = t.accordion,
                      s = a()((te((e = {}), n, !0), te(e, r, !!r), e));
                    return o.a.createElement(
                      'div',
                      { className: s, style: i, role: c ? 'tablist' : null },
                      this.getItems()
                    );
                  },
                },
              ],
              [
                {
                  key: 'getDerivedStateFromProps',
                  value: function (e) {
                    var t = {};
                    return (
                      'activeKey' in e && (t.activeKey = ne(e.activeKey)),
                      'openAnimation' in e &&
                        (t.openAnimation = e.openAnimation),
                      t.activeKey || t.openAnimation ? t : null
                    );
                  },
                },
              ]
            ),
            t
          );
        })(r.Component),
        oe = function () {
          var e = this;
          (this.onClickItem = function (t) {
            var n = e.state.activeKey;
            if (e.props.accordion) n = n[0] === t ? [] : [t];
            else {
              var r = (n = [].concat(
                (function (e) {
                  if (Array.isArray(e)) {
                    for (var t = 0, n = Array(e.length); t < e.length; t++)
                      n[t] = e[t];
                    return n;
                  }
                  return Array.from(e);
                })(n)
              )).indexOf(t);
              r > -1 ? n.splice(r, 1) : n.push(t);
            }
            e.setActiveKey(n);
          }),
            (this.getNewChild = function (t, n) {
              if (!t) return null;
              var r = e.state.activeKey,
                i = e.props,
                a = i.prefixCls,
                c = i.accordion,
                s = i.destroyInactivePanel,
                u = i.expandIcon,
                l = t.key || String(n),
                p = t.props,
                f = p.header,
                d = p.headerClass,
                m = p.disabled,
                v = {
                  key: l,
                  panelKey: l,
                  header: f,
                  headerClass: d,
                  isActive: c ? r[0] === l : r.indexOf(l) > -1,
                  prefixCls: a,
                  destroyInactivePanel: s,
                  openAnimation: e.state.openAnimation,
                  accordion: c,
                  children: t.props.children,
                  onItemClick: m ? null : e.onClickItem,
                  expandIcon: u,
                };
              return 'string' === typeof t.type ? t : o.a.cloneElement(t, v);
            }),
            (this.getItems = function () {
              var t = e.props.children,
                n = Object(X.isFragment)(t) ? t.props.children : t,
                i = r.Children.map(n, e.getNewChild);
              return Object(X.isFragment)(t)
                ? o.a.createElement(o.a.Fragment, null, i)
                : i;
            }),
            (this.setActiveKey = function (t) {
              'activeKey' in e.props || e.setState({ activeKey: t }),
                e.props.onChange(e.props.accordion ? t[0] : t);
            });
        };
      (re.defaultProps = {
        prefixCls: 'rc-collapse',
        onChange: function () {},
        accordion: !1,
        destroyInactivePanel: !1,
      }),
        (re.Panel = Z);
      var ie = re,
        ae = ((t.b = ie), ie.Panel);
    },
    bOkD: function (e, t, n) {
      var r = n('cHE3');
      e.exports = function (e) {
        if (Array.isArray(e)) return r(e);
      };
    },
    dq4L: function (e, t, n) {
      'use strict';
      (t.__esModule = !0),
        (t.isInAmpMode = a),
        (t.useAmp = function () {
          return a(o.default.useContext(i.AmpStateContext));
        });
      var r,
        o = (r = n('ERkP')) && r.__esModule ? r : { default: r },
        i = n('TZT2');
      function a() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = e.ampFirst,
          n = void 0 !== t && t,
          r = e.hybrid,
          o = void 0 !== r && r,
          i = e.hasQuery;
        return n || (o && void 0 !== i && i);
      }
    },
    'iN+R': function (e, t, n) {
      var r = n('bOkD'),
        o = n('DSo7'),
        i = n('D7XE'),
        a = n('uYlf');
      e.exports = function (e) {
        return r(e) || o(e) || i(e) || a();
      };
    },
    'op+c': function (e, t, n) {
      'use strict';
      var r;
      (t.__esModule = !0), (t.HeadManagerContext = void 0);
      var o = ((r = n('ERkP')) && r.__esModule
        ? r
        : { default: r }
      ).default.createContext(null);
      t.HeadManagerContext = o;
    },
    uYlf: function (e, t) {
      e.exports = function () {
        throw new TypeError(
          'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
        );
      };
    },
    ysqo: function (e, t, n) {
      'use strict';
      (t.__esModule = !0), (t.defaultHead = u), (t.default = void 0);
      var r = s(n('ERkP')),
        o = s(n('J9Yr')),
        i = n('TZT2'),
        a = n('op+c'),
        c = n('dq4L');
      function s(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function u() {
        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          t = [r.default.createElement('meta', { charSet: 'utf-8' })];
        return (
          e ||
            t.push(
              r.default.createElement('meta', {
                name: 'viewport',
                content: 'width=device-width',
              })
            ),
          t
        );
      }
      function l(e, t) {
        return 'string' === typeof t || 'number' === typeof t
          ? e
          : t.type === r.default.Fragment
          ? e.concat(
              r.default.Children.toArray(t.props.children).reduce(function (
                e,
                t
              ) {
                return 'string' === typeof t || 'number' === typeof t
                  ? e
                  : e.concat(t);
              },
              [])
            )
          : e.concat(t);
      }
      var p = ['name', 'httpEquiv', 'charSet', 'itemProp'];
      function f(e, t) {
        return e
          .reduce(function (e, t) {
            var n = r.default.Children.toArray(t.props.children);
            return e.concat(n);
          }, [])
          .reduce(l, [])
          .reverse()
          .concat(u(t.inAmpMode))
          .filter(
            (function () {
              var e = new Set(),
                t = new Set(),
                n = new Set(),
                r = {};
              return function (o) {
                var i = !0;
                if (
                  o.key &&
                  'number' !== typeof o.key &&
                  o.key.indexOf('$') > 0
                ) {
                  var a = o.key.slice(o.key.indexOf('$') + 1);
                  e.has(a) ? (i = !1) : e.add(a);
                }
                switch (o.type) {
                  case 'title':
                  case 'base':
                    t.has(o.type) ? (i = !1) : t.add(o.type);
                    break;
                  case 'meta':
                    for (var c = 0, s = p.length; c < s; c++) {
                      var u = p[c];
                      if (o.props.hasOwnProperty(u))
                        if ('charSet' === u) n.has(u) ? (i = !1) : n.add(u);
                        else {
                          var l = o.props[u],
                            f = r[u] || new Set();
                          f.has(l) ? (i = !1) : (f.add(l), (r[u] = f));
                        }
                    }
                }
                return i;
              };
            })()
          )
          .reverse()
          .map(function (e, t) {
            var n = e.key || t;
            return r.default.cloneElement(e, { key: n });
          });
      }
      var d = (0, o.default)();
      function m(e) {
        var t = e.children;
        return r.default.createElement(
          i.AmpStateContext.Consumer,
          null,
          function (e) {
            return r.default.createElement(
              a.HeadManagerContext.Consumer,
              null,
              function (n) {
                return r.default.createElement(
                  d,
                  {
                    reduceComponentsToState: f,
                    handleStateChange: n,
                    inAmpMode: (0, c.isInAmpMode)(e),
                  },
                  t
                );
              }
            );
          }
        );
      }
      m.rewind = d.rewind;
      var v = m;
      t.default = v;
    },
  },
]);
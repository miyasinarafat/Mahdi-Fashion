(window.webpackJsonp = window.webpackJsonp || []).push([
  [47],
  {
    qr0j: function (n, e, l) {
      'use strict';
      l.r(e);
      var a = l('ERkP'),
        t = l.n(a),
        r = l('dFr0'),
        i = l('ZhUJ'),
        u = t.a.createElement;
      e.default = function (n) {
        var e = n.title,
          l = n.image,
          a = n.discountInPercent,
          c = n.onClick;
        return u(
          i.g,
          { onClick: c, className: 'furniture-card' },
          u(
            i.h,
            null,
            u(r.a, {
              url: l,
              className: 'product-image',
              style: { position: 'relative' },
              alt: e,
            }),
            a ? u(t.a.Fragment, null, u(i.f, null, a, '%')) : ''
          ),
          u(i.i, null, u(i.j, null, e))
        );
      };
    },
  },
]);
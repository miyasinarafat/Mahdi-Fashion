(window.webpackJsonp = window.webpackJsonp || []).push([
  [44],
  {
    Ek28: function (a, e, n) {
      'use strict';
      var t = n('ERkP'),
        i = n.n(t),
        s = n('j/s1'),
        l = n('jvFD'),
        r = n.n(l),
        o = n('7xIC'),
        c = n('2SGB'),
        u = i.a.createElement,
        d = s.e.span.withConfig({
          displayName: 'nav-link__Icon',
          componentId: 'sc-6likiw-0',
        })([
          'min-width:16px;margin-right:10px;display:flex;align-items:center;justify-content:center;',
        ]);
      e.a = Object(o.withRouter)(function (a) {
        var e = a.href,
          n = a.label,
          t = a.intlId,
          i = a.router,
          s = a.icon,
          l = a.className,
          o = a.onClick,
          m = a.iconClass,
          f = a.dynamic,
          p = i.pathname === e || i.asPath === e;
        return u(
          'div',
          { onClick: o, className: l || '' },
          u(
            r.a,
            f ? { href: '/[type]', as: e } : { href: e },
            u(
              'a',
              {
                className: p ? ' current-page' : '',
                style: { display: 'flex', alignItems: 'center' },
              },
              s ? u(d, { className: m }, s) : '',
              u(
                'span',
                { className: 'label' },
                t
                  ? u(c.a, { id: t || 'defaultNavLinkId', defaultMessage: n })
                  : n
              )
            )
          )
        );
      });
    },
    IQ03: function (a, e, n) {
      'use strict';
      n.r(e);
      var t = n('ERkP'),
        i = n.n(t),
        s = n('B68Z'),
        l = n('2SGB'),
        r = n('63jn'),
        o = n('Ek28'),
        c = n('5l48'),
        u = i.a.createElement,
        d = function (a) {
          var e = a.onLogout;
          return u(
            i.a.Fragment,
            null,
            c.a.map(function (a, e) {
              return u(o.a, {
                key: e,
                className: 'menu-item',
                href: a.href,
                label: a.defaultMessage,
                intlId: a.id,
              });
            }),
            u(
              'div',
              { className: 'menu-item', onClick: e },
              u(
                'a',
                null,
                u(
                  'span',
                  null,
                  u(l.a, { id: 'navlinkLogout', defaultMessage: 'Logout' })
                )
              )
            )
          );
        },
        m = i.a.createElement;
      e.default = function (a) {
        var e = a.isAuthenticated,
          n = a.onJoin,
          t = a.onLogout,
          i = a.avatar;
        return e
          ? m(r.a, {
              direction: 'right',
              className: 'user-pages-dropdown',
              handler: m('img', { src: i, alt: 'user' }),
              content: m(d, { onLogout: t }),
            })
          : m(
              s.a,
              { variant: 'primary', onClick: n },
              m(l.a, { id: 'joinButton', defaultMessage: 'join' })
            );
      };
    },
  },
]);
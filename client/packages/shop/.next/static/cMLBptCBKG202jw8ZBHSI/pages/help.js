(window.webpackJsonp = window.webpackJsonp || []).push([
  [25],
  {
    OBVT: function (e, t, i) {
      'use strict';
      function o() {
        return (o =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var i = arguments[t];
              for (var o in i)
                Object.prototype.hasOwnProperty.call(i, o) && (e[o] = i[o]);
            }
            return e;
          }).apply(this, arguments);
      }
      var r = function (e, t, i, o, r) {
          for (t = t && t.split ? t.split('.') : [t], o = 0; o < t.length; o++)
            e = e ? e[t[o]] : r;
          return e === r ? i : e;
        },
        a = [40, 52, 64].map(function (e) {
          return e + 'em';
        }),
        n = {
          space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
          fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72],
        },
        d = {
          bg: 'backgroundColor',
          m: 'margin',
          mt: 'marginTop',
          mr: 'marginRight',
          mb: 'marginBottom',
          ml: 'marginLeft',
          mx: 'marginX',
          my: 'marginY',
          p: 'padding',
          pt: 'paddingTop',
          pr: 'paddingRight',
          pb: 'paddingBottom',
          pl: 'paddingLeft',
          px: 'paddingX',
          py: 'paddingY',
        },
        s = {
          marginX: ['marginLeft', 'marginRight'],
          marginY: ['marginTop', 'marginBottom'],
          paddingX: ['paddingLeft', 'paddingRight'],
          paddingY: ['paddingTop', 'paddingBottom'],
          size: ['width', 'height'],
        },
        l = {
          color: 'colors',
          backgroundColor: 'colors',
          borderColor: 'colors',
          margin: 'space',
          marginTop: 'space',
          marginRight: 'space',
          marginBottom: 'space',
          marginLeft: 'space',
          marginX: 'space',
          marginY: 'space',
          padding: 'space',
          paddingTop: 'space',
          paddingRight: 'space',
          paddingBottom: 'space',
          paddingLeft: 'space',
          paddingX: 'space',
          paddingY: 'space',
          top: 'space',
          right: 'space',
          bottom: 'space',
          left: 'space',
          gridGap: 'space',
          gridColumnGap: 'space',
          gridRowGap: 'space',
          gap: 'space',
          columnGap: 'space',
          rowGap: 'space',
          fontFamily: 'fonts',
          fontSize: 'fontSizes',
          fontWeight: 'fontWeights',
          lineHeight: 'lineHeights',
          letterSpacing: 'letterSpacings',
          border: 'borders',
          borderTop: 'borders',
          borderRight: 'borders',
          borderBottom: 'borders',
          borderLeft: 'borders',
          borderWidth: 'borderWidths',
          borderStyle: 'borderStyles',
          borderRadius: 'radii',
          borderTopRightRadius: 'radii',
          borderTopLeftRadius: 'radii',
          borderBottomRightRadius: 'radii',
          borderBottomLeftRadius: 'radii',
          borderTopWidth: 'borderWidths',
          borderTopColor: 'colors',
          borderTopStyle: 'borderStyles',
          borderBottomWidth: 'borderWidths',
          borderBottomColor: 'colors',
          borderBottomStyle: 'borderStyles',
          borderLeftWidth: 'borderWidths',
          borderLeftColor: 'colors',
          borderLeftStyle: 'borderStyles',
          borderRightWidth: 'borderWidths',
          borderRightColor: 'colors',
          borderRightStyle: 'borderStyles',
          outlineColor: 'colors',
          boxShadow: 'shadows',
          textShadow: 'shadows',
          zIndex: 'zIndices',
          width: 'sizes',
          minWidth: 'sizes',
          maxWidth: 'sizes',
          height: 'sizes',
          minHeight: 'sizes',
          maxHeight: 'sizes',
          flexBasis: 'sizes',
          size: 'sizes',
          fill: 'colors',
          stroke: 'colors',
        },
        p = function (e, t) {
          if ('number' !== typeof t || t >= 0) return r(e, t, t);
          var i = Math.abs(t),
            o = r(e, i, i);
          return 'string' === typeof o ? '-' + o : -1 * o;
        },
        c = [
          'margin',
          'marginTop',
          'marginRight',
          'marginBottom',
          'marginLeft',
          'marginX',
          'marginY',
          'top',
          'bottom',
          'left',
          'right',
        ].reduce(function (e, t) {
          var i;
          return o({}, e, (((i = {})[t] = p), i));
        }, {});
      t.a = function e(t) {
        return function (i) {
          void 0 === i && (i = {});
          var p = o({}, n, {}, i.theme || i),
            g = {},
            f = (function (e) {
              return function (t) {
                var i = {},
                  o = r(t, 'breakpoints', a),
                  n = [null].concat(
                    o.map(function (e) {
                      return '@media screen and (min-width: ' + e + ')';
                    })
                  );
                for (var d in e) {
                  var s = 'function' === typeof e[d] ? e[d](t) : e[d];
                  if (null != s)
                    if (Array.isArray(s))
                      for (var l = 0; l < s.slice(0, n.length).length; l++) {
                        var p = n[l];
                        p
                          ? ((i[p] = i[p] || {}),
                            null != s[l] && (i[p][d] = s[l]))
                          : (i[d] = s[l]);
                      }
                    else i[d] = s;
                }
                return i;
              };
            })('function' === typeof t ? t(p) : t)(p);
          for (var h in f) {
            var m = f[h],
              u = 'function' === typeof m ? m(p) : m;
            if ('variant' !== h)
              if (u && 'object' === typeof u) g[h] = e(u)(p);
              else {
                var b = r(d, h, h),
                  x = r(l, b),
                  v = r(p, x, r(p, b, {})),
                  w = r(c, b, r)(v, u, u);
                if (s[b])
                  for (var y = s[b], T = 0; T < y.length; T++) g[y[T]] = w;
                else g[b] = w;
              }
            else g = o({}, g, {}, e(r(p, u))(p));
          }
          return g;
        };
      };
    },
    'pO+E': function (e, t, i) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/help',
        function () {
          return i('vj21');
        },
      ]);
    },
    vj21: function (e, t, i) {
      'use strict';
      i.r(t),
        i.d(t, 'HelpPageContainer', function () {
          return j;
        });
      var o = i('ERkP'),
        r = i.n(o),
        a = i('j/s1'),
        n = i('VU+f'),
        d = i('H8eV'),
        s = i('OBVT'),
        l = i('2SGB'),
        p = r.a.createElement,
        c = a.e.div.withConfig({
          displayName: 'footer__Box',
          componentId: 'bwvxm8-0',
        })(
          Object(s.a)({
            fontFamily: 'body',
            fontSize: 'sm',
            fontWeight: 'regular',
            color: 'text.regular',
            px: 20,
            a: { color: 'primary.regular' },
          }),
          {
            marginTop: 50,
            width: '100%',
            textAlign: 'center',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }
        ),
        g = function () {
          return p(
            c,
            null,
            p(l.a, {
              id: 'siteFooter',
              defaultMessage: 'Mahdi Fashion is a product of',
            }),
            '\xa0',
            p('a', { href: '#', target: '_blank' }, 'Mahdi Fashion')
          );
        },
        f = i('bJOg'),
        h = i('tZdC'),
        m = a.e.div.withConfig({
          displayName: 'accordionstyle__AccordionWrapper',
          componentId: 'sc-15f0w9t-0',
        })(
          [
            '.rc-collapse{background-color:transparent;border-radius:0;border:0;> .rc-collapse-item{margin-bottom:5px;border-width:1px;border-style:solid;border-color:',
            ';border-image:initial;border-radius:',
            ';background-color:',
            ';overflow:hidden;> .rc-collapse-header{display:flex;align-items:center;padding:23px 30px;padding-right:25px;cursor:pointer;outline:0;position:relative;justify-content:space-between;i{order:2;width:22px;height:22px;flex-shrink:0;color:',
            ';display:flex;align-items:center;justify-content:center;}h3{margin-top:0px;margin-bottom:0px;font-family:',
            ';font-size:',
            'px;font-weight:',
            ';color:',
            ';line-height:',
            ';}}.rc-collapse-content{padding:0px;> .rc-collapse-content-box{box-sizing:border-box;margin-top:0px;margin-bottom:0px;padding:0px 30px 23px;p{font-family:inherit;font-size:',
            'px;font-weight:',
            ';color:',
            ';line-height:1.75;}}}}}',
          ],
          Object(h.a)('colors.gray.500', '#f1f1f1'),
          Object(h.a)('radii.base', '6px'),
          Object(h.a)('colors.white', '#ffffff'),
          Object(h.a)('colors.text.bold', '#0D1136'),
          Object(h.a)('fonts.body', 'sans-serif'),
          Object(h.a)('fontSizes.base', '15'),
          Object(h.a)('fontWeights.bold', '700'),
          Object(h.a)('colors.text.bold', '#0D1136'),
          Object(h.a)('lineHeights.body', 1.5),
          Object(h.a)('fontSizes.base', '15'),
          Object(h.a)('fontWeights.regular', '400'),
          Object(h.a)('colors.text.regular', '#77798C')
        ),
        u = r.a.createElement;
      function b(e) {
        var t = e.isActive;
        return u(
          'i',
          null,
          t
            ? u(
                'svg',
                {
                  xmlns: 'http://www.w3.org/2000/svg',
                  width: '12',
                  height: '1.494',
                  viewBox: '0 0 12 1.494',
                },
                u('path', {
                  'data-name': '_ionicons_svg_ios-remove (4)',
                  d:
                    'M138.753,240H128.247a.747.747,0,0,0,0,1.494h10.506a.747.747,0,1,0,0-1.494Z',
                  transform: 'translate(-127.5 -240)',
                  fill: 'currentColor',
                })
              )
            : u(
                'svg',
                {
                  xmlns: 'http://www.w3.org/2000/svg',
                  width: '12',
                  height: '12',
                  viewBox: '0 0 12 12',
                },
                u('path', {
                  'data-name': '_ionicons_svg_ios-add (7)',
                  d:
                    'M138.753,132.753h-4.506v-4.506a.747.747,0,1,0-1.494,0v4.506h-4.506a.747.747,0,0,0,0,1.494h4.506v4.506a.747.747,0,1,0,1.494,0v-4.506h4.506a.747.747,0,1,0,0-1.494Z',
                  transform: 'translate(-127.5 -127.5)',
                  fill: 'currentColor',
                })
              )
        );
      }
      var x = function (e) {
          var t = e.className,
            i = e.items,
            o = void 0 === i ? [] : i;
          return u(
            m,
            null,
            u(
              f.b,
              {
                accordion: !0,
                className: 'accordion '.concat(t).trim(),
                defaultActiveKey: 'active',
                expandIcon: b,
              },
              0 !== o.length &&
                o.map(function (e) {
                  return u(
                    f.a,
                    {
                      header: u(
                        'h3',
                        null,
                        u(l.a, {
                          id: e.intlTitleId,
                          defaultMessage: 'Please add title in language file',
                        })
                      ),
                      headerClass: 'accordion-title',
                      key: e.id,
                    },
                    u(
                      'p',
                      { key: e.id },
                      u(l.a, {
                        id: e.intlDetailsId,
                        defaultMessage:
                          'Please add description in language file',
                        values: e.values ? e.values : '',
                      })
                    )
                  );
                })
            )
          );
        },
        v = r.a.createElement,
        w = [
          {
            id: 1,
            intlTitleId: 'faqNo1Title',
            intlDetailsId: 'faqNo1Desc',
            values: { number1: 7, number2: 2 },
          },
          { id: 2, intlTitleId: 'faqNo2Title', intlDetailsId: 'faqNo2Desc' },
          { id: 3, intlTitleId: 'faqNo3Title', intlDetailsId: 'faqNo3Desc' },
          { id: 4, intlTitleId: 'faqNo4Title', intlDetailsId: 'faqNo4Desc' },
        ],
        y = a.e.h3.withConfig({
          displayName: 'help__Heading',
          componentId: 'sc-4aa2pq-0',
        })([
          'font-size:21px;font-weight:700;color:#0d1136;line-height:1.2;margin-bottom:25px;width:100%;text-align:center;',
        ]),
        T = a.e.div.withConfig({
          displayName: 'help__HelpPageWrapper',
          componentId: 'sc-4aa2pq-1',
        })([
          'background-color:#f7f7f7;position:relative;padding:130px 0 60px 0;min-height:100vh;display:flex;flex-direction:column;justify-content:space-between;@media (max-width:989px){padding-top:70px;}',
        ]),
        j = a.e.div.withConfig({
          displayName: 'help__HelpPageContainer',
          componentId: 'sc-4aa2pq-2',
        })([
          'background-color:transparent;padding:0;border-radius:6px;overflow:hidden;position:relative;@media (min-width:990px){width:870px;margin-left:auto;margin-right:auto;}@media (max-width:989px){padding:30px;}',
        ]);
      t.default = function () {
        return v(
          n.a,
          null,
          v(d.a, {
            title: 'F.A.Q - Mahdi Fashion',
            description: 'F.A.Q Details',
          }),
          v(
            T,
            null,
            v(j, null, v(y, null, 'F.A.Q'), v(x, { items: w })),
            v(g, null)
          )
        );
      };
    },
  },
  [['pO+E', 1, 0, 3, 4, 6, 17]],
]);

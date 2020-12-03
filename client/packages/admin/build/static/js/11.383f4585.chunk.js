(this['webpackJsonp@pick-bazar/admin'] =
  this['webpackJsonp@pick-bazar/admin'] || []).push([
  [11, 4],
  {
    100: function (e, a, t) {
      'use strict';
      t.d(a, 'b', function () {
        return r;
      }),
        t.d(a, 'c', function () {
          return c;
        }),
        t.d(a, 'a', function () {
          return o;
        });
      var l = t(72),
        n = t(123);
      const r = Object(l.b)(n.Grid, () => ({})),
        c = Object(l.b)(n.Row, () => ({
          margin: '0 -15px 30px',
          ':last-child': { marginBottom: '0px' },
        })),
        o = Object(l.b)(n.Col, () => ({ padding: '0 15px' }));
    },
    101: function (e, a, t) {
      'use strict';
      var l = t(48),
        n = t(0),
        r = t.n(n),
        c = t(406);
      a.a = (e) => {
        let a = Object.assign({}, e);
        return r.a.createElement(
          c.a,
          Object.assign(
            {
              overrides: {
                Input: {
                  style: ({ $theme: e }) =>
                    Object(l.a)(
                      {},
                      (({ $theme: e }) =>
                        Object(l.a)(
                          { color: e.colors.textDark },
                          e.typography.fontBold14
                        ))({ $theme: e })
                    ),
                },
              },
            },
            a
          )
        );
      };
    },
    103: function (e, a, t) {
      'use strict';
      t.d(a, 'a', function () {
        return l;
      });
      const l = 'http://api.mahdifashion.com/';
      Object({
        NODE_ENV: 'production',
        PUBLIC_URL: '',
        WDS_SOCKET_HOST: void 0,
        WDS_SOCKET_PATH: void 0,
        WDS_SOCKET_PORT: void 0,
        REACT_APP_API_URL: 'http://api.mahdifashion.com/api',
        REACT_APP_IMAGE_URL: 'http://api.mahdifashion.com/',
      }).NEXT_PUBLIC_APP_IMAGE_URL;
    },
    104: function (e, a, t) {
      'use strict';
      t.d(a, 'b', function () {
        return h;
      }),
        t.d(a, 'c', function () {
          return d;
        }),
        t.d(a, 'd', function () {
          return p;
        }),
        t.d(a, 'a', function () {
          return u;
        });
      var l = t(48),
        n = t(0),
        r = t.n(n),
        c = t(394),
        o = t(72);
      const m = Object(o.b)('h3', ({ $theme: e }) =>
          Object(l.a)(
            Object(l.a)({}, e.typography.font18),
            {},
            {
              marginTop: '0',
              marginBottom: '0',
              color: e.colors.textDark,
              textAlign: 'center',
            }
          )
        ),
        i = Object(o.b)('label', ({ $theme: e }) =>
          Object(l.a)(
            Object(l.a)({}, e.typography.fontBold14),
            {},
            { marginBottom: '10px', color: e.colors.textDark }
          )
        ),
        s = Object(o.b)('span', ({ $theme: e }) =>
          Object(l.a)(
            Object(l.a)({}, e.typography.fontBold12),
            {},
            { color: e.colors.red400, marginTop: '5px', marginLeft: 'auto' }
          )
        ),
        h = ({ children: e }) =>
          r.a.createElement(
            c.a,
            {
              overrides: {
                Block: {
                  style: {
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    margin: '20px 0',
                    ':first-child': { marginTop: 0 },
                    ':last-child': { marginBottom: 0 },
                    ':only-child': { margin: 0 },
                  },
                },
              },
            },
            e
          ),
        d = ({ children: e }) => r.a.createElement(i, null, e),
        p = ({ children: e }) => r.a.createElement(m, null, e),
        u = ({ children: e }) => r.a.createElement(s, null, e);
    },
    105: function (e, a, t) {
      'use strict';
      var l = t(48),
        n = t(0),
        r = t.n(n),
        c = t(394);
      a.a = ({ overrides: e, children: a }) =>
        r.a.createElement(
          c.a,
          {
            overrides: Object(l.a)(
              {
                Block: {
                  style: {
                    width: '100%',
                    height: 'auto',
                    padding: '30px',
                    borderRadius: '3px',
                    backgroundColor: '#ffffff',
                  },
                },
              },
              e
            ),
          },
          a
        );
    },
    106: function (e, a, t) {
      'use strict';
      t.d(a, 'e', function () {
        return r;
      }),
        t.d(a, 'c', function () {
          return c;
        }),
        t.d(a, 'b', function () {
          return o;
        }),
        t.d(a, 'd', function () {
          return m;
        }),
        t.d(a, 'a', function () {
          return i;
        });
      var l = t(48),
        n = t(72);
      const r = Object(n.b)('form', ({ $theme: e }) => ({
          backgroundColor: e.colors.backgroundF7,
          paddingBottom: '100px',
        })),
        c = Object(n.b)('div', ({ $theme: e }) => ({
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          margin: '-55px 0 30px',
          position: 'fixed',
        })),
        o = Object(n.b)('h3', ({ $theme: e }) =>
          Object(l.a)(
            Object(l.a)({}, e.typography.fontBold18),
            {},
            { margin: 0, color: e.colors.textDark }
          )
        ),
        m = Object(n.b)('span', ({ $theme: e }) =>
          Object(l.a)(
            Object(l.a)({}, e.typography.font14),
            {},
            {
              padding: '28px 0 15px',
              color: e.colors.textNormal,
              display: 'block',
              '@media only screen and (max-width: 991px)': {
                padding: '30px 0',
              },
            }
          )
        ),
        i = Object(n.b)('div', ({ $theme: e }) => ({
          padding: '30px 60px',
          display: 'flex',
          alignItems: 'center',
          position: 'fixed',
          bottom: '0',
          right: '0',
          width: '100%',
          backgroundColor: '#ffffff',
          boxShadow: '0 0 3px rgba(0, 0, 0, 0.1)',
          '@media only screen and (max-width: 767px)': { padding: '20px 30px' },
        }));
    },
    107: function (e, a, t) {
      'use strict';
      t.d(a, 'b', function () {
        return w;
      }),
        t.d(a, 'a', function () {
          return x;
        });
      var l = t(0),
        n = t.n(l);
      var r = t(138);
      var c = t(153);
      var o = t(139);
      var m = t(118);
      var i = t(140);
      var s = t(154);
      var h = t(141);
      var d = t(142);
      var p = t(143),
        u = t(144);
      var f = t(155),
        E = t(145);
      var g = t(146);
      var v = t(147);
      var b = t(130);
      var M = t(148);
      const w = {
          Accessories: ({
            color: e = 'currentColor',
            width: a = '18px',
            height: t = '18px',
          }) =>
            n.a.createElement(
              'svg',
              {
                xmlns: 'http://www.w3.org/2000/svg',
                width: a,
                height: t,
                viewBox: '0 0 18 18',
              },
              n.a.createElement(
                'g',
                { 'data-name': 'Group 15', fill: e },
                n.a.createElement('path', {
                  'data-name': 'Path 53',
                  d:
                    'M17.356 0H.643A.643.643 0 000 .643v10.925a.643.643 0 00.643.643h16.714a.643.643 0 00.643-.643V.643A.644.644 0 0017.356 0zM2.431 11.27a1.306 1.306 0 111.306-1.306 1.306 1.306 0 01-1.306 1.306zm0-3.857a1.305 1.305 0 11.924-.382 1.306 1.306 0 01-.924.382zm0-3.857a1.306 1.306 0 11.925-.384 1.306 1.306 0 01-.925.384zm3.218 7.714a1.307 1.307 0 11.922-.382 1.306 1.306 0 01-.922.382zm0-3.857a1.307 1.307 0 11.922-.381 1.306 1.306 0 01-.922.381zm0-3.857a1.307 1.307 0 11.92-.385 1.306 1.306 0 01-.92.385zm3.218 7.714a1.09 1.09 0 10-.008 0zm0-3.857a1.091 1.091 0 10-.008 0zm0-3.857a1.091 1.091 0 10-.008 0zm3.218 7.714a1.1 1.1 0 10-.012 0zm-1.306-5.166a.525.525 0 11-.012 0zm1.306-2.551a1.571 1.571 0 10-.012 0zm4.8 7c0 .355-.412.643-.921.643H15.5c-.508 0-.921-.288-.921-.643V1.768c0-.355.412-.643.921-.643h.461c.508 0 .921.288.921.643z',
                }),
                n.a.createElement('path', {
                  'data-name': 'Path 54',
                  d:
                    'M16.348 2.78c-.318-1.052-.434-.893-.476-1.186-.013-.1-.346-.095-.351 0-.017.261-.15.378-.365.888-.236.562-.193 1 0 1.186h-.069v2.52a.274.274 0 00-.085.2v4.2h1.445v-4.2a.273.273 0 00-.085-.2V3.684c.106-.13.143-.393-.014-.904zm-.29 3.134h-.672V3.971h.67z',
                }),
                n.a.createElement('path', {
                  'data-name': 'Path 55',
                  d: 'M2.43 1.246a1 1 0 101 1 1 1 0 00-1-1z',
                }),
                n.a.createElement('path', {
                  'data-name': 'Path 56',
                  d: 'M12.073 1.246a1 1 0 101 1 1 1 0 00-1-1z',
                }),
                n.a.createElement('path', {
                  'data-name': 'Path 57',
                  d: 'M8.859 5.103a1 1 0 101 1 1 1 0 00-1-1z',
                }),
                n.a.createElement('path', {
                  'data-name': 'Path 58',
                  d: 'M5.645 8.96a1 1 0 101 1 1 1 0 00-1-1z',
                }),
                n.a.createElement('path', {
                  'data-name': 'Path 59',
                  d: 'M12.073 8.96a1 1 0 101 1 1 1 0 00-1-1z',
                })
              )
            ),
          AdobeIcon: ({
            color: e = 'currentColor',
            width: a = '18px',
            height: t = '18px',
          }) =>
            n.a.createElement(
              'svg',
              {
                xmlns: 'http://www.w3.org/2000/svg',
                width: a,
                height: t,
                viewBox: '0 0 20.309 18.116',
              },
              n.a.createElement(
                'g',
                { id: 'adobe-reader-symbol', transform: 'translate(0 -2.031)' },
                n.a.createElement('path', {
                  id: 'Path_3',
                  'data-name': 'Path 3',
                  d:
                    'M20.138,15.811c-.723-1.305-3.888-2.137-6.683-2.294q-.379-.406-.772-.854c-2.4-2.747-3.375-6.738-3.738-8.852-.043-.448-.091-.821-.131-1.1-.032-.221-.1-.681-.579-.681a.547.547,0,0,0-.406.183.736.736,0,0,0-.115.646c.034.277.085.649.158,1.073.2,2.147.3,6.234-1.351,9.481q-.258.508-.514.973c-3.092.9-5.587,2.5-5.953,3.833a1.314,1.314,0,0,0,.324,1.3,1.883,1.883,0,0,0,1.4.626c1.463,0,3.13-1.629,4.956-4.84a15.678,15.678,0,0,1,2.4-.442c.3-.031.8-.1,1.1-.141a15.048,15.048,0,0,1,2.744-.148c2.241,2.33,4.074,3.511,5.447,3.511a1.913,1.913,0,0,0,1.718-1.012A1.253,1.253,0,0,0,20.138,15.811ZM1.773,19.067a.822.822,0,0,1-.616-.293.239.239,0,0,1-.063-.267c.188-.685,1.771-1.859,4.084-2.711C3.872,17.858,2.621,19.067,1.773,19.067Zm8.289-5.409c-.287.044-.754.1-1.042.135a15.8,15.8,0,0,0-1.606.246l.068-.134a15.362,15.362,0,0,0,1.5-5.689,15.89,15.89,0,0,0,2.89,5.157c.035.04.071.08.105.121A14.952,14.952,0,0,0,10.062,13.658ZM19.2,16.544a.844.844,0,0,1-.8.465h0c-.858,0-2.178-.812-3.758-2.3,2.445.307,4.236,1.047,4.557,1.628A.177.177,0,0,1,19.2,16.544Z',
                  fill: e,
                })
              )
            ),
          AlertDotIcon: ({
            color: e = 'currentColor',
            width: a = '10px',
            height: t = '10px',
          }) =>
            n.a.createElement(
              'svg',
              {
                xmlns: 'http://www.w3.org/2000/svg',
                width: a,
                height: t,
                viewBox: '0 0 10 10',
              },
              n.a.createElement(
                'g',
                {
                  'data-name': 'Group 2830',
                  transform: 'translate(-1598 -32)',
                },
                n.a.createElement(
                  'g',
                  {
                    'data-name': 'Ellipse 73',
                    transform: 'translate(1598 32)',
                    fill: '#ffffff',
                    stroke: 'currentColor',
                    strokeWidth: '0.3',
                  },
                  n.a.createElement('circle', {
                    cx: '5',
                    cy: '5',
                    r: '5',
                    stroke: 'none',
                  }),
                  n.a.createElement('circle', {
                    cx: '5',
                    cy: '5',
                    r: '4.85',
                    fill: 'none',
                  })
                ),
                n.a.createElement('path', {
                  'data-name': 'Path 2700',
                  d: 'M2,0A2,2,0,1,1,0,2,2,2,0,0,1,2,0Z',
                  transform: 'translate(1601 35)',
                  fill: e,
                })
              )
            ),
          ArrowDown: r.a,
          ArrowDropDown: ({
            color: e = 'currentColor',
            width: a = '18px',
            height: t = '18px',
          }) =>
            n.a.createElement(
              'svg',
              {
                xmlns: 'http://www.w3.org/2000/svg',
                width: a,
                height: t,
                viewBox: '0 0 10 5',
              },
              n.a.createElement('path', {
                'data-name': 'Path 2030',
                d: 'M0,63.75l5,5,5-5Z',
                transform: 'translate(0 -63.75)',
                fill: e,
              })
            ),
          ArrowLeftRound: c.a,
          ArrowNext: ({
            color: e = 'currentColor',
            width: a = '18px',
            height: t = '18px',
          }) =>
            n.a.createElement(
              'svg',
              {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 512 512',
                width: a,
                height: t,
              },
              n.a.createElement('path', {
                d:
                  'M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z',
                fill: e,
                stroke: e,
              })
            ),
          ArrowPrev: ({
            color: e = 'currentColor',
            width: a = '18px',
            height: t = '18px',
          }) =>
            n.a.createElement(
              'svg',
              {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 512 512',
                width: a,
                height: t,
              },
              n.a.createElement('path', {
                d:
                  'M217.9 256L345 129c9.4-9.4 9.4-24.6 0-33.9-9.4-9.4-24.6-9.3-34 0L167 239c-9.1 9.1-9.3 23.7-.7 33.1L310.9 417c4.7 4.7 10.9 7 17 7s12.3-2.3 17-7c9.4-9.4 9.4-24.6 0-33.9L217.9 256z',
                fill: e,
                stroke: e,
              })
            ),
          ArrowUp: o.a,
          BathOil: ({
            color: e = 'currentColor',
            width: a = '18px',
            height: t = '18px',
          }) =>
            n.a.createElement(
              'svg',
              {
                xmlns: 'http://www.w3.org/2000/svg',
                width: a,
                height: t,
                viewBox: '0 0 18 18',
              },
              n.a.createElement(
                'g',
                { 'data-name': 'Group 27', fill: e },
                n.a.createElement('path', {
                  'data-name': 'Path 67',
                  d:
                    'M3.866 16.077a2.481 2.481 0 001.645-1.613h-.42q-.269 0-.531-.012a1.23 1.23 0 01-.87.755.724.724 0 10.175.863z',
                }),
                n.a.createElement('path', {
                  'data-name': 'Path 68',
                  d:
                    'M15.172 16.479a.725.725 0 10-.432-1.309 1.458 1.458 0 01-.78-.77 4.085 4.085 0 01-.686.062h-.315a2.318 2.318 0 001.543 1.579.725.725 0 00.67.438z',
                }),
                n.a.createElement('path', {
                  'data-name': 'Path 69',
                  d:
                    'M13.988 2.638l-1.482-1.482a5.015 5.015 0 00-1.356.863l1.972 1.972a4.972 4.972 0 00.866-1.353z',
                }),
                n.a.createElement('path', {
                  'data-name': 'Path 70',
                  d:
                    'M11.173 3.19a.148.148 0 00.108-.043l.208-.208a.147.147 0 00-.164-.237.15.15 0 00-.044.029l-.209.208a.148.148 0 00.108.252z',
                }),
                n.a.createElement('path', {
                  'data-name': 'Path 71',
                  d:
                    'M10.547 3.819a.148.148 0 00.108-.043l.208-.208a.148.148 0 00-.208-.208l-.208.208a.148.148 0 00.108.251z',
                }),
                n.a.createElement('path', {
                  'data-name': 'Path 72',
                  d:
                    'M9.92 4.445a.148.148 0 00.108-.043l.208-.208a.148.148 0 00-.208-.208l-.208.208a.148.148 0 00.108.251z',
                }),
                n.a.createElement('path', {
                  'data-name': 'Path 73',
                  d:
                    'M11.932 3.313a.146.146 0 00-.193-.193.15.15 0 00-.044.029l-.208.209a.148.148 0 00.209.208l.208-.209a.144.144 0 00.028-.044z',
                }),
                n.a.createElement('path', {
                  'data-name': 'Path 74',
                  d:
                    'M11.277 3.775a.148.148 0 00-.208 0l-.208.208a.148.148 0 00.209.208l.208-.208a.148.148 0 000-.208z',
                }),
                n.a.createElement('path', {
                  'data-name': 'Path 75',
                  d:
                    'M10.652 4.402a.148.148 0 00-.208 0l-.208.209a.148.148 0 00.209.208l.208-.209a.148.148 0 000-.208z',
                }),
                n.a.createElement('path', {
                  'data-name': 'Path 76',
                  d:
                    'M12.007 4.028a.148.148 0 00.108-.043l.208-.208a.143.143 0 00.029-.044.148.148 0 00-.238-.164l-.208.208a.148.148 0 000 .208.146.146 0 00.101.043z',
                }),
                n.a.createElement('path', {
                  'data-name': 'Path 77',
                  d:
                    'M11.38 4.654a.148.148 0 00.108-.043l.208-.208a.148.148 0 00-.208-.208l-.208.208a.148.148 0 00.108.251z',
                }),
                n.a.createElement('path', {
                  'data-name': 'Path 78',
                  d:
                    'M10.756 5.28a.148.148 0 00.108-.043l.208-.208a.148.148 0 00-.208-.208l-.208.208a.148.148 0 00.108.251z',
                }),
                n.a.createElement('path', {
                  'data-name': 'Path 79',
                  d:
                    'M17.414 7.083h-.886V.295a.295.295 0 00-.3-.3h-1.277a.3.3 0 00-.2.078l-1.061.976a1.175 1.175 0 00-.69.096l1.013 1.014a1.187 1.187 0 00.083-.68l.966-.888h.872v6.493H.59a.59.59 0 00-.59.591v.59a.59.59 0 00.59.59h.367c.045.229.108.491.176.794l.413 1.98a2.9 2.9 0 003.138 2.53c.134 0 .27.006.408.006h8.191a3.876 3.876 0 00.565-.041 3.157 3.157 0 002.637-2.342l.671-2.929h.3A.588.588 0 0018 8.265v-.59a.59.59 0 00-.586-.592zm-4.7 6.168a.035.035 0 000 .005v-.005z',
                })
              )
            ),
          BeautyHealth: ({
            color: e = 'currentColor',
            width: a = '18px',
            height: t = '18px',
          }) =>
            n.a.createElement(
              'svg',
              {
                xmlns: 'http://www.w3.org/2000/svg',
                width: a,
                height: t,
                viewBox: '0 0 18 18',
              },
              n.a.createElement(
                'g',
                { 'data-name': 'Group 12' },
                n.a.createElement(
                  'g',
                  { 'data-name': 'Group 11', fill: e },
                  n.a.createElement('path', {
                    'data-name': 'Path 31',
                    d:
                      'M2.662 15.865a.612.612 0 00.611.611H4.82a.612.612 0 00.611-.611v-1.368H2.662z',
                  }),
                  n.a.createElement('path', {
                    'data-name': 'Path 32',
                    d:
                      'M1.435 13.195a.793.793 0 00.791.791h3.64a.793.793 0 00.791-.791l1.015-8.766-6.614 5.507z',
                  }),
                  n.a.createElement('path', {
                    'data-name': 'Path 33',
                    d:
                      'M7.3 0H.791A.791.791 0 000 .79l.917 7.919 6.927-5.768L8.093.79a.791.791 0 00-.792-.791z',
                  }),
                  n.a.createElement('path', {
                    'data-name': 'Path 34',
                    d:
                      'M15.238 7.065a.769.769 0 00-.769-.769h-1.9a.769.769 0 00-.769.769v1.742h3.443z',
                  }),
                  n.a.createElement('path', {
                    'data-name': 'Path 35',
                    d:
                      'M16.269 9.343a2.021 2.021 0 00-.275-.02h-4.956a2.006 2.006 0 00-2 2v3.661a2 2 0 002 2h4.956a2 2 0 002.005-2v-3.66a2 2 0 00-1.731-1.985zm-2.753 5.4a1.582 1.582 0 111.582-1.582 1.582 1.582 0 01-1.582 1.582z',
                  })
                )
              )
            ),
          Beverage: ({
            color: e = 'currentColor',
            width: a = '18px',
            height: t = '18px',
          }) =>
            n.a.createElement(
              'svg',
              {
                xmlns: 'http://www.w3.org/2000/svg',
                width: a,
                height: t,
                viewBox: '0 0 18 18',
              },
              n.a.createElement(
                'g',
                { 'data-name': 'Group 9' },
                n.a.createElement('path', {
                  'data-name': 'Path 30',
                  d:
                    'M12.405.7a3.635 3.635 0 00-3.591 3.1H4.4L.811 0 .043.723l2.9 3.084H-.001l6.262 7.018v6.121H3.327V18h7.03v-1.054H7.32v-6.122l3.091-3.46a3.629 3.629 0 102-6.66zM9.817 6.442H3.771L2.358 4.863h8.87z',
                  fill: e,
                })
              )
            ),
          BookIcon: ({
            width: e = '18px',
            height: a = '18px',
            color: t = 'currentColor',
          }) =>
            n.a.createElement(
              'svg',
              {
                id: 'book',
                xmlns: 'http://www.w3.org/2000/svg',
                width: e,
                height: a,
                viewBox: '0 0 30.011 24.606',
              },
              n.a.createElement('path', {
                'data-name': 'Path 1',
                d:
                  'M243.79,21.432V0l-.818.069a31.449,31.449,0,0,0-9.533,2.324L232,2.99V24.337l1.048-.436a32.716,32.716,0,0,1,9.861-2.4Zm0,0',
                transform: 'translate(-216.459)',
                fill: t,
              }),
              n.a.createElement('path', {
                'data-name': 'Path 2',
                d:
                  'M276.924,47.3h-1.608V66.054a.536.536,0,0,1-.492.536l-1.372.113q-.594.049-1.185.122c-.128.015-.255.036-.382.054-.265.035-.53.071-.794.113-.154.025-.307.053-.46.08-.236.041-.473.082-.709.129-.161.032-.322.068-.486.1-.225.048-.449.1-.672.149-.167.04-.334.082-.5.124-.217.054-.433.111-.648.172-.168.046-.335.095-.5.144-.214.063-.426.128-.637.2l-.5.161q-.318.107-.633.221c-.161.058-.322.117-.486.178l-.22.086h12.283Zm0,0',
                transform: 'translate(-246.913 -44.129)',
                fill: t,
              }),
              n.a.createElement('path', {
                'data-name': 'Path 3',
                d:
                  'M40.818.069,40,0V21.433l.951.081a32.5,32.5,0,0,1,9.85,2.412l.988.411V2.99l-1.438-.6A31.448,31.448,0,0,0,40.818.069Zm0,0',
                transform: 'translate(-37.32)',
                fill: t,
              }),
              n.a.createElement('path', {
                'data-name': 'Path 4',
                d:
                  'M0,47.3V68.733H12.292c-.066-.026-.132-.054-.2-.078-.153-.058-.308-.114-.462-.17-.218-.079-.435-.156-.654-.229q-.238-.08-.477-.156-.326-.107-.654-.2c-.161-.047-.322-.094-.482-.139-.22-.061-.441-.119-.663-.176-.161-.041-.322-.083-.486-.121-.225-.054-.45-.1-.676-.151-.161-.035-.322-.07-.482-.1-.234-.046-.468-.087-.7-.128L5.891,67c-.259-.041-.519-.076-.779-.111-.131-.018-.262-.038-.393-.053q-.59-.071-1.179-.122L2.1,66.59a.536.536,0,0,1-.49-.536V47.3Zm0,0',
                transform: 'translate(0 -44.129)',
                fill: t,
              })
            ),
          Breakfast: ({
            color: e = 'currentColor',
            width: a = '18px',
            height: t = '18px',
          }) =>
            n.a.createElement(
              'svg',
              {
                xmlns: 'http://www.w3.org/2000/svg',
                width: a,
                height: t,
                viewBox: '0 0 18 18',
              },
              n.a.createElement(
                'g',
                { 'data-name': 'Group 7', fill: e },
                n.a.createElement('path', {
                  'data-name': 'Path 27',
                  d:
                    'M13.034 14.465c2.98-.12 4.31-1.476 4.31-3.136 0-1.442-1-2.655-3.217-3.028.01-.539.011-1.054.011-1.536H0c0 3.158 0 7.743 2.84 9.935-1.724.131-2.84.342-2.84.577 0 .4 3.163.723 7.067.723s7.066-.323 7.066-.723c0-.236-1.118-.446-2.84-.577a5.965 5.965 0 001.741-2.235zm1.035-4.79c1.243.288 1.465.9 1.451 1.687-.016.9-.276 1.508-1.973 1.712a16.339 16.339 0 00.521-3.4zM1.706 7.862h2.209c-.99 2.922.681 7.542.68 7.542-3.611-2.765-2.889-7.542-2.889-7.542z',
                }),
                n.a.createElement('path', {
                  'data-name': 'Path 28',
                  d:
                    'M8.229 4.861c.281-2.545 5.9-1.272 4.729-4.576-.18-.5-.989-.287-.808.222.514 1.449-1.437 1.625-2.432 1.958a2.92 2.92 0 00-2.328 2.4c-.061.534.774.528.839-.004z',
                }),
                n.a.createElement('path', {
                  'data-name': 'Path 29',
                  d:
                    'M12.207 3.082a2.924 2.924 0 00-2.439 1.879.419.419 0 00.807.222c.377-1.272 2.047-1.293 3.115-1.6a2.031 2.031 0 001.644-2.346c-.069-.528-.906-.539-.837 0 .195 1.472-1.16 1.579-2.29 1.845z',
                })
              )
            ),
          CaretDownIcon: m.a,
          CaretUpIcon: ({
            color: e = 'currentColor',
            width: a = '18px',
            height: t = '18px',
          }) =>
            n.a.createElement(
              'svg',
              {
                xmlns: 'http://www.w3.org/2000/svg',
                width: a,
                height: t,
                viewBox: '0 0 10 5',
              },
              n.a.createElement('path', {
                'data-name': '_ionicons_svg_md-arrow-dropdown (2)',
                d: 'M128,192l5,5,5-5Z',
                transform: 'translate(138 197) rotate(180)',
                fill: e,
              })
            ),
          CartIcon: ({
            color: e = 'currentColor',
            width: a = '18px',
            height: t = '18px',
          }) =>
            n.a.createElement(
              'svg',
              {
                xmlns: 'http://www.w3.org/2000/svg',
                width: a,
                height: t,
                viewBox: '0 0 14.4 12',
              },
              n.a.createElement(
                'g',
                {
                  'data-name': 'Group 120',
                  transform: 'translate(-288 -413.89)',
                },
                n.a.createElement('path', {
                  'data-name': 'Path 154',
                  fill: e,
                  d:
                    'M298.7,418.289l-2.906-4.148a.835.835,0,0,0-.528-.251.607.607,0,0,0-.529.251l-2.905,4.148h-3.17a.609.609,0,0,0-.661.625v.191l1.651,5.84a1.336,1.336,0,0,0,1.255.945h8.588a1.261,1.261,0,0,0,1.254-.945l1.651-5.84v-.191a.609.609,0,0,0-.661-.625Zm-5.419,0,1.984-2.767,1.98,2.767Zm1.984,5.024a1.258,1.258,0,1,1,1.319-1.258,1.3,1.3,0,0,1-1.319,1.258Zm0,0',
                })
              )
            ),
          CartIconBig: i.a,
          CategoryIcon: ({
            color: e = 'currentColor',
            width: a = '18px',
            height: t = '18px',
          }) =>
            n.a.createElement(
              'svg',
              {
                xmlns: 'http://www.w3.org/2000/svg',
                width: a,
                height: t,
                viewBox: '0 0 14 14',
              },
              n.a.createElement('path', {
                'data-name': 'Path 2029',
                d:
                  'M13.563,7.876H8.313a.437.437,0,0,0-.437.437v5.25A.437.437,0,0,0,8.313,14h5.25A.437.437,0,0,0,14,13.564V8.314A.437.437,0,0,0,13.563,7.876Zm0-7.875H8.313a.437.437,0,0,0-.437.437v5.25a.437.437,0,0,0,.437.437h5.25A.437.437,0,0,0,14,5.688V.438A.437.437,0,0,0,13.563,0ZM5.687,0H.437A.438.438,0,0,0,0,.438v5.25a.437.437,0,0,0,.437.437h5.25a.437.437,0,0,0,.437-.437V.438A.438.438,0,0,0,5.687,0Zm0,7.875H.437A.437.437,0,0,0,0,8.314v5.25A.437.437,0,0,0,.437,14h5.25a.437.437,0,0,0,.437-.437V8.314A.437.437,0,0,0,5.687,7.876Z',
                transform: 'translate(0 -0.001)',
                fill: e,
              })
            ),
          CheckMark: ({
            color: e = 'currentColor',
            width: a = '18px',
            height: t = '18px',
          }) =>
            n.a.createElement(
              'svg',
              {
                xmlns: 'http://www.w3.org/2000/svg',
                width: a,
                height: t,
                viewBox: '0 0 20.894 16',
              },
              n.a.createElement('path', {
                'data-name': '_ionicons_svg_ios-checkmark (3)',
                d:
                  'M169.184,175.473l-1.708-1.756a.367.367,0,0,0-.272-.116.352.352,0,0,0-.272.116l-11.837,11.925-4.308-4.308a.375.375,0,0,0-.543,0l-1.727,1.727a.387.387,0,0,0,0,.553l5.434,5.434a1.718,1.718,0,0,0,1.135.553,1.8,1.8,0,0,0,1.126-.534h.01l12.973-13.041A.415.415,0,0,0,169.184,175.473Z',
                transform: 'translate(-148.4 -173.6)',
                fill: e,
              })
            ),
          CloseIcon: s.a,
          CloseSquare: ({
            color: e = 'currentColor',
            width: a = '18px',
            height: t = '18px',
          }) =>
            n.a.createElement(
              'svg',
              { viewBox: '64 -65 897 897', width: a, height: t },
              n.a.createElement(
                'g',
                null,
                n.a.createElement('path', {
                  d:
                    'M717.5 589.5q-10.5 10.5 -25.5 10.5t-26 -10l-154 -155l-154 155q-11 10 -26 10t-25.5 -10.5t-10.5 -25.5t11 -25l154 -155l-154 -155q-11 -10 -11 -25t10.5 -25.5t25.5 -10.5t26 10l154 155l154 -155q11 -10 26 -10t25.5 10.5t10.5 25t-11 25.5l-154 155l154 155 q11 10 11 25t-10.5 25.5zM888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0z',
                  fill: e,
                })
              )
            ),
          CNFlag: ({ width: e = '18px', height: a = '18px' }) =>
            n.a.createElement(
              'svg',
              {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 640 480',
                width: e,
                height: a,
              },
              n.a.createElement(
                'defs',
                null,
                n.a.createElement('path', {
                  id: 'a',
                  fill: '#ffde00',
                  d: 'M-.6.8L0-1 .6.8-1-.3h2z',
                })
              ),
              n.a.createElement('path', {
                fill: '#de2910',
                d: 'M0 0h640v480H0z',
              }),
              n.a.createElement('use', {
                width: '30',
                height: '20',
                transform: 'matrix(71.9991 0 0 72 120 120)',
                xlinkHref: '#a',
              }),
              n.a.createElement('use', {
                width: '30',
                height: '20',
                transform:
                  'matrix(-12.33562 -20.5871 20.58684 -12.33577 240.3 48)',
                xlinkHref: '#a',
              }),
              n.a.createElement('use', {
                width: '30',
                height: '20',
                transform:
                  'matrix(-3.38573 -23.75998 23.75968 -3.38578 288 95.8)',
                xlinkHref: '#a',
              }),
              n.a.createElement('use', {
                width: '30',
                height: '20',
                transform: 'matrix(6.5991 -23.0749 23.0746 6.59919 288 168)',
                xlinkHref: '#a',
              }),
              n.a.createElement('use', {
                width: '30',
                height: '20',
                transform:
                  'matrix(14.9991 -18.73557 18.73533 14.99929 240 216)',
                xlinkHref: '#a',
              })
            ),
          CoinIcon: h.a,
          Cooking: ({
            color: e = 'currentColor',
            width: a = '18px',
            height: t = '18px',
          }) =>
            n.a.createElement(
              'svg',
              {
                xmlns: 'http://www.w3.org/2000/svg',
                width: a,
                height: t,
                viewBox: '0 0 18 18',
              },
              n.a.createElement(
                'g',
                { fill: e },
                n.a.createElement('path', {
                  'data-name': 'Path 22',
                  d:
                    'M13.68 6.482H9.835a.63.63 0 100-1.259H8.268a.63.63 0 000 1.259H4.417a2.327 2.327 0 00-2.127 1.98h13.52a2.328 2.328 0 00-2.13-1.98z',
                }),
                n.a.createElement('path', {
                  'data-name': 'Path 23',
                  d:
                    'M15.84 9.544v-.18H0v.9h2.256v5.578a2.16 2.16 0 002.16 2.16h9.264a2.16 2.16 0 002.16-2.16v-5.398H18v-.9z',
                }),
                n.a.createElement('path', {
                  'data-name': 'Path 24',
                  d:
                    'M5.743 2.166a3.089 3.089 0 00.2.237l.175.175c.112.112.213.224.294.321a1.464 1.464 0 01.1.137.266.266 0 01.051.112.269.269 0 01-.068.178 1.08 1.08 0 01-.2.188.636.636 0 00.309.036.544.544 0 00.336-.167.655.655 0 00.165-.4 1.1 1.1 0 00-.043-.375 1.972 1.972 0 00-.279-.572 3.125 3.125 0 00-.173-.224 1.837 1.837 0 01-.135-.176 1.679 1.679 0 01-.336-.69 1.736 1.736 0 01.157-.945 1.162 1.162 0 00-.858.873 1.4 1.4 0 00.017.7 1.888 1.888 0 00.289.6z',
                }),
                n.a.createElement('path', {
                  'data-name': 'Path 25',
                  d:
                    'M8.077 2.166c.063.083.13.162.2.237l.173.175c.112.112.213.224.3.321.039.05.073.1.1.137a.243.243 0 01.05.112.264.264 0 01-.067.178 1.041 1.041 0 01-.2.188.642.642 0 00.31.036.543.543 0 00.336-.167.653.653 0 00.165-.4 1.1 1.1 0 00-.041-.375 2 2 0 00-.28-.572c-.055-.082-.124-.165-.173-.224a1.837 1.837 0 01-.135-.176 1.679 1.679 0 01-.336-.694A1.736 1.736 0 018.63 0a1.161 1.161 0 00-.857.873 1.4 1.4 0 00.016.7 1.884 1.884 0 00.289.6z',
                }),
                n.a.createElement('path', {
                  'data-name': 'Path 26',
                  d:
                    'M10.204 2.166a2.971 2.971 0 00.2.237l.175.175c.112.112.212.224.294.321a1.465 1.465 0 01.1.137.28.28 0 01.051.112.266.266 0 01-.068.178 1.041 1.041 0 01-.2.188.64.64 0 00.309.036.547.547 0 00.336-.167.654.654 0 00.163-.4 1.086 1.086 0 00-.041-.375 1.96 1.96 0 00-.279-.572 3.125 3.125 0 00-.173-.224 1.672 1.672 0 01-.135-.176 1.679 1.679 0 01-.33-.694 1.738 1.738 0 01.151-.941A1.16 1.16 0 009.9.874a1.4 1.4 0 00.017.7 1.857 1.857 0 00.29.6z',
                })
              )
            ),
          CouponIcon: ({
            color: e = 'currentColor',
            width: a = '18px',
            height: t = '18px',
          }) =>
            n.a.createElement(
              'svg',
              {
                'data-name': 'Group 2930',
                xmlns: 'http://www.w3.org/2000/svg',
                width: a,
                height: t,
                viewBox: '0 0 11.426 13',
              },
              n.a.createElement(
                'g',
                null,
                n.a.createElement('path', {
                  'data-name': 'Path 3616',
                  d:
                    'M116.344,226.9a1.513,1.513,0,0,0-.27.027l-.982-1.113,1.958-2.219a1.526,1.526,0,0,0-.135-2.15l-2.839,3.218,0,0-.632.716h-.769l.386.439-.984,1.115a1.523,1.523,0,1,0,1.222,1.493,1.5,1.5,0,0,0-.085-.478l.862-.977.839.952a1.5,1.5,0,0,0-.093.5,1.523,1.523,0,1,0,1.523-1.523Zm-4.57,2.285a.762.762,0,1,1,.762-.762A.764.764,0,0,1,111.774,229.182Zm4.57,0a.762.762,0,1,1,.762-.762A.764.764,0,0,1,116.344,229.182Zm0,0',
                  transform: 'translate(-107.965 -216.944)',
                  fill: e,
                }),
                n.a.createElement('path', {
                  'data-name': 'Path 3617',
                  d:
                    'M4.605,0V1.574H3.844V0H-2.25V7.668H2.884l.96-1.089v-1.2h.762v.335L6.632,3.425l.571.5A2.287,2.287,0,0,1,7.409,7.15l-.457.518H9.176V0ZM1.178,3.479A1.141,1.141,0,0,1,1.559,5.7v.8H.8V5.7A1.139,1.139,0,0,1,.035,4.621H.8a.381.381,0,1,0,.381-.381A1.141,1.141,0,0,1,.8,2.024v-.83h.762v.83A1.139,1.139,0,0,1,2.32,3.1H1.559a.381.381,0,1,0-.381.381ZM4.605,4.621H3.844V3.859h.762Zm0-1.523H3.844V2.336h.762Zm0,0',
                  transform: 'translate(2.25)',
                  fill: e,
                })
              )
            ),
          CustomerIcon: ({
            color: e = 'currentColor',
            width: a = '18px',
            height: t = '18px',
          }) =>
            n.a.createElement(
              'svg',
              {
                xmlns: 'http://www.w3.org/2000/svg',
                width: a,
                height: t,
                viewBox: '0 0 12.489 13',
              },
              n.a.createElement(
                'g',
                { 'data-name': 'group (1)', transform: 'translate(0)' },
                n.a.createElement('path', {
                  'data-name': 'Path 327',
                  d:
                    'M43.356,2.708a.328.328,0,0,0,.459-.062,5.053,5.053,0,0,1,8.04,0,.328.328,0,1,0,.521-.4,5.708,5.708,0,0,0-9.081,0A.328.328,0,0,0,43.356,2.708Z',
                  transform: 'translate(-41.591)',
                  fill: e,
                }),
                n.a.createElement('path', {
                  'data-name': 'Path 328',
                  d:
                    'M228.037,79.44a1.023,1.023,0,1,0,1.023-1.023A1.024,1.024,0,0,0,228.037,79.44Z',
                  transform: 'translate(-218.311 -74.985)',
                  fill: e,
                }),
                n.a.createElement('path', {
                  'data-name': 'Path 329',
                  d:
                    'M214.438,130.872l-.26-.08a.306.306,0,0,0-.273.048l-.514.385-.514-.385a.306.306,0,0,0-.273-.048l-.26.08a1.013,1.013,0,0,0-.693.962v1.546a.3.3,0,0,0,.05.168l.519.789v2.073a.306.306,0,0,0,.306.306h1.731a.306.306,0,0,0,.306-.306v-2.073l.519-.789a.305.305,0,0,0,.05-.168v-1.546A1.013,1.013,0,0,0,214.438,130.872Z',
                  transform: 'translate(-202.642 -125.054)',
                  fill: e,
                }),
                n.a.createElement('path', {
                  'data-name': 'Path 330',
                  d:
                    'M23.247,80.463a1.023,1.023,0,1,0-1.023-1.023A1.024,1.024,0,0,0,23.247,80.463Z',
                  transform: 'translate(-21.507 -74.985)',
                  fill: e,
                }),
                n.a.createElement('path', {
                  'data-name': 'Path 331',
                  d:
                    'M8.626,130.872l-.26-.08a.306.306,0,0,0-.273.048l-.514.385-.514-.385a.306.306,0,0,0-.273-.048l-.26.08a1.013,1.013,0,0,0-.693.962v1.546a.3.3,0,0,0,.05.168l.519.789v2.073a.306.306,0,0,0,.306.306H8.445a.306.306,0,0,0,.306-.306v-2.073l.519-.789a.305.305,0,0,0,.05-.168v-1.546A1.013,1.013,0,0,0,8.626,130.872Z',
                  transform: 'translate(-5.839 -125.054)',
                  fill: e,
                }),
                n.a.createElement('path', {
                  'data-name': 'Path 332',
                  d:
                    'M121,40.028a1.319,1.319,0,1,0-1.319,1.319A1.321,1.321,0,0,0,121,40.028Z',
                  transform: 'translate(-113.433 -37.015)',
                  fill: 'currentColor',
                }),
                n.a.createElement('path', {
                  'data-name': 'Path 333',
                  d:
                    'M100.82,110.947h0l-.377-.116a.117.117,0,0,0-.144.072l-.792,2.173a.143.143,0,0,1-.269,0l-.792-2.173a.117.117,0,0,0-.11-.077c-.011,0-.411.121-.411.121a1.169,1.169,0,0,0-.8,1.11v2.3a.117.117,0,0,0,.019.064l.826,1.257v3.181a.117.117,0,0,0,.117.117h2.573a.117.117,0,0,0,.117-.117v-3.181l.826-1.257a.117.117,0,0,0,.019-.064v-2.3A1.161,1.161,0,0,0,100.82,110.947Z',
                  transform: 'translate(-93.126 -105.975)',
                  fill: e,
                }),
                n.a.createElement('path', {
                  'data-name': 'Path 334',
                  d:
                    'M141.079,111.386a.174.174,0,0,0-.129-.054h-.361a.174.174,0,0,0-.129.054.167.167,0,0,0-.022.2l.193.291-.09.762.178.473a.054.054,0,0,0,.1,0l.178-.473-.09-.762.193-.291A.167.167,0,0,0,141.079,111.386Z',
                  transform: 'translate(-134.525 -106.459)',
                  fill: e,
                })
              )
            ),
          Dairy: ({
            color: e = 'currentColor',
            width: a = '18px',
            height: t = '18px',
          }) =>
            n.a.createElement(
              'svg',
              {
                xmlns: 'http://www.w3.org/2000/svg',
                width: a,
                height: t,
                viewBox: '0 0 18 18',
              },
              n.a.createElement(
                'g',
                { fill: e },
                n.a.createElement('path', {
                  'data-name': 'Path 19',
                  d:
                    'M4.313 14.945V12.23a.34.34 0 00-.34-.34H.332a5.534 5.534 0 00-.125 3.393h3.767a.34.34 0 00.339-.338z',
                }),
                n.a.createElement('path', {
                  'data-name': 'Path 20',
                  d:
                    'M7.652 16.402l.345-.4a3.843 3.843 0 00-.065-4.593l-.223-.278V9.176a1.876 1.876 0 01-.21-.465 1.015 1.015 0 00-.462-1.925H2.968a1.018 1.018 0 00-.391 1.958A2.656 2.656 0 011.7 9.93a4.641 4.641 0 00-1.056 1.282h3.331a1.019 1.019 0 011.014 1.017v2.714a1.019 1.019 0 01-1.018 1.018H.462A3.259 3.259 0 003.41 18h3.261a3.056 3.056 0 001.428-.36 2.313 2.313 0 01-.321-.723zM3.689 8.147h-.722a.34.34 0 010-.678h4.07a.34.34 0 110 .678H3.682z',
                }),
                n.a.createElement('path', {
                  'data-name': 'Rectangle 1',
                  d: 'M13.136 7.14h3.732v7.465h-3.732z',
                }),
                n.a.createElement('path', {
                  'data-name': 'Path 21',
                  d:
                    'M15.237 3.144l-.25-.21a.4.4 0 01-.13-.321.547.547 0 01.062-.221h-2.368a.34.34 0 010-.678h2.886a1.006 1.006 0 00.071-.353v-.343A1.019 1.019 0 0014.492 0H10.76a1.019 1.019 0 00-1.018 1.018v.34a1 1 0 00.072.353h1.38a.34.34 0 010 .678h-.838a.546.546 0 01.073.2.355.355 0 01-.081.284.68.68 0 01-.063.063c-.077.066-.158.133-.241.2a3.638 3.638 0 00-1.657 2.967v4.786l.074.092a4.507 4.507 0 01.049 5.461l-.115.133.042.171a1.619 1.619 0 001.572 1.233h5.24a1.623 1.623 0 001.622-1.622v-1.074h-4.414V6.462h4.411v-.355a3.645 3.645 0 00-1.631-2.963z',
                })
              )
            ),
          DashboardIcon: ({
            color: e = 'currentColor',
            width: a = '18px',
            height: t = '18px',
          }) =>
            n.a.createElement(
              'svg',
              {
                xmlns: 'http://www.w3.org/2000/svg',
                width: a,
                height: t,
                viewBox: '0 0 15 15',
              },
              n.a.createElement(
                'g',
                { 'data-name': 'Group 2583', transform: 'translate(0 0)' },
                n.a.createElement('path', {
                  'data-name': 'Path 2129',
                  d:
                    'M1667.731,877.683a3.066,3.066,0,1,1-3.067-3.068A3.061,3.061,0,0,1,1667.731,877.683Z',
                  transform: 'translate(-1652.731 -865.747)',
                  fill: e,
                }),
                n.a.createElement('path', {
                  'data-name': 'Path 2130',
                  d:
                    'M1471.213,874.615a3.066,3.066,0,1,1-3.072,3.064A3.06,3.06,0,0,1,1471.213,874.615Z',
                  transform: 'translate(-1468.141 -865.747)',
                  fill: e,
                }),
                n.a.createElement('path', {
                  'data-name': 'Path 2131',
                  d:
                    'M1474.272,684.227a3.066,3.066,0,1,1-3.044-3.075A3.063,3.063,0,0,1,1474.272,684.227Z',
                  transform: 'translate(-1468.14 -681.152)',
                  fill: e,
                }),
                n.a.createElement('path', {
                  'data-name': 'Path 2132',
                  d:
                    'M1674.436,691.284q0,1.143,0,2.286c0,.335-.107.441-.443.441h-4.572c-.326,0-.438-.108-.438-.43q0-2.295,0-4.589c0-.323.111-.433.435-.433h4.572c.344,0,.445.105.446.455Q1674.436,690.149,1674.436,691.284Z',
                  transform: 'translate(-1659.775 -688.219)',
                  fill: e,
                })
              )
            ),
          DEFlag: ({ width: e = '18px', height: a = '18px' }) =>
            n.a.createElement(
              'svg',
              {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 640 480',
                width: e,
                height: a,
              },
              n.a.createElement('path', {
                fill: '#ffce00',
                d: 'M0 320h640v160H0z',
              }),
              n.a.createElement('path', { d: 'M0 0h640v160H0z' }),
              n.a.createElement('path', {
                fill: '#d00',
                d: 'M0 160h640v160H0z',
              })
            ),
          DeliveryIcon: d.a,
          Deodorant: ({
            color: e = 'currentColor',
            width: a = '18px',
            height: t = '18px',
          }) =>
            n.a.createElement(
              'svg',
              {
                xmlns: 'http://www.w3.org/2000/svg',
                width: a,
                height: t,
                viewBox: '0 0 18 18',
              },
              n.a.createElement(
                'g',
                { 'data-name': '018---Roll-On', fill: e },
                n.a.createElement('ellipse', {
                  cx: '1.607',
                  cy: '3.535',
                  rx: '1.607',
                  ry: '3.535',
                  transform: 'translate(2.176 8.678)',
                }),
                n.a.createElement('path', {
                  d:
                    'M7.244 4.821H.321a.321.321 0 00-.32.356l.027.254a71.835 71.835 0 01.311 11.215A1.282 1.282 0 001.621 18h4.325a1.282 1.282 0 001.282-1.353 71.835 71.835 0 01.3-11.214l.027-.254a.321.321 0 00-.316-.358zm-6.355.962a.321.321 0 01.321-.321h.641a.321.321 0 110 .641H1.21a.321.321 0 01-.321-.32zm2.9 10.607c-1.261 0-2.25-1.832-2.25-4.178s.988-4.178 2.25-4.178 2.25 1.832 2.25 4.178-.995 4.181-2.256 4.181zM6.354 6.104H3.14a.321.321 0 110-.641h3.214a.321.321 0 110 .641z',
                }),
                n.a.createElement('path', {
                  'data-name': 'Shape',
                  d:
                    'M3.783 0a2.25 2.25 0 00-2.224 1.929h4.447A2.25 2.25 0 003.783 0zM6.443 2.572H1.128a5.946 5.946 0 00-.237 1.607h5.785a5.946 5.946 0 00-.233-1.607zM11.82 16.716h3.214v-1.284a2.893 2.893 0 10-5.786 0v1.284h.964a.321.321 0 010 .641h-.964v.321a.321.321 0 00.321.321h5.143a.321.321 0 00.321-.321v-.321H11.82a.321.321 0 110-.641zm-.964-1.929a.321.321 0 01-.641 0 1.55 1.55 0 011.606-1.608.321.321 0 110 .641.916.916 0 00-.966.964z',
                })
              )
            ),
          DressIcon: ({
            color: e = 'currentColor',
            width: a = '18px',
            height: t = '18px',
          }) =>
            n.a.createElement(
              'svg',
              {
                xmlns: 'http://www.w3.org/2000/svg',
                width: a,
                height: t,
                viewBox: '0 0 8.069 16',
              },
              n.a.createElement(
                'g',
                { 'data-name': 'Group 2483', transform: 'translate(0)' },
                n.a.createElement('path', {
                  'data-name': 'Path 2037',
                  d:
                    'M128.461,11.218c-.107-.534-.341-3.042-.9-3.875a1.286,1.286,0,0,1-.169-.714.035.035,0,0,0,0-.006c.018-.257.046-.531.065-.677,0-.026.007-.051.01-.067.014-.086.033-.171.051-.257h0a14.282,14.282,0,0,0,.458-2.441c0-1.27-.651-1.644-.651-1.644.224-.95.384-1.462.384-1.462L127.522,0a9.387,9.387,0,0,0-.427,1.526,2.588,2.588,0,0,1-1.921.619,2.59,2.59,0,0,1-1.921-.619A9.4,9.4,0,0,0,122.825,0l-.192.075s.16.512.384,1.462c0,0-.651.374-.651,1.644a13.042,13.042,0,0,0,.437,2.339.086.086,0,0,0,0,.035c0,.008.006.019.009.031l.006.024c.027.109.066.3.072.311.013.077.027.216.039.358.005.049.009.1.012.145.005.068.01.132.014.184h-.006a1.3,1.3,0,0,1-.17.735c-.555.833-.79,3.341-.9,3.874s-.363,2.5-.491,3.074-.256,1.367-.256,1.367a3.288,3.288,0,0,0,1.068.128s-.075.224.576.16a12.831,12.831,0,0,1,1.75-.054c.448.021.135.107.64.107s.192-.085.64-.107a12.79,12.79,0,0,1,1.751.054c.651.064.576-.16.576-.16a3.3,3.3,0,0,0,1.067-.128s-.128-.79-.256-1.367S128.568,11.752,128.461,11.218Zm-1.139-5.467c-.05.069-.094.177-.036.224-.015.1-.024.206-.034.309-.058-.066-.243-.006-.243-.006-.138-.06.121.3.226.161,0,.058-.006.115-.009.173-.126-.009-.253-.018-.38-.025a.586.586,0,0,0-.061-.133c.014-.1-.1.014-.134.122-.273-.011-.547-.016-.822-.018-.057-.068-.244-.007-.244-.007-.028-.012-.04-.007-.039.008h-.028a.13.13,0,0,0,.015-.059.135.135,0,0,0-.27,0,.133.133,0,0,0,.015.06c-.361,0-.721.012-1.081.021a.7.7,0,0,0-.037-.069c.012-.082-.065-.015-.112.073l-.184,0a.436.436,0,0,0,.1-.178c.137-.086-.384-.065-.241.134a.182.182,0,0,0,.045.046l-.151,0a.078.078,0,0,0,0-.109c-.121-.176-.212.084-.222.114l-.263.006c0-.024,0-.048,0-.072.065-.01.28-.273.075-.315a.151.151,0,0,0-.1,0c-.01-.115-.024-.229-.043-.342a.6.6,0,0,0,.052-.12c.06-.037,0-.054-.085-.046-.01-.044-.022-.087-.035-.13l.2,0a.135.135,0,1,0,.26.051.132.132,0,0,0-.012-.055l.926-.017a.085.085,0,0,0,0,.117c.127.177.217-.064.236-.122l.426,0c.066.084.2.175.246.038a.184.184,0,0,0,.008-.041c.208,0,.417,0,.624,0a.133.133,0,0,0-.03.082.135.135,0,1,0,.27,0,.132.132,0,0,0-.029-.08c.342.006.681.022,1.021.042-.1.013-.226.069-.147.179.143.2.241-.134.241-.134.026-.016.028-.029.016-.037l.091.006s0,.005.007.007C127.34,5.661,127.331,5.706,127.322,5.751Z',
                  transform: 'translate(-121.139)',
                  fill: e,
                }),
                n.a.createElement('path', {
                  'data-name': 'Path 2038',
                  d:
                    'M254.937,189.152c-.128.076.352.067.224-.119S254.937,189.152,254.937,189.152Z',
                  transform: 'translate(-250.536 -182.787)',
                  fill: e,
                }),
                n.a.createElement('path', {
                  'data-name': 'Path 2039',
                  d:
                    'M237.086,189.725c-.088.209.221.124.221.124C237.441,189.916,237.175,189.516,237.086,189.725Z',
                  transform: 'translate(-233.276 -183.455)',
                  fill: e,
                }),
                n.a.createElement('path', {
                  'data-name': 'Path 2040',
                  d:
                    'M246.479,182.469c-.253-.051-.088.275-.088.275C246.346,182.908,246.731,182.52,246.479,182.469Z',
                  transform: 'translate(-242.24 -176.491)',
                  fill: e,
                }),
                n.a.createElement('path', {
                  'data-name': 'Path 2041',
                  d:
                    'M274.916,173.035c.084-.231-.247-.122-.247-.122C274.521,172.847,274.832,173.266,274.916,173.035Z',
                  transform: 'translate(-269.605 -167.228)',
                  fill: e,
                }),
                n.a.createElement('path', {
                  'data-name': 'Path 2042',
                  d:
                    'M264.6,178.247c.245.021.054-.27.054-.27C264.673,177.816,264.35,178.226,264.6,178.247Z',
                  transform: 'translate(-259.81 -172.115)',
                  fill: e,
                }),
                n.a.createElement('path', {
                  'data-name': 'Path 2043',
                  d:
                    'M255.758,174.715c.143.2.241-.134.241-.134C256.136,174.495,255.615,174.515,255.758,174.715Z',
                  transform: 'translate(-251.328 -168.82)',
                  fill: e,
                }),
                n.a.createElement('circle', {
                  'data-name': 'Ellipse 71',
                  cx: '0.135',
                  cy: '0.135',
                  r: '0.135',
                  transform: 'translate(2.892 6.148)',
                  fill: e,
                }),
                n.a.createElement('path', {
                  'data-name': 'Path 2044',
                  d:
                    'M218.467,182.406c-.128-.187-.224.119-.224.119C218.114,182.6,218.595,182.592,218.467,182.406Z',
                  transform: 'translate(-215.043 -176.377)',
                  fill: e,
                }),
                n.a.createElement('path', {
                  'data-name': 'Path 2045',
                  d:
                    'M219.072,192.782c-.148-.065.163.354.247.123S219.072,192.782,219.072,192.782Z',
                  transform: 'translate(-215.828 -186.447)',
                  fill: e,
                }),
                n.a.createElement('path', {
                  'data-name': 'Path 2046',
                  d:
                    'M199.506,183.093c-.088.209.221.124.221.124C199.86,183.284,199.594,182.885,199.506,183.093Z',
                  transform: 'translate(-196.925 -177.041)',
                  fill: e,
                }),
                n.a.createElement('path', {
                  'data-name': 'Path 2047',
                  d:
                    'M208.891,175.836c-.253-.051-.088.275-.088.275C208.758,176.276,209.143,175.887,208.891,175.836Z',
                  transform: 'translate(-205.882 -170.076)',
                  fill: e,
                }),
                n.a.createElement('path', {
                  'data-name': 'Path 2048',
                  d:
                    'M289.843,186.1a.135.135,0,1,1-.135.135A.135.135,0,0,1,289.843,186.1Z',
                  transform: 'translate(-284.19 -180.009)',
                  fill: e,
                }),
                n.a.createElement('path', {
                  'data-name': 'Path 2049',
                  d:
                    'M298.459,180.79c-.128.077.352.067.224-.119S298.459,180.79,298.459,180.79Z',
                  transform: 'translate(-292.633 -174.698)',
                  fill: e,
                }),
                n.a.createElement('path', {
                  'data-name': 'Path 2050',
                  d:
                    'M279.489,192.851c.143.2.241-.134.241-.134C279.867,192.631,279.346,192.651,279.489,192.851Z',
                  transform: 'translate(-274.281 -186.362)',
                  fill: e,
                }),
                n.a.createElement('path', {
                  'data-name': 'Path 2051',
                  d:
                    'M279.72,181.364c-.088.209.221.124.221.124C280.075,181.555,279.808,181.155,279.72,181.364Z',
                  transform: 'translate(-274.514 -175.368)',
                  fill: e,
                }),
                n.a.createElement('path', {
                  'data-name': 'Path 2052',
                  d:
                    'M289.113,174.1c-.253-.051-.089.275-.089.275C288.98,174.541,289.366,174.153,289.113,174.1Z',
                  transform: 'translate(-283.478 -168.398)',
                  fill: e,
                }),
                n.a.createElement('path', {
                  'data-name': 'Path 2053',
                  d:
                    'M228.78,171.616c.245.021.054-.27.054-.27C228.858,171.185,228.535,171.6,228.78,171.616Z',
                  transform: 'translate(-225.167 -165.701)',
                  fill: e,
                }),
                n.a.createElement('path', {
                  'data-name': 'Path 2054',
                  d:
                    'M193.371,173.035c.084-.231-.247-.122-.247-.122C192.976,172.847,193.287,173.266,193.371,173.035Z',
                  transform: 'translate(-190.73 -167.228)',
                  fill: e,
                }),
                n.a.createElement('path', {
                  'data-name': 'Path 2055',
                  d:
                    'M183.052,178.247c.245.021.054-.27.054-.27C183.13,177.816,182.807,178.226,183.052,178.247Z',
                  transform: 'translate(-180.936 -172.115)',
                  fill: e,
                })
              )
            ),
          EllipsisIcon: ({
            color: e = 'currentColor',
            width: a = '18px',
            height: t = '18px',
          }) =>
            n.a.createElement(
              'svg',
              {
                xmlns: 'http://www.w3.org/2000/svg',
                width: a,
                height: t,
                viewBox: '0 0 26 6',
              },
              n.a.createElement(
                'g',
                { 'data-name': 'Group 152', transform: 'translate(589 479)' },
                n.a.createElement('ellipse', {
                  'data-name': 'Ellipse 20',
                  cx: '3.136',
                  cy: '3',
                  rx: '3.136',
                  ry: '3',
                  transform: 'translate(-589 -479)',
                  fill: e,
                }),
                n.a.createElement('ellipse', {
                  'data-name': 'Ellipse 22',
                  cx: '3.136',
                  cy: '3',
                  rx: '3.136',
                  ry: '3',
                  transform: 'translate(-569.271 -479)',
                  fill: e,
                }),
                n.a.createElement('ellipse', {
                  'data-name': 'Ellipse 21',
                  cx: '3.136',
                  cy: '3',
                  rx: '3.136',
                  ry: '3',
                  transform: 'translate(-579.136 -479)',
                  fill: e,
                })
              )
            ),
          ESFlag: ({ width: e = '18px', height: a = '18px' }) =>
            n.a.createElement(
              'svg',
              {
                xmlns: 'http://www.w3.org/2000/svg',
                id: 'flag-icon-css-es',
                viewBox: '0 0 640 480',
                width: e,
                height: a,
              },
              n.a.createElement('path', {
                fill: '#AA151B',
                d: 'M0 0h640v480H0z',
              }),
              n.a.createElement('path', {
                fill: '#F1BF00',
                d: 'M0 120h640v240H0z',
              }),
              n.a.createElement('path', {
                fill: '#ad1519',
                d:
                  'M127.3 213.3l-.8-.1-1-1-.7-.4-.6-.8s-.7-1.1-.4-2c.3-.9.9-1.2 1.4-1.5a12 12 0 011.5-.5l1-.4 1.3-.3.5-.3c.2 0 .7 0 1-.2l1-.2 1.6.1h4.8c.4 0 1.2.3 1.4.4a35 35 0 002 .7c.5.1 1.6.3 2.2.6.5.3.9.7 1.1 1l.5 1v1.1l-.5.8-.6 1-.8.6s-.5.5-1 .4c-.4 0-4.8-.8-7.6-.8s-7.3.9-7.3.9',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeLinejoin: 'round',
                strokeWidth: '.3',
                d:
                  'M127.3 213.3l-.8-.1-1-1-.7-.4-.6-.8s-.7-1.1-.4-2c.3-.9.9-1.2 1.4-1.5a12 12 0 011.5-.5l1-.4 1.3-.3.5-.3c.2 0 .7 0 1-.2l1-.2 1.6.1h4.8c.4 0 1.2.3 1.4.4a35 35 0 002 .7c.5.1 1.6.3 2.2.6.5.3.9.7 1.1 1l.5 1v1.1l-.5.8-.6 1-.8.6s-.5.5-1 .4c-.4 0-4.8-.8-7.6-.8s-7.3.9-7.3.9z',
              }),
              n.a.createElement('path', {
                fill: '#c8b100',
                d:
                  'M133.3 207c0-1.3.6-2.3 1.3-2.3.8 0 1.4 1 1.4 2.4 0 1.3-.6 2.4-1.4 2.4s-1.3-1.1-1.3-2.5',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeWidth: '.3',
                d:
                  'M133.3 207c0-1.3.6-2.3 1.3-2.3.8 0 1.4 1 1.4 2.4 0 1.3-.6 2.4-1.4 2.4s-1.3-1.1-1.3-2.5z',
              }),
              n.a.createElement('path', {
                fill: '#c8b100',
                d:
                  'M134 207c0-1.2.3-2.1.7-2.1.3 0 .6 1 .6 2.1 0 1.3-.3 2.2-.6 2.2-.4 0-.6-1-.6-2.2',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeWidth: '.3',
                d:
                  'M134 207c0-1.2.3-2.1.7-2.1.3 0 .6 1 .6 2.1 0 1.3-.3 2.2-.6 2.2-.4 0-.6-1-.6-2.2z',
              }),
              n.a.createElement('path', {
                fill: '#c8b100',
                d:
                  'M133.8 204.5c0-.4.4-.8.8-.8s1 .4 1 .8c0 .5-.5.9-1 .9s-.8-.4-.8-.9',
              }),
              n.a.createElement('path', {
                fill: '#c8b100',
                d:
                  'M135.3 204.2v.6h-1.4v-.6h.5V203h-.7v-.6h.7v-.5h.5v.5h.6v.6h-.6v1.2h.4',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeWidth: '.3',
                d:
                  'M135.3 204.2v.6h-1.4v-.6h.5V203h-.7v-.6h.7v-.5h.5v.5h.6v.6h-.6v1.2h.4',
              }),
              n.a.createElement('path', {
                fill: '#c8b100',
                d:
                  'M135.9 204.2v.6h-2.5v-.6h1V203h-.7v-.6h.7v-.5h.5v.5h.6v.6h-.6v1.2h1',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeWidth: '.3',
                d:
                  'M135.9 204.2v.6h-2.5v-.6h1V203h-.7v-.6h.7v-.5h.5v.5h.6v.6h-.6v1.2h1',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeWidth: '.3',
                d:
                  'M134.9 203.7c.4.1.6.4.6.8 0 .5-.4.9-.8.9s-1-.4-1-.9c0-.4.3-.7.7-.8',
              }),
              n.a.createElement('path', {
                fill: '#c8b100',
                d:
                  'M134.7 213.2H130v-1.1l-.3-1.2-.2-1.5c-1.3-1.7-2.5-2.8-2.9-2.5.1-.3.2-.6.5-.7 1.1-.7 3.5 1 5.2 3.6l.5.7h3.8l.4-.7c1.8-2.7 4.1-4.3 5.2-3.6.3.1.4.4.5.7-.4-.3-1.6.8-2.9 2.5l-.2 1.5-.2 1.2-.1 1.1h-4.7',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeWidth: '.3',
                d:
                  'M134.7 213.2H130v-1.1l-.3-1.2-.2-1.5c-1.3-1.7-2.5-2.8-2.9-2.5.1-.3.2-.6.5-.7 1.1-.7 3.5 1 5.2 3.6l.5.7h3.8l.4-.7c1.8-2.7 4.1-4.3 5.2-3.6.3.1.4.4.5.7-.4-.3-1.6.8-2.9 2.5l-.2 1.5-.2 1.2-.1 1.1h-4.7z',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeWidth: '.3',
                d:
                  'M126.8 206.8c1-.5 3 1.1 4.6 3.6m11-3.6c-.8-.5-2.8 1.1-4.5 3.6',
              }),
              n.a.createElement('path', {
                fill: '#c8b100',
                d:
                  'M127.8 215.3l-.5-1a27.3 27.3 0 0114.7 0l-.5.8a5.7 5.7 0 00-.3.8 22.9 22.9 0 00-6.6-.8c-2.6 0-5.2.3-6.5.8l-.3-.6',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeWidth: '.3',
                d:
                  'M127.8 215.3l-.5-1a27.3 27.3 0 0114.7 0l-.5.8a5.7 5.7 0 00-.3.8 22.9 22.9 0 00-6.6-.8c-2.6 0-5.2.3-6.5.8l-.3-.6',
              }),
              n.a.createElement('path', {
                fill: '#c8b100',
                d:
                  'M134.6 217.7c2.4 0 5-.4 5.9-.6.6-.2 1-.5 1-.8 0-.2-.2-.3-.4-.4-1.4-.5-4-.8-6.5-.8s-5 .3-6.4.8c-.2 0-.3.2-.4.3 0 .4.3.7 1 .9 1 .2 3.5.6 5.8.6',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeWidth: '.3',
                d:
                  'M134.6 217.7c2.4 0 5-.4 5.9-.6.6-.2 1-.5 1-.8 0-.2-.2-.3-.4-.4-1.4-.5-4-.8-6.5-.8s-5 .3-6.4.8c-.2 0-.3.2-.4.3 0 .4.3.7 1 .9 1 .2 3.5.6 5.8.6z',
              }),
              n.a.createElement('path', {
                fill: '#c8b100',
                d:
                  'M142.1 213.2l-.5-.5s-.6.3-1.3.2c-.6 0-.9-1-.9-1s-.7.7-1.3.7c-.7 0-1-.6-1-.6s-.7.5-1.3.4c-.6 0-1.2-.8-1.2-.8s-.6.8-1.2.8c-.6.1-1-.5-1-.5s-.4.6-1.1.7-1.4-.6-1.4-.6-.5.7-1 1c-.5 0-1.2-.4-1.2-.4l-.2.5-.3.1.2.5a27 27 0 017.2-.9c3 0 5.5.4 7.4 1l.2-.6',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeWidth: '.3',
                d:
                  'M142.1 213.2l-.5-.5s-.6.3-1.3.2c-.6 0-.9-1-.9-1s-.7.7-1.3.7c-.7 0-1-.6-1-.6s-.7.5-1.3.4c-.6 0-1.2-.8-1.2-.8s-.6.8-1.2.8c-.6.1-1-.5-1-.5s-.4.6-1.1.7-1.4-.6-1.4-.6-.5.7-1 1c-.5 0-1.2-.4-1.2-.4l-.2.5-.3.1.2.5a27 27 0 017.2-.9c3 0 5.5.4 7.4 1l.2-.6z',
              }),
              n.a.createElement('path', {
                fill: '#c8b100',
                d:
                  'M134.7 210.7h.2a1 1 0 000 .4c0 .6.4 1 1 1a1 1 0 001-.7l.2-.3v.4c.1.5.6.8 1.1.8.6 0 1-.4 1-1v-.1l.4-.4.2.5a.9.9 0 00-.1.4 1 1 0 001 1c.4 0 .7-.2.9-.5l.2-.2v.3c0 .3.1.6.4.7 0 0 .4 0 1-.4l.7-.7v.4s-.5.8-1 1c-.2.2-.5.4-.8.3-.3 0-.6-.3-.7-.6-.2.2-.4.2-.7.2-.6 0-1.2-.3-1.4-.8-.3.3-.7.5-1.1.5a1.6 1.6 0 01-1.2-.6 1.6 1.6 0 01-1 .4 1.6 1.6 0 01-1.3-.6 1.6 1.6 0 01-2.4.2 1.6 1.6 0 01-1.2.6 1.5 1.5 0 01-1.1-.5c-.2.5-.8.8-1.4.8-.2 0-.5 0-.7-.2-.1.3-.4.6-.7.6-.3 0-.6 0-.9-.2l-1-1 .1-.5.8.7c.5.4.9.4.9.4.3 0 .4-.4.4-.7v-.3l.2.2c.2.3.5.5.9.5a1 1 0 001-1 .9.9 0 000-.4v-.5l.4.4a.7.7 0 000 .1c0 .6.5 1 1 1 .6 0 1-.3 1.1-.9v-.3l.2.3c.2.4.6.7 1 .7.7 0 1.1-.4 1.1-1a1 1 0 000-.3h.3',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeWidth: '.3',
                d:
                  'M134.7 210.7h.2a1 1 0 000 .4c0 .6.4 1 1 1a1 1 0 001-.7l.2-.3v.4c.1.5.6.8 1.1.8.6 0 1-.4 1-1v-.1l.4-.4.2.5a.9.9 0 00-.1.4 1 1 0 001 1c.4 0 .7-.2.9-.5l.2-.2v.3c0 .3.1.6.4.7 0 0 .4 0 1-.4l.7-.7v.4s-.5.8-1 1c-.2.2-.5.4-.8.3-.3 0-.6-.3-.7-.6-.2.2-.4.2-.7.2-.6 0-1.2-.3-1.4-.8-.3.3-.7.5-1.1.5a1.6 1.6 0 01-1.2-.6 1.6 1.6 0 01-1 .4 1.6 1.6 0 01-1.3-.6 1.6 1.6 0 01-2.4.2 1.6 1.6 0 01-1.2.6 1.5 1.5 0 01-1.1-.5c-.2.5-.8.8-1.4.8-.2 0-.5 0-.7-.2-.1.3-.4.6-.7.6-.3 0-.6 0-.9-.2l-1-1 .1-.5.8.7c.5.4.9.4.9.4.3 0 .4-.4.4-.7v-.3l.2.2c.2.3.5.5.9.5a1 1 0 001-1 .9.9 0 000-.4v-.5l.4.4a.7.7 0 000 .1c0 .6.5 1 1 1 .6 0 1-.3 1.1-.9v-.3l.2.3c.2.4.6.7 1 .7.7 0 1.1-.4 1.1-1a1 1 0 000-.3h.3z',
              }),
              n.a.createElement('path', {
                fill: '#c8b100',
                d:
                  'M134.6 213.3c-2.9 0-5.5.4-7.3 1l-.3-.2.1-.3a27 27 0 017.5-1c3 0 5.7.4 7.6 1 0 0 .2.2.1.3l-.3.2a27.3 27.3 0 00-7.4-1',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeLinejoin: 'round',
                strokeWidth: '.3',
                d:
                  'M134.6 213.3c-2.9 0-5.5.4-7.3 1l-.3-.2.1-.3a27 27 0 017.5-1c3 0 5.7.4 7.6 1 0 0 .2.2.1.3l-.3.2a27.3 27.3 0 00-7.4-1z',
              }),
              n.a.createElement('path', {
                fill: '#fff',
                d:
                  'M131.8 214.4c0-.3.2-.4.5-.4a.4.4 0 01.4.4c0 .2-.2.4-.4.4a.4.4 0 01-.5-.4',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeWidth: '.3',
                d:
                  'M131.8 214.4c0-.3.2-.4.5-.4a.4.4 0 01.4.4c0 .2-.2.4-.4.4a.4.4 0 01-.5-.4z',
              }),
              n.a.createElement('path', {
                fill: '#ad1519',
                d:
                  'M134.7 214.5h-1c-.1 0-.3 0-.3-.3l.3-.3h2a.3.3 0 01.2.3.3.3 0 01-.3.3h-1',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeWidth: '.3',
                d:
                  'M134.7 214.5h-1c-.1 0-.3 0-.3-.3l.3-.3h2a.3.3 0 01.2.3.3.3 0 01-.3.3h-1',
              }),
              n.a.createElement('path', {
                fill: '#058e6e',
                d:
                  'M130 214.9h-.7c-.1 0-.3 0-.3-.2a.3.3 0 01.2-.3l.7-.1.7-.1c.2 0 .3 0 .4.2a.3.3 0 01-.3.4h-.7',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeWidth: '.3',
                d:
                  'M130 214.9h-.7c-.1 0-.3 0-.3-.2a.3.3 0 01.2-.3l.7-.1.7-.1c.2 0 .3 0 .4.2a.3.3 0 01-.3.4h-.7',
              }),
              n.a.createElement('path', {
                fill: '#ad1519',
                d: 'M127.3 215.3l.3-.4h.7l-.4.6-.6-.2',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeWidth: '.3',
                d: 'M127.3 215.3l.3-.4h.7l-.4.6-.6-.2',
              }),
              n.a.createElement('path', {
                fill: '#fff',
                d:
                  'M136.6 214.4c0-.3.2-.4.4-.4a.4.4 0 01.5.4.4.4 0 01-.5.4.4.4 0 01-.4-.4',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeWidth: '.3',
                d:
                  'M136.6 214.4c0-.3.2-.4.4-.4a.4.4 0 01.5.4.4.4 0 01-.5.4.4.4 0 01-.4-.4z',
              }),
              n.a.createElement('path', {
                fill: '#058e6e',
                d:
                  'M139.3 214.9h.6a.3.3 0 00.4-.2.3.3 0 00-.3-.3l-.6-.1-.7-.1c-.2 0-.3 0-.4.2 0 .2.1.3.3.4h.7',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeWidth: '.3',
                d:
                  'M139.3 214.9h.6a.3.3 0 00.4-.2.3.3 0 00-.3-.3l-.6-.1-.7-.1c-.2 0-.3 0-.4.2 0 .2.1.3.3.4h.7',
              }),
              n.a.createElement('path', {
                fill: '#ad1519',
                d: 'M142 215.4l-.3-.5h-.7l.3.6.6-.1',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeWidth: '.3',
                d: 'M142 215.4l-.3-.5h-.7l.3.6.6-.1',
              }),
              n.a.createElement('path', {
                fill: '#ad1519',
                d:
                  'M134.6 217.1a25 25 0 01-6-.6 25.5 25.5 0 0112.1 0c-1.6.4-3.7.6-6 .6',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeLinejoin: 'round',
                strokeWidth: '.3',
                d:
                  'M134.6 217.1a25 25 0 01-6-.6 25.5 25.5 0 0112.1 0c-1.6.4-3.7.6-6 .6z',
              }),
              n.a.createElement('path', {
                fill: '#c8b100',
                d:
                  'M142 212l-.1-.3c-.2 0-.3 0-.4.2 0 .2 0 .4.2.4 0 0 .2 0 .3-.3',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeWidth: '.3',
                d:
                  'M142 212l-.1-.3c-.2 0-.3 0-.4.2 0 .2 0 .4.2.4 0 0 .2 0 .3-.3z',
              }),
              n.a.createElement('path', {
                fill: '#c8b100',
                d:
                  'M137.3 211.2c0-.2 0-.4-.2-.4 0 0-.2.1-.2.3 0 .2 0 .4.2.4l.3-.3',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeWidth: '.3',
                d:
                  'M137.3 211.2c0-.2 0-.4-.2-.4 0 0-.2.1-.2.3 0 .2 0 .4.2.4l.3-.3z',
              }),
              n.a.createElement('path', {
                fill: '#c8b100',
                d: 'M132 211.2l.1-.4c.2 0 .3.1.3.3 0 .2 0 .4-.2.4l-.2-.3',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeWidth: '.3',
                d: 'M132 211.2l.1-.4c.2 0 .3.1.3.3 0 .2 0 .4-.2.4l-.2-.3z',
              }),
              n.a.createElement('path', {
                fill: '#c8b100',
                d:
                  'M127.3 212l.1-.3c.2 0 .3 0 .4.2 0 .2 0 .4-.2.4 0 0-.2 0-.3-.3',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeWidth: '.3',
                d:
                  'M127.3 212l.1-.3c.2 0 .3 0 .4.2 0 .2 0 .4-.2.4 0 0-.2 0-.3-.3z',
              }),
              n.a.createElement('path', {
                fill: '#c8b100',
                d: 'M134.6 208.5l-.8.5.6 1.3.2.1.2-.1.7-1.3-.9-.5',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeWidth: '.3',
                d: 'M134.6 208.5l-.8.5.6 1.3.2.1.2-.1.7-1.3-.9-.5',
              }),
              n.a.createElement('path', {
                fill: '#c8b100',
                d: 'M132.8 210.5l.4.5 1.3-.4.1-.2-.1-.2-1.3-.3-.4.6',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeWidth: '.3',
                d: 'M132.8 210.5l.4.5 1.3-.4.1-.2-.1-.2-1.3-.3-.4.6',
              }),
              n.a.createElement('path', {
                fill: '#c8b100',
                d: 'M136.4 210.5l-.3.5-1.3-.4-.2-.2.2-.2 1.3-.3.3.6',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeWidth: '.3',
                d: 'M136.4 210.5l-.3.5-1.3-.4-.2-.2.2-.2 1.3-.3.3.6',
              }),
              n.a.createElement('path', {
                fill: '#c8b100',
                d: 'M129.3 209l-.7.7.9 1 .2.1.1-.1.3-1.3-.8-.3',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeWidth: '.3',
                d: 'M129.3 209l-.7.7.9 1 .2.1.1-.1.3-1.3-.8-.3',
              }),
              n.a.createElement('path', {
                fill: '#c8b100',
                d: 'M128 211.2l.4.5 1.2-.6v-.2l-.1-.2-1.3-.1-.3.6',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeWidth: '.3',
                d: 'M128 211.2l.4.5 1.2-.6v-.2l-.1-.2-1.3-.1-.3.6',
              }),
              n.a.createElement('path', {
                fill: '#c8b100',
                d: 'M131.5 210.5l-.3.6H130l-.2-.2.1-.3 1.2-.6.5.5',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeWidth: '.3',
                d: 'M131.5 210.5l-.3.6H130l-.2-.2.1-.3 1.2-.6.5.5',
              }),
              n.a.createElement('path', {
                fill: '#c8b100',
                d: 'M126.6 211.4v.6l-1.4.2-.2-.1v-.2l1-.9.6.4',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeWidth: '.3',
                d: 'M126.6 211.4v.6l-1.4.2-.2-.1v-.2l1-.9.6.4',
              }),
              n.a.createElement('path', {
                fill: '#c8b100',
                d:
                  'M129.2 210.9c0-.3.2-.5.5-.5s.5.2.5.5a.5.5 0 01-.5.4.5.5 0 01-.5-.4',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeWidth: '.3',
                d:
                  'M129.2 210.9c0-.3.2-.5.5-.5s.5.2.5.5a.5.5 0 01-.5.4.5.5 0 01-.5-.4z',
              }),
              n.a.createElement('path', {
                fill: '#c8b100',
                d: 'M140 209l.7.7-.9 1-.2.1-.1-.1-.3-1.3.8-.3',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeWidth: '.3',
                d: 'M140 209l.7.7-.9 1-.2.1-.1-.1-.3-1.3.8-.3',
              }),
              n.a.createElement('path', {
                fill: '#c8b100',
                d: 'M141.4 211.2l-.5.5-1.2-.6v-.2l.1-.2 1.3-.1.3.6',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeWidth: '.3',
                d: 'M141.4 211.2l-.5.5-1.2-.6v-.2l.1-.2 1.3-.1.3.6',
              }),
              n.a.createElement('path', {
                fill: '#c8b100',
                d: 'M137.8 210.5l.3.6h1.3l.2-.2-.1-.3-1.2-.6-.5.5',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeWidth: '.3',
                d: 'M137.8 210.5l.3.6h1.3l.2-.2-.1-.3-1.2-.6-.5.5',
              }),
              n.a.createElement('path', {
                fill: '#c8b100',
                d: 'M142.5 211.4l.1.6 1.3.2.2-.1v-.2l-1-.9-.6.4',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeWidth: '.3',
                d: 'M142.5 211.4l.1.6 1.3.2.2-.1v-.2l-1-.9-.6.4',
              }),
              n.a.createElement('path', {
                fill: '#c8b100',
                d:
                  'M134.2 210.4a.5.5 0 01.4-.4c.3 0 .5.2.5.4a.5.5 0 01-.5.5.5.5 0 01-.4-.5',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeWidth: '.3',
                d:
                  'M134.2 210.4a.5.5 0 01.4-.4c.3 0 .5.2.5.4a.5.5 0 01-.5.5.5.5 0 01-.4-.5z',
              }),
              n.a.createElement('path', {
                fill: '#c8b100',
                d:
                  'M139.1 210.9c0-.3.3-.5.5-.5a.5.5 0 01.5.5.5.5 0 01-.5.4.5.5 0 01-.5-.4',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeWidth: '.3',
                d:
                  'M139.1 210.9c0-.3.3-.5.5-.5a.5.5 0 01.5.5.5.5 0 01-.5.4.5.5 0 01-.5-.4z',
              }),
              n.a.createElement('path', {
                fill: '#c8b100',
                d:
                  'M124.8 212.2l-.6-.7c-.2-.2-.7-.3-.7-.3 0-.1.3-.3.6-.3a.5.5 0 01.4.2v-.2s.3 0 .4.3v1',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeWidth: '.3',
                d:
                  'M124.8 212.2l-.6-.7c-.2-.2-.7-.3-.7-.3 0-.1.3-.3.6-.3a.5.5 0 01.4.2v-.2s.3 0 .4.3v1z',
              }),
              n.a.createElement('path', {
                fill: '#c8b100',
                d:
                  'M124.8 212c.1-.2.4-.2.5 0 .2.1.3.3.2.5l-.5-.1c-.2-.1-.3-.4-.2-.5',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeWidth: '.3',
                d:
                  'M124.8 212c.1-.2.4-.2.5 0 .2.1.3.3.2.5l-.5-.1c-.2-.1-.3-.4-.2-.5z',
              }),
              n.a.createElement('path', {
                fill: '#c8b100',
                d:
                  'M144.3 212.2l.6-.7c.2-.2.7-.3.7-.3 0-.1-.3-.3-.6-.3a.6.6 0 00-.4.2v-.2s-.3 0-.4.3v.7l.1.3',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeWidth: '.3',
                d:
                  'M144.3 212.2l.6-.7c.2-.2.7-.3.7-.3 0-.1-.3-.3-.6-.3a.6.6 0 00-.4.2v-.2s-.3 0-.4.3v.7l.1.3z',
              }),
              n.a.createElement('path', {
                fill: '#c8b100',
                d:
                  'M144.3 212c0-.2-.3-.2-.5 0-.2.1-.2.3-.1.5l.5-.1c.2-.1.2-.4.1-.5',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeWidth: '.3',
                d:
                  'M144.3 212c0-.2-.3-.2-.5 0-.2.1-.2.3-.1.5l.5-.1c.2-.1.2-.4.1-.5z',
              }),
              n.a.createElement('path', {
                fill: '#c8b100',
                d: 'M124 223h21.4v-5.5H124v5.6z',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeWidth: '.4',
                d: 'M124 223h21.4v-5.5H124v5.6z',
              }),
              n.a.createElement('path', {
                fill: '#c8b100',
                d:
                  'M126.2 226.8a1 1 0 01.4 0h16.5a1.4 1.4 0 01-1-1.2c0-.6.5-1.1 1-1.3a1.7 1.7 0 01-.4 0h-16a1.4 1.4 0 01-.5 0c.6.2 1 .7 1 1.3a1.3 1.3 0 01-1 1.2',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeLinejoin: 'round',
                strokeWidth: '.4',
                d:
                  'M126.2 226.8a1 1 0 01.4 0h16.5a1.4 1.4 0 01-1-1.2c0-.6.5-1.1 1-1.3a1.7 1.7 0 01-.4 0h-16a1.4 1.4 0 01-.5 0c.6.2 1 .7 1 1.3a1.3 1.3 0 01-1 1.2z',
              }),
              n.a.createElement('path', {
                fill: '#c8b100',
                d:
                  'M126.6 226.8h16c.6 0 1 .3 1 .7 0 .4-.4.8-1 .8h-16c-.5 0-1-.4-1-.8s.5-.8 1-.8',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeWidth: '.4',
                d:
                  'M126.6 226.8h16c.6 0 1 .3 1 .7 0 .4-.4.8-1 .8h-16c-.5 0-1-.4-1-.8s.5-.8 1-.8z',
              }),
              n.a.createElement('path', {
                fill: '#c8b100',
                d:
                  'M126.6 223h16c.6 0 1 .4 1 .7 0 .4-.4.6-1 .6h-16c-.5 0-1-.2-1-.6 0-.3.5-.6 1-.6',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeWidth: '.4',
                d:
                  'M126.6 223h16c.6 0 1 .4 1 .7 0 .4-.4.6-1 .6h-16c-.5 0-1-.2-1-.6 0-.3.5-.6 1-.6z',
              }),
              n.a.createElement('path', {
                fill: '#005bbf',
                d:
                  'M149.6 317.4c-1.4 0-2.8-.3-3.7-.8a8.4 8.4 0 00-3.8-.8c-1.4 0-2.7.3-3.7.8a8.3 8.3 0 01-3.8.8c-1.5 0-2.8-.3-3.7-.8a8.4 8.4 0 00-3.7-.8 8 8 0 00-3.7.8 8.3 8.3 0 01-3.8.8v2.4c1.5 0 2.8-.4 3.8-.9a8.2 8.2 0 013.7-.8c1.4 0 2.7.3 3.7.8s2.2.9 3.7.9a8.4 8.4 0 003.8-.9c1-.5 2.3-.8 3.7-.8 1.5 0 2.8.3 3.8.8s2.2.9 3.7.9v-2.4',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeWidth: '.4',
                d:
                  'M149.6 317.4c-1.4 0-2.8-.3-3.7-.8a8.4 8.4 0 00-3.8-.8c-1.4 0-2.7.3-3.7.8a8.3 8.3 0 01-3.8.8c-1.5 0-2.8-.3-3.7-.8a8.4 8.4 0 00-3.7-.8 8 8 0 00-3.7.8 8.3 8.3 0 01-3.8.8v2.4c1.5 0 2.8-.4 3.8-.9a8.2 8.2 0 013.7-.8c1.4 0 2.7.3 3.7.8s2.2.9 3.7.9a8.4 8.4 0 003.8-.9c1-.5 2.3-.8 3.7-.8 1.5 0 2.8.3 3.8.8s2.2.9 3.7.9v-2.4z',
              }),
              n.a.createElement('path', {
                fill: '#ccc',
                d:
                  'M149.6 319.8a8 8 0 01-3.7-.9 8.3 8.3 0 00-3.8-.8c-1.4 0-2.7.3-3.7.8s-2.3.9-3.8.9-2.8-.4-3.7-.9a8.4 8.4 0 00-3.7-.8 8.2 8.2 0 00-3.7.8c-1 .5-2.3.9-3.8.9v2.3c1.5 0 2.8-.4 3.8-.9a8.1 8.1 0 013.7-.7c1.4 0 2.7.2 3.7.7a8.3 8.3 0 007.5 0 8.5 8.5 0 017.5.1 8.1 8.1 0 003.7.8v-2.3',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeWidth: '.4',
                d:
                  'M149.6 319.8a8 8 0 01-3.7-.9 8.3 8.3 0 00-3.8-.8c-1.4 0-2.7.3-3.7.8s-2.3.9-3.8.9-2.8-.4-3.7-.9a8.4 8.4 0 00-3.7-.8 8.2 8.2 0 00-3.7.8c-1 .5-2.3.9-3.8.9v2.3c1.5 0 2.8-.4 3.8-.9a8.1 8.1 0 013.7-.7c1.4 0 2.7.2 3.7.7a8.3 8.3 0 007.5 0 8.5 8.5 0 017.5.1 8.1 8.1 0 003.7.8v-2.3',
              }),
              n.a.createElement('path', {
                fill: '#005bbf',
                d:
                  'M149.6 322a7 7 0 01-3.7-.8 8.3 8.3 0 00-3.8-.7c-1.4 0-2.7.2-3.7.7-1 .6-2.3.9-3.8.9s-2.8-.4-3.7-.9a8.4 8.4 0 00-3.7-.8 8 8 0 00-3.7.8c-1 .5-2.3.9-3.8.9v2.3c1.5 0 2.8-.3 3.8-.9a10.2 10.2 0 017.4 0 7 7 0 003.7.9 8.4 8.4 0 003.8-.8c1-.5 2.3-.8 3.7-.8 1.5 0 2.8.3 3.8.8s2.2.8 3.7.8V322',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeWidth: '.4',
                d:
                  'M149.6 322a7 7 0 01-3.7-.8 8.3 8.3 0 00-3.8-.7c-1.4 0-2.7.2-3.7.7-1 .6-2.3.9-3.8.9s-2.8-.4-3.7-.9a8.4 8.4 0 00-3.7-.8 8 8 0 00-3.7.8c-1 .5-2.3.9-3.8.9v2.3c1.5 0 2.8-.3 3.8-.9a10.2 10.2 0 017.4 0 7 7 0 003.7.9 8.4 8.4 0 003.8-.8c1-.5 2.3-.8 3.7-.8 1.5 0 2.8.3 3.8.8s2.2.8 3.7.8V322',
              }),
              n.a.createElement('path', {
                fill: '#ccc',
                d:
                  'M149.6 326.7a8 8 0 01-3.7-.8c-1-.5-2.3-.8-3.7-.8a8.4 8.4 0 00-3.8.8c-1 .5-2.3.8-3.8.8a7 7 0 01-3.7-.9 8.4 8.4 0 00-3.7-.7c-1.4 0-2.7.3-3.7.8s-2.3.8-3.8.8v-2.3a8.3 8.3 0 003.8-.9 10.2 10.2 0 017.4 0 8 8 0 003.7.9 8.4 8.4 0 003.8-.8c1-.5 2.3-.8 3.8-.8 1.4 0 2.7.3 3.7.8s2.3.8 3.7.8v2.3',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeWidth: '.4',
                d:
                  'M149.6 326.7a8 8 0 01-3.7-.8c-1-.5-2.3-.8-3.7-.8a8.4 8.4 0 00-3.8.8c-1 .5-2.3.8-3.8.8a7 7 0 01-3.7-.9 8.4 8.4 0 00-3.7-.7c-1.4 0-2.7.3-3.7.8s-2.3.8-3.8.8v-2.3a8.3 8.3 0 003.8-.9 10.2 10.2 0 017.4 0 8 8 0 003.7.9 8.4 8.4 0 003.8-.8c1-.5 2.3-.8 3.8-.8 1.4 0 2.7.3 3.7.8s2.3.8 3.7.8v2.3',
              }),
              n.a.createElement('path', {
                fill: '#005bbf',
                d:
                  'M149.6 329a8.1 8.1 0 01-3.7-.8c-1-.5-2.3-.8-3.7-.8a8.4 8.4 0 00-3.8.8c-1 .5-2.3.8-3.8.8a7 7 0 01-3.7-.9 8.4 8.4 0 00-3.7-.7c-1.4 0-2.7.3-3.7.8s-2.3.8-3.8.8v-2.3a8.3 8.3 0 003.8-.8c1-.5 2.3-.8 3.7-.8 1.4 0 2.7.3 3.7.7a8.4 8.4 0 007.5 0c1-.4 2.3-.7 3.8-.7 1.4 0 2.7.3 3.7.8s2.2.8 3.7.8v2.3',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeWidth: '.4',
                d:
                  'M149.6 329a8.1 8.1 0 01-3.7-.8c-1-.5-2.3-.8-3.7-.8a8.4 8.4 0 00-3.8.8c-1 .5-2.3.8-3.8.8a7 7 0 01-3.7-.9 8.4 8.4 0 00-3.7-.7c-1.4 0-2.7.3-3.7.8s-2.3.8-3.8.8v-2.3a8.3 8.3 0 003.8-.8c1-.5 2.3-.8 3.7-.8 1.4 0 2.7.3 3.7.7a8.4 8.4 0 007.5 0c1-.4 2.3-.7 3.8-.7 1.4 0 2.7.3 3.7.8s2.2.8 3.7.8v2.3z',
              }),
              n.a.createElement('path', {
                fill: '#c8b100',
                d:
                  'M126.2 308l.2.5c0 1.5-1.3 2.6-2.7 2.6h22a2.7 2.7 0 01-2.7-2.6v-.5a1.3 1.3 0 01-.3 0h-16a1.4 1.4 0 01-.5 0',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeLinejoin: 'round',
                strokeWidth: '.4',
                d:
                  'M126.2 308l.2.5c0 1.5-1.3 2.6-2.7 2.6h22a2.7 2.7 0 01-2.7-2.6v-.5a1.3 1.3 0 01-.3 0h-16a1.4 1.4 0 01-.5 0z',
              }),
              n.a.createElement('path', {
                fill: '#c8b100',
                d:
                  'M126.6 306.5h16c.6 0 1 .3 1 .8 0 .4-.4.7-1 .7h-16c-.5 0-1-.3-1-.8 0-.4.5-.7 1-.7',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeWidth: '.4',
                d:
                  'M126.6 306.5h16c.6 0 1 .3 1 .8 0 .4-.4.7-1 .7h-16c-.5 0-1-.3-1-.8 0-.4.5-.7 1-.7z',
              }),
              n.a.createElement('path', {
                fill: '#c8b100',
                d: 'M123.7 316.7h22V311h-22v5.6z',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeWidth: '.4',
                d: 'M123.7 316.7h22V311h-22v5.6z',
              }),
              n.a.createElement('path', {
                fill: '#ad1519',
                d:
                  'M122 286.7c-2.2 1.2-3.7 2.5-3.4 3.2 0 .6.8 1 1.8 1.6 1.5 1.1 2.5 3 1.7 4a5.5 5.5 0 00-.1-8.8',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeWidth: '.4',
                d:
                  'M122 286.7c-2.2 1.2-3.7 2.5-3.4 3.2 0 .6.8 1 1.8 1.6 1.5 1.1 2.5 3 1.7 4a5.5 5.5 0 00-.1-8.8z',
              }),
              n.a.createElement('path', {
                fill: '#ccc',
                d: 'M126.8 305.6h15.6V229h-15.6v76.5z',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeWidth: '.4',
                d:
                  'M138 229.2v76.3m1.7-76.3v76.3m-12.9 0h15.6v-76.4h-15.6v76.5z',
              }),
              n.a.createElement('path', {
                fill: '#ad1519',
                d:
                  'M158.4 257.7a49.6 49.6 0 00-23.3-2c-9.4 1.6-16.5 5.3-15.9 8.4v.2l-3.5-8.2c-.6-3.3 7.2-7.5 17.6-9.2a43 43 0 019.2-.7c6.6 0 12.4.8 15.8 2.1v9.4',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeLinejoin: 'round',
                strokeWidth: '.4',
                d:
                  'M158.4 257.7a49.6 49.6 0 00-23.3-2c-9.4 1.6-16.5 5.3-15.9 8.4v.2l-3.5-8.2c-.6-3.3 7.2-7.5 17.6-9.2a43 43 0 019.2-.7c6.6 0 12.4.8 15.8 2.1v9.4',
              }),
              n.a.createElement('path', {
                fill: '#ad1519',
                d:
                  'M126.8 267.3c-4.3-.3-7.3-1.4-7.6-3.2-.3-1.5 1.2-3 3.8-4.5 1.2.1 2.5.3 3.8.3v7.4',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeWidth: '.4',
                d:
                  'M126.8 267.3c-4.3-.3-7.3-1.4-7.6-3.2-.3-1.5 1.2-3 3.8-4.5 1.2.1 2.5.3 3.8.3v7.4',
              }),
              n.a.createElement('path', {
                fill: '#ad1519',
                d:
                  'M142.5 261.5c2.7.4 4.7 1 5.7 1.9l.1.2c.5 1-1.9 3-5.9 5.4v-7.5',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeWidth: '.4',
                d:
                  'M142.5 261.5c2.7.4 4.7 1 5.7 1.9l.1.2c.5 1-1.9 3-5.9 5.4v-7.5',
              }),
              n.a.createElement('path', {
                fill: '#ad1519',
                d:
                  'M117.1 282c-.4-1.2 3.8-3.6 9.8-5.8l7.8-3.2c8.3-3.7 14.4-7.9 13.6-9.4v-.2c.4.4 1 8 1 8 .8 1.3-4.8 5.5-12.4 9.1-2.5 1.2-7.6 3-10 4-4.4 1.4-8.7 4.3-8.3 5.3l-1.5-7.7',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeLinejoin: 'round',
                strokeWidth: '.4',
                d:
                  'M117.1 282c-.4-1.2 3.8-3.6 9.8-5.8l7.8-3.2c8.3-3.7 14.4-7.9 13.6-9.4v-.2c.4.4 1 8 1 8 .8 1.3-4.8 5.5-12.4 9.1-2.5 1.2-7.6 3-10 4-4.4 1.4-8.7 4.3-8.3 5.3l-1.5-7.7z',
              }),
              n.a.createElement('path', {
                fill: '#c8b100',
                d:
                  'M125.8 254c1.9-.6 3.1-1.5 2.5-3-.4-1-1.4-1-2.8-.6l-2.6 1 2.3 5.8.8-.3.8-.3-1-2.5zm-1.2-2.7l.7-.3c.5-.2 1.2.1 1.4.8.2.5.2 1-.5 1.5a4.4 4.4 0 01-.6.3l-1-2.3m7.3-2.5l-.9.3h-.8l1.3 6.1 4.3-.8-.2-.4v-.4l-2.5.6-1.2-5.3m8.4 5.2c.8-2.2 1.7-4.3 2.7-6.4a5.3 5.3 0 01-1 0 54.8 54.8 0 01-1.8 4.6l-2.4-4.3-1 .1h-1a131.4 131.4 0 013.5 6h1m8.8-4.7l.4-.9a3.4 3.4 0 00-1.7-.6c-1.7-.1-2.7.6-2.8 1.7-.2 2.1 3.2 2 3 3.4 0 .6-.7.9-1.4.8-.8 0-1.4-.5-1.4-1.2h-.3a7.3 7.3 0 01-.4 1.1 4 4 0 001.8.6c1.7.2 3-.5 3.2-1.7.2-2-3.3-2.1-3.1-3.4 0-.5.4-.8 1.3-.7.7 0 1 .4 1.2.9h.2',
              }),
              n.a.createElement('path', {
                fill: '#ad1519',
                d:
                  'M277.9 211.6s-.7.8-1.3.9c-.5 0-1.1-.5-1.1-.5s-.5.5-1 .6c-.6.1-1.4-.6-1.4-.6l-1 1c-.6 0-1.1-.3-1.1-.3s-.3.4-.7.6h-.4l-.6-.4-.7-.7-.5-.3-.4-1v-.5c-.1-.6.8-1.4 2.2-1.7a3.9 3.9 0 012 0c.5-.5 1.7-.8 3-.8s2.4.3 3 .7a5.5 5.5 0 012.9-.7c1.3 0 2.5.3 3 .8.5-.2 1.2-.2 2 0 1.4.3 2.3 1 2.2 1.7v.5l-.4 1-.6.3-.6.7-.6.3s-.3.2-.4 0c-.4-.1-.7-.5-.7-.5s-.6.4-1 .2c-.5-.2-1-1-1-1s-.9.8-1.4.7c-.6-.1-1-.6-1-.6s-.7.6-1.2.5c-.5-.1-1.2-.9-1.2-.9',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeWidth: '.3',
                d:
                  'M277.9 211.6s-.7.8-1.3.9c-.5 0-1.1-.5-1.1-.5s-.5.5-1 .6c-.6.1-1.4-.6-1.4-.6l-1 1c-.6 0-1.1-.3-1.1-.3s-.3.4-.7.6h-.4l-.6-.4-.7-.7-.5-.3-.4-1v-.5c-.1-.6.8-1.4 2.2-1.7a3.9 3.9 0 012 0c.5-.5 1.7-.8 3-.8s2.4.3 3 .7a5.5 5.5 0 012.9-.7c1.3 0 2.5.3 3 .8.5-.2 1.2-.2 2 0 1.4.3 2.3 1 2.2 1.7v.5l-.4 1-.6.3-.6.7-.6.3s-.3.2-.4 0c-.4-.1-.7-.5-.7-.5s-.6.4-1 .2c-.5-.2-1-1-1-1s-.9.8-1.4.7c-.6-.1-1-.6-1-.6s-.7.6-1.2.5c-.5-.1-1.2-.9-1.2-.9z',
              }),
              n.a.createElement('path', {
                fill: '#c8b100',
                d:
                  'M276.5 207.6c0-1 .6-2 1.3-2 .8 0 1.3 1 1.3 2s-.5 1.8-1.3 1.8c-.7 0-1.3-.8-1.3-1.9',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeWidth: '.3',
                d:
                  'M276.5 207.6c0-1 .6-2 1.3-2 .8 0 1.3 1 1.3 2s-.5 1.8-1.3 1.8c-.7 0-1.3-.8-1.3-1.9z',
              }),
              n.a.createElement('path', {
                fill: '#c8b100',
                d:
                  'M277.3 207.6c0-1 .2-1.8.5-1.8.4 0 .7.8.7 1.8s-.3 1.7-.6 1.7c-.4 0-.6-.8-.6-1.8',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeWidth: '.3',
                d:
                  'M277.3 207.6c0-1 .2-1.8.5-1.8.4 0 .7.8.7 1.8s-.3 1.7-.6 1.7c-.4 0-.6-.8-.6-1.8z',
              }),
              n.a.createElement('path', {
                fill: '#c8b100',
                d:
                  'M271 215.3a4.5 4.5 0 00-.5-1 27.4 27.4 0 0114.8 0l-.6.8a5.2 5.2 0 00-.3.8 22.9 22.9 0 00-6.6-.8c-2.6 0-5.2.3-6.6.8l-.2-.6',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeWidth: '.3',
                d:
                  'M271 215.3a4.5 4.5 0 00-.5-1 27.4 27.4 0 0114.8 0l-.6.8a5.2 5.2 0 00-.3.8 22.9 22.9 0 00-6.6-.8c-2.6 0-5.2.3-6.6.8l-.2-.6',
              }),
              n.a.createElement('path', {
                fill: '#c8b100',
                d:
                  'M277.8 217.7c2.4 0 5-.4 5.9-.6.6-.2 1-.5 1-.8 0-.2-.2-.3-.4-.4a24.1 24.1 0 00-6.5-.8c-2.5 0-5 .3-6.4.8-.2 0-.3.2-.4.3 0 .4.3.7 1 .9 1 .2 3.5.6 5.8.6',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeWidth: '.3',
                d:
                  'M277.8 217.7c2.4 0 5-.4 5.9-.6.6-.2 1-.5 1-.8 0-.2-.2-.3-.4-.4a24.1 24.1 0 00-6.5-.8c-2.5 0-5 .3-6.4.8-.2 0-.3.2-.4.3 0 .4.3.7 1 .9 1 .2 3.5.6 5.8.6z',
              }),
              n.a.createElement('path', {
                fill: '#fff',
                d:
                  'M283.5 208.4c0-.2.2-.4.4-.4s.5.2.5.4-.2.4-.5.4a.4.4 0 01-.4-.4',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeWidth: '.2',
                d:
                  'M283.5 208.4c0-.2.2-.4.4-.4s.5.2.5.4-.2.4-.5.4a.4.4 0 01-.4-.4zm-.2-1.4a.4.4 0 01.4-.4c.2 0 .4.1.4.4s-.2.4-.4.4a.4.4 0 01-.4-.4zm-1.1-1c0-.2.2-.3.4-.3s.4.1.4.4c0 .2-.2.4-.4.4a.4.4 0 01-.4-.5zm-1.4-.4c0-.2.2-.4.4-.4.3 0 .5.2.5.4s-.2.4-.4.4-.5-.2-.5-.4zm-1.4 0c0-.2.2-.3.5-.3s.4.1.4.4c0 .2-.2.4-.4.4a.4.4 0 01-.5-.4z',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeLinecap: 'round',
                strokeWidth: '.3',
                d: 'M287.8 211.2l.2-1a2.7 2.7 0 00-2.7-2.8c-.5 0-1 .1-1.3.3',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeWidth: '.3',
                d: 'M283 209.2l.2-.8c0-1.1-1.1-2-2.5-2-.6 0-1.2.2-1.6.4',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeWidth: '.2',
                d:
                  'M288.2 210c0-.3.2-.5.4-.5s.4.2.4.4c0 .3-.2.4-.4.4s-.4-.1-.4-.4zm-.2-1.6c0-.2.2-.4.4-.4a.4.4 0 01.5.4c0 .2-.2.4-.4.4-.3 0-.5-.2-.5-.4zm-1-1.1a.4.4 0 01.5-.4c.2 0 .4.1.4.4a.4.4 0 01-.4.4.4.4 0 01-.5-.4zm-1.3-.7c0-.2.2-.4.5-.4s.4.2.4.4c0 .3-.2.5-.4.5a.4.4 0 01-.5-.5zm-1.4.1c0-.2.2-.4.5-.4s.4.2.4.4-.2.4-.4.4-.5-.2-.5-.4z',
              }),
              n.a.createElement('path', {
                fill: '#c8b100',
                d:
                  'M285.3 213.2l-.5-.5s-.6.3-1.3.2c-.6 0-.9-1-.9-1s-.7.7-1.3.7c-.7 0-1-.6-1-.6s-.7.5-1.3.4c-.6 0-1.2-.8-1.2-.8s-.6.8-1.2.8c-.6.1-1-.5-1-.5s-.3.6-1.1.7-1.4-.6-1.4-.6-.4.7-1 1c-.5 0-1.2-.4-1.2-.4l-.1.5-.3.1.1.5a27 27 0 017.3-.9c2.8 0 5.4.4 7.3 1l.2-.6',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeWidth: '.3',
                d:
                  'M285.3 213.2l-.5-.5s-.6.3-1.3.2c-.6 0-.9-1-.9-1s-.7.7-1.3.7c-.7 0-1-.6-1-.6s-.7.5-1.3.4c-.6 0-1.2-.8-1.2-.8s-.6.8-1.2.8c-.6.1-1-.5-1-.5s-.3.6-1.1.7-1.4-.6-1.4-.6-.4.7-1 1c-.5 0-1.2-.4-1.2-.4l-.1.5-.3.1.1.5a27 27 0 017.3-.9c2.8 0 5.4.4 7.3 1l.2-.6z',
              }),
              n.a.createElement('path', {
                fill: '#fff',
                d:
                  'M271.3 208.4c0-.2.2-.4.4-.4s.4.2.4.4a.4.4 0 01-.4.4.4.4 0 01-.4-.4',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeWidth: '.2',
                d:
                  'M271.3 208.4c0-.2.2-.4.4-.4s.4.2.4.4a.4.4 0 01-.4.4.4.4 0 01-.4-.4zm.2-1.4c0-.3.2-.4.4-.4s.5.1.5.4-.2.4-.5.4a.4.4 0 01-.4-.4zm1-1c0-.2.3-.3.5-.3s.5.1.5.4c0 .2-.2.4-.5.4a.4.4 0 01-.4-.5zm1.4-.4c0-.2.2-.4.5-.4s.4.2.4.4-.2.4-.4.4-.5-.2-.5-.4zm1.4 0c0-.2.2-.3.5-.3.2 0 .4.1.4.4 0 .2-.2.4-.4.4a.4.4 0 01-.5-.4z',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeLinecap: 'round',
                strokeWidth: '.3',
                d:
                  'M267.8 211.2a2.8 2.8 0 01-.2-1 2.7 2.7 0 012.7-2.8c.5 0 1 .1 1.4.3',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeWidth: '.3',
                d:
                  'M272.7 209.2a1.7 1.7 0 01-.3-.8c0-1 1.2-2 2.6-2a3 3 0 011.5.4',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeWidth: '.2',
                d:
                  'M266.6 210c0-.3.2-.5.4-.5.3 0 .4.2.4.4a.4.4 0 01-.4.4c-.2 0-.4-.1-.4-.4zm.1-1.6c0-.2.3-.4.5-.4s.4.2.4.4-.2.4-.4.4-.4-.2-.4-.4zm1-1.1c0-.3.2-.4.5-.4a.4.4 0 01.4.4.4.4 0 01-.4.4.4.4 0 01-.5-.4zm1.3-.7c0-.2.2-.4.5-.4.2 0 .4.2.4.4 0 .3-.2.5-.4.5a.4.4 0 01-.5-.5zm1.4.1c0-.2.2-.4.5-.4a.4.4 0 01.4.4.4.4 0 01-.4.4c-.3 0-.5-.2-.5-.4z',
              }),
              n.a.createElement('path', {
                fill: '#c8b100',
                d:
                  'M277.9 210.7h.2a1 1 0 000 .4c0 .6.5 1 1 1a1 1 0 001-.7l.2-.3v.4c.1.5.6.8 1.1.8.6 0 1-.4 1-1a.7.7 0 000-.1l.4-.4.2.5a1 1 0 00-.1.4 1 1 0 001 1c.4 0 .7-.2.9-.5l.2-.2v.3c0 .3.1.6.4.7 0 0 .4 0 1-.4s.7-.7.7-.7v.4s-.5.8-1 1c-.2.2-.5.4-.8.3-.3 0-.6-.3-.7-.6a1.5 1.5 0 01-.7.2c-.6 0-1.2-.3-1.4-.8a1.5 1.5 0 01-1.1.5c-.5 0-1-.2-1.2-.6a1.5 1.5 0 01-1 .4c-.6 0-1-.2-1.4-.6-.2.4-.7.6-1.2.6-.4 0-.8-.1-1-.4a1.6 1.6 0 01-1.3.6c-.4 0-.8-.2-1.1-.5-.2.5-.8.8-1.4.8-.2 0-.5 0-.7-.2-.1.3-.4.6-.7.6-.3 0-.6 0-.9-.2a4.2 4.2 0 01-1-1l.1-.5.8.7c.5.4.9.4.9.4.3 0 .4-.4.4-.7v-.3l.2.2c.2.3.5.5.9.5a1 1 0 001-1 1 1 0 000-.4v-.5l.4.4v.1c0 .6.5 1 1 1 .6 0 1-.3 1.1-.9v-.3l.2.3c.2.4.6.7 1 .7.6 0 1.1-.4 1.1-1a1 1 0 000-.3h.2',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeWidth: '.3',
                d:
                  'M277.9 210.7h.2a1 1 0 000 .4c0 .6.5 1 1 1a1 1 0 001-.7l.2-.3v.4c.1.5.6.8 1.1.8.6 0 1-.4 1-1a.7.7 0 000-.1l.4-.4.2.5a1 1 0 00-.1.4 1 1 0 001 1c.4 0 .7-.2.9-.5l.2-.2v.3c0 .3.1.6.4.7 0 0 .4 0 1-.4s.7-.7.7-.7v.4s-.5.8-1 1c-.2.2-.5.4-.8.3-.3 0-.6-.3-.7-.6a1.5 1.5 0 01-.7.2c-.6 0-1.2-.3-1.4-.8a1.5 1.5 0 01-1.1.5c-.5 0-1-.2-1.2-.6a1.5 1.5 0 01-1 .4c-.6 0-1-.2-1.4-.6-.2.4-.7.6-1.2.6-.4 0-.8-.1-1-.4a1.6 1.6 0 01-1.3.6c-.4 0-.8-.2-1.1-.5-.2.5-.8.8-1.4.8-.2 0-.5 0-.7-.2-.1.3-.4.6-.7.6-.3 0-.6 0-.9-.2a4.2 4.2 0 01-1-1l.1-.5.8.7c.5.4.9.4.9.4.3 0 .4-.4.4-.7v-.3l.2.2c.2.3.5.5.9.5a1 1 0 001-1 1 1 0 000-.4v-.5l.4.4v.1c0 .6.5 1 1 1 .6 0 1-.3 1.1-.9v-.3l.2.3c.2.4.6.7 1 .7.6 0 1.1-.4 1.1-1a1 1 0 000-.3h.2z',
              }),
              n.a.createElement('path', {
                fill: '#c8b100',
                d:
                  'M277.8 213.3c-2.9 0-5.5.4-7.3 1l-.3-.2.1-.3c2-.6 4.6-1 7.5-1 3 0 5.7.4 7.6 1 0 0 .2.2.1.3l-.3.2a27 27 0 00-7.4-1',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeWidth: '.3',
                d:
                  'M277.8 213.3c-2.9 0-5.5.4-7.3 1l-.3-.2.1-.3c2-.6 4.6-1 7.5-1 3 0 5.7.4 7.6 1 0 0 .2.2.1.3l-.3.2a27 27 0 00-7.4-1z',
              }),
              n.a.createElement('path', {
                fill: '#fff',
                d:
                  'M275 214.4c0-.3.2-.4.5-.4a.4.4 0 01.4.4.4.4 0 01-.4.4c-.3 0-.5-.2-.5-.4',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeWidth: '.3',
                d:
                  'M275 214.4c0-.3.2-.4.5-.4a.4.4 0 01.4.4.4.4 0 01-.4.4c-.3 0-.5-.2-.5-.4z',
              }),
              n.a.createElement('path', {
                fill: '#ad1519',
                d:
                  'M277.9 214.5h-1c-.1 0-.3 0-.3-.3l.3-.3h2a.3.3 0 01.2.3.3.3 0 01-.3.3h-1',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeWidth: '.3',
                d:
                  'M277.9 214.5h-1c-.1 0-.3 0-.3-.3l.3-.3h2a.3.3 0 01.2.3.3.3 0 01-.3.3h-1',
              }),
              n.a.createElement('path', {
                fill: '#058e6e',
                d:
                  'M273.2 214.9h-.6a.3.3 0 01-.4-.2.3.3 0 01.3-.3l.6-.1.7-.1c.2 0 .3 0 .4.2a.3.3 0 01-.3.4h-.7',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeWidth: '.3',
                d:
                  'M273.2 214.9h-.6a.3.3 0 01-.4-.2.3.3 0 01.3-.3l.6-.1.7-.1c.2 0 .3 0 .4.2a.3.3 0 01-.3.4h-.7',
              }),
              n.a.createElement('path', {
                fill: '#ad1519',
                d: 'M270.5 215.3l.3-.4h.7l-.4.6-.6-.2',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeWidth: '.3',
                d: 'M270.5 215.3l.3-.4h.7l-.4.6-.6-.2',
              }),
              n.a.createElement('path', {
                fill: '#fff',
                d:
                  'M279.8 214.4c0-.3.2-.4.4-.4.3 0 .5.1.5.4 0 .2-.2.4-.5.4a.4.4 0 01-.4-.4',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeWidth: '.3',
                d:
                  'M279.8 214.4c0-.3.2-.4.4-.4.3 0 .5.1.5.4 0 .2-.2.4-.5.4a.4.4 0 01-.4-.4z',
              }),
              n.a.createElement('path', {
                fill: '#058e6e',
                d:
                  'M282.5 214.9h.7a.3.3 0 00.3-.2.3.3 0 00-.2-.3l-.7-.1-.7-.1c-.2 0-.3 0-.4.2 0 .2.1.3.3.4h.7',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeWidth: '.3',
                d:
                  'M282.5 214.9h.7a.3.3 0 00.3-.2.3.3 0 00-.2-.3l-.7-.1-.7-.1c-.2 0-.3 0-.4.2 0 .2.1.3.3.4h.7',
              }),
              n.a.createElement('path', {
                fill: '#ad1519',
                d: 'M285.1 215.4l-.2-.5h-.7l.3.6.6-.1',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeWidth: '.3',
                d: 'M285.1 215.4l-.2-.5h-.7l.3.6.6-.1',
              }),
              n.a.createElement('path', {
                fill: '#ad1519',
                d:
                  'M277.8 217.1a25 25 0 01-6-.6 25.4 25.4 0 016-.7c2.4 0 4.5.3 6.1.7-1.6.4-3.7.6-6 .6',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeLinejoin: 'round',
                strokeWidth: '.3',
                d:
                  'M277.8 217.1a25 25 0 01-6-.6 25.4 25.4 0 016-.7c2.4 0 4.5.3 6.1.7-1.6.4-3.7.6-6 .6z',
              }),
              n.a.createElement('path', {
                fill: '#c8b100',
                d: 'M285.2 212l-.1-.3c-.2 0-.3 0-.4.2l.1.4c.2 0 .3 0 .4-.3',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeWidth: '.3',
                d: 'M285.2 212l-.1-.3c-.2 0-.3 0-.4.2l.1.4c.2 0 .3 0 .4-.3z',
              }),
              n.a.createElement('path', {
                fill: '#c8b100',
                d:
                  'M280.6 211.2c0-.2-.1-.4-.3-.4 0 0-.2.1-.2.3 0 .2 0 .4.2.4l.3-.3',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeWidth: '.3',
                d:
                  'M280.6 211.2c0-.2-.1-.4-.3-.4 0 0-.2.1-.2.3 0 .2 0 .4.2.4l.3-.3z',
              }),
              n.a.createElement('path', {
                fill: '#c8b100',
                d: 'M275.2 211.2c0-.2 0-.4.2-.4l.3.3-.2.4c-.2 0-.3-.2-.3-.3',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeWidth: '.3',
                d: 'M275.2 211.2c0-.2 0-.4.2-.4l.3.3-.2.4c-.2 0-.3-.2-.3-.3z',
              }),
              n.a.createElement('path', {
                fill: '#c8b100',
                d: 'M270.5 212l.1-.3c.2 0 .3 0 .4.2l-.1.4c-.2 0-.3 0-.4-.3',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeWidth: '.3',
                d: 'M270.5 212l.1-.3c.2 0 .3 0 .4.2l-.1.4c-.2 0-.3 0-.4-.3z',
              }),
              n.a.createElement('path', {
                fill: '#c8b100',
                d: 'M277.8 208.5l-.8.5.6 1.3.2.1.3-.1.6-1.3-.9-.5',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeWidth: '.3',
                d: 'M277.8 208.5l-.8.5.6 1.3.2.1.3-.1.6-1.3-.9-.5',
              }),
              n.a.createElement('path', {
                fill: '#c8b100',
                d: 'M276 210.5l.4.5 1.3-.4.1-.2-.1-.2-1.3-.3-.4.6',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeWidth: '.3',
                d: 'M276 210.5l.4.5 1.3-.4.1-.2-.1-.2-1.3-.3-.4.6',
              }),
              n.a.createElement('path', {
                fill: '#c8b100',
                d: 'M279.6 210.5l-.3.5-1.3-.4-.1-.2v-.2l1.4-.3.4.6',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeWidth: '.3',
                d: 'M279.6 210.5l-.3.5-1.3-.4-.1-.2v-.2l1.4-.3.4.6',
              }),
              n.a.createElement('path', {
                fill: '#c8b100',
                d: 'M272.5 209l-.7.7.9 1 .2.1.2-.1.2-1.3-.8-.3',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeWidth: '.3',
                d: 'M272.5 209l-.7.7.9 1 .2.1.2-.1.2-1.3-.8-.3',
              }),
              n.a.createElement('path', {
                fill: '#c8b100',
                d: 'M271.1 211.2l.5.5 1.2-.6v-.2l-.1-.2-1.3-.1-.3.6',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeWidth: '.3',
                d: 'M271.1 211.2l.5.5 1.2-.6v-.2l-.1-.2-1.3-.1-.3.6',
              }),
              n.a.createElement('path', {
                fill: '#c8b100',
                d: 'M274.7 210.5l-.3.6h-1.3l-.2-.2.1-.3 1.2-.6.5.5',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeWidth: '.3',
                d: 'M274.7 210.5l-.3.6h-1.3l-.2-.2.1-.3 1.2-.6.5.5',
              }),
              n.a.createElement('path', {
                fill: '#c8b100',
                d: 'M269.8 211.4v.6l-1.4.2-.2-.1v-.2l1-.9.6.4',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeWidth: '.3',
                d: 'M269.8 211.4v.6l-1.4.2-.2-.1v-.2l1-.9.6.4',
              }),
              n.a.createElement('path', {
                fill: '#c8b100',
                d:
                  'M272.4 210.9c0-.3.2-.5.5-.5a.5.5 0 01.5.5.5.5 0 01-.5.4.5.5 0 01-.5-.4',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeWidth: '.3',
                d:
                  'M272.4 210.9c0-.3.2-.5.5-.5a.5.5 0 01.5.5.5.5 0 01-.5.4.5.5 0 01-.5-.4z',
              }),
              n.a.createElement('path', {
                fill: '#c8b100',
                d: 'M283.2 209l.7.7-.9 1-.2.1-.1-.1-.3-1.3.8-.3',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeWidth: '.3',
                d: 'M283.2 209l.7.7-.9 1-.2.1-.1-.1-.3-1.3.8-.3',
              }),
              n.a.createElement('path', {
                fill: '#c8b100',
                d: 'M284.6 211.2l-.5.5-1.2-.6v-.2l.1-.2 1.3-.1.3.6',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeWidth: '.3',
                d: 'M284.6 211.2l-.5.5-1.2-.6v-.2l.1-.2 1.3-.1.3.6',
              }),
              n.a.createElement('path', {
                fill: '#c8b100',
                d: 'M281 210.5l.3.6h1.3l.2-.2-.1-.3-1.2-.6-.5.5',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeWidth: '.3',
                d: 'M281 210.5l.3.6h1.3l.2-.2-.1-.3-1.2-.6-.5.5',
              }),
              n.a.createElement('path', {
                fill: '#c8b100',
                d: 'M285.7 211.4v.6l1.4.2.2-.1v-.2l-1-.9-.6.4',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeWidth: '.3',
                d: 'M285.7 211.4v.6l1.4.2.2-.1v-.2l-1-.9-.6.4',
              }),
              n.a.createElement('path', {
                fill: '#c8b100',
                d:
                  'M277.4 210.4c0-.2.2-.4.5-.4.2 0 .4.2.4.4 0 .3-.2.5-.4.5a.5.5 0 01-.5-.5',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeWidth: '.3',
                d:
                  'M277.4 210.4c0-.2.2-.4.5-.4.2 0 .4.2.4.4 0 .3-.2.5-.4.5a.5.5 0 01-.5-.5z',
              }),
              n.a.createElement('path', {
                fill: '#c8b100',
                d:
                  'M282.3 210.9c0-.3.3-.5.5-.5.3 0 .5.2.5.5s-.2.4-.5.4a.5.5 0 01-.5-.4',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeWidth: '.3',
                d:
                  'M282.3 210.9c0-.3.3-.5.5-.5.3 0 .5.2.5.5s-.2.4-.5.4a.5.5 0 01-.5-.4z',
              }),
              n.a.createElement('path', {
                fill: '#c8b100',
                d:
                  'M277 205.4c0-.5.4-.8.8-.8s1 .3 1 .8-.5.8-1 .8a.9.9 0 01-.8-.8',
              }),
              n.a.createElement('path', {
                fill: '#c8b100',
                d:
                  'M278.5 205.1v.6H277v-.6h.4v-1.3h-.5v-.5h.5v-.6h.6v.6h.6v.6h-.6v1.2h.4',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeWidth: '.3',
                d:
                  'M278.5 205.1v.6H277v-.6h.4v-1.3h-.5v-.5h.5v-.6h.6v.6h.6v.6h-.6v1.2h.4z',
              }),
              n.a.createElement('path', {
                fill: '#c8b100',
                d:
                  'M279 205.1v.6h-2.4v-.6h1v-1.3h-.7v-.5h.6v-.6h.6v.6h.6v.6h-.6v1.2h1',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeWidth: '.3',
                d:
                  'M278.1 204.6c.4 0 .6.4.6.8 0 .5-.4.8-.9.8a.9.9 0 01-.8-.8c0-.4.2-.7.6-.8',
              }),
              n.a.createElement('path', {
                fill: '#c8b100',
                d:
                  'M268 212.2l-.6-.7a2.3 2.3 0 00-.7-.3c0-.1.3-.3.6-.3.2 0 .3 0 .4.2v-.2s.3 0 .4.3v1',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeWidth: '.3',
                d:
                  'M268 212.2l-.6-.7a2.3 2.3 0 00-.7-.3c0-.1.3-.3.6-.3.2 0 .3 0 .4.2v-.2s.3 0 .4.3v1z',
              }),
              n.a.createElement('path', {
                fill: '#c8b100',
                d:
                  'M268 212c.1-.2.4-.2.5 0 .2.1.3.3.1.5l-.5-.1c-.1-.1-.2-.4 0-.5',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeWidth: '.3',
                d:
                  'M268 212c.1-.2.4-.2.5 0 .2.1.3.3.1.5l-.5-.1c-.1-.1-.2-.4 0-.5z',
              }),
              n.a.createElement('path', {
                fill: '#c8b100',
                d:
                  'M287.5 212.2l.6-.7c.2-.2.7-.3.7-.3 0-.1-.3-.3-.6-.3a.6.6 0 00-.4.2v-.2s-.3 0-.4.3v.7l.1.3',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeWidth: '.3',
                d:
                  'M287.5 212.2l.6-.7c.2-.2.7-.3.7-.3 0-.1-.3-.3-.6-.3a.6.6 0 00-.4.2v-.2s-.3 0-.4.3v.7l.1.3z',
              }),
              n.a.createElement('path', {
                fill: '#c8b100',
                d:
                  'M287.5 212c-.1-.2-.3-.2-.5 0-.2.1-.2.3-.1.5l.5-.1c.2-.1.2-.4.1-.5',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeWidth: '.3',
                d:
                  'M287.5 212c-.1-.2-.3-.2-.5 0-.2.1-.2.3-.1.5l.5-.1c.2-.1.2-.4.1-.5z',
              }),
              n.a.createElement('path', {
                fill: '#c8b100',
                d: 'M267.2 223h21.4v-5.5h-21.4v5.6z',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeWidth: '.4',
                d: 'M267.2 223h21.4v-5.5h-21.4v5.6z',
              }),
              n.a.createElement('path', {
                fill: '#c8b100',
                d:
                  'M286.3 226.8a1 1 0 00-.4 0h-16.5c.6-.2 1-.7 1-1.2 0-.6-.4-1.1-1-1.3h17-.1c-.6.2-1 .7-1 1.3 0 .5.4 1 1 1.2',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeLinejoin: 'round',
                strokeWidth: '.4',
                d:
                  'M286.3 226.8a1 1 0 00-.4 0h-16.5c.6-.2 1-.7 1-1.2 0-.6-.4-1.1-1-1.3h17-.1c-.6.2-1 .7-1 1.3 0 .5.4 1 1 1.2z',
              }),
              n.a.createElement('path', {
                fill: '#c8b100',
                d:
                  'M269.9 226.8h16c.6 0 1 .3 1 .7 0 .4-.4.8-1 .8h-16c-.6 0-1-.4-1-.8s.5-.8 1-.8',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeWidth: '.4',
                d:
                  'M269.9 226.8h16c.6 0 1 .3 1 .7 0 .4-.4.8-1 .8h-16c-.6 0-1-.4-1-.8s.5-.8 1-.8z',
              }),
              n.a.createElement('path', {
                fill: '#c8b100',
                d:
                  'M269.9 223h16c.6 0 1 .4 1 .7 0 .4-.4.6-1 .6h-16c-.6 0-1-.2-1-.6 0-.3.4-.6 1-.6',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeWidth: '.4',
                d:
                  'M269.9 223h16c.6 0 1 .4 1 .7 0 .4-.4.6-1 .6h-16c-.6 0-1-.2-1-.6 0-.3.4-.6 1-.6z',
              }),
              n.a.createElement('path', {
                fill: '#005bbf',
                d:
                  'M263 317.4c1.4 0 2.7-.3 3.7-.8a8.4 8.4 0 013.7-.8c1.4 0 2.8.3 3.8.8s2.3.8 3.7.8c1.5 0 2.8-.3 3.8-.8a8.4 8.4 0 013.6-.8 8 8 0 013.7.8c1 .5 2.4.8 3.8.8v2.4a8.3 8.3 0 01-3.8-.9 8.2 8.2 0 00-3.7-.8c-1.4 0-2.7.3-3.6.8-1 .5-2.3.9-3.8.9a8 8 0 01-3.7-.9 8.4 8.4 0 00-3.8-.8 8.3 8.3 0 00-3.7.8c-1 .5-2.3.9-3.8.9v-2.4',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeWidth: '.4',
                d:
                  'M263 317.4c1.4 0 2.7-.3 3.7-.8a8.4 8.4 0 013.7-.8c1.4 0 2.8.3 3.8.8s2.3.8 3.7.8c1.5 0 2.8-.3 3.8-.8a8.4 8.4 0 013.6-.8 8 8 0 013.7.8c1 .5 2.4.8 3.8.8v2.4a8.3 8.3 0 01-3.8-.9 8.2 8.2 0 00-3.7-.8c-1.4 0-2.7.3-3.6.8-1 .5-2.3.9-3.8.9a8 8 0 01-3.7-.9 8.4 8.4 0 00-3.8-.8 8.3 8.3 0 00-3.7.8c-1 .5-2.3.9-3.8.9v-2.4z',
              }),
              n.a.createElement('path', {
                fill: '#ccc',
                d:
                  'M263 319.8c1.4 0 2.7-.4 3.7-.9s2.3-.8 3.7-.8c1.4 0 2.8.3 3.8.8s2.3.9 3.7.9a8.2 8.2 0 003.8-.9 8.4 8.4 0 013.6-.8c1.5 0 2.8.3 3.7.8 1 .5 2.4.9 3.8.9v2.3a8.3 8.3 0 01-3.8-.9 8.1 8.1 0 00-3.7-.7c-1.4 0-2.7.2-3.6.7-1 .5-2.3.9-3.8.9a7 7 0 01-3.7-.9c-1-.4-2.3-.7-3.8-.7a8.3 8.3 0 00-3.7.7 8.1 8.1 0 01-3.8.9v-2.3',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeWidth: '.4',
                d:
                  'M263 319.8c1.4 0 2.7-.4 3.7-.9s2.3-.8 3.7-.8c1.4 0 2.8.3 3.8.8s2.3.9 3.7.9a8.2 8.2 0 003.8-.9 8.4 8.4 0 013.6-.8c1.5 0 2.8.3 3.7.8 1 .5 2.4.9 3.8.9v2.3a8.3 8.3 0 01-3.8-.9 8.1 8.1 0 00-3.7-.7c-1.4 0-2.7.2-3.6.7-1 .5-2.3.9-3.8.9a7 7 0 01-3.7-.9c-1-.4-2.3-.7-3.8-.7a8.3 8.3 0 00-3.7.7 8.1 8.1 0 01-3.8.9v-2.3',
              }),
              n.a.createElement('path', {
                fill: '#005bbf',
                d:
                  'M263 322c1.4 0 2.7-.2 3.7-.8 1-.4 2.3-.7 3.7-.7 1.4 0 2.8.2 3.8.7s2.3.9 3.7.9a8.2 8.2 0 003.8-.9 8.4 8.4 0 013.6-.8 8 8 0 013.7.8c1 .5 2.4.9 3.8.9v2.3a8.3 8.3 0 01-3.8-.9 8.2 8.2 0 00-3.7-.7c-1.4 0-2.7.3-3.6.7-1 .6-2.3.9-3.8.9-1.4 0-2.8-.3-3.7-.8a8.4 8.4 0 00-3.8-.8 8.3 8.3 0 00-3.7.8c-1 .5-2.3.8-3.8.8V322',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeWidth: '.4',
                d:
                  'M263 322c1.4 0 2.7-.2 3.7-.8 1-.4 2.3-.7 3.7-.7 1.4 0 2.8.2 3.8.7s2.3.9 3.7.9a8.2 8.2 0 003.8-.9 8.4 8.4 0 013.6-.8 8 8 0 013.7.8c1 .5 2.4.9 3.8.9v2.3a8.3 8.3 0 01-3.8-.9 8.2 8.2 0 00-3.7-.7c-1.4 0-2.7.3-3.6.7-1 .6-2.3.9-3.8.9-1.4 0-2.8-.3-3.7-.8a8.4 8.4 0 00-3.8-.8 8.3 8.3 0 00-3.7.8c-1 .5-2.3.8-3.8.8V322',
              }),
              n.a.createElement('path', {
                fill: '#ccc',
                d:
                  'M263 326.7a8 8 0 003.7-.8c1-.5 2.3-.8 3.7-.8 1.4 0 2.8.3 3.8.8s2.3.8 3.7.8c1.5 0 2.8-.3 3.8-.9a8.4 8.4 0 013.6-.7c1.5 0 2.8.3 3.7.8a8.3 8.3 0 003.8.8v-2.3a8.3 8.3 0 01-3.8-.9 8.2 8.2 0 00-3.7-.7c-1.4 0-2.7.3-3.6.7-1 .5-2.3.9-3.8.9-1.4 0-2.8-.3-3.7-.8a8.4 8.4 0 00-3.8-.8 8.3 8.3 0 00-3.7.8c-1 .5-2.3.8-3.8.8v2.3',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeWidth: '.4',
                d:
                  'M263 326.7a8 8 0 003.7-.8c1-.5 2.3-.8 3.7-.8 1.4 0 2.8.3 3.8.8s2.3.8 3.7.8c1.5 0 2.8-.3 3.8-.9a8.4 8.4 0 013.6-.7c1.5 0 2.8.3 3.7.8a8.3 8.3 0 003.8.8v-2.3a8.3 8.3 0 01-3.8-.9 8.2 8.2 0 00-3.7-.7c-1.4 0-2.7.3-3.6.7-1 .5-2.3.9-3.8.9-1.4 0-2.8-.3-3.7-.8a8.4 8.4 0 00-3.8-.8 8.3 8.3 0 00-3.7.8c-1 .5-2.3.8-3.8.8v2.3',
              }),
              n.a.createElement('path', {
                fill: '#005bbf',
                d:
                  'M263 329a8.1 8.1 0 003.7-.8c1-.5 2.3-.8 3.7-.8 1.4 0 2.8.3 3.8.8s2.3.8 3.7.8a8.2 8.2 0 003.8-.9 8.4 8.4 0 013.6-.7c1.5 0 2.8.3 3.7.8 1 .5 2.4.8 3.8.8v-2.3a8.3 8.3 0 01-3.8-.8 8.2 8.2 0 00-3.7-.8 8.4 8.4 0 00-3.6.7 8.2 8.2 0 01-3.8.9c-1.4 0-2.8-.3-3.7-.8-1-.5-2.3-.8-3.8-.8-1.4 0-2.7.3-3.7.8s-2.3.8-3.8.8v2.3',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeWidth: '.4',
                d:
                  'M263 329a8.1 8.1 0 003.7-.8c1-.5 2.3-.8 3.7-.8 1.4 0 2.8.3 3.8.8s2.3.8 3.7.8a8.2 8.2 0 003.8-.9 8.4 8.4 0 013.6-.7c1.5 0 2.8.3 3.7.8 1 .5 2.4.8 3.8.8v-2.3a8.3 8.3 0 01-3.8-.8 8.2 8.2 0 00-3.7-.8 8.4 8.4 0 00-3.6.7 8.2 8.2 0 01-3.8.9c-1.4 0-2.8-.3-3.7-.8-1-.5-2.3-.8-3.8-.8-1.4 0-2.7.3-3.7.8s-2.3.8-3.8.8v2.3z',
              }),
              n.a.createElement('path', {
                fill: '#c8b100',
                d:
                  'M286.3 308l-.1.5c0 1.5 1.2 2.6 2.7 2.6h-22c1.5 0 2.7-1.2 2.7-2.6l-.1-.5h16.8',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeLinejoin: 'round',
                strokeWidth: '.4',
                d:
                  'M286.3 308l-.1.5c0 1.5 1.2 2.6 2.7 2.6h-22c1.5 0 2.7-1.2 2.7-2.6l-.1-.5h16.8z',
              }),
              n.a.createElement('path', {
                fill: '#c8b100',
                d:
                  'M269.9 306.5h16c.6 0 1 .3 1 .8 0 .4-.4.7-1 .7h-16c-.6 0-1-.3-1-.8 0-.4.5-.7 1-.7',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeWidth: '.4',
                d:
                  'M269.9 306.5h16c.6 0 1 .3 1 .8 0 .4-.4.7-1 .7h-16c-.6 0-1-.3-1-.8 0-.4.5-.7 1-.7z',
              }),
              n.a.createElement('path', {
                fill: '#c8b100',
                d: 'M266.9 316.7h22V311h-22v5.6z',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeWidth: '.4',
                d: 'M266.9 316.7h22V311h-22v5.6z',
              }),
              n.a.createElement('path', {
                fill: '#ad1519',
                d:
                  'M290.6 286.7c2.1 1.2 3.6 2.5 3.4 3.2-.1.6-.8 1-1.8 1.6-1.6 1.1-2.5 3-1.8 4a5.5 5.5 0 01.2-8.8',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeWidth: '.4',
                d:
                  'M290.6 286.7c2.1 1.2 3.6 2.5 3.4 3.2-.1.6-.8 1-1.8 1.6-1.6 1.1-2.5 3-1.8 4a5.5 5.5 0 01.2-8.8z',
              }),
              n.a.createElement('path', {
                fill: '#ccc',
                d: 'M270.1 305.6h15.6V229h-15.6v76.5z',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeWidth: '.4',
                d:
                  'M281.4 229.1v76.3m1.8-76.3v76.3m-13 .2h15.5V229h-15.6v76.5z',
              }),
              n.a.createElement('path', {
                fill: '#ad1519',
                d:
                  'M254.2 257.7a49.6 49.6 0 0123.3-2c9.3 1.6 16.4 5.3 15.9 8.4v.2l3.5-8.2c.6-3.3-7.3-7.5-17.6-9.2a53.5 53.5 0 00-9.2-.7c-6.7 0-12.4.8-15.9 2.1v9.4',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeLinejoin: 'round',
                strokeWidth: '.4',
                d:
                  'M254.2 257.7a49.6 49.6 0 0123.3-2c9.3 1.6 16.4 5.3 15.9 8.4v.2l3.5-8.2c.6-3.3-7.3-7.5-17.6-9.2a53.5 53.5 0 00-9.2-.7c-6.7 0-12.4.8-15.9 2.1v9.4',
              }),
              n.a.createElement('path', {
                fill: '#ad1519',
                d:
                  'M285.7 267.3c4.4-.3 7.3-1.4 7.7-3.2.2-1.5-1.2-3-3.8-4.5-1.2.1-2.5.3-3.9.3v7.4',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeWidth: '.4',
                d:
                  'M285.7 267.3c4.4-.3 7.3-1.4 7.7-3.2.2-1.5-1.2-3-3.8-4.5-1.2.1-2.5.3-3.9.3v7.4',
              }),
              n.a.createElement('path', {
                fill: '#ad1519',
                d: 'M270 261.5a13 13 0 00-5.7 1.9v.2c-.5 1 1.8 3 5.8 5.4v-7.5',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeWidth: '.4',
                d: 'M270 261.5a13 13 0 00-5.7 1.9v.2c-.5 1 1.8 3 5.8 5.4v-7.5',
              }),
              n.a.createElement('path', {
                fill: '#ad1519',
                d:
                  'M295.4 282c.4-1.2-3.8-3.6-9.7-5.8-2.8-1-5-2-7.8-3.2-8.3-3.7-14.4-7.9-13.6-9.4v-.2c-.4.4-1 8-1 8-.8 1.3 4.8 5.5 12.4 9.1 2.4 1.2 7.6 3 10 4 4.3 1.4 8.7 4.3 8.3 5.3l1.4-7.7',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeLinejoin: 'round',
                strokeWidth: '.4',
                d:
                  'M295.4 282c.4-1.2-3.8-3.6-9.7-5.8-2.8-1-5-2-7.8-3.2-8.3-3.7-14.4-7.9-13.6-9.4v-.2c-.4.4-1 8-1 8-.8 1.3 4.8 5.5 12.4 9.1 2.4 1.2 7.6 3 10 4 4.3 1.4 8.7 4.3 8.3 5.3l1.4-7.7z',
              }),
              n.a.createElement('path', {
                fill: '#c8b100',
                d:
                  'M263.9 254.4c.6-2.3 1.4-4.4 2.1-6.6h-.5a5.2 5.2 0 01-.5.1 52.8 52.8 0 01-1.4 4.8c-1-1.4-2-2.7-2.7-4.1l-1 .2h-1a131.3 131.3 0 014 5.7h.5l.5-.1m6-6.6h-1a8 8 0 01-.8 0v6.2h4.2v-.7h-2.6l.1-5.5m6.8 1l2 .3v-.7l-5.8-.5v.8a19.3 19.3 0 012 0l-.4 5.6h1.6l.5-5.4m2.4 6c.3 0 .5 0 .8.2l.8.2.7-2.9.6 1.2.8 2.1 1 .2c.4 0 .7.2 1 .3l-.3-.7c-.4-1-1-1.9-1.3-2.9 1 0 1.9-.3 2.1-1.2.1-.6 0-1-.7-1.5-.4-.3-1.2-.4-1.7-.5l-2.4-.5-1.4 6m3-5.2c.7.2 1.5.3 1.5 1v.5c-.3.9-1 1.2-2 .9l.5-2.4m8 7l-.2 2 .8.5.9.5.5-7a3.4 3.4 0 01-.7-.3l-6.1 3.8.5.3.4.2 1.7-1.2 2.3 1.3zm-1.7-1.5l2-1.4-.2 2.3-1.8-1',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeWidth: '.1',
                d:
                  'M182.2 192.4c0-1 1-2 2-2s2.2 1 2.2 2c0 1.1-1 2-2.1 2a2 2 0 01-2.1-2z',
              }),
              n.a.createElement('path', {
                fill: '#ad1519',
                stroke: '#000',
                strokeWidth: '.3',
                d:
                  'M205.7 175.4c6.3 0 12 1 15.7 2.4a31.7 31.7 0 0014.6 2.3c2.7 0 6.5.8 10.3 2.4a27.3 27.3 0 017.4 4.7l-1.5 1.4-.4 3.8-4.1 4.7-2 1.8-5 3.9-2.5.2-.7 2.1-31.6-3.7-31.7 3.7-.8-2.1-2.5-.2-4.9-4-2-1.7-4.1-4.7-.5-3.8-1.5-1.4a27.6 27.6 0 017.5-4.7 26 26 0 0110.2-2.4c2 .2 4.2.1 6.6-.2a30 30 0 008-2c3.7-1.5 9-2.5 15.5-2.5z',
              }),
              n.a.createElement('path', {
                fill: '#c8b100',
                stroke: '#000',
                strokeWidth: '.4',
                d:
                  'M206.2 217.1c-11.8 0-22.4-1.4-29.9-3.6a1.1 1.1 0 01-.8-1.2c0-.5.3-1 .8-1.2a109 109 0 0129.9-3.6c11.7 0 22.3 1.4 29.8 3.6a1.3 1.3 0 010 2.4c-7.5 2.2-18 3.6-29.8 3.6',
              }),
              n.a.createElement('path', {
                fill: '#ad1519',
                d:
                  'M206.1 215.6c-10.6 0-20.2-1.2-27.5-3.1 7.3-2 16.9-3 27.5-3.1a115 115 0 0127.6 3c-7.3 2-17 3.2-27.6 3.2',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeWidth: '.1',
                d: 'M206.9 215.7v-6.3m-1.7 6.3v-6.3',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeWidth: '.2',
                d: 'M203.6 215.7v-6.3m-1.6 6.3v-6.3',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeWidth: '.3',
                d:
                  'M200.6 215.7v-6.3m-2.8 5.9v-5.7m1.3 5.8v-6m-3.8 5.6v-5.2m1.3 5.4v-5.6',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeWidth: '.4',
                d: 'M192 214.8V210m1 4.7V210m1.2 5v-5m-3.4 4.7v-4.5',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeWidth: '.5',
                d: 'M189.7 214.5v-4.2m-1.2 4.1v-4',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeWidth: '.6',
                d: 'M186 214v-3m1.3 3.2v-3.5m-2.5 3.1V211',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeWidth: '.7',
                d: 'M183.7 213.6v-2.3m-1.3 2v-1.8m-1.2 1.6v-1.3',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeWidth: '.9',
                d: 'M179.8 212.8v-.7',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeWidth: '.1',
                d: 'M213.7 215.3v-5.8m-2.9 6v-6.1m-2.1 6.2v-6.3',
              }),
              n.a.createElement('path', {
                fill: '#c8b100',
                stroke: '#000',
                strokeWidth: '.4',
                d:
                  'M206 207.4a108 108 0 00-30 3.9c.6-.3.5-1-.3-3-1-2.5-2.4-2.4-2.4-2.4 8.3-2.5 20-4 32.8-4a123 123 0 0133 4s-1.5-.1-2.5 2.3c-.8 2-.8 2.8-.2 3-7.5-2.2-18.4-3.7-30.3-3.7',
              }),
              n.a.createElement('path', {
                fill: '#c8b100',
                stroke: '#000',
                strokeWidth: '.4',
                d:
                  'M206.1 201.9c-12.9 0-24.5 1.5-32.8 4a1 1 0 01-1.3-.6 1 1 0 01.7-1.3 121 121 0 0133.4-4.2c13.2 0 25.2 1.7 33.5 4.2.6.2.9.8.7 1.3-.2.5-.8.8-1.3.6-8.4-2.5-20-4-32.9-4',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeLinejoin: 'round',
                strokeWidth: '.4',
                d:
                  'M206.1 215.6c-10.6 0-20.2-1.2-27.5-3.1 7.3-2 16.9-3 27.5-3.1a115 115 0 0127.6 3c-7.3 2-17 3.2-27.6 3.2z',
              }),
              n.a.createElement('path', {
                fill: '#fff',
                stroke: '#000',
                strokeWidth: '.4',
                d:
                  'M197 204.8c0-.5.4-1 1-1 .5 0 1 .5 1 1s-.4 1-1 1a1 1 0 01-1-1',
              }),
              n.a.createElement('path', {
                fill: '#ad1519',
                stroke: '#000',
                strokeWidth: '.4',
                d:
                  'M206.1 205.6H203a1 1 0 010-2h6.4c.5 0 1 .5 1 1s-.5 1-1 1h-3.2',
              }),
              n.a.createElement('path', {
                fill: '#058e6e',
                stroke: '#000',
                strokeWidth: '.4',
                d:
                  'M190.3 206.5l-2.3.2c-.6.1-1-.3-1.2-.8a1 1 0 011-1.1l2.2-.3 2.4-.3c.5 0 1 .3 1.1.9.1.5-.3 1-.9 1l-2.3.4',
              }),
              n.a.createElement('path', {
                fill: '#fff',
                stroke: '#000',
                strokeWidth: '.4',
                d:
                  'M181 206.7c0-.6.5-1 1.1-1 .6 0 1 .4 1 1 0 .5-.4 1-1 1a1 1 0 01-1-1',
              }),
              n.a.createElement('path', {
                fill: '#ad1519',
                stroke: '#000',
                strokeWidth: '.4',
                d: 'M174 208.5l1.2-1.6 3.3.4-2.6 2-1.8-.8',
              }),
              n.a.createElement('path', {
                fill: '#058e6e',
                stroke: '#000',
                strokeWidth: '.4',
                d:
                  'M222 206.5l2.3.2c.5.1 1-.3 1.1-.8a1 1 0 00-.9-1.1l-2.2-.3-2.4-.3a1 1 0 00-1.1.9c-.1.5.3 1 .9 1l2.3.4',
              }),
              n.a.createElement('path', {
                fill: '#fff',
                stroke: '#000',
                strokeWidth: '.4',
                d:
                  'M213.3 204.8c0-.5.4-1 1-1s1 .5 1 1-.4 1-1 1a1 1 0 01-1-1m15.8 1.9c0-.6.5-1 1-1 .6 0 1.1.4 1.1 1 0 .5-.4 1-1 1a1 1 0 01-1-1',
              }),
              n.a.createElement('path', {
                fill: '#ad1519',
                stroke: '#000',
                strokeWidth: '.4',
                d: 'M238.2 208.5l-1.1-1.6-3.3.4 2.6 2 1.8-.8',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeWidth: '.4',
                d:
                  'M177.3 212.8c7.4-2.1 17.6-3.4 28.8-3.4 11.3 0 21.4 1.3 28.9 3.4',
              }),
              n.a.createElement('path', {
                fill: '#c8b100',
                d:
                  'M182.3 183.8l1.4 1 2-3.2a7.4 7.4 0 01-3.6-7.2c.2-4.1 5.2-7.6 11.7-7.6 3.3 0 6.3 1 8.5 2.4 0-.6 0-1.2.2-1.8a17.4 17.4 0 00-8.7-2.1c-7.4 0-13.2 4.1-13.5 9.1a8.9 8.9 0 003 7.6l-1 1.8',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeWidth: '.4',
                d:
                  'M182.3 183.8l1.4 1 2-3.2a7.4 7.4 0 01-3.6-7.2c.2-4.1 5.2-7.6 11.7-7.6 3.3 0 6.3 1 8.5 2.4 0-.6 0-1.2.2-1.8a17.4 17.4 0 00-8.7-2.1c-7.4 0-13.2 4.1-13.5 9.1a8.9 8.9 0 003 7.6l-1 1.8',
              }),
              n.a.createElement('path', {
                fill: '#c8b100',
                d:
                  'M182.4 183.8a9.3 9.3 0 01-4-7.3c0-3.2 2-6.1 5.3-8a8.5 8.5 0 00-3.4 6.8 8.9 8.9 0 003 6.7l-.9 1.8',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeWidth: '.4',
                d:
                  'M182.4 183.8a9.3 9.3 0 01-4-7.3c0-3.2 2-6.1 5.3-8a8.5 8.5 0 00-3.4 6.8 8.9 8.9 0 003 6.7l-.9 1.8',
              }),
              n.a.createElement('path', {
                fill: '#c8b100',
                d:
                  'M160.1 187.1a8.8 8.8 0 01-2.3-5.9c0-1.3.3-2.6 1-3.8 2-4.2 8.4-7.2 16-7.2 2 0 4 .2 5.9.6l-1 1.4a25.5 25.5 0 00-4.9-.4c-7 0-12.8 2.7-14.5 6.3a7 7 0 00-.7 3.1 7.3 7.3 0 002.7 5.6l-2.6 4.1-1.3-1 1.7-2.8',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeWidth: '.4',
                d:
                  'M160.1 187.1a8.8 8.8 0 01-2.3-5.9c0-1.3.3-2.6 1-3.8 2-4.2 8.4-7.2 16-7.2 2 0 4 .2 5.9.6l-1 1.4a25.5 25.5 0 00-4.9-.4c-7 0-12.8 2.7-14.5 6.3a7 7 0 00-.7 3.1 7.3 7.3 0 002.7 5.6l-2.6 4.1-1.3-1 1.7-2.8z',
              }),
              n.a.createElement('path', {
                fill: '#c8b100',
                d:
                  'M162.7 173.3a10.5 10.5 0 00-4 4.1 8.6 8.6 0 00-.9 3.8c0 2.3.9 4.3 2.3 5.9l-1.5 2.5a10.4 10.4 0 01-2.3-6.5c0-4 2.5-7.5 6.4-9.8',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeWidth: '.4',
                d:
                  'M162.7 173.3a10.5 10.5 0 00-4 4.1 8.6 8.6 0 00-.9 3.8c0 2.3.9 4.3 2.3 5.9l-1.5 2.5a10.4 10.4 0 01-2.3-6.5c0-4 2.5-7.5 6.4-9.8z',
              }),
              n.a.createElement('path', {
                fill: '#c8b100',
                d:
                  'M206 164.4c1.7 0 3.2 1.1 3.5 2.6.3 1.4.4 2.9.4 4.5v1.1c.1 3.3.6 6.3 1.3 8.1l-5.2 5-5.2-5c.7-1.8 1.2-4.8 1.3-8.1v-1.1c0-1.6.2-3.1.4-4.5.3-1.5 1.8-2.6 3.5-2.6',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeWidth: '.4',
                d:
                  'M206 164.4c1.7 0 3.2 1.1 3.5 2.6.3 1.4.4 2.9.4 4.5v1.1c.1 3.3.6 6.3 1.3 8.1l-5.2 5-5.2-5c.7-1.8 1.2-4.8 1.3-8.1v-1.1c0-1.6.2-3.1.4-4.5.3-1.5 1.8-2.6 3.5-2.6z',
              }),
              n.a.createElement('path', {
                fill: '#c8b100',
                d:
                  'M206 166c1 0 1.7.6 1.8 1.4.2 1.2.4 2.6.4 4.2v1c.1 3.2.6 6 1.2 7.7l-3.4 3.2-3.4-3.2c.7-1.7 1.1-4.5 1.2-7.7v-1a28.1 28.1 0 01.4-4.2 2 2 0 011.8-1.4',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeWidth: '.4',
                d:
                  'M206 166c1 0 1.7.6 1.8 1.4.2 1.2.4 2.6.4 4.2v1c.1 3.2.6 6 1.2 7.7l-3.4 3.2-3.4-3.2c.7-1.7 1.1-4.5 1.2-7.7v-1a28.1 28.1 0 01.4-4.2 2 2 0 011.8-1.4z',
              }),
              n.a.createElement('path', {
                fill: '#c8b100',
                d:
                  'M229.7 183.8l-1.3 1-2-3.2a7.4 7.4 0 003.6-6.3 7 7 0 000-.9c-.2-4.1-5.3-7.6-11.7-7.6a15 15 0 00-8.5 2.4 23 23 0 00-.2-1.8 17.4 17.4 0 018.7-2.1c7.4 0 13.2 4.1 13.4 9.1a8.9 8.9 0 01-3 7.6l1 1.8',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeWidth: '.4',
                d:
                  'M229.7 183.8l-1.3 1-2-3.2a7.4 7.4 0 003.6-6.3 7 7 0 000-.9c-.2-4.1-5.3-7.6-11.7-7.6a15 15 0 00-8.5 2.4 23 23 0 00-.2-1.8 17.4 17.4 0 018.7-2.1c7.4 0 13.2 4.1 13.4 9.1a8.9 8.9 0 01-3 7.6l1 1.8',
              }),
              n.a.createElement('path', {
                fill: '#c8b100',
                d:
                  'M229.6 183.8a9.1 9.1 0 004.1-7.3c0-3.2-2.1-6.1-5.3-8a8.5 8.5 0 013.4 6.8 8.9 8.9 0 01-3.2 6.7l1 1.8',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeWidth: '.4',
                d:
                  'M229.6 183.8a9.1 9.1 0 004.1-7.3c0-3.2-2.1-6.1-5.3-8a8.5 8.5 0 013.4 6.8 8.9 8.9 0 01-3.2 6.7l1 1.8',
              }),
              n.a.createElement('path', {
                fill: '#c8b100',
                d:
                  'M252 187.1a8.8 8.8 0 002.2-5.9 8.7 8.7 0 00-.9-3.8c-2-4.2-8.4-7.2-16-7.2a29 29 0 00-6 .6l1 1.4a25.4 25.4 0 015-.4c7 0 12.8 2.7 14.4 6.3.5 1 .7 2 .7 3.1a7.3 7.3 0 01-2.6 5.6l2.5 4.1 1.3-1-1.7-2.8',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeWidth: '.4',
                d:
                  'M252 187.1a8.8 8.8 0 002.2-5.9 8.7 8.7 0 00-.9-3.8c-2-4.2-8.4-7.2-16-7.2a29 29 0 00-6 .6l1 1.4a25.4 25.4 0 015-.4c7 0 12.8 2.7 14.4 6.3.5 1 .7 2 .7 3.1a7.3 7.3 0 01-2.6 5.6l2.5 4.1 1.3-1-1.7-2.8z',
              }),
              n.a.createElement('path', {
                fill: '#c8b100',
                d:
                  'M249.3 173.3a10.6 10.6 0 014 4.1 8.7 8.7 0 01.9 3.8 8.8 8.8 0 01-2.3 5.9l1.6 2.5a10.4 10.4 0 002.3-6.5c0-4-2.6-7.5-6.5-9.8',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeWidth: '.4',
                d:
                  'M249.3 173.3a10.6 10.6 0 014 4.1 8.7 8.7 0 01.9 3.8 8.8 8.8 0 01-2.3 5.9l1.6 2.5a10.4 10.4 0 002.3-6.5c0-4-2.6-7.5-6.5-9.8z',
              }),
              n.a.createElement('path', {
                fill: '#fff',
                d:
                  'M204.2 181.4c0-1 .8-1.8 1.8-1.8s1.9.8 1.9 1.8-.9 1.7-1.9 1.7a1.8 1.8 0 01-1.8-1.7',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeWidth: '.4',
                d:
                  'M204.2 181.4c0-1 .8-1.8 1.8-1.8s1.9.8 1.9 1.8-.9 1.7-1.9 1.7a1.8 1.8 0 01-1.8-1.7z',
              }),
              n.a.createElement('path', {
                fill: '#fff',
                stroke: '#000',
                strokeWidth: '.4',
                d:
                  'M204.2 178c0-1 .8-1.8 1.8-1.8s1.9.8 1.9 1.8-.9 1.7-1.9 1.7a1.8 1.8 0 01-1.8-1.7m.4-3.7c0-.7.6-1.3 1.4-1.3.8 0 1.5.6 1.5 1.3 0 .8-.7 1.4-1.5 1.4s-1.4-.6-1.4-1.4m.4-3.3c0-.5.4-1 1-1s1 .5 1 1-.4 1-1 1a1 1 0 01-1-1m.2-2.8c0-.5.4-.8.8-.8.5 0 .9.3.9.8 0 .4-.4.8-.9.8a.8.8 0 01-.8-.8',
              }),
              n.a.createElement('path', {
                fill: '#c8b100',
                stroke: '#000',
                strokeWidth: '.4',
                d:
                  'M206.2 191.8l1.2.2a4.6 4.6 0 004.5 6 4.7 4.7 0 004.4-3c.1 0 .5-1.7.7-1.7.2 0 .1 1.8.2 1.7.3 2.3 2.4 3.8 4.7 3.8a4.6 4.6 0 004.7-5l1.5-1.5.7 2a4 4 0 00-.4 1.9 4.4 4.4 0 004.5 4.2c1.6 0 3-.7 3.8-1.9l.9-1.2v1.5c0 1.5.6 2.8 2 3 0 0 1.7.1 4-1.6 2.1-1.7 3.3-3.1 3.3-3.1l.2 1.7s-1.8 2.8-3.8 4c-1 .6-2.7 1.3-4 1-1.4-.2-2.4-1.3-3-2.6a6.7 6.7 0 01-3.3 1 6.5 6.5 0 01-6.1-3.7 7 7 0 01-10.4-.3 7 7 0 01-4.6 1.8 6.9 6.9 0 01-5.7-3 6.9 6.9 0 01-5.7 3 7 7 0 01-4.7-1.8 7 7 0 01-10.4.3 6.5 6.5 0 01-6 3.7 6.7 6.7 0 01-3.4-1c-.6 1.3-1.5 2.4-3 2.7-1.2.2-2.9-.5-4-1.1-2-1.2-3.8-4-3.8-4l.2-1.7s1.2 1.4 3.4 3.1c2.2 1.8 3.9 1.6 3.9 1.6 1.4-.2 2-1.5 2-3v-1.5l1 1.2a4.6 4.6 0 003.7 2c2.5 0 4.5-2 4.5-4.3a4 4 0 00-.4-2l.8-1.9 1.5 1.5a4.4 4.4 0 000 .6c0 2.4 2 4.4 4.6 4.4 2.4 0 4.4-1.5 4.7-3.8 0 0 0-1.6.2-1.7.2 0 .6 1.7.7 1.6a4.7 4.7 0 004.5 3.1 4.6 4.6 0 004.5-6l1.2-.2',
              }),
              n.a.createElement('path', {
                fill: '#fff',
                stroke: '#000',
                strokeWidth: '.4',
                d:
                  'M238.6 197.7c.3-.8 0-1.6-.6-1.8-.5-.2-1.2.3-1.5 1.1-.3.8 0 1.6.6 1.8.5.2 1.2-.3 1.5-1.1m-20.5-4c0-.8-.3-1.6-1-1.6-.5-.1-1 .5-1.2 1.4-.1.8.3 1.5.9 1.6.6 0 1.2-.6 1.3-1.4m-23.9 0c0-.8.4-1.6 1-1.6.6-.1 1.1.5 1.2 1.4.1.8-.3 1.5-.9 1.6-.6 0-1.1-.6-1.2-1.4m-20.6 4c-.2-.8 0-1.6.6-1.8.6-.2 1.2.3 1.5 1.1.3.8 0 1.6-.5 1.8-.6.2-1.3-.3-1.6-1.1',
              }),
              n.a.createElement('path', {
                fill: '#c8b100',
                stroke: '#000',
                strokeWidth: '.4',
                d:
                  'M182.7 184a5.1 5.1 0 012.2 2.9s0-.3.6-.6 1-.3 1-.3l-.1 1.3-.3 2.2a7.4 7.4 0 01-.7 1.6 1.9 1.9 0 00-1.5-.4 1.8 1.8 0 00-1.2.9s-.7-.6-1.2-1.3l-1.1-2-.7-1.1s.5-.2 1.1 0c.6 0 .8.2.8.2a4.9 4.9 0 011-3.4m.4 9.8a1.8 1.8 0 01-.6-1c0-.5 0-.9.3-1.2 0 0-.9-.5-1.8-.7-.7-.2-2-.2-2.3-.2h-1l.2.5c.2.5.5.7.5.7a5 5 0 00-3 2 5.3 5.3 0 003.5 1l-.2.8v.6l1-.4c.3-.1 1.5-.5 2-1 .8-.4 1.5-1.1 1.5-1.1m2.7-.5a1.6 1.6 0 00.2-1.1 1.7 1.7 0 00-.6-1l1.4-1.3a10 10 0 012-.9l1.1-.4v.6a5.7 5.7 0 01-.2.8 5 5 0 013.4 1 5 5 0 01-2.9 2 6.4 6.4 0 00.7 1.2h-1c-.4 0-1.6 0-2.3-.2a11 11 0 01-1.8-.7',
              }),
              n.a.createElement('path', {
                fill: '#ad1519',
                stroke: '#000',
                strokeWidth: '.4',
                d:
                  'M182.2 192.4c0-1 1-2 2-2s2.2 1 2.2 2c0 1.1-1 2-2.1 2a2 2 0 01-2.1-2',
              }),
              n.a.createElement('path', {
                fill: '#c8b100',
                stroke: '#000',
                strokeWidth: '.4',
                d:
                  'M206.1 180.8a5.7 5.7 0 011.9 3.7s.2-.3.9-.5c.7-.3 1.2-.2 1.2-.2l-.5 1.4-.8 2.4a8.2 8.2 0 01-1 1.7 2.1 2.1 0 00-1.7-.7c-.6 0-1.2.3-1.6.7 0 0-.6-.7-1-1.7l-.8-2.4-.5-1.4 1.2.2c.7.2.9.5.9.5 0-1.4.8-2.8 1.8-3.7',
              }),
              n.a.createElement('path', {
                fill: '#c8b100',
                stroke: '#000',
                strokeWidth: '.4',
                d:
                  'M204.6 191.8a2 2 0 01-.5-1.2c0-.5.1-1 .4-1.3 0 0-.8-.7-1.8-1-.7-.4-2-.7-2.5-.7l-1.2-.2.2.6.4.9a5.9 5.9 0 00-3.7 1.7c1 .9 2.3 1.6 3.7 1.6l-.4 1-.2.6 1.2-.2c.4-.1 1.8-.4 2.5-.7 1-.4 1.9-1 1.9-1m3 0a1.9 1.9 0 00.1-2.6s.9-.7 1.8-1a8 8 0 012.5-.7l1.2-.3-.1.7-.4.9c1.4 0 2.7.8 3.6 1.7a5.9 5.9 0 01-3.6 1.6 6.9 6.9 0 00.5 1.6l-1.2-.2-2.5-.7c-1-.4-1.8-1-1.8-1m22-8a5.2 5.2 0 00-2.2 3l-.7-.6c-.6-.3-1-.3-1-.3l.2 1.3c0 .3 0 1.3.3 2.2.2 1 .6 1.6.6 1.6a2 2 0 011.5-.4c.6.1 1 .5 1.3.9l1.1-1.3c.6-.8 1-1.7 1.1-2l.7-1.1s-.4-.2-1 0c-.7 0-1 .2-1 .2a4.9 4.9 0 00-1-3.4m-.3 9.8c.3-.3.5-.6.6-1a1.6 1.6 0 00-.2-1.2s.8-.5 1.7-.7c.7-.2 2-.2 2.3-.2h1.1l-.3.5a6.2 6.2 0 01-.4.7 5 5 0 012.9 2 5.3 5.3 0 01-3.5 1l.2.8v.6l-1-.4c-.3-.1-1.4-.5-2-1-.8-.4-1.4-1.1-1.4-1.1m-2.8-.5a1.7 1.7 0 01-.2-1.1c0-.5.3-.8.6-1 0 0-.6-.8-1.4-1.3-.6-.4-1.7-.8-2-.9a171.4 171.4 0 01-1-.4v.6c0 .5.2.8.2.8a5.2 5.2 0 00-3.5 1c.7.9 1.7 1.7 3 2 0 0-.3.2-.5.7l-.3.5h1c.4 0 1.7 0 2.3-.2a11.1 11.1 0 001.8-.7',
              }),
              n.a.createElement('path', {
                fill: '#ad1519',
                stroke: '#000',
                strokeWidth: '.4',
                d:
                  'M226 192.4c0-1 1-2 2-2s2.1 1 2.1 2a2 2 0 01-2 2 2 2 0 01-2.1-2m23.2 4.4c-.4-.5-1.4-.4-2.2.2-.8.7-1 1.6-.5 2.2.5.5 1.5.4 2.3-.3.7-.6 1-1.6.5-2',
              }),
              n.a.createElement('path', {
                fill: '#c8b100',
                stroke: '#000',
                strokeWidth: '.4',
                d:
                  'M246.3 198l.7-1c.7-.6 1.8-.7 2.3-.2l.1.2s1-2 2.3-2.6c1.3-.7 3.4-.5 3.4-.5a2.8 2.8 0 00-2.9-2.8 3 3 0 00-2.4 1l-.2-1s-1.3.3-1.9 1.8c-.6 1.5 0 3.6 0 3.6s-.3-.9-.7-1.5a8 8 0 00-2.4-1.6l-1.3-.7-.1.5a5 5 0 000 .8 7.9 7.9 0 00-3.7.5 4.7 4.7 0 002.5 2.2l-.8.7a4 4 0 00-.4.5l1.3.2 2.5.2a14.5 14.5 0 001.7-.2m-80.3 0c0-.4-.3-.7-.7-1-.7-.7-1.7-.8-2.2-.3l-.2.3s-1-2-2.3-2.7c-1.2-.7-3.3-.5-3.3-.5a2.8 2.8 0 012.8-2.8c1 0 1.9.4 2.4 1l.2-1s1.3.3 2 1.8c.5 1.5-.1 3.6-.1 3.6s.3-.9.8-1.5a8 8 0 012.4-1.6l1.3-.7v1.3a7.9 7.9 0 013.7.5 4.7 4.7 0 01-2.5 2.2l.8.7.4.5-1.2.2-2.6.2a14.7 14.7 0 01-1.7-.2',
              }),
              n.a.createElement('path', {
                fill: '#ad1519',
                stroke: '#000',
                strokeWidth: '.4',
                d:
                  'M163 196.8c.6-.5 1.6-.4 2.4.3.7.6 1 1.5.4 2-.5.6-1.5.5-2.2-.2-.8-.6-1-1.6-.5-2m41-6.3c0-1.1.9-2 2-2s2.1.9 2.1 2c0 1-1 2-2 2a2 2 0 01-2.1-2',
              }),
              n.a.createElement('path', {
                fill: '#005bbf',
                stroke: '#000',
                strokeWidth: '.3',
                d:
                  'M201.8 160.6c0-2.2 1.9-4 4.3-4s4.2 1.8 4.2 4-1.9 4-4.3 4a4.1 4.1 0 01-4.2-4',
              }),
              n.a.createElement('path', {
                fill: '#c8b100',
                stroke: '#000',
                strokeWidth: '.3',
                d:
                  'M205 149.3v2.2h-2.4v2.2h2.3v6.3H202l-.2.6c0 .6.1 1.1.3 1.6h7.9c.2-.5.3-1 .3-1.6l-.2-.6h-2.8v-6.3h2.3v-2.2h-2.3v-2.2h-2.4z',
              }),
              n.a.createElement('path', {
                fill: '#ccc',
                d:
                  'M206.5 330.6a82 82 0 01-35.5-8.2 22.7 22.7 0 01-12.8-20.4v-32h96.4v32a22.7 22.7 0 01-12.8 20.4 81 81 0 01-35.3 8.2',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeWidth: '.5',
                d:
                  'M206.5 330.6a82 82 0 01-35.5-8.2 22.7 22.7 0 01-12.8-20.4v-32h96.4v32a22.7 22.7 0 01-12.8 20.4 81 81 0 01-35.3 8.2z',
              }),
              n.a.createElement('path', {
                fill: '#ccc',
                d: 'M206.3 270h48.3v-53.5h-48.3V270z',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeWidth: '.5',
                d: 'M206.3 270h48.3v-53.5h-48.3V270z',
              }),
              n.a.createElement('path', {
                fill: '#ad1519',
                d:
                  'M206.3 302c0 12.6-10.7 22.9-24 22.9s-24.2-10.3-24.2-23v-32h48.2v32',
              }),
              n.a.createElement('path', {
                fill: '#c8b100',
                stroke: '#000',
                strokeWidth: '.5',
                d: 'M168.6 320.9c1.5.8 3.6 2 5.8 2.6l-.1-54.7h-5.7v52z',
              }),
              n.a.createElement('path', {
                fill: '#c8b100',
                stroke: '#000',
                strokeLinejoin: 'round',
                strokeWidth: '.5',
                d: 'M158 301.6a24.4 24.4 0 005.5 15v-47.5h-5.4v32.5z',
              }),
              n.a.createElement('path', {
                fill: '#c7b500',
                stroke: '#000',
                strokeWidth: '.5',
                d: 'M179.4 324.7a26.6 26.6 0 005.6 0v-55.9h-5.6v56z',
              }),
              n.a.createElement('path', {
                fill: '#c8b100',
                stroke: '#000',
                strokeWidth: '.5',
                d: 'M190 323.5a19 19 0 005.8-2.5v-52.2H190l-.1 54.7z',
              }),
              n.a.createElement('path', {
                fill: '#ad1519',
                d: 'M158.1 270h48.2v-53.5H158V270z',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeWidth: '.5',
                d: 'M158.1 270h48.2v-53.5H158V270z',
              }),
              n.a.createElement('path', {
                fill: '#c8b100',
                stroke: '#000',
                strokeWidth: '.5',
                d: 'M201 316c2.4-2 4.6-6.8 5.4-12.2l.1-35H201l.1 47.3z',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeWidth: '.5',
                d:
                  'M206.3 302c0 12.6-10.7 22.9-24 22.9s-24.2-10.3-24.2-23v-32h48.2v32',
              }),
              n.a.createElement('path', {
                fill: '#ad1519',
                d:
                  'M254.6 270v32c0 12.6-10.8 22.9-24.1 22.9s-24.2-10.3-24.2-23v-32h48.3',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeWidth: '.5',
                d:
                  'M254.6 270v32c0 12.6-10.8 22.9-24.1 22.9s-24.2-10.3-24.2-23v-32h48.3',
              }),
              n.a.createElement('path', {
                fill: '#c8b100',
                d:
                  'M215.1 294.1l.1.5c0 .6-.5 1-1.1 1a1 1 0 01-1.1-1v-.5h-1.5a2.5 2.5 0 001.8 2.9v3.9h1.6V297a2.6 2.6 0 001.7-1.6h4.4v-1.2h-6m21.8 0v1.2h-4a2.5 2.5 0 01-.3.6l4.6 5.2-1.2 1-4.6-5.3-.2.1v8.7h-1.6V297h-.2l-4.8 5.2-1.2-1 4.7-5.3a2.1 2.1 0 01-.2-.4h-4V294h13zm2.6 0v1.2h4.4c.3.8.9 1.4 1.7 1.6v3.9h1.6V297a2.5 2.5 0 001.8-2.4 2 2 0 000-.5h-1.6l.1.5c0 .6-.5 1-1 1-.7 0-1.2-.4-1.2-1a1 1 0 01.1-.5h-5.9m-6.7 22.1a15.6 15.6 0 003.7-1l.8 1.4a17.6 17.6 0 01-4.3 1.2 2.6 2.6 0 01-2.6 2 2.6 2.6 0 01-2.5-2 17.5 17.5 0 01-4.6-1.2l.8-1.4c1.3.5 2.6.9 4 1a2.5 2.5 0 011.5-1.3v-6.7h1.6v6.7c.7.2 1.3.7 1.6 1.4zm-11-2.2l-.8 1.4a16.6 16.6 0 01-3.6-3.1c-.9.2-1.8 0-2.5-.5a2.4 2.4 0 01-.3-3.5l.1-.1a15.3 15.3 0 01-1.3-4.8h1.7a13.1 13.1 0 001 4c.5 0 1 0 1.4.2l4.1-4.5 1.3 1-4.1 4.5c.5.9.5 2-.1 2.8a15.2 15.2 0 003.1 2.6zm-6-4.8c.3-.4 1-.5 1.5 0s.5 1 .1 1.4a1.2 1.2 0 01-1.6.1 1 1 0 010-1.5zm-2.2-4.5l-1.6-.3-.3-4.3 1.7-.6v2.5c0 1 0 1.8.2 2.7zm1.4-5.3l1.7.4v2.2c0-.8.3 2.1.3 2.1l-1.7.6a14 14 0 01-.3-2.7v-2.6zm5.6 13.7a15.7 15.7 0 004.8 2.6l.4-1.6a13.7 13.7 0 01-4-2l-1.2 1m-.8 1.4a17.4 17.4 0 004.8 2.6l-1.2 1.1a18.7 18.7 0 01-4-2l.4-1.7m2.2-9.4l1.6.7 3-3.3-1-1.4-3.6 4m-1.3-1l-1-1.4 3-3.3 1.6.7-3.6 4m18.1 9.9l.8 1.4a16.7 16.7 0 003.6-3.1c.9.2 1.8 0 2.5-.5a2.4 2.4 0 00.3-3.5l-.1-.1a15 15 0 001.3-4.8h-1.7a13.3 13.3 0 01-1 4 3 3 0 00-1.4.2l-4.1-4.5-1.3 1 4.1 4.5a2.4 2.4 0 00.1 2.8 15 15 0 01-3.1 2.6zm6-4.8a1.2 1.2 0 00-1.5 0 1 1 0 00-.1 1.4 1.2 1.2 0 001.6.1 1 1 0 000-1.5zm2.2-4.5l1.6-.3.3-4.3-1.7-.6v2.5c0 1 0 1.9-.2 2.8zm-1.4-5.3l-1.7.4v2.2c0-.8-.3 2.1-.3 2.1l1.7.6.3-2.7v-2.6m-5.6 13.7a15.7 15.7 0 01-4.8 2.6l-.4-1.6a13.7 13.7 0 004-2l1.2 1m.8 1.4a17.4 17.4 0 01-4.8 2.6l1.2 1.1a18.6 18.6 0 004-2l-.4-1.7m-2.2-9.4l-1.6.7-2.9-3.3 1-1.4 3.5 4m1.3-1l1-1.4-3-3.3-1.6.7 3.6 4m-20.1-8.7l.5 1.6h4.5l.5-1.6h-5.5m21.1 0l-.5 1.6h-4.5l-.5-1.6h5.5m-11.6 21.9c0-.6.5-1 1.1-1a1 1 0 011.1 1c0 .6-.5 1-1 1a1.1 1.1 0 01-1.2-1zm1.9-7.8l1.7-.4v-4.3l-1.7-.5v5.2m-1.6 0l-1.7-.4v-4.3l1.7-.5v5.2',
              }),
              n.a.createElement('path', {
                fill: '#c8b100',
                d:
                  'M211.5 294.2c.2-1 1-1.6 1.8-2V287h1.6v5.3c.8.3 1.5.9 1.7 1.6h4.4v.3h-6a1.2 1.2 0 00-1-.6c-.4 0-.7.3-1 .6h-1.5m12.2 0v-.3h4.1a2.4 2.4 0 01.2-.3l-5-5.7 1.2-1 5 5.6.2-.1V285h1.6v7.3h.3l4.9-5.5 1.2 1-4.9 5.5.3.6h4v.3h-13zm21.6 0a1.1 1.1 0 011-.6c.5 0 .8.3 1 .6h1.6c-.2-1-.9-1.6-1.8-2V287h-1.6v5.3c-.8.3-1.4.8-1.7 1.6h-4.4v.3h6m-30.2-15l6 6.8 1.3-1-6.1-6.7.3-.6h4.4V276h-4.4a2.6 2.6 0 00-2.5-1.7 2.6 2.6 0 00-2.7 2.5 2.5 2.5 0 001.8 2.4v5.2h1.6v-5.2h.3zm32 0v5.3h-1.7v-5.2a2.5 2.5 0 01-.4-.2l-6 6.8-1.3-1 6.2-6.9-.1-.3h-4.5V276h4.5a2.6 2.6 0 012.4-1.7 2.6 2.6 0 012.7 2.5 2.5 2.5 0 01-1.9 2.4zm-16.1 0v3.3h-1.7v-3.2a2.6 2.6 0 01-1.7-1.6h-4V276h4a2.6 2.6 0 012.5-1.7c1.2 0 2.2.7 2.5 1.7h4v1.6h-4a2.5 2.5 0 01-1.6 1.6zm-17.8 4l-1.7.4v4.3l1.7.5v-5.2m1.6 0l1.7.4v4.3l-1.7.5v-5.2m30.6 0l-1.7.4v4.3l1.7.5v-5.2m1.6 0l1.7.4v4.3l-1.7.5v-5.2m-25.5.8l1.6-.7 2.9 3.3-1 1.4-3.5-4m-1.3 1l-1 1.4 3 3.3 1.6-.7-3.6-4m18.5-1.1l-1.6-.7-3 3.3 1 1.4 3.6-4m1.2 1l1 1.4-3 3.3-1.5-.7 3.5-4m-20.3 9l.5-1.6h4.5l.5 1.6h-5.5m-6.7-17c0-.6.5-1 1.2-1a1 1 0 011 1c0 .6-.4 1-1 1a1.1 1.1 0 01-1.2-1zm12.1.8l-.5 1.6h-4.5l-.5-1.6h5.5m0-1.6l-.5-1.6h-4.5l-.5 1.6h5.5m15.7 17.8l-.5-1.6h-4.5l-.5 1.6h5.5m4.4-17c0-.6.5-1 1.1-1a1 1 0 011.1 1c0 .6-.5 1-1 1a1.1 1.1 0 01-1.2-1zm-16.1 0c0-.6.5-1 1.1-1a1 1 0 011.1 1c0 .6-.5 1-1.1 1a1.1 1.1 0 01-1.1-1zm6.2.8l.5 1.6h4.6l.5-1.6h-5.6m0-1.6l.5-1.6h4.6l.5 1.6h-5.6m-5.9 5l-1.7.5v4.3l1.7.5V281m1.7 0l1.6.5v4.3l-1.6.5V281',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#c8b100',
                strokeWidth: '.3',
                d:
                  'M232.7 316.3a15.6 15.6 0 003.7-1.1l.8 1.4a17.6 17.6 0 01-4.3 1.2 2.6 2.6 0 01-2.6 2 2.6 2.6 0 01-2.5-2 17.5 17.5 0 01-4.6-1.2l.8-1.4c1.3.5 2.6.9 4 1a2.5 2.5 0 011.5-1.3v-6.7h1.6v6.7c.7.2 1.3.7 1.6 1.4zm-4.7-20.4a2.3 2.3 0 01-.2-.5h-4V294h4a2.6 2.6 0 01.2-.4l-5-5.6 1.2-1 5 5.5a2.2 2.2 0 01.2 0V285h1.7v7.3h.2l4.9-5.5 1.2 1-4.9 5.5.3.6h4v1.5h-4c0 .2-.2.4-.3.5l4.7 5.3-1.3 1-4.6-5.3-.2.1v8.7h-1.6V297l-.2-.1-4.8 5.3-1.2-1 4.7-5.3m-12.8-16.7l6 6.8 1.3-1-6.1-6.7.3-.6h4.4V276h-4.4a2.6 2.6 0 00-2.5-1.7 2.6 2.6 0 00-2.6 2.5 2.5 2.5 0 001.7 2.4v5.2h1.6v-5.2h.3zm6.5 34.8l-.8 1.4a16.6 16.6 0 01-3.6-3.1c-.9.2-1.8 0-2.5-.5a2.4 2.4 0 01-.3-3.5l.1-.1a15.3 15.3 0 01-1.2-4.8h1.6a13.1 13.1 0 001 4c.5 0 1 0 1.4.2l4.1-4.5 1.3 1-4.1 4.5c.6.9.5 2-.1 2.8a15.2 15.2 0 003.1 2.6zm-8.4-13.1V297a2.5 2.5 0 01-1.8-2.4c0-1 .8-2 1.8-2.4V287h1.6v5.3c.8.2 1.5.8 1.7 1.6h4.4v1.5h-4.4a2.6 2.6 0 01-1.6 1.6v3.9h-1.7m2.3 8.3c.4-.4 1.1-.5 1.6 0s.5 1 .1 1.4a1.2 1.2 0 01-1.6.1 1 1 0 010-1.5zm-2-4.5l-1.7-.3-.3-4.3 1.7-.6v2.5c0 1 0 1.8.3 2.7zm1.4-5.3l1.6.4v2.2c0-.8.3 2.1.3 2.1l-1.7.6-.3-2.7v-2.6zm5.5 13.7a15.7 15.7 0 004.8 2.6l.4-1.6a13.7 13.7 0 01-4-2l-1.2 1m-.8 1.4a17.4 17.4 0 004.8 2.6l-1.2 1.1a18.7 18.7 0 01-4-2l.4-1.7',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#c8b100',
                strokeWidth: '.3',
                d:
                  'M221.9 305.1l1.6.7 3-3.3-1-1.4-3.6 4m-1.3-1l-1-1.4 3-3.3 1.6.7-3.6 4m-7.6-9.5c0-.6.5-1 1-1 .7 0 1.2.5 1.2 1 0 .6-.5 1.1-1.1 1.1a1 1 0 01-1.1-1zm25.7 19.4l.8 1.4a16.7 16.7 0 003.6-3.1c.9.2 1.8 0 2.6-.5a2.4 2.4 0 00.2-3.5l-.1-.1a15 15 0 001.3-4.8h-1.7a13.3 13.3 0 01-1 4 3 3 0 00-1.4.2l-4.1-4.5-1.3 1 4.1 4.5a2.4 2.4 0 00.1 2.8 15 15 0 01-3 2.6zm8.4-13.1V297a2.5 2.5 0 001.8-2.4c0-1-.7-2-1.8-2.4V287h-1.6v5.3c-.8.2-1.4.8-1.7 1.6h-4.4v1.5h4.4c.3.8.9 1.3 1.7 1.6v3.9h1.6zm-2.3 8.3a1.2 1.2 0 00-1.6 0 1 1 0 00-.1 1.4 1.2 1.2 0 001.6.1 1 1 0 000-1.5zm2-4.5l1.7-.3.3-4.3-1.7-.6v2.5c0 1 0 1.8-.2 2.7zm-1.3-5.3l-1.7.4v2.2c0-.8-.3 2.1-.3 2.1l1.7.6.3-2.7v-2.6m1.6-20.1v5.2h-1.6v-5.2a2.3 2.3 0 01-.4-.2l-6 6.8-1.2-1 6-7v-.2h-4.5V276h4.4a2.6 2.6 0 012.5-1.7 2.6 2.6 0 012.6 2.5 2.5 2.5 0 01-1.8 2.4zm-16 0v3.2h-1.7v-3.2a2.6 2.6 0 01-1.7-1.6h-4V276h4c.4-1 1.3-1.7 2.5-1.7s2.2.7 2.5 1.7h4v1.6h-4a2.5 2.5 0 01-1.6 1.6zm8.8 33.8a15.7 15.7 0 01-4.8 2.6l-.4-1.6a13.7 13.7 0 004-2l1.2 1m.8 1.4a17.4 17.4 0 01-4.8 2.6l1.2 1.1a18.7 18.7 0 004-2l-.4-1.7m-27.4-31.4l-1.7.5v4.3l1.7.5v-5.2m1.7 0l1.6.4v4.3l-1.6.5V283m30.5 0l-1.7.5v4.3l1.7.5V283',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#c8b100',
                strokeWidth: '.3',
                d:
                  'M247.1 283.1l1.7.5v4.3l-1.7.5V283m-8.6 22l-1.6.7-2.9-3.3 1-1.4 3.5 4m1.3-1l1-1.4-3-3.3-1.6.7 3.6 4m-18.2-20l1.6-.7 3 3.3-1 1.4-3.6-4m-1.3 1l-1 1.4 3 3.3 1.6-.7-3.6-4m18.5-1.1l-1.6-.7-3 3.3 1 1.4 3.6-4m1.2 1l1 1.4-3 3.2-1.5-.6 3.5-4m-20.3 9l.5-1.6h4.5l.5 1.6h-5.5m0 1.5l.5 1.6h4.5l.5-1.6h-5.5M213 277c0-.6.5-1 1.2-1 .6 0 1 .4 1 1s-.4 1-1 1a1 1 0 01-1.2-1zm12.1.8l-.5 1.6h-4.5l-.5-1.6h5.5m0-1.6l-.5-1.6h-4.5l-.5 1.6h5.5m20.1 18.5c0-.5.5-1 1.1-1 .6 0 1.1.5 1.1 1 0 .6-.5 1.1-1 1.1a1 1 0 01-1.2-1zm-4.4-.7l-.5-1.6h-4.5l-.5 1.6h5.5m0 1.5l-.5 1.6h-4.5l-.5-1.6h5.5m-11.6 21.9c0-.6.5-1 1.1-1 .6 0 1.1.4 1.1 1s-.5 1-1 1a1.1 1.1 0 01-1.2-1zm1.9-7.8l1.7-.4v-4.3l-1.7-.5v5.2m-1.6 0l-1.7-.4v-4.3l1.7-.5v5.2m15.7-32.6c0-.6.5-1 1.1-1a1 1 0 011.1 1c0 .6-.5 1-1 1a1.1 1.1 0 01-1.2-1zm-16.1 0c0-.6.5-1 1.1-1a1 1 0 011.1 1c0 .6-.5 1-1 1a1.1 1.1 0 01-1.2-1zm6.2.8l.5 1.6h4.6l.5-1.6h-5.5m0-1.6l.4-1.6h4.6l.5 1.6h-5.5m-6 5l-1.6.5v4.3l1.6.5V281m1.7 0l1.6.5v4.3l-1.6.5V281',
              }),
              n.a.createElement('path', {
                fill: '#058e6e',
                d:
                  'M227.7 294.7a2.6 2.6 0 012.6-2.5 2.6 2.6 0 012.6 2.5 2.6 2.6 0 01-2.6 2.4c-1.4 0-2.6-1-2.6-2.4',
              }),
              n.a.createElement('path', {
                fill: '#db4446',
                d:
                  'M230.9 229.7v-.6l.1-.3-2.3-.1a5.9 5.9 0 01-2.3-1.2c-.8-.7-1.1-1-1.6-1.2-1.3-.2-2.3.4-2.3.4s1 .4 1.7 1.3 1.5 1.3 1.8 1.4c.6.2 2.6 0 3.1.1l1.8.2',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeWidth: '.4',
                d:
                  'M230.9 229.7v-.6l.1-.3-2.3-.1a5.9 5.9 0 01-2.3-1.2c-.8-.7-1.1-1-1.6-1.2-1.3-.2-2.3.4-2.3.4s1 .4 1.7 1.3 1.5 1.3 1.8 1.4c.6.2 2.6 0 3.1.1l1.8.2z',
              }),
              n.a.createElement('path', {
                fill: '#ed72aa',
                stroke: '#000',
                strokeWidth: '.4',
                d:
                  'M238.1 227.5v1.4c.2.6-.1 1.2 0 1.5 0 .4.1.6.3.9l.2.9-.7-.5-.6-.4v1c.1.2.3.8.6 1.1l1 1.3c.2.5.1 1.4.1 1.4s-.4-.7-.8-.8l-1.2-.7s.7.8.7 1.5c0 .8-.3 1.6-.3 1.6s-.3-.7-.8-1.1l-1-.9s.4 1.2.4 2v2.3l-.9-1-1-.7c0-.2.5.6.6 1.1 0 .5.3 2.3 1.8 4.5 1 1.3 2.3 3.6 5.3 2.9 3-.8 1.9-4.8 1.3-6.7a16.8 16.8 0 01-1-4.6c0-.8.6-2.9.5-3.3a8 8 0 01.2-3.1c.4-1.3.7-1.8.9-2.3.2-.6.4-.9.4-1.3l.1-1.3.7 1.3.1 1.5s.1-1 1-1.6c.8-.6 1.8-1.1 2-1.4.3-.3.3-.5.3-.5s0 1.8-.6 2.6l-1.7 2s.7-.3 1.2-.3h.9s-.6.4-1.4 1.6c-.8 1-.5 1.2-1 2.1-.6 1-1 1-1.7 1.5-1 .8-.5 4.2-.4 4.7.2.5 2 4.5 2 5.5s.2 3.2-1.5 4.6c-1.1 1-3 1-3.4 1.2-.4.3-1.2 1.1-1.2 2.8 0 1.7.6 2 1 2.4.6.5 1.2.2 1.3.6.2.3.2.5.5.7.2.2.3.4.2.8 0 .3-.8 1.1-1.1 1.7l-.8 2.4c0 .2-.1 1 .1 1.3 0 0 .9 1 .3 1.2-.4.2-.8-.2-1-.2l-.9.5c-.3-.1-.3-.3-.4-.8l-.1-.7c-.2 0-.3.2-.4.5 0 .2 0 .8-.3.8-.2 0-.5-.4-.8-.5-.2 0-.8-.2-.8-.4 0-.3.4-.9.7-1 .4 0 .8-.3.5-.5s-.5-.2-.7 0-.8 0-.7-.2v-.8c0-.2-.4-.5.1-.8.6-.3.8.2 1.4.1.6 0 .8-.3 1-.6.2-.3.2-1-.2-1.4-.4-.5-.7-.5-.9-.8l-.3-.9v2.2l-.7-.8c-.3-.3-.6-1.3-.6-1.3v1.3c0 .4.3.7.2.8-.1.1-.8-.7-1-.8a3.7 3.7 0 01-1-1l-.4-1.4a4.2 4.2 0 010-1.5l.4-1h-1.4c-.7 0-1.2-.3-1.5.2-.3.5-.2 1.5.2 2.8.3 1.2.5 1.9.4 2.1a3 3 0 01-.7.8h-.9a2.5 2.5 0 00-1.2-.3h-1.3l-1.1-.3c-.3.1-.8.3-.6.7.2.6-.2.7-.5.7l-.9-.2c-.4-.1-.9 0-.8-.4 0-.4.2-.4.4-.7.2-.3.2-.5 0-.5h-.6c-.2.2-.5.5-.8.4-.2-.1-.4-.4-.4-1s-.7-1.2 0-1.1c.5 0 1.3.4 1.4 0 .2-.3 0-.4-.2-.7s-.8-.4-.3-.7l.7-.5c.1-.2.4-.8.7-.6.6.2 0 .7.6 1.3.6.7 1 1 2 .8 1 0 1.3-.2 1.3-.5l-.1-1v-1s-.4.3-.5.6l-.4.8v-2a8 8 0 00-.2-.8l-.3.9-.1 1s-.7-.5-.5-1.5c.1-.7-.1-1.6.1-2 .2-.3.7-1.5 2-1.6h2.6l2-.3s-2.8-1.4-3.5-1.9a9.5 9.5 0 01-2-2l-.6-1.6s-.5 0-1 .3a5 5 0 00-1.2 1l-.7 1 .1-1.2v-.8s-.4 1.2-1 1.7l-1.4 1v-.8l.2-1s-.4.8-1.1 1c-.7 0-1.8 0-1.9.4 0 .5.2 1 0 1.4 0 .3-.4.5-.4.5l-.8-.4c-.4 0-.7.2-.7.2s-.3-.4-.2-.7c.1-.2.7-.6.5-.8l-.8.2c-.3.1-.8.3-.8-.2 0-.4.2-.7 0-1 0-.3 0-.5.2-.6l1.2-.1c0-.2-.2-.5-.8-.6-.6-.1-.8-.5-.5-.8.3-.2.3-.3.5-.6.1-.2.2-.7.7-.5.5.3.4.8 1 1a4 4 0 002-.2l1.5-1 1.5-1-1-.8c-.3-.3-.7-.9-1-1a8.3 8.3 0 00-1.8-.6 9 9 0 01-1.7-.5l.8-.3c.2-.2.6-.6.8-.6h.3-1.4c-.3-.1-1-.6-1.3-.6l-.8.1s.8-.4 1.4-.5l1-.1s-.9-.3-1.1-.6l-.6-1c-.2-.1-.3-.5-.6-.5l-1 .3c-.4 0-.6-.2-.6-.6l-.1-.5c-.2-.3-.6-.8-.2-1h1.4c0-.2-.5-.6-.8-.8-.4-.2-1-.5-.7-.8l.8-.5c.2-.3.3-1 .7-.7.4.2.8 1.2 1.1 1.1.3 0 .3-.8.3-1 0-.4 0-1 .2-.9.3 0 .5.4 1 .5.4 0 1-.1 1 .2 0 .3-.3.7-.6 1-.3.3-.4 1-.3 1.4.2.5.7 1.2 1.2 1.4.4.3 1.2.5 1.7.9.5.3 1.7 1.2 2.1 1.3l.8.4s.5-.2 1.1-.2c.7 0 2.1 0 2.6-.2.6-.2 1.3-.6 1-1-.1-.6-1.3-1-1.2-1.4 0-.4.5-.4 1.2-.4.8 0 1.8.1 2-1 .2-1 .2-1.5-.8-1.8-1-.2-1.8-.2-2-1-.2-.7-.4-.9-.2-1.1.3-.2.6-.3 1.4-.4.8 0 1.6 0 1.9-.2.2-.2.3-.7.6-.9.3-.2 1.4-.4 1.4-.4s1.4.7 2.7 1.7a15 15 0 012.2 2.1',
              }),
              n.a.createElement('path', {
                d: 'M228.1 226.8l-.2-.6v-.3s.8 0 .7.3c0 .2-.2.2-.3.3l-.2.3',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeWidth: '.3',
                d: 'M228.1 226.8l-.2-.6v-.3s.8 0 .7.3c0 .2-.2.2-.3.3l-.2.3z',
              }),
              n.a.createElement('path', {
                d:
                  'M232 225.4v-.4s.7 0 1 .3c.5.4.9 1 .9 1l-.8-.4h-.5l-.3-.1v-.3h-.3',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeWidth: '.1',
                d:
                  'M232 225.4v-.4s.7 0 1 .3c.5.4.9 1 .9 1l-.8-.4h-.5l-.3-.1v-.3h-.3z',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeWidth: '.3',
                d: 'M237.3 231.3l-.4-.7a8 8 0 01-.3-.4',
              }),
              n.a.createElement('path', {
                fill: '#db4446',
                d:
                  'M217.4 226.6s.5.4.8.4h.8s.2-.5.1-.8c-.2-1.2-1.2-1.4-1.2-1.4s.3.7.1 1a2 2 0 01-.6.8',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeWidth: '.4',
                d:
                  'M217.4 226.6s.5.4.8.4h.8s.2-.5.1-.8c-.2-1.2-1.2-1.4-1.2-1.4s.3.7.1 1a2 2 0 01-.6.8z',
              }),
              n.a.createElement('path', {
                fill: '#db4446',
                d:
                  'M215.2 227.6s-.4-.7-1.3-.6c-.8 0-1.4.8-1.4.8h1.2c.3.3.4 1 .4 1l.7-.6a7.2 7.2 0 00.4-.6',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeWidth: '.4',
                d:
                  'M215.2 227.6s-.4-.7-1.3-.6c-.8 0-1.4.8-1.4.8h1.2c.3.3.4 1 .4 1l.7-.6a7.2 7.2 0 00.4-.6z',
              }),
              n.a.createElement('path', {
                fill: '#db4446',
                d:
                  'M214.2 230.6s-.8.1-1.2.6c-.4.5-.3 1.3-.3 1.3s.4-.5.9-.5l1 .2-.1-.8-.3-.8',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeWidth: '.4',
                d:
                  'M214.2 230.6s-.8.1-1.2.6c-.4.5-.3 1.3-.3 1.3s.4-.5.9-.5l1 .2-.1-.8-.3-.8z',
              }),
              n.a.createElement('path', { d: 'M228.2 230.5l.3-.5.3.5h-.7' }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeWidth: '.3',
                d: 'M228.2 230.5l.3-.5.3.5h-.7',
              }),
              n.a.createElement('path', { d: 'M229 230.5l.3-.5.4.5h-.8' }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeWidth: '.3',
                d: 'M229 230.5l.3-.5.4.5h-.8',
              }),
              n.a.createElement('path', { d: 'M228.6 227.3l.8.3-.7.4-.1-.6' }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeWidth: '.3',
                d: 'M228.6 227.3l.8.3-.7.4-.1-.6',
              }),
              n.a.createElement('path', { d: 'M229.5 227.6l.7.2-.5.4-.2-.6' }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeWidth: '.3',
                d: 'M229.5 227.6l.7.2-.5.4-.2-.6',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeWidth: '.4',
                d:
                  'M224.2 233.7s-.7.2-1 .6c-.4.5-.3 1-.3 1s.6-.5 1.5-.3l1.2.3 1.3-.3s-.7.8-.7 1.3l.2 1.1c0 .7-.6 1.6-.6 1.6l1-.3a4.6 4.6 0 001.7-.8l.9-1s-.2 1 0 1.4l.2 1.6.8-.6c.2-.1.7-.4.9-.7l.3-1s0 .8.4 1.3l.6 1.6s.3-.8.6-1.1c.3-.4.7-.8.7-1a4.3 4.3 0 00-.1-.9l.4.8m-11 .6s.5-.8 1-1l1.1-.8.9-.4m1 5l1.3-.8a4 4 0 001-1',
              }),
              n.a.createElement('path', {
                fill: '#db4446',
                d:
                  'M216.6 240.4s-.4-.5-1.1-.3c-.7 0-1.2.9-1.2.9s.6-.2 1-.1.6.4.6.4l.4-.4.3-.6',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeWidth: '.4',
                d:
                  'M216.6 240.4s-.4-.5-1.1-.3c-.7 0-1.2.9-1.2.9s.6-.2 1-.1.6.4.6.4l.4-.4.3-.6z',
              }),
              n.a.createElement('path', {
                fill: '#db4446',
                d:
                  'M215.8 243.2s-.6 0-1.1.3c-.5.4-.5 1.2-.5 1.2s.4-.4.8-.3l.9.2v-.6c.2-.4-.1-.8-.1-.8',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeWidth: '.4',
                d:
                  'M215.8 243.2s-.6 0-1.1.3c-.5.4-.5 1.2-.5 1.2s.4-.4.8-.3l.9.2v-.6c.2-.4-.1-.8-.1-.8z',
              }),
              n.a.createElement('path', {
                fill: '#db4446',
                d:
                  'M217.2 245.8s0 .8.3 1.3c.4.5 1.1.5 1.1.5l-.3-.7c0-.4.3-.8.3-.8s-.3-.3-.7-.3h-.7',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeWidth: '.4',
                d:
                  'M217.2 245.8s0 .8.3 1.3c.4.5 1.1.5 1.1.5l-.3-.7c0-.4.3-.8.3-.8s-.3-.3-.7-.3h-.7zm16 1.3s2 1.2 1.9 2.2c0 1-1 2.3-1 2.3',
              }),
              n.a.createElement('path', {
                fill: '#db4446',
                d:
                  'M224.2 252.6s-.4-.6-1.1-.6c-.7 0-1.4.7-1.4.7s.8-.1 1 .2l.5.6.5-.3.5-.6',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeWidth: '.4',
                d:
                  'M224.2 252.6s-.4-.6-1.1-.6c-.7 0-1.4.7-1.4.7s.8-.1 1 .2l.5.6.5-.3.5-.6z',
              }),
              n.a.createElement('path', {
                fill: '#db4446',
                d:
                  'M222.2 255.3s-1-.1-1.4.3c-.4.5-.4 1.3-.4 1.3s.6-.6 1-.5c.5 0 1 .3 1 .3v-.7l-.3-.7',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeWidth: '.4',
                d:
                  'M222.2 255.3s-1-.1-1.4.3c-.4.5-.4 1.3-.4 1.3s.6-.6 1-.5c.5 0 1 .3 1 .3v-.7l-.3-.7z',
              }),
              n.a.createElement('path', {
                fill: '#db4446',
                d:
                  'M224 258.1s-.3.7 0 1.1c.3.5 1 .8 1 .8s-.3-.4-.2-.8c.1-.3.7-.8.7-.8l-1.4-.2',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeWidth: '.4',
                d:
                  'M224 258.1s-.3.7 0 1.1c.3.5 1 .8 1 .8s-.3-.4-.2-.8c.1-.3.7-.8.7-.8l-1.4-.2z',
              }),
              n.a.createElement('path', {
                fill: '#db4446',
                d:
                  'M236 259.3s-.8-.2-1.2 0c-.5.3-.8 1.4-.8 1.4s.7-.6 1.2-.5c.5 0 1 .3 1 .3v-.8l-.2-.4',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeWidth: '.4',
                d:
                  'M236 259.3s-.8-.2-1.2 0c-.5.3-.8 1.4-.8 1.4s.7-.6 1.2-.5c.5 0 1 .3 1 .3v-.8l-.2-.4z',
              }),
              n.a.createElement('path', {
                fill: '#db4446',
                d:
                  'M236.4 262.2s-.6.6-.4 1.1l.6 1s0-.7.2-1l1-.3-.7-.5a15.8 15.8 0 01-.7-.3',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeWidth: '.4',
                d:
                  'M236.4 262.2s-.6.6-.4 1.1l.6 1s0-.7.2-1l1-.3-.7-.5a15.8 15.8 0 01-.7-.3z',
              }),
              n.a.createElement('path', {
                fill: '#db4446',
                d:
                  'M239.4 263s-.3.8.2 1.3c.6.5 1 .5 1 .5s-.3-.7-.2-1.1c.1-.5.5-.7.5-.7l-.8-.2-.7.3',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeWidth: '.4',
                d:
                  'M239.4 263s-.3.8.2 1.3c.6.5 1 .5 1 .5s-.3-.7-.2-1.1c.1-.5.5-.7.5-.7l-.8-.2-.7.3z',
              }),
              n.a.createElement('path', {
                fill: '#ffd691',
                stroke: '#000',
                strokeWidth: '.5',
                d:
                  'M208.8 316.4c2 .6 3 2 3 3.8 0 2.3-2.2 4-5 4-3 0-5.3-1.7-5.3-4 0-1.7 1-3.6 3-3.8l-.2-.4-.7-.7h1.2l.8.5.5-.7c.3-.4.6-.5.6-.5l.6.6.3.5.7-.4.8-.3s0 .4-.2.7l-.1.7',
              }),
              n.a.createElement('path', {
                fill: '#058e6e',
                stroke: '#000',
                strokeWidth: '.5',
                d:
                  'M206.3 326.7s-3.8-2.6-5.5-3c-2-.4-4.5 0-5.5 0 0 0 1.2.8 1.8 1.4.5.5 2.3 1.5 3.3 1.8 3 .8 6-.2 6-.2m1 .2s2.4-2.5 5-2.9c3-.4 5 .3 6.2.6l-1.5.8c-.5.3-2 1.5-4 1.6-2 0-4.4-.3-4.8-.2l-.9.1',
              }),
              n.a.createElement('path', {
                fill: '#ad1519',
                stroke: '#000',
                strokeWidth: '.5',
                d:
                  'M206.7 323.8a4.8 4.8 0 010-7.1 4.8 4.8 0 011.5 3.5 4.9 4.9 0 01-1.5 3.6',
              }),
              n.a.createElement('path', {
                fill: '#058e6e',
                stroke: '#000',
                strokeWidth: '.5',
                d:
                  'M205.7 329s.6-1.5.6-2.7l-.1-2.1h.8s.3 1.1.3 2l-.1 2.4-.7.1-.8.3',
              }),
              n.a.createElement('path', {
                fill: '#fff',
                d:
                  'M254 190.7c0-.5.5-1 1-1 .6 0 1.1.5 1.1 1 0 .6-.5 1-1 1a1 1 0 01-1-1',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeWidth: '.4',
                d:
                  'M254 190.7c0-.5.5-1 1-1 .6 0 1.1.5 1.1 1 0 .6-.5 1-1 1a1 1 0 01-1-1z',
              }),
              n.a.createElement('path', {
                fill: '#fff',
                d:
                  'M255.4 188.2c0-.6.5-1 1.1-1 .6 0 1 .4 1 1s-.4 1-1 1a1 1 0 01-1-1',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeWidth: '.4',
                d:
                  'M255.4 188.2c0-.6.5-1 1.1-1 .6 0 1 .4 1 1s-.4 1-1 1a1 1 0 01-1-1z',
              }),
              n.a.createElement('path', {
                fill: '#fff',
                d:
                  'M256.4 185.2c0-.5.5-1 1-1 .6 0 1.1.5 1.1 1s-.5 1-1 1a1 1 0 01-1.1-1',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeWidth: '.4',
                d:
                  'M256.4 185.2c0-.5.5-1 1-1 .6 0 1.1.5 1.1 1s-.5 1-1 1a1 1 0 01-1.1-1z',
              }),
              n.a.createElement('path', {
                fill: '#fff',
                d:
                  'M256.5 182c0-.5.5-1 1-1 .6 0 1.1.5 1.1 1 0 .6-.5 1-1 1a1 1 0 01-1-1',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeWidth: '.4',
                d:
                  'M256.5 182c0-.5.5-1 1-1 .6 0 1.1.5 1.1 1 0 .6-.5 1-1 1a1 1 0 01-1-1z',
              }),
              n.a.createElement('path', {
                fill: '#fff',
                d:
                  'M255.7 179c0-.6.5-1 1-1 .7 0 1.2.4 1.2 1s-.5 1-1.1 1a1 1 0 01-1-1',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeWidth: '.4',
                d:
                  'M255.7 179c0-.6.5-1 1-1 .7 0 1.2.4 1.2 1s-.5 1-1.1 1a1 1 0 01-1-1z',
              }),
              n.a.createElement('path', {
                fill: '#fff',
                d:
                  'M254.1 176.1c0-.5.5-1 1-1 .7 0 1.1.5 1.1 1s-.4 1-1 1a1 1 0 01-1-1',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeWidth: '.4',
                d:
                  'M254.1 176.1c0-.5.5-1 1-1 .7 0 1.1.5 1.1 1s-.4 1-1 1a1 1 0 01-1-1z',
              }),
              n.a.createElement('path', {
                fill: '#fff',
                d: 'M252 173.8c0-.6.4-1 1-1s1 .4 1 1-.4 1-1 1a1 1 0 01-1-1',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeWidth: '.4',
                d: 'M252 173.8c0-.6.4-1 1-1s1 .4 1 1-.4 1-1 1a1 1 0 01-1-1z',
              }),
              n.a.createElement('path', {
                fill: '#fff',
                d: 'M249.4 171.8c0-.5.5-1 1.1-1a1 1 0 010 2c-.6 0-1-.4-1-1',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeWidth: '.4',
                d: 'M249.4 171.8c0-.5.5-1 1.1-1a1 1 0 010 2c-.6 0-1-.4-1-1z',
              }),
              n.a.createElement('path', {
                fill: '#fff',
                d: 'M246.5 170.3c0-.6.4-1 1-1s1 .4 1 1-.4 1-1 1a1 1 0 01-1-1',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeWidth: '.4',
                d: 'M246.5 170.3c0-.6.4-1 1-1s1 .4 1 1-.4 1-1 1a1 1 0 01-1-1z',
              }),
              n.a.createElement('path', {
                fill: '#fff',
                d: 'M243.3 169.1c0-.5.5-1 1.1-1a1 1 0 010 2 1 1 0 01-1-1',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeWidth: '.4',
                d: 'M243.3 169.1c0-.5.5-1 1.1-1a1 1 0 010 2 1 1 0 01-1-1z',
              }),
              n.a.createElement('path', {
                fill: '#fff',
                d: 'M239.9 168.5c0-.5.4-1 1-1s1 .5 1 1-.4 1-1 1a1 1 0 01-1-1',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeWidth: '.4',
                d: 'M239.9 168.5c0-.5.4-1 1-1s1 .5 1 1-.4 1-1 1a1 1 0 01-1-1z',
              }),
              n.a.createElement('path', {
                fill: '#fff',
                d: 'M236.6 168.3c0-.5.4-1 1-1s1 .5 1 1-.4 1-1 1a1 1 0 01-1-1',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeWidth: '.4',
                d: 'M236.6 168.3c0-.5.4-1 1-1s1 .5 1 1-.4 1-1 1a1 1 0 01-1-1z',
              }),
              n.a.createElement('path', {
                fill: '#fff',
                d:
                  'M233.3 168.5c0-.6.5-1 1-1 .7 0 1.1.4 1.1 1s-.4 1-1 1a1 1 0 01-1-1',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeWidth: '.4',
                d:
                  'M233.3 168.5c0-.6.5-1 1-1 .7 0 1.1.4 1.1 1s-.4 1-1 1a1 1 0 01-1-1z',
              }),
              n.a.createElement('path', {
                fill: '#fff',
                d:
                  'M230.1 168.5c0-.6.5-1 1-1 .6 0 1.1.4 1.1 1s-.5 1-1 1a1 1 0 01-1.1-1',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeWidth: '.4',
                d:
                  'M230.1 168.5c0-.6.5-1 1-1 .6 0 1.1.4 1.1 1s-.5 1-1 1a1 1 0 01-1.1-1z',
              }),
              n.a.createElement('path', {
                fill: '#fff',
                stroke: '#000',
                strokeWidth: '.4',
                d:
                  'M231.7 171.2c0-.5.5-1 1-1 .7 0 1.1.5 1.1 1s-.4 1-1 1a1 1 0 01-1-1m.6 3.1c0-.6.4-1 1-1s1 .4 1 1c0 .5-.4 1-1 1a1 1 0 01-1-1m0 3c0-.5.6-1 1.1-1a1 1 0 010 2 1 1 0 01-1-1m-1 2.8c0-.5.5-1 1-1 .7 0 1.1.5 1.1 1 0 .6-.4 1-1 1a1 1 0 01-1-1m-1.9 2.6c0-.5.5-1 1-1 .7 0 1.2.5 1.2 1s-.5 1-1.1 1c-.6 0-1-.4-1-1',
              }),
              n.a.createElement('path', {
                fill: '#fff',
                d: 'M227.6 166.5c0-.5.5-1 1.1-1a1 1 0 010 2 1 1 0 01-1-1',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeWidth: '.4',
                d: 'M227.6 166.5c0-.5.5-1 1.1-1a1 1 0 010 2 1 1 0 01-1-1z',
              }),
              n.a.createElement('path', {
                fill: '#fff',
                d: 'M224.8 165c0-.6.4-1 1-1s1 .4 1 1-.4 1-1 1a1 1 0 01-1-1',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeWidth: '.4',
                d: 'M224.8 165c0-.6.4-1 1-1s1 .4 1 1-.4 1-1 1a1 1 0 01-1-1z',
              }),
              n.a.createElement('path', {
                fill: '#fff',
                d:
                  'M221.6 164c0-.6.5-1 1-1 .6 0 1.1.4 1.1 1 0 .5-.5 1-1 1-.6 0-1.1-.5-1.1-1',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeWidth: '.4',
                d:
                  'M221.6 164c0-.6.5-1 1-1 .6 0 1.1.4 1.1 1 0 .5-.5 1-1 1-.6 0-1.1-.5-1.1-1z',
              }),
              n.a.createElement('path', {
                fill: '#fff',
                d:
                  'M218.3 163.4c0-.5.5-1 1-1 .6 0 1.1.5 1.1 1s-.5 1-1 1a1 1 0 01-1.1-1',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeWidth: '.4',
                d:
                  'M218.3 163.4c0-.5.5-1 1-1 .6 0 1.1.5 1.1 1s-.5 1-1 1a1 1 0 01-1.1-1z',
              }),
              n.a.createElement('path', {
                fill: '#fff',
                d:
                  'M215 163.5c0-.6.5-1 1.1-1 .6 0 1 .4 1 1 0 .5-.4 1-1 1a1 1 0 01-1-1',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeWidth: '.4',
                d:
                  'M215 163.5c0-.6.5-1 1.1-1 .6 0 1 .4 1 1 0 .5-.4 1-1 1a1 1 0 01-1-1z',
              }),
              n.a.createElement('path', {
                fill: '#fff',
                d:
                  'M211.7 164c0-.5.5-1 1-1 .7 0 1.1.5 1.1 1s-.4 1-1 1a1 1 0 01-1-1',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeWidth: '.4',
                d:
                  'M211.7 164c0-.5.5-1 1-1 .7 0 1.1.5 1.1 1s-.4 1-1 1a1 1 0 01-1-1z',
              }),
              n.a.createElement('path', {
                fill: '#fff',
                d:
                  'M208.6 165.1c0-.5.5-1 1-1 .6 0 1.1.5 1.1 1s-.5 1-1 1a1 1 0 01-1.1-1',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeWidth: '.4',
                d:
                  'M208.6 165.1c0-.5.5-1 1-1 .6 0 1.1.5 1.1 1s-.5 1-1 1a1 1 0 01-1.1-1z',
              }),
              n.a.createElement('path', {
                fill: '#fff',
                d:
                  'M156 190.7c0-.5.4-1 1-1s1 .5 1 1c0 .6-.4 1-1 1a1 1 0 01-1-1',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeWidth: '.4',
                d:
                  'M156 190.7c0-.5.4-1 1-1s1 .5 1 1c0 .6-.4 1-1 1a1 1 0 01-1-1z',
              }),
              n.a.createElement('path', {
                fill: '#fff',
                d:
                  'M154.5 188.2c0-.6.5-1 1-1 .6 0 1 .4 1 1s-.4 1-1 1a1 1 0 01-1-1',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeWidth: '.4',
                d:
                  'M154.5 188.2c0-.6.5-1 1-1 .6 0 1 .4 1 1s-.4 1-1 1a1 1 0 01-1-1z',
              }),
              n.a.createElement('path', {
                fill: '#fff',
                d:
                  'M153.5 185.2c0-.5.5-1 1-1 .7 0 1.1.5 1.1 1s-.4 1-1 1a1 1 0 01-1-1',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeWidth: '.4',
                d:
                  'M153.5 185.2c0-.5.5-1 1-1 .7 0 1.1.5 1.1 1s-.4 1-1 1a1 1 0 01-1-1z',
              }),
              n.a.createElement('path', {
                fill: '#fff',
                d:
                  'M153.4 182c0-.5.5-1 1-1 .6 0 1.1.5 1.1 1 0 .6-.5 1-1 1a1 1 0 01-1-1',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeWidth: '.4',
                d:
                  'M153.4 182c0-.5.5-1 1-1 .6 0 1.1.5 1.1 1 0 .6-.5 1-1 1a1 1 0 01-1-1z',
              }),
              n.a.createElement('path', {
                fill: '#fff',
                d:
                  'M154.2 179c0-.6.5-1 1-1 .6 0 1 .4 1 1s-.4 1-1 1a1 1 0 01-1-1',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeWidth: '.4',
                d:
                  'M154.2 179c0-.6.5-1 1-1 .6 0 1 .4 1 1s-.4 1-1 1a1 1 0 01-1-1z',
              }),
              n.a.createElement('path', {
                fill: '#fff',
                d:
                  'M155.8 176.1c0-.5.5-1 1-1 .6 0 1.1.5 1.1 1s-.5 1-1 1a1 1 0 01-1-1',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeWidth: '.4',
                d:
                  'M155.8 176.1c0-.5.5-1 1-1 .6 0 1.1.5 1.1 1s-.5 1-1 1a1 1 0 01-1-1z',
              }),
              n.a.createElement('path', {
                fill: '#fff',
                d: 'M158 173.8c0-.6.4-1 1-1s1 .4 1 1-.4 1-1 1a1 1 0 01-1-1',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeWidth: '.4',
                d: 'M158 173.8c0-.6.4-1 1-1s1 .4 1 1-.4 1-1 1a1 1 0 01-1-1z',
              }),
              n.a.createElement('path', {
                fill: '#fff',
                d: 'M160.5 171.8c0-.5.4-1 1-1s1 .5 1 1-.4 1-1 1a1 1 0 01-1-1',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeWidth: '.4',
                d: 'M160.5 171.8c0-.5.4-1 1-1s1 .5 1 1-.4 1-1 1a1 1 0 01-1-1z',
              }),
              n.a.createElement('path', {
                fill: '#fff',
                d: 'M163.5 170.3c0-.6.4-1 1-1s1 .4 1 1-.4 1-1 1a1 1 0 01-1-1',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeWidth: '.4',
                d: 'M163.5 170.3c0-.6.4-1 1-1s1 .4 1 1-.4 1-1 1a1 1 0 01-1-1z',
              }),
              n.a.createElement('path', {
                fill: '#fff',
                d: 'M166.6 169.1c0-.5.5-1 1-1a1 1 0 010 2 1 1 0 01-1-1',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeWidth: '.4',
                d: 'M166.6 169.1c0-.5.5-1 1-1a1 1 0 010 2 1 1 0 01-1-1z',
              }),
              n.a.createElement('path', {
                fill: '#fff',
                d: 'M170 168.5c0-.5.5-1 1.1-1a1 1 0 010 2c-.6 0-1-.4-1-1',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeWidth: '.4',
                d: 'M170 168.5c0-.5.5-1 1.1-1a1 1 0 010 2c-.6 0-1-.4-1-1z',
              }),
              n.a.createElement('path', {
                fill: '#fff',
                d: 'M173.4 168.3c0-.5.4-1 1-1s1 .5 1 1-.4 1-1 1a1 1 0 01-1-1',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeWidth: '.4',
                d: 'M173.4 168.3c0-.5.4-1 1-1s1 .5 1 1-.4 1-1 1a1 1 0 01-1-1z',
              }),
              n.a.createElement('path', {
                fill: '#fff',
                d:
                  'M176.6 168.5c0-.6.5-1 1-1 .6 0 1.1.4 1.1 1s-.5 1-1 1a1 1 0 01-1.1-1',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeWidth: '.4',
                d:
                  'M176.6 168.5c0-.6.5-1 1-1 .6 0 1.1.4 1.1 1s-.5 1-1 1a1 1 0 01-1.1-1z',
              }),
              n.a.createElement('path', {
                fill: '#fff',
                d:
                  'M179.8 168.5c0-.6.5-1 1-1 .7 0 1.2.4 1.2 1s-.5 1-1.1 1a1 1 0 01-1-1',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeWidth: '.4',
                d:
                  'M179.8 168.5c0-.6.5-1 1-1 .7 0 1.2.4 1.2 1s-.5 1-1.1 1a1 1 0 01-1-1z',
              }),
              n.a.createElement('path', {
                fill: '#fff',
                stroke: '#000',
                strokeWidth: '.4',
                d:
                  'M178.2 171.2c0-.5.5-1 1-1 .7 0 1.1.5 1.1 1s-.4 1-1 1a1 1 0 01-1-1m-.7 3.1c0-.6.4-1 1-1s1 .4 1 1c0 .5-.4 1-1 1a1 1 0 01-1-1m-.2 3c0-.5.5-1 1-1 .7 0 1.1.5 1.1 1s-.4 1-1 1a1 1 0 01-1-1m.9 2.8c0-.5.5-1 1-1 .6 0 1.1.5 1.1 1 0 .6-.5 1-1 1a1 1 0 01-1.1-1m1.8 2.6c0-.5.5-1 1-1a1 1 0 010 2 1 1 0 01-1-1',
              }),
              n.a.createElement('path', {
                fill: '#fff',
                d: 'M182.3 166.5c0-.5.5-1 1-1a1 1 0 010 2 1 1 0 01-1-1',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeWidth: '.4',
                d: 'M182.3 166.5c0-.5.5-1 1-1a1 1 0 010 2 1 1 0 01-1-1z',
              }),
              n.a.createElement('path', {
                fill: '#fff',
                d: 'M185.2 165c0-.6.4-1 1-1s1 .4 1 1-.4 1-1 1a1 1 0 01-1-1',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeWidth: '.4',
                d: 'M185.2 165c0-.6.4-1 1-1s1 .4 1 1-.4 1-1 1a1 1 0 01-1-1z',
              }),
              n.a.createElement('path', {
                fill: '#fff',
                d:
                  'M188.3 164c0-.6.5-1 1-1 .7 0 1.1.4 1.1 1 0 .5-.4 1-1 1s-1-.5-1-1',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeWidth: '.4',
                d:
                  'M188.3 164c0-.6.5-1 1-1 .7 0 1.1.4 1.1 1 0 .5-.4 1-1 1s-1-.5-1-1z',
              }),
              n.a.createElement('path', {
                fill: '#fff',
                d:
                  'M191.6 163.4c0-.5.5-1 1-1 .7 0 1.1.5 1.1 1s-.4 1-1 1a1 1 0 01-1-1',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeWidth: '.4',
                d:
                  'M191.6 163.4c0-.5.5-1 1-1 .7 0 1.1.5 1.1 1s-.4 1-1 1a1 1 0 01-1-1z',
              }),
              n.a.createElement('path', {
                fill: '#fff',
                d:
                  'M194.9 163.5c0-.6.4-1 1-1s1 .4 1 1c0 .5-.4 1-1 1a1 1 0 01-1-1',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeWidth: '.4',
                d:
                  'M194.9 163.5c0-.6.4-1 1-1s1 .4 1 1c0 .5-.4 1-1 1a1 1 0 01-1-1z',
              }),
              n.a.createElement('path', {
                fill: '#fff',
                d:
                  'M198.2 164c0-.5.5-1 1-1 .7 0 1.1.5 1.1 1s-.4 1-1 1a1 1 0 01-1-1',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeWidth: '.4',
                d:
                  'M198.2 164c0-.5.5-1 1-1 .7 0 1.1.5 1.1 1s-.4 1-1 1a1 1 0 01-1-1z',
              }),
              n.a.createElement('path', {
                fill: '#fff',
                d:
                  'M201.3 165.1c0-.5.5-1 1-1 .7 0 1.1.5 1.1 1s-.4 1-1 1a1 1 0 01-1-1',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeWidth: '.4',
                d:
                  'M201.3 165.1c0-.5.5-1 1-1 .7 0 1.1.5 1.1 1s-.4 1-1 1a1 1 0 01-1-1z',
              }),
              n.a.createElement('path', {
                fill: '#c8b100',
                stroke: '#000',
                strokeWidth: '.4',
                d:
                  'M174.7 228.9h-1v-1h-1.5v3.6h1.6v2.5h-3.4v7h1.8v14.3h-3.5v7.3h27.2v-7.3h-3.5V241h1.8v-7h-3.4v-2.5h1.6V228h-1.6v.9h-.8v-1h-1.6v1h-1.1v-1h-1.6v3.6h1.6v2.5H184v-7.8h1.7v-3.5H184v.9h-1v-1h-1.5v1h-.9v-1H179v3.6h1.7v7.8h-3.3v-2.5h1.6V228h-1.6v.9h-.9v-1h-1.8v1zm-6 33.7H196m-27.3-1.8H196m-27.3-1.8H196m-27.3-1.7H196m-27.3-2H196m-23.8-1.6h20.2m-20.2-1.8h20.2m-20.2-2h20.2m-20.2-1.7h20.2m-20.2-1.8h20.2m-20.2-1.8h20.2m-20.2-1.7h20.2m-22-1.8h23.8m-23.8-1.8h23.8m-23.8-1.8h23.8m-23.8-1.8h23.8m-20.4-1.7h17m-10.2-1.8h3.4m-3.4-1.8h3.4m-3.4-1.8h3.4m-3.4-1.7h3.4m-5.1-2.2h6.8m-12 7.5h3.6m-5-2.2h6.6m-6.7 32.6v-1.8m0-1.8v-1.7m-1.8 1.7v1.8m3.4 0V259m1.7 3.6v-1.8m0-1.8v-1.7m0-2v-1.6m0-1.8v-2m-1.7 7.4v-2m-3.4 2v-2m7 0v2m1.5-2v-1.6m-5.1-1.8v1.8m3.5-1.8v1.8m3.3-1.8v1.8M179 252v-2m1.7-1.7v1.7m0-5.3v1.8m-1.7-3.6v1.8m1.7-3.5v1.7m-3.3-1.7v1.7m-3.5-1.7v1.7m-1.6-3.5v1.8m3.3-1.8v1.8m3.4-1.8v1.8m1.7-3.6v1.8m-3.3-1.8v1.8m-3.5-1.8v1.8m-1.6-3.6v1.8m6.7-1.8v1.8m-3.4-5.3v1.8m15.3-1.8h-3.5m5-2.2h-6.6m6.7 32.6v-1.8m0-1.8v-1.7m1.8 1.7v1.8m-3.4 0V259m-1.7 3.6v-1.8m0-1.8v-1.7m0-2v-1.6m0-1.8v-2m1.7 7.4v-2m3.4 2v-2m-7 0v2m-1.5-2v-1.6m5.1-1.8v1.8m-3.5-1.8v1.8m-3.3-1.8v1.8m1.7-1.8v-2m-1.7-1.7v1.7m0-5.3v1.8m1.7-3.6v1.8m-1.7-3.5v1.7m3.3-1.7v1.7m3.5-1.7v1.7m1.6-3.5v1.8m-3.3-1.8v1.8m-3.4-1.8v1.8m-1.7-3.6v1.8m3.3-1.8v1.8m3.5-1.8v1.8m1.6-3.6v1.8m-6.7-1.8v1.8m3.4-5.3v1.8m-7 18v-2m0-5.4v-1.8m0 5.4v-1.8m0-5.3v-1.8m0-1.8v-1.7m0-3.6v-1.8m0-1.7v-1.8m-8.3 4.6h3.5m3.3-5.3h3.4m3.3 5.3h3.5',
              }),
              n.a.createElement('path', {
                fill: '#c8b100',
                stroke: '#000',
                strokeWidth: '.4',
                d:
                  'M186.8 262.6v-4.7c0-.8-.4-3.5-4.6-3.5-4 0-4.4 2.7-4.4 3.5v4.7h9z',
              }),
              n.a.createElement('path', {
                fill: '#c8b100',
                stroke: '#000',
                strokeWidth: '.4',
                d:
                  'M179.3 258.2l-2.2-.3c0-.9.2-2.2.9-2.6l2 1.5c-.3.2-.7 1-.7 1.4zm6 0l2.2-.3c0-.9-.2-2.2-.9-2.6l-2 1.5c.3.2.7 1 .7 1.4zm-2.2-2.3l1-2a5.3 5.3 0 00-2-.4l-1.7.4 1.1 2h1.6zm-4.2-5.5v-4.9c0-1.3-1-2.4-2.5-2.4s-2.4 1-2.4 2.4v4.9h4.9zm6.8 0v-4.9c0-1.3 1-2.4 2.5-2.4s2.4 1 2.4 2.4v4.9h-4.9zm-1.7-12l.4-4.4h-4.2l.2 4.4h3.6zm3.3 0l-.4-4.4h4.4l-.5 4.4h-3.5zm-10 0l.2-4.4h-4.2l.5 4.4h3.5z',
              }),
              n.a.createElement('path', {
                fill: '#0039f0',
                d:
                  'M185.3 262.6v-4c0-.7-.5-2.7-3.1-2.7-2.4 0-2.9 2-2.9 2.7v4h6zm-6.9-12.7v-4.2c0-1-.6-2.2-2-2.2s-2 1.1-2 2.2v4.3h4zm7.8 0v-4.2c0-1 .7-2.2 2-2.2s2 1.1 2 2.2v4.3h-4z',
              }),
              n.a.createElement('path', {
                fill: '#ad1519',
                d:
                  'M190.8 269.8c0-9.7 7-17.6 15.6-17.6s15.6 7.9 15.6 17.6-7 17.5-15.6 17.5-15.6-7.8-15.6-17.5',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeWidth: '.6',
                d:
                  'M190.8 269.8c0-9.7 7-17.6 15.6-17.6s15.6 7.9 15.6 17.6-7 17.5-15.6 17.5-15.6-7.8-15.6-17.5z',
              }),
              n.a.createElement('path', {
                fill: '#005bbf',
                d:
                  'M195.4 269.7c0-7 5-12.8 11-12.8s11 5.7 11 12.8c0 7.2-5 13-11 13s-11-5.8-11-13',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeWidth: '.6',
                d:
                  'M195.4 269.7c0-7 5-12.8 11-12.8s11 5.7 11 12.8c0 7.2-5 13-11 13s-11-5.8-11-13z',
              }),
              n.a.createElement('path', {
                fill: '#c8b100',
                d:
                  'M201.2 260.9s-1.3 1.4-1.3 2.7a6 6 0 00.6 2.4c-.2-.5-.8-.8-1.4-.8-.8 0-1.4.6-1.4 1.3l.2.8.5.9c.1-.3.5-.5 1-.5s1 .4 1 1a.9.9 0 010 .2h-1.2v1h1l-.8 1.5 1-.4.8.9.8-.9 1 .4-.7-1.5h1v-1h-1.1a.9.9 0 010-.3 1 1 0 011-1c.4 0 .7.3 1 .6l.4-1 .2-.7a1.4 1.4 0 00-1.4-1.3c-.7 0-1.2.3-1.4.9 0 0 .6-1.2.6-2.5s-1.4-2.7-1.4-2.7',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeLinejoin: 'round',
                strokeWidth: '.3',
                d:
                  'M201.2 260.9s-1.3 1.4-1.3 2.7a6 6 0 00.6 2.4c-.2-.5-.8-.8-1.4-.8-.8 0-1.4.6-1.4 1.3l.2.8.5.9c.1-.3.5-.5 1-.5s1 .4 1 1a.9.9 0 010 .2h-1.2v1h1l-.8 1.5 1-.4.8.9.8-.9 1 .4-.7-1.5h1v-1h-1.1a.9.9 0 010-.3 1 1 0 011-1c.4 0 .7.3 1 .6l.4-1 .2-.7a1.4 1.4 0 00-1.4-1.3c-.7 0-1.2.3-1.4.9 0 0 .6-1.2.6-2.5s-1.4-2.7-1.4-2.7z',
              }),
              n.a.createElement('path', {
                fill: '#c8b100',
                d: 'M199.2 269.9h4.1v-1h-4.1v1z',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeWidth: '.3',
                d: 'M199.2 269.9h4.1v-1h-4.1v1z',
              }),
              n.a.createElement('path', {
                fill: '#c8b100',
                d:
                  'M211.4 260.9s-1.3 1.4-1.3 2.7c0 1.3.6 2.4.6 2.4-.2-.5-.7-.8-1.4-.8-.8 0-1.4.6-1.4 1.3l.2.8.5.9c.2-.3.5-.5 1-.5a1 1 0 011 1 .9.9 0 010 .2h-1.2v1h1l-.8 1.5 1-.4.8.9.8-.9 1 .4-.7-1.5h1v-1h-1.1a.8.8 0 010-.3 1 1 0 011-1c.4 0 .8.3 1 .6l.4-1 .2-.7a1.4 1.4 0 00-1.4-1.3c-.6 0-1.2.3-1.4.9 0 0 .6-1.2.6-2.5s-1.4-2.7-1.4-2.7',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeLinejoin: 'round',
                strokeWidth: '.3',
                d:
                  'M211.4 260.9s-1.3 1.4-1.3 2.7c0 1.3.6 2.4.6 2.4-.2-.5-.7-.8-1.4-.8-.8 0-1.4.6-1.4 1.3l.2.8.5.9c.2-.3.5-.5 1-.5a1 1 0 011 1 .9.9 0 010 .2h-1.2v1h1l-.8 1.5 1-.4.8.9.8-.9 1 .4-.7-1.5h1v-1h-1.1a.8.8 0 010-.3 1 1 0 011-1c.4 0 .8.3 1 .6l.4-1 .2-.7a1.4 1.4 0 00-1.4-1.3c-.6 0-1.2.3-1.4.9 0 0 .6-1.2.6-2.5s-1.4-2.7-1.4-2.7z',
              }),
              n.a.createElement('path', {
                fill: '#c8b100',
                d: 'M209.4 269.9h4.1v-1h-4.1v1z',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeWidth: '.3',
                d: 'M209.4 269.9h4.1v-1h-4.1v1z',
              }),
              n.a.createElement('path', {
                fill: '#c8b100',
                d:
                  'M206.3 269.6s-1.3 1.5-1.3 2.8.6 2.4.6 2.4c-.2-.5-.7-.9-1.4-.9-.8 0-1.4.6-1.4 1.4l.2.7.5 1c.1-.4.5-.6 1-.6a1 1 0 011 1 .9.9 0 010 .3h-1.2v1h1l-.8 1.5 1-.4.8.9.8-1 1 .5-.7-1.5h1v-1h-1.1a.9.9 0 010-.3 1 1 0 011-1c.4 0 .7.2.9.6l.5-1 .2-.7a1.4 1.4 0 00-1.4-1.4c-.7 0-1.2.4-1.4 1 0 0 .6-1.2.6-2.5s-1.4-2.7-1.4-2.7',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeLinejoin: 'round',
                strokeWidth: '.3',
                d:
                  'M206.3 269.6s-1.3 1.5-1.3 2.8.6 2.4.6 2.4c-.2-.5-.7-.9-1.4-.9-.8 0-1.4.6-1.4 1.4l.2.7.5 1c.1-.4.5-.6 1-.6a1 1 0 011 1 .9.9 0 010 .3h-1.2v1h1l-.8 1.5 1-.4.8.9.8-1 1 .5-.7-1.5h1v-1h-1.1a.9.9 0 010-.3 1 1 0 011-1c.4 0 .7.2.9.6l.5-1 .2-.7a1.4 1.4 0 00-1.4-1.4c-.7 0-1.2.4-1.4 1 0 0 .6-1.2.6-2.5s-1.4-2.7-1.4-2.7z',
              }),
              n.a.createElement('path', {
                fill: '#c8b100',
                d: 'M204.3 278.6h4.1v-1h-4.1v1z',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeWidth: '.3',
                d: 'M204.3 278.6h4.1v-1h-4.1v1z',
              }),
              n.a.createElement('path', {
                fill: '#c8b100',
                d:
                  'M237.6 223.4h-.3a1.5 1.5 0 01-.3.4c-.2.2-.6.2-.8 0a.5.5 0 01-.1-.4.5.5 0 01-.5 0c-.3-.1-.3-.5-.1-.7v-.5h-.3l-.1.2c-.2.3-.5.3-.7.2a.6.6 0 010-.2h-.3c-.5.2-.7-1-.7-1.2l-.2.2s.2.7.1 1.2c0 .6-.3 1.2-.3 1.2a9 9 0 012.9 1.6 9 9 0 012.2 2.3l1.2-.5c.6-.2 1.3-.2 1.3-.2l.2-.2c-.3 0-1.5.1-1.5-.4v-.2a.7.7 0 01-.2 0c-.2-.2-.2-.4 0-.7l.2-.1v-.3h-.3l-.2.1c-.2.3-.6.3-.8 0a.4.4 0 01-.1-.4.6.6 0 01-.5 0c-.2-.2-.3-.5 0-.8l.2-.3v-.3',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeWidth: '.3',
                d:
                  'M237.6 223.4h-.3a1.5 1.5 0 01-.3.4c-.2.2-.6.2-.8 0a.5.5 0 01-.1-.4.5.5 0 01-.5 0c-.3-.1-.3-.5-.1-.7v-.5h-.3l-.1.2c-.2.3-.5.3-.7.2a.6.6 0 010-.2h-.3c-.5.2-.7-1-.7-1.2l-.2.2s.2.7.1 1.2c0 .6-.3 1.2-.3 1.2a9 9 0 012.9 1.6 9 9 0 012.2 2.3l1.2-.5c.6-.2 1.3-.2 1.3-.2l.2-.2c-.3 0-1.5.1-1.5-.4v-.2a.7.7 0 01-.2 0c-.2-.2-.2-.4 0-.7l.2-.1v-.3h-.3l-.2.1c-.2.3-.6.3-.8 0a.4.4 0 01-.1-.4.6.6 0 01-.5 0c-.2-.2-.3-.5 0-.8l.2-.3v-.3z',
              }),
              n.a.createElement('path', {
                d: 'M235.4 224h.2v.3h-.1c-.1 0-.1-.2 0-.2',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeWidth: '.1',
                d: 'M235.4 224h.2v.3h-.1c-.1 0-.1-.2 0-.2z',
              }),
              n.a.createElement('path', {
                d: 'M236.3 224.8l-.3-.2v-.2h.1l.4.3.3.2v.2h-.2l-.3-.3',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeWidth: '.1',
                d: 'M236.3 224.8l-.3-.2v-.2h.1l.4.3.3.2v.2h-.2l-.3-.3',
              }),
              n.a.createElement('path', {
                d: 'M234.6 223.7l-.2-.2s-.1 0 0-.1l.3.1.3.1v.2h-.1l-.3-.1',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeWidth: '.1',
                d: 'M234.6 223.7l-.2-.2s-.1 0 0-.1l.3.1.3.1v.2h-.1l-.3-.1',
              }),
              n.a.createElement('path', {
                d: 'M233.7 223h.2v.2h-.2s-.1-.1 0-.2',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeWidth: '.1',
                d: 'M233.7 223h.2v.2h-.2s-.1-.1 0-.2z',
              }),
              n.a.createElement('path', { d: 'M237.3 225.5v-.2h-.3l.1.2h.2' }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeWidth: '.1',
                d: 'M237.3 225.5v-.2h-.3l.1.2h.2z',
              }),
              n.a.createElement('path', {
                d:
                  'M237.9 226.2l.2.2h.1c.1 0 0-.1 0-.2l-.2-.2-.2-.2h-.1v.2l.2.2',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeWidth: '.1',
                d:
                  'M237.9 226.2l.2.2h.1c.1 0 0-.1 0-.2l-.2-.2-.2-.2h-.1v.2l.2.2',
              }),
              n.a.createElement('path', { d: 'M238.8 227v-.3h-.3v.2h.3' }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeWidth: '.1',
                d: 'M238.8 227v-.3h-.3v.2h.3z',
              }),
              n.a.createElement('path', {
                fill: '#c8b100',
                d: 'M236.2 221.1h-.6l-.1.9v.1h.2l.7-.5-.3-.5',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeWidth: '.3',
                d: 'M236.2 221.1h-.6l-.1.9v.1h.2l.7-.5-.3-.5',
              }),
              n.a.createElement('path', {
                fill: '#c8b100',
                d: 'M234.6 221.6v.5l.9.1h.1v-.2l-.5-.7-.5.3',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeWidth: '.3',
                d: 'M234.6 221.6v.5l.9.1h.1v-.2l-.5-.7-.5.3',
              }),
              n.a.createElement('path', {
                fill: '#c8b100',
                d: 'M236.4 222.6l-.4.3-.6-.7v-.1h1.1v.5',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeWidth: '.3',
                d: 'M236.4 222.6l-.4.3-.6-.7v-.1h1.1v.5',
              }),
              n.a.createElement('path', {
                fill: '#c8b100',
                d:
                  'M235.3 222a.3.3 0 01.4 0 .3.3 0 010 .3.3.3 0 01-.3 0 .3.3 0 01-.1-.3',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeWidth: '.3',
                d:
                  'M235.3 222a.3.3 0 01.4 0 .3.3 0 010 .3.3.3 0 01-.3 0 .3.3 0 01-.1-.3z',
              }),
              n.a.createElement('path', {
                fill: '#c8b100',
                d: 'M233.2 221.1l-.2-.7-.4-.4s.4-.2.8.1c.4.3 0 .9 0 .9l-.2.1',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeWidth: '.3',
                d: 'M233.2 221.1l-.2-.7-.4-.4s.4-.2.8.1c.4.3 0 .9 0 .9l-.2.1z',
              }),
              n.a.createElement('path', {
                fill: '#c8b100',
                d: 'M234.2 221.4l-.4.4-.6-.6v-.2h1v.4',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeWidth: '.3',
                d: 'M234.2 221.4l-.4.4-.6-.6v-.2h1v.4',
              }),
              n.a.createElement('path', {
                fill: '#c8b100',
                d: 'M233.1 221l.3-.1v.3c0 .2-.1.2-.2.2l-.1-.3',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeWidth: '.3',
                d: 'M233.1 221l.3-.1v.3c0 .2-.1.2-.2.2l-.1-.3z',
              }),
              n.a.createElement('path', {
                fill: '#c8b100',
                d: 'M238.3 222.5h-.5l-.3.7v.2h.2l.8-.4-.2-.5',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeWidth: '.3',
                d: 'M238.3 222.5h-.5l-.3.7v.2h.2l.8-.4-.2-.5',
              }),
              n.a.createElement('path', {
                fill: '#c8b100',
                d: 'M236.7 222.8v.5l.8.2h.1v-.2l-.4-.7-.5.2',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeWidth: '.3',
                d: 'M236.7 222.8v.5l.8.2h.1v-.2l-.4-.7-.5.2',
              }),
              n.a.createElement('path', {
                fill: '#c8b100',
                d: 'M238.4 224l-.5.2-.4-.7v-.2h.1l.9.2-.1.5',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeWidth: '.3',
                d: 'M238.4 224l-.5.2-.4-.7v-.2h.1l.9.2-.1.5',
              }),
              n.a.createElement('path', {
                fill: '#c8b100',
                d: 'M237.3 223.2h.4a.3.3 0 010 .4.3.3 0 01-.3 0 .3.3 0 010-.4',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeWidth: '.3',
                d: 'M237.3 223.2h.4a.3.3 0 010 .4.3.3 0 01-.3 0 .3.3 0 010-.4z',
              }),
              n.a.createElement('path', {
                fill: '#c8b100',
                d: 'M240.2 224.3l.1.5-.8.3h-.2v-.2l.4-.8.5.2',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeWidth: '.3',
                d: 'M240.2 224.3l.1.5-.8.3h-.2v-.2l.4-.8.5.2',
              }),
              n.a.createElement('path', {
                fill: '#c8b100',
                d: 'M240 225.8l-.5.1-.3-.8v-.1h.2l.8.3-.1.5',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeWidth: '.3',
                d: 'M240 225.8l-.5.1-.3-.8v-.1h.2l.8.3-.1.5',
              }),
              n.a.createElement('path', {
                fill: '#c8b100',
                d: 'M238.6 224.3l-.2.5.9.3h.1v-.1l-.3-.8-.5.1',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeWidth: '.3',
                d: 'M238.6 224.3l-.2.5.9.3h.1v-.1l-.3-.8-.5.1',
              }),
              n.a.createElement('path', {
                fill: '#c8b100',
                d:
                  'M239.5 225.2a.3.3 0 000-.3.3.3 0 00-.4 0 .3.3 0 000 .3.3.3 0 00.4 0',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeWidth: '.3',
                d:
                  'M239.5 225.2a.3.3 0 000-.3.3.3 0 00-.4 0 .3.3 0 000 .3.3.3 0 00.4 0z',
              }),
              n.a.createElement('path', {
                fill: '#c8b100',
                d: 'M240.8 227h.8l.5.3s.1-.4-.3-.7c-.3-.3-.8.2-.8.2l-.2.2',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeWidth: '.3',
                d: 'M240.8 227h.8l.5.3s.1-.4-.3-.7c-.3-.3-.8.2-.8.2l-.2.2z',
              }),
              n.a.createElement('path', {
                fill: '#c8b100',
                d: 'M240.3 226.1l-.3.5.8.5v-.1h.2l-.1-1-.6.1',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeWidth: '.3',
                d: 'M240.3 226.1l-.3.5.8.5v-.1h.2l-.1-1-.6.1',
              }),
              n.a.createElement('path', {
                fill: '#c8b100',
                d: 'M241 227s.1-.1 0-.2h-.3c-.2 0-.2.1-.1.2h.3',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeWidth: '.3',
                d:
                  'M241 227s.1-.1 0-.2h-.3c-.2 0-.2.1-.1.2h.3zm38-21.9v.6h-2.4v-.6h1v-1.3h-.7v-.5h.6v-.6h.6v.6h.6v.6h-.6v1.2h1',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeWidth: '0',
                d: 'M134.4 217.1v-1.2m-.4 1.2v-1.2m-.2 1.2v-1.2m-.3 1.2v-1.2',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeWidth: '.1',
                d:
                  'M133.2 217.1v-1.2m-.5 1.1v-1m.2 1v-1m-.7 1v-1m.2 1v-1m-.9 1v-1m.2 1v-1m.3 1v-1m-.7 1v-1m-.3.9v-.8m-.1.8v-.8m-.5.7v-.6m.2.6v-.6m-.4.5v-.5m-.2.5v-.4m-.3.3v-.3m-.3.3v-.2',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeWidth: '.2',
                d: 'M129.2 216.6v-.2',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeWidth: '0',
                d:
                  'M135.7 217v-1m-.5 1v-1m-.4 1.2V216m143 1.1V216m-.4 1.1V216m-.3 1.1V216m-.3 1.2V216',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeWidth: '.1',
                d:
                  'M276.6 217.1V216m-.6 1v-1m.3 1v-1m-.8 1v-1m.3 1v-1m-.9 1v-1m.2 1v-1m.2 1v-1m-.6 1v-1m-.3.9v-.8m-.2.8v-.8m-.4.7v-.6m.2.6v-.6m-.5.6v-.6m-.2.5v-.4m-.3.4v-.4m-.2.3v-.2',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeWidth: '.2',
                d: 'M272.6 216.6v-.2',
              }),
              n.a.createElement('path', {
                fill: 'none',
                stroke: '#000',
                strokeWidth: '0',
                d: 'M279.1 217v-1m-.6 1v-1m-.4 1.1V216',
              })
            ),
          Eyes: ({
            color: e = 'currentColor',
            width: a = '18px',
            height: t = '18px',
          }) =>
            n.a.createElement(
              'svg',
              {
                xmlns: 'http://www.w3.org/2000/svg',
                width: a,
                height: t,
                viewBox: '0 0 18 18',
              },
              n.a.createElement(
                'g',
                { fill: e },
                n.a.createElement('path', {
                  'data-name': 'Path 49',
                  d:
                    'M3.002 0h-1.5v.75h-1.5v1.5h1.5V3h-1.5v1.5h1.5v.75h-1.5v1.5h1.5v3.75h-.75a.75.75 0 00-.744.842l.75 6a.75.75 0 00.744.657h1.5a.75.75 0 00.744-.657l.75-6a.75.75 0 00-.744-.842h-.75V6.748h1.5v-1.5h-1.5V4.5h1.5V3h-1.5v-.75h1.5V.75h-1.5z',
                }),
                n.a.createElement('path', {
                  'data-name': 'Path 50',
                  d:
                    'M11.995 17.187l-.746-9.69h-4.5l-.747 9.69a.75.75 0 00.748.807h4.5a.75.75 0 00.748-.807z',
                }),
                n.a.createElement('path', {
                  'data-name': 'Path 51',
                  d:
                    'M11.251 5.249a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75v1.5h4.5z',
                })
              )
            ),
          Face: ({
            color: e = 'currentColor',
            width: a = '18px',
            height: t = '18px',
          }) =>
            n.a.createElement(
              'svg',
              {
                xmlns: 'http://www.w3.org/2000/svg',
                width: a,
                height: t,
                viewBox: '0 0 18 18',
              },
              n.a.createElement(
                'g',
                { fill: e },
                n.a.createElement('path', {
                  'data-name': 'Path 41',
                  d:
                    'M6.388 9.238c-3.319 0-5.11 1.36-5.11 1.911s1.791 1.911 5.11 1.911a9.995 9.995 0 002.653-.345 5.1 5.1 0 011.387-2.612 8.865 8.865 0 00-4.04-.864z',
                }),
                n.a.createElement('path', {
                  'data-name': 'Path 42',
                  d:
                    'M8.34 8.908a7.515 7.515 0 012.3.841 5.111 5.111 0 01.581-.391 7 7 0 00-1.969-.887 5.957 5.957 0 01-.912.438z',
                }),
                n.a.createElement('path', {
                  'data-name': 'Path 43',
                  d:
                    'M8.958 13.383a10.774 10.774 0 01-2.571.3c-3.29 0-5.749-1.349-5.749-2.555 0-.908 1.394-1.9 3.484-2.33a6.017 6.017 0 01-.9-.433c-1.96.571-3.224 1.647-3.224 2.762 0 1.731 2.922 3.193 6.388 3.193a11.64 11.64 0 002.573-.285c-.008-.112-.018-.234-.018-.354.002-.097.011-.197.017-.298z',
                }),
                n.a.createElement('path', {
                  'data-name': 'Path 44',
                  d:
                    'M6.388 8.952a4.833 4.833 0 005.11-4.471A4.833 4.833 0 006.388.01a4.833 4.833 0 00-5.11 4.471 4.833 4.833 0 005.11 4.471zm0-8.3a4.194 4.194 0 014.471 3.833 4.194 4.194 0 01-4.471 3.833A4.194 4.194 0 011.917 4.48 4.194 4.194 0 016.388.647z',
                }),
                n.a.createElement('path', {
                  'data-name': 'Path 45',
                  d:
                    'M6.391 7.675a3.561 3.561 0 003.833-3.193 3.561 3.561 0 00-3.833-3.195A3.561 3.561 0 002.558 4.48a3.561 3.561 0 003.833 3.195zm0-5.749a2.969 2.969 0 013.193 2.555h-.638c0-1.039-1.17-1.911-2.555-1.911z',
                }),
                n.a.createElement('path', {
                  'data-name': 'Path 46',
                  d:
                    'M17.39 11.304a6.91 6.91 0 01-.592.319 5.4 5.4 0 00-2.518 2.518 6.026 6.026 0 01-2.81 2.81 7.22 7.22 0 00-.486.259 4.466 4.466 0 006.407-5.9zm-3.877 6.051v-.638a3.238 3.238 0 00.581-.053l.112.628a3.847 3.847 0 01-.694.063zm1.394-.261l-.233-.595a3.176 3.176 0 002.032-2.976h.638a3.812 3.812 0 01-2.438 3.571z',
                }),
                n.a.createElement('path', {
                  'data-name': 'Path 47',
                  d:
                    'M12.66 15.332a4.74 4.74 0 001.044-1.472 6.029 6.029 0 012.809-2.815c.173-.085.337-.17.518-.278a4.527 4.527 0 00-.4-.45 6.37 6.37 0 01-.731.407 5.386 5.386 0 00-2.512 2.521 6.03 6.03 0 01-2.81 2.81 6.962 6.962 0 00-.532.285 4.507 4.507 0 00.414.438 6.34 6.34 0 01.727-.406 4.733 4.733 0 001.474-1.042z',
                }),
                n.a.createElement('path', {
                  'data-name': 'Path 48',
                  d:
                    'M11.769 14.439a4.74 4.74 0 001.044-1.472 6.022 6.022 0 012.81-2.81c.166-.082.328-.164.5-.265a4.462 4.462 0 00-6.435 5.922c.219-.136.419-.236.614-.337a4.747 4.747 0 001.47-1.037z',
                })
              )
            ),
          Facebook: ({
            color: e = 'currentColor',
            width: a = '18px',
            height: t = '18px',
          }) =>
            n.a.createElement(
              'svg',
              {
                xmlns: 'http://www.w3.org/2000/svg',
                width: a,
                height: t,
                viewBox: '0 0 17 17',
              },
              n.a.createElement('path', {
                'data-name': '_ionicons_svg_logo-facebook (1)',
                d:
                  'M80.061,64H64.939a.939.939,0,0,0-.939.939V80.061a.939.939,0,0,0,.939.939H72.5V74.271H70.468V71.792H72.5V69.959a3.23,3.23,0,0,1,3.484-3.391c.939,0,1.948.071,2.183.1v2.293H76.6c-1.067,0-1.271.5-1.271,1.248v1.58h2.541l-.332,2.479H75.333V81h4.728A.939.939,0,0,0,81,80.061V64.939A.939.939,0,0,0,80.061,64Z',
                transform: 'translate(-64 -64)',
                fill: e,
              })
            ),
          FacialCare: ({
            color: e = 'currentColor',
            width: a = '18px',
            height: t = '18px',
          }) =>
            n.a.createElement(
              'svg',
              {
                xmlns: 'http://www.w3.org/2000/svg',
                width: a,
                height: t,
                viewBox: '0 0 18 18',
              },
              n.a.createElement('path', {
                d:
                  'M14.651 1.933a3.534 3.534 0 00-3.5 6.1h.1a1.285 1.285 0 011.033.527 3.549 3.549 0 002.37-.206 3.213 3.213 0 110-6.425z',
                fill: e,
              }),
              n.a.createElement('path', {
                'data-name': 'Shape',
                d:
                  'M12.86 0a5.147 5.147 0 00-4.247 8.037h1.555a4.176 4.176 0 014.755-6.693.643.643 0 01-.244 1.226 2.57 2.57 0 000 5.14.643.643 0 01.248 1.23 4.207 4.207 0 01-2.261.349c-.173-.021-.125-.045-.125.032v.958A5.143 5.143 0 0012.862 0zM1.284 16.715h4.5a.322.322 0 110 .643H1.915a2.362 2.362 0 001.606.643h6.457a2.19 2.19 0 001.113-.292 5.568 5.568 0 002.365-4.533H.046a6.639 6.639 0 001.238 3.534zm5.792 0a.321.321 0 11-.321.321.321.321 0 01.321-.321zM12.77 11.253H.731a.743.743 0 00-.731.75c0 .176 0 .3.007.535h13.486c.007-.244.007-.373.007-.535a.743.743 0 00-.73-.75z',
                fill: e,
              }),
              n.a.createElement('path', {
                'data-name': 'Shape',
                d:
                  'M1.607 9.322v1.285h10.288V9.322a.643.643 0 00-.642-.642h-9a.643.643 0 00-.646.642z',
                fill: e,
              })
            ),
          FruitsVegetable: ({
            color: e = 'currentColor',
            width: a = '18px',
            height: t = '18px',
          }) =>
            n.a.createElement(
              'svg',
              {
                xmlns: 'http://www.w3.org/2000/svg',
                width: a,
                height: t,
                viewBox: '0 0 18 18',
              },
              n.a.createElement(
                'g',
                { 'data-name': 'Layer 2' },
                n.a.createElement(
                  'g',
                  { 'data-name': 'Layer 3' },
                  n.a.createElement('path', {
                    'data-name': 'Path 16',
                    d:
                      'M10.235 3.966a2.943 2.943 0 00-1.38-2.122c-.528-.243-.485-.618-.338-.854s.41-.231.832.164a5 5 0 011.368 2.87z',
                    fill: e,
                    stroke: e,
                    strokeMiterlimit: '10',
                    strokeWidth: '.416',
                  }),
                  n.a.createElement('path', {
                    'data-name': 'Path 17',
                    d:
                      'M6.514 7.976a4.757 4.757 0 109.513 0c0-2.627-1.5-4.976-4.757-4.73-2.619.197-4.767 1.656-4.756 4.73z',
                    fill: 'none',
                    stroke: e,
                    strokeLinecap: 'round',
                    strokeLinejoin: 'round',
                    strokeWidth: '1.387',
                  }),
                  n.a.createElement('path', {
                    'data-name': 'Path 18',
                    d:
                      'M6.514 7.976a4.757 4.757 0 109.513 0c0-2.627-1.5-4.976-4.757-4.73-2.619.197-4.767 1.656-4.756 4.73z',
                    fill: e,
                  }),
                  n.a.createElement('path', {
                    'data-name': 'Path 19',
                    d:
                      'M14.731 5.045s1.506 1.544.714 2.993c-.287.526-1.2.192-1.234-.485s.25-1.27-.236-2.05c-.349-.566.26-.878.756-.458z',
                    fill: '#fff',
                  }),
                  n.a.createElement('path', {
                    'data-name': 'Path 20',
                    d:
                      'M10.834 3.413s1.161-4.315 6.469-2.048c0 0-2.459 4.074-6.469 2.048z',
                    stroke: e,
                    strokeLinecap: 'round',
                    strokeLinejoin: 'round',
                    strokeWidth: '1.387',
                  }),
                  n.a.createElement('path', {
                    'data-name': 'Path 21',
                    d:
                      'M10.834 3.413s1.161-4.315 6.469-2.048c0 0-2.459 4.074-6.469 2.048z',
                    fill: '#fff',
                  }),
                  n.a.createElement('path', {
                    'data-name': 'Path 22',
                    d:
                      'M10.516 4.513a10.193 10.193 0 015.63-2.863c-2.736-.521-6.018 1.748-6.018 1.748s.289.864.388 1.115z',
                    fill: e,
                    stroke: e,
                    strokeLinecap: 'round',
                    strokeLinejoin: 'round',
                    strokeWidth: '.035',
                  }),
                  n.a.createElement('path', {
                    'data-name': 'Path 23',
                    d:
                      'M10.895 9.896h0c-.268-.877-1.969-1.65-4.234-1.72a5.286 5.286 0 00-4.515 1.858 2 2 0 00-.551 1.308h0a4.934 4.934 0 004.768 4.426c3.133.223 3.786-.96 4.225-1.9a6.363 6.363 0 00.307-3.972z',
                    fill: '#fff',
                    stroke: '#fff',
                    strokeLinecap: 'round',
                    strokeLinejoin: 'round',
                    strokeWidth: '3.19',
                  }),
                  n.a.createElement('path', {
                    'data-name': 'Path 24',
                    d:
                      'M10.895 9.896h0c-.268-.877-1.969-1.65-4.234-1.72a5.286 5.286 0 00-4.515 1.858 2 2 0 00-.551 1.308h0a4.934 4.934 0 004.768 4.426c3.133.223 3.786-.96 4.225-1.9a6.363 6.363 0 00.307-3.972z',
                    fill: 'none',
                    stroke: e,
                    strokeLinecap: 'round',
                    strokeLinejoin: 'round',
                    strokeWidth: '1.387',
                  }),
                  n.a.createElement('path', {
                    'data-name': 'Path 25',
                    d:
                      'M10.895 9.896h0c-.268-.877-1.969-1.65-4.234-1.72a5.286 5.286 0 00-4.515 1.858 2 2 0 00-.551 1.308h0a4.934 4.934 0 004.768 4.426c3.133.223 3.786-.96 4.225-1.9a6.363 6.363 0 00.307-3.972z',
                    fill: '#fff',
                    stroke: e,
                    strokeMiterlimit: '10',
                    strokeWidth: '.069',
                  }),
                  n.a.createElement('path', {
                    'data-name': 'Path 26',
                    d:
                      'M10.895 9.896c-.268-.877-1.969-1.65-4.234-1.72a5.286 5.286 0 00-4.515 1.858 2 2 0 00-.551 1.308 4.934 4.934 0 004.768 4.426c3.133.223 3.786-.96 4.225-1.9a6.363 6.363 0 00.307-3.972z',
                    fill: e,
                  }),
                  n.a.createElement('path', {
                    'data-name': 'Path 27',
                    d:
                      'M1.595 11.342a4.375 4.375 0 00.128.684 2.664 2.664 0 00.3.335c1.067 1.028 4.409 1.723 7.173 1 .883-.23 1.522-1.3.526-1.851-.139-.076-.243-.184-.208-.277s.089-.106.269-.1a1.2 1.2 0 001.232-.735 4.126 4.126 0 00-.121-.509c-.272-.876-1.974-1.644-4.239-1.715a5.286 5.286 0 00-4.515 1.858 2.024 2.024 0 00-.545 1.31z',
                    fill: '#fff',
                  }),
                  n.a.createElement('path', {
                    'data-name': 'Path 28',
                    d:
                      'M1.921 9.984a1.569 1.569 0 00.1 2.377c1.066 1.028 4.409 1.723 7.173 1 .883-.23 1.522-1.3.526-1.851-.139-.076-.243-.184-.208-.277s.089-.106.269-.1a1.183 1.183 0 001.259-.823 1.321 1.321 0 00-.785-1.413',
                    fill: 'none',
                    stroke: e,
                    strokeLinecap: 'round',
                    strokeLinejoin: 'round',
                    strokeWidth: '.416',
                  }),
                  n.a.createElement('path', {
                    'data-name': 'Path 29',
                    d:
                      'M8.013 10.78c-.018.471-.87.791-1.9.752s-1.856-.423-1.837-.9.87-.963 1.9-.924 1.855.605 1.837 1.072z',
                    fill: e,
                    stroke: e,
                    strokeLinecap: 'round',
                    strokeLinejoin: 'round',
                    strokeWidth: '.555',
                  }),
                  n.a.createElement('path', {
                    'data-name': 'Path 30',
                    d:
                      'M9.722 12.123a2.411 2.411 0 01.467 2.08 2.759 2.759 0 01-1.5 2.427',
                    fill: 'none',
                    stroke: '#fff',
                    strokeLinecap: 'round',
                    strokeLinejoin: 'round',
                    strokeWidth: '.555',
                  })
                )
              )
            ),
          FurnitureIcon: ({
            width: e = '18px',
            height: a = '18px',
            color: t = 'currentColor',
          }) =>
            n.a.createElement(
              'svg',
              {
                xmlns: 'http://www.w3.org/2000/svg',
                width: e,
                height: a,
                viewBox: '0 0 30.402 26.348',
              },
              n.a.createElement(
                'g',
                { id: 'bed', transform: 'translate(0 -32)' },
                n.a.createElement(
                  'g',
                  {
                    id: 'Group_2',
                    'data-name': 'Group 2',
                    transform: 'translate(0 32)',
                  },
                  n.a.createElement(
                    'g',
                    {
                      id: 'Group_1',
                      'data-name': 'Group 1',
                      transform: 'translate(0 0)',
                    },
                    n.a.createElement('path', {
                      'data-name': 'Path 5',
                      d:
                        'M29.9,47.2h-.507v-1.52a2.533,2.533,0,0,0-1.52-2.319V35.547a.507.507,0,0,0-.3-.464,2.006,2.006,0,0,0,.3-1.056,2.027,2.027,0,1,0-4.054,0A2.006,2.006,0,0,0,24.1,35.04H6.305a2.006,2.006,0,0,0,.282-1.013,2.027,2.027,0,0,0-4.054,0,2.006,2.006,0,0,0,.3,1.056.507.507,0,0,0-.3.464v7.815a2.533,2.533,0,0,0-1.52,2.319V47.2H.507A.507.507,0,0,0,0,47.708V54.8a.507.507,0,0,0,.507.507h.507v2.533a.507.507,0,0,0,.507.507H3.547a.507.507,0,0,0,.507-.507V55.308H26.348v2.533a.507.507,0,0,0,.507.507h2.027a.507.507,0,0,0,.507-.507V55.308H29.9A.507.507,0,0,0,30.4,54.8V47.708A.507.507,0,0,0,29.9,47.2ZM25.842,33.013a1.013,1.013,0,1,1-1.013,1.013A1.013,1.013,0,0,1,25.842,33.013Zm-21.281,0a1.013,1.013,0,1,1-1.013,1.013A1.013,1.013,0,0,1,4.56,33.013Zm-1.013,3.04H26.855v7.094h-2.04a2.507,2.507,0,0,0,.52-1.52V40.614A2.537,2.537,0,0,0,22.8,38.08H18.748a2.537,2.537,0,0,0-2.533,2.534v1.013a2.507,2.507,0,0,0,.52,1.52H13.668a2.507,2.507,0,0,0,.52-1.52V40.614a2.537,2.537,0,0,0-2.533-2.534H7.6a2.537,2.537,0,0,0-2.533,2.534v1.013a2.507,2.507,0,0,0,.52,1.52H3.547Zm20.775,4.56v1.013a1.52,1.52,0,0,1-1.52,1.52H18.748a1.52,1.52,0,0,1-1.52-1.52V40.614a1.52,1.52,0,0,1,1.52-1.52H22.8A1.52,1.52,0,0,1,24.322,40.614Zm-11.147,0v1.013a1.52,1.52,0,0,1-1.52,1.52H7.6a1.52,1.52,0,0,1-1.52-1.52V40.614a1.52,1.52,0,0,1,1.52-1.52h4.054A1.52,1.52,0,0,1,13.174,40.614ZM2.027,45.681a1.52,1.52,0,0,1,1.52-1.52H26.855a1.52,1.52,0,0,1,1.52,1.52V47.2H2.027ZM3.04,57.335H2.027V55.308H3.04Zm25.335,0H27.362V55.308h1.013Zm1.013-3.04H1.013v-6.08H29.389Z',
                      transform: 'translate(0 -32)',
                      fill: t,
                    })
                  )
                ),
                n.a.createElement(
                  'g',
                  {
                    id: 'Group_4',
                    'data-name': 'Group 4',
                    transform: 'translate(2.027 52.268)',
                  },
                  n.a.createElement(
                    'g',
                    { id: 'Group_3', 'data-name': 'Group 3' },
                    n.a.createElement('path', {
                      'data-name': 'Path 6',
                      d:
                        'M34.533,352H32.507a.507.507,0,0,0,0,1.013h2.027a.507.507,0,0,0,0-1.013Z',
                      transform: 'translate(-32 -352)',
                      fill: t,
                    })
                  )
                ),
                n.a.createElement(
                  'g',
                  {
                    id: 'Group_6',
                    'data-name': 'Group 6',
                    transform: 'translate(6.08 52.268)',
                  },
                  n.a.createElement(
                    'g',
                    { id: 'Group_5', 'data-name': 'Group 5' },
                    n.a.createElement('path', {
                      'data-name': 'Path 7',
                      d:
                        'M117.788,352H96.507a.507.507,0,0,0,0,1.013h21.281a.507.507,0,0,0,0-1.013Z',
                      transform: 'translate(-96 -352)',
                      fill: t,
                    })
                  )
                )
              )
            ),
          GiftBox: ({
            width: e = '18px',
            height: a = '18px',
            color: t = 'currentColor',
          }) =>
            n.a.createElement(
              'svg',
              {
                xmlns: 'http://www.w3.org/2000/svg',
                width: e,
                height: a,
                viewBox: '0 0 14.857 16',
              },
              n.a.createElement(
                'g',
                { 'data-name': 'Group 2485', transform: 'translate(-81.5 40)' },
                n.a.createElement(
                  'g',
                  { 'data-name': 'Group 2484' },
                  n.a.createElement(
                    'g',
                    {
                      'data-name': 'Group 2483',
                      transform: 'translate(-5.5 21)',
                    },
                    n.a.createElement('path', {
                      'data-name': '_ionicons_svg_ios-gift (1)',
                      d:
                        'M61.714,35.714H58.7a2.1,2.1,0,0,0,.725-1.571A2.2,2.2,0,0,0,57.175,32a1.993,1.993,0,0,0-1.746.979A1.993,1.993,0,0,0,53.682,32a2.2,2.2,0,0,0-2.254,2.143,2.086,2.086,0,0,0,.725,1.571H49.143A1.142,1.142,0,0,0,48,36.857v.714a.143.143,0,0,0,.143.143H62.714a.143.143,0,0,0,.143-.143v-.714A1.142,1.142,0,0,0,61.714,35.714ZM57.175,33a1.144,1.144,0,1,1,0,2.286h-1.2C55.971,33.571,56.511,33,57.175,33Zm-3.493,0c.664,0,1.2.571,1.2,2.286h-1.2a1.144,1.144,0,1,1,0-2.286Zm-5.111,5.929v7.929A1.146,1.146,0,0,0,49.714,48h5.214V38.643H48.857A.287.287,0,0,0,48.571,38.929ZM62,38.643H55.929V48h5.214a1.146,1.146,0,0,0,1.143-1.143V38.929A.287.287,0,0,0,62,38.643Z',
                      transform: 'translate(39 -93)',
                      fill: 'currentColor',
                    })
                  )
                )
              )
            ),
          Google: ({
            color: e = 'currentColor',
            width: a = '18px',
            height: t = '18px',
          }) =>
            n.a.createElement(
              'svg',
              {
                xmlns: 'http://www.w3.org/2000/svg',
                width: a,
                height: t,
                viewBox: '0 0 16.677 17',
              },
              n.a.createElement('path', {
                d:
                  'M68.579,55.29l-.086-.364H60.584v3.348h4.725a4.73,4.73,0,0,1-4.627,3.556,5.533,5.533,0,0,1-3.724-1.484,5.316,5.316,0,0,1-1.586-3.752,5.483,5.483,0,0,1,1.557-3.748,5.3,5.3,0,0,1,3.7-1.447,4.825,4.825,0,0,1,3.147,1.226l2.379-2.367a8.417,8.417,0,0,0-5.6-2.158A8.391,8.391,0,0,0,52,56.6,8.541,8.541,0,0,0,54.326,62.5a8.873,8.873,0,0,0,6.4,2.6,7.891,7.891,0,0,0,5.747-2.416,8.486,8.486,0,0,0,2.207-5.878,9.788,9.788,0,0,0-.1-1.516Z',
                transform: 'translate(-52 -48.1)',
                fill: e,
              })
            ),
          GooglePlus: ({
            color: e = 'currentColor',
            width: a = '18px',
            height: t = '18px',
          }) =>
            n.a.createElement(
              'svg',
              {
                id: 'google-hangouts',
                xmlns: 'http://www.w3.org/2000/svg',
                width: a,
                height: t,
                viewBox: '0 0 17.239 11.111',
              },
              n.a.createElement('path', {
                id: 'Path_1',
                'data-name': 'Path 1',
                d:
                  'M5.589,2.02A3.559,3.559,0,0,1,8.417,3.444L9.852,2a5.552,5.552,0,1,0,1.081,5.071,5.385,5.385,0,0,0,.212-1.515V5.05H6.094V7.07H8.771A3.514,3.514,0,0,1,5.589,9.091,3.568,3.568,0,0,1,2.02,5.555,3.568,3.568,0,0,1,5.589,2.02Zm0,0',
                fill: e,
              }),
              n.a.createElement('path', {
                id: 'Path_2',
                'data-name': 'Path 2',
                d:
                  'M364.535,90h-2.02v1.515H361v2.02h1.515V95.05h2.02V93.535h1.549v-2.02h-1.549Zm0,0',
                transform: 'translate(-348.845 -86.97)',
                fill: e,
              })
            ),
          GroceryIcon: ({
            color: e = 'currentColor',
            width: a = '18px',
            height: t = '18px',
          }) =>
            n.a.createElement(
              'svg',
              {
                xmlns: 'http://www.w3.org/2000/svg',
                width: a,
                height: t,
                viewBox: '0 0 14 16',
              },
              n.a.createElement(
                'g',
                { 'data-name': 'Group 69', transform: 'translate(0 0)' },
                n.a.createElement('path', {
                  'data-name': 'Path 112',
                  d:
                    'M302.952,415.83a.326.326,0,0,0,.1.016.3.3,0,0,0,.287-.207.533.533,0,0,1,.675-.332,1.139,1.139,0,0,0,1.443-.71.3.3,0,1,0-.573-.2.533.533,0,0,1-.675.332,1.142,1.142,0,0,0-1.443.712.3.3,0,0,0,.189.384Zm0,0',
                  transform: 'translate(-293.38 -408.637)',
                  fill: e,
                }),
                n.a.createElement('path', {
                  'data-name': 'Path 113',
                  d:
                    'M304.847,410.255a.31.31,0,0,0,.1.015.3.3,0,0,0,.287-.2.532.532,0,0,1,.675-.332,1.138,1.138,0,0,0,1.442-.712.3.3,0,1,0-.572-.194.533.533,0,0,1-.675.332,1.139,1.139,0,0,0-1.443.712.3.3,0,0,0,.189.384Zm0,0',
                  transform: 'translate(-294.558 -405.009)',
                  fill: e,
                }),
                n.a.createElement(
                  'g',
                  { 'data-name': 'Group 68' },
                  n.a.createElement('path', {
                    'data-name': 'Path 114',
                    d:
                      'M306.737,404.967a.312.312,0,0,0,.1.015.3.3,0,0,0,.287-.205.4.4,0,0,1,.5-.245,1,1,0,0,0,1.266-.625.3.3,0,1,0-.573-.194.387.387,0,0,1-.2.226.393.393,0,0,1-.3.019,1,1,0,0,0-1.266.623.3.3,0,0,0,.189.385Zm0,0',
                    transform: 'translate(-295.734 -401.531)',
                    fill: e,
                  }),
                  n.a.createElement('path', {
                    'data-name': 'Path 115',
                    d:
                      'M292,405.326a18.15,18.15,0,0,0,1.006-5.3,1.918,1.918,0,0,0-.582-1.376,1.4,1.4,0,0,0-1.6-.212c-.93.433-1.6,1.711-2.128,2.736q-.046.089-.091.173a1.664,1.664,0,0,0-.986-1.129,1.42,1.42,0,0,0-1.153-1.038.631.631,0,0,0-.024-.088,1.048,1.048,0,0,0-.889-.686,1.133,1.133,0,0,0-.662.122,1.209,1.209,0,0,0-.55-.129,1.127,1.127,0,0,0-1.114.8,1.3,1.3,0,0,0-1.03,1.207,1.443,1.443,0,0,0-1.167,1.367,1.3,1.3,0,0,0,.106.509,1.036,1.036,0,0,0-.273.7,1.025,1.025,0,0,0,.1.441,1.716,1.716,0,0,0-1.239-.542.282.282,0,1,0,.009.563.288.288,0,0,0,.03,0,1.114,1.114,0,0,1,.759.377,2.148,2.148,0,0,0-1.365.813,1.315,1.315,0,0,0-.076,1.034.442.442,0,0,0-.076.281l.529,6.812a1.705,1.705,0,0,0,1.771,1.523h8.733a1.7,1.7,0,0,0,1.77-1.518l.542-7.053a.347.347,0,0,0-.111-.274.416.416,0,0,0-.242-.109Zm-3.14-3.173c.123-.208.257-.466.4-.74.468-.9,1.108-2.129,1.849-2.476a.722.722,0,0,1,.869.1,1.386,1.386,0,0,1,.407.968,17.688,17.688,0,0,1-1,5.209c-.02.059-.065.177-.129.341l-.53.213-.033.015a1.054,1.054,0,0,1-.992,0l-.222-.119a1.736,1.736,0,0,0-.828-.208,1.87,1.87,0,0,0-.234.017,1.693,1.693,0,0,0-.614.191l-.222.121a1.055,1.055,0,0,1-.4.112c.006-.022.015-.043.021-.063q.13-.4.277-.788c.035-.1.073-.19.109-.285.082-.206.167-.411.254-.613.038-.087.075-.173.113-.26a17.883,17.883,0,0,1,.9-1.74Zm-3.6,3.332c-.033.006-.068.011-.1.019a1.722,1.722,0,0,0-.3.087l-.061-.247c.09.007.179.014.263.014a2.56,2.56,0,0,0,1.481-.47,4.033,4.033,0,0,1,.431-.242c-.029.073-.056.146-.084.22-.02.054-.042.1-.061.158q-.139.376-.26.759l-.208-.113a1.742,1.742,0,0,0-.826-.208,1.694,1.694,0,0,0-.223.017c-.017,0-.034.005-.052.007Zm-.494-3.806a.131.131,0,0,1-.153-.089.118.118,0,0,1,.1-.138l1.745-.344a.13.13,0,0,1,.126.092.109.109,0,0,1-.018.088.134.134,0,0,1-.08.051Zm.123,1.143c.036-.043.071-.084.1-.125a.523.523,0,0,0,.065-.091.551.551,0,0,0,.058-.419l1.3-.257a.622.622,0,0,0,.033.1.661.661,0,0,0,.307.312l.147.071.126.062.062.03c.036.018.071.038.108.059l.091.053c.035.022.068.047.1.07s.058.045.085.069.058.053.085.082a.977.977,0,0,1,.132.171c-.132.263-.257.532-.377.8-.018.043-.038.082-.056.125a3.293,3.293,0,0,0-1.077.487,1.975,1.975,0,0,1-1.524.336l-.19-.784a1.213,1.213,0,0,1,.42-1.159Zm-1.843,7a.283.283,0,1,1,0,.564h-2.178a.283.283,0,1,1,0-.564Zm-2.178,1.126h2.8a.283.283,0,1,1,0,.564h-2.8a.283.283,0,1,1,0-.564Zm.837-8.4.2-.153-.132-.206a.778.778,0,0,1-.128-.424.888.888,0,0,1,.9-.847l.378-.015-.088-.333a.615.615,0,0,1-.023-.162.733.733,0,0,1,.713-.7l.287-.02v-.279a.5.5,0,0,1,.523-.458.537.537,0,0,1,.346.124l.219.179.21-.187a.454.454,0,0,1,.363-.111.437.437,0,0,1,.365.286.339.339,0,0,1,.015.15l-.037.315h.351a.825.825,0,0,1,.851.719l.015.186.193.061a1.085,1.085,0,0,1,.795,1.038.946.946,0,0,1-.2.558,3.375,3.375,0,0,0-.621-.358c-.049-.023-.1-.045-.143-.07a.064.064,0,0,1-.037-.048.16.16,0,0,1,.044-.125.562.562,0,0,0,.146-.52l-.038-.155a.678.678,0,0,0-.789-.458l-.083.017h0l-.913.181-.89.176a.6.6,0,0,0-.506.714l.018.077h0l.018.076a.622.622,0,0,0,.386.422.18.18,0,0,1,.1.091c.007.021,0,.032-.015.058s-.064.076-.1.115-.07.081-.107.124l-.032.041c-.027.033-.053.066-.08.1l-.039.054c-.024.034-.047.069-.07.1-.014.019-.026.039-.038.059a1.2,1.2,0,0,0-.065.125l-.028.052a1.551,1.551,0,0,0-.071.194.26.26,0,0,1-.006.032,1.375,1.375,0,0,0-.035.18c0,.025,0,.051-.006.077s-.008.065-.008.1l-.026-.03-.063-.069c-.046-.052-.092-.1-.138-.147l-.068-.066c-.049-.044-.1-.085-.147-.125l-.054-.044a2.1,2.1,0,0,0-.2-.128c-.02-.011-.041-.02-.061-.03-.049-.025-.1-.047-.146-.066-.028-.011-.055-.019-.081-.027a1.3,1.3,0,0,0-.134-.036c-.027-.006-.055-.012-.082-.017a1.217,1.217,0,0,0-.17-.015l-.039,0a1.736,1.736,0,0,0-.88.268.52.52,0,0,1-.042-.2.528.528,0,0,1,.222-.424Zm-2,2.338a1.582,1.582,0,0,1,1.006-.539,1.735,1.735,0,0,0,.7-.362c.086-.074.168-.14.247-.2s.14-.1.205-.136l.007-.006a1.33,1.33,0,0,1,.363-.153l.014,0a.745.745,0,0,1,.161-.019c.392,0,.811.353,1.247,1.051a1.958,1.958,0,0,1,.206,1.375l-.07-.008a1.04,1.04,0,0,1-.316-.1l-.222-.121a1.752,1.752,0,0,0-.828-.208,1.954,1.954,0,0,0-.848.208l-.108.059a1.3,1.3,0,0,1-1.22,0l-.419-.228a.566.566,0,0,0-.175-.059.735.735,0,0,1,.051-.548Zm4.585,7.747h-3.423a.282.282,0,1,1,0-.562h3.423a.283.283,0,1,1,0,.562Zm1.867,0h-.623a.282.282,0,1,1,0-.562h.623a.283.283,0,1,1,0,.562Zm0,0',
                    transform: 'translate(-279.002 -398.28)',
                    fill: e,
                  })
                )
              )
            ),
          Handbag: ({
            color: e = 'currentColor',
            width: a = '18px',
            height: t = '18px',
          }) =>
            n.a.createElement(
              'svg',
              {
                version: '1.1',
                x: '0px',
                y: '0px',
                viewBox: '0 0 511.999 511.999',
                width: a,
                height: t,
                fill: e,
              },
              n.a.createElement(
                'g',
                null,
                n.a.createElement(
                  'g',
                  null,
                  n.a.createElement('path', {
                    d:
                      'M496.619,428.582l-51.45-221.82h-62.616v48.827H393.1v30.001h-51.096v-30.001h10.547v-48.827H159.448v48.827h10.547 v30.001H118.9v-30.001h10.547v-48.827H66.83l-51.45,221.82c-4.715,20.332,0.026,41.364,13.011,57.705 c12.985,16.341,32.401,25.712,53.272,25.712h348.672c20.871,0,40.289-9.372,53.273-25.712 C496.593,469.946,501.335,448.914,496.619,428.582z M298.917,285.591H271v23.18h-30.001v-23.18h-27.917V255.59h85.836V285.591z',
                  })
                )
              ),
              n.a.createElement(
                'g',
                null,
                n.a.createElement(
                  'g',
                  null,
                  n.a.createElement('path', {
                    d:
                      'M255.999,0c-69.781,0-126.553,56.772-126.553,126.552v80.21h30.001v-80.21c0-53.239,43.313-96.551,96.552-96.551 c53.238,0,96.552,43.313,96.552,96.551v80.21h30.001v-80.21C382.552,56.772,325.781,0,255.999,0z',
                  })
                )
              ),
              n.a.createElement('g', null),
              n.a.createElement('g', null),
              n.a.createElement('g', null),
              n.a.createElement('g', null),
              n.a.createElement('g', null),
              n.a.createElement('g', null),
              n.a.createElement('g', null),
              n.a.createElement('g', null),
              n.a.createElement('g', null),
              n.a.createElement('g', null),
              n.a.createElement('g', null),
              n.a.createElement('g', null),
              n.a.createElement('g', null),
              n.a.createElement('g', null),
              n.a.createElement('g', null)
            ),
          HandBags: ({
            color: e = 'currentColor',
            width: a = '18px',
            height: t = '18px',
          }) =>
            n.a.createElement(
              'svg',
              {
                xmlns: 'http://www.w3.org/2000/svg',
                width: a,
                height: t,
                viewBox: '0 0 18 18',
              },
              n.a.createElement(
                'g',
                { 'data-name': 'Group 11' },
                n.a.createElement(
                  'g',
                  {
                    'data-name': 'Group 10',
                    fill: e,
                    stroke: '#fff',
                    strokeMiterlimit: '10',
                    strokeWidth: '.091',
                  },
                  n.a.createElement('path', {
                    'data-name': 'Path 45',
                    d:
                      'M17.954 7.253v8.585a1.791 1.791 0 01-1.791 1.791H1.836a1.791 1.791 0 01-1.791-1.791V7.253c0-.988 17.909-.988 17.909 0z',
                  }),
                  n.a.createElement('path', {
                    'data-name': 'Rectangle 36',
                    d: 'M.102 8.77h17.795v.913H.102z',
                  }),
                  n.a.createElement('path', {
                    'data-name': 'Path 46',
                    d:
                      'M4.793 7.253C4.976 4.061 7.113.614 9 .614c2.41 0 4.049 3.84 4.207 6.639h.572C13.618 4.168 11.791.044 8.999.044c-1.131 0-2.338.922-3.312 2.529a10.463 10.463 0 00-1.466 4.68z',
                  })
                )
              )
            ),
          HelpIcon: ({
            color: e = 'currentColor',
            width: a = '18px',
            height: t = '18px',
          }) =>
            n.a.createElement(
              'svg',
              {
                xmlns: 'http://www.w3.org/2000/svg',
                width: a,
                height: t,
                viewBox: '0 0 14 14',
              },
              n.a.createElement('path', {
                id: 'Path_111',
                'data-name': 'Path 111',
                d:
                  'M269.443,404.312a7,7,0,1,0,7,7,6.98,6.98,0,0,0-7-7Zm.635,10.818a.3.3,0,0,1-.319.319h-.635a.3.3,0,0,1-.319-.319v-.635a.3.3,0,0,1,.319-.319h.635a.3.3,0,0,1,.319.319Zm.859-2.832c-.446.382-.763.637-.859.987a.308.308,0,0,1-.319.255h-.635a.309.309,0,0,1-.319-.35,2.988,2.988,0,0,1,1.336-1.876c.574-.446.892-.732.892-1.274a1.591,1.591,0,1,0-3.182,0v.191a.3.3,0,0,1-.224.351l-.6.189a.318.318,0,0,1-.414-.253,2.363,2.363,0,0,1-.033-.479,2.864,2.864,0,0,1,5.729,0,2.792,2.792,0,0,1-1.369,2.259Zm0,0',
                transform: 'translate(-262.442 -404.312)',
                fill: e,
              })
            ),
          HomeCleaning: ({
            color: e = 'currentColor',
            width: a = '18px',
            height: t = '18px',
          }) =>
            n.a.createElement(
              'svg',
              {
                xmlns: 'http://www.w3.org/2000/svg',
                width: a,
                height: t,
                viewBox: '0 0 18 18',
              },
              n.a.createElement(
                'g',
                { transform: 'translate(-1.125 -1.125)', fill: e },
                n.a.createElement('path', {
                  'data-name': 'Path 7',
                  d: 'M1.125 18.54H1.7v.58h-.58z',
                }),
                n.a.createElement('path', {
                  'data-name': 'Path 8',
                  d: 'M18.54 18.54h.58v.58h-.58z',
                }),
                n.a.createElement('circle', {
                  'data-name': 'Ellipse 1',
                  cx: '.489',
                  cy: '.489',
                  r: '.489',
                  transform: 'translate(14.28 9.345)',
                }),
                n.a.createElement('path', {
                  'data-name': 'Path 9',
                  d: 'M9.834 10.968V9.543H8.409a1.744 1.744 0 001.425 1.425z',
                }),
                n.a.createElement('circle', {
                  'data-name': 'Ellipse 2',
                  cx: '.489',
                  cy: '.489',
                  r: '.489',
                  transform: 'translate(4.99 12.247)',
                }),
                n.a.createElement('path', {
                  'data-name': 'Path 10',
                  d: 'M9.834 7.537a1.744 1.744 0 00-1.425 1.425h1.425z',
                }),
                n.a.createElement('path', {
                  'data-name': 'Path 11',
                  d: 'M2.867 15.64h3.486v.58H2.867z',
                }),
                n.a.createElement('path', {
                  'data-name': 'Path 12',
                  d: 'M13.898 15.64h3.491v.58h-3.491z',
                }),
                n.a.createElement('path', {
                  'data-name': 'Path 13',
                  d:
                    'M16.802 16.801H14.48v1.742h-.58v-1.742h-.58v-1.742h3.486v-6.66l-6.68-2.637-6.678 2.637v6.66h3.486v1.742h-.583v1.742h-.578v-1.742H3.448v1.742H2.286v.58h15.677v-.58h-1.161zm-3.486-7.257a1.163 1.163 0 001.164-1.165h.58a1.163 1.163 0 001.162 1.162v.58a1.163 1.163 0 00-1.159 1.162h-.58a1.163 1.163 0 00-1.162-1.162zm-3.191-2.613a2.322 2.322 0 11-2.328 2.322 2.322 2.322 0 012.328-2.322zm-4.352 7.258h-.584a1.163 1.163 0 00-1.162-1.162v-.58a1.163 1.163 0 001.162-1.162h.584a1.163 1.163 0 001.158 1.162v.58a1.163 1.163 0 00-1.158 1.162zm6.39 4.354v-3.77a2.032 2.032 0 10-4.064 0v3.77h-.584v-3.77a2.613 2.613 0 115.225 0v3.77zm-3.49-2.322v-.58h.59v.58z',
                }),
                n.a.createElement('path', {
                  'data-name': 'Path 14',
                  d: 'M11.839 9.543h-1.425v1.425a1.744 1.744 0 001.425-1.425z',
                }),
                n.a.createElement('path', {
                  'data-name': 'Path 15',
                  d:
                    'M18.049 6.598l-7.925-3.13-7.925 3.13a.772.772 0 00-.494.722.76.76 0 00.337.637.787.787 0 00.742.082l7.337-2.9 7.337 2.9a.787.787 0 00.742-.082.76.76 0 00.337-.637.772.772 0 00-.494-.719z',
                }),
                n.a.createElement('path', {
                  'data-name': 'Path 16',
                  d: 'M10.414 7.537v1.425h1.425a1.744 1.744 0 00-1.425-1.425z',
                }),
                n.a.createElement('path', {
                  'data-name': 'Path 17',
                  d:
                    'M17.962 2.286h-.58a1.163 1.163 0 01-1.162 1.162v.58a1.163 1.163 0 011.162 1.162h.58a1.163 1.163 0 011.162-1.162v-.58a1.163 1.163 0 01-1.162-1.162z',
                }),
                n.a.createElement('path', {
                  'data-name': 'Path 18',
                  d:
                    'M4.028 4.027h.58a1.163 1.163 0 011.161-1.161v-.58a1.163 1.163 0 01-1.16-1.161h-.58a1.163 1.163 0 01-1.162 1.161v.58a1.163 1.163 0 011.161 1.161z',
                })
              )
            ),
          ILFlag: ({ width: e = '18px', height: a = '18px' }) =>
            n.a.createElement(
              'svg',
              {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 640 480',
                width: e,
                height: a,
              },
              n.a.createElement(
                'defs',
                null,
                n.a.createElement(
                  'clipPath',
                  { id: 'il-a' },
                  n.a.createElement('path', {
                    fillOpacity: '.7',
                    d: 'M-87.6 0H595v512H-87.6z',
                  })
                )
              ),
              n.a.createElement(
                'g',
                {
                  fillRule: 'evenodd',
                  clipPath: 'url(#il-a)',
                  transform: 'translate(82.1) scale(.94)',
                },
                n.a.createElement('path', {
                  fill: '#fff',
                  d: 'M619.4 512H-112V0h731.4z',
                }),
                n.a.createElement('path', {
                  fill: '#00c',
                  d:
                    'M619.4 115.2H-112V48h731.4zm0 350.5H-112v-67.2h731.4zm-483-275l110.1 191.6L359 191.6l-222.6-.8z',
                }),
                n.a.createElement('path', {
                  fill: '#fff',
                  d: 'M225.8 317.8l20.9 35.5 21.4-35.3-42.4-.2z',
                }),
                n.a.createElement('path', {
                  fill: '#00c',
                  d: 'M136 320.6L246.2 129l112.4 190.8-222.6.8z',
                }),
                n.a.createElement('path', {
                  fill: '#fff',
                  d:
                    'M225.8 191.6l20.9-35.5 21.4 35.4-42.4.1zM182 271.1l-21.7 36 41-.1-19.3-36zm-21.3-66.5l41.2.3-19.8 36.3-21.4-36.6zm151.2 67l20.9 35.5-41.7-.5 20.8-35zm20.5-67l-41.2.3 19.8 36.3 21.4-36.6zm-114.3 0L189.7 256l28.8 50.3 52.8 1.2 32-51.5-29.6-52-55.6.5z',
                })
              )
            ),
          InboxIcon: ({
            color: e = 'currentColor',
            width: a = '18px',
            height: t = '18px',
          }) =>
            n.a.createElement(
              'svg',
              {
                xmlns: 'http://www.w3.org/2000/svg',
                width: a,
                height: t,
                viewBox: '0 0 13.867 12.133',
              },
              n.a.createElement(
                'g',
                { 'data-name': 'Group 2932', transform: 'translate(0 0)' },
                n.a.createElement('path', {
                  'data-name': 'Path 325',
                  d: 'M7,3V0H5V3H4L6,5.5,8,3Z',
                  transform: 'translate(1 4)',
                  fill: e,
                }),
                n.a.createElement('path', {
                  'data-name': 'Path 326',
                  d:
                    'M11.267,1H9.533v.867H10.66L12.913,8.8H9.533v1.733h-5.2V8.8H.953L3.207,1.867H4.333V1H2.6L0,8.8v4.333H13.867V8.8Z',
                  transform: 'translate(0 -1)',
                  fill: e,
                })
              )
            ),
          InkPen: ({
            width: e = '18px',
            height: a = '18px',
            color: t = 'currentColor',
          }) =>
            n.a.createElement(
              'svg',
              {
                xmlns: 'http://www.w3.org/2000/svg',
                width: e,
                height: a,
                viewBox: '0 0 12.768 20.005',
              },
              n.a.createElement(
                'defs',
                null,
                n.a.createElement(
                  'clipPath',
                  { id: 'clip-path' },
                  n.a.createElement('path', {
                    id: 'Path_2913',
                    'data-name': 'Path 2913',
                    d:
                      'M10.761-507.144a1.069,1.069,0,0,0,.831-.6,13.713,13.713,0,0,1,1.545-3.142.7.7,0,0,0-.013-.832.7.7,0,0,0-.791-.25,10.984,10.984,0,0,0-5.81,4.315,12.482,12.482,0,0,0-1.877,4.63A3.873,3.873,0,0,0,5-500.563l.872,1.724a12.331,12.331,0,0,0-.137,1.327H4.3a1,1,0,0,0-1,1,1,1,0,0,0,.886.993,2.5,2.5,0,0,1-.858.266,1.557,1.557,0,0,0-1.323,1.513s0,.005,0,.008v.006c0,.005,0,.011,0,.016v.935H.891a.391.391,0,0,0-.391.391A.391.391,0,0,0,.891-492H12.1a.391.391,0,0,0,.391-.391.391.391,0,0,0-.391-.391H10.659v-.935c0-.005,0-.011,0-.016v-.006s0-.006,0-.009a1.557,1.557,0,0,0-1.323-1.513,2.5,2.5,0,0,1-.858-.266,1,1,0,0,0,.886-.993,1,1,0,0,0-1-1H6.512A10.775,10.775,0,0,1,6.62-498.6l2-1.412a2.721,2.721,0,0,0,1.011-1.37c.317-.97.813-2.545,1.378-4.539a.913.913,0,0,0-.352-.945,1.03,1.03,0,0,1-.164-.187v0a1.636,1.636,0,0,1,.267-.091ZM2.79-492.777v-.7H9.878v.7Zm6.864-1.483H3.014a.788.788,0,0,1,.439-.223,2.453,2.453,0,0,0,1.6-.755,1.206,1.206,0,0,0,.165-.276H7.452a1.209,1.209,0,0,0,.165.276,2.453,2.453,0,0,0,1.6.755A.788.788,0,0,1,9.653-494.26Zm-1.071-2.254a.218.218,0,0,1-.218.218H4.3a.218.218,0,0,1-.218-.218.218.218,0,0,1,.218-.218H8.365A.218.218,0,0,1,8.582-496.513Zm1.523-9.794a1.212,1.212,0,0,1,.153.17v0c-.563,1.985-1.056,3.551-1.371,4.516a1.935,1.935,0,0,1-.719.974l-1.36.96a22.335,22.335,0,0,1,1.081-3.756.391.391,0,0,0-.218-.508.391.391,0,0,0-.508.218A22.616,22.616,0,0,0,6.1-500.114l-.406-.8a3.09,3.09,0,0,1-.279-1.956,11.7,11.7,0,0,1,1.757-4.337,10.181,10.181,0,0,1,5.2-3.942,14.966,14.966,0,0,0-1.517,3.142,1.258,1.258,0,0,1-.31.114c-.282.08-.667.189-.788.573A.933.933,0,0,0,10.106-506.307Z',
                    transform: 'translate(-0.5 512)',
                    fill: t,
                  })
                )
              ),
              n.a.createElement(
                'g',
                {
                  id: 'Group_3369',
                  'data-name': 'Group 3369',
                  clipPath: 'url(#clip-path)',
                },
                n.a.createElement('path', {
                  id: 'Path_2912',
                  'data-name': 'Path 2912',
                  d: 'M-4.5-496.6H8.659V-517H-4.5Z',
                  transform: 'translate(4.305 516.804)',
                  fill: t,
                })
              )
            ),
          IosArrowDown: p.a,
          IosArrowUp: u.a,
          LaptopBags: ({
            color: e = 'currentColor',
            width: a = '18px',
            height: t = '18px',
          }) =>
            n.a.createElement(
              'svg',
              {
                xmlns: 'http://www.w3.org/2000/svg',
                width: a,
                height: t,
                viewBox: '0 0 18 18',
              },
              n.a.createElement(
                'g',
                {
                  'data-name': 'Group 6',
                  fill: e,
                  stroke: '#fff',
                  strokeMiterlimit: '10',
                  strokeWidth: '.091',
                },
                n.a.createElement('path', {
                  'data-name': 'Path 22',
                  d:
                    'M6.224 1.741a.408.408 0 01-.292-.175l-.013-.018v-.022c-.08-.612.818-.747.856-.753l.4-.057-.334.222h0a.807.807 0 00-.128.338c-.105.42-.375.465-.489.465zm-.13-.263a.213.213 0 00.13.081c.106 0 .244-.056.305-.323a1.686 1.686 0 01.07-.237c-.214.064-.523.205-.505.479z',
                }),
                n.a.createElement('path', {
                  'data-name': 'Path 23',
                  d:
                    'M9 6.496H.046v6.8a.833.833 0 00.833.833h16.243a.833.833 0 00.833-.833v-6.8z',
                }),
                n.a.createElement('path', {
                  'data-name': 'Path 24',
                  d:
                    'M17.44 2.135H.561a.515.515 0 00-.515.515v6.285a.833.833 0 00.833.833h16.243a.833.833 0 00.833-.833V2.65a.515.515 0 00-.515-.515z',
                }),
                n.a.createElement('path', {
                  'data-name': 'Path 25',
                  d:
                    'M11.776 1.741c-.113 0-.387-.045-.482-.464a.734.734 0 00-.134-.342l-.334-.222.4.061c.038.006.936.141.856.753v.022l-.013.018a.408.408 0 01-.293.174zM11.4.999a1.682 1.682 0 01.071.238c.061.267.2.323.305.323a.216.216 0 00.13-.081c.019-.276-.291-.416-.506-.48z',
                }),
                n.a.createElement('path', {
                  'data-name': 'Path 26',
                  d:
                    'M11.295.752A3.333 3.333 0 009 .045a3.333 3.333 0 00-2.295.707.136.136 0 00.158.222A3.036 3.036 0 018.999.318a3.037 3.037 0 012.136.656.136.136 0 10.158-.222z',
                }),
                n.a.createElement('path', {
                  'data-name': 'Path 27',
                  d: 'M9 9.419h-.958v.751h1.917v-.751z',
                }),
                n.a.createElement('path', {
                  'data-name': 'Path 28',
                  d:
                    'M8.698 8.214h0a.9.9 0 00-.657 1.24h1.917a.9.9 0 00-.657-1.24h0a1.656 1.656 0 00-.6 0z',
                }),
                n.a.createElement('path', {
                  'data-name': 'Path 29',
                  d: 'M9 10.17h-.958v1.009h1.917V10.17z',
                }),
                n.a.createElement('path', {
                  'data-name': 'Path 30',
                  d: 'M9 10.473h-.807v.706h1.615v-.706z',
                }),
                n.a.createElement('path', {
                  'data-name': 'Path 31',
                  d:
                    'M4.725 2.135h1.136a1.287 1.287 0 00.648-.83.118.118 0 00-.117-.139h0a.116.116 0 00-.095.048 1.873 1.873 0 01-1.38.721.118.118 0 00-.088.05z',
                }),
                n.a.createElement('path', {
                  'data-name': 'Path 32',
                  d:
                    'M13.275 2.135H12.14a1.287 1.287 0 01-.648-.83.118.118 0 01.116-.139h0a.116.116 0 01.095.048 1.873 1.873 0 001.38.721.118.118 0 01.088.05z',
                })
              )
            ),
          Linkedin: ({
            width: e = '18px',
            height: a = '18px',
            color: t = 'currentColor',
          }) =>
            n.a.createElement(
              'svg',
              {
                xmlns: 'http://www.w3.org/2000/svg',
                width: e,
                height: a,
                viewBox: '0 0 60.046 60.046',
              },
              n.a.createElement(
                'g',
                {
                  id: 'Group_3542',
                  'data-name': 'Group 3542',
                  transform: 'translate(-167 -582)',
                },
                n.a.createElement(
                  'g',
                  { id: 'linkedin', transform: 'translate(167 582)' },
                  n.a.createElement('circle', {
                    id: 'Ellipse_46',
                    'data-name': 'Ellipse 46',
                    cx: '30.023',
                    cy: '30.023',
                    r: '30.023',
                    transform: 'translate(0 0)',
                    fill: t,
                  }),
                  n.a.createElement(
                    'g',
                    {
                      id: 'Group_3541',
                      'data-name': 'Group 3541',
                      transform: 'translate(14.486 12.828)',
                    },
                    n.a.createElement('path', {
                      id: 'Path_6184',
                      'data-name': 'Path 6184',
                      d:
                        'M60.543,43.579V55.957H53.366V44.409c0-2.9-1.036-4.88-3.634-4.88a3.925,3.925,0,0,0-3.681,2.624,4.912,4.912,0,0,0-.238,1.749V55.956H38.637s.1-19.559,0-21.583h7.177v3.059c-.014.024-.035.048-.048.071h.048v-.071a7.125,7.125,0,0,1,6.468-3.565c4.721,0,8.261,3.085,8.261,9.713ZM31.129,23.969a3.74,3.74,0,1,0-.094,7.459h.047a3.741,3.741,0,1,0,.048-7.459ZM27.495,55.957h7.174V34.373H27.495Z',
                      transform: 'translate(-27.068 -23.969)',
                      fill: '#f1f2f2',
                    })
                  )
                )
              )
            ),
          Lips: ({
            color: e = 'currentColor',
            width: a = '18px',
            height: t = '18px',
          }) =>
            n.a.createElement(
              'svg',
              {
                xmlns: 'http://www.w3.org/2000/svg',
                width: a,
                height: t,
                viewBox: '0 0 18 18',
              },
              n.a.createElement(
                'g',
                { 'data-name': 'Group 14' },
                n.a.createElement('path', {
                  'data-name': 'Path 52',
                  d:
                    'M6.035 17.392v-6.2a.567.567 0 00-.516-.61H5.5V5.269h-.527c0-.877.008-1.608.013-2.212.019-2.149.023-2.66-.235-2.923A.454.454 0 004.422 0a1.282 1.282 0 00-.549.193 4.29 4.29 0 01-.708.3 2.882 2.882 0 00-2.117 2.235v2.541H.541v5.306H.519a.567.567 0 00-.516.61v6.2a.567.567 0 00.516.61h5.006a.567.567 0 00.51-.603zm-1.144-6.817H1.148V5.932l3.743.043z',
                  fill: e,
                })
              )
            ),
          LockIcon: ({
            color: e = 'currentColor',
            width: a = '18px',
            height: t = '18px',
          }) =>
            n.a.createElement(
              'svg',
              {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 512 512',
                width: a,
                height: t,
              },
              n.a.createElement('path', {
                d:
                  'M376 192h-24v-46.7c0-52.7-42-96.5-94.7-97.3-53.4-.7-97.3 42.8-97.3 96v48h-24c-22 0-40 18-40 40v192c0 22 18 40 40 40h240c22 0 40-18 40-40V232c0-22-18-40-40-40zM270 316.8v68.8c0 7.5-5.8 14-13.3 14.4-8 .4-14.7-6-14.7-14v-69.2c-11.5-5.6-19.1-17.8-17.9-31.7 1.4-15.5 14.1-27.9 29.6-29 18.7-1.3 34.3 13.5 34.3 31.9 0 12.7-7.3 23.6-18 28.8zM324 192H188v-48c0-18.1 7.1-35.1 20-48s29.9-20 48-20 35.1 7.1 48 20 20 29.9 20 48v48z',
              })
            ),
          LogoutIcon: ({
            color: e = 'currentColor',
            width: a = '18px',
            height: t = '18px',
          }) =>
            n.a.createElement(
              'svg',
              {
                xmlns: 'http://www.w3.org/2000/svg',
                width: a,
                height: t,
                viewBox: '0 0 15.999 13',
              },
              n.a.createElement(
                'defs',
                null,
                n.a.createElement(
                  'filter',
                  {
                    x: '4.583',
                    y: '1.792',
                    width: '11.416',
                    height: '10.333',
                    filterUnits: 'userSpaceOnUse',
                  },
                  n.a.createElement('feGaussianBlur', {
                    stdDeviation: '1',
                    result: 'blur',
                  }),
                  n.a.createElement('feFlood', { floodOpacity: '0.161' }),
                  n.a.createElement('feComposite', {
                    operator: 'in',
                    in2: 'blur',
                  }),
                  n.a.createElement('feComposite', { in: 'SourceGraphic' })
                )
              ),
              n.a.createElement(
                'g',
                { 'data-name': '007-logout', transform: 'translate(0)' },
                n.a.createElement(
                  'g',
                  { 'data-name': 'Group 1075' },
                  n.a.createElement(
                    'g',
                    { 'data-name': 'Group 1074', transform: 'translate(0)' },
                    n.a.createElement(
                      'g',
                      {
                        transform: 'matrix(1, 0, 0, 1, 0, 0)',
                        filter: 'url(#Path_319)',
                      },
                      n.a.createElement('path', {
                        'data-name': 'Path 319',
                        d:
                          'M304.055,151.3a.547.547,0,0,0-.118-.177l-1.624-1.624a.542.542,0,0,0-.766.766l.7.7h-3.026a.542.542,0,1,0,0,1.083h3.026l-.7.7a.542.542,0,1,0,.766.766l1.624-1.624a.536.536,0,0,0,.118-.177A.542.542,0,0,0,304.055,151.3Z',
                        transform: 'translate(-291.1 -145.55)',
                        fill: e,
                      })
                    ),
                    n.a.createElement('path', {
                      'data-name': 'Path 320',
                      d:
                        'M9.222,7.583a.542.542,0,0,0-.542.542v2.708H6.514V2.167a.542.542,0,0,0-.386-.519L4.247,1.083H8.681V3.792a.542.542,0,0,0,1.083,0V.542A.542.542,0,0,0,9.222,0H.556A.483.483,0,0,0,.5.01.535.535,0,0,0,.27.09C.258.1.244.1.232.107S.226.116.222.12A.537.537,0,0,0,.078.291.442.442,0,0,0,.063.336.514.514,0,0,0,.02.463a.337.337,0,0,0,0,.047C.021.521.014.531.014.542V11.375a.541.541,0,0,0,.435.531l5.417,1.083A.5.5,0,0,0,5.972,13a.542.542,0,0,0,.542-.542v-.542H9.222a.542.542,0,0,0,.542-.542V8.125A.542.542,0,0,0,9.222,7.583Z',
                      transform: 'translate(-0.014)',
                      fill: e,
                    })
                  )
                )
              )
            ),
          LongArrowLeft: ({
            color: e = 'currentColor',
            width: a = '18px',
            height: t = '18px',
          }) =>
            n.a.createElement(
              'svg',
              {
                xmlns: 'http://www.w3.org/2000/svg',
                width: a,
                height: t,
                viewBox: '0 0 12 8.003',
              },
              n.a.createElement('path', {
                'data-name': '_ionicons_svg_ios-arrow-round-back (2)',
                d:
                  'M116.447,160.177a.545.545,0,0,1,0,.767l-2.53,2.538h9.641a.542.542,0,0,1,0,1.084h-9.641l2.534,2.538a.549.549,0,0,1,0,.767.54.54,0,0,1-.763,0l-3.435-3.46a.608.608,0,0,1-.113-.171.517.517,0,0,1-.042-.208.543.543,0,0,1,.154-.379l3.435-3.46A.531.531,0,0,1,116.447,160.177Z',
                transform: 'translate(-112.1 -160.023)',
                fill: e,
              })
            ),
          MakeupIcon: ({
            color: e = 'currentColor',
            width: a = '18px',
            height: t = '18px',
          }) =>
            n.a.createElement(
              'svg',
              {
                xmlns: 'http://www.w3.org/2000/svg',
                width: a,
                height: t,
                viewBox: '0 0 11.401 16',
              },
              n.a.createElement(
                'g',
                { transform: 'translate(-0.004)' },
                n.a.createElement('path', {
                  'data-name': 'Path 2031',
                  d:
                    'M20.758,112.77v2.76h3.383v-2.352a2.422,2.422,0,0,1-1.367.409A3.01,3.01,0,0,1,20.758,112.77Zm0,0',
                  transform: 'translate(-20.105 -109.246)',
                  fill: e,
                }),
                n.a.createElement('path', {
                  'data-name': 'Path 2032',
                  d:
                    'M4.228,233.031H.408a.4.4,0,0,0-.4.4v7.909a.4.4,0,0,0,.4.4h3.82a.4.4,0,0,0,.4-.4v-7.909A.4.4,0,0,0,4.228,233.031Zm0,0',
                  transform: 'translate(0 -225.749)',
                  fill: e,
                }),
                n.a.createElement('path', {
                  'data-name': 'Path 2033',
                  d:
                    'M216.715,453.338a.4.4,0,0,0,.4.4h3.82a.4.4,0,0,0,.4-.4v-1.475h-4.629Zm0,0',
                  transform: 'translate(-209.939 -437.743)',
                  fill: e,
                }),
                n.a.createElement('path', {
                  'data-name': 'Path 2034',
                  d:
                    'M220.939,233.031h-3.82a.4.4,0,0,0-.4.4v5.494h4.629v-5.494A.4.4,0,0,0,220.939,233.031Zm0,0',
                  transform: 'translate(-209.939 -225.749)',
                  fill: e,
                }),
                n.a.createElement('path', {
                  'data-name': 'Path 2035',
                  d:
                    'M22.7.482a1.7,1.7,0,0,0-2.381.006,1.7,1.7,0,0,0,.431,2.342,1.7,1.7,0,0,0,2.381-.006A1.7,1.7,0,0,0,22.7.482Zm0,0',
                  transform: 'translate(-19.381)',
                  fill: e,
                })
              )
            ),
          MeatFish: ({
            color: e = 'currentColor',
            width: a = '18px',
            height: t = '18px',
          }) =>
            n.a.createElement(
              'svg',
              {
                xmlns: 'http://www.w3.org/2000/svg',
                width: a,
                height: t,
                viewBox: '0 0 18 18',
              },
              n.a.createElement(
                'g',
                { 'data-name': 'Layer 2' },
                n.a.createElement(
                  'g',
                  { 'data-name': 'Layer 1' },
                  n.a.createElement('path', {
                    'data-name': 'Path 31',
                    d:
                      'M9.976 12.775c-3.038-.539-8.7-1.222-9.868-4.621h.008C-.977 5.471 5.959-1.484 8.663.284a2.2 2.2 0 011.139 1.685c.058 1.832-1.961 4.468-4.123 6.1 2.183-1.393 4.262-4.117 4.643-6.1a9.461 9.461 0 011.014 9.288c1.112 1.079 2.5 2.252 3.735 2.053a1.566 1.566 0 011.868 1.437 1.49 1.49 0 01-.662 1.445 1.394 1.394 0 01-.877.2 1.34 1.34 0 01-.143.82 1.621 1.621 0 01-3-1c.117-1.248-1.117-2.45-2.279-3.435zM6.212 2.807c.983.643-2.222 3.936-3.21 3.293s2.226-3.936 3.21-3.293zM8.302.936c2.58 1.689-4.417 9.1-7 7.415s4.417-9.1 7-7.415zm3.072 11.145l-1.6-.155c1.211 1.034 3.237 2.4 3.062 4.271-.161 1.724 2.284 1.5 1.988.126a.4.4 0 01.475-.5c1.417.243 1.47-2.216-.184-1.949-1.318.21-2.647-.774-3.747-1.793z',
                    fill: e,
                    fillRule: 'evenodd',
                  })
                )
              )
            ),
          MedicineIcon: ({
            width: e = '18px',
            height: a = '18px',
            color: t = 'currentColor',
          }) =>
            n.a.createElement(
              'svg',
              {
                xmlns: 'http://www.w3.org/2000/svg',
                width: e,
                height: a,
                viewBox: '0 0 16 16.001',
              },
              n.a.createElement(
                'g',
                {
                  'data-name': 'Group 175',
                  transform: 'translate(553.392 -314.288)',
                },
                n.a.createElement('path', {
                  'data-name': 'Path 178',
                  d:
                    'M-541.294,317.863a3.621,3.621,0,0,1-1.017,2.627c-1.62,1.639-3.24,3.28-4.891,4.888a3.655,3.655,0,0,1-6.033-1.643,3.5,3.5,0,0,1,.907-3.579q2.366-2.417,4.782-4.784a3.491,3.491,0,0,1,3.662-.9,3.536,3.536,0,0,1,2.514,2.77A4.929,4.929,0,0,1-541.294,317.863Zm-4.4,3.7c.791-.786,1.6-1.527,2.329-2.336a1.853,1.853,0,0,0,.293-2.017,2.042,2.042,0,0,0-3.36-.669q-2.632,2.617-5.252,5.247a1.289,1.289,0,0,0-.09.1.594.594,0,0,0,.321.955.622.622,0,0,0,.625-.21q1.47-1.474,2.944-2.945c.048-.048.1-.094.166-.158Z',
                  fill: t,
                }),
                n.a.createElement('path', {
                  'data-name': 'Path 179',
                  d:
                    'M-408.46,467.03l1.364-.817a3.95,3.95,0,0,0,4.856,2.139,3.856,3.856,0,0,0,2.756-3.015h-6.746c.067-.075.1-.12.145-.162.444-.445.884-.893,1.336-1.329a.464.464,0,0,1,.292-.12c1.533-.007,3.066-.005,4.6-.005h.367a4.05,4.05,0,0,0-2.268-2.837l.83-1.383a5.562,5.562,0,0,1,3.106,5.582,5.621,5.621,0,0,1-4.764,5.019A5.6,5.6,0,0,1-408.46,467.03Z',
                  transform: 'translate(-139.595 -139.873)',
                  fill: t,
                })
              )
            ),
          Members: ({
            color: e = 'currentColor',
            width: a = '18px',
            height: t = '18px',
          }) =>
            n.a.createElement(
              'svg',
              {
                xmlns: 'http://www.w3.org/2000/svg',
                width: a,
                height: t,
                viewBox: '0 0 56 56',
              },
              n.a.createElement('path', {
                'data-name': 'Path 2434',
                d:
                  'M56,21.656a4.49,4.49,0,0,0-3.218-4.326l-5.814-1.743V14.215a6.344,6.344,0,0,0,2.71-5.183V6.323a6.323,6.323,0,1,0-12.645,0v2.71a6.343,6.343,0,0,0,2.71,5.183v1.371l-4.065,1.219-4.065-1.219V14.215a6.344,6.344,0,0,0,2.71-5.183V6.323a6.323,6.323,0,1,0-12.645,0v2.71a6.343,6.343,0,0,0,2.71,5.183v1.371l-4.065,1.219-4.065-1.219V14.215a6.344,6.344,0,0,0,2.71-5.183V6.323a6.323,6.323,0,0,0-12.645,0v2.71a6.343,6.343,0,0,0,2.71,5.183v1.371L3.218,17.331A4.488,4.488,0,0,0,0,21.656v8.151H4.516V40.646H15.355v8.129H9.032V56H23.484V48.775H17.161V40.646h2.71V41.3l1.169.39a7.079,7.079,0,0,0,.665,1.6l-.552,1.1,2.2,2.2,1.1-.552a7.117,7.117,0,0,0,1.6.664l.39,1.169h3.109l.389-1.17a7.126,7.126,0,0,0,1.6-.664l1.1.552,2.2-2.2-.552-1.1a7.187,7.187,0,0,0,.665-1.6l1.17-.389v-.651h2.71v8.129H32.516V56H46.968V48.775H40.645V40.646H51.484V29.807H56ZM21.677,54.194H10.839V50.581H21.677Zm23.484,0H34.323V50.581H45.161ZM43.355,1.807A4.525,4.525,0,0,1,47.78,5.42H45.374a7.688,7.688,0,0,1-3.422-.808l-.583-.291-.46.46a2.192,2.192,0,0,1-1.541.639H38.93a4.525,4.525,0,0,1,4.425-3.613ZM38.839,9.033V7.226h.529a3.955,3.955,0,0,0,2.324-.747,9.5,9.5,0,0,0,3.682.747h2.5V9.033a4.534,4.534,0,0,1-2.259,3.908l-.451.261v2.574l-1.806,1.2-1.806-1.2V13.2L41.1,12.94a4.533,4.533,0,0,1-2.259-3.908ZM28,1.807A4.525,4.525,0,0,1,32.425,5.42H30.019A7.688,7.688,0,0,1,26.6,4.611l-.583-.291-.46.46a2.192,2.192,0,0,1-1.541.639h-.438A4.525,4.525,0,0,1,28,1.807ZM23.484,9.033V7.226h.529a3.955,3.955,0,0,0,2.324-.747,9.5,9.5,0,0,0,3.682.747h2.5V9.033a4.534,4.534,0,0,1-2.259,3.908l-.451.261v2.574L28,16.979l-1.806-1.2V13.2l-.451-.261a4.533,4.533,0,0,1-2.259-3.908Zm1.659,8.213L28,19.151l2.857-1.905,6.05,1.815a2.693,2.693,0,0,1,1.931,2.6V28H17.161V21.656a2.693,2.693,0,0,1,1.931-2.6ZM12.645,1.807A4.525,4.525,0,0,1,17.07,5.42h-.438a2.2,2.2,0,0,1-1.542-.639l-.461-.46-.583.291a7.679,7.679,0,0,1-3.421.808H8.22a4.525,4.525,0,0,1,4.425-3.613ZM8.129,9.033V7.226h2.5a9.5,9.5,0,0,0,3.682-.747,3.957,3.957,0,0,0,2.324.747h.529V9.033A4.533,4.533,0,0,1,14.9,12.94l-.451.261v2.574l-1.806,1.2-1.806-1.2V13.2l-.451-.261A4.533,4.533,0,0,1,8.129,9.033ZM1.806,21.656a2.693,2.693,0,0,1,1.931-2.6l6.05-1.816,2.857,1.906L15.5,17.246l1.975.593a4.474,4.474,0,0,0-2.123,3.818V28H1.806ZM34.323,39.994l-.907.3-.1.514a5.365,5.365,0,0,1-.8,1.932l-.291.436.428.856-.357.358-.855-.429L31,44.253a5.359,5.359,0,0,1-1.932.8l-.514.1-.3.909h-.5l-.3-.908-.514-.1a5.349,5.349,0,0,1-1.932-.8l-.437-.291-.855.429-.357-.358.428-.856-.291-.436a5.343,5.343,0,0,1-.8-1.932l-.1-.514-.907-.3v-.5l.907-.3.1-.514a5.352,5.352,0,0,1,.8-1.932l.291-.436-.428-.857.357-.357.855.429L25,35.231a5.359,5.359,0,0,1,1.932-.8l.514-.1.3-.908h.5l.3.908.514.1a5.349,5.349,0,0,1,1.932.8l.437.291.855-.429.357.357-.428.857.291.436a5.33,5.33,0,0,1,.8,1.932l.1.514.907.3Zm15.355-1.155H36.129v-.651L34.96,37.8a7.063,7.063,0,0,0-.665-1.6l.552-1.1-2.2-2.2-1.1.552a7.117,7.117,0,0,0-1.6-.664l-.39-1.169H26.445l-.389,1.17a7.125,7.125,0,0,0-1.6.664l-1.1-.552-2.2,2.2.552,1.1a7.169,7.169,0,0,0-.665,1.6l-1.17.389v.651H6.323V29.807H49.677ZM54.194,28H40.645V21.656a4.474,4.474,0,0,0-2.123-3.818l1.975-.593,2.857,1.905,2.857-1.905,6.05,1.815a2.693,2.693,0,0,1,1.931,2.6Zm0,0',
                transform: 'translate(0 0)',
                fill: e,
              })
            ),
          MenuDown: ({
            color: e = 'currentColor',
            width: a = '18px',
            height: t = '18px',
          }) =>
            n.a.createElement(
              'svg',
              {
                xmlns: 'http://www.w3.org/2000/svg',
                width: a,
                height: t,
                viewBox: '0 0 12 6',
              },
              n.a.createElement('path', {
                id: 'Path_2897',
                'data-name': 'Path 2897',
                d: 'M0,63.75l6,6,6-6Z',
                transform: 'translate(0 -63.75)',
                fill: e,
              })
            ),
          MenuIcon: f.a,
          Minus: E.a,
          MinusSquare: ({
            color: e = 'currentColor',
            width: a = '18px',
            height: t = '18px',
          }) =>
            n.a.createElement(
              'svg',
              { width: a, height: t, viewBox: '64 -65 897 897' },
              n.a.createElement(
                'g',
                null,
                n.a.createElement('path', {
                  d:
                    'M888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0zM732 347h-442q-14 0 -25 10.5t-11 25.5v0q0 15 11 25.5t25 10.5h442q14 0 25 -10.5t11 -25.5v0 q0 -15 -11 -25.5t-25 -10.5z',
                  fill: e,
                })
              )
            ),
          NoCartBag: ({
            color: e = 'currentColor',
            width: a = '18px',
            height: t = '18px',
          }) =>
            n.a.createElement(
              'svg',
              {
                xmlns: 'http://www.w3.org/2000/svg',
                width: a,
                height: t,
                viewBox: '0 0 231.91 292',
              },
              n.a.createElement(
                'defs',
                null,
                n.a.createElement(
                  'linearGradient',
                  {
                    id: 'linear-gradient',
                    x1: '1',
                    y1: '0.439',
                    x2: '0.369',
                    y2: '1',
                    gradientUnits: 'objectBoundingBox',
                  },
                  n.a.createElement('stop', {
                    offset: '0',
                    stopColor: '#029477',
                  }),
                  n.a.createElement('stop', {
                    offset: '1',
                    stopColor: '#009e7f',
                  })
                )
              ),
              n.a.createElement(
                'g',
                {
                  id: 'no_cart_in_bag_2',
                  'data-name': 'no cart in bag 2',
                  transform: 'translate(-1388 -351)',
                },
                n.a.createElement('ellipse', {
                  id: 'Ellipse_2873',
                  'data-name': 'Ellipse 2873',
                  cx: '115.955',
                  cy: '27.366',
                  rx: '115.955',
                  ry: '27.366',
                  transform: 'translate(1388 588.268)',
                  fill: '#ddd',
                  opacity: '0.25',
                }),
                n.a.createElement('path', {
                  id: 'Path_18691',
                  'data-name': 'Path 18691',
                  d:
                    'M29.632,0H170.368A29.828,29.828,0,0,1,200,30.021V209.979A29.828,29.828,0,0,1,170.368,240H29.632A29.828,29.828,0,0,1,0,209.979V30.021A29.828,29.828,0,0,1,29.632,0Z',
                  transform: 'translate(1403 381)',
                  fill: '#009e7f',
                }),
                n.a.createElement('path', {
                  id: 'Rectangle_1852',
                  'data-name': 'Rectangle 1852',
                  d:
                    'M30,0H170a30,30,0,0,1,30,30v0a30,30,0,0,1-30,30H12.857A12.857,12.857,0,0,1,0,47.143V30A30,30,0,0,1,30,0Z',
                  transform: 'translate(1403 381)',
                  fill: '#006854',
                }),
                n.a.createElement('path', {
                  id: 'Rectangle_1853',
                  'data-name': 'Rectangle 1853',
                  d:
                    'M42,0H158a42,42,0,0,1,42,42v0a18,18,0,0,1-18,18H18A18,18,0,0,1,0,42v0A42,42,0,0,1,42,0Z',
                  transform: 'translate(1403 381)',
                  fill: '#006854',
                }),
                n.a.createElement('path', {
                  id: 'Path_18685',
                  'data-name': 'Path 18685',
                  d:
                    'M446.31,246.056a30,30,0,1,1,30-30A30.034,30.034,0,0,1,446.31,246.056Zm0-53.294A23.3,23.3,0,1,0,469.9,216.056,23.471,23.471,0,0,0,446.31,192.762Z',
                  transform: 'translate(1056.69 164.944)',
                  fill: '#006854',
                }),
                n.a.createElement('path', {
                  id: 'Path_18686',
                  'data-name': 'Path 18686',
                  d:
                    'M446.31,375.181a30,30,0,1,1,30-30A30.034,30.034,0,0,1,446.31,375.181Zm0-53.294A23.3,23.3,0,1,0,469.9,345.181,23.471,23.471,0,0,0,446.31,321.887Z',
                  transform: 'translate(1057.793 95.684)',
                  fill: '#009e7f',
                }),
                n.a.createElement('circle', {
                  id: 'Ellipse_2874',
                  'data-name': 'Ellipse 2874',
                  cx: '28.689',
                  cy: '28.689',
                  r: '28.689',
                  transform: 'translate(1473.823 511.046)',
                  fill: '#006854',
                }),
                n.a.createElement('circle', {
                  id: 'Ellipse_2875',
                  'data-name': 'Ellipse 2875',
                  cx: '15.046',
                  cy: '15.046',
                  r: '15.046',
                  transform: 'translate(1481.401 547.854) rotate(-45)',
                  fill: '#009e7f',
                }),
                n.a.createElement('path', {
                  id: 'Path_18687',
                  'data-name': 'Path 18687',
                  d:
                    'M399.71,531.27a71.755,71.755,0,0,1,12.65-13.6c3.4-2.863-1.5-7.726-4.882-4.882a78.392,78.392,0,0,0-13.73,15c-2.56,3.644,3.424,7.1,5.962,3.485Z',
                  transform: 'translate(1060.579 -35.703)',
                  fill: '#006854',
                }),
                n.a.createElement('path', {
                  id: 'Path_18688',
                  'data-name': 'Path 18688',
                  d:
                    'M412.913,527.786a78.419,78.419,0,0,0-13.73-15c-3.38-2.843-8.289,2.017-4.882,4.882a71.785,71.785,0,0,1,12.65,13.6c2.535,3.609,8.525.162,5.962-3.485Z',
                  transform: 'translate(1060.566 -35.704)',
                  fill: '#006854',
                }),
                n.a.createElement('path', {
                  id: 'Path_18689',
                  'data-name': 'Path 18689',
                  d:
                    'M583.278,527.786a78.417,78.417,0,0,0-13.73-15c-3.38-2.843-8.289,2.017-4.882,4.882a71.768,71.768,0,0,1,12.65,13.6c2.535,3.609,8.525.162,5.962-3.485Z',
                  transform: 'translate(970.304 -35.704)',
                  fill: '#006854',
                }),
                n.a.createElement('path', {
                  id: 'Path_18690',
                  'data-name': 'Path 18690',
                  d:
                    'M570.075,531.27a71.77,71.77,0,0,1,12.65-13.6c3.4-2.863-1.5-7.726-4.882-4.882a78.407,78.407,0,0,0-13.73,15c-2.56,3.644,3.424,7.1,5.962,3.485Z',
                  transform: 'translate(970.318 -35.703)',
                  fill: '#006854',
                }),
                n.a.createElement('path', {
                  id: 'Path_18692',
                  'data-name': 'Path 18692',
                  d:
                    'M301.243,287.464a19.115,19.115,0,0,1,8.071,9.077,19.637,19.637,0,0,1,1.6,7.88v26.085a19.349,19.349,0,0,1-9.672,16.957c-10.048-6.858-16.544-17.742-16.544-30S291.2,294.322,301.243,287.464Z',
                  transform: 'translate(1292.301 101.536)',
                  fill: 'url(#linear-gradient)',
                }),
                n.a.createElement('path', {
                  id: 'Path_18693',
                  'data-name': 'Path 18693',
                  d:
                    'M294.371,287.464a19.115,19.115,0,0,0-8.071,9.077,19.637,19.637,0,0,0-1.6,7.88v26.085a19.349,19.349,0,0,0,9.672,16.957c10.048-6.858,16.544-17.742,16.544-30S304.419,294.322,294.371,287.464Z',
                  transform: 'translate(1118.301 101.536)',
                  fill: 'url(#linear-gradient)',
                })
              )
            ),
          NotificationIcon: ({
            color: e = 'currentColor',
            width: a = '18px',
            height: t = '18px',
          }) =>
            n.a.createElement(
              'svg',
              {
                xmlns: 'http://www.w3.org/2000/svg',
                width: a,
                height: t,
                viewBox: '0 0 15.898 18',
              },
              n.a.createElement('path', {
                'data-name': 'Path 2062',
                d:
                  'M3756.814,4042.745c-.321,1.887-1.279,2.844-2.816,2.832-1.495-.011-2.448-.987-2.74-2.8-.834-.14-1.684-.218-2.494-.44a7.131,7.131,0,0,1-1.956-.838,1.354,1.354,0,0,1-.333-2.139,7.716,7.716,0,0,0,1.7-4.647,16.446,16.446,0,0,1,.793-3.939,4.785,4.785,0,0,1,4.625-3.188,8.258,8.258,0,0,1,2.4.256,4.649,4.649,0,0,1,3.432,3.795c.3,1.292.441,2.62.646,3.934a7.247,7.247,0,0,0,.836,2.789,6.2,6.2,0,0,0,.573.74,1.577,1.577,0,0,1-.41,2.6,7.794,7.794,0,0,1-2.977.89C3757.661,4042.654,3757.234,4042.695,3756.814,4042.745Zm3.407-2.482a8.64,8.64,0,0,1-1.888-5.015c-.139-1.1-.309-2.195-.547-3.274a3.019,3.019,0,0,0-2.075-2.482,5.458,5.458,0,0,0-1.612-.264c-2.086.031-3.318.688-3.815,2.928-.259,1.167-.388,2.365-.561,3.55a7.6,7.6,0,0,1-1.781,4.458c-.022.023-.019.071-.026.1C3749.689,4041.453,3758.313,4041.456,3760.221,4040.263Zm-4.717,2.583h-2.94a1.47,1.47,0,1,0,2.94,0Z',
                transform: 'translate(-3746.087 -4027.577)',
                fill: e,
              })
            ),
          OptionIcon: ({
            color: e = 'currentColor',
            width: a = '18px',
            height: t = '18px',
          }) =>
            n.a.createElement(
              'svg',
              {
                xmlns: 'http://www.w3.org/2000/svg',
                width: a,
                height: t,
                viewBox: '0 0 3.5 14',
              },
              n.a.createElement('path', {
                'data-name': '_ionicons_svg_md-more (1)',
                d:
                  'M219.5,97.75a1.75,1.75,0,1,0-1.75,1.75A1.755,1.755,0,0,0,219.5,97.75Zm0,10.5a1.75,1.75,0,1,0-1.75,1.75A1.755,1.755,0,0,0,219.5,108.25Zm0-5.25a1.75,1.75,0,1,0-1.75,1.75A1.755,1.755,0,0,0,219.5,103Z',
                transform: 'translate(-216 -96)',
                fill: e,
              })
            ),
          OralCare: ({
            color: e = 'currentColor',
            width: a = '18px',
            height: t = '18px',
          }) =>
            n.a.createElement(
              'svg',
              {
                xmlns: 'http://www.w3.org/2000/svg',
                width: a,
                height: t,
                viewBox: '0 0 18 18',
              },
              n.a.createElement(
                'g',
                { fill: e },
                n.a.createElement('path', {
                  'data-name': 'Path 65',
                  d:
                    'M3.118 11.024a2.267 2.267 0 01.142 1.454l-.027.333c-.127 1.655.111 3.807 1.157 4.887a.463.463 0 00.1.046.252.252 0 00.317-.127.255.255 0 00.017-.15v-.02c-.017-.157-.385-3.87 1.27-5.887a1.035 1.035 0 011.6.009c1.623 2.025 1.257 5.719 1.241 5.875v.02a.255.255 0 00.017.15.252.252 0 00.317.127.388.388 0 00.111-.049c1.043-1.078 1.281-3.231 1.154-4.887a35.384 35.384 0 00-.027-.333 2.268 2.268 0 01.142-1.455 3.792 3.792 0 011.517-1.087 2.221 2.221 0 001-1.522 3.819 3.819 0 00-.16-2.192c-.555-1.388-1.827-1.924-3.5-1.466a4.521 4.521 0 00-1.368.622c-.2.126-.409.253-.666.384a2.761 2.761 0 001.566.237.248.248 0 11.1.486 3.837 3.837 0 01-2.355-.493 10.454 10.454 0 01-.478-.265 7.466 7.466 0 00-2.338-1.014A2.73 2.73 0 00.698 6.581a2.908 2.908 0 00.92 3.343 3.784 3.784 0 011.5 1.1z',
                }),
                n.a.createElement('path', {
                  'data-name': 'Path 66',
                  d:
                    'M17.256.93H6.409L6.036.558A1.888 1.888 0 004.693.003H.664a.666.666 0 00-.666.666v1.889a.25.25 0 00.5 0V.667A.165.165 0 01.663.502h.1v2.087a.25.25 0 10.5 0V.497h.222v2.087a.25.25 0 10.5 0V.497h.222v2.087a.25.25 0 10.5 0V.497h.222v2.087a.25.25 0 10.5 0V.497h.222v2.087a.25.25 0 10.5 0V.497h.222v2.087a.25.25 0 10.5 0V.507a1.4 1.4 0 01.823.4l.792.789a1.888 1.888 0 001.343.555h9.441a.666.666 0 100-1.323z',
                })
              )
            ),
          OrderIcon: ({
            color: e = 'currentColor',
            width: a = '18px',
            height: t = '18px',
          }) =>
            n.a.createElement(
              'svg',
              {
                xmlns: 'http://www.w3.org/2000/svg',
                width: a,
                height: t,
                viewBox: '0 0 11.321 13',
              },
              n.a.createElement(
                'g',
                { 'data-name': 'Group 1087', transform: 'translate(0)' },
                n.a.createElement(
                  'g',
                  { 'data-name': 'Group 1086' },
                  n.a.createElement('path', {
                    'data-name': 'Path 322',
                    d: 'M274.867.365A.733.733,0,0,0,274.234,0h-2.718V3.215h5Z',
                    transform: 'translate(-265.461)',
                    fill: e,
                  }),
                  n.a.createElement('path', {
                    'data-name': 'Path 323',
                    d:
                      'M48.821,0H46.077a.733.733,0,0,0-.633.366L43.8,3.215h5.02V0Z',
                    transform: 'translate(-43.528)',
                    fill: e,
                  }),
                  n.a.createElement('path', {
                    'data-name': 'Path 324',
                    d:
                      'M33.057,156.648v8.127a.9.9,0,0,0,.9.9h9.529a.9.9,0,0,0,.9-.9v-8.127Zm7.39,3.418-1.971,1.971a.38.38,0,0,1-.539,0l-.924-.924a.381.381,0,1,1,.539-.539l.654.654,1.7-1.7a.381.381,0,1,1,.539.539Z',
                    transform: 'translate(-33.057 -152.671)',
                    fill: e,
                  })
                )
              )
            ),
          OuterWear: ({
            color: e = 'currentColor',
            width: a = '18px',
            height: t = '18px',
          }) =>
            n.a.createElement(
              'svg',
              {
                xmlns: 'http://www.w3.org/2000/svg',
                width: a,
                height: t,
                viewBox: '0 0 18 18',
              },
              n.a.createElement(
                'g',
                { 'data-name': 'Group 29', fill: e },
                n.a.createElement('path', {
                  'data-name': 'Path 99',
                  d:
                    'M15.643 5.659a1.993 1.993 0 00.453-.062c-.224-1.2-.4-1.9-.4-1.9a5.546 5.546 0 00-1.713-1.068 1.964 1.964 0 001.66 3.03z',
                }),
                n.a.createElement('path', {
                  'data-name': 'Path 100',
                  d:
                    'M.896 5.596a1.962 1.962 0 002.113-2.97 5.561 5.561 0 00-1.712 1.068s-.178.697-.401 1.902z',
                }),
                n.a.createElement('path', {
                  'data-name': 'Path 101',
                  d:
                    'M15.641 6.146a2.466 2.466 0 01-2.463-2.463 2.436 2.436 0 01.348-1.24 14.661 14.661 0 00-2.08-.61L11.422.664A5.484 5.484 0 008.947.008c-.225-.01-.677-.01-.904 0a5.5 5.5 0 00-2.478.653l-.02 1.169a14.746 14.746 0 00-2.08.612 2.446 2.446 0 01-2.658 3.64 53.686 53.686 0 00-.771 11.244H.26v.123a.512.512 0 00.532.493h1.24a.512.512 0 00.532-.493v-.123h.23s-.238-7.281 1.02-9.143v9.08a23.275 23.275 0 004.326.735V1.151a5.227 5.227 0 01-1.749-.19S6.529.498 8.043.516h.9c1.5.023 1.653.445 1.653.445a5.226 5.226 0 01-1.751.19v16.847a23.274 23.274 0 004.329-.736V8.184c1.259 1.866 1.023 9.143 1.023 9.143h.229v.123a.511.511 0 00.532.493H16.2a.512.512 0 00.532-.493v-.123h.224a53.827 53.827 0 00-.771-11.246 2.462 2.462 0 01-.544.065z',
                })
              )
            ),
          Pants: ({
            color: e = 'currentColor',
            width: a = '18px',
            height: t = '18px',
          }) =>
            n.a.createElement(
              'svg',
              {
                xmlns: 'http://www.w3.org/2000/svg',
                width: a,
                height: t,
                viewBox: '0 0 18 18',
              },
              n.a.createElement(
                'g',
                { fill: e },
                n.a.createElement('path', {
                  'data-name': 'Path 102',
                  d:
                    'M7.999 1.165a10.721 10.721 0 00-.139-.71L7.797.187A.243.243 0 007.561 0H.553a.243.243 0 00-.236.187L.253.455c-.056.235-.1.472-.139.71z',
                }),
                n.a.createElement('path', {
                  'data-name': 'Path 103',
                  d:
                    'M.018 2.048a9.93 9.93 0 00-.015.828l.379 13.479a.243.243 0 00.242.236H.86v1.155a.254.254 0 00.254.254h1.288a.254.254 0 00.254-.254v-1.155h.172a.243.243 0 00.242-.225l.833-11.228a.15.15 0 01.3 0l.825 11.228a.243.243 0 00.242.225h.233v1.155a.254.254 0 00.254.254h1.288a.254.254 0 00.254-.254v-1.155h.179a.243.243 0 00.242-.236L8.1 2.876c.008-.276 0-.553-.015-.828z',
                })
              )
            ),
          PencilIcon: ({
            color: e = 'currentColor',
            width: a = '18px',
            height: t = '18px',
          }) =>
            n.a.createElement(
              'svg',
              {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 7.2 7.2',
                width: a,
                height: t,
              },
              n.a.createElement('path', {
                d:
                  'M64,69.7v1.5h1.5l4.42-4.42-1.5-1.5Zm7.08-4.08a.387.387,0,0,0,0-.56l-.94-.94a.387.387,0,0,0-.56,0l-.74.74,1.5,1.5Z',
                transform: 'translate(-64 -63.999)',
                fill: e,
              })
            ),
          PetCare: ({
            color: e = 'currentColor',
            width: a = '18px',
            height: t = '18px',
          }) =>
            n.a.createElement(
              'svg',
              {
                xmlns: 'http://www.w3.org/2000/svg',
                width: a,
                height: t,
                viewBox: '0 0 18 18',
              },
              n.a.createElement(
                'g',
                { fill: e },
                n.a.createElement('path', {
                  'data-name': 'Path 1',
                  d:
                    'M11.335 8.363h-.139a4.189 4.189 0 01-1.864-.44l-1.116-.558.011-.022-.493.493a1.283 1.283 0 01.536.457.879.879 0 00.732.392.326.326 0 01.326.326v.643a1.288 1.288 0 01-.964 1.245v.888a1.76 1.76 0 01-.3.977l-.35.515v.734l.737-.737a.326.326 0 01.548.227v2.186l.643-.426v-2.4a.326.326 0 01.128-.257l1.257-.944a2.143 2.143 0 00.5-1.274 4.447 4.447 0 00-.034-.809z',
                }),
                n.a.createElement('path', {
                  'data-name': 'Path 2',
                  d:
                    'M9.08 7.077l.543.27a3.543 3.543 0 001.577.372h.056V5.791a.326.326 0 01.326-.326h.8a.483.483 0 00.482-.482v-.472h-.643a.326.326 0 01-.227-.094l-.651-.651a.76.76 0 00-.543-.223h-.7a.8.8 0 00-.564.233 2.932 2.932 0 00-.869 2.086v.573h.4a.242.242 0 00.241-.241V5.149h.643v1.045a.885.885 0 01-.881.887zm1.206-2.894h.643v.643h-.643z',
                }),
                n.a.createElement('path', {
                  'data-name': 'Path 3',
                  d: 'M10.287 14.841l.643-.426v-1.873l-.643.482z',
                }),
                n.a.createElement('path', {
                  'data-name': 'Path 4',
                  d:
                    'M17.794 3.684a6.04 6.04 0 00-.612-1.464 4.466 4.466 0 00-7.43-.434l-.493.651a.326.326 0 01-.515 0l-.493-.651A4.488 4.488 0 004.678 0H4.56A4.466 4.466 0 00.789 2.077 5.038 5.038 0 000 4.783v.929a7.535 7.535 0 003.244 6.206l.326-.485a8.686 8.686 0 01-1.6-1.539l-.29-.362a.326.326 0 01.5-.4l.289.362a8.042 8.042 0 001.455 1.412l.9-1.346v-.993A2.419 2.419 0 015.4 7.091l.457-.537a.326.326 0 01.557.13l.261 1.042h.258l1.1-1.1v-.76a3.57 3.57 0 011.052-2.541 1.441 1.441 0 011.018-.421h.7a1.394 1.394 0 01.992.412l.553.554h.832a.326.326 0 01.326.326v.8a1.126 1.126 0 01-1.128 1.118H11.9V7.7l.24 1.8a5.09 5.09 0 01.039.926 2.785 2.785 0 01-.6 1.593v1.975l3.04-2.016A7.541 7.541 0 0018 5.677v-.414a6.023 6.023 0 00-.208-1.573zM1.388 8.344a.326.326 0 01-.41-.2l-.05-.15A5.6 5.6 0 01.64 6.218v-.109a.326.326 0 11.643 0v.109a4.962 4.962 0 00.255 1.572l.05.149a.326.326 0 01-.2.407zm14.937 1.181l-.289.362a8.649 8.649 0 01-2.472 2.115l-.869.494a.326.326 0 01-.319-.558l.869-.494a8.009 8.009 0 002.29-1.954l.289-.362a.326.326 0 11.506.4zm1.035-3.309a5.6 5.6 0 01-.288 1.775l-.05.15a.326.326 0 01-.612-.2v.003l.05-.15a4.961 4.961 0 00.255-1.571v-.109a.326.326 0 11.643 0v.109zm0-1.392a.326.326 0 11-.643 0v-.326a.326.326 0 01.643 0z',
                }),
                n.a.createElement('path', {
                  'data-name': 'Path 5',
                  d:
                    'M7.126 13.007l.4-.6a1.119 1.119 0 00.189-.624v-1.169a.326.326 0 01.326-.326.644.644 0 00.643-.643v-.356a1.52 1.52 0 01-.946-.644.642.642 0 00-.535-.287H6.43a.326.326 0 01-.312-.243l-.169-.679-.052.061a1.774 1.774 0 00-.434 1.078v1.072a.326.326 0 01-.054.178L3.78 12.271l.185.121.676.443 2.584 1.693-.118-.237a.326.326 0 01-.034-.143v-.964a.326.326 0 01.054-.174zM6.75 9.649v-.643h.645v.643z',
                }),
                n.a.createElement('path', {
                  'data-name': 'Path 6',
                  d:
                    'M8.002 14.648a.325.325 0 01.034.144v.269l.326.211v-.99l-.359.359z',
                })
              )
            ),
          Plus: E.b,
          PlusOutline: ({
            color: e = 'currentColor',
            width: a = '18px',
            height: t = '18px',
          }) =>
            n.a.createElement(
              'svg',
              {
                xmlns: 'http://www.w3.org/2000/svg',
                width: a,
                height: t,
                viewBox: '0 0 16 16',
              },
              n.a.createElement(
                'g',
                {
                  id: 'Group_3371',
                  'data-name': 'Group 3371',
                  transform: 'translate(-1539 -2317.5)',
                },
                n.a.createElement('rect', {
                  id: 'Rectangle_680',
                  'data-name': 'Rectangle 680',
                  width: '16',
                  height: '1.5',
                  transform: 'translate(1539 2325)',
                  fill: e,
                }),
                n.a.createElement('rect', {
                  id: 'Rectangle_681',
                  'data-name': 'Rectangle 681',
                  width: '16',
                  height: '1.5',
                  transform: 'translate(1547.5 2317.5) rotate(90)',
                  fill: e,
                })
              )
            ),
          PlusSquare: ({
            color: e = 'currentColor',
            width: a = '18px',
            height: t = '18px',
          }) =>
            n.a.createElement(
              'svg',
              { width: a, height: t, viewBox: '64 -65 897 897' },
              n.a.createElement(
                'g',
                null,
                n.a.createElement('path', {
                  d:
                    'M888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0zM732 420h-184v183q0 15 -10.5 25.5t-25.5 10.5v0q-14 0 -25 -10.5t-11 -25.5v-183h-184 q-15 0 -25.5 -11t-10.5 -25v0q0 -15 10.5 -25.5t25.5 -10.5h184v-183q0 -15 11 -25.5t25 -10.5v0q15 0 25.5 10.5t10.5 25.5v183h184q15 0 25.5 10.5t10.5 25.5v0q0 14 -10.5 25t-25.5 11z',
                  fill: e,
                })
              )
            ),
          ProductIcon: ({
            color: e = 'currentColor',
            width: a = '18px',
            height: t = '18px',
          }) =>
            n.a.createElement(
              'svg',
              {
                xmlns: 'http://www.w3.org/2000/svg',
                width: a,
                height: t,
                viewBox: '0 0 15.6 13',
              },
              n.a.createElement('path', {
                'data-name': 'Path 154',
                d:
                  'M299.593,418.656l-3.148-4.494a.9.9,0,0,0-.572-.272.658.658,0,0,0-.573.272l-3.148,4.494h-3.435a.66.66,0,0,0-.716.677v.207l1.789,6.327a1.448,1.448,0,0,0,1.36,1.023h9.3a1.366,1.366,0,0,0,1.359-1.023l1.789-6.327v-.207a.659.659,0,0,0-.716-.677Zm-5.87,0,2.149-3,2.145,3Zm2.149,5.443a1.362,1.362,0,1,1,1.428-1.363,1.4,1.4,0,0,1-1.428,1.363Zm0,0',
                transform: 'translate(-288 -413.89)',
                fill: e,
              })
            ),
          Purse: ({
            color: e = 'currentColor',
            width: a = '18px',
            height: t = '18px',
          }) =>
            n.a.createElement(
              'svg',
              {
                xmlns: 'http://www.w3.org/2000/svg',
                width: a,
                height: t,
                viewBox: '0 0 18 18',
              },
              n.a.createElement(
                'g',
                { 'data-name': 'Group 2' },
                n.a.createElement(
                  'g',
                  {
                    'data-name': 'Group 1',
                    fill: e,
                    stroke: '#fff',
                    strokeMiterlimit: '10',
                    strokeWidth: '.091',
                    transform: 'translate(-85.169 -7.348)',
                  },
                  n.a.createElement('path', {
                    'data-name': 'Path 1',
                    d:
                      'M98.946 11.381l.217-.061a5.124 5.124 0 00-.6-1.341 11.3 11.3 0 00-1.04-1.279 4.724 4.724 0 00-.93-.679l-.269-.143a3.735 3.735 0 00-.88-.323 5.437 5.437 0 00-1.274-.167l-.317.014a5.3 5.3 0 00-.957.152c-.1.024-.2.061-.3.092a5.009 5.009 0 00-.846.374 4.734 4.734 0 00-.93.679 5.709 5.709 0 00-1.639 2.615l.217.061.217.061a4.7 4.7 0 01.972-1.8 5.106 5.106 0 01.6-.508 4.982 4.982 0 01.874-.521 5.2 5.2 0 011.018-.35 5.315 5.315 0 011.1-.123 5.5 5.5 0 011.1.123 5.2 5.2 0 011.018.35 4.99 4.99 0 01.874.521 5.066 5.066 0 01.585.5 4.7 4.7 0 01.982 1.806z',
                  }),
                  n.a.createElement('path', {
                    'data-name': 'Path 2',
                    d:
                      'M93.787 22.392a22.149 22.149 0 01-8.561-1.727l3.3-9.285h11.282l3.3 9.285a22.149 22.149 0 01-8.561 1.727z',
                  }),
                  n.a.createElement('path', {
                    'data-name': 'Path 3',
                    d:
                      'M88.531 11.381l-1.353 3.8a17.645 17.645 0 006.609 1.351h.765a17.643 17.643 0 006.609-1.351l-1.353-3.8z',
                  }),
                  n.a.createElement('path', {
                    'data-name': 'Path 4',
                    d:
                      'M88.531 11.23l-1.225 3.442a14.059 14.059 0 006.481 1.71h.765a14.059 14.059 0 006.481-1.71l-1.224-3.442z',
                  }),
                  n.a.createElement('rect', {
                    'data-name': 'Rectangle 26',
                    width: '2.01',
                    height: '2.01',
                    rx: '.672',
                    transform: 'rotate(-44.999 66.026 -103.976)',
                  }),
                  n.a.createElement('path', {
                    'data-name': 'Path 5',
                    d:
                      'M101.162 15.182h0l-.173-.486a14.034 14.034 0 01-6.436 1.687h-.273v.15h.272a17.649 17.649 0 006.61-1.351z',
                  }),
                  n.a.createElement('rect', {
                    'data-name': 'Rectangle 27',
                    width: '2.01',
                    height: '2.01',
                    rx: '.672',
                    transform: 'rotate(-44.999 66.026 -103.976)',
                  }),
                  n.a.createElement('rect', {
                    'data-name': 'Rectangle 28',
                    width: '1.5',
                    height: '1.5',
                    rx: '.501',
                    transform: 'rotate(-44.999 66.206 -104.411)',
                  })
                )
              )
            ),
          Refund: g.a,
          RefundIcon: ({
            color: e = 'currentColor',
            width: a = '18px',
            height: t = '18px',
          }) =>
            n.a.createElement(
              'svg',
              {
                'data-name': 'Group 2392',
                xmlns: 'http://www.w3.org/2000/svg',
                width: a,
                height: t,
                viewBox: '0 0 15 13',
              },
              n.a.createElement(
                'g',
                { 'data-name': 'Group 2391' },
                n.a.createElement('path', {
                  'data-name': 'Path 335',
                  d:
                    'M301.479,70.5a3.284,3.284,0,1,0-2.812-3.25A3.058,3.058,0,0,0,301.479,70.5Zm-.765-4.656.625-.361a.275.275,0,0,1,.3.016.377.377,0,0,1,.148.307v2.889a.316.316,0,1,1-.625,0v-2.3l-.173.1a.3.3,0,0,1-.419-.162A.389.389,0,0,1,300.715,65.844Z',
                  transform: 'translate(-289.917 -64)',
                  fill: e,
                }),
                n.a.createElement('path', {
                  'data-name': 'Path 336',
                  d:
                    'M2.919,213.931l-2.545-.588a.284.284,0,0,0-.259.075A.387.387,0,0,0,0,213.7v5.778a.339.339,0,0,0,.313.361H2.271a1,1,0,0,0,.928-.93l.464-3.759A1.08,1.08,0,0,0,2.919,213.931Z',
                  transform: 'translate(0 -208.28)',
                  fill: e,
                }),
                n.a.createElement('path', {
                  'data-name': 'Path 337',
                  d:
                    'M138.085,247.5a7.23,7.23,0,0,0-1.64.332.362.362,0,0,0-.235.368c0,.007,0,.014,0,.022a1.747,1.747,0,0,1-.585,1.351,2.141,2.141,0,0,1-1.477.462,11.623,11.623,0,0,1-3.5-.769.38.38,0,0,1-.236-.418.315.315,0,0,1,.4-.281,11.347,11.347,0,0,0,3.339.745,1.552,1.552,0,0,0,1.1-.319.984.984,0,0,0,.334-.772,1.416,1.416,0,0,0-.016-.172c-.118-1-1.254-1.353-2.422-1.627a4.926,4.926,0,0,1-1.335-.569,3.055,3.055,0,0,0-1.539-.521,5.015,5.015,0,0,0-.752.06.353.353,0,0,0-.27.386,1.994,1.994,0,0,1-.009.384l-.464,3.76a.985.985,0,0,1-.02.1l-.017.072a.38.38,0,0,0,.176.416,13.78,13.78,0,0,0,4.481,1.685c1.212,0,3.708-1.418,5.359-2.356.426-.242.779-.443,1.01-.56a.364.364,0,0,0,.193-.321C139.968,248.1,139.195,247.5,138.085,247.5Z',
                  transform: 'translate(-124.96 -239.191)',
                  fill: e,
                })
              )
            ),
          Restaurant: ({
            color: e = 'currentColor',
            width: a = '18px',
            height: t = '18px',
          }) =>
            n.a.createElement(
              'svg',
              {
                xmlns: 'http://www.w3.org/2000/svg',
                width: a,
                height: t,
                viewBox: '0 0 9.919 14',
              },
              n.a.createElement(
                'g',
                { id: 'Food', transform: 'translate(-760.678 -69.1)' },
                n.a.createElement('path', {
                  id: 'Path_2721',
                  'data-name': 'Path 2721',
                  d:
                    'M773.859,140.736a5.543,5.543,0,0,1-4.261-2.051l.749,7.838a.482.482,0,0,0,.48.48h6.2a.482.482,0,0,0,.48-.48l.619-7.84A5.544,5.544,0,0,1,773.859,140.736Z',
                  transform: 'translate(-8.192 -63.904)',
                  fill: e,
                }),
                n.a.createElement('path', {
                  id: 'Path_2722',
                  'data-name': 'Path 2722',
                  d:
                    'M765.543,76.5c-.08,0-.159-.005-.238-.011l-.1-.007v-4.5c0-.126-.063-.2-.09-.2h-.9c-.026,0-.091.071-.091.2v4.29L764,76.223c-.08-.027-.159-.057-.238-.088l-.066-.026V71.979a.629.629,0,0,1,.481-.666l-.062-.724c-.011-.127-.078-.192-.1-.192l-.895.09c-.012,0-.03.016-.047.048a.314.314,0,0,0-.027.163l.455,5.326-.163-.081c-.086-.044-.17-.088-.25-.134l-.048-.027-.149-1.75-.727-2.476c-.031-.106-.1-.163-.133-.163l-.862.294c-.03.01-.066.106-.031.225l.882,3.013-.081.043-.17-.2c-.08-.086-.151-.166-.216-.244l-.174-.217-.659-2.252a.786.786,0,0,1,.011-.49.508.508,0,0,1,.305-.319l.854-.293a.417.417,0,0,1,.134-.022.637.637,0,0,1,.559.489l.12.412L762.6,70.74a.777.777,0,0,1,.107-.476.488.488,0,0,1,.362-.242l.893-.089.042,0a.619.619,0,0,1,.542.616l.065.764h.149V69.769a.612.612,0,0,1,.529-.669h.9a.612.612,0,0,1,.529.669v1.822l.084-.885a.621.621,0,0,1,.543-.61l.048,0,.891.1a.489.489,0,0,1,.36.246.779.779,0,0,1,.1.477l-.075.783.029-.1a.637.637,0,0,1,.559-.489.416.416,0,0,1,.134.022l.855.293a.508.508,0,0,1,.3.319.786.786,0,0,1,.011.49l-.617,2.09-.156.187c-.067.08-.14.163-.224.253l-.162.163-.079-.046.819-2.786a.315.315,0,0,0,.005-.166c-.01-.035-.026-.055-.037-.059l-.856-.293c-.043,0-.109.056-.139.162l-1.247,4.261-.042.02-.126.056c-.079.034-.158.065-.238.094l-.137.051V73.41c0-.126-.063-.2-.09-.2h-.9c-.026,0-.091.071-.091.2v3.059l-.094.009c-.079.008-.158.014-.238.018l-.107.005v-.88h-.164V76.5Zm.269-1.345V73.41a.63.63,0,0,1,.467-.665V69.769c0-.131-.064-.2-.091-.2h-.9c-.028,0-.091.076-.091.2v1.552a.636.636,0,0,1,.447.658v3.175Zm1.426-2.413a.612.612,0,0,1,.528.669V74.8l.254-.868.289-3.053a.287.287,0,0,0-.04-.188.056.056,0,0,0-.031-.024l-.9-.1c-.027,0-.093.068-.1.191l-.189,1.987Z',
                  fill: e,
                })
              )
            ),
          Revenue: v.a,
          SAFlag: ({ width: e = '18px', height: a = '18px' }) =>
            n.a.createElement(
              'svg',
              {
                xmlns: 'http://www.w3.org/2000/svg',
                id: 'flag-icon-css-sa',
                viewBox: '0 0 640 480',
                width: e,
                height: a,
              },
              n.a.createElement(
                'defs',
                null,
                n.a.createElement(
                  'clipPath',
                  { id: 'sa-a' },
                  n.a.createElement('path', {
                    fillOpacity: '.7',
                    d: 'M-85.3 0h682.6v512H-85.3z',
                  })
                )
              ),
              n.a.createElement(
                'g',
                {
                  fillRule: 'evenodd',
                  clipPath: 'url(#sa-a)',
                  transform: 'translate(80) scale(.9375)',
                },
                n.a.createElement('path', {
                  fill: '#199d00',
                  d: 'M-128 0h768v512h-768z',
                }),
                n.a.createElement('path', {
                  fill: '#fff',
                  d:
                    'M65.5 145.1c-.8 12-2 33 8.3 35.2 12.3 1.2 5.5-20.8 10-24.8.8-2 2.3-2 2.4.5v18.7c0 6 4 7.8 7 9 3.2-.2 5.4 0 6.6 3l1.6 32.3s7.4 2.2 7.8-18.1c.3-12-2.4-21.9-.8-24.2 0-2.3 3-2.4 5-1.3 3.2 2.2 4.6 5 9.6 4 7.6-2.2 12.2-5.9 12.3-11.7a47 47 0 00-3.5-16.6c.4-1-1.4-3.7-1-4.7 1.3 2.2 3.4 2 3.8 0-1.3-4.2-3.3-8.3-6.5-10-2.7-2.4-6.7-2-8 3-.8 5.7 2 12.4 6.1 18 .9 2.1 2.1 5.7 1.6 8.9-2.2 1.3-4.4.7-6.3-1.2 0 0-6-4.5-6-5.6 1.6-10.2.3-11.4-.6-14.3-.6-3.9-2.5-5.2-4-7.8-1.5-1.6-3.5-1.6-4.5 0-2.7 4.6-1.4 14.5.5 19 1.4 4.1 3.5 6.7 2.5 6.7-.8 2.3-2.5 1.7-3.8-1a66.6 66.6 0 01-2.1-17.4c-.5-4.6-1.1-14.4-4.2-17-1.8-2.4-4.5-1.2-5.5 1a82.4 82.4 0 00.3 13.4c2 7.4 2.7 14 3.7 21.5.3 10.1-5.8 4.4-5.5-.7a45 45 0 00-.3-19.4c-1-2.6-2.1-3.2-4.6-2.8-1.9 0-6.8 5.3-8.2 14.3 0 0-1.2 4.6-1.7 8.7-.7 4.6-3.7 8-5.9-.6-1.8-6.3-3-21.6-6-18z',
                }),
                n.a.createElement('path', {
                  fill: '#fff',
                  d:
                    'M99 194.2l-32 15.4c.3-7.3 15.1-20.4 25.3-20.5 6.5.1 4.9 2.5 6.6 5.1z',
                }),
                n.a.createElement('path', {
                  fill: '#fff',
                  d:
                    'M93.3 204.2c-16.8 43.5 39.5 49.6 45.8 1.8.6-2 3-3.9 3.4-.7-1.3 43.3-43.6 46.2-50.8 32.6a41.9 41.9 0 01-2.5-14.6c-1-8.5-5.5-5.2-6.2 3.2-.7 4.7-.5 6-.5 10.5 2.2 34.2 56.7 19.5 65.6-8.7 4.7-15.6-.8-27.1 1.7-27.1 5.4 5.8 13 .8 14.7-1.2.7-1 2.5-1.7 3.7-.4 4.2 3 11.6 1.6 13.2-3.7.9-5.3 1.6-10.7 1.8-16.2-3.5 1-6 1.7-6.3 3.2l-.7 4.6c-.3 1.5-3.2 1.5-3.4-.4-1.3-6-6.7-6.7-10 2.5-2.1 1.8-6.1 2.2-6.5-.5.5-6.2-2-7-7-4.1l-4.8-36.2c2 0 4 1.5 5.9-.9-2-6.5-6.5-19.7-9-20.7-1.1-1.4-2.1-.5-3.7-.1-2.6.8-5 3-4.2 7.4 3 18.8 5 33.1 8.1 52 .5 2.1-1.3 5-3.7 4.7-4-2.7-5-8.2-12-8-5 0-10.6 5.5-11.3 10.7-.9 4.2-1.2 8.7 0 12.3 3.5 4.2 7.7 3.8 11.4 2.9 3-1.3 5.5-4.3 6.6-3.6.7.9.1 10.9-14.3 18.5-8.7 4-15.7 4.8-19.4-2.3-2.3-4.5.2-21.4-5.6-17.5z',
                }),
                n.a.createElement('path', {
                  fill: '#fff',
                  d:
                    'M165 160c3.3-1.2 19.3-19.6 19.3-19.6l-2.4-2c-.9-.7-.8-1.5 0-2.2 4-2.4 2.7-7.4.7-9.8a9.7 9.7 0 00-8.7.1c-2.8 2.7-3.4 7-1.2 9.6 2.1 1 4.2 3.2 2.8 4.4-6.6 7-24.5 19.1-22.4 19.5.4.6 11.5.6 11.8 0zm-97 65c-6 9.6-6.5 23.9-3.2 28.2 1.8 2 4.7 2.9 6.8 2.2 3.8-1.6 5.5-9.3 4.6-12-1.3-2-2.3-2.3-3.6-.7-2.6 5.4-3.7 1.7-4-1.3a70 70 0 01.8-15.2c.7-4.2 0-3-1.4-1.2zm257.1-15.3c-5.8-12.6-13.9-25-16.4-29.7a557.6 557.6 0 00-24.8-36c-6.2-7.4 10.2 3.1-2-11.7l-8.9-7.5c-2-1.4-6.8-4-7.6.2-.4 3.8-.2 5.8.4 8.9.5 2 3.5 5.5 5 7.5a565 565 0 0153.8 86.5c2.6-1.3 2-16.1.5-18.2z',
                }),
                n.a.createElement('path', {
                  fill: '#fff',
                  d:
                    'M299.6 251.5c-1.2 1.3 2.8 6.8 8 6.8 8.6-1 16.2-5.8 23.2-18.6a33 33 0 005.3-14.2 317 317 0 00-5.8-72.4c-.3-2 0-4.4.2-5 .6-.7 2.5 0 3.5-1.7 1.5-1.5-4-14-7-18.7-1-2.2-1.5-3.6-3.3.2a27 27 0 00-3 13.6c4.1 28.5 5.4 53.4 8 81.9.3 2.8-.1 6.8-2 8.4a80.2 80.2 0 01-27.1 19.7zm116.5-.1c-6.2 3.6-6.2 7.7-1.2 7.8 8.6-1 18.8-1.7 25.8-12.3a41 41 0 004.2-16 303 303 0 00-4.7-71.4c-.2-2-1.1-6.7-.8-7.3.6-1.4 3.4.1 4.4-1.5 1.4-1.5-7.3-12.7-10.4-17.5-1-2.2-1.4-3.6-3.3.2a22.3 22.3 0 00-1.8 13.6c4.6 31 8 54.2 8.7 81.6-.4 2.6-.5 4-1.7 7.3-2.7 3.4-5.7 7.8-8.5 9.9-2.8 2-8.8 4-10.7 5.6z',
                }),
                n.a.createElement('path', {
                  fill: '#fff',
                  d:
                    'M420.7 223.7c0-7.3.1-13.5-.1-19a34 34 0 00-3-13.5c-1.8-4.1-.7-7.4-1.6-11.8-.8-4.4-.6-11-1.8-16.1-.4-2-1.4-8.5-1.1-9.2.5-1.4 2.4 0 3.4-1.6 1.4-1.5-5-18-8.2-22.7-1.1-2.1-3.3-1.4-5.8 2-2.5 2.3-1.6 7.4-.6 12.3 6.1 32.3 10.8 61.6 9.8 92.3-.4 2.6 9-7.8 9-12.7zm-45.7-40c-3.9-.2-12-7.7-14.4-12a8 8 0 01.4-6.5c1.5-1 3.7-2 5.4-1 0 0 1.7 2.4 1.4 2.7 2 1 3 .5 3.2-.4.1-1.5-.6-2.4-.6-4 .9-4.6 6-5.3 8-2.4 1.4 1.8 2 5.5 2.1 8 0 1.3-2-.2-3.3 0-1.1.4-1.4 1.8-1.5 3-.2 3.3-.6 8.6-.7 12.5zm-71.8 48c1-9.8-.4-27.3-.5-33.1A477 477 0 00299 154c-1.2-8.4 3.4.9 2.8-4-1.5-8.3-6.1-14-11.6-21.5-1.7-2.5-1.7-3-4.4.6-3 6.7-.4 11.4.4 16.7 3.9 17.2 6.2 33 7.3 48.7a393.4 393.4 0 01.4 49c3 .1 7.6-4.7 9.3-11.8z',
                }),
                n.a.createElement('path', {
                  fill: '#fff',
                  d:
                    'M434 216c-6.9-11.6-17.2-24-20-28.7a658 658 0 00-29.2-37.8c-8.5-9 4-1.5-1.6-8.5-4.7-5.1-6-6.8-10.1-9.9-2-1.3-3.2-3.8-4 .5a83 83 0 00-.2 11.2c0 1.7 1.8 5 3.4 7 20.7 25.5 43.4 51.5 61.6 84.2 2.6-1.3 1.7-16 0-18z',
                }),
                n.a.createElement('path', {
                  fill: '#1ba400',
                  d:
                    'M122.6 194.7c-.5.9-1.6 2-1.2 3.1.7 1 1.4 1.3 2.6 1.3 1.1 0 2.7.3 3-.3.6-.7 1-2 .6-3.3-1.2-3-4.4-1.8-5-.8z',
                }),
                n.a.createElement('path', {
                  fill: '#fff',
                  d:
                    'M354.2 362.5c9.2.4 15.2.5 23.3 1.4l9.6-1c10.6-1 11 15.1 11 15.1 0 9.5-3.7 10-8.4 11-2.7.4-4-1.6-5.5-3.6a14 14 0 01-7 .4c-3.9-.2-7.7-.2-11.5-.5-4-.3-6.2.5-10.3.1-.8 1.3-2 3.1-4.4 2.6-2-.3-4.5-6-3.8-10.5 1.5-3.2 1-2.1 1-3.5-37.6-1-75.5-2.7-112.3-2.2-28.8.1-57.2 1.3-85.7 2.5-15.2-.2-26.8-2.6-34.8-14.3.8 0 38.8 2.1 49.9 1.4 20.5-.2 39.3-1.9 60.2-2.5 41.2.7 82.1.7 123.3 3.6-4-2.7-4-9 2-10.6.5-.4.8 3.1 1.7 3 4.9-.3 2.7 6.3 1.7 7.6zM188.6 135.3c-6.2 17.8 3.6 37.4 10.4 35.5 5 2 8-7.4 10-17.6 1.5-2.9 2.5-3.2 3.2-1.7-.2 13.6 1 16.7 4.5 20.8 7.8 6 14.3.8 14.8.3l6-6.1c1.4-1.5 3.2-1.5 5.1-.3 1.9 1.7 1.6 4.6 5.6 6.6 3.4 1.4 10.5.4 12.2-2.5 2.2-3.9 2.8-5.2 3.8-6.6 1.6-2.1 4.3-1.2 4.3-.5-.3 1.2-1.9 2.3-.8 4.5 2 1.4 2.4.5 3.5.2 4-2 7-10.6 7-10.6.1-3.2-1.7-3-2.9-2.2l-3.1 2.1c-2 .3-5.7 1.6-7.6-1.3-1.9-3.4-1.9-8.3-3.3-11.8 0-.2-2.6-5.5-.2-5.8 1.2.2 3.7.9 4.1-1.2 1.2-2.1-2.6-8-5.3-11-2.3-2.5-5.5-2.8-8.6-.2-2.2 2-1.9 4.2-2.3 6.3a9.8 9.8 0 002 8.7c2.2 4.2 6.1 9.7 4.8 17.5 0 0-2.3 3.6-6.3 3.1-1.7-.3-4.4-1-5.8-11.8-1.1-8 .2-19.4-3.2-24.7-1.3-3.3-2.2-6.4-5.2-.9-.8 2.2-4.3 5.5-1.8 12.2a36 36 0 012 19c-1.5 2.2-1.8 2.9-3.7 5-2.6 3-5.5 2.2-7.7 1.1-2-1.3-3.6-2-4.6-6.5.2-7 .6-18.5-.7-20.9-1.9-3.8-5-2.4-6.3-1.2a47.7 47.7 0 00-11.5 23.5c-1.8 5.8-3.7 4.1-5 1.8-3.2-3-3.5-26.7-7.4-22.8z',
                }),
                n.a.createElement('path', {
                  fill: '#fff',
                  d:
                    'M207.4 174.1c2.9-2 1.6-3.4 5.8.8a72 72 0 019.2 31.3c-.2 2.6 1.6 4.2 2.5 3.6.4-6 15.1-14.4 28.6-15.6 2-.5 1-4.4 1.3-6.4-.8-7.5 4.2-14.3 11.2-14.8 9.6 1.4 12.8 6.5 13 14.2-1.1 15-16.7 17.5-25.4 18.7-1.3.5-1.9 1.1 0 1.8l36.6.2 1.9 1c.2 1-.6.2-2 2.6a29.5 29.5 0 00-3.7 11.5c-10.9 3.6-22.2 5-33.6 6.5-4 2-6 4.7-5.2 7.7 1.4 3.3 10.2 6.7 10.2 6.8 1.7 1 3.6 3.5-.5 8.6-17.8-.8-31.7-8.4-36.5-19.1-1.4-1.1-3 0-4 1.4-7 9-13.8 17-25.7 21.4-7 1.8-14.3-1.1-17.7-5.7-2.3-2.7-2.2-5.6-3-6.2-3.9 1.7-36.9 15.7-32.7 9.1 8-8.5 22-14.9 34.2-23.3.9-2.9 2.5-12.5 7.3-15.6.3 0-.7 5.6-.6 8 0 2-.2 2.7.2 2.2.9-.5 15.7-12.2 17-15.8 1.4-2 .3-7.2.3-7.4-2.8-7.2-6.7-7.8-8.1-11.4-1.3-4.7-.7-10.1 2-11.7 2.4-2.1 5.2-1.9 7.9.5 3 2.7 5.6 8 6.4 11.9-.5 1.5-4-1-5-.3a16 16 0 013.7 7.8c2 8.2 1.4 11.4-.6 16.7-6.6 13.9-15 18-22.4 23.2-.2 0-.3 3.5 2.4 5.4 1 1 4.9 1.5 9.4 0a54.5 54.5 0 0022.3-23.3 51 51 0 00-2.4-22.2c-2.9-6.7-6.3-16.2-6.3-16.4-.1-4.2.2-5.6 2-7.7zm-95.8-38.6c4.2 2 12.2 1.1 11.8-5.7l-.2-3.1c-.8-2-3.2-1.5-3.7.5-.2.7.3 1.8-.3 2.1-.4.4-1.7.2-1.7-1.7 0-.6-.4-1.2-.7-1.6-.2-.2-.4-.2-.9-.2-.6 0-.6.1-.9.6-.1.5-.3 1-.3 1.6 0 .7-.4.9-.8 1-.6 0-.5 0-1-.2-.2-.3-.5-.4-.5-1l-.3-1.6c-.2-.3-.6-.5-1-.6-2.3 0-2.5 2.7-2.3 3.7-.2.2-.3 4.9 2.8 6.2z',
                }),
                n.a.createElement('path', {
                  fill: '#fff',
                  d:
                    'M235.1 187.7c4.2 2 14.3.9 11.8-5.6l-.2-3.2c-.9-2-3.2-1.5-3.7.6-.2.6.3 1.7-.4 2-.3.4-1.7.2-1.6-1.6 0-.6-.4-1.3-.7-1.7-.3-.1-.4-.2-1-.2-.5 0-.5.2-.8.7-.2.5-.3 1-.3 1.6-.1.6-.4.8-.9 1-.5 0-.4 0-.8-.3-.3-.3-.6-.4-.6-.9l-.3-1.6c-.2-.3-.6-.5-1-.6-2.3 0-2.5 2.6-2.4 3.6-.1.2-.2 5 3 6.2zm72-21.6c4.2 2 12.1 1.1 11.8-5.6l-.2-3.2c-.9-2-3.2-1.5-3.7.5-.2.7.3 1.8-.4 2.2-.3.3-1.7.1-1.6-1.8 0-.6-.4-1.2-.7-1.6-.3-.2-.4-.2-1-.2-.5 0-.5.2-.8.7l-.3 1.5c-.1.7-.4 1-.9 1s-.4 0-.8-.2c-.3-.3-.6-.4-.6-.9s-.1-1.3-.3-1.7c-.2-.3-.6-.4-1-.5-2.3 0-2.5 2.6-2.4 3.6-.1.2-.2 4.9 3 6.2zm37.3 54.3c-7.3 8.3-4.1 22-2.4 25 2.4 4.8 4.3 7.9 9 10.3 4.3 3.1 7.7 1.2 9.5-1 4.3-4.5 4.4-16 6.4-18.2 1.4-4.2 5-3.5 6.7-1.6a16.5 16.5 0 006.2 5.3c4 3.5 8.8 4.2 13.6 1 3.2-1.9 5.3-4.2 7.2-8.9 2-5.6 1-31.6.5-47l-4.2-21.5c0-.2-.5-10.2-1-12.5 0-1-.3-1.3.7-1.2 1.1 1 1.2 1 2 1.3 1 .2 2-1.7 1.3-3.3l-10-18.6c-.8-.8-1.9-1.6-3.2.2a7.3 7.3 0 00-2.4 5.5c.3 4.4 1 8.9 1.3 13.3l4 22.6c1.3 16 1.6 29.2 2.9 45.3-.2 6.8-2.3 12.7-4.3 13.6 0 0-3 1.7-5-.2-1.5-.6-7.4-9.9-7.4-9.9-3-2.7-5-2-7.1 0-6 5.8-8.6 16.4-12.7 23.8-1 1.7-4 3-7.2-.1-8.2-11.3-3.4-27.3-4.4-23.2zM309 126.7c3.8 1.5 6.4 9.2 5.6 13-.8 4.5-2.8 9.5-4.2 8.9-1.6-.6 1-4.6-.5-8.8-.8-2.8-6-7.8-5.4-9.2-1-3.1 2.2-4.5 4.5-4z',
                }),
                n.a.createElement('path', {
                  fill: '#fff',
                  d:
                    'M356.6 225c.7-9.2-.6-14.8-.8-20.2s-6.1-46.6-7.3-50.6c-1.5-7.8 5.7-1 4.9-5.6-2.5-5.6-8.6-13.9-10.5-18.8-1.2-2-.7-4-3.3-.5a42.3 42.3 0 00-2.3 19.2c6.2 32.3 12.5 59.1 11.5 89.8 3 0 6.3-6.7 7.8-13.3zm64.4-85.3c3.5 1.7 5.5 11.3 5.1 14-.7 5-2.5 10.4-3.8 9.7-1.5-.6.3-7.4-.4-9.5-.8-3-5.5-8.4-5-10-1-3.4 2-4.8 4.1-4.2zm-255.7 67.9c3.3 1.3 5.3 8.3 5 10.3-.8 3.7-2.5 7.7-3.8 7.1-1.3-.4.3-5.4-.3-7-.3-3.7-4.9-5.7-4.8-7.3-.8-3 2-3.5 4-3.1z',
                }),
                n.a.createElement('path', {
                  fill: '#1b9d00',
                  d:
                    'M244.9 218.2c4.2.2 6.3 3.6 2.4 5-4 1.3-7.7 2.4-7.8 8 1.5 8-2 5.2-4 4.2-2.4-1.8-9.2-6-10.2-15-.1-2.1 1.6-4 4.3-4 4 1.1 10 1.2 15.3 1.8z',
                }),
                n.a.createElement('path', {
                  fill: '#fff',
                  d:
                    'M77.4 124.4c4.8 1.4 5.1 8.6 4.8 10.7-.7 3.8-2.4 7.9-3.6 7.4-1.4-.5 0-5.7-.7-7.3-.7-2.2-4.8-6.4-4.4-7.6-.9-2.5 2-3.7 3.9-3.2zm95.9 33.6c-3.8 2-5.2 8-2.9 11.6 2.2 3 5.6 1.9 6 1.9 3.7.4 5.9-6.9 5.9-6.9s.1-2-4.2 1.9c-1.9.3-2-.4-2.5-1.4a9 9 0 01.5-5.7c.7-1.8-.7-2.6-2.8-1.4zm28-36.4c-2 1.3-5.7 5.2-5.8 9.6-.1 2.5-.6 2.5 1 4 1.3 1.8 2.4 1.7 4.8.4a5.1 5.1 0 002.3-3.4c.6-2.8-3 1.4-3.4-1.8-.8-3 1.5-4.2 3.7-7 0-2 0-3.3-2.7-1.8zm22.4 4a59.5 59.5 0 00-1.6 11.1c-.6 2.8 3 4 4.5.4 2.4-6.5 2.4-9.3 2.6-12-.7-4.3-3.6-4.2-5.5.5zm142 72.3c.4-.5 20-14.4 20-14.4 2-.7 1.5 7.2.6 7.1a77.8 77.8 0 01-20.7 14.3c-1 .7-1.9-5.3 0-7zm17.7-.2c3.5 1.7 4.9 11.8 4.5 14.5 0 5.4-3.3 9.6-4.7 9-1.4-.7.2-6.7-.5-8.8-.8-3-3.7-8.5-3.2-10.1-1-3.4 1.8-5.2 4-4.6zm-116 43.4a26 26 0 015.6-4.9c2-1 3.8.8 3.7.7.3 2-1.2 3.7-.7 6.3.4 1 .7 2.2 2.6 1.8 3.1-2.5 6-2.7 9-2.8 2.5.1 2.6 4.2 1 4.2-5.7 1.2-8.2 2.8-12.3 4.3-2 1.2-3.6-.3-3.6-.4s-1.1-1.1-.4-3.7c.2-2-.6-3.2-2.4-3-1.2.8-2.4 1.2-3-.3-.3-1-.4-1.6.5-2.2zm136.6 5.4c.8 1 1.4 2-.1 3.8l-3.7 3.2c-.6 1-1 2.8 1 3.3 3.6 1 12-4.5 12-4.6 1.4-1 1-3 .8-3-.8-.9-2.6-.3-3.8-.5-.6 0-2.5-.2-1.6-2a11.4 11.4 0 001.6-2.9c.5-1.2 0-2-2-2.7-2.1-.4-3-.2-5.3 0-1.2.2-1.6.8-1.9 2.3.1 2.3 1.5 2.2 3 3z',
                }),
                n.a.createElement('path', {
                  fill: '#259f00',
                  d:
                    'M268.1 189.7c-.5 1-2.3 1-4 0s-2.7-2.6-2.1-3.5 2.3-.9 4 0 2.6 2.6 2.1 3.5zm-89-53.6c-1 .3-2.4-.6-3-2s-.3-2.6.7-2.9 2.3.7 3 2 .3 2.7-.8 3z',
                }),
                n.a.createElement('path', {
                  fill: '#209000',
                  d:
                    'M355.2 375c9.4.4 18.2 0 27.5.5 1.7 1.5.5 5-.6 4.8l-7.8-.3c-.1-3-7.7-2.5-7.5.1-4.1.5-7.8-.1-12-.3-1.2-1.5-1-4.2.4-4.8z',
                })
              )
            ),
          SearchIcon: ({
            color: e = 'currentColor',
            width: a = '18px',
            height: t = '18px',
          }) =>
            n.a.createElement(
              'svg',
              {
                xmlns: 'http://www.w3.org/2000/svg',
                width: a,
                height: t,
                viewBox: '0 0 14 14',
              },
              n.a.createElement('path', {
                d:
                  'M14.771,12.752,11.32,9.286a5.519,5.519,0,0,0,1.374-3.634A5.763,5.763,0,0,0,6.839,0,5.763,5.763,0,0,0,.984,5.652,5.763,5.763,0,0,0,6.839,11.3a5.936,5.936,0,0,0,3.354-1.023l3.477,3.492a.783.783,0,0,0,1.08.02A.72.72,0,0,0,14.771,12.752ZM6.839,1.475a4.259,4.259,0,0,1,4.327,4.178A4.259,4.259,0,0,1,6.839,9.83,4.259,4.259,0,0,1,2.511,5.652,4.259,4.259,0,0,1,6.839,1.475Z',
                transform: 'translate(-0.984)',
                fill: e,
              })
            ),
          SearchIconSmall: ({
            color: e = 'currentColor',
            width: a = '18px',
            height: t = '18px',
          }) =>
            n.a.createElement(
              'svg',
              {
                xmlns: 'http://www.w3.org/2000/svg',
                width: a,
                height: t,
                viewBox: '0 0 14.01 14.01',
              },
              n.a.createElement('path', {
                'data-name': '_ionicons_svg_ios-search (5)',
                d:
                  'M77.845,76.9l-3.9-3.932a5.553,5.553,0,1,0-.843.854l3.871,3.906a.6.6,0,0,0,.846.022A.6.6,0,0,0,77.845,76.9Zm-8.26-3.031a4.384,4.384,0,1,1,3.1-1.284A4.358,4.358,0,0,1,69.586,73.865Z',
                transform: 'translate(-64 -63.9)',
                fill: e,
              })
            ),
          SettingIcon: ({
            color: e = 'currentColor',
            width: a = '18px',
            height: t = '18px',
          }) =>
            n.a.createElement(
              'svg',
              {
                xmlns: 'http://www.w3.org/2000/svg',
                width: a,
                height: t,
                viewBox: '0 0 13 13',
              },
              n.a.createElement('path', {
                'data-name': '005-repairing-service',
                d:
                  'M12.961,5.778a.423.423,0,0,0-.418-.32,1.435,1.435,0,0,1-.982-2.5.361.361,0,0,0,.04-.49,6.435,6.435,0,0,0-1.03-1.04.362.362,0,0,0-.494.04,1.5,1.5,0,0,1-1.621.364A1.444,1.444,0,0,1,7.577.422a.361.361,0,0,0-.319-.38A6.487,6.487,0,0,0,5.8.039a.362.362,0,0,0-.322.372A1.446,1.446,0,0,1,4.584,1.8a1.5,1.5,0,0,1-1.609-.367.362.362,0,0,0-.491-.041,6.462,6.462,0,0,0-1.051,1.04.362.362,0,0,0,.039.494,1.44,1.44,0,0,1,.363,1.622,1.5,1.5,0,0,1-1.414.879.354.354,0,0,0-.376.319,6.516,6.516,0,0,0,0,1.478.43.43,0,0,0,.426.32,1.426,1.426,0,0,1,1.338.891,1.446,1.446,0,0,1-.364,1.607.361.361,0,0,0-.039.49,6.458,6.458,0,0,0,1.028,1.04.361.361,0,0,0,.495-.039,1.5,1.5,0,0,1,1.62-.364,1.442,1.442,0,0,1,.88,1.411.361.361,0,0,0,.319.38,6.472,6.472,0,0,0,1.462,0,.362.362,0,0,0,.322-.372,1.445,1.445,0,0,1,.89-1.386,1.5,1.5,0,0,1,1.61.366.363.363,0,0,0,.491.041,6.47,6.47,0,0,0,1.051-1.04.361.361,0,0,0-.039-.494,1.44,1.44,0,0,1-.364-1.621,1.455,1.455,0,0,1,1.33-.881l.08,0a.362.362,0,0,0,.38-.319A6.487,6.487,0,0,0,12.961,5.778ZM6.5,10.247A3.747,3.747,0,1,1,9.719,8.421L8.078,6.78A2.3,2.3,0,0,0,5.356,3.666a.26.26,0,0,0-.18.181.254.254,0,0,0,.072.248s.81.816,1.081,1.087a.168.168,0,0,1,.024.121l0,.018a5.181,5.181,0,0,1-.123.793l-.017.017-.018.018a5.107,5.107,0,0,1-.805.125v0l-.014,0H5.361a.173.173,0,0,1-.125-.053c-.282-.282-1.06-1.055-1.06-1.055a.265.265,0,0,0-.189-.084.257.257,0,0,0-.242.2A2.3,2.3,0,0,0,6.859,8L8.518,9.657A3.728,3.728,0,0,1,6.5,10.247Z',
                transform: 'translate(-0.002 0.001)',
                fill: e,
              })
            ),
          ShavingNeeds: ({
            color: e = 'currentColor',
            width: a = '18px',
            height: t = '18px',
          }) =>
            n.a.createElement(
              'svg',
              {
                xmlns: 'http://www.w3.org/2000/svg',
                width: a,
                height: t,
                viewBox: '0 0 18 18',
              },
              n.a.createElement(
                'g',
                { 'data-name': 'Group 17' },
                n.a.createElement(
                  'g',
                  { 'data-name': 'Group 16' },
                  n.a.createElement('path', {
                    'data-name': 'Path 60',
                    d:
                      'M17.24.609h-5.239a.741.741 0 00-.731.731v.667a.741.741 0 00.731.731h.183a1.222 1.222 0 011.222 1.222v1.222l-.152 3.351h2.777l-.183-3.351V3.959a1.222 1.222 0 011.222-1.222h.183a.741.741 0 00.731-.731v-.667a.741.741 0 00-.744-.731zm-2.011 4.265h-1.222v-.609h1.222zm.03-1.222h-1.28a1.741 1.741 0 00-.457-.914h2.163a1.952 1.952 0 00-.425.92z',
                    fill: e,
                  })
                )
              ),
              n.a.createElement(
                'g',
                { 'data-name': 'Group 19' },
                n.a.createElement(
                  'g',
                  { 'data-name': 'Group 18' },
                  n.a.createElement('path', {
                    'data-name': 'Path 61',
                    d: 'M16.023 9.138h-2.8l-.061 1.222h2.924z',
                    fill: e,
                  })
                )
              ),
              n.a.createElement(
                'g',
                { 'data-name': 'Group 21' },
                n.a.createElement(
                  'g',
                  { 'data-name': 'Group 20' },
                  n.a.createElement('path', {
                    'data-name': 'Path 62',
                    d:
                      'M16.413 16.144l-.243-5.178h-3.046l-.243 5.178a1.768 1.768 0 103.533 0z',
                    fill: e,
                  })
                )
              ),
              n.a.createElement(
                'g',
                { 'data-name': 'Group 23' },
                n.a.createElement(
                  'g',
                  { 'data-name': 'Group 22' },
                  n.a.createElement('path', {
                    'data-name': 'Path 63',
                    d:
                      'M8.499 1.827V0H2.436v2.742h-.918V4.11A2.283 2.283 0 000 6.274V7.31h6.092v7.31H0v1.066a2.3 2.3 0 002.284 2.285h3.934a2.282 2.282 0 002.284-2.284V6.244a2.312 2.312 0 00-1.526-2.163V2.742h-.915v-.915zM6.092 3.351h.3v.609h-4.26v-.609z',
                    fill: e,
                  })
                )
              ),
              n.a.createElement(
                'g',
                { 'data-name': 'Group 25' },
                n.a.createElement(
                  'g',
                  { 'data-name': 'Group 24' },
                  n.a.createElement('path', {
                    'data-name': 'Path 64',
                    d:
                      'M0 7.92v1.222h2.132a.304.304 0 110 .609H0v.914h3.655a.304.304 0 110 .609H0v.914h3.655a.304.304 0 110 .609H0v1.222h5.482V7.927z',
                    fill: e,
                  })
                )
              )
            ),
          Shirts: ({
            color: e = 'currentColor',
            width: a = '18px',
            height: t = '18px',
          }) =>
            n.a.createElement(
              'svg',
              {
                xmlns: 'http://www.w3.org/2000/svg',
                width: a,
                height: t,
                viewBox: '0 0 18 18',
              },
              n.a.createElement(
                'g',
                { fill: e },
                n.a.createElement('path', {
                  'data-name': 'Path 109',
                  d:
                    'M6.751 2.546a.172.172 0 00.04 0l2.206-.525 2.2.543a.171.171 0 00.041 0 .142.142 0 00.111-.051.149.149 0 00.027-.128l-.21-.983a.362.362 0 010-.115l.221-1.1a.144.144 0 00-.026-.122.138.138 0 00-.168-.029l-2.192 1.05L6.813.017a.137.137 0 00-.169.028.144.144 0 00-.027.122l.21 1.1a.362.362 0 010 .115l-.217.979a.149.149 0 00.027.128.142.142 0 00.11.053z',
                }),
                n.a.createElement('path', {
                  'data-name': 'Path 110',
                  d:
                    'M2.563 15.126l-1.806-.153a.4.4 0 00-.4.278l-.342 1.214a.285.285 0 00.039.248.285.285 0 00.224.112l1.8.058h.013a.428.428 0 00.391-.288l.334-1.1a.282.282 0 00-.252-.372z',
                }),
                n.a.createElement('path', {
                  'data-name': 'Path 111',
                  d:
                    'M17.985 16.466l-.338-1.2a.4.4 0 00-.4-.278l-1.806.152a.282.282 0 00-.252.372l.33 1.083a.428.428 0 00.391.288l1.815-.058a.274.274 0 00.264-.359z',
                }),
                n.a.createElement('path', {
                  'data-name': 'Path 112',
                  d:
                    'M17.024 14.342a.286.286 0 00.257-.372l-.756-2.678a5.452 5.452 0 01-.105-.451l-1.321-6.627a.61.61 0 00-.315-.4l-2.139-.945a.63.63 0 00-.248-.046.638.638 0 00-.263.051L9.176 4.248a.483.483 0 01-.346 0L5.865 2.876a.64.64 0 00-.263-.051.63.63 0 00-.248.046l-2.139.945a.61.61 0 00-.315.4l-1.318 6.626c-.025.125-.074.328-.105.451l-.759 2.662a.286.286 0 00.257.372l1.824.154a.405.405 0 00.407-.275l.874-2.857a3.587 3.587 0 00.105-.476l.278-2.1-.254 8.162a.326.326 0 00.327.337h8.99a.325.325 0 00.326-.338l-.292-8.058.265 2.006a3.582 3.582 0 00.105.476l.875 2.874a.405.405 0 00.407.275zM8.998 16.3a.558.558 0 11.558-.558.558.558 0 01-.558.558zm0-2.422a.558.558 0 11.558-.558.558.558 0 01-.558.558zm0-2.422a.558.558 0 11.558-.558.558.558 0 01-.558.558zm0-2.422a.558.558 0 11.558-.558.558.558 0 01-.558.558zm0-2.422a.558.558 0 11.558-.558.558.558 0 01-.558.562z',
                })
              )
            ),
          ShoppingBag: ({
            color: e = 'currentColor',
            width: a = '18px',
            height: t = '18px',
          }) =>
            n.a.createElement(
              'span',
              null,
              n.a.createElement(
                'svg',
                {
                  xmlns: 'http://www.w3.org/2000/svg',
                  width: a,
                  height: t,
                  viewBox: '0 0 12.686 16',
                },
                n.a.createElement(
                  'g',
                  {
                    'data-name': 'Group 2704',
                    transform: 'translate(-27.023 -2)',
                  },
                  n.a.createElement(
                    'g',
                    {
                      'data-name': 'Group 17',
                      transform: 'translate(27.023 5.156)',
                    },
                    n.a.createElement(
                      'g',
                      { 'data-name': 'Group 16' },
                      n.a.createElement('path', {
                        'data-name': 'Path 3',
                        d:
                          'M65.7,111.043l-.714-9A1.125,1.125,0,0,0,63.871,101H62.459V103.1a.469.469,0,1,1-.937,0V101H57.211V103.1a.469.469,0,1,1-.937,0V101H54.862a1.125,1.125,0,0,0-1.117,1.033l-.715,9.006a2.605,2.605,0,0,0,2.6,2.8H63.1a2.605,2.605,0,0,0,2.6-2.806Zm-4.224-4.585-2.424,2.424a.468.468,0,0,1-.663,0l-1.136-1.136a.469.469,0,0,1,.663-.663l.8.8,2.092-2.092a.469.469,0,1,1,.663.663Z',
                        transform: 'translate(-53.023 -101.005)',
                        fill: e,
                      })
                    )
                  ),
                  n.a.createElement(
                    'g',
                    {
                      'data-name': 'Group 19',
                      transform: 'translate(30.274 2)',
                    },
                    n.a.createElement(
                      'g',
                      { 'data-name': 'Group 18' },
                      n.a.createElement('path', {
                        'data-name': 'Path 4',
                        d:
                          'M160.132,0a3.1,3.1,0,0,0-3.093,3.093v.063h.937V3.093a2.155,2.155,0,1,1,4.311,0v.063h.937V3.093A3.1,3.1,0,0,0,160.132,0Z',
                        transform: 'translate(-157.039)',
                        fill: e,
                      })
                    )
                  )
                )
              )
            ),
          ShoppingBagLarge: ({
            color: e = 'currentColor',
            width: a = '18px',
            height: t = '18px',
          }) =>
            n.a.createElement(
              'svg',
              {
                xmlns: 'http://www.w3.org/2000/svg',
                width: a,
                height: t,
                viewBox: '0 0 23.786 30',
              },
              n.a.createElement(
                'g',
                {
                  'data-name': 'shopping-bag (3)',
                  transform: 'translate(-53.023)',
                },
                n.a.createElement(
                  'g',
                  { 'data-name': 'Group 2704' },
                  n.a.createElement(
                    'g',
                    {
                      'data-name': 'Group 17',
                      transform: 'translate(53.023 5.918)',
                    },
                    n.a.createElement(
                      'g',
                      { 'data-name': 'Group 16' },
                      n.a.createElement('path', {
                        'data-name': 'Path 3',
                        d:
                          'M76.8,119.826l-1.34-16.881A2.109,2.109,0,0,0,73.362,101H70.716v3.921a.879.879,0,1,1-1.757,0V101H60.875v3.921a.879.879,0,1,1-1.757,0V101H56.472a2.109,2.109,0,0,0-2.094,1.937l-1.34,16.886a4.885,4.885,0,0,0,4.87,5.259H71.926a4.884,4.884,0,0,0,4.87-5.261Zm-7.92-8.6-4.544,4.544a.878.878,0,0,1-1.243,0l-2.13-2.13A.878.878,0,0,1,62.2,112.4l1.509,1.508,3.923-3.923a.879.879,0,1,1,1.242,1.243Z',
                        transform: 'translate(-53.023 -101.005)',
                        fill: e,
                      })
                    )
                  ),
                  n.a.createElement(
                    'g',
                    { 'data-name': 'Group 19', transform: 'translate(59.118)' },
                    n.a.createElement(
                      'g',
                      { 'data-name': 'Group 18' },
                      n.a.createElement('path', {
                        'data-name': 'Path 4',
                        d:
                          'M162.838,0a5.806,5.806,0,0,0-5.8,5.8v.119H158.8V5.8a4.042,4.042,0,1,1,8.083,0v.119h1.757V5.8A5.806,5.806,0,0,0,162.838,0Z',
                        transform: 'translate(-157.039)',
                        fill: e,
                      })
                    )
                  )
                )
              )
            ),
          ShoulderBags: ({
            color: e = 'currentColor',
            width: a = '18px',
            height: t = '18px',
          }) =>
            n.a.createElement(
              'svg',
              {
                xmlns: 'http://www.w3.org/2000/svg',
                width: a,
                height: t,
                viewBox: '0 0 18 18',
              },
              n.a.createElement(
                'g',
                {
                  'data-name': 'Group 3',
                  transform: 'translate(-100.548 -66.187)',
                  fill: e,
                  stroke: '#fff',
                  strokeMiterlimit: '10',
                  strokeWidth: '.076',
                },
                n.a.createElement('path', {
                  'data-name': 'Path 6',
                  d:
                    'M105.083 69.531l-.917.243-.848-3.195a.149.149 0 01.068-.166h0a1.343 1.343 0 01.708-.188h0a.149.149 0 01.141.111z',
                }),
                n.a.createElement('path', {
                  'data-name': 'Path 7',
                  d:
                    'M104.167 69.774l-.917.243-.848-3.195a.149.149 0 01.068-.166h0a1.342 1.342 0 01.708-.188h0a.149.149 0 01.141.111z',
                }),
                n.a.createElement('path', {
                  'data-name': 'Path 8',
                  d:
                    'M106.5 69.531l.917.243.848-3.195a.149.149 0 00-.068-.166h0a1.343 1.343 0 00-.708-.188h0a.149.149 0 00-.141.111z',
                }),
                n.a.createElement('path', {
                  'data-name': 'Path 9',
                  d:
                    'M107.421 69.774l.917.243.848-3.195a.149.149 0 00-.068-.166h0a1.342 1.342 0 00-.708-.188h0a.149.149 0 00-.141.111z',
                }),
                n.a.createElement('path', {
                  'data-name': 'Path 10',
                  d:
                    'M110.987 80.15l-.645-7.545a3.781 3.781 0 00-3.768-3.459h-.78v1.23h0v-1.23h-.78a3.781 3.781 0 00-3.768 3.459l-.646 7.545a3.407 3.407 0 003.395 3.7h3.598a3.407 3.407 0 003.395-3.7z',
                }),
                n.a.createElement('path', {
                  'data-name': 'Path 11',
                  d:
                    'M108.494 69.668c-1.336-.669-1.426-1.652-2.7-1.654h0c-1.272 0-1.362.985-2.7 1.654l.294-.046c1.191-.519 1.271-1.282 2.406-1.283s1.215.764 2.406 1.283z',
                }),
                n.a.createElement('path', {
                  'data-name': 'Path 12',
                  d:
                    'M105.795 77.868l.132-.006 4.385-.192.239 2.792h0a16.8 16.8 0 01-4.579.636h-.177',
                }),
                n.a.createElement('path', {
                  'data-name': 'Path 13',
                  d:
                    'M105.788 77.868l-.132-.006-4.385-.192-.239 2.792h0a16.8 16.8 0 004.579.636h.177',
                }),
                n.a.createElement('path', {
                  'data-name': 'Path 14',
                  d:
                    'M110.625 80.455l-.591-6.916a3.54 3.54 0 00-3.527-3.239h-1.427a3.54 3.54 0 00-3.527 3.238l-.591 6.916a3.2 3.2 0 001.393 2.92l.083-.123a3.056 3.056 0 01-1.328-2.785l.591-6.916a3.372 3.372 0 013.38-3.1h1.426a3.372 3.372 0 013.379 3.1l.591 6.916a3.056 3.056 0 01-1.328 2.785l.083.123a3.2 3.2 0 001.392-2.921z',
                }),
                n.a.createElement('path', {
                  'data-name': 'Path 15',
                  d:
                    'M105.792 84.149v-3.008h0a25.049 25.049 0 01-4.756-.676l-.447-.039A3.568 3.568 0 00104 84.149z',
                }),
                n.a.createElement('path', {
                  'data-name': 'Path 16',
                  d:
                    'M105.795 81.141v3.008h1.8A3.568 3.568 0 00111 80.426l-.447.039a25.083 25.083 0 01-4.758.676z',
                }),
                n.a.createElement('path', {
                  'data-name': 'Path 17',
                  d:
                    'M105.792 81.083v2.767h1.647a3.123 3.123 0 003.112-3.389 27.2 27.2 0 01-4.757.622z',
                }),
                n.a.createElement('path', {
                  'data-name': 'Path 18',
                  d:
                    'M105.795 83.85v-2.765h0a27.157 27.157 0 01-4.759-.622h0a3.123 3.123 0 003.112 3.389z',
                }),
                n.a.createElement('rect', {
                  'data-name': 'Rectangle 34',
                  width: '2.177',
                  height: '1.086',
                  rx: '.281',
                  transform: 'rotate(-3.21 1460.138 -1873.834)',
                }),
                n.a.createElement('path', {
                  'data-name': 'Path 19',
                  d:
                    'M103.251 80.12h0a.158.158 0 01-.158-.158v-6.679a.158.158 0 01.158-.158h0a.158.158 0 01.158.158v6.679a.158.158 0 01-.158.158z',
                }),
                n.a.createElement('path', {
                  'data-name': 'Rectangle 35',
                  d: 'M103.093 74.874h.316v1.036h-.316z',
                })
              )
            ),
          SidebarCategoryIcon: ({
            color: e = 'currentColor',
            width: a = '18px',
            height: t = '18px',
          }) =>
            n.a.createElement(
              'svg',
              {
                xmlns: 'http://www.w3.org/2000/svg',
                width: a,
                height: t,
                viewBox: '0 0 12.958 13',
              },
              n.a.createElement('path', {
                'data-name': 'Path 321',
                d:
                  'M1.015,10.3,1,4.388a.4.4,0,0,1,.564-.373l5.379,2.3a.4.4,0,0,1,.246.371L7.2,12.594a.4.4,0,0,1-.564.373l-5.379-2.3A.4.4,0,0,1,1.015,10.3Zm12.323-5.63L8.375,6.816l.013,5.468,4.963-2.15-.013-5.468m.2-.713a.405.405,0,0,1,.405.4l.014,5.908a.4.4,0,0,1-.244.372L8.347,12.963a.4.4,0,0,1-.565-.37L7.768,6.684a.4.4,0,0,1,.244-.372l5.368-2.325a.4.4,0,0,1,.16-.034ZM7.44.626l-5.149,2.3L7.451,5.2,12.6,2.9,7.44.626m0-.626A.4.4,0,0,1,7.6.034l5.659,2.495a.4.4,0,0,1,0,.74L7.617,5.79a.4.4,0,0,1-.328,0L1.63,3.3a.4.4,0,0,1,0-.74L7.275.035A.4.4,0,0,1,7.439,0Z',
                transform: 'translate(-1.001)',
                fill: e,
              })
            ),
          SiteSettings: ({
            color: e = 'currentColor',
            width: a = '18px',
            height: t = '18px',
          }) =>
            n.a.createElement(
              'svg',
              {
                xmlns: 'http://www.w3.org/2000/svg',
                width: a,
                height: t,
                viewBox: '0 0 56 56',
              },
              n.a.createElement(
                'g',
                { transform: 'translate(-0.001)' },
                n.a.createElement(
                  'g',
                  { 'data-name': 'Group 2845', transform: 'translate(0.001)' },
                  n.a.createElement(
                    'g',
                    { 'data-name': 'Group 2844' },
                    n.a.createElement('path', {
                      'data-name': 'Path 2442',
                      d:
                        'M20.211,11.444l-1.1-.95v-.456l1.1-.95a.935.935,0,0,0,.3-.9,10.074,10.074,0,0,0-.727-2.166.933.933,0,0,0-.762-.537l-1.438-.131q-.146-.211-.3-.41l.31-1.355a.935.935,0,0,0-.287-.9,10.539,10.539,0,0,0-1.877-1.344.934.934,0,0,0-.924.007l-1.237.718c-.167-.057-.338-.111-.516-.16L12.183.567A.934.934,0,0,0,11.324,0H9.212a.933.933,0,0,0-.859.567L7.782,1.909c-.178.049-.349.1-.516.16L6.029,1.351A.938.938,0,0,0,5.1,1.343,10.575,10.575,0,0,0,3.228,2.687a.933.933,0,0,0-.287.9l.31,1.354c-.1.133-.206.271-.3.411L1.51,5.488a.933.933,0,0,0-.762.537A10.066,10.066,0,0,0,.021,8.191a.934.934,0,0,0,.3.9l1.1.95v.456l-1.1.95a.935.935,0,0,0-.3.9,10.074,10.074,0,0,0,.727,2.166.933.933,0,0,0,.762.537l1.438.131q.146.211.3.41l-.31,1.355a.933.933,0,0,0,.287.9A10.455,10.455,0,0,0,5.1,19.189a.931.931,0,0,0,.923-.007l1.238-.717c.167.057.338.111.516.16l.571,1.342a.934.934,0,0,0,.859.567h2.113a.933.933,0,0,0,.859-.567l.571-1.342c.178-.049.349-.1.516-.16l1.237.718a.936.936,0,0,0,1.012-.048l1.71-1.224a.934.934,0,0,0,.366-.968l-.31-1.354c.1-.133.206-.271.3-.411l1.438-.131a.933.933,0,0,0,.762-.537,10.072,10.072,0,0,0,.727-2.166A.935.935,0,0,0,20.211,11.444Zm-2.646.185.994.855q-.107.376-.256.753l-1.333.121a.935.935,0,0,0-.709.439,6.84,6.84,0,0,1-.688.931.933.933,0,0,0-.21.827l.274,1.2-.714.511-1.1-.638A.939.939,0,0,0,13,16.572a6.962,6.962,0,0,1-1.127.352.933.933,0,0,0-.651.544l-.511,1.2h-.88l-.511-1.2a.929.929,0,0,0-.651-.544,6.989,6.989,0,0,1-1.127-.352.932.932,0,0,0-.826.055l-1.146.664q-.349-.224-.68-.486l.286-1.25a.934.934,0,0,0-.209-.826,6.863,6.863,0,0,1-.689-.931.935.935,0,0,0-.709-.439l-1.333-.121q-.148-.377-.256-.753l.994-.855a.935.935,0,0,0,.324-.707V9.611A.935.935,0,0,0,2.971,8.9l-.994-.856q.107-.375.256-.752l1.332-.121a.935.935,0,0,0,.709-.439A6.839,6.839,0,0,1,4.963,5.8a.933.933,0,0,0,.21-.827l-.286-1.25q.33-.261.681-.487l1.145.664a.942.942,0,0,0,.826.055,6.962,6.962,0,0,1,1.127-.352.933.933,0,0,0,.651-.544l.511-1.2h.88l.511,1.2a.929.929,0,0,0,.651.544A6.977,6.977,0,0,1,13,3.961a.936.936,0,0,0,.826-.055l1.145-.664q.35.226.681.487l-.286,1.25a.934.934,0,0,0,.209.826,6.864,6.864,0,0,1,.689.931.935.935,0,0,0,.709.439L18.3,7.3q.148.377.256.753l-.994.855a.935.935,0,0,0-.324.707v1.311A.935.935,0,0,0,17.565,11.629Z',
                      transform: 'translate(-0.001)',
                      fill: e,
                    })
                  )
                ),
                n.a.createElement(
                  'g',
                  {
                    'data-name': 'Group 2847',
                    transform: 'translate(5.601 5.6)',
                  },
                  n.a.createElement(
                    'g',
                    { 'data-name': 'Group 2846' },
                    n.a.createElement('path', {
                      'data-name': 'Path 2443',
                      d:
                        'M52.669,48a4.667,4.667,0,1,0,4.667,4.667A4.667,4.667,0,0,0,52.669,48Zm0,7.467a2.8,2.8,0,1,1,2.8-2.8A2.8,2.8,0,0,1,52.669,55.467Z',
                      transform: 'translate(-48.002 -48)',
                      fill: e,
                    })
                  )
                ),
                n.a.createElement(
                  'g',
                  {
                    'data-name': 'Group 2849',
                    transform: 'translate(1.868 46.667)',
                  },
                  n.a.createElement(
                    'g',
                    { 'data-name': 'Group 2848' },
                    n.a.createElement('path', {
                      'data-name': 'Path 2444',
                      d:
                        'M24.4,400H16.935a.933.933,0,0,0-.933.933h0V408.4a.933.933,0,0,0,.933.933H24.4a.933.933,0,0,0,.933-.933h0v-7.467A.933.933,0,0,0,24.4,400Zm-.934,7.467h-5.6v-5.6h5.6Z',
                      transform: 'translate(-16.002 -400)',
                      fill: e,
                    })
                  )
                ),
                n.a.createElement(
                  'g',
                  {
                    'data-name': 'Group 2851',
                    transform: 'translate(15.868 43.867)',
                  },
                  n.a.createElement(
                    'g',
                    { 'data-name': 'Group 2850' },
                    n.a.createElement('path', {
                      'data-name': 'Path 2445',
                      d:
                        'M144.4,376h-7.467a.933.933,0,0,0-.933.933h0V387.2a.933.933,0,0,0,.933.933H144.4a.933.933,0,0,0,.933-.933h0V376.933A.933.933,0,0,0,144.4,376Zm-.934,10.267h-5.6v-8.4h5.6Z',
                      transform: 'translate(-136.002 -376)',
                      fill: e,
                    })
                  )
                ),
                n.a.createElement(
                  'g',
                  {
                    'data-name': 'Group 2853',
                    transform: 'translate(29.868 40.133)',
                  },
                  n.a.createElement(
                    'g',
                    { 'data-name': 'Group 2852' },
                    n.a.createElement('path', {
                      'data-name': 'Path 2446',
                      d:
                        'M264.4,344h-7.467a.933.933,0,0,0-.933.933h0v14a.933.933,0,0,0,.933.933H264.4a.933.933,0,0,0,.933-.933h0v-14A.933.933,0,0,0,264.4,344Zm-.934,14h-5.6V345.867h5.6Z',
                      transform: 'translate(-256.002 -344)',
                      fill: e,
                    })
                  )
                ),
                n.a.createElement(
                  'g',
                  {
                    'data-name': 'Group 2855',
                    transform: 'translate(43.868 31.733)',
                  },
                  n.a.createElement(
                    'g',
                    { 'data-name': 'Group 2854' },
                    n.a.createElement('path', {
                      'data-name': 'Path 2447',
                      d:
                        'M384.4,272h-7.467a.933.933,0,0,0-.933.933h0v22.4a.933.933,0,0,0,.933.933H384.4a.933.933,0,0,0,.933-.933h0v-22.4A.933.933,0,0,0,384.4,272Zm-.934,22.4h-5.6V273.867h5.6Z',
                      transform: 'translate(-376.002 -272)',
                      fill: e,
                    })
                  )
                ),
                n.a.createElement(
                  'g',
                  {
                    'data-name': 'Group 2857',
                    transform: 'translate(1.356 18.702)',
                  },
                  n.a.createElement(
                    'g',
                    { 'data-name': 'Group 2856' },
                    n.a.createElement('path', {
                      'data-name': 'Path 2448',
                      d:
                        'M42.263,162.177l-.017-.005-6.533-1.867-.513,1.8,4.574,1.307L11.611,181.889l1.024,1.56,27.7-18.179L38.8,170.262l1.784.549,2.3-7.467A.934.934,0,0,0,42.263,162.177Z',
                      transform: 'translate(-11.611 -160.305)',
                      fill: e,
                    })
                  )
                ),
                n.a.createElement(
                  'g',
                  {
                    'data-name': 'Group 2859',
                    transform: 'translate(36.401 3.733)',
                  },
                  n.a.createElement(
                    'g',
                    { 'data-name': 'Group 2858' },
                    n.a.createElement('path', {
                      'data-name': 'Path 2449',
                      d:
                        'M326.654,37.255a.933.933,0,0,0-.511-.255l-4.022-.615-1.807-3.85a.933.933,0,0,0-1.69,0l-1.807,3.85L312.794,37a.933.933,0,0,0-.527,1.574l2.938,3.011-.695,4.263a.933.933,0,0,0,1.373.967l3.586-1.982,3.586,1.982a.933.933,0,0,0,1.373-.967l-.695-4.263,2.938-3.011A.933.933,0,0,0,326.654,37.255Zm-4.587,3.364a.932.932,0,0,0-.253.8l.462,2.831-2.356-1.3a.933.933,0,0,0-.9,0l-2.356,1.3.462-2.831a.932.932,0,0,0-.253-.8l-2-2.048,2.719-.416a.931.931,0,0,0,.7-.526l1.174-2.5,1.174,2.5a.932.932,0,0,0,.7.526l2.719.416Z',
                      transform: 'translate(-312.002 -31.998)',
                      fill: e,
                    })
                  )
                ),
                n.a.createElement(
                  'g',
                  {
                    'data-name': 'Group 2861',
                    transform: 'translate(41.774 22.245)',
                  },
                  n.a.createElement(
                    'g',
                    { 'data-name': 'Group 2860' },
                    n.a.createElement('path', {
                      'data-name': 'Path 2450',
                      d:
                        'M361.942,190.672a10.25,10.25,0,0,1-1.778.155h-.014a10.286,10.286,0,0,1-1.773-.153l-.321,1.839a18.6,18.6,0,0,0,2.109.18,12.1,12.1,0,0,0,2.1-.184Z',
                      transform: 'translate(-358.057 -190.672)',
                      fill: e,
                    })
                  )
                ),
                n.a.createElement(
                  'g',
                  {
                    'data-name': 'Group 2863',
                    transform: 'translate(45.621 0.176)',
                  },
                  n.a.createElement(
                    'g',
                    { 'data-name': 'Group 2862' },
                    n.a.createElement('path', {
                      'data-name': 'Path 2451',
                      d:
                        'M391.342,1.508l-.316,1.839a10.177,10.177,0,0,1,3.351,1.208l.929-1.619A12.016,12.016,0,0,0,391.342,1.508Z',
                      transform: 'translate(-391.026 -1.508)',
                      fill: e,
                    })
                  )
                ),
                n.a.createElement(
                  'g',
                  {
                    'data-name': 'Group 2865',
                    transform: 'translate(37.772 0.187)',
                  },
                  n.a.createElement(
                    'g',
                    { 'data-name': 'Group 2864' },
                    n.a.createElement('path', {
                      'data-name': 'Path 2452',
                      d:
                        'M327.708,1.6a12.054,12.054,0,0,0-3.955,1.453l.94,1.613a10.191,10.191,0,0,1,3.344-1.229Z',
                      transform: 'translate(-323.753 -1.602)',
                      fill: e,
                    })
                  )
                ),
                n.a.createElement(
                  'g',
                  {
                    'data-name': 'Group 2867',
                    transform: 'translate(49.006 18.729)',
                  },
                  n.a.createElement(
                    'g',
                    { 'data-name': 'Group 2866' },
                    n.a.createElement('path', {
                      'data-name': 'Path 2453',
                      d:
                        'M422.772,160.531a10.3,10.3,0,0,1-2.73,2.294l.936,1.615a12.15,12.15,0,0,0,3.223-2.708Z',
                      transform: 'translate(-420.042 -160.531)',
                      fill: e,
                    })
                  )
                ),
                n.a.createElement(
                  'g',
                  {
                    'data-name': 'Group 2869',
                    transform: 'translate(53.519 12.099)',
                  },
                  n.a.createElement(
                    'g',
                    { 'data-name': 'Group 2868' },
                    n.a.createElement('path', {
                      'data-name': 'Path 2454',
                      d:
                        'M460.795,103.7l-1.454.035a10.241,10.241,0,0,1-.616,3.512l1.755.638a12.138,12.138,0,0,0,.727-4.177Z',
                      transform: 'translate(-458.725 -103.703)',
                      fill: e,
                    })
                  )
                ),
                n.a.createElement(
                  'g',
                  {
                    'data-name': 'Group 2871',
                    transform: 'translate(51.711 4.302)',
                  },
                  n.a.createElement(
                    'g',
                    { 'data-name': 'Group 2870' },
                    n.a.createElement('path', {
                      'data-name': 'Path 2455',
                      d:
                        'M444.65,36.875l-1.425,1.2a10.223,10.223,0,0,1,1.794,3.078l1.752-.645A12.071,12.071,0,0,0,444.65,36.875Z',
                      transform: 'translate(-443.225 -36.875)',
                      fill: e,
                    })
                  )
                ),
                n.a.createElement(
                  'g',
                  {
                    'data-name': 'Group 2873',
                    transform: 'translate(32.455 4.355)',
                  },
                  n.a.createElement(
                    'g',
                    { 'data-name': 'Group 2872' },
                    n.a.createElement('path', {
                      'data-name': 'Path 2456',
                      d:
                        'M280.274,37.328a12.093,12.093,0,0,0-2.1,3.652l1.755.634a10.223,10.223,0,0,1,1.777-3.089Z',
                      transform: 'translate(-278.174 -37.328)',
                      fill: e,
                    })
                  )
                ),
                n.a.createElement(
                  'g',
                  {
                    'data-name': 'Group 2875',
                    transform: 'translate(34.585 18.743)',
                  },
                  n.a.createElement(
                    'g',
                    { 'data-name': 'Group 2874' },
                    n.a.createElement('path', {
                      'data-name': 'Path 2457',
                      d:
                        'M297.859,160.656l-1.427,1.2a12.154,12.154,0,0,0,3.228,2.7l.933-1.617A10.286,10.286,0,0,1,297.859,160.656Z',
                      transform: 'translate(-296.432 -160.656)',
                      fill: e,
                    })
                  )
                ),
                n.a.createElement(
                  'g',
                  {
                    'data-name': 'Group 2877',
                    transform: 'translate(31.735 12.154)',
                  },
                  n.a.createElement(
                    'g',
                    { 'data-name': 'Group 2876' },
                    n.a.createElement('path', {
                      'data-name': 'Path 2458',
                      d:
                        'M273.873,104.18l-1.867,0a12.084,12.084,0,0,0,.736,4.147l1.753-.642A10.227,10.227,0,0,1,273.873,104.18Z',
                      transform: 'translate(-272.006 -104.18)',
                      fill: e,
                    })
                  )
                )
              )
            ),
          Skirts: ({
            color: e = 'currentColor',
            width: a = '18px',
            height: t = '18px',
          }) =>
            n.a.createElement(
              'svg',
              {
                xmlns: 'http://www.w3.org/2000/svg',
                width: a,
                height: t,
                viewBox: '0 0 18 18',
              },
              n.a.createElement(
                'g',
                { fill: e },
                n.a.createElement('path', {
                  'data-name': 'Path 107',
                  d:
                    'M17.688 16.585L14.826 5.454a3.95 3.95 0 00-.26-.682l-.822-1.6a.749.749 0 00-.616-.376H4.576a.746.746 0 00-.615.377l-.841 1.65a4.017 4.017 0 00-.258.683L.017 16.585a.373.373 0 00.374.482h.64a1.52 1.52 0 01.612.158l1.246.691a.824.824 0 00.728 0l1.24-.691a.607.607 0 01.514 0l1.246.691a.824.824 0 00.728 0l1.246-.691a.607.607 0 01.514 0l1.246.691a.824.824 0 00.728 0l1.246-.691a.607.607 0 01.514 0l1.246.691a.824.824 0 00.728 0l1.246-.691a1.52 1.52 0 01.612-.158h.64a.373.373 0 00.374-.482z',
                }),
                n.a.createElement('path', {
                  'data-name': 'Path 108',
                  d:
                    'M4.525 2.1h8.656a.333.333 0 00.333-.333V.333A.333.333 0 0013.181 0H4.525a.333.333 0 00-.331.333v1.438a.333.333 0 00.331.331zM7.833.652a.267.267 0 01.262-.266h1.508a.267.267 0 01.266.266v.8a.267.267 0 01-.266.266H8.095a.267.267 0 01-.266-.266z',
                }),
                n.a.createElement('path', {
                  'data-name': 'Rectangle 2',
                  d: 'M8.275.83h1.153v.444H8.275z',
                })
              )
            ),
          SmartPhone: ({
            color: e = 'currentColor',
            width: a = '18px',
            height: t = '18px',
          }) =>
            n.a.createElement(
              'svg',
              {
                xmlns: 'http://www.w3.org/2000/svg',
                width: a,
                height: t,
                viewBox: '0 0 15.602 24',
              },
              n.a.createElement(
                'g',
                { transform: 'translate(0)' },
                n.a.createElement('path', {
                  'data-name': 'Path 111',
                  d:
                    'M67.566,18.7V.808A.808.808,0,0,0,66.757,0H52.772a.808.808,0,0,0-.808.808V18.7h15.6Zm-7.8-4.449a.848.848,0,1,1,.848-.848A.848.848,0,0,1,59.765,14.247Zm2.844-2.267a.647.647,0,0,1-.914,0,2.728,2.728,0,0,0-3.859,0,.647.647,0,0,1-.915-.914,4.021,4.021,0,0,1,5.688,0A.646.646,0,0,1,62.609,11.98ZM54.991,9.134a6.75,6.75,0,0,1,9.548,0,.647.647,0,1,1-.915.914,5.457,5.457,0,0,0-7.719,0,.647.647,0,0,1-.915-.914Z',
                  transform: 'translate(-51.964)',
                  fill: e,
                }),
                n.a.createElement('path', {
                  'data-name': 'Path 112',
                  d:
                    'M51.964,247.371v3.2a.808.808,0,0,0,.808.808H66.757a.808.808,0,0,0,.808-.808v-3.2Zm8.5,2.289h-1.4a.647.647,0,1,1,0-1.293h1.4a.647.647,0,1,1,0,1.293Z',
                  transform: 'translate(-51.964 -227.381)',
                  fill: e,
                })
              )
            ),
          Snacks: ({
            color: e = 'currentColor',
            width: a = '18px',
            height: t = '18px',
          }) =>
            n.a.createElement(
              'svg',
              {
                xmlns: 'http://www.w3.org/2000/svg',
                width: a,
                height: t,
                viewBox: '0 0 18 18',
              },
              n.a.createElement(
                'g',
                { fill: e },
                n.a.createElement('path', {
                  'data-name': 'Path 36',
                  d:
                    'M2.109 5.274H12.66a1.055 1.055 0 000-2.11h-.1a1.67 1.67 0 00-1.5-1.054 2.626 2.626 0 00-1.854-1.044 2.1 2.1 0 00-3.653 0 2.626 2.626 0 00-1.85 1.045h-.011a1.577 1.577 0 00-1.481 1.055h-.1a1.055 1.055 0 100 2.11z',
                }),
                n.a.createElement('path', {
                  'data-name': 'Path 37',
                  d: 'M7.956 15.891l.863-9.562H5.946l.862 9.562z',
                }),
                n.a.createElement('path', {
                  'data-name': 'Path 38',
                  d:
                    'M2.884 12.881a2.118 2.118 0 011.253 1.378 2.626 2.626 0 011.07 1.633h.542L4.887 6.33H2.164z',
                }),
                n.a.createElement('path', {
                  'data-name': 'Path 39',
                  d:
                    'M12.601 6.329H9.877l-.862 9.562h2.059a.527.527 0 00.524-.469z',
                }),
                n.a.createElement('path', {
                  'data-name': 'Path 40',
                  d:
                    'M1.054 16.946a.876.876 0 00.091-.019 1.577 1.577 0 102-2c0-.031.019-.058.019-.091a1.055 1.055 0 00-2.11 0 1.055 1.055 0 100 2.109z',
                })
              )
            ),
          Tops: ({
            color: e = 'currentColor',
            width: a = '18px',
            height: t = '18px',
          }) =>
            n.a.createElement(
              'svg',
              {
                xmlns: 'http://www.w3.org/2000/svg',
                width: a,
                height: t,
                viewBox: '0 0 18 18',
              },
              n.a.createElement(
                'g',
                { fill: e },
                n.a.createElement('path', {
                  'data-name': 'Path 104',
                  d:
                    'M6.994 2.83L5.928 5.991a.315.315 0 01-.6 0L4.273 2.83a2.4 2.4 0 00-2.909-.026L0 3.822l.087.329a32.647 32.647 0 01.909 11.921L.79 18h9.7l-.215-1.909a32.667 32.667 0 01.912-11.96l.083-.31-1.366-1.013a2.4 2.4 0 00-2.909.026zm0 0',
                }),
                n.a.createElement('path', {
                  'data-name': 'Path 105',
                  d: 'M.549 2.843l.62-.114L.714.261a.315.315 0 00-.62.114zm0 0',
                }),
                n.a.createElement('path', {
                  'data-name': 'Path 106',
                  d:
                    'M10.978.369a.316.316 0 00-.622-.108L9.966 2.6l.622.108zm0 0',
                })
              )
            ),
          Twitter: ({
            color: e = 'currentColor',
            width: a = '18px',
            height: t = '18px',
          }) =>
            n.a.createElement(
              'svg',
              {
                xmlns: 'http://www.w3.org/2000/svg',
                width: a,
                height: t,
                viewBox: '0 0 29.915 24.313',
              },
              n.a.createElement('path', {
                id: 'twitter_2_',
                'data-name': 'twitter (2)',
                d:
                  'M9.408,24.812c11.289,0,17.463-9.353,17.463-17.463q0-.4-.017-.793a12.488,12.488,0,0,0,3.062-3.178,12.243,12.243,0,0,1-3.525.966,6.159,6.159,0,0,0,2.7-3.395,12.313,12.313,0,0,1-3.9,1.49,6.143,6.143,0,0,0-10.459,5.6A17.426,17.426,0,0,1,2.082,1.624a6.143,6.143,0,0,0,1.9,8.194A6.091,6.091,0,0,1,1.2,9.05c0,.026,0,.051,0,.078a6.139,6.139,0,0,0,4.924,6.017,6.129,6.129,0,0,1-2.772.105,6.144,6.144,0,0,0,5.734,4.263A12.313,12.313,0,0,1,1.464,22.14,12.514,12.514,0,0,1,0,22.055a17.375,17.375,0,0,0,9.408,2.757',
                transform: 'translate(0 -0.5)',
                fill: e,
              })
            ),
          UploadIcon: b.a,
          UserAvatar: ({
            width: e = '25px',
            height: a = '30px',
            color: t = 'currentColor',
          }) =>
            n.a.createElement(
              'svg',
              {
                id: 'user',
                xmlns: 'http://www.w3.org/2000/svg',
                width: e,
                height: a,
                viewBox: '0 0 25.057 30.034',
              },
              n.a.createElement('path', {
                'data-name': 'Path 1',
                d:
                  'M94.265,14.467a7,7,0,0,0,5.115-2.119A7,7,0,0,0,101.5,7.233,7,7,0,0,0,99.38,2.119a7.232,7.232,0,0,0-10.229,0,7,7,0,0,0-2.119,5.114,7,7,0,0,0,2.12,5.115A7,7,0,0,0,94.265,14.467Zm0,0',
                transform: 'translate(-81.926)',
                fill: t,
              }),
              n.a.createElement('path', {
                'data-name': 'Path 2',
                d:
                  'M25,255.9a17.868,17.868,0,0,0-.243-1.9,14.951,14.951,0,0,0-.467-1.908,9.425,9.425,0,0,0-.784-1.779,6.715,6.715,0,0,0-1.183-1.541,5.215,5.215,0,0,0-1.7-1.068,5.872,5.872,0,0,0-2.169-.393,2.2,2.2,0,0,0-1.176.5c-.352.23-.765.5-1.225.79a7.018,7.018,0,0,1-1.585.7,6.154,6.154,0,0,1-3.877,0,7,7,0,0,1-1.584-.7c-.456-.291-.868-.557-1.226-.79a2.2,2.2,0,0,0-1.175-.5,5.864,5.864,0,0,0-2.169.393,5.211,5.211,0,0,0-1.7,1.068,6.716,6.716,0,0,0-1.182,1.541A9.443,9.443,0,0,0,.77,252.1,14.987,14.987,0,0,0,.3,254.006a17.8,17.8,0,0,0-.243,1.9c-.04.575-.06,1.171-.06,1.774a4.987,4.987,0,0,0,1.481,3.773A5.332,5.332,0,0,0,5.3,262.843H19.759a5.331,5.331,0,0,0,3.816-1.392,4.985,4.985,0,0,0,1.481-3.773C25.057,257.072,25.036,256.475,25,255.9Zm0,0',
                transform: 'translate(0 -232.809)',
                fill: t,
              })
            ),
          UserIcon: M.a,
          USFlag: ({ width: e = '18px', height: a = '18px' }) =>
            n.a.createElement(
              'svg',
              {
                xmlns: 'http://www.w3.org/2000/svg',
                id: 'flag-icon-css-us',
                viewBox: '0 0 640 480',
                width: e,
                height: a,
              },
              n.a.createElement(
                'g',
                { fillRule: 'evenodd' },
                n.a.createElement(
                  'g',
                  { strokeWidth: '1pt' },
                  n.a.createElement('path', {
                    fill: '#bd3d44',
                    d:
                      'M0 0h972.8v39.4H0zm0 78.8h972.8v39.4H0zm0 78.7h972.8V197H0zm0 78.8h972.8v39.4H0zm0 78.8h972.8v39.4H0zm0 78.7h972.8v39.4H0zm0 78.8h972.8V512H0z',
                    transform: 'scale(.9375)',
                  }),
                  n.a.createElement('path', {
                    fill: '#fff',
                    d:
                      'M0 39.4h972.8v39.4H0zm0 78.8h972.8v39.3H0zm0 78.7h972.8v39.4H0zm0 78.8h972.8v39.4H0zm0 78.8h972.8v39.4H0zm0 78.7h972.8v39.4H0z',
                    transform: 'scale(.9375)',
                  })
                ),
                n.a.createElement('path', {
                  fill: '#192f5d',
                  d: 'M0 0h389.1v275.7H0z',
                  transform: 'scale(.9375)',
                }),
                n.a.createElement('path', {
                  fill: '#fff',
                  d:
                    'M32.4 11.8L36 22.7h11.4l-9.2 6.7 3.5 11-9.3-6.8-9.2 6.7 3.5-10.9-9.3-6.7H29zm64.9 0l3.5 10.9h11.5l-9.3 6.7 3.5 11-9.2-6.8-9.3 6.7 3.5-10.9-9.2-6.7h11.4zm64.8 0l3.6 10.9H177l-9.2 6.7 3.5 11-9.3-6.8-9.2 6.7 3.5-10.9-9.3-6.7h11.5zm64.9 0l3.5 10.9H242l-9.3 6.7 3.6 11-9.3-6.8-9.3 6.7 3.6-10.9-9.3-6.7h11.4zm64.8 0l3.6 10.9h11.4l-9.2 6.7 3.5 11-9.3-6.8-9.2 6.7 3.5-10.9-9.2-6.7h11.4zm64.9 0l3.5 10.9h11.5l-9.3 6.7 3.6 11-9.3-6.8-9.3 6.7 3.6-10.9-9.3-6.7h11.5zM64.9 39.4l3.5 10.9h11.5L70.6 57 74 67.9l-9-6.7-9.3 6.7L59 57l-9-6.7h11.4zm64.8 0l3.6 10.9h11.4l-9.3 6.7 3.6 10.9-9.3-6.7-9.3 6.7L124 57l-9.3-6.7h11.5zm64.9 0l3.5 10.9h11.5l-9.3 6.7 3.5 10.9-9.2-6.7-9.3 6.7 3.5-10.9-9.2-6.7H191zm64.8 0l3.6 10.9h11.4l-9.3 6.7 3.6 10.9-9.3-6.7-9.2 6.7 3.5-10.9-9.3-6.7H256zm64.9 0l3.5 10.9h11.5L330 57l3.5 10.9-9.2-6.7-9.3 6.7 3.5-10.9-9.2-6.7h11.4zM32.4 66.9L36 78h11.4l-9.2 6.7 3.5 10.9-9.3-6.8-9.2 6.8 3.5-11-9.3-6.7H29zm64.9 0l3.5 11h11.5l-9.3 6.7 3.5 10.9-9.2-6.8-9.3 6.8 3.5-11-9.2-6.7h11.4zm64.8 0l3.6 11H177l-9.2 6.7 3.5 10.9-9.3-6.8-9.2 6.8 3.5-11-9.3-6.7h11.5zm64.9 0l3.5 11H242l-9.3 6.7 3.6 10.9-9.3-6.8-9.3 6.8 3.6-11-9.3-6.7h11.4zm64.8 0l3.6 11h11.4l-9.2 6.7 3.5 10.9-9.3-6.8-9.2 6.8 3.5-11-9.2-6.7h11.4zm64.9 0l3.5 11h11.5l-9.3 6.7 3.6 10.9-9.3-6.8-9.3 6.8 3.6-11-9.3-6.7h11.5zM64.9 94.5l3.5 10.9h11.5l-9.3 6.7 3.5 11-9.2-6.8-9.3 6.7 3.5-10.9-9.2-6.7h11.4zm64.8 0l3.6 10.9h11.4l-9.3 6.7 3.6 11-9.3-6.8-9.3 6.7 3.6-10.9-9.3-6.7h11.5zm64.9 0l3.5 10.9h11.5l-9.3 6.7 3.5 11-9.2-6.8-9.3 6.7 3.5-10.9-9.2-6.7H191zm64.8 0l3.6 10.9h11.4l-9.2 6.7 3.5 11-9.3-6.8-9.2 6.7 3.5-10.9-9.3-6.7H256zm64.9 0l3.5 10.9h11.5l-9.3 6.7 3.5 11-9.2-6.8-9.3 6.7 3.5-10.9-9.2-6.7h11.4zM32.4 122.1L36 133h11.4l-9.2 6.7 3.5 11-9.3-6.8-9.2 6.7 3.5-10.9-9.3-6.7H29zm64.9 0l3.5 10.9h11.5l-9.3 6.7 3.5 10.9-9.2-6.7-9.3 6.7 3.5-10.9-9.2-6.7h11.4zm64.8 0l3.6 10.9H177l-9.2 6.7 3.5 11-9.3-6.8-9.2 6.7 3.5-10.9-9.3-6.7h11.5zm64.9 0l3.5 10.9H242l-9.3 6.7 3.6 11-9.3-6.8-9.3 6.7 3.6-10.9-9.3-6.7h11.4zm64.8 0l3.6 10.9h11.4l-9.2 6.7 3.5 11-9.3-6.8-9.2 6.7 3.5-10.9-9.2-6.7h11.4zm64.9 0l3.5 10.9h11.5l-9.3 6.7 3.6 11-9.3-6.8-9.3 6.7 3.6-10.9-9.3-6.7h11.5zM64.9 149.7l3.5 10.9h11.5l-9.3 6.7 3.5 10.9-9.2-6.8-9.3 6.8 3.5-11-9.2-6.7h11.4zm64.8 0l3.6 10.9h11.4l-9.3 6.7 3.6 10.9-9.3-6.8-9.3 6.8 3.6-11-9.3-6.7h11.5zm64.9 0l3.5 10.9h11.5l-9.3 6.7 3.5 10.9-9.2-6.8-9.3 6.8 3.5-11-9.2-6.7H191zm64.8 0l3.6 10.9h11.4l-9.2 6.7 3.5 10.9-9.3-6.8-9.2 6.8 3.5-11-9.3-6.7H256zm64.9 0l3.5 10.9h11.5l-9.3 6.7 3.5 10.9-9.2-6.8-9.3 6.8 3.5-11-9.2-6.7h11.4zM32.4 177.2l3.6 11h11.4l-9.2 6.7 3.5 10.8-9.3-6.7-9.2 6.7 3.5-10.9-9.3-6.7H29zm64.9 0l3.5 11h11.5l-9.3 6.7 3.6 10.8-9.3-6.7-9.3 6.7 3.6-10.9-9.3-6.7h11.4zm64.8 0l3.6 11H177l-9.2 6.7 3.5 10.8-9.3-6.7-9.2 6.7 3.5-10.9-9.3-6.7h11.5zm64.9 0l3.5 11H242l-9.3 6.7 3.6 10.8-9.3-6.7-9.3 6.7 3.6-10.9-9.3-6.7h11.4zm64.8 0l3.6 11h11.4l-9.2 6.7 3.5 10.8-9.3-6.7-9.2 6.7 3.5-10.9-9.2-6.7h11.4zm64.9 0l3.5 11h11.5l-9.3 6.7 3.6 10.8-9.3-6.7-9.3 6.7 3.6-10.9-9.3-6.7h11.5zM64.9 204.8l3.5 10.9h11.5l-9.3 6.7 3.5 11-9.2-6.8-9.3 6.7 3.5-10.9-9.2-6.7h11.4zm64.8 0l3.6 10.9h11.4l-9.3 6.7 3.6 11-9.3-6.8-9.3 6.7 3.6-10.9-9.3-6.7h11.5zm64.9 0l3.5 10.9h11.5l-9.3 6.7 3.5 11-9.2-6.8-9.3 6.7 3.5-10.9-9.2-6.7H191zm64.8 0l3.6 10.9h11.4l-9.2 6.7 3.5 11-9.3-6.8-9.2 6.7 3.5-10.9-9.3-6.7H256zm64.9 0l3.5 10.9h11.5l-9.3 6.7 3.5 11-9.2-6.8-9.3 6.7 3.5-10.9-9.2-6.7h11.4zM32.4 232.4l3.6 10.9h11.4l-9.2 6.7 3.5 10.9-9.3-6.7-9.2 6.7 3.5-11-9.3-6.7H29zm64.9 0l3.5 10.9h11.5L103 250l3.6 10.9-9.3-6.7-9.3 6.7 3.6-11-9.3-6.7h11.4zm64.8 0l3.6 10.9H177l-9 6.7 3.5 10.9-9.3-6.7-9.2 6.7 3.5-11-9.3-6.7h11.5zm64.9 0l3.5 10.9H242l-9.3 6.7 3.6 10.9-9.3-6.7-9.3 6.7 3.6-11-9.3-6.7h11.4zm64.8 0l3.6 10.9h11.4l-9.2 6.7 3.5 10.9-9.3-6.7-9.2 6.7 3.5-11-9.2-6.7h11.4zm64.9 0l3.5 10.9h11.5l-9.3 6.7 3.6 10.9-9.3-6.7-9.3 6.7 3.6-11-9.3-6.7h11.5z',
                  transform: 'scale(.9375)',
                })
              )
            ),
          Wallet: ({
            color: e = 'currentColor',
            width: a = '18px',
            height: t = '18px',
          }) =>
            n.a.createElement(
              'svg',
              {
                xmlns: 'http://www.w3.org/2000/svg',
                width: a,
                height: t,
                viewBox: '0 0 18 18',
              },
              n.a.createElement(
                'g',
                { 'data-name': 'Group 9' },
                n.a.createElement(
                  'g',
                  { 'data-name': 'Group 8' },
                  n.a.createElement('path', {
                    'data-name': 'Path 42',
                    d:
                      'M12.362 1.129a1.415 1.415 0 00-1.672-1.1L1.428 1.942h11.1z',
                    fill: e,
                  })
                ),
                n.a.createElement('path', {
                  'data-name': 'Path 43',
                  d:
                    'M11.579 11.242v-2.2a1.822 1.822 0 011.82-1.82h2.784v-2.78a1.415 1.415 0 00-1.415-1.415H1.415A1.415 1.415 0 000 4.442v11.4a1.415 1.415 0 001.415 1.415h13.354a1.415 1.415 0 001.415-1.415v-2.776h-2.785a1.822 1.822 0 01-1.82-1.82z',
                  fill: e,
                }),
                n.a.createElement('path', {
                  'data-name': 'Path 44',
                  d:
                    'M16.989 8.03h-3.59a1.011 1.011 0 00-1.01 1.01v2.2a1.012 1.012 0 001.01 1.01h3.59a1.012 1.012 0 001.01-1.01v-2.2a1.012 1.012 0 00-1.01-1.01zm-2.8 3.128a1.006 1.006 0 111.006-1.006 1.006 1.006 0 01-1.006 1.006z',
                  fill: e,
                })
              )
            ),
          WomenDress: ({
            color: e = 'currentColor',
            width: a = '18px',
            height: t = '18px',
          }) =>
            n.a.createElement(
              'svg',
              {
                xmlns: 'http://www.w3.org/2000/svg',
                width: a,
                height: t,
                viewBox: '0 0 18 18',
              },
              n.a.createElement(
                'defs',
                null,
                n.a.createElement(
                  'clipPath',
                  { id: 'a' },
                  n.a.createElement('path', {
                    'data-name': 'Rectangle 20',
                    transform: 'translate(226 1073)',
                    fill: '#ebe7e7',
                    d: 'M0 0h18v18H0z',
                  })
                )
              ),
              n.a.createElement(
                'g',
                {
                  'data-name': 'Women Dress',
                  transform: 'translate(-226 -1073)',
                  clipPath: 'url(#a)',
                },
                n.a.createElement(
                  'g',
                  {
                    'data-name': 'Group 28',
                    transform: 'translate(230.461 1073)',
                    fill: e,
                  },
                  n.a.createElement('path', {
                    'data-name': 'Path 80',
                    d:
                      'M8.236 12.619c-.12-.6-.384-3.422-1.008-4.358a1.446 1.446 0 01-.19-.8.039.039 0 000-.007c.02-.29.052-.6.073-.762a.493.493 0 01.01-.076c.016-.1.036-.192.057-.289a16.065 16.065 0 00.515-2.746c0-1.429-.733-1.849-.733-1.849.251-1.069.434-1.647.434-1.647L7.179 0A10.558 10.558 0 006.7 1.717a2.911 2.911 0 01-2.161.694 2.913 2.913 0 01-2.161-.694A10.578 10.578 0 001.897 0l-.216.087s.18.577.434 1.647c0 0-.733.421-.733 1.849a14.672 14.672 0 00.491 2.631.1.1 0 000 .039.2.2 0 00.01.035l.007.028c.03.123.074.347.081.347.014.087.029.243.043.4.006.055.01.109.014.163l.016.207h-.007a1.462 1.462 0 01-.191.826c-.624.936-.889 3.758-1.008 4.358s-.408 2.81-.552 3.459-.288 1.537-.288 1.537a3.7 3.7 0 001.2.144s-.087.252.649.18a14.433 14.433 0 011.969-.06c.5.024.153.12.72.12s.216-.1.72-.12a14.388 14.388 0 011.969.06c.733.072.649-.18.649-.18a3.708 3.708 0 001.2-.144s-.144-.889-.289-1.537-.428-2.857-.549-3.457zM6.955 6.468c-.056.077-.106.2-.041.251-.017.115-.027.231-.039.347-.065-.075-.274-.006-.274-.006-.155-.068.137.335.254.181-.005.065-.007.13-.01.2-.142-.01-.284-.02-.427-.028a.66.66 0 00-.068-.149c.016-.108-.108.016-.15.137a25.847 25.847 0 00-.925-.02C5.211 7.304 5 7.373 5 7.373c-.031-.014-.044-.008-.044.009h-.032a.147.147 0 00.016-.067.152.152 0 00-.3 0 .149.149 0 00.017.067c-.406 0-.812.013-1.214.023a.791.791 0 00-.042-.077c.014-.092-.074-.017-.126.081l-.207.005a.491.491 0 00.112-.2c.154-.1-.434-.074-.271.151a.2.2 0 00.051.051h-.173a.087.087 0 000-.122c-.136-.2-.238.094-.25.127l-.3.006a.43.43 0 00-.005-.081c.073-.011.315-.308.087-.354a.173.173 0 00-.109.005 4.818 4.818 0 00-.048-.385.674.674 0 00.059-.135c.067-.042-.005-.062-.1-.051a2.26 2.26 0 00-.039-.147h.224a.152.152 0 10.292.057.148.148 0 00-.014-.062l1.04-.019a.1.1 0 000 .132c.143.2.244-.072.266-.137l.479-.005c.075.095.22.2.277.043a.207.207 0 00.009-.046h.7a.15.15 0 00-.034.092.152.152 0 10.3 0 .149.149 0 00-.033-.087c.384.007.766.024 1.148.048-.116.015-.254.077-.166.2.161.225.271-.151.271-.151.029-.018.032-.032.018-.042l.1.007a.042.042 0 00.009.008c-.007.052-.016.1-.026.153z',
                  }),
                  n.a.createElement('path', {
                    'data-name': 'Path 81',
                    d:
                      'M4.951 7.161c-.144.087.4.076.252-.134s-.252.134-.252.134z',
                  }),
                  n.a.createElement('path', {
                    'data-name': 'Path 82',
                    d:
                      'M4.286 7.052c-.1.235.249.14.249.14.15.075-.149-.375-.249-.14z',
                  }),
                  n.a.createElement('path', {
                    'data-name': 'Path 83',
                    d:
                      'M4.768 6.721c-.284-.057-.1.31-.1.31-.049.19.384-.249.1-.31z',
                  }),
                  n.a.createElement('path', {
                    'data-name': 'Path 84',
                    d:
                      'M5.973 6.533c.095-.26-.277-.138-.277-.138-.167-.073.183.398.277.138z',
                  }),
                  n.a.createElement('path', {
                    'data-name': 'Path 85',
                    d:
                      'M5.382 6.898c.276.023.061-.3.061-.3.027-.184-.34.279-.061.3z',
                  }),
                  n.a.createElement('path', {
                    'data-name': 'Path 86',
                    d:
                      'M4.985 6.632c.161.225.271-.151.271-.151.154-.097-.433-.076-.271.151z',
                  }),
                  n.a.createElement('circle', {
                    'data-name': 'Ellipse 3',
                    cx: '.152',
                    cy: '.152',
                    r: '.152',
                    transform: 'translate(3.253 6.916)',
                  }),
                  n.a.createElement('path', {
                    'data-name': 'Path 87',
                    d:
                      'M3.851 6.782c-.144-.21-.252.134-.252.134-.144.086.396.076.252-.134z',
                  }),
                  n.a.createElement('path', {
                    'data-name': 'Path 88',
                    d:
                      'M3.649 7.126c-.167-.073.183.4.277.138s-.277-.138-.277-.138z',
                  }),
                  n.a.createElement('path', {
                    'data-name': 'Path 89',
                    d:
                      'M2.903 6.808c-.1.235.249.14.249.14.151.075-.149-.374-.249-.14z',
                  }),
                  n.a.createElement('path', {
                    'data-name': 'Path 90',
                    d:
                      'M3.384 6.48c-.284-.057-.1.31-.1.31-.046.185.385-.256.1-.31z',
                  }),
                  n.a.createElement('path', {
                    'data-name': 'Path 91',
                    d:
                      'M6.359 6.852a.152.152 0 11-.152.152.152.152 0 01.152-.152z',
                  }),
                  n.a.createElement('path', {
                    'data-name': 'Path 92',
                    d:
                      'M6.553 6.853c-.144.087.4.076.252-.134s-.252.134-.252.134z',
                  }),
                  n.a.createElement('path', {
                    'data-name': 'Path 93',
                    d:
                      'M5.861 7.3c.161.225.271-.151.271-.151.152-.1-.435-.074-.271.151z',
                  }),
                  n.a.createElement('path', {
                    'data-name': 'Path 94',
                    d:
                      'M5.856 6.744c-.1.235.249.14.249.14.15.075-.15-.375-.249-.14z',
                  }),
                  n.a.createElement('path', {
                    'data-name': 'Path 95',
                    d:
                      'M6.338 6.413c-.284-.057-.1.31-.1.31-.049.187.385-.25.1-.31z',
                  }),
                  n.a.createElement('path', {
                    'data-name': 'Path 96',
                    d:
                      'M4.064 6.654c.276.023.061-.3.061-.3.027-.184-.339.276-.061.3z',
                  }),
                  n.a.createElement('path', {
                    'data-name': 'Path 97',
                    d:
                      'M2.972 6.533c.094-.26-.277-.138-.277-.138-.168-.073.182.398.277.138z',
                  }),
                  n.a.createElement('path', {
                    'data-name': 'Path 98',
                    d:
                      'M2.381 6.898c.276.023.061-.3.061-.3.026-.184-.336.279-.061.3z',
                  })
                )
              )
            ),
        },
        x = [
          { value: 'Accessories' },
          { value: 'AdobeIcon' },
          { value: 'AlertDotIcon' },
          { value: 'ArrowDown' },
          { value: 'ArrowDropDown' },
          { value: 'ArrowLeftRound' },
          { value: 'ArrowNext' },
          { value: 'ArrowPrev' },
          { value: 'ArrowUp' },
          { value: 'BathOil' },
          { value: 'BeautyHealth' },
          { value: 'Beverage' },
          { value: 'BookIcon' },
          { value: 'Breakfast' },
          { value: 'CaretDownIcon' },
          { value: 'CaretUpIcon' },
          { value: 'CartIcon' },
          { value: 'CartIconBig' },
          { value: 'CategoryIcon' },
          { value: 'CheckMark' },
          { value: 'CloseIcon' },
          { value: 'CloseSquare' },
          { value: 'CNFlag' },
          { value: 'CoinIcon' },
          { value: 'Cooking' },
          { value: 'CouponIcon' },
          { value: 'CustomerIcon' },
          { value: 'Dairy' },
          { value: 'DashboardIcon' },
          { value: 'DEFlag' },
          { value: 'DeliveryIcon' },
          { value: 'Deodorant' },
          { value: 'DressIcon' },
          { value: 'EllipsisIcon' },
          { value: 'ESFlag' },
          { value: 'Eyes' },
          { value: 'Face' },
          { value: 'Facebook' },
          { value: 'FacialCare' },
          { value: 'FruitsVegetable' },
          { value: 'FurnitureIcon' },
          { value: 'GiftBox' },
          { value: 'Google' },
          { value: 'GooglePlus' },
          { value: 'GroceryIcon' },
          { value: 'Handbag' },
          { value: 'HandBags' },
          { value: 'HelpIcon' },
          { value: 'HomeCleaning' },
          { value: 'ILFlag' },
          { value: 'InboxIcon' },
          { value: 'InkPen' },
          { value: 'IosArrowDown' },
          { value: 'IosArrowUp' },
          { value: 'LaptopBags' },
          { value: 'Linkedin' },
          { value: 'Lips' },
          { value: 'LockIcon' },
          { value: 'LogoutIcon' },
          { value: 'LongArrowLeft' },
          { value: 'MakeupIcon' },
          { value: 'MeatFish' },
          { value: 'MedicineIcon' },
          { value: 'Members' },
          { value: 'MenuDown' },
          { value: 'MenuIcon' },
          { value: 'Minus' },
          { value: 'MinusSquare' },
          { value: 'NoCartBag' },
          { value: 'NotificationIcon' },
          { value: 'OptionIcon' },
          { value: 'OralCare' },
          { value: 'OrderIcon' },
          { value: 'OuterWear' },
          { value: 'Pants' },
          { value: 'PencilIcon' },
          { value: 'PetCare' },
          { value: 'Plus' },
          { value: 'PlusOutline' },
          { value: 'PlusSquare' },
          { value: 'ProductIcon' },
          { value: 'Purse' },
          { value: 'Refund' },
          { value: 'RefundIcon' },
          { value: 'Restaurant' },
          { value: 'Revenue' },
          { value: 'SAFlag' },
          { value: 'SearchIcon' },
          { value: 'SearchIconSmall' },
          { value: 'SettingIcon' },
          { value: 'ShavingNeeds' },
          { value: 'Shirts' },
          { value: 'ShoppingBag' },
          { value: 'ShoppingBagLarge' },
          { value: 'ShoulderBags' },
          { value: 'SidebarCategoryIcon' },
          { value: 'SiteSettings' },
          { value: 'Skirts' },
          { value: 'SmartPhone' },
          { value: 'Snacks' },
          { value: 'Tops' },
          { value: 'Twitter' },
          { value: 'UploadIcon' },
          { value: 'UserAvatar' },
          { value: 'UserIcon' },
          { value: 'USFlag' },
          { value: 'Wallet' },
          { value: 'WomenDress' },
        ];
    },
    115: function (e, a, t) {
      'use strict';
      var l = t(48),
        n = t(0),
        r = t(416),
        c = t(118);
      const o = ({ $theme: e }) => e.typography.fontBold14;
      a.a = (e) => {
        let a = Object.assign({}, e);
        return n.createElement(
          r.a,
          Object.assign(
            {
              overrides: {
                SelectArrow: () => n.createElement(c.a, null),
                Popover: {
                  props: { overrides: { Body: { style: { zIndex: 1 } } } },
                },
                Placeholder: {
                  style: ({ $theme: e }) =>
                    Object(l.a)({ color: e.colors.textDark }, o({ $theme: e })),
                },
                SingleValue: {
                  style: ({ $theme: e }) =>
                    Object(l.a)(
                      Object(l.a)({}, o({ $theme: e })),
                      {},
                      { color: e.colors.textDark, lineHeight: '1.5' }
                    ),
                },
                DropdownListItem: {
                  style: ({ $theme: e }) => ({
                    fontSize: '14px',
                    fontWeight: '700',
                    color: e.colors.textDark,
                  }),
                },
                OptionContent: {
                  style: ({ $theme: e, $selected: a }) =>
                    Object(l.a)(
                      Object(l.a)({}, e.typography.fontBold14),
                      {},
                      { color: a ? e.colors.textDark : e.colors.textNormal }
                    ),
                },
                DropdownOption: {
                  style: ({ $theme: e }) => ({
                    fontSize: '14px',
                    fontWeight: '700',
                    color: e.colors.textDark,
                  }),
                },
              },
            },
            a
          )
        );
      };
    },
    118: function (e, a, t) {
      'use strict';
      t.d(a, 'a', function () {
        return r;
      });
      var l = t(0),
        n = t.n(l);
      const r = ({
        color: e = 'currentColor',
        width: a = '18px',
        height: t = '18px',
      }) =>
        n.a.createElement(
          'svg',
          {
            xmlns: 'http://www.w3.org/2000/svg',
            width: a,
            height: t,
            viewBox: '0 0 10 5',
          },
          n.a.createElement('path', {
            'data-name': '_ionicons_svg_md-arrow-dropdown (2)',
            d: 'M128,192l5,5,5-5Z',
            transform: 'translate(-128 -192)',
            fill: e,
          })
        );
    },
    121: function (e, a, t) {
      'use strict';
      t.d(a, 'a', function () {
        return r;
      }),
        t.d(a, 'i', function () {
          return c;
        }),
        t.d(a, 'd', function () {
          return o;
        }),
        t.d(a, 'j', function () {
          return m;
        }),
        t.d(a, 'l', function () {
          return i;
        }),
        t.d(a, 'h', function () {
          return s;
        }),
        t.d(a, 'e', function () {
          return h;
        }),
        t.d(a, 'c', function () {
          return d;
        }),
        t.d(a, 'k', function () {
          return p;
        }),
        t.d(a, 'f', function () {
          return u;
        }),
        t.d(a, 'b', function () {
          return f;
        }),
        t.d(a, 'm', function () {
          return E;
        }),
        t.d(a, 'g', function () {
          return g;
        });
      t(58);
      var l = t(0),
        n = t.n(l);
      const r = ({
          color: e = 'currentColor',
          width: a = '18px',
          height: t = '18px',
        }) =>
          n.a.createElement(
            'svg',
            {
              xmlns: 'http://www.w3.org/2000/svg',
              width: a,
              height: t,
              viewBox: '0 0 18 18',
            },
            n.a.createElement(
              'g',
              { 'data-name': 'Group 15', fill: e },
              n.a.createElement('path', {
                'data-name': 'Path 53',
                d:
                  'M17.356 0H.643A.643.643 0 000 .643v10.925a.643.643 0 00.643.643h16.714a.643.643 0 00.643-.643V.643A.644.644 0 0017.356 0zM2.431 11.27a1.306 1.306 0 111.306-1.306 1.306 1.306 0 01-1.306 1.306zm0-3.857a1.305 1.305 0 11.924-.382 1.306 1.306 0 01-.924.382zm0-3.857a1.306 1.306 0 11.925-.384 1.306 1.306 0 01-.925.384zm3.218 7.714a1.307 1.307 0 11.922-.382 1.306 1.306 0 01-.922.382zm0-3.857a1.307 1.307 0 11.922-.381 1.306 1.306 0 01-.922.381zm0-3.857a1.307 1.307 0 11.92-.385 1.306 1.306 0 01-.92.385zm3.218 7.714a1.09 1.09 0 10-.008 0zm0-3.857a1.091 1.091 0 10-.008 0zm0-3.857a1.091 1.091 0 10-.008 0zm3.218 7.714a1.1 1.1 0 10-.012 0zm-1.306-5.166a.525.525 0 11-.012 0zm1.306-2.551a1.571 1.571 0 10-.012 0zm4.8 7c0 .355-.412.643-.921.643H15.5c-.508 0-.921-.288-.921-.643V1.768c0-.355.412-.643.921-.643h.461c.508 0 .921.288.921.643z',
              }),
              n.a.createElement('path', {
                'data-name': 'Path 54',
                d:
                  'M16.348 2.78c-.318-1.052-.434-.893-.476-1.186-.013-.1-.346-.095-.351 0-.017.261-.15.378-.365.888-.236.562-.193 1 0 1.186h-.069v2.52a.274.274 0 00-.085.2v4.2h1.445v-4.2a.273.273 0 00-.085-.2V3.684c.106-.13.143-.393-.014-.904zm-.29 3.134h-.672V3.971h.67z',
              }),
              n.a.createElement('path', {
                'data-name': 'Path 55',
                d: 'M2.43 1.246a1 1 0 101 1 1 1 0 00-1-1z',
              }),
              n.a.createElement('path', {
                'data-name': 'Path 56',
                d: 'M12.073 1.246a1 1 0 101 1 1 1 0 00-1-1z',
              }),
              n.a.createElement('path', {
                'data-name': 'Path 57',
                d: 'M8.859 5.103a1 1 0 101 1 1 1 0 00-1-1z',
              }),
              n.a.createElement('path', {
                'data-name': 'Path 58',
                d: 'M5.645 8.96a1 1 0 101 1 1 1 0 00-1-1z',
              }),
              n.a.createElement('path', {
                'data-name': 'Path 59',
                d: 'M12.073 8.96a1 1 0 101 1 1 1 0 00-1-1z',
              })
            )
          ),
        c = ({ color: e = 'currentColor', width: a = 12, height: t = 12 }) =>
          n.a.createElement(
            'span',
            null,
            n.a.createElement(
              'svg',
              {
                xmlns: 'http://www.w3.org/2000/svg',
                width: a,
                height: t,
                viewBox: '0 0 12 12',
              },
              n.a.createElement('path', {
                id: '_ionicons_svg_ios-add_7_',
                'data-name': '_ionicons_svg_ios-add (7)',
                d:
                  'M138.753,132.753h-4.506v-4.506a.747.747,0,1,0-1.494,0v4.506h-4.506a.747.747,0,0,0,0,1.494h4.506v4.506a.747.747,0,1,0,1.494,0v-4.506h4.506a.747.747,0,1,0,0-1.494Z',
                transform: 'translate(-127.5 -127.5)',
                fill: e,
              })
            )
          ),
        o = ({
          color: e = 'currentColor',
          width: a = '15px',
          height: t = '15px',
        }) =>
          n.a.createElement(
            'svg',
            {
              xmlns: 'http://www.w3.org/2000/svg',
              width: a,
              height: t,
              viewBox: '0 0 15 15',
            },
            n.a.createElement(
              'g',
              {
                id: 'Group_2583',
                'data-name': 'Group 2583',
                transform: 'translate(0 0)',
              },
              n.a.createElement('path', {
                id: 'Path_2129',
                'data-name': 'Path 2129',
                d:
                  'M1667.731,877.683a3.066,3.066,0,1,1-3.067-3.068A3.061,3.061,0,0,1,1667.731,877.683Z',
                transform: 'translate(-1652.731 -865.747)',
                fill: e,
              }),
              n.a.createElement('path', {
                id: 'Path_2130',
                'data-name': 'Path 2130',
                d:
                  'M1471.213,874.615a3.066,3.066,0,1,1-3.072,3.064A3.06,3.06,0,0,1,1471.213,874.615Z',
                transform: 'translate(-1468.141 -865.747)',
                fill: e,
              }),
              n.a.createElement('path', {
                id: 'Path_2131',
                'data-name': 'Path 2131',
                d:
                  'M1474.272,684.227a3.066,3.066,0,1,1-3.044-3.075A3.063,3.063,0,0,1,1474.272,684.227Z',
                transform: 'translate(-1468.14 -681.152)',
                fill: e,
              }),
              n.a.createElement('path', {
                id: 'Path_2132',
                'data-name': 'Path 2132',
                d:
                  'M1674.436,691.284q0,1.143,0,2.286c0,.335-.107.441-.443.441h-4.572c-.326,0-.438-.108-.438-.43q0-2.295,0-4.589c0-.323.111-.433.435-.433h4.572c.344,0,.445.105.446.455Q1674.436,690.149,1674.436,691.284Z',
                transform: 'translate(-1659.775 -688.219)',
                fill: e,
              })
            )
          ),
        m = ({
          color: e = 'currentColor',
          width: a = '16px',
          height: t = '13px',
        }) =>
          n.a.createElement(
            'svg',
            {
              xmlns: 'http://www.w3.org/2000/svg',
              width: a,
              height: t,
              viewBox: '0 0 15.6 13',
            },
            n.a.createElement('path', {
              id: 'Path_154',
              'data-name': 'Path 154',
              d:
                'M299.593,418.656l-3.148-4.494a.9.9,0,0,0-.572-.272.658.658,0,0,0-.573.272l-3.148,4.494h-3.435a.66.66,0,0,0-.716.677v.207l1.789,6.327a1.448,1.448,0,0,0,1.36,1.023h9.3a1.366,1.366,0,0,0,1.359-1.023l1.789-6.327v-.207a.659.659,0,0,0-.716-.677Zm-5.87,0,2.149-3,2.145,3Zm2.149,5.443a1.362,1.362,0,1,1,1.428-1.363,1.4,1.4,0,0,1-1.428,1.363Zm0,0',
              transform: 'translate(-288 -413.89)',
              fill: e,
            })
          ),
        i = ({
          color: e = 'currentColor',
          width: a = '13px',
          height: t = '13px',
        }) =>
          n.a.createElement(
            'svg',
            {
              xmlns: 'http://www.w3.org/2000/svg',
              width: a,
              height: t,
              viewBox: '0 0 12.958 13',
            },
            n.a.createElement('path', {
              id: 'Path_321',
              'data-name': 'Path 321',
              d:
                'M1.015,10.3,1,4.388a.4.4,0,0,1,.564-.373l5.379,2.3a.4.4,0,0,1,.246.371L7.2,12.594a.4.4,0,0,1-.564.373l-5.379-2.3A.4.4,0,0,1,1.015,10.3Zm12.323-5.63L8.375,6.816l.013,5.468,4.963-2.15-.013-5.468m.2-.713a.405.405,0,0,1,.405.4l.014,5.908a.4.4,0,0,1-.244.372L8.347,12.963a.4.4,0,0,1-.565-.37L7.768,6.684a.4.4,0,0,1,.244-.372l5.368-2.325a.4.4,0,0,1,.16-.034ZM7.44.626l-5.149,2.3L7.451,5.2,12.6,2.9,7.44.626m0-.626A.4.4,0,0,1,7.6.034l5.659,2.495a.4.4,0,0,1,0,.74L7.617,5.79a.4.4,0,0,1-.328,0L1.63,3.3a.4.4,0,0,1,0-.74L7.275.035A.4.4,0,0,1,7.439,0Z',
              transform: 'translate(-1.001)',
              fill: e,
            })
          ),
        s = ({
          color: e = 'currentColor',
          width: a = '11px',
          height: t = '13px',
        }) =>
          n.a.createElement(
            'svg',
            {
              xmlns: 'http://www.w3.org/2000/svg',
              width: a,
              height: t,
              viewBox: '0 0 11.321 13',
            },
            n.a.createElement(
              'g',
              {
                id: 'Group_1087',
                'data-name': 'Group 1087',
                transform: 'translate(0)',
              },
              n.a.createElement(
                'g',
                { id: 'Group_1086', 'data-name': 'Group 1086' },
                n.a.createElement('path', {
                  id: 'Path_322',
                  'data-name': 'Path 322',
                  d: 'M274.867.365A.733.733,0,0,0,274.234,0h-2.718V3.215h5Z',
                  transform: 'translate(-265.461)',
                  fill: e,
                }),
                n.a.createElement('path', {
                  id: 'Path_323',
                  'data-name': 'Path 323',
                  d:
                    'M48.821,0H46.077a.733.733,0,0,0-.633.366L43.8,3.215h5.02V0Z',
                  transform: 'translate(-43.528)',
                  fill: e,
                }),
                n.a.createElement('path', {
                  id: 'Path_324',
                  'data-name': 'Path 324',
                  d:
                    'M33.057,156.648v8.127a.9.9,0,0,0,.9.9h9.529a.9.9,0,0,0,.9-.9v-8.127Zm7.39,3.418-1.971,1.971a.38.38,0,0,1-.539,0l-.924-.924a.381.381,0,1,1,.539-.539l.654.654,1.7-1.7a.381.381,0,1,1,.539.539Z',
                  transform: 'translate(-33.057 -152.671)',
                  fill: e,
                })
              )
            )
          ),
        h = ({
          color: e = 'currentColor',
          width: a = '14px',
          height: t = '12px',
        }) =>
          n.a.createElement(
            'svg',
            {
              xmlns: 'http://www.w3.org/2000/svg',
              width: a,
              height: t,
              viewBox: '0 0 13.867 12.133',
            },
            n.a.createElement(
              'g',
              {
                id: 'Group_2932',
                'data-name': 'Group 2932',
                transform: 'translate(0 0)',
              },
              n.a.createElement('path', {
                id: 'Path_325',
                'data-name': 'Path 325',
                d: 'M7,3V0H5V3H4L6,5.5,8,3Z',
                transform: 'translate(1 4)',
                fill: e,
              }),
              n.a.createElement('path', {
                id: 'Path_326',
                'data-name': 'Path 326',
                d:
                  'M11.267,1H9.533v.867H10.66L12.913,8.8H9.533v1.733h-5.2V8.8H.953L3.207,1.867H4.333V1H2.6L0,8.8v4.333H13.867V8.8Z',
                transform: 'translate(0 -1)',
                fill: e,
              })
            )
          ),
        d = ({
          color: e = 'currentColor',
          width: a = '11px',
          height: t = '13px',
        }) =>
          n.a.createElement(
            'svg',
            {
              id: 'Group_2930',
              'data-name': 'Group 2930',
              xmlns: 'http://www.w3.org/2000/svg',
              width: a,
              height: t,
              viewBox: '0 0 11.426 13',
            },
            n.a.createElement(
              'g',
              { id: 'voucher' },
              n.a.createElement('path', {
                id: 'Path_3616',
                'data-name': 'Path 3616',
                d:
                  'M116.344,226.9a1.513,1.513,0,0,0-.27.027l-.982-1.113,1.958-2.219a1.526,1.526,0,0,0-.135-2.15l-2.839,3.218,0,0-.632.716h-.769l.386.439-.984,1.115a1.523,1.523,0,1,0,1.222,1.493,1.5,1.5,0,0,0-.085-.478l.862-.977.839.952a1.5,1.5,0,0,0-.093.5,1.523,1.523,0,1,0,1.523-1.523Zm-4.57,2.285a.762.762,0,1,1,.762-.762A.764.764,0,0,1,111.774,229.182Zm4.57,0a.762.762,0,1,1,.762-.762A.764.764,0,0,1,116.344,229.182Zm0,0',
                transform: 'translate(-107.965 -216.944)',
                fill: e,
              }),
              n.a.createElement('path', {
                id: 'Path_3617',
                'data-name': 'Path 3617',
                d:
                  'M4.605,0V1.574H3.844V0H-2.25V7.668H2.884l.96-1.089v-1.2h.762v.335L6.632,3.425l.571.5A2.287,2.287,0,0,1,7.409,7.15l-.457.518H9.176V0ZM1.178,3.479A1.141,1.141,0,0,1,1.559,5.7v.8H.8V5.7A1.139,1.139,0,0,1,.035,4.621H.8a.381.381,0,1,0,.381-.381A1.141,1.141,0,0,1,.8,2.024v-.83h.762v.83A1.139,1.139,0,0,1,2.32,3.1H1.559a.381.381,0,1,0-.381.381ZM4.605,4.621H3.844V3.859h.762Zm0-1.523H3.844V2.336h.762Zm0,0',
                transform: 'translate(2.25)',
                fill: e,
              })
            )
          ),
        p = ({
          color: e = 'currentColor',
          width: a = '13px',
          height: t = '13px',
        }) =>
          n.a.createElement(
            'svg',
            {
              xmlns: 'http://www.w3.org/2000/svg',
              width: a,
              height: t,
              viewBox: '0 0 13 13',
            },
            n.a.createElement('path', {
              id: '_005-repairing-service',
              'data-name': '005-repairing-service',
              d:
                'M12.961,5.778a.423.423,0,0,0-.418-.32,1.435,1.435,0,0,1-.982-2.5.361.361,0,0,0,.04-.49,6.435,6.435,0,0,0-1.03-1.04.362.362,0,0,0-.494.04,1.5,1.5,0,0,1-1.621.364A1.444,1.444,0,0,1,7.577.422a.361.361,0,0,0-.319-.38A6.487,6.487,0,0,0,5.8.039a.362.362,0,0,0-.322.372A1.446,1.446,0,0,1,4.584,1.8a1.5,1.5,0,0,1-1.609-.367.362.362,0,0,0-.491-.041,6.462,6.462,0,0,0-1.051,1.04.362.362,0,0,0,.039.494,1.44,1.44,0,0,1,.363,1.622,1.5,1.5,0,0,1-1.414.879.354.354,0,0,0-.376.319,6.516,6.516,0,0,0,0,1.478.43.43,0,0,0,.426.32,1.426,1.426,0,0,1,1.338.891,1.446,1.446,0,0,1-.364,1.607.361.361,0,0,0-.039.49,6.458,6.458,0,0,0,1.028,1.04.361.361,0,0,0,.495-.039,1.5,1.5,0,0,1,1.62-.364,1.442,1.442,0,0,1,.88,1.411.361.361,0,0,0,.319.38,6.472,6.472,0,0,0,1.462,0,.362.362,0,0,0,.322-.372,1.445,1.445,0,0,1,.89-1.386,1.5,1.5,0,0,1,1.61.366.363.363,0,0,0,.491.041,6.47,6.47,0,0,0,1.051-1.04.361.361,0,0,0-.039-.494,1.44,1.44,0,0,1-.364-1.621,1.455,1.455,0,0,1,1.33-.881l.08,0a.362.362,0,0,0,.38-.319A6.487,6.487,0,0,0,12.961,5.778ZM6.5,10.247A3.747,3.747,0,1,1,9.719,8.421L8.078,6.78A2.3,2.3,0,0,0,5.356,3.666a.26.26,0,0,0-.18.181.254.254,0,0,0,.072.248s.81.816,1.081,1.087a.168.168,0,0,1,.024.121l0,.018a5.181,5.181,0,0,1-.123.793l-.017.017-.018.018a5.107,5.107,0,0,1-.805.125v0l-.014,0H5.361a.173.173,0,0,1-.125-.053c-.282-.282-1.06-1.055-1.06-1.055a.265.265,0,0,0-.189-.084.257.257,0,0,0-.242.2A2.3,2.3,0,0,0,6.859,8L8.518,9.657A3.728,3.728,0,0,1,6.5,10.247Z',
              transform: 'translate(-0.002 0.001)',
              fill: e,
            })
          ),
        u = ({
          color: e = 'currentColor',
          width: a = '16px',
          height: t = '13px',
        }) =>
          n.a.createElement(
            'svg',
            {
              xmlns: 'http://www.w3.org/2000/svg',
              width: a,
              height: t,
              viewBox: '0 0 15.999 13',
            },
            n.a.createElement(
              'defs',
              null,
              n.a.createElement(
                'filter',
                {
                  id: 'Path_319',
                  x: '4.583',
                  y: '1.792',
                  width: '11.416',
                  height: '10.333',
                  filterUnits: 'userSpaceOnUse',
                },
                n.a.createElement('feGaussianBlur', {
                  stdDeviation: '1',
                  result: 'blur',
                }),
                n.a.createElement('feFlood', { floodOpacity: '0.161' }),
                n.a.createElement('feComposite', {
                  operator: 'in',
                  in2: 'blur',
                }),
                n.a.createElement('feComposite', { in: 'SourceGraphic' })
              )
            ),
            n.a.createElement(
              'g',
              {
                id: '_007-logout',
                'data-name': '007-logout',
                transform: 'translate(0)',
              },
              n.a.createElement(
                'g',
                { id: 'Group_1075', 'data-name': 'Group 1075' },
                n.a.createElement(
                  'g',
                  {
                    id: 'Group_1074',
                    'data-name': 'Group 1074',
                    transform: 'translate(0)',
                  },
                  n.a.createElement(
                    'g',
                    {
                      transform: 'matrix(1, 0, 0, 1, 0, 0)',
                      filter: 'url(#Path_319)',
                    },
                    n.a.createElement('path', {
                      id: 'Path_319-2',
                      'data-name': 'Path 319',
                      d:
                        'M304.055,151.3a.547.547,0,0,0-.118-.177l-1.624-1.624a.542.542,0,0,0-.766.766l.7.7h-3.026a.542.542,0,1,0,0,1.083h3.026l-.7.7a.542.542,0,1,0,.766.766l1.624-1.624a.536.536,0,0,0,.118-.177A.542.542,0,0,0,304.055,151.3Z',
                      transform: 'translate(-291.1 -145.55)',
                      fill: e,
                    })
                  ),
                  n.a.createElement('path', {
                    id: 'Path_320',
                    'data-name': 'Path 320',
                    d:
                      'M9.222,7.583a.542.542,0,0,0-.542.542v2.708H6.514V2.167a.542.542,0,0,0-.386-.519L4.247,1.083H8.681V3.792a.542.542,0,0,0,1.083,0V.542A.542.542,0,0,0,9.222,0H.556A.483.483,0,0,0,.5.01.535.535,0,0,0,.27.09C.258.1.244.1.232.107S.226.116.222.12A.537.537,0,0,0,.078.291.442.442,0,0,0,.063.336.514.514,0,0,0,.02.463a.337.337,0,0,0,0,.047C.021.521.014.531.014.542V11.375a.541.541,0,0,0,.435.531l5.417,1.083A.5.5,0,0,0,5.972,13a.542.542,0,0,0,.542-.542v-.542H9.222a.542.542,0,0,0,.542-.542V8.125A.542.542,0,0,0,9.222,7.583Z',
                    transform: 'translate(-0.014)',
                    fill: e,
                  })
                )
              )
            )
          ),
        f = ({
          color: e = 'currentColor',
          width: a = '10px',
          height: t = '5px',
        }) =>
          n.a.createElement(
            'svg',
            {
              xmlns: 'http://www.w3.org/2000/svg',
              width: a,
              height: t,
              viewBox: '0 0 10 5',
            },
            n.a.createElement('path', {
              id: '_ionicons_svg_md-arrow-dropdown_2_',
              'data-name': '_ionicons_svg_md-arrow-dropdown (2)',
              d: 'M128,192l5,5,5-5Z',
              transform: 'translate(138 197) rotate(180)',
              fill: e,
            })
          ),
        E = ({
          color: e = 'currentColor',
          width: a = '56px',
          height: t = '56px',
        }) =>
          n.a.createElement(
            'svg',
            {
              xmlns: 'http://www.w3.org/2000/svg',
              width: a,
              height: t,
              viewBox: '0 0 56 56',
            },
            n.a.createElement(
              'g',
              { id: 'development', transform: 'translate(-0.001)' },
              n.a.createElement(
                'g',
                {
                  id: 'Group_2845',
                  'data-name': 'Group 2845',
                  transform: 'translate(0.001)',
                },
                n.a.createElement(
                  'g',
                  { id: 'Group_2844', 'data-name': 'Group 2844' },
                  n.a.createElement('path', {
                    id: 'Path_2442',
                    'data-name': 'Path 2442',
                    d:
                      'M20.211,11.444l-1.1-.95v-.456l1.1-.95a.935.935,0,0,0,.3-.9,10.074,10.074,0,0,0-.727-2.166.933.933,0,0,0-.762-.537l-1.438-.131q-.146-.211-.3-.41l.31-1.355a.935.935,0,0,0-.287-.9,10.539,10.539,0,0,0-1.877-1.344.934.934,0,0,0-.924.007l-1.237.718c-.167-.057-.338-.111-.516-.16L12.183.567A.934.934,0,0,0,11.324,0H9.212a.933.933,0,0,0-.859.567L7.782,1.909c-.178.049-.349.1-.516.16L6.029,1.351A.938.938,0,0,0,5.1,1.343,10.575,10.575,0,0,0,3.228,2.687a.933.933,0,0,0-.287.9l.31,1.354c-.1.133-.206.271-.3.411L1.51,5.488a.933.933,0,0,0-.762.537A10.066,10.066,0,0,0,.021,8.191a.934.934,0,0,0,.3.9l1.1.95v.456l-1.1.95a.935.935,0,0,0-.3.9,10.074,10.074,0,0,0,.727,2.166.933.933,0,0,0,.762.537l1.438.131q.146.211.3.41l-.31,1.355a.933.933,0,0,0,.287.9A10.455,10.455,0,0,0,5.1,19.189a.931.931,0,0,0,.923-.007l1.238-.717c.167.057.338.111.516.16l.571,1.342a.934.934,0,0,0,.859.567h2.113a.933.933,0,0,0,.859-.567l.571-1.342c.178-.049.349-.1.516-.16l1.237.718a.936.936,0,0,0,1.012-.048l1.71-1.224a.934.934,0,0,0,.366-.968l-.31-1.354c.1-.133.206-.271.3-.411l1.438-.131a.933.933,0,0,0,.762-.537,10.072,10.072,0,0,0,.727-2.166A.935.935,0,0,0,20.211,11.444Zm-2.646.185.994.855q-.107.376-.256.753l-1.333.121a.935.935,0,0,0-.709.439,6.84,6.84,0,0,1-.688.931.933.933,0,0,0-.21.827l.274,1.2-.714.511-1.1-.638A.939.939,0,0,0,13,16.572a6.962,6.962,0,0,1-1.127.352.933.933,0,0,0-.651.544l-.511,1.2h-.88l-.511-1.2a.929.929,0,0,0-.651-.544,6.989,6.989,0,0,1-1.127-.352.932.932,0,0,0-.826.055l-1.146.664q-.349-.224-.68-.486l.286-1.25a.934.934,0,0,0-.209-.826,6.863,6.863,0,0,1-.689-.931.935.935,0,0,0-.709-.439l-1.333-.121q-.148-.377-.256-.753l.994-.855a.935.935,0,0,0,.324-.707V9.611A.935.935,0,0,0,2.971,8.9l-.994-.856q.107-.375.256-.752l1.332-.121a.935.935,0,0,0,.709-.439A6.839,6.839,0,0,1,4.963,5.8a.933.933,0,0,0,.21-.827l-.286-1.25q.33-.261.681-.487l1.145.664a.942.942,0,0,0,.826.055,6.962,6.962,0,0,1,1.127-.352.933.933,0,0,0,.651-.544l.511-1.2h.88l.511,1.2a.929.929,0,0,0,.651.544A6.977,6.977,0,0,1,13,3.961a.936.936,0,0,0,.826-.055l1.145-.664q.35.226.681.487l-.286,1.25a.934.934,0,0,0,.209.826,6.864,6.864,0,0,1,.689.931.935.935,0,0,0,.709.439L18.3,7.3q.148.377.256.753l-.994.855a.935.935,0,0,0-.324.707v1.311A.935.935,0,0,0,17.565,11.629Z',
                    transform: 'translate(-0.001)',
                    fill: e,
                  })
                )
              ),
              n.a.createElement(
                'g',
                {
                  id: 'Group_2847',
                  'data-name': 'Group 2847',
                  transform: 'translate(5.601 5.6)',
                },
                n.a.createElement(
                  'g',
                  { id: 'Group_2846', 'data-name': 'Group 2846' },
                  n.a.createElement('path', {
                    id: 'Path_2443',
                    'data-name': 'Path 2443',
                    d:
                      'M52.669,48a4.667,4.667,0,1,0,4.667,4.667A4.667,4.667,0,0,0,52.669,48Zm0,7.467a2.8,2.8,0,1,1,2.8-2.8A2.8,2.8,0,0,1,52.669,55.467Z',
                    transform: 'translate(-48.002 -48)',
                    fill: e,
                  })
                )
              ),
              n.a.createElement(
                'g',
                {
                  id: 'Group_2849',
                  'data-name': 'Group 2849',
                  transform: 'translate(1.868 46.667)',
                },
                n.a.createElement(
                  'g',
                  { id: 'Group_2848', 'data-name': 'Group 2848' },
                  n.a.createElement('path', {
                    id: 'Path_2444',
                    'data-name': 'Path 2444',
                    d:
                      'M24.4,400H16.935a.933.933,0,0,0-.933.933h0V408.4a.933.933,0,0,0,.933.933H24.4a.933.933,0,0,0,.933-.933h0v-7.467A.933.933,0,0,0,24.4,400Zm-.934,7.467h-5.6v-5.6h5.6Z',
                    transform: 'translate(-16.002 -400)',
                    fill: e,
                  })
                )
              ),
              n.a.createElement(
                'g',
                {
                  id: 'Group_2851',
                  'data-name': 'Group 2851',
                  transform: 'translate(15.868 43.867)',
                },
                n.a.createElement(
                  'g',
                  { id: 'Group_2850', 'data-name': 'Group 2850' },
                  n.a.createElement('path', {
                    id: 'Path_2445',
                    'data-name': 'Path 2445',
                    d:
                      'M144.4,376h-7.467a.933.933,0,0,0-.933.933h0V387.2a.933.933,0,0,0,.933.933H144.4a.933.933,0,0,0,.933-.933h0V376.933A.933.933,0,0,0,144.4,376Zm-.934,10.267h-5.6v-8.4h5.6Z',
                    transform: 'translate(-136.002 -376)',
                    fill: e,
                  })
                )
              ),
              n.a.createElement(
                'g',
                {
                  id: 'Group_2853',
                  'data-name': 'Group 2853',
                  transform: 'translate(29.868 40.133)',
                },
                n.a.createElement(
                  'g',
                  { id: 'Group_2852', 'data-name': 'Group 2852' },
                  n.a.createElement('path', {
                    id: 'Path_2446',
                    'data-name': 'Path 2446',
                    d:
                      'M264.4,344h-7.467a.933.933,0,0,0-.933.933h0v14a.933.933,0,0,0,.933.933H264.4a.933.933,0,0,0,.933-.933h0v-14A.933.933,0,0,0,264.4,344Zm-.934,14h-5.6V345.867h5.6Z',
                    transform: 'translate(-256.002 -344)',
                    fill: e,
                  })
                )
              ),
              n.a.createElement(
                'g',
                {
                  id: 'Group_2855',
                  'data-name': 'Group 2855',
                  transform: 'translate(43.868 31.733)',
                },
                n.a.createElement(
                  'g',
                  { id: 'Group_2854', 'data-name': 'Group 2854' },
                  n.a.createElement('path', {
                    id: 'Path_2447',
                    'data-name': 'Path 2447',
                    d:
                      'M384.4,272h-7.467a.933.933,0,0,0-.933.933h0v22.4a.933.933,0,0,0,.933.933H384.4a.933.933,0,0,0,.933-.933h0v-22.4A.933.933,0,0,0,384.4,272Zm-.934,22.4h-5.6V273.867h5.6Z',
                    transform: 'translate(-376.002 -272)',
                    fill: e,
                  })
                )
              ),
              n.a.createElement(
                'g',
                {
                  id: 'Group_2857',
                  'data-name': 'Group 2857',
                  transform: 'translate(1.356 18.702)',
                },
                n.a.createElement(
                  'g',
                  { id: 'Group_2856', 'data-name': 'Group 2856' },
                  n.a.createElement('path', {
                    id: 'Path_2448',
                    'data-name': 'Path 2448',
                    d:
                      'M42.263,162.177l-.017-.005-6.533-1.867-.513,1.8,4.574,1.307L11.611,181.889l1.024,1.56,27.7-18.179L38.8,170.262l1.784.549,2.3-7.467A.934.934,0,0,0,42.263,162.177Z',
                    transform: 'translate(-11.611 -160.305)',
                    fill: e,
                  })
                )
              ),
              n.a.createElement(
                'g',
                {
                  id: 'Group_2859',
                  'data-name': 'Group 2859',
                  transform: 'translate(36.401 3.733)',
                },
                n.a.createElement(
                  'g',
                  { id: 'Group_2858', 'data-name': 'Group 2858' },
                  n.a.createElement('path', {
                    id: 'Path_2449',
                    'data-name': 'Path 2449',
                    d:
                      'M326.654,37.255a.933.933,0,0,0-.511-.255l-4.022-.615-1.807-3.85a.933.933,0,0,0-1.69,0l-1.807,3.85L312.794,37a.933.933,0,0,0-.527,1.574l2.938,3.011-.695,4.263a.933.933,0,0,0,1.373.967l3.586-1.982,3.586,1.982a.933.933,0,0,0,1.373-.967l-.695-4.263,2.938-3.011A.933.933,0,0,0,326.654,37.255Zm-4.587,3.364a.932.932,0,0,0-.253.8l.462,2.831-2.356-1.3a.933.933,0,0,0-.9,0l-2.356,1.3.462-2.831a.932.932,0,0,0-.253-.8l-2-2.048,2.719-.416a.931.931,0,0,0,.7-.526l1.174-2.5,1.174,2.5a.932.932,0,0,0,.7.526l2.719.416Z',
                    transform: 'translate(-312.002 -31.998)',
                    fill: e,
                  })
                )
              ),
              n.a.createElement(
                'g',
                {
                  id: 'Group_2861',
                  'data-name': 'Group 2861',
                  transform: 'translate(41.774 22.245)',
                },
                n.a.createElement(
                  'g',
                  { id: 'Group_2860', 'data-name': 'Group 2860' },
                  n.a.createElement('path', {
                    id: 'Path_2450',
                    'data-name': 'Path 2450',
                    d:
                      'M361.942,190.672a10.25,10.25,0,0,1-1.778.155h-.014a10.286,10.286,0,0,1-1.773-.153l-.321,1.839a18.6,18.6,0,0,0,2.109.18,12.1,12.1,0,0,0,2.1-.184Z',
                    transform: 'translate(-358.057 -190.672)',
                    fill: e,
                  })
                )
              ),
              n.a.createElement(
                'g',
                {
                  id: 'Group_2863',
                  'data-name': 'Group 2863',
                  transform: 'translate(45.621 0.176)',
                },
                n.a.createElement(
                  'g',
                  { id: 'Group_2862', 'data-name': 'Group 2862' },
                  n.a.createElement('path', {
                    id: 'Path_2451',
                    'data-name': 'Path 2451',
                    d:
                      'M391.342,1.508l-.316,1.839a10.177,10.177,0,0,1,3.351,1.208l.929-1.619A12.016,12.016,0,0,0,391.342,1.508Z',
                    transform: 'translate(-391.026 -1.508)',
                    fill: e,
                  })
                )
              ),
              n.a.createElement(
                'g',
                {
                  id: 'Group_2865',
                  'data-name': 'Group 2865',
                  transform: 'translate(37.772 0.187)',
                },
                n.a.createElement(
                  'g',
                  { id: 'Group_2864', 'data-name': 'Group 2864' },
                  n.a.createElement('path', {
                    id: 'Path_2452',
                    'data-name': 'Path 2452',
                    d:
                      'M327.708,1.6a12.054,12.054,0,0,0-3.955,1.453l.94,1.613a10.191,10.191,0,0,1,3.344-1.229Z',
                    transform: 'translate(-323.753 -1.602)',
                    fill: e,
                  })
                )
              ),
              n.a.createElement(
                'g',
                {
                  id: 'Group_2867',
                  'data-name': 'Group 2867',
                  transform: 'translate(49.006 18.729)',
                },
                n.a.createElement(
                  'g',
                  { id: 'Group_2866', 'data-name': 'Group 2866' },
                  n.a.createElement('path', {
                    id: 'Path_2453',
                    'data-name': 'Path 2453',
                    d:
                      'M422.772,160.531a10.3,10.3,0,0,1-2.73,2.294l.936,1.615a12.15,12.15,0,0,0,3.223-2.708Z',
                    transform: 'translate(-420.042 -160.531)',
                    fill: e,
                  })
                )
              ),
              n.a.createElement(
                'g',
                {
                  id: 'Group_2869',
                  'data-name': 'Group 2869',
                  transform: 'translate(53.519 12.099)',
                },
                n.a.createElement(
                  'g',
                  { id: 'Group_2868', 'data-name': 'Group 2868' },
                  n.a.createElement('path', {
                    id: 'Path_2454',
                    'data-name': 'Path 2454',
                    d:
                      'M460.795,103.7l-1.454.035a10.241,10.241,0,0,1-.616,3.512l1.755.638a12.138,12.138,0,0,0,.727-4.177Z',
                    transform: 'translate(-458.725 -103.703)',
                    fill: e,
                  })
                )
              ),
              n.a.createElement(
                'g',
                {
                  id: 'Group_2871',
                  'data-name': 'Group 2871',
                  transform: 'translate(51.711 4.302)',
                },
                n.a.createElement(
                  'g',
                  { id: 'Group_2870', 'data-name': 'Group 2870' },
                  n.a.createElement('path', {
                    id: 'Path_2455',
                    'data-name': 'Path 2455',
                    d:
                      'M444.65,36.875l-1.425,1.2a10.223,10.223,0,0,1,1.794,3.078l1.752-.645A12.071,12.071,0,0,0,444.65,36.875Z',
                    transform: 'translate(-443.225 -36.875)',
                    fill: e,
                  })
                )
              ),
              n.a.createElement(
                'g',
                {
                  id: 'Group_2873',
                  'data-name': 'Group 2873',
                  transform: 'translate(32.455 4.355)',
                },
                n.a.createElement(
                  'g',
                  { id: 'Group_2872', 'data-name': 'Group 2872' },
                  n.a.createElement('path', {
                    id: 'Path_2456',
                    'data-name': 'Path 2456',
                    d:
                      'M280.274,37.328a12.093,12.093,0,0,0-2.1,3.652l1.755.634a10.223,10.223,0,0,1,1.777-3.089Z',
                    transform: 'translate(-278.174 -37.328)',
                    fill: e,
                  })
                )
              ),
              n.a.createElement(
                'g',
                {
                  id: 'Group_2875',
                  'data-name': 'Group 2875',
                  transform: 'translate(34.585 18.743)',
                },
                n.a.createElement(
                  'g',
                  { id: 'Group_2874', 'data-name': 'Group 2874' },
                  n.a.createElement('path', {
                    id: 'Path_2457',
                    'data-name': 'Path 2457',
                    d:
                      'M297.859,160.656l-1.427,1.2a12.154,12.154,0,0,0,3.228,2.7l.933-1.617A10.286,10.286,0,0,1,297.859,160.656Z',
                    transform: 'translate(-296.432 -160.656)',
                    fill: e,
                  })
                )
              ),
              n.a.createElement(
                'g',
                {
                  id: 'Group_2877',
                  'data-name': 'Group 2877',
                  transform: 'translate(31.735 12.154)',
                },
                n.a.createElement(
                  'g',
                  { id: 'Group_2876', 'data-name': 'Group 2876' },
                  n.a.createElement('path', {
                    id: 'Path_2458',
                    'data-name': 'Path 2458',
                    d:
                      'M273.873,104.18l-1.867,0a12.084,12.084,0,0,0,.736,4.147l1.753-.642A10.227,10.227,0,0,1,273.873,104.18Z',
                    transform: 'translate(-272.006 -104.18)',
                    fill: e,
                  })
                )
              )
            )
          ),
        g = ({
          color: e = 'currentColor',
          width: a = '26px',
          height: t = '18px',
        }) =>
          n.a.createElement(
            'svg',
            {
              xmlns: 'http://www.w3.org/2000/svg',
              width: a,
              height: t,
              viewBox: '0 0 25.5 18',
            },
            n.a.createElement(
              'g',
              { id: 'iconfinder_menu_4092560', transform: 'translate(-2 -6)' },
              n.a.createElement('path', {
                id: 'Path_216',
                'data-name': 'Path 216',
                d:
                  'M26.589,6H2.911A.842.842,0,0,0,2,6.75a.842.842,0,0,0,.911.75H26.589a.842.842,0,0,0,.911-.75A.842.842,0,0,0,26.589,6Z',
                fill: e,
              }),
              n.a.createElement('path', {
                id: 'Path_217',
                'data-name': 'Path 217',
                d:
                  'M2.75,16.5H12.5a.75.75,0,0,0,0-1.5H2.75a.75.75,0,0,0,0,1.5Z',
                transform: 'translate(0 -0.75)',
                fill: e,
              }),
              n.a.createElement('path', {
                id: 'Path_218',
                'data-name': 'Path 218',
                d:
                  'M23.562,24H2.938a.769.769,0,1,0,0,1.5H23.562a.769.769,0,1,0,0-1.5Z',
                transform: 'translate(0 -1.5)',
                fill: e,
              })
            )
          );
    },
    122: function (e, a, t) {
      'use strict';
      t.d(a, 'a', function () {
        return l;
      });
      const l = (e, a) => {
        const t = new FileReader();
        t.readAsDataURL(e),
          (t.onload = () => {
            a(t.result);
          });
      };
    },
    127: function (e, a, t) {
      'use strict';
      var l = t(49),
        n = t(48),
        r = t(0),
        c = t.n(r),
        o = t(208),
        m = t(72),
        i = t(130);
      const s = Object(m.b)('span', ({ $theme: e }) =>
          Object(n.a)(
            Object(n.a)({}, e.typography.font14),
            {},
            {
              fontFamily: e.typography.primaryFontFamily,
              color: e.colors.textDark,
              marginTop: '15px',
              textAlign: 'center',
            }
          )
        ),
        h = Object(m.b)('span', ({ $theme: e }) => ({
          color: e.colors.primary,
          fontWeight: 'bold',
        })),
        d = Object(m.b)('div', ({ props: e }) => ({
          flex: '1',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '30px',
          borderWidth: '2px',
          borderRadius: '2px',
          borderColor: '#E6E6E6',
          borderStyle: 'dashed',
          backgroundColor: '#ffffff',
          color: '#bdbdbd',
          outline: 'none',
          transition: 'border 0.24s ease-in-out',
          cursor: 'pointer',
        })),
        p = Object(m.b)('aside', () => ({
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          marginTop: '16px',
        })),
        u = Object(m.b)('div', ({ $theme: e }) =>
          Object(n.a)(
            Object(n.a)({}, e.borders.borderEA),
            {},
            {
              display: 'inline-flex',
              borderRadius: '2px',
              marginBottom: '8px',
              marginRight: '8px',
              width: '100px',
              height: '100px',
              padding: '4px',
              boxSizing: 'border-box',
            }
          )
        ),
        f = { display: 'flex', minWidth: 0, overflow: 'hidden' },
        E = { display: 'block', width: 'auto', height: '100%' };
      a.a = function ({ onChange: e, imageURL: a }) {
        const t = Object(r.useState)(a ? [{ name: 'demo', preview: a }] : []),
          n = Object(l.a)(t, 2),
          m = n[0],
          g = n[1],
          v = Object(o.a)({
            accept: 'image/*',
            multiple: !1,
            onDrop: Object(r.useCallback)(
              (a) => {
                g(
                  a.map((e) =>
                    Object.assign(e, { preview: URL.createObjectURL(e) })
                  )
                ),
                  e(a);
              },
              [e]
            ),
          }),
          b = v.getRootProps,
          M = v.getInputProps,
          w = m.map((e) =>
            c.a.createElement(
              u,
              { key: e.name },
              c.a.createElement(
                'div',
                { style: f },
                c.a.createElement('img', {
                  src: e.preview,
                  style: E,
                  alt: e.name,
                })
              )
            )
          );
        return (
          Object(r.useEffect)(
            () => () => {
              m.forEach((e) => URL.revokeObjectURL(e.preview));
            },
            [m]
          ),
          c.a.createElement(
            'section',
            { className: 'container uploader' },
            c.a.createElement(
              d,
              b(),
              c.a.createElement('input', M()),
              c.a.createElement(i.a, null),
              c.a.createElement(
                s,
                null,
                c.a.createElement(h, null, 'Drag/Upload'),
                ' your image here.'
              )
            ),
            w && c.a.createElement(p, null, w)
          )
        );
      };
    },
    130: function (e, a, t) {
      'use strict';
      t.d(a, 'a', function () {
        return r;
      });
      var l = t(0),
        n = t.n(l);
      const r = ({
        color: e = 'currentColor',
        width: a = '41px',
        height: t = '30px',
      }) =>
        n.a.createElement(
          'svg',
          {
            xmlns: 'http://www.w3.org/2000/svg',
            width: a,
            height: t,
            viewBox: '0 0 40.909 30',
          },
          n.a.createElement(
            'g',
            { transform: 'translate(0 -73.091)' },
            n.a.createElement('path', {
              'data-name': 'Path 2125',
              d:
                'M39.129,89.827A8.064,8.064,0,0,0,34.58,86.94,5.446,5.446,0,0,0,30,78.546a5.207,5.207,0,0,0-3.537,1.321,10.921,10.921,0,0,0-10.1-6.776,10.511,10.511,0,0,0-7.713,3.2A10.508,10.508,0,0,0,5.454,84q0,.277.043.916A9.528,9.528,0,0,0,0,93.546a9.193,9.193,0,0,0,2.8,6.743,9.191,9.191,0,0,0,6.744,2.8H32.728a8.172,8.172,0,0,0,6.4-13.264Zm-12.06-.575a.656.656,0,0,1-.479.2H21.818v7.5a.691.691,0,0,1-.681.681H17.045a.691.691,0,0,1-.682-.681v-7.5H11.59a.655.655,0,0,1-.681-.681.8.8,0,0,1,.213-.512L18.6,80.783a.722.722,0,0,1,.98,0l7.5,7.5a.663.663,0,0,1,.191.49A.656.656,0,0,1,27.07,89.252Z',
              transform: 'translate(0)',
              fill: '#e6e6e6',
            })
          )
        );
    },
    132: function (e, a, t) {
      'use strict';
      t.d(a, 'a', function () {
        return o;
      });
      var l = t(48),
        n = t(0),
        r = t.n(n),
        c = t(433);
      const o = (e) => {
        let a = Object.assign({}, e);
        return r.a.createElement(
          c.a,
          Object.assign(
            {
              overrides: {
                Input: {
                  style: ({ $theme: e }) =>
                    Object(l.a)(
                      {},
                      (({ $theme: e }) =>
                        Object(l.a)(
                          { color: e.colors.textDark },
                          e.typography.fontBold14
                        ))({ $theme: e })
                    ),
                },
              },
            },
            a
          )
        );
      };
    },
    138: function (e, a, t) {
      'use strict';
      t.d(a, 'a', function () {
        return r;
      });
      var l = t(0),
        n = t.n(l);
      const r = ({
        color: e = 'currentColor',
        width: a = '18px',
        height: t = '18px',
      }) =>
        n.a.createElement(
          'svg',
          {
            xmlns: 'http://www.w3.org/2000/svg',
            width: a,
            height: t,
            viewBox: '0 0 11.996 12',
          },
          n.a.createElement('path', {
            'data-name': 'Path 2462',
            d:
              'M18.276,12.1,12.7,6.524a.424.424,0,0,0-.6,0L6.524,12.1a.424.424,0,0,0,0,.6.424.424,0,0,0,.6,0l4.854-4.854V17.977a.423.423,0,1,0,.847,0V7.846L17.677,12.7a.424.424,0,0,0,.6,0A.434.434,0,0,0,18.276,12.1Z',
            transform: 'translate(18.396 18.4) rotate(180)',
            fill: e,
          })
        );
    },
    139: function (e, a, t) {
      'use strict';
      t.d(a, 'a', function () {
        return r;
      });
      var l = t(0),
        n = t.n(l);
      const r = ({
        color: e = 'currentColor',
        width: a = '18px',
        height: t = '18px',
      }) =>
        n.a.createElement(
          'svg',
          {
            xmlns: 'http://www.w3.org/2000/svg',
            width: a,
            height: t,
            viewBox: '0 0 11.996 12',
          },
          n.a.createElement('path', {
            'data-name': 'Path 2462',
            d:
              'M18.276,12.1,12.7,6.524a.424.424,0,0,0-.6,0L6.524,12.1a.424.424,0,0,0,0,.6.424.424,0,0,0,.6,0l4.854-4.854V17.977a.423.423,0,1,0,.847,0V7.846L17.677,12.7a.424.424,0,0,0,.6,0A.434.434,0,0,0,18.276,12.1Z',
            transform: 'translate(-6.4 -6.4)',
            fill: e,
          })
        );
    },
    140: function (e, a, t) {
      'use strict';
      t.d(a, 'a', function () {
        return r;
      });
      var l = t(0),
        n = t.n(l);
      const r = ({ width: e = '48px', height: a = '48px' }) =>
        n.a.createElement(
          'svg',
          {
            xmlns: 'http://www.w3.org/2000/svg',
            width: e,
            height: a,
            viewBox: '0 0 48 48',
          },
          n.a.createElement(
            'g',
            { 'data-name': 'Group 2994', transform: 'translate(-601 -757)' },
            n.a.createElement('rect', {
              'data-name': 'Rectangle 541',
              width: '48',
              height: '48',
              rx: '20',
              transform: 'translate(601 757)',
              fill: '#facaca',
            }),
            n.a.createElement(
              'g',
              { transform: 'translate(610.988 768.246)' },
              n.a.createElement(
                'g',
                {
                  'data-name': 'Group 2985',
                  transform: 'translate(3.013 0.754)',
                },
                n.a.createElement('path', {
                  'data-name': 'Path 3641',
                  d:
                    'M6.071,15.424H23.177a.726.726,0,0,0,.724-.674l.778-10.885a.726.726,0,0,0-.724-.778h-8.6V1.48a.726.726,0,1,0-1.452,0V3.087H5.832c-.051-.618-2.058-.416-.7-.077-.113-.517-.571-.277-.71,0L5.29,14.073a3.058,3.058,0,0,0,.78,6.016h.121a3.058,3.058,0,1,0,5.2,0h6.849a3.059,3.059,0,1,0,5.175-.042.726.726,0,0,0-.241-1.41H6.071a1.607,1.607,0,0,1,0-3.213ZM13.9,4.539V9.058L12.8,7.964a.726.726,0,0,0-1.027,1.027l2.333,2.333a.726.726,0,0,0,1.027,0L17.47,8.991a.726.726,0,0,0-1.027-1.027L15.35,9.058V4.539h7.825L22.5,13.972H6.739L5.953,4.539Zm6.946,15.55A1.607,1.607,0,1,1,19.237,21.7,1.608,1.608,0,0,1,20.844,20.089Zm-12.051,0A1.607,1.607,0,1,1,7.186,21.7,1.608,1.608,0,0,1,8.792,20.089Z',
                  transform: 'translate(-3.013 -0.754)',
                  fill: '#ff6e6e',
                })
              )
            )
          )
        );
    },
    141: function (e, a, t) {
      'use strict';
      t.d(a, 'a', function () {
        return r;
      });
      var l = t(0),
        n = t.n(l);
      const r = ({ width: e = '18px', height: a = '18px' }) =>
        n.a.createElement(
          'svg',
          {
            xmlns: 'http://www.w3.org/2000/svg',
            width: e,
            height: a,
            viewBox: '0 0 48 48',
          },
          n.a.createElement(
            'g',
            { 'data-name': 'Group 2993', transform: 'translate(-608 -807)' },
            n.a.createElement('path', {
              'data-name': 'Path 3646',
              d:
                'M20,0h8A20,20,0,0,1,48,20v8A20,20,0,0,1,28,48H20A20,20,0,0,1,0,28V20A20,20,0,0,1,20,0Z',
              transform: 'translate(608 807)',
              fill: '#ffe8b2',
            }),
            n.a.createElement(
              'g',
              { transform: 'translate(620 819)' },
              n.a.createElement(
                'g',
                { 'data-name': 'Group 2982', transform: 'translate(0)' },
                n.a.createElement(
                  'g',
                  { 'data-name': 'Group 2981' },
                  n.a.createElement('path', {
                    'data-name': 'Path 3639',
                    d:
                      'M20.485,3.515A12,12,0,0,0,3.515,20.485,12,12,0,0,0,20.485,3.515ZM12,22.594A10.594,10.594,0,1,1,22.594,12,10.606,10.606,0,0,1,12,22.594Z',
                    transform: 'translate(0 0)',
                    fill: '#ffb300',
                  })
                )
              ),
              n.a.createElement(
                'g',
                {
                  'data-name': 'Group 2984',
                  transform: 'translate(8.284 4.519)',
                },
                n.a.createElement(
                  'g',
                  { 'data-name': 'Group 2983' },
                  n.a.createElement('path', {
                    'data-name': 'Path 3640',
                    d:
                      'M181.2,103.179H179.7a1.556,1.556,0,1,1,0-3.112h3.013a.7.7,0,1,0,0-1.406h-1.556V97.1a.7.7,0,0,0-1.406,0V98.66h-.05a2.962,2.962,0,1,0,0,5.925H181.2a1.556,1.556,0,0,1,0,3.113H178.19a.7.7,0,0,0,0,1.406h1.556v1.556a.7.7,0,0,0,1.406,0V109.1h.05a2.963,2.963,0,0,0,0-5.925Z',
                    transform: 'translate(-176.734 -96.401)',
                    fill: '#ffb300',
                  })
                )
              )
            )
          )
        );
    },
    142: function (e, a, t) {
      'use strict';
      t.d(a, 'a', function () {
        return r;
      });
      var l = t(0),
        n = t.n(l);
      const r = ({
        width: e = '48px',
        height: a = '48px',
        color: t = 'currentColor',
      }) =>
        n.a.createElement(
          'svg',
          {
            xmlns: 'http://www.w3.org/2000/svg',
            width: e,
            height: a,
            viewBox: '0 0 48 48',
          },
          n.a.createElement(
            'g',
            { 'data-name': 'Group 2996', transform: 'translate(-1787 -804)' },
            n.a.createElement('rect', {
              'data-name': 'Rectangle 541',
              width: '48',
              height: '48',
              rx: '20',
              transform: 'translate(1787 804)',
              fill: '#f8dac2',
            }),
            n.a.createElement('path', {
              'data-name': 'delivery-truck (1)',
              d:
                'M19.621,630.473a2.216,2.216,0,0,0-1.564.645,2.171,2.171,0,0,0,0,3.108,2.225,2.225,0,0,0,1.564.645,2.2,2.2,0,0,0,0-4.4Zm0,3.421a1.222,1.222,0,1,1,0-2.443,1.222,1.222,0,0,1,0,2.443Zm.567-10.747a.475.475,0,0,0-.327-.127H17.354a.49.49,0,0,0-.489.489v4.007a.49.49,0,0,0,.489.489h3.978a.49.49,0,0,0,.489-.489v-2.683a.489.489,0,0,0-.161-.362Zm.655,3.88h-3v-3.035H19.67l1.173,1.056ZM7.687,630.473a2.216,2.216,0,0,0-1.564.645,2.171,2.171,0,0,0,0,3.108,2.225,2.225,0,0,0,1.564.645,2.2,2.2,0,0,0,0-4.4Zm0,3.421a1.222,1.222,0,1,1,0-2.443,1.222,1.222,0,0,1,0,2.443Zm-3.26-2.82H3.445v-1.3a.489.489,0,0,0-.977,0v1.789a.49.49,0,0,0,.489.489H4.428a.489.489,0,0,0,0-.977Zm2.478-2.663a.49.49,0,0,0-.489-.489H.489a.489.489,0,0,0,0,.977H6.417A.487.487,0,0,0,6.905,628.411Zm-5.425-1.764,5.928.034A.493.493,0,0,0,7.9,626.2a.484.484,0,0,0-.484-.494l-5.928-.034h0a.489.489,0,0,0,0,.977Zm1-2.219H8.406a.489.489,0,1,0,0-.977H2.478a.489.489,0,1,0,0,.977Zm21.341-.66h0l-3.5-2.9a.481.481,0,0,0-.313-.112H15.892V619a.49.49,0,0,0-.489-.489H2.957a.49.49,0,0,0-.489.489v3.577a.489.489,0,0,0,.977,0v-3.089H14.92v11.587H10.913a.489.489,0,0,0,0,.977H16.88a.489.489,0,0,0,0-.977H15.9v-9.339h3.939l3.186,2.639-.034,6.69H22.48a.489.489,0,0,0,0,.977h.992a.486.486,0,0,0,.489-.484L24,624.15A.516.516,0,0,0,23.819,623.768Z',
              transform: 'translate(1799 201.49)',
              fill: '#ff811d',
            })
          )
        );
    },
    143: function (e, a, t) {
      'use strict';
      t.d(a, 'a', function () {
        return r;
      });
      var l = t(0),
        n = t.n(l);
      const r = ({
        color: e = 'currentColor',
        width: a = '18px',
        height: t = '18px',
      }) =>
        n.a.createElement(
          'svg',
          {
            xmlns: 'http://www.w3.org/2000/svg',
            width: a,
            height: t,
            viewBox: '0 0 7 10',
          },
          n.a.createElement('path', {
            d:
              'M166.5,118.477a.454.454,0,0,0-.639,0l-2.115,2.108v-8.034a.452.452,0,0,0-.9,0v8.034l-2.115-2.112a.457.457,0,0,0-.639,0,.45.45,0,0,0,0,.636l2.883,2.862a.507.507,0,0,0,.142.094.431.431,0,0,0,.174.035.453.453,0,0,0,.316-.129l2.883-2.862A.442.442,0,0,0,166.5,118.477Z',
            transform: 'translate(-159.962 -112.1)',
            fill: e,
          })
        );
    },
    144: function (e, a, t) {
      'use strict';
      t.d(a, 'a', function () {
        return r;
      });
      var l = t(0),
        n = t.n(l);
      const r = ({
        color: e = 'currentColor',
        width: a = '18px',
        height: t = '18px',
      }) =>
        n.a.createElement(
          'svg',
          {
            xmlns: 'http://www.w3.org/2000/svg',
            width: a,
            height: t,
            viewBox: '0 0 7 10',
          },
          n.a.createElement('path', {
            d:
              'M166.5,115.723a.454.454,0,0,1-.639,0l-2.115-2.108v8.034a.452.452,0,0,1-.9,0v-8.034l-2.115,2.112a.457.457,0,0,1-.639,0,.45.45,0,0,1,0-.636l2.883-2.862a.507.507,0,0,1,.142-.094.431.431,0,0,1,.174-.035.453.453,0,0,1,.316.129l2.883,2.862A.442.442,0,0,1,166.5,115.723Z',
            transform: 'translate(-159.962 -112.1)',
            fill: e,
          })
        );
    },
    145: function (e, a, t) {
      'use strict';
      t.d(a, 'b', function () {
        return r;
      }),
        t.d(a, 'a', function () {
          return c;
        });
      var l = t(0),
        n = t.n(l);
      const r = ({
          color: e = 'currentColor',
          width: a = '18px',
          height: t = '18px',
        }) =>
          n.a.createElement(
            'svg',
            {
              xmlns: 'http://www.w3.org/2000/svg',
              width: a,
              height: t,
              viewBox: '0 0 12 12',
            },
            n.a.createElement(
              'g',
              {
                id: 'Group_3351',
                'data-name': 'Group 3351',
                transform: 'translate(-1367 -190)',
              },
              n.a.createElement('rect', {
                'data-name': 'Rectangle 520',
                width: '12',
                height: '2',
                rx: '1',
                transform: 'translate(1367 195)',
                fill: e,
              }),
              n.a.createElement('rect', {
                'data-name': 'Rectangle 521',
                width: '12',
                height: '2',
                rx: '1',
                transform: 'translate(1374 190) rotate(90)',
                fill: e,
              })
            )
          ),
        c = ({
          color: e = 'currentColor',
          width: a = '12px',
          height: t = '2px',
        }) =>
          n.a.createElement(
            'svg',
            {
              xmlns: 'http://www.w3.org/2000/svg',
              width: a,
              height: t,
              viewBox: '0 0 12 2',
            },
            n.a.createElement('rect', {
              'data-name': 'Rectangle 522',
              width: '12',
              height: '2',
              rx: '1',
              fill: e,
            })
          );
    },
    146: function (e, a, t) {
      'use strict';
      t.d(a, 'a', function () {
        return r;
      });
      var l = t(0),
        n = t.n(l);
      const r = ({
        color: e = 'currentColor',
        width: a = '18px',
        height: t = '18px',
      }) =>
        n.a.createElement(
          'svg',
          {
            xmlns: 'http://www.w3.org/2000/svg',
            width: a,
            height: t,
            viewBox: '0 0 56 56',
          },
          n.a.createElement(
            'g',
            { 'data-name': 'Group 2541', transform: 'translate(-1719 -150)' },
            n.a.createElement('path', {
              'data-name': 'Path 2087',
              d: 'M28,0A28,28,0,1,1,0,28,28,28,0,0,1,28,0Z',
              transform: 'translate(1719 150)',
              fill: '#2170ff',
              opacity: '0.2',
            }),
            n.a.createElement(
              'g',
              { 'data-name': 'Group 2543', transform: 'translate(1733 164)' },
              n.a.createElement(
                'g',
                {
                  'data-name': 'Group 2544',
                  transform: 'translate(4.304 4.304)',
                },
                n.a.createElement(
                  'g',
                  { 'data-name': 'Group 2543', transform: 'translate(0 0)' },
                  n.a.createElement('path', {
                    'data-name': 'Path 2096',
                    d:
                      'M5368.315,4398.011a9.7,9.7,0,1,1,9.7-9.7A9.708,9.708,0,0,1,5368.315,4398.011Zm0-18.171a8.475,8.475,0,1,0,8.476,8.475A8.484,8.484,0,0,0,5368.315,4379.84Z',
                    transform: 'translate(-5358.62 -4378.62)',
                    fill: '#2170ff',
                  }),
                  n.a.createElement('path', {
                    'data-name': 'Path 2097',
                    d:
                      'M5371.153,4381.62a9.534,9.534,0,1,0,9.533,9.533A9.545,9.545,0,0,0,5371.153,4381.62Zm0,18.171a8.638,8.638,0,1,1,8.638-8.638A8.647,8.647,0,0,1,5371.153,4399.791Z',
                    transform: 'translate(-5361.456 -4381.458)',
                    fill: '#2170ff',
                  })
                )
              ),
              n.a.createElement(
                'g',
                {
                  'data-name': 'Group 2546',
                  transform: 'translate(10.041 8.13)',
                },
                n.a.createElement(
                  'g',
                  { 'data-name': 'Group 2545', transform: 'translate(0)' },
                  n.a.createElement('path', {
                    'data-name': 'Path 2098',
                    d:
                      'M5468.736,4461.133a.611.611,0,0,1-.61-.61v-.375c-1.949-.181-3.348-1.2-3.348-2.465a.611.611,0,0,1,1.222,0c0,.5.847,1.09,2.126,1.239v-3.194c-1.642-.465-3.348-1.128-3.348-2.886,0-1.263,1.4-2.284,3.348-2.465V4450a.61.61,0,1,1,1.22,0v.374c1.949.181,3.348,1.2,3.348,2.465a.61.61,0,0,1-1.22,0c0-.495-.848-1.091-2.127-1.238v3.194c1.643.466,3.348,1.126,3.348,2.886,0,1.263-1.4,2.284-3.348,2.465v.375A.61.61,0,0,1,5468.736,4461.133Zm.61-2.21c1.28-.148,2.127-.744,2.127-1.239,0-.7-.562-1.128-2.127-1.611Zm-1.22-7.318c-1.279.147-2.126.743-2.126,1.238,0,.7.562,1.128,2.126,1.611Z',
                    transform: 'translate(-5464.777 -4449.392)',
                    fill: '#2170ff',
                  }),
                  n.a.createElement('path', {
                    'data-name': 'Path 2099',
                    d:
                      'M5472.021,4457.758v-3.5c1.465.118,2.452.8,2.452,1.417a.448.448,0,1,0,.9,0c0-1.214-1.438-2.183-3.348-2.314v-.525a.448.448,0,1,0-.9,0v.525c-1.911.131-3.348,1.1-3.348,2.314,0,1.626,1.545,2.26,3.348,2.763v3.495c-1.465-.118-2.452-.8-2.452-1.416a.448.448,0,1,0-.9,0c0,1.213,1.437,2.183,3.348,2.316v.523a.448.448,0,1,0,.9,0v-.523c1.91-.133,3.348-1.1,3.348-2.316C5475.369,4458.895,5473.824,4458.26,5472.021,4457.758Zm-.9-.249c-1.819-.537-2.452-1.026-2.452-1.83,0-.618.987-1.3,2.452-1.417Zm.9,4.428v-3.246c1.818.538,2.452,1.025,2.452,1.83C5474.474,4461.139,5473.486,4461.82,5472.021,4461.937Z',
                    transform: 'translate(-5467.616 -4452.229)',
                    fill: '#2170ff',
                  })
                )
              ),
              n.a.createElement(
                'g',
                { 'data-name': 'Group 2548', transform: 'translate(2.391 0)' },
                n.a.createElement(
                  'g',
                  { 'data-name': 'Group 2547', transform: 'translate(0)' },
                  n.a.createElement('path', {
                    'data-name': 'Path 2100',
                    d:
                      'M5334.839,4327a.61.61,0,1,1,0-1.221,12.786,12.786,0,1,0-9.167-21.685l.844-.281a.6.6,0,0,1,.194-.031.61.61,0,0,1,.192,1.19l-2.869.956a.626.626,0,0,1-.193.031.61.61,0,0,1-.6-.7l.478-3.348a.613.613,0,0,1,.6-.522.667.667,0,0,1,.087,0,.611.611,0,0,1,.518.691l-.173,1.2A14,14,0,1,1,5334.839,4327Z',
                    transform: 'translate(-5323.23 -4299)',
                    fill: '#2170ff',
                  }),
                  n.a.createElement('path', {
                    'data-name': 'Path 2101',
                    d:
                      'M5347.463,4306.052a13.838,13.838,0,0,0-20.106.568l.246-1.718a.449.449,0,0,0-.888-.128l-.478,3.348a.451.451,0,0,0,.443.513.449.449,0,0,0,.144-.025l2.869-.956a.448.448,0,0,0-.284-.851l-1.442.48a12.941,12.941,0,1,1,9.712,21.493.449.449,0,0,0,0,.9,13.838,13.838,0,0,0,9.785-23.623Z',
                    transform: 'translate(-5326.069 -4301.836)',
                    fill: '#2170ff',
                  })
                )
              ),
              n.a.createElement(
                'g',
                {
                  'data-name': 'Group 2550',
                  transform: 'translate(11.005 26.567)',
                },
                n.a.createElement(
                  'g',
                  { 'data-name': 'Group 2549', transform: 'translate(0 0)' },
                  n.a.createElement('path', {
                    'data-name': 'Path 2102',
                    d:
                      'M5483.667,4791.79a.585.585,0,0,1-.087-.006c-.165-.024-.333-.05-.493-.08a.61.61,0,0,1,.106-1.21.563.563,0,0,1,.108.009c.147.025.3.051.451.072a.61.61,0,0,1-.085,1.215Z',
                    transform: 'translate(-5482.584 -4790.493)',
                    fill: '#2170ff',
                  }),
                  n.a.createElement('path', {
                    'data-name': 'Path 2103',
                    d:
                      'M5486.569,4793.572c-.153-.021-.307-.045-.457-.073a.448.448,0,1,0-.159.882c.161.03.325.055.487.078a.373.373,0,0,0,.065.006.449.449,0,0,0,.063-.894Z',
                    transform: 'translate(-5485.422 -4793.329)',
                    fill: '#2170ff',
                  })
                )
              ),
              n.a.createElement(
                'g',
                {
                  'data-name': 'Group 2552',
                  transform: 'translate(8.34 25.795)',
                },
                n.a.createElement(
                  'g',
                  { 'data-name': 'Group 2551', transform: 'translate(0 0)' },
                  n.a.createElement('path', {
                    'data-name': 'Path 2104',
                    d:
                      'M5434.763,4777.729a.579.579,0,0,1-.19-.032c-.305-.1-.611-.212-.909-.333a.611.611,0,1,1,.459-1.131c.272.11.552.213.83.305a.611.611,0,0,1-.19,1.191Z',
                    transform: 'translate(-5433.283 -4776.188)',
                    fill: '#2170ff',
                  }),
                  n.a.createElement('path', {
                    'data-name': 'Path 2105',
                    d:
                      'M5437.738,4779.53c-.281-.092-.565-.2-.84-.308a.448.448,0,1,0-.339.83c.3.12.6.231.9.331a.449.449,0,0,0,.279-.853Z',
                    transform: 'translate(-5436.119 -4779.026)',
                    fill: '#2170ff',
                  })
                )
              ),
              n.a.createElement(
                'g',
                {
                  'data-name': 'Group 2554',
                  transform: 'translate(0.141 15.345)',
                },
                n.a.createElement(
                  'g',
                  { 'data-name': 'Group 2553', transform: 'translate(0 0)' },
                  n.a.createElement('path', {
                    'data-name': 'Path 2106',
                    d:
                      'M5282.4,4585.042a.614.614,0,0,1-.6-.481c-.069-.312-.126-.634-.174-.952a.613.613,0,0,1,.516-.693.771.771,0,0,1,.089,0,.614.614,0,0,1,.6.521c.042.29.1.583.158.87a.607.607,0,0,1-.082.459.614.614,0,0,1-.384.267A.653.653,0,0,1,5282.4,4585.042Z',
                    transform: 'translate(-5281.624 -4582.911)',
                    fill: '#2170ff',
                  }),
                  n.a.createElement('path', {
                    'data-name': 'Path 2107',
                    d:
                      'M5285.676,4587.172c-.062-.29-.116-.586-.16-.88a.448.448,0,0,0-.887.13c.046.314.1.631.17.942a.45.45,0,0,0,.438.354.389.389,0,0,0,.1-.012A.446.446,0,0,0,5285.676,4587.172Z',
                    transform: 'translate(-5284.462 -4585.747)',
                    fill: '#2170ff',
                  })
                )
              ),
              n.a.createElement(
                'g',
                {
                  'data-name': 'Group 2556',
                  transform: 'translate(0.262 9.839)',
                },
                n.a.createElement(
                  'g',
                  { 'data-name': 'Group 2555', transform: 'translate(0 0)' },
                  n.a.createElement('path', {
                    'data-name': 'Path 2108',
                    d:
                      'M5284.464,4483.11a.72.72,0,0,1-.121-.011.611.611,0,0,1-.478-.719c.063-.316.138-.632.223-.943a.614.614,0,0,1,.589-.45.635.635,0,0,1,.161.023.611.611,0,0,1,.428.751c-.077.282-.146.572-.2.86A.611.611,0,0,1,5284.464,4483.11Z',
                    transform: 'translate(-5283.853 -4480.987)',
                    fill: '#2170ff',
                  }),
                  n.a.createElement('path', {
                    'data-name': 'Path 2109',
                    d:
                      'M5287.632,4484a.449.449,0,0,0-.552.314c-.083.306-.156.619-.22.931a.448.448,0,0,0,.352.528.461.461,0,0,0,.087.009.452.452,0,0,0,.441-.36c.059-.292.127-.585.206-.87A.45.45,0,0,0,5287.632,4484Z',
                    transform: 'translate(-5286.689 -4483.826)',
                    fill: '#2170ff',
                  })
                )
              ),
              n.a.createElement(
                'g',
                {
                  'data-name': 'Group 2558',
                  transform: 'translate(0.829 18.034)',
                },
                n.a.createElement(
                  'g',
                  { 'data-name': 'Group 2557', transform: 'translate(0 0)' },
                  n.a.createElement('path', {
                    'data-name': 'Path 2110',
                    d:
                      'M5295.269,4634.7a.61.61,0,0,1-.557-.358c-.132-.293-.257-.594-.368-.9a.612.612,0,0,1,.36-.785.6.6,0,0,1,.211-.039.613.613,0,0,1,.573.4c.1.275.215.55.335.818a.611.611,0,0,1-.306.807A.592.592,0,0,1,5295.269,4634.7Z',
                    transform: 'translate(-5294.306 -4632.626)',
                    fill: '#2170ff',
                  }),
                  n.a.createElement('path', {
                    'data-name': 'Path 2111',
                    d:
                      'M5298.513,4636.747c-.122-.271-.236-.549-.34-.829a.448.448,0,0,0-.84.311c.11.3.233.6.363.886a.45.45,0,0,0,.409.264.469.469,0,0,0,.185-.04A.447.447,0,0,0,5298.513,4636.747Z',
                    transform: 'translate(-5297.143 -4635.463)',
                    fill: '#2170ff',
                  })
                )
              ),
              n.a.createElement(
                'g',
                { 'data-name': 'Group 2560', transform: 'translate(0 12.575)' },
                n.a.createElement(
                  'g',
                  { 'data-name': 'Group 2559', transform: 'translate(0)' },
                  n.a.createElement('path', {
                    'data-name': 'Path 2112',
                    d:
                      'M5279.609,4533.781a.612.612,0,0,1-.611-.606c0-.039,0-.077,0-.116,0-.282.01-.569.027-.85a.608.608,0,0,1,.607-.574h.038a.612.612,0,0,1,.573.646c-.015.258-.023.52-.023.778,0,.035,0,.07,0,.107a.612.612,0,0,1-.606.615h0Z',
                    transform: 'translate(-5278.998 -4531.634)',
                    fill: '#2170ff',
                  }),
                  n.a.createElement('path', {
                    'data-name': 'Path 2113',
                    d:
                      'M5282.5,4534.634a.449.449,0,0,0-.475.421c-.016.277-.025.561-.025.84v.117a.448.448,0,0,0,.449.443h0a.45.45,0,0,0,.446-.451v-.108c0-.262.006-.526.022-.787A.447.447,0,0,0,5282.5,4534.634Z',
                    transform: 'translate(-5281.836 -4534.47)',
                    fill: '#2170ff',
                  })
                )
              ),
              n.a.createElement(
                'g',
                {
                  'data-name': 'Group 2562',
                  transform: 'translate(5.893 24.485)',
                },
                n.a.createElement(
                  'g',
                  { 'data-name': 'Group 2561', transform: 'translate(0 0)' },
                  n.a.createElement('path', {
                    'data-name': 'Path 2114',
                    d:
                      'M5389.413,4753.693a.618.618,0,0,1-.306-.083c-.28-.161-.556-.335-.82-.515a.61.61,0,1,1,.685-1.011c.243.165.5.323.748.47a.612.612,0,0,1,.223.834A.615.615,0,0,1,5389.413,4753.693Z',
                    transform: 'translate(-5388.019 -4751.979)',
                    fill: '#2170ff',
                  }),
                  n.a.createElement('path', {
                    'data-name': 'Path 2115',
                    d:
                      'M5392.479,4755.533c-.257-.149-.512-.309-.759-.476a.449.449,0,0,0-.5.743c.264.178.537.348.811.509a.454.454,0,0,0,.225.061.449.449,0,0,0,.226-.836Z',
                    transform: 'translate(-5390.858 -4754.817)',
                    fill: '#2170ff',
                  })
                )
              ),
              n.a.createElement(
                'g',
                {
                  'data-name': 'Group 2564',
                  transform: 'translate(2.054 20.521)',
                },
                n.a.createElement(
                  'g',
                  { 'data-name': 'Group 2563', transform: 'translate(0 0)' },
                  n.a.createElement('path', {
                    'data-name': 'Path 2116',
                    d:
                      'M5318.141,4680.616a.613.613,0,0,1-.493-.25c-.19-.26-.375-.529-.544-.8a.61.61,0,1,1,1.032-.65c.158.248.324.494.5.731a.611.611,0,0,1-.493.971Z',
                    transform: 'translate(-5317.009 -4678.629)',
                    fill: '#2170ff',
                  }),
                  n.a.createElement('path', {
                    'data-name': 'Path 2117',
                    d:
                      'M5321.343,4682.579c-.175-.239-.344-.489-.5-.74a.448.448,0,1,0-.758.479c.169.27.35.535.537.792a.449.449,0,0,0,.724-.53Z',
                    transform: 'translate(-5319.85 -4681.467)',
                    fill: '#2170ff',
                  })
                )
              ),
              n.a.createElement(
                'g',
                {
                  'data-name': 'Group 2566',
                  transform: 'translate(3.769 22.7)',
                },
                n.a.createElement(
                  'g',
                  { 'data-name': 'Group 2565', transform: 'translate(0 0)' },
                  n.a.createElement('path', {
                    'data-name': 'Path 2118',
                    d:
                      'M5350,4720.845a.609.609,0,0,1-.408-.156c-.238-.216-.473-.442-.7-.673a.61.61,0,0,1,.877-.849c.205.211.419.417.637.614a.61.61,0,0,1-.408,1.064Z',
                    transform: 'translate(-5348.718 -4718.981)',
                    fill: '#2170ff',
                  }),
                  n.a.createElement('path', {
                    'data-name': 'Path 2119',
                    d:
                      'M5353.132,4722.74c-.221-.2-.437-.408-.644-.623a.448.448,0,1,0-.644.625c.221.228.453.452.688.664a.443.443,0,0,0,.3.116.449.449,0,0,0,.3-.782Z',
                    transform: 'translate(-5351.555 -4721.819)',
                    fill: '#2170ff',
                  })
                )
              ),
              n.a.createElement(
                'g',
                {
                  'data-name': 'Group 2568',
                  transform: 'translate(1.091 7.652)',
                },
                n.a.createElement(
                  'g',
                  { 'data-name': 'Group 2567', transform: 'translate(0)' },
                  n.a.createElement('path', {
                    'data-name': 'Path 2120',
                    d:
                      'M5299.792,4442.2a.61.61,0,0,1-.566-.385.609.609,0,0,1,.005-.466c.067-.153.136-.308.208-.457a.616.616,0,0,1,.552-.348.607.607,0,0,1,.261.058.614.614,0,0,1,.29.814c-.066.136-.128.276-.19.415A.608.608,0,0,1,5299.792,4442.2Z',
                    transform: 'translate(-5299.182 -4440.542)',
                    fill: '#2170ff',
                  }),
                  n.a.createElement('path', {
                    'data-name': 'Path 2121',
                    d:
                      'M5303.023,4443.585a.449.449,0,0,0-.6.212c-.07.148-.139.3-.2.45a.449.449,0,0,0,.824.356c.061-.141.125-.282.191-.421A.45.45,0,0,0,5303.023,4443.585Z',
                    transform: 'translate(-5302.022 -4443.379)',
                    fill: '#2170ff',
                  })
                )
              )
            )
          )
        );
    },
    147: function (e, a, t) {
      'use strict';
      t.d(a, 'a', function () {
        return r;
      });
      var l = t(0),
        n = t.n(l);
      const r = ({
        color: e = 'currentColor',
        width: a = '18px',
        height: t = '18px',
      }) =>
        n.a.createElement(
          'svg',
          {
            xmlns: 'http://www.w3.org/2000/svg',
            width: a,
            height: t,
            viewBox: '0 0 56 56',
          },
          n.a.createElement(
            'g',
            { 'data-name': 'Group 2541', transform: 'translate(-1719 -150)' },
            n.a.createElement('path', {
              'data-name': 'Path 2087',
              d: 'M28,0A28,28,0,1,1,0,28,28,28,0,0,1,28,0Z',
              transform: 'translate(1719 150)',
              fill: '#00c58d',
              opacity: '0.2',
            }),
            n.a.createElement(
              'g',
              {
                'data-name': 'Group 2542',
                transform: 'translate(1734.867 165.867)',
              },
              n.a.createElement('path', {
                'data-name': 'Path 2088',
                d:
                  'M3854.718,4669.131a.507.507,0,0,0-.359-.15l-.048,0-8.585.831a.511.511,0,0,0-.31.864l1.58,1.58-12.093,12.093a.507.507,0,0,0,0,.718l3.877,3.877a.511.511,0,0,0,.718,0l2.112-2.111a.508.508,0,0,0,.148-.359.507.507,0,0,0-.867-.358l-1.753,1.752-3.159-3.159,12.093-12.094a.506.506,0,0,0,0-.717l-1.177-1.178,6.9-.668-.667,6.9-1.178-1.177a.506.506,0,0,0-.718,0l-9.166,9.165a.508.508,0,1,0,.719.718l8.806-8.806,1.579,1.579a.5.5,0,0,0,.353.146h0a.507.507,0,0,0,.512-.455l.831-8.585A.5.5,0,0,0,3854.718,4669.131Z',
                transform: 'translate(-3830.598 -4668.98)',
                fill: '#00c58d',
              }),
              n.a.createElement('path', {
                'data-name': 'Path 2089',
                d:
                  'M3806.064,5023.59a.51.51,0,0,0-.718,0,.509.509,0,0,0,0,.72l3.877,3.876a.5.5,0,0,0,.359.147h0a.5.5,0,0,0,.386-.177.509.509,0,0,0-.026-.688Z',
                transform: 'translate(-3802.428 -5006.836)',
                fill: '#00c58d',
              }),
              n.a.createElement('path', {
                'data-name': 'Path 2090',
                d:
                  'M3776.51,5053.146a.508.508,0,0,0-.867.36.5.5,0,0,0,.149.358l3.877,3.877a.5.5,0,0,0,.358.147h0a.506.506,0,0,0,.359-.865Z',
                transform: 'translate(-3774.258 -5035.007)',
                fill: '#00c58d',
              }),
              n.a.createElement('path', {
                'data-name': 'Path 2091',
                d:
                  'M3746.954,5082.7a.508.508,0,1,0-.718.718l3.876,3.876a.5.5,0,0,0,.358.147h0a.506.506,0,0,0,.36-.865Z',
                transform: 'translate(-3746.086 -5063.178)',
                fill: '#00c58d',
              }),
              n.a.createElement('path', {
                'data-name': 'Path 2092',
                d:
                  'M4054.57,4973.039a4.424,4.424,0,1,0,4.424,4.424A4.43,4.43,0,0,0,4054.57,4973.039Zm0,7.833a3.409,3.409,0,1,1,3.408-3.409A3.413,3.413,0,0,1,4054.57,4980.873Z',
                transform: 'translate(-4035.901 -4958.794)',
                fill: '#00c58d',
              }),
              n.a.createElement('path', {
                'data-name': 'Path 2093',
                d:
                  'M4114.442,5005.083a.522.522,0,0,0,.108.011.508.508,0,0,0,.507-.507v-.255a1.265,1.265,0,0,0-1.017-1.246v-.282a.508.508,0,0,0-1.016,0v.309a1.4,1.4,0,0,0,.38,2.745h.255a.383.383,0,0,1,0,.767h-.382a.257.257,0,0,1-.256-.256.508.508,0,0,0-1.015,0,1.267,1.267,0,0,0,1.018,1.246v.281a.508.508,0,1,0,1.016,0v-.308a1.4,1.4,0,0,0,.4-2.5Zm-.251-.137,0,0a1.388,1.388,0,0,0-.535-.106h-.255a.383.383,0,0,1,0-.767h.381a.256.256,0,0,1,.256.256v.255A.5.5,0,0,0,4114.19,5004.945Z',
                transform: 'translate(-4094.863 -4986.681)',
                fill: '#00c58d',
              }),
              n.a.createElement('path', {
                'data-name': 'Path 2094',
                d:
                  'M3770.35,4697.666a4.424,4.424,0,1,0-4.424-4.424A4.428,4.428,0,0,0,3770.35,4697.666Zm0-7.832a3.409,3.409,0,1,1-3.408,3.408A3.412,3.412,0,0,1,3770.35,4689.834Z',
                transform: 'translate(-3764.996 -4687.888)',
                fill: '#00c58d',
              }),
              n.a.createElement('path', {
                'data-name': 'Path 2095',
                d:
                  'M3829.184,4721.638h.255a.383.383,0,0,1,0,.767h-.382a.256.256,0,0,1-.256-.256.508.508,0,0,0-1.015,0,1.267,1.267,0,0,0,1.018,1.246v.282a.508.508,0,0,0,1.015,0v-.309a1.4,1.4,0,0,0,.4-2.5.474.474,0,0,0,.108.011.508.508,0,0,0,.508-.508v-.254a1.266,1.266,0,0,0-1.018-1.246v-.282a.508.508,0,0,0-1.016,0v.309a1.4,1.4,0,0,0,.381,2.745Zm.791-.909a1.391,1.391,0,0,0-.536-.107h-.255a.383.383,0,1,1,0-.766h.382a.256.256,0,0,1,.256.256v.254A.5.5,0,0,0,3829.975,4720.729Z',
                transform: 'translate(-3823.958 -4715.777)',
                fill: '#00c58d',
              })
            )
          )
        );
    },
    148: function (e, a, t) {
      'use strict';
      t.d(a, 'a', function () {
        return r;
      });
      var l = t(0),
        n = t.n(l);
      const r = ({ width: e = '48px', height: a = '48px' }) =>
        n.a.createElement(
          'svg',
          {
            xmlns: 'http://www.w3.org/2000/svg',
            width: e,
            height: a,
            viewBox: '0 0 48 48',
          },
          n.a.createElement(
            'g',
            { 'data-name': 'Group 2995', transform: 'translate(-612 -752)' },
            n.a.createElement('path', {
              'data-name': 'Path 3647',
              d:
                'M20,0h8A20,20,0,0,1,48,20v8A20,20,0,0,1,28,48H20A20,20,0,0,1,0,28V20A20,20,0,0,1,20,0Z',
              transform: 'translate(612 752)',
              fill: '#d1f9f5',
            }),
            n.a.createElement('path', {
              'data-name': 'Path 3642',
              d:
                'M-707.226-726.091a.506.506,0,0,1-.23.677.506.506,0,0,1-.677-.23,11.921,11.921,0,0,1-.919-2.574,12.016,12.016,0,0,1-.311-2.719,11.963,11.963,0,0,1,3.515-8.485,11.962,11.962,0,0,1,8.485-3.515,11.962,11.962,0,0,1,8.485,3.515,11.963,11.963,0,0,1,3.515,8.485,12.016,12.016,0,0,1-.311,2.719,11.929,11.929,0,0,1-.919,2.574.506.506,0,0,1-.677.23.506.506,0,0,1-.23-.677,10.888,10.888,0,0,0,.84-2.352,11.01,11.01,0,0,0,.283-2.493A10.952,10.952,0,0,0-689.6-738.7a10.952,10.952,0,0,0-7.768-3.218,10.952,10.952,0,0,0-7.768,3.218,10.952,10.952,0,0,0-3.218,7.768,11.017,11.017,0,0,0,.283,2.493,10.9,10.9,0,0,0,.84,2.352Zm19.154,2.746a12.05,12.05,0,0,1-4.152,3.254,11.947,11.947,0,0,1-5.139,1.155,11.947,11.947,0,0,1-5.139-1.155,12.051,12.051,0,0,1-4.16-3.264.5.5,0,0,1-.109-.386h0a3.522,3.522,0,0,1,1.1-2.245,6.632,6.632,0,0,1,2.253-1.223c.4-.146.832-.281,1.256-.412a11.4,11.4,0,0,0,1.621-.582l.064-.035a.85.85,0,0,0,.408-.456.62.62,0,0,0-.045-.475l-.01-.021-.009-.016-.014-.026c-.067-.114-.163-.254-.267-.406a6.317,6.317,0,0,1-.928-1.8,1.354,1.354,0,0,1-.656-.588,3.944,3.944,0,0,1-.424-1.009,3.77,3.77,0,0,1-.116-.57c0-.005,0-.01,0-.016a1.387,1.387,0,0,1,0-.268.947.947,0,0,1,.3-.627.989.989,0,0,1,.43-.23l-.015-.432a4.265,4.265,0,0,1,2.5-4.277,4.8,4.8,0,0,1,1.967-.414,4.8,4.8,0,0,1,1.967.415,4.264,4.264,0,0,1,2.5,4.277v0h0l-.015.43a.987.987,0,0,1,.431.231.947.947,0,0,1,.295.625,1.409,1.409,0,0,1,0,.285l0,.016a3.824,3.824,0,0,1-.114.558,3.921,3.921,0,0,1-.423,1.007,1.353,1.353,0,0,1-.656.587,6.321,6.321,0,0,1-.929,1.8c-.11.162-.212.312-.279.428l-.018.035a.626.626,0,0,0-.045.479.85.85,0,0,0,.409.457l.064.033a11.415,11.415,0,0,0,1.625.584c.423.131.857.265,1.252.41a6.631,6.631,0,0,1,2.253,1.223,3.521,3.521,0,0,1,1.1,2.245.5.5,0,0,1-.117.4Zm-4.583,2.339a11.025,11.025,0,0,0,3.664-2.814,2.462,2.462,0,0,0-.747-1.422,5.756,5.756,0,0,0-1.916-1.017c-.4-.146-.8-.271-1.2-.394a12.03,12.03,0,0,1-1.783-.647c-.028-.014-.065-.035-.111-.061a1.843,1.843,0,0,1-.868-1.023,1.62,1.62,0,0,1,.1-1.243c.009-.018.024-.045.046-.082.1-.176.206-.33.319-.495a5.142,5.142,0,0,0,.874-1.816h0l.005-.022a.505.505,0,0,1,.6-.357c.012-.008.026-.076.082-.164a2.907,2.907,0,0,0,.3-.737,2.755,2.755,0,0,0,.083-.4v-.013a.49.49,0,0,0,0-.062h-.021a.853.853,0,0,0-.164,0,.5.5,0,0,1-.075,0,.505.505,0,0,1-.487-.523l.032-.917h0a3.3,3.3,0,0,0-1.905-3.321,3.788,3.788,0,0,0-1.551-.327,3.79,3.79,0,0,0-1.551.327,3.3,3.3,0,0,0-1.907,3.323l.031.91a.532.532,0,0,1,0,.071.505.505,0,0,1-.55.456.864.864,0,0,0-.173,0h-.022a.5.5,0,0,0,0,.053v.009a2.721,2.721,0,0,0,.084.408,2.922,2.922,0,0,0,.3.74c.056.088.068.157.08.164h0a.506.506,0,0,1,.606.38,5.138,5.138,0,0,0,.873,1.813c.107.158.207.3.3.469l.017.027.03.053.017.031a1.619,1.619,0,0,1,.1,1.243,1.842,1.842,0,0,1-.863,1.022c-.036.021-.075.042-.116.062a11.985,11.985,0,0,1-1.779.646c-.4.123-.808.25-1.2.4a5.758,5.758,0,0,0-1.917,1.017,2.462,2.462,0,0,0-.747,1.422,11.027,11.027,0,0,0,3.664,2.814,10.94,10.94,0,0,0,4.708,1.056,10.94,10.94,0,0,0,4.708-1.056Z',
              transform: 'translate(1333.363 1506.936)',
              fill: '#27c7b7',
            })
          )
        );
    },
    153: function (e, a, t) {
      'use strict';
      t.d(a, 'a', function () {
        return r;
      });
      var l = t(0),
        n = t.n(l);
      const r = ({
        color: e = 'currentColor',
        width: a = '18px',
        height: t = '18px',
      }) =>
        n.a.createElement(
          'svg',
          {
            xmlns: 'http://www.w3.org/2000/svg',
            width: a,
            height: t,
            viewBox: '0 0 18 14.4',
          },
          n.a.createElement('path', {
            'data-name': '_ionicons_svg_ios-arrow-round-back (2)',
            d:
              'M119.925,160.3a.98.98,0,0,1,.007,1.38l-4.554,4.567h13.754a.975.975,0,0,1,0,1.95H115.379l4.562,4.567a.987.987,0,0,1-.008,1.38.972.972,0,0,1-1.373-.008l-6.182-6.225a1.1,1.1,0,0,1-.2-.307.93.93,0,0,1-.075-.375.977.977,0,0,1,.278-.682l6.182-6.225A.956.956,0,0,1,119.925,160.3Z',
            transform: 'translate(-112.1 -160.024)',
            fill: e,
          })
        );
    },
    154: function (e, a, t) {
      'use strict';
      t.d(a, 'a', function () {
        return r;
      });
      var l = t(0),
        n = t.n(l);
      const r = ({
        color: e = 'currentColor',
        width: a = '18px',
        height: t = '18px',
      }) =>
        n.a.createElement(
          'svg',
          {
            xmlns: 'http://www.w3.org/2000/svg',
            viewBox: '0 0 10.003 10',
            width: a,
            height: t,
          },
          n.a.createElement('path', {
            'data-name': '_ionicons_svg_ios-close (5)',
            d:
              'M166.686,165.55l3.573-3.573a.837.837,0,0,0-1.184-1.184l-3.573,3.573-3.573-3.573a.837.837,0,1,0-1.184,1.184l3.573,3.573-3.573,3.573a.837.837,0,0,0,1.184,1.184l3.573-3.573,3.573,3.573a.837.837,0,0,0,1.184-1.184Z',
            transform: 'translate(-160.5 -160.55)',
            fill: e,
          })
        );
    },
    155: function (e, a, t) {
      'use strict';
      t.d(a, 'a', function () {
        return r;
      });
      var l = t(0),
        n = t.n(l);
      const r = ({
        color: e = 'currentColor',
        width: a = '18px',
        height: t = '18px',
      }) =>
        n.a.createElement(
          'svg',
          {
            xmlns: 'http://www.w3.org/2000/svg',
            width: a,
            height: t,
            viewBox: '0 0 25.5 18',
          },
          n.a.createElement(
            'g',
            { transform: 'translate(-2 -6)' },
            n.a.createElement('path', {
              'data-name': 'Path 216',
              d:
                'M26.589,6H2.911A.842.842,0,0,0,2,6.75a.842.842,0,0,0,.911.75H26.589a.842.842,0,0,0,.911-.75A.842.842,0,0,0,26.589,6Z',
              fill: e,
            }),
            n.a.createElement('path', {
              'data-name': 'Path 217',
              d: 'M2.75,16.5H12.5a.75.75,0,0,0,0-1.5H2.75a.75.75,0,0,0,0,1.5Z',
              transform: 'translate(0 -0.75)',
              fill: e,
            }),
            n.a.createElement('path', {
              'data-name': 'Path 218',
              d:
                'M23.562,24H2.938a.769.769,0,1,0,0,1.5H23.562a.769.769,0,1,0,0-1.5Z',
              transform: 'translate(0 -1.5)',
              fill: e,
            })
          )
        );
    },
    296: function (e, a) {
      e.exports =
        'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/4gKgSUNDX1BST0ZJTEUAAQEAAAKQbGNtcwQwAABtbnRyUkdCIFhZWiAH3QAMAAQAAQAQAC5hY3NwQVBQTAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA9tYAAQAAAADTLWxjbXMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAtkZXNjAAABCAAAADhjcHJ0AAABQAAAAE53dHB0AAABkAAAABRjaGFkAAABpAAAACxyWFlaAAAB0AAAABRiWFlaAAAB5AAAABRnWFlaAAAB+AAAABRyVFJDAAACDAAAACBnVFJDAAACLAAAACBiVFJDAAACTAAAACBjaHJtAAACbAAAACRtbHVjAAAAAAAAAAEAAAAMZW5VUwAAABwAAAAcAHMAUgBHAEIAIABiAHUAaQBsAHQALQBpAG4AAG1sdWMAAAAAAAAAAQAAAAxlblVTAAAAMgAAABwATgBvACAAYwBvAHAAeQByAGkAZwBoAHQALAAgAHUAcwBlACAAZgByAGUAZQBsAHkAAAAAWFlaIAAAAAAAAPbWAAEAAAAA0y1zZjMyAAAAAAABDEoAAAXj///zKgAAB5sAAP2H///7ov///aMAAAPYAADAlFhZWiAAAAAAAABvlAAAOO4AAAOQWFlaIAAAAAAAACSdAAAPgwAAtr5YWVogAAAAAAAAYqUAALeQAAAY3nBhcmEAAAAAAAMAAAACZmYAAPKnAAANWQAAE9AAAApbcGFyYQAAAAAAAwAAAAJmZgAA8qcAAA1ZAAAT0AAACltwYXJhAAAAAAADAAAAAmZmAADypwAADVkAABPQAAAKW2Nocm0AAAAAAAMAAAAAo9cAAFR7AABMzQAAmZoAACZmAAAPXP/bAEMABQMEBAQDBQQEBAUFBQYHDAgHBwcHDwsLCQwRDxISEQ8RERMWHBcTFBoVEREYIRgaHR0fHx8TFyIkIh4kHB4fHv/bAEMBBQUFBwYHDggIDh4UERQeHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHv/AABEIAIAAgAMBIgACEQEDEQH/xAAcAAACAwEBAQEAAAAAAAAAAAAFBgMEBwgCAQD/xAA7EAACAQMDAwEFBgQFBAMAAAABAgMABBEFBiESMUFRBxMiYXEUMoGRobEVI0LBFiQzctElQ2LwNFLh/8QAGgEAAgMBAQAAAAAAAAAAAAAABAUBAgMABv/EACcRAAICAQQCAgICAwAAAAAAAAECABEDBBIhMRNBIlEFgWGhFLHB/9oADAMBAAIRAxEAPwDoTe+l232yKeOLpkb77DzQ/TNDTUD1NIUReD0jk0ybt5KL6Amhuk3ItLGVyfp9aSk0TUaAWojRpttFa2kcEJIVBgZq4oOOBn8KRIdavFcssnGe1M8FpbapaxzX8Cz5GQr5Kj8O1EIa4mLD3CvI7gj6ikfee4dv6deHGo9OoqOkrbnLD/cew/Gkb237t0rblrJp+3pJdNuw6pc3NtKyqiH7yhM9LNjjkcZrGNK1SCeAyWc7LGxDySySFmP/AJHJOTkefWrXL48W4XNk1P2qM8ptYyJpIyQeuYE8DvgfT8Kzvcm5Nxa/Ok010IoAHYF0LdOeB0rkDtzmll9Y0qFjc+6EkgzIZJOXJIOOeO+aHXW4pH6Y5HMk7Dq9ygHn1P8ASB/apAJM3XHQj3oW6NT0yWKWHV7pBAp6VBUI/Ynr4+LPnzmtY2p7V9IljNvfExyLIFLDAznucDjOT2GPpXN32y+NsJGUOcg4Jwi/+RJ74r1ZajZ29xJLHcQvdAZX3ecn0BxnioIF0JJxXyZ2vp2pWl/aRXFtPHJHJ90qe9V9b0W11OLLKI5h9117iuYNg7+TQtVi1COYzxRhi8fUwVlYEHvxnz+FdDbD3ppu5IFi+1Wy3nQJRErYZ4z2bpPIxwCPH41mA3uYOhQ3AGoWl3ps3urxfhzhJB2NR9ZBHNaVeWdvdwGG4jV1b5Uhbl0WfR83EHVLa5yR5Wrbq7lRzIYpyD34q1HOp85oJb3UUg6kOT6eanWcg1PBlrIjvubBlbPhaBray3NmUibpPeiWr3iXNzcqh4Q4r5pbCK0aRzgDNCE9kTRR0DFcx3FvOYyc4NNGs68mlbFudR94Ekji6U9S54GBQO5lWW5dwByeKXfbEl5J7LrmWzjBeK4TL4OVUnBxz5JHrW/QEqFs1MG3bcW9ze3FxO8bXbXBZGY9fXkDAxnjHf8AEUQi2zfHb6sQ3U/Ljp78c0vbB0mXWN22kFyoMMEpkKAfD3zk+tdFmzhWNUKLgDtiuc18QYdiUVdTmHWtO1CzMmYmCEEAgHvS6j6rIfdW6mEE8DgM5HqfNdQ6npFlcI6NChRh90jile82pYnkQqoXkYWqrqXXgi4QdMj8k1MRsluZCTey3BJ7DqI/UVPcR3KRmCKRwreFiIY+mW7nHzrUm2vazpJmMDLf/oP61F/hXrUoY2Y9gwHNcNQd3Us2nTb3ELbEU8bGyYmVOD1N2B+vy5p425uX+HW97DHHi4I97FIn+pbMuSHjx905yCOxycg5qPUNrXenaVcy26qrpGSUxyy+fpQ/ZIje/SSOJTlsPER1A48AjnnPY+vetwS3JEBy41UUDOxtlawuvbU0zWgU/wA1bLIxUEL1YwcZ8ZBqDdOrWaWUlt8MrsCCPApdt72LTdCtNK04CG2t4ggA475J/UmiWzpdCnEz6jNC8+cBJCO1ZIpyttECasQ3GKscEaxAiMKfUV4YgVo9htrQ5G960omViSqCTCgeBxRu10bSrYD3Njbr8+kE1uNKx7MyOqX0IlX1t7qSWZcgSHJqlfymKyVA+Ax7Vat9QTUNIjkyC5FD9bjBgjOTk0GqkKQYYWBYESl1YAqDeZ977ONYt5JCg6VII/3Af3q3aWzNae86hlT2NCN+ySf4D1eGNcOYgwPphgT+mam7E4CiJmfsq06G11h/drnoBy57kmtNuS3V9BzSd7KLQyxXV8w+AN0KfXzTbeyJGMkgZ9aobq4wxC2qUpkcg1RmUnPGauPdRtwMfhVO8BkTpWcxKe5AyaxBMMCgwVppDpLJj4PfsoJ+XGfpRSGPBxgVHDBFFEkSAIgGFFTpbQcB2Ygf09ZxWmMtcq6gCe4bZLwTo6howhU/P1FZh7M9Bkst5fEC1sGcvzn4lbK/pWxWEA92wjAC9JUAeKUduRpDqV4yRBZA7B2PrnH7CmaA7LMS6h6bbL+5dU1l9QWG1QR2o++3k/Sq9tJKAXy5fHc0ThjaSctMy9HjmrgW1X7oX96FHx6mRx2bJmd3u6NyaffSCKC76Fb4SpNSR+1/c8Mo65b3qwBliafZktmGSiH8KHXdhYyKS1uhP0qd23mpPiDccQ7sS+lukZHY9KHCii+6r42jQjGVNLXstBe3uGP9MmP0opvZszQr6VpqB2Zhg9COm27eJ9HLTdOXGQKzjdJur671nS1kkWIRNEFBx47/AI5opZbigtrZI2uCCo7ZoRrdx9uea4s34uGVHYd88gn9RQufHsUOsafjcgbKyNRNcSrslG0/2e28q8Szl2BYec4/YVmm+9walJdzxxXtw7wnDi1h6gmTgDqJAznwK17bUCT7N06Jj1qkRXPqQSKH6npdqYDELePpHjp4qj8kH1CsJC2a5mCaDr+40uveLqt6IGkEfXNCrJk8gcHvW0bba9vNPSSdkZwOWXsTVH/C0EjALDGgBzgIMflTXpViLPTiDwerNYOCzWOBDVZdoXszPd/a/qOgIyxNArkfAXBP6CkSw3ruK+nydTtoyG6cMjIufrjFa7vfbx1N4plVCVww6lzyO340uaLs+CHVBdGHpkwR1KcjB7jB47E+PNGYkCmmg+TJuQFasdxk9l2s6vcSpb6nEjo4/lzRtkVY0zSxc6tqgEwRZLtkx1YIwxohtPQbTSLhY9OVo4S3UIy2Qh+Wewqhcq5v1eEqM6rLK+O2FORn8qMV2x4xfJuLW06ajMRdCif6jIuyIyg6bydeP/vXhtkyKPh1Cf8AOov45fxsql8g+a+3O5LxMe7YNTrwIfU8p5n+58k2Xe4IXUpKibaOqKMLfkj5rU9puS/dyGA7UcsNTmmtg7Ac1H+NjPoSTqMg9mKnsiYnT7knzMaKbwfqvEHyoF7IHZtOuOf+81GtzMv8STq7Ac0ky8gmOsYoiImpabqbyvNBIFU9gRRvY4uIrC6t78L1D4kYnuCRkfpTbBqm2GtVhkdA4GDVKWDQ58/Z7xRnwGqrY2ZdtzsOoGLLvqV9mSn+Ay24bPuLuWMN4Izn+9WL0gseeBQvaTxQJq1mgK+7vnxnzkDmvmtXgiQ5I+tAZm2LH+lIf9ya1uka9WCPDOe9FrshIVUjluTSSNTsLKFrp7xUfnBVh1Z9BVOD2h2NzbgO7l046mGMgeayxZLXmGeIlvjHu8dEtElYYU/CT6VSEKs4deCfI80I0zcdtrdk0VrcB4xwwxjOaKaZIcBGOfrTBnsgQEJW4n7hBboWNnPc9OTFGSAO5PYD8yKBC3eztxFIcyO3Uxz5PJq5uqZLTT7dXBPXOrMB5C8/viqmpXEl4Y5o1ClsEZ8UUmMkrcWZtSER67PH6nt/vDJz9atQw20idTuF+VfdM0b3wEt7eKFPgGjsNpt21h6ZLhD8ya7x5CeT/cXeTGBwIuypFGcwtkYq7YXVwIFVMdNGtJ0bQNQlmdLtAqjnDUyaJsrR5tPjl9+7dXOVbirpiyXdyrZMZ9TBNC3NZ7atZLayj1G6aRy7SmFFUfTLUL3B7QNTV3uI4b5yFyEaOE5+XDZpGt9caZWjkcCaLhucda+v1r9PqcMsXT7xli8HPMZ/4q3xjRcKiGod/T32nvcXKCKTqKmOKJpOg+M8dvX0ottb2g6DEizXUDI68P0sWTPyb/msl1KZrbUGweiOXhgrfr/ehD38jxNDIf5jz4YgYyBgVO1WHIkMig8zfLfdkKbglvYiYrO/T3sfWMZI4Jx8gK87q3DJqSx29j1EsuRjs2Tj60D3LodzP7ItOv7IM17Zq8/SBy0Tdx68AK2PrSV7PtzyQXsZmHWC+ASOc+MUl1eLdbJ6MZ6TIqOFP6jlc6RqKwL9ss53kz1K0RDDp9MeKCPpVrJOlxJqBheMkNE64x8ua2AajavYJIY+tWUHHkH1pavNxaM16IpR1sCMB4gcZ480NhKkdx1iy4yPksU9DnewuzJHde7HIBCMev8AL/3zWjbI1eS5SRp3JIYHJ4J54OKmsW02WETEA/Dwen4QPl6Ujb/3FZ7duRFZABrjJYqe+OOaLVLcBTcV6rJjo1xHfdG69HN8LS+u/dhYiFKoWAYnzjtxXm7vIb/SIxpmoW0kgHH80J++KwKXVpbzUWuJGyuQMfIURt77M0SZ+EvyPWnafGogbTLkBN9zXdunXYb2SHUzIIx9znqVvofNRbwTUHsWNr19RbwaAbT3i7SJEZOtDnKv2wOKcJmvL2H3ln0yQuMjjkfI1ouIM1k0DAM+A4VG0XBm1RrFlbyObh0V1HUM96ebTXNYg0GM2l/IjBeATSe1lqhjCkEDzgVKiakkSxhgAvirHxpwrAzP5PyVM59ur1op45g7Kx+FsH8q/fbSD3yG8Y5B80KZve28kTnDr2z3qBZyVU8jjqOfXsaHqN/IRCGoXJltjkHqjOB/t8UMd/8ANxv2zhsZ81OzEuy9ywIzVCVvgB7dLcmuEjI3udYaJIg25YRxkFVtYwPQ/CKwf2haFdbU3Ct/aL/064mMkbD/ALT+UPoOeK0b2U7gTU9pW0XWDNar7mRfIx2P4jFH9ZsrPUtOnsr2ESQTKVZfr5Fee87YcxDDj3HXgGXECp57EWNA3lp89lDazADqTLc4wMdvlVcX2nz6mZ/dxhQQqgDgfj9KQtx7G3BoM3v9Kf8AiNqT8Ij4dR6FfP4UHFxuhZ0sjpl975uET3DdXPbxWo0aObxNITXNiFZVIM2XU9xRWmjzx2YSEqhPxNxWR6rqp1DV7eeR+pyhYEk/Pn/30ph07aut/wALuNY3cpsNLtYnleDrHvZ+OFwM9OTgZ+fFZ5DKW1zrKhMu3wqOFGOw+VNNHgGIfZivV6g5SOKEJWkuF5bn0ohps+LiLBJw7nOfRaDW74x1YH41Y0+cxzEj+kSEc/ICi5krxh25dFbuSQnAhgY9/JraPZZroiSSCQCTKDhj5xmsD0eTCzM3aRgp+g5/4p92XfGO4tQrfFc3KqMH+ktj9ga17xlR/MqafubyNYtWTpa1U59CKH3UdlNIZA00WfC9qW7SzdL1lEsmM8DqqTVPtSTL7mcxgADAGcmvMLqswBY+oS2mxWB9zmaSVeqO4j6Rk4I9PlUKEe8kXOByR+IP9xX6Zslu3S+M+Ok+DVdH/nxnHPYj5g16KAs3PMuRvwpx4xyaqSgZlQ+eRU0ZLL3x3HAqKdf8xg55GP0qakE8QnsbcdztzVluYyWib4J488MPX61vml69Yajaxzwyr0svY8YrmQcsrj05oxpGs3+m/wDx5SYz3Unil+r0QzncODD9DrvCNj9f6nRU0gALIykeOa9WV6AxJRYwo5cmsQt996pEuB0kY7MOBVPVNz6xqi+6muWWJu6L8Kn8u9D6f8dkDAwzN+RwlaEZfbNvaPU4o9A0qTqtTKDPKO0hB7D5D18ms6tsjU1OeTKRX3Uhi4txnJByfzryg6btX7/zc5H1pwMYQUIkdy72ZaT4TnH9R5r1E5CzMOAFYftUZP8AqYGSGP7146v5cqjt1YJ/LP7VMkkQhaSlIkiBILn96dNm3Cya7pkecrGWmPnCrwv5kk0gwMHlUkkD5eBTxsND7+S9fhpCEj+SL/ya2xJuMkH6m4WjK123T9a8XvSZnDc4IxUOizB1E5YAMg81TvLlX1L4JA3ODg15TU4/GHU/f/Yxx/JlP8T/2Q==';
    },
    412: function (e, a, t) {
      'use strict';
      t.r(a);
      var l = t(49),
        n = t(0),
        r = t.n(n);
      var c = function (e, a, t) {
        let l;
        return function (...n) {
          const r = this,
            c = t && !l;
          clearTimeout(l),
            (l = setTimeout(function () {
              (l = null), t || e.apply(r, n);
            }, a)),
            c && e.apply(r, n);
        };
      };
      var o = function (e = !0, a = 250, t = {}) {
          const r = Object(n.useState)(t),
            o = Object(l.a)(r, 2),
            m = o[0],
            i = o[1],
            s = Object(n.useState)(null),
            h = Object(l.a)(s, 2),
            d = h[0],
            p = h[1],
            u = Object(n.useCallback)((e) => {
              p(e);
            }, []);
          return (
            Object(n.useLayoutEffect)(() => {
              if (!d) return;
              const t = () => {
                window.requestAnimationFrame(() => {
                  const e = d.getBoundingClientRect();
                  i(e);
                });
              };
              if ((t(), e)) {
                const e = c(t, a);
                if ('ResizeObserver' in window) {
                  const a = new ResizeObserver(e);
                  return (
                    a.observe(d),
                    window.addEventListener('scroll', e),
                    () => {
                      a.disconnect(), window.removeEventListener('scroll', e);
                    }
                  );
                }
                return (
                  window.addEventListener('resize', e),
                  window.addEventListener('scroll', e),
                  () => {
                    window.removeEventListener('resize', e),
                      window.removeEventListener('scroll', e);
                  }
                );
              }
            }, [d, e, a]),
            [u, m, d]
          );
        },
        m = t(6),
        i = t(48),
        s = t(72),
        h = t(51);
      const d = Object(s.b)('div', ({ $theme: e }) => ({
          width: '270px',
          height: 'auto',
          display: 'flex',
          flexShrink: '0',
          backgroundColor: '#ffffff',
          flexDirection: 'column',
          '@media only screen and (max-width: 767px)': {
            width: 'auto',
            padding: '0',
            height: '100%',
          },
        })),
        p = Object(s.b)('div', ({ $theme: e }) => ({
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
          padding: '45px 0',
          overflowY: 'auto',
          '@media only screen and (max-width: 767px)': { padding: '20px 0' },
        })),
        u = Object(s.b)(h.c, ({ $theme: e }) =>
          Object(i.a)(
            Object(i.a)({}, e.typography.fontBold16),
            {},
            {
              width: 'calc(100% - 30px)',
              outline: '0',
              color: e.colors.textDark,
              display: 'flex',
              alignItems: 'center',
              padding: '20px 55px 20px 30px',
              textDecoration: 'none',
              transition: '0.15s ease-in-out',
              '@media only screen and (max-width: 767px)': {
                width: '100%',
                padding: '20px 35px',
              },
              '&.active': {
                color: e.colors.primary,
                backgroundColor: e.colors.backgroundF7,
                borderRadius: '50px 0 0 50px',
              },
            }
          )
        ),
        f = Object(s.b)('span', ({ $theme: e }) => ({
          width: '16px',
          marginRight: '15px',
          display: 'flex',
          alignItems: 'center',
        })),
        E = Object(s.b)('button', ({ $theme: e }) =>
          Object(i.a)(
            Object(i.a)({}, e.typography.fontBold16),
            {},
            {
              width: 'calc(100% - 30px)',
              outline: '0',
              color: e.colors.textDark,
              backgroundColor: 'transparent',
              border: '0',
              display: 'flex',
              alignItems: 'center',
              padding: '20px 55px 20px 30px',
              textDecoration: 'none',
              transition: '0.15s ease-in-out',
              marginLeft: 'auto',
              marginTop: 'auto',
              marginBottom: '25px',
              cursor: 'pointer',
              '@media only screen and (max-width: 767px)': {
                width: '100%',
                padding: '20px 35px',
              },
            }
          )
        );
      var g = t(12),
        v = t(54),
        b = t(121);
      const M = [
        {
          name: 'Dashboard',
          path: g.e,
          exact: !0,
          icon: r.a.createElement(b.d, null),
        },
        {
          name: 'Types',
          path: g.q,
          exact: !1,
          icon: r.a.createElement(b.g, null),
        },
        {
          name: 'Categories',
          path: g.a,
          exact: !1,
          icon: r.a.createElement(b.l, null),
        },
        {
          name: 'Products',
          path: g.l,
          exact: !1,
          icon: r.a.createElement(b.j, null),
        },
        {
          name: 'PaymentOptions',
          path: g.k,
          exact: !1,
          icon: r.a.createElement(b.a, null),
        },
        {
          name: 'DeliveryMethods',
          path: g.f,
          exact: !1,
          icon: r.a.createElement(b.b, null),
        },
        {
          name: 'Orders',
          path: g.j,
          exact: !1,
          icon: r.a.createElement(b.h, null),
        },
        {
          name: 'Coupons',
          path: g.b,
          exact: !1,
          icon: r.a.createElement(b.c, null),
        },
        {
          name: 'HomeCards',
          path: g.h,
          exact: !1,
          icon: r.a.createElement(b.e, null),
        },
        {
          name: 'Settings',
          path: g.n,
          exact: !1,
          icon: r.a.createElement(b.k, null),
        },
      ];
      var w = Object(m.i)(function ({ refs: e, style: a, onMenuItemClick: t }) {
          const l = Object(n.useContext)(v.a).signout;
          return r.a.createElement(
            d,
            { ref: e, style: a },
            r.a.createElement(
              p,
              null,
              M.map((e, a) =>
                r.a.createElement(
                  u,
                  {
                    to: e.path,
                    key: a,
                    exact: e.exact,
                    activeStyle: {
                      color: '#00C58D',
                      backgroundColor: '#f7f7f7',
                      borderRadius: '50px 0 0 50px',
                    },
                    onClick: t,
                  },
                  e.icon ? r.a.createElement(f, null, e.icon) : '',
                  e.name
                )
              )
            ),
            r.a.createElement(
              E,
              {
                onClick: () => {
                  l();
                },
              },
              r.a.createElement(f, null, r.a.createElement(b.f, null)),
              'Logout'
            )
          );
        }),
        x = t(33),
        y = t(58),
        k = t(434),
        A = t(156);
      var O = (e) => {
          let a = e.children,
            t = Object(y.a)(e, ['children']);
          return n.createElement(k.a, t, a);
        },
        z = t(153),
        j = t(155);
      Object(s.b)('div', ({ $theme: e }) => ({
        display: 'flex',
        position: 'relative',
        margin: '0 45px',
        cursor: 'pointer',
        '@media only screen and (max-width: 767px)': { margin: '0 20px' },
        '@media only screen and (min-width: 768px) and (max-width: 991px)': {
          margin: '0 30px',
        },
      })),
        Object(s.b)('div', ({ $theme: e }) => ({
          color: e.colors.lightGreen,
          position: 'absolute',
          top: '-4px',
          right: '-2px',
          display: 'flex',
        }));
      const _ = Object(s.b)('div', () => ({
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          backgroundColor: '#fff',
          padding: '30px 60px',
          boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.06)',
          position: 'relative',
          '@media only screen and (max-width: 767px)': { padding: '20px' },
          '@media only screen and (max-width: 1440px)': {
            padding: '20px 45px',
          },
        })),
        P = Object(s.b)('div', () => ({
          marginRight: 'auto',
          cursor: 'pointer',
          '@media only screen and (max-width: 1199px)': { display: 'none' },
        })),
        C = Object(s.b)('div', ({ $theme: e }) => ({
          color: e.colors.textDark,
          cursor: 'pointer',
        })),
        B = Object(s.b)('img', () => ({
          display: 'block',
          backfaceVisibility: 'hidden',
          maxWidth: '150px',
        })),
        H = Object(s.b)('div', () => ({
          display: 'flex',
          alignItems: 'center',
        })),
        R = Object(s.b)('div', () => ({
          width: '40px',
          height: '40px',
          display: 'flex',
          borderRadius: '50%',
          border: '2px solid #ffffff',
          overflow: 'hidden',
          cursor: 'pointer',
          flexShrink: '0',
        })),
        W = Object(s.b)('img', () => ({ width: '100%', height: '100%' })),
        Z = Object(s.b)('div', () => ({
          display: 'flex',
          flexDirection: 'column',
        })),
        L =
          (Object(s.b)(h.c, ({ $theme: e }) => ({
            fontSize: '16px',
            fontWeight: '700',
            color: e.colors.textNormal,
            lineHeight: '1.2em',
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            margin: '0',
            padding: '16px 20px',
            borderBottom: '1px solid '.concat(e.colors.backgroundF7),
            transition: '0.15s ease-in-out',
            cursor: 'pointer',
            ':hover': { color: e.colors.primary },
          })),
          Object(s.b)('button', ({ $theme: e }) => ({
            fontSize: '16px',
            fontWeight: '700',
            color: e.colors.textNormal,
            backgroundColor: 'transparent',
            lineHeight: '1.2em',
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            margin: '0',
            padding: '16px 20px',
            border: '0',
            outline: '0',
            transition: '0.15s ease-in-out',
            cursor: 'pointer',
            ':hover': { color: e.colors.primary },
          }))),
        V = Object(s.b)('button', ({ $theme: e }) => ({
          color: e.colors.textNormal,
          backgroundColor: 'transparent',
          outline: '0',
          border: 'none',
          padding: '0',
          display: 'flex',
          alignItems: 'center',
          position: 'absolute',
          top: '20px',
          right: '30px',
          cursor: 'pointer',
        })),
        S = Object(s.b)('div', ({ $theme: e }) => ({
          '@media only screen and (min-width: 1200px)': { display: 'none' },
        }));
      var G = t(296),
        T = t.n(G),
        I = t(98),
        q = t(424),
        $ = t(227);
      var D = (e) => {
          let a = e.children,
            t = Object(y.a)(e, ['children']);
          return r.a.createElement(
            n.Fragment,
            null,
            r.a.createElement(q.a, t, a)
          );
        },
        N = t(52),
        U = t(25),
        F = t(103);
      function K() {
        const e = Object(x.a)([
          '\n    query GetSetting {\n        getSiteSetting(key: "site-settings") {\n            id\n            key\n            value\n        }\n    }\n',
        ]);
        return (
          (K = function () {
            return e;
          }),
          e
        );
      }
      const Q = Object(N.a)(K());
      var Y = ({ refs: e }) => {
          const a = Object(U.b)(Q),
            t = a.data,
            c = (a.error, a.refetch, Object(n.useState)(null)),
            o = Object(l.a)(c, 2),
            m = o[0],
            i = o[1];
          r.a.useEffect(() => {
            t && i(JSON.parse(t.getSiteSetting.value));
          }, [t]);
          let s = document.getElementById('favicon');
          m && (s.href = F.a + m.favicon);
          const d = Object(I.b)(),
            p = r.a.useContext(v.a).signout,
            u = Object(n.useState)(!1),
            f = Object(l.a)(u, 2),
            E = f[0],
            g = f[1];
          Object(n.useCallback)(
            () => d({ type: 'OPEN_DRAWER', drawerComponent: 'PRODUCT_FORM' }),
            [d]
          );
          return r.a.createElement(
            _,
            { ref: e },
            r.a.createElement(
              P,
              null,
              r.a.createElement(
                h.b,
                { to: '/' },
                r.a.createElement(B, {
                  src: m ? F.a + m.image : '',
                  alt: m ? m.site_title : '',
                })
              )
            ),
            r.a.createElement(
              S,
              null,
              r.a.createElement(
                C,
                { onClick: () => g(!0) },
                r.a.createElement(j.a, null)
              ),
              r.a.createElement(
                D,
                {
                  isOpen: E,
                  anchor: $.a.left,
                  onClose: () => g(!1),
                  overrides: {
                    Root: { style: { zIndex: '1' } },
                    DrawerBody: {
                      style: {
                        marginRight: '0',
                        marginLeft: '0',
                        '@media only screen and (max-width: 767px)': {
                          marginLeft: '30px',
                        },
                      },
                    },
                    DrawerContainer: {
                      style: {
                        width: '270px',
                        '@media only screen and (max-width: 767px)': {
                          width: '80%',
                        },
                      },
                    },
                    Close: {
                      component: () =>
                        r.a.createElement(
                          V,
                          { onClick: () => g(!1) },
                          r.a.createElement(z.a, null)
                        ),
                    },
                  },
                },
                r.a.createElement(w, { onMenuItemClick: () => g(!1) })
              )
            ),
            r.a.createElement(
              H,
              null,
              r.a.createElement(
                O,
                {
                  content: ({ close: e }) =>
                    r.a.createElement(
                      Z,
                      null,
                      r.a.createElement(
                        L,
                        {
                          onClick: () => {
                            p(), e();
                          },
                        },
                        'Logout'
                      )
                    ),
                  accessibilityType: 'tooltip',
                  placement: A.f.bottomRight,
                  overrides: {
                    Body: { style: () => ({ width: '220px', zIndex: 2 }) },
                    Inner: { style: { backgroundColor: '#ffffff' } },
                  },
                },
                r.a.createElement(
                  R,
                  null,
                  r.a.createElement(W, { src: T.a, alt: 'user' })
                )
              )
            )
          );
        },
        X = t(154),
        J = t(108),
        ee = t(34),
        ae = t.n(ee),
        te = t(110),
        le = t(127),
        ne = t(101),
        re = t(132),
        ce = t(416),
        oe = t(169),
        me = t(99),
        ie = t(105),
        se = t(100),
        he = t(106),
        de = t(104),
        pe = t(107),
        ue = t(122),
        fe = t(425),
        Ee = t(230);
      const ge = (e) =>
          n.createElement(
            fe.a,
            { kind: Ee.a.positive, closeable: !0, autoHideDuration: 3e3 },
            () => e
          ),
        ve = (e) =>
          n.createElement(
            fe.a,
            { kind: Ee.a.negative, closeable: !0, autoHideDuration: 3e3 },
            () => e
          );
      function be() {
        const e = Object(x.a)([
          '\n\n    mutation CreateType($input: MainTypeInput!) {\n        createType(input: $input) {\n            id\n            name\n            slug\n            image\n            icon\n            home_title\n            home_subtitle\n            meta_title\n            meta_keyword\n            meta_description\n            created_at\n        }\n    }\n',
        ]);
        return (
          (be = function () {
            return e;
          }),
          e
        );
      }
      function Me() {
        const e = Object(x.a)([
          '\n    query GetTypes(\n        $searchText: String\n        $offset: Int\n    ) {\n        types(\n            searchText: $searchText\n            offset: $offset\n        ) {\n            items {\n                id\n                name\n                slug\n                image\n                icon\n                home_title\n                home_subtitle\n                meta_title\n                meta_keyword\n                meta_description\n                created_at\n            }\n            totalCount\n            hasMore\n        }\n    }\n',
        ]);
        return (
          (Me = function () {
            return e;
          }),
          e
        );
      }
      const we = ae()(Me()),
        xe = ae()(be());
      var ye = (e) => {
        const a = Object(I.b)(),
          t = Object(n.useCallback)(() => a({ type: 'CLOSE_DRAWER' }), [a]),
          c = Object(J.a)(),
          o = c.register,
          m = c.handleSubmit,
          s = c.setValue,
          h = Object(n.useState)(''),
          d = Object(l.a)(h, 2),
          p = d[0],
          u = d[1],
          f = Object(n.useState)(''),
          E = Object(l.a)(f, 2),
          g = E[0],
          v = E[1],
          b = Object(n.useState)(''),
          M = Object(l.a)(b, 2),
          w = M[0],
          x = M[1],
          y = Object(n.useState)(''),
          k = Object(l.a)(y, 2),
          A = k[0],
          O = k[1],
          z = Object(n.useState)(''),
          j = Object(l.a)(z, 2),
          _ = j[0],
          P = j[1],
          C = Object(n.useState)([]),
          B = Object(l.a)(C, 2),
          H = B[0],
          R = B[1];
        r.a.useEffect(() => {
          o({ name: 'icon', required: !0 }),
            o({ name: 'image_data' }),
            o({ name: 'image', required: !0 }),
            o({ name: 'home_title' }),
            o({ name: 'home_subtitle' }),
            o({ name: 'meta_title' }),
            o({ name: 'meta_keyword' }),
            o({ name: 'meta_description' });
        }, [o]);
        const W = Object(U.a)(xe, {
            onCompleted: () => {
              ge("You've successfully created your type!");
            },
            onError: () => {
              ve(
                "Sorry! We weren't able to create your type. Please try again later."
              );
            },
            update(e, { data: { createType: a } }) {
              const t = e.readQuery({ query: we }).types;
              e.writeQuery({
                query: we,
                data: {
                  types: {
                    __typename: t.__typename,
                    items: [a, ...t.items],
                    hasMore: t.items.length + 1 >= 12,
                    totalCount: t.items.length + 1,
                  },
                },
              });
            },
          }),
          Z = Object(l.a)(W, 1)[0];
        return r.a.createElement(
          r.a.Fragment,
          null,
          r.a.createElement(
            he.c,
            null,
            r.a.createElement(he.b, null, 'Add Type')
          ),
          r.a.createElement(
            he.e,
            {
              onSubmit: m(
                ({
                  name: e,
                  icon: a,
                  home_title: l,
                  home_subtitle: n,
                  meta_title: r,
                  meta_keyword: c,
                  meta_description: o,
                  image: m,
                  image_data: i,
                }) => {
                  const s = {
                    name: e,
                    image_data: i,
                    image: m,
                    icon: a[0].value,
                    home_title: l,
                    home_subtitle: n,
                    meta_title: r,
                    meta_keyword: c,
                    meta_description: o,
                  };
                  Z({ variables: { input: s } }), t();
                }
              ),
              style: { height: '100%' },
              encType: 'multipart/form-data',
            },
            r.a.createElement(
              te.Scrollbars,
              {
                autoHide: !0,
                renderView: (e) =>
                  r.a.createElement(
                    'div',
                    Object.assign({}, e, {
                      style: Object(i.a)(
                        Object(i.a)({}, e.style),
                        {},
                        { overflowX: 'hidden' }
                      ),
                    })
                  ),
                renderTrackHorizontal: (e) =>
                  r.a.createElement(
                    'div',
                    Object.assign({}, e, {
                      style: { display: 'none' },
                      className: 'track-horizontal',
                    })
                  ),
              },
              r.a.createElement(
                se.c,
                null,
                r.a.createElement(
                  se.a,
                  { lg: 4 },
                  r.a.createElement(he.d, null, 'Upload your Type image here')
                ),
                r.a.createElement(
                  se.a,
                  { lg: 8 },
                  r.a.createElement(
                    ie.a,
                    {
                      overrides: {
                        Block: {
                          style: {
                            width: '100%',
                            height: 'auto',
                            padding: '30px',
                            borderRadius: '3px',
                            backgroundColor: '#ffffff',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                          },
                        },
                      },
                    },
                    r.a.createElement(le.a, {
                      type: 'file',
                      required: !0,
                      onChange: (e) => {
                        s('image_data', {
                          name: e[0].name,
                          size: e[0].size,
                          type: e[0].type,
                        }),
                          Object(ue.a)(e[0], (e) => {
                            s('image', e);
                          });
                      },
                    })
                  )
                )
              ),
              r.a.createElement(
                se.c,
                null,
                r.a.createElement(
                  se.a,
                  { lg: 4 },
                  r.a.createElement(
                    he.d,
                    null,
                    "Add your type and necessary information's from here"
                  )
                ),
                r.a.createElement(
                  se.a,
                  { lg: 8 },
                  r.a.createElement(
                    ie.a,
                    null,
                    r.a.createElement(
                      de.b,
                      null,
                      r.a.createElement(de.c, null, 'Type Name'),
                      r.a.createElement(ne.a, {
                        inputRef: o({ required: !0 }),
                        name: 'name',
                        required: !0,
                      })
                    ),
                    r.a.createElement(
                      de.b,
                      null,
                      r.a.createElement(de.c, null, 'Icon'),
                      r.a.createElement(ce.a, {
                        options: pe.a,
                        labelKey: 'value',
                        valueKey: 'value',
                        placeholder: 'Ex: Choose type icon',
                        value: H,
                        required: !0,
                        searchable: !0,
                        onChange: ({ value: e }) => {
                          s('icon', e), R(e);
                        },
                        overrides: {
                          Placeholder: {
                            style: ({ $theme: e }) =>
                              Object(i.a)(
                                Object(i.a)({}, e.typography.fontBold14),
                                {},
                                { color: e.colors.textNormal }
                              ),
                          },
                          DropdownListItem: {
                            style: ({ $theme: e }) =>
                              Object(i.a)(
                                Object(i.a)({}, e.typography.fontBold14),
                                {},
                                { color: e.colors.textNormal }
                              ),
                          },
                          OptionContent: {
                            style: ({ $theme: e, $selected: a }) =>
                              Object(i.a)(
                                Object(i.a)({}, e.typography.fontBold14),
                                {},
                                {
                                  color: a
                                    ? e.colors.textDark
                                    : e.colors.textNormal,
                                }
                              ),
                          },
                          SingleValue: {
                            style: ({ $theme: e }) =>
                              Object(i.a)(
                                Object(i.a)({}, e.typography.fontBold14),
                                {},
                                { color: e.colors.textNormal }
                              ),
                          },
                          Popover: {
                            props: {
                              overrides: { Body: { style: { zIndex: 5 } } },
                            },
                          },
                        },
                        maxDropdownHeight: '300px',
                        type: oe.b.search,
                      })
                    ),
                    r.a.createElement(
                      de.b,
                      null,
                      r.a.createElement(de.c, null, 'Type Home Title'),
                      r.a.createElement(ne.a, {
                        inputRef: o({ required: !0 }),
                        name: 'home_title',
                        required: !0,
                        value: p,
                        onChange: (e) => {
                          const a = e.target.value;
                          s('home_title', a), u(a);
                        },
                      })
                    ),
                    r.a.createElement(
                      de.b,
                      null,
                      r.a.createElement(de.c, null, 'Type Home Sub Title'),
                      r.a.createElement(ne.a, {
                        inputRef: o({ required: !0 }),
                        name: 'home_subtitle',
                        required: !0,
                        value: g,
                        onChange: (e) => {
                          const a = e.target.value;
                          s('home_subtitle', a), v(a);
                        },
                      })
                    ),
                    r.a.createElement(
                      de.b,
                      null,
                      r.a.createElement(de.c, null, 'Meta Title'),
                      r.a.createElement(ne.a, {
                        name: 'meta_title',
                        value: w,
                        onChange: (e) => {
                          const a = e.target.value;
                          s('meta_title', a), x(a);
                        },
                      })
                    ),
                    r.a.createElement(
                      de.b,
                      null,
                      r.a.createElement(de.c, null, 'Meta Keyword'),
                      r.a.createElement(ne.a, {
                        name: 'meta_keyword',
                        value: A,
                        onChange: (e) => {
                          const a = e.target.value;
                          s('meta_keyword', a), O(a);
                        },
                      })
                    ),
                    r.a.createElement(
                      de.b,
                      null,
                      r.a.createElement(de.c, null, 'Meta Description'),
                      r.a.createElement(re.a, {
                        name: 'meta_description',
                        value: _,
                        onChange: (e) => {
                          const a = e.target.value;
                          s('meta_description', a), P(a);
                        },
                      })
                    )
                  )
                )
              )
            ),
            r.a.createElement(
              he.a,
              null,
              r.a.createElement(
                me.b,
                {
                  kind: me.a.minimal,
                  onClick: t,
                  overrides: {
                    BaseButton: {
                      style: ({ $theme: e }) => ({
                        width: '50%',
                        borderTopLeftRadius: '3px',
                        borderTopRightRadius: '3px',
                        borderBottomRightRadius: '3px',
                        borderBottomLeftRadius: '3px',
                        marginRight: '15px',
                        color: e.colors.red400,
                      }),
                    },
                  },
                },
                'Cancel'
              ),
              r.a.createElement(
                me.b,
                {
                  type: 'submit',
                  overrides: {
                    BaseButton: {
                      style: ({ $theme: e }) => ({
                        width: '50%',
                        borderTopLeftRadius: '3px',
                        borderTopRightRadius: '3px',
                        borderBottomRightRadius: '3px',
                        borderBottomLeftRadius: '3px',
                      }),
                    },
                  },
                },
                'Create Type'
              )
            )
          )
        );
      };
      function ke() {
        const e = Object(x.a)([
          '  \n  mutation UpdateType($id: ID!, $input: MainTypeInput!) {\n    updateType(id: $id, input: $input) {\n      id\n      name\n      slug\n      image\n      icon\n      home_title\n      home_subtitle\n      meta_title\n      meta_keyword\n      meta_description\n      created_at\n    }\n  }\n',
        ]);
        return (
          (ke = function () {
            return e;
          }),
          e
        );
      }
      function Ae() {
        const e = Object(x.a)([
          '\n  query GetTypes(\n    $searchText: String\n    $offset: Int\n  ) {\n    types(\n      searchText: $searchText\n      offset: $offset\n    ) {\n      items {\n        id\n        name\n        slug\n        image\n        icon\n        home_title\n        home_subtitle\n        meta_title\n        meta_keyword\n        meta_description\n        created_at\n      }\n      totalCount\n      hasMore\n    }\n  }\n',
        ]);
        return (
          (Ae = function () {
            return e;
          }),
          e
        );
      }
      const Oe = ae()(Ae()),
        ze = ae()(ke());
      var je = (e) => {
          const a = Object(I.b)(),
            t = Object(I.c)('data'),
            c = Object(n.useCallback)(() => a({ type: 'CLOSE_DRAWER' }), [a]),
            o = Object(J.a)({ defaultValues: t }),
            m = o.register,
            s = o.handleSubmit,
            h = o.setValue,
            d = Object(n.useState)(t.home_title ? t.home_title : ''),
            p = Object(l.a)(d, 2),
            u = p[0],
            f = p[1],
            E = Object(n.useState)(t.home_subtitle ? t.home_subtitle : ''),
            g = Object(l.a)(E, 2),
            v = g[0],
            b = g[1],
            M = Object(n.useState)(t.meta_title ? t.meta_title : ''),
            w = Object(l.a)(M, 2),
            x = w[0],
            y = w[1],
            k = Object(n.useState)(t.meta_keyword ? t.meta_keyword : ''),
            A = Object(l.a)(k, 2),
            O = A[0],
            z = A[1],
            j = Object(n.useState)(
              t.meta_description ? t.meta_description : ''
            ),
            _ = Object(l.a)(j, 2),
            P = _[0],
            C = _[1],
            B = Object(n.useState)([{ value: t.icon }]),
            H = Object(l.a)(B, 2),
            R = H[0],
            W = H[1];
          r.a.useEffect(() => {
            m({ name: 'icon' }),
              m({ name: 'image_data' }),
              m({ name: 'image', required: !0 }),
              m({ name: 'home_title' }),
              m({ name: 'home_subtitle' }),
              m({ name: 'meta_title' }),
              m({ name: 'meta_keyword' }),
              m({ name: 'meta_description' });
          }, [m]);
          const Z = Object(U.b)(Oe),
            L = (Z.data, Z.error, Z.refetch, Object(U.a)(ze)),
            V = Object(l.a)(L, 1)[0];
          return r.a.createElement(
            r.a.Fragment,
            null,
            r.a.createElement(
              he.c,
              null,
              r.a.createElement(he.b, null, 'Update Type')
            ),
            r.a.createElement(
              he.e,
              {
                onSubmit: s(
                  ({
                    name: e,
                    icon: a,
                    home_title: l,
                    home_subtitle: n,
                    meta_title: r,
                    meta_keyword: o,
                    meta_description: m,
                    image: i,
                    image_data: s,
                  }) => {
                    const h = {
                      name: e,
                      image_data: s,
                      image: i,
                      icon: a[0].value ? a[0].value : t.icon,
                      home_title: l,
                      home_subtitle: n,
                      meta_title: r,
                      meta_keyword: o,
                      meta_description: m,
                    };
                    V({ variables: { id: t.id, input: h } }), c();
                  }
                ),
                style: { height: '100%' },
                encType: 'multipart/form-data',
              },
              r.a.createElement(
                te.Scrollbars,
                {
                  autoHide: !0,
                  renderView: (e) =>
                    r.a.createElement(
                      'div',
                      Object.assign({}, e, {
                        style: Object(i.a)(
                          Object(i.a)({}, e.style),
                          {},
                          { overflowX: 'hidden' }
                        ),
                      })
                    ),
                  renderTrackHorizontal: (e) =>
                    r.a.createElement(
                      'div',
                      Object.assign({}, e, {
                        style: { display: 'none' },
                        className: 'track-horizontal',
                      })
                    ),
                },
                r.a.createElement(
                  se.c,
                  null,
                  r.a.createElement(
                    se.a,
                    { lg: 4 },
                    r.a.createElement(he.d, null, 'Upload your Type image here')
                  ),
                  r.a.createElement(
                    se.a,
                    { lg: 8 },
                    r.a.createElement(
                      ie.a,
                      {
                        overrides: {
                          Block: {
                            style: {
                              width: '100%',
                              height: 'auto',
                              padding: '30px',
                              borderRadius: '3px',
                              backgroundColor: '#ffffff',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                            },
                          },
                        },
                      },
                      r.a.createElement(le.a, {
                        type: 'file',
                        required: !0,
                        onChange: (e) => {
                          h('image_data', {
                            name: e[0].name,
                            size: e[0].size,
                            type: e[0].type,
                          }),
                            Object(ue.a)(e[0], (e) => {
                              h('image', e);
                            });
                        },
                        imageURL: F.a + t.image,
                      })
                    )
                  )
                ),
                r.a.createElement(
                  se.c,
                  null,
                  r.a.createElement(
                    se.a,
                    { lg: 4 },
                    r.a.createElement(
                      he.d,
                      null,
                      "Update your type and necessary information's from here"
                    )
                  ),
                  r.a.createElement(
                    se.a,
                    { lg: 8 },
                    r.a.createElement(
                      ie.a,
                      null,
                      r.a.createElement(
                        de.b,
                        null,
                        r.a.createElement(de.c, null, 'Type Name'),
                        r.a.createElement(ne.a, {
                          inputRef: m({ required: !0 }),
                          name: 'name',
                          required: !0,
                        })
                      ),
                      r.a.createElement(
                        de.b,
                        null,
                        r.a.createElement(de.c, null, 'Icon'),
                        r.a.createElement(ce.a, {
                          options: pe.a,
                          labelKey: 'value',
                          valueKey: 'value',
                          placeholder: 'Ex: Choose type icon',
                          value: R,
                          required: !0,
                          searchable: !0,
                          onChange: ({ value: e }) => {
                            h('icon', e), W(e);
                          },
                          overrides: {
                            Placeholder: {
                              style: ({ $theme: e }) =>
                                Object(i.a)(
                                  Object(i.a)({}, e.typography.fontBold14),
                                  {},
                                  { color: e.colors.textNormal }
                                ),
                            },
                            DropdownListItem: {
                              style: ({ $theme: e }) =>
                                Object(i.a)(
                                  Object(i.a)({}, e.typography.fontBold14),
                                  {},
                                  { color: e.colors.textNormal }
                                ),
                            },
                            OptionContent: {
                              style: ({ $theme: e, $selected: a }) =>
                                Object(i.a)(
                                  Object(i.a)({}, e.typography.fontBold14),
                                  {},
                                  {
                                    color: a
                                      ? e.colors.textDark
                                      : e.colors.textNormal,
                                  }
                                ),
                            },
                            SingleValue: {
                              style: ({ $theme: e }) =>
                                Object(i.a)(
                                  Object(i.a)({}, e.typography.fontBold14),
                                  {},
                                  { color: e.colors.textNormal }
                                ),
                            },
                            Popover: {
                              props: {
                                overrides: { Body: { style: { zIndex: 5 } } },
                              },
                            },
                          },
                          maxDropdownHeight: '300px',
                          type: oe.b.search,
                        })
                      ),
                      r.a.createElement(
                        de.b,
                        null,
                        r.a.createElement(de.c, null, 'Type Home Title'),
                        r.a.createElement(ne.a, {
                          inputRef: m({ required: !0 }),
                          name: 'home_title',
                          required: !0,
                          value: u,
                          onChange: (e) => {
                            const a = e.target.value;
                            h('home_title', a), f(a);
                          },
                        })
                      ),
                      r.a.createElement(
                        de.b,
                        null,
                        r.a.createElement(de.c, null, 'Type Home Sub Title'),
                        r.a.createElement(ne.a, {
                          inputRef: m({ required: !0 }),
                          name: 'home_subtitle',
                          required: !0,
                          value: v,
                          onChange: (e) => {
                            const a = e.target.value;
                            h('home_subtitle', a), b(a);
                          },
                        })
                      ),
                      r.a.createElement(
                        de.b,
                        null,
                        r.a.createElement(de.c, null, 'Meta Title'),
                        r.a.createElement(ne.a, {
                          name: 'meta_title',
                          value: x,
                          onChange: (e) => {
                            const a = e.target.value;
                            h('meta_title', a), y(a);
                          },
                        })
                      ),
                      r.a.createElement(
                        de.b,
                        null,
                        r.a.createElement(de.c, null, 'Meta Keyword'),
                        r.a.createElement(ne.a, {
                          name: 'meta_keyword',
                          value: O,
                          onChange: (e) => {
                            const a = e.target.value;
                            h('meta_keyword', a), z(a);
                          },
                        })
                      ),
                      r.a.createElement(
                        de.b,
                        null,
                        r.a.createElement(de.c, null, 'Meta Description'),
                        r.a.createElement(re.a, {
                          name: 'meta_description',
                          value: P,
                          onChange: (e) => {
                            const a = e.target.value;
                            h('meta_description', a), C(a);
                          },
                        })
                      )
                    )
                  )
                )
              ),
              r.a.createElement(
                he.a,
                null,
                r.a.createElement(
                  me.b,
                  {
                    kind: me.a.minimal,
                    onClick: c,
                    overrides: {
                      BaseButton: {
                        style: ({ $theme: e }) => ({
                          width: '50%',
                          borderTopLeftRadius: '3px',
                          borderTopRightRadius: '3px',
                          borderBottomRightRadius: '3px',
                          borderBottomLeftRadius: '3px',
                          marginRight: '15px',
                          color: e.colors.red400,
                        }),
                      },
                    },
                  },
                  'Cancel'
                ),
                r.a.createElement(
                  me.b,
                  {
                    type: 'submit',
                    overrides: {
                      BaseButton: {
                        style: ({ $theme: e }) => ({
                          width: '50%',
                          borderTopLeftRadius: '3px',
                          borderTopRightRadius: '3px',
                          borderBottomRightRadius: '3px',
                          borderBottomLeftRadius: '3px',
                        }),
                      },
                    },
                  },
                  'Update Type'
                )
              )
            )
          );
        },
        _e = t(115),
        Pe = t(208),
        Ce = t(130);
      const Be = Object(s.b)('span', ({ $theme: e }) =>
          Object(i.a)(
            Object(i.a)({}, e.typography.font14),
            {},
            {
              fontFamily: e.typography.primaryFontFamily,
              color: e.colors.textDark,
              marginTop: '15px',
              textAlign: 'center',
            }
          )
        ),
        He = Object(s.b)('span', ({ $theme: e }) => ({
          color: e.colors.primary,
          fontWeight: 'bold',
        })),
        Re = Object(s.b)('div', ({ props: e }) => ({
          flex: '1',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '30px',
          borderWidth: '2px',
          borderRadius: '2px',
          borderColor: '#E6E6E6',
          borderStyle: 'dashed',
          backgroundColor: '#ffffff',
          color: '#bdbdbd',
          outline: 'none',
          transition: 'border 0.24s ease-in-out',
          cursor: 'pointer',
        })),
        We = Object(s.b)('aside', () => ({
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          marginTop: '16px',
        })),
        Ze = Object(s.b)('div', ({ $theme: e }) =>
          Object(i.a)(
            Object(i.a)({}, e.borders.borderEA),
            {},
            {
              display: 'inline-flex',
              borderRadius: '2px',
              marginBottom: '8px',
              marginRight: '8px',
              width: '100px',
              height: '100px',
              padding: '4px',
              boxSizing: 'border-box',
            }
          )
        ),
        Le = { display: 'flex', minWidth: 0, overflow: 'hidden' },
        Ve = { display: 'block', width: 'auto', height: '100%' };
      var Se = function ({ onChange: e, imagesURL: a }) {
          const t = Object(n.useState)([]),
            c = Object(l.a)(t, 2),
            o = c[0],
            m = c[1];
          r.a.useEffect(() => {
            let e = [];
            if (a)
              for (let t = 0; t < a.length; t++)
                e.push({ name: 'demo' + t, preview: F.a + a[t] });
            m(e);
          }, [a]);
          const i = Object(Pe.a)({
              accept: 'image/*',
              multiple: !0,
              onDrop: Object(n.useCallback)(
                (a) => {
                  m(
                    a.map((e) =>
                      Object.assign(e, { preview: URL.createObjectURL(e) })
                    )
                  ),
                    e(a);
                },
                [e]
              ),
            }),
            s = i.getRootProps,
            h = i.getInputProps,
            d = o.map((e) =>
              r.a.createElement(
                Ze,
                { key: e.name },
                r.a.createElement(
                  'div',
                  { style: Le },
                  r.a.createElement('img', {
                    src: e.preview,
                    style: Ve,
                    alt: e.name,
                  })
                )
              )
            );
          return (
            Object(n.useEffect)(
              () => () => {
                o.forEach((e) => URL.revokeObjectURL(e.preview));
              },
              [o]
            ),
            r.a.createElement(
              'section',
              { className: 'container uploader' },
              r.a.createElement(
                Re,
                s(),
                r.a.createElement('input', h()),
                r.a.createElement(Ce.a, null),
                r.a.createElement(
                  Be,
                  null,
                  r.a.createElement(He, null, 'Drag/Upload'),
                  ' your images here.'
                )
              ),
              d && r.a.createElement(We, null, d)
            )
          );
        },
        Ge = t(436);
      const Te = Object.freeze({
        top: 'top',
        right: 'right',
        bottom: 'bottom',
        left: 'left',
      });
      var Ie = (e) => {
          let a = Object.assign({}, e);
          return r.a.createElement(Ge.a, a);
        },
        qe = t(406);
      var $e = (e) => {
        let a = Object.assign({}, e);
        return r.a.createElement(
          qe.a,
          Object.assign(
            {
              inputMode: 'decimal',
              overrides: {
                Input: {
                  style: ({ $theme: e }) =>
                    Object(i.a)(
                      {},
                      (({ $theme: e }) =>
                        Object(i.a)(
                          { color: e.colors.textDark },
                          e.typography.fontBold14
                        ))({ $theme: e })
                    ),
                },
              },
            },
            a
          )
        );
      };
      function De() {
        const e = Object(x.a)([
          '\n  mutation createProduct($input: ProductInput!) {\n    createProduct(input: $input) {\n      id\n      type {\n        id\n        slug\n        name\n      }\n      categories {\n        id\n        slug\n        name\n      }\n      name\n      slug\n      description\n      images\n      unit\n      price\n      sale_price\n      discount_in_percent\n      product_quantity\n      is_featured\n      meta_title\n      meta_keyword\n      meta_description\n    }\n  }\n',
        ]);
        return (
          (De = function () {
            return e;
          }),
          e
        );
      }
      function Ne() {
        const e = Object(x.a)([
          '\n  query GetCategories {\n    categories(limit: 0) {\n      items {\n        id\n        parent_id\n        name\n        slug\n        banner\n        icon\n      }\n      totalCount\n      hasMore\n    }\n  }\n',
        ]);
        return (
          (Ne = function () {
            return e;
          }),
          e
        );
      }
      function Ue() {
        const e = Object(x.a)([
          '\n  query GetTypes {\n    types(limit: 0) {\n      items {\n        id\n        name\n        slug\n        image\n        icon\n        meta_title\n        meta_keyword\n        meta_description\n        created_at\n      }\n      totalCount\n      hasMore\n    }\n  }\n',
        ]);
        return (
          (Ue = function () {
            return e;
          }),
          e
        );
      }
      function Fe() {
        const e = Object(x.a)([
          '\n  query GetProducts(\n    $type: String\n    $category: String\n    $searchText: String\n    $offset: Int\n  ) {\n    products(\n      type: $type\n      category: $category\n      searchText: $searchText\n      offset: $offset\n    ) {\n      items {\n        id\n        type {\n          id\n          slug\n          name\n        }\n        categories {\n          id\n          slug\n          name\n        }\n        name\n        slug\n        description\n        images\n        unit\n        price\n        sale_price\n        discount_in_percent\n        product_quantity\n        is_featured\n        meta_title\n        meta_keyword\n        meta_description\n      }\n      totalCount\n      hasMore\n    }\n  }\n',
        ]);
        return (
          (Fe = function () {
            return e;
          }),
          e
        );
      }
      const Ke = ae()(Fe()),
        Qe = ae()(Ue()),
        Ye = ae()(Ne()),
        Xe = ae()(De());
      var Je = (e) => {
        const a = Object(U.b)(Qe),
          t = a.data,
          c = (a.error, a.refetch, Object(U.b)(Ye)),
          o = c.data,
          m = (c.error, c.refetch, Object(I.b)()),
          s = Object(n.useCallback)(() => m({ type: 'CLOSE_DRAWER' }), [m]),
          h = Object(J.a)(),
          d = h.register,
          p = h.handleSubmit,
          u = h.setValue,
          f = Object(n.useState)([]),
          E = Object(l.a)(f, 2),
          g = E[0],
          v = E[1],
          b = Object(n.useState)([]),
          M = Object(l.a)(b, 2),
          w = M[0],
          x = M[1],
          y = Object(n.useState)(''),
          k = Object(l.a)(y, 2),
          A = k[0],
          O = k[1],
          z = Object(n.useState)(!1),
          j = Object(l.a)(z, 2),
          _ = j[0],
          P = j[1],
          C = Object(n.useState)(''),
          B = Object(l.a)(C, 2),
          H = B[0],
          R = B[1],
          W = Object(n.useState)(''),
          Z = Object(l.a)(W, 2),
          L = Z[0],
          V = Z[1],
          S = Object(n.useState)(''),
          G = Object(l.a)(S, 2),
          T = G[0],
          q = G[1];
        r.a.useEffect(() => {
          d({ name: 'images_data' }),
            d({ name: 'type' }),
            d({ name: 'categories' }),
            d({ name: 'images', required: !0 }),
            d({ name: 'description' }),
            d({ name: 'is_featured' }),
            d({ name: 'meta_title' }),
            d({ name: 'meta_keyword' }),
            d({ name: 'meta_description' });
        }, [d]);
        const $ = Object(U.a)(Xe, {
            update(e, { data: { createProduct: a } }) {
              const t = e.readQuery({ query: Ke }).products;
              e.writeQuery({
                query: Ke,
                data: {
                  products: {
                    __typename: t.__typename,
                    items: [a, ...t.items],
                    hasMore: t.items.length + 1 >= 12,
                    totalCount: t.items.length + 1,
                  },
                },
              });
            },
          }),
          D = Object(l.a)($, 1)[0];
        return r.a.createElement(
          r.a.Fragment,
          null,
          r.a.createElement(
            he.c,
            null,
            r.a.createElement(he.b, null, 'Add Product')
          ),
          r.a.createElement(
            he.e,
            {
              onSubmit: p((e) => {
                if (!e.images) return alert('Please select images for product');
                const a = {
                  name: e.name,
                  type: e.type,
                  categories: e.categories,
                  description: e.description,
                  images_data: e.images_data,
                  images: e.images,
                  price: Number(e.price),
                  unit: e.unit,
                  sale_price: Number(e.salePrice),
                  discount_in_percent: Number(e.discountInPercent),
                  product_quantity: Number(e.quantity),
                  is_featured: e.is_featured,
                  meta_title: e.meta_title,
                  meta_keyword: e.meta_keyword,
                  meta_description: e.meta_description,
                };
                D({ variables: { input: a } }), s();
              }),
              style: { height: '100%' },
            },
            r.a.createElement(
              te.Scrollbars,
              {
                autoHide: !0,
                renderView: (e) =>
                  r.a.createElement(
                    'div',
                    Object.assign({}, e, {
                      style: Object(i.a)(
                        Object(i.a)({}, e.style),
                        {},
                        { overflowX: 'hidden' }
                      ),
                    })
                  ),
                renderTrackHorizontal: (e) =>
                  r.a.createElement(
                    'div',
                    Object.assign({}, e, {
                      style: { display: 'none' },
                      className: 'track-horizontal',
                    })
                  ),
              },
              r.a.createElement(
                se.c,
                null,
                r.a.createElement(
                  se.a,
                  { lg: 4 },
                  r.a.createElement(
                    he.d,
                    null,
                    'Upload your Product images here'
                  )
                ),
                r.a.createElement(
                  se.a,
                  { lg: 8 },
                  r.a.createElement(
                    ie.a,
                    {
                      overrides: {
                        Block: {
                          style: {
                            width: '100%',
                            height: 'auto',
                            padding: '30px',
                            borderRadius: '3px',
                            backgroundColor: '#ffffff',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                          },
                        },
                      },
                    },
                    r.a.createElement(Se, {
                      required: !0,
                      onChange: (e) => {
                        let a = [],
                          t = [];
                        for (let l = 0; l < e.length; l++)
                          a.push({
                            name: e[l].name,
                            size: e[l].size,
                            type: e[l].type,
                          }),
                            Object(ue.a)(e[l], (e) => {
                              t.push(e);
                            });
                        u('images_data', JSON.stringify(a)), u('images', t);
                      },
                    })
                  )
                )
              ),
              r.a.createElement(
                se.c,
                null,
                r.a.createElement(
                  se.a,
                  { lg: 4 },
                  r.a.createElement(
                    he.d,
                    null,
                    'Add your Product description and necessary information from here'
                  )
                ),
                r.a.createElement(
                  se.a,
                  { lg: 8 },
                  r.a.createElement(
                    ie.a,
                    null,
                    r.a.createElement(
                      de.b,
                      null,
                      r.a.createElement(de.c, null, 'Featured Product?'),
                      r.a.createElement(Ie, {
                        checked: _,
                        onChange: (e) => {
                          u('is_featured', e.target.checked),
                            P(e.target.checked);
                        },
                        labelPlacement: Te.right,
                      })
                    ),
                    r.a.createElement(
                      de.b,
                      null,
                      r.a.createElement(de.c, null, 'Name'),
                      r.a.createElement(ne.a, {
                        inputRef: d({ required: !0, maxLength: 60 }),
                        name: 'name',
                      })
                    ),
                    r.a.createElement(
                      de.b,
                      null,
                      r.a.createElement(de.c, null, 'Description'),
                      r.a.createElement(re.a, {
                        value: A,
                        onChange: (e) => {
                          const a = e.target.value;
                          u('description', a), O(a);
                        },
                      })
                    ),
                    r.a.createElement(
                      de.b,
                      null,
                      r.a.createElement(de.c, null, 'Unit'),
                      r.a.createElement(ne.a, {
                        type: 'text',
                        inputRef: d,
                        name: 'unit',
                      })
                    ),
                    r.a.createElement(
                      de.b,
                      null,
                      r.a.createElement(de.c, null, 'Price'),
                      r.a.createElement($e, {
                        type: 'number',
                        inputRef: d({ required: !0 }),
                        name: 'price',
                      })
                    ),
                    r.a.createElement(
                      de.b,
                      null,
                      r.a.createElement(de.c, null, 'Sale Price'),
                      r.a.createElement($e, {
                        type: 'number',
                        inputRef: d,
                        name: 'salePrice',
                      })
                    ),
                    r.a.createElement(
                      de.b,
                      null,
                      r.a.createElement(de.c, null, 'Discount In Percent'),
                      r.a.createElement(ne.a, {
                        step: 'any',
                        type: 'number',
                        inputRef: d,
                        name: 'discountInPercent',
                      })
                    ),
                    r.a.createElement(
                      de.b,
                      null,
                      r.a.createElement(de.c, null, 'Product Quantity'),
                      r.a.createElement(ne.a, {
                        type: 'number',
                        inputRef: d({ required: !0 }),
                        name: 'quantity',
                      })
                    ),
                    r.a.createElement(
                      de.b,
                      null,
                      r.a.createElement(de.c, null, 'Type'),
                      r.a.createElement(_e.a, {
                        options: t ? t.types.items : [],
                        labelKey: 'name',
                        valueKey: 'id',
                        placeholder: 'Select Product Type',
                        value: g,
                        required: !0,
                        searchable: !0,
                        onChange: ({ value: e }) => {
                          u('type', {
                            id: e[0].id,
                            name: e[0].name,
                            slug: e[0].slug,
                          }),
                            v(e);
                        },
                        overrides: {
                          Placeholder: {
                            style: ({ $theme: e }) =>
                              Object(i.a)(
                                Object(i.a)({}, e.typography.fontBold14),
                                {},
                                { color: e.colors.textNormal }
                              ),
                          },
                          DropdownListItem: {
                            style: ({ $theme: e }) =>
                              Object(i.a)(
                                Object(i.a)({}, e.typography.fontBold14),
                                {},
                                { color: e.colors.textNormal }
                              ),
                          },
                          OptionContent: {
                            style: ({ $theme: e, $selected: a }) =>
                              Object(i.a)(
                                Object(i.a)({}, e.typography.fontBold14),
                                {},
                                {
                                  color: a
                                    ? e.colors.textDark
                                    : e.colors.textNormal,
                                }
                              ),
                          },
                          SingleValue: {
                            style: ({ $theme: e }) =>
                              Object(i.a)(
                                Object(i.a)({}, e.typography.fontBold14),
                                {},
                                { color: e.colors.textNormal }
                              ),
                          },
                          Popover: {
                            props: {
                              overrides: { Body: { style: { zIndex: 5 } } },
                            },
                          },
                        },
                        type: oe.b.search,
                      })
                    ),
                    r.a.createElement(
                      de.b,
                      null,
                      r.a.createElement(de.c, null, 'Categories'),
                      r.a.createElement(_e.a, {
                        options: o ? o.categories.items : [],
                        labelKey: 'name',
                        valueKey: 'id',
                        placeholder: 'Select Product Categories',
                        value: w,
                        required: !0,
                        searchable: !0,
                        onChange: ({ value: e }) => {
                          let a = [];
                          for (let t = 0; t < e.length; t++)
                            a.push({
                              id: e[t].id,
                              name: e[t].name,
                              slug: e[t].slug,
                            });
                          u('categories', JSON.stringify(a)), x(e);
                        },
                        overrides: {
                          Placeholder: {
                            style: ({ $theme: e }) =>
                              Object(i.a)(
                                Object(i.a)({}, e.typography.fontBold14),
                                {},
                                { color: e.colors.textNormal }
                              ),
                          },
                          DropdownListItem: {
                            style: ({ $theme: e }) =>
                              Object(i.a)(
                                Object(i.a)({}, e.typography.fontBold14),
                                {},
                                { color: e.colors.textNormal }
                              ),
                          },
                          Popover: {
                            props: {
                              overrides: { Body: { style: { zIndex: 5 } } },
                            },
                          },
                        },
                        type: oe.b.search,
                        multi: !0,
                      })
                    ),
                    r.a.createElement(
                      de.b,
                      null,
                      r.a.createElement(de.c, null, 'Meta Title'),
                      r.a.createElement(ne.a, {
                        name: 'meta_title',
                        value: H,
                        onChange: (e) => {
                          const a = e.target.value;
                          u('meta_title', a), R(a);
                        },
                      })
                    ),
                    r.a.createElement(
                      de.b,
                      null,
                      r.a.createElement(de.c, null, 'Meta Keyword'),
                      r.a.createElement(ne.a, {
                        name: 'meta_keyword',
                        value: L,
                        onChange: (e) => {
                          const a = e.target.value;
                          u('meta_keyword', a), V(a);
                        },
                      })
                    ),
                    r.a.createElement(
                      de.b,
                      null,
                      r.a.createElement(de.c, null, 'Meta Description'),
                      r.a.createElement(re.a, {
                        name: 'meta_description',
                        value: T,
                        onChange: (e) => {
                          const a = e.target.value;
                          u('meta_description', a), q(a);
                        },
                      })
                    )
                  )
                )
              )
            ),
            r.a.createElement(
              he.a,
              null,
              r.a.createElement(
                me.b,
                {
                  kind: me.a.minimal,
                  onClick: s,
                  overrides: {
                    BaseButton: {
                      style: ({ $theme: e }) => ({
                        width: '50%',
                        borderTopLeftRadius: '3px',
                        borderTopRightRadius: '3px',
                        borderBottomRightRadius: '3px',
                        borderBottomLeftRadius: '3px',
                        marginRight: '15px',
                        color: e.colors.red400,
                      }),
                    },
                  },
                },
                'Cancel'
              ),
              r.a.createElement(
                me.b,
                {
                  type: 'submit',
                  overrides: {
                    BaseButton: {
                      style: ({ $theme: e }) => ({
                        width: '50%',
                        borderTopLeftRadius: '3px',
                        borderTopRightRadius: '3px',
                        borderBottomRightRadius: '3px',
                        borderBottomLeftRadius: '3px',
                      }),
                    },
                  },
                },
                'Create Product'
              )
            )
          )
        );
      };
      function ea() {
        const e = Object(x.a)([
          '\n  mutation UpdateProduct($id: ID!, $input: ProductUpdateInput!) {\n    updateProduct(id: $id, input: $input) {\n      id\n      type {\n        id\n        slug\n        name\n      }\n      categories {\n        id\n        slug\n        name\n      }\n      name\n      slug\n      description\n      images\n      unit\n      price\n      sale_price\n      discount_in_percent\n      product_quantity\n      is_featured\n      meta_title\n      meta_keyword\n      meta_description\n    }\n  }\n',
        ]);
        return (
          (ea = function () {
            return e;
          }),
          e
        );
      }
      function aa() {
        const e = Object(x.a)([
          '\n  query GetCategories {\n    categories(limit: 0) {\n      items {\n        id\n        parent_id\n        name\n        slug\n        banner\n        icon\n      }\n      totalCount\n      hasMore\n    }\n  }\n',
        ]);
        return (
          (aa = function () {
            return e;
          }),
          e
        );
      }
      function ta() {
        const e = Object(x.a)([
          '\n  query GetTypes {\n    types(limit: 0) {\n      items {\n        id\n        name\n        slug\n        image\n        icon\n        meta_title\n        meta_keyword\n        meta_description\n        created_at\n      }\n      totalCount\n      hasMore\n    }\n  }\n',
        ]);
        return (
          (ta = function () {
            return e;
          }),
          e
        );
      }
      function la() {
        const e = Object(x.a)([
          '\n  query GetProducts(\n    $type: String\n    $category: String\n    $searchText: String\n    $offset: Int\n  ) {\n    products(\n      type: $type\n      category: $category\n      searchText: $searchText\n      offset: $offset\n    ) {\n      items {\n        id\n        type {\n          id\n          slug\n          name\n        }\n        categories {\n          id\n          slug\n          name\n        }\n        name\n        slug\n        description\n        images\n        unit\n        price\n        sale_price\n        discount_in_percent\n        product_quantity\n        is_featured\n        meta_title\n        meta_keyword\n        meta_description\n      }\n      totalCount\n      hasMore\n    }\n  }\n',
        ]);
        return (
          (la = function () {
            return e;
          }),
          e
        );
      }
      const na = Object(N.a)(la()),
        ra = Object(N.a)(ta()),
        ca = Object(N.a)(aa()),
        oa = Object(N.a)(ea());
      var ma = () => {
          const e = Object(U.b)(ra),
            a = e.data,
            t = (e.error, e.refetch, Object(U.b)(ca)),
            c = t.data,
            o = (t.error, t.refetch, Object(I.b)()),
            m = Object(I.c)('data'),
            s = Object(n.useCallback)(() => o({ type: 'CLOSE_DRAWER' }), [o]),
            h = Object(J.a)({ defaultValues: m }),
            d = h.register,
            p = h.handleSubmit,
            u = h.setValue,
            f = Object(n.useState)([{ id: m.type.id }]),
            E = Object(l.a)(f, 2),
            g = E[0],
            v = E[1],
            b = Object(n.useState)([]),
            M = Object(l.a)(b, 2),
            w = M[0],
            x = M[1],
            y = Object(n.useState)(m.description ? m.description : ''),
            k = Object(l.a)(y, 2),
            A = k[0],
            O = k[1],
            z = Object(n.useState)(!!m.is_featured && m.is_featured),
            j = Object(l.a)(z, 2),
            _ = j[0],
            P = j[1],
            C = Object(n.useState)(m.meta_title ? m.meta_title : ''),
            B = Object(l.a)(C, 2),
            H = B[0],
            R = B[1],
            W = Object(n.useState)(m.meta_keyword ? m.meta_keyword : ''),
            Z = Object(l.a)(W, 2),
            L = Z[0],
            V = Z[1],
            S = Object(n.useState)(
              m.meta_description ? m.meta_description : ''
            ),
            G = Object(l.a)(S, 2),
            T = G[0],
            q = G[1];
          r.a.useEffect(() => {
            x(
              m.categories.map((e) => ({
                id: e.id,
                name: e.name,
                slug: e.slug,
              }))
            );
          }, [m]),
            r.a.useEffect(() => {
              d({ name: 'images_data' }),
                d({ name: 'type' }),
                d({ name: 'categories' }),
                d({ name: 'images', required: !0 }),
                d({ name: 'description' }),
                d({ name: 'is_featured' }),
                d({ name: 'meta_title' }),
                d({ name: 'meta_keyword' }),
                d({ name: 'meta_description' });
            }, [d]);
          const $ = Object(U.b)(na),
            D = ($.data, $.error, $.refetch, Object(U.a)(oa)),
            N = Object(l.a)(D, 1)[0];
          return r.a.createElement(
            r.a.Fragment,
            null,
            r.a.createElement(
              he.c,
              null,
              r.a.createElement(he.b, null, 'Update Product')
            ),
            r.a.createElement(
              he.e,
              {
                onSubmit: p((e) => {
                  if (!e.images)
                    return alert('Please select images for product');
                  const a = {
                    name: e.name,
                    type: {
                      id: e.type.id,
                      name: e.type.name,
                      slug: e.type.slug,
                    },
                    categories: JSON.stringify(
                      e.categories.map((e) => ({
                        id: e.id,
                        name: e.name,
                        slug: e.slug,
                      }))
                    ),
                    description: e.description,
                    images_data: e.images_data,
                    images: e.images,
                    price: Number(e.price),
                    unit: e.unit,
                    sale_price: Number(e.sale_price),
                    discount_in_percent: Number(e.discount_in_percent),
                    product_quantity: Number(e.product_quantity),
                    is_featured: e.is_featured,
                    meta_title: e.meta_title,
                    meta_keyword: e.meta_keyword,
                    meta_description: e.meta_description,
                  };
                  N({ variables: { id: m.id, input: a } }), s();
                }),
                style: { height: '100%' },
                noValidate: !0,
              },
              r.a.createElement(
                te.Scrollbars,
                {
                  autoHide: !0,
                  renderView: (e) =>
                    r.a.createElement(
                      'div',
                      Object.assign({}, e, {
                        style: Object(i.a)(
                          Object(i.a)({}, e.style),
                          {},
                          { overflowX: 'hidden' }
                        ),
                      })
                    ),
                  renderTrackHorizontal: (e) =>
                    r.a.createElement(
                      'div',
                      Object.assign({}, e, {
                        style: { display: 'none' },
                        className: 'track-horizontal',
                      })
                    ),
                },
                r.a.createElement(
                  se.c,
                  null,
                  r.a.createElement(
                    se.a,
                    { lg: 4 },
                    r.a.createElement(
                      he.d,
                      null,
                      'Update your Product images here'
                    )
                  ),
                  r.a.createElement(
                    se.a,
                    { lg: 8 },
                    r.a.createElement(
                      ie.a,
                      null,
                      r.a.createElement(Se, {
                        required: !0,
                        onChange: (e) => {
                          let a = [],
                            t = [];
                          for (let l = 0; l < e.length; l++)
                            a.push({
                              name: e[l].name,
                              size: e[l].size,
                              type: e[l].type,
                            }),
                              Object(ue.a)(e[l], (e) => {
                                t.push(e);
                              });
                          u('images_data', JSON.stringify(a)), u('images', t);
                        },
                        imagesURL: m.images,
                      })
                    )
                  )
                ),
                r.a.createElement(
                  se.c,
                  null,
                  r.a.createElement(
                    se.a,
                    { lg: 4 },
                    r.a.createElement(
                      he.d,
                      null,
                      'Update your Product description and necessary information from here'
                    )
                  ),
                  r.a.createElement(
                    se.a,
                    { lg: 8 },
                    r.a.createElement(
                      ie.a,
                      null,
                      r.a.createElement(
                        de.b,
                        null,
                        r.a.createElement(de.c, null, 'Featured Product?'),
                        r.a.createElement(Ie, {
                          checked: _,
                          onChange: (e) => {
                            u('is_featured', e.target.checked),
                              P(e.target.checked);
                          },
                          labelPlacement: Te.right,
                        })
                      ),
                      r.a.createElement(
                        de.b,
                        null,
                        r.a.createElement(de.c, null, 'Name'),
                        r.a.createElement(ne.a, {
                          inputRef: d({ required: !0, maxLength: 60 }),
                          name: 'name',
                        })
                      ),
                      r.a.createElement(
                        de.b,
                        null,
                        r.a.createElement(de.c, null, 'Description'),
                        r.a.createElement(re.a, {
                          value: A,
                          onChange: (e) => {
                            const a = e.target.value;
                            u('description', a), O(a);
                          },
                        })
                      ),
                      r.a.createElement(
                        de.b,
                        null,
                        r.a.createElement(de.c, null, 'Unit'),
                        r.a.createElement(ne.a, {
                          type: 'text',
                          inputRef: d,
                          name: 'unit',
                        })
                      ),
                      r.a.createElement(
                        de.b,
                        null,
                        r.a.createElement(de.c, null, 'Price'),
                        r.a.createElement(ne.a, {
                          type: 'number',
                          inputRef: d({ required: !0 }),
                          name: 'price',
                        })
                      ),
                      r.a.createElement(
                        de.b,
                        null,
                        r.a.createElement(de.c, null, 'Sale Price'),
                        r.a.createElement(ne.a, {
                          type: 'number',
                          inputRef: d,
                          name: 'sale_price',
                        })
                      ),
                      r.a.createElement(
                        de.b,
                        null,
                        r.a.createElement(de.c, null, 'Discount In Percent'),
                        r.a.createElement(ne.a, {
                          type: 'number',
                          inputRef: d,
                          name: 'discount_in_percent',
                        })
                      ),
                      r.a.createElement(
                        de.b,
                        null,
                        r.a.createElement(de.c, null, 'Product Quantity'),
                        r.a.createElement(ne.a, {
                          type: 'number',
                          inputRef: d({ required: !0 }),
                          name: 'product_quantity',
                        })
                      ),
                      r.a.createElement(
                        de.b,
                        null,
                        r.a.createElement(de.c, null, 'Type'),
                        r.a.createElement(_e.a, {
                          options: a ? a.types.items : [],
                          labelKey: 'name',
                          valueKey: 'id',
                          placeholder: 'Select Product Type',
                          value: g,
                          required: !0,
                          searchable: !0,
                          onChange: ({ value: e }) => {
                            u('type', {
                              id: e[0].id,
                              name: e[0].name,
                              slug: e[0].slug,
                            }),
                              v(e);
                          },
                          overrides: {
                            Placeholder: {
                              style: ({ $theme: e }) =>
                                Object(i.a)(
                                  Object(i.a)({}, e.typography.fontBold14),
                                  {},
                                  { color: e.colors.textNormal }
                                ),
                            },
                            DropdownListItem: {
                              style: ({ $theme: e }) =>
                                Object(i.a)(
                                  Object(i.a)({}, e.typography.fontBold14),
                                  {},
                                  { color: e.colors.textNormal }
                                ),
                            },
                            OptionContent: {
                              style: ({ $theme: e, $selected: a }) =>
                                Object(i.a)(
                                  Object(i.a)({}, e.typography.fontBold14),
                                  {},
                                  {
                                    color: a
                                      ? e.colors.textDark
                                      : e.colors.textNormal,
                                  }
                                ),
                            },
                            SingleValue: {
                              style: ({ $theme: e }) =>
                                Object(i.a)(
                                  Object(i.a)({}, e.typography.fontBold14),
                                  {},
                                  { color: e.colors.textNormal }
                                ),
                            },
                            Popover: {
                              props: {
                                overrides: { Body: { style: { zIndex: 5 } } },
                              },
                            },
                          },
                          type: oe.b.search,
                        })
                      ),
                      r.a.createElement(
                        de.b,
                        null,
                        r.a.createElement(de.c, null, 'Categories'),
                        r.a.createElement(_e.a, {
                          options: c ? c.categories.items : [],
                          labelKey: 'name',
                          valueKey: 'id',
                          placeholder: 'Select Product Categories',
                          value: w,
                          required: !0,
                          searchable: !0,
                          onChange: ({ value: e }) => {
                            let a = [];
                            for (let t = 0; t < e.length; t++)
                              a.push({
                                id: e[t].id,
                                name: e[t].name,
                                slug: e[t].slug,
                              });
                            u('categories', a), x(e);
                          },
                          overrides: {
                            Placeholder: {
                              style: ({ $theme: e }) =>
                                Object(i.a)(
                                  Object(i.a)({}, e.typography.fontBold14),
                                  {},
                                  { color: e.colors.textNormal }
                                ),
                            },
                            DropdownListItem: {
                              style: ({ $theme: e }) =>
                                Object(i.a)(
                                  Object(i.a)({}, e.typography.fontBold14),
                                  {},
                                  { color: e.colors.textNormal }
                                ),
                            },
                            Popover: {
                              props: {
                                overrides: { Body: { style: { zIndex: 5 } } },
                              },
                            },
                          },
                          type: oe.b.search,
                          multi: !0,
                        })
                      ),
                      r.a.createElement(
                        de.b,
                        null,
                        r.a.createElement(de.c, null, 'Meta Title'),
                        r.a.createElement(ne.a, {
                          name: 'meta_title',
                          value: H,
                          onChange: (e) => {
                            const a = e.target.value;
                            u('meta_title', a), R(a);
                          },
                        })
                      ),
                      r.a.createElement(
                        de.b,
                        null,
                        r.a.createElement(de.c, null, 'Meta Keyword'),
                        r.a.createElement(ne.a, {
                          name: 'meta_keyword',
                          value: L,
                          onChange: (e) => {
                            const a = e.target.value;
                            u('meta_keyword', a), V(a);
                          },
                        })
                      ),
                      r.a.createElement(
                        de.b,
                        null,
                        r.a.createElement(de.c, null, 'Meta Description'),
                        r.a.createElement(re.a, {
                          name: 'meta_description',
                          value: T,
                          onChange: (e) => {
                            const a = e.target.value;
                            u('meta_description', a), q(a);
                          },
                        })
                      )
                    )
                  )
                )
              ),
              r.a.createElement(
                he.a,
                null,
                r.a.createElement(
                  me.b,
                  {
                    kind: me.a.minimal,
                    onClick: s,
                    overrides: {
                      BaseButton: {
                        style: ({ $theme: e }) => ({
                          width: '50%',
                          borderTopLeftRadius: '3px',
                          borderTopRightRadius: '3px',
                          borderBottomRightRadius: '3px',
                          borderBottomLeftRadius: '3px',
                          marginRight: '15px',
                          color: e.colors.red400,
                        }),
                      },
                    },
                  },
                  'Cancel'
                ),
                r.a.createElement(
                  me.b,
                  {
                    type: 'submit',
                    overrides: {
                      BaseButton: {
                        style: ({ $theme: e }) => ({
                          width: '50%',
                          borderTopLeftRadius: '3px',
                          borderTopRightRadius: '3px',
                          borderBottomRightRadius: '3px',
                          borderBottomLeftRadius: '3px',
                        }),
                      },
                    },
                  },
                  'Update Product'
                )
              )
            )
          );
        },
        ia = t(232),
        sa = t.n(ia);
      function ha() {
        const e = Object(x.a)([
          '\n  mutation createCoupon($coupon: AddCouponInput!) {\n    createCoupon(coupon: $coupon) {\n      id\n      title\n      code\n      expiration_date\n      creation_date\n      maximum_discount_amount\n      status\n    }\n  }\n',
        ]);
        return (
          (ha = function () {
            return e;
          }),
          e
        );
      }
      function da() {
        const e = Object(x.a)([
          '\n  query getCoupons($status: String, $searchBy: String) {\n    coupons(status: $status, searchBy: $searchBy) {\n      id\n      title\n      code\n      expiration_date\n      creation_date\n      maximum_discount_amount\n      status\n    }\n  }\n',
        ]);
        return (
          (da = function () {
            return e;
          }),
          e
        );
      }
      const pa = ae()(da()),
        ua = ae()(ha()),
        fa = [
          { value: 'grocery', name: 'Grocery', id: '1' },
          { value: 'women-cloths', name: 'Women Cloths', id: '2' },
          { value: 'bags', name: 'Bags', id: '3' },
          { value: 'makeup', name: 'Makeup', id: '4' },
        ];
      var Ea = (e) => {
        const a = Object(I.b)(),
          t = Object(n.useCallback)(() => a({ type: 'CLOSE_DRAWER' }), [a]),
          c = Object(J.a)(),
          o = c.register,
          m = c.handleSubmit,
          s = c.setValue,
          h = Object(n.useState)([]),
          d = Object(l.a)(h, 2),
          p = d[0],
          u = d[1];
        r.a.useEffect(() => {
          o({ name: 'category' });
        }, [o]);
        const f = Object(U.a)(ua, {
            update(e, { data: { createCoupon: a } }) {
              const t = e.readQuery({ query: pa }).coupons;
              e.writeQuery({ query: pa, data: { coupons: t.concat([a]) } });
            },
          }),
          E = Object(l.a)(f, 1)[0];
        return r.a.createElement(
          r.a.Fragment,
          null,
          r.a.createElement(
            he.c,
            null,
            r.a.createElement(he.b, null, 'Add Campaign')
          ),
          r.a.createElement(
            he.e,
            {
              onSubmit: m((e) => {
                const a = {
                  id: sa()(),
                  title: e.name,
                  code: e.code,
                  category: p[0].value,
                  discount_in_percent: Number(e.discount_in_percent),
                  number_of_coupon: Number(e.number_of_coupon),
                  minimum_amount: Number(e.minimum_amount),
                  creation_date: new Date(),
                };
                E({ variables: { coupon: a } }),
                  t(),
                  console.log(a, 'newCoupon');
              }),
              style: { height: '100%' },
            },
            r.a.createElement(
              te.Scrollbars,
              {
                autoHide: !0,
                renderView: (e) =>
                  r.a.createElement(
                    'div',
                    Object.assign({}, e, {
                      style: Object(i.a)(
                        Object(i.a)({}, e.style),
                        {},
                        { overflowX: 'hidden' }
                      ),
                    })
                  ),
                renderTrackHorizontal: (e) =>
                  r.a.createElement(
                    'div',
                    Object.assign({}, e, {
                      style: { display: 'none' },
                      className: 'track-horizontal',
                    })
                  ),
              },
              r.a.createElement(
                se.c,
                null,
                r.a.createElement(
                  se.a,
                  { lg: 4 },
                  r.a.createElement(
                    he.d,
                    null,
                    'Add your campaign description and necessary informations from here'
                  )
                ),
                r.a.createElement(
                  se.a,
                  { lg: 8 },
                  r.a.createElement(
                    ie.a,
                    null,
                    r.a.createElement(
                      de.b,
                      null,
                      r.a.createElement(de.c, null, 'Campaign Name'),
                      r.a.createElement(ne.a, { inputRef: o, name: 'name' })
                    ),
                    r.a.createElement(
                      de.b,
                      null,
                      r.a.createElement(de.c, null, 'Discount Percent'),
                      r.a.createElement(ne.a, {
                        type: 'number',
                        inputRef: o({ required: !0 }),
                        name: 'discount_in_percent',
                      })
                    ),
                    r.a.createElement(
                      de.b,
                      null,
                      r.a.createElement(de.c, null, 'Discount Code'),
                      r.a.createElement(ne.a, {
                        inputRef: o({ required: !0 }),
                        name: 'code',
                      })
                    ),
                    r.a.createElement(
                      de.b,
                      null,
                      r.a.createElement(de.c, null, 'Number of Coupon'),
                      r.a.createElement(ne.a, {
                        type: 'number',
                        inputRef: o({ required: !0 }),
                        name: 'number_of_coupon',
                      })
                    ),
                    r.a.createElement(
                      de.b,
                      null,
                      r.a.createElement(de.c, null, 'Category'),
                      r.a.createElement(_e.a, {
                        options: fa,
                        labelKey: 'name',
                        valueKey: 'value',
                        placeholder: 'Ex: Choose parent category',
                        value: p,
                        searchable: !1,
                        onChange: ({ value: e }) => {
                          s('category', e), u(e);
                        },
                        overrides: {
                          Placeholder: {
                            style: ({ $theme: e }) =>
                              Object(i.a)(
                                Object(i.a)({}, e.typography.fontBold14),
                                {},
                                { color: e.colors.textNormal }
                              ),
                          },
                          DropdownListItem: {
                            style: ({ $theme: e }) =>
                              Object(i.a)(
                                Object(i.a)({}, e.typography.fontBold14),
                                {},
                                { color: e.colors.textNormal }
                              ),
                          },
                          OptionContent: {
                            style: ({ $theme: e, $selected: a }) =>
                              Object(i.a)(
                                Object(i.a)({}, e.typography.fontBold14),
                                {},
                                {
                                  color: a
                                    ? e.colors.textDark
                                    : e.colors.textNormal,
                                }
                              ),
                          },
                          SingleValue: {
                            style: ({ $theme: e }) =>
                              Object(i.a)(
                                Object(i.a)({}, e.typography.fontBold14),
                                {},
                                { color: e.colors.textNormal }
                              ),
                          },
                          Popover: {
                            props: {
                              overrides: { Body: { style: { zIndex: 5 } } },
                            },
                          },
                        },
                      })
                    ),
                    r.a.createElement(
                      de.b,
                      null,
                      r.a.createElement(de.c, null, 'Minimum Amount Required'),
                      r.a.createElement(ne.a, {
                        type: 'number',
                        inputRef: o,
                        name: 'minimum_amount',
                      })
                    )
                  )
                )
              )
            ),
            r.a.createElement(
              he.a,
              null,
              r.a.createElement(
                me.b,
                {
                  kind: me.a.minimal,
                  onClick: t,
                  overrides: {
                    BaseButton: {
                      style: ({ $theme: e }) => ({
                        width: '50%',
                        borderTopLeftRadius: '3px',
                        borderTopRightRadius: '3px',
                        borderBottomRightRadius: '3px',
                        borderBottomLeftRadius: '3px',
                        marginRight: '15px',
                        color: e.colors.red400,
                      }),
                    },
                  },
                },
                'Cancel'
              ),
              r.a.createElement(
                me.b,
                {
                  type: 'submit',
                  overrides: {
                    BaseButton: {
                      style: ({ $theme: e }) => ({
                        width: '50%',
                        borderTopLeftRadius: '3px',
                        borderTopRightRadius: '3px',
                        borderBottomRightRadius: '3px',
                        borderBottomLeftRadius: '3px',
                      }),
                    },
                  },
                },
                'Create Campaign'
              )
            )
          )
        );
      };
      function ga() {
        const e = Object(x.a)([
          '\n  query GetTypes {\n    types(limit: 0) {\n      items {\n        id\n        name\n        slug\n        image\n        icon\n        meta_title\n        meta_keyword\n        meta_description\n        created_at\n      }\n      totalCount\n      hasMore\n    }\n  }\n',
        ]);
        return (
          (ga = function () {
            return e;
          }),
          e
        );
      }
      function va() {
        const e = Object(x.a)([
          '\n  mutation CreateCategory($category: CategoryInput!) {\n    createCategory(input: $category) {\n      id\n      type_id\n      name\n      slug\n      banner\n      icon\n      meta_title\n      meta_keyword\n      meta_description\n      created_at\n    }\n  }\n',
        ]);
        return (
          (va = function () {
            return e;
          }),
          e
        );
      }
      function ba() {
        const e = Object(x.a)([
          '\n  query ShopCategories {\n    shopCategories(limit: 0) {\n      items{\n        id\n        type_id\n        name\n        slug\n        banner\n        icon\n        meta_title\n        meta_keyword\n        meta_description\n      }\n    }\n  }\n',
        ]);
        return (
          (ba = function () {
            return e;
          }),
          e
        );
      }
      function Ma() {
        const e = Object(x.a)([
          '\n  query getCategories($searchText: String, $offset: Int) {\n    categories(searchText: $searchText, offset: $offset) {\n      items{\n        id\n        type_id\n        name\n        slug\n        banner\n        icon\n        meta_title\n        meta_keyword\n        meta_description\n        created_at\n      }\n    }   \n  }\n',
        ]);
        return (
          (Ma = function () {
            return e;
          }),
          e
        );
      }
      const wa = ae()(Ma()),
        xa = ae()(ba()),
        ya = ae()(va()),
        ka = ae()(ga());
      var Aa = (e) => {
        const a = Object(I.b)(),
          t = Object(n.useCallback)(() => a({ type: 'CLOSE_DRAWER' }), [a]),
          c = Object(J.a)(),
          o = c.register,
          m = c.handleSubmit,
          s = c.setValue,
          h = Object(n.useState)({}),
          d = Object(l.a)(h, 2),
          p = d[0],
          u = d[1],
          f = Object(n.useState)([]),
          E = Object(l.a)(f, 2),
          g = E[0],
          v = E[1],
          b = Object(n.useState)([]),
          M = Object(l.a)(b, 2),
          w = M[0],
          x = M[1],
          y = Object(n.useState)(''),
          k = Object(l.a)(y, 2),
          A = k[0],
          O = k[1],
          z = Object(n.useState)(''),
          j = Object(l.a)(z, 2),
          _ = j[0],
          P = j[1],
          C = Object(n.useState)(''),
          B = Object(l.a)(C, 2),
          H = B[0],
          R = B[1],
          W = Object(n.useState)([]),
          Z = Object(l.a)(W, 2),
          L = Z[0],
          V = Z[1];
        r.a.useEffect(() => {
          o({ name: 'type_id' }),
            o({ name: 'parent' }),
            o({ name: 'banner_data' }),
            o({ name: 'banner', required: !0 }),
            o({ name: 'icon', required: !0 }),
            o({ name: 'meta_title' }),
            o({ name: 'meta_keyword' }),
            o({ name: 'meta_description' });
        }, [o]);
        const S = Object(U.b)(ka),
          G = S.data,
          T = (S.error, S.refetch, Object(U.b)(xa)),
          q = T.data;
        T.error, T.refetch;
        r.a.useEffect(() => {
          q &&
            q.shopCategories &&
            q.shopCategories.items &&
            x(
              q.shopCategories.items.map((e) => ({ value: e.id, name: e.name }))
            );
        }, [q]);
        const $ = Object(U.a)(ya, {
            onCompleted: () => {
              ge("You've successfully created your type!");
            },
            onError: (e) => {
              ve(
                "Sorry! We weren't able to create your type. Please try again later."
              );
            },
            update(e, { data: { createCategory: a } }) {
              const t = e.readQuery({ query: wa }).categories;
              e.writeQuery({
                query: wa,
                data: {
                  categories: {
                    __typename: t.__typename,
                    items: [a, ...t.items],
                    hasMore: t.items.length + 1 >= 12,
                    totalCount: t.items.length + 1,
                  },
                },
              });
            },
          }),
          D = Object(l.a)($, 1)[0];
        return r.a.createElement(
          r.a.Fragment,
          null,
          r.a.createElement(
            he.c,
            null,
            r.a.createElement(he.b, null, 'Add Category')
          ),
          r.a.createElement(
            he.e,
            {
              onSubmit: m((e) => {
                const a = e.name,
                  l = e.type_id,
                  n = e.parent,
                  r = e.meta_title,
                  c = e.meta_keyword,
                  o = e.meta_description,
                  m = e.banner,
                  i = e.banner_data,
                  s = {
                    name: a,
                    type_id: l[0].id,
                    parent_id: n ? n[0].value : null,
                    banner_data: i,
                    banner: m,
                    icon: L[0].value,
                    meta_title: r,
                    meta_keyword: c,
                    meta_description: o,
                  };
                D({ variables: { category: s } }), t();
              }),
              style: { height: '100%' },
            },
            r.a.createElement(
              te.Scrollbars,
              {
                autoHide: !0,
                renderView: (e) =>
                  r.a.createElement(
                    'div',
                    Object.assign({}, e, {
                      style: Object(i.a)(
                        Object(i.a)({}, e.style),
                        {},
                        { overflowX: 'hidden' }
                      ),
                    })
                  ),
                renderTrackHorizontal: (e) =>
                  r.a.createElement(
                    'div',
                    Object.assign({}, e, {
                      style: { display: 'none' },
                      className: 'track-horizontal',
                    })
                  ),
              },
              r.a.createElement(
                se.c,
                null,
                r.a.createElement(
                  se.a,
                  { lg: 4 },
                  r.a.createElement(
                    he.d,
                    null,
                    'Upload your Category image here'
                  )
                ),
                r.a.createElement(
                  se.a,
                  { lg: 8 },
                  r.a.createElement(
                    ie.a,
                    {
                      overrides: {
                        Block: {
                          style: {
                            width: '100%',
                            height: 'auto',
                            padding: '30px',
                            borderRadius: '3px',
                            backgroundColor: '#ffffff',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                          },
                        },
                      },
                    },
                    r.a.createElement(le.a, {
                      onChange: (e) => {
                        s('banner_data', {
                          name: e[0].name,
                          size: e[0].size,
                          type: e[0].type,
                        }),
                          Object(ue.a)(e[0], (e) => s('banner', e));
                      },
                    })
                  )
                )
              ),
              r.a.createElement(
                se.c,
                null,
                r.a.createElement(
                  se.a,
                  { lg: 4 },
                  r.a.createElement(
                    he.d,
                    null,
                    'Add your category description and necessary informations from here'
                  )
                ),
                r.a.createElement(
                  se.a,
                  { lg: 8 },
                  r.a.createElement(
                    ie.a,
                    null,
                    r.a.createElement(
                      de.b,
                      null,
                      r.a.createElement(de.c, null, 'Category Name'),
                      r.a.createElement(ne.a, {
                        inputRef: o({ required: !0, maxLength: 20 }),
                        name: 'name',
                      })
                    ),
                    r.a.createElement(
                      de.b,
                      null,
                      r.a.createElement(de.c, null, 'Type'),
                      r.a.createElement(_e.a, {
                        options: G ? G.types.items : [],
                        labelKey: 'name',
                        valueKey: 'id',
                        placeholder: 'Select Category Type',
                        value: g,
                        required: !0,
                        searchable: !0,
                        onChange: ({ value: e }) => {
                          s('type_id', e), v(e);
                        },
                        overrides: {
                          Placeholder: {
                            style: ({ $theme: e }) =>
                              Object(i.a)(
                                Object(i.a)({}, e.typography.fontBold14),
                                {},
                                { color: e.colors.textNormal }
                              ),
                          },
                          DropdownListItem: {
                            style: ({ $theme: e }) =>
                              Object(i.a)(
                                Object(i.a)({}, e.typography.fontBold14),
                                {},
                                { color: e.colors.textNormal }
                              ),
                          },
                          OptionContent: {
                            style: ({ $theme: e, $selected: a }) =>
                              Object(i.a)(
                                Object(i.a)({}, e.typography.fontBold14),
                                {},
                                {
                                  color: a
                                    ? e.colors.textDark
                                    : e.colors.textNormal,
                                }
                              ),
                          },
                          SingleValue: {
                            style: ({ $theme: e }) =>
                              Object(i.a)(
                                Object(i.a)({}, e.typography.fontBold14),
                                {},
                                { color: e.colors.textNormal }
                              ),
                          },
                          Popover: {
                            props: {
                              overrides: { Body: { style: { zIndex: 5 } } },
                            },
                          },
                        },
                        type: oe.b.search,
                      })
                    ),
                    r.a.createElement(
                      de.b,
                      null,
                      r.a.createElement(de.c, null, 'Parent'),
                      r.a.createElement(_e.a, {
                        options: w,
                        labelKey: 'name',
                        valueKey: 'value',
                        placeholder: 'Select parent category',
                        value: p,
                        searchable: !1,
                        onChange: ({ value: e }) => {
                          s('parent', e), u(e);
                        },
                        overrides: {
                          Placeholder: {
                            style: ({ $theme: e }) =>
                              Object(i.a)(
                                Object(i.a)({}, e.typography.fontBold14),
                                {},
                                { color: e.colors.textNormal }
                              ),
                          },
                          DropdownListItem: {
                            style: ({ $theme: e }) =>
                              Object(i.a)(
                                Object(i.a)({}, e.typography.fontBold14),
                                {},
                                { color: e.colors.textNormal }
                              ),
                          },
                          OptionContent: {
                            style: ({ $theme: e, $selected: a }) =>
                              Object(i.a)(
                                Object(i.a)({}, e.typography.fontBold14),
                                {},
                                {
                                  color: a
                                    ? e.colors.textDark
                                    : e.colors.textNormal,
                                }
                              ),
                          },
                          SingleValue: {
                            style: ({ $theme: e }) =>
                              Object(i.a)(
                                Object(i.a)({}, e.typography.fontBold14),
                                {},
                                { color: e.colors.textNormal }
                              ),
                          },
                          Popover: {
                            props: {
                              overrides: { Body: { style: { zIndex: 5 } } },
                            },
                          },
                        },
                      })
                    ),
                    r.a.createElement(
                      de.b,
                      null,
                      r.a.createElement(de.c, null, 'Icon'),
                      r.a.createElement(_e.a, {
                        options: pe.a,
                        labelKey: 'value',
                        valueKey: 'value',
                        placeholder: 'Ex: Choose type icon',
                        name: 'parent',
                        value: L,
                        required: !0,
                        searchable: !0,
                        onChange: ({ value: e }) => {
                          s('icon', e), V(e);
                        },
                        overrides: {
                          Placeholder: {
                            style: ({ $theme: e }) =>
                              Object(i.a)(
                                Object(i.a)({}, e.typography.fontBold14),
                                {},
                                { color: e.colors.textNormal }
                              ),
                          },
                          DropdownListItem: {
                            style: ({ $theme: e }) =>
                              Object(i.a)(
                                Object(i.a)({}, e.typography.fontBold14),
                                {},
                                { color: e.colors.textNormal }
                              ),
                          },
                          OptionContent: {
                            style: ({ $theme: e, $selected: a }) =>
                              Object(i.a)(
                                Object(i.a)({}, e.typography.fontBold14),
                                {},
                                {
                                  color: a
                                    ? e.colors.textDark
                                    : e.colors.textNormal,
                                }
                              ),
                          },
                          SingleValue: {
                            style: ({ $theme: e }) =>
                              Object(i.a)(
                                Object(i.a)({}, e.typography.fontBold14),
                                {},
                                { color: e.colors.textNormal }
                              ),
                          },
                          Popover: {
                            props: {
                              overrides: { Body: { style: { zIndex: 5 } } },
                            },
                          },
                        },
                        maxDropdownHeight: '300px',
                        type: oe.b.search,
                      })
                    ),
                    r.a.createElement(
                      de.b,
                      null,
                      r.a.createElement(de.c, null, 'Meta Title'),
                      r.a.createElement(ne.a, {
                        name: 'meta_title',
                        value: A,
                        onChange: (e) => {
                          const a = e.target.value;
                          s('meta_title', a), O(a);
                        },
                      })
                    ),
                    r.a.createElement(
                      de.b,
                      null,
                      r.a.createElement(de.c, null, 'Meta Keyword'),
                      r.a.createElement(ne.a, {
                        name: 'meta_keyword',
                        value: _,
                        onChange: (e) => {
                          const a = e.target.value;
                          s('meta_keyword', a), P(a);
                        },
                      })
                    ),
                    r.a.createElement(
                      de.b,
                      null,
                      r.a.createElement(de.c, null, 'Meta Description'),
                      r.a.createElement(re.a, {
                        name: 'meta_description',
                        value: H,
                        onChange: (e) => {
                          const a = e.target.value;
                          s('meta_description', a), R(a);
                        },
                      })
                    )
                  )
                )
              )
            ),
            r.a.createElement(
              he.a,
              null,
              r.a.createElement(
                me.b,
                {
                  kind: me.a.minimal,
                  onClick: t,
                  overrides: {
                    BaseButton: {
                      style: ({ $theme: e }) => ({
                        width: '50%',
                        borderTopLeftRadius: '3px',
                        borderTopRightRadius: '3px',
                        borderBottomRightRadius: '3px',
                        borderBottomLeftRadius: '3px',
                        marginRight: '15px',
                        color: e.colors.red400,
                      }),
                    },
                  },
                },
                'Cancel'
              ),
              r.a.createElement(
                me.b,
                {
                  type: 'submit',
                  overrides: {
                    BaseButton: {
                      style: ({ $theme: e }) => ({
                        width: '50%',
                        borderTopLeftRadius: '3px',
                        borderTopRightRadius: '3px',
                        borderBottomRightRadius: '3px',
                        borderBottomLeftRadius: '3px',
                      }),
                    },
                  },
                },
                'Create Category'
              )
            )
          )
        );
      };
      function Oa() {
        const e = Object(x.a)([
          '\n  query GetTypes {\n    types(limit: 0) {\n      items {\n        id\n        name\n        slug\n        image\n        icon\n        meta_title\n        meta_keyword\n        meta_description\n        created_at\n      }\n      totalCount\n      hasMore\n    }\n  }\n',
        ]);
        return (
          (Oa = function () {
            return e;
          }),
          e
        );
      }
      function za() {
        const e = Object(x.a)([
          '  \n  mutation UpdateCategory($id: ID!, $input: CategoryInput!) {\n    updateCategory(id: $id, input: $input) {\n      id\n      type_id\n      name\n      slug\n      banner\n      icon\n      meta_title\n      meta_keyword\n      meta_description\n    }\n  }\n',
        ]);
        return (
          (za = function () {
            return e;
          }),
          e
        );
      }
      function ja() {
        const e = Object(x.a)([
          '\n  query getCategories($searchText: String, $offset: Int) {\n    categories(searchText: $searchText, offset: $offset) {\n      items{\n        id\n        type_id\n        name\n        slug\n        icon\n        banner\n      }\n      totalCount\n      hasMore\n    }\n  }\n',
        ]);
        return (
          (ja = function () {
            return e;
          }),
          e
        );
      }
      const _a = ae()(ja()),
        Pa = ae()(za()),
        Ca = ae()(Oa());
      var Ba = (e) => {
        const a = Object(I.b)(),
          t = Object(I.c)('data'),
          c = Object(n.useCallback)(() => a({ type: 'CLOSE_DRAWER' }), [a]),
          o = Object(J.a)({ defaultValues: t }),
          m = o.register,
          s = o.handleSubmit,
          h = o.setValue,
          d = Object(n.useState)(t.meta_title ? t.meta_title : ''),
          p = Object(l.a)(d, 2),
          u = p[0],
          f = p[1],
          E = Object(n.useState)(t.meta_keyword ? t.meta_keyword : ''),
          g = Object(l.a)(E, 2),
          v = g[0],
          b = g[1],
          M = Object(n.useState)(t.meta_description ? t.meta_description : ''),
          w = Object(l.a)(M, 2),
          x = w[0],
          y = w[1],
          k = Object(n.useState)([{ value: t.icon }]),
          A = Object(l.a)(k, 2),
          O = A[0],
          z = A[1],
          j = Object(n.useState)([{ id: t ? t.type_id : '' }]),
          _ = Object(l.a)(j, 2),
          P = _[0],
          C = _[1];
        r.a.useEffect(() => {
          m({ name: 'type_id' }),
            m({ name: 'parent' }),
            m({ name: 'banner_data' }),
            m({ name: 'banner', required: !0 }),
            m({ name: 'icon', required: !0 }),
            m({ name: 'meta_title' }),
            m({ name: 'meta_keyword' }),
            m({ name: 'meta_description' });
        }, [m]);
        const B = Object(U.b)(Ca),
          H = B.data,
          R = (B.error, B.refetch, Object(U.b)(_a)),
          W = (R.data, R.error, R.refetch, Object(U.a)(Pa)),
          Z = Object(l.a)(W, 1)[0];
        return r.a.createElement(
          r.a.Fragment,
          null,
          r.a.createElement(
            he.c,
            null,
            r.a.createElement(he.b, null, 'Update Category')
          ),
          r.a.createElement(
            he.e,
            {
              onSubmit: s(
                ({
                  name: e,
                  type_id: a,
                  meta_title: l,
                  meta_keyword: n,
                  meta_description: r,
                  banner: o,
                  banner_data: m,
                }) => {
                  const i = {
                    name: e,
                    type_id: P ? P[0].id : t.type_id,
                    parent_id: t.parent_id,
                    banner_data: m,
                    banner: o,
                    icon: O ? O[0].value : t.icon,
                    meta_title: l,
                    meta_keyword: n,
                    meta_description: r,
                  };
                  Z({ variables: { id: t.id, input: i } }), c();
                }
              ),
              style: { height: '100%' },
              encType: 'multipart/form-data',
            },
            r.a.createElement(
              te.Scrollbars,
              {
                autoHide: !0,
                renderView: (e) =>
                  r.a.createElement(
                    'div',
                    Object.assign({}, e, {
                      style: Object(i.a)(
                        Object(i.a)({}, e.style),
                        {},
                        { overflowX: 'hidden' }
                      ),
                    })
                  ),
                renderTrackHorizontal: (e) =>
                  r.a.createElement(
                    'div',
                    Object.assign({}, e, {
                      style: { display: 'none' },
                      className: 'track-horizontal',
                    })
                  ),
              },
              r.a.createElement(
                se.c,
                null,
                r.a.createElement(
                  se.a,
                  { lg: 4 },
                  r.a.createElement(he.d, null, 'Upload your Type image here')
                ),
                r.a.createElement(
                  se.a,
                  { lg: 8 },
                  r.a.createElement(
                    ie.a,
                    {
                      overrides: {
                        Block: {
                          style: {
                            width: '100%',
                            height: 'auto',
                            padding: '30px',
                            borderRadius: '3px',
                            backgroundColor: '#ffffff',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                          },
                        },
                      },
                    },
                    r.a.createElement(le.a, {
                      type: 'file',
                      required: !0,
                      onChange: (e) => {
                        h('banner_data', {
                          name: e[0].name,
                          size: e[0].size,
                          type: e[0].type,
                        }),
                          Object(ue.a)(e[0], (e) => {
                            h('banner', e);
                          });
                      },
                      imageURL: F.a + t.image,
                    })
                  )
                )
              ),
              r.a.createElement(
                se.c,
                null,
                r.a.createElement(
                  se.a,
                  { lg: 4 },
                  r.a.createElement(
                    he.d,
                    null,
                    "Update your type and necessary information's from here"
                  )
                ),
                r.a.createElement(
                  se.a,
                  { lg: 8 },
                  r.a.createElement(
                    ie.a,
                    null,
                    r.a.createElement(
                      de.b,
                      null,
                      r.a.createElement(de.c, null, 'Type Name'),
                      r.a.createElement(ne.a, {
                        inputRef: m({ required: !0 }),
                        name: 'name',
                        required: !0,
                      })
                    ),
                    r.a.createElement(
                      de.b,
                      null,
                      r.a.createElement(de.c, null, 'Type'),
                      r.a.createElement(ce.a, {
                        options: H ? H.types.items : [],
                        labelKey: 'name',
                        valueKey: 'id',
                        placeholder: 'Select Category Type',
                        value: P,
                        required: !0,
                        searchable: !0,
                        onChange: ({ value: e }) => {
                          h('type_id', e), C(e);
                        },
                        overrides: {
                          Placeholder: {
                            style: ({ $theme: e }) =>
                              Object(i.a)(
                                Object(i.a)({}, e.typography.fontBold14),
                                {},
                                { color: e.colors.textNormal }
                              ),
                          },
                          DropdownListItem: {
                            style: ({ $theme: e }) =>
                              Object(i.a)(
                                Object(i.a)({}, e.typography.fontBold14),
                                {},
                                { color: e.colors.textNormal }
                              ),
                          },
                          OptionContent: {
                            style: ({ $theme: e, $selected: a }) =>
                              Object(i.a)(
                                Object(i.a)({}, e.typography.fontBold14),
                                {},
                                {
                                  color: a
                                    ? e.colors.textDark
                                    : e.colors.textNormal,
                                }
                              ),
                          },
                          SingleValue: {
                            style: ({ $theme: e }) =>
                              Object(i.a)(
                                Object(i.a)({}, e.typography.fontBold14),
                                {},
                                { color: e.colors.textNormal }
                              ),
                          },
                          Popover: {
                            props: {
                              overrides: { Body: { style: { zIndex: 5 } } },
                            },
                          },
                        },
                        type: oe.b.search,
                      })
                    ),
                    r.a.createElement(
                      de.b,
                      null,
                      r.a.createElement(de.c, null, 'Icon'),
                      r.a.createElement(ce.a, {
                        options: pe.a,
                        labelKey: 'value',
                        valueKey: 'value',
                        placeholder: 'Ex: Choose type icon',
                        value: O,
                        required: !0,
                        searchable: !0,
                        onChange: ({ value: e }) => {
                          h('icon', e), z(e);
                        },
                        overrides: {
                          Placeholder: {
                            style: ({ $theme: e }) =>
                              Object(i.a)(
                                Object(i.a)({}, e.typography.fontBold14),
                                {},
                                { color: e.colors.textNormal }
                              ),
                          },
                          DropdownListItem: {
                            style: ({ $theme: e }) =>
                              Object(i.a)(
                                Object(i.a)({}, e.typography.fontBold14),
                                {},
                                { color: e.colors.textNormal }
                              ),
                          },
                          OptionContent: {
                            style: ({ $theme: e, $selected: a }) =>
                              Object(i.a)(
                                Object(i.a)({}, e.typography.fontBold14),
                                {},
                                {
                                  color: a
                                    ? e.colors.textDark
                                    : e.colors.textNormal,
                                }
                              ),
                          },
                          SingleValue: {
                            style: ({ $theme: e }) =>
                              Object(i.a)(
                                Object(i.a)({}, e.typography.fontBold14),
                                {},
                                { color: e.colors.textNormal }
                              ),
                          },
                          Popover: {
                            props: {
                              overrides: { Body: { style: { zIndex: 5 } } },
                            },
                          },
                        },
                        maxDropdownHeight: '300px',
                        type: oe.b.search,
                      })
                    ),
                    r.a.createElement(
                      de.b,
                      null,
                      r.a.createElement(de.c, null, 'Meta Title'),
                      r.a.createElement(ne.a, {
                        name: 'meta_title',
                        value: u,
                        onChange: (e) => {
                          const a = e.target.value;
                          h('meta_title', a), f(a);
                        },
                      })
                    ),
                    r.a.createElement(
                      de.b,
                      null,
                      r.a.createElement(de.c, null, 'Meta Keyword'),
                      r.a.createElement(ne.a, {
                        name: 'meta_keyword',
                        value: v,
                        onChange: (e) => {
                          const a = e.target.value;
                          h('meta_keyword', a), b(a);
                        },
                      })
                    ),
                    r.a.createElement(
                      de.b,
                      null,
                      r.a.createElement(de.c, null, 'Meta Description'),
                      r.a.createElement(re.a, {
                        name: 'meta_description',
                        value: x,
                        onChange: (e) => {
                          const a = e.target.value;
                          h('meta_description', a), y(a);
                        },
                      })
                    )
                  )
                )
              )
            ),
            r.a.createElement(
              he.a,
              null,
              r.a.createElement(
                me.b,
                {
                  kind: me.a.minimal,
                  onClick: c,
                  overrides: {
                    BaseButton: {
                      style: ({ $theme: e }) => ({
                        width: '50%',
                        borderTopLeftRadius: '3px',
                        borderTopRightRadius: '3px',
                        borderBottomRightRadius: '3px',
                        borderBottomLeftRadius: '3px',
                        marginRight: '15px',
                        color: e.colors.red400,
                      }),
                    },
                  },
                },
                'Cancel'
              ),
              r.a.createElement(
                me.b,
                {
                  type: 'submit',
                  overrides: {
                    BaseButton: {
                      style: ({ $theme: e }) => ({
                        width: '50%',
                        borderTopLeftRadius: '3px',
                        borderTopRightRadius: '3px',
                        borderBottomRightRadius: '3px',
                        borderBottomLeftRadius: '3px',
                      }),
                    },
                  },
                },
                'Update Type'
              )
            )
          )
        );
      };
      function Ha() {
        const e = Object(x.a)([
          '    \n    mutation CreatePaymentOption($name: String!, $type: String!, $image: String!, $image_data: String!, $details: String!) {\n        createPaymentOption(name: $name, type: $type, image: $image, image_data: $image_data, details: $details) {\n            id\n            name\n            type\n            image\n            details\n            created_at\n        }\n    }\n',
        ]);
        return (
          (Ha = function () {
            return e;
          }),
          e
        );
      }
      function Ra() {
        const e = Object(x.a)([
          '\n    query GetPaymentOptions(\n        $searchText: String\n        $offset: Int\n    ) {\n        paymentOptions(\n            searchText: $searchText\n            offset: $offset\n        ) {\n            items {\n                id\n                name\n                type\n                image\n                details\n                created_at\n            }\n            totalCount\n            hasMore\n        }\n    }\n',
        ]);
        return (
          (Ra = function () {
            return e;
          }),
          e
        );
      }
      const Wa = ae()(Ra()),
        Za = ae()(Ha());
      var La = (e) => {
        const a = Object(I.b)(),
          t = Object(n.useCallback)(() => a({ type: 'CLOSE_DRAWER' }), [a]),
          c = Object(J.a)(),
          o = c.register,
          m = c.handleSubmit,
          s = c.setValue;
        r.a.useEffect(() => {
          o({ name: 'image_data' }), o({ name: 'image', required: !0 });
        }, [o]);
        const h = Object(U.a)(Za, {
            onCompleted: () => {
              ge("You've successfully created your payment option!");
            },
            onError: () => {
              ve(
                "Sorry! We weren't able to create your type. Please try again later."
              );
            },
            update(e, { data: { createPaymentOption: a } }) {
              const t = e.readQuery({ query: Wa }).paymentOptions;
              e.writeQuery({
                query: Wa,
                data: {
                  paymentOptions: {
                    __typename: t.__typename,
                    items: [a, ...t.items],
                    hasMore: t.items.length + 1 >= 12,
                    totalCount: t.items.length + 1,
                  },
                },
              });
            },
          }),
          d = Object(l.a)(h, 1)[0];
        return r.a.createElement(
          r.a.Fragment,
          null,
          r.a.createElement(
            he.c,
            null,
            r.a.createElement(he.b, null, 'Add Payment Option')
          ),
          r.a.createElement(
            he.e,
            {
              onSubmit: m(
                ({ name: e, type: a, details: l, image: n, image_data: r }) => {
                  d({
                    variables: {
                      name: e,
                      type: a,
                      details: l,
                      image_data: r,
                      image: n,
                    },
                  }),
                    t();
                }
              ),
              style: { height: '100%' },
              encType: 'multipart/form-data',
            },
            r.a.createElement(
              te.Scrollbars,
              {
                autoHide: !0,
                renderView: (e) =>
                  r.a.createElement(
                    'div',
                    Object.assign({}, e, {
                      style: Object(i.a)(
                        Object(i.a)({}, e.style),
                        {},
                        { overflowX: 'hidden' }
                      ),
                    })
                  ),
                renderTrackHorizontal: (e) =>
                  r.a.createElement(
                    'div',
                    Object.assign({}, e, {
                      style: { display: 'none' },
                      className: 'track-horizontal',
                    })
                  ),
              },
              r.a.createElement(
                se.c,
                null,
                r.a.createElement(
                  se.a,
                  { lg: 4 },
                  r.a.createElement(
                    he.d,
                    null,
                    'Upload your PaymentOption image here'
                  )
                ),
                r.a.createElement(
                  se.a,
                  { lg: 8 },
                  r.a.createElement(
                    ie.a,
                    {
                      overrides: {
                        Block: {
                          style: {
                            width: '100%',
                            height: 'auto',
                            padding: '30px',
                            borderRadius: '3px',
                            backgroundColor: '#ffffff',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                          },
                        },
                      },
                    },
                    r.a.createElement(le.a, {
                      type: 'file',
                      required: !0,
                      onChange: (e) => {
                        s(
                          'image_data',
                          JSON.stringify({
                            name: e[0].name,
                            size: e[0].size,
                            type: e[0].type,
                          })
                        ),
                          Object(ue.a)(e[0], (e) => {
                            s('image', e);
                          });
                      },
                    })
                  )
                )
              ),
              r.a.createElement(
                se.c,
                null,
                r.a.createElement(
                  se.a,
                  { lg: 4 },
                  r.a.createElement(
                    he.d,
                    null,
                    "Add your payment option and necessary information's from here"
                  )
                ),
                r.a.createElement(
                  se.a,
                  { lg: 8 },
                  r.a.createElement(
                    ie.a,
                    null,
                    r.a.createElement(
                      de.b,
                      null,
                      r.a.createElement(de.c, null, 'Name'),
                      r.a.createElement(ne.a, {
                        inputRef: o({ required: !0 }),
                        name: 'name',
                        required: !0,
                      })
                    ),
                    r.a.createElement(
                      de.b,
                      null,
                      r.a.createElement(de.c, null, 'Type'),
                      r.a.createElement(ne.a, {
                        inputRef: o({ required: !0 }),
                        name: 'type',
                        required: !0,
                      })
                    ),
                    r.a.createElement(
                      de.b,
                      null,
                      r.a.createElement(de.c, null, 'Details'),
                      r.a.createElement(ne.a, {
                        inputRef: o({ required: !0 }),
                        name: 'details',
                        required: !0,
                      })
                    )
                  )
                )
              )
            ),
            r.a.createElement(
              he.a,
              null,
              r.a.createElement(
                me.b,
                {
                  kind: me.a.minimal,
                  onClick: t,
                  overrides: {
                    BaseButton: {
                      style: ({ $theme: e }) => ({
                        width: '50%',
                        borderTopLeftRadius: '3px',
                        borderTopRightRadius: '3px',
                        borderBottomRightRadius: '3px',
                        borderBottomLeftRadius: '3px',
                        marginRight: '15px',
                        color: e.colors.red400,
                      }),
                    },
                  },
                },
                'Cancel'
              ),
              r.a.createElement(
                me.b,
                {
                  type: 'submit',
                  overrides: {
                    BaseButton: {
                      style: ({ $theme: e }) => ({
                        width: '50%',
                        borderTopLeftRadius: '3px',
                        borderTopRightRadius: '3px',
                        borderBottomRightRadius: '3px',
                        borderBottomLeftRadius: '3px',
                      }),
                    },
                  },
                },
                'Create Payment Option'
              )
            )
          )
        );
      };
      function Va() {
        const e = Object(x.a)([
          '\n  mutation CreatePaymentOption($id: ID!, $name: String!, $type: String!, $image: String!, $image_data: String!, $details: String!) {\n    updatePaymentOption(id: $id, name: $name, type: $type, image: $image, image_data: $image_data, details: $details) {\n      id\n      name\n      type\n      image\n      details\n      created_at\n    }\n  }\n',
        ]);
        return (
          (Va = function () {
            return e;
          }),
          e
        );
      }
      function Sa() {
        const e = Object(x.a)([
          '\n  query GetPaymentOptions(\n    $searchText: String\n    $offset: Int\n  ) {\n    paymentOptions(\n      searchText: $searchText\n      offset: $offset\n    ) {\n      items {\n        id\n        name\n        type\n        image\n        details\n        created_at\n      }\n      totalCount\n      hasMore\n    }\n  }\n',
        ]);
        return (
          (Sa = function () {
            return e;
          }),
          e
        );
      }
      const Ga = ae()(Sa()),
        Ta = ae()(Va());
      var Ia = (e) => {
        const a = Object(I.b)(),
          t = Object(I.c)('data'),
          c = Object(n.useCallback)(() => a({ type: 'CLOSE_DRAWER' }), [a]),
          o = Object(J.a)({ defaultValues: t }),
          m = o.register,
          s = o.handleSubmit,
          h = o.setValue;
        r.a.useEffect(() => {
          m({ name: 'image_data' }), m({ name: 'image', required: !0 });
        }, [m]);
        const d = Object(U.b)(Ga),
          p = (d.data, d.error, d.refetch, Object(U.a)(Ta)),
          u = Object(l.a)(p, 1)[0];
        return r.a.createElement(
          r.a.Fragment,
          null,
          r.a.createElement(
            he.c,
            null,
            r.a.createElement(he.b, null, 'Update Payment Option')
          ),
          r.a.createElement(
            he.e,
            {
              onSubmit: s(
                ({ name: e, type: a, details: l, image: n, image_data: r }) => {
                  u({
                    variables: {
                      id: t.id,
                      name: e,
                      type: a,
                      details: l,
                      image_data: r,
                      image: n,
                    },
                  }),
                    c();
                }
              ),
              style: { height: '100%' },
              encType: 'multipart/form-data',
            },
            r.a.createElement(
              te.Scrollbars,
              {
                autoHide: !0,
                renderView: (e) =>
                  r.a.createElement(
                    'div',
                    Object.assign({}, e, {
                      style: Object(i.a)(
                        Object(i.a)({}, e.style),
                        {},
                        { overflowX: 'hidden' }
                      ),
                    })
                  ),
                renderTrackHorizontal: (e) =>
                  r.a.createElement(
                    'div',
                    Object.assign({}, e, {
                      style: { display: 'none' },
                      className: 'track-horizontal',
                    })
                  ),
              },
              r.a.createElement(
                se.c,
                null,
                r.a.createElement(
                  se.a,
                  { lg: 4 },
                  r.a.createElement(
                    he.d,
                    null,
                    'Upload your payment option image here'
                  )
                ),
                r.a.createElement(
                  se.a,
                  { lg: 8 },
                  r.a.createElement(
                    ie.a,
                    {
                      overrides: {
                        Block: {
                          style: {
                            width: '100%',
                            height: 'auto',
                            padding: '30px',
                            borderRadius: '3px',
                            backgroundColor: '#ffffff',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                          },
                        },
                      },
                    },
                    r.a.createElement(le.a, {
                      type: 'file',
                      required: !0,
                      onChange: (e) => {
                        h(
                          'image_data',
                          JSON.stringify({
                            name: e[0].name,
                            size: e[0].size,
                            type: e[0].type,
                          })
                        ),
                          Object(ue.a)(e[0], (e) => {
                            h('image', e);
                          });
                      },
                      imageURL: F.a + t.image,
                    })
                  )
                )
              ),
              r.a.createElement(
                se.c,
                null,
                r.a.createElement(
                  se.a,
                  { lg: 4 },
                  r.a.createElement(
                    he.d,
                    null,
                    "Update your payment option and necessary information's from here"
                  )
                ),
                r.a.createElement(
                  se.a,
                  { lg: 8 },
                  r.a.createElement(
                    ie.a,
                    null,
                    r.a.createElement(
                      de.b,
                      null,
                      r.a.createElement(de.c, null, 'Name'),
                      r.a.createElement(ne.a, {
                        inputRef: m({ required: !0 }),
                        name: 'name',
                        required: !0,
                      })
                    ),
                    r.a.createElement(
                      de.b,
                      null,
                      r.a.createElement(de.c, null, 'Type'),
                      r.a.createElement(ne.a, {
                        inputRef: m({ required: !0 }),
                        name: 'type',
                        required: !0,
                      })
                    ),
                    r.a.createElement(
                      de.b,
                      null,
                      r.a.createElement(de.c, null, 'Details'),
                      r.a.createElement(ne.a, {
                        inputRef: m({ required: !0 }),
                        name: 'details',
                        required: !0,
                      })
                    )
                  )
                )
              )
            ),
            r.a.createElement(
              he.a,
              null,
              r.a.createElement(
                me.b,
                {
                  kind: me.a.minimal,
                  onClick: c,
                  overrides: {
                    BaseButton: {
                      style: ({ $theme: e }) => ({
                        width: '50%',
                        borderTopLeftRadius: '3px',
                        borderTopRightRadius: '3px',
                        borderBottomRightRadius: '3px',
                        borderBottomLeftRadius: '3px',
                        marginRight: '15px',
                        color: e.colors.red400,
                      }),
                    },
                  },
                },
                'Cancel'
              ),
              r.a.createElement(
                me.b,
                {
                  type: 'submit',
                  overrides: {
                    BaseButton: {
                      style: ({ $theme: e }) => ({
                        width: '50%',
                        borderTopLeftRadius: '3px',
                        borderTopRightRadius: '3px',
                        borderBottomRightRadius: '3px',
                        borderBottomLeftRadius: '3px',
                      }),
                    },
                  },
                },
                'Update Payment Option'
              )
            )
          )
        );
      };
      function qa() {
        const e = Object(x.a)([
          '    \n    mutation CreateDeliveryMethod($name: String!, $details: String!) {\n        createDeliveryMethod(name: $name, details: $details) {\n            id\n            name\n            details\n            created_at\n        }\n    }\n',
        ]);
        return (
          (qa = function () {
            return e;
          }),
          e
        );
      }
      function $a() {
        const e = Object(x.a)([
          '\n    query GetDeliveryMethods(\n        $searchText: String\n        $offset: Int\n    ) {\n        deliveryMethods(\n            searchText: $searchText\n            offset: $offset\n        ) {\n            items {\n                id\n                name\n                details\n                created_at\n            }\n            totalCount\n            hasMore\n        }\n    }\n',
        ]);
        return (
          ($a = function () {
            return e;
          }),
          e
        );
      }
      const Da = ae()($a()),
        Na = ae()(qa());
      var Ua = (e) => {
        const a = Object(I.b)(),
          t = Object(n.useCallback)(() => a({ type: 'CLOSE_DRAWER' }), [a]),
          c = Object(J.a)(),
          o = c.register,
          m = c.handleSubmit;
        c.setValue;
        r.a.useEffect(() => {}, [o]);
        const s = Object(U.a)(Na, {
            onCompleted: () => {
              ge("You've successfully created your resource!");
            },
            onError: () => {
              ve(
                "Sorry! We weren't able to create your type. Please try again later."
              );
            },
            update(e, { data: { createDeliveryMethod: a } }) {
              const t = e.readQuery({ query: Da }).deliveryMethods;
              e.writeQuery({
                query: Da,
                data: {
                  deliveryMethods: {
                    __typename: t.__typename,
                    items: [a, ...t.items],
                    hasMore: t.items.length + 1 >= 12,
                    totalCount: t.items.length + 1,
                  },
                },
              });
            },
          }),
          h = Object(l.a)(s, 1)[0];
        return r.a.createElement(
          r.a.Fragment,
          null,
          r.a.createElement(
            he.c,
            null,
            r.a.createElement(he.b, null, 'Add Delivery Method')
          ),
          r.a.createElement(
            he.e,
            {
              onSubmit: m(({ name: e, details: a }) => {
                h({ variables: { name: e, details: a } }), t();
              }),
              style: { height: '100%' },
              encType: 'multipart/form-data',
            },
            r.a.createElement(
              te.Scrollbars,
              {
                autoHide: !0,
                renderView: (e) =>
                  r.a.createElement(
                    'div',
                    Object.assign({}, e, {
                      style: Object(i.a)(
                        Object(i.a)({}, e.style),
                        {},
                        { overflowX: 'hidden' }
                      ),
                    })
                  ),
                renderTrackHorizontal: (e) =>
                  r.a.createElement(
                    'div',
                    Object.assign({}, e, {
                      style: { display: 'none' },
                      className: 'track-horizontal',
                    })
                  ),
              },
              r.a.createElement(
                se.c,
                null,
                r.a.createElement(
                  se.a,
                  { lg: 4 },
                  r.a.createElement(
                    he.d,
                    null,
                    "Add your delivery method and necessary information's from here"
                  )
                ),
                r.a.createElement(
                  se.a,
                  { lg: 8 },
                  r.a.createElement(
                    ie.a,
                    null,
                    r.a.createElement(
                      de.b,
                      null,
                      r.a.createElement(de.c, null, 'Name'),
                      r.a.createElement(ne.a, {
                        inputRef: o({ required: !0 }),
                        name: 'name',
                        required: !0,
                      })
                    ),
                    r.a.createElement(
                      de.b,
                      null,
                      r.a.createElement(de.c, null, 'Details'),
                      r.a.createElement(ne.a, {
                        inputRef: o({ required: !0 }),
                        name: 'details',
                        required: !0,
                      })
                    )
                  )
                )
              )
            ),
            r.a.createElement(
              he.a,
              null,
              r.a.createElement(
                me.b,
                {
                  kind: me.a.minimal,
                  onClick: t,
                  overrides: {
                    BaseButton: {
                      style: ({ $theme: e }) => ({
                        width: '50%',
                        borderTopLeftRadius: '3px',
                        borderTopRightRadius: '3px',
                        borderBottomRightRadius: '3px',
                        borderBottomLeftRadius: '3px',
                        marginRight: '15px',
                        color: e.colors.red400,
                      }),
                    },
                  },
                },
                'Cancel'
              ),
              r.a.createElement(
                me.b,
                {
                  type: 'submit',
                  overrides: {
                    BaseButton: {
                      style: ({ $theme: e }) => ({
                        width: '50%',
                        borderTopLeftRadius: '3px',
                        borderTopRightRadius: '3px',
                        borderBottomRightRadius: '3px',
                        borderBottomLeftRadius: '3px',
                      }),
                    },
                  },
                },
                'Create Delivery Method'
              )
            )
          )
        );
      };
      function Fa() {
        const e = Object(x.a)([
          '\n  mutation UpdateDeliveryMethod($id: ID!, $name: String!, $details: String!) {\n    updateDeliveryMethod(id: $id, name: $name, details: $details) {\n      id\n      name\n      details\n      created_at\n    }\n  }\n',
        ]);
        return (
          (Fa = function () {
            return e;
          }),
          e
        );
      }
      function Ka() {
        const e = Object(x.a)([
          '\n  query GetDeliveryMethods(\n    $searchText: String\n    $offset: Int\n  ) {\n    deliveryMethods(\n      searchText: $searchText\n      offset: $offset\n    ) {\n      items {\n        id\n        name\n        details\n        created_at\n      }\n      totalCount\n      hasMore\n    }\n  }\n',
        ]);
        return (
          (Ka = function () {
            return e;
          }),
          e
        );
      }
      const Qa = ae()(Ka()),
        Ya = ae()(Fa());
      var Xa = (e) => {
          const a = Object(I.b)(),
            t = Object(I.c)('data'),
            c = Object(n.useCallback)(() => a({ type: 'CLOSE_DRAWER' }), [a]),
            o = Object(J.a)({ defaultValues: t }),
            m = o.register,
            s = o.handleSubmit;
          o.setValue;
          r.a.useEffect(() => {}, [m]);
          const h = Object(U.b)(Qa),
            d = (h.data, h.error, h.refetch, Object(U.a)(Ya)),
            p = Object(l.a)(d, 1)[0];
          return r.a.createElement(
            r.a.Fragment,
            null,
            r.a.createElement(
              he.c,
              null,
              r.a.createElement(he.b, null, 'Update Delivery Method')
            ),
            r.a.createElement(
              he.e,
              {
                onSubmit: s(({ name: e, details: a }) => {
                  p({ variables: { id: t.id, name: e, details: a } }), c();
                }),
                style: { height: '100%' },
                encType: 'multipart/form-data',
              },
              r.a.createElement(
                te.Scrollbars,
                {
                  autoHide: !0,
                  renderView: (e) =>
                    r.a.createElement(
                      'div',
                      Object.assign({}, e, {
                        style: Object(i.a)(
                          Object(i.a)({}, e.style),
                          {},
                          { overflowX: 'hidden' }
                        ),
                      })
                    ),
                  renderTrackHorizontal: (e) =>
                    r.a.createElement(
                      'div',
                      Object.assign({}, e, {
                        style: { display: 'none' },
                        className: 'track-horizontal',
                      })
                    ),
                },
                r.a.createElement(
                  se.c,
                  null,
                  r.a.createElement(
                    se.a,
                    { lg: 4 },
                    r.a.createElement(
                      he.d,
                      null,
                      "Update your delivery method and necessary information's from here"
                    )
                  ),
                  r.a.createElement(
                    se.a,
                    { lg: 8 },
                    r.a.createElement(
                      ie.a,
                      null,
                      r.a.createElement(
                        de.b,
                        null,
                        r.a.createElement(de.c, null, 'Name'),
                        r.a.createElement(ne.a, {
                          inputRef: m({ required: !0 }),
                          name: 'name',
                          required: !0,
                        })
                      ),
                      r.a.createElement(
                        de.b,
                        null,
                        r.a.createElement(de.c, null, 'Details'),
                        r.a.createElement(ne.a, {
                          inputRef: m({ required: !0 }),
                          name: 'details',
                          required: !0,
                        })
                      )
                    )
                  )
                )
              ),
              r.a.createElement(
                he.a,
                null,
                r.a.createElement(
                  me.b,
                  {
                    kind: me.a.minimal,
                    onClick: c,
                    overrides: {
                      BaseButton: {
                        style: ({ $theme: e }) => ({
                          width: '50%',
                          borderTopLeftRadius: '3px',
                          borderTopRightRadius: '3px',
                          borderBottomRightRadius: '3px',
                          borderBottomLeftRadius: '3px',
                          marginRight: '15px',
                          color: e.colors.red400,
                        }),
                      },
                    },
                  },
                  'Cancel'
                ),
                r.a.createElement(
                  me.b,
                  {
                    type: 'submit',
                    overrides: {
                      BaseButton: {
                        style: ({ $theme: e }) => ({
                          width: '50%',
                          borderTopLeftRadius: '3px',
                          borderTopRightRadius: '3px',
                          borderBottomRightRadius: '3px',
                          borderBottomLeftRadius: '3px',
                        }),
                      },
                    },
                  },
                  'Update Delivery Method'
                )
              )
            )
          );
        },
        Ja = t(408),
        et = t(409),
        at = t(410);
      function tt() {
        const e = Object(x.a)([
          '  \n  mutation UpdateOrderStatus($id: ID!, $orderingPosition: Int!) {\n    updateOrderStatus(id: $id, orderingPosition: $orderingPosition) {\n      id\n      order_code\n      customer_id\n      contact_number\n      datetime\n      delivery_address\n      payment_method\n      payment_status\n      status\n      coupon_code\n      discount_amount\n      sub_total\n      total\n      delivery_method {\n        name\n        details\n      }\n      order_tracking {\n        status\n        ordering\n        is_current\n        step_competed\n      }\n    }\n  }\n',
        ]);
        return (
          (tt = function () {
            return e;
          }),
          e
        );
      }
      function lt() {
        const e = Object(x.a)([
          '\n  query GetOrders(\n    $status: String,\n    $searchText: String\n    $offset: Int\n  ) {\n    orders(\n      status: $status,\n      searchText: $searchText,\n      offset: $offset,\n    ) {\n      items {\n        id\n        order_code\n        customer_id\n        contact_number\n        datetime\n        delivery_address\n        payment_method\n        payment_status\n        status\n        coupon_code\n        discount_amount\n        sub_total\n        total\n        delivery_method {\n          name\n          details\n        }\n        order_tracking {\n          status\n          ordering\n          is_current\n          step_competed\n        }\n      }\n      totalCount\n      hasMore\n    }\n  }\n',
        ]);
        return (
          (lt = function () {
            return e;
          }),
          e
        );
      }
      const nt = ae()(lt()),
        rt = ae()(tt());
      var ct = (e) => {
          const a = Object(I.b)(),
            t = Object(I.c)('data'),
            c = Object(n.useCallback)(() => a({ type: 'CLOSE_DRAWER' }), [a]),
            o = Object(n.useState)(''),
            m = Object(l.a)(o, 2),
            s = m[0],
            h = m[1],
            d = Object(J.a)({ defaultValues: t }),
            p = d.register,
            u = d.handleSubmit;
          d.setValue;
          r.a.useEffect(() => {}, [p]),
            Object(n.useEffect)(() => {
              const e = t.order_tracking.filter((e) => 1 == e.is_current)[0]
                .ordering;
              h('' + e);
            }, []);
          const f = Object(U.b)(nt),
            E = (f.data, f.error, f.refetch),
            g = Object(U.a)(rt),
            v = Object(l.a)(g, 1)[0];
          return r.a.createElement(
            r.a.Fragment,
            null,
            r.a.createElement(
              he.c,
              null,
              r.a.createElement(he.b, null, 'Update Order Status')
            ),
            r.a.createElement(
              he.e,
              {
                onSubmit: u(() => {
                  v({ variables: { id: t.id, orderingPosition: parseInt(s) } }),
                    E(),
                    c();
                }),
                style: { height: '100%' },
                encType: 'multipart/form-data',
              },
              r.a.createElement(
                te.Scrollbars,
                {
                  autoHide: !0,
                  renderView: (e) =>
                    r.a.createElement(
                      'div',
                      Object.assign({}, e, {
                        style: Object(i.a)(
                          Object(i.a)({}, e.style),
                          {},
                          { overflowX: 'hidden' }
                        ),
                      })
                    ),
                  renderTrackHorizontal: (e) =>
                    r.a.createElement(
                      'div',
                      Object.assign({}, e, {
                        style: { display: 'none' },
                        className: 'track-horizontal',
                      })
                    ),
                },
                r.a.createElement(
                  se.c,
                  null,
                  r.a.createElement(se.a, { lg: 2 }),
                  r.a.createElement(
                    se.a,
                    { lg: 8 },
                    r.a.createElement(
                      ie.a,
                      null,
                      r.a.createElement(
                        Ja.a,
                        {
                          value: s,
                          onChange: (e) => h(e.target.value),
                          name: 'number',
                          align: et.a.vertical,
                        },
                        r.a.createElement(at.a, { value: '1' }, 'Pending'),
                        r.a.createElement(at.a, { value: '2' }, 'Received'),
                        r.a.createElement(at.a, { value: '3' }, 'Processing'),
                        r.a.createElement(at.a, { value: '4' }, 'InTransit'),
                        r.a.createElement(at.a, { value: '5' }, 'Delivered'),
                        r.a.createElement(at.a, { value: '6' }, 'Cancel'),
                        r.a.createElement(at.a, { value: '7' }, 'Failed')
                      )
                    )
                  )
                )
              ),
              r.a.createElement(
                he.a,
                null,
                r.a.createElement(
                  me.b,
                  {
                    kind: me.a.minimal,
                    onClick: c,
                    overrides: {
                      BaseButton: {
                        style: ({ $theme: e }) => ({
                          width: '50%',
                          borderTopLeftRadius: '3px',
                          borderTopRightRadius: '3px',
                          borderBottomRightRadius: '3px',
                          borderBottomLeftRadius: '3px',
                          marginRight: '15px',
                          color: e.colors.red400,
                        }),
                      },
                    },
                  },
                  'Cancel'
                ),
                r.a.createElement(
                  me.b,
                  {
                    type: 'submit',
                    overrides: {
                      BaseButton: {
                        style: ({ $theme: e }) => ({
                          width: '50%',
                          borderTopLeftRadius: '3px',
                          borderTopRightRadius: '3px',
                          borderBottomRightRadius: '3px',
                          borderBottomLeftRadius: '3px',
                        }),
                      },
                    },
                  },
                  'Update Status'
                )
              )
            )
          );
        },
        ot = t(414);
      var mt = (e) => {
        let a = Object.assign({}, e);
        return r.a.createElement(ot.a, a);
      };
      function it() {
        const e = Object(x.a)([
          '\n  mutation createStaff($staff: AddStaffInput!) {\n    createStaff(staff: $staff) {\n      id\n      first_name\n      last_name\n      name\n      email\n      contact_number\n      creation_date\n      role\n    }\n  }\n',
        ]);
        return (
          (it = function () {
            return e;
          }),
          e
        );
      }
      function st() {
        const e = Object(x.a)([
          '\n  query getStaffs($role: String, $searchBy: String) {\n    staffs(role: $role, searchBy: $searchBy) {\n      id\n      name\n      email\n      contact_number\n      creation_date\n      role\n    }\n  }\n',
        ]);
        return (
          (st = function () {
            return e;
          }),
          e
        );
      }
      const ht = ae()(st()),
        dt = ae()(it());
      var pt = (e) => {
          const a = Object(I.b)(),
            t = Object(n.useCallback)(() => a({ type: 'CLOSE_DRAWER' }), [a]),
            c = Object(J.a)(),
            o = c.register,
            m = c.handleSubmit,
            s = r.a.useState(void 0),
            h = Object(l.a)(s, 2),
            d = h[0],
            p = h[1],
            u = r.a.useState(!0),
            f = Object(l.a)(u, 2),
            E = f[0],
            g = f[1],
            v = r.a.useState(''),
            b = Object(l.a)(v, 2),
            M = b[0],
            w = b[1],
            x = Object(U.a)(dt, {
              update(e, { data: { createStaff: a } }) {
                const t = e.readQuery({ query: ht }).staffs;
                e.writeQuery({ query: ht, data: { staffs: t.concat([a]) } });
              },
            }),
            y = Object(l.a)(x, 1)[0];
          return r.a.createElement(
            r.a.Fragment,
            null,
            r.a.createElement(
              he.c,
              null,
              r.a.createElement(he.b, null, 'Add Staff Member')
            ),
            r.a.createElement(
              he.e,
              {
                onSubmit: m((e) => {
                  const a = Object(i.a)(
                    Object(i.a)({ id: sa()() }, e),
                    {},
                    {
                      role: e.role ? 'admin' : 'staff',
                      creation_date: new Date(),
                    }
                  );
                  console.log(e), y({ variables: { staff: a } }), t();
                }),
                style: { height: '100%' },
              },
              r.a.createElement(
                te.Scrollbars,
                {
                  autoHide: !0,
                  renderView: (e) =>
                    r.a.createElement(
                      'div',
                      Object.assign({}, e, {
                        style: Object(i.a)(
                          Object(i.a)({}, e.style),
                          {},
                          { overflowX: 'hidden' }
                        ),
                      })
                    ),
                  renderTrackHorizontal: (e) =>
                    r.a.createElement(
                      'div',
                      Object.assign({}, e, {
                        style: { display: 'none' },
                        className: 'track-horizontal',
                      })
                    ),
                },
                r.a.createElement(
                  se.c,
                  null,
                  r.a.createElement(
                    se.a,
                    { lg: 4 },
                    r.a.createElement(
                      he.d,
                      null,
                      'Add staff name, description and necessary information from here'
                    )
                  ),
                  r.a.createElement(
                    se.a,
                    { lg: 8 },
                    r.a.createElement(
                      ie.a,
                      null,
                      r.a.createElement(
                        de.b,
                        null,
                        r.a.createElement(de.c, null, 'First Name'),
                        r.a.createElement(ne.a, {
                          inputRef: o({ required: !0, maxLength: 20 }),
                          name: 'first_name',
                        })
                      ),
                      r.a.createElement(
                        de.b,
                        null,
                        r.a.createElement(de.c, null, 'Last Name'),
                        r.a.createElement(ne.a, {
                          inputRef: o({ required: !0, maxLength: 20 }),
                          name: 'last_name',
                        })
                      ),
                      r.a.createElement(
                        de.b,
                        null,
                        r.a.createElement(de.c, null, 'Contact No.'),
                        r.a.createElement(mt, {
                          country: d,
                          onCountryChange: ({ option: e }) => p(e),
                          text: M,
                          onTextChange: (e) => w(e.currentTarget.value),
                          inputRef: o({ required: !0 }),
                          name: 'contact_number',
                        })
                      ),
                      r.a.createElement(
                        de.b,
                        null,
                        r.a.createElement(de.c, null, 'Email'),
                        r.a.createElement(ne.a, {
                          type: 'email',
                          inputRef: o({ required: !0 }),
                          name: 'email',
                        })
                      )
                    )
                  )
                ),
                r.a.createElement(
                  se.c,
                  null,
                  r.a.createElement(
                    se.a,
                    { lg: 4 },
                    r.a.createElement(
                      he.d,
                      null,
                      'Expand or restrict user\u2019s permissions to access certain part of Mahdi Fashion system.'
                    )
                  ),
                  r.a.createElement(
                    se.a,
                    { lg: 8 },
                    r.a.createElement(
                      ie.a,
                      null,
                      r.a.createElement(
                        de.b,
                        null,
                        r.a.createElement(
                          Ie,
                          {
                            checked: E,
                            onChange: (e) => g(e.target.checked),
                            inputRef: o,
                            name: 'agreement_check',
                            overrides: {
                              Label: {
                                style: ({ $theme: e }) => ({
                                  color: e.colors.textNormal,
                                }),
                              },
                            },
                          },
                          'Access for created account'
                        )
                      )
                    )
                  )
                )
              ),
              r.a.createElement(
                he.a,
                null,
                r.a.createElement(
                  me.b,
                  {
                    kind: me.a.minimal,
                    onClick: t,
                    overrides: {
                      BaseButton: {
                        style: ({ $theme: e }) => ({
                          width: '50%',
                          borderTopLeftRadius: '3px',
                          borderTopRightRadius: '3px',
                          borderBottomRightRadius: '3px',
                          borderBottomLeftRadius: '3px',
                          marginRight: '15px',
                          color: e.colors.red400,
                        }),
                      },
                    },
                  },
                  'Cancel'
                ),
                r.a.createElement(
                  me.b,
                  {
                    type: 'submit',
                    overrides: {
                      BaseButton: {
                        style: ({ $theme: e }) => ({
                          width: '50%',
                          borderTopLeftRadius: '3px',
                          borderTopRightRadius: '3px',
                          borderBottomRightRadius: '3px',
                          borderBottomLeftRadius: '3px',
                        }),
                      },
                    },
                  },
                  'Add Staff'
                )
              )
            )
          );
        },
        ut = t(235),
        ft = t.n(ut);
      t(234);
      function Et() {
        const e = Object(x.a)([
          '\n  mutation CreateCoupon($coupon: CouponInput!) {\n    createCoupon(input: $coupon)  {\n        id\n        title\n        code\n        percentage\n        maximum_discount_amount\n        expiration_date\n        status\n        created_at\n    }\n  }\n',
        ]);
        return (
          (Et = function () {
            return e;
          }),
          e
        );
      }
      function gt() {
        const e = Object(x.a)([
          '\n  query GetCoupons( $searchText: String, $offset: Int) {\n    coupons(searchText: $searchText, offset: $offset) {\n      items{\n        id\n        title\n        code\n        percentage\n        maximum_discount_amount\n        expiration_date\n        status\n        created_at\n      } \n      totalCount\n      hasMore\n    }\n  }\n',
        ]);
        return (
          (gt = function () {
            return e;
          }),
          e
        );
      }
      const vt = ae()(gt()),
        bt = ae()(Et());
      var Mt = (e) => {
        const a = Object(I.b)(),
          t = Object(n.useCallback)(() => a({ type: 'CLOSE_DRAWER' }), [a]),
          c = Object(J.a)(),
          o = (c.register, c.handleSubmit),
          m = (c.setValue, Object(n.useState)('')),
          s = Object(l.a)(m, 2),
          h = s[0],
          d = s[1],
          p = Object(n.useState)(''),
          u = Object(l.a)(p, 2),
          f = u[0],
          E = u[1],
          v = Object(n.useState)(''),
          b = Object(l.a)(v, 2),
          M = b[0],
          w = b[1],
          x = Object(n.useState)(''),
          y = Object(l.a)(x, 2),
          k = y[0],
          A = y[1],
          O = Object(n.useState)(''),
          z = Object(l.a)(O, 2),
          j = z[0],
          _ = z[1],
          P = Object(n.useState)([]),
          C = Object(l.a)(P, 2),
          B = C[0],
          H = C[1],
          R = [
            { label: 'Running', value: g.m },
            { label: 'Expired', value: g.g },
          ],
          W = Object(U.a)(bt, {
            onCompleted: () => {
              ge("You've successfully created your Coupon!");
            },
            onError: (e) => {
              ve(
                "Sorry! We weren't able to create your Coupon. Please try again later."
              );
            },
            update(e, { data: { createCoupon: a } }) {
              const t = e.readQuery({ query: vt }).coupons;
              e.writeQuery({
                query: vt,
                data: {
                  coupons: {
                    __typename: t.__typename,
                    items: [a, ...t.items],
                    hasMore: t.items.length + 1 >= 12,
                    totalCount: t.items.length + 1,
                  },
                },
              });
            },
          }),
          Z = Object(l.a)(W, 1)[0];
        return r.a.createElement(
          r.a.Fragment,
          null,
          r.a.createElement(
            he.c,
            null,
            r.a.createElement(he.b, null, 'Add Coupon')
          ),
          r.a.createElement(
            he.e,
            {
              onSubmit: o(() => {
                const e = {
                  title: f,
                  code: M,
                  percentage: parseFloat(k),
                  maximum_discount_amount: parseFloat(j),
                  expiration_date: h,
                  status: B[0] && B[0].value,
                };
                Z({ variables: { coupon: e } }), t();
              }),
              style: { height: '100%' },
            },
            r.a.createElement(
              te.Scrollbars,
              {
                autoHide: !0,
                renderView: (e) =>
                  r.a.createElement(
                    'div',
                    Object.assign({}, e, {
                      style: Object(i.a)(
                        Object(i.a)({}, e.style),
                        {},
                        { overflowX: 'hidden' }
                      ),
                    })
                  ),
                renderTrackHorizontal: (e) =>
                  r.a.createElement(
                    'div',
                    Object.assign({}, e, {
                      style: { display: 'none' },
                      className: 'track-horizontal',
                    })
                  ),
              },
              r.a.createElement(
                se.c,
                null,
                r.a.createElement(
                  se.a,
                  { lg: 4 },
                  r.a.createElement(
                    he.d,
                    null,
                    'Add your coupon description and necessary informations from here'
                  )
                ),
                r.a.createElement(
                  se.a,
                  { lg: 8 },
                  r.a.createElement(
                    ie.a,
                    null,
                    r.a.createElement(
                      de.b,
                      null,
                      r.a.createElement(de.c, null, 'Coupon Title'),
                      r.a.createElement(ne.a, {
                        value: f,
                        onChange: (e) => E(e.target.value),
                        name: 'title',
                      })
                    ),
                    r.a.createElement(
                      de.b,
                      null,
                      r.a.createElement(de.c, null, 'Coupon Code'),
                      r.a.createElement(ne.a, {
                        value: M,
                        onChange: (e) => w(e.target.value),
                        name: 'code',
                      })
                    ),
                    r.a.createElement(
                      de.b,
                      null,
                      r.a.createElement(de.c, null, 'Discount Percentage'),
                      r.a.createElement(ne.a, {
                        value: k,
                        onChange: (e) => A(e.target.value),
                        name: 'percentage',
                      })
                    ),
                    r.a.createElement(
                      de.b,
                      null,
                      r.a.createElement(de.c, null, 'Maximum Discount Amount'),
                      r.a.createElement(ne.a, {
                        value: j,
                        onChange: (e) => _(e.target.value),
                        name: 'maximum_discount_amount',
                      })
                    ),
                    r.a.createElement(
                      'div',
                      {
                        'data-baseweb': 'block',
                        className: 'ai ae bk gs gu gv',
                      },
                      r.a.createElement(
                        'label',
                        { className: 'bs dt bu bv gw b9' },
                        'Expiration Date'
                      ),
                      r.a.createElement(
                        'div',
                        {
                          'data-baseweb': 'input',
                          className: 'bs bt cq cr cs ae ai',
                        },
                        r.a.createElement(
                          'div',
                          {
                            'data-baseweb': 'base-input',
                            className:
                              'ct ae ai cu cv cw cx cy cz d0 d1 d2 d3 d4 d5 d6 d7 d8 bs bt cq cr cs d9 da db dc dd',
                          },
                          r.a.createElement(ft.a, {
                            className:
                              'ct c5 de df dg dh di dj dk dl dm ai dn do cp dp dq dr ds bs dt bu bv b9 du dv',
                            selected: h,
                            onChange: (e) => d(e),
                            timeInputLabel: 'Time:',
                            dateFormat: 'MM/dd/yyyy h:mm aa',
                            showTimeInput: !0,
                          })
                        )
                      )
                    ),
                    r.a.createElement(
                      de.b,
                      null,
                      r.a.createElement(de.c, null, 'Status'),
                      r.a.createElement(_e.a, {
                        options: R,
                        labelKey: 'label',
                        valueKey: 'value',
                        placeholder: 'Select Status',
                        value: B,
                        required: !0,
                        searchable: !0,
                        onChange: (e) => H(e.value),
                        overrides: {
                          Popover: {
                            props: {
                              overrides: { Body: { style: { zIndex: 5 } } },
                            },
                          },
                        },
                      })
                    )
                  )
                )
              )
            ),
            r.a.createElement(
              he.a,
              null,
              r.a.createElement(
                me.b,
                {
                  kind: me.a.minimal,
                  onClick: t,
                  overrides: {
                    BaseButton: {
                      style: ({ $theme: e }) => ({
                        width: '50%',
                        borderTopLeftRadius: '3px',
                        borderTopRightRadius: '3px',
                        borderBottomRightRadius: '3px',
                        borderBottomLeftRadius: '3px',
                        marginRight: '15px',
                        color: e.colors.red400,
                      }),
                    },
                  },
                },
                'Cancel'
              ),
              r.a.createElement(
                me.b,
                {
                  type: 'submit',
                  overrides: {
                    BaseButton: {
                      style: ({ $theme: e }) => ({
                        width: '50%',
                        borderTopLeftRadius: '3px',
                        borderTopRightRadius: '3px',
                        borderBottomRightRadius: '3px',
                        borderBottomLeftRadius: '3px',
                      }),
                    },
                  },
                },
                'Create Coupon'
              )
            )
          )
        );
      };
      function wt() {
        const e = Object(x.a)([
          '  \n  mutation UpdateCoupon($id: ID!, $input: CouponInput!) {\n    updateCoupon(id: $id, input: $input) {\n      id\n      title\n      code\n      percentage\n      maximum_discount_amount\n      expiration_date\n      status\n      created_at\n    }\n  }\n',
        ]);
        return (
          (wt = function () {
            return e;
          }),
          e
        );
      }
      function xt() {
        const e = Object(x.a)([
          '\n  query GetCoupons( $searchText: String, $offset: Int) {\n    coupons(searchText: $searchText, offset: $offset) {\n      items{\n        id\n        title\n        code\n        percentage\n        maximum_discount_amount\n        expiration_date\n        status\n        created_at\n      } \n      totalCount\n      hasMore\n    }\n  }\n',
        ]);
        return (
          (xt = function () {
            return e;
          }),
          e
        );
      }
      const yt = ae()(xt()),
        kt = ae()(wt());
      var At = (e) => {
        const a = Object(I.b)(),
          t = Object(I.c)('data'),
          c = Object(n.useCallback)(() => a({ type: 'CLOSE_DRAWER' }), [a]),
          o = Object(J.a)({ defaultValues: t }),
          m = (o.register, o.handleSubmit),
          s =
            (o.setValue,
            Object(n.useState)(
              t.expiration_date ? new Date(t.expiration_date) : ''
            )),
          h = Object(l.a)(s, 2),
          d = h[0],
          p = h[1],
          u = Object(n.useState)(t.title ? t.title : ''),
          f = Object(l.a)(u, 2),
          E = f[0],
          v = f[1],
          b = Object(n.useState)(t.code ? t.code : ''),
          M = Object(l.a)(b, 2),
          w = M[0],
          x = M[1],
          y = Object(n.useState)(t.percentage ? t.percentage : ''),
          k = Object(l.a)(y, 2),
          A = k[0],
          O = k[1],
          z = Object(n.useState)(
            t.maximum_discount_amount ? t.maximum_discount_amount : ''
          ),
          j = Object(l.a)(z, 2),
          _ = j[0],
          P = j[1],
          C = [
            { label: 'Running', value: g.m },
            { label: 'Expired', value: g.g },
          ],
          B = Object(n.useState)(C.filter((e) => e.value == t.status)),
          H = Object(l.a)(B, 2),
          R = H[0],
          W = H[1],
          Z = Object(U.b)(yt),
          L = (Z.data, Z.error, Z.refetch, Object(U.a)(kt)),
          V = Object(l.a)(L, 1)[0];
        return r.a.createElement(
          r.a.Fragment,
          null,
          r.a.createElement(
            he.c,
            null,
            r.a.createElement(he.b, null, 'Update Coupon')
          ),
          r.a.createElement(
            he.e,
            {
              onSubmit: m((e) => {
                const a = {
                  title: E,
                  code: w,
                  percentage: parseFloat(A),
                  maximum_discount_amount: parseFloat(_),
                  expiration_date: d,
                  status: R[0] && R[0].value,
                };
                V({ variables: { id: t.id, input: a } }), c();
              }),
              style: { height: '100%' },
              encType: 'multipart/form-data',
            },
            r.a.createElement(
              te.Scrollbars,
              {
                autoHide: !0,
                renderView: (e) =>
                  r.a.createElement(
                    'div',
                    Object.assign({}, e, {
                      style: Object(i.a)(
                        Object(i.a)({}, e.style),
                        {},
                        { overflowX: 'hidden' }
                      ),
                    })
                  ),
                renderTrackHorizontal: (e) =>
                  r.a.createElement(
                    'div',
                    Object.assign({}, e, {
                      style: { display: 'none' },
                      className: 'track-horizontal',
                    })
                  ),
              },
              r.a.createElement(
                se.c,
                null,
                r.a.createElement(
                  se.a,
                  { lg: 4 },
                  r.a.createElement(
                    he.d,
                    null,
                    "Update your Coupon and necessary information's from here"
                  )
                ),
                r.a.createElement(
                  se.a,
                  { lg: 8 },
                  r.a.createElement(
                    ie.a,
                    null,
                    r.a.createElement(
                      de.b,
                      null,
                      r.a.createElement(de.c, null, 'Coupon Title'),
                      r.a.createElement(ne.a, {
                        value: E,
                        onChange: (e) => v(e.target.value),
                        name: 'title',
                      })
                    ),
                    r.a.createElement(
                      de.b,
                      null,
                      r.a.createElement(de.c, null, 'Coupon Code'),
                      r.a.createElement(ne.a, {
                        value: w,
                        onChange: (e) => x(e.target.value),
                        name: 'code',
                      })
                    ),
                    r.a.createElement(
                      de.b,
                      null,
                      r.a.createElement(de.c, null, 'Discount Percentage'),
                      r.a.createElement(ne.a, {
                        value: A,
                        onChange: (e) => O(e.target.value),
                        name: 'percentage',
                      })
                    ),
                    r.a.createElement(
                      de.b,
                      null,
                      r.a.createElement(de.c, null, 'Maximum Discount Amount'),
                      r.a.createElement(ne.a, {
                        value: _,
                        onChange: (e) => P(e.target.value),
                        name: 'maximum_discount_amount',
                      })
                    ),
                    r.a.createElement(
                      'div',
                      {
                        'data-baseweb': 'block',
                        className: 'ai ae bk gs gu gv',
                      },
                      r.a.createElement(
                        'label',
                        { className: 'bs dt bu bv gw b9' },
                        'Expiration Date'
                      ),
                      r.a.createElement(
                        'div',
                        {
                          'data-baseweb': 'input',
                          className: 'bs bt cq cr cs ae ai',
                        },
                        r.a.createElement(
                          'div',
                          {
                            'data-baseweb': 'base-input',
                            className:
                              'ct ae ai cu cv cw cx cy cz d0 d1 d2 d3 d4 d5 d6 d7 d8 bs bt cq cr cs d9 da db dc dd',
                          },
                          r.a.createElement(ft.a, {
                            className:
                              'ct c5 de df dg dh di dj dk dl dm ai dn do cp dp dq dr ds bs dt bu bv b9 du dv',
                            selected: d,
                            onChange: (e) => p(e),
                            timeInputLabel: 'Time:',
                            dateFormat: 'MM/dd/yyyy h:mm aa',
                            showTimeInput: !0,
                          })
                        )
                      )
                    ),
                    r.a.createElement(
                      de.b,
                      null,
                      r.a.createElement(de.c, null, 'Status'),
                      r.a.createElement(ce.a, {
                        options: C,
                        labelKey: 'label',
                        valueKey: 'value',
                        placeholder: 'Select Status',
                        value: R,
                        required: !0,
                        searchable: !0,
                        onChange: function ({ value: e }) {
                          W(e);
                        },
                        overrides: {
                          Popover: {
                            props: {
                              overrides: { Body: { style: { zIndex: 5 } } },
                            },
                          },
                        },
                      })
                    )
                  )
                )
              )
            ),
            r.a.createElement(
              he.a,
              null,
              r.a.createElement(
                me.b,
                {
                  kind: me.a.minimal,
                  onClick: c,
                  overrides: {
                    BaseButton: {
                      style: ({ $theme: e }) => ({
                        width: '50%',
                        borderTopLeftRadius: '3px',
                        borderTopRightRadius: '3px',
                        borderBottomRightRadius: '3px',
                        borderBottomLeftRadius: '3px',
                        marginRight: '15px',
                        color: e.colors.red400,
                      }),
                    },
                  },
                },
                'Cancel'
              ),
              r.a.createElement(
                me.b,
                {
                  type: 'submit',
                  overrides: {
                    BaseButton: {
                      style: ({ $theme: e }) => ({
                        width: '50%',
                        borderTopLeftRadius: '3px',
                        borderTopRightRadius: '3px',
                        borderBottomRightRadius: '3px',
                        borderBottomLeftRadius: '3px',
                      }),
                    },
                  },
                },
                'Update Type'
              )
            )
          )
        );
      };
      function Ot() {
        const e = Object(x.a)([
          '    \n    mutation CreateHomeCard($name: String!, $url: String, $image: String!, $image_data: File!, $status: Boolean, $types: String!) {\n        createHomeCard(name: $name, url: $url, image: $image, image_data: $image_data, status: $status, types: $types) {\n            id\n            name\n            url\n            image\n            status\n            types {\n                id\n                slug\n                name\n            }\n            created_at\n        }\n    }\n',
        ]);
        return (
          (Ot = function () {
            return e;
          }),
          e
        );
      }
      function zt() {
        const e = Object(x.a)([
          '\n    query GetTypes {\n        types(limit: 0) {\n            items {\n                id\n                name\n                slug\n                image\n                icon\n                meta_title\n                meta_keyword\n                meta_description\n                created_at\n            }\n            totalCount\n            hasMore\n        }\n    }\n',
        ]);
        return (
          (zt = function () {
            return e;
          }),
          e
        );
      }
      function jt() {
        const e = Object(x.a)([
          '\n    query GetHomeCards(\n        $searchText: String\n        $offset: Int\n    ) {\n        homeCards(\n            searchText: $searchText\n            offset: $offset\n        ) {\n            items {\n                id\n                name\n                url\n                image\n                status\n                types {\n                    id\n                    slug\n                    name\n                }\n                created_at\n            }\n            totalCount\n            hasMore\n        }\n    }\n',
        ]);
        return (
          (jt = function () {
            return e;
          }),
          e
        );
      }
      const _t = ae()(jt()),
        Pt = ae()(zt()),
        Ct = ae()(Ot());
      var Bt = (e) => {
        const a = Object(U.b)(Pt),
          t = a.data,
          c = (a.error, a.refetch, Object(I.b)()),
          o = Object(n.useCallback)(() => c({ type: 'CLOSE_DRAWER' }), [c]),
          m = Object(J.a)(),
          s = m.register,
          h = m.handleSubmit,
          d = m.setValue,
          p = Object(n.useState)(!0),
          u = Object(l.a)(p, 2),
          f = u[0],
          E = u[1],
          g = Object(n.useState)([]),
          v = Object(l.a)(g, 2),
          b = v[0],
          M = v[1];
        r.a.useEffect(() => {
          s({ name: 'image_data' }),
            s({ name: 'image', required: !0 }),
            s({ name: 'status' }),
            s({ name: 'types' });
        }, [s]);
        const w = Object(U.a)(Ct, {
            onCompleted: () => {
              ge("You've successfully created your resource!");
            },
            onError: () => {
              ve(
                "Sorry! We weren't able to create your resource. Please try again later."
              );
            },
            update(e, { data: { createHomeCard: a } }) {
              const t = e.readQuery({ query: _t }).homeCards;
              e.writeQuery({
                query: _t,
                data: {
                  homeCards: {
                    __typename: t.__typename,
                    items: [a, ...t.items],
                    hasMore: t.items.length + 1 >= 12,
                    totalCount: t.items.length + 1,
                  },
                },
              });
            },
          }),
          x = Object(l.a)(w, 1)[0];
        return r.a.createElement(
          r.a.Fragment,
          null,
          r.a.createElement(
            he.c,
            null,
            r.a.createElement(he.b, null, 'Add HomeCard')
          ),
          r.a.createElement(
            he.e,
            {
              onSubmit: h(
                ({ name: e, url: a, image: t, image_data: l, types: n }) => {
                  x({
                    variables: {
                      name: e,
                      url: a,
                      image: t,
                      image_data: l,
                      status: f,
                      types: n,
                    },
                  }),
                    o();
                }
              ),
              style: { height: '100%' },
              encType: 'multipart/form-data',
            },
            r.a.createElement(
              te.Scrollbars,
              {
                autoHide: !0,
                renderView: (e) =>
                  r.a.createElement(
                    'div',
                    Object.assign({}, e, {
                      style: Object(i.a)(
                        Object(i.a)({}, e.style),
                        {},
                        { overflowX: 'hidden' }
                      ),
                    })
                  ),
                renderTrackHorizontal: (e) =>
                  r.a.createElement(
                    'div',
                    Object.assign({}, e, {
                      style: { display: 'none' },
                      className: 'track-horizontal',
                    })
                  ),
              },
              r.a.createElement(
                se.c,
                null,
                r.a.createElement(
                  se.a,
                  { lg: 4 },
                  r.a.createElement(
                    he.d,
                    null,
                    'Upload your HomeCard image here'
                  )
                ),
                r.a.createElement(
                  se.a,
                  { lg: 8 },
                  r.a.createElement(
                    ie.a,
                    {
                      overrides: {
                        Block: {
                          style: {
                            width: '100%',
                            height: 'auto',
                            padding: '30px',
                            borderRadius: '3px',
                            backgroundColor: '#ffffff',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                          },
                        },
                      },
                    },
                    r.a.createElement(le.a, {
                      type: 'file',
                      required: !0,
                      onChange: (e) => {
                        d('image_data', {
                          name: e[0].name,
                          size: e[0].size,
                          type: e[0].type,
                        }),
                          Object(ue.a)(e[0], (e) => {
                            d('image', e);
                          });
                      },
                    })
                  )
                )
              ),
              r.a.createElement(
                se.c,
                null,
                r.a.createElement(
                  se.a,
                  { lg: 4 },
                  r.a.createElement(
                    he.d,
                    null,
                    "Add your homecard and necessary information's from here"
                  )
                ),
                r.a.createElement(
                  se.a,
                  { lg: 8 },
                  r.a.createElement(
                    ie.a,
                    null,
                    r.a.createElement(
                      de.b,
                      null,
                      r.a.createElement(de.c, null, 'Is Active?'),
                      r.a.createElement(Ie, {
                        checked: f,
                        onChange: (e) => {
                          d('status', e.target.checked), E(e.target.checked);
                        },
                        labelPlacement: Te.right,
                      })
                    ),
                    r.a.createElement(
                      de.b,
                      null,
                      r.a.createElement(de.c, null, 'Name'),
                      r.a.createElement(ne.a, {
                        inputRef: s({ required: !0 }),
                        name: 'name',
                        required: !0,
                      })
                    ),
                    r.a.createElement(
                      de.b,
                      null,
                      r.a.createElement(de.c, null, 'Url'),
                      r.a.createElement(ne.a, { inputRef: s({}), name: 'url' })
                    ),
                    r.a.createElement(
                      de.b,
                      null,
                      r.a.createElement(de.c, null, 'Select Types'),
                      r.a.createElement(ce.a, {
                        options: t ? t.types.items : [],
                        labelKey: 'name',
                        valueKey: 'id',
                        placeholder: 'Select Main Types',
                        value: b,
                        required: !0,
                        searchable: !0,
                        onChange: ({ value: e }) => {
                          let a = [];
                          for (let t = 0; t < e.length; t++)
                            a.push({
                              id: e[t].id,
                              name: e[t].name,
                              slug: e[t].slug,
                            });
                          d('types', JSON.stringify(a)), M(e);
                        },
                        overrides: {
                          Placeholder: {
                            style: ({ $theme: e }) =>
                              Object(i.a)(
                                Object(i.a)({}, e.typography.fontBold14),
                                {},
                                { color: e.colors.textNormal }
                              ),
                          },
                          DropdownListItem: {
                            style: ({ $theme: e }) =>
                              Object(i.a)(
                                Object(i.a)({}, e.typography.fontBold14),
                                {},
                                { color: e.colors.textNormal }
                              ),
                          },
                          Popover: {
                            props: {
                              overrides: { Body: { style: { zIndex: 5 } } },
                            },
                          },
                        },
                        type: oe.b.search,
                        multi: !0,
                      })
                    )
                  )
                )
              )
            ),
            r.a.createElement(
              he.a,
              null,
              r.a.createElement(
                me.b,
                {
                  kind: me.a.minimal,
                  onClick: o,
                  overrides: {
                    BaseButton: {
                      style: ({ $theme: e }) => ({
                        width: '50%',
                        borderTopLeftRadius: '3px',
                        borderTopRightRadius: '3px',
                        borderBottomRightRadius: '3px',
                        borderBottomLeftRadius: '3px',
                        marginRight: '15px',
                        color: e.colors.red400,
                      }),
                    },
                  },
                },
                'Cancel'
              ),
              r.a.createElement(
                me.b,
                {
                  type: 'submit',
                  overrides: {
                    BaseButton: {
                      style: ({ $theme: e }) => ({
                        width: '50%',
                        borderTopLeftRadius: '3px',
                        borderTopRightRadius: '3px',
                        borderBottomRightRadius: '3px',
                        borderBottomLeftRadius: '3px',
                      }),
                    },
                  },
                },
                'Create HomeCard'
              )
            )
          )
        );
      };
      function Ht() {
        const e = Object(x.a)([
          '\n  mutation UpdateHomeCard($id: String!, $name: String!, $url: String, $image: String!, $image_data: File, $status: Boolean, $types: String!) {\n    updateHomeCard(id: $id, name: $name, url: $url, image: $image, image_data: $image_data, status: $status, types: $types) {\n      id\n      name\n      url\n      image\n      status\n      types {\n        id\n        slug\n        name\n      }\n      created_at\n    }\n  }\n',
        ]);
        return (
          (Ht = function () {
            return e;
          }),
          e
        );
      }
      function Rt() {
        const e = Object(x.a)([
          '\n  query GetTypes {\n    types(limit: 0) {\n      items {\n        id\n        name\n        slug\n        image\n        icon\n        meta_title\n        meta_keyword\n        meta_description\n        created_at\n      }\n      totalCount\n      hasMore\n    }\n  }\n',
        ]);
        return (
          (Rt = function () {
            return e;
          }),
          e
        );
      }
      function Wt() {
        const e = Object(x.a)([
          '\n  query GetHomeCards(\n    $searchText: String\n    $offset: Int\n  ) {\n    homeCards(\n      searchText: $searchText\n      offset: $offset\n    ) {\n      items {\n        id\n        name\n        url\n        image\n        status\n        types {\n          id\n          slug\n          name\n        }\n        created_at\n      }\n      totalCount\n      hasMore\n    }\n  }\n',
        ]);
        return (
          (Wt = function () {
            return e;
          }),
          e
        );
      }
      const Zt = ae()(Wt()),
        Lt = ae()(Rt()),
        Vt = ae()(Ht());
      const St = {
          TYPE_FORM: ye,
          TYPE_UPDATE_FORM: je,
          PRODUCT_FORM: Je,
          PRODUCT_UPDATE_FORM: ma,
          CAMPAING_FORM: Ea,
          CATEGORY_FORM: Aa,
          CATEGORY_UPDATE_FORM: Ba,
          PAYMENT_OPTION_FORM: La,
          PAYMENT_OPTION_UPDATE_FORM: Ia,
          DELIVERY_METHOD_FORM: Ua,
          DELIVERY_METHOD_UPDATE_FORM: Xa,
          ORDER_STATUS_UPDATE_FORM: ct,
          STAFF_MEMBER_FORM: pt,
          COUPON_FORM: Mt,
          COUPON_UPDATE_FORM: At,
          HOMECARD_FORM: Bt,
          HOMECARD_UPDATE_FORM: (e) => {
            const a = Object(U.b)(Lt),
              t = a.data,
              c = (a.error, a.refetch, Object(I.b)()),
              o = Object(I.c)('data'),
              m = Object(n.useCallback)(() => c({ type: 'CLOSE_DRAWER' }), [c]),
              s = Object(J.a)({ defaultValues: o }),
              h = s.register,
              d = s.handleSubmit,
              p = s.setValue,
              u = Object(n.useState)(!o.status || o.status),
              f = Object(l.a)(u, 2),
              E = f[0],
              g = f[1],
              v = Object(n.useState)([]),
              b = Object(l.a)(v, 2),
              M = b[0],
              w = b[1];
            r.a.useEffect(() => {
              w(o.types.map((e) => ({ id: e.id, name: e.name, slug: e.slug })));
            }, [o]),
              r.a.useEffect(() => {
                h({ name: 'image_data' }),
                  h({ name: 'image', required: !0 }),
                  h({ name: 'status' }),
                  h({ name: 'types' });
              }, [h]);
            const x = Object(U.b)(Zt),
              y = (x.data, x.error, x.refetch, Object(U.a)(Vt)),
              k = Object(l.a)(y, 1)[0];
            return r.a.createElement(
              r.a.Fragment,
              null,
              r.a.createElement(
                he.c,
                null,
                r.a.createElement(he.b, null, 'Update HomeCard')
              ),
              r.a.createElement(
                he.e,
                {
                  onSubmit: d(
                    ({
                      name: e,
                      url: a,
                      image: t,
                      image_data: l,
                      types: n,
                    }) => {
                      console.log(n),
                        k({
                          variables: {
                            id: o.id,
                            name: e,
                            url: a,
                            image: t,
                            image_data: l,
                            status: E,
                            types: JSON.stringify(
                              n.map((e) => ({
                                id: e.id,
                                name: e.name,
                                slug: e.slug,
                              }))
                            ),
                          },
                        }),
                        m();
                    }
                  ),
                  style: { height: '100%' },
                  encType: 'multipart/form-data',
                },
                r.a.createElement(
                  te.Scrollbars,
                  {
                    autoHide: !0,
                    renderView: (e) =>
                      r.a.createElement(
                        'div',
                        Object.assign({}, e, {
                          style: Object(i.a)(
                            Object(i.a)({}, e.style),
                            {},
                            { overflowX: 'hidden' }
                          ),
                        })
                      ),
                    renderTrackHorizontal: (e) =>
                      r.a.createElement(
                        'div',
                        Object.assign({}, e, {
                          style: { display: 'none' },
                          className: 'track-horizontal',
                        })
                      ),
                  },
                  r.a.createElement(
                    se.c,
                    null,
                    r.a.createElement(
                      se.a,
                      { lg: 4 },
                      r.a.createElement(
                        he.d,
                        null,
                        'Upload your HomeCard image here'
                      )
                    ),
                    r.a.createElement(
                      se.a,
                      { lg: 8 },
                      r.a.createElement(
                        ie.a,
                        {
                          overrides: {
                            Block: {
                              style: {
                                width: '100%',
                                height: 'auto',
                                padding: '30px',
                                borderRadius: '3px',
                                backgroundColor: '#ffffff',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                              },
                            },
                          },
                        },
                        r.a.createElement(le.a, {
                          type: 'file',
                          required: !0,
                          onChange: (e) => {
                            p('image_data', {
                              name: e[0].name,
                              size: e[0].size,
                              type: e[0].type,
                            }),
                              Object(ue.a)(e[0], (e) => {
                                p('image', e);
                              });
                          },
                          imageURL: F.a + o.image,
                        })
                      )
                    )
                  ),
                  r.a.createElement(
                    se.c,
                    null,
                    r.a.createElement(
                      se.a,
                      { lg: 4 },
                      r.a.createElement(
                        he.d,
                        null,
                        "Update your homecard and necessary information's from here"
                      )
                    ),
                    r.a.createElement(
                      se.a,
                      { lg: 8 },
                      r.a.createElement(
                        ie.a,
                        null,
                        r.a.createElement(
                          de.b,
                          null,
                          r.a.createElement(de.c, null, 'Is Active?'),
                          r.a.createElement(Ie, {
                            checked: E,
                            onChange: (e) => {
                              p('status', e.target.checked),
                                g(e.target.checked);
                            },
                            labelPlacement: Te.right,
                          })
                        ),
                        r.a.createElement(
                          de.b,
                          null,
                          r.a.createElement(de.c, null, 'Name'),
                          r.a.createElement(ne.a, {
                            inputRef: h({ required: !0 }),
                            name: 'name',
                            required: !0,
                          })
                        ),
                        r.a.createElement(
                          de.b,
                          null,
                          r.a.createElement(de.c, null, 'Url'),
                          r.a.createElement(ne.a, {
                            inputRef: h({}),
                            name: 'url',
                          })
                        ),
                        r.a.createElement(
                          de.b,
                          null,
                          r.a.createElement(de.c, null, 'Select Types'),
                          r.a.createElement(ce.a, {
                            options: t ? t.types.items : [],
                            labelKey: 'name',
                            valueKey: 'id',
                            placeholder: 'Select Main Types',
                            value: M,
                            required: !0,
                            searchable: !0,
                            onChange: ({ value: e }) => {
                              let a = [];
                              for (let t = 0; t < e.length; t++)
                                a.push({
                                  id: e[t].id,
                                  name: e[t].name,
                                  slug: e[t].slug,
                                });
                              p('types', a), w(e);
                            },
                            overrides: {
                              Placeholder: {
                                style: ({ $theme: e }) =>
                                  Object(i.a)(
                                    Object(i.a)({}, e.typography.fontBold14),
                                    {},
                                    { color: e.colors.textNormal }
                                  ),
                              },
                              DropdownListItem: {
                                style: ({ $theme: e }) =>
                                  Object(i.a)(
                                    Object(i.a)({}, e.typography.fontBold14),
                                    {},
                                    { color: e.colors.textNormal }
                                  ),
                              },
                              Popover: {
                                props: {
                                  overrides: { Body: { style: { zIndex: 5 } } },
                                },
                              },
                            },
                            type: oe.b.search,
                            multi: !0,
                          })
                        )
                      )
                    )
                  )
                ),
                r.a.createElement(
                  he.a,
                  null,
                  r.a.createElement(
                    me.b,
                    {
                      kind: me.a.minimal,
                      onClick: m,
                      overrides: {
                        BaseButton: {
                          style: ({ $theme: e }) => ({
                            width: '50%',
                            borderTopLeftRadius: '3px',
                            borderTopRightRadius: '3px',
                            borderBottomRightRadius: '3px',
                            borderBottomLeftRadius: '3px',
                            marginRight: '15px',
                            color: e.colors.red400,
                          }),
                        },
                      },
                    },
                    'Cancel'
                  ),
                  r.a.createElement(
                    me.b,
                    {
                      type: 'submit',
                      overrides: {
                        BaseButton: {
                          style: ({ $theme: e }) => ({
                            width: '50%',
                            borderTopLeftRadius: '3px',
                            borderTopRightRadius: '3px',
                            borderBottomRightRadius: '3px',
                            borderBottomLeftRadius: '3px',
                          }),
                        },
                      },
                    },
                    'Update HomeCard'
                  )
                )
              )
            );
          },
          SIDEBAR: w,
        },
        Gt = Object(s.b)('button', ({ $theme: e }) =>
          Object(i.a)(
            Object(i.a)({}, e.typography.fontBold14),
            {},
            {
              color: e.colors.textNormal,
              lineHeight: 1.2,
              outline: '0',
              border: 'none',
              padding: '0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'absolute',
              top: '10px',
              left: '-30px',
              right: 'auto',
              cursor: 'pointer',
              backgroundColor: '#ffffff',
              width: '20px',
              height: '20px',
              borderRadius: '50%',
              '@media only screen and (max-width: 767px)': {
                left: 'auto',
                right: '30px',
                top: '29px',
              },
            }
          )
        );
      function Tt() {
        const e = Object(I.c)('isOpen'),
          a = Object(I.c)('drawerComponent'),
          t = Object(I.c)('data'),
          l = Object(I.b)(),
          c = Object(n.useCallback)(() => l({ type: 'CLOSE_DRAWER' }), [l]);
        if (!a) return null;
        const o = St[a];
        return r.a.createElement(
          D,
          {
            isOpen: e,
            onClose: c,
            overrides: {
              Root: {
                style: { zIndex: St[a] === St.STAFF_MEMBER_FORM ? 0 : 2 },
              },
              DrawerBody: {
                style: {
                  marginTop: '80px',
                  marginLeft: '60px',
                  marginRight: '60px',
                  marginBottom: '30px',
                  '@media only screen and (max-width: 767px)': {
                    marginTop: '80px',
                    marginLeft: '30px',
                    marginRight: '30px',
                    marginBottom: '30px',
                  },
                },
              },
              DrawerContainer: {
                style: {
                  width: '70vw',
                  backgroundColor: '#f7f7f7',
                  '@media only screen and (max-width: 767px)': {
                    width: '100%',
                  },
                },
              },
              Close: {
                component: () =>
                  r.a.createElement(
                    Gt,
                    { onClick: c },
                    r.a.createElement(X.a, { width: '6px', height: '6px' })
                  ),
              },
            },
          },
          r.a.createElement(o, { onClose: c, data: t })
        );
      }
      const It = Object(s.b)('div', () => ({
          width: '100%',
          display: 'flex',
          alignItems: 'flex-start',
        })),
        qt = Object(s.b)('div', ({ $theme: e }) => ({
          width: '100%',
          height: '100%',
          display: 'flex',
          backgroundColor: e.colors.backgroundF7,
        })),
        $t = Object(s.b)('div', () => ({
          width: '100%',
          height: 'auto',
          padding: '45px 30px',
          overflow: 'hidden',
          overflowY: 'auto',
          '@media only screen and (max-width: 767px)': { padding: '45px 15px' },
        }));
      var Dt = t(375),
        Nt = t.n(Dt);
      const Ut = Object(s.b)('div', () => ({
        '@media only screen and (max-width: 1199px)': { display: 'none' },
      }));
      a.default = ({ children: e }) => {
        let a = o(),
          t = Object(l.a)(a, 2),
          n = t[0],
          c = t[1].height,
          m = o(),
          i = Object(l.a)(m, 2),
          s = i[0],
          h = i[1].width;
        const d = (function (e) {
          const a = new Nt.a(e),
            t = a.mobile(),
            l = a.tablet();
          return { mobile: t, tablet: l, desktop: !t || !l || null };
        })().desktop;
        return r.a.createElement(
          I.a,
          null,
          r.a.createElement(Y, { refs: n }),
          r.a.createElement(
            It,
            { style: { height: 'calc(100vh - '.concat(c, 'px)') } },
            d
              ? r.a.createElement(
                  r.a.Fragment,
                  null,
                  r.a.createElement(
                    Ut,
                    null,
                    r.a.createElement(w, {
                      refs: s,
                      style: { height: 'calc(100vh - '.concat(c, 'px)') },
                    })
                  ),
                  r.a.createElement(
                    qt,
                    { style: { width: 'calc(100% - '.concat(h, 'px)') } },
                    r.a.createElement($t, null, e)
                  )
                )
              : r.a.createElement(
                  qt,
                  { style: { width: '100%' } },
                  r.a.createElement('h3', null, 'width: ', h, ' , height: ', c),
                  r.a.createElement($t, null, e)
                )
          ),
          r.a.createElement(Tt, null)
        );
      };
    },
    98: function (e, a, t) {
      'use strict';
      t.d(a, 'c', function () {
        return i;
      }),
        t.d(a, 'b', function () {
          return s;
        }),
        t.d(a, 'a', function () {
          return h;
        });
      var l = t(49),
        n = t(48),
        r = t(0),
        c = t.n(r);
      const o = (function (e, a) {
          const t = Object(r.createContext)(e),
            n = Object(r.createContext)(() => e);
          return [
            function (e) {
              return Object(r.useContext)(t)[e];
            },
            function () {
              return Object(r.useContext)(n);
            },
            function ({ children: r }) {
              const o = c.a.useReducer(a, e),
                m = Object(l.a)(o, 2),
                i = m[0],
                s = m[1];
              return c.a.createElement(
                n.Provider,
                { value: s },
                c.a.createElement(t.Provider, { value: i }, r)
              );
            },
          ];
        })({ isOpen: !1, drawerComponent: null, data: null }, function (e, a) {
          switch (a.type) {
            case 'OPEN_DRAWER':
              return Object(n.a)(
                Object(n.a)({}, e),
                {},
                { isOpen: !0, drawerComponent: a.drawerComponent, data: a.data }
              );
            case 'CLOSE_DRAWER':
              return Object(n.a)(
                Object(n.a)({}, e),
                {},
                { isOpen: !1, drawerComponent: null, data: null }
              );
            default:
              return e;
          }
        }),
        m = Object(l.a)(o, 3),
        i = m[0],
        s = m[1],
        h = m[2];
    },
    99: function (e, a, t) {
      'use strict';
      t.d(a, 'a', function () {
        return m.a;
      });
      var l = t(48),
        n = t(58),
        r = t(0),
        c = t.n(r),
        o = t(417),
        m = t(213);
      a.b = (e) => {
        let a = e.children,
          t = e.overrides,
          r = Object(n.a)(e, ['children', 'overrides']);
        return c.a.createElement(
          o.a,
          Object.assign({}, r, {
            overrides: Object(l.a)(
              {
                BaseButton: {
                  style: ({ $theme: e, $size: a, $shape: t }) =>
                    Object(l.a)(
                      Object(l.a)(
                        {},
                        (({ $theme: e, $size: a }) => {
                          switch (a) {
                            case m.c.compact:
                            case m.c.large:
                            default:
                              return {
                                paddingLeft: e.sizing.scale25,
                                paddingRight: e.sizing.scale25,
                              };
                          }
                        })({ $theme: e, $size: a })
                      ),
                      (({ $theme: e, $size: a, $shape: t }) => {
                        let l = e.buttonBorderRadius;
                        return (
                          t === m.b.pill
                            ? (l =
                                a === m.c.compact
                                  ? '30px'
                                  : a === m.c.large
                                  ? '42px'
                                  : '38px')
                            : t === m.b.round && (l = '50%'),
                          {
                            borderTopRightRadius: l,
                            borderBottomRightRadius: l,
                            borderTopLeftRadius: l,
                            borderBottomLeftRadius: l,
                          }
                        );
                      })({ $theme: e, $size: a, $shape: t })
                    ),
                },
              },
              t
            ),
          }),
          a
        );
      };
    },
  },
]);
//# sourceMappingURL=11.383f4585.chunk.js.map

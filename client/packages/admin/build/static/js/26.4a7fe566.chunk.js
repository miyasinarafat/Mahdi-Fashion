(this['webpackJsonp@pick-bazar/admin'] =
  this['webpackJsonp@pick-bazar/admin'] || []).push([
  [26],
  {
    115: function (e, t, a) {
      'use strict';
      var n = a(48),
        r = a(0),
        o = a(416),
        l = a(118);
      const c = ({ $theme: e }) => e.typography.fontBold14;
      t.a = (e) => {
        let t = Object.assign({}, e);
        return r.createElement(
          o.a,
          Object.assign(
            {
              overrides: {
                SelectArrow: () => r.createElement(l.a, null),
                Popover: {
                  props: { overrides: { Body: { style: { zIndex: 1 } } } },
                },
                Placeholder: {
                  style: ({ $theme: e }) =>
                    Object(n.a)({ color: e.colors.textDark }, c({ $theme: e })),
                },
                SingleValue: {
                  style: ({ $theme: e }) =>
                    Object(n.a)(
                      Object(n.a)({}, c({ $theme: e })),
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
                  style: ({ $theme: e, $selected: t }) =>
                    Object(n.a)(
                      Object(n.a)({}, e.typography.fontBold14),
                      {},
                      { color: t ? e.colors.textDark : e.colors.textNormal }
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
            t
          )
        );
      };
    },
    422: function (e, t, a) {
      'use strict';
      a.r(t),
        a.d(t, 'default', function () {
          return I;
        });
      var n = a(49),
        r = a(48),
        o = a(33),
        l = a(0),
        c = a.n(l),
        i = a(72),
        s = a(100),
        m = a(115),
        d = a(101),
        u = a(34),
        b = a.n(u),
        p = a(25),
        g = a(117),
        x = a(432);
      const h = Object(i.b)('div', () => ({ width: '100%', height: '450px' })),
        f = Object(i.d)(x.c, () => ({
          borderTopLeftRadius: '0 !important',
          borderTopRightRadius: '0 !important',
          borderBottomLeftRadius: '0 !important',
          borderBottomRightRadius: '0 !important',
          alignContent: 'start',
        })),
        E = Object(i.d)(x.b, () => ({
          fontFamily: "'Lato', sans-serif",
          fontWeight: 700,
          color: '#161F6A !important',
          alignItems: 'center',
          boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
          borderTopColor: 'rgba(0, 0, 0, 0.12)',
          borderRightColor: 'rgba(0, 0, 0, 0.12)',
          borderBottomColor: 'rgba(0, 0, 0, 0.12)',
          borderLeftColor: 'rgba(0, 0, 0, 0.12)',
          alignSelf: 'start',
        })),
        y = Object(i.d)(x.a, () => ({
          fontFamily: "'Lato', sans-serif",
          fontWeight: 400,
          color: '#161F6A !important',
          alignSelf: 'center',
        }));
      Object(i.d)(x.b, () => ({
        fontFamily: "'Lato', sans-serif",
        fontWeight: 700,
        color: '#161F6A !important',
        alignItems: 'center',
        boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
        borderTopColor: 'rgba(0, 0, 0, 0.12)',
        borderRightColor: 'rgba(0, 0, 0, 0.12)',
        borderBottomColor: 'rgba(0, 0, 0, 0.12)',
        borderLeftColor: 'rgba(0, 0, 0, 0.12)',
        alignSelf: 'start',
        justifyContent: 'center',
      })),
        Object(i.d)(x.a, () => ({
          fontFamily: "'Lato', sans-serif",
          fontWeight: 400,
          color: '#161F6A !important',
          alignSelf: 'center',
          justifyContent: 'center',
        }));
      var C = a(120),
        O = a(99),
        v = a(58),
        j = a(98),
        _ = a(119),
        k = a(107);
      const R = ({ icon: e, width: t = '18px', height: a = '18px' }) => {
        let n = k.b.hasOwnProperty(e) ? k.b[e] : 'span';
        return c.a.createElement(n, { width: t, height: a });
      };
      var S = (e) => {
        let t = e.itemData;
        e.itemsOffset, Object(v.a)(e, ['itemData', 'itemsOffset']);
        const a = Object(j.b)(),
          n = c.a.useCallback(() => {
            a({
              type: 'OPEN_DRAWER',
              drawerComponent: 'ORDER_STATUS_UPDATE_FORM',
              data: t,
            });
          }, [a, t]);
        return c.a.createElement(
          'div',
          null,
          c.a.createElement(
            _.a,
            null,
            c.a.createElement(
              _.b,
              { onClick: n, style: { marginRight: '10px', cursor: 'pointer' } },
              c.a.createElement(R, { icon: 'ArrowNext' })
            )
          )
        );
      };
      function w() {
        const e = Object(o.a)([
          '\n    query GetOrders(\n        $status: String,\n        $searchText: String\n        $offset: Int\n    ) {\n        orders(\n            status: $status,\n            searchText: $searchText,\n            offset: $offset,\n        ) {\n            items {\n                id\n                order_code\n                customer_id\n                contact_number\n                datetime\n                delivery_address\n                payment_method\n                payment_status\n                status\n                coupon_code\n                discount_amount\n                sub_total\n                total\n                delivery_method {\n                    name\n                    details\n                }\n                order_tracking {\n                    status\n                    ordering\n                    is_current\n                    step_competed\n                }\n            }\n            totalCount\n            hasMore\n        }\n    }\n',
        ]);
        return (
          (w = function () {
            return e;
          }),
          e
        );
      }
      const T = b()(w()),
        D = Object(i.a)(),
        $ = Object(i.b)('div', ({ $theme: e }) =>
          Object(r.a)(
            Object(r.a)({}, e.typography.fontBold14),
            {},
            {
              color: e.colors.textDark,
              display: 'flex',
              alignItems: 'center',
              lineHeight: '1',
              textTransform: 'capitalize',
              ':before': {
                content: '""',
                width: '10px',
                height: '10px',
                display: 'inline-block',
                borderTopLeftRadius: '10px',
                borderTopRightRadius: '10px',
                borderBottomRightRadius: '10px',
                borderBottomLeftRadius: '10px',
                backgroundColor: e.borders.borderE6,
                marginRight: '10px',
              },
            }
          )
        ),
        L = Object(i.d)(s.a, () => ({
          '@media only screen and (max-width: 767px)': {
            marginBottom: '20px',
            ':last-child': { marginBottom: 0 },
          },
        })),
        B = Object(i.d)(s.c, () => ({
          '@media only screen and (min-width: 768px)': { alignItems: 'center' },
        })),
        A = {
          width: '90px',
          marginRight: '10px',
          color: '#6f6f6f',
          backgroundColor: '#d8d8d8',
        },
        F = {
          width: '90px',
          marginLeft: '10px',
          color: '#6f6f6f',
          backgroundColor: '#d8d8d8',
        },
        P = [
          { value: 'Pending', label: 'Pending' },
          { value: 'Received', label: 'Received' },
          { value: 'Processing', label: 'Processing' },
          { value: 'InTransit', label: 'InTransit' },
          { value: 'Delivered', label: 'Delivered' },
          { value: 'Cancel', label: 'Cancel' },
          { value: 'Failed', label: 'Failed' },
        ];
      function I() {
        const e = D(),
          t = Object(n.a)(e, 2),
          a = t[0],
          r = t[1],
          o = a({
            ':before': { content: '""', backgroundColor: r.colors.primary },
          }),
          i = a({
            ':before': { content: '""', backgroundColor: r.colors.red400 },
          }),
          u = a({
            ':before': { content: '""', backgroundColor: r.colors.textNormal },
          }),
          b = a({
            ':before': { content: '""', backgroundColor: r.colors.blue400 },
          }),
          x = Object(l.useState)([]),
          v = Object(n.a)(x, 2),
          j = v[0],
          _ = v[1],
          k = Object(l.useState)([]),
          R = Object(n.a)(k, 2),
          w = R[0],
          I = R[1],
          W = Object(l.useState)(0),
          z = Object(n.a)(W, 2),
          N = z[0],
          M = z[1],
          H = Object(p.b)(T),
          J = H.data,
          K = H.error,
          U = H.refetch;
        if (K) return c.a.createElement('div', null, 'Error! ', K.message);
        function q(e) {
          return (!!e && 0 === e.orders.totalCount) || 0 === N;
        }
        function G(e) {
          return !e || !e.orders.hasMore;
        }
        return c.a.createElement(
          s.b,
          { fluid: !0 },
          c.a.createElement(
            B,
            null,
            c.a.createElement(
              L,
              { md: 12 },
              c.a.createElement(
                g.a,
                {
                  style: {
                    marginBottom: 30,
                    boxShadow: '0 0 8px rgba(0, 0 ,0, 0.1)',
                  },
                },
                c.a.createElement(
                  L,
                  { md: 3, xs: 12 },
                  c.a.createElement(g.b, null, 'Orders')
                ),
                c.a.createElement(
                  L,
                  { md: 9, xs: 12 },
                  c.a.createElement(
                    B,
                    null,
                    c.a.createElement(
                      L,
                      { md: 3, xs: 12 },
                      c.a.createElement(m.a, {
                        options: P,
                        labelKey: 'label',
                        valueKey: 'value',
                        placeholder: 'Status',
                        value: j,
                        searchable: !1,
                        onChange: function ({ value: e }) {
                          _(e),
                            e.length
                              ? U({ status: e[0].value })
                              : U({ status: null });
                        },
                      })
                    ),
                    c.a.createElement(
                      L,
                      { md: 6, xs: 12 },
                      c.a.createElement(d.a, {
                        value: w,
                        placeholder: 'Ex: Search By Address',
                        onChange: function (e) {
                          const t = e.currentTarget.value;
                          I(t), U({ searchText: t });
                        },
                        clearable: !0,
                      })
                    )
                  )
                )
              ),
              c.a.createElement(
                g.c,
                { style: { boxShadow: '0 0 5px rgba(0, 0 , 0, 0.05)' } },
                c.a.createElement(
                  h,
                  null,
                  c.a.createElement(
                    f,
                    {
                      $gridTemplateColumns:
                        'minmax(150px, auto) minmax(150px, auto) minmax(200px, auto) minmax(200px, auto) minmax(200px, auto) minmax(150px, auto) minmax(150px, auto) minmax(150px, auto) minmax(150px, auto) minmax(150px, auto) minmax(150px, auto) minmax(150px, auto) minmax(150px, auto) minmax(150px, auto)',
                    },
                    c.a.createElement(E, null, 'Action'),
                    c.a.createElement(E, null, 'Order Code'),
                    c.a.createElement(E, null, 'Customer ID'),
                    c.a.createElement(E, null, 'Customer Contact'),
                    c.a.createElement(E, null, 'Delivery Address'),
                    c.a.createElement(E, null, 'Delivery Method'),
                    c.a.createElement(E, null, 'Payment Method'),
                    c.a.createElement(E, null, 'Payment Status'),
                    c.a.createElement(E, null, 'SubTotal'),
                    c.a.createElement(E, null, 'Total'),
                    c.a.createElement(E, null, 'Coupon Code'),
                    c.a.createElement(E, null, 'Discount Amount'),
                    c.a.createElement(E, null, 'Status'),
                    c.a.createElement(E, null, 'DateTime'),
                    J
                      ? J.orders.items.length
                        ? J.orders.items.map((e, t) =>
                            c.a.createElement(
                              c.a.Fragment,
                              { key: t + 1 },
                              c.a.createElement(
                                y,
                                null,
                                c.a.createElement(S, {
                                  itemsOffset: N,
                                  itemData: e,
                                })
                              ),
                              c.a.createElement(y, null, e.order_code),
                              c.a.createElement(y, null, e.customer_id),
                              c.a.createElement(y, null, e.contact_number),
                              c.a.createElement(y, null, e.delivery_address),
                              c.a.createElement(
                                y,
                                null,
                                e.delivery_method
                                  ? e.delivery_method.name + ', '
                                  : '',
                                e.delivery_method
                                  ? e.delivery_method.details
                                  : ''
                              ),
                              c.a.createElement(y, null, e.payment_method),
                              c.a.createElement(y, null, e.payment_status),
                              c.a.createElement(y, null, e.sub_total),
                              c.a.createElement(y, null, e.total),
                              c.a.createElement(y, null, e.coupon_code),
                              c.a.createElement(y, null, e.discount_amount),
                              c.a.createElement(
                                y,
                                { style: { justifyContent: 'center' } },
                                c.a.createElement(
                                  $,
                                  {
                                    className:
                                      'delivered' === e.status.toLowerCase()
                                        ? o
                                        : 'pending' === e.status.toLowerCase()
                                        ? b
                                        : 'processing' ===
                                          e.status.toLowerCase()
                                        ? u
                                        : 'failed' === e.status.toLowerCase()
                                        ? i
                                        : '',
                                  },
                                  e.status
                                )
                              ),
                              c.a.createElement(y, null)
                            )
                          )
                        : c.a.createElement(C.a, {
                            hideButton: !1,
                            style: {
                              gridColumnStart: '1',
                              gridColumnEnd: 'one',
                            },
                          })
                      : null
                  )
                )
              ),
              c.a.createElement(
                B,
                null,
                c.a.createElement(L, { md: 8 }),
                c.a.createElement(
                  L,
                  {
                    md: 4,
                    style: {
                      display: 'block',
                      textAlign: 'right',
                      marginTop: '20px',
                    },
                  },
                  c.a.createElement(
                    O.b,
                    {
                      style: q(J) ? A : { marginRight: '10px' },
                      disabled: q(J),
                      onClick: function () {
                        M(N - 12), U({ offset: N - 12 });
                      },
                    },
                    'Previous'
                  ),
                  c.a.createElement(
                    O.b,
                    {
                      style: G(J) ? F : null,
                      disabled: G(J),
                      onClick: function () {
                        M(N + 12), U({ offset: N + 12 });
                      },
                    },
                    'Next'
                  )
                )
              )
            )
          )
        );
      }
    },
  },
]);
//# sourceMappingURL=26.4a7fe566.chunk.js.map

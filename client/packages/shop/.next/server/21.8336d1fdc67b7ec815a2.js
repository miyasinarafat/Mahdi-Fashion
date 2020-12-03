exports.ids = [21];
exports.modules = {
  /***/ '0THn': /***/ function (
    module,
    __webpack_exports__,
    __webpack_require__
  ) {
    'use strict';

    // EXPORTS
    __webpack_require__.d(__webpack_exports__, 'a', function () {
      return /* binding */ Counter;
    });

    // EXTERNAL MODULE: external "react"
    var external_react_ = __webpack_require__('cDcd');
    var external_react_default = /*#__PURE__*/ __webpack_require__.n(
      external_react_
    );

    // EXTERNAL MODULE: ./src/assets/icons/PlusMinus.tsx
    var PlusMinus = __webpack_require__('OeMJ');

    // EXTERNAL MODULE: external "styled-components"
    var external_styled_components_ = __webpack_require__('Dtiu');
    var external_styled_components_default = /*#__PURE__*/ __webpack_require__.n(
      external_styled_components_
    );

    // EXTERNAL MODULE: external "@styled-system/css"
    var css_ = __webpack_require__('ExBD');
    var css_default = /*#__PURE__*/ __webpack_require__.n(css_);

    // EXTERNAL MODULE: external "styled-system"
    var external_styled_system_ = __webpack_require__('4JT2');

    // CONCATENATED MODULE: ./src/components/counter/counter.style.tsx

    const CounterBox = external_styled_components_default.a.div.withConfig({
      displayName: 'counterstyle__CounterBox',
      componentId: 'sc-8iu0h2-0',
    })(
      css_default()({
        display: 'flex',
        backgroundColor: 'primary.regular',
        color: 'white',
        fontSize: 'base',
        fontWeight: 'bold',
      }),
      {
        borderRadius: 200,
        justifyContent: 'space-between',
        alignItems: 'center',
        overflow: 'hidden',
        flexShrink: 0,
        '&:focus': {
          outline: 'none',
        },
      },
      Object(external_styled_system_['variant'])({
        variants: {
          horizontal: {
            width: 104,
            height: 36,
          },
          vertical: {
            width: 30,
            height: 90,
            flexDirection: 'column-reverse',
          },
          lightHorizontal: {
            width: 104,
            height: 36,
            backgroundColor: 'gray.200',
            color: 'text.bold',
          },
          lightVertical: {
            width: 30,
            height: 90,
            flexDirection: 'column-reverse',
            backgroundColor: 'gray.200',
            color: 'text.bold',
          },
        },
      })
    );
    const CounterButton = external_styled_components_default.a.button.withConfig(
      {
        displayName: 'counterstyle__CounterButton',
        componentId: 'sc-8iu0h2-1',
      }
    )(
      {
        border: 'none',
        backgroundColor: 'transparent',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        padding: 10,
        cursor: 'pointer',
        '&:hover, &:focus': {
          outline: 'none',
        },
      },
      Object(external_styled_system_['variant'])({
        variants: {
          lightHorizontal: {
            color: 'text.regular',
          },
          lightVertical: {
            color: 'text.regular',
          },
        },
      })
    );
    const CounterValue = external_styled_components_default.a.span.withConfig({
      displayName: 'counterstyle__CounterValue',
      componentId: 'sc-8iu0h2-2',
    })({
      pointerEvents: 'none',
    });
    CounterValue.displayName = 'CounterValue';
    CounterButton.displayName = 'CounterButton';
    CounterBox.displayName = 'CounterBox';
    CounterBox.defaultProps = {
      variant: 'horizontal',
    };
    // CONCATENATED MODULE: ./src/components/counter/counter.tsx
    var __jsx = external_react_default.a.createElement;

    const Counter = ({
      onDecrement,
      onIncrement,
      value,
      variant,
      className,
    }) => {
      return __jsx(
        CounterBox,
        {
          variant: variant,
          className: className,
        },
        __jsx(
          CounterButton,
          {
            onClick: onDecrement,
            variant: variant,
          },
          __jsx(PlusMinus['a' /* Minus */], null)
        ),
        __jsx(CounterValue, null, value),
        __jsx(
          CounterButton,
          {
            onClick: onIncrement,
            variant: variant,
          },
          __jsx(PlusMinus['b' /* Plus */], null)
        )
      );
    };

    /***/
  },

  /***/ '2nMb': /***/ function (
    module,
    __webpack_exports__,
    __webpack_require__
  ) {
    'use strict';
    /* harmony export (binding) */ __webpack_require__.d(
      __webpack_exports__,
      'a',
      function () {
        return CloseIcon;
      }
    );
    /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      'cDcd'
    );
    /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
      react__WEBPACK_IMPORTED_MODULE_0__
    );
    var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

    const CloseIcon = ({
      color = 'currentColor',
      width = '18px',
      height = '18px',
    }) => {
      return __jsx(
        'svg',
        {
          xmlns: 'http://www.w3.org/2000/svg',
          viewBox: '0 0 10.003 10',
          width: width,
          height: height,
        },
        __jsx('path', {
          'data-name': '_ionicons_svg_ios-close (5)',
          d:
            'M166.686,165.55l3.573-3.573a.837.837,0,0,0-1.184-1.184l-3.573,3.573-3.573-3.573a.837.837,0,1,0-1.184,1.184l3.573,3.573-3.573,3.573a.837.837,0,0,0,1.184,1.184l3.573-3.573,3.573,3.573a.837.837,0,0,0,1.184-1.184Z',
          transform: 'translate(-160.5 -160.55)',
          fill: color,
        })
      );
    };

    /***/
  },

  /***/ AmvX: /***/ function (
    module,
    __webpack_exports__,
    __webpack_require__
  ) {
    'use strict';

    // EXTERNAL MODULE: external "react"
    var external_react_ = __webpack_require__('cDcd');
    var external_react_default = /*#__PURE__*/ __webpack_require__.n(
      external_react_
    );

    // EXTERNAL MODULE: /home/arafat/codes/pickbazar/client/node_modules/next/link.js
    var next_link = __webpack_require__('jvFD');
    var link_default = /*#__PURE__*/ __webpack_require__.n(next_link);

    // EXTERNAL MODULE: ./src/features/carts/cart.style.tsx
    var cart_style = __webpack_require__('fofi');

    // EXTERNAL MODULE: ./src/assets/icons/CloseIcon.tsx
    var CloseIcon = __webpack_require__('2nMb');

    // EXTERNAL MODULE: ./src/assets/icons/ShoppingBagLarge.tsx
    var ShoppingBagLarge = __webpack_require__('AuPN');

    // EXTERNAL MODULE: ./src/assets/icons/NoCartBag.tsx
    var NoCartBag = __webpack_require__('MXV/');

    // EXTERNAL MODULE: ./src/utils/constant.ts
    var constant = __webpack_require__('f/wd');

    // EXTERNAL MODULE: external "react-intl"
    var external_react_intl_ = __webpack_require__('k004');

    // EXTERNAL MODULE: ./src/contexts/language/language.provider.tsx + 2 modules
    var language_provider = __webpack_require__('uiyz');

    // EXTERNAL MODULE: external "react-custom-scrollbars"
    var external_react_custom_scrollbars_ = __webpack_require__('qC9r');

    // EXTERNAL MODULE: ./src/contexts/cart/use-cart.tsx + 2 modules
    var use_cart = __webpack_require__('tFEG');

    // EXTERNAL MODULE: ./src/components/counter/counter.tsx + 1 modules
    var counter = __webpack_require__('0THn');

    // EXTERNAL MODULE: ./src/utils/images-path.ts
    var images_path = __webpack_require__('W1nP');

    // EXTERNAL MODULE: external "styled-components"
    var external_styled_components_ = __webpack_require__('Dtiu');
    var external_styled_components_default = /*#__PURE__*/ __webpack_require__.n(
      external_styled_components_
    );

    // EXTERNAL MODULE: external "@styled-system/css"
    var css_ = __webpack_require__('ExBD');
    var css_default = /*#__PURE__*/ __webpack_require__.n(css_);

    // CONCATENATED MODULE: ./src/components/cart-item/cart-item.style.tsx

    const ItemBox = external_styled_components_default.a.div.withConfig({
      displayName: 'cart-itemstyle__ItemBox',
      componentId: 'sc-1mtcak2-0',
    })(
      css_default()({
        fontSize: 'base',
        fontWeight: 'bold',
        py: 15,
        px: 25,
        borderBottom: `1px solid`,
        borderBottomColor: 'gray.200',
      }),
      {
        display: 'flex',
        alignItems: 'center',
      }
    );
    const Information = external_styled_components_default.a.div.withConfig({
      displayName: 'cart-itemstyle__Information',
      componentId: 'sc-1mtcak2-1',
    })({
      display: 'flex',
      flexDirection: 'column',
      marginLeft: '15px',
    });
    const Image = external_styled_components_default.a.img.withConfig({
      displayName: 'cart-itemstyle__Image',
      componentId: 'sc-1mtcak2-2',
    })({
      width: 60,
      height: 60,
      objectFit: 'cover',
      margin: '0 15px',
    });
    const Name = external_styled_components_default.a.span.withConfig({
      displayName: 'cart-itemstyle__Name',
      componentId: 'sc-1mtcak2-3',
    })(
      css_default()({
        fontWeight: 'md',
        color: 'text.bold',
        mb: '0px',
        lineHeight: 1.5,
      })
    );
    const Price = external_styled_components_default.a.span.withConfig({
      displayName: 'cart-itemstyle__Price',
      componentId: 'sc-1mtcak2-4',
    })(
      css_default()({
        color: 'primary.regular',
        mt: '10px',
        mb: '10px',
      })
    );
    const Weight = external_styled_components_default.a.span.withConfig({
      displayName: 'cart-itemstyle__Weight',
      componentId: 'sc-1mtcak2-5',
    })(
      css_default()({
        fontSize: 'sm',
        fontWeight: 'regular',
        color: 'text.regular',
        mb: '5px',
      })
    );
    const Total = external_styled_components_default.a.span.withConfig({
      displayName: 'cart-itemstyle__Total',
      componentId: 'sc-1mtcak2-6',
    })(
      css_default()({
        color: 'text.bold',
        ml: 'auto',
      })
    );
    const RemoveButton = external_styled_components_default.a.button.withConfig(
      {
        displayName: 'cart-itemstyle__RemoveButton',
        componentId: 'sc-1mtcak2-7',
      }
    )({
      padding: '5px',
      border: 0,
      outline: 0,
      marginLeft: '15px',
      cursor: 'pointer',
      color: 'rgba(0, 0, 0, 0.25)',
      transition: 'all 0.4s ease',
      backgroundColor: 'transparent',
      '&:hover': {
        color: 'red',
      },
    });
    // CONCATENATED MODULE: ./src/components/cart-item/cart-item.tsx
    var __jsx = external_react_default.a.createElement;

    const CartItem = ({ data, onDecrement, onIncrement, onRemove }) => {
      const { name, images, price, salePrice, unit, quantity } = data;
      const displayPrice = salePrice ? salePrice : price;
      return __jsx(
        ItemBox,
        null,
        __jsx(counter['a' /* Counter */], {
          value: quantity,
          onDecrement: onDecrement,
          onIncrement: onIncrement,
          variant: 'lightVertical',
        }),
        __jsx(Image, {
          src: images_path['a' /* SHOP_IMAGE_HOST */] + images[0],
        }),
        __jsx(
          Information,
          null,
          __jsx(Name, null, name),
          __jsx(Price, null, constant['a' /* CURRENCY */], displayPrice),
          __jsx(Weight, null, quantity, ' X ', unit)
        ),
        __jsx(
          Total,
          null,
          constant['a' /* CURRENCY */],
          (quantity * displayPrice).toFixed(2)
        ),
        __jsx(
          RemoveButton,
          {
            onClick: onRemove,
          },
          __jsx(CloseIcon['a' /* CloseIcon */], null)
        )
      );
    };
    // CONCATENATED MODULE: ./src/features/carts/cart.tsx
    var cart_jsx = external_react_default.a.createElement;

    function _extends() {
      _extends =
        Object.assign ||
        function (target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];
            for (var key in source) {
              if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
              }
            }
          }
          return target;
        };
      return _extends.apply(this, arguments);
    }

    function ownKeys(object, enumerableOnly) {
      var keys = Object.keys(object);
      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly)
          symbols = symbols.filter(function (sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
          });
        keys.push.apply(keys, symbols);
      }
      return keys;
    }

    function _objectSpread(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i] != null ? arguments[i] : {};
        if (i % 2) {
          ownKeys(Object(source), true).forEach(function (key) {
            _defineProperty(target, key, source[key]);
          });
        } else if (Object.getOwnPropertyDescriptors) {
          Object.defineProperties(
            target,
            Object.getOwnPropertyDescriptors(source)
          );
        } else {
          ownKeys(Object(source)).forEach(function (key) {
            Object.defineProperty(
              target,
              key,
              Object.getOwnPropertyDescriptor(source, key)
            );
          });
        }
      }
      return target;
    }

    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value: value,
          enumerable: true,
          configurable: true,
          writable: true,
        });
      } else {
        obj[key] = value;
      }
      return obj;
    }

    const Cart = ({ style, className, onCloseBtnClick, scrollbarHeight }) => {
      const {
        items,
        coupon,
        addItem,
        removeItem,
        removeItemFromCart,
        cartItemsCount,
        calculatePrice,
        applyCoupon,
      } = Object(use_cart['b' /* useCart */])();
      const { 0: couponText, 1: setCoupon } = Object(
        external_react_['useState']
      )('');
      const { 0: displayCoupon, 1: showCoupon } = Object(
        external_react_['useState']
      )(false);
      const { 0: error, 1: setError } = Object(external_react_['useState'])('');
      const { isRtl } = Object(language_provider['b' /* useLocale */])();

      const handleChange = (e) => {
        setCoupon(e.currentTarget.value);
      };

      const toggleCoupon = () => {
        showCoupon(true);
      };

      return cart_jsx(
        cart_style['a' /* CartPopupBody */],
        {
          className: className,
          style: style,
        },
        cart_jsx(
          cart_style['i' /* PopupHeader */],
          null,
          cart_jsx(
            cart_style['j' /* PopupItemCount */],
            null,
            cart_jsx(ShoppingBagLarge['a' /* ShoppingBagLarge */], {
              width: '19px',
              height: '24px',
            }),
            cart_jsx(
              'span',
              null,
              cartItemsCount,
              '\xA0',
              cartItemsCount > 1
                ? cart_jsx(external_react_intl_['FormattedMessage'], {
                    id: 'cartItems',
                    defaultMessage: 'items',
                  })
                : cart_jsx(external_react_intl_['FormattedMessage'], {
                    id: 'cartItem',
                    defaultMessage: 'item',
                  })
            )
          ),
          cart_jsx(
            cart_style['e' /* CloseButton */],
            {
              onClick: onCloseBtnClick,
            },
            cart_jsx(CloseIcon['a' /* CloseIcon */], null)
          )
        ),
        cart_jsx(
          external_react_custom_scrollbars_['Scrollbars'],
          {
            universal: true,
            autoHide: true,
            autoHeight: true,
            autoHeightMax: scrollbarHeight,
            renderView: (props) =>
              cart_jsx(
                'div',
                _extends({}, props, {
                  style: _objectSpread(
                    _objectSpread({}, props.style),
                    {},
                    {
                      marginLeft: isRtl ? props.style.marginRight : 0,
                      marginRight: isRtl ? 0 : props.style.marginRight,
                    }
                  ),
                })
              ),
          },
          cart_jsx(
            cart_style['f' /* ItemWrapper */],
            {
              className: 'items-wrapper',
            },
            !!cartItemsCount
              ? items.map((item) => {
                  return cart_jsx(CartItem, {
                    key: `cartItem-${item.id}`,
                    onIncrement: () => addItem(item),
                    onDecrement: () => removeItem(item),
                    onRemove: () => removeItemFromCart(item),
                    data: item,
                  });
                })
              : cart_jsx(
                  external_react_default.a.Fragment,
                  null,
                  cart_jsx(
                    cart_style['g' /* NoProductImg */],
                    null,
                    cart_jsx(NoCartBag['a' /* NoCartBag */], null)
                  ),
                  cart_jsx(
                    cart_style['h' /* NoProductMsg */],
                    null,
                    cart_jsx(external_react_intl_['FormattedMessage'], {
                      id: 'noProductFound',
                      defaultMessage: 'No products found',
                    })
                  )
                )
          )
        ),
        cart_jsx(
          cart_style['d' /* CheckoutButtonWrapper */],
          null,
          cartItemsCount !== 0
            ? cart_jsx(
                link_default.a,
                {
                  href: '/checkout',
                },
                cart_jsx(
                  cart_style['c' /* CheckoutButton */],
                  {
                    onClick: onCloseBtnClick,
                  },
                  cart_jsx(
                    external_react_default.a.Fragment,
                    null,
                    cart_jsx(
                      cart_style['l' /* Title */],
                      null,
                      cart_jsx(external_react_intl_['FormattedMessage'], {
                        id: 'navlinkCheckout',
                        defaultMessage: 'Checkout',
                      })
                    ),
                    cart_jsx(
                      cart_style['k' /* PriceBox */],
                      null,
                      constant['a' /* CURRENCY */],
                      calculatePrice()
                    )
                  )
                )
              )
            : cart_jsx(
                cart_style['c' /* CheckoutButton */],
                null,
                cart_jsx(
                  external_react_default.a.Fragment,
                  null,
                  cart_jsx(
                    cart_style['l' /* Title */],
                    null,
                    cart_jsx(external_react_intl_['FormattedMessage'], {
                      id: 'navlinkCheckout',
                      defaultMessage: 'Checkout',
                    })
                  ),
                  cart_jsx(
                    cart_style['k' /* PriceBox */],
                    null,
                    constant['a' /* CURRENCY */],
                    calculatePrice()
                  )
                )
              )
        )
      );
    };

    /* harmony default export */ var cart = (__webpack_exports__['a'] = Cart);

    /***/
  },

  /***/ AuPN: /***/ function (
    module,
    __webpack_exports__,
    __webpack_require__
  ) {
    'use strict';
    /* harmony export (binding) */ __webpack_require__.d(
      __webpack_exports__,
      'a',
      function () {
        return ShoppingBagLarge;
      }
    );
    /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      'cDcd'
    );
    /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
      react__WEBPACK_IMPORTED_MODULE_0__
    );
    var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

    const ShoppingBagLarge = ({
      color = 'currentColor',
      width = '18px',
      height = '18px',
    }) => {
      return __jsx(
        'svg',
        {
          xmlns: 'http://www.w3.org/2000/svg',
          width: width,
          height: height,
          viewBox: '0 0 23.786 30',
        },
        __jsx(
          'g',
          {
            'data-name': 'shopping-bag (3)',
            transform: 'translate(-53.023)',
          },
          __jsx(
            'g',
            {
              'data-name': 'Group 2704',
            },
            __jsx(
              'g',
              {
                'data-name': 'Group 17',
                transform: 'translate(53.023 5.918)',
              },
              __jsx(
                'g',
                {
                  'data-name': 'Group 16',
                },
                __jsx('path', {
                  'data-name': 'Path 3',
                  d:
                    'M76.8,119.826l-1.34-16.881A2.109,2.109,0,0,0,73.362,101H70.716v3.921a.879.879,0,1,1-1.757,0V101H60.875v3.921a.879.879,0,1,1-1.757,0V101H56.472a2.109,2.109,0,0,0-2.094,1.937l-1.34,16.886a4.885,4.885,0,0,0,4.87,5.259H71.926a4.884,4.884,0,0,0,4.87-5.261Zm-7.92-8.6-4.544,4.544a.878.878,0,0,1-1.243,0l-2.13-2.13A.878.878,0,0,1,62.2,112.4l1.509,1.508,3.923-3.923a.879.879,0,1,1,1.242,1.243Z',
                  transform: 'translate(-53.023 -101.005)',
                  fill: color,
                })
              )
            ),
            __jsx(
              'g',
              {
                'data-name': 'Group 19',
                transform: 'translate(59.118)',
              },
              __jsx(
                'g',
                {
                  'data-name': 'Group 18',
                },
                __jsx('path', {
                  'data-name': 'Path 4',
                  d:
                    'M162.838,0a5.806,5.806,0,0,0-5.8,5.8v.119H158.8V5.8a4.042,4.042,0,1,1,8.083,0v.119h1.757V5.8A5.806,5.806,0,0,0,162.838,0Z',
                  transform: 'translate(-157.039)',
                  fill: color,
                })
              )
            )
          )
        )
      );
    };

    /***/
  },

  /***/ 'H/+S': /***/ function (
    module,
    __webpack_exports__,
    __webpack_require__
  ) {
    'use strict';

    // EXPORTS
    __webpack_require__.d(__webpack_exports__, 'a', function () {
      return /* binding */ BoxedCartButton;
    });
    __webpack_require__.d(__webpack_exports__, 'b', function () {
      return /* binding */ BoxedCartButtonV2;
    });

    // EXTERNAL MODULE: external "react"
    var external_react_ = __webpack_require__('cDcd');
    var external_react_default = /*#__PURE__*/ __webpack_require__.n(
      external_react_
    );

    // EXTERNAL MODULE: external "styled-components"
    var external_styled_components_ = __webpack_require__('Dtiu');
    var external_styled_components_default = /*#__PURE__*/ __webpack_require__.n(
      external_styled_components_
    );

    // EXTERNAL MODULE: external "@styled-system/theme-get"
    var theme_get_ = __webpack_require__('/JeY');

    // CONCATENATED MODULE: ./src/components/cart-popup/cart-popup.style.tsx

    const CartPopupButtonStyled = external_styled_components_default()(
      'button'
    ).withConfig({
      displayName: 'cart-popupstyle__CartPopupButtonStyled',
      componentId: 'sc-7s6zz5-0',
    })(
      [
        'height:60px;width:auto;display:flex;align-items:center;background-color:',
        ';padding:0;padding-left:30px;border-radius:60px;box-shadow:',
        ';border:0;outline:0;cursor:pointer;position:fixed;bottom:50px;right:50px;z-index:999;@media (max-width:767px){width:calc(100% - 60px);height:45px;padding:2px 2px 2px 30px;bottom:30px;right:30px;}@media (min-width:581px){&:not(.fixedCartPopup){display:none;}}',
      ],
      Object(theme_get_['themeGet'])('colors.primary.regular', '#009E7F'),
      Object(theme_get_['themeGet'])(
        'shadows.big',
        '0 21px 36px rgba(0, 0, 0, 0.16)'
      )
    );
    const ButtonImgBox = external_styled_components_default()(
      'span'
    ).withConfig({
      displayName: 'cart-popupstyle__ButtonImgBox',
      componentId: 'sc-7s6zz5-1',
    })(
      ['color:', ';'],
      Object(theme_get_['themeGet'])('colors.white', '#ffffff')
    );
    const ItemCount = external_styled_components_default()('span').withConfig({
      displayName: 'cart-popupstyle__ItemCount',
      componentId: 'sc-7s6zz5-2',
    })(
      [
        'font-family:',
        ';font-size:12px;font-weight:',
        ';color:',
        ';padding-left:5px;padding-right:10px;',
      ],
      Object(theme_get_['themeGet'])('fonts.body', 'sans-serif'),
      Object(theme_get_['themeGet'])('fontWeights.bold', '700'),
      Object(theme_get_['themeGet'])('colors.white', '#ffffff')
    );
    const PriceBox = external_styled_components_default()('span').withConfig({
      displayName: 'cart-popupstyle__PriceBox',
      componentId: 'sc-7s6zz5-3',
    })(
      [
        'width:56px;height:56px;overflow:hidden;border-radius:28px;display:inline-flex;align-items:center;justify-content:center;background-color:',
        ';font-family:',
        ';font-size:',
        'px;font-weight:',
        ';color:',
        ';margin-right:2px;@media (max-width:767px){width:90px;height:100%;height:41px;margin-left:auto;margin-right:0;}',
      ],
      Object(theme_get_['themeGet'])('colors.white', '#ffffff'),
      Object(theme_get_['themeGet'])('fonts.body', 'sans-serif'),
      Object(theme_get_['themeGet'])('fontSizes.xs', '12'),
      Object(theme_get_['themeGet'])('fontWeights.bold', '700'),
      Object(theme_get_['themeGet'])('colors.primary.regular', '#009E7F')
    );
    const CartPopupBoxButton = external_styled_components_default()(
      'button'
    ).withConfig({
      displayName: 'cart-popupstyle__CartPopupBoxButton',
      componentId: 'sc-7s6zz5-4',
    })(
      [
        'height:auto;width:auto;display:flex;flex-direction:column;align-items:center;justify-content:center;background-color:',
        ';padding:0;border-radius:',
        ' 0 0 ',
        ';box-shadow:',
        ';border:0;outline:0;cursor:pointer;position:fixed;right:0;top:50%;margin-top:-46px;z-index:99;@media (max-width:580px){display:none;}',
      ],
      Object(theme_get_['themeGet'])('colors.primary.regular', '#009E7F'),
      Object(theme_get_['themeGet'])('radii.base', '6px'),
      Object(theme_get_['themeGet'])('radii.base', '6px'),
      Object(theme_get_['themeGet'])(
        'shadows.big',
        '0 21px 36px rgba(0, 0, 0, 0.16)'
      )
    );
    const CartPopupBoxButtonV2 = external_styled_components_default()(
      'button'
    ).withConfig({
      displayName: 'cart-popupstyle__CartPopupBoxButtonV2',
      componentId: 'sc-7s6zz5-5',
    })(
      [
        'height:auto;width:auto;display:flex;flex-direction:column;align-items:center;justify-content:center;background-color:',
        ';padding:0;border-radius:45px;border:0;outline:0;cursor:pointer;position:relative;width:130px;z-index:99;color:#fff;font-size:18px;margin:0 15px;padding:8px 0px;@media (max-width:580px){display:none;}',
      ],
      Object(theme_get_['themeGet'])('colors.primary.regular', '#009E7F')
    );
    const TotalItems = external_styled_components_default()('span').withConfig({
      displayName: 'cart-popupstyle__TotalItems',
      componentId: 'sc-7s6zz5-6',
    })(
      [
        'font-family:',
        ';font-size:',
        'px;font-weight:',
        ';color:',
        ';padding-left:5px;padding-right:10px;display:flex;align-items:center;justify-content:center;padding:15px 10px;svg{margin-right:10px;}',
      ],
      Object(theme_get_['themeGet'])('fonts.body', 'sans-serif'),
      Object(theme_get_['themeGet'])('fontSizes.sm', '13'),
      Object(theme_get_['themeGet'])('fontWeights.bold', '700'),
      Object(theme_get_['themeGet'])('colors.white', '#ffffff')
    );
    const PriceBoxAlt = external_styled_components_default()('span').withConfig(
      {
        displayName: 'cart-popupstyle__PriceBoxAlt',
        componentId: 'sc-7s6zz5-7',
      }
    )(
      [
        'width:auto;height:35px;min-width:80px;overflow:hidden;border-radius:',
        ';display:inline-flex;align-items:center;justify-content:center;background-color:',
        ';font-family:',
        ';font-size:',
        'px;font-weight:',
        ';color:',
        ';margin:0 10px 10px;',
      ],
      Object(theme_get_['themeGet'])('radii.base', '6px'),
      Object(theme_get_['themeGet'])('colors.white', '#ffffff'),
      Object(theme_get_['themeGet'])('fonts.body', 'sans-serif'),
      Object(theme_get_['themeGet'])('fontSizes.sm', '13'),
      Object(theme_get_['themeGet'])('fontWeights.bold', '700'),
      Object(theme_get_['themeGet'])('colors.primary.regular', '#009E7F')
    );

    // EXTERNAL MODULE: ./src/assets/icons/ShoppingBag.tsx
    var ShoppingBag = __webpack_require__('MkjF');

    // CONCATENATED MODULE: ./src/components/cart-popup/cart-popup-button.tsx
    var __jsx = external_react_default.a.createElement;

    const CartPopupButton = ({
      itemCount,
      itemPostfix = 'items',
      price,
      pricePrefix = '$',
      style,
      onClick,
      className,
    }) =>
      __jsx(
        CartPopupButtonStyled,
        {
          style: style,
          onClick: onClick,
          className: className,
        },
        __jsx(
          ButtonImgBox,
          null,
          __jsx(ShoppingBag['a' /* ShoppingBag */], null)
        ),
        __jsx(ItemCount, null, itemCount, ' ', itemPostfix),
        __jsx(PriceBox, null, pricePrefix, parseFloat(`${price}`).toFixed(2))
      );

    const BoxedCartButton = ({
      itemCount,
      itemPostfix = 'items',
      price,
      pricePrefix = '$',
      style,
      onClick,
      className,
    }) =>
      __jsx(
        CartPopupBoxButton,
        {
          style: style,
          onClick: onClick,
          className: className,
        },
        __jsx(
          TotalItems,
          null,
          __jsx(ShoppingBag['a' /* ShoppingBag */], null),
          itemCount,
          ' ',
          itemPostfix
        ),
        __jsx(PriceBoxAlt, null, pricePrefix, parseFloat(`${price}`).toFixed(2))
      );
    const BoxedCartButtonV2 = ({
      itemCount,
      itemPostfix = 'items',
      price,
      pricePrefix = '$',
      style,
      onClick,
      className,
    }) =>
      __jsx(
        CartPopupBoxButtonV2,
        {
          style: style,
          onClick: onClick,
          className: className,
        },
        'Buy Now'
      );
    /* harmony default export */ var cart_popup_button = (__webpack_exports__[
      'c'
    ] = CartPopupButton);

    /***/
  },

  /***/ 'MXV/': /***/ function (
    module,
    __webpack_exports__,
    __webpack_require__
  ) {
    'use strict';
    /* harmony export (binding) */ __webpack_require__.d(
      __webpack_exports__,
      'a',
      function () {
        return NoCartBag;
      }
    );
    /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      'cDcd'
    );
    /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
      react__WEBPACK_IMPORTED_MODULE_0__
    );
    var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

    const NoCartBag = ({
      color = 'currentColor',
      width = '18px',
      height = '18px',
    }) => {
      return __jsx(
        'svg',
        {
          xmlns: 'http://www.w3.org/2000/svg',
          width: width,
          height: height,
          viewBox: '0 0 231.91 292',
        },
        __jsx(
          'defs',
          null,
          __jsx(
            'linearGradient',
            {
              id: 'linear-gradient',
              x1: '1',
              y1: '0.439',
              x2: '0.369',
              y2: '1',
              gradientUnits: 'objectBoundingBox',
            },
            __jsx('stop', {
              offset: '0',
              stopColor: '#029477',
            }),
            __jsx('stop', {
              offset: '1',
              stopColor: '#009e7f',
            })
          )
        ),
        __jsx(
          'g',
          {
            id: 'no_cart_in_bag_2',
            'data-name': 'no cart in bag 2',
            transform: 'translate(-1388 -351)',
          },
          __jsx('ellipse', {
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
          __jsx('path', {
            id: 'Path_18691',
            'data-name': 'Path 18691',
            d:
              'M29.632,0H170.368A29.828,29.828,0,0,1,200,30.021V209.979A29.828,29.828,0,0,1,170.368,240H29.632A29.828,29.828,0,0,1,0,209.979V30.021A29.828,29.828,0,0,1,29.632,0Z',
            transform: 'translate(1403 381)',
            fill: '#009e7f',
          }),
          __jsx('path', {
            id: 'Rectangle_1852',
            'data-name': 'Rectangle 1852',
            d:
              'M30,0H170a30,30,0,0,1,30,30v0a30,30,0,0,1-30,30H12.857A12.857,12.857,0,0,1,0,47.143V30A30,30,0,0,1,30,0Z',
            transform: 'translate(1403 381)',
            fill: '#006854',
          }),
          __jsx('path', {
            id: 'Rectangle_1853',
            'data-name': 'Rectangle 1853',
            d:
              'M42,0H158a42,42,0,0,1,42,42v0a18,18,0,0,1-18,18H18A18,18,0,0,1,0,42v0A42,42,0,0,1,42,0Z',
            transform: 'translate(1403 381)',
            fill: '#006854',
          }),
          __jsx('path', {
            id: 'Path_18685',
            'data-name': 'Path 18685',
            d:
              'M446.31,246.056a30,30,0,1,1,30-30A30.034,30.034,0,0,1,446.31,246.056Zm0-53.294A23.3,23.3,0,1,0,469.9,216.056,23.471,23.471,0,0,0,446.31,192.762Z',
            transform: 'translate(1056.69 164.944)',
            fill: '#006854',
          }),
          __jsx('path', {
            id: 'Path_18686',
            'data-name': 'Path 18686',
            d:
              'M446.31,375.181a30,30,0,1,1,30-30A30.034,30.034,0,0,1,446.31,375.181Zm0-53.294A23.3,23.3,0,1,0,469.9,345.181,23.471,23.471,0,0,0,446.31,321.887Z',
            transform: 'translate(1057.793 95.684)',
            fill: '#009e7f',
          }),
          __jsx('circle', {
            id: 'Ellipse_2874',
            'data-name': 'Ellipse 2874',
            cx: '28.689',
            cy: '28.689',
            r: '28.689',
            transform: 'translate(1473.823 511.046)',
            fill: '#006854',
          }),
          __jsx('circle', {
            id: 'Ellipse_2875',
            'data-name': 'Ellipse 2875',
            cx: '15.046',
            cy: '15.046',
            r: '15.046',
            transform: 'translate(1481.401 547.854) rotate(-45)',
            fill: '#009e7f',
          }),
          __jsx('path', {
            id: 'Path_18687',
            'data-name': 'Path 18687',
            d:
              'M399.71,531.27a71.755,71.755,0,0,1,12.65-13.6c3.4-2.863-1.5-7.726-4.882-4.882a78.392,78.392,0,0,0-13.73,15c-2.56,3.644,3.424,7.1,5.962,3.485Z',
            transform: 'translate(1060.579 -35.703)',
            fill: '#006854',
          }),
          __jsx('path', {
            id: 'Path_18688',
            'data-name': 'Path 18688',
            d:
              'M412.913,527.786a78.419,78.419,0,0,0-13.73-15c-3.38-2.843-8.289,2.017-4.882,4.882a71.785,71.785,0,0,1,12.65,13.6c2.535,3.609,8.525.162,5.962-3.485Z',
            transform: 'translate(1060.566 -35.704)',
            fill: '#006854',
          }),
          __jsx('path', {
            id: 'Path_18689',
            'data-name': 'Path 18689',
            d:
              'M583.278,527.786a78.417,78.417,0,0,0-13.73-15c-3.38-2.843-8.289,2.017-4.882,4.882a71.768,71.768,0,0,1,12.65,13.6c2.535,3.609,8.525.162,5.962-3.485Z',
            transform: 'translate(970.304 -35.704)',
            fill: '#006854',
          }),
          __jsx('path', {
            id: 'Path_18690',
            'data-name': 'Path 18690',
            d:
              'M570.075,531.27a71.77,71.77,0,0,1,12.65-13.6c3.4-2.863-1.5-7.726-4.882-4.882a78.407,78.407,0,0,0-13.73,15c-2.56,3.644,3.424,7.1,5.962,3.485Z',
            transform: 'translate(970.318 -35.703)',
            fill: '#006854',
          }),
          __jsx('path', {
            id: 'Path_18692',
            'data-name': 'Path 18692',
            d:
              'M301.243,287.464a19.115,19.115,0,0,1,8.071,9.077,19.637,19.637,0,0,1,1.6,7.88v26.085a19.349,19.349,0,0,1-9.672,16.957c-10.048-6.858-16.544-17.742-16.544-30S291.2,294.322,301.243,287.464Z',
            transform: 'translate(1292.301 101.536)',
            fill: 'url(#linear-gradient)',
          }),
          __jsx('path', {
            id: 'Path_18693',
            'data-name': 'Path 18693',
            d:
              'M294.371,287.464a19.115,19.115,0,0,0-8.071,9.077,19.637,19.637,0,0,0-1.6,7.88v26.085a19.349,19.349,0,0,0,9.672,16.957c10.048-6.858,16.544-17.742,16.544-30S304.419,294.322,294.371,287.464Z',
            transform: 'translate(1118.301 101.536)',
            fill: 'url(#linear-gradient)',
          })
        )
      );
    };

    /***/
  },

  /***/ MkjF: /***/ function (
    module,
    __webpack_exports__,
    __webpack_require__
  ) {
    'use strict';
    /* harmony export (binding) */ __webpack_require__.d(
      __webpack_exports__,
      'a',
      function () {
        return ShoppingBag;
      }
    );
    /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      'cDcd'
    );
    /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
      react__WEBPACK_IMPORTED_MODULE_0__
    );
    var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

    const ShoppingBag = ({
      color = 'currentColor',
      width = '18px',
      height = '18px',
    }) => {
      return __jsx(
        'span',
        null,
        __jsx(
          'svg',
          {
            xmlns: 'http://www.w3.org/2000/svg',
            width: width,
            height: height,
            viewBox: '0 0 12.686 16',
          },
          __jsx(
            'g',
            {
              'data-name': 'Group 2704',
              transform: 'translate(-27.023 -2)',
            },
            __jsx(
              'g',
              {
                'data-name': 'Group 17',
                transform: 'translate(27.023 5.156)',
              },
              __jsx(
                'g',
                {
                  'data-name': 'Group 16',
                },
                __jsx('path', {
                  'data-name': 'Path 3',
                  d:
                    'M65.7,111.043l-.714-9A1.125,1.125,0,0,0,63.871,101H62.459V103.1a.469.469,0,1,1-.937,0V101H57.211V103.1a.469.469,0,1,1-.937,0V101H54.862a1.125,1.125,0,0,0-1.117,1.033l-.715,9.006a2.605,2.605,0,0,0,2.6,2.8H63.1a2.605,2.605,0,0,0,2.6-2.806Zm-4.224-4.585-2.424,2.424a.468.468,0,0,1-.663,0l-1.136-1.136a.469.469,0,0,1,.663-.663l.8.8,2.092-2.092a.469.469,0,1,1,.663.663Z',
                  transform: 'translate(-53.023 -101.005)',
                  fill: color,
                })
              )
            ),
            __jsx(
              'g',
              {
                'data-name': 'Group 19',
                transform: 'translate(30.274 2)',
              },
              __jsx(
                'g',
                {
                  'data-name': 'Group 18',
                },
                __jsx('path', {
                  'data-name': 'Path 4',
                  d:
                    'M160.132,0a3.1,3.1,0,0,0-3.093,3.093v.063h.937V3.093a2.155,2.155,0,1,1,4.311,0v.063h.937V3.093A3.1,3.1,0,0,0,160.132,0Z',
                  transform: 'translate(-157.039)',
                  fill: color,
                })
              )
            )
          )
        )
      );
    };

    /***/
  },

  /***/ OeMJ: /***/ function (
    module,
    __webpack_exports__,
    __webpack_require__
  ) {
    'use strict';
    /* harmony export (binding) */ __webpack_require__.d(
      __webpack_exports__,
      'b',
      function () {
        return Plus;
      }
    );
    /* harmony export (binding) */ __webpack_require__.d(
      __webpack_exports__,
      'a',
      function () {
        return Minus;
      }
    );
    /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      'cDcd'
    );
    /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
      react__WEBPACK_IMPORTED_MODULE_0__
    );
    var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
    // SVG plus icon

    const Plus = ({
      color = 'currentColor',
      width = '18px',
      height = '18px',
    }) => {
      return __jsx(
        'svg',
        {
          xmlns: 'http://www.w3.org/2000/svg',
          width: width,
          height: height,
          viewBox: '0 0 12 12',
        },
        __jsx(
          'g',
          {
            id: 'Group_3351',
            'data-name': 'Group 3351',
            transform: 'translate(-1367 -190)',
          },
          __jsx('rect', {
            'data-name': 'Rectangle 520',
            width: '12',
            height: '2',
            rx: '1',
            transform: 'translate(1367 195)',
            fill: color,
          }),
          __jsx('rect', {
            'data-name': 'Rectangle 521',
            width: '12',
            height: '2',
            rx: '1',
            transform: 'translate(1374 190) rotate(90)',
            fill: color,
          })
        )
      );
    }; // SVG minus icon

    const Minus = ({
      color = 'currentColor',
      width = '12px',
      height = '2px',
    }) => {
      return __jsx(
        'svg',
        {
          xmlns: 'http://www.w3.org/2000/svg',
          width: width,
          height: height,
          viewBox: '0 0 12 2',
        },
        __jsx('rect', {
          'data-name': 'Rectangle 522',
          width: '12',
          height: '2',
          rx: '1',
          fill: color,
        })
      );
    };

    /***/
  },

  /***/ 'f/wd': /***/ function (
    module,
    __webpack_exports__,
    __webpack_require__
  ) {
    'use strict';
    /* harmony export (binding) */ __webpack_require__.d(
      __webpack_exports__,
      'a',
      function () {
        return CURRENCY;
      }
    );
    /************ CONSTANTS ***********/
    const CURRENCY = '$';

    /***/
  },

  /***/ fofi: /***/ function (
    module,
    __webpack_exports__,
    __webpack_require__
  ) {
    'use strict';
    /* harmony export (binding) */ __webpack_require__.d(
      __webpack_exports__,
      'g',
      function () {
        return NoProductImg;
      }
    );
    /* harmony export (binding) */ __webpack_require__.d(
      __webpack_exports__,
      'b',
      function () {
        return CartSlidePopup;
      }
    );
    /* harmony export (binding) */ __webpack_require__.d(
      __webpack_exports__,
      'a',
      function () {
        return CartPopupBody;
      }
    );
    /* harmony export (binding) */ __webpack_require__.d(
      __webpack_exports__,
      'i',
      function () {
        return PopupHeader;
      }
    );
    /* harmony export (binding) */ __webpack_require__.d(
      __webpack_exports__,
      'j',
      function () {
        return PopupItemCount;
      }
    );
    /* unused harmony export PromoCode */
    /* harmony export (binding) */ __webpack_require__.d(
      __webpack_exports__,
      'e',
      function () {
        return CloseButton;
      }
    );
    /* unused harmony export ItemCards */
    /* unused harmony export ItemImgWrapper */
    /* unused harmony export ItemDetails */
    /* unused harmony export ItemTitle */
    /* unused harmony export ItemPrice */
    /* unused harmony export ItemWeight */
    /* unused harmony export TotalPrice */
    /* unused harmony export DeleteButton */
    /* harmony export (binding) */ __webpack_require__.d(
      __webpack_exports__,
      'c',
      function () {
        return CheckoutButton;
      }
    );
    /* harmony export (binding) */ __webpack_require__.d(
      __webpack_exports__,
      'd',
      function () {
        return CheckoutButtonWrapper;
      }
    );
    /* harmony export (binding) */ __webpack_require__.d(
      __webpack_exports__,
      'l',
      function () {
        return Title;
      }
    );
    /* harmony export (binding) */ __webpack_require__.d(
      __webpack_exports__,
      'k',
      function () {
        return PriceBox;
      }
    );
    /* harmony export (binding) */ __webpack_require__.d(
      __webpack_exports__,
      'h',
      function () {
        return NoProductMsg;
      }
    );
    /* harmony export (binding) */ __webpack_require__.d(
      __webpack_exports__,
      'f',
      function () {
        return ItemWrapper;
      }
    );
    /* unused harmony export CouponBoxWrapper */
    /* unused harmony export CouponCode */
    /* unused harmony export ErrorMsg */
    /* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      'Dtiu'
    );
    /* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
      styled_components__WEBPACK_IMPORTED_MODULE_0__
    );
    /* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      '/JeY'
    );
    /* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
      _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__
    );

    const CartPopupBody = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig(
      {
        displayName: 'cartstyle__CartPopupBody',
        componentId: 'sc-1cp3kia-0',
      }
    )(
      [
        'height:auto;width:385px;display:flex;flex-direction:column;border-radius:',
        ';background-color:',
        ';box-sizing:content-box;@media (max-width:767px){width:100%;}',
      ],
      Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__['themeGet'])(
        'radii.base',
        '6px'
      ),
      Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__['themeGet'])(
        'colors.white',
        '#ffffff'
      )
    );
    const PopupHeader = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig(
      {
        displayName: 'cartstyle__PopupHeader',
        componentId: 'sc-1cp3kia-1',
      }
    )(
      [
        'padding:15px 25px;background-color:',
        ';display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid ',
        ';@media (max-width:766px){justify-content:center;}',
      ],
      Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__['themeGet'])(
        'colors.white',
        '#ffffff'
      ),
      Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__['themeGet'])(
        'colors.gray.500',
        '#f1f1f1'
      )
    );
    const PopupItemCount = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig(
      {
        displayName: 'cartstyle__PopupItemCount',
        componentId: 'sc-1cp3kia-2',
      }
    )(
      [
        'display:inline-flex;align-items:center;color:',
        ';span{font-family:',
        ';font-size:',
        'px;font-weight:',
        ';color:',
        ';padding-left:10px;@media (max-width:767px){font-size:',
        'px;}}',
      ],
      Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__['themeGet'])(
        'colors.primary.regular',
        '#009e7f'
      ),
      Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__['themeGet'])(
        'fonts.body',
        'Lato'
      ),
      Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__['themeGet'])(
        'fontSizes.base',
        '15'
      ),
      Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__['themeGet'])(
        'fontWeights.bold',
        '700'
      ),
      Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__['themeGet'])(
        'colors.primary.regular',
        '#009e7f'
      ),
      Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__['themeGet'])(
        'fontSizes.sm',
        '13'
      )
    );
    const CloseButton = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.button.withConfig(
      {
        displayName: 'cartstyle__CloseButton',
        componentId: 'sc-1cp3kia-3',
      }
    )(
      [
        'width:14px;height:14px;display:inline-flex;align-items:center;justify-content:center;padding:0;border:0;outline:0;flex-shrink:0;cursor:pointer;color:rgba(0,0,0,0.25);transition:all 0.4s ease;background-color:transparent;&:hover{color:',
        ';}@media (max-width:767px){position:absolute;top:-45px;background-color:',
        ';width:35px;height:35px;border-radius:50%;color:rgba(0,0,0,0.5);}&.fixedCartClose{@media (min-width:991px){display:none;}}',
      ],
      Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__['themeGet'])(
        'colors.red',
        '#ea4d4a'
      ),
      Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__['themeGet'])(
        'colors.white',
        '#ffffff'
      )
    );
    const ItemWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig(
      {
        displayName: 'cartstyle__ItemWrapper',
        componentId: 'sc-1cp3kia-4',
      }
    )(['width:100%;height:auto;']);
    const ItemCards = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig(
      {
        displayName: 'cartstyle__ItemCards',
        componentId: 'sc-1cp3kia-5',
      }
    )(
      [
        'width:100%;padding:15px 25px;display:inline-flex;align-items:center;background-color:',
        ';margin-bottom:1px;box-sizing:border-box;',
      ],
      Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__['themeGet'])(
        'colors.white',
        '#ffffff'
      )
    );
    const ItemImgWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig(
      {
        displayName: 'cartstyle__ItemImgWrapper',
        componentId: 'sc-1cp3kia-6',
      }
    )([
      'width:60px;height:60px;display:inline-flex;align-items:center;justify-content:center;overflow:hidden;margin-right:15px;flex-shrink:0;img{width:100%;height:100%;object-fit:cover;}',
    ]);
    const ItemDetails = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig(
      {
        displayName: 'cartstyle__ItemDetails',
        componentId: 'sc-1cp3kia-7',
      }
    )(['display:inline-flex;flex-direction:column;width:100%;']);
    const ItemTitle = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.span.withConfig(
      {
        displayName: 'cartstyle__ItemTitle',
        componentId: 'sc-1cp3kia-8',
      }
    )(
      [
        'font-family:',
        ';font-size:',
        'px;font-weight:',
        ';color:',
        ';margin-bottom:10px;',
      ],
      Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__['themeGet'])(
        'fonts.body',
        'Lato'
      ),
      Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__['themeGet'])(
        'fontSizes.base',
        '15'
      ),
      Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__['themeGet'])(
        'fontWeights.regular',
        '400'
      ),
      Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__['themeGet'])(
        'colors.text.bold',
        '#0D1136'
      )
    );
    const ItemPrice = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.span.withConfig(
      {
        displayName: 'cartstyle__ItemPrice',
        componentId: 'sc-1cp3kia-9',
      }
    )(
      [
        'font-family:',
        ';font-size:',
        'px;font-weight:',
        ';color:',
        ';margin-bottom:10px;',
      ],
      Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__['themeGet'])(
        'fonts.body',
        'Lato'
      ),
      Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__['themeGet'])(
        'fontSizes.base',
        '15'
      ),
      Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__['themeGet'])(
        'fontWeights.bold',
        '700'
      ),
      Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__['themeGet'])(
        'colors.primary.regular',
        '#009e7f'
      )
    );
    const ItemWeight = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.span.withConfig(
      {
        displayName: 'cartstyle__ItemWeight',
        componentId: 'sc-1cp3kia-10',
      }
    )(
      ['font-family:', ';font-size:', 'px;font-weight:', ';color:', ';'],
      Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__['themeGet'])(
        'fonts.body',
        'Lato'
      ),
      Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__['themeGet'])(
        'fontSizes.sm',
        '13'
      ),
      Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__['themeGet'])(
        'fontWeights.regular',
        '400'
      ),
      Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__['themeGet'])(
        'colors.text.regular',
        '#77798c'
      )
    );
    const TotalPrice = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.span.withConfig(
      {
        displayName: 'cartstyle__TotalPrice',
        componentId: 'sc-1cp3kia-11',
      }
    )(
      [
        'font-family:',
        ';font-size:',
        'px;font-weight:',
        ';color:',
        ';flex-shrink:0;margin-left:auto;',
      ],
      Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__['themeGet'])(
        'fonts.body',
        'Lato'
      ),
      Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__['themeGet'])(
        'fontSizes.base',
        '15'
      ),
      Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__['themeGet'])(
        'fontWeights.bold',
        '700'
      ),
      Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__['themeGet'])(
        'colors.text.bold',
        '#0D1136'
      )
    );
    const DeleteButton = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.button.withConfig(
      {
        displayName: 'cartstyle__DeleteButton',
        componentId: 'sc-1cp3kia-12',
      }
    )([
      'width:10px;height:10px;display:inline-flex;align-items:center;justify-content:center;padding:0;border:0;outline:0;margin-left:15px;flex-shrink:0;cursor:pointer;color:rgba(0,0,0,0.25);transition:all 0.4s ease;background-color:transparent;&:hover{color:#ea4d4a;}',
    ]);
    const PromoCode = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.span.withConfig(
      {
        displayName: 'cartstyle__PromoCode',
        componentId: 'sc-1cp3kia-13',
      }
    )(
      [
        'margin:20px 0;display:flex;justify-content:center;> button{border:0;outline:0;box-shadow:none;background-color:transparent;display:inline-flex;cursor:pointer;font-family:',
        ';font-size:',
        'px;font-weight:',
        ';color:',
        ';transition:color 0.35s ease;&:hover{color:',
        ';}}',
      ],
      Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__['themeGet'])(
        'fonts.body',
        'Lato'
      ),
      Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__['themeGet'])(
        'fontSizes.base',
        '15'
      ),
      Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__['themeGet'])(
        'fontWeights.bold',
        '700'
      ),
      Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__['themeGet'])(
        'colors.primary.regular',
        '#009e7f'
      ),
      Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__['themeGet'])(
        'colors.primary.hover',
        '#019376'
      )
    );
    const CheckoutButton = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.button.withConfig(
      {
        displayName: 'cartstyle__CheckoutButton',
        componentId: 'sc-1cp3kia-14',
      }
    )(
      [
        'height:48px;width:calc(100% - 30px);display:flex;align-items:center;justify-content:space-between;background-color:',
        ';padding:0;border-radius:48px;box-shadow:',
        ';border:0;outline:0;cursor:pointer;margin-bottom:15px;margin-left:15px;@media (max-width:767px){height:45px;}> a{width:100%;display:flex;align-items:center;justify-content:space-between;padding-left:30px;}',
      ],
      Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__['themeGet'])(
        'colors.primary.regular',
        '#009e7f'
      ),
      Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__['themeGet'])(
        'shadows.base',
        '0 3px 6px rgba(0, 0, 0, 0.16)'
      )
    );
    const CheckoutButtonWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig(
      {
        displayName: 'cartstyle__CheckoutButtonWrapper',
        componentId: 'sc-1cp3kia-15',
      }
    )(['width:100%;display:flex;flex-direction:column;margin-top:auto;']);
    const Title = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.a.withConfig(
      {
        displayName: 'cartstyle__Title',
        componentId: 'sc-1cp3kia-16',
      }
    )(
      [
        'font-family:',
        ';font-size:',
        'px;font-weight:',
        ';color:',
        ';padding-left:5px;padding-right:10px;',
      ],
      Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__['themeGet'])(
        'fonts.body',
        'Lato'
      ),
      Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__['themeGet'])(
        'fontSizes.base',
        '15'
      ),
      Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__['themeGet'])(
        'fontWeights.bold',
        '700'
      ),
      Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__['themeGet'])(
        'colors.white',
        '#ffffff'
      )
    );
    const PriceBox = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.span.withConfig(
      {
        displayName: 'cartstyle__PriceBox',
        componentId: 'sc-1cp3kia-17',
      }
    )(
      [
        'width:auto;height:44px;padding:0 30px;overflow:hidden;border-radius:28px;display:inline-flex;align-items:center;justify-content:center;background-color:',
        ';font-family:',
        ';font-size:',
        'px;font-weight:',
        ';color:',
        ';margin-right:2px;@media (max-width:767px){height:41px;}',
      ],
      Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__['themeGet'])(
        'colors.white',
        '#ffffff'
      ),
      Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__['themeGet'])(
        'fonts.body',
        'Lato'
      ),
      Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__['themeGet'])(
        'fontSizes.base',
        '15'
      ),
      Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__['themeGet'])(
        'fontWeights.bold',
        '700'
      ),
      Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__['themeGet'])(
        'colors.primary.regular',
        '#009e7f'
      )
    );
    const NoProductMsg = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.span.withConfig(
      {
        displayName: 'cartstyle__NoProductMsg',
        componentId: 'sc-1cp3kia-18',
      }
    )(
      [
        'font-family:',
        ';font-size:',
        'px;font-weight:',
        ';color:',
        ';display:block;width:100%;padding:40px 0;text-align:center;',
      ],
      Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__['themeGet'])(
        'fonts.body',
        'Lato'
      ),
      Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__['themeGet'])(
        'fontSizes.base',
        '15'
      ),
      Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__['themeGet'])(
        'fontWeights.bold',
        '700'
      ),
      Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__['themeGet'])(
        'colors.text.regular',
        '#77798c'
      )
    );
    const NoProductImg = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig(
      {
        displayName: 'cartstyle__NoProductImg',
        componentId: 'sc-1cp3kia-19',
      }
    )([
      'display:flex;align-items:center;justify-content:center;margin-bottom:20px;margin-top:50px;@media (max-width:580px){margin-top:20px;}svg{width:140px;height:auto;@media (max-width:580px){width:110px;}}',
    ]);
    const CouponBoxWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig(
      {
        displayName: 'cartstyle__CouponBoxWrapper',
        componentId: 'sc-1cp3kia-20',
      }
    )(['width:100%;padding:0 15px;flex-direction:column;padding-right:22px;']);
    const CouponCode = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.p.withConfig(
      {
        displayName: 'cartstyle__CouponCode',
        componentId: 'sc-1cp3kia-21',
      }
    )(
      [
        'font-family:',
        ';font-size:',
        'px;font-weight:',
        ';color:',
        ';width:100%;display:flex;justify-content:center;span{font-weight:',
        ';color:',
        ';margin-left:5px;}',
      ],
      Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__['themeGet'])(
        'fonts.body',
        'Lato'
      ),
      Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__['themeGet'])(
        'fontSizes.base',
        '15'
      ),
      Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__['themeGet'])(
        'fontWeights.medium',
        '500'
      ),
      Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__['themeGet'])(
        'colors.text.regular',
        '#77798c'
      ),
      Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__['themeGet'])(
        'fontWeights.bold',
        '700'
      ),
      Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__['themeGet'])(
        'colors.primary.regular',
        '#009e7f'
      )
    );
    const ErrorMsg = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.span.withConfig(
      {
        displayName: 'cartstyle__ErrorMsg',
        componentId: 'sc-1cp3kia-22',
      }
    )(
      [
        'font-family:',
        ';font-size:calc(',
        'px - 1px);font-weight:',
        ';color:',
        ';padding-top:10px;display:flex;justify-content:center;',
      ],
      Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__['themeGet'])(
        'fonts.body',
        'Lato'
      ),
      Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__['themeGet'])(
        'fontSizes.base',
        '15'
      ),
      Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__['themeGet'])(
        'fontWeights.regular',
        '400'
      ),
      Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__['themeGet'])(
        'colors.secondary.hover',
        '#FF282F'
      )
    );
    const CartSlidePopup = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig(
      {
        displayName: 'cartstyle__CartSlidePopup',
        componentId: 'sc-1cp3kia-23',
      }
    )(
      [
        'width:420px;height:100vh;background-color:',
        ';position:fixed;bottom:0;right:-450px;z-index:1010;box-shadow:',
        ';transition:all 0.35s ease-in-out;@media (max-width:580px){width:100%;display:none;}@media (min-width:581px){display:block;}&.cartPopupFixed{right:0;}',
        '{height:100%;width:100%;}',
        '{max-height:calc(100vh - 245px);background-color:',
        ';}',
        '{border-bottom:1px solid ',
        ';margin-bottom:0;}@media (max-width:767px){',
        '{justify-content:space-between;}',
        '{top:auto;position:relative;background-color:transparent;}}',
      ],
      Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__['themeGet'])(
        'colors.white',
        '#ffffff'
      ),
      Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__['themeGet'])(
        'shadows.big',
        '0 21px 36px rgba(0, 0, 0, 0.16)'
      ),
      CartPopupBody,
      ItemWrapper,
      Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__['themeGet'])(
        'colors.white',
        '#ffffff'
      ),
      ItemCards,
      Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__['themeGet'])(
        'colors.gray.200',
        '#f7f7f7'
      ),
      PopupHeader,
      CloseButton
    );

    /***/
  },

  /***/ gZAk: /***/ function (
    module,
    __webpack_exports__,
    __webpack_require__
  ) {
    'use strict';
    __webpack_require__.r(__webpack_exports__);
    /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      'cDcd'
    );
    /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
      react__WEBPACK_IMPORTED_MODULE_0__
    );
    /* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      'Dtiu'
    );
    /* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
      styled_components__WEBPACK_IMPORTED_MODULE_1__
    );
    /* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      '/JeY'
    );
    /* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
      _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__
    );
    /* harmony import */ var _redq_reuse_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      'qbum'
    );
    /* harmony import */ var _redq_reuse_modal__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(
      _redq_reuse_modal__WEBPACK_IMPORTED_MODULE_3__
    );
    /* harmony import */ var _cart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      'AmvX'
    );
    /* harmony import */ var components_cart_popup_cart_popup_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      'H/+S'
    );
    /* harmony import */ var utils_constant__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      'f/wd'
    );
    /* harmony import */ var _cart_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      'fofi'
    );
    /* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      'k004'
    );
    /* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/ __webpack_require__.n(
      react_intl__WEBPACK_IMPORTED_MODULE_8__
    );
    /* harmony import */ var contexts_cart_use_cart__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      'tFEG'
    );
    var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

    const CartPopupStyle = styled_components__WEBPACK_IMPORTED_MODULE_1__[
      'createGlobalStyle'
    ]`
  .cartPopup{
    top: auto !important;
    left: auto !important;
    bottom: 50px !important;
    right: 50px !important;
    box-shadow: ${Object(
      _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__['themeGet']
    )('shadows.big', '0 21px 36px rgba(0, 0, 0, 0.16)')};
    transform-origin: bottom right;

    @media (max-width: 580px) {
      max-width: none!important;
      width: 100% !important;
      bottom: 0 !important;
      left: 0!important;
      background: ${Object(
        _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__['themeGet']
      )('colors.white', '#ffffff')};
      overflow: initial !important;
      transform-origin: bottom center;
    }
  }
`;

    const CartPopUp = ({ deviceType: { mobile, tablet, desktop } }) => {
      const { isOpen, cartItemsCount, toggleCart, calculatePrice } = Object(
        contexts_cart_use_cart__WEBPACK_IMPORTED_MODULE_9__[/* useCart */ 'b']
      )();

      const handleModal = () => {
        Object(_redq_reuse_modal__WEBPACK_IMPORTED_MODULE_3__['openModal'])({
          show: true,
          config: {
            className: 'cartPopup',
            width: 'auto',
            height: 'auto',
            enableResizing: false,
            disableDragging: true,
            transition: {
              tension: 360,
              friction: 40,
            },
          },
          closeOnClickOutside: true,
          component: _cart__WEBPACK_IMPORTED_MODULE_4__[/* default */ 'a'],
          closeComponent: () => __jsx('div', null),
          componentProps: {
            onCloseBtnClick:
              _redq_reuse_modal__WEBPACK_IMPORTED_MODULE_3__['closeModal'],
            scrollbarHeight: 330,
          },
        });
      };

      let cartSliderClass = isOpen === true ? 'cartPopupFixed' : '';
      return __jsx(
        react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,
        null,
        mobile
          ? __jsx(
              react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,
              null,
              __jsx(CartPopupStyle, null),
              __jsx(
                components_cart_popup_cart_popup_button__WEBPACK_IMPORTED_MODULE_5__[
                  /* default */ 'c'
                ],
                {
                  className: 'product-cart',
                  itemCount: cartItemsCount,
                  itemPostfix:
                    cartItemsCount > 1
                      ? __jsx(
                          react_intl__WEBPACK_IMPORTED_MODULE_8__[
                            'FormattedMessage'
                          ],
                          {
                            id: 'cartItems',
                            defaultMessage: 'items',
                          }
                        )
                      : __jsx(
                          react_intl__WEBPACK_IMPORTED_MODULE_8__[
                            'FormattedMessage'
                          ],
                          {
                            id: 'cartItem',
                            defaultMessage: 'item',
                          }
                        ),
                  price: calculatePrice(),
                  pricePrefix: '$',
                  onClick: handleModal,
                }
              )
            )
          : __jsx(
              react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,
              null,
              __jsx(
                _cart_style__WEBPACK_IMPORTED_MODULE_7__[
                  /* CartSlidePopup */ 'b'
                ],
                {
                  className: cartSliderClass,
                },
                isOpen &&
                  __jsx(_cart__WEBPACK_IMPORTED_MODULE_4__[/* default */ 'a'], {
                    onCloseBtnClick: toggleCart,
                    scrollbarHeight: '100vh',
                  })
              ),
              __jsx(
                components_cart_popup_cart_popup_button__WEBPACK_IMPORTED_MODULE_5__[
                  /* BoxedCartButton */ 'a'
                ],
                {
                  className: 'product-cart',
                  itemCount: cartItemsCount,
                  itemPostfix:
                    cartItemsCount > 1
                      ? __jsx(
                          react_intl__WEBPACK_IMPORTED_MODULE_8__[
                            'FormattedMessage'
                          ],
                          {
                            id: 'cartItems',
                            defaultMessage: 'items',
                          }
                        )
                      : __jsx(
                          react_intl__WEBPACK_IMPORTED_MODULE_8__[
                            'FormattedMessage'
                          ],
                          {
                            id: 'cartItem',
                            defaultMessage: 'item',
                          }
                        ),
                  price: calculatePrice(),
                  pricePrefix:
                    utils_constant__WEBPACK_IMPORTED_MODULE_6__[
                      /* CURRENCY */ 'a'
                    ],
                  onClick: toggleCart,
                }
              )
            )
      );
    };

    /* harmony default export */ __webpack_exports__['default'] = CartPopUp;

    /***/
  },

  /***/ tFEG: /***/ function (
    module,
    __webpack_exports__,
    __webpack_require__
  ) {
    'use strict';

    // EXPORTS
    __webpack_require__.d(__webpack_exports__, 'a', function () {
      return /* binding */ CartProvider;
    });
    __webpack_require__.d(__webpack_exports__, 'b', function () {
      return /* binding */ useCart;
    });

    // EXTERNAL MODULE: external "react"
    var external_react_ = __webpack_require__('cDcd');
    var external_react_default = /*#__PURE__*/ __webpack_require__.n(
      external_react_
    );

    // CONCATENATED MODULE: ./src/contexts/cart/cart.reducer.tsx
    function ownKeys(object, enumerableOnly) {
      var keys = Object.keys(object);
      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly)
          symbols = symbols.filter(function (sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
          });
        keys.push.apply(keys, symbols);
      }
      return keys;
    }

    function _objectSpread(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i] != null ? arguments[i] : {};
        if (i % 2) {
          ownKeys(Object(source), true).forEach(function (key) {
            _defineProperty(target, key, source[key]);
          });
        } else if (Object.getOwnPropertyDescriptors) {
          Object.defineProperties(
            target,
            Object.getOwnPropertyDescriptors(source)
          );
        } else {
          ownKeys(Object(source)).forEach(function (key) {
            Object.defineProperty(
              target,
              key,
              Object.getOwnPropertyDescriptor(source, key)
            );
          });
        }
      }
      return target;
    }

    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value: value,
          enumerable: true,
          configurable: true,
          writable: true,
        });
      } else {
        obj[key] = value;
      }
      return obj;
    }

    // export const cartItemsTotalPrice = (items, { discountInPercent = 0 } = {}) => {
    function getDiscountAmount(totalPrice, coupon) {
      let discount = (totalPrice * Number(coupon.percentage)) / 100;
      discount =
        discount >=
        (coupon === null || coupon === void 0
          ? void 0
          : coupon.maximum_discount_amount)
          ? coupon === null || coupon === void 0
            ? void 0
            : coupon.maximum_discount_amount
          : discount;
      return discount;
    }

    function getTotalItemPrice(items) {
      return items.reduce((total, item) => {
        if (item.salePrice) {
          return total + item.salePrice * item.quantity;
        }

        return total + item.price * item.quantity;
      }, 0);
    }

    const cartItemsTotalPrice = (items, coupon = null) => {
      if (items === null || items.length === 0) return 0;
      const itemCost = getTotalItemPrice(items);
      let discount = coupon ? getDiscountAmount(itemCost, coupon) : 0;
      return itemCost - discount;
    };
    const cartDiscountAmount = (items, coupon = null) => {
      if (items === null || items.length === 0) return 0;
      const itemCost = getTotalItemPrice(items);
      return coupon ? getDiscountAmount(itemCost, coupon) : 0;
    }; // cartItems, cartItemToAdd

    const addItemToCart = (state, action) => {
      const existingCartItemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      if (existingCartItemIndex > -1) {
        const newState = [...state.items];
        newState[existingCartItemIndex].quantity += action.payload.quantity;
        return newState;
      }

      return [...state.items, action.payload];
    }; // cartItems, cartItemToRemove

    const removeItemFromCart = (state, action) => {
      return state.items.reduce((acc, item) => {
        if (item.id === action.payload.id) {
          const newQuantity = item.quantity - action.payload.quantity;
          return newQuantity > 0
            ? [
                ...acc,
                _objectSpread(
                  _objectSpread({}, item),
                  {},
                  {
                    quantity: newQuantity,
                  }
                ),
              ]
            : [...acc];
        }

        return [...acc, item];
      }, []);
    };

    const clearItemFromCart = (state, action) => {
      return state.items.filter((item) => item.id !== action.payload.id);
    };

    const reducer = (state, action) => {
      switch (action.type) {
        case 'REHYDRATE':
          return _objectSpread(_objectSpread({}, state), action.payload);

        case 'TOGGLE_CART':
          return _objectSpread(
            _objectSpread({}, state),
            {},
            {
              isOpen: !state.isOpen,
            }
          );

        case 'ADD_ITEM':
          return _objectSpread(
            _objectSpread({}, state),
            {},
            {
              items: addItemToCart(state, action),
            }
          );

        case 'REMOVE_ITEM':
          return _objectSpread(
            _objectSpread({}, state),
            {},
            {
              items: removeItemFromCart(state, action),
            }
          );

        case 'CLEAR_ITEM_FROM_CART':
          return _objectSpread(
            _objectSpread({}, state),
            {},
            {
              items: clearItemFromCart(state, action),
            }
          );

        case 'CLEAR_CART':
          return _objectSpread(
            _objectSpread({}, state),
            {},
            {
              items: [],
            }
          );

        case 'APPLY_COUPON':
          return _objectSpread(
            _objectSpread({}, state),
            {},
            {
              coupon: action.payload,
            }
          );

        case 'REMOVE_COUPON':
          return _objectSpread(
            _objectSpread({}, state),
            {},
            {
              coupon: null,
            }
          );

        case 'TOGGLE_RESTAURANT':
          return _objectSpread(
            _objectSpread({}, state),
            {},
            {
              isRestaurant: !state.isRestaurant,
            }
          );

        default:
          throw new Error(`Unknown action: ${action.type}`);
      }
    };
    // EXTERNAL MODULE: external "localforage"
    var external_localforage_ = __webpack_require__('wiMN');
    var external_localforage_default = /*#__PURE__*/ __webpack_require__.n(
      external_localforage_
    );

    // CONCATENATED MODULE: ./src/utils/use-storage.ts
    function use_storage_ownKeys(object, enumerableOnly) {
      var keys = Object.keys(object);
      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly)
          symbols = symbols.filter(function (sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
          });
        keys.push.apply(keys, symbols);
      }
      return keys;
    }

    function use_storage_objectSpread(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i] != null ? arguments[i] : {};
        if (i % 2) {
          use_storage_ownKeys(Object(source), true).forEach(function (key) {
            use_storage_defineProperty(target, key, source[key]);
          });
        } else if (Object.getOwnPropertyDescriptors) {
          Object.defineProperties(
            target,
            Object.getOwnPropertyDescriptors(source)
          );
        } else {
          use_storage_ownKeys(Object(source)).forEach(function (key) {
            Object.defineProperty(
              target,
              key,
              Object.getOwnPropertyDescriptor(source, key)
            );
          });
        }
      }
      return target;
    }

    function use_storage_defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value: value,
          enumerable: true,
          configurable: true,
          writable: true,
        });
      } else {
        obj[key] = value;
      }
      return obj;
    }

    const isObjectLiked = (value) =>
      value.constructor.name === 'Array' || value.constructor.name === 'Object';

    const rehydrate = (value, defaultValue) => {
      if (!value) return defaultValue; // if (value === 'false') str = false;
      // if (value === 'true') str = true;
      // if (!isObjectLiked(value)) {
      //   return value;
      // }

      try {
        const parse = JSON.parse(value);
        return parse;
      } catch (err) {
        return defaultValue;
      }
    };

    const hydrate = (value) => {
      if (!isObjectLiked(value)) {
        return value;
      }

      return JSON.stringify(value);
    };

    const createMigration = (opts, data) => {
      return new Promise((resolve, reject) => {
        const key = `${opts.key}-version`;
        external_localforage_default.a.getItem(key, (err, version) => {
          if (version !== opts.version) {
            data = opts.migrate(data);
            external_localforage_default.a.setItem(
              opts.key,
              rehydrate(data),
              (err) => {
                if (err) return reject(err);
                external_localforage_default.a.setItem(
                  key,
                  opts.version,
                  (err) => {
                    if (err) return reject(err);
                    return resolve(data);
                  }
                );
              }
            );
          } else {
            resolve(data);
          }
        });
      });
    };

    const config = {
      key: '@session',
      version: 1,
      migrate: (state) => {
        return use_storage_objectSpread({}, state);
      },
    };
    const useStorage = (state, setState) => {
      const { 0: rehydrated, 1: setRehydrated } = Object(
        external_react_['useState']
      )(false);
      const { 0: error, 1: setError } = Object(external_react_['useState'])(
        null
      );
      Object(external_react_['useEffect'])(() => {
        async function init() {
          await external_localforage_default.a.getItem(
            config.key,
            (err, value) => {
              if (err) {
                setRehydrated(true);
                return setError(err);
              } // Migrate persisted data

              const restoredValue = rehydrate(value);

              if (typeof config.migrate === 'function') {
                createMigration(config, restoredValue)
                  .then((data) => setState(data))
                  .then(() => setRehydrated(true));
              } else {
                setState(restoredValue);
                setRehydrated(true);
              }
            }
          );
        }

        init();
      }, []);
      Object(external_react_['useEffect'])(() => {
        // if (isNil(state) || isEmpty(state)) {
        //   localForage.removeItem(config.key);
        // }
        external_localforage_default.a.setItem(config.key, hydrate(state));
      }, [state]);
      return {
        rehydrated,
        error,
      };
    };
    // CONCATENATED MODULE: ./src/contexts/cart/use-cart.tsx
    var __jsx = external_react_default.a.createElement;

    function use_cart_ownKeys(object, enumerableOnly) {
      var keys = Object.keys(object);
      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly)
          symbols = symbols.filter(function (sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
          });
        keys.push.apply(keys, symbols);
      }
      return keys;
    }

    function use_cart_objectSpread(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i] != null ? arguments[i] : {};
        if (i % 2) {
          use_cart_ownKeys(Object(source), true).forEach(function (key) {
            use_cart_defineProperty(target, key, source[key]);
          });
        } else if (Object.getOwnPropertyDescriptors) {
          Object.defineProperties(
            target,
            Object.getOwnPropertyDescriptors(source)
          );
        } else {
          use_cart_ownKeys(Object(source)).forEach(function (key) {
            Object.defineProperty(
              target,
              key,
              Object.getOwnPropertyDescriptor(source, key)
            );
          });
        }
      }
      return target;
    }

    function use_cart_defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value: value,
          enumerable: true,
          configurable: true,
          writable: true,
        });
      } else {
        obj[key] = value;
      }
      return obj;
    }

    const CartContext = Object(external_react_['createContext'])({});
    const INITIAL_STATE = {
      isOpen: false,
      items: [],
      isRestaurant: false,
      coupon: null,
    };

    const useCartActions = (initialCart = INITIAL_STATE) => {
      var _state$items3;

      const { 0: state, 1: dispatch } = Object(external_react_['useReducer'])(
        reducer,
        initialCart
      );

      const addItemHandler = (item, quantity = 1) => {
        dispatch({
          type: 'ADD_ITEM',
          payload: use_cart_objectSpread(
            use_cart_objectSpread({}, item),
            {},
            {
              quantity,
            }
          ),
        });
      };

      const removeItemHandler = (item, quantity = 1) => {
        dispatch({
          type: 'REMOVE_ITEM',
          payload: use_cart_objectSpread(
            use_cart_objectSpread({}, item),
            {},
            {
              quantity,
            }
          ),
        });
      };

      const clearItemFromCartHandler = (item) => {
        dispatch({
          type: 'CLEAR_ITEM_FROM_CART',
          payload: item,
        });
      };

      const clearCartHandler = () => {
        dispatch({
          type: 'CLEAR_CART',
        });
      };

      const toggleCartHandler = () => {
        dispatch({
          type: 'TOGGLE_CART',
        });
      };

      const couponHandler = (coupon) => {
        dispatch({
          type: 'APPLY_COUPON',
          payload: coupon,
        });
      };

      const removeCouponHandler = () => {
        dispatch({
          type: 'REMOVE_COUPON',
        });
      };

      const rehydrateLocalState = (payload) => {
        dispatch({
          type: 'REHYDRATE',
          payload,
        });
      };

      const toggleRestaurant = () => {
        dispatch({
          type: 'TOGGLE_RESTAURANT',
        });
      };

      const isInCartHandler = (id) => {
        var _state$items;

        return (_state$items = state.items) === null || _state$items === void 0
          ? void 0
          : _state$items.some((item) => item.id === id);
      };

      const getItemHandler = (id) => {
        var _state$items2;

        return (_state$items2 = state.items) === null ||
          _state$items2 === void 0
          ? void 0
          : _state$items2.find((item) => item.id === id);
      };

      const getCartItemsPrice = () =>
        cartItemsTotalPrice(state.items).toFixed(2);

      const getCartItemsTotalPrice = () =>
        cartItemsTotalPrice(state.items, state.coupon).toFixed(2);

      const getDiscount = () =>
        cartDiscountAmount(state.items, state.coupon).toFixed(2);

      const getItemsCount =
        (_state$items3 = state.items) === null || _state$items3 === void 0
          ? void 0
          : _state$items3.reduce((acc, item) => acc + item.quantity, 0);
      return {
        state,
        getItemsCount,
        rehydrateLocalState,
        addItemHandler,
        removeItemHandler,
        clearItemFromCartHandler,
        clearCartHandler,
        isInCartHandler,
        getItemHandler,
        toggleCartHandler,
        getCartItemsTotalPrice,
        getCartItemsPrice,
        couponHandler,
        removeCouponHandler,
        getDiscount,
        toggleRestaurant,
      };
    };

    const CartProvider = ({ children }) => {
      var _state$items4;

      const {
        state,
        rehydrateLocalState,
        getItemsCount,
        addItemHandler,
        removeItemHandler,
        clearItemFromCartHandler,
        clearCartHandler,
        isInCartHandler,
        getItemHandler,
        toggleCartHandler,
        getCartItemsTotalPrice,
        couponHandler,
        removeCouponHandler,
        getCartItemsPrice,
        getDiscount,
        toggleRestaurant,
      } = useCartActions();
      const { rehydrated, error } = useStorage(state, rehydrateLocalState);
      return __jsx(
        CartContext.Provider,
        {
          value: {
            isOpen: state.isOpen,
            items: state.items,
            coupon: state.coupon,
            isRestaurant: state.isRestaurant,
            cartItemsCount:
              (_state$items4 = state.items) === null || _state$items4 === void 0
                ? void 0
                : _state$items4.length,
            itemsCount: getItemsCount,
            addItem: addItemHandler,
            removeItem: removeItemHandler,
            removeItemFromCart: clearItemFromCartHandler,
            clearCart: clearCartHandler,
            isInCart: isInCartHandler,
            getItem: getItemHandler,
            toggleCart: toggleCartHandler,
            calculatePrice: getCartItemsTotalPrice,
            calculateSubTotalPrice: getCartItemsPrice,
            applyCoupon: couponHandler,
            removeCoupon: removeCouponHandler,
            calculateDiscount: getDiscount,
            toggleRestaurant,
          },
        },
        children
      );
    };
    const useCart = () => Object(external_react_['useContext'])(CartContext);

    /***/
  },
};

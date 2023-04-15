import e, { useState as t, useEffect as n } from 'react';
/*!
 * Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */
function a(e, t) {
  const n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    let a = Object.getOwnPropertySymbols(e);
    t &&
      (a = a.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, a);
  }
  return n;
}
function r(e) {
  for (let t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? a(Object(n), !0).forEach(function (t) {
          s(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : a(Object(n)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
        });
  }
  return e;
}
function i(e) {
  return (
    (i =
      typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol'
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              typeof Symbol === 'function' &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? 'symbol'
              : typeof e;
          }),
    i(e)
  );
}
function o(e, t) {
  for (let n = 0; n < t.length; n++) {
    const a = t[n];
    (a.enumerable = a.enumerable || !1),
      (a.configurable = !0),
      'value' in a && (a.writable = !0),
      Object.defineProperty(e, a.key, a);
  }
}
function s(e, t, n) {
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
function c(e, t) {
  return (
    (function (e) {
      if (Array.isArray(e)) return e;
    })(e) ||
    (function (e, t) {
      let n =
        e == null
          ? null
          : (typeof Symbol !== 'undefined' && e[Symbol.iterator]) ||
            e['@@iterator'];
      if (n == null) return;
      let a;
      let r;
      const i = [];
      let o = !0;
      let s = !1;
      try {
        for (
          n = n.call(e);
          !(o = (a = n.next()).done) && (i.push(a.value), !t || i.length !== t);
          o = !0
        );
      } catch (e) {
        (s = !0), (r = e);
      } finally {
        try {
          o || n.return == null || n.return();
        } finally {
          if (s) throw r;
        }
      }
      return i;
    })(e, t) ||
    f(e, t) ||
    (function () {
      throw new TypeError(
        'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
      );
    })()
  );
}
function l(e) {
  return (
    (function (e) {
      if (Array.isArray(e)) return u(e);
    })(e) ||
    (function (e) {
      if (
        (typeof Symbol !== 'undefined' && e[Symbol.iterator] != null) ||
        e['@@iterator'] != null
      )
        return Array.from(e);
    })(e) ||
    f(e) ||
    (function () {
      throw new TypeError(
        'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
      );
    })()
  );
}
function f(e, t) {
  if (e) {
    if (typeof e === 'string') return u(e, t);
    let n = Object.prototype.toString.call(e).slice(8, -1);
    return (
      n === 'Object' && e.constructor && (n = e.constructor.name),
      n === 'Map' || n === 'Set'
        ? Array.from(e)
        : n === 'Arguments' ||
          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
        ? u(e, t)
        : void 0
    );
  }
}
function u(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, a = new Array(t); n < t; n++) a[n] = e[n];
  return a;
}
!(function (e, t) {
  void 0 === t && (t = {});
  const n = t.insertAt;
  if (e && typeof document !== 'undefined') {
    const a = document.head || document.getElementsByTagName('head')[0];
    const r = document.createElement('style');
    (r.type = 'text/css'),
      n === 'top' && a.firstChild
        ? a.insertBefore(r, a.firstChild)
        : a.appendChild(r),
      r.styleSheet
        ? (r.styleSheet.cssText = e)
        : r.appendChild(document.createTextNode(e));
  }
})(
  'label{display:block;margin-bottom:10px;margin-top:1rem}.address{margin-top:10px}table.dataTable{border-spacing:0;margin:0 auto;width:90%}table.dataTable tfoot th,table.dataTable thead th{font-weight:700}table.dataTable thead td,table.dataTable thead th{border-bottom:1px solid #111;cursor:n-resize;padding:10px 18px}table.dataTable tbody td,table.dataTable tbody th{padding:8px 10px;text-align:center}table.dataTable.display tbody td,table.dataTable.display tbody th,table.dataTable.row-border tbody td,table.dataTable.row-border tbody th{border-top:1px solid #ddd}table.dataTable.no-footer{border-bottom:1px solid #111}.dataTablesWrapper{display:flex;justify-content:space-around}.dataTables_filter input{margin-left:.5em}.dataTables_info{padding-top:.755em}.dataTables_paginate{padding-top:.25em}.dataTables_paginate .paginate_button{border:1px solid transparent;border-radius:2px;box-sizing:border-box;cursor:pointer;display:inline-block;margin-left:2px;min-width:1.5em;padding:.5em 1em;text-align:center}.dataTables_paginate .paginate_button.current,.dataTables_paginate .paginate_button.current:hover{background:linear-gradient(180deg,#fff 0,#dcdcdc);background-color:#fff;border:1px solid #979797;cursor:default}.dataTables_filter,.dataTables_info,.dataTables_length,.dataTables_paginate,.dataTables_processing{color:#333}.icon{position:absolute}#selectButton{cursor:pointer}.dark{background-color:#f9f9f9}.dark:hover,.light:hover{background-color:#f6f6f6}.darkBold{background-color:#f1f1f1}.lightBold{background-color:#fafafa}.dark:hover>.darkBold,.light:hover>.lightBold{background-color:#eaeaea}',
);
const m = function () {};
let d = {};
let p = {};
let b = null;
let v = { mark: m, measure: m };
try {
  typeof window !== 'undefined' && (d = window),
    typeof document !== 'undefined' && (p = document),
    typeof MutationObserver !== 'undefined' && (b = MutationObserver),
    typeof performance !== 'undefined' && (v = performance);
} catch (e) {}
const y = (d.navigator || {}).userAgent;
const g = void 0 === y ? '' : y;
const h = d;
const x = p;
const w = b;
const k = v;
h.document;
const O =
  !!x.documentElement &&
  !!x.head &&
  typeof x.addEventListener === 'function' &&
  typeof x.createElement === 'function';
const E = ~g.indexOf('MSIE') || ~g.indexOf('Trident/');
const S = ['HTML', 'HEAD', 'STYLE', 'SCRIPT'];
const N = (function () {
  try {
    return process.env.NODE_ENV === 'production';
  } catch (e) {
    return !1;
  }
})();
const A = {
  fas: 'solid',
  'fa-solid': 'solid',
  far: 'regular',
  'fa-regular': 'regular',
  fal: 'light',
  'fa-light': 'light',
  fat: 'thin',
  'fa-thin': 'thin',
  fad: 'duotone',
  'fa-duotone': 'duotone',
  fab: 'brands',
  'fa-brands': 'brands',
  fak: 'kit',
  'fa-kit': 'kit',
  fa: 'solid',
};
const j = {
  solid: 'fas',
  regular: 'far',
  light: 'fal',
  thin: 'fat',
  duotone: 'fad',
  brands: 'fab',
  kit: 'fak',
};
const P = {
  fab: 'fa-brands',
  fad: 'fa-duotone',
  fak: 'fa-kit',
  fal: 'fa-light',
  far: 'fa-regular',
  fas: 'fa-solid',
  fat: 'fa-thin',
};
const _ = {
  'fa-brands': 'fab',
  'fa-duotone': 'fad',
  'fa-kit': 'fak',
  'fa-light': 'fal',
  'fa-regular': 'far',
  'fa-solid': 'fas',
  'fa-thin': 'fat',
};
const C = /fa[srltdbk\-\ ]/;
const T =
  /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Kit)?.*/i;
const I = { 900: 'fas', 400: 'far', normal: 'far', 300: 'fal', 100: 'fat' };
const M = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const z = M.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);
const R = [
  'class',
  'data-prefix',
  'data-icon',
  'data-fa-transform',
  'data-fa-mask',
];
const L = 'duotone-group';
const $ = 'swap-opacity';
const D = 'primary';
const F = 'secondary';
const V = []
  .concat(l(Object.keys(j)), [
    '2xs',
    'xs',
    'sm',
    'lg',
    'xl',
    '2xl',
    'beat',
    'border',
    'fade',
    'beat-fade',
    'bounce',
    'flip-both',
    'flip-horizontal',
    'flip-vertical',
    'flip',
    'fw',
    'inverse',
    'layers-counter',
    'layers-text',
    'layers',
    'li',
    'pull-left',
    'pull-right',
    'pulse',
    'rotate-180',
    'rotate-270',
    'rotate-90',
    'rotate-by',
    'shake',
    'spin-pulse',
    'spin-reverse',
    'spin',
    'stack-1x',
    'stack-2x',
    'stack',
    'ul',
    L,
    $,
    D,
    F,
  ])
  .concat(
    M.map(function (e) {
      return ''.concat(e, 'x');
    }),
  )
  .concat(
    z.map(function (e) {
      return 'w-'.concat(e);
    }),
  );
const Y = h.FontAwesomeConfig || {};
if (x && typeof x.querySelector === 'function') {
  [
    ['data-family-prefix', 'familyPrefix'],
    ['data-style-default', 'styleDefault'],
    ['data-replacement-class', 'replacementClass'],
    ['data-auto-replace-svg', 'autoReplaceSvg'],
    ['data-auto-add-css', 'autoAddCss'],
    ['data-auto-a11y', 'autoA11y'],
    ['data-search-pseudo-elements', 'searchPseudoElements'],
    ['data-observe-mutations', 'observeMutations'],
    ['data-mutate-approach', 'mutateApproach'],
    ['data-keep-original-source', 'keepOriginalSource'],
    ['data-measure-performance', 'measurePerformance'],
    ['data-show-missing-icons', 'showMissingIcons'],
  ].forEach(function (e) {
    const t = c(e, 2);
    const n = t[0];
    const a = t[1];
    const r = (function (e) {
      return e === '' || (e !== 'false' && (e === 'true' || e));
    })(
      (function (e) {
        const t = x.querySelector(`script[${e}]`);
        if (t) return t.getAttribute(e);
      })(n),
    );
    r != null && (Y[a] = r);
  });
}
const W = r(
  r(
    {},
    {
      familyPrefix: 'fa',
      styleDefault: 'solid',
      replacementClass: 'svg-inline--fa',
      autoReplaceSvg: !0,
      autoAddCss: !0,
      autoA11y: !0,
      searchPseudoElements: !1,
      observeMutations: !0,
      mutateApproach: 'async',
      keepOriginalSource: !0,
      measurePerformance: !1,
      showMissingIcons: !0,
    },
  ),
  Y,
);
W.autoReplaceSvg || (W.observeMutations = !1);
const B = {};
Object.keys(W).forEach(function (e) {
  Object.defineProperty(B, e, {
    enumerable: !0,
    set: function (t) {
      (W[e] = t),
        q.forEach(function (e) {
          return e(B);
        });
    },
    get: function () {
      return W[e];
    },
  });
}),
  (h.FontAwesomeConfig = B);
var q = [];
const H = 16;
const U = { size: 16, x: 0, y: 0, rotate: 0, flipX: !1, flipY: !1 };
function X() {
  for (var e = 12, t = ''; e-- > 0; )
    t += '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'[
      (62 * Math.random()) | 0
    ];
  return t;
}
function J(e) {
  for (var t = [], n = (e || []).length >>> 0; n--; ) t[n] = e[n];
  return t;
}
function K(e) {
  return e.classList
    ? J(e.classList)
    : (e.getAttribute('class') || '').split(' ').filter(function (e) {
        return e;
      });
}
function G(e) {
  return ''
    .concat(e)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}
function Q(e) {
  return Object.keys(e || {}).reduce(function (t, n) {
    return t + ''.concat(n, ': ').concat(e[n].trim(), ';');
  }, '');
}
function Z(e) {
  return (
    e.size !== U.size ||
    e.x !== U.x ||
    e.y !== U.y ||
    e.rotate !== U.rotate ||
    e.flipX ||
    e.flipY
  );
}
function ee() {
  const e = 'fa';
  const t = 'svg-inline--fa';
  const n = B.familyPrefix;
  const a = B.replacementClass;
  let r =
    ':root, :host {\n  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";\n  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";\n  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";\n  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";\n  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";\n  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";\n}\n\nsvg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {\n  overflow: visible;\n  box-sizing: content-box;\n}\n\n.svg-inline--fa {\n  display: var(--fa-display, inline-block);\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n}\n.svg-inline--fa.fa-2xs {\n  vertical-align: 0.1em;\n}\n.svg-inline--fa.fa-xs {\n  vertical-align: 0em;\n}\n.svg-inline--fa.fa-sm {\n  vertical-align: -0.0714285705em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.2em;\n}\n.svg-inline--fa.fa-xl {\n  vertical-align: -0.25em;\n}\n.svg-inline--fa.fa-2xl {\n  vertical-align: -0.3125em;\n}\n.svg-inline--fa.fa-pull-left {\n  margin-right: var(--fa-pull-margin, 0.3em);\n  width: auto;\n}\n.svg-inline--fa.fa-pull-right {\n  margin-left: var(--fa-pull-margin, 0.3em);\n  width: auto;\n}\n.svg-inline--fa.fa-li {\n  width: var(--fa-li-width, 2em);\n  top: 0.25em;\n}\n.svg-inline--fa.fa-fw {\n  width: var(--fa-fw-width, 1.25em);\n}\n\n.fa-layers svg.svg-inline--fa {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: 1em;\n}\n.fa-layers svg.svg-inline--fa {\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: var(--fa-counter-background-color, #ff253a);\n  border-radius: var(--fa-counter-border-radius, 1em);\n  box-sizing: border-box;\n  color: var(--fa-inverse, #fff);\n  line-height: var(--fa-counter-line-height, 1);\n  max-width: var(--fa-counter-max-width, 5em);\n  min-width: var(--fa-counter-min-width, 1.5em);\n  overflow: hidden;\n  padding: var(--fa-counter-padding, 0.25em 0.5em);\n  right: var(--fa-right, 0);\n  text-overflow: ellipsis;\n  top: var(--fa-top, 0);\n  -webkit-transform: scale(var(--fa-counter-scale, 0.25));\n          transform: scale(var(--fa-counter-scale, 0.25));\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: var(--fa-bottom, 0);\n  right: var(--fa-right, 0);\n  top: auto;\n  -webkit-transform: scale(var(--fa-layers-scale, 0.25));\n          transform: scale(var(--fa-layers-scale, 0.25));\n  -webkit-transform-origin: bottom right;\n          transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: var(--fa-bottom, 0);\n  left: var(--fa-left, 0);\n  right: auto;\n  top: auto;\n  -webkit-transform: scale(var(--fa-layers-scale, 0.25));\n          transform: scale(var(--fa-layers-scale, 0.25));\n  -webkit-transform-origin: bottom left;\n          transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  top: var(--fa-top, 0);\n  right: var(--fa-right, 0);\n  -webkit-transform: scale(var(--fa-layers-scale, 0.25));\n          transform: scale(var(--fa-layers-scale, 0.25));\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: var(--fa-left, 0);\n  right: auto;\n  top: var(--fa-top, 0);\n  -webkit-transform: scale(var(--fa-layers-scale, 0.25));\n          transform: scale(var(--fa-layers-scale, 0.25));\n  -webkit-transform-origin: top left;\n          transform-origin: top left;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-2xs {\n  font-size: 0.625em;\n  line-height: 0.1em;\n  vertical-align: 0.225em;\n}\n\n.fa-xs {\n  font-size: 0.75em;\n  line-height: 0.0833333337em;\n  vertical-align: 0.125em;\n}\n\n.fa-sm {\n  font-size: 0.875em;\n  line-height: 0.0714285718em;\n  vertical-align: 0.0535714295em;\n}\n\n.fa-lg {\n  font-size: 1.25em;\n  line-height: 0.05em;\n  vertical-align: -0.075em;\n}\n\n.fa-xl {\n  font-size: 1.5em;\n  line-height: 0.0416666682em;\n  vertical-align: -0.125em;\n}\n\n.fa-2xl {\n  font-size: 2em;\n  line-height: 0.03125em;\n  vertical-align: -0.1875em;\n}\n\n.fa-fw {\n  text-align: center;\n  width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-left: var(--fa-li-margin, 2.5em);\n  padding-left: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  left: calc(var(--fa-li-width, 2em) * -1);\n  position: absolute;\n  text-align: center;\n  width: var(--fa-li-width, 2em);\n  line-height: inherit;\n}\n\n.fa-border {\n  border-color: var(--fa-border-color, #eee);\n  border-radius: var(--fa-border-radius, 0.1em);\n  border-style: var(--fa-border-style, solid);\n  border-width: var(--fa-border-width, 0.08em);\n  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);\n}\n\n.fa-pull-left {\n  float: left;\n  margin-right: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-pull-right {\n  float: right;\n  margin-left: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-beat {\n  -webkit-animation-name: fa-beat;\n          animation-name: fa-beat;\n  -webkit-animation-delay: var(--fa-animation-delay, 0);\n          animation-delay: var(--fa-animation-delay, 0);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);\n          animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-bounce {\n  -webkit-animation-name: fa-bounce;\n          animation-name: fa-bounce;\n  -webkit-animation-delay: var(--fa-animation-delay, 0);\n          animation-delay: var(--fa-animation-delay, 0);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));\n          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));\n}\n\n.fa-fade {\n  -webkit-animation-name: fa-fade;\n          animation-name: fa-fade;\n  -webkit-animation-delay: var(--fa-animation-delay, 0);\n          animation-delay: var(--fa-animation-delay, 0);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-beat-fade {\n  -webkit-animation-name: fa-beat-fade;\n          animation-name: fa-beat-fade;\n  -webkit-animation-delay: var(--fa-animation-delay, 0);\n          animation-delay: var(--fa-animation-delay, 0);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-flip {\n  -webkit-animation-name: fa-flip;\n          animation-name: fa-flip;\n  -webkit-animation-delay: var(--fa-animation-delay, 0);\n          animation-delay: var(--fa-animation-delay, 0);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);\n          animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-shake {\n  -webkit-animation-name: fa-shake;\n          animation-name: fa-shake;\n  -webkit-animation-delay: var(--fa-animation-delay, 0);\n          animation-delay: var(--fa-animation-delay, 0);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, linear);\n          animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin {\n  -webkit-animation-name: fa-spin;\n          animation-name: fa-spin;\n  -webkit-animation-delay: var(--fa-animation-delay, 0);\n          animation-delay: var(--fa-animation-delay, 0);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 2s);\n          animation-duration: var(--fa-animation-duration, 2s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, linear);\n          animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin-reverse {\n  --fa-animation-direction: reverse;\n}\n\n.fa-pulse,\n.fa-spin-pulse {\n  -webkit-animation-name: fa-spin;\n          animation-name: fa-spin;\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));\n          animation-timing-function: var(--fa-animation-timing, steps(8));\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .fa-beat,\n.fa-bounce,\n.fa-fade,\n.fa-beat-fade,\n.fa-flip,\n.fa-pulse,\n.fa-shake,\n.fa-spin,\n.fa-spin-pulse {\n    -webkit-animation-delay: -1ms;\n            animation-delay: -1ms;\n    -webkit-animation-duration: 1ms;\n            animation-duration: 1ms;\n    -webkit-animation-iteration-count: 1;\n            animation-iteration-count: 1;\n    transition-delay: 0s;\n    transition-duration: 0s;\n  }\n}\n@-webkit-keyframes fa-beat {\n  0%, 90% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  45% {\n    -webkit-transform: scale(var(--fa-beat-scale, 1.25));\n            transform: scale(var(--fa-beat-scale, 1.25));\n  }\n}\n@keyframes fa-beat {\n  0%, 90% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  45% {\n    -webkit-transform: scale(var(--fa-beat-scale, 1.25));\n            transform: scale(var(--fa-beat-scale, 1.25));\n  }\n}\n@-webkit-keyframes fa-bounce {\n  0% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n  10% {\n    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n  }\n  30% {\n    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n  }\n  50% {\n    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n  }\n  57% {\n    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n  }\n  64% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n  100% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n}\n@keyframes fa-bounce {\n  0% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n  10% {\n    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n  }\n  30% {\n    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n  }\n  50% {\n    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n  }\n  57% {\n    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n  }\n  64% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n  100% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n}\n@-webkit-keyframes fa-fade {\n  50% {\n    opacity: var(--fa-fade-opacity, 0.4);\n  }\n}\n@keyframes fa-fade {\n  50% {\n    opacity: var(--fa-fade-opacity, 0.4);\n  }\n}\n@-webkit-keyframes fa-beat-fade {\n  0%, 100% {\n    opacity: var(--fa-beat-fade-opacity, 0.4);\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  50% {\n    opacity: 1;\n    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));\n            transform: scale(var(--fa-beat-fade-scale, 1.125));\n  }\n}\n@keyframes fa-beat-fade {\n  0%, 100% {\n    opacity: var(--fa-beat-fade-opacity, 0.4);\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  50% {\n    opacity: 1;\n    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));\n            transform: scale(var(--fa-beat-fade-scale, 1.125));\n  }\n}\n@-webkit-keyframes fa-flip {\n  50% {\n    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n  }\n}\n@keyframes fa-flip {\n  50% {\n    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n  }\n}\n@-webkit-keyframes fa-shake {\n  0% {\n    -webkit-transform: rotate(-15deg);\n            transform: rotate(-15deg);\n  }\n  4% {\n    -webkit-transform: rotate(15deg);\n            transform: rotate(15deg);\n  }\n  8%, 24% {\n    -webkit-transform: rotate(-18deg);\n            transform: rotate(-18deg);\n  }\n  12%, 28% {\n    -webkit-transform: rotate(18deg);\n            transform: rotate(18deg);\n  }\n  16% {\n    -webkit-transform: rotate(-22deg);\n            transform: rotate(-22deg);\n  }\n  20% {\n    -webkit-transform: rotate(22deg);\n            transform: rotate(22deg);\n  }\n  32% {\n    -webkit-transform: rotate(-12deg);\n            transform: rotate(-12deg);\n  }\n  36% {\n    -webkit-transform: rotate(12deg);\n            transform: rotate(12deg);\n  }\n  40%, 100% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n}\n@keyframes fa-shake {\n  0% {\n    -webkit-transform: rotate(-15deg);\n            transform: rotate(-15deg);\n  }\n  4% {\n    -webkit-transform: rotate(15deg);\n            transform: rotate(15deg);\n  }\n  8%, 24% {\n    -webkit-transform: rotate(-18deg);\n            transform: rotate(-18deg);\n  }\n  12%, 28% {\n    -webkit-transform: rotate(18deg);\n            transform: rotate(18deg);\n  }\n  16% {\n    -webkit-transform: rotate(-22deg);\n            transform: rotate(-22deg);\n  }\n  20% {\n    -webkit-transform: rotate(22deg);\n            transform: rotate(22deg);\n  }\n  32% {\n    -webkit-transform: rotate(-12deg);\n            transform: rotate(-12deg);\n  }\n  36% {\n    -webkit-transform: rotate(12deg);\n            transform: rotate(12deg);\n  }\n  40%, 100% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n}\n@-webkit-keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n@keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  -webkit-transform: rotate(270deg);\n          transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  -webkit-transform: scale(-1, 1);\n          transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  -webkit-transform: scale(1, -1);\n          transform: scale(1, -1);\n}\n\n.fa-flip-both,\n.fa-flip-horizontal.fa-flip-vertical {\n  -webkit-transform: scale(-1, -1);\n          transform: scale(-1, -1);\n}\n\n.fa-rotate-by {\n  -webkit-transform: rotate(var(--fa-rotate-angle, none));\n          transform: rotate(var(--fa-rotate-angle, none));\n}\n\n.fa-stack {\n  display: inline-block;\n  vertical-align: middle;\n  height: 2em;\n  position: relative;\n  width: 2.5em;\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n  z-index: var(--fa-stack-z-index, auto);\n}\n\n.svg-inline--fa.fa-stack-1x {\n  height: 1em;\n  width: 1.25em;\n}\n.svg-inline--fa.fa-stack-2x {\n  height: 2em;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: var(--fa-inverse, #fff);\n}\n\n.sr-only,\n.fa-sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border-width: 0;\n}\n\n.sr-only-focusable:not(:focus),\n.fa-sr-only-focusable:not(:focus) {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border-width: 0;\n}\n\n.svg-inline--fa .fa-primary {\n  fill: var(--fa-primary-color, currentColor);\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa .fa-secondary {\n  fill: var(--fa-secondary-color, currentColor);\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-primary {\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-secondary {\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa mask .fa-primary,\n.svg-inline--fa mask .fa-secondary {\n  fill: black;\n}\n\n.fad.fa-inverse,\n.fa-duotone.fa-inverse {\n  color: var(--fa-inverse, #fff);\n}';
  if (n !== e || a !== t) {
    const i = new RegExp('\\.'.concat(e, '\\-'), 'g');
    const o = new RegExp('\\--'.concat(e, '\\-'), 'g');
    const s = new RegExp('\\.'.concat(t), 'g');
    r = r
      .replace(i, '.'.concat(n, '-'))
      .replace(o, '--'.concat(n, '-'))
      .replace(s, '.'.concat(a));
  }
  return r;
}
let te = !1;
function ne() {
  B.autoAddCss &&
    !te &&
    (!(function (e) {
      if (e && O) {
        const t = x.createElement('style');
        t.setAttribute('type', 'text/css'), (t.innerHTML = e);
        for (
          var n = x.head.childNodes, a = null, r = n.length - 1;
          r > -1;
          r--
        ) {
          const i = n[r];
          const o = (i.tagName || '').toUpperCase();
          ['STYLE', 'LINK'].indexOf(o) > -1 && (a = i);
        }
        x.head.insertBefore(t, a);
      }
    })(ee()),
    (te = !0));
}
const ae = {
  mixout: function () {
    return { dom: { css: ee, insertCss: ne } };
  },
  hooks: function () {
    return {
      beforeDOMElementCreation: function () {
        ne();
      },
      beforeI2svg: function () {
        ne();
      },
    };
  },
};
const re = h || {};
re.___FONT_AWESOME___ || (re.___FONT_AWESOME___ = {}),
  re.___FONT_AWESOME___.styles || (re.___FONT_AWESOME___.styles = {}),
  re.___FONT_AWESOME___.hooks || (re.___FONT_AWESOME___.hooks = {}),
  re.___FONT_AWESOME___.shims || (re.___FONT_AWESOME___.shims = []);
const ie = re.___FONT_AWESOME___;
const oe = [];
let se = !1;
function ce(e) {
  O && (se ? setTimeout(e, 0) : oe.push(e));
}
function le(e) {
  const t = e.tag;
  const n = e.attributes;
  const a = void 0 === n ? {} : n;
  const r = e.children;
  const i = void 0 === r ? [] : r;
  return typeof e === 'string'
    ? G(e)
    : '<'
        .concat(t, ' ')
        .concat(
          (function (e) {
            return Object.keys(e || {})
              .reduce(function (t, n) {
                return t + ''.concat(n, '="').concat(G(e[n]), '" ');
              }, '')
              .trim();
          })(a),
          '>',
        )
        .concat(i.map(le).join(''), '</')
        .concat(t, '>');
}
function fe(e, t, n) {
  if (e && e[t] && e[t][n]) return { prefix: t, iconName: n, icon: e[t][n] };
}
O &&
  ((se = (x.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(
    x.readyState,
  )) ||
    x.addEventListener('DOMContentLoaded', function e() {
      x.removeEventListener('DOMContentLoaded', e),
        (se = 1),
        oe.map(function (e) {
          return e();
        });
    }));
const ue = function (e, t, n, a) {
  let r;
  let i;
  let o;
  const s = Object.keys(e);
  const c = s.length;
  const l =
    void 0 !== a
      ? (function (e, t) {
          return function (n, a, r, i) {
            return e.call(t, n, a, r, i);
          };
        })(t, a)
      : t;
  for (void 0 === n ? ((r = 1), (o = e[s[0]])) : ((r = 0), (o = n)); r < c; r++)
    o = l(o, e[(i = s[r])], i, e);
  return o;
};
function me(e) {
  const t = (function (e) {
    for (var t = [], n = 0, a = e.length; n < a; ) {
      const r = e.charCodeAt(n++);
      if (r >= 55296 && r <= 56319 && n < a) {
        const i = e.charCodeAt(n++);
        (64512 & i) == 56320
          ? t.push(((1023 & r) << 10) + (1023 & i) + 65536)
          : (t.push(r), n--);
      } else t.push(r);
    }
    return t;
  })(e);
  return t.length === 1 ? t[0].toString(16) : null;
}
function de(e) {
  return Object.keys(e).reduce(function (t, n) {
    const a = e[n];
    return a.icon ? (t[a.iconName] = a.icon) : (t[n] = a), t;
  }, {});
}
function pe(e, t) {
  const n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
  const a = n.skipHooks;
  const i = void 0 !== a && a;
  const o = de(t);
  typeof ie.hooks.addPack !== 'function' || i
    ? (ie.styles[e] = r(r({}, ie.styles[e] || {}), o))
    : ie.hooks.addPack(e, de(t)),
    e === 'fas' && pe('fa', t);
}
const be = ie.styles;
const ve = ie.shims;
const ye = Object.values(P);
let ge = null;
let he = {};
let xe = {};
let we = {};
let ke = {};
let Oe = {};
const Ee = Object.keys(A);
function Se(e, t) {
  let n;
  const a = t.split('-');
  const r = a[0];
  const i = a.slice(1).join('-');
  return r !== e || i === '' || ((n = i), ~V.indexOf(n)) ? null : i;
}
let Ne;
const Ae = function () {
  const e = function (e) {
    return ue(
      be,
      function (t, n, a) {
        return (t[a] = ue(n, e, {})), t;
      },
      {},
    );
  };
  (he = e(function (e, t, n) {
    (t[3] && (e[t[3]] = n), t[2]) &&
      t[2]
        .filter(function (e) {
          return typeof e === 'number';
        })
        .forEach(function (t) {
          e[t.toString(16)] = n;
        });
    return e;
  })),
    (xe = e(function (e, t, n) {
      ((e[n] = n), t[2]) &&
        t[2]
          .filter(function (e) {
            return typeof e === 'string';
          })
          .forEach(function (t) {
            e[t] = n;
          });
      return e;
    })),
    (Oe = e(function (e, t, n) {
      const a = t[2];
      return (
        (e[n] = n),
        a.forEach(function (t) {
          e[t] = n;
        }),
        e
      );
    }));
  const t = 'far' in be || B.autoFetchSvg;
  const n = ue(
    ve,
    function (e, n) {
      const a = n[0];
      let r = n[1];
      const i = n[2];
      return (
        r !== 'far' || t || (r = 'fas'),
        typeof a === 'string' && (e.names[a] = { prefix: r, iconName: i }),
        typeof a === 'number' &&
          (e.unicodes[a.toString(16)] = { prefix: r, iconName: i }),
        e
      );
    },
    { names: {}, unicodes: {} },
  );
  (we = n.names), (ke = n.unicodes), (ge = Te(B.styleDefault));
};
function je(e, t) {
  return (he[e] || {})[t];
}
function Pe(e, t) {
  return (Oe[e] || {})[t];
}
function _e(e) {
  return we[e] || { prefix: null, iconName: null };
}
function Ce() {
  return ge;
}
(Ne = function (e) {
  ge = Te(e.styleDefault);
}),
  q.push(Ne),
  Ae();
function Te(e) {
  const t = j[e] || j[A[e]];
  const n = e in ie.styles ? e : null;
  return t || n || null;
}
function Ie(e) {
  const t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
  const n = t.skipLookups;
  const a = void 0 !== n && n;
  let r = null;
  const i = e.reduce(
    function (e, t) {
      const n = Se(B.familyPrefix, t);
      if (
        (be[t]
          ? ((t = ye.includes(t) ? _[t] : t), (r = t), (e.prefix = t))
          : Ee.indexOf(t) > -1
          ? ((r = t), (e.prefix = Te(t)))
          : n
          ? (e.iconName = n)
          : t !== B.replacementClass && e.rest.push(t),
        !a && e.prefix && e.iconName)
      ) {
        const i = r === 'fa' ? _e(e.iconName) : {};
        const o = Pe(e.prefix, e.iconName);
        i.prefix && (r = null),
          (e.iconName = i.iconName || o || e.iconName),
          (e.prefix = i.prefix || e.prefix),
          e.prefix !== 'far' ||
            be.far ||
            !be.fas ||
            B.autoFetchSvg ||
            (e.prefix = 'fas');
      }
      return e;
    },
    { prefix: null, iconName: null, rest: [] },
  );
  return (i.prefix !== 'fa' && r !== 'fa') || (i.prefix = Ce() || 'fas'), i;
}
const Me = (function () {
  function e() {
    !(function (e, t) {
      if (!(e instanceof t))
        throw new TypeError('Cannot call a class as a function');
    })(this, e),
      (this.definitions = {});
  }
  let t;
  let n;
  let a;
  return (
    (t = e),
    (n = [
      {
        key: 'add',
        value: function () {
          for (
            var e = this, t = arguments.length, n = new Array(t), a = 0;
            a < t;
            a++
          )
            n[a] = arguments[a];
          const i = n.reduce(this._pullDefinitions, {});
          Object.keys(i).forEach(function (t) {
            (e.definitions[t] = r(r({}, e.definitions[t] || {}), i[t])),
              pe(t, i[t]);
            const n = P[t];
            n && pe(n, i[t]), Ae();
          });
        },
      },
      {
        key: 'reset',
        value: function () {
          this.definitions = {};
        },
      },
      {
        key: '_pullDefinitions',
        value: function (e, t) {
          const n = t.prefix && t.iconName && t.icon ? { 0: t } : t;
          return (
            Object.keys(n).map(function (t) {
              const a = n[t];
              const r = a.prefix;
              const i = a.iconName;
              const o = a.icon;
              const s = o[2];
              e[r] || (e[r] = {}),
                s.length > 0 &&
                  s.forEach(function (t) {
                    typeof t === 'string' && (e[r][t] = o);
                  }),
                (e[r][i] = o);
            }),
            e
          );
        },
      },
    ]),
    n && o(t.prototype, n),
    a && o(t, a),
    Object.defineProperty(t, 'prototype', { writable: !1 }),
    e
  );
})();
let ze = [];
let Re = {};
const Le = {};
const $e = Object.keys(Le);
function De(e, t) {
  for (
    var n = arguments.length, a = new Array(n > 2 ? n - 2 : 0), r = 2;
    r < n;
    r++
  )
    a[r - 2] = arguments[r];
  const i = Re[e] || [];
  return (
    i.forEach(function (e) {
      t = e.apply(null, [t].concat(a));
    }),
    t
  );
}
function Fe(e) {
  for (
    var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), a = 1;
    a < t;
    a++
  )
    n[a - 1] = arguments[a];
  const r = Re[e] || [];
  r.forEach(function (e) {
    e.apply(null, n);
  });
}
function Ve() {
  const e = arguments[0];
  const t = Array.prototype.slice.call(arguments, 1);
  return Le[e] ? Le[e].apply(null, t) : void 0;
}
function Ye(e) {
  e.prefix === 'fa' && (e.prefix = 'fas');
  let t = e.iconName;
  const n = e.prefix || Ce();
  if (t)
    return (t = Pe(n, t) || t), fe(We.definitions, n, t) || fe(ie.styles, n, t);
}
var We = new Me();
const Be = {
  i2svg: function () {
    const e =
      arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    return O
      ? (Fe('beforeI2svg', e), Ve('pseudoElements2svg', e), Ve('i2svg', e))
      : Promise.reject('Operation requires a DOM of some kind.');
  },
  watch: function () {
    const e =
      arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    const t = e.autoReplaceSvgRoot;
    !1 === B.autoReplaceSvg && (B.autoReplaceSvg = !0),
      (B.observeMutations = !0),
      ce(function () {
        He({ autoReplaceSvgRoot: t }), Fe('watch', e);
      });
  },
};
const qe = {
  noAuto: function () {
    (B.autoReplaceSvg = !1), (B.observeMutations = !1), Fe('noAuto');
  },
  config: B,
  dom: Be,
  parse: {
    icon: function (e) {
      if (e === null) return null;
      if (i(e) === 'object' && e.prefix && e.iconName)
        return {
          prefix: e.prefix,
          iconName: Pe(e.prefix, e.iconName) || e.iconName,
        };
      if (Array.isArray(e) && e.length === 2) {
        const t = e[1].indexOf('fa-') === 0 ? e[1].slice(3) : e[1];
        const n = Te(e[0]);
        return { prefix: n, iconName: Pe(n, t) || t };
      }
      if (
        typeof e === 'string' &&
        (e.indexOf(''.concat(B.familyPrefix, '-')) > -1 || e.match(C))
      ) {
        const a = Ie(e.split(' '), { skipLookups: !0 });
        return {
          prefix: a.prefix || Ce(),
          iconName: Pe(a.prefix, a.iconName) || a.iconName,
        };
      }
      if (typeof e === 'string') {
        const r = Ce();
        return { prefix: r, iconName: Pe(r, e) || e };
      }
    },
  },
  library: We,
  findIconDefinition: Ye,
  toHtml: le,
};
var He = function () {
  const e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
  const t = e.autoReplaceSvgRoot;
  const n = void 0 === t ? x : t;
  (Object.keys(ie.styles).length > 0 || B.autoFetchSvg) &&
    O &&
    B.autoReplaceSvg &&
    qe.dom.i2svg({ node: n });
};
function Ue(e, t) {
  return (
    Object.defineProperty(e, 'abstract', { get: t }),
    Object.defineProperty(e, 'html', {
      get: function () {
        return e.abstract.map(function (e) {
          return le(e);
        });
      },
    }),
    Object.defineProperty(e, 'node', {
      get: function () {
        if (O) {
          const t = x.createElement('div');
          return (t.innerHTML = e.html), t.children;
        }
      },
    }),
    e
  );
}
function Xe(e) {
  const t = e.icons;
  const n = t.main;
  const a = t.mask;
  const i = e.prefix;
  const o = e.iconName;
  const s = e.transform;
  const c = e.symbol;
  const l = e.title;
  const f = e.maskId;
  const u = e.titleId;
  const m = e.extra;
  const d = e.watchable;
  const p = void 0 !== d && d;
  const b = a.found ? a : n;
  const v = b.width;
  const y = b.height;
  const g = i === 'fak';
  const h = [
    B.replacementClass,
    o ? ''.concat(B.familyPrefix, '-').concat(o) : '',
  ]
    .filter(function (e) {
      return m.classes.indexOf(e) === -1;
    })
    .filter(function (e) {
      return e !== '' || !!e;
    })
    .concat(m.classes)
    .join(' ');
  const x = {
    children: [],
    attributes: r(
      r({}, m.attributes),
      {},
      {
        'data-prefix': i,
        'data-icon': o,
        class: h,
        role: m.attributes.role || 'img',
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 '.concat(v, ' ').concat(y),
      },
    ),
  };
  const w =
    g && !~m.classes.indexOf('fa-fw')
      ? { width: ''.concat((v / y) * 16 * 0.0625, 'em') }
      : {};
  p && (x.attributes['data-fa-i2svg'] = ''),
    l &&
      (x.children.push({
        tag: 'title',
        attributes: {
          id: x.attributes['aria-labelledby'] || 'title-'.concat(u || X()),
        },
        children: [l],
      }),
      delete x.attributes.title);
  const k = r(
    r({}, x),
    {},
    {
      prefix: i,
      iconName: o,
      main: n,
      mask: a,
      maskId: f,
      transform: s,
      symbol: c,
      styles: r(r({}, w), m.styles),
    },
  );
  const O =
    a.found && n.found
      ? Ve('generateAbstractMask', k) || { children: [], attributes: {} }
      : Ve('generateAbstractIcon', k) || { children: [], attributes: {} };
  const E = O.children;
  const S = O.attributes;
  return (
    (k.children = E),
    (k.attributes = S),
    c
      ? (function (e) {
          const t = e.prefix;
          const n = e.iconName;
          const a = e.children;
          const i = e.attributes;
          const o = e.symbol;
          const s =
            !0 === o
              ? ''.concat(t, '-').concat(B.familyPrefix, '-').concat(n)
              : o;
          return [
            {
              tag: 'svg',
              attributes: { style: 'display: none;' },
              children: [
                {
                  tag: 'symbol',
                  attributes: r(r({}, i), {}, { id: s }),
                  children: a,
                },
              ],
            },
          ];
        })(k)
      : (function (e) {
          const t = e.children;
          const n = e.main;
          const a = e.mask;
          const i = e.attributes;
          const o = e.styles;
          const s = e.transform;
          if (Z(s) && n.found && !a.found) {
            const c = { x: n.width / n.height / 2, y: 0.5 };
            i.style = Q(
              r(
                r({}, o),
                {},
                {
                  'transform-origin': ''
                    .concat(c.x + s.x / 16, 'em ')
                    .concat(c.y + s.y / 16, 'em'),
                },
              ),
            );
          }
          return [{ tag: 'svg', attributes: i, children: t }];
        })(k)
  );
}
function Je(e) {
  const t = e.content;
  const n = e.width;
  const a = e.height;
  const i = e.transform;
  const o = e.title;
  const s = e.extra;
  const c = e.watchable;
  const l = void 0 !== c && c;
  const f = r(
    r(r({}, s.attributes), o ? { title: o } : {}),
    {},
    { class: s.classes.join(' ') },
  );
  l && (f['data-fa-i2svg'] = '');
  const u = r({}, s.styles);
  Z(i) &&
    ((u.transform = (function (e) {
      const t = e.transform;
      const n = e.width;
      const a = void 0 === n ? 16 : n;
      const r = e.height;
      const i = void 0 === r ? 16 : r;
      const o = e.startCentered;
      const s = void 0 !== o && o;
      let c = '';
      return (
        (c +=
          s && E
            ? 'translate('
                .concat(t.x / H - a / 2, 'em, ')
                .concat(t.y / H - i / 2, 'em) ')
            : s
            ? 'translate(calc(-50% + '
                .concat(t.x / H, 'em), calc(-50% + ')
                .concat(t.y / H, 'em)) ')
            : 'translate('.concat(t.x / H, 'em, ').concat(t.y / H, 'em) ')),
        (c += 'scale('
          .concat((t.size / H) * (t.flipX ? -1 : 1), ', ')
          .concat((t.size / H) * (t.flipY ? -1 : 1), ') ')),
        c + 'rotate('.concat(t.rotate, 'deg) ')
      );
    })({ transform: i, startCentered: !0, width: n, height: a })),
    (u['-webkit-transform'] = u.transform));
  const m = Q(u);
  m.length > 0 && (f.style = m);
  const d = [];
  return (
    d.push({ tag: 'span', attributes: f, children: [t] }),
    o &&
      d.push({ tag: 'span', attributes: { class: 'sr-only' }, children: [o] }),
    d
  );
}
function Ke(e) {
  const t = e.content;
  const n = e.title;
  const a = e.extra;
  const i = r(
    r(r({}, a.attributes), n ? { title: n } : {}),
    {},
    { class: a.classes.join(' ') },
  );
  const o = Q(a.styles);
  o.length > 0 && (i.style = o);
  const s = [];
  return (
    s.push({ tag: 'span', attributes: i, children: [t] }),
    n &&
      s.push({ tag: 'span', attributes: { class: 'sr-only' }, children: [n] }),
    s
  );
}
const Ge = ie.styles;
function Qe(e) {
  const t = e[0];
  const n = e[1];
  const a = c(e.slice(4), 1)[0];
  return {
    found: !0,
    width: t,
    height: n,
    icon: Array.isArray(a)
      ? {
          tag: 'g',
          attributes: { class: ''.concat(B.familyPrefix, '-').concat(L) },
          children: [
            {
              tag: 'path',
              attributes: {
                class: ''.concat(B.familyPrefix, '-').concat(F),
                fill: 'currentColor',
                d: a[0],
              },
            },
            {
              tag: 'path',
              attributes: {
                class: ''.concat(B.familyPrefix, '-').concat(D),
                fill: 'currentColor',
                d: a[1],
              },
            },
          ],
        }
      : { tag: 'path', attributes: { fill: 'currentColor', d: a } },
  };
}
const Ze = { found: !1, width: 512, height: 512 };
function et(e, t) {
  const n = t;
  return (
    t === 'fa' && B.styleDefault !== null && (t = Ce()),
    new Promise(function (a, i) {
      if ((Ve('missingIconAbstract'), n === 'fa')) {
        const o = _e(e) || {};
        (e = o.iconName || e), (t = o.prefix || t);
      }
      if (e && t && Ge[t] && Ge[t][e]) return a(Qe(Ge[t][e]));
      !(function (e, t) {
        N ||
          B.showMissingIcons ||
          !e ||
          console.error(
            'Icon with name "'
              .concat(e, '" and prefix "')
              .concat(t, '" is missing.'),
          );
      })(e, t),
        a(
          r(
            r({}, Ze),
            {},
            {
              icon:
                (B.showMissingIcons && e && Ve('missingIconAbstract')) || {},
            },
          ),
        );
    })
  );
}
const tt = function () {};
const nt =
  B.measurePerformance && k && k.mark && k.measure
    ? k
    : { mark: tt, measure: tt };
const at = function (e) {
  nt.mark(''.concat('FA "6.1.1"', ' ').concat(e, ' ends')),
    nt.measure(
      ''.concat('FA "6.1.1"', ' ').concat(e),
      ''.concat('FA "6.1.1"', ' ').concat(e, ' begins'),
      ''.concat('FA "6.1.1"', ' ').concat(e, ' ends'),
    );
};
const rt = function (e) {
  return (
    nt.mark(''.concat('FA "6.1.1"', ' ').concat(e, ' begins')),
    function () {
      return at(e);
    }
  );
};
const it = function () {};
function ot(e) {
  return (
    typeof (e.getAttribute ? e.getAttribute('data-fa-i2svg') : null) ===
    'string'
  );
}
function st(e) {
  return x.createElementNS('http://www.w3.org/2000/svg', e);
}
function ct(e) {
  return x.createElement(e);
}
function lt(e) {
  const t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
  const n = t.ceFn;
  const a = void 0 === n ? (e.tag === 'svg' ? st : ct) : n;
  if (typeof e === 'string') return x.createTextNode(e);
  const r = a(e.tag);
  Object.keys(e.attributes || []).forEach(function (t) {
    r.setAttribute(t, e.attributes[t]);
  });
  const i = e.children || [];
  return (
    i.forEach(function (e) {
      r.appendChild(lt(e, { ceFn: a }));
    }),
    r
  );
}
var ft = {
  replace: function (e) {
    const t = e[0];
    if (t.parentNode)
      if (
        (e[1].forEach(function (e) {
          t.parentNode.insertBefore(lt(e), t);
        }),
        t.getAttribute('data-fa-i2svg') === null && B.keepOriginalSource)
      ) {
        const n = x.createComment(
          (function (e) {
            const t = ' '.concat(e.outerHTML, ' ');
            return ''.concat(t, 'Font Awesome fontawesome.com ');
          })(t),
        );
        t.parentNode.replaceChild(n, t);
      } else t.remove();
  },
  nest: function (e) {
    const t = e[0];
    const n = e[1];
    if (~K(t).indexOf(B.replacementClass)) return ft.replace(e);
    const a = new RegExp(''.concat(B.familyPrefix, '-.*'));
    if ((delete n[0].attributes.id, n[0].attributes.class)) {
      const r = n[0].attributes.class.split(' ').reduce(
        function (e, t) {
          return (
            t === B.replacementClass || t.match(a)
              ? e.toSvg.push(t)
              : e.toNode.push(t),
            e
          );
        },
        { toNode: [], toSvg: [] },
      );
      (n[0].attributes.class = r.toSvg.join(' ')),
        r.toNode.length === 0
          ? t.removeAttribute('class')
          : t.setAttribute('class', r.toNode.join(' '));
    }
    const i = n
      .map(function (e) {
        return le(e);
      })
      .join('\n');
    t.setAttribute('data-fa-i2svg', ''), (t.innerHTML = i);
  },
};
function ut(e) {
  e();
}
function mt(e, t) {
  const n = typeof t === 'function' ? t : it;
  if (e.length === 0) n();
  else {
    let a = ut;
    B.mutateApproach === 'async' && (a = h.requestAnimationFrame || ut),
      a(function () {
        const t =
          !0 === B.autoReplaceSvg
            ? ft.replace
            : ft[B.autoReplaceSvg] || ft.replace;
        const a = rt('mutate');
        e.map(t), a(), n();
      });
  }
}
let dt = !1;
function pt() {
  dt = !0;
}
function bt() {
  dt = !1;
}
let vt = null;
function yt(e) {
  if (w && B.observeMutations) {
    const t = e.treeCallback;
    const n = void 0 === t ? it : t;
    const a = e.nodeCallback;
    const r = void 0 === a ? it : a;
    const i = e.pseudoElementsCallback;
    const o = void 0 === i ? it : i;
    const s = e.observeMutationsRoot;
    const c = void 0 === s ? x : s;
    (vt = new w(function (e) {
      if (!dt) {
        const t = Ce();
        J(e).forEach(function (e) {
          if (
            (e.type === 'childList' &&
              e.addedNodes.length > 0 &&
              !ot(e.addedNodes[0]) &&
              (B.searchPseudoElements && o(e.target), n(e.target)),
            e.type === 'attributes' &&
              e.target.parentNode &&
              B.searchPseudoElements &&
              o(e.target.parentNode),
            e.type === 'attributes' &&
              ot(e.target) &&
              ~R.indexOf(e.attributeName))
          )
            if (
              e.attributeName === 'class' &&
              (function (e) {
                const t = e.getAttribute ? e.getAttribute('data-prefix') : null;
                const n = e.getAttribute ? e.getAttribute('data-icon') : null;
                return t && n;
              })(e.target)
            ) {
              const a = Ie(K(e.target));
              const i = a.prefix;
              const s = a.iconName;
              e.target.setAttribute('data-prefix', i || t),
                s && e.target.setAttribute('data-icon', s);
            } else
              (c = e.target) &&
                c.classList &&
                c.classList.contains &&
                c.classList.contains(B.replacementClass) &&
                r(e.target);
          let c;
        });
      }
    })),
      O &&
        vt.observe(c, {
          childList: !0,
          attributes: !0,
          characterData: !0,
          subtree: !0,
        });
  }
}
function gt(e) {
  const t = e.getAttribute('style');
  let n = [];
  return (
    t &&
      (n = t.split(';').reduce(function (e, t) {
        const n = t.split(':');
        const a = n[0];
        const r = n.slice(1);
        return a && r.length > 0 && (e[a] = r.join(':').trim()), e;
      }, {})),
    n
  );
}
function ht(e) {
  let t;
  let n;
  const a = e.getAttribute('data-prefix');
  const r = e.getAttribute('data-icon');
  const i = void 0 !== e.innerText ? e.innerText.trim() : '';
  const o = Ie(K(e));
  return (
    o.prefix || (o.prefix = Ce()),
    a && r && ((o.prefix = a), (o.iconName = r)),
    (o.iconName && o.prefix) ||
      (o.prefix &&
        i.length > 0 &&
        (o.iconName =
          ((t = o.prefix),
          (n = e.innerText),
          (xe[t] || {})[n] || je(o.prefix, me(e.innerText))))),
    o
  );
}
function xt(e) {
  const t = J(e.attributes).reduce(function (e, t) {
    return e.name !== 'class' && e.name !== 'style' && (e[t.name] = t.value), e;
  }, {});
  const n = e.getAttribute('title');
  const a = e.getAttribute('data-fa-title-id');
  return (
    B.autoA11y &&
      (n
        ? (t['aria-labelledby'] = ''
            .concat(B.replacementClass, '-title-')
            .concat(a || X()))
        : ((t['aria-hidden'] = 'true'), (t.focusable = 'false'))),
    t
  );
}
function wt(e) {
  const t =
    arguments.length > 1 && void 0 !== arguments[1]
      ? arguments[1]
      : { styleParser: !0 };
  const n = ht(e);
  const a = n.iconName;
  const i = n.prefix;
  const o = n.rest;
  const s = xt(e);
  const c = De('parseNodeAttributes', {}, e);
  const l = t.styleParser ? gt(e) : [];
  return r(
    {
      iconName: a,
      title: e.getAttribute('title'),
      titleId: e.getAttribute('data-fa-title-id'),
      prefix: i,
      transform: U,
      mask: { iconName: null, prefix: null, rest: [] },
      maskId: null,
      symbol: !1,
      extra: { classes: o, styles: l, attributes: s },
    },
    c,
  );
}
const kt = ie.styles;
function Ot(e) {
  const t = B.autoReplaceSvg === 'nest' ? wt(e, { styleParser: !1 }) : wt(e);
  return ~t.extra.classes.indexOf('fa-layers-text')
    ? Ve('generateLayersText', e, t)
    : Ve('generateSvgReplacementMutation', e, t);
}
function Et(e) {
  const t =
    arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
  if (!O) return Promise.resolve();
  const n = x.documentElement.classList;
  const a = function (e) {
    return n.add(''.concat('fontawesome-i2svg', '-').concat(e));
  };
  const r = function (e) {
    return n.remove(''.concat('fontawesome-i2svg', '-').concat(e));
  };
  const i = B.autoFetchSvg ? Object.keys(A) : Object.keys(kt);
  const o = [
    '.'.concat('fa-layers-text', ':not([').concat('data-fa-i2svg', '])'),
  ]
    .concat(
      i.map(function (e) {
        return '.'.concat(e, ':not([').concat('data-fa-i2svg', '])');
      }),
    )
    .join(', ');
  if (o.length === 0) return Promise.resolve();
  let s = [];
  try {
    s = J(e.querySelectorAll(o));
  } catch (e) {}
  if (!(s.length > 0)) return Promise.resolve();
  a('pending'), r('complete');
  const c = rt('onTree');
  const l = s.reduce(function (e, t) {
    try {
      const n = Ot(t);
      n && e.push(n);
    } catch (e) {
      N || (e.name === 'MissingIcon' && console.error(e));
    }
    return e;
  }, []);
  return new Promise(function (e, n) {
    Promise.all(l)
      .then(function (n) {
        mt(n, function () {
          a('active'),
            a('complete'),
            r('pending'),
            typeof t === 'function' && t(),
            c(),
            e();
        });
      })
      .catch(function (e) {
        c(), n(e);
      });
  });
}
function St(e) {
  const t =
    arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
  Ot(e).then(function (e) {
    e && mt([e], t);
  });
}
const Nt = function (e) {
  const t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
  const n = t.transform;
  const a = void 0 === n ? U : n;
  const i = t.symbol;
  const o = void 0 !== i && i;
  const s = t.mask;
  const c = void 0 === s ? null : s;
  const l = t.maskId;
  const f = void 0 === l ? null : l;
  const u = t.title;
  const m = void 0 === u ? null : u;
  const d = t.titleId;
  const p = void 0 === d ? null : d;
  const b = t.classes;
  const v = void 0 === b ? [] : b;
  const y = t.attributes;
  const g = void 0 === y ? {} : y;
  const h = t.styles;
  const x = void 0 === h ? {} : h;
  if (e) {
    const w = e.prefix;
    const k = e.iconName;
    const O = e.icon;
    return Ue(r({ type: 'icon' }, e), function () {
      return (
        Fe('beforeDOMElementCreation', { iconDefinition: e, params: t }),
        B.autoA11y &&
          (m
            ? (g['aria-labelledby'] = ''
                .concat(B.replacementClass, '-title-')
                .concat(p || X()))
            : ((g['aria-hidden'] = 'true'), (g.focusable = 'false'))),
        Xe({
          icons: {
            main: Qe(O),
            mask: c
              ? Qe(c.icon)
              : { found: !1, width: null, height: null, icon: {} },
          },
          prefix: w,
          iconName: k,
          transform: r(r({}, U), a),
          symbol: o,
          title: m,
          maskId: f,
          titleId: p,
          extra: { attributes: g, styles: x, classes: v },
        })
      );
    });
  }
};
const At = {
  mixout: function () {
    return {
      icon:
        ((e = Nt),
        function (t) {
          const n =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          const a = (t || {}).icon ? t : Ye(t || {});
          let i = n.mask;
          return (
            i && (i = (i || {}).icon ? i : Ye(i || {})),
            e(a, r(r({}, n), {}, { mask: i }))
          );
        }),
    };
  },
  hooks: function () {
    return {
      mutationObserverCallbacks: function (e) {
        return (e.treeCallback = Et), (e.nodeCallback = St), e;
      },
    };
  },
  provides: function (e) {
    (e.i2svg = function (e) {
      const t = e.node;
      const n = void 0 === t ? x : t;
      const a = e.callback;
      return Et(n, void 0 === a ? function () {} : a);
    }),
      (e.generateSvgReplacementMutation = function (e, t) {
        const n = t.iconName;
        const a = t.title;
        const r = t.titleId;
        const i = t.prefix;
        const o = t.transform;
        const s = t.symbol;
        const l = t.mask;
        const f = t.maskId;
        const u = t.extra;
        return new Promise(function (t, m) {
          Promise.all([
            et(n, i),
            l.iconName
              ? et(l.iconName, l.prefix)
              : Promise.resolve({
                  found: !1,
                  width: 512,
                  height: 512,
                  icon: {},
                }),
          ])
            .then(function (l) {
              const m = c(l, 2);
              const d = m[0];
              const p = m[1];
              t([
                e,
                Xe({
                  icons: { main: d, mask: p },
                  prefix: i,
                  iconName: n,
                  transform: o,
                  symbol: s,
                  maskId: f,
                  title: a,
                  titleId: r,
                  extra: u,
                  watchable: !0,
                }),
              ]);
            })
            .catch(m);
        });
      }),
      (e.generateAbstractIcon = function (e) {
        let t;
        const n = e.children;
        const a = e.attributes;
        const r = e.main;
        const i = e.transform;
        const o = Q(e.styles);
        return (
          o.length > 0 && (a.style = o),
          Z(i) &&
            (t = Ve('generateAbstractTransformGrouping', {
              main: r,
              transform: i,
              containerWidth: r.width,
              iconWidth: r.width,
            })),
          n.push(t || r.icon),
          { children: n, attributes: a }
        );
      });
  },
};
const jt = {
  mixout: function () {
    return {
      layer: function (e) {
        const t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const n = t.classes;
        const a = void 0 === n ? [] : n;
        return Ue({ type: 'layer' }, function () {
          Fe('beforeDOMElementCreation', { assembler: e, params: t });
          let n = [];
          return (
            e(function (e) {
              Array.isArray(e)
                ? e.map(function (e) {
                    n = n.concat(e.abstract);
                  })
                : (n = n.concat(e.abstract));
            }),
            [
              {
                tag: 'span',
                attributes: {
                  class: [''.concat(B.familyPrefix, '-layers')]
                    .concat(l(a))
                    .join(' '),
                },
                children: n,
              },
            ]
          );
        });
      },
    };
  },
};
const Pt = {
  mixout: function () {
    return {
      counter: function (e) {
        const t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const n = t.title;
        const a = void 0 === n ? null : n;
        const r = t.classes;
        const i = void 0 === r ? [] : r;
        const o = t.attributes;
        const s = void 0 === o ? {} : o;
        const c = t.styles;
        const f = void 0 === c ? {} : c;
        return Ue({ type: 'counter', content: e }, function () {
          return (
            Fe('beforeDOMElementCreation', { content: e, params: t }),
            Ke({
              content: e.toString(),
              title: a,
              extra: {
                attributes: s,
                styles: f,
                classes: [''.concat(B.familyPrefix, '-layers-counter')].concat(
                  l(i),
                ),
              },
            })
          );
        });
      },
    };
  },
};
const _t = {
  mixout: function () {
    return {
      text: function (e) {
        const t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const n = t.transform;
        const a = void 0 === n ? U : n;
        const i = t.title;
        const o = void 0 === i ? null : i;
        const s = t.classes;
        const c = void 0 === s ? [] : s;
        const f = t.attributes;
        const u = void 0 === f ? {} : f;
        const m = t.styles;
        const d = void 0 === m ? {} : m;
        return Ue({ type: 'text', content: e }, function () {
          return (
            Fe('beforeDOMElementCreation', { content: e, params: t }),
            Je({
              content: e,
              transform: r(r({}, U), a),
              title: o,
              extra: {
                attributes: u,
                styles: d,
                classes: [''.concat(B.familyPrefix, '-layers-text')].concat(
                  l(c),
                ),
              },
            })
          );
        });
      },
    };
  },
  provides: function (e) {
    e.generateLayersText = function (e, t) {
      const n = t.title;
      const a = t.transform;
      const r = t.extra;
      let i = null;
      let o = null;
      if (E) {
        const s = parseInt(getComputedStyle(e).fontSize, 10);
        const c = e.getBoundingClientRect();
        (i = c.width / s), (o = c.height / s);
      }
      return (
        B.autoA11y && !n && (r.attributes['aria-hidden'] = 'true'),
        Promise.resolve([
          e,
          Je({
            content: e.innerHTML,
            width: i,
            height: o,
            transform: a,
            title: n,
            extra: r,
            watchable: !0,
          }),
        ])
      );
    };
  },
};
const Ct = new RegExp('"', 'ug');
const Tt = [1105920, 1112319];
function It(e, t) {
  const n = ''
    .concat('data-fa-pseudo-element-pending')
    .concat(t.replace(':', '-'));
  return new Promise(function (a, i) {
    if (e.getAttribute(n) !== null) return a();
    let o;
    let s;
    let c;
    const l = J(e.children).filter(function (e) {
      return e.getAttribute('data-fa-pseudo-element') === t;
    })[0];
    const f = h.getComputedStyle(e, t);
    const u = f.getPropertyValue('font-family').match(T);
    const m = f.getPropertyValue('font-weight');
    const d = f.getPropertyValue('content');
    if (l && !u) return e.removeChild(l), a();
    if (u && d !== 'none' && d !== '') {
      const p = f.getPropertyValue('content');
      let b = ~[
        'Solid',
        'Regular',
        'Light',
        'Thin',
        'Duotone',
        'Brands',
        'Kit',
      ].indexOf(u[2])
        ? j[u[2].toLowerCase()]
        : I[m];
      const v = (function (e) {
        let t;
        let n;
        let a;
        let r;
        let i;
        const o = e.replace(Ct, '');
        const s =
          ((n = 0),
          (r = (t = o).length),
          (i = t.charCodeAt(n)) >= 55296 &&
          i <= 56319 &&
          r > n + 1 &&
          (a = t.charCodeAt(n + 1)) >= 56320 &&
          a <= 57343
            ? 1024 * (i - 55296) + a - 56320 + 65536
            : i);
        const c = s >= Tt[0] && s <= Tt[1];
        const l = o.length === 2 && o[0] === o[1];
        return { value: me(l ? o[0] : o), isSecondary: c || l };
      })(p);
      const y = v.value;
      const g = v.isSecondary;
      const w = u[0].startsWith('FontAwesome');
      let k = je(b, y);
      const O = k;
      if (w) {
        const E =
          ((s = ke[(o = y)]),
          (c = je('fas', o)),
          s ||
            (c ? { prefix: 'fas', iconName: c } : null) || {
              prefix: null,
              iconName: null,
            });
        E.iconName && E.prefix && ((k = E.iconName), (b = E.prefix));
      }
      if (
        !k ||
        g ||
        (l &&
          l.getAttribute('data-prefix') === b &&
          l.getAttribute('data-icon') === O)
      )
        a();
      else {
        e.setAttribute(n, O), l && e.removeChild(l);
        const S = {
          iconName: null,
          title: null,
          titleId: null,
          prefix: null,
          transform: U,
          symbol: !1,
          mask: { iconName: null, prefix: null, rest: [] },
          maskId: null,
          extra: { classes: [], styles: {}, attributes: {} },
        };
        const N = S.extra;
        (N.attributes['data-fa-pseudo-element'] = t),
          et(k, b)
            .then(function (i) {
              const o = Xe(
                r(
                  r({}, S),
                  {},
                  {
                    icons: {
                      main: i,
                      mask: { prefix: null, iconName: null, rest: [] },
                    },
                    prefix: b,
                    iconName: O,
                    extra: N,
                    watchable: !0,
                  },
                ),
              );
              const s = x.createElement('svg');
              t === '::before'
                ? e.insertBefore(s, e.firstChild)
                : e.appendChild(s),
                (s.outerHTML = o
                  .map(function (e) {
                    return le(e);
                  })
                  .join('\n')),
                e.removeAttribute(n),
                a();
            })
            .catch(i);
      }
    } else a();
  });
}
function Mt(e) {
  return Promise.all([It(e, '::before'), It(e, '::after')]);
}
function zt(e) {
  return !(
    e.parentNode === document.head ||
    ~S.indexOf(e.tagName.toUpperCase()) ||
    e.getAttribute('data-fa-pseudo-element') ||
    (e.parentNode && e.parentNode.tagName === 'svg')
  );
}
function Rt(e) {
  if (O)
    return new Promise(function (t, n) {
      const a = J(e.querySelectorAll('*')).filter(zt).map(Mt);
      const r = rt('searchPseudoElements');
      pt(),
        Promise.all(a)
          .then(function () {
            r(), bt(), t();
          })
          .catch(function () {
            r(), bt(), n();
          });
    });
}
let Lt = !1;
const $t = function (e) {
  return e
    .toLowerCase()
    .split(' ')
    .reduce(
      function (e, t) {
        const n = t.toLowerCase().split('-');
        const a = n[0];
        let r = n.slice(1).join('-');
        if (a && r === 'h') return (e.flipX = !0), e;
        if (a && r === 'v') return (e.flipY = !0), e;
        if (((r = parseFloat(r)), isNaN(r))) return e;
        switch (a) {
          case 'grow':
            e.size += r;
            break;
          case 'shrink':
            e.size -= r;
            break;
          case 'left':
            e.x -= r;
            break;
          case 'right':
            e.x += r;
            break;
          case 'up':
            e.y -= r;
            break;
          case 'down':
            e.y += r;
            break;
          case 'rotate':
            e.rotate += r;
        }
        return e;
      },
      { size: 16, x: 0, y: 0, flipX: !1, flipY: !1, rotate: 0 },
    );
};
const Dt = {
  mixout: function () {
    return {
      parse: {
        transform: function (e) {
          return $t(e);
        },
      },
    };
  },
  hooks: function () {
    return {
      parseNodeAttributes: function (e, t) {
        const n = t.getAttribute('data-fa-transform');
        return n && (e.transform = $t(n)), e;
      },
    };
  },
  provides: function (e) {
    e.generateAbstractTransformGrouping = function (e) {
      const t = e.main;
      const n = e.transform;
      const a = e.containerWidth;
      const i = e.iconWidth;
      const o = { transform: 'translate('.concat(a / 2, ' 256)') };
      const s = 'translate('.concat(32 * n.x, ', ').concat(32 * n.y, ') ');
      const c = 'scale('
        .concat((n.size / 16) * (n.flipX ? -1 : 1), ', ')
        .concat((n.size / 16) * (n.flipY ? -1 : 1), ') ');
      const l = 'rotate('.concat(n.rotate, ' 0 0)');
      const f = {
        outer: o,
        inner: { transform: ''.concat(s, ' ').concat(c, ' ').concat(l) },
        path: { transform: 'translate('.concat((i / 2) * -1, ' -256)') },
      };
      return {
        tag: 'g',
        attributes: r({}, f.outer),
        children: [
          {
            tag: 'g',
            attributes: r({}, f.inner),
            children: [
              {
                tag: t.icon.tag,
                children: t.icon.children,
                attributes: r(r({}, t.icon.attributes), f.path),
              },
            ],
          },
        ],
      };
    };
  },
};
const Ft = { x: 0, y: 0, width: '100%', height: '100%' };
function Vt(e) {
  const t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
  return (
    e.attributes && (e.attributes.fill || t) && (e.attributes.fill = 'black'), e
  );
}
const Yt = {
  hooks: function () {
    return {
      parseNodeAttributes: function (e, t) {
        const n = t.getAttribute('data-fa-mask');
        const a = n
          ? Ie(
              n.split(' ').map(function (e) {
                return e.trim();
              }),
            )
          : { prefix: null, iconName: null, rest: [] };
        return (
          a.prefix || (a.prefix = Ce()),
          (e.mask = a),
          (e.maskId = t.getAttribute('data-fa-mask-id')),
          e
        );
      },
    };
  },
  provides: function (e) {
    e.generateAbstractMask = function (e) {
      let t;
      const n = e.children;
      const a = e.attributes;
      const i = e.main;
      const o = e.mask;
      const s = e.maskId;
      const c = e.transform;
      const l = i.width;
      const f = i.icon;
      const u = o.width;
      const m = o.icon;
      const d = (function (e) {
        const t = e.transform;
        const n = e.containerWidth;
        const a = e.iconWidth;
        const r = { transform: 'translate('.concat(n / 2, ' 256)') };
        const i = 'translate('.concat(32 * t.x, ', ').concat(32 * t.y, ') ');
        const o = 'scale('
          .concat((t.size / 16) * (t.flipX ? -1 : 1), ', ')
          .concat((t.size / 16) * (t.flipY ? -1 : 1), ') ');
        const s = 'rotate('.concat(t.rotate, ' 0 0)');
        return {
          outer: r,
          inner: { transform: ''.concat(i, ' ').concat(o, ' ').concat(s) },
          path: { transform: 'translate('.concat((a / 2) * -1, ' -256)') },
        };
      })({ transform: c, containerWidth: u, iconWidth: l });
      const p = {
        tag: 'rect',
        attributes: r(r({}, Ft), {}, { fill: 'white' }),
      };
      const b = f.children ? { children: f.children.map(Vt) } : {};
      const v = {
        tag: 'g',
        attributes: r({}, d.inner),
        children: [
          Vt(r({ tag: f.tag, attributes: r(r({}, f.attributes), d.path) }, b)),
        ],
      };
      const y = { tag: 'g', attributes: r({}, d.outer), children: [v] };
      const g = 'mask-'.concat(s || X());
      const h = 'clip-'.concat(s || X());
      const x = {
        tag: 'mask',
        attributes: r(
          r({}, Ft),
          {},
          {
            id: g,
            maskUnits: 'userSpaceOnUse',
            maskContentUnits: 'userSpaceOnUse',
          },
        ),
        children: [p, y],
      };
      const w = {
        tag: 'defs',
        children: [
          {
            tag: 'clipPath',
            attributes: { id: h },
            children: ((t = m), t.tag === 'g' ? t.children : [t]),
          },
          x,
        ],
      };
      return (
        n.push(w, {
          tag: 'rect',
          attributes: r(
            {
              fill: 'currentColor',
              'clip-path': 'url(#'.concat(h, ')'),
              mask: 'url(#'.concat(g, ')'),
            },
            Ft,
          ),
        }),
        { children: n, attributes: a }
      );
    };
  },
};
const Wt = {
  provides: function (e) {
    let t = !1;
    h.matchMedia &&
      (t = h.matchMedia('(prefers-reduced-motion: reduce)').matches),
      (e.missingIconAbstract = function () {
        const e = [];
        const n = { fill: 'currentColor' };
        const a = {
          attributeType: 'XML',
          repeatCount: 'indefinite',
          dur: '2s',
        };
        e.push({
          tag: 'path',
          attributes: r(
            r({}, n),
            {},
            {
              d: 'M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z',
            },
          ),
        });
        const i = r(r({}, a), {}, { attributeName: 'opacity' });
        const o = {
          tag: 'circle',
          attributes: r(r({}, n), {}, { cx: '256', cy: '364', r: '28' }),
          children: [],
        };
        return (
          t ||
            o.children.push(
              {
                tag: 'animate',
                attributes: r(
                  r({}, a),
                  {},
                  { attributeName: 'r', values: '28;14;28;28;14;28;' },
                ),
              },
              {
                tag: 'animate',
                attributes: r(r({}, i), {}, { values: '1;0;1;1;0;1;' }),
              },
            ),
          e.push(o),
          e.push({
            tag: 'path',
            attributes: r(
              r({}, n),
              {},
              {
                opacity: '1',
                d: 'M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z',
              },
            ),
            children: t
              ? []
              : [
                  {
                    tag: 'animate',
                    attributes: r(r({}, i), {}, { values: '1;0;0;0;0;1;' }),
                  },
                ],
          }),
          t ||
            e.push({
              tag: 'path',
              attributes: r(
                r({}, n),
                {},
                {
                  opacity: '0',
                  d: 'M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z',
                },
              ),
              children: [
                {
                  tag: 'animate',
                  attributes: r(r({}, i), {}, { values: '0;0;1;1;0;0;' }),
                },
              ],
            }),
          { tag: 'g', attributes: { class: 'missing' }, children: e }
        );
      });
  },
};
!(function (e, t) {
  const n = t.mixoutsTo;
  (ze = e),
    (Re = {}),
    Object.keys(Le).forEach(function (e) {
      $e.indexOf(e) === -1 && delete Le[e];
    }),
    ze.forEach(function (e) {
      const t = e.mixout ? e.mixout() : {};
      if (
        (Object.keys(t).forEach(function (e) {
          typeof t[e] === 'function' && (n[e] = t[e]),
            i(t[e]) === 'object' &&
              Object.keys(t[e]).forEach(function (a) {
                n[e] || (n[e] = {}), (n[e][a] = t[e][a]);
              });
        }),
        e.hooks)
      ) {
        const a = e.hooks();
        Object.keys(a).forEach(function (e) {
          Re[e] || (Re[e] = []), Re[e].push(a[e]);
        });
      }
      e.provides && e.provides(Le);
    });
})(
  [
    ae,
    At,
    jt,
    Pt,
    _t,
    {
      hooks: function () {
        return {
          mutationObserverCallbacks: function (e) {
            return (e.pseudoElementsCallback = Rt), e;
          },
        };
      },
      provides: function (e) {
        e.pseudoElements2svg = function (e) {
          const t = e.node;
          const n = void 0 === t ? x : t;
          B.searchPseudoElements && Rt(n);
        };
      },
    },
    {
      mixout: function () {
        return {
          dom: {
            unwatch: function () {
              pt(), (Lt = !0);
            },
          },
        };
      },
      hooks: function () {
        return {
          bootstrap: function () {
            yt(De('mutationObserverCallbacks', {}));
          },
          noAuto: function () {
            vt && vt.disconnect();
          },
          watch: function (e) {
            const t = e.observeMutationsRoot;
            Lt
              ? bt()
              : yt(
                  De('mutationObserverCallbacks', { observeMutationsRoot: t }),
                );
          },
        };
      },
    },
    Dt,
    Yt,
    Wt,
    {
      hooks: function () {
        return {
          parseNodeAttributes: function (e, t) {
            const n = t.getAttribute('data-fa-symbol');
            const a = n !== null && (n === '' || n);
            return (e.symbol = a), e;
          },
        };
      },
    },
  ],
  { mixoutsTo: qe },
);
let Bt;
const qt = qe.parse;
const Ht = qe.icon;
const Ut = { exports: {} };
const Xt = { exports: {} };
const Jt = {};
let Kt;
let Gt;
let Qt;
let Zt;
let en;
let tn;
let nn;
let an;
let rn;
let on;
let sn;
let cn;
let ln;
let fn;
const un = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ function mn() {
  return (
    Gt ||
      ((Gt = 1),
      (e = Xt),
      process.env.NODE_ENV === 'production'
        ? (e.exports = (function () {
            if (Bt) return Jt;
            Bt = 1;
            const e = typeof Symbol === 'function' && Symbol.for;
            const t = e ? Symbol.for('react.element') : 60103;
            const n = e ? Symbol.for('react.portal') : 60106;
            const a = e ? Symbol.for('react.fragment') : 60107;
            const r = e ? Symbol.for('react.strict_mode') : 60108;
            const i = e ? Symbol.for('react.profiler') : 60114;
            const o = e ? Symbol.for('react.provider') : 60109;
            const s = e ? Symbol.for('react.context') : 60110;
            const c = e ? Symbol.for('react.async_mode') : 60111;
            const l = e ? Symbol.for('react.concurrent_mode') : 60111;
            const f = e ? Symbol.for('react.forward_ref') : 60112;
            const u = e ? Symbol.for('react.suspense') : 60113;
            const m = e ? Symbol.for('react.suspense_list') : 60120;
            const d = e ? Symbol.for('react.memo') : 60115;
            const p = e ? Symbol.for('react.lazy') : 60116;
            const b = e ? Symbol.for('react.block') : 60121;
            const v = e ? Symbol.for('react.fundamental') : 60117;
            const y = e ? Symbol.for('react.responder') : 60118;
            const g = e ? Symbol.for('react.scope') : 60119;
            function h(e) {
              if (typeof e === 'object' && e !== null) {
                const m = e.$$typeof;
                switch (m) {
                  case t:
                    switch ((e = e.type)) {
                      case c:
                      case l:
                      case a:
                      case i:
                      case r:
                      case u:
                        return e;
                      default:
                        switch ((e = e && e.$$typeof)) {
                          case s:
                          case f:
                          case p:
                          case d:
                          case o:
                            return e;
                          default:
                            return m;
                        }
                    }
                  case n:
                    return m;
                }
              }
            }
            function x(e) {
              return h(e) === l;
            }
            return (
              (Jt.AsyncMode = c),
              (Jt.ConcurrentMode = l),
              (Jt.ContextConsumer = s),
              (Jt.ContextProvider = o),
              (Jt.Element = t),
              (Jt.ForwardRef = f),
              (Jt.Fragment = a),
              (Jt.Lazy = p),
              (Jt.Memo = d),
              (Jt.Portal = n),
              (Jt.Profiler = i),
              (Jt.StrictMode = r),
              (Jt.Suspense = u),
              (Jt.isAsyncMode = function (e) {
                return x(e) || h(e) === c;
              }),
              (Jt.isConcurrentMode = x),
              (Jt.isContextConsumer = function (e) {
                return h(e) === s;
              }),
              (Jt.isContextProvider = function (e) {
                return h(e) === o;
              }),
              (Jt.isElement = function (e) {
                return typeof e === 'object' && e !== null && e.$$typeof === t;
              }),
              (Jt.isForwardRef = function (e) {
                return h(e) === f;
              }),
              (Jt.isFragment = function (e) {
                return h(e) === a;
              }),
              (Jt.isLazy = function (e) {
                return h(e) === p;
              }),
              (Jt.isMemo = function (e) {
                return h(e) === d;
              }),
              (Jt.isPortal = function (e) {
                return h(e) === n;
              }),
              (Jt.isProfiler = function (e) {
                return h(e) === i;
              }),
              (Jt.isStrictMode = function (e) {
                return h(e) === r;
              }),
              (Jt.isSuspense = function (e) {
                return h(e) === u;
              }),
              (Jt.isValidElementType = function (e) {
                return (
                  typeof e === 'string' ||
                  typeof e === 'function' ||
                  e === a ||
                  e === l ||
                  e === i ||
                  e === r ||
                  e === u ||
                  e === m ||
                  (typeof e === 'object' &&
                    e !== null &&
                    (e.$$typeof === p ||
                      e.$$typeof === d ||
                      e.$$typeof === o ||
                      e.$$typeof === s ||
                      e.$$typeof === f ||
                      e.$$typeof === v ||
                      e.$$typeof === y ||
                      e.$$typeof === g ||
                      e.$$typeof === b))
                );
              }),
              (Jt.typeOf = h),
              Jt
            );
          })())
        : (e.exports =
            (Kt ||
              ((Kt = 1),
              process.env.NODE_ENV !== 'production' &&
                (function () {
                  const e = typeof Symbol === 'function' && Symbol.for;
                  const t = e ? Symbol.for('react.element') : 60103;
                  const n = e ? Symbol.for('react.portal') : 60106;
                  const a = e ? Symbol.for('react.fragment') : 60107;
                  const r = e ? Symbol.for('react.strict_mode') : 60108;
                  const i = e ? Symbol.for('react.profiler') : 60114;
                  const o = e ? Symbol.for('react.provider') : 60109;
                  const s = e ? Symbol.for('react.context') : 60110;
                  const c = e ? Symbol.for('react.async_mode') : 60111;
                  const l = e ? Symbol.for('react.concurrent_mode') : 60111;
                  const f = e ? Symbol.for('react.forward_ref') : 60112;
                  const u = e ? Symbol.for('react.suspense') : 60113;
                  const m = e ? Symbol.for('react.suspense_list') : 60120;
                  const d = e ? Symbol.for('react.memo') : 60115;
                  const p = e ? Symbol.for('react.lazy') : 60116;
                  const b = e ? Symbol.for('react.block') : 60121;
                  const v = e ? Symbol.for('react.fundamental') : 60117;
                  const y = e ? Symbol.for('react.responder') : 60118;
                  const g = e ? Symbol.for('react.scope') : 60119;
                  function h(e) {
                    if (typeof e === 'object' && e !== null) {
                      const m = e.$$typeof;
                      switch (m) {
                        case t:
                          var b = e.type;
                          switch (b) {
                            case c:
                            case l:
                            case a:
                            case i:
                            case r:
                            case u:
                              return b;
                            default:
                              var v = b && b.$$typeof;
                              switch (v) {
                                case s:
                                case f:
                                case p:
                                case d:
                                case o:
                                  return v;
                                default:
                                  return m;
                              }
                          }
                        case n:
                          return m;
                      }
                    }
                  }
                  const x = c;
                  const w = l;
                  const k = s;
                  const O = o;
                  const E = t;
                  const S = f;
                  const N = a;
                  const A = p;
                  const j = d;
                  const P = n;
                  const _ = i;
                  const C = r;
                  const T = u;
                  let I = !1;
                  function M(e) {
                    return h(e) === l;
                  }
                  (un.AsyncMode = x),
                    (un.ConcurrentMode = w),
                    (un.ContextConsumer = k),
                    (un.ContextProvider = O),
                    (un.Element = E),
                    (un.ForwardRef = S),
                    (un.Fragment = N),
                    (un.Lazy = A),
                    (un.Memo = j),
                    (un.Portal = P),
                    (un.Profiler = _),
                    (un.StrictMode = C),
                    (un.Suspense = T),
                    (un.isAsyncMode = function (e) {
                      return (
                        I ||
                          ((I = !0),
                          console.warn(
                            'The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.',
                          )),
                        M(e) || h(e) === c
                      );
                    }),
                    (un.isConcurrentMode = M),
                    (un.isContextConsumer = function (e) {
                      return h(e) === s;
                    }),
                    (un.isContextProvider = function (e) {
                      return h(e) === o;
                    }),
                    (un.isElement = function (e) {
                      return (
                        typeof e === 'object' && e !== null && e.$$typeof === t
                      );
                    }),
                    (un.isForwardRef = function (e) {
                      return h(e) === f;
                    }),
                    (un.isFragment = function (e) {
                      return h(e) === a;
                    }),
                    (un.isLazy = function (e) {
                      return h(e) === p;
                    }),
                    (un.isMemo = function (e) {
                      return h(e) === d;
                    }),
                    (un.isPortal = function (e) {
                      return h(e) === n;
                    }),
                    (un.isProfiler = function (e) {
                      return h(e) === i;
                    }),
                    (un.isStrictMode = function (e) {
                      return h(e) === r;
                    }),
                    (un.isSuspense = function (e) {
                      return h(e) === u;
                    }),
                    (un.isValidElementType = function (e) {
                      return (
                        typeof e === 'string' ||
                        typeof e === 'function' ||
                        e === a ||
                        e === l ||
                        e === i ||
                        e === r ||
                        e === u ||
                        e === m ||
                        (typeof e === 'object' &&
                          e !== null &&
                          (e.$$typeof === p ||
                            e.$$typeof === d ||
                            e.$$typeof === o ||
                            e.$$typeof === s ||
                            e.$$typeof === f ||
                            e.$$typeof === v ||
                            e.$$typeof === y ||
                            e.$$typeof === g ||
                            e.$$typeof === b))
                      );
                    }),
                    (un.typeOf = h);
                })()),
            un))),
    Xt.exports
  );
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/ function dn() {
  if (tn) return en;
  tn = 1;
  return (en = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');
}
function pn() {
  return an
    ? nn
    : ((an = 1), (nn = Function.call.bind(Object.prototype.hasOwnProperty)));
}
if (process.env.NODE_ENV !== 'production') {
  const bn = mn();
  Ut.exports = (function () {
    if (cn) return sn;
    cn = 1;
    const e = mn();
    const t = (function () {
      if (Zt) return Qt;
      Zt = 1;
      const e = Object.getOwnPropertySymbols;
      const t = Object.prototype.hasOwnProperty;
      const n = Object.prototype.propertyIsEnumerable;
      function a(e) {
        if (e == null)
          throw new TypeError(
            'Object.assign cannot be called with null or undefined',
          );
        return Object(e);
      }
      return (
        (Qt = (function () {
          try {
            if (!Object.assign) return !1;
            const e = new String('abc');
            if (((e[5] = 'de'), Object.getOwnPropertyNames(e)[0] === '5'))
              return !1;
            for (var t = {}, n = 0; n < 10; n++)
              t[`_${String.fromCharCode(n)}`] = n;
            if (
              Object.getOwnPropertyNames(t)
                .map(function (e) {
                  return t[e];
                })
                .join('') !== '0123456789'
            )
              return !1;
            const a = {};
            return (
              'abcdefghijklmnopqrst'.split('').forEach(function (e) {
                a[e] = e;
              }),
              Object.keys({ ...a }).join('') === 'abcdefghijklmnopqrst'
            );
          } catch (e) {
            return !1;
          }
        })()
          ? Object.assign
          : function (r, i) {
              for (var o, s, c = a(r), l = 1; l < arguments.length; l++) {
                for (const f in (o = Object(arguments[l])))
                  t.call(o, f) && (c[f] = o[f]);
                if (e) {
                  s = e(o);
                  for (let u = 0; u < s.length; u++)
                    n.call(o, s[u]) && (c[s[u]] = o[s[u]]);
                }
              }
              return c;
            }),
        Qt
      );
    })();
    const n = dn();
    const a = pn();
    const r = (function () {
      if (on) return rn;
      on = 1;
      let e = function () {};
      if (process.env.NODE_ENV !== 'production') {
        var t = dn();
        var n = {};
        var a = pn();
        e = function (e) {
          const t = `Warning: ${e}`;
          typeof console !== 'undefined' && console.error(t);
          try {
            throw new Error(t);
          } catch (e) {}
        };
      }
      function r(r, i, o, s, c) {
        if (process.env.NODE_ENV !== 'production')
          for (const l in r)
            if (a(r, l)) {
              var f;
              try {
                if (typeof r[l] !== 'function') {
                  const u = Error(
                    `${
                      s || 'React class'
                    }: ${o} type \`${l}\` is invalid; it must be a function, usually from the \`prop-types\` package, but received \`${typeof r[
                      l
                    ]}\`.This often happens because of typos such as \`PropTypes.function\` instead of \`PropTypes.func\`.`,
                  );
                  throw ((u.name = 'Invariant Violation'), u);
                }
                f = r[l](i, l, s, o, null, t);
              } catch (e) {
                f = e;
              }
              if (
                (!f ||
                  f instanceof Error ||
                  e(
                    `${
                      s || 'React class'
                    }: type specification of ${o} \`${l}\` is invalid; the type checker function must return \`null\` or an \`Error\` but returned a ${typeof f}. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).`,
                  ),
                f instanceof Error && !(f.message in n))
              ) {
                n[f.message] = !0;
                const m = c ? c() : '';
                e(`Failed ${o} type: ${f.message}${m != null ? m : ''}`);
              }
            }
      }
      return (
        (r.resetWarningCache = function () {
          process.env.NODE_ENV !== 'production' && (n = {});
        }),
        (rn = r)
      );
    })();
    let i = function () {};
    function o() {
      return null;
    }
    return (
      process.env.NODE_ENV !== 'production' &&
        (i = function (e) {
          const t = `Warning: ${e}`;
          typeof console !== 'undefined' && console.error(t);
          try {
            throw new Error(t);
          } catch (e) {}
        }),
      (sn = function (s, c) {
        const l = typeof Symbol === 'function' && Symbol.iterator;
        const f = '<<anonymous>>';
        const u = {
          array: b('array'),
          bigint: b('bigint'),
          bool: b('boolean'),
          func: b('function'),
          number: b('number'),
          object: b('object'),
          string: b('string'),
          symbol: b('symbol'),
          any: p(o),
          arrayOf: function (e) {
            return p(function (t, a, r, i, o) {
              if (typeof e !== 'function')
                return new d(
                  `Property \`${o}\` of component \`${r}\` has invalid PropType notation inside arrayOf.`,
                );
              const s = t[a];
              if (!Array.isArray(s))
                return new d(
                  `Invalid ${i} \`${o}\` of type \`${g(
                    s,
                  )}\` supplied to \`${r}\`, expected an array.`,
                );
              for (let c = 0; c < s.length; c++) {
                const l = e(s, c, r, i, `${o}[${c}]`, n);
                if (l instanceof Error) return l;
              }
              return null;
            });
          },
          element: p(function (e, t, n, a, r) {
            const i = e[t];
            return s(i)
              ? null
              : new d(
                  `Invalid ${a} \`${r}\` of type \`${g(
                    i,
                  )}\` supplied to \`${n}\`, expected a single ReactElement.`,
                );
          }),
          elementType: p(function (t, n, a, r, i) {
            const o = t[n];
            return e.isValidElementType(o)
              ? null
              : new d(
                  `Invalid ${r} \`${i}\` of type \`${g(
                    o,
                  )}\` supplied to \`${a}\`, expected a single ReactElement type.`,
                );
          }),
          instanceOf: function (e) {
            return p(function (t, n, a, r, i) {
              if (!(t[n] instanceof e)) {
                const o = e.name || f;
                return new d(
                  `Invalid ${r} \`${i}\` of type \`${
                    (s = t[n]).constructor && s.constructor.name
                      ? s.constructor.name
                      : f
                  }\` supplied to \`${a}\`, expected instance of \`${o}\`.`,
                );
              }
              let s;
              return null;
            });
          },
          node: p(function (e, t, n, a, r) {
            return y(e[t])
              ? null
              : new d(
                  `Invalid ${a} \`${r}\` supplied to \`${n}\`, expected a ReactNode.`,
                );
          }),
          objectOf: function (e) {
            return p(function (t, r, i, o, s) {
              if (typeof e !== 'function')
                return new d(
                  `Property \`${s}\` of component \`${i}\` has invalid PropType notation inside objectOf.`,
                );
              const c = t[r];
              const l = g(c);
              if (l !== 'object')
                return new d(
                  `Invalid ${o} \`${s}\` of type \`${l}\` supplied to \`${i}\`, expected an object.`,
                );
              for (const f in c)
                if (a(c, f)) {
                  const u = e(c, f, i, o, `${s}.${f}`, n);
                  if (u instanceof Error) return u;
                }
              return null;
            });
          },
          oneOf: function (e) {
            if (!Array.isArray(e))
              return (
                process.env.NODE_ENV !== 'production' &&
                  i(
                    arguments.length > 1
                      ? `Invalid arguments supplied to oneOf, expected an array, got ${arguments.length} arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).`
                      : 'Invalid argument supplied to oneOf, expected an array.',
                  ),
                o
              );
            function t(t, n, a, r, i) {
              for (var o = t[n], s = 0; s < e.length; s++)
                if (m(o, e[s])) return null;
              const c = JSON.stringify(e, function (e, t) {
                return h(t) === 'symbol' ? String(t) : t;
              });
              return new d(
                `Invalid ${r} \`${i}\` of value \`${String(
                  o,
                )}\` supplied to \`${a}\`, expected one of ${c}.`,
              );
            }
            return p(t);
          },
          oneOfType: function (e) {
            if (!Array.isArray(e))
              return (
                process.env.NODE_ENV !== 'production' &&
                  i(
                    'Invalid argument supplied to oneOfType, expected an instance of array.',
                  ),
                o
              );
            for (let t = 0; t < e.length; t++) {
              const r = e[t];
              if (typeof r !== 'function')
                return (
                  i(
                    `Invalid argument supplied to oneOfType. Expected an array of check functions, but received ${x(
                      r,
                    )} at index ${t}.`,
                  ),
                  o
                );
            }
            return p(function (t, r, i, o, s) {
              for (var c = [], l = 0; l < e.length; l++) {
                const f = (0, e[l])(t, r, i, o, s, n);
                if (f == null) return null;
                f.data &&
                  a(f.data, 'expectedType') &&
                  c.push(f.data.expectedType);
              }
              return new d(
                `Invalid ${o} \`${s}\` supplied to \`${i}\`${
                  c.length > 0 ? `, expected one of type [${c.join(', ')}]` : ''
                }.`,
              );
            });
          },
          shape: function (e) {
            return p(function (t, a, r, i, o) {
              const s = t[a];
              const c = g(s);
              if (c !== 'object')
                return new d(
                  `Invalid ${i} \`${o}\` of type \`${c}\` supplied to \`${r}\`, expected \`object\`.`,
                );
              for (const l in e) {
                const f = e[l];
                if (typeof f !== 'function') return v(r, i, o, l, h(f));
                const u = f(s, l, r, i, `${o}.${l}`, n);
                if (u) return u;
              }
              return null;
            });
          },
          exact: function (e) {
            return p(function (r, i, o, s, c) {
              const l = r[i];
              const f = g(l);
              if (f !== 'object')
                return new d(
                  `Invalid ${s} \`${c}\` of type \`${f}\` supplied to \`${o}\`, expected \`object\`.`,
                );
              const u = t({}, r[i], e);
              for (const m in u) {
                const p = e[m];
                if (a(e, m) && typeof p !== 'function')
                  return v(o, s, c, m, h(p));
                if (!p)
                  return new d(
                    `Invalid ${s} \`${c}\` key \`${m}\` supplied to \`${o}\`.\nBad object: ${JSON.stringify(
                      r[i],
                      null,
                      '  ',
                    )}\nValid keys: ${JSON.stringify(
                      Object.keys(e),
                      null,
                      '  ',
                    )}`,
                  );
                const b = p(l, m, o, s, `${c}.${m}`, n);
                if (b) return b;
              }
              return null;
            });
          },
        };
        function m(e, t) {
          return e === t ? e !== 0 || 1 / e == 1 / t : e != e && t != t;
        }
        function d(e, t) {
          (this.message = e),
            (this.data = t && typeof t === 'object' ? t : {}),
            (this.stack = '');
        }
        function p(e) {
          if (process.env.NODE_ENV !== 'production')
            var t = {},
              a = 0;
          function r(r, o, s, l, u, m, p) {
            if (((l = l || f), (m = m || s), p !== n)) {
              if (c) {
                const b = new Error(
                  'Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types',
                );
                throw ((b.name = 'Invariant Violation'), b);
              }
              if (
                process.env.NODE_ENV !== 'production' &&
                typeof console !== 'undefined'
              ) {
                const v = `${l}:${s}`;
                !t[v] &&
                  a < 3 &&
                  (i(
                    `You are manually calling a React.PropTypes validation function for the \`${m}\` prop on \`${l}\`. This is deprecated and will throw in the standalone \`prop-types\` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details.`,
                  ),
                  (t[v] = !0),
                  a++);
              }
            }
            return o[s] == null
              ? r
                ? o[s] === null
                  ? new d(
                      `The ${u} \`${m}\` is marked as required in \`${l}\`, but its value is \`null\`.`,
                    )
                  : new d(
                      `The ${u} \`${m}\` is marked as required in \`${l}\`, but its value is \`undefined\`.`,
                    )
                : null
              : e(o, s, l, u, m);
          }
          const o = r.bind(null, !1);
          return (o.isRequired = r.bind(null, !0)), o;
        }
        function b(e) {
          return p(function (t, n, a, r, i, o) {
            const s = t[n];
            return g(s) !== e
              ? new d(
                  `Invalid ${r} \`${i}\` of type \`${h(
                    s,
                  )}\` supplied to \`${a}\`, expected \`${e}\`.`,
                  { expectedType: e },
                )
              : null;
          });
        }
        function v(e, t, n, a, r) {
          return new d(
            `${
              e || 'React class'
            }: ${t} type \`${n}.${a}\` is invalid; it must be a function, usually from the \`prop-types\` package, but received \`${r}\`.`,
          );
        }
        function y(e) {
          switch (typeof e) {
            case 'number':
            case 'string':
            case 'undefined':
              return !0;
            case 'boolean':
              return !e;
            case 'object':
              if (Array.isArray(e)) return e.every(y);
              if (e === null || s(e)) return !0;
              var t = (function (e) {
                const t = e && ((l && e[l]) || e['@@iterator']);
                if (typeof t === 'function') return t;
              })(e);
              if (!t) return !1;
              var n;
              var a = t.call(e);
              if (t !== e.entries) {
                for (; !(n = a.next()).done; ) if (!y(n.value)) return !1;
              } else
                for (; !(n = a.next()).done; ) {
                  const r = n.value;
                  if (r && !y(r[1])) return !1;
                }
              return !0;
            default:
              return !1;
          }
        }
        function g(e) {
          const t = typeof e;
          return Array.isArray(e)
            ? 'array'
            : e instanceof RegExp
            ? 'object'
            : (function (e, t) {
                return (
                  e === 'symbol' ||
                  (!!t &&
                    (t['@@toStringTag'] === 'Symbol' ||
                      (typeof Symbol === 'function' && t instanceof Symbol)))
                );
              })(t, e)
            ? 'symbol'
            : t;
        }
        function h(e) {
          if (e == null) return `${e}`;
          const t = g(e);
          if (t === 'object') {
            if (e instanceof Date) return 'date';
            if (e instanceof RegExp) return 'regexp';
          }
          return t;
        }
        function x(e) {
          const t = h(e);
          switch (t) {
            case 'array':
            case 'object':
              return `an ${t}`;
            case 'boolean':
            case 'date':
            case 'regexp':
              return `a ${t}`;
            default:
              return t;
          }
        }
        return (
          (d.prototype = Error.prototype),
          (u.checkPropTypes = r),
          (u.resetWarningCache = r.resetWarningCache),
          (u.PropTypes = u),
          u
        );
      }),
      sn
    );
  })()(bn.isElement, !0);
} else
  Ut.exports = (function () {
    if (fn) return ln;
    fn = 1;
    const e = dn();
    function t() {}
    function n() {}
    return (
      (n.resetWarningCache = t),
      (ln = function () {
        function a(t, n, a, r, i, o) {
          if (o !== e) {
            const s = new Error(
              'Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types',
            );
            throw ((s.name = 'Invariant Violation'), s);
          }
        }
        function r() {
          return a;
        }
        a.isRequired = a;
        const i = {
          array: a,
          bigint: a,
          bool: a,
          func: a,
          number: a,
          object: a,
          string: a,
          symbol: a,
          any: a,
          arrayOf: r,
          element: a,
          elementType: a,
          instanceOf: r,
          node: a,
          objectOf: r,
          oneOf: r,
          oneOfType: r,
          shape: r,
          exact: r,
          checkPropTypes: n,
          resetWarningCache: t,
        };
        return (i.PropTypes = i), i;
      })
    );
  })()();
function vn(e, t) {
  const n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    let a = Object.getOwnPropertySymbols(e);
    t &&
      (a = a.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, a);
  }
  return n;
}
function yn(e) {
  for (let t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? vn(Object(n), !0).forEach(function (t) {
          hn(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : vn(Object(n)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
        });
  }
  return e;
}
function gn(e) {
  return (
    (gn =
      typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol'
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              typeof Symbol === 'function' &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? 'symbol'
              : typeof e;
          }),
    gn(e)
  );
}
function hn(e, t, n) {
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
function xn(e, t) {
  if (e == null) return {};
  let n;
  let a;
  const r = (function (e, t) {
    if (e == null) return {};
    let n;
    let a;
    const r = {};
    const i = Object.keys(e);
    for (a = 0; a < i.length; a++)
      (n = i[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
    return r;
  })(e, t);
  if (Object.getOwnPropertySymbols) {
    const i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      (n = i[a]),
        t.indexOf(n) >= 0 ||
          (Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]));
  }
  return r;
}
function wn(e) {
  return (
    (function (e) {
      if (Array.isArray(e)) return kn(e);
    })(e) ||
    (function (e) {
      if (
        (typeof Symbol !== 'undefined' && e[Symbol.iterator] != null) ||
        e['@@iterator'] != null
      )
        return Array.from(e);
    })(e) ||
    (function (e, t) {
      if (!e) return;
      if (typeof e === 'string') return kn(e, t);
      let n = Object.prototype.toString.call(e).slice(8, -1);
      n === 'Object' && e.constructor && (n = e.constructor.name);
      if (n === 'Map' || n === 'Set') return Array.from(e);
      if (
        n === 'Arguments' ||
        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
      )
        return kn(e, t);
    })(e) ||
    (function () {
      throw new TypeError(
        'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
      );
    })()
  );
}
function kn(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, a = new Array(t); n < t; n++) a[n] = e[n];
  return a;
}
function On(e) {
  return (
    (t = e),
    (t -= 0) == t
      ? e
      : (e = e.replace(/[\-_\s]+(.)?/g, function (e, t) {
          return t ? t.toUpperCase() : '';
        }))
          .substr(0, 1)
          .toLowerCase() + e.substr(1)
  );
}
const En = ['style'];
function Sn(e) {
  return e
    .split(';')
    .map(function (e) {
      return e.trim();
    })
    .filter(function (e) {
      return e;
    })
    .reduce(function (e, t) {
      let n;
      const a = t.indexOf(':');
      const r = On(t.slice(0, a));
      const i = t.slice(a + 1).trim();
      return (
        r.startsWith('webkit')
          ? (e[((n = r), n.charAt(0).toUpperCase() + n.slice(1))] = i)
          : (e[r] = i),
        e
      );
    }, {});
}
let Nn = !1;
try {
  Nn = process.env.NODE_ENV === 'production';
} catch (e) {}
function An(e) {
  return e && gn(e) === 'object' && e.prefix && e.iconName && e.icon
    ? e
    : qt.icon
    ? qt.icon(e)
    : e === null
    ? null
    : e && gn(e) === 'object' && e.prefix && e.iconName
    ? e
    : Array.isArray(e) && e.length === 2
    ? { prefix: e[0], iconName: e[1] }
    : typeof e === 'string'
    ? { prefix: 'fas', iconName: e }
    : void 0;
}
function jn(e, t) {
  return (Array.isArray(t) && t.length > 0) || (!Array.isArray(t) && t)
    ? hn({}, e, t)
    : {};
}
const Pn = ['forwardedRef'];
function _n(e) {
  const t = e.forwardedRef;
  const n = xn(e, Pn);
  const a = n.icon;
  const r = n.mask;
  const i = n.symbol;
  const o = n.className;
  const s = n.title;
  const c = n.titleId;
  const l = n.maskId;
  const f = An(a);
  const u = jn(
    'classes',
    [].concat(
      wn(
        (function (e) {
          let t;
          const n = e.beat;
          const a = e.fade;
          const r = e.beatFade;
          const i = e.bounce;
          const o = e.shake;
          const s = e.flash;
          const c = e.spin;
          const l = e.spinPulse;
          const f = e.spinReverse;
          const u = e.pulse;
          const m = e.fixedWidth;
          const d = e.inverse;
          const p = e.border;
          const b = e.listItem;
          const v = e.flip;
          const y = e.size;
          const g = e.rotation;
          const h = e.pull;
          const x =
            (hn(
              (t = {
                'fa-beat': n,
                'fa-fade': a,
                'fa-beat-fade': r,
                'fa-bounce': i,
                'fa-shake': o,
                'fa-flash': s,
                'fa-spin': c,
                'fa-spin-reverse': f,
                'fa-spin-pulse': l,
                'fa-pulse': u,
                'fa-fw': m,
                'fa-inverse': d,
                'fa-border': p,
                'fa-li': b,
                'fa-flip-horizontal': v === 'horizontal' || v === 'both',
                'fa-flip-vertical': v === 'vertical' || v === 'both',
              }),
              'fa-'.concat(y),
              y != null,
            ),
            hn(t, 'fa-rotate-'.concat(g), g != null && g !== 0),
            hn(t, 'fa-pull-'.concat(h), h != null),
            hn(t, 'fa-swap-opacity', e.swapOpacity),
            t);
          return Object.keys(x)
            .map(function (e) {
              return x[e] ? e : null;
            })
            .filter(function (e) {
              return e;
            });
        })(n),
      ),
      wn(o.split(' ')),
    ),
  );
  const m = jn(
    'transform',
    typeof n.transform === 'string' ? qt.transform(n.transform) : n.transform,
  );
  const d = jn('mask', An(r));
  const p = Ht(
    f,
    yn(
      yn(yn(yn({}, u), m), d),
      {},
      { symbol: i, title: s, titleId: c, maskId: l },
    ),
  );
  if (!p)
    return (
      (function () {
        let e;
        !Nn &&
          console &&
          typeof console.error === 'function' &&
          (e = console).error.apply(e, arguments);
      })('Could not find icon', f),
      null
    );
  const b = p.abstract;
  const v = { ref: t };
  return (
    Object.keys(n).forEach(function (e) {
      _n.defaultProps.hasOwnProperty(e) || (v[e] = n[e]);
    }),
    Cn(b[0], v)
  );
}
(_n.displayName = 'FontAwesomeIcon'),
  (_n.propTypes = {
    beat: Ut.exports.bool,
    border: Ut.exports.bool,
    bounce: Ut.exports.bool,
    className: Ut.exports.string,
    fade: Ut.exports.bool,
    flash: Ut.exports.bool,
    mask: Ut.exports.oneOfType([
      Ut.exports.object,
      Ut.exports.array,
      Ut.exports.string,
    ]),
    maskId: Ut.exports.string,
    fixedWidth: Ut.exports.bool,
    inverse: Ut.exports.bool,
    flip: Ut.exports.oneOf(['horizontal', 'vertical', 'both']),
    icon: Ut.exports.oneOfType([
      Ut.exports.object,
      Ut.exports.array,
      Ut.exports.string,
    ]),
    listItem: Ut.exports.bool,
    pull: Ut.exports.oneOf(['right', 'left']),
    pulse: Ut.exports.bool,
    rotation: Ut.exports.oneOf([0, 90, 180, 270]),
    shake: Ut.exports.bool,
    size: Ut.exports.oneOf([
      '2xs',
      'xs',
      'sm',
      'lg',
      'xl',
      '2xl',
      '1x',
      '2x',
      '3x',
      '4x',
      '5x',
      '6x',
      '7x',
      '8x',
      '9x',
      '10x',
    ]),
    spin: Ut.exports.bool,
    spinPulse: Ut.exports.bool,
    spinReverse: Ut.exports.bool,
    symbol: Ut.exports.oneOfType([Ut.exports.bool, Ut.exports.string]),
    title: Ut.exports.string,
    titleId: Ut.exports.string,
    transform: Ut.exports.oneOfType([Ut.exports.string, Ut.exports.object]),
    swapOpacity: Ut.exports.bool,
  }),
  (_n.defaultProps = {
    border: !1,
    className: '',
    mask: null,
    maskId: null,
    fixedWidth: !1,
    inverse: !1,
    flip: null,
    icon: null,
    listItem: !1,
    pull: null,
    pulse: !1,
    rotation: null,
    size: null,
    spin: !1,
    beat: !1,
    fade: !1,
    beatFade: !1,
    bounce: !1,
    shake: !1,
    symbol: !1,
    title: '',
    titleId: null,
    transform: null,
    swapOpacity: !1,
  });
var Cn = function e(t, n) {
  const a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
  if (typeof n === 'string') return n;
  const r = (n.children || []).map(function (n) {
    return e(t, n);
  });
  const i = Object.keys(n.attributes || {}).reduce(
    function (e, t) {
      const a = n.attributes[t];
      switch (t) {
        case 'class':
          (e.attrs.className = a), delete n.attributes.class;
          break;
        case 'style':
          e.attrs.style = Sn(a);
          break;
        default:
          t.indexOf('aria-') === 0 || t.indexOf('data-') === 0
            ? (e.attrs[t.toLowerCase()] = a)
            : (e.attrs[On(t)] = a);
      }
      return e;
    },
    { attrs: {} },
  );
  const o = a.style;
  const s = void 0 === o ? {} : o;
  const c = xn(a, En);
  return (
    (i.attrs.style = yn(yn({}, i.attrs.style), s)),
    t.apply(void 0, [n.tag, yn(yn({}, i.attrs), c)].concat(wn(r)))
  );
}.bind(null, e.createElement);
const Tn = {
  prefix: 'fas',
  iconName: 'sort-down',
  icon: [
    320,
    512,
    ['sort-desc'],
    'f0dd',
    'M311.9 335.1l-132.4 136.8C174.1 477.3 167.1 480 160 480c-7.055 0-14.12-2.702-19.47-8.109l-132.4-136.8C-9.229 317.8 3.055 288 27.66 288h264.7C316.9 288 329.2 317.8 311.9 335.1z',
  ],
};
const In = {
  prefix: 'fas',
  iconName: 'sort-up',
  icon: [
    320,
    512,
    ['sort-asc'],
    'f0de',
    'M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224z',
  ],
};
/*!
 * Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */ function Mn(e, t, n, a, r, i) {
  let o = [];
  let s = [];
  return e && e.length !== 0
    ? ((s = (function (e, t, n) {
        let a = [];
        return (
          (a =
            t.length === 0
              ? e
              : e.filter((e) =>
                  e[n].toString().toLowerCase().includes(t.toLowerCase()),
                )),
          a
        );
      })(e, n, i)),
      (s = (function (e, t, n) {
        let a = [];
        return (
          (a =
            n === 'asc'
              ? e.sort((e, n) =>
                  typeof e[t] === 'string'
                    ? e[t].localeCompare(n[t])
                    : e[t] - n[t],
                )
              : e.sort((e, n) =>
                  typeof e[t] === 'string'
                    ? n[t].localeCompare(e[t])
                    : n[t] - e[t],
                )),
          a
        );
      })(s, i, r)),
      (o = (function (e, t, n) {
        const a = [];
        const r = (t - 1) * n;
        const i = r + n;
        for (let t = r; t < i; t++) e[t] && a.push(e[t]);
        return a;
      })(s, a, t)),
      [o, s])
    : [o, s];
}
function zn(e) {
  return e === 'asc' ? 'ascending' : 'descending';
}
function Rn(e) {
  let t = '';
  return e % 2 == 0 ? ((t = 'dark'), t) : ((t = 'light'), t);
}
function Ln(e, t, n) {
  let a = '';
  return (
    t === n && e % 2 == 0 && (a = 'darkBold'),
    t === n && e % 2 != 0 && (a = 'lightBold'),
    a
  );
}
function $n({ employees: a }) {
  const [r, i] = t({
    selectValue: 10,
    searchValue: '',
    filteredData: [],
    indexOfPages: 1,
    order: 'asc',
    column: a && a.length !== 0 ? Object.keys(a[0])[1] : '',
    employeesToRender: [],
  });
  return (
    n(() => {
      i({
        ...r,
        filteredData: Mn(
          a,
          r.selectValue,
          r.searchValue,
          r.indexOfPages,
          r.order,
          r.column,
        )[1],
        employeesToRender: Mn(
          a,
          r.selectValue,
          r.searchValue,
          r.indexOfPages,
          r.order,
          r.column,
        )[0],
      });
    }, [a, r.selectValue, r.searchValue, r.indexOfPages, r.order, r.column]),
    a && a.length !== 0
      ? e.createElement(
          'div',
          { id: 'employee-div', className: 'appContainer' },
          e.createElement(
            'div',
            {
              id: 'employee-table_wrapper',
              className: 'dataTablesWrapper no-footer',
            },
            e.createElement(
              'div',
              { className: 'dataTables_length', id: 'employee-table_length' },
              e.createElement(
                'label',
                { htmlFor: 'selectButton' },
                'Show',
                ' ',
                e.createElement(
                  'select',
                  {
                    name: 'employee-table_length',
                    'aria-controls': 'employee-table',
                    id: 'selectButton',
                    value: r.selectValue,
                    onChange: (e) =>
                      (function (e, t, n) {
                        n({
                          ...t,
                          selectValue: parseInt(e.target.value, 10),
                          indexOfPages: 1,
                        });
                      })(e, r, i),
                  },
                  e.createElement('option', { value: 10 }, '10'),
                  e.createElement('option', { value: 25 }, '25'),
                  e.createElement('option', { value: 50 }, '50'),
                  e.createElement('option', { value: 100 }, '100'),
                ),
                ' ',
                'entries',
              ),
            ),
            e.createElement(
              'div',
              { id: 'employee-table_filter', className: 'dataTables_filter' },
              e.createElement(
                'label',
                { htmlFor: 'searchInput' },
                'Search:',
                ' ',
                e.createElement('input', {
                  type: 'search',
                  id: 'searchInput',
                  value: r.searchValue,
                  onChange: (e) =>
                    (function (e, t, n) {
                      n({ ...t, searchValue: e.target.value, indexOfPages: 1 });
                    })(e, r, i),
                }),
              ),
            ),
          ),
          e.createElement(
            'table',
            {
              id: 'employee-table',
              className: 'display dataTable no-footer',
              role: 'grid',
              'aria-describedby': 'employee-table_info',
            },
            e.createElement(
              'thead',
              null,
              e.createElement(
                'tr',
                { role: 'row' },
                Object.keys(a[0]).map(
                  (t) =>
                    t[0] !== '_' &&
                    e.createElement(
                      'th',
                      {
                        key: t,
                        className: t,
                        tabIndex: 0,
                        'aria-controls': 'employee-table',
                        rowSpan: 1,
                        colSpan: 1,
                        onClick: (e) =>
                          (function (e, t, n) {
                            n({
                              ...t,
                              column: e.target.className,
                              order: t.order === 'asc' ? 'desc' : 'asc',
                            });
                          })(e, r, i),
                        'aria-sort': r.column === t ? zn(r.order) : 'none',
                        'aria-label': `${t}: activate to sort column ${
                          r.order === 'asc' ? 'descending' : 'ascending'
                        }`,
                      },
                      t,
                      r.column === t
                        ? r.order === 'asc'
                          ? e.createElement(_n, { icon: Tn })
                          : e.createElement(_n, { icon: In })
                        : null,
                    ),
                ),
              ),
            ),
            e.createElement(
              'tbody',
              null,
              r.employeesToRender.map((t, n) =>
                e.createElement(
                  'tr',
                  { role: 'row', key: t.id, className: Rn(n) },
                  Object.keys(a[0]).map(
                    (a) =>
                      a[0] !== '_' &&
                      e.createElement(
                        'td',
                        {
                          key: a,
                          className: Ln(n, r.column, a),
                          'aria-controls': 'employee-table',
                          rowSpan: 1,
                          colSpan: 1,
                          'aria-sort': r.column === a ? zn(r.order) : 'none',
                          'aria-label':
                            r.column === a ? `${a}: ${zn(r.order)}` : a,
                        },
                        t[a],
                      ),
                  ),
                ),
              ),
            ),
          ),
          e.createElement(
            'div',
            { className: 'dataTablesWrapper' },
            e.createElement(
              'div',
              {
                className: 'dataTables_info',
                id: 'employee-table_info',
                role: 'status',
                'aria-live': 'polite',
              },
              'Showing',
              ' ',
              r.employeesToRender.indexOf(r.employeesToRender[0]) +
                1 +
                r.selectValue * (r.indexOfPages - 1),
              ' ',
              'to',
              ' ',
              r.filteredData.length < r.selectValue
                ? r.employeesToRender.length
                : r.employeesToRender.length +
                    r.selectValue * (r.indexOfPages - 1),
              ' ',
              'of ',
              r.filteredData.length,
              ' entries',
            ),
            e.createElement(
              'div',
              {
                className: 'dataTables_paginate',
                id: 'employee-table_paginate',
              },
              r.indexOfPages > 1 &&
                e.createElement(
                  'button',
                  {
                    type: 'button',
                    className: 'paginate_button previous',
                    'aria-controls': 'employee-table',
                    tabIndex: -1,
                    id: 'employee-table_previous',
                    onClick: () =>
                      (function (e, t) {
                        e.indexOfPages > 1 &&
                          t({ ...e, indexOfPages: e.indexOfPages - 1 });
                      })(r, i),
                  },
                  'Previous',
                ),
              e.createElement(
                'div',
                { className: 'paginate_button current' },
                r.indexOfPages,
              ),
              r.indexOfPages < r.filteredData.length / r.selectValue &&
                e.createElement(
                  'button',
                  {
                    type: 'button',
                    className: 'paginate_button next',
                    'aria-controls': 'employee-table',
                    tabIndex: -1,
                    id: 'employee-table_next',
                    onClick: () =>
                      (function (e, t) {
                        e.indexOfPages <
                          e.filteredData.length / e.selectValue &&
                          t({ ...e, indexOfPages: e.indexOfPages + 1 });
                      })(r, i),
                  },
                  'Next',
                ),
            ),
          ),
        )
      : e.createElement(
          'div',
          { id: 'employee-div', className: 'appContainer' },
          e.createElement('h2', null, 'No data available in table'),
        )
  );
}
export { $n as DataTableReact };

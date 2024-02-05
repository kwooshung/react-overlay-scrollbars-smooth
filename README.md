<div align="center">

# React Overlay Scrollbars Smooth

This integration plugin is based on [OverlayScrollbars](https://github.com/KingSora/OverlayScrollbars/) and [smoothscroll-for-websites](https://github.com/gblazex/smoothscroll-for-websites). It conceals the native scrollbars and provides a custom-styled overlay scrollbar that retains native functionality and feel, with the added benefit of inertial scrolling.

[![GitHub License](https://img.shields.io/github/license/kwooshung/react-overlay-scrollbars-smooth?labelColor=272e3b&color=165dff)](LICENSE)
![GitHub Release Date - Published_At](https://img.shields.io/github/release-date/kwooshung/react-overlay-scrollbars-smooth?labelColor=272e3b&color=00b42A&logo=github)
![GitHub last commit](https://img.shields.io/github/last-commit/kwooshung/react-overlay-scrollbars-smooth?labelColor=272e3b&color=165dff)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/kwooshung/react-overlay-scrollbars-smooth?labelColor=272e3b&color=165dff)
![GitHub top language](https://img.shields.io/github/languages/top/kwooshung/react-overlay-scrollbars-smooth?labelColor=272e3b&color=165dff)
![GitHub pull requests](https://img.shields.io/github/issues-pr/kwooshung/react-overlay-scrollbars-smooth?labelColor=272e3b&color=165dff)
![GitHub issues](https://img.shields.io/github/issues/kwooshung/react-overlay-scrollbars-smooth?labelColor=272e3b&color=165dff)
![Github Stars](https://img.shields.io/github/stars/kwooshung/react-overlay-scrollbars-smooth?labelColor=272e3b&color=165dff)
[![NPM Version](https://img.shields.io/npm/v/@kwooshung/react-overlay-scrollbars-smooth?labelColor=272e3b&color=165dff)](https://www.npmjs.com/package/@kwooshung/react-overlay-scrollbars-smooth)
[![Npm.js Downloads/Week](https://img.shields.io/npm/dw/@kwooshung/react-overlay-scrollbars-smooth?labelColor=272e3b&labelColor=272e3b&color=165dff&logo=npm)](https://www.npmjs.com/package/@kwooshung/react-overlay-scrollbars-smooth)
[![Github CI/CD](https://github.com/kwooshung/react-overlay-scrollbars-smooth/actions/workflows/ci.yml/badge.svg)](https://github.com/kwooshung/react-overlay-scrollbars-smooth/actions/)
[![codecov](https://codecov.io/gh/kwooshung/react-overlay-scrollbars-smooth/graph/badge.svg?token=VVZJE7H0KD)](https://codecov.io/gh/kwooshung/react-overlay-scrollbars-smooth)
[![Maintainability](https://api.codeclimate.com/v1/badges/325d0881b1ca19165d35/maintainability)](https://codeclimate.com/github/kwooshung/react-overlay-scrollbars-smooth/maintainability/)
[![Gitee Repo](https://img.shields.io/badge/Gitee-react--overlay--scrollbars--smooth-165dff?logo=gitee)](https://gitee.com/kwooshung/react-overlay-scrollbars-smooth/)

<p align="center">
    <a href="README.md" style="font-weight:700;color:#165dff;text-decoration:underline;">English</a> | 
    <a href="README.zh-CN.md">中文</a>
</p>
</div>

## Why Develop It?

- I grew tired of the default browser scrollbars that look unappealing and vary across different browsers.
- They failed to maintain a consistent appearance and behavior across various browsers and lacked deep customization options.
- The default scrollbar doesn’t align with the design aesthetic of your website or application.
- When pop-ups are needed, the scrollbar appears outside the popup, causing both the page's scrollbar and the popup's scrollbar to appear simultaneously, leading to a poor user experience.
- When a Dialog/Modal pops up, it’s necessary to adjust the body’s padding-right, which requires special handling when the navigation bar is fixed, potentially causing jarring movements.
- The scrollbar feels stiff and not smooth enough when using the mouse wheel to scroll.

## Installation

### npm

```bash
npm install @kwooshung/react-overlay-scrollbars-smooth
```

### yarn

```bash
yarn add @kwooshung/react-overlay-scrollbars-smooth
```

### pnpm

```bash
pnpm add @kwooshung/react-overlay-scrollbars-smooth
```

## Usage

### Styles

In some frameworks, you can directly introduce styles in global `css` / `less` / `scss`, as shown below:

```css
@import url('@kwooshung/react-overlay-scrollbars-smooth/dist/react-overlay-scrollbars-smooth.css');
```

In some frameworks, such as `Next.js`, you may need to add the `~` character, as shown below:

```css
@import url('~@kwooshung/react-overlay-scrollbars-smooth/dist/react-overlay-scrollbars-smooth.css');
```

You can also introduce it in a global page, such as the `Layout` page in `Next.js` or the corresponding component, as shown below:

```tsx
import '@kwooshung/react-overlay-scrollbars-smooth/dist/react-overlay-scrollbars-smooth.css';
```

### components

Use the `OverlayScrollbarsSmooth` component on an element as follows:

```tsx
import { OverlayScrollbarsSmooth } from '@kwooshung/react-overlay-scrollbars-smooth';

// What is used here is to introduce secondary styles directly into the component. You can also use other methods above.
import '@kwooshung/react-overlay-scrollbars-smooth/dist/react-overlay-scrollbars-smooth.css';

function App() {
  return (
    <div style={{ height: '300px' }}>
      <OverlayScrollbarsSmooth>
        <div style={{ height: '1000px' }} />
      </OverlayScrollbarsSmooth>
    </div>
  );
}
```

If you want it to work on `Body`, you can do this:

```tsx
import { OverlayScrollbarsSmooth } from '@kwooshung/react-overlay-scrollbars-smooth';

function App() {
  // No matter where this line of code is written, as long as `tag=body`, it will act on `Body`, thus replacing the default scroll bar. Don’t forget to include styles!
  return <OverlayScrollbarsSmooth tag='body' />;
}
```

### hooks

You can directly use `useSmoothScroll` to achieve smooth scrolling, which will cause all scroll bars to become smooth. **It is recommended to call it once in a place such as global layout**, as shown below:

```tsx
import { OverlayScrollbarsSmooth, useSmoothScroll } from '@kwooshung/react-overlay-scrollbars-smooth';
import '@kwooshung/react-overlay-scrollbars-smooth/dist/react-overlay-scrollbars-smooth.css';

function App() {
  useSmoothScroll();

  return (
    <div style={{ height: '300px' }}>
      <OverlayScrollbarsSmooth>
        <div style={{ height: '1000px' }} />
      </OverlayScrollbarsSmooth>
    </div>
  );
}
```

### API

#### OverlayScrollbarsSmooth

The `OverlayScrollbarsSmooth` component supports all `OverlayScrollbars` APIs, you can view [OverlayScrollbars API](https://github.com/KingSora/OverlayScrollbars/tree/master/packages/overlayscrollbars-react#properties) here.

| Properties | Description                                                                                                                                           |
| ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| tag        | `string`, default value: `div`, if it is: `body`, acts on `Body`, thus replacing the default scroll bar. `element` equivalent to `OverlayScrollbars`; |
| className  | `string`, default value: `''`, custom class name; invalid when `tag`=`body`;                                                                          |
| options    | Equivalent to `options` of `OverlayScrollbars`, default: `{scrollbars: {theme: 'os-theme-dark'}}`                                                     |
| events     | Equivalent to `events` of `OverlayScrollbars`, default: `{}`                                                                                          |

#### useSmoothScroll

Supports all parameters of `smoothscroll-for-websites` except `excluded`, you can view it here [smoothscroll-for-websites API](https://github.com/gblazex/smoothscroll-for-websites/wiki) , the following parameters are also default values (it is slightly different from the default value of `smoothscroll-for-websites`), you can modify it according to your own needs, as shown below

```tsx
import { OverlayScrollbarsSmooth, useSmoothScroll } from '@kwooshung/react-overlay-scrollbars-smooth';
import '@kwooshung/react-overlay-scrollbars-smooth/dist/react-overlay-scrollbars-smooth.css';

function App() {
  useSmoothScroll({
    // Scrolling Core
    frameRate: 150, // [ms]
    animationTime: 1000, // [ms]
    stepSize: 100, // [px]

    // Pulse (less tweakable)
    // ratio of "tail" to "acceleration"
    pulseAlgorithm: true,
    pulseScale: 4,
    pulseNormalize: true,

    // Acceleration
    accelerationDelta: 50,
    accelerationMax: 3,

    // Keyboard Settings
    keyboardSupport: true,
    arrowScroll: 50,

    // Other
    touchpadSupport: false, // ignore touchpad by default
    fixedBackground: true
  });

  return (
    <div style={{ height: '300px' }}>
      <OverlayScrollbarsSmooth>
        <div style={{ height: '1000px' }} />
      </OverlayScrollbarsSmooth>
    </div>
  );
}
```

## Open source projects used

> Thanks to the project authors for their selfless contributions to the open source community, making our work easier! ! !

- [OverlayScrollbars：Excellent scroll bar custom component](https://github.com/KingSora/OverlayScrollbars/)
- [smoothscroll-for-websites：Excellent scroll bar smoothing script](https://github.com/gblazex/smoothscroll-for-websites)

## LICENSE

[MIT](LICENSE)

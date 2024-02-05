<div align="center">

# React Overlay Scrollbars Smooth

是一款基于 [OverlayScrollbars](https://github.com/KingSora/OverlayScrollbars/) 及 [smoothscroll-for-websites](https://github.com/gblazex/smoothscroll-for-websites) 的整合插件，它隐藏了原生滚动条，提供了自定义样式的覆盖滚动条，并保留了原生功能和感觉，同时具有滚动惯性。

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
    <a href="README.md">English</a> | 
    <a href="README.zh-CN.md" style="font-weight:700;color:#165dff;text-decoration:underline;">中文</a>
</p>
</div>

## 为什么开发它？

- 我不喜欢默认的浏览器滚动条，它们看起来很丑，而且在不同的浏览器中看起来也不一样。
- 他无法在不同的浏览器中保持一致的外观和行为，无法深度自定义；
- 默认滚动条，无法和你的网站或应用程序的设计风格保持一致；
- 当需要弹窗时，滚动条会出现在弹窗外部，这样会导致页面的滚动条和弹窗的滚动条同时出现，这样会导致用户体验不佳；
- 当(Dialog/Modal)弹窗时，需要对body进行padding-right，特别当导航条有position:fixed;的时候还需要对其进行特别处理，而且会产生晃动；
- 滚动条，在鼠标滚轮滚动时，比较生硬不够顺滑；

## 安装

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

## 使用方法

### 样式

在某些框架中直接在全局`css` / `less` / `scss`中引入样式即可，如下所示：

```css
@import url('@kwooshung/react-overlay-scrollbars-smooth/dist/react-overlay-scrollbars-smooth.css');
```

在部分框架中，如 `Next.js` 中，可能需要加入`~`符，才行，如下所示：

```css
@import url('~@kwooshung/react-overlay-scrollbars-smooth/dist/react-overlay-scrollbars-smooth.css');
```

你也可以在全局页面，如 `Next.js` 中的 `Layout` 页面 或 对应组件 中引入，如下所示：

```tsx
import '@kwooshung/react-overlay-scrollbars-smooth/dist/react-overlay-scrollbars-smooth.css';
```

### 组件

在某个元素上使用 `OverlayScrollbarsSmooth` 组件，如下所示：

```tsx
import { OverlayScrollbarsSmooth } from '@kwooshung/react-overlay-scrollbars-smooth';

// 这里使用的是直接在组件中引入次样式，也可以使用上面其他的方式
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

如果你想让它作用于 `Body` 上，可以这样做：

```tsx
import { OverlayScrollbarsSmooth } from '@kwooshung/react-overlay-scrollbars-smooth';

function App() {
  // 这行代码无论写到什么地方，只要 `tag=body`，它就会作用于 `Body` 上，从而替代默认滚动条。别忘记引入样式！
  return <OverlayScrollbarsSmooth tag='body' />;
}
```

### hooks

你可以直接使用 `useSmoothScroll` 实现平滑滚动，它将会导致所有的滚动条都变得平滑，**建议在全局布局之类的地方**调用一次即可，如下所示：

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

`OverlayScrollbarsSmooth` 组件支持所有 `OverlayScrollbars` 的 API，你可以在这里查看 [OverlayScrollbars API](https://github.com/KingSora/OverlayScrollbars/tree/master/packages/overlayscrollbars-react#properties)。

| 属性      | 说明                                                                                                                     |
| --------- | ------------------------------------------------------------------------------------------------------------------------ |
| tag       | `string`，默认值：`div`，如果是：`body`，作用于 `Body` 上，从而替代默认滚动条。等同于 `OverlayScrollbars` 的 `element`； |
| className | `string`，默认值：`''`，自定义类名；`tag`=`body` 时，无效；                                                              |
| options   | 等同于 `OverlayScrollbars` 的 `options`，默认：`{scrollbars: {theme: 'os-theme-dark'}}`                                  |
| events    | 等同于 `OverlayScrollbars` 的 `events`，默认：`{}`                                                                       |

#### useSmoothScroll

支持 `smoothscroll-for-websites` 除 `excluded` 之外的所有参数，你可以在这里查看 [smoothscroll-for-websites API](https://github.com/gblazex/smoothscroll-for-websites/wiki)，以下参数同时也是默认值（它和 `smoothscroll-for-websites` 的默认值略有区别），你可以根据自己的需求进行修改，如下所示

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

## 用到的开源项目

> 感谢项目作者为开源社区的无私贡献，让我们的工作变得更加简单！！！

- [OverlayScrollbars：优秀的滚动条自定义组件](https://github.com/KingSora/OverlayScrollbars/)
- [smoothscroll-for-websites：优秀的滚动条平滑脚本](https://github.com/gblazex/smoothscroll-for-websites)

## 许可证

[MIT](LICENSE)

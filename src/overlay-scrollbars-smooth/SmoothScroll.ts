import { ISmoothScrollbars } from './interfaces';

const defaultOptions: ISmoothScrollbars = {
  frameRate: 150,
  animationTime: 1000,
  stepSize: 100,
  pulseAlgorithm: true,
  pulseScale: 4,
  touchpadSupport: false,
  pulseNormalize: true,
  accelerationDelta: 50,
  accelerationMax: 3,
  keyboardSupport: true,
  arrowScroll: 50,
  fixedBackground: true
};

/**
 * 加载：smoothscroll-for-websites
 * @returns {any} 返回 smoothscroll-for-websites 库
 */
const loadSmoothScrollLibrary = (): any => {
  if (typeof window !== 'undefined') {
    // 这是客户端环境，可以安全地导入库
    return require('smoothscroll-for-websites');
  }

  // 在非浏览器环境下，我们返回一个假的对象，防止报错
  return {
    bind: () => {},
    destroy: () => {}
  };
};

/**
 * 绑定：平滑滚动
 * @param {ISmoothScrollbars} [options] 参数
 * @returns {void} 无返回值
 * @link https://github.com/gblazex/smoothscroll-for-websites
 */
const bind = (options: ISmoothScrollbars = defaultOptions): void => {
  const conf: any = Object.assign({}, defaultOptions, options);
  conf.pulseAlgorithm = conf.pulseAlgorithm ? 1 : 0;
  conf.pulseNormalize = conf.pulseNormalize ? 1 : 0;
  conf.fixedBackground = conf.fixedBackground ? 1 : 0;
  conf.keyboardSupport = conf.keyboardSupport ? 1 : 0;

  loadSmoothScrollLibrary().bind(conf);
};

/**
 * 解绑：平滑滚动
 * @returns {void} 无返回值
 */
const unbind = (): void => {
  loadSmoothScrollLibrary().destroy();
};

const SmoothScroll = {
  bind,
  unbind
};

export default SmoothScroll;

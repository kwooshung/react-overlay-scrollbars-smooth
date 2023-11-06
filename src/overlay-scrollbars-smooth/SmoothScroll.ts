import { ISmoothScrollbars } from './types/interface';
import SmoothScrollWebsite from 'smoothscroll-for-websites';

const defaultOptions: ISmoothScrollbars = {
  frameRate: 150,
  animationTime: 1000,
  stepSize: 100,
  pulseAlgorithm: true,
  pulseScale: 4,
  pulseNormalize: true,
  accelerationDelta: 50,
  accelerationMax: 3,
  keyboardSupport: true,
  arrowScroll: 50,
  fixedBackground: true
};

/**
 * 绑定：平滑滚动
 * @param {ISmoothScrollbars} [options] 参数
 * @returns {void}
 * @link https://github.com/gblazex/smoothscroll-for-websites
 */
const bind = (options: ISmoothScrollbars = defaultOptions): void => {
  const conf: any = Object.assign({}, defaultOptions, options);
  conf.pulseAlgorithm = conf.pulseAlgorithm ? 1 : 0;
  conf.pulseNormalize = conf.pulseNormalize ? 1 : 0;
  conf.fixedBackground = conf.fixedBackground ? 1 : 0;
  conf.keyboardSupport = conf.keyboardSupport ? 1 : 0;

  SmoothScrollWebsite.bind(conf);
};

/**
 * 解绑：平滑滚动
 * @returns {void}
 */
const unbind = () => {
  SmoothScrollWebsite.destroy();
};

const SmoothScroll = {
  bind,
  unbind
};

export default SmoothScroll;

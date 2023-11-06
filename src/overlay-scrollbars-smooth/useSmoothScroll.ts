import { useEffect } from 'react';
import { ISmoothScrollbars } from './types/interface';
import SmoothScroll from './SmoothScroll';

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

const useSmoothScroll = (options: ISmoothScrollbars = defaultOptions) => {
  useEffect(() => {
    // 绑定滚动设置
    SmoothScroll.bind(options);
  }, [options]);
};

export default useSmoothScroll;

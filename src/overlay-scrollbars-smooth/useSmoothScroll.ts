import { useEffect } from 'react';
import { ISmoothScrollbars } from './interfaces';
import SmoothScroll from './SmoothScroll';

const useSmoothScroll = (options: ISmoothScrollbars = {}) => {
  useEffect(() => {
    // 绑定滚动设置
    SmoothScroll.bind(options);
  }, [options]);
};

export default useSmoothScroll;

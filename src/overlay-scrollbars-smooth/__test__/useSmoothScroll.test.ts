import { renderHook } from '@testing-library/react-hooks';
import { vi, describe, it, expect, beforeEach } from 'vitest';
import useSmoothScroll from '../useSmoothScroll';
import SmoothScroll from '../SmoothScroll';
import { ISmoothScrollbars } from '../interfaces';

vi.mock('../SmoothScroll', () => ({
  __esModule: true, // 这表示模块是ES模块
  default: {
    // 模拟默认导出
    bind: vi.fn(), // 模拟bind方法
    unbind: vi.fn() // 模拟unbind方法
  }
}));

describe('useSmoothScroll Hook', () => {
  beforeEach(() => {
    // 在每个测试用例开始前重置模拟函数的状态
    vi.clearAllMocks();
  });

  it('应该使用默认选项调用SmoothScroll.bind', () => {
    const { rerender } = renderHook(() => useSmoothScroll());
    rerender();
    expect(SmoothScroll.bind).toHaveBeenCalledWith({});
  });

  it('当传入新的选项时，应该使用新的选项调用SmoothScroll.bind', () => {
    const customOptions: ISmoothScrollbars = {
      frameRate: 60
    };
    const { rerender } = renderHook(() => useSmoothScroll(customOptions));
    rerender();
    expect(SmoothScroll.bind).toHaveBeenCalledWith(customOptions);
  });

  it('当选项未改变时，不应再次调用SmoothScroll.bind', () => {
    const customOptions: ISmoothScrollbars = {
      frameRate: 60
    };
    const { rerender } = renderHook(() => useSmoothScroll(customOptions));
    rerender();
    // SmoothScroll.bind 应该只被调用一次
    expect(SmoothScroll.bind).toHaveBeenCalledTimes(1);
  });
});

import { describe, it, expect, vi } from 'vitest';
import SmoothScroll from '../SmoothScroll';
import SmoothScrollWebsite from 'smoothscroll-for-websites';

// 使用vi.importActual来处理默认导出和部分模拟
vi.mock('smoothscroll-for-websites', () => ({
  __esModule: true, // 这表示模块是ES模块
  default: {
    // 模拟默认导出
    bind: vi.fn(), // 模拟bind方法
    destroy: vi.fn() // 模拟destroy方法
  }
}));

describe('平滑滚动功能测试', () => {
  it('如果没有提供参数，应该用默认选项调用SmoothScrollWebsite.bind方法', () => {
    SmoothScroll.bind();
    expect(SmoothScrollWebsite.bind).toHaveBeenCalledWith({
      frameRate: 150,
      animationTime: 1000,
      stepSize: 100,
      pulseAlgorithm: 1,
      pulseScale: 4,
      pulseNormalize: 1,
      accelerationDelta: 50,
      accelerationMax: 3,
      keyboardSupport: 1,
      arrowScroll: 50,
      fixedBackground: 1
    });
  });

  it('自定义选项应与默认选项合并', () => {
    const customOptions = {
      frameRate: 60,
      stepSize: 120
    };
    SmoothScroll.bind(customOptions);
    expect(SmoothScrollWebsite.bind).toHaveBeenCalledWith({
      frameRate: 60,
      animationTime: 1000,
      stepSize: 120,
      pulseAlgorithm: 1,
      pulseScale: 4,
      pulseNormalize: 1,
      accelerationDelta: 50,
      accelerationMax: 3,
      keyboardSupport: 1,
      arrowScroll: 50,
      fixedBackground: 1
    });
  });

  it('布尔选项应正确转换为1或0', () => {
    const optionsWithFalse = {
      pulseAlgorithm: false,
      pulseNormalize: false,
      fixedBackground: false,
      keyboardSupport: false
    };
    SmoothScroll.bind(optionsWithFalse);
    expect(SmoothScrollWebsite.bind).toHaveBeenCalledWith(
      expect.objectContaining({
        pulseAlgorithm: 0,
        pulseNormalize: 0,
        fixedBackground: 0,
        keyboardSupport: 0
      })
    );
  });

  it('应该调用SmoothScrollWebsite.destroy方法来解绑', () => {
    SmoothScroll.unbind();
    expect(SmoothScrollWebsite.destroy).toHaveBeenCalled();
  });
});

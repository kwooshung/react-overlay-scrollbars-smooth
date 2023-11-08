import { describe, it, expect, vi } from 'vitest';
import { ISmoothScrollbars } from '../interfaces';
import SmoothScroll from '../SmoothScroll';
import smoothScrollLibrary from 'smoothscroll-for-websites';

// 使用 vi.spyOn 来监视 smoothscroll-for-websites 库的方法调用
const bindSpy = vi.spyOn(smoothScrollLibrary, 'bind');
// const destroySpy = vi.spyOn(smoothScrollLibrary, 'destroy');

describe('SmoothScroll 模块', () => {
  it('应当能够绑定默认选项', () => {
    SmoothScroll.bind();
    expect(bindSpy).toHaveBeenCalledOnce();
    expect(bindSpy).toHaveBeenCalledWith(
      expect.objectContaining({
        frameRate: 150,
        animationTime: 1000
      })
    );
  });

  it('应当能够接受自定义选项并覆盖默认值', () => {
    const customOptions: ISmoothScrollbars = {
      frameRate: 60,
      animationTime: 500
      // ...其他自定义选项
    };
    SmoothScroll.bind(customOptions);
    expect(bindSpy).toHaveBeenCalledWith(
      expect.objectContaining({
        frameRate: 60,
        animationTime: 500
      })
    );
  });

  it('应当在绑定时正确处理选项的布尔值', () => {
    SmoothScroll.bind({ pulseAlgorithm: false, pulseNormalize: false, fixedBackground: false, keyboardSupport: false });
    expect(bindSpy).toHaveBeenCalledWith(
      expect.objectContaining({
        pulseAlgorithm: 0,
        pulseNormalize: 0,
        fixedBackground: 0,
        keyboardSupport: 0
      })
    );
  });

  it('应当在浏览器环境下调用 bind 方法', () => {
    (global as any).window = {}; // 模拟浏览器环境
    SmoothScroll.bind();
    expect(bindSpy).toHaveBeenCalled();
    delete (global as any).window; // 清理模拟
  });

  it('应当在非浏览器环境下不抛出错误', () => {
    const t = () => {
      delete (global as any).window; // 确保非浏览器环境
      SmoothScroll.bind();
    };
    expect(t).not.toThrow();
  });
});

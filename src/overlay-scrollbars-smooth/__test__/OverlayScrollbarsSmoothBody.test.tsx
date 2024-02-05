import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, cleanup } from '@testing-library/react';
import OverlayScrollbarsSmoothBody from '../OverlayScrollbarsSmoothBody';

// 模拟`useOverlayScrollbars`钩子
const mockInitOverlayScrollbars = vi.fn();
const mockGetOverlayScrollbarsInstance = vi.fn(() => ({
  state: () => ({ destroyed: false }),
  destroy: vi.fn()
}));
vi.mock('overlayscrollbars-react', () => ({
  useOverlayScrollbars: vi.fn(() => [mockInitOverlayScrollbars, mockGetOverlayScrollbarsInstance])
}));

describe('OverlayScrollbarsSmoothBody 组件测试', () => {
  beforeEach(() => {
    // 清理mock信息
    mockInitOverlayScrollbars.mockClear();
    mockGetOverlayScrollbarsInstance.mockClear();
  });

  afterEach(() => {
    // 清理DOM
    cleanup();
  });

  it('在组件挂载时应该初始化滚动条', () => {
    render(<OverlayScrollbarsSmoothBody />);
    // 验证是否调用了初始化函数
    expect(mockInitOverlayScrollbars).toHaveBeenCalledTimes(1);
    expect(mockInitOverlayScrollbars).toHaveBeenCalledWith(document.body);
  });
});

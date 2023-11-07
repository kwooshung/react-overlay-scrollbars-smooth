import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import OverlayScrollbarsSmooth from '../OverlayScrollbarsSmooth';

// 测试OverlayScrollbarsSmooth组件
describe('OverlayScrollbarsSmooth 组件测试', () => {
  it('应该正确渲染默认标签', () => {
    const { container } = render(<OverlayScrollbarsSmooth />);
    expect(container.querySelector('[class*=ks-scrollbar]')).not.toBeNull();
  });

  it('自定义 className', () => {
    const customClassName = 'my-custom-scrollbar';
    const { container } = render(<OverlayScrollbarsSmooth className={customClassName} />);
    expect(container.firstChild).toHaveClass(customClassName);
  });
});

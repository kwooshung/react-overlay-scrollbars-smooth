import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import OverlayScrollbarsSmoothElem from '../OverlayScrollbarsSmoothElem';

// 由于 `overlayscrollbars-react` 是第三方库，我们需要mock它
// 这个mock应该反映组件的基本行为和结构
vi.mock('overlayscrollbars-react', () => ({
  OverlayScrollbarsComponent: ({ children, className }: any) => (
    <div data-testid='scrollbar' className={className}>
      {children}
    </div>
  )
}));

describe('OverlayScrollbarsSmoothElem 组件测试', () => {
  it('应该正确渲染子元素', () => {
    render(
      <OverlayScrollbarsSmoothElem>
        <div>内容</div>
      </OverlayScrollbarsSmoothElem>
    );
    expect(screen.getByText('内容')).toBeInTheDocument();
  });

  it('应该传递 className 给子组件', () => {
    const className = 'test-class';
    render(
      <OverlayScrollbarsSmoothElem className={className}>
        <div>内容</div>
      </OverlayScrollbarsSmoothElem>
    );
    expect(screen.getByTestId('scrollbar')).toHaveClass(className);
  });
});

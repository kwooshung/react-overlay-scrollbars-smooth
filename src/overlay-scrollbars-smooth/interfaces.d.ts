import { ElementType, ReactNode } from 'react';
import type { PartialOptions, EventListeners } from 'overlayscrollbars';

/**
 * 接口：Scrollbars平滑属性
 */
export interface ISmoothScrollbars {
  /**
   * 滚动动画的帧率，通常以每秒帧数 (FPS) 表示。
   */
  frameRate?: number;
  /**
   * 滚动动画的总时间，通常以毫秒表示。
   */
  animationTime?: number;
  /**
   * 每次滚动的步长，表示鼠标滚轮滚动一次时页面滚动的像素数。
   */
  stepSize?: number;
  /**
   * 是否使用脉冲算法来计算滚动量。
   */
  pulseAlgorithm?: boolean;
  /**
   * 调整脉冲算法的强度。
   */
  pulseScale?: number;
  /**
   * 触摸支持
   */
  touchpadSupport?: boolean;
  /**
   * 用于归一化脉冲的值。
   */
  pulseNormalize?: boolean;
  /**
   * 连续滚动时，每次滚动之间的时间差，用于计算加速度。
   */
  accelerationDelta?: number;
  /**
   * 加速度的最大值
   */
  accelerationMax?: number;
  /**
   * 是否支持键盘滚动。
   */
  keyboardSupport?: boolean;
  /**
   * 使用箭头键时每次滚动的像素数。
   */
  arrowScroll?: number;
  /**
   * 滚动时是否固定背景
   */
  fixedBackground?: boolean;
}

/**
 * 组件Props属性：
 */
export interface IOverlayScrollbarsSmoothProps {
  /**
   * 标签名，默认 div，换句话说就是说用什么标签渲染
   */
  tag?: ElementType;
  /**
   * 类名
   */
  className?: string;
  /**
   * 设置
   */
  options?: PartialOptions | false | null;
  /**
   * 事件
   */
  events?: EventListeners | false | null;
  /**
   * 子元素
   */
  children?: ReactNode;
}

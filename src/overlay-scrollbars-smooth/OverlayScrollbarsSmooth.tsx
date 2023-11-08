import styles from './index.module.less';
import classnames from 'classnames';
import { IOverlayScrollbarsSmoothProps } from './interfaces';
import OverlayScrollbarsSmoothBody from './OverlayScrollbarsSmoothBody';
import OverlayScrollbarsSmoothElem from './OverlayScrollbarsSmoothElem';

/**
 * 组件Props属性： 默认值
 */
const defaultProps: IOverlayScrollbarsSmoothProps = {
  tag: 'div',
  options: {
    scrollbars: {
      theme: 'os-theme-dark'
    }
  }
};

/**
 * 组件：滚动条
 */
const OverlayScrollbarsSmooth = (props: IOverlayScrollbarsSmoothProps) => {
  props = { ...defaultProps, ...props };
  const children = props.children;

  if (props.tag == 'body') {
    return (
      <OverlayScrollbarsSmoothBody className={classnames(styles.scrollbar, props.className)} options={props.options} events={props.events}>
        {children}
      </OverlayScrollbarsSmoothBody>
    );
  }

  return (
    <OverlayScrollbarsSmoothElem tag={props.tag} className={classnames(styles['ks-scrollbar'], props.className)} options={props.options} events={props.events}>
      {children}
    </OverlayScrollbarsSmoothElem>
  );
};

export default OverlayScrollbarsSmooth;

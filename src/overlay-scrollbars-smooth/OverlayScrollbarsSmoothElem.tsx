import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';
import { IOverlayScrollbarsSmoothProps } from './interfaces';

/**
 * 组件：滚动条 > Elem
 */
const OverlayScrollbarsSmoothElem = ({ children, ...props }: IOverlayScrollbarsSmoothProps) => {
  return (
    <OverlayScrollbarsComponent className={props.className} element={props.tag as any} options={props.options} events={props.events} defer>
      {children}
    </OverlayScrollbarsComponent>
  );
};

export default OverlayScrollbarsSmoothElem;

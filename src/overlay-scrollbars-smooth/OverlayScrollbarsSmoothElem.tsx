import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';
import { IOverlayScrollbarsSmoothProps } from './types/interface';

/**
 * 组件：滚动条 > Elem
 */
const OverlayScrollbarsSmoothElem = ({ children, ...props }: IOverlayScrollbarsSmoothProps) => {
  return (
    <OverlayScrollbarsComponent className={props.className} element={props.tag} options={props.options} events={props.events} defer>
      {children}
    </OverlayScrollbarsComponent>
  );
};

export default OverlayScrollbarsSmoothElem;

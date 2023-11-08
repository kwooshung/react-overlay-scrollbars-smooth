import { useOverlayScrollbars } from 'overlayscrollbars-react';
import { IOverlayScrollbarsSmoothProps } from './interfaces';
import { useEffect } from 'react';

/**
 * 组件：滚动条 > Body
 */
const OverlayScrollbarsSmoothBody = ({ children, ...props }: IOverlayScrollbarsSmoothProps) => {
  const [initOverlayScrollbars, getOverlayScrollbarsInstance] = useOverlayScrollbars({
    defer: true,
    events: props.events,
    options: props.options
  });

  useEffect(() => {
    initOverlayScrollbars(document.body);

    return () => {
      const OverlayScrollbarsInstance = getOverlayScrollbarsInstance();

      if (OverlayScrollbarsInstance && !OverlayScrollbarsInstance.state().destroyed) {
        OverlayScrollbarsInstance.destroy();
      }
    };
  }, [getOverlayScrollbarsInstance, initOverlayScrollbars]);

  return children;
};

export default OverlayScrollbarsSmoothBody;

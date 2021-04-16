import * as React from 'react';
import cxs, { CSSObject, CSSProperties } from 'cxs';
import { PropsWithChildren, useContext } from 'react';
import { KeyboardModeContext } from './KeyboardModeProvider';

export interface BoxProps extends CSSProperties {
  elProps?: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> | false;
  as?: keyof JSX.IntrinsicElements;
  hover?: CSSObject;
  active?: CSSObject;
  focus?: CSSObject;
  focusWithin?: CSSObject;
  css?: cxs.CSSObject;
}

export const Box = React.forwardRef<HTMLElement, PropsWithChildren<BoxProps>>((props, ref) => {
  const { keyboardMode } = useContext(KeyboardModeContext);
  const { css, hover, active, focus, focusWithin, as, elProps, children, ...cssProps } = props;

  const Element = as ?? ('div' as any);

  return (
    <Element
      {...props.elProps}
      className={[
        cxs({
          ...cssProps,
          ...css,
          ...(hover ? { ':hover': hover } : {}),
          ...(active ? { ':active': active } : {}),
          ...(focus ? { ':focus': focus } : {}),
          ...((!focus && hover && keyboardMode) ? { ':focus': hover } : {}),
          ...(focusWithin ? { ':focus-within': focusWithin } : {}),
        }),
        elProps ? elProps.className || '' : '',
      ].join(' ')}
      ref={ref}
    >
      {children}
    </Element>
  );
});
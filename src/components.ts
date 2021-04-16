import { composeBox } from './composeBox';

export const Flex = composeBox({ display: 'flex' });
export const Anchor = composeBox({ as: 'a' });
export const Paragraph = composeBox({ as: 'p' });

export const RightAligned = composeBox({ textAlign: 'right' });
export const LeftAligned = composeBox({ textAlign: 'left' });
export const CenterAligned = composeBox({ textAlign: 'center' });

export const VisuallyHidden = composeBox({
  height: '0',
  position: 'relative',
  css: {
    '> *': {
      position: 'absolute',
      top: '0',
      left: '0',
      zIndex: -1,
      opacity: 0,
    }
  }
});

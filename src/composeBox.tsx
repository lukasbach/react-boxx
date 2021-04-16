import { Box, BoxProps } from './Box';
import React, { PropsWithChildren } from 'react';

export const composeBox = (props: BoxProps): React.FC<PropsWithChildren<BoxProps>> => {
  return (itemProps: PropsWithChildren<BoxProps>) => (
    <Box {...props} {...itemProps} />
  );
};

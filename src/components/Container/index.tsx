import React, { memo, ReactNode } from 'react';

import { Container as StyledContainer } from './styles';
import { ContainerProps } from '@chakra-ui/react';

interface IProps extends ContainerProps {
  children: ReactNode;
}

function Container(props: IProps) {
  const { children } = props;
  return <StyledContainer {...props}>{children}</StyledContainer>;
}

export default memo<IProps>(Container);

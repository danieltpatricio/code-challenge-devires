import React, { ReactNode } from 'react';

import { Container as ContainerComponent } from './styles';

interface IProps {
  children: ReactNode;
}

function Container(props: IProps) {
  const { children } = props;
  return <ContainerComponent>{children}</ContainerComponent>;
}

export default Container;

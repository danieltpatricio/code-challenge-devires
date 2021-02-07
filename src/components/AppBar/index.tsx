import React, { memo } from 'react';

import { StyledHeading } from './styles';

interface IProps {
  title: string;
}

function AppBar(props: IProps) {
  const { title } = props;
  return <StyledHeading>{title}</StyledHeading>;
}

export default memo<IProps>(AppBar);

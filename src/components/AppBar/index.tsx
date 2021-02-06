import React from 'react';

import { Container } from './styles';

interface IProps {
  title: string;
}

function AppBar(props: IProps) {
  const { title } = props;
  return (
    <Container>
      <h3>{title}</h3>
    </Container>
  );
}

export default AppBar;

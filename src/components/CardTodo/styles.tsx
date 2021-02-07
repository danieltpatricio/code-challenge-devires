import styled from 'styled-components';
import { Box } from '@chakra-ui/react';

export const StyledContainer = styled(Box)`
  border-width: 1px;
  padding: 10px;
  border-radius: 0.5rem;
`;

export const StyledHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: flex-end;
`;

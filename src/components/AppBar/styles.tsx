import styled, { DefaultTheme, ThemedStyledProps } from 'styled-components';
import { Heading, HeadingProps } from '@chakra-ui/react';

type Props = ThemedStyledProps<HeadingProps, DefaultTheme>;

export const StyledHeading = styled(Heading)`
  color: ${(props: Props) => props.theme.colors.primary};
  display: flex;
  justify-content: center;
  align-content: center;
  min-height: 56px;
  @media (min-width: 0px) and (orientation: landscape) : {
    min-height: 48px;
  }
  @media (min-width: 600px) : {
    min-height: 64px;
  }
`;

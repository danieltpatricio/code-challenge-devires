import styled, { DefaultTheme, ThemedStyledProps } from 'styled-components';

type Props = ThemedStyledProps<unknown, DefaultTheme>;

export const Container = styled.div`
  color: ${(props: Props) => props.theme.colors.primary};
  display: flex;
  justify-content: center;
  min-height: 56px;
  @media (min-width: 0px) and (orientation: landscape) : {
    min-height: 48px;
  }
  @media (min-width: 600px) : {
    min-height: 64px;
  }
`;
// height: ${(props: Props)=> props.theme.mixins.toolbar}

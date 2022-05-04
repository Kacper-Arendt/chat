import styled, { css } from "styled-components";

import { ColorType } from "utils/theme/themeDefault";

interface Props {
  color?: ColorType;
  size: number;
}

const Wrapper = styled.div<Props>`
  width: ${({ size }) => `${size}rem`};
  height: ${({ size }) => `${size}rem`};
  border: solid ${({ theme, color }) =>
    color && theme.transparentize({ amount: 0.5, color: theme[color] })};
  border-radius: 50%;
  border-top-color: ${({ color, theme }) => color && theme[color]};;
  animation: spin .6s linear infinite;
  -webkit-animation: spin .6s linear infinite;
  ${({ size }) => {
    switch (true) {
      case size < 3:
        return css`
          border-width: 0.2rem;
        `;
      case size < 5:
        return css`
          border-width: 0.45rem;
        `;
      case size < 10:
        return css`
          border-width: 0.65rem;
        `;
      default:
        return css`
          border-width: 0.2rem;
        `;
    }
  }};
  @keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
  @-webkit-keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
`;

export const Spinner = ({ size, color = "base1" }: Props) => (
  <Wrapper color={color} size={size} />
);

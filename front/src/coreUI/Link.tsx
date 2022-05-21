import { Link as RouterLink } from "react-router-dom";
import { ReactNode } from "react";

import { ColorsKeys } from "utils/theme/themeDefault";
import styled, { css } from "styled-components";

interface LinkProps {
  path: string;
  children: ReactNode;
  color?: ColorsKeys;
  external?: boolean;
}

const StyledLink = styled(RouterLink)`
  display: flex;
  align-items: center;
  column-gap: 0.25rem;
  text-decoration: none;
  color: ${({ theme }) => theme.black};

  ${({ theme, color }) =>
    color &&
    theme[color] &&
    css`
      color: ${theme[color]};
    `}
  svg {
    font-size: 1.2em;
  }
`;

export const Link = ({ path, color, children, external }: LinkProps) => {
  if (external) {
    return (
      <StyledLink
        as="a"
        color={color}
        href={path}
        target="_blank"
        rel="noreferrer"
      >
        {children}
      </StyledLink>
    );
  }
  return (
    <StyledLink color={color} to={path}>
      {children}
    </StyledLink>
  );
};

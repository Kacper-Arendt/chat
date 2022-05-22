import { Link as RouterLink } from "react-router-dom";
import { ReactNode } from "react";

import { ColorsKeys } from "utils/theme/themeDefault";
import styled, { css } from "styled-components";

interface LinkProps {
  path: string;
  children: ReactNode;
  color?: ColorsKeys;
  external?: boolean;
  size?: number;
  title?: string;
}

const StyledLink = styled(RouterLink)<{ size: number }>`
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
    ${({ size }) =>
      size &&
      css`
        font-size: ${size}rem;
      `}
  }
`;

export const Link = ({
  path,
  color,
  children,
  external,
  size = 1.2,
  title,
}: LinkProps) => {
  if (external) {
    return (
      <StyledLink
        as="a"
        color={color}
        href={path}
        target="_blank"
        rel="noreferrer"
        size={size}
        title={title}
        aria-label={title}
      >
        {children}
      </StyledLink>
    );
  }
  return (
    <StyledLink
      color={color}
      to={path}
      size={size}
      title={title}
      aria-label={title}
    >
      {children}
    </StyledLink>
  );
};

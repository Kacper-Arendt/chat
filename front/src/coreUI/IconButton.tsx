import { ColorsKeys } from "utils/theme/themeDefault";
import { ReactNode } from "react";
import styled, { css } from "styled-components";

interface IconButtonProps {
  color?: ColorsKeys;
  children: ReactNode;
  onClick: () => void;
  title: string;
  size?: number;
  disabled?: boolean;
  type?: "submit" | "reset" | "button";
}

const StyledIconButton = styled.button<IconButtonProps>`
  ${({ size }) =>
    size &&
    css`
      font-size: ${size}rem;
    `}

  ${({ theme, color }) =>
    color &&
    theme[color] &&
    css`
      color: ${theme[color]};
    `}
`;

export const IconButton = ({
  children,
  title,
  onClick,
  type = "button",
  size,
  color,
}: IconButtonProps) => {
  return (
    <StyledIconButton
      type={type}
      onClick={onClick}
      aria-label={title}
      title={title}
      size={size}
      color={color}
    >
      {children}
    </StyledIconButton>
  );
};

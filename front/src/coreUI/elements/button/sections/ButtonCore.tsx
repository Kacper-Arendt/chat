import { ReactNode } from "react";
import styled, { css } from "styled-components";

import { Spinner } from "coreUI/elements/loader/Spinner";
import { ColorsKeys } from "utils/theme/themeDefault";

interface StyledButtonProps {
  color?: ColorsKeys;
  textColor?: ColorsKeys;
  border?: boolean;
  radius?: 1 | 2 | 3;
  shadow?: boolean;
  width?: string;
  children: ReactNode;
  fontWeight?: "light" | "regular" | "semiBold" | "bold";
  onClick: () => void;
  disabled?: boolean;
  type?: "submit" | "reset" | "button";
}

export interface ButtonProps extends StyledButtonProps {
  loading?: boolean;
}

const StyledButton = styled.button<ButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 0.5rem;
  font-size: 1rem;
  width: ${({ width }) => width};
  padding: 0.75rem 1rem;
  border: 0;

  font-weight: ${({ theme, fontWeight }) =>
    fontWeight && theme.fontWeight[fontWeight]};

  ${({ theme, textColor }) =>
    textColor &&
    theme[textColor] &&
    css`
      color: ${theme[textColor]};
    `}
  ${({ theme, color }) =>
    color && theme[color]
      ? css`
          background-color: ${theme[color]};
        `
      : css`
          background-color: transparent;
        `}
  ${({ theme, border, color }) =>
    border
      ? css`
          border: 1px solid
            ${color && theme[color]
              ? theme.darken({ color: theme[color] })
              : theme.grey300};
        `
      : css`
          border: 1px solid ${(color && theme[color]) ?? "transparent"};
        `}
  ${({ theme, radius }) =>
    radius &&
    theme?.radius[radius] &&
    css`
      border-radius: ${theme?.radius[radius]};
    `}
  ${({ theme, shadow, color }) =>
    shadow &&
    css`
      ${() =>
        color && theme[color]
          ? theme.shadow({ color: theme[color] })
          : theme.shadow({})};
    `};
`;

export const ButtonCore = ({
  children,
  loading,
  disabled,
  onClick,
  color,
  shadow,
  textColor,
  border,
  radius,
  fontWeight = "regular",
  width = "100%",
  type = "button",
}: ButtonProps) => {
  return (
    <StyledButton
      onClick={onClick}
      type={type}
      disabled={disabled}
      color={color}
      width={width}
      shadow={shadow}
      textColor={textColor}
      border={border}
      radius={radius}
      fontWeight={fontWeight}
    >
      {children}
      {loading && <Spinner size={1.25} />}
    </StyledButton>
  );
};

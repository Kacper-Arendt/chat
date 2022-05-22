import styled, { css } from "styled-components";
import { ChangeEvent, InputHTMLAttributes } from "react";

import { ColorsKeys } from "utils/theme/themeDefault";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  title?: string;
  type?: string;
  error?: string;
  value?: string;
  bgColor?: ColorsKeys;
  placeholder?: string;
}

const Label = styled.label`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  font-size: 0.9rem;

  p {
    width: 100%;
    font-size: 0.8rem;
    color: ${({ theme }) => theme.danger};
  }
`;

const StyledInput = styled.input<{ bgColor: string }>`
  width: 100%;
  padding: 0.85rem;
  font-size: 1rem;
  border: 1px solid ${({ theme }) => theme.grey100};
  border-radius: ${({ theme }) => theme.radius[1]};

  ${({ theme, bgColor }) =>
    bgColor &&
    theme[bgColor] &&
    css`
      background-color: ${theme[bgColor]};
    `};
`;

export const Input = ({
  title,
  type = "text",
  bgColor = "transparent",
  error,
  onChange,
  name,
  value,
  placeholder,
  ...rest
}: InputProps) => (
  <Label>
    {title && title}
    <StyledInput
      type={type}
      bgColor={bgColor}
      onChange={onChange}
      name={name}
      value={value}
      placeholder={placeholder}
      {...rest}
    />
    {error && <p>{error}</p>}
  </Label>
);

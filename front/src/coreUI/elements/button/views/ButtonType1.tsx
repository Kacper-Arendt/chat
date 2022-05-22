import { BasicButtonProps, ButtonCore } from "coreUI/elements/button";

export interface ButtonType1Props extends BasicButtonProps {
  border?: boolean;
}

export const ButtonType1 = ({
  onClick,
  children,
  disabled,
  type = "button",
  width = "auto",
  border,
  loading,
}: ButtonType1Props) => (
  <ButtonCore
    type={type}
    disabled={disabled}
    width={width}
    textColor="white"
    border={border}
    onClick={onClick}
    loading={loading}
    color="success"
    radius={1}
  >
    {children}
  </ButtonCore>
);

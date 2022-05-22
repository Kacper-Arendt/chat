import { ReactNode } from "react";

export interface BasicButtonProps {
  children: ReactNode;
  onClick: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  width?: string;
  loading?: boolean;
}

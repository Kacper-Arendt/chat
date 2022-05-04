import { darken, lighten, transparentize } from "polished";
import { DefaultTheme } from "styled-components";

interface Polished {
  amount?: number;
  color?: string;
}

const colors = {
  base1: "#282444",
  base2: "#e37240",
  base3: "#e340c8",
  accent1: "#4840e3",
  accent2: "#40e34e",
  accent3: "#e39c40",

  danger: "#ff000a",
  warning: "#ffc107",
  success: "#409613",
  success100: "#155724",

  transparent: "transparent",
  white: "#fff",
  grey100: "hsl(0, 0%, 96%)",
  grey200: "hsl(0, 0%, 90%)",
  grey300: "hsl(0, 0%, 80%)",
  grey400: "hsl(0, 0%, 70%)",
  grey500: "hsl(0, 0%, 60%)",
  grey600: "hsl(0, 0%, 50%)",
  grey700: "hsl(0, 0%, 40%)",
  grey800: "hsl(0, 0%, 30%)",
  grey900: "hsl(0, 0%, 20%)",
  grey1000: "hsl(0, 0%, 10%)",
  black: "hsl(0, 0%, 0%)",
};

const ThemeDefault: DefaultTheme = () => {
  const theme = {
    ...colors,

    font: 'system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
    fontFeatured: '"Roboto Condensed", sans-serif',
    fontMarker: "Permanent Marker",

    fontWeight: {
      light: 300,
      regular: 400,
      semiBold: 500,
      bold: 700,
    },

    radius: {
      1: "0.25rem",
      2: "0.5rem",
      3: "1rem",
    },

    breakpoints: {
      xs: "0",
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      xxl: "1400px",
    },

    transparentize: ({ amount = 0.7, color }: Polished) =>
      transparentize(amount ?? 0.7, color ?? theme.base1),
    lighten: ({ amount = 0.7, color }: Polished) =>
      lighten(amount ?? 0.7, color ?? theme.base1),
    darken: ({ amount, color }: Polished) =>
      darken(amount ?? 0.2, color ?? theme.base1),
    shadow: ({ color }: { color?: string }) => `
			box-shadow: 0px 4px 16px ${theme.transparentize({ color, amount: 0.75 })};
			-webkit-box-shadow: 0px 4px 16px ${theme.transparentize({
        color,
        amount: 0.75,
      })};
		`,
  };
  return theme;
};

export type ThemeType = typeof ThemeDefault;

export type ColorType = keyof typeof colors;

export default ThemeDefault;

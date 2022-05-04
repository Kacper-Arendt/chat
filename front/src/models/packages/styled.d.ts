import "styled-components";
import { ThemeType } from "utilis/theme/themeDefault";

declare module "styled-components" {
  export interface DefaultTheme extends ThemeType {}
}

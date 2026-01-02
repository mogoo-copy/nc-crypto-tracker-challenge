import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    bgColor: string;
    cardColor: string;
    textColor: string;
    subTextColor: string;
    accentColor: string;
  }
}

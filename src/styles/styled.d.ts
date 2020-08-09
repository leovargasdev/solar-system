import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      white: string;
      black: string;
      tint: string;
      tabIconDefault: string;
      tabIconSelected: string;

      gradientButton: [string, string];
      gradientBlue: string;
      gradientPink: string;
      gradientCyan: string;
      gradientYellow: string;
    };

    fonts: {
      regular: string;
      bold: string;
    };
  }
}
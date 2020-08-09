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
      gradientBlue: [string, string];
      gradientPink: [string, string];
      gradientCyan: [string, string];
      gradientYellow: [string, string];
    };

    fonts: {
      regular: string;
      bold: string;
    };
  }
}
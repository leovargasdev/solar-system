import { DefaultTheme } from 'styled-components';

const tintColorDark = '#fff';

const defaultTheme: DefaultTheme = {
  title: 'default',

  colors: {
    white: '#fff',
    black: '#151515',
    tint: tintColorDark,
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorDark,

    gradientButton: ['#EF5F53', '#FA8F70'],
    gradientBlue: ['#5935FF', '#48408E'],
    gradientPink: ['#FF6CD9', '#FF2184'],
    gradientCyan: ['#01D4E4', '#009DE0'],
    gradientYellow: ['#F9C270', '#FFAA2B'],
  },

  fonts: {
    regular: 'Roboto-Regular',
    bold: 'Roboto-Bold',
  },
};

export default defaultTheme;
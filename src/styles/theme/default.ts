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
    gradientBlue: 'linear-gradient(#5935FF 0%, #48408E 100%)',
    gradientPink: 'linear-gradient(#FF6CD9 0%, #FF2184 100%)',
    gradientCyan: 'linear-gradient(#01D4E4 0%, #009DE0 100%)',
    gradientYellow: 'linear-gradient(#F9C270 0%, #FFAA2B 100%)',
  },

  fonts: {
    regular: 'Roboto-Regular',
    bold: 'Roboto-Bold',
  },
};

export default defaultTheme;
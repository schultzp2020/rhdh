import {
  createUnifiedTheme,
  genPageTheme,
  lightTheme,
  shapes,
} from '@backstage/theme';

const redhatFont = `@font-face {
  font-family: 'Red Hat Font';
  font-style: normal;
  font-display: swap;
  font-weight: 400;
  src: url(/fonts/RedHatText-Regular.woff2) format('woff2'),
    url(/fonts/RedHatText-Regular.otf) format('opentype'),
    url(/fonts/RedHatText-Regular.ttf) format('truetype');
}`;

export const customTheme = createUnifiedTheme({
  fontFamily: '"Red Hat Font", Arial',
  palette: {
    ...lightTheme.palette,
    navigation: {
      background: '#222427',
      indicator: '#be0000',
      color: '#ffffff',
      selectedColor: '#ffffff',
      navItem: {
        hoverBackground: '#4f5255',
      },
    },
  },
  defaultPageTheme: 'home',
  pageTheme: {
    home: genPageTheme({ colors: ['#be0000', '#f56d6d'], shape: shapes.wave }),
    app: genPageTheme({ colors: ['#be0000', '#f56d6d'], shape: shapes.wave }),
    apis: genPageTheme({ colors: ['#be0000', '#f56d6d'], shape: shapes.wave }),
    documentation: genPageTheme({
      colors: ['#be0000', '#f56d6d'],
      shape: shapes.wave,
    }),
    tool: genPageTheme({ colors: ['#be0000', '#f56d6d'], shape: shapes.round }),
    other: genPageTheme({ colors: ['#be0000', '#f56d6d'], shape: shapes.wave }),
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: redhatFont,
    },
  },
});

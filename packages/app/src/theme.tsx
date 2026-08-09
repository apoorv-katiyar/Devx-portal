import { createUnifiedTheme, palettes, genPageTheme, shapes } from '@backstage/theme';

const brand = '#6366F1'; // indigo-500
const brandLight = '#818CF8'; // indigo-400, for contrast on dark surfaces

const fontFamily =
  '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif';

export const devxLightTheme = createUnifiedTheme({
  fontFamily,
  palette: {
    ...palettes.light,
    primary: { main: brand },
    navigation: {
      background: '#0F172A',
      indicator: brand,
      color: '#94A3B8',
      selectedColor: '#F8FAFC',
      navItem: { hoverBackground: '#1E293B' },
      submenu: { background: '#1E293B' },
    },
  },
  defaultPageTheme: 'home',
  pageTheme: {
    home: genPageTheme({ colors: [brand, brandLight], shape: shapes.wave }),
  },
});

export const devxDarkTheme = createUnifiedTheme({
  fontFamily,
  palette: {
    ...palettes.dark,
    primary: { main: brandLight },
    navigation: {
      background: '#05070C',
      indicator: brandLight,
      color: '#94A3B8',
      selectedColor: '#F8FAFC',
      navItem: { hoverBackground: '#151B26' },
      submenu: { background: '#151B26' },
    },
  },
  defaultPageTheme: 'home',
  pageTheme: {
    home: genPageTheme({ colors: [brandLight, brand], shape: shapes.wave }),
  },
});

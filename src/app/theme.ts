import { createMuiTheme } from '@material-ui/core';
import { deepOrange, purple } from '@material-ui/core/colors';

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#543864',
      light: '#816392',
      dark: '#2a1139',
    },
    secondary: deepOrange,
    type: 'dark',
    background: {
      default: '#352F44',
      paper: '#2A2438',
    },
  },
});

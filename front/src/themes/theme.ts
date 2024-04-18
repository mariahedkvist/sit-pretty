import { createTheme } from '@mui/material/styles';
import './fonts.scss';

const theme = createTheme({
  typography: {
    fontFamily: ['Montserrat, Arial, sans-serif'].join(''),
  },
  palette: {
    background: {
      default: '#eab676',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
    @font-face {
        font-family: 'Montserrat';
        font-style: normal;
        font-display: swap;
        font-weight: 400;
        `,
    },
  },
});

export default theme;

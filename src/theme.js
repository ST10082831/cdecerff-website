import { createTheme } from '@mui/material/styles';

export const colors = {
  primary: '#a04722',};

const theme = createTheme({
  palette: {
    primary: {
      main: '#a04722', // Orange
    },
    secondary: {
      main: '#ffffff', // White 
    },
    background: {
      default: '#f5f5f5', // Light gray 
    },
    text: {
      primary: '#333333', // Dark text color
      secondary: '#666666', // Secondary text color
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif', // Font
  },
});

export default theme;
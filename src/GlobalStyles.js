import React from 'react';
import { GlobalStyles as MuiGlobalStyles } from '@mui/material';

const GlobalStyles = () => {
  return (
    <MuiGlobalStyles
      styles={{
        body: {
          margin: 0,
          padding: 0,
          backgroundColor: '#f5f5f5',
        },
      }}
    />
  );
};

export default GlobalStyles;
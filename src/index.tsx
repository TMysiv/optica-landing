import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme.matherial';
import { HelmetProvider } from 'react-helmet-async'; // 👈 ДОДАТИ: npm install react-helmet-async

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <HelmetProvider>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </HelmetProvider>
);

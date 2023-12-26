// main.jsx
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

import GlobalStyles from './styles/global';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';



const root = document.getElementById('root');
const appRoot = createRoot(root);

appRoot.render(

  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

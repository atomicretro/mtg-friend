import React from 'react';
import ReactDOM from 'react-dom/client';
import { createGlobalStyle } from 'styled-components';

import { ConfigProvider } from './providers/ConfigProvider';

import { Main } from './components/Main';

const GlobalStyles = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
  }
`;

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <ConfigProvider>
    <GlobalStyles />
    <Main />
  </ConfigProvider>
);

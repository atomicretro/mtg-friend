import React from 'react';
import ReactDOM from 'react-dom/client';
import { createGlobalStyle } from 'styled-components';

import { ConfigProvider } from 'src/providers/ConfigProvider';
import { ModalProvider } from 'src/providers/ModalProvider';
import { PlayerProvider } from 'src/providers/PlayerProvider';

import { Main } from 'src/components/Main';

const GlobalStyles = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
  }
`;

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <ConfigProvider>
    <ModalProvider>
      <PlayerProvider>
        <GlobalStyles />
        <Main />
      </PlayerProvider>
    </ModalProvider>
  </ConfigProvider>
);

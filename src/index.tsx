import React from 'react';
import ReactDOM from 'react-dom/client';

import { ConfigProvider } from './providers/ConfigProvider';

import { Main } from './components/Main';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <ConfigProvider>
    <Main />
  </ConfigProvider>
);

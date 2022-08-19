import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

import App from './App';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import FontStyles from './assets/fonts/fonts.js';

const GlobalStyles = createGlobalStyle`
  body {
    font-family: Gilroy, Arial, Helvetica, sans-serif;
    color: #0b1332;
    }
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
  a {
    text-decoration: none;
    color: #000;
  }
`;

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
      <GlobalStyles />
      <FontStyles />
    </BrowserRouter>
  </Provider>,
);

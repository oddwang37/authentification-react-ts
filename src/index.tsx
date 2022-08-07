import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

import App from './App';
import { SignUp, MyProfile } from './pages';
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
  }
`;

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/profile" element={<MyProfile />} />
    </Routes>
    <GlobalStyles />
    <FontStyles />
  </BrowserRouter>,
);

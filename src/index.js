import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './routes/routes';
import { createGlobalStyle } from 'styled-components'


const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle/>
    <Router />
  </React.StrictMode>
);


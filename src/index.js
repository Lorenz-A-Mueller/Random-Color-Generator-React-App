import './index.css';
/** @jsxImportSource @emotion/react */
import { css, Global } from '@emotion/react';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Global
      styles={css`
        body {
          font-family: Consolas, monaco, monospace;
        }
      `}
    />
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

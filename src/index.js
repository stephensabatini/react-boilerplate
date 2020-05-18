/**
 * React Boilerplate
 *
 * @author Stephen Sabatini <info@stephensabatini.com>
 * @version 0.1.0
 */
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './partials/AppRouter';
import './assets/scss/index.scss';

render(
  <React.StrictMode>
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

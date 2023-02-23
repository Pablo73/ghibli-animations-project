import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import DescriptionProvider from './context/DescriptionProvider';
import FilmsProvider from './context/FilmsProvider';
import FavoritesProvider from './context/FavoritesProvider';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
      <FavoritesProvider>
        <FilmsProvider>
          <DescriptionProvider>
            <App />
          </DescriptionProvider>
        </FilmsProvider>
      </FavoritesProvider>
  </BrowserRouter>,
);

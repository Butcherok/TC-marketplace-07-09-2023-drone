import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { GlobalStyles } from 'styles/GlobalStyles';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/TC-marketplace-07-09-2023-drone">
      <GlobalStyles />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
// Test comment
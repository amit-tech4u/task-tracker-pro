import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { store } from './app/store';
import { ThemeProviderCustom } from './context/ThemeContext';
import ErrorBoundary from './ErrorBoundary';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ErrorBoundary>
    <Provider store={store}>
      <ThemeProviderCustom>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProviderCustom>
    </Provider>
  </ErrorBoundary>
);

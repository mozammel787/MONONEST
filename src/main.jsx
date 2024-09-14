import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import { Router } from './Router/Router';
import AuthProvider from './Auth/AuthProvider';
import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux';
import store from './store/Store';  

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <AuthProvider>
        <RouterProvider router={Router}>
          <Toaster />
        </RouterProvider>
      </AuthProvider>
    </Provider>
  </StrictMode>
);

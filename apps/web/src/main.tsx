import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AuthProvider } from './context/AuthContext';
import { ThemeProvider } from './context/ThemeContext';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { ErrorBoundary } from './components/ErrorBoundary';
import './index.css';

const clientId =
  (import.meta as any).env?.VITE_GOOGLE_CLIENT_ID ||
  '750479771075-8tac688o0ag749vk6gg687844sbucdde.apps.googleusercontent.com';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId={clientId}>
      <AuthProvider>
        <ThemeProvider>
          <ErrorBoundary>
            <App />
          </ErrorBoundary>
        </ThemeProvider>
      </AuthProvider>
    </GoogleOAuthProvider>
  </React.StrictMode>
);

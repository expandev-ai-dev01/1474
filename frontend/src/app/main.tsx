import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';
import '@/assets/styles/globals.css';

/**
 * @entrypoint Application Entry Point
 * @summary Main entry point for the DataFlow application.
 * Initializes React root and renders the App component with providers.
 */
const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Root element not found');
}

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);

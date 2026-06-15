import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import 'aos/dist/aos.css';
import AOSProvider from './AOSProvider.jsx';
import { LanguageProvider } from './context/LanguageContext.jsx';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AOSProvider>
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </AOSProvider>
  </StrictMode>
);

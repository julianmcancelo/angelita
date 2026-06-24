import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Toaster } from 'react-hot-toast'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Toaster
      position="bottom-center"
      toastOptions={{
        duration: 4000,
        style: {
          background: '#1a1a1a',
          color: '#fff',
          border: '1px solid rgba(233, 30, 140, 0.3)',
          borderRadius: '12px',
          fontFamily: "'Manrope', sans-serif",
          fontSize: '0.9rem',
        },
        success: {
          iconTheme: {
            primary: '#e91e8c',
            secondary: '#fff',
          },
        },
      }}
    />
    <App />
  </StrictMode>,
)

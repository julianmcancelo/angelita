import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './AccessControl.css';

// Allowed passwords for development access
const ALLOWED_PASSWORDS = ['AngelitaTorres2026!', 'Angelita123!', 'Angelita123'];

export default function AccessControl({ onAccessGranted }) {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (ALLOWED_PASSWORDS.includes(password.trim())) {
      onAccessGranted();
    } else {
      setError(true);
      setPassword('');
      // Reset error state after shake animation
      setTimeout(() => setError(false), 600);
    }
  };

  return (
    <div className="access-control">
      <div className="access-control__glow" aria-hidden="true" />
      
      <motion.div 
        className="access-control__card glass-card"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <span className="access-control__label">ACCESO RESTRINGIDO</span>
        <h1 className="access-control__title">PREVIEW DE COMPILACIÓN</h1>
        
        <p className="access-control__desc">
          Introduce la contraseña de seguridad para visualizar la versión preliminar del sitio web.
        </p>

        <form onSubmit={handleSubmit} className="access-control__form">
          <motion.div 
            animate={error ? { x: [-10, 10, -10, 10, 0] } : {}}
            transition={{ duration: 0.4 }}
            className="access-control__input-wrapper"
          >
            <input
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                if (error) setError(false);
              }}
              className={`access-control__input ${error ? 'access-control__input--error' : ''}`}
              autoFocus
            />
          </motion.div>

          {error && (
            <span className="access-control__error-text">
              Contraseña incorrecta. Inténtalo de nuevo.
            </span>
          )}

          <button type="submit" className="btn btn--brutalist access-control__btn">
            DESBLOQUEAR ACCESO
          </button>
        </form>
      </motion.div>
      
      <div className="access-control__footer">
        ÁNGELA TORRES — SITIO WEB PRE-RELEASE PREVIEW
      </div>
    </div>
  );
}

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoCloseOutline } from 'react-icons/io5';
import './DisclaimerModal.css';

export default function DisclaimerModal({ onClose }) {
  return (
    <AnimatePresence>
      <div className="disclaimer-overlay" onClick={onClose}>
        <motion.div
          className="disclaimer-modal glass-card"
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          onClick={(e) => e.stopPropagation()} // Prevent closing when clicking card
          role="dialog"
          aria-modal="true"
          aria-labelledby="disclaimer-title"
        >
          <button 
            className="disclaimer-modal__close-btn" 
            onClick={onClose} 
            aria-label="Cerrar modal"
          >
            <IoCloseOutline />
          </button>

          <span className="disclaimer-modal__label">INFORMACIÓN DEL PROYECTO</span>
          <h2 id="disclaimer-title" className="disclaimer-modal__title">
            PROYECTO DE PRÁCTICA
          </h2>
          
          <div className="disclaimer-modal__content">
            <p>
              ¡Hola! Este sitio web es una <strong>versión fan no oficial</strong> creada con fines exclusivamente educativos y de aprendizaje.
            </p>
            <p>
              El objetivo de este desarrollo es practicar lógica avanzada de frontend (React + Tailwind/CSS, Framer Motion y responsive design) e iterar en diseño web premium de alto nivel.
            </p>
            <p className="disclaimer-modal__dream-text">
              ¿Quién sabe? Quizás algún día se lo mostremos a Ángela y le encante. 😉
            </p>
          </div>

          <button 
            onClick={onClose} 
            className="btn btn--brutalist disclaimer-modal__btn"
          >
            ENTRAR AL SITIO Y EXPLORAR
          </button>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

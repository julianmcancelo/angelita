import React, { useState } from 'react';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
  FaInstagram,
  FaSpotify,
  FaYoutube,
  FaFacebookF,
} from 'react-icons/fa';
import { FaTiktok } from 'react-icons/fa6';
import './Contacto.css';

/* ---- Social links ---- */
const socialLinks = [
  {
    name: 'Instagram',
    icon: FaInstagram,
    url: 'https://www.instagram.com/angelatorres/',
    color: '#E1306C',
  },
  {
    name: 'TikTok',
    icon: FaTiktok,
    url: 'https://www.tiktok.com/@aangelatorres',
    color: '#00f2ea',
  },
  {
    name: 'Spotify',
    icon: FaSpotify,
    url: 'https://open.spotify.com/artist/6LZA6PhNCwUfHzqfpN1nYL',
    color: '#1DB954',
  },
  {
    name: 'YouTube',
    icon: FaYoutube,
    url: 'https://www.youtube.com/channel/UC8kJxNKlvki1272NFsGwJCg',
    color: '#FF0000',
  },
  {
    name: 'Facebook',
    icon: FaFacebookF,
    url: 'https://www.facebook.com/AngelaTorresOk',
    color: '#1877F2',
  },
];

/* ---- Framer-motion variants ---- */
const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

/* ============================================
   CONTACTO COMPONENT
   ============================================ */
const Contacto = () => {
  /* ---- Contact form state ---- */
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    asunto: '',
    mensaje: '',
  });

  /* ---- Newsletter state ---- */
  const [newsletterEmail, setNewsletterEmail] = useState('');

  /* ---- Handlers ---- */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic required-field validation
    if (
      !formData.nombre.trim() ||
      !formData.email.trim() ||
      !formData.asunto ||
      !formData.mensaje.trim()
    ) {
      toast.error('Por favor completá todos los campos.');
      return;
    }

    toast.success('¡Mensaje enviado con éxito! Te responderemos pronto.');
    setFormData({ nombre: '', email: '', asunto: '', mensaje: '' });
  };

  const handleNewsletter = (e) => {
    e.preventDefault();

    if (!newsletterEmail.trim()) {
      toast.error('Ingresá tu email para suscribirte.');
      return;
    }

    toast.success('¡Te suscribiste correctamente!');
    setNewsletterEmail('');
  };

  /* ---- Render ---- */
  return (
    <section id="contacto" className="section contacto">
      {/* Background ambient glow */}
      <div className="contacto__bg-glow" aria-hidden="true" />

      <div className="container">
        <motion.div
          className="contacto__content"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
        >
          {/* ---- Section Header ---- */}
          <motion.h2 className="section__title" variants={itemVariants}>
            CONTACTÁNOS
          </motion.h2>
          <motion.p className="section__subtitle" variants={itemVariants}>
            ¿Querés contratar a Ángela para un evento o tenés alguna consulta?
            Escribínos.
          </motion.p>
          <motion.div className="glow-divider" variants={itemVariants} />

          {/* ---- Two-column Layout ---- */}
          <div className="contacto__grid">
            {/* ========== LEFT: Contact Form ========== */}
            <motion.form
              className="contacto__form glass-card"
              variants={cardVariants}
              onSubmit={handleSubmit}
              noValidate
            >
              {/* Nombre */}
              <div className="contacto__field">
                <label className="contacto__label" htmlFor="contacto-nombre">
                  Nombre
                </label>
                <input
                  id="contacto-nombre"
                  className="contacto__input"
                  type="text"
                  name="nombre"
                  placeholder="Tu nombre completo"
                  value={formData.nombre}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Email */}
              <div className="contacto__field">
                <label className="contacto__label" htmlFor="contacto-email">
                  Email
                </label>
                <input
                  id="contacto-email"
                  className="contacto__input"
                  type="email"
                  name="email"
                  placeholder="tu@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Asunto (select) */}
              <div className="contacto__field">
                <label className="contacto__label" htmlFor="contacto-asunto">
                  Asunto
                </label>
                <select
                  id="contacto-asunto"
                  className="contacto__input contacto__select"
                  name="asunto"
                  value={formData.asunto}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>
                    Seleccioná un asunto
                  </option>
                  <option value="contrataciones">Contrataciones</option>
                  <option value="prensa">Prensa</option>
                  <option value="colaboraciones">Colaboraciones</option>
                  <option value="otro">Otro</option>
                </select>
              </div>

              {/* Mensaje */}
              <div className="contacto__field">
                <label className="contacto__label" htmlFor="contacto-mensaje">
                  Mensaje
                </label>
                <textarea
                  id="contacto-mensaje"
                  className="contacto__input contacto__textarea"
                  name="mensaje"
                  rows="5"
                  placeholder="Escribí tu mensaje..."
                  value={formData.mensaje}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Submit */}
              <motion.button
                type="submit"
                className="btn btn--brutalist contacto__submit"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                ENVIAR MENSAJE
              </motion.button>
            </motion.form>

            {/* ========== RIGHT: Info + Newsletter ========== */}
            <motion.div className="contacto__right" variants={cardVariants}>
              {/* --- Contact Info Card --- */}
              <div className="contacto__info-card glass-card">
                <h3 className="contacto__card-heading">
                  INFORMACIÓN DE CONTACTO
                </h3>

                <ul className="contacto__info-list">
                  <li className="contacto__info-item">
                    <span className="contacto__info-icon">
                      <FaPhone />
                    </span>
                    <div>
                      <span className="contacto__info-label">
                        Management &amp; Booking
                      </span>
                      <span className="contacto__info-value">
                        +54 11 5263-9900 | CZ Booking
                      </span>
                    </div>
                  </li>

                  <li className="contacto__info-item">
                    <span className="contacto__info-icon">
                      <FaEnvelope />
                    </span>
                    <div>
                      <span className="contacto__info-label">Email</span>
                      <a
                        href="mailto:contacto@angelatorres.com"
                        className="contacto__info-value contacto__info-link"
                      >
                        contacto@angelatorres.com
                      </a>
                    </div>
                  </li>

                  <li className="contacto__info-item">
                    <span className="contacto__info-icon">
                      <FaMapMarkerAlt />
                    </span>
                    <div>
                      <span className="contacto__info-label">Ubicación</span>
                      <span className="contacto__info-value">
                        Buenos Aires, Argentina
                      </span>
                    </div>
                  </li>
                </ul>

                {/* Social row */}
                <div className="contacto__socials">
                  <span className="contacto__socials-label">
                    Redes Sociales
                  </span>
                  <div className="contacto__socials-row">
                    {socialLinks.map((s) => (
                      <motion.a
                        key={s.name}
                        href={s.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contacto__social-icon"
                        aria-label={s.name}
                        whileHover={{ y: -4, scale: 1.15 }}
                        transition={{
                          type: 'spring',
                          stiffness: 400,
                          damping: 15,
                        }}
                      >
                        <s.icon />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>

              {/* --- Newsletter Card --- */}
              <div className="contacto__newsletter glass-card">
                <h3 className="contacto__card-heading">
                  SUSCRIBÍTE AL NEWSLETTER
                </h3>
                <p className="contacto__newsletter-sub">
                  Sé el primero en enterarte de nuevos lanzamientos y shows
                </p>

                <form
                  className="contacto__newsletter-form"
                  onSubmit={handleNewsletter}
                  noValidate
                >
                  <input
                    className="contacto__input contacto__newsletter-input"
                    type="email"
                    placeholder="Tu email"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    required
                  />
                  <motion.button
                    type="submit"
                    className="btn btn--brutalist contacto__newsletter-btn"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    SUSCRIBIRME
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contacto;

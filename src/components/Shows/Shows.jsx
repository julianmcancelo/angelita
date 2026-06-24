import React from 'react';
import { motion } from 'framer-motion';
import { HiOutlineTicket, HiOutlineLocationMarker, HiOutlineStar } from 'react-icons/hi';
import { BsCalendarEvent } from 'react-icons/bs';
import './Shows.css';

const showsData = [
  {
    fecha: '15 AGO',
    año: '2026',
    venue: 'Teatro Gran Rex',
    ciudad: 'Buenos Aires, Argentina',
    estado: 'Agotado',
    destacado: false,
  },
  {
    fecha: '22 SEP',
    año: '2026',
    venue: 'Teatro Ópera',
    ciudad: 'Buenos Aires, Argentina',
    estado: 'Disponible',
    destacado: false,
  },
  {
    fecha: '10 OCT',
    año: '2026',
    venue: 'Quality Espacio',
    ciudad: 'Córdoba, Argentina',
    estado: 'Disponible',
    destacado: false,
  },
  {
    fecha: '25 OCT',
    año: '2026',
    venue: 'Metropolitano',
    ciudad: 'Rosario, Argentina',
    estado: 'Disponible',
    destacado: false,
  },
  {
    fecha: '08 DIC',
    año: '2026',
    venue: 'Movistar Arena',
    ciudad: 'Buenos Aires, Argentina',
    estado: 'Disponible',
    destacado: true,
  },
  {
    fecha: '09 DIC',
    año: '2026',
    venue: 'Movistar Arena',
    ciudad: 'Buenos Aires, Argentina',
    estado: 'Disponible',
    destacado: true,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    x: -40,
    filter: 'blur(8px)',
  },
  visible: {
    opacity: 1,
    x: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const headerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: 'easeOut' },
  },
};

const Shows = () => {
  const isAgotado = (estado) => estado === 'Agotado';

  return (
    <section id="shows" className="section shows">
      <div className="container">
        {/* Header */}
        <motion.div
          className="shows__header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={headerVariants}
        >
          <h2 className="section__title">PRÓXIMOS SHOWS</h2>
          <div className="glow-divider" />
          <p className="section__subtitle">
            No te pierdas la oportunidad de vivir la experiencia en vivo
          </p>
        </motion.div>

        {/* Shows List */}
        <motion.div
          className="shows__list"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
        >
          {/* Timeline vertical line */}
          <div className="shows__timeline-line" aria-hidden="true" />

          {showsData.map((show, index) => (
            <motion.div
              key={index}
              className={`shows__card glass-card${
                show.destacado ? ' shows__card--featured' : ''
              }${isAgotado(show.estado) ? ' shows__card--soldout' : ''}`}
              variants={cardVariants}
              whileHover={{
                scale: 1.015,
                transition: { duration: 0.25 },
              }}
            >
              {/* Timeline dot */}
              <div
                className={`shows__timeline-dot${
                  show.destacado ? ' shows__timeline-dot--featured' : ''
                }`}
                aria-hidden="true"
              />

              {/* Featured badge */}
              {show.destacado && (
                <div className="shows__badge">
                  <HiOutlineStar className="shows__badge-icon" />
                  <span>SHOW ESPECIAL</span>
                </div>
              )}

              {/* Date */}
              <div className="shows__date">
                <span className="shows__date-day">{show.fecha}</span>
                <span className="shows__date-year">{show.año}</span>
              </div>

              {/* Info */}
              <div className="shows__info">
                <h3 className="shows__venue">{show.venue}</h3>
                <p className="shows__city">
                  <HiOutlineLocationMarker className="shows__city-icon" />
                  {show.ciudad}
                </p>
              </div>

              {/* Action */}
              <div className="shows__action">
                {isAgotado(show.estado) ? (
                  <button
                    className="btn btn--brutalist-outline btn--sm shows__btn--soldout"
                    disabled
                    aria-label="Entradas agotadas"
                  >
                    <HiOutlineTicket />
                    AGOTADO
                  </button>
                ) : (
                  <a
                    href="#"
                    className="btn btn--brutalist-outline btn--sm shows__btn--available"
                    aria-label={`Comprar entradas para ${show.venue}`}
                  >
                    <HiOutlineTicket />
                    ENTRADAS
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="shows__footer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <BsCalendarEvent className="shows__footer-icon" />
          <p className="shows__footer-text">
            Más fechas próximamente · Seguí las redes para enterarte primero
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Shows;

import { motion } from 'framer-motion';
import { FaUsers, FaHeadphones, FaMicrophoneAlt } from 'react-icons/fa';
import userPhoto1 from '../../assets/images/user_photo_1.png';
import userPhoto3 from '../../assets/images/user_photo_3.png';
import userPhoto7 from '../../assets/images/user_photo_7.png';
import userPhoto8 from '../../assets/images/user_photo_8.png';
import './Acerca.css';

/* ---------- Framer-motion variants ---------- */
const sectionVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const fadeRight = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const statsContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.3,
    },
  },
};

const statCardVariant = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

/* ---------- Stats data ---------- */
const stats = [
  { id: 1, value: '2.5M+', label: 'Seguidores', icon: FaUsers },
  { id: 2, value: '80M+', label: 'Reproducciones', icon: FaHeadphones },
  { id: 3, value: '150+', label: 'Shows en Vivo', icon: FaMicrophoneAlt },
];

/* ========================================
   ACERCA (ABOUT) COMPONENT
   ======================================== */
export default function Acerca() {
  return (
    <section className="acerca section" id="acerca">
      {/* Background decorative elements */}
      <div className="acerca__bg-glow acerca__bg-glow--left" aria-hidden="true" />
      <div className="acerca__bg-glow acerca__bg-glow--right" aria-hidden="true" />

      <div className="container">
        {/* Section header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariants}
        >
          <motion.h2 className="section__title" variants={fadeUp}>
            CONOCÉ MI HISTORIA
          </motion.h2>
          <motion.div className="glow-divider" variants={fadeUp} />
        </motion.div>

        {/* Two-column layout */}
        <motion.div
          className="acerca__grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
        >
          {/* Left column — Interactive Scrapbook Collage */}
          <motion.div className="acerca__image-col" variants={fadeLeft}>
            <div className="acerca__collage">
              <motion.div
                className="acerca__collage-item acerca__collage-item--1"
                whileHover={{ scale: 1.08, rotate: 0, zIndex: 10 }}
                style={{ rotate: -5 }}
              >
                <img
                  src={userPhoto1}
                  alt="Ángela Torres - Foto Artística"
                  loading="lazy"
                />
              </motion.div>

              <motion.div
                className="acerca__collage-item acerca__collage-item--2"
                whileHover={{ scale: 1.08, rotate: 0, zIndex: 10 }}
                style={{ rotate: 3 }}
              >
                <img
                  src={userPhoto7}
                  alt="Ángela Torres - Retrato Editorial"
                  loading="lazy"
                />
              </motion.div>

              <motion.div
                className="acerca__collage-item acerca__collage-item--3"
                whileHover={{ scale: 1.08, rotate: 0, zIndex: 10 }}
                style={{ rotate: -3 }}
              >
                <img
                  src={userPhoto3}
                  alt="Ángela Torres con Shakira"
                  loading="lazy"
                />
              </motion.div>

              <motion.div
                className="acerca__collage-item acerca__collage-item--4"
                whileHover={{ scale: 1.08, rotate: 0, zIndex: 10 }}
                style={{ rotate: 4 }}
              >
                <img
                  src={userPhoto8}
                  alt="Ángela Torres - Estilo Urbano"
                  loading="lazy"
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Right column — Bio */}
          <motion.div className="acerca__text-col" variants={fadeRight}>
            <span className="acerca__real-name">
              Ángela Azul Concepción Caccia Torres
            </span>

            <h3 className="acerca__artist-name">ÁNGELA TORRES</h3>

            <div className="acerca__bio">
              <p>
                Ángela Torres nació el 13 de agosto de 1998 en Avellaneda, Buenos Aires. Proviene de una dinastía artística legendaria: es hija de la actriz y cantante Gloria Carrá y del músico Marcelo Torres, sobrina del reconocido cantautor Diego Torres y nieta de la inolvidable Lolita Torres. Desde muy chica, comenzó su camino en la actuación y la música, forjando su propio nombre con carisma y versatilidad.
              </p>
              <p>
                Tras brillar en televisión y teatro musical en éxitos masivos como <em>Solamente Vos</em>, <em>Esperanza Mía</em>, y protagonizar la tira juvenil <em>Simona</em>, consolidó su pasión por el canto. En 2021 dio un paso clave en su identidad musical con el EP <strong>La Niña de Fuego</strong> (producido por el prestigioso productor español Alizzz), mezclando pop, ritmos latinos y R&B con frescura urbana.
              </p>
              <p>
                En julio de 2025 lanzó su esperado álbum debut de estudio, <strong>NO ME OLVIDES</strong>, producido por Fermín Ugarte. Un disco íntimo y experimental de 11 canciones que incluye éxitos virales como &quot;PLACARD&quot; y &quot;FAVORITA&quot;. Con una conexión única con sus fans y millones de reproducciones en plataformas, Ángela Torres se posiciona como una de las voces pop indispensables del país.
              </p>
            </div>

            {/* Stats cards */}
            <motion.div
              className="acerca__stats"
              variants={statsContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
            >
              {stats.map(({ id, value, label, icon: Icon }) => (
                <motion.div
                  key={id}
                  className="acerca__stat glass-card"
                  variants={statCardVariant}
                  whileHover={{ y: -4, transition: { duration: 0.25 } }}
                >
                  <Icon className="acerca__stat-icon" aria-hidden="true" />
                  <span className="acerca__stat-value">{value}</span>
                  <span className="acerca__stat-label">{label}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

import React from 'react';
import { motion } from 'framer-motion';
import { FaSpotify, FaYoutube } from 'react-icons/fa';
import { SiApplemusic } from 'react-icons/si';
import './Escuchar.css';

const platforms = [
  {
    name: 'Spotify',
    icon: FaSpotify,
    color: '#1DB954',
    url: 'https://open.spotify.com/artist/6LZA6PhNCwUfHzqfpN1nYL',
  },
  {
    name: 'Apple Music',
    icon: SiApplemusic,
    color: '#e91e8c',
    url: 'https://music.apple.com/us/artist/angela-torres/1720589687',
  },
  {
    name: 'YouTube',
    icon: FaYoutube,
    color: '#FF0000',
    url: 'https://www.youtube.com/channel/UC8kJxNKlvki1272NFsGwJCg',
  },
];

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

/* Cinematic Blur-to-Focus and scale reveal */
const itemVariants = {
  hidden: { opacity: 0, y: 50, filter: 'blur(12px)', scale: 0.93 },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    scale: 1,
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

/* 3D Tilt Card reveal */
const cardVariants = {
  hidden: { opacity: 0, y: 60, rotateX: 20, rotateY: 10, scale: 0.95 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    transition: {
      duration: 0.85,
      delay: i * 0.12,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
};

const Escuchar = () => {
  return (
    <section id="escuchar" className="section escuchar">
      {/* Background ambient glow */}
      <div className="escuchar__bg-glow" aria-hidden="true" />

      <div className="container">
        <motion.div
          className="escuchar__content"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* Header */}
          <motion.h2 className="section__title" variants={itemVariants}>
            ESCUCHÁ MI MÚSICA
          </motion.h2>
          <motion.p className="section__subtitle" variants={itemVariants}>
            Descubrí mis últimos lanzamientos y disfrutá de toda mi discografía
          </motion.p>
          <motion.div className="glow-divider" variants={itemVariants} />

          {/* Album Artwork Row with Real Photos */}
          <motion.div className="escuchar__albums" variants={itemVariants}>
            <motion.div
              className="escuchar__album-card"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Angela_Torres_en_2020.jpg/640px-Angela_Torres_en_2020.jpg"
                alt="Ángela Torres — Álbum No Me Olvides (2025)"
                className="escuchar__album-img"
              />
              <div className="escuchar__album-glow" aria-hidden="true" />
              <span className="escuchar__album-title">NO ME OLVIDES (2025)</span>
            </motion.div>

            <motion.div
              className="escuchar__album-card"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/%C3%81ngela_Torres_en_el_Festival_Ciudad_Emergente_2018_%28cropped%29.jpg/640px-%C3%81ngela_Torres_en_el_Festival_Ciudad_Emergente_2018_%28cropped%29.jpg"
                alt="Ángela Torres — EP La Niña de Fuego (2021)"
                className="escuchar__album-img"
              />
              <div className="escuchar__album-glow" aria-hidden="true" />
              <span className="escuchar__album-title">LA NIÑA DE FUEGO (2021)</span>
            </motion.div>
          </motion.div>

          {/* Spotify Embeds */}
          <motion.div className="escuchar__embeds" variants={itemVariants}>
            <div className="escuchar__embed-wrapper glass-card">
              <h3 className="escuchar__embed-label">Artista</h3>
              <iframe
                title="Ángela Torres — Spotify Artista"
                style={{ borderRadius: '12px' }}
                src="https://open.spotify.com/embed/artist/6LZA6PhNCwUfHzqfpN1nYL?utm_source=generator&theme=0"
                width="100%"
                height="352"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              />
            </div>

            <div className="escuchar__embed-wrapper glass-card">
              <h3 className="escuchar__embed-label">Último Álbum</h3>
              <iframe
                title="Ángela Torres — Último Álbum (NO ME OLVIDES)"
                style={{ borderRadius: '12px' }}
                src="https://open.spotify.com/embed/album/6K47T6f5I6r5v4V1b6L6uY?utm_source=generator&theme=0"
                width="100%"
                height="352"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* Platform Cards */}
          <motion.h3
            className="escuchar__platforms-heading"
            variants={itemVariants}
          >
            Escuchá en tu plataforma favorita
          </motion.h3>

          <div className="escuchar__platforms">
            {platforms.map((platform, i) => (
              <motion.a
                key={platform.name}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className="escuchar__platform-card glass-card"
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                whileHover={{ y: -8, scale: 1.03 }}
                transition={{ type: 'spring', stiffness: 300, damping: 22 }}
              >
                <div className="escuchar__platform-icon-wrapper">
                  <platform.icon className="escuchar__platform-icon" />
                </div>
                <span className="escuchar__platform-name">{platform.name}</span>
                <span className="escuchar__platform-cta">Escuchar →</span>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Escuchar;

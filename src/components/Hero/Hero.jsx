import { useMemo, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';
import { FaChevronDown } from 'react-icons/fa';
import './Hero.css';

const navLinks = [
  { to: 'escuchar', label: 'ESCUCHAR' },
  { to: 'shows', label: 'SHOWS' },
  { to: 'acerca', label: 'ACERCA' },
  { to: 'contacto', label: 'CONTACTO' },
];

/* ---------- Particle helpers ---------- */
const PARTICLE_COUNT = 18;

function generateParticles(count) {
  return Array.from({ length: count }, (_, i) => {
    const size = Math.random() * 4 + 2;            // 2–6 px
    const left = Math.random() * 100;               // 0–100 %
    const top = 60 + Math.random() * 40;            // start from lower 40 %
    const duration = 8 + Math.random() * 12;        // 8–20 s
    const delay = Math.random() * 10;               // 0–10 s stagger
    const isPink = Math.random() > 0.5;

    return {
      id: i,
      style: {
        width: size,
        height: size,
        left: `${left}%`,
        top: `${top}%`,
        background: isPink
          ? '#ffffff'
          : 'rgba(255, 255, 255, 0.7)',
        boxShadow: isPink
          ? '0 0 8px rgba(255, 255, 255, 0.5), 0 0 20px rgba(255, 255, 255, 0.3)'
          : '0 0 6px rgba(255, 255, 255, 0.3), 0 0 15px rgba(255, 255, 255, 0.15)',
        animationDuration: `${duration}s`,
        animationDelay: `${delay}s`,
      },
    };
  });
}

/* ---------- Framer‑motion variants ---------- */
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const scrollIndicatorVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { delay: 1.6, duration: 0.8 },
  },
};

/* ---------- Video playlist data ---------- */
const VIDEO_IDS = ['OQozve6Qb_k', '9z-zc0QKqfo', 'h2bWz-7KAm4'];

/* ========================================
   HERO COMPONENT
   ======================================== */
export default function Hero() {
  const particles = useMemo(() => generateParticles(PARTICLE_COUNT), []);
  const [videoID, setVideoID] = useState('');
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    // Pick a random video on component mount
    const randomIndex = Math.floor(Math.random() * VIDEO_IDS.length);
    setVideoID(VIDEO_IDS[randomIndex]);

    // Track scroll position for vertical parallax effect
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="hero" id="hero">
      {/* Background Video */}
      <div className="hero__background">
        {videoID && (
          <iframe
            src={`https://www.youtube.com/embed/${videoID}?autoplay=1&mute=1&loop=1&playlist=${videoID}&playsinline=1&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&enablejsapi=1&start=15&vq=hd1080`}
            title="Ángela Torres - Video Fondo"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            className="hero__video-iframe"
            style={{
              transform: `translate(-50%, calc(-50% + ${scrollY * 0.35}px)) scale(1.2)`
            }}
          />
        )}
      </div>

      {/* Dark overlay */}
      <div className="hero__overlay" />

      {/* Floating particles */}
      <div className="hero__particles" aria-hidden="true">
        {particles.map((p) => (
          <span key={p.id} className="hero__particle" style={p.style} />
        ))}
      </div>

      {/* Central content */}
      <motion.div
        className="hero__content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Main name */}
        <motion.h1 className="hero__name" variants={fadeUp}>
          ÁNGELA
          <br />
          TORRES.
        </motion.h1>

        {/* CTA buttons */}
        <motion.div className="hero__buttons" variants={fadeUp}>
          <a
            href="https://open.spotify.com/artist/6LZA6PhNCwUfHzqfpN1nYL"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--brutalist"
          >
            ESCUCHAR AHORA
          </a>

          <ScrollLink
            to="shows"
            smooth={true}
            duration={800}
            offset={-60}
            className="btn btn--brutalist-outline"
            role="button"
            tabIndex={0}
          >
            PRÓXIMOS SHOWS
          </ScrollLink>
        </motion.div>
      </motion.div>

      {/* Right side vertical navigation */}
      <div className="hero__side-nav" aria-label="Navegación lateral">
        {navLinks.map((link) => (
          <ScrollLink
            key={link.to}
            to={link.to}
            smooth={true}
            duration={600}
            offset={-64}
            spy={true}
            activeClass="hero__side-link--active"
            className="hero__side-link"
          >
            {link.label}
          </ScrollLink>
        ))}
      </div>

      {/* Scroll indicator */}
      <motion.div
        variants={scrollIndicatorVariants}
        initial="hidden"
        animate="visible"
      >
        <ScrollLink
          to="acerca"
          smooth={true}
          duration={800}
          offset={-60}
          className="hero__scroll-indicator"
          role="button"
          tabIndex={0}
        >
          <span className="hero__scroll-label">Descubrir</span>
          <FaChevronDown className="hero__scroll-icon" />
        </ScrollLink>
      </motion.div>
    </section>
  );
}

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-scroll';
import {
  FaInstagram,
  FaTiktok,
  FaSpotify,
  FaYoutube,
  FaFacebookF,
  FaArrowUp,
} from 'react-icons/fa';
import { SiApplemusic } from 'react-icons/si';
import userPhoto1 from '../../assets/images/user_photo_1.png';
import userPhoto2 from '../../assets/images/user_photo_2.png';
import userPhoto3 from '../../assets/images/user_photo_3.png';
import userPhoto4 from '../../assets/images/user_photo_4.png';
import userPhoto5 from '../../assets/images/user_photo_5.png';
import userPhoto6 from '../../assets/images/user_photo_6.png';
import userPhoto7 from '../../assets/images/user_photo_7.png';
import userPhoto8 from '../../assets/images/user_photo_8.png';
import userPhoto9 from '../../assets/images/user_photo_9.png';
import userPhoto10 from '../../assets/images/user_photo_10.png';
import './Footer.css';

const socialLinks = [
  {
    icon: <FaInstagram />,
    href: 'https://www.instagram.com/angelatorres/',
    ariaLabel: 'Instagram',
  },
  {
    icon: <FaTiktok />,
    href: 'https://www.tiktok.com/@aangelatorres',
    ariaLabel: 'TikTok',
  },
  {
    icon: <FaSpotify />,
    href: 'https://open.spotify.com/artist/6LZA6PhNCwUfHzqfpN1nYL',
    ariaLabel: 'Spotify',
  },
  {
    icon: <SiApplemusic />,
    href: 'https://music.apple.com/us/artist/angela-torres/1720589687',
    ariaLabel: 'Apple Music',
  },
  {
    icon: <FaYoutube />,
    href: 'https://www.youtube.com/channel/UC8kJxNKlvki1272NFsGwJCg',
    ariaLabel: 'YouTube',
  },
  {
    icon: <FaFacebookF />,
    href: 'https://www.facebook.com/AngelaTorresOk',
    ariaLabel: 'Facebook',
  },
];

const navLinks = [
  { to: 'escuchar', label: 'ESCUCHAR' },
  { to: 'shows', label: 'SHOWS' },
  { to: 'acerca', label: 'ACERCA' },
  { to: 'contacto', label: 'CONTACTO' },
];

/* Set of photos of Ángela Torres to distribute across the letters */
const letterImages = [
  userPhoto1,
  userPhoto2,
  userPhoto3,
  userPhoto4,
  userPhoto5,
  userPhoto6,
  userPhoto7,
  userPhoto8,
  userPhoto9,
  userPhoto10,
];

const Footer = () => {
  const footerRef = useRef(null);
  const isInView = useInView(footerRef, { once: true, amount: 0.15 });

  return (
    <footer className="footer" ref={footerRef}>
      {/* Top rule line */}
      <div className="footer__rule" aria-hidden="true" />

      {/* Main grid content */}
      <div className="footer__grid">
        {/* Left column — nav links stacked vertically */}
        <motion.nav
          className="footer__nav-col"
          aria-label="Navegación del pie de página"
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="footer__nav-label">NAVEGACIÓN</span>
          {navLinks.map((link, i) => (
            <Link
              key={link.to}
              to={link.to}
              smooth={true}
              duration={600}
              offset={-64}
              className="footer__nav-link"
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <span className="footer__nav-index">0{i + 1}</span>
              {link.label}
            </Link>
          ))}
        </motion.nav>

        {/* Center column — social icons grid */}
        <motion.div
          className="footer__social-col"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="footer__social-label">SEGUIME</span>
          <div className="footer__social-grid">
            {socialLinks.map((social) => (
              <a
                key={social.ariaLabel}
                href={social.href}
                className="footer__social-item"
                aria-label={social.ariaLabel}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="footer__social-icon">{social.icon}</span>
                <span className="footer__social-name">{social.ariaLabel}</span>
              </a>
            ))}
          </div>
        </motion.div>

        {/* Right column — back to top + copyright */}
        <motion.div
          className="footer__info-col"
          initial={{ opacity: 0, x: 30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <Link
            to="hero"
            smooth={true}
            duration={1000}
            className="footer__back-top"
          >
            <FaArrowUp />
            <span>VOLVER ARRIBA</span>
          </Link>
          <div className="footer__meta">
            <span className="footer__meta-line">BUENOS AIRES, ARG.</span>
            <span className="footer__meta-line">© 2026</span>
          </div>
        </motion.div>
      </div>

      {/* Massive watermark name — filled with photo collage */}
      <motion.div
        className="footer__watermark"
        aria-hidden="true"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="footer__watermark-container">
          {'ÁNGELA TORRES'.split('').map((char, index) => {
            if (char === ' ') {
              return (
                <span key={index} className="footer__watermark-space">
                  &nbsp;
                </span>
              );
            }

            // Assign image from array cyclically
            const imgIndex = index % letterImages.length;
            const imgUrl = letterImages[imgIndex];

            // Vary placement coordinate per letter to capture faces/focus areas
            const posX = (index * 22) % 100;
            const posY = (index * 17) % 35 + 15; // vertical centering

            return (
              <span
                key={index}
                className="footer__watermark-letter"
                style={{
                  backgroundImage: `url(${imgUrl})`,
                  backgroundPosition: `${posX}% ${posY}%`,
                }}
              >
                {char}
              </span>
            );
          })}
        </div>
      </motion.div>

      {/* Bottom micro bar */}
      <div className="footer__micro-bar">
        <span>SITIO OFICIAL</span>
        <span className="footer__dot">●</span>
        <span>TODOS LOS DERECHOS RESERVADOS</span>
      </div>
    </footer>
  );
};

export default Footer;

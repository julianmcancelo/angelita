import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import {
  FaInstagram,
  FaTiktok,
  FaSpotify,
  FaYoutube,
  FaFacebookF,
} from 'react-icons/fa';
import './Header.css';

const navLinks = [
  { to: 'escuchar', label: 'ESCUCHAR' },
  { to: 'shows', label: 'SHOWS' },
  { to: 'acerca', label: 'ACERCA' },
  { to: 'contacto', label: 'CONTACTO' },
];

const socialLinks = [
  { icon: <FaInstagram />, href: 'https://www.instagram.com/angelatorres/', ariaLabel: 'Instagram' },
  { icon: <FaTiktok />, href: 'https://www.tiktok.com/@aangelatorres', ariaLabel: 'TikTok' },
  { icon: <FaSpotify />, href: 'https://open.spotify.com/artist/6LZA6PhNCwUfHzqfpN1nYL', ariaLabel: 'Spotify' },
  { icon: <FaYoutube />, href: 'https://www.youtube.com/channel/UC8kJxNKlvki1272NFsGwJCg', ariaLabel: 'YouTube' },
  { icon: <FaFacebookF />, href: 'https://www.facebook.com/AngelaTorresOk', ariaLabel: 'Facebook' },
];

const mobileMenuVariants = {
  hidden: { x: '100%', opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { type: 'tween', duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    x: '100%',
    opacity: 0,
    transition: { type: 'tween', duration: 0.3, ease: [0.22, 1, 0.36, 1] },
  },
};

const linkStagger = {
  visible: {
    transition: { staggerChildren: 0.07, delayChildren: 0.15 },
  },
};

const linkItem = {
  hidden: { x: 40, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 120, damping: 14 },
  },
};

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const closeMobileMenu = () => setMenuOpen(false);

  return (
    <>
      <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
        <div className="header__container">
          {/* Social Links (Top-Left) */}
          <div className="header__socials-left">
            {socialLinks.map((social) => (
              <a
                key={social.ariaLabel}
                href={social.href}
                className="header__social-link"
                aria-label={social.ariaLabel}
                target="_blank"
                rel="noopener noreferrer"
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* Circular Hamburger Button (Top-Right) */}
          <button
            className="header__hamburger-circle"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>
      </header>

      {/* Mobile Fullscreen Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-menu"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* Close button inside menu */}
            <button
              className="mobile-menu__close"
              onClick={closeMobileMenu}
              aria-label="Cerrar menú"
            >
              <HiX />
            </button>

            {/* Navigation Links */}
            <motion.nav
              className="mobile-menu__nav"
              variants={linkStagger}
              initial="hidden"
              animate="visible"
              aria-label="Navegación móvil"
            >
              {navLinks.map((link) => (
                <motion.div key={link.to} variants={linkItem}>
                  <Link
                    to={link.to}
                    smooth={true}
                    duration={600}
                    offset={-64}
                    className="mobile-menu__link"
                    onClick={closeMobileMenu}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </motion.nav>

            {/* Social Icons */}
            <motion.div
              className="mobile-menu__socials"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.4 }}
            >
              {socialLinks.map((social) => (
                <a
                  key={social.ariaLabel}
                  href={social.href}
                  className="mobile-menu__social-icon"
                  aria-label={social.ariaLabel}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.icon}
                </a>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;

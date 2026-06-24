import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaTshirt, FaCompactDisc } from 'react-icons/fa';
import { GiHoodie } from 'react-icons/gi';
import { MdShoppingBag } from 'react-icons/md';
import './Tienda.css';

/* ---------- Product data ---------- */
const products = [
  {
    id: 1,
    name: 'Remera Gira No Me Olvides',
    price: '$12.500',
    Icon: FaTshirt,
    gradient: 'linear-gradient(135deg, #e91e8c, #8b5cf6)',
    link: '#',
  },
  {
    id: 2,
    name: 'Hoodie Ángela Torres',
    price: '$18.900',
    Icon: GiHoodie,
    gradient: 'linear-gradient(135deg, #1e3a5f, #8b5cf6)',
    link: '#',
  },
  {
    id: 3,
    name: 'Gorra Edición Limitada',
    price: '$6.500',
    Icon: MdShoppingBag,
    gradient: 'linear-gradient(135deg, #f472b6, #e91e8c)',
    link: '#',
  },
  {
    id: 4,
    name: 'CD Firmado + Póster',
    price: '$9.800',
    Icon: FaCompactDisc,
    gradient: 'linear-gradient(135deg, #8b5cf6, #3b82f6)',
    link: '#',
  },
];

/* ---------- Framer‑motion variants ---------- */
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

const cardVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      delay: i * 0.15,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
};

/* ---------- 3D Tilt handler ---------- */
function handleTilt(e) {
  const card = e.currentTarget;
  const rect = card.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  const centerX = rect.width / 2;
  const centerY = rect.height / 2;
  const rotateX = ((y - centerY) / centerY) * -8;
  const rotateY = ((x - centerX) / centerX) * 8;

  card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.03, 1.03, 1.03)`;
}

function resetTilt(e) {
  e.currentTarget.style.transform =
    'perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
}

/* ========================================
   TIENDA COMPONENT
   ======================================== */
export default function Tienda() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });

  return (
    <section className="tienda section" id="tienda" ref={sectionRef}>
      {/* Background accents */}
      <div className="tienda__bg-glow tienda__bg-glow--left" aria-hidden="true" />
      <div className="tienda__bg-glow tienda__bg-glow--right" aria-hidden="true" />

      <div className="container">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {/* Header */}
          <motion.h2 className="section__title" variants={fadeUp}>
            TIENDA OFICIAL
          </motion.h2>

          <motion.div className="glow-divider" variants={fadeUp} />

          <motion.p className="section__subtitle" variants={fadeUp}>
            Llevá un pedazo de la experiencia con vos. Merch exclusivo y
            ediciones limitadas.
          </motion.p>

          {/* Products grid */}
          <div className="tienda__grid">
            {products.map((product, i) => (
              <motion.a
                key={product.id}
                href={product.link}
                className="tienda__card glass-card"
                custom={i}
                variants={cardVariants}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
                onMouseMove={handleTilt}
                onMouseLeave={resetTilt}
              >
                {/* Product image placeholder */}
                <div
                  className="tienda__card-image"
                  style={{ background: product.gradient }}
                >
                  <product.Icon className="tienda__card-icon" />

                  {/* Hover overlay */}
                  <div className="tienda__card-overlay">
                    <span className="tienda__card-buy btn btn--primary btn--sm">
                      COMPRAR
                    </span>
                  </div>
                </div>

                {/* Product info */}
                <div className="tienda__card-info">
                  <h3 className="tienda__card-name">{product.name}</h3>
                  <span className="tienda__card-price">{product.price}</span>
                </div>
              </motion.a>
            ))}
          </div>

          {/* CTA */}
          <motion.div className="tienda__cta" variants={fadeUp}>
            <a
              href="https://www.rolismerch.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--outline"
            >
              VER TODA LA TIENDA
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

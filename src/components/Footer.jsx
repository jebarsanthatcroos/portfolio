import { useLanguage } from "../context/LanguageContext";
import { motion, useInView, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import {
  FaHeartbeat,
  FaArrowUp,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaPhone,
  FaGlobe,
  FaTwitter,
  FaYoutube,
  FaDiscord,
  FaMedium,
  FaDev,
  FaCode,
  FaPalette,
  FaRocket,
  FaUsers,
  FaBriefcase,
  FaAward,
} from 'react-icons/fa';
import { socials } from '../config/socials';



const CLAY = {
  light: {
    bg: '#E4E9F2',
    shadowDark: 'rgba(163,177,198,0.55)',
    shadowLight: 'rgba(255,255,255,0.9)',
    text: '#334155',
    textMuted: '#64748B',
    heading: '#1E293B',
  },
  dark: {
    bg: '#262B36',
    shadowDark: 'rgba(0,0,0,0.55)',
    shadowLight: 'rgba(70,78,96,0.55)',
    text: '#CBD5E1',
    textMuted: '#8B95A8',
    heading: '#F1F5F9',
  },
};

const raised = (isDark, size = 8) => {
  const c = isDark ? CLAY.dark : CLAY.light;
  return {
    background: c.bg,
    boxShadow: `${size}px ${size}px ${size * 2}px ${c.shadowDark}, -${size}px -${size}px ${size * 2}px ${c.shadowLight}`,
  };
};

const pressed = (isDark, size = 4) => {
  const c = isDark ? CLAY.dark : CLAY.light;
  return {
    background: c.bg,
    boxShadow: `inset ${size}px ${size}px ${size * 2}px ${c.shadowDark}, inset -${size}px -${size}px ${size * 2}px ${c.shadowLight}`,
  };
};

const portfolioLinks = [
  { label: 'Projects', href: '#projects', icon: <FaCode /> },
  { label: 'Skills', href: '#skills', icon: <FaPalette /> },
  { label: 'Experience', href: '#experience', icon: <FaBriefcase /> },
  { label: 'About', href: '#about', icon: <FaUsers /> },
  { label: 'Contact', href: '#contact', icon: <FaRocket /> },
];

const achievements = [
  { label: 'Projects Completed', value: '50+', icon: <FaCode /> },
  { label: 'Happy Clients', value: '30+', icon: <FaUsers /> },
  { label: 'Awards', value: '5', icon: <FaAward /> },
];

const getSocialIcon = (key) => {
  const icons = {
    github: <FaGithub />,
    linkedin: <FaLinkedin />,
    facebook: <FaFacebook />,
    instagram: <FaInstagram />,
    twitter: <FaTwitter />,
    youtube: <FaYoutube />,
    discord: <FaDiscord />,
    medium: <FaMedium />,
    dev: <FaDev />,
    email: <FaEnvelope />,
    phone: <FaPhone />,
  };
  return icons[key] || <FaGlobe />;
};

const getSocialColor = (key) => {
  const colors = {
    github: '#8B7CF6',
    linkedin: '#5B8DEF',
    facebook: '#5B8DEF',
    instagram: '#FF8B7E',
    twitter: '#5B8DEF',
    medium: '#334155',
    dev: '#334155',
    email: '#4FD1B5',
    phone: '#4FD1B5',
  };
  return colors[key] || '#8B7CF6';
};

function ClayDivider({ isDark }) {
  const c = isDark ? CLAY.dark : CLAY.light;
  return (
    <div className="relative h-6 w-full flex items-center justify-center mb-10">
      <div
        className="h-3 w-full rounded-full"
        style={pressed(isDark, 3)}
      />
      <div
        className="absolute w-16 h-6 rounded-full flex items-center justify-center"
        style={raised(isDark, 4)}
      >
        <FaHeartbeat style={{ color: c.textMuted }} className="text-xs" />
      </div>
    </div>
  );
}

function FooterLink({ label, href, icon, isDark }) {
  const c = isDark ? CLAY.dark : CLAY.light;
  return (
    <motion.a
      href={href}
      whileHover={{ x: 4 }}
      transition={{ type: 'spring', stiffness: 400, damping: 22 }}
      className="flex items-center gap-3 text-sm no-underline"
      style={{ color: c.text }}
    >
      <span
        className="w-8 h-8 rounded-2xl flex items-center justify-center text-xs shrink-0"
        style={raised(isDark, 4)}
      >
        <span style={{ color: '#8B7CF6' }}>{icon}</span>
      </span>
      <span>{label}</span>
    </motion.a>
  );
}

function SocialButton({ socialKey, label, url, isDark }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 300, damping: 20 });
  const sy = useSpring(y, { stiffness: 300, damping: 20 });
  const icon = getSocialIcon(socialKey);
  const color = getSocialColor(socialKey);
  const [pressedState, setPressedState] = useState(false);

  const handleMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - r.left - r.width / 2) * 0.3);
    y.set((e.clientY - r.top - r.height / 2) * 0.3);
  };

  return (
    <motion.a
      href={url}
      target={socialKey !== 'email' && socialKey !== 'phone' ? '_blank' : undefined}
      rel={socialKey !== 'email' && socialKey !== 'phone' ? 'noopener noreferrer' : undefined}
      aria-label={label}
      style={{ x: sx, y: sy, ...(pressedState ? pressed(isDark) : raised(isDark)) }}
      onMouseMove={handleMove}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      onMouseDown={() => setPressedState(true)}
      onMouseUp={() => setPressedState(false)}
      className="relative w-12 h-12 rounded-2xl flex items-center justify-center transition-shadow duration-200"
    >
      <span className="text-base" style={{ color }}>{icon}</span>
    </motion.a>
  );
}

function ScrollToTop({ isDark }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handler = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, y: 20, scale: 0.85 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.85 }}
          whileTap={{ ...pressed(isDark, 4) }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          style={raised(isDark, 6)}
          className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-2xl flex items-center justify-center"
          aria-label="Scroll to top"
        >
          <FaArrowUp style={{ color: '#8B7CF6' }} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

function HeartbeatBadge({ isDark }) {
  const { t } = useLanguage();
  const c = isDark ? CLAY.dark : CLAY.light;
  return (
    <div className="flex items-center gap-4 mb-6">
      <motion.div
        className="relative w-16 h-16 rounded-3xl flex items-center justify-center shrink-0"
        style={raised(isDark, 7)}
        animate={{
          boxShadow: [
            `7px 7px 14px ${c.shadowDark}, -7px -7px 14px ${c.shadowLight}`,
            `3px 3px 7px ${c.shadowDark}, -3px -3px 7px ${c.shadowLight}`,
            `7px 7px 14px ${c.shadowDark}, -7px -7px 14px ${c.shadowLight}`,
          ],
        }}
        transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
      >
        <FaHeartbeat style={{ color: '#FF8B7E' }} className="text-2xl" />
      </motion.div>
      <div>
        <div className="font-black text-lg leading-tight" style={{ color: c.heading, fontFamily: "'Baloo 2', sans-serif" }}>
          {t.profile?.name || 'Portfolio'}
        </div>
        <div className="text-[10px] font-semibold uppercase tracking-wider" style={{ color: c.textMuted }}>
          Developer
        </div>
      </div>
    </div>
  );
}

function AchievementCard({ label, value, icon, isDark }) {
  const c = isDark ? CLAY.dark : CLAY.light;
  return (
    <motion.div
      whileHover={{ y: -3 }}
      transition={{ type: 'spring', stiffness: 400, damping: 20 }}
      className="p-4 rounded-3xl text-center"
      style={raised(isDark, 5)}
    >
      <div
        className="w-9 h-9 mx-auto mb-2 rounded-2xl flex items-center justify-center"
        style={pressed(isDark, 3)}
      >
        <span style={{ color: '#4FD1B5' }} className="text-sm">{icon}</span>
      </div>
      <div className="text-xl font-bold" style={{ color: c.heading, fontFamily: "'Baloo 2', sans-serif" }}>
        {value}
      </div>
      <div className="text-[11px]" style={{ color: c.textMuted }}>
        {label}
      </div>
    </motion.div>
  );
}

export default function Footer({ isDark = true }) {
  const { language, t } = useLanguage();
  const year = new Date().getFullYear();
  const footerRef = useRef(null);
  const isInView = useInView(footerRef, { once: true, amount: 0.1 });
  const c = isDark ? CLAY.dark : CLAY.light;

  const text = {
    en: {
      tagline: "Passionate developer crafting digital experiences with clean code and modern technologies.",
      builtWith: "Built with React, Tailwind CSS & Framer Motion",
      rights: "All rights reserved.",
      systemName: "Developer Portfolio",
      portfolio: "Portfolio",
      quickLinks: "Quick Links",
      achievements: "Achievements",
      newsletter: "Stay Updated",
      newsletterText: "Subscribe to get the latest updates",
      subscribe: "Subscribe",
    },
    ta: {
      tagline: "சுத்தமான குறியீடு மற்றும் நவீன தொழில்நுட்பங்களுடன் டிஜிட்டல் அனுபவங்களை உருவாக்கும் ஆர்வமுள்ள டெவலப்பர்.",
      builtWith: "React, Tailwind CSS & Framer Motion மூலம் உருவாக்கப்பட்டது",
      rights: "அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.",
      systemName: "டெவலப்பர் போர்ட்ஃபோலியோ",
      portfolio: "போர்ட்ஃபோலியோ",
      quickLinks: "விரைவு இணைப்புகள்",
      achievements: "சாதனைகள்",
      newsletter: "புதுப்பிப்புகளுக்கு பதிவு செய்யவும்",
      newsletterText: "சமீபத்திய புதுப்பிப்புகளைப் பெற குழுசேரவும்",
      subscribe: "குழுசேர்",
    },
  };

  const copy = text[language] ?? text.en;

  const fadeInUp = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
  };

  const footerSocials = socials.filter(
    (s) => s.key && s.url && ['github', 'linkedin', 'twitter', 'email'].includes(s.key)
  );

  return (
    <>
      <ScrollToTop isDark={isDark} />

      <motion.footer
        ref={footerRef}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        style={{ background: c.bg }}
        className="relative transition-colors duration-500"
      >
        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 py-14">
          <ClayDivider isDark={isDark} />

          <motion.div
            variants={staggerChildren}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 mb-10"
          >
            <motion.div variants={fadeInUp} className="lg:col-span-4">
              <HeartbeatBadge isDark={isDark} />
              <p className="text-sm leading-relaxed mb-6 max-w-sm" style={{ color: c.textMuted }}>
                {copy.tagline}
              </p>
              <div className="flex flex-wrap gap-3">
                {footerSocials.map((social) => (
                  <SocialButton key={social.key} socialKey={social.key} label={social.label} url={social.url} isDark={isDark} />
                ))}
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="lg:col-span-3 p-5 rounded-3xl" style={raised(isDark, 5)}>
              <h4 className="text-[10px] font-black uppercase tracking-[0.25em] mb-5" style={{ color: '#8B7CF6' }}>
                {copy.portfolio}
              </h4>
              <div className="space-y-4">
                {portfolioLinks.map((l, i) => (
                  <FooterLink key={i} {...l} isDark={isDark} />
                ))}
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="lg:col-span-2 p-5 rounded-3xl" style={raised(isDark, 5)}>
              <h4 className="text-[10px] font-black uppercase tracking-[0.25em] mb-5" style={{ color: '#4FD1B5' }}>
                {copy.quickLinks}
              </h4>
              <div className="space-y-4">
                {portfolioLinks.slice(0, 3).map((l, i) => (
                  <FooterLink key={i} {...l} isDark={isDark} />
                ))}
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="lg:col-span-3">
              <h4 className="text-[10px] font-black uppercase tracking-[0.25em] mb-5" style={{ color: '#FF8B7E' }}>
                {copy.achievements}
              </h4>
              <div className="grid grid-cols-3 gap-3">
                {achievements.map((item, i) => (
                  <AchievementCard key={i} {...item} isDark={isDark} />
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div variants={fadeInUp} className="mb-8 p-6 rounded-3xl" style={pressed(isDark, 5)}>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h4 className="font-semibold text-sm" style={{ color: c.heading, fontFamily: "'Baloo 2', sans-serif" }}>
                  {copy.newsletter}
                </h4>
                <p className="text-xs" style={{ color: c.textMuted }}>
                  {copy.newsletterText}
                </p>
              </div>
              <div className="flex gap-2 w-full sm:w-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 sm:w-52 px-4 py-2.5 rounded-2xl text-sm outline-none border-none"
                  style={{ ...raised(isDark, 4), color: c.text }}
                />
                <motion.button
                  whileTap={{ ...pressed(isDark, 4) }}
                  className="px-5 py-2.5 rounded-2xl text-sm font-semibold"
                  style={{ ...raised(isDark, 4), color: '#8B7CF6', fontFamily: "'Baloo 2', sans-serif" }}
                >
                  {copy.subscribe}
                </motion.button>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="relative flex flex-col sm:flex-row items-center justify-between gap-4 text-xs pt-2"
          >
            <div className="text-center sm:text-left">
              <p style={{ color: c.textMuted }}>
                © {year} {t.profile?.name || 'Your Name'}. {copy.rights}
              </p>
              <p className="text-[10px] mt-1" style={{ color: c.textMuted, opacity: 0.7 }}>
                {copy.builtWith}
              </p>
            </div>

            <div className="flex items-center gap-3 px-4 py-2.5 rounded-full" style={pressed(isDark, 4)}>
              <motion.div
                className="w-2 h-2 rounded-full"
                style={{ background: '#FF8B7E' }}
                animate={{ scale: [1, 1.6, 1], opacity: [1, 0.5, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
              <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color: c.textMuted }}>
                {copy.systemName}
              </span>
              <motion.div
                className="w-2 h-2 rounded-full"
                style={{ background: '#4FD1B5' }}
                animate={{ scale: [1, 1.6, 1], opacity: [1, 0.5, 1] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 0.75 }}
              />
            </div>
          </motion.div>
        </div>
      </motion.footer>
    </>
  );
}
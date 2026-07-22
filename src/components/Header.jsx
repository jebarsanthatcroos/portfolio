import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiMenu, FiX, FiGithub, FiDownload, FiHome, FiUser,
  FiCode, FiBriefcase, FiMail, FiMoon, FiSun, FiStar, FiCpu,
} from "react-icons/fi";
import { useLanguage } from "../context/LanguageContext";
import LanguageToggle from "./LanguageToggle";



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

const raised = (isDark, size = 6) => {
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

const NAV_ITEMS = {
  en: [
    { id: "hero", label: "Home", icon: <FiHome className="w-4 h-4" /> },
    { id: "about", label: "About", icon: <FiUser className="w-4 h-4" /> },
    { id: "skills", label: "Skills", icon: <FiCpu className="w-4 h-4" /> },
    { id: "projects", label: "Projects", icon: <FiCode className="w-4 h-4" /> },
    { id: "experience", label: "Experience", icon: <FiBriefcase className="w-4 h-4" /> },
    { id: "contact", label: "Contact", icon: <FiMail className="w-4 h-4" /> },
  ],
  ta: [
    { id: "hero", label: "முகப்பு", icon: <FiHome className="w-4 h-4" /> },
    { id: "about", label: "எனைப் பற்றி", icon: <FiUser className="w-4 h-4" /> },
    { id: "skills", label: "திறன்கள்", icon: <FiCpu className="w-4 h-4" /> },
    { id: "projects", label: "திட்டங்கள்", icon: <FiCode className="w-4 h-4" /> },
    { id: "experience", label: "அனுபவம்", icon: <FiBriefcase className="w-4 h-4" /> },
    { id: "contact", label: "தொடர்பு", icon: <FiMail className="w-4 h-4" /> },
  ],
};

export default function Header({ isDark = true, onThemeToggle }) {
  const { language, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const c = isDark ? CLAY.dark : CLAY.light;

  const navItems = NAV_ITEMS[language] ?? NAV_ITEMS.en;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = navItems.map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 120;
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navItems]);

  const scrollTo = (id) => {
    setIsOpen(false);
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
      style={{ background: c.bg }}
      className="fixed top-0 left-0 w-full z-50 transition-colors duration-300"
    >
      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 md:h-20 flex items-center justify-between my-2 rounded-3xl"
        style={scrolled ? raised(isDark, 6) : {}}
      >
        {/* Logo / Brand */}
        <motion.button
          onClick={() => scrollTo("hero")}
          className="flex items-center gap-3"
          whileHover={{ scale: 1.02 }}
          whileTap={{ ...pressed(isDark, 3), scale: 0.98 }}
        >
          <div
            className="relative w-9 h-9 md:w-10 md:h-10 rounded-2xl flex items-center justify-center shrink-0"
            style={raised(isDark, 4)}
          >
            <FiStar style={{ color: '#8B7CF6' }} className="text-lg md:text-xl" />
          </div>
          <span
            className="text-base md:text-lg font-bold tracking-tight"
            style={{ color: c.heading, fontFamily: "'Baloo 2', sans-serif" }}
          >
            {t.profile?.name || 'Portfolio'}
          </span>
          <span
            className="hidden sm:inline-flex text-[10px] font-semibold px-3 py-1 rounded-full"
            style={{ ...pressed(isDark, 3), color: '#4FD1B5' }}
          >
            {language === "en" ? "Available" : "கிடைக்கும்"}
          </span>
        </motion.button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-2 p-1.5 rounded-3xl" style={pressed(isDark, 3)}>
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <motion.button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                style={isActive ? raised(isDark, 4) : {}}
                className="relative flex items-center gap-2 px-3 py-2 rounded-2xl text-sm font-medium transition-all duration-300"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.96 }}
              >
                <span style={{ color: isActive ? '#8B7CF6' : c.textMuted }}>{item.icon}</span>
                <span style={{ color: isActive ? c.heading : c.textMuted }}>{item.label}</span>
              </motion.button>
            );
          })}
        </nav>

        {/* Right side actions */}
        <div className="hidden lg:flex items-center gap-3">
          <motion.button
            onClick={onThemeToggle}
            style={raised(isDark, 4)}
            className="p-2.5 rounded-2xl transition-all duration-300"
            whileHover={{ scale: 1.08, rotate: 15 }}
            whileTap={{ ...pressed(isDark, 3), scale: 0.92 }}
            aria-label="Toggle theme"
          >
            {isDark ? <FiSun style={{ color: '#FF8B7E' }} className="text-lg" /> : <FiMoon style={{ color: '#8B7CF6' }} className="text-lg" />}
          </motion.button>

          <LanguageToggle isDark={isDark} />

          <motion.a
            href="https://github.com/jebarsanthatcroos"
            target="_blank"
            rel="noopener noreferrer"
            style={raised(isDark, 4)}
            className="p-2.5 rounded-2xl text-lg transition-all duration-300"
            whileHover={{ scale: 1.08, rotate: -5 }}
            whileTap={{ ...pressed(isDark, 3), scale: 0.92 }}
            aria-label="GitHub"
          >
            <span style={{ color: c.textMuted }}><FiGithub /></span>
          </motion.a>

          <motion.a
            href={t.profile?.resumeUrl || '#'}
            download
            style={raised(isDark, 5)}
            className="flex items-center gap-2 px-4 py-2.5 rounded-2xl text-sm font-semibold"
            whileHover={{ scale: 1.03 }}
            whileTap={{ ...pressed(isDark, 4), scale: 0.97 }}
          >
            <FiDownload style={{ color: '#4FD1B5' }} className="text-base" />
            <span style={{ color: c.heading, fontFamily: "'Baloo 2', sans-serif" }}>
              {language === "en" ? "Resume" : "பயோடேட்டா"}
            </span>
          </motion.a>
        </div>

        {/* Mobile actions */}
        <div className="flex lg:hidden items-center gap-2">
          <motion.button
            onClick={onThemeToggle}
            style={raised(isDark, 3)}
            className="p-2 rounded-xl transition-all duration-300"
            whileHover={{ scale: 1.08 }}
            whileTap={{ ...pressed(isDark, 3), scale: 0.92 }}
            aria-label="Toggle theme"
          >
            {isDark ? <FiSun style={{ color: '#FF8B7E' }} className="text-base" /> : <FiMoon style={{ color: '#8B7CF6' }} className="text-base" />}
          </motion.button>

          <motion.button
            style={raised(isDark, 3)}
            className="p-2 rounded-xl text-xl"
            onClick={() => setIsOpen((prev) => !prev)}
            whileHover={{ scale: 1.08 }}
            whileTap={{ ...pressed(isDark, 3), scale: 0.92 }}
            aria-label="Toggle menu"
          >
            <span style={{ color: c.heading }}>{isOpen ? <FiX /> : <FiMenu />}</span>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden overflow-hidden px-4"
          >
            <div className="flex flex-col p-4 gap-2 rounded-3xl mb-3" style={pressed(isDark, 4)}>
              {navItems.map((item, index) => {
                const isActive = activeSection === item.id;
                return (
                  <motion.button
                    key={item.id}
                    onClick={() => scrollTo(item.id)}
                    style={isActive ? raised(isDark, 3) : {}}
                    className="flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-medium transition-all duration-300"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ x: 6 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span style={{ color: isActive ? '#8B7CF6' : c.textMuted }}>{item.icon}</span>
                    <span style={{ color: isActive ? c.heading : c.textMuted }}>{item.label}</span>
                    {isActive && (
                      <span className="ml-auto w-1.5 h-1.5 rounded-full" style={{ background: '#4FD1B5' }} />
                    )}
                  </motion.button>
                );
              })}

              <div className="flex flex-col gap-3 pt-3 mt-2" style={{ borderTop: `1px solid ${isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)'}` }}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <LanguageToggle isDark={isDark} />
                    <motion.a
                      href="https://github.com/jebarsanthatcroos"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={raised(isDark, 3)}
                      className="p-2 rounded-xl text-lg"
                      whileHover={{ scale: 1.08 }}
                      whileTap={{ scale: 0.92 }}
                      aria-label="GitHub"
                    >
                      <span style={{ color: c.textMuted }}><FiGithub /></span>
                    </motion.a>
                  </div>
                  <motion.a
                    href={t.profile?.resumeUrl || '#'}
                    download
                    style={raised(isDark, 3)}
                    className="flex items-center gap-2 px-4 py-2 rounded-2xl text-xs font-semibold"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FiDownload style={{ color: '#4FD1B5' }} />
                    <span style={{ color: c.heading, fontFamily: "'Baloo 2', sans-serif" }}>
                      {language === "en" ? "Resume" : "பயோடேட்டா"}
                    </span>
                  </motion.a>
                </div>

                {/* Status indicator */}
                <div className="flex items-center gap-2 px-3 py-2 rounded-xl" style={pressed(isDark, 3)}>
                  <motion.div
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ background: '#4FD1B5' }}
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <span className="text-xs font-medium" style={{ color: c.textMuted }}>
                    {language === "en" ? "Available for work" : "பணிக்கு கிடைக்கும்"}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
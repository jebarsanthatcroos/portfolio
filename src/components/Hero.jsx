import { motion } from "framer-motion";
import { FiArrowDown, FiDownload, FiGithub } from "react-icons/fi";
import { useLanguage } from "../context/LanguageContext";

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

const pressed = (isDark, size = 6) => {
  const c = isDark ? CLAY.dark : CLAY.light;
  return {
    background: c.bg,
    boxShadow: `inset ${size}px ${size}px ${size * 2}px ${c.shadowDark}, inset -${size}px -${size}px ${size * 2}px ${c.shadowLight}`,
  };
};

export default function Hero({ isDark = true }) {
  const { language, t } = useLanguage();

  const scrollToProjects = () => {
    const el = document.getElementById("projects");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const c = isDark ? CLAY.dark : CLAY.light;

  return (
    <div className="min-h-screen flex items-center pt-16" style={{ background: c.bg }}>
      <div className="max-w-6xl mx-auto px-5 sm:px-8 w-full">
        <div className="grid md:grid-cols-[1.2fr_0.8fr] gap-12 items-center">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <p
              className="inline-block text-sm font-semibold tracking-wide mb-4 px-4 py-1.5 rounded-full"
              style={{ ...pressed(isDark, 4), color: '#4FD1B5' }}
            >
              {t.profile.role}
            </p>

            <h1
              className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight"
              style={{ color: c.heading, fontFamily: "'Baloo 2', sans-serif" }}
            >
              {t.profile.name}
            </h1>

            <p className="mt-5 text-lg max-w-xl leading-relaxed" style={{ color: c.text }}>
              {t.profile.tagline}
            </p>

            <p className="mt-3 text-sm" style={{ color: c.textMuted }}>{t.profile.location}</p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <motion.button
                onClick={scrollToProjects}
                whileHover={{ y: -2 }}
                whileTap={{ ...pressed(isDark, 4) }}
                className="flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold"
                style={{ ...raised(isDark, 6), color: '#4FD1B5', fontFamily: "'Baloo 2', sans-serif" }}
              >
                {language === "en" ? "View Projects" : "திட்டங்களைப் பார்க்க"}
                <FiArrowDown />
              </motion.button>

              <motion.a
                href={t.profile.resumeUrl}
                download
                whileHover={{ y: -2 }}
                whileTap={{ ...pressed(isDark, 4) }}
                className="flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold"
                style={{ ...raised(isDark, 6), color: c.text }}
              >
                <FiDownload />
                {language === "en" ? "Resume" : "பயோடேட்டா"}
              </motion.a>

              <motion.a
                href="https://github.com/jebarsanthatcroos"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -2 }}
                whileTap={{ ...pressed(isDark, 4) }}
                className="flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold"
                style={{ ...raised(isDark, 6), color: c.text }}
              >
                <FiGithub />
                GitHub
              </motion.a>
            </div>

            {/* Vitals */}
            <div className="mt-12 flex flex-wrap gap-4">
              {t.vitals.map((vital) => (
                <div
                  key={vital.label}
                  className="px-5 py-3 rounded-2xl"
                  style={raised(isDark, 5)}
                >
                  <p className="text-2xl font-bold" style={{ color: c.heading, fontFamily: "'Baloo 2', sans-serif" }}>
                    {vital.value}
                  </p>
                  <p className="text-xs mt-1" style={{ color: c.textMuted }}>{vital.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="justify-self-center md:justify-self-end"
          >
            <div
              className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-3xl overflow-hidden p-3"
              style={pressed(isDark, 8)}
            >
              <img
                src={t.profile.image}
                alt={t.profile.name}
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
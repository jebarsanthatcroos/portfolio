import { motion } from "framer-motion";
import { FiBookOpen } from "react-icons/fi";
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

const raised = (isDark, size = 5) => {
  const c = isDark ? CLAY.dark : CLAY.light;
  return {
    background: c.bg,
    boxShadow: `${size}px ${size}px ${size * 2}px ${c.shadowDark}, -${size}px -${size}px ${size * 2}px ${c.shadowLight}`,
  };
};

const pressed = (isDark, size = 3) => {
  const c = isDark ? CLAY.dark : CLAY.light;
  return {
    background: c.bg,
    boxShadow: `inset ${size}px ${size}px ${size * 2}px ${c.shadowDark}, inset -${size}px -${size}px ${size * 2}px ${c.shadowLight}`,
  };
};

export default function About({ isDark = true }) {
  const { language, t } = useLanguage();
  const c = isDark ? CLAY.dark : CLAY.light;

  const heading = language === "en" ? "About" : "எனைப் பற்றி";
  const educationLabel = language === "en" ? "Education" : "கல்வி";

  return (
    <div className="py-24" style={{ background: c.bg }}>
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <p className="text-sm font-semibold tracking-wide mb-2" style={{ color: '#8B7CF6' }}>
            {heading}
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold tracking-tight mb-10"
            style={{ color: c.heading, fontFamily: "'Baloo 2', sans-serif" }}
          >
            {language === "en" ? "A bit about my work" : "என் பணியைப் பற்றி சிறிது"}
          </h2>

          <div className="grid md:grid-cols-[1.4fr_1fr] gap-8">
            {/* Summary — set into a pressed panel so it reads as clay, not bare text */}
            <div className="p-6 sm:p-8 rounded-3xl" style={pressed(isDark, 4)}>
              <p className="leading-relaxed text-base sm:text-lg" style={{ color: c.text }}>
                {t.profile.summary}
              </p>
            </div>

            {/* Education cards */}
            <div className="space-y-4">
              {t.education.map((edu, i) => (
                <motion.div
                  key={edu.institution}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="p-5 rounded-3xl"
                  style={raised(isDark, 5)}
                >
                  <div
                    className="inline-flex items-center gap-2 text-xs font-semibold mb-3 px-3 py-1.5 rounded-full"
                    style={{ ...pressed(isDark, 2), color: '#4FD1B5' }}
                  >
                    <FiBookOpen />
                    {educationLabel}
                  </div>
                  <p
                    className="font-semibold leading-snug"
                    style={{ color: c.heading, fontFamily: "'Baloo 2', sans-serif" }}
                  >
                    {edu.credential}
                  </p>
                  <p className="text-sm mt-1" style={{ color: c.textMuted }}>
                    {edu.institution}
                  </p>
                  <p className="text-xs mt-2" style={{ color: c.textMuted, opacity: 0.75 }}>
                    {edu.period}
                  </p>
                  {edu.notes && (
                    <p className="text-sm mt-3 leading-relaxed" style={{ color: c.textMuted }}>
                      {edu.notes}
                    </p>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
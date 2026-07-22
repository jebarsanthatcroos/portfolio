import { FiBriefcase } from "react-icons/fi";
import { useLanguage } from "../context/LanguageContext";
import { motion } from "framer-motion";



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

export default function Experience({ isDark = true }) {
  const { language, t } = useLanguage();
  const c = isDark ? CLAY.dark : CLAY.light;

  const heading = language === "en" ? "Experience" : "அனுபவம்";
  const subheading =
    language === "en"
      ? "Where I've been putting in the work"
      : "நான் பணியாற்றி வரும் இடங்கள்";

  return (
    <div className="py-24" style={{ background: c.bg }}>
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-sm font-semibold tracking-wide mb-2"
          style={{ color: '#8B7CF6' }}
        >
          {heading}
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="text-3xl sm:text-4xl font-bold tracking-tight mb-12"
          style={{ color: c.heading, fontFamily: "'Baloo 2', sans-serif" }}
        >
          {subheading}
        </motion.h2>

        <div className="relative pl-10 space-y-6">
          {/* Timeline groove replacing the hairline border */}
          <div
            className="absolute left-3 top-1.5 bottom-1.5 w-2 rounded-full"
            style={pressed(isDark, 2)}
          />

          {t.experience.map((exp, i) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              className="relative"
            >
              {/* Timeline dot — raised clay bead sitting on the groove */}
              <span
                className="absolute -left-[2.65rem] top-3 w-4 h-4 rounded-full flex items-center justify-center"
                style={raised(isDark, 3)}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ background: '#4FD1B5' }}
                />
              </span>

              <motion.div
                whileHover={{ y: -3 }}
                transition={{ type: 'spring', stiffness: 400, damping: 22 }}
                className="p-5 sm:p-6 rounded-3xl"
                style={raised(isDark, 5)}
              >
                <div
                  className="inline-flex items-center gap-2 text-xs font-semibold mb-3 px-3 py-1.5 rounded-full"
                  style={{ ...pressed(isDark, 2), color: '#8B7CF6' }}
                >
                  <FiBriefcase />
                  {exp.period}
                </div>

                <h3
                  className="text-lg font-semibold mb-2"
                  style={{ color: c.heading, fontFamily: "'Baloo 2', sans-serif" }}
                >
                  {exp.title}
                </h3>

                <p className="text-sm leading-relaxed max-w-2xl" style={{ color: c.textMuted }}>
                  {exp.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
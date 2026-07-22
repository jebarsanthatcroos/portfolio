import { motion } from "framer-motion";
import {
  FiCode,
  FiServer,
  FiDatabase,
  FiTool,
} from "react-icons/fi";
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

// Each group icon rotates through the three clay accents so groups read
// distinctly at a glance, same idea as the status colors in Projects.
const GROUP_ICONS = {
  Frontend: [FiCode, '#8B7CF6'],
  "முன்தளம்": [FiCode, '#8B7CF6'],
  Backend: [FiServer, '#4FD1B5'],
  "பின்தளம்": [FiServer, '#4FD1B5'],
  "Data & Infra": [FiDatabase, '#FF8B7E'],
  "தரவு & உள்கட்டமைப்பு": [FiDatabase, '#FF8B7E'],
  "Also comfortable in": [FiTool, '#8B7CF6'],
  "மேலும் பரிச்சயமானவை": [FiTool, '#8B7CF6'],
};
const DEFAULT_ICON = [FiTool, '#8B7CF6'];

export default function Skills({ isDark = true }) {
  const { language, t } = useLanguage();
  const c = isDark ? CLAY.dark : CLAY.light;

  const heading = language === "en" ? "Skills" : "திறன்கள்";
  const subheading =
    language === "en"
      ? "Tools and technologies I work with"
      : "நான் பயன்படுத்தும் கருவிகள் மற்றும் தொழில்நுட்பங்கள்";

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

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {t.skills.map((group, i) => {
            const [Icon, accent] = GROUP_ICONS[group.group] ?? DEFAULT_ICON;

            return (
              <motion.div
                key={group.group}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                whileHover={{ y: -3 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="p-5 rounded-3xl"
                style={raised(isDark, 5)}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className="w-9 h-9 rounded-2xl flex items-center justify-center shrink-0"
                    style={pressed(isDark, 3)}
                  >
                    <Icon style={{ color: accent }} className="text-base" />
                  </span>
                  <p
                    className="text-sm font-semibold"
                    style={{ color: c.heading, fontFamily: "'Baloo 2', sans-serif" }}
                  >
                    {group.group}
                  </p>
                </div>

                <ul className="space-y-2.5">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="text-sm flex items-center gap-2.5"
                      style={{ color: c.textMuted }}
                    >
                      <span
                        className="w-1.5 h-1.5 rounded-full shrink-0"
                        style={{ background: accent }}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
import { motion } from "framer-motion";
import { FiGithub, FiExternalLink, FiCheckCircle } from "react-icons/fi";
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

// Status now reads as color, not border+bg combos — each maps to one clay accent
const STATUS_ACCENT = {
  "In development": "#FF8B7E",
  "மேம்பாட்டில் உள்ளது": "#FF8B7E",
  "Academic project": "#8B7CF6",
  "கல்வித் திட்டம்": "#8B7CF6",
};
const DEFAULT_ACCENT = "#4FD1B5";

export default function Projects({ isDark = true }) {
  const { language, t } = useLanguage();
  const c = isDark ? CLAY.dark : CLAY.light;

  const heading = language === "en" ? "Projects" : "திட்டங்கள்";
  const subheading =
    language === "en"
      ? "Things I've been building"
      : "நான் உருவாக்கிக் கொண்டிருப்பவை";
  const codeLabel = language === "en" ? "Code" : "குறியீடு";
  const liveLabel = language === "en" ? "Live" : "நேரடி";

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

        <div className="grid md:grid-cols-2 gap-6">
          {t.projects.map((project, i) => {
            const accent = STATUS_ACCENT[project.status] ?? DEFAULT_ACCENT;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="flex flex-col p-6 rounded-3xl"
                style={raised(isDark, 6)}
              >
                <div className="flex items-start justify-between gap-3 mb-4">
                  <h3
                    className="text-xl font-semibold"
                    style={{ color: c.heading, fontFamily: "'Baloo 2', sans-serif" }}
                  >
                    {project.name}
                  </h3>
                  <span
                    className="shrink-0 text-xs font-semibold px-3 py-1 rounded-full"
                    style={{ ...pressed(isDark, 3), color: accent }}
                  >
                    {project.status}
                  </span>
                </div>

                <p className="text-sm leading-relaxed mb-4" style={{ color: c.text }}>
                  {project.summary}
                </p>

                <ul className="space-y-2 mb-5">
                  {project.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex items-start gap-2 text-sm"
                      style={{ color: c.textMuted }}
                    >
                      <FiCheckCircle style={{ color: '#4FD1B5' }} className="mt-0.5 shrink-0" />
                      {highlight}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-3 py-1.5 rounded-full"
                      style={{ ...pressed(isDark, 2), color: c.textMuted }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div
                  className="mt-auto flex items-center gap-3 pt-4"
                  style={{ borderTop: `1px solid ${isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)'}` }}
                >
                  {project.links.github && (
                    <motion.a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ ...pressed(isDark, 3), scale: 0.97 }}
                      className="flex items-center gap-1.5 text-sm font-semibold px-3 py-2 rounded-2xl"
                      style={raised(isDark, 3)}
                    >
                      <FiGithub style={{ color: c.textMuted }} />
                      <span style={{ color: c.text }}>{codeLabel}</span>
                    </motion.a>
                  )}
                  {project.links.live && (
                    <motion.a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ ...pressed(isDark, 3), scale: 0.97 }}
                      className="flex items-center gap-1.5 text-sm font-semibold px-3 py-2 rounded-2xl"
                      style={raised(isDark, 3)}
                    >
                      <FiExternalLink style={{ color: '#8B7CF6' }} />
                      <span style={{ color: c.text }}>{liveLabel}</span>
                    </motion.a>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
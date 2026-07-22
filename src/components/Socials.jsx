import { motion } from "framer-motion";
import {
  FiGithub,
  FiLinkedin,
  FiFacebook,
  FiInstagram,
  FiMail,
  FiPhone,
} from "react-icons/fi";
import { socials } from "../config/socials";


const CLAY = {
  light: {
    bg: '#E4E9F2',
    shadowDark: 'rgba(163,177,198,0.55)',
    shadowLight: 'rgba(255,255,255,0.9)',
    textMuted: '#64748B',
  },
  dark: {
    bg: '#262B36',
    shadowDark: 'rgba(0,0,0,0.55)',
    shadowLight: 'rgba(70,78,96,0.55)',
    textMuted: '#8B95A8',
  },
};

const raised = (isDark, size = 4) => {
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

const ICONS = {
  github: FiGithub,
  linkedin: FiLinkedin,
  facebook: FiFacebook,
  instagram: FiInstagram,
  email: FiMail,
  phone: FiPhone,
};

// Rotates through the three clay accents so a row of icons doesn't
// read as one flat block — same idea as the Skills category coloring.
const ACCENTS = ['#8B7CF6', '#4FD1B5', '#FF8B7E'];

export default function Socials({ className = "", isDark = true }) {
  const c = isDark ? CLAY.dark : CLAY.light;

  if (socials.length === 0) return null;

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {socials.map((social, i) => {
        const Icon = ICONS[social.key];
        const isExternal = social.key !== "email" && social.key !== "phone";
        const accent = ACCENTS[i % ACCENTS.length];

        return (
          <motion.a
            key={social.key}
            href={social.url}
            target={isExternal ? "_blank" : undefined}
            rel={isExternal ? "noopener noreferrer" : undefined}
            aria-label={social.label}
            whileHover={{ scale: 1.08 }}
            whileTap={{ ...pressed(isDark, 3), scale: 0.94 }}
            style={raised(isDark, 4)}
            className="w-10 h-10 rounded-2xl flex items-center justify-center text-lg transition-shadow duration-200"
          >
            {Icon ? (
              <Icon style={{ color: accent }} />
            ) : (
              <span className="text-xs font-semibold" style={{ color: c.textMuted }}>
                {social.label}
              </span>
            )}
          </motion.a>
        );
      })}
    </div>
  );
}
import { motion } from "framer-motion";
import { FiMail, FiPhone, FiMapPin, FiSend } from "react-icons/fi";
import { useLanguage } from "../context/LanguageContext";
import { socials } from "../config/socials";
import Socials from "./Socials";

/*
  CLAYMORPHISM TOKENS — shared with Header.jsx / Footer.jsx / Experience.jsx / Projects.jsx / Skills.jsx / Socials.jsx / About.jsx
  Base:     light #E4E9F2 (soft periwinkle-grey)   dark #262B36 (soft slate)
  Accents:  lavender #8B7CF6   mint #4FD1B5   coral #FF8B7E
  Type:     display "Baloo 2" / body inherited sans
  Shadow:   dual-tone raised clay — light source top-left
*/

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

export default function Contact({ isDark = true }) {
  const { language, t } = useLanguage();
  const c = isDark ? CLAY.dark : CLAY.light;

  const heading = language === "en" ? "Contact" : "தொடர்பு";
  const subheading =
    language === "en"
      ? "Let's talk about your project"
      : "உங்கள் திட்டத்தைப் பற்றி பேசலாம்";
  const description =
    language === "en"
      ? "Open to internships, collaborations, and interesting problems. Reach out through any of the channels below."
      : "இன்டர்ன்ஷிப், கூட்டு பணிகள், சுவாரஸ்யமான பிரச்சினைகளுக்கு எப்போதும் தயார். கீழே உள்ள எந்த வழியிலும் தொடர்பு கொள்ளலாம்.";

  const email = socials.find((s) => s.key === "email");
  const phone = socials.find((s) => s.key === "phone");

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
          className="text-3xl sm:text-4xl font-bold tracking-tight mb-4"
          style={{ color: c.heading, fontFamily: "'Baloo 2', sans-serif" }}
        >
          {subheading}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-xl mb-12 leading-relaxed"
          style={{ color: c.textMuted }}
        >
          {description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="grid sm:grid-cols-2 gap-5 max-w-2xl"
        >
          {email && (
            <motion.a
              href={email.url}
              whileHover={{ y: -3 }}
              className="flex items-center gap-4 p-5 rounded-3xl"
              style={raised(isDark, 5)}
            >
              <span
                className="flex items-center justify-center w-10 h-10 rounded-2xl shrink-0"
                style={pressed(isDark, 3)}
              >
                <FiMail style={{ color: '#8B7CF6' }} />
              </span>
              <div className="min-w-0">
                <p className="text-xs" style={{ color: c.textMuted, opacity: 0.75 }}>
                  {language === "en" ? "Email" : "மின்னஞ்சல்"}
                </p>
                <p className="text-sm truncate" style={{ color: c.text }}>
                  {email.url.replace("mailto:", "")}
                </p>
              </div>
            </motion.a>
          )}

          {phone && (
            <motion.a
              href={phone.url}
              whileHover={{ y: -3 }}
              className="flex items-center gap-4 p-5 rounded-3xl"
              style={raised(isDark, 5)}
            >
              <span
                className="flex items-center justify-center w-10 h-10 rounded-2xl shrink-0"
                style={pressed(isDark, 3)}
              >
                <FiPhone style={{ color: '#4FD1B5' }} />
              </span>
              <div className="min-w-0">
                <p className="text-xs" style={{ color: c.textMuted, opacity: 0.75 }}>
                  {language === "en" ? "Phone" : "தொலைபேசி"}
                </p>
                <p className="text-sm truncate" style={{ color: c.text }}>
                  {phone.url.replace("tel:", "")}
                </p>
              </div>
            </motion.a>
          )}

          <div
            className="flex items-center gap-4 p-5 rounded-3xl sm:col-span-2"
            style={raised(isDark, 5)}
          >
            <span
              className="flex items-center justify-center w-10 h-10 rounded-2xl shrink-0"
              style={pressed(isDark, 3)}
            >
              <FiMapPin style={{ color: '#FF8B7E' }} />
            </span>
            <div className="min-w-0">
              <p className="text-xs" style={{ color: c.textMuted, opacity: 0.75 }}>
                {language === "en" ? "Location" : "இருப்பிடம்"}
              </p>
              <p className="text-sm" style={{ color: c.text }}>{t.profile.location}</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10 flex flex-wrap items-center gap-5"
        >
          {email && (
            <motion.a
              href={email.url}
              whileHover={{ scale: 1.03 }}
              whileTap={{ ...pressed(isDark, 4), scale: 0.97 }}
              className="flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold"
              style={raised(isDark, 5)}
            >
              <FiSend style={{ color: '#8B7CF6' }} />
              <span style={{ color: c.heading, fontFamily: "'Baloo 2', sans-serif" }}>
                {language === "en" ? "Send a message" : "செய்தி அனுப்ப"}
              </span>
            </motion.a>
          )}
          <Socials isDark={isDark} />
        </motion.div>
      </div>
    </div>
  );
}
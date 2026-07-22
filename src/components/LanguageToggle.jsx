import { useLanguage } from "../context/LanguageContext";

export default function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="px-3 py-1.5 rounded-full border border-slate-600 text-sm font-medium
                 hover:bg-slate-700/40 transition-colors"
      aria-label="Toggle language"
    >
      {language === "en" ? "தமிழ்" : "English"}
    </button>
  );
}
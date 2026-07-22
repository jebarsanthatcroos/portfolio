import jebarsanImage from "../assets/jebarsan.png";

export const translations = {
  en: {
    profile: {
      name: "Jebarsanthatcroos",
      role: "Health Information & Communication Technology (HICT) Undergraduate",
      tagline: "Building the software that sits between patients and the people who care for them.",
      image: jebarsanImage,
      location: "Thalaimanar, Mannar, Sri Lanka",
      summary:
        "Undergraduate in Health Information & Communication Technology, building full-stack " +
        "systems that connect clinical workflows with modern web engineering. I work across the " +
        "stack — React/Next.js on the front end, Node.js/Express and Firebase/Prisma on the back " +
        "end — with a focus on role-based access, data integrity, and interfaces that hold up " +
        "under real clinical use cases.",
      resumeUrl: "/resume.pdf",
    },
    education: [
      {
        institution: "Gampaha Wickramarachchi University of Indigenous Medicine",
        credential: "BHSc in Health Information & Communication Technology",
        period: "In progress",
        notes: "Coursework spans web design & development, backend systems, databases, and health informatics.",
      },
    ],
    skills: [
      { group: "Frontend", items: ["React", "Next.js", "Tailwind CSS", "Framer Motion", "JavaScript / TypeScript"] },
      { group: "Backend", items: ["Node.js", "Express", "Prisma", "Auth.js / NextAuth", "REST API design"] },
      { group: "Data & Infra", items: ["Firebase (Auth, Firestore)", "MongoDB", "Docker", "Git / GitHub Actions"] },
      { group: "Also comfortable in", items: ["Java", "SQL", "Jest / testing"] },
    ],
    vitals: [
      { label: "Active projects", value: "3" },
      { label: "Stack layers", value: "Full" },
      { label: "Status", value: "Building" },
    ],
    projects: [
      {
        id: "bloodcare",
        name: "BloodCare",
        status: "In development",
        summary:
          "A dark-themed blood donation platform connecting donors, recipients, and administrators, " +
          "with role-aware access and real-time donation tracking.",
        stack: ["Next.js", "Firebase", "Firestore", "Tailwind CSS", "Framer Motion"],
        highlights: [
          "Role-aware navigation driven by Firebase custom claims",
          "Admin dashboard for managing donors and requests",
          "Firestore security rules scoped to admin-only mutations",
        ],
        links: { github: "https://github.com/jebarsanthatcroos", live: "" },
      },
      {
        id: "medicare-hub",
        name: "Medicare Hub",
        status: "Academic project",
        summary:
          "A six-role healthcare platform (Patient, Doctor, Pharmacist, Receptionist, Lab Technician, " +
          "Admin) with prescription and pharmacy management workflows.",
        stack: ["Next.js", "Tailwind CSS v4", "NextAuth", "Prisma", "Docker"],
        highlights: [
          "End-to-end pharmacy management: prescriptions, deliveries, pharmacist linking",
          "Containerised with a multi-stage Docker build and nginx reverse proxy",
          "Role-based access control across six distinct user roles",
        ],
        links: { github: "https://github.com/jebarsanthatcroos/Mine-Project", live: "https://www.jebarsanthatcroos.xyz" },
      },
      {
        id: "workbooking-app",
        name: "Workbooking App",
        status: "Academic project",
        summary:
          "A social-media style Next.js application with a fully tested API layer covering users, " +
          "auth, friends, and notifications.",
        stack: ["Next.js", "Jest", "ts-jest", "REST APIs"],
        highlights: [
          "Complete Jest test suites across six API route groups",
          "Consistent mock/helper patterns for maintainable test coverage",
        ],
        links: { github: "", live: "" },
      },
    ],
    experience: [
      {
        title: "HICT Coursework — Web & Backend Development",
        period: "Ongoing",
        description:
          "Mini-projects spanning semantic HTML/CSS layout systems, Express backend architecture, " +
          "and database-backed applications (Prisma, MongoDB, Auth.js).",
      },
    ],
  },

  ta: {
    profile: {
      name: "ஜெபர்சன் தற்குரூஸ்",
      role: "சுகாதார தகவல் மற்றும் தகவல் தொடர்பு தொழில்நுட்பம் (HICT) பட்டப்படிப்பு மாணவர்",
      tagline: "நோயாளிகளுக்கும் அவர்களைக் கவனிக்கும் நபர்களுக்கும் இடையே இருக்கும் மென்பொருளை உருவாக்குகிறேன்.",
       image: jebarsanImage,
      location: "தலைமன்னார், மன்னார், இலங்கை",
      summary:
        "சுகாதார தகவல் மற்றும் தகவல் தொடர்பு தொழில்நுட்பத்தில் பட்டப்படிப்பு மாணவன், மருத்துவ " +
        "பணிப்பாய்வுகளை நவீன வலை பொறியியலுடன் இணைக்கும் முழு அளவிலான அமைப்புகளை உருவாக்குகிறேன். " +
        "முன்தளத்தில் React/Next.js, பின்தளத்தில் Node.js/Express மற்றும் Firebase/Prisma என " +
        "முழு stack-லும் பணிபுரிகிறேன் — பங்கு அடிப்படையிலான அணுகல், தரவு நேர்மை, மற்றும் " +
        "நிஜ மருத்துவச் சூழலில் நம்பகமாகச் செயல்படும் இடைமுகங்களில் கவனம் செலுத்துகிறேன்.",
      resumeUrl: "/resume.pdf",
    },
    education: [
      {
        institution: "கம்பஹா விக்ரமாரச்சி பாரம்பரிய மருத்துவப் பல்கலைக்கழகம்",
        credential: "சுகாதார தகவல் மற்றும் தகவல் தொடர்பு தொழில்நுட்பத்தில் BHSc பட்டம்",
        period: "படித்துக்கொண்டிருக்கிறேன்",
        notes: "வலை வடிவமைப்பு & மேம்பாடு, பின்தள அமைப்புகள், தரவுத்தளங்கள் மற்றும் சுகாதார தகவலியல் ஆகியவற்றை உள்ளடக்கிய பாடத்திட்டம்.",
      },
    ],
    skills: [
      { group: "முன்தளம்", items: ["React", "Next.js", "Tailwind CSS", "Framer Motion", "JavaScript / TypeScript"] },
      { group: "பின்தளம்", items: ["Node.js", "Express", "Prisma", "Auth.js / NextAuth", "REST API வடிவமைப்பு"] },
      { group: "தரவு & உள்கட்டமைப்பு", items: ["Firebase (Auth, Firestore)", "MongoDB", "Docker", "Git / GitHub Actions"] },
      { group: "மேலும் பரிச்சயமானவை", items: ["Java", "SQL", "Jest / testing"] },
    ],
    vitals: [
      { label: "செயலில் உள்ள திட்டங்கள்", value: "3" },
      { label: "அடுக்கு நிலைகள்", value: "முழுமையானது" },
      { label: "நிலை", value: "கட்டமைத்துக்கொண்டிருக்கிறேன்" },
    ],
    projects: [
      {
        id: "bloodcare",
        name: "BloodCare",
        status: "மேம்பாட்டில் உள்ளது",
        summary:
          "இரத்த தானம் செய்பவர்கள், பெறுநர்கள் மற்றும் நிர்வாகிகளை இணைக்கும் இருண்ட தீம் கொண்ட " +
          "இரத்த தான தளம், பங்கு அடிப்படையிலான அணுகல் மற்றும் நேரடி இரத்த தான கண்காணிப்புடன்.",
        stack: ["Next.js", "Firebase", "Firestore", "Tailwind CSS", "Framer Motion"],
        highlights: [
          "Firebase custom claims மூலம் இயக்கப்படும் பங்கு அடிப்படையிலான வழிசெலுத்தல்",
          "நன்கொடையாளர்கள் மற்றும் கோரிக்கைகளை நிர்வகிக்க நிர்வாக டாஷ்போர்டு",
          "நிர்வாகிக்கு மட்டும் என வரையறுக்கப்பட்ட Firestore பாதுகாப்பு விதிகள்",
        ],
        links: { github: "https://github.com/jebarsanthatcroos", live: "" },
      },
      {
        id: "medicare-hub",
        name: "Medicare Hub",
        status: "கல்வித் திட்டம்",
        summary:
          "நோயாளி, மருத்துவர், மருந்தாளுநர், வரவேற்பாளர், ஆய்வக தொழில்நுட்பவியலாளர், நிர்வாகி " +
          "ஆகிய ஆறு பங்குகளைக் கொண்ட சுகாதார தளம், மருந்து சீட்டு மற்றும் மருந்தகம் மேலாண்மை " +
          "பணிப்பாய்வுகளுடன்.",
        stack: ["Next.js", "Tailwind CSS v4", "NextAuth", "Prisma", "Docker"],
        highlights: [
          "முழுமையான மருந்தக மேலாண்மை: மருந்து சீட்டுகள், விநியோகங்கள், மருந்தாளுநர் இணைப்பு",
          "பல-கட்ட Docker கட்டமைப்பு மற்றும் nginx reverse proxy மூலம் கொள்கலனாக்கப்பட்டது",
          "ஆறு வெவ்வேறு பயனர் பங்குகளில் பங்கு அடிப்படையிலான அணுகல் கட்டுப்பாடு",
        ],
        links: { github: "https://github.com/jebarsanthatcroos/Mine-Project", live: "https://www.jebarsanthatcroos.xyz" },
      },
      {
        id: "workbooking-app",
        name: "Workbooking App",
        status: "கல்வித் திட்டம்",
        summary:
          "பயனர்கள், அங்கீகாரம், நண்பர்கள், அறிவிப்புகள் ஆகியவற்றை உள்ளடக்கிய முழுமையாக " +
          "சோதிக்கப்பட்ட API அடுக்குடன் கூடிய சமூக ஊடக பாணி Next.js பயன்பாடு.",
        stack: ["Next.js", "Jest", "ts-jest", "REST APIs"],
        highlights: [
          "ஆறு API route குழுக்களில் முழுமையான Jest சோதனை தொகுப்புகள்",
          "பராமரிக்கக்கூடிய சோதனை கவரேஜுக்கான சீரான mock/helper முறைகள்",
        ],
        links: { github: "", live: "" },
      },
    ],
    experience: [
      {
        title: "HICT பாடத்திட்டம் — வலை & பின்தள மேம்பாடு",
        period: "தொடர்கிறது",
        description:
          "செமான்டிக் HTML/CSS லேஅவுட் அமைப்புகள், Express பின்தள கட்டமைப்பு, மற்றும் தரவுத்தள " +
          "ஆதரவுடன் கூடிய பயன்பாடுகள் (Prisma, MongoDB, Auth.js) ஆகியவற்றை உள்ளடக்கிய சிறு திட்டங்கள்.",
      },
    ],
  },
};


export const getContent = (lang = "en") => translations[lang] ?? translations.en;
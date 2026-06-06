// src/styles/tadaraDesignSystem.js

export const tadaraTheme = {
  brand: {
    name: "Tadara",
    positioning:
      "Une lettre mensuelle personnalisée pour transmettre aux enfants l’héritage de la civilisation arabo-musulmane.",
    ageTarget: "À partir de 8 ans",
  },

  colors: {
    // Couleurs principales inspirées du hero joint
    background: {
      main: "#C7DCE3",        // bleu-gris doux du hero
      soft: "#E8F0F2",        // fond clair secondaire
      cream: "#F4EFE4",       // papier ancien / lettre
      dark: "#2B1712",        // brun profond du bouton/logo
      imageOverlay: "rgba(43, 23, 18, 0.18)",
    },

    text: {
      primary: "#2B1712",     // brun profond, premium
      secondary: "#4B3A34",   // brun adouci
      muted: "#756A63",
      inverse: "#FFFFFF",
      subtle: "#8B817A",
    },

    brand: {
      primary: "#351912",     // chocolat très sombre
      secondary: "#A9825A",   // doré ancien / manuscrit
      accent: "#6F8F99",      // bleu patrimonial
      highlight: "#D8B77A",   // doré doux
    },

    border: {
      light: "rgba(43, 23, 18, 0.14)",
      medium: "rgba(43, 23, 18, 0.28)",
      strong: "rgba(43, 23, 18, 0.48)",
      white: "rgba(255, 255, 255, 0.75)",
    },

    form: {
      inputBg: "#FFFFFF",
      inputText: "#2B1712",
      inputPlaceholder: "#B8B8B8",
      inputBorder: "rgba(255, 255, 255, 0.85)",
      buttonBg: "#351912",
      buttonText: "#FFFFFF",
      buttonHover: "#4A2118",
    },

    status: {
      success: "#3D6B4F",
      warning: "#B98235",
      error: "#9E3B32",
    },
  },

  typography: {
    fonts: {
      heading: "'Playfair Display', Georgia, serif",
      body: "'Montserrat', 'Inter', Arial, sans-serif",
      accent: "'Cormorant Garamond', Georgia, serif",
    },

    weights: {
      regular: 400,
      medium: 500,
      semiBold: 600,
      bold: 700,
      black: 800,
    },

    sizes: {
      xs: "0.75rem",     // 12px
      sm: "0.875rem",   // 14px
      base: "1rem",     // 16px
      md: "1.125rem",   // 18px
      lg: "1.25rem",    // 20px
      xl: "1.5rem",     // 24px
      "2xl": "2rem",    // 32px
      "3xl": "2.5rem",  // 40px
      "4xl": "3.25rem", // 52px
      "5xl": "4rem",    // 64px
    },

    lineHeights: {
      tight: 0.92,
      heading: 1.02,
      body: 1.55,
      relaxed: 1.75,
    },

    letterSpacing: {
      tight: "-0.04em",
      normal: "0",
      wide: "0.04em",
      upper: "0.08em",
    },
  },

  spacing: {
    0: "0",
    1: "0.25rem",
    2: "0.5rem",
    3: "0.75rem",
    4: "1rem",
    5: "1.25rem",
    6: "1.5rem",
    8: "2rem",
    10: "2.5rem",
    12: "3rem",
    16: "4rem",
    20: "5rem",
    24: "6rem",
    32: "8rem",
  },

  radius: {
    none: "0",
    sm: "0.375rem",
    md: "0.75rem",
    lg: "1rem",
    xl: "1.5rem",
    pill: "999px",
  },

  shadows: {
    soft: "0 12px 32px rgba(43, 23, 18, 0.08)",
    medium: "0 20px 50px rgba(43, 23, 18, 0.14)",
    strong: "0 28px 80px rgba(43, 23, 18, 0.22)",
    inset: "inset 0 0 0 1px rgba(255,255,255,0.32)",
  },

  layout: {
    container: {
      maxWidth: "1440px",
      paddingDesktop: "4rem",
      paddingTablet: "2rem",
      paddingMobile: "1.25rem",
    },

    hero: {
      minHeight: "100vh",
      gridDesktop: "46% 54%",
      gridTablet: "1fr",
      contentMaxWidth: "560px",
      imageMinHeightMobile: "420px",
    },
  },

  components: {
    logo: {
      fontFamily: "'Cormorant Garamond', Georgia, serif",
      fontSize: "2rem",
      fontWeight: 700,
      color: "#2B1712",
      letterSpacing: "0.03em",
    },

    badge: {
      bg: "transparent",
      color: "#2B1712",
      border: "1.5px solid rgba(43, 23, 18, 0.5)",
      radius: "999px",
      fontSize: "0.75rem",
      fontWeight: 700,
      textTransform: "uppercase",
      letterSpacing: "0.06em",
      padding: "0.45rem 0.8rem",
    },

    heroTitle: {
      fontFamily: "'Cormorant Garamond', 'Playfair Display', Georgia, serif",
      color: "#2B1712",
      fontWeight: 800,
      textTransform: "uppercase",
      letterSpacing: "-0.035em",
      lineHeight: 0.94,
      desktopSize: "clamp(3rem, 5vw, 5.6rem)",
      tabletSize: "clamp(2.5rem, 7vw, 4rem)",
      mobileSize: "clamp(2.15rem, 10vw, 3rem)",
    },

    heroText: {
      fontFamily: "'Montserrat', 'Inter', Arial, sans-serif",
      color: "#2B1712",
      fontSize: "clamp(1rem, 1.35vw, 1.25rem)",
      lineHeight: 1.55,
      fontWeight: 400,
      strongWeight: 700,
      maxWidth: "460px",
    },

    divider: {
      width: "220px",
      height: "4px",
      radius: "999px",
      bg: "rgba(43, 23, 18, 0.42)",
      margin: "2rem 0",
    },

    ctaText: {
      fontFamily: "'Montserrat', 'Inter', Arial, sans-serif",
      color: "#2B1712",
      fontSize: "1.05rem",
      lineHeight: 1.45,
      fontWeight: 700,
      maxWidth: "480px",
    },

    input: {
      height: "58px",
      bg: "#FFFFFF",
      color: "#2B1712",
      placeholder: "#B8B8B8",
      radius: "999px",
      border: "2px solid rgba(255,255,255,0.85)",
      fontSize: "1rem",
      fontWeight: 500,
      padding: "0 1.5rem",
      shadow: "0 8px 18px rgba(43, 23, 18, 0.05)",
    },

    button: {
      height: "64px",
      bg: "#351912",
      color: "#FFFFFF",
      hoverBg: "#4A2118",
      radius: "999px",
      border: "3px solid rgba(255,255,255,0.9)",
      fontSize: "1rem",
      fontWeight: 800,
      textTransform: "lowercase",
      letterSpacing: "-0.01em",
      padding: "0 2rem",
      shadow: "0 14px 32px rgba(43, 23, 18, 0.18)",
    },

    image: {
      objectFit: "cover",
      objectPosition: "center",
      border: "none",
      overlay:
        "linear-gradient(90deg, rgba(43,23,18,0.08), rgba(43,23,18,0.02))",
    },

    card: {
      bg: "#F4EFE4",
      border: "1px solid rgba(43, 23, 18, 0.12)",
      radius: "1.25rem",
      shadow: "0 18px 48px rgba(43, 23, 18, 0.08)",
      padding: "2rem",
    },
  },

  motion: {
    duration: {
      fast: "180ms",
      normal: "260ms",
      slow: "420ms",
    },

    easing: {
      default: "cubic-bezier(0.22, 1, 0.36, 1)",
      smooth: "cubic-bezier(0.16, 1, 0.3, 1)",
    },
  },

  breakpoints: {
    mobile: "480px",
    tablet: "768px",
    laptop: "1024px",
    desktop: "1280px",
    wide: "1440px",
  },
};

export const tadaraHeroCopy = {
  eyebrow: "À partir de 8 ans",

  title: `Votre enfant utilise chaque jour
un héritage de 1200 ans.
Sans le savoir.`,

  body: `Derrière les objets du quotidien qu’il croit ordinaires, il y a une histoire extraordinaire. Celle de la civilisation arabo-musulmane. Chaque mois, Tadara la lui raconte dans une lettre à son nom.`,

  ctaIntro:
    "Inscrivez-vous gratuitement pour bénéficier d’une offre privilégiée lors de la prochaine ouverture des abonnements.",

  placeholder: "votre@email.com",

  button: "je veux être informé du lancement",
};

export const tadaraHeroLayout = {
  section: {
    display: "grid",
    gridTemplateColumns: tadaraTheme.layout.hero.gridDesktop,
    minHeight: tadaraTheme.layout.hero.minHeight,
    backgroundColor: tadaraTheme.colors.background.main,
  },

  left: {
    padding: "clamp(2rem, 5vw, 5rem)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },

  right: {
    position: "relative",
    minHeight: "100vh",
    overflow: "hidden",
  },

  form: {
    display: "flex",
    flexDirection: "column",
    gap: "0.875rem",
    maxWidth: "430px",
    marginTop: "1.5rem",
  },
};
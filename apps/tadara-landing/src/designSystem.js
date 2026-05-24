/**
 * TADARA - Design System Configuration
 * Version: 1.0.0
 * Description: Système de design vintage-moderne pour la landing page TADARA.
 */

const designSystem = {
  theme: {
    colors: {
      brand: {
        // Bleu nuit profond (Fonds sombres, titres principaux)
        primary: '#091A2B',
        primaryLight: '#12283F',

        // Or / Doré historique (Accents, boutons, icônes)
        accent: '#D4A35C',
        accentHover: '#B88A44',

        // Brun / Cuir / Terre (Sous-titres, éléments textuels secondaires)
        secondary: '#8C5638',

        // Crème / Kraft vintage (Fonds clairs, cartes)
        bgLight: '#F5EFE4',
        bgCard: '#FFFDF9',

        // Texte standard sur fond clair
        textDark: '#1A1A1A',
        textMuted: '#555555',
        // Texte sur fond sombre
        textLight: '#F5EFE4',
      },
    },

    typography: {
      fontFamily: {
        // Titres hero / éditoriaux — Playfair en premier : graisses très visibles (souvent proche maquettes type Figma)
        heading: "'Playfair Display', Georgia, serif",
        // Pour le corps de texte et les boutons (lisibilité maximale)
        body: "'Plus Jakarta Sans', 'Inter', sans-serif",
        // Pour les petites touches "fait main" (ex: "123", "Al Khwarizmi")
        handwritten: "'Caveat', 'Architects Daughter', cursive",
      },
      fontSize: {
        xs: '0.75rem', // 12px
        sm: '0.875rem', // 14px
        base: '1rem', // 16px
        lg: '1.125rem', // 18px
        xl: '1.25rem', // 20px
        '2xl': '1.5rem', // 24px
        '3xl': '1.875rem', // 30px
        '4xl': '2.25rem', // 36px
        '5xl': '3rem', // 48px
      },
      fontWeight: {
        light: '300',
        regular: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
        black: '900',
      },
      letterSpacing: {
        tighter: '-0.05em',
        tight: '-0.025em',
        normal: '0em',
        wide: '0.025em',
        wider: '0.05em',
        // Important pour les titres en Serif pour donner un aspect "éditorial"
        widest: '0.1em',
      },
    },

    // Ombres douces teintées pour éviter le côté "sale" du noir pur
    shadows: {
      sm: '0 1px 2px 0 rgba(140, 86, 56, 0.05)',
      md: '0 4px 6px -1px rgba(9, 26, 43, 0.07), 0 2px 4px -1px rgba(9, 26, 43, 0.04)',
      lg: '0 10px 15px -3px rgba(9, 26, 43, 0.08), 0 4px 6px -2px rgba(9, 26, 43, 0.04)',
      // Ombre style "carte postale/enveloppe posée"
      vintageCard: '0 8px 24px rgba(140, 86, 56, 0.12)',
    },

    borderRadius: {
      none: '0px',
      sm: '4px',
      // Les boutons principaux ont des bords très arrondis (pilule)
      button: '9999px',
      // Les cartes (témoignages, FAQ) ont des bords légèrement arrondis et doux
      card: '12px',
    },
  },
}

export const theme = designSystem.theme

export default designSystem

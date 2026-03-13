export const theme = {
  color: {
    background: {
      default: 'rgba(255, 255, 255, 1)',
      subtle: 'rgba(240, 240, 240, 1)',
      disabled: 'rgba(207, 207, 207, 1)',
      success: 'rgba(223, 242, 237, 1)',
      successHover: 'rgba(178, 223, 208, 1)',
      successPressed: 'rgba(128, 202, 177, 1)',
      accent: 'rgba(1, 135, 98, 1)',
      accentHover: 'rgba(0, 119, 86, 1)',
      accentPressed: 'rgba(1, 76, 55, 1)',
      errorSubtle: 'rgba(252, 233, 233, 1)',
      errorSubtleHover: 'rgba(245, 188, 188, 1)',
      errorSubtlePressed: 'rgba(238, 144, 144, 1)',
      error: 'rgba(188, 28, 28, 1)',
      errorHover: 'rgba(155, 23, 23, 1)',
      errorPressed: 'rgba(111, 17, 17, 1)',
      warning: 'rgba(253, 244, 230, 1)',
      info: 'rgba(235, 242, 249, 1)',
    },

    text: {
      invert: 'rgba(255, 255, 255, 1)',
      heading: 'rgba(19, 19, 19, 1)',
      body: 'rgba(45, 45, 45, 1)',
      accent: 'rgba(1, 135, 98, 1)',
      hover: 'rgba(0, 119, 86, 1)',
      pressed: 'rgba(1, 76, 55, 1)',
      subtle: 'rgba(191, 191, 191, 1)',
      disabled: 'rgba(81, 81, 81, 1)',
      error: 'rgba(188, 28, 28, 1)',
      warning: 'rgba(185, 81, 19, 1)',
      success: 'rgba(41, 138, 70, 1)',
      info: 'rgba(77, 138, 203, 1)',
    },

    border: {
      focusOffset: 'rgba(207, 207, 207, 1)',
      subtle: 'rgba(45, 45, 45, 1)',
      default: 'rgba(19, 19, 19, 1)',
      disabled: 'rgba(207, 207, 207, 1)',
      hover: 'rgba(41, 164, 128, 1)',
      pressed: 'rgba(1, 76, 55, 1)',
      accent: 'rgba(1, 76, 55, 1)',
      success: 'rgba(41, 138, 70, 1)',
      divider: 'rgba(178, 223, 208, 1)',
      focusInfo: 'rgba(77, 138, 203, 1)',
      warning: 'rgba(185, 81, 19, 1)',
      error: 'rgba(188, 28, 28, 1)',
      errorHover: 'rgba(155, 23, 23, 1)',
      errorPressed: 'rgba(111, 17, 17, 1)',
    },

    icon: {
      invert: 'rgba(203, 203, 203, 1)',
      default: 'rgba(19, 19, 19, 1)',
      accent: 'rgba(1, 135, 98, 1)',
      hover: 'rgba(0, 119, 86, 1)',
      pressed: 'rgba(1, 76, 55, 1)',
      disableSubtle: 'rgba(191, 191, 191, 1)',
      disabled: 'rgba(81, 81, 81, 1)',
      success: 'rgba(41, 138, 70, 1)',
      error: 'rgba(188, 28, 28, 1)',
      info: 'rgba(77, 138, 203, 1)',
      warning: 'rgba(185, 81, 19, 1)',
    },

    gradient: {
      primary:
        'linear-gradient(180deg, rgba(1, 131, 131, 1) 0%, rgba(1, 70, 135, 1) 100%)',
      subtle:
        'linear-gradient(180deg, rgba(245, 255, 251, 1) 0%, rgba(255, 255, 255, 1) 100%)',
      secondary:
        'linear-gradient(180deg, rgba(0, 131, 146, 1) 0%, rgba(0, 188, 134, 1) 100%)',
    },
  },

  typography: {
    styles: {
      'headline-xl': { fontSize: '48px', fontWeight: 700, lineHeight: 1.2 },
      'headline-lg': { fontSize: '40px', fontWeight: 700, lineHeight: 1.2 },
      'headline-base': { fontSize: '32px', fontWeight: 700, lineHeight: 1.2 },
      'headline-sm': { fontSize: '24px', fontWeight: 400, lineHeight: 1.5 },
      'headline-sm-high200': {
        fontSize: '24px',
        fontWeight: 700,
        lineHeight: 1.5,
      },
      'text-xl': { fontSize: '18px', fontWeight: 400, lineHeight: 1.5 },
      'text-xl-high200': { fontSize: '18px', fontWeight: 700, lineHeight: 1.5 },
      'text-base': { fontSize: '16px', fontWeight: 400, lineHeight: 1.5 },
      'text-base-high200': {
        fontSize: '16px',
        fontWeight: 700,
        lineHeight: 1.5,
      },
      'text-sm': { fontSize: '14px', fontWeight: 400, lineHeight: 1.5 },
      'text-sm-high200': { fontSize: '14px', fontWeight: 600, lineHeight: 1.5 },
      'text-xs': { fontSize: '12px', fontWeight: 400, lineHeight: 1.5 },
      'text-xs-high200': { fontSize: '12px', fontWeight: 700, lineHeight: 1.5 },
    },
  },

  borderRadius: {
    sm: '8px',
    md: '16px',
  },

  shadow: '0px 5px 10px rgba(0, 0, 0, 0.3)',

  space: {
    scale: {
      xxxs: '4px',
      xxs: '8px',
      xs: '12px',
      sm: '16px',
      md: '24px',
      lg: '32px',
      xl: '40px',
      xxl: '48px',
      xxxl: '64px',
    },

    inset: {
      xs: '8px',
      sm: '16px',
      md: '24px',
      lg: '32px',
    },

    stack: {
      xs: '8px',
      sm: '16px',
      md: '24px',
      lg: '32px',
    },

    inline: {
      xs: '8px',
      sm: '16px',
      md: '24px',
      lg: '32px',
    },
  },

  breakpoints: {
    mobileSm: '360px',
    mobileMd: '375px',
    mobileLg: '414px',
    mobileXl: '480px',

    tablet: '720px',

    desktopSm: '1024px',
    desktopMd: '1280px',
    desktopLg: '1440px',
    desktopXl: '1920px',

    ultraWide: '2560px',
  },

  layout: {
    container: {
      mobile: '375px',
      desktop: '1440px',
    },

    minHeight: {
      mobile: '640px',
      desktop: '768px',
    },
  },

  media: {
    mobile: '(min-width: 360px)',
    tablet: '(min-width: 720px)',
    desktop: '(min-width: 1024px)',
    desktopLg: '(min-width: 1440px)',
    ultraWide: '(min-width: 2560px)',
  },
}

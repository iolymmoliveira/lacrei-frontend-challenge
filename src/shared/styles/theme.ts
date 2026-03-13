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
      'headline-xl': {
        fontSize: '48px',
        fontWeight: 700,
        lineHeight: '120%',
      },

      'headline-lg': {
        fontSize: '40px',
        fontWeight: 700,
        lineHeight: '120%',
      },

      'headline-base': {
        fontSize: '32px',
        fontWeight: 700,
        lineHeight: '120%',
      },

      'headline-sm': {
        fontSize: '24px',
        fontWeight: 400,
        lineHeight: '150%',
      },

      'headline-sm-high200': {
        fontSize: '24px',
        fontWeight: 700,
        lineHeight: '150%',
      },

      'text-xl': {
        fontSize: '18px',
        fontWeight: 400,
        lineHeight: '150%',
      },

      'text-xl-high200': {
        fontSize: '18px',
        fontWeight: 700,
        lineHeight: '150%',
      },

      'text-base': {
        fontSize: '16px',
        fontWeight: 400,
        lineHeight: '150%',
      },

      'text-base-high200': {
        fontSize: '16px',
        fontWeight: 700,
        lineHeight: '150%',
      },

      'text-sm': {
        fontSize: '14px',
        fontWeight: 400,
        lineHeight: '150%',
      },

      'text-sm-high200': {
        fontSize: '14px',
        fontWeight: 600,
        lineHeight: '150%',
      },

      'text-xs': {
        fontSize: '12px',
        fontWeight: 400,
        lineHeight: '150%',
      },

      'text-xs-high200': {
        fontSize: '12px',
        fontWeight: 700,
        lineHeight: '150%',
      },
    },
  },

  borderRadius: {
    sm: '8px',
    md: '16px',
  },

  space: {},

  shadow: '0px 5px 10px rgba(0, 0, 0, 0.3)',
}

export const darkTheme = {
  colors: {
    gray10: 'rgba(19, 19, 19, 1)',
    gray30: 'rgba(45, 45, 45, 1)',
    gray60: 'rgba(207, 207, 207, 1)',
    gray70: 'rgba(207, 207, 207, 1)',
    gray80: 'rgba(255, 255, 255, 1)',

    emerald10: 'rgba(223, 242, 237, 1)',
    emerald20: 'rgba(178, 223, 208, 1)',
    emerald40: 'rgba(1, 135, 98, 1)',
    emerald70: 'rgba(0, 119, 86, 1)',
    emerald80: 'rgba(1, 76, 55, 1)',

    red60: 'rgba(188, 28, 28, 1)',

    blue50: 'rgba(77, 138, 203, 1)',
  },

  borderRadius: {
    sm: '8px',
    md: '16px',
  },

  shadow: '0px 5px 10px rgba(255, 255, 255, 0.05)',
}

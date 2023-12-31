const config = {
  locales: [
    'uk',
  ],
  theme : {
    shadow: {
      filterShadow: '0px 1px 4px rgba(33, 33, 52, 0.1)',
      focus:
        'inset 2px 0px 0px rgb(39, 31, 224), inset 0px 2px 0px rgb(39, 31, 224), inset -2px 0px 0px rgb(39, 31, 224), inset 0px -2px 0px rgb(39, 31, 224)',
      focusShadow: '0px 0px 6px rgba(76, 191, 255, 0.75)',
      popupShadow: '0px 2px 15px rgba(33, 33, 52, 0.1)',
      tableShadow: '0px 1px 4px rgba(33, 33, 52, 0.1)',
    },
      color: {
        alternative100: '#f6ecfc',
        alternative200: '#e0c1f4',
        alternative500: '#ac73e6',
        alternative600: '#9736e8',
        alternative700: '#8312d1',
        buttonNeutral0: '#ffffff',
        buttonPrimary500: '#7b79ff',
        buttonPrimary600: '#4945ff',
        danger100: '#fcecea',
        danger200: '#f5c0b8',
        danger500: '#ee5e52',
        danger600: '#d02b20',
        danger700: '#b72b1a',
        neutral0: '#ffffff',
        neutral100: '#f6f6f9',
        neutral1000: '#181826',
        neutral150: '#eaeaef',
        neutral200: '#dcdce4',
        neutral300: '#c0c0cf',
        neutral400: '#a5a5ba',
        neutral500: '#8e8ea9',
        neutral600: '#666687',
        neutral700: '#4a4a6a',
        neutral800: '#32324d',
        neutral900: '#212134',
        primary100: '#f0f0ff',
        primary200: '#d9d8ff',
        primary500: '#7b79ff',
        primary600: '#4945ff',
        primary700: '#271fe0',
        secondary100: '#eaf5ff',
        secondary200: '#b8e1ff',
        secondary500: '#66b7f1',
        secondary600: '#0c75af',
        secondary700: '#006096',
        success100: '#eafbe7',
        success200: '#c6f0c2',
        success500: '#5cb176',
        success600: '#328048',
        success700: '#2f6846',
        warning100: '#fdf4dc',
        warning200: '#fae7b9',
        warning500: '#f29d41',
        warning600: '#d9822f',
        warning700: '#be5d01',
      },
    accordions: {
      S: `${48 / 16}rem`,
      M: `${88 / 16}rem`,
    },
    badge: {
      S: `${16 / 16}rem`,
      M: `${24 / 16}rem`,
    },
    button: {
      S: `${32 / 16}rem`,
      M: `${36 / 16}rem`,
      L: `${40 / 16}rem`,
    },
    zIndices: [5, 10, 15, 20], // TBD
    spaces: ['0px', '4px', '8px', '12px', '16px', '20px', '24px', '32px', '40px', '48px', '56px', '64px'],
    borderRadius: '4px',
    mediaQueries: {
      tablet: `@media (max-width: ${1100 / 16}rem)`,
      mobile: `@media (max-width: ${550 / 16}rem)`,
    },
    fontSizes: [`${11 / 16}rem`, `${12 / 16}rem`, `${14 / 16}rem`, '1rem', `${18 / 16}rem`, `${32 / 16}rem`],
    lineHeights: [1.14, 1.22, 1.25, 1.33, 1.43, 1.45, 1.5],
    fontWeights: {
      regular: 400,
      semiBold: 500,
      bold: 600,
    },
  }
};

const bootstrap = (app) => {
  console.log(app);
};

export default {
  config,
  bootstrap,
};

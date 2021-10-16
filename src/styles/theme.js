export const theme = {
  spacingXXS: '1rem',
  spacingXS: '1.5rem',
  spacingS: '3rem',
  spacingM: '6rem',
  spacingL: '9rem',
  spacingXL: '15rem',
  fontFamily: '"Lexend", sans-serif',
  fontLight: 300,
  fontRegular: 400,
  fontMedium: 500,
  fontSemiBold: 600,
  fontBold: 700,
}

const size = {
  mobileXS: '320px',
  mobileS: '380px',
  mobile: '430px',
  mobileL: '550px',
  tabletS: '700px',
  tablet: '900px',
  tabletL: '1200px',
  laptop: '1500px',
  laptopL: '1792px',
  desktop: '1920px',
  desktopL: '2200px',
  desktopXL: '2560px',
}

export const device = {
  mobileXS: `(max-width: ${size.mobileXS})`,
  mobileS: `(max-width: ${size.mobileS})`,
  mobile: `(max-width: ${size.mobile})`,
  mobileL: `(max-width: ${size.mobileL})`,
  tabletXS: `(max-width: ${size.tabletXS})`,
  tablet: `(max-width: ${size.tablet})`,
  tabletXL: `(max-width: ${size.tabletXL})`,
  laptop: `(max-width: ${size.laptop})`,
  laptopL: `(max-width: ${size.laptopL})`,
  desktop: `(max-width: ${size.desktop})`,
  desktopL: `(max-width: ${size.desktopL})`,
  desktopXL: `(max-width: ${size.desktopXL})`,
}

export default {
  // this enables the color modes feature
  // and is used as the name for the top-level colors object
  initialColorMode: "light",
  // optionally enable custom properties
  // to help avoid a flash of colors on page load
  useCustomProperties: true,
  colors: {
    // these are the default colors
    white: "#FFFFFF",
    black: "#000000",
    lightGrey: "#8d8d8d",
    // brand colors - https://coolors.co/ed6a5a-f4f1bb-9bc1bc-5ca4a9-e6ebe0
    TERRA_COTTA: "#ED6A5A",
    BLOND: "#F4F1BB",
    CAMBRIDGE_BLUE: "#9BC1BC",
    CADET_BLUE: "#5CA4A9",
    PLATINUM: "#E6EBE0"
  },
  fonts: {
    body: "Open Sans",
    heading: "Poppins"
  },
  fontWeights: {
    body: 300,
    heading: 400,
    bold: 700
  },
  lineHeights: {
    body: "110%",
    heading: 1.125,
    logo: "82px"
  },
  letterSpacing: {
    body: "2px",
    text: "5px"
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72]
};

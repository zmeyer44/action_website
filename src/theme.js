const colors = {
  primary: "#1273f8",
  secondary: "#05445E",
  accent: "#26CFBD",
  neutral: "#70AAC2",
  error: "#E1544B",
  success: "#26CFBD",
  white: "#FFFFFF",
  gray: [
    "#0a0b0d",
    "#1e2025",
    "#464b55",
    "#5b616e",
    "#89909e",
    "#bfc4cf",
    "#FFFFFF",
  ],
  shades: {
    primary: ["#0052FF", "#004beb", "#003ec1", "#002982", "#00184d"],
    secondary: ["#02202C", "#05445E", "#07668C", "#0A89BD", "#0DACED"],
    accent: ["#1EA496", "#26CFBD", "#4ADECE", "#75E6DA", "#A0EEE6"],
  },
}
const typography = {
  googleFont:
    "https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800;900&display=swap",
  fontFamily: '"Circular", sans-serif',
  color: colors.gray[0],
  sizes: {
    base: 17,
  },
}
const body = {
  fontSize: typography.sizes.base,
  fontFamily: typography.fontFamily,
  lineHeight: 1.6,
  color: colors.gray[1],
}

const transition = {
  base: ".2s ease-in-out",
  all: "all .2s ease-in-out",
}

const zIndex = {
  navbar: 1000,
  sticky: 1010,
  menuNav: 1020,
  navbarDropdown: 990,
}
const borderRadius = {
  small: 8,
  normal: 12,
  large: 15,
  xLarge: 25,
}

const breakpoints = ["450px", "768px", "1170px", "1440px"]
// eslint-disable-next-line prefer-destructuring
breakpoints.sm = breakpoints[0]
// eslint-disable-next-line prefer-destructuring
breakpoints.md = breakpoints[1]
// eslint-disable-next-line prefer-destructuring
breakpoints.lg = breakpoints[2]
// eslint-disable-next-line prefer-destructuring
breakpoints.xl = breakpoints[3]
const space = [0, 4, 8, 16, 32, 64]

export default {
  space,
  colors,
  typography,
  body,
  zIndex,
  breakpoints,
  borderRadius,
  transition,
}

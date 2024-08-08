import { createFont, createTamagui, createTokens } from "tamagui";

const headingFont = createFont({
  family: "Inter, Helvetica, Arial, sans-serif",
  size: {
    10: 48, //h1
    9: 40, //h2
    8: 34, //h3
    7: 24, //h4
    6: 20, //h5
    5: 18, //h6
  },
  weight: {
    1: "600",
  },
  // (native only) swaps out fonts by face/style
  face: {
    600: { normal: "InterSemiBold" },
  },
});
const bodyFont = createFont({
  family: "Inter, Helvetica, Arial, sans-serif",
  size: {
    xxxLarge: 34,
    xxLarge: 22,
    xLarge: 18,
    large: 16,
    medium: 14,
    small: 12,
    xSmall: 10,
    true: 14,
  },
  weight: {
    regular: "400",
    medium: "500",
    semiBold: "600",
  },
  // (native only) swaps out fonts by face/style
  face: {
    400: { normal: "InterRegular" },
    500: { normal: "InterMedium" },
    600: { normal: "InterSemiBold" },
  },
});
export const tokens = createTokens({
  size: {
    0: 0,
    sz48: 48,
    sz52: 52,
    true: 52,
  },
  space: {
    sp4: 4,
    sp8: 8,
    sp12: 12,
    sp16: 16,
    sp24: 24,
    sp32: 32,
    sp36: 36,
    true: 0,
  },
  radius: { 0: 0, 1: 3, br5: 5, br16: 16 },
  zIndex: { 0: 0, 1: 100, 2: 200 },
  color: {
    accent: "#5856D6",
    primary0: "#CDCCFF",
    primary25: "#9B99FF",
    primary100: "#5955FF",
    tertiary: "#93A2B4",
    secondary300: "#1F202A",
    greyScale900: "#0D0D12",
    greyScale500: "#666D80",
    greyScale300: "#A4ACB9",
    greyScale200: "#C1C7D0",
    greyScale100: "#DFE1E7",
    greyScale50: "#ECEFF3",
    otherWhite: "#FFFFFF",
    white50: "#FFFFFF50",
  },
});

export const tamaguiConfig = createTamagui({
  // ...config,
  fonts: {
    heading: headingFont,
    body: bodyFont,
  },
  tokens,
  themes: {
    light: {
      color: tokens.color.greyScale900,
      textGrey: tokens.color.greyScale500,
      textLightGrey: tokens.color.greyScale300,
      textPrimary: tokens.color.primary100,
      borderColor: tokens.color.greyScale100,
      borderColorFocus: tokens.color.primary25,
    },
    light_Separator: {
      borderColor: tokens.color.greyScale50,
    },

    light_Button: {
      primaryColor: tokens.color.primary100,
      primaryLightColor: tokens.color.otherWhite,
      socialButtonBorder: tokens.color.greyScale200,
    },
  },
});

export default tamaguiConfig;

export type Conf = typeof tamaguiConfig;

declare module "tamagui" {
  interface TamaguiCustomConfig extends Conf {}
}

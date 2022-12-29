import { extendTheme } from "@chakra-ui/react";
import { theme as chakraTheme } from "@chakra-ui/react";

import "@fontsource/hind";
import "@fontsource/montserrat-alternates";

const colors = {
  FlickrPink: "#F72585",
  Byzantine: "#B5179E",
  Purpled: "#7209B7",
  DarkPurple: "#560BAD",
  TrypanBlue: "#480CA8",
  TrypanBlueDark: "#3A0CA3",
  PersianBlue: "#3F37C9",
  UltrmarineBlue: "#4361EE",
  DodgerBlue: "#4895EF",
  ViidSkyBlue: "#42b2d4",
};

const fonts = {
  ...chakraTheme.fonts,
  primary: `"Montserrat Alternates", sans-serif`,
  secondary: `"Hind", sans-serif'`,
};

const buttons = {
  backgroundColor: colors.Purpled,
  borderRadius: "30px",
  textAlign: "center",
};

const heading = {
  fontFamily: fonts.primary,
  fontSize: "5xl",
  p: "30px",
  fontWeight: "400",
  letterSpacing: "4px",
};

const authForm = {
  fontFamily: fonts.secondary,
  letterSpacing: "4px",
  //   width: "35%",
  //   height: "525px",
  FormHelperText: {
    mb: "10px",
    fontFamily: fonts.secondary,
    letterSpacing: "4px",
  },
};

export const theme = extendTheme({ heading, buttons, colors, authForm });

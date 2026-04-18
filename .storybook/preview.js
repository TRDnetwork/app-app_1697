import { colors } from "../src/design-system/colors";
import { typography } from "../src/design-system/typography";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: "light",
    values: [
      { name: "light", value: colors.bg },
      { name: "dark", value: "#1a1a1a" },
    ],
  },
  docs: {
    theme: {
      base: "light",
      fontBase: typography.fontFamily.body,
      fontCode: "monospace",
      colors: {
        primary: colors.accent,
        secondary: colors.text,
        appBg: colors.bg,
        appContentBg: colors.surface,
        appBorderColor: colors.border,
      },
    },
  },
};
---
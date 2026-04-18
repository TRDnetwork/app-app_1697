export const colors = {
  bg: "#f8f7f5",
  surface: "#ffffff",
  text: "#1a1a1a",
  textDim: "#6b6b6b",
  border: "#e0e0e0",
  accent: "#3a5a40",
  accentAlt: "#a3b18a",
  error: "#c84b31",
  success: "#588552",
  warning: "#ddb36b",
  info: "#6ba3d6",
} as const;

export type Color = keyof typeof colors;
---
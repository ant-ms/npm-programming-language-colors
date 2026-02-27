import LanguageData from "./languages.json" with { type: "json" };

const { _disclaimer, ...LanguageColors } = LanguageData;

export const Colors: Record<string, string> = LanguageColors;

export const getLanguageColor = (language: string): string | undefined => {
  return Colors[language.toLowerCase()];
};

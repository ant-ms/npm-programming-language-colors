import LanguageData from "./languages.json" with { type: "json" };

const { _disclaimer, ...LanguageColors } = LanguageData;

const colors: Record<string, string> = LanguageColors;

const getLanguageColor = (language: string): string | undefined => {
  return colors[language.toLowerCase()];
};

export { getLanguageColor, LanguageColors };

import LanguageData from "./languages.json" with { type: "json" };

const { _disclaimer, ...LanguageColors } = LanguageData;

/**
 * A record mapping programming language names to their hex color codes.
 *
 * Language names are case-sensitive and match the names used by GitHub Linguist.
 *
 * @example
 * ```ts
 * console.log(Colors);
 * // { "typescript": "#3178c6", "python": "#3572A5", ... }
 * ```
 */
export const Colors: Record<string, string> = LanguageColors;

/**
 * Get the color code for a programming language.
 *
 * Language lookup is case-insensitive.
 *
 * @param language - The name of the programming language
 * @returns The hex color code for the language, or `undefined` if not found
 *
 * @example
 * ```ts
 * const color = getLanguageColor("typescript");
 * console.log(color); // "#3178c6"
 *
 * const unknown = getLanguageColor("unknown-lang");
 * console.log(unknown); // undefined
 * ```
 */
export const getLanguageColor = (language: string): string | undefined => {
  return Colors[language.toLowerCase()];
};

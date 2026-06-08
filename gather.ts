import fs from "node:fs/promises";
import { parse } from "yaml";
import {
  COLOR_YAML_LOCATION,
  DISCLAIMER,
  normalizeName,
  OUTPUT_PATH,
  PROCESS_ALIASES,
  type LanguagesYaml,
} from "./constants.js";

const getYaml = async (): Promise<LanguagesYaml> => {
  const yamlRequest = await fetch(COLOR_YAML_LOCATION);

  if (!yamlRequest.ok) {
    throw new Error(
      `Failed to fetch YAML data: ${yamlRequest.status} ${yamlRequest.statusText}`,
    );
  }

  const yamlRaw = await yamlRequest.text();

  return parse(yamlRaw);
};

const convertYamlToLanguageData = (
  yaml: LanguagesYaml,
): Record<string, string> => {
  const result: Record<string, string> = {};

  for (const [lang, { color, aliases }] of Object.entries(yaml)) {
    if (!color) continue;

    result[normalizeName(lang)] = color;
    if (!PROCESS_ALIASES) continue;
    for (const alias of aliases ?? []) {
      result[normalizeName(alias)] = color;
    }
  }

  return result;
};

const rawLanguages = await getYaml();
const convertedLanguages = convertYamlToLanguageData(rawLanguages);

try {
  await fs.writeFile(
    OUTPUT_PATH,
    JSON.stringify({ _disclaimer: DISCLAIMER, ...convertedLanguages }, null, 2),
  );
} catch (err) {
  console.error("Failed to write languages.json:", err);
  process.exit(1);
}

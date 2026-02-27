import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { getLanguageColor } from "./index.ts";

describe("getLanguageColor", () => {
  it("returns the correct color for a known language case-in-sensitively", () => {
    assert.equal(getLanguageColor("TypeScript"), "#3178c6");
    assert.equal(getLanguageColor("typescript"), "#3178c6");
    assert.equal(getLanguageColor("TYPESCRIPT"), "#3178c6");
  });

  it("returns the correct color for languages with special characters in their name", () => {
    assert.equal(getLanguageColor("C++"), "#f34b7d");
    assert.equal(getLanguageColor("C#"), "#178600");
    assert.equal(getLanguageColor("F*"), "#572e30");
  });

  it("returns undefined for an unknown language", () => {
    assert.equal(getLanguageColor("NotARealLanguage"), undefined);
  });

  it("returns undefined for an empty string", () => {
    assert.equal(getLanguageColor(""), undefined);
  });
});

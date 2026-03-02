# programming-language-colors

GitHub's programming language colors as an npm and JSR package. Data is sourced from [github-linguist/linguist](https://github.com/github-linguist/linguist/blob/main/lib/linguist/languages.yml) and updated automatically.

## Installation

```sh
# npm
npm install programming-language-colors

# JSR
npx jsr add @ant-ms/programming-language-colors
# or
deno add jsr:@ant-ms/programming-language-colors
```

## Usage

```js
import { getLanguageColor, Colors } from "programming-language-colors";
// or for JSR: import { getLanguageColor, Colors } from "@ant-ms/programming-language-colors";

// Look up a single language color (case-insensitive)
getLanguageColor("TypeScript"); // "#3178c6"
getLanguageColor("python"); // "#3572A5"
getLanguageColor("C++"); // "#f34b7d"
getLanguageColor("not-real"); // undefined

// Access the full color map directly
console.log(Colors);
// { "typescript": "#3178c6", "python": "#3572A5", ... }
```

## Data Source

Language color data is derived from the [`languages.yml`](https://github.com/github-linguist/linguist/blob/main/lib/linguist/languages.yml) file in the [github-linguist/linguist](https://github.com/github-linguist/linguist) repository. A daily automated check keeps the data in sync with upstream changes.

## License

This project is licensed under the [MIT License](LICENSE).

The language color data is derived from [github-linguist/linguist](https://github.com/github-linguist/linguist), which is Copyright (c) 2017 GitHub, Inc. and also licensed under MIT. See [THIRD_PARTY_NOTICES](THIRD_PARTY_NOTICES) for details.

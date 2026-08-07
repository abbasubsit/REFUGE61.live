import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import { defineConfig, globalIgnores } from "eslint/config";

// eslint-config-next@15.5.x still ships the legacy eslintrc-style config
// shape (`module.exports = { extends: [...] }`), not an ESLint 9 flat-config
// array — FlatCompat bridges it. (create-next-app's default template
// assumes a flat-config-native version; that assumption breaks once the
// package is pinned to the 15.x line, which this project intentionally
// does — see the Next.js version pinned in package.json.)
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = defineConfig([
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  // Override default ignores of eslint-config-next.
  globalIgnores([
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;

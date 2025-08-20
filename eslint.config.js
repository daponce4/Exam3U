import js from "@eslint/js";
import globals from "globals";

export default [
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.node,
        ...globals.browser
      }
    },
    rules: {
      ...js.configs.recommended.rules
    }
  },
  {
    files: ["**/__tests__/**/*.js"],
    languageOptions: {
      globals: {
        ...globals.jest
      }
    }
  }
];

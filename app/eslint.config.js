import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "@typescript-eslint/eslint-plugin";
import parser from "@typescript-eslint/parser";
import react from "eslint-plugin-react";
const isProduction = process.env.NODE_ENV === "production";
export default [
  {
    ignores: ["dist"],
    files: ["**/*.{js,jsx,ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.es2022,
        node: true,
      },
      parser: parser,
    },
    plugins: {
      "@typescript-eslint": tseslint,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      react: react,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
      "no-cond-assign": "error",
      "no-with": "error",
      "no-useless-constructor": "error",
      "no-useless-escape": isProduction ? "off" : "warn",
      "no-unsafe-finally": "error",
      "no-unreachable": "error",
      "no-invalid-this": "error",
      "no-invalid-regexp": "error",
      "no-fallthrough": "error",
      "no-extra-semi": "error",
      "no-dupe-args": "error",
      "valid-typeof": "error",
      "no-compare-neg-zero": "error",
      "no-unused-expressions": "off",
      "prefer-spread": "warn",
      "no-ternary": "off",
      "no-case-declarations": "off",
      "no-unused-labels": "warn",
      "no-useless-computed-key": "warn",
      "no-undef-init": "warn",
      "no-regex-spaces": "warn",
      "no-inline-comments": "off",
      "no-implicit-coercion": "warn",
      "no-eq-null": "warn",
      "no-console": isProduction ? "off" : "off",
      "no-prototype-builtins": "off",
      yoda: "warn",
      eqeqeq: "error",
      strict: "warn",
      "block-scoped-var": "warn",
      "vars-on-top": isProduction ? "off" : "warn",
      "no-unused-vars": "off",
      "no-var": isProduction ? "off" : "warn",
      "prefer-const": isProduction ? "off" : "warn",
      "require-await": isProduction ? "off" : "warn",
      semi: "warn",
      "no-useless-return": isProduction ? "off" : "warn",
      "prefer-rest-params": "warn",
      "no-trailing-spaces": "warn",
      "arrow-spacing": "warn",
      "no-unexpected-multiline": "warn",
      "use-isnan": "warn",
      "template-tag-spacing": "warn",
      "no-template-curly-in-string": "warn",
      "switch-colon-spacing": "warn",
      "react/no-unescaped-entities": "warn",
      "react-hooks/exhaustive-deps": "warn",
      "react/display-name": "off",
      "@typescript-eslint/explicit-function-return-type": isProduction ? "off" : "warn",
      "@/no-extra-semi": "warn",
      "@typescript-eslint/no-empty-interface": "warn",
      "@typescript-eslint/no-unused-vars": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-var-requires": "off",
      "@typescript-eslint/ban-ts-comment": "off",
    },
  },
];

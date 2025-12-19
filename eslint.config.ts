// @ts-check
import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import { defineConfig } from "eslint/config";
import html from "@html-eslint/eslint-plugin";
import importPlugin from "eslint-plugin-import";
import { createTypeScriptImportResolver } from "eslint-import-resolver-typescript";

export default defineConfig(
  {
    name: "app/ts",
    files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],
    ...importPlugin.flatConfigs.typescript,
    ...tseslint.configs.eslintRecommended,
    ...eslint.configs.recommended,
    settings: {
      "import-x/resolver-next": createTypeScriptImportResolver({
        alwaysTryTypes: true,
        project: "./tsconfig.json",
      }),
    },

    languageOptions: {
      parserOptions: {
        projectService: true,
      },
    },

    rules: {
      "import/order": [2, { "newlines-between": "always" }],
      "import/newline-after-import": [
        2,
        { count: 1, exactCount: true, considerComments: true },
      ],
    },
  },

  {
    name: "app/html-lint",
    files: ["**/*.html"],
    plugins: {
      html,
    },

    extends: ["html/recommended", tseslint.configs.disableTypeChecked],
    language: "html/html",

    rules: {
      "html/no-multiple-empty-lines": ["error", { max: 1 }],
      "html/no-duplicate-class": "error",
      "html/no-ineffective-attrs": "error",
      "html/require-explicit-size": "off",
      "html/attrs-newline": ["error", { closeStyle: "newline" }],
      "html/id-naming-convention": ["error", "camelCase"],
      "html/indent": ["error", 4],
    },
  },
);

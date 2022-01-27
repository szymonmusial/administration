module.exports = {
  root: true,

  env: {
    node: true,
  },
  parserOptions: {
    parser: "@typescript-eslint/parser",
  },

  rules: {
    "max-len": ["error", { code: 120 }],
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
        printWidth: 120,
      },
    ],
  },

  extends: ["plugin:vue/vue3-essential", "eslint:recommended", "@vue/prettier", "@vue/typescript"],
};

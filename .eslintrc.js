module.exports = {
  extends: ["eslint:recommended", "prettier", "standard", "plugin:prettier/recommended"],
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true
  },
  globals: {
    Page: "readonly",
    App: "readonly",
    Component: "readonly",
    my: "readonly",
    getApp: "writable"
  },
  parserOptions: {
    ecmaVersion: 2022
  },
  rules: {
    "no-var": "error",
    "prefer-const": "error",
    "no-unused-vars": "warn",
    "no-undef": "error",
    "no-console": "warn",
    "no-debugger": "error",
    "no-constant-condition": "error",
    indent: ["error", 2],
    camelcase: ["error", {properties: "always"}],
    quotes: "off",
    semi: "off"
  }
};

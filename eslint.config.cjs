module.exports = [
  {
    ignores: ["node_modules/**", "plugins/**", "images/**", "files/**", "*.min.js"]
  },
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "module"
    },
    rules: {
      "no-unused-vars": "warn",
      "no-console": "off"
    }
  }
];

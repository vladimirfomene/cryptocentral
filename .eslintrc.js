module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true
  },
  extends: ["standard"],
  parserOptions: {
    ecmaVersion: 12
  },
  rules: {
    quotes: ["error", "double"],
    semi: ["error", "always"],
    "comma-dangle": ["error", "never"]
  }
};

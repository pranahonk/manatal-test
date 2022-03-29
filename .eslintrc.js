module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:vue/essential',
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'vue',
  ],
  rules: {
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        "js": "never",
        "jsx": "never",
        "ts": "never",
        "tsx": "never",
        "vue": "never",
      },
    ],
    "import/no-unresolved": 0,
    "indent": "off",
    "quotes": "off",
    "semi": "off",
    "linebreak-style": 0,
    "no-param-reassign": 0,
    "import/prefer-default-export": "off",
    "vue-filename-extension": "off",
    'import/extensions': "off",
    "no-unused-vars": "off",
  },
};

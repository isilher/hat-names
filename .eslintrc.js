module.exports = {
  root: true,
  extends: ["@react-native-community", "airbnb", "airbnb/hooks", "prettier"],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "no-null"],
  ignorePatterns: ["web-build/*", "aws-exports.js"],
  rules: {
    "no-null/no-null": ["error"],
    "react/jsx-filename-extension": ["error", { extensions: [".tsx"] }],
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        ts: "never",
        tsx: "never",
      },
    ],
    "import/prefer-default-export": "off",
    "@typescript-eslint/explicit-function-return-type": [
      "error",
      { allowExpressions: true, allowTypedFunctionExpressions: true },
    ], // force to define function return type
    "class-methods-use-this": [
      "error",
      {
        exceptMethods: [
          "componentDidCatch",
          "componentDidAppear",
          "componentDidDisappear",
        ],
      },
    ],
    "import/no-unresolved": ["error", { ignore: ["@app"] }], // ignore import with @app & .
    "max-len": ["error", 120], // change max length for a line to 120
    "no-console": "error", // don't allow console
    "no-param-reassign": [
      "error",
      { props: true, ignorePropertyModificationsFor: ["draft", "draftState"] },
    ], // no params reassigned except using immer
    "no-unused-expressions": ["error", { allowShortCircuit: true }], // don't use unused expressions except shortcircuit
    "no-unused-vars": ["error", { argsIgnorePattern: "^_" }], // don't use unused var except with _ prefix
    "@typescript-eslint/no-explicit-any": ["error"], // forbid to use 'any' type
    "react/style-prop-object": ["error", { allow: ["StatusBar"] }],
    "object-curly-spacing": [2, "always"],
    "semi": ["error", "never"],
    "react/prop-types": 0,
    "react/jsx-props-no-spreading": 0,
    "react/jsx-one-expression-per-line": "off",
    "camelcase": "off",
    "jsx-a11y/accessible-emoji": "off",
    "eslint-comments/no-unlimited-disable": "off"
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
}

module.exports = {
  extends: [
    "react-app",
    "plugin:react/recommended", // Uses the recommended rules from @eslint-plugin-react
    "plugin:prettier/recommended" // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.  
  ],
  rules: {
    "prettier/prettier": "error"
  },
  parserOptions: {
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: "module", // Allows for the use of imports
    ecmaFeatures: {
      jsx: true // Allows for the parsing of JSX
    }
  },
  rules: {
    "react/prop-types": "off"
    // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
  },
  settings: {
    react: {
      version: "detect" // Tells eslint-plugin-react to automatically detect the version of React to use
    }
  }
}

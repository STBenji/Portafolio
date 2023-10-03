module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: ['standard', 'plugin:react/recommended', 'prettier'],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './src',
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: { react: { version: '18.2' } },
  plugins: ['react'],
  rules: {
    'multiline-ternary': 'off',
    'no-useless-return': 'off',
    'react/react-in-jsx-scope': 0,
    'react/jsx-uses-react': 0,
    'react/prop-types': 0,
    camelcase: 'off',
  },
}

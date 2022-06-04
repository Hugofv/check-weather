module.exports = {
  root: true,
  env: {
    jest: true
  },
  extends: ['plugin:react/recommended', 'airbnb', 'airbnb/hooks', 'prettier'],
  parser: 'babel-eslint',
  plugins: ['react'],
  rules: {
    'react/jsx-filename-extension': [
      'warn',
      {
        extensions: ['.js', '.jsx']
      }
    ],
    'import/prefer-default-export': 'off',
    'react/jsx-props-no-spreading': 'off',
    semi: [2, 'never'],
    quotes: [2, 'single'],
    'no-console': 'off'
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
        extensions: ['.js', '.ts', '.d.ts', '.tsx']
      }
    }
  }
}

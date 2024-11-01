module.exports = {
    root: true,
    parserOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
    },
    env: {
      browser: true,
      node: true,
      es6: true,
    },
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:react/recommended',
      'plugin:react-hooks/recommended',
      'plugin:@next/next/recommended',
    ],
    rules: {
        'react/react-in-jsx-scope': 'off',
      '@typescript-eslint/no-empty-object-type': 'off', // Desactiva la regla para interfaces vacías
      '@next/next/no-page-custom-font': 'off', // Desactiva la advertencia sobre fuentes
      '@next/next/no-document-import-in-page': 'off', // Desactiva el error de importación de Document
      '@typescript-eslint/no-unused-vars': 'warn', // Cambia a advertencia en lugar de error
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  };
  
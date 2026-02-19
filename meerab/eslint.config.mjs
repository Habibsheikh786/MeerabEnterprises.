import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';

const eslintConfig = defineConfig([
  ...nextVitals,
  {
    rules: {
      // Unused variables ko sirf warning de, error na de
      '@typescript-eslint/no-unused-vars': 'warn',
      // Unescaped entities ko bilkul ignore karein
      'react/no-unescaped-entities': 'off',
      // <img> tag ke warning ko bhi ignore karein (optional)
      '@next/next/no-img-element': 'off',
    },
  },
  // Override default ignores of eslint-config-next.
  globalIgnores([
    '.next/**',
    'out/**',
    'build/**',
    'next-env.d.ts',
  ]),
]);

export default eslintConfig;
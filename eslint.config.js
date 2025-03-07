import eslint from '@eslint/js';
import tseslintPlugin from '@typescript-eslint/eslint-plugin';
import tseslintParser from '@typescript-eslint/parser';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';

export default [
  eslint.configs.recommended,
  // Ignore dist directory
  {
    ignores: ['dist/**/*']
  },
  // Base configuration for all JavaScript and TypeScript files
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    plugins: {
      'react': reactPlugin,
      'react-hooks': reactHooksPlugin
    },
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      },
      globals: {
        HTMLTableSectionElement: 'readonly',
        React: 'readonly',
        document: 'readonly',
        window: 'readonly',
        setTimeout: 'readonly',
        fetch: 'readonly',
        process: 'readonly'
      }
    },
    settings: {
      react: {
        version: 'detect'
      }
    },
    rules: {
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'no-console': 'warn'
    }
  },
  // TypeScript-specific configuration
  {
    files: ['src/**/*.{ts,tsx}'],
    plugins: {
      '@typescript-eslint': tseslintPlugin
    },
    languageOptions: {
      parser: tseslintParser,
      parserOptions: {
        project: ['./tsconfig.json']
      }
    },
    rules: {
      ...tseslintPlugin.configs.recommended.rules,
      '@typescript-eslint/no-unused-vars': ['warn', { 
        'argsIgnorePattern': '^_',
        'varsIgnorePattern': '^_' 
      }],
      '@typescript-eslint/no-empty-object-type': 'off'
    }
  },
  // Configuration for config files
  {
    files: ['*.config.js', '*.config.ts', 'vite.config.ts', 'postcss.config.js'],
    languageOptions: {
      parser: tseslintParser,
      parserOptions: {
        project: null
      }
    },
    rules: {
      'no-console': 'off',
      'no-undef': 'off'
    }
  }
]; 
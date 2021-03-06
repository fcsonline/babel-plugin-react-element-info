module.exports = {
  parser: 'babel-eslint',
  root: true,
  env: {
    browser: true,
    node: true,
    mocha: true,
    es6: true,
  },
  plugins: [
    'mocha',
    'flowtype',
    'import',
  ],
  ecmaFeatures: {
    jsx: true,
  },
  extends: 'eslint:recommended',
  rules: {
    'array-bracket-spacing': ['error', 'never'],
    'arrow-spacing': 'error',
    'arrow-parens': 'error',
    'block-spacing': ['error', 'always'],
    'brace-style': 'error',
    'comma-dangle': ['error', 'always-multiline'],
    'comma-style': ['error', 'last'],
    'comma-spacing': ['error', {before: false, after: true}],
    'computed-property-spacing': ['error', 'never'],
    'consistent-this': ['error', 'self'],
    'consistent-return': 'error',
    'dot-notation': 'error',
    'dot-location': ['error', 'property'],
    'eqeqeq': ['error', 'smart'],
    'eol-last': 'error',
    'indent': ['error', 2, {SwitchCase: 1}],
    'jsx-quotes': ['error', 'prefer-double'],
    'key-spacing': 'error',
    'max-len': ['error', 120, 4],
    'new-cap': ['error', {capIsNew: true, newIsCap: true}],
    'no-console': 'error',
    'no-unused-expressions': 'error',
    'no-unused-vars': 'error',
    'no-shadow': 'error',
    'no-spaced-func': 'error',
    'no-multiple-empty-lines': 'error',
    'no-multi-spaces': 'error',
    'no-undef': 'error',
    'no-empty-pattern': 'error',
    'no-dupe-keys': 'error',
    'no-dupe-args': 'error',
    'no-duplicate-case': 'error',
    'no-cond-assign': 'error',
    'no-extra-semi': 'error',
    'no-extra-boolean-cast': 'error',
    'no-trailing-spaces': 'error',
    'no-unreachable': 'error',
    'no-unneeded-ternary': 'error',
    'no-useless-computed-key': 'error',
    'no-unsafe-finally': 'error',
    'no-process-exit': 'error',
    'no-var': 'error',
    'object-curly-spacing': ['error', 'never'],
    'one-var': ['error', 'never'],
    'operator-linebreak': ['error', 'after'],
    'padded-blocks': ['error', 'never'],
    'prefer-arrow-callback': 'error',
    'prefer-const': 'error',
    'prefer-template': 'error',
    'quotes': ['error', 'single', 'avoid-escape'],
    'semi': ['error', 'always'],
    'keyword-spacing': 'error',
    'space-before-blocks': ['error', 'always'],
    'space-before-function-paren': ['error', 'never'],
    'space-infix-ops': 'error',
    'space-unary-ops': ['error', { words: true, nonwords: false }],
    'spaced-comment': 'error',
    'yoda': 'error',
    'mocha/handle-done-callback': 'error',
    'mocha/no-exclusive-tests': 'error',
    'mocha/no-global-tests': 'error',
    'mocha/no-pending-tests': 'error',
    'mocha/no-skipped-tests': 'error',
    'mocha/no-sibling-hooks': 'error',
    'flowtype/require-valid-file-annotation': ['error', 'always'],
    'import/default': 'error',
    'import/export': 'error',
    'import/extensions': ['error', {
      'json': 'always',
      'html': 'always',
      'server': 'always',
      'css': 'always',
      'png': 'always',
      'jpg': 'always',
      'svg': 'always',
    }],
    'import/imports-first': 'error',
    'import/named': 'error',
    'import/namespace': 'error',
    'import/newline-after-import': 'error',
    'import/no-amd': 'error',
    'import/no-deprecated': 'error',
    'import/no-duplicates': 'error',
    'import/no-mutable-exports': 'error',
    'import/no-named-as-default': 'error',
    'import/no-named-as-default-member': 'error',
    'import/no-namespace': 'error',
    'import/no-restricted-paths': 'error',
    'import/order': 'error',
    'import/prefer-default-export': 'error',

    'no-case-declarations': 'off',
    'strict': 'off',
    'no-magic-numbers': 'off',
    'camelcase': 'off',
    'no-underscore-dangle': 'off',
    'handle-callback-err': 'off',
    'mocha/no-hooks': 'off',
    'mocha/no-mocha-arrows': 'off',
    'mocha/no-synchronous-tests': 'off',
    'mocha/valid-suite-description': 'off',
    'mocha/valid-test-description': 'off',
    'flowtype/require-parameter-type': 'off',
    'flowtype/require-return-type': 'off',
    'flowtype/space-after-type-colon': 'off',
    'flowtype/space-before-type-colon': 'off',
    'flowtype/type-id-match': 'off',
    'flowtype/define-flow-type': 'off',
    'flowtype/use-flow-type': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/no-nodejs-modules': 'off',
    'import/no-unresolved': 'off',
    'import/no-commonjs': 'off',
  },
  settings: {
    'import/ignore': [
      'node_modules', // Mostly CommonJS (ignored by default).
      '\.(json|svg|html)$', // Can't parse.
    ],
  },
};

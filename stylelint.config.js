'use strict';

module.exports = {
  // rules: {
  //   'at-rule-no-unknown': [
  //     true,
  //     {
  //       ignoreAtRules: ['mixin', 'include']
  //     }
  //   ], //no @unkwon rules only named rules like @media, @charset
  //   'block-no-empty': true, // Disallow empty blocks.
  //   'color-no-invalid-hex': true, // no invalid hex like
  //   'comment-no-empty': true,
  //   'declaration-block-no-duplicate-properties': [
  //     true,
  //     {
  //       ignore: ['consecutive-duplicates-with-different-values']
  //     }
  //   ],
  //   'declaration-block-no-shorthand-property-overrides': true,
  //   'font-family-no-duplicate-names': true,
  //   'font-family-no-missing-generic-family-keyword': true,
  //   'function-calc-no-invalid': true, //Disallow an invalid expression within calc functions.
  //   'function-calc-no-unspaced-operator': true,
  //   'function-linear-gradient-no-nonstandard-direction': true,
  //   'keyframe-declaration-no-important': true, //keyframe should not allow !important
  //   'media-feature-name-no-unknown': true,
  //   'no-descending-specificity': true,
  //   'no-duplicate-at-import-rules': true,
  //   'no-duplicate-selectors': true,
  //   'no-empty-source': true, //extra lines \t \n not allowed
  //   'no-extra-semicolons': true,
  //   'no-invalid-double-slash-comments': true,
  //   'property-no-unknown': true,
  //   'selector-pseudo-class-no-unknown': true,
  //   'selector-pseudo-element-no-unknown': true,
  //   'selector-type-no-unknown': true,
  //   'string-no-newline': true, //single string should not we break in new line
  //   'unit-no-unknown': true, //allow valid units
  //   'selector-attribute-brackets-space-inside': 'never',
  //   'selector-attribute-operator-space-after': 'never',
  //   'selector-attribute-operator-space-before': 'never',
  //   'selector-combinator-space-after': 'always',
  //   'selector-combinator-space-before': 'always',
  //   'selector-descendant-combinator-no-non-space': true,
  //   'selector-list-comma-newline-after': 'always',
  //   'selector-list-comma-space-before': 'never',
  //   'selector-max-empty-lines': 0,
  //   'selector-pseudo-class-case': 'lower',
  //   'selector-pseudo-class-parentheses-space-inside': 'never',
  //   'selector-pseudo-element-case': 'lower',
  //   'selector-pseudo-element-colon-notation': 'double',
  //   'selector-type-case': 'lower',
  //   'unit-case': 'lower',
  //   'value-keyword-case': 'lower',
  //   'value-list-comma-newline-after': 'always-multi-line',
  //   'value-list-comma-space-after': 'always-single-line',
  //   'value-list-comma-space-before': 'never',
  //   'value-list-max-empty-lines': 0,
  //   indentation: 2,
  //   'block-closing-brace-empty-line-before': 'never',
  //   'block-closing-brace-newline-after': 'always',
  //   'block-closing-brace-newline-before': 'always-multi-line',
  //   'block-closing-brace-space-before': 'always-single-line',
  //   'block-opening-brace-newline-after': 'always-multi-line',
  //   'block-opening-brace-space-after': 'always-single-line',
  //   'block-opening-brace-space-before': 'always',
  //   'color-hex-case': 'lower',
  //   'color-hex-length': 'short',
  //   'selector-max-type': 2,
  //   'custom/no-visibility-allowed': true,
  //   'custom/max-value-allowed': 50
  // },
  rules: {
    // 'custom/no-visibility-allowed': true,
    'custom/max-value-allowed': 50,

    'block-closing-brace-newline-before': 'always-multi-line', //closing line k upar wali property me last me extra space hatana rahega & closing next line me rahega
    "at-rule-no-unknown": true, //no @unkwon rules only named rules like @media, @charset
    "at-rule-no-unknown": [true, {
      "ignoreAtRules": ["function", "if", "each", "include", "mixin"]
    }],
    // "block-no-empty": true, // Disallow empty blocks.
    "color-no-invalid-hex": true, // no invalid hex like 
    "color-hex-case": "lower",
    "color-hex-length": "short",
    "comment-no-empty": true,
    "declaration-block-no-duplicate-properties": [
      true,
      {
        ignore: ["consecutive-duplicates-with-different-values"]
      }
    ],
    "declaration-block-no-shorthand-property-overrides": true,
    // "declaration-no-important": true,
    "declaration-block-semicolon-newline-after": "always-multi-line",
    "declaration-block-single-line-max-declarations": 1,
    "declaration-block-trailing-semicolon": "always",
    "declaration-colon-newline-after": "always-multi-line",
    "declaration-empty-line-before": "never",
    "function-comma-newline-after": "always-multi-line",
    "function-max-empty-lines": 0,
    "function-name-case": "lower",
    "function-parentheses-newline-inside": "always-multi-line",
    "font-family-no-duplicate-names": true,
    "font-family-no-missing-generic-family-keyword": true,
    "function-calc-no-invalid": true, //Disallow an invalid expression within calc functions.
    "function-calc-no-unspaced-operator": true,
    "function-linear-gradient-no-nonstandard-direction": true,
    "indentation": 4,
    "keyframe-declaration-no-important": true, //keyframe should not allow !important
    "length-zero-no-unit": true,
    "media-feature-name-no-unknown": true,
    "max-empty-lines": 1,
    "media-feature-name-case": "lower",
    "media-query-list-comma-newline-after": "always-multi-line",
    "number-leading-zero": "always",
    "number-no-trailing-zeros": true,
    // "no-descending-specificity": true,
    "no-duplicate-at-import-rules": true,
    "no-duplicate-selectors": true,
    "no-empty-source": true, //extra lines \t \n not allowed
    "no-extra-semicolons": true,
    "no-invalid-double-slash-comments": true,
    "property-no-unknown": true,
    "property-case": "lower",
    "selector-pseudo-class-no-unknown": true,
    "selector-pseudo-element-no-unknown": true,
    "selector-type-no-unknown": true,
    "string-no-newline": true, //single string should not we break in new line 
    "selector-attribute-brackets-space-inside": "never",
    "selector-descendant-combinator-no-non-space": true,
    "selector-list-comma-newline-after": "never-multi-line",
    "selector-max-empty-lines": 0,
    "selector-pseudo-class-case": "lower",
    "selector-pseudo-class-parentheses-space-inside": "never",
    "selector-pseudo-element-case": "lower",
    "selector-pseudo-element-colon-notation": "double",
    "selector-type-case": "lower",
    "unit-case": "lower",
    "unit-no-unknown": true, //allow valid units
    "value-keyword-case": "lower",
    "value-list-comma-newline-after": "always-multi-line",
    "value-list-max-empty-lines": 0,
  },
  plugins: ['./max-limit-stylelint-plugin.js'],
  ignoreFiles: ["./src/static/js/**", "./release/**", "./build/**", "./tokens/**"]
};

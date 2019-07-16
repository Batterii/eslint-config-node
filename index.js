module.exports = {
	env: {
		es6: true,
		node: true,
	},
	extends: 'eslint:recommended',
	parserOptions: {
		ecmaVersion: 8,
	},
	rules: {
		'accessor-pairs': 'error',
		'array-bracket-newline': [
			'error',
			'consistent',
		],
		'array-bracket-spacing': [
			'error',
			'always',
		],
		'array-callback-return': 'error',
		'array-element-newline': [
			'error',
			'consistent',
		],
		'arrow-parens': 'error',
		'block-spacing': 'error',
		'brace-style': 'error',
		'camelcase': [
			'error',
			{ ignoreDestructuring: true },
		],
		'class-methods-use-this': 'warn',
		'comma-dangle': [
			'error',
			{
				arrays: 'always-multiline',
				exports: 'always-multiline',
				functions: 'always-multiline',
				imports: 'always-multiline',
				objects: 'always-multiline',
			},
		],
		'comma-spacing': [
			'error',
			{ after: true, before: false },
		],
		'comma-style': 'error',
		'computed-property-spacing': 'error',
		'consistent-this': [
			'error',
			'self',
		],
		'curly': [
			'error',
			'multi-line',
			'consistent',
		],
		'default-case': 'error',
		'dot-location': [
			'error',
			'property',
		],
		'dot-notation': 'error',
		'eol-last': 'error',
		'eqeqeq': 'error',
		'func-call-spacing': 'error',
		'func-names': [
			'error',
			'never',
		],

		// Off until we can move to eslint 6 and use the new
		// `multiline-arguments` option.
		'function-paren-newline': 'off',

		'generator-star-spacing': 'error',
		'global-require': 'error',
		'implicit-arrow-linebreak': 'error',
		'indent': [
			'error',
			'tab',
			{ SwitchCase: 1 },
		],
		'key-spacing': 'error',
		'keyword-spacing': 'error',
		'linebreak-style': [
			'error',
			'unix',
		],
		'lines-between-class-members': [
			'error',
			'always',
			{ exceptAfterSingleLine: true },
		],
		'max-classes-per-file': 'warn',
		'max-len': 'error',
		'max-statements-per-line': 'error',
		'multiline-ternary': [
			'error',
			'never',
		],
		'new-cap': 'warn',
		'new-parens': 'error',
		'no-array-constructor': 'error',
		'no-async-promise-executor': 'error',
		'no-await-in-loop': 'warn',
		'no-bitwise': 'warn',
		'no-caller': 'error',
		'no-confusing-arrow': [
			'error',
			{ allowParens: true },
		],
		'no-console': 'error',
		'no-div-regex': 'error',
		'no-duplicate-imports': [
			'error',
			{ includeExports: true },
		],
		'no-else-return': [
			'error',
			{ allowElseIf: false },
		],
		'no-eval': 'error',
		'no-extend-native': 'error',
		'no-extra-bind': 'error',
		'no-extra-parens': [
			'error',
			'all',
			{
				enforceForArrowConditionals: false,
				nestedBinaryExpressions: false,
			},
		],
		'no-floating-decimal': 'error',
		'no-implicit-coercion': 'error',
		'no-implied-eval': 'error',
		'no-invalid-this': 'error',
		'no-iterator': 'error',
		'no-labels': 'error',
		'no-lone-blocks': 'error',
		'no-lonely-if': 'error',
		'no-misleading-character-class': 'error',
		'no-mixed-operators': 'error',
		'no-multi-spaces': 'error',
		'no-multi-str': 'error',
		'no-negated-condition': 'error',
		'no-nested-ternary': 'error',
		'no-new': 'error',
		'no-new-func': 'error',
		'no-new-object': 'error',
		'no-new-require': 'error',
		'no-new-wrappers': 'error',
		'no-octal-escape': 'error',
		'no-path-concat': 'error',
		'no-plusplus': 'error',
		'no-process-env': 'error',
		'no-process-exit': 'error',
		'no-proto': 'error',
		'no-return-assign': [
			'error',
			'always',
		],
		'no-return-await': 'error',
		'no-self-compare': 'error',
		'no-sequences': 'error',
		'no-shadow': 'error',
		'no-sync': 'warn',
		'no-template-curly-in-string': 'warn',
		'no-throw-literal': 'error',
		'no-trailing-spaces': 'error',
		'no-undef-init': 'error',
		'no-underscore-dangle': [
			'error',
			{ allowAfterSuper: true, allowAfterThis: true },
		],
		'no-unmodified-loop-condition': 'error',
		'no-unneeded-ternary': [
			'error',
			{ defaultAssignment: false },
		],
		'no-unused-expressions': 'error',
		'no-use-before-define': [
			'error',
			{ functions: false },
		],
		'no-useless-call': 'error',
		'no-useless-computed-key': 'error',
		'no-useless-concat': 'error',
		'no-useless-constructor': 'error',
		'no-useless-rename': 'error',
		'no-useless-return': 'error',
		'no-var': 'error',
		'no-void': 'error',
		'no-warning-comments': 'warn',
		'no-whitespace-before-property': 'error',
		'no-with': 'error',
		'nonblock-statement-body-position': 'error',
		'object-curly-newline': 'error',
		'object-curly-spacing': [
			'error',
			'always',
		],
		'object-property-newline': [
			'error',
			{ allowAllPropertiesOnSameLine: true },
		],
		'object-shorthand': 'error',
		'one-var-declaration-per-line': 'error',
		'operator-assignment': 'error',
		'operator-linebreak': 'error',
		'padded-blocks': [
			'error',
			'never',
		],
		'prefer-arrow-callback': 'error',
		'prefer-const': 'error',
		'prefer-destructuring': 'warn',
		'prefer-numeric-literals': 'error',
		'prefer-promise-reject-errors': 'error',
		'prefer-rest-params': 'error',
		'prefer-spread': 'error',
		'prefer-template': 'error',
		'quote-props': [
			'error',
			'consistent-as-needed',
		],
		'quotes': [
			'error',
			'single',
		],
		'radix': 'error',
		'require-atomic-updates': 'error',
		'require-await': 'warn',
		'rest-spread-spacing': 'error',
		'semi': 'error',
		'semi-spacing': 'error',
		'semi-style': 'error',
		'sort-imports': 'error',
		'space-before-blocks': 'error',
		'space-before-function-paren': [
			'error',
			'never',
		],
		'space-in-parens': 'error',
		'space-infix-ops': 'error',
		'space-unary-ops': 'error',
		'spaced-comment': 'error',
		'strict': [
			'error',
			'never',
		],
		'switch-colon-spacing': 'error',
		'symbol-description': 'error',
		'template-curly-spacing': 'error',
		'template-tag-spacing': 'error',
		'unicode-bom': 'error',
		'wrap-regex': 'error',
		'yield-star-spacing': 'error',
		'yoda': 'error',
	},
};

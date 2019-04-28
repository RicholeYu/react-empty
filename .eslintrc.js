module.exports = {
    root: true,
    // parser: "babel-eslint",
    "parser": 'typescript-eslint-parser',
    "parserOptions": {
        "ecmaVersion": 2017,
        "sourceType": "module",
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true,
            "arrowFunctions": true,
            "classes": true,
            "modules": true,
            "defaultParams": true
        }
    },
    env: {
        browser: true,
    },
    extends: ["eslint:recommended", "plugin:react/recommended"],
    plugins: [
        "class-property"
    ],
    rules: {
        "indent": ["error", 4, { "ignoredNodes": ["TSXElement *"] }],
        "eqeqeq": "off",
        "no-useless-escape": "off",
        "brace-style": 0,//大括号风格
        "curly": ["error", "all"], //[2, "all"],//必须使用 if(){} 中的{}
        "no-new": "off",
        "no-return-assign": "warn",//return 语句中不能有赋值表达式

        "handle-callback-err": 0,
        "padded-blocks": 0,
        "no-duplicate-imports": 0,
        "operator-linebreak": 0,
        "no-extend-native": 0,
        "no-sequences": 0,

        "no-debugger": 0,
        "no-eval": 0,
        "comma-dangle": ["error", "never"],
        "arrow-spacing": ["error", { "before": true, "after": true }],
        "no-undef": "error",
        "no-console": 0,
        "space-before-function-paren": ["error", "always"],
        "keyword-spacing": ["error", { "before": true, "after": true }],
        "space-before-blocks": ["error", "always"],
        "spaced-comment": ["error", "always", {"exceptions": ['-', '+']}],
        "quotes": ["error", "single"],
        "semi": ["error", "never"],
        "no-multiple-empty-lines": ["error", {"max": 1}],
        "generator-star-spacing": ["error", { "before": true, "after": true }],
        "object-curly-newline": ["error", { "consistent": true, "minProperties": 2 }],
        "object-curly-spacing": ["error", "always"],
        "key-spacing": ["error", { "beforeColon": false, "afterColon": true }],
        "linebreak-style": ["error", "windows"],
        "eol-last": ["error", "windows"],
        "object-property-newline": ["error", {}],
        "space-infix-ops": 2,
        'react/jsx-indent': [
            'error',
            4
        ],
        "react/jsx-filename-extension": [2, { "extensions": [".js", ".jsx", ".tsx"] }],
        "react/jsx-closing-tag-location": 2,
        "react/self-closing-comp": ["error", {
            "component": true,
            "html": true
        }],
        "react/jsx-tag-spacing": ["error", {
			"closingSlash": "never",
			"beforeSelfClosing": "always",
			"afterOpening": "never",
			"beforeClosing": "never"
		}],
    },
    settings: {
        "react": {
            "createClass": "createReactClass",
            "pragma": "React",
            "version": "detect"
        }
    },
    globals: {
        require: true,
        process: true,
        module: true,
        EventEmitter: true
    }
}

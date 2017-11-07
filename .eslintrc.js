const { rules: tslintRulesRecommended } = require('tslint/lib/configs/recommended');
const tslintRules = Object.assign({}, tslintRulesRecommended, {
    "member-access": false,
    "ordered-imports": false,
    "quotemark": false,
    "no-var-keyword": false,
    "object-literal-sort-keys": false,
    "no-console": false,
});

module.exports = {
    "env": {
        "es6": true,
        "node": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:unicorn/recommended",
    ],
    "parser": "typescript-eslint-parser",
    "parserOptions": {
        "ecmaVersion": 2017,
        "sourceType": "module"
    },
    "plugins": [
        "unicorn",
        "typescript",
        "import",
        "tslint",
    ],
    "rules": {
        "tslint/config": [1, {
            rules: tslintRules,
            rulesDirectory: ["node_modules/tslint/lib/rules"],
        }],
        "no-undef": 0,
        "no-unused-vars": 0,
        "no-console": 0,
        "indent": 0,
        "import/newline-after-import": 1,
        "import/no-duplicates": 1,
        "import/max-dependencies": [1, { "max": 10 }],
        "import/newline-after-import": 0,
        "quotes": [1, "single", { "allowTemplateLiterals": true }],
        "semi": ["warn", "always"],
    }
};

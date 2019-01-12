module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "node": true,
        "mocha": true
    },
    "globals": {
        "expect": true,
        "sinon": true,
        "Promise": true
    },
    "extends": ["standard", "standard-react"],

    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "sourceType": "module"
    },
    "plugins": [
        "react", "import"
    ],
    "rules": {

        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ],
        "max-len": ["error", 120],
        "jsx-quotes": ["error", "prefer-double"]
    }
};

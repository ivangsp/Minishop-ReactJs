module.exports = {
    "env": {
        "browser": true,
        "es6": true
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
        "max-len": ["error", 120]
    }
};

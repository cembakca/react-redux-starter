module.exports = {
    "extends": "airbnb",
    "rules": {
      "no-plusplus": 0,
      "func-names": 0,
      "prefer-destructuring": 0,
      "semi": 2,
      "no-extra-semi": 2,
      "comma-dangle": ["error", "never"],
      "prefer-rest-params": 0,
      "eqeqeq": 0,
      "space-before-function-paren": ["error", "never"],
      "import/extensions": ["off", "never"],
      "react/destructuring-assignment": ["off", "never"],
      "import/no-unresolved": 0,
      "import/no-extraneous-dependencies": 0,
      "jsx-a11y/anchor-is-valid": 0,
      "jsx-a11y/no-static-element-interactions": 0,
      "jsx-a11y/media-has-caption": 0,
      "jsx-a11y/click-events-have-key-events": 0,
      "jsx-a11y/anchor-has-content": 0,
      "jsx-a11y/label-has-for": 0,
      "prefer-arrow-callback": 0,
      "react/button-has-type": ["off", {reset: true}],
      "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
      "react/jsx-filename-extension": [0],
      "react/forbid-prop-types": 0 // FIXME: prefer PropTypes.shape instead of object
    },
    "env": {
      "browser": true,
      "node": true
    },
    "parser": "babel-eslint",
    "settings": {
      "import/resolver": {
        "webpack": {
          "config": "./webpack.config.js"
        }
      }
    }
};

const StyleDictionary = require('style-dictionary').extend({
    source: ['design-tokens/**/*.json'],
    platforms: {
        scss: {
            transformGroup: 'scss',
            buildPath: 'tokens/',
            files: [{
                destination: 'variables.scss',
                format: 'scss/variables'
            }],
        },
        js: {
            "transformGroup": "js",
            "buildPath": "tokens/",
            "files": [{
                "destination": "variables.js",
                "format": "javascript/es6"
            }]
        },
        "css": {
            "transformGroup": "css",
            "buildPath": "tokens/",
            "files": [
                {
                    "format": "css/variables",
                    "destination": "tokens.css"
                }
            ]
        }
    }
});




StyleDictionary.buildAllPlatforms();
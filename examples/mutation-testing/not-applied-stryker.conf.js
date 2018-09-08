module.exports = function(config) {
  config.set({
    testRunner: "mocha",
    mochaOptions: {
      // Optional mocha options
      files: [
        'testHelper.js',
        'examples/mutation-testing/not-applied/**/*.spec.js'
      ],
      opts: 'mocha.opts',
      ui: 'bdd',
      timeout: 3000,
      require: [ /*'babel-register' */],
      // asyncOnly: false
    },
    mutator: "javascript",
    transpilers: [],
    reporters: ["html", "clear-text", "progress"],
    packageManager: "npm",
    testFramework: "mocha",
    coverageAnalysis: "perTest",
    mutate: [
      "examples/mutation-testing/not-applied/**/*.js",
      "!examples/mutation-testing/not-applied/**/*.spec.js"
    ]
  });
};

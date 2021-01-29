exports.config = {
    //seleniumAddress: 'http://127.0.0.1:4444/wd/hub',
    directConnect: true,
    getPageTimeout: 60000,
    allScriptsTimeout: 50000,
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    Capabilities:{

      "browserName": 'chrome'
    },

    plugins: [{
      package: require.resolve('protractor-multiple-cucumber-html-reporter-plugin'),
      displayDuration: true
      }
  ],

    maxSessions: 1,

    specs: ['features/*.feature'],
    specs: ['spec.js'],

    cucumberOpts: {
      // require step definitions
      tags: false,
      format:'json:.tmp/results.json',
      require: [
        'features/stepdefinitions/stepdefinition.js', // accepts a glob
      ]
    }
  };
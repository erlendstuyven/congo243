// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

/*global jasmine */
var SpecReporter = require('jasmine-spec-reporter');

exports.config = {
  getPageTimeout: 30000,
  allScriptsTimeout: 11000,
  specs: [
    './e2e/**/*.e2e-spec.ts'
  ],
  capabilities: {
    'browserName': 'firefox'
  },
  directConnect: true,
  baseUrl: 'http://localhost:4200/',
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    print: function () {
    }
  },
  useAllAngular2AppRoots: true,
  beforeLaunch: function () {
    require('ts-node').register({
      project: 'e2e'
    });
  },
  onPrepare: function () {
    jasmine.getEnv().addReporter(new SpecReporter());
  },
  plugins: [{
    package: 'protractor-screenshoter-plugin',
    screenshotPath: './build/protractor',
    writeReportFreq: 'asap',
    screenshotOnExpect: 'failure',
    screenshotOnSpec: 'none',
    withLogs: 'true',
    clearFoldersBeforeTest: true
  }]
};

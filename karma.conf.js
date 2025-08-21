module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage'),
      require('karma-junit-reporter'),
    ],
    reporters: ['progress', 'junit'],
    junitReporter: {
      outputDir: 'reports/junit',
      outputFile: 'junit.xml',
      useBrowserName: false
    },
    browsers: ['ChromeHeadless'],
    singleRun: true
  });
};
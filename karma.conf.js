// karma.conf.js
module.exports = function (config) {
  config.set({
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    browsers: ['ChromeHeadless'], // run headless Chrome
    singleRun: true               // exit after running tests
  });
};

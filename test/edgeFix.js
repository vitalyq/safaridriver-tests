// Contains workaround for "Error: ECONNREFUSED connect ECONNREFUSED" in Edge.
// The error is thrown if there is no delay between WebDriver instance creation.
// The error is not thrown if MicrosoftWebDriver is run in advance manually and
// SELENIUM_REMOTE_URL is set to the corresponding URL.
const { afterEach } = require('selenium-webdriver/testing');

afterEach(function () {
  return new Promise(r => setTimeout(r, 100));
});

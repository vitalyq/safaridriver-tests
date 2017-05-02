// Safely terminate the browser session.
//
// Contains workaround for "Error: ECONNREFUSED connect ECONNREFUSED" in Edge.
// The error is thrown if there is no delay between WebDriver instance creation.
// The error is not thrown if MicrosoftWebDriver is run in advance manually and
// SELENIUM_REMOTE_URL is set to the corresponding URL.
const getBrowser = require('./getBrowser');

function quitSafely(driver) {
  return getBrowser(driver)
    .then((browser) => {
      const quitPromise = driver.quit();
      return browser === 'MicrosoftEdge' ?
        quitPromise.then(() => new Promise(r => setTimeout(r, 100))) :
        quitPromise;
    });
}

module.exports = quitSafely;

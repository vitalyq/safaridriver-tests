// Get current browser's name.
// The browser name is memoized for performance.
let browserMemo;

function getBrowser(driver) {
  if (!browserMemo) {
    return driver.getCapabilities()
      .then((capabilities) => {
        browserMemo = capabilities.get('browserName');
        return browserMemo;
      });
  }
  return Promise.resolve().then(() => browserMemo);
}

module.exports = getBrowser;

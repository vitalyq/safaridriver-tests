// Calling WebElement.click() on an element with overflow hidden throws in Safari driver:
// ElementNotVisibleError: An element command could not be completed because the element
// is not visible on the page.
const { Builder } = require('selenium-webdriver');
const { describe, it } = require('selenium-webdriver/testing');

function createElement() {
  var el = document.createElement('div');
  el.style.overflow = 'hidden';
  el.style.width = '100px';
  el.style.height = '100px';
  document.body.appendChild(el);
  return el;
}

describe('WebElement.click()', function () {
  this.timeout(60000);

  it('should not throw if an element has overflow hidden', function () {
    const driver = new Builder()
      .forBrowser('safari')
      .build();

    driver.get('http://example.com/');
    driver.executeScript(createElement)
      .then(el => el.click());

    return driver.quit();
  });
});

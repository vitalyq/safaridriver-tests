// Calling WebElement.click() on an element with overflow hidden throws in Safari driver:
// ElementNotVisibleError: An element command could not be completed because the element
// is not visible on the page.
const { Builder } = require('selenium-webdriver');
const { describe, it, before, after } = require('selenium-webdriver/testing');
const quitSafely = require('./utils/quitSafely');

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
  let driver;

  before(function () {
    driver = new Builder()
      .forBrowser('safari')
      .build();
  });

  after(function () {
    return quitSafely(driver);
  });

  it('should not throw if an element has overflow hidden', function () {
    driver.get('http://example.com/');
    driver.executeScript(createElement)
      .then(el => el.click());
  });
});

// until.stalenessOf() condition is broken in Safari driver.
const { Builder, By, until } = require('selenium-webdriver');
const { describe, it, before, after } = require('selenium-webdriver/testing');
const quitSafely = require('./utils/quitSafely');

function createElement() {
  var el = document.createElement('div');
  el.id = 'myDiv';
  document.body.appendChild(el);
}

function removeElement() {
  var el = document.getElementById('myDiv');
  document.body.removeChild(el);
}

describe('until.stalenessOf()', function () {
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

  it('should work', function () {
    driver.get('http://example.com/');
    driver.executeScript(createElement);
    const el = driver.findElement(By.id('myDiv'));
    driver.executeScript(removeElement);

    // TimeoutError: Waiting element to become stale
    driver.wait(until.stalenessOf(el), 10000);
  });
});

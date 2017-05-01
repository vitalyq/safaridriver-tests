// until.stalenessOf condition is broken in Safari driver.
const { Builder, By, until } = require('selenium-webdriver');
const { describe, it } = require('selenium-webdriver/testing');

function createElement() {
  var el = document.createElement('div');
  el.id = 'myDiv';
  document.body.appendChild(el);
}

function removeElement() {
  var el = document.getElementById('myDiv');
  document.body.removeChild(el);
}

describe('until', function () {
  this.timeout(60000);

  it('#stalenessOf()', function () {
    const driver = new Builder()
      .forBrowser('safari')
      .build();

    driver.get('http://example.com/');
    driver.executeScript(createElement);
    const el = driver.findElement(By.id('myDiv'));
    driver.executeScript(removeElement);

    // TimeoutError: Waiting element to become stale
    driver.wait(until.stalenessOf(el), 10000);

    return driver.quit();
  });
});

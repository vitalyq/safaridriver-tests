# safaridriver-tests

Test cases showing flaws in [safaridriver](https://webkit.org/blog/6900/webdriver-support-in-safari-10/). Errors are described in the test files. All the tests are failing in:
- Safari Technology Preview 10.2, Release 28
- macOS Sierra 10.12.4
- selenium-webdriver 3.4.0

Tests are passing with ChromeDriver, geckodriver, Microsoft WebDriver and InternetExplorerDriver.

## Running tests

- Install Node.js and npm
- Install Safari Technology Preview
- Enable Remote Automation in the Develop menu of Safari Technology Preview
- Clone the repository and `cd` to the folder
- Run:
  ```
  npm install
  npm test
  ```

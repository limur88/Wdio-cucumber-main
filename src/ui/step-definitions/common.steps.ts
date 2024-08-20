import { Given, When, Then } from "@wdio/cucumber-framework";
import pages from "../pages/pageFactory.js";

Given("I open {string} url", async function (url: string) {
  await browser.maximizeWindow();
  await browser.url(url);
});

Given("I open Sales Portal", async function () {
  await browser.maximizeWindow();
  await browser.url("https://anatoly-karpovich.github.io/aqa-course-project");
});

Then(/^I should be on "([^"]*)" page$/, async function (page: string) {
  await pages[page].hiddenSpinner();
  await pages[page].waitForOpened();
  await pages[page].hiddenSpinner();
});

Then(/^I should verify user$/, async function () {
  await pages["Home"].verifyUser();
});

Then(/^I should( not)? see "([^"]*)" $/, async function (not: string, selector: string) {
  not ? await $(selector).waitForDisplayed({ reverse: true }) : await $(selector).waitForDisplayed();
});

Then(/^I should( not)? see "([^"]*)" on "([^"]*)" page$/, async function (not: string, element: string, page: string) {
  not
    ? await pages[page].waitForElement(pages[page][element], { reverse: true })
    : await pages[page].waitForElement(pages[page][element]);
});

When(
  /^I enter "([^"]*)" in "([^"]*)" on "([^"]*)" page$/,
  async function (text: string, element: string, page: string) {
    await pages[page].setValue(pages[page][element], text);
  }
);

When(/^I enter "([^"]*)" in "([^"]*)"$/, async function (text: string, selector: string) {
  await $(selector).setValue(text);
});

When(/^I click on "([^"]*)" on "([^"]*)" page$/, async function (element: string, page: string) {
  const foundPage = pages[page];
  const elementFromPage = foundPage[element];
  await foundPage.click(elementFromPage);
  // await pages[page].click(pages[page][element])
});

Then(
  /^I should see "([^"]*)" (with|contains) text "([^"]*)"$/,
  async function (selector: string, method: string, text: string) {
    const element = await $(selector);
    if (method === "with") {
      await expect(element).toHaveText(text);
    } else {
      const actualText = await element.getText();
      await expect(actualText).toContain(text);
    }
  }
);

Then(
  /^I should see "([^"]*)" (with|contains) text "([^"]*)" on "([^"]*)" page$/,
  async function (element: string, method: string, text: string, page: string) {
    const actualText = await pages[page].getText(pages[page][element]);
    method === "with" ? expect(actualText).toEqual(text) : expect(actualText).toContain(text);
  }
);

// Then(/^I click on "Products button" on "Home" page$/, async function () {
//   await pages["Home"].openProducts();
// });

// Then(/^I open (Products|Customers|Orders) List page on "Home" page$/, async function (module: string) {
//   if (module === "Products") {
//     await pages["Home"].openProducts();
//   } else if (module === "Customers") {
//     await pages["Home"].openCustomers();
//   } else if (module === "Orders") {
//     await pages["Home"].openOrders();
//   }
// });

When(/^I login as Admin$/, async function () {
  const credentials = {
    username: "aqacourse@gmail.com",
    password: "password",
  };
  await (await pages["Sign In"].fillCredentials(credentials)).clickOnLoginButton();
});

When(/^I click on "([^"]*)" on "([^"]*)" List page$/, async function (button: string, page: string) {
  await pages[page].clickOnButton(button);
});

Then(
  /^I select "([^"]*)" in "([^"]*)" on "([^"]*)" page$/,
  async function (manufacturer: string, dropdown: string, page: string) {
    const element = await pages[page].waitForElement(pages[page][dropdown]);
    await element.selectByVisibleText(manufacturer);
  }
);

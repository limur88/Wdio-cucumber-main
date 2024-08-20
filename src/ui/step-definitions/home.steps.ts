import { When } from "@wdio/cucumber-framework";
import { HomeService } from "../services/home.services.js";

const homeService = new HomeService();

When(/^I open (Products|Customers|Orders) List page on "Home" page$/, async function (module: string) {
  if (module === "Products") await homeService.openProductsPage();
});

import { HomePage } from "../pages/home.page.js";
import { ProductsPage } from "../pages/products/products.page.js";

export class HomeService {
  constructor(public productsPage = new ProductsPage(), public homePage = new HomePage()) {}

  async openProductsPage() {
    await this.homePage.clickOnViewDetailsbutton("Products");
    await this.homePage.hiddenSpinner();
    await this.productsPage.waitForOpened();
  }

  async openCustomersPage() {
    await this.homePage.clickOnViewDetailsbutton("Customers");
    await this.homePage.hiddenSpinner();
    await this.productsPage.waitForOpened();
  }

  async openOrdersPage() {
    await this.homePage.clickOnViewDetailsbutton("Orders");
    await this.homePage.hiddenSpinner();
    await this.productsPage.waitForOpened();
  }
}

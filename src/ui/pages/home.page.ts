import { PortalPage } from "./portal.page.js";

export class HomePage extends PortalPage {
  //   uniqueElement = '//strong[.="AQA User"]';
  uniqueElement = "strong";

  readonly "Orders button" = "//button[@id='orders-from-home']";
  readonly "Products button" = "//button[@id='products-from-home']";
  readonly "Customers button" = "//button[@id='customers-from-home']";
  readonly "User Label" = "strong";

  async openOrders() {
    await $(this["Orders button"]).click();
  }

  async openProducts() {
    await $(this["Products button"]).click();
  }

  async openCustomers() {
    (await $(this["Customers button"])).click();
  }

  async clickOnViewDetailsbutton(moduleName: "Products" | "Customers" | "Orders") {
    await this.click(this[`${moduleName} button`]);
  }

  async verifyUser() {
    const element = await $(this["User Label"]);
    expect(element).toHaveText("AQA User");
  }
}

// export default new HomePage();

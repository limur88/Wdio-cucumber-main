import { PortalPage } from "../portal.page.js";

export class ProductsPage extends PortalPage {
  readonly uniqueElement = '//h2[.="Products List "]';

  readonly "Add New Product button" = "button.page-title-header";
  readonly "Table row selector" = (product: string) => `//tr[./td[text()="${product}"]]`;
  readonly "Name by table row" = (product: string) => `${this["Table row selector"](product)}/td[1]`;
  readonly "Price by table row" = (product: string) => `${this["Table row selector"](product)}/td[2]`;
  readonly "Manufacturer by table row" = (product: string) => `${this["Table row selector"](product)}/td[3]`;
  readonly "Notification" = ".toast-body";

  async clickOnAddNewProduct() {
    await this.click(this["Add New Product button"]);
  }

  async clickOnButton(button: string) {
    await this.click(this[button]);
  }

  async getDataByName(name: string) {
    const [price, manufacturer] = await Promise.all([
      this.getText(this["Price by table row"](name)),
      this.getText(this["Manufacturer by table row"](name)),
    ]);
    // return { name, price, manufacturer };
    return { name, price: +price.replace("$", ""), manufacturer };
  }
}

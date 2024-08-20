import _ from "lodash";
import { AddNewProductPage } from "../../pages/products/addNewProduct.page.js";
import { ProductsPage } from "../../pages/products/products.page.js";
import { IProduct } from "../../data/types/product.types.js";

//import { logStep } from '../../../utils/report/decorator.js';

export class ProductsListService {
  constructor(public productsPage = new ProductsPage(), public addNewProductPage = new AddNewProductPage()) {}

  //   @logStep('Open Add New Product page')
  async openAddNewProductPage() {
    await this.productsPage.clickOnAddNewProduct();
    await this.productsPage.hiddenSpinner();
    await this.addNewProductPage.waitForOpened();
  }

  async getExistingProductData(productName: string) {
    const createdProductData = await this.productsPage.getDataByName(productName);
    return createdProductData;
  }

  //   @logStep('Validate product in table')
  async checkProductInTable(product: IProduct) {
    const actualProduct = await this.getExistingProductData(product.name);
    const expectedProduct = _.pick(product, ["name", "price", "manufacturer"]);
    expect(actualProduct).toMatchObject(expectedProduct);
  }
}

import { When } from "@wdio/cucumber-framework";
import { ProductsApiClient } from "../clients/products.client.js";
import { generateNewProduct } from "../data/products/generateProduct.js";
import { SignInApiClient } from "../clients/signin.client.js";
import { adminCredentials } from "../data/credentials/adminCreds.js";

const signinService = new SignInApiClient();
const productsApi = new ProductsApiClient();

When(/^I create product via API$/, async function () {
  const token = await signinService.login(adminCredentials);
  const productData = generateNewProduct();
  const productResponse = await productsApi.create(productData, token);
  this["product"] = productResponse.body.Product;
});

When(/^I open Edit Product page on "Products List" page$/, async function () {
  const createdProduct = this["product"];
  console.log(createdProduct);
});

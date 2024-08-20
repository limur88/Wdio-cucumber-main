import { HomePage } from "./home.page.js";
import { LoginPage } from "./login.page.js";
import { AddNewProductPage } from "./products/addNewProduct.page.js";
import { ProductsPage } from "./products/products.page.js";

const pages = {
  "Sign In": new LoginPage(),
  Home: new HomePage(),
  "Products List": new ProductsPage(),
  "Add New Product": new AddNewProductPage(),
};

export default pages;

import { HomePage } from "../pages/home.page.js";
import { LoginPage } from "../pages/login.page.js";

const adminCredentials = {
  username: "aqacourse@gmail.com",
  password: "password",
};

export class LogInService {
  constructor(public loginPage = new LoginPage(), public homePage = new HomePage()) {}

  async openSalesPortal() {
    await this.loginPage.openPage("https://anatoly-karpovich.github.io/aqa-course-project");
  }

  async login() {
    await this.loginPage.fillCredentials(adminCredentials);
    await this.loginPage.clickOnLoginButton();
    await this.homePage.waitForOpened();
  }

  async loginAsAdmin() {
    await this.login();
  }

  async signOut() {
    await this.loginPage.deleteCookies(["Authorization"]);
  }
}

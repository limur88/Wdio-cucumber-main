import { PortalPage } from "./portal.page.js";

export class LoginPage extends PortalPage {
  uniqueElement = '//form[.//input[@id="emailinput"]]';

  readonly "Email Field" = "#emailinput";
  readonly "Password Field" = "#passwordinput";
  readonly "Login Button" = '//button[@type="submit"]';

  async fillCredentials(credentials: { [key: string]: string }) {
    await $(this["Email Field"]).setValue(credentials.username);
    await $(this["Password Field"]).setValue(credentials.password);
    return this;
  }

  async clickOnLoginButton() {
    await $(this["Login Button"]).click();
    this.hiddenSpinner();
  }
}
// export default new LoginPage();

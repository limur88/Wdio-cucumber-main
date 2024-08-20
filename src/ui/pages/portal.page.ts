import { BasePage } from "./base.page.js";

export abstract class PortalPage extends BasePage {
  readonly spinner = '//div[@class="spinner-border"]';
  readonly "Notification Label" = ".toast-body";
  abstract readonly uniqueElement: string;

  async waitForOpened() {
    await this.waitForElement(this.uniqueElement);
  }

  async hiddenSpinner() {
    await this.waitForElement(this.spinner, 10000, true);
  }
}

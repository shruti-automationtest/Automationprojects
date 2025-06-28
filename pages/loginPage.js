import { LoginLocators } from '../locators/locators.js';

export class LoginPage {
  constructor(page) {
    this.page = page;
  }

  async hoverLogin() {
    await this.page.hover(LoginLocators.loginHover);
  }

  async clickSignIn() {
    await this.page.click(LoginLocators.signInButton);
  }

  async enterEmail(email) {
    await this.page.fill(LoginLocators.emailInput, email);
    await this.page.click(LoginLocators.continueButton);
  }

  async enterPassword(password) {
    await this.page.fill(LoginLocators.passwordInput, password);
    await this.page.click(LoginLocators.submitButton);
  }

  async selectLanguage(langCode) {
    await this.page.click(LoginLocators.languageButton);
    await this.page.waitForSelector(LoginLocators.languageInputs);

    const labels = this.page.locator(LoginLocators.languageInputs);
    const count = await labels.count();

    for (let i = 0; i < count; i++) {
      const input = labels.nth(i);
      const value = await input.getAttribute('value');
      if (value === langCode) {
        await labels.nth(i).check();
        break;
      }
    }
    await this.page.click(LoginLocators.languageSaveButton);
    await this.page.waitForTimeout(1000);
  }
}

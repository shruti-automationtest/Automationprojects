import { LoginLocators } from '../locators/locators.js';
import { expect } from '@playwright/test';

export class HomePage {
  constructor(page) {
    this.page = page;
  }

  async openMenu() {
    await this.page.click(LoginLocators.menuBar);
    await this.page.mouse.down();
    await expect(this.page.locator(LoginLocators.seeAllButton)).toBeVisible({ timeout: 10000 });
    await this.page.click(LoginLocators.seeAllButton);
  }

  async clickMenuItem(itemName) {
    const allItems = this.page.locator(LoginLocators.menuItems);
    await allItems.first().waitFor({ state: 'visible' });

    const count = await allItems.count();
    for (let i = 0; i < count; i++) {
      const text = await allItems.nth(i).textContent();
      if (text?.trim() === itemName) {
        await allItems.nth(i).click();
        break;
      }
    }
  }
}

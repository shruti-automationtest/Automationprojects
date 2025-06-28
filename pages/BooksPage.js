import { expect } from '@playwright/test';
import {LoginLocators} from '../locators/locators.js';

export class BooksPage{
  constructor(page) {
    this.page = page;
  }

  async clickBooksMenu(booksdetails) {
    await expect(this.page.locator(LoginLocators.booksMenu).first()).toBeVisible({ timeout: 10000 });
    await this.page.locator(LoginLocators.booksMenu).first().click({ force: true });;
  }
}
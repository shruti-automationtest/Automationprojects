import { test } from '@playwright/test';
import { LoginPage } from '../pages/loginPage.js';
import { config } from '../config/config.js';
import { HomePage } from '../pages/HomePage.js';
import { BooksPage } from '../pages/Bookspage.js';
import navigationData from '../test-data/navigationData.json' assert { type: 'json' };

test('Login and navigate categories dynamically', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const homePage = new HomePage(page);
  const bookPage = new BooksPage(page);
  await page.goto(config.url);

  await loginPage.hoverLogin();
  await loginPage.clickSignIn();
  await loginPage.enterEmail(config.email);
  await loginPage.enterPassword(config.password);
  await loginPage.selectLanguage(config.language);
  await homePage.openMenu();
  const mainBooks= navigationData['Shop by Category'].main;
    for (const type of mainBooks) {
    if (type === 'Books') {
      await homePage.clickMenuItem(type);
      break;
    }
  }
  await bookPage.clickBooksMenu(config.booksdetails);
     
});

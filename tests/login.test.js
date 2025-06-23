import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/login.page.js";
import { credentials } from "../data/credentials.data.js";

test("login only test", async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.login(
    credentials.validUser.username,
    credentials.validUser.password
  );

  await expect(page).toHaveURL("/inventory.html");
});

import { test as setup } from "@playwright/test";
import { LoginPage } from "../pages/login.page.js";
import { credentials } from "../data/credentials.data.js";
import path from "path";

const authFile = path.join(__dirname, "../playwright/.auth/user.json");

setup("authenticate", async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.login(
    credentials.validUser.username,
    credentials.validUser.password
  );
  await page.context().storageState({ path: authFile })
});

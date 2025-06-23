import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/login.page.js";
import { InventoryPage } from "../pages/inventory.page.js";
import { credentials } from "../data/credentials.data.js";
import { itemSelection } from "../data/items.data.js";

test("select 4 items", async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);

  await loginPage.goto();
  await loginPage.login(
    credentials.validUser.username,
    credentials.validUser.password
  );
  await inventoryPage.expectInventoryPage();

  await inventoryPage.selectItems(itemSelection.select4);
  await expect(await inventoryPage.getCartCount()).toHaveText("4");
});

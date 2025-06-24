import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/login.page.js";
import { InventoryPage } from "../pages/inventory.page.js";
import { credentials } from "../data/credentials.data.js";

test.describe("Add Cart From Product List Page", () => {
  test("Add cart with 2 items", async ({ page }) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);

    await loginPage.goto();
    await loginPage.login(
      credentials.validUser.username,
      credentials.validUser.password
    );

    await inventoryPage.expectInventoryPage();

    await inventoryPage.clickRandomAddToCartButtons(2);

    const cartCount = await inventoryPage.getCartCountText();
    expect(cartCount).toBe("2");
  });

  test("Add cart with 3 items", async ({ page }) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);

    await loginPage.goto();
    await loginPage.login(
      credentials.validUser.username,
      credentials.validUser.password
    );

    await inventoryPage.expectInventoryPage();

    await inventoryPage.clickRandomAddToCartButtons(3);

    const cartCount = await inventoryPage.getCartCountText();
    expect(cartCount).toBe("3");
  });

  test("Add cart with 4 items", async ({ page }) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);

    await loginPage.goto();
    await loginPage.login(
      credentials.validUser.username,
      credentials.validUser.password
    );
    await inventoryPage.expectInventoryPage();

    await inventoryPage.clickRandomAddToCartButtons(4);

    const cartCount = await inventoryPage.getCartCountText();
    expect(cartCount).toBe("4");
  });
});

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

    const added = await inventoryPage.clickRandomAddToCartButtons(2);
    console.log("✅ Added products:", added);

    const cartCount = await inventoryPage.getCartCountText();
    expect(cartCount).toBe("2");

    //   await page.pause();
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

    const added = await inventoryPage.clickRandomAddToCartButtons(3);
    console.log("✅ Added products:", added);

    const cartCount = await inventoryPage.getCartCountText();
    expect(cartCount).toBe("3");

    //   await page.pause();
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

    const added = await inventoryPage.clickRandomAddToCartButtons(4);
    console.log("✅ Added products:", added);

    const cartCount = await inventoryPage.getCartCountText();
    expect(cartCount).toBe("4");

    //   await page.pause();
  });
});

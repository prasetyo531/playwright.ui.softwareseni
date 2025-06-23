export class InventoryPage {
  constructor(page) {
    this.page = page;
    this.items = page.locator(".inventory_item");
    this.addToCartButtons = page.locator("button.btn_inventory");
  }

  async expectInventoryPage() {
    await this.page.waitForURL("**/inventory.html");
  }

  async selectItems(count) {
    for (let i = 0; i < count; i++) {
      await this.addToCartButtons.nth(i).click();
    }
  }

  async getCartCount() {
    return this.page.locator(".shopping_cart_badge");
  }
}

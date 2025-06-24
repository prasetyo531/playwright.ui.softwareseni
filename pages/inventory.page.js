import cssEscape from "css.escape";
import { getRandomElements } from "../utils/random.js";

export class InventoryPage {
  constructor(page) {
    this.page = page;
  }

  async expectInventoryPage() {
    await this.page.waitForURL("/inventory.html");
  }

  /**
   * Click multiple random "Add to Cart" buttons on the inventory page
   * @param {number} count - Number of products to add
   */
  async clickRandomAddToCartButtons(count) {
    const buttons = this.page.locator('[id^="add-to-cart"]');
    const total = await buttons.count();

    if (count > total) {
      throw new Error(`Requested ${count} items, but only ${total} available.`);
    }

    const ids = [];
    for (let i = 0; i < total; i++) {
      const id = await buttons.nth(i).getAttribute("id");
      if (id) ids.push(id);
    }

    const selectedIds = getRandomElements(ids, count);

    for (const id of selectedIds) {
      const safeSelector = `#${cssEscape(id)}`;
      //debug
      console.log(`🛒 Clicking Add to Cart: ${safeSelector}`);
      await this.page.locator(safeSelector).click();
    }

    return selectedIds; // optional: return selected IDs
  }

  async getCartCountText() {
    const badge = this.page.locator(
      "#shopping_cart_container"
    );
    return (await badge.count()) > 0 ? await badge.textContent() : "0";
  }
}

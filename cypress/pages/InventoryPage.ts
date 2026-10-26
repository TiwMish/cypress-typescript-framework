export class InventoryPage {
  titleShouldBe(text: string): void {
    cy.get(".title").should("have.text", text);
  }

  addBackpackToCart(): void {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  }

  goToCart(): void {
    cy.get(".shopping_cart_link").click();
  }
}

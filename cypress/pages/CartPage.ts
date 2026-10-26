export class CartPage {
  itemCountShouldBe(count: number): void {
    cy.get(".cart_item").should("have.length", count);
  }

  checkout(): void {
    cy.get('[data-test="checkout"]').click();
  }
}

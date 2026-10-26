export class CheckoutPage {
  fillDetails(firstName: string, lastName: string, postalCode: string): void {
    cy.get('[data-test="firstName"]').clear().type(firstName);
    cy.get('[data-test="lastName"]').clear().type(lastName);
    cy.get('[data-test="postalCode"]').clear().type(postalCode);
    cy.get('[data-test="continue"]').click();
  }

  finish(): void {
    cy.get('[data-test="finish"]').click();
  }

  confirmationShouldBe(text: string): void {
    cy.get(".complete-header").should("have.text", text);
  }
}

# Cypress + TypeScript Framework

Cypress end-to-end framework in TypeScript, built around page objects.
Tests run against the public SauceDemo demo site — no proprietary code, no real
credentials. Demo users are the ones SauceDemo publishes publicly
(`standard_user` / `secret_sauce`).

## What it covers
- E2E tests: valid login, invalid login, locked-out user
- Full flow: login → add Sauce Labs Backpack → cart → checkout → "Thank you for your order!"
- Page objects: Login, Inventory, Cart, Checkout
- No hard waits — Cypress retries assertions automatically

## Run it
```bash
npm install
npm run cy:run
```

GitHub Actions runs the suite on every push / pull request (see
`.github/workflows/ci.yml` — add this file manually on GitHub if the
GitHub App cannot push workflow files).

## Structure
```
cypress/pages/    LoginPage, InventoryPage, CartPage, CheckoutPage
cypress/e2e/      login.cy.ts, cart-checkout.cy.ts
cypress.config.ts
```

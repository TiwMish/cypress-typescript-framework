import { LoginPage } from "../pages/LoginPage";
import { InventoryPage } from "../pages/InventoryPage";
import { CartPage } from "../pages/CartPage";
import { CheckoutPage } from "../pages/CheckoutPage";

const login = new LoginPage();
const inventory = new InventoryPage();
const cart = new CartPage();
const checkout = new CheckoutPage();

describe("Cart and checkout", () => {
  it("full checkout flow confirms the order", () => {
    login.visit();
    login.login("standard_user", "secret_sauce");
    inventory.addBackpackToCart();
    inventory.goToCart();
    cart.itemCountShouldBe(1);
    cart.checkout();
    checkout.fillDetails("Isha", "Tiwari", "M5V 1J1");
    checkout.finish();
    checkout.confirmationShouldBe("Thank you for your order!");
  });
});

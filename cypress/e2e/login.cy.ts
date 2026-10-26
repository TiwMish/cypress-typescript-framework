import { LoginPage } from "../pages/LoginPage";
import { InventoryPage } from "../pages/InventoryPage";

const login = new LoginPage();
const inventory = new InventoryPage();

describe("Login", () => {
  beforeEach(() => {
    login.visit();
  });

  it("valid login shows the Products page", () => {
    login.login("standard_user", "secret_sauce");
    inventory.titleShouldBe("Products");
  });

  it("invalid login shows an error", () => {
    login.login("standard_user", "wrong_password");
    login.errorShouldContain("Username and password do not match");
  });

  it("locked-out user shows an error", () => {
    login.login("locked_out_user", "secret_sauce");
    login.errorShouldContain("locked out");
  });
});

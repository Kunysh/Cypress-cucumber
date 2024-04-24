import { Then, When } from "@badeball/cypress-cucumber-preprocessor";
import { cartPagePO } from "../page_objects/cart/cart_PO";

When("the user opens the cart", () => {
  cartPagePO.clickOnCartButton();
});

Then("the user should see all added products in the cart", () => {
  cartPagePO.verifyProductInCart();
});

When("the user removes a selected product", () => {
  cartPagePO.clickOnDeleteButtons();
});

Then("the product should be removed from the cart", () => {
  cartPagePO.deleteButtons.should("not.exist");
});

import { Then, When } from "@badeball/cypress-cucumber-preprocessor";
import Cart_PO from "../page_objects/cart/cart_PO";

const cartPage = new Cart_PO();

When("the user opens the cart", () => {
  cartPage.clickOnCartButton();
});

Then("the user should see all added products in the cart", () => {
  cartPage.elements.deleteButton().should("exist");
});

When("the user removes a selected product", () => {
  cartPage.clickOnDeleteButton();
});

Then("the product should be removed from the cart", () => {
  cartPage.elements.deleteButton().should("not.exist");
});

import { Then, When } from "@badeball/cypress-cucumber-preprocessor";
import Products_PO from "../page_objects/products/products_PO";
import productsData from "../../fixtures/products.json";

const categoriesPage = new Products_PO();
let stub;

When("the user opens the chosen category", () => {
  categoriesPage.clickOnCategoryButton();
});

When("the user opens a specific product page", () => {
  categoriesPage.clickOnChosenProduct();
});

When("the user clicks on the Add to cart button", () => {
  stub = cy.stub();
  cy.on("window:alert", stub);
  categoriesPage.clickOnAddToCartButton();
});

Then("the product should be added to the cart", () => {
  expect(stub).to.have.been.calledWith(productsData.productAddedConfirmation);
});

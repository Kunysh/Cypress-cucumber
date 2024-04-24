import { Then, When } from "@badeball/cypress-cucumber-preprocessor";
import { productsPagePO } from "../page_objects/products/products_PO";
import productsData from "../../fixtures/products.json";
import endpointUrl from "../../fixtures/endpoints.json";

let stub;

When("the user opens the chosen category", () => {
  productsPagePO.fetchProductsList(endpointUrl.byCat);
  productsPagePO.clickOnCategoryButton();
});

When("the products list is fetched and saved through API", () => {
  productsPagePO.getFirstProductTitle();
});

When("the user opens a specific product page", () => {
  productsPagePO.clickOnChosenProduct();
});

When("the user clicks on the Add to cart button", () => {
  stub = cy.stub();
  cy.on("window:alert", stub);
  productsPagePO.clickOnAddToCartButton();
});

Then("the product should be added to the cart", () => {
  expect(stub).to.have.been.calledWith(productsData.productAddedConfirmation);
});

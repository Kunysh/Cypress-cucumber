import { Then, When } from "@badeball/cypress-cucumber-preprocessor";
import { productsPagePO } from "../page_objects/products/products_PO";
import productsData from "../../fixtures/products.json";
import endpointUrl from "../../fixtures/endpoints.json";

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

Then("the user clicks on the Add to cart button and product is added to cart", () => {
  productsPagePO.clickOnAddToCartButton();
  cy.on("window:alert", (alert) => {
    expect(alert).to.equal(productsData.productAddedConfirmation);
  });
});

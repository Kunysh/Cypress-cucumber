import { commonPO } from "../common/common_PO";

class Products_PO {
  _categoryName = "a[onclick=\"byCat('notebook')\"]";
  _addToCart = "#tbodyid .btn-success";
  _chosenProduct = `.card-title:contains("%TITLE%")`;

  get categoryName() {
    return cy.get(this._categoryName);
  }

  get chosenProduct() {
    return cy.get(this._chosenProduct);
  }

  get addToCart() {
    return cy.get(this._addToCart);
  }

  fetchProductsList(endpointUrl) {
    cy.intercept("POST", endpointUrl, (req) => {
      req.body = {
        cat: "notebook",
      };
    }).as("getProducts");
  }

  getFirstProductTitle() {
    cy.wait("@getProducts").then((interception) => {
      cy.writeFile(
        "cypress/fixtures/productsResponse.json",
        interception.response.body
      );
      const firstProductTitle = interception.response.body.Items[0].title;
      this._chosenProduct = `.card-title:contains("${firstProductTitle}")`;
    });
  }

  clickOnCategoryButton() {
    this.categoryName.click();
    commonPO.waitForElement();
  }

  clickOnChosenProduct() {
    this.chosenProduct.click();
    commonPO.waitForElement();
  }

  clickOnAddToCartButton() {
    this.addToCart.click();
    commonPO.waitForElement();
  }
}

export const productsPagePO = new Products_PO();

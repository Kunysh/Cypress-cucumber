import Common_PO from "../common/common_PO";

class Products_PO extends Common_PO {
  elements = {
    categoryName: () => cy.get("a[onclick=\"byCat('notebook')\"]"),
    chosenProduct: () =>
      cy.get(":nth-child(1) > .card > .card-block > .card-title > .hrefch"),
    addToCart: () => cy.get(".col-sm-12 > .btn"),
  };

  clickOnCategoryButton() {
    this.elements.categoryName().click();
    super.waitForElement();
  }

  clickOnChosenProduct() {
    this.elements.chosenProduct().click();
    super.waitForElement();
  }

  clickOnAddToCartButton() {
    this.elements.addToCart().click();
    super.waitForElement();
  }
}

export default Products_PO;

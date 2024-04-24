import { commonPO } from "../common/common_PO";

class Products_PO {
  _categoryName = 'a[onclick="byCat(\'notebook\')"]';
  _chosenProduct = ':nth-child(1) > .card > .card-block > .card-title > .hrefch';
  _addToCart = '.col-sm-12 > .btn';

  get categoryName() {
    return cy.get(this._categoryName);
  }

  get chosenProduct() {
    return cy.get(this._chosenProduct);
  }

  get addToCart() {
    return cy.get(this._addToCart);
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

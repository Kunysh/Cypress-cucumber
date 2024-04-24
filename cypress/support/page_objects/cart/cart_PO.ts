class Cart_PO {
  _cartButton = "#cartur";
  _deleteButton = 'a[onclick*="deleteItem"]';
  _productInCart = `#tbodyid td:contains("%TITLE%")`;

  get cartButton() {
    return cy.get(this._cartButton);
  }

  get deleteButtons() {
    return cy.get(this._deleteButton);
  }

  get productsInCart() {
    return this.getProductInCartSelector().then((selector) => cy.get(selector));
  }

  getProductInCartSelector() {
    return cy
      .readFile("cypress/fixtures/productsResponse.json")
      .then((response) => {
        const firstProductTitle = response.Items[0].title;
        return this._productInCart.replace("%TITLE%", firstProductTitle);
      });
  }

  clickOnCartButton() {
    this.cartButton.click();
  }

  clickOnDeleteButtons() {
    this.deleteButtons.click({ multiple: true });
  }

  verifyProductInCart() {
    return this.productsInCart.should("exist");
  }
}

export const cartPagePO = new Cart_PO();

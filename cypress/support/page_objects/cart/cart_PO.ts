class Cart_PO {
  _cartButton = '#cartur';
  _deleteButton = 'a[onclick*="deleteItem"]';

  get cartButton() {
    return cy.get(this._cartButton);
  }

  get deleteButton() {
    return cy.get(this._deleteButton);
  }

  clickOnCartButton() {
    this.cartButton.click();
  }

  clickOnDeleteButton() {
    this.deleteButton.click();
  }
}

export const cartPagePO = new Cart_PO();
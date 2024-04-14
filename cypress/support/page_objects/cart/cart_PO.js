import Common_PO from "../common/common_PO";

class Cart_PO extends Common_PO {
  elements = {
    cartButton: () => cy.get("#cartur"),
    deleteButton: () => cy.get('a[onclick*="deleteItem"]'),
  };

  clickOnCartButton() {
    this.elements.cartButton().click();
  }

  clickOnDeleteButton() {
    this.elements.deleteButton().click();
  }
}

export default Cart_PO;

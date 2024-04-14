import Common_PO from "../common/common_PO";

class Payments_PO extends Common_PO {
  elements = {
    orderButton: () => cy.get(".col-lg-1 > .btn"),
    namePaymentTextField: () => cy.get("#name"),
    countryPaymentTextField: () => cy.get("#country"),
    cityPaymentTextField: () => cy.get("#city"),
    cardPaymentTextField: () => cy.get("#card"),
    monthPaymentTextField: () => cy.get("#month"),
    yearPaymentTextField: () => cy.get("#year"),
    purchaseConfirmationButton: () =>
      cy.get(
        "#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary"
      ),
    purchaseConfirmationText: () => cy.get(".sweet-alert > h2"),
  };

  clickOnOrderButton() {
    this.elements.orderButton().click();
  }

  typePaymentDetails(name, country, city, card, month, year) {
    this.elements.namePaymentTextField().type(name);
    this.elements.countryPaymentTextField().type(country);
    this.elements.cityPaymentTextField().type(city);
    this.elements.cardPaymentTextField().type(card);
    this.elements.monthPaymentTextField().type(month);
    this.elements.yearPaymentTextField().type(year);
  }

  clickOnPurchaseConfirmationButton() {
    this.elements.purchaseConfirmationButton().click();
    super.waitForElement();
  }

  validatePurchaseConfirmationText(expectedPurchaseConfirmationText) {
    this.elements
      .purchaseConfirmationText()
      .should("contain.text", expectedPurchaseConfirmationText);
  }
}

export default Payments_PO;

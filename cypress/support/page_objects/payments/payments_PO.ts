import { commonPO } from "../common/common_PO";


class Payments_PO {
  _orderModalContainer = '#orderModal';
  _orderButtonSelector = '.col-lg-1 > .btn';
  _namePaymentTextField = '#name';
  _countryPaymentTextField = '#country';
  _cityPaymentTextField = '#city';
  _cardPaymentTextField = '#card';
  _monthPaymentTextField = '#month';
  _yearPaymentTextField = '#year';
  _confirmationButtonSelector = '> .modal-dialog > .modal-content > .modal-footer > .btn-primary';
  _purchaseConfirmationTextSelector = '.sweet-alert > h2';

  get orderButton() {
    return cy.get(this._orderButtonSelector);
  }

  get namePaymentTextField() {
    return cy.get(this._orderModalContainer +  ' ' + this._namePaymentTextField);
  }

  get countryPaymentTextField() {
    return cy.get(this._orderModalContainer +  ' ' + this._countryPaymentTextField);
  }

  get cityPaymentTextField() {
    return cy.get(this._orderModalContainer +  ' ' + this._cityPaymentTextField);
  }

  get cardPaymentTextField() {
    return cy.get(this._orderModalContainer +  ' ' + this._cardPaymentTextField);
  }

  get monthPaymentTextField() {
    return cy.get(this._orderModalContainer +  ' ' + this._monthPaymentTextField);
  }

  get yearPaymentTextField() {
    return cy.get(this._orderModalContainer +  ' ' + this._yearPaymentTextField);
  }

  get purchaseConfirmationButton() {
    return cy.get(this._orderModalContainer +  ' ' + this._confirmationButtonSelector);
  }

  get purchaseConfirmationText() {
    return cy.get(this._purchaseConfirmationTextSelector);
  }

  clickOnOrderButton() {
    this.orderButton.click();
  }

  typePaymentName(name) {
    this.namePaymentTextField.type(name);
  }

  typePaymentCountry(country) {
    this.countryPaymentTextField.type(country);
  }

  typePaymentCity(city) {
    this.cityPaymentTextField.type(city);
  }

  typePaymentCard(card) {
    this.cardPaymentTextField.type(card);
  }

  typePaymentMonth(month) {
    this.monthPaymentTextField.type(month);
  }

  typePaymentYear(year) {
    this.yearPaymentTextField.type(year);
  }

  clickOnPurchaseConfirmationButton() {
    this.purchaseConfirmationButton.click();
    commonPO.waitForElement(); // Zakładam, że commonPO jest zdefiniowane w projekcie
  }

  validatePurchaseConfirmationText(expectedPurchaseConfirmationText) {
    this.purchaseConfirmationText.should("contain.text", expectedPurchaseConfirmationText);
  }
}

export const paymentsPagePO = new Payments_PO;

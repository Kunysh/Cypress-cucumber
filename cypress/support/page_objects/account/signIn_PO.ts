import { commonPO } from "../common/common_PO";

class SignIn_PO {
  _signInModalContainer = '#signInModal';
  _usernameSignUpTextField = '#sign-username';
  _passwordSignUpTextField = '#sign-password';
  _signUpButtonSelector = '> .modal-dialog > .modal-content > .modal-footer > .btn-primary';

  get usernameSignUpTextField() {
    return cy.get(this._signInModalContainer + ' ' + this._usernameSignUpTextField);
  }

  get passwordSignUpTextField() {
    return cy.get(this._signInModalContainer + ' ' + this._passwordSignUpTextField);
  }

  get signUpButtonInRegisterForm() {
    return cy.get(this._signInModalContainer + ' ' + this._signUpButtonSelector);
  }

  typeUsername(username) {
    this.usernameSignUpTextField.type(username);
  }

  typePassword(password) {
    this.passwordSignUpTextField.type(password);
  }

  clickOnSignUpButtonInRegisterForm() {
    this.signUpButtonInRegisterForm.click();
    commonPO.waitForElement();
  }
}

export const signInPagePO = new SignIn_PO();

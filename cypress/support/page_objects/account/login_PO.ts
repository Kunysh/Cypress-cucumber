import { commonPO } from "../common/common_PO";

class Login_PO {
  _loginModalContainer = "#logInModal";
  _usernameLoginTextField = "#loginusername";
  _passwordLoginTextField = "#loginpassword";
  _loginButtonSelector = ".modal-footer .btn-primary";
  _loginConfirmation = "#nameofuser";

  get usernameLoginTextField() {
    return cy.get(
      this._loginModalContainer + " " + this._usernameLoginTextField
    );
  }

  get passwordLoginTextField() {
    commonPO.waitForElement();
    return cy.get(
      this._loginModalContainer + " " + this._passwordLoginTextField
    );
  }

  get loginButtonOnLoginPage() {
    return cy.get(this._loginModalContainer + " " + this._loginButtonSelector);
  }

  get loginConfirmation() {
    return cy.get(this._loginConfirmation);
  }

  typeUsername(username) {
    this.usernameLoginTextField.type(username, { force: true });
  }

  typePassword(password) {
    this.passwordLoginTextField.type(password, { force: true });
  }

  clickOnLoginButtonOnLoginPage() {
    this.loginButtonOnLoginPage.click();
    commonPO.waitForElement();
  }
}

export const loginPagePO = new Login_PO();

import HomePage_PO from "../home_page/homePage_PO";

class Login_PO extends HomePage_PO {
  elements = {
    usernameLoginTextField: () => cy.get("#loginusername"),
    passwordLoginTextField: () => cy.get("#loginpassword"),
    loginButtonOnLoginPage: () =>
      cy.get(
        "#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary"
      ),
    loginConfirmation: () => cy.get("#nameofuser"),
  };

  typeUsername(username) {
    this.elements.usernameLoginTextField().type(username, { force: true });
  }

  typePassword(password) {
    super.waitForElement();
    this.elements.passwordLoginTextField().type(password, { force: true });
  }

  clickOnLoginButtonOnLoginPage() {
    this.elements.loginButtonOnLoginPage().click();
    super.waitForElement();
  }
}

export default Login_PO;

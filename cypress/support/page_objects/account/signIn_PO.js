import Common_PO from "../common/common_PO";

class SignIn_PO extends Common_PO {
  elements = {
    usernameSignUpTextField: () => cy.get("#sign-username"),
    passwordSignUpTextField: () => cy.get("#sign-password"),
    signUpButtonInRegisterForm: () =>
      cy.get(
        "#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary"
      ),
  };

  typeUsername(username) {
    this.elements.usernameSignUpTextField().type(username);
  }

  typePassword(password) {
    this.elements.passwordSignUpTextField().type(password);
  }

  clickOnSignUpButtonInRegisterForm() {
    this.elements.signUpButtonInRegisterForm().click();
    super.waitForElement();
  }
}

export default SignIn_PO;

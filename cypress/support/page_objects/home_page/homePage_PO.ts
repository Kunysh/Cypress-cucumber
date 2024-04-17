import baseData from "../../../fixtures/base.json";
import Common_PO from "../common/common_PO";

class HomePage_PO extends Common_PO {
  elements = {
    signInButtonInHomepage: () => cy.get("#signin2"),
    logInButtonInHomepage: () => cy.get("#login2"),
  };

  navigateToHomepage() {
    cy.visit(baseData.baseUrl);
  }

  clickOnSignInButtonInHomepage() {
    this.elements.signInButtonInHomepage().click();
  }

  clickOnLogInButtonInHomepage() {
    this.elements.logInButtonInHomepage().click();
  }
}

export default HomePage_PO;

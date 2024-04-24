import baseData from "../../../fixtures/base.json";

class HomePage_PO {
  // Lokalizatory
  _signInButton = '#signin2';
  _logInButton = '#login2';

  get signInButtonInHomepage() {
    return cy.get(this._signInButton);
  }

  get logInButtonInHomepage() {
    return cy.get(this._logInButton);
  }

  navigateToHomepage() {
    cy.visit(baseData.baseUrl);
  }

  clickOnSignInButtonInHomepage() {
    this.signInButtonInHomepage.click();
  }

  clickOnLogInButtonInHomepage() {
    this.logInButtonInHomepage.click();
  }
}

export const homePagePO = new HomePage_PO();

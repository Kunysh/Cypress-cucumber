class Common_PO {
  waitForElement() {
    cy.wait(2000);
  }
}

export const commonPO = new Common_PO();

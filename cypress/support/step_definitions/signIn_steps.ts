import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { signInPagePO } from "../page_objects/account/signIn_PO";

When("the user enters {string}, {string}", (username, password) => {
  signInPagePO.typeUsername(username);
  signInPagePO.typePassword(password);
});

Then(
  "clicks the register button and the user should see a modal with {string}",
  (expectedAlertText) => {
    signInPagePO.clickOnSignUpButtonInRegisterForm();
    cy.on("window:alert", (alert) => {
      expect(alert).to.equal(expectedAlertText);
    });
  }
);

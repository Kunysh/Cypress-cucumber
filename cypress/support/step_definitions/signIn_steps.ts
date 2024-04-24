import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { signInPagePO } from "../page_objects/account/signIn_PO";

let stub;

When("the user enters {string}, {string}", (username, password) => {
  signInPagePO.typeUsername(username);
  signInPagePO.typePassword(password);
});

When("clicks the register button", () => {
  stub = cy.stub();
  cy.on("window:alert", stub);
  signInPagePO.clickOnSignUpButtonInRegisterForm();
});

Then("the user should see a modal with {string}", (expectedAlertText) => {
  expect(stub).to.have.been.calledWith(expectedAlertText);
});

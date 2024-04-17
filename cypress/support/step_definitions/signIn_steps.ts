import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import SignIn_PO from "../page_objects/account/signIn_PO";

const signInPage = new SignIn_PO();
let stub;

When("the user enters {string}, {string}", (username, password) => {
  signInPage.typeUsername(username);
  signInPage.typePassword(password);
});

When("clicks the register button", () => {
  stub = cy.stub();
  cy.on("window:alert", stub);
  signInPage.clickOnSignUpButtonInRegisterForm();
});

Then("the user should see a modal with {string}", (expectedAlertText) => {
  expect(stub).to.have.been.calledWith(expectedAlertText);
});

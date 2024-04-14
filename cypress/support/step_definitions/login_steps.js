import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import Login_PO from "../page_objects/account/login_PO";
import baseData from "../../fixtures/base.json";

const loginPage = new Login_PO();

When("the user enters username and password", () => {
  loginPage.typeUsername(baseData.username);
  loginPage.typePassword(baseData.password);
});

When("clicks the login button", () => {
  loginPage.clickOnLoginButtonOnLoginPage();
});

Then("the user should be logged in", () => {
  loginPage.elements
    .loginConfirmation()
    .should("contain.text", baseData.usernameValidation);
});

import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { loginPagePO } from "../page_objects/account/login_PO";
import baseData from "../../fixtures/base.json";

When("the user enters username and password", () => {
  loginPagePO.typeUsername(baseData.username);
  loginPagePO.typePassword(baseData.password);
});

When("clicks the login button", () => {
  loginPagePO.clickOnLoginButtonOnLoginPage();
});

Then("the user should be logged in", () => {
  loginPagePO.loginConfirmation.should(
    "contain.text",
    baseData.usernameValidation
  );
});

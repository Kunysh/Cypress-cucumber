import { Given, When } from "@badeball/cypress-cucumber-preprocessor";
import HomePage_PO from "../page_objects/home_page/homePage_PO";

const homePage = new HomePage_PO();

Given("a user is on the Demoblaze homepage", () => {
  homePage.navigateToHomepage();
});

When("the user navigates to the register page", () => {
  homePage.clickOnSignInButtonInHomepage();
});

When("the user navigates to the login page", () => {
  homePage.clickOnLogInButtonInHomepage();
});

import { Given, When } from "@badeball/cypress-cucumber-preprocessor";
import { homePagePO } from "../page_objects/home_page/homePage_PO";

Given("a user is on the Demoblaze homepage", () => {
  homePagePO.navigateToHomepage();
});

When("the user navigates to the register page", () => {
  homePagePO.clickOnSignInButtonInHomepage();
});

When("the user navigates to the login page", () => {
  homePagePO.clickOnLogInButtonInHomepage();
});

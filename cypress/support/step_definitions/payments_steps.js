import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import Payments_PO from "../page_objects/payments/payments_PO";
import paymentsData from "../../fixtures/payments.json";

const paymentPage = new Payments_PO();

When("the user clicks on the Place Order button", () => {
  paymentPage.clickOnOrderButton();
});

When("the user enters payment details", () => {
  paymentPage.typePaymentDetails(
    paymentsData.paymentDetails.name,
    paymentsData.paymentDetails.country,
    paymentsData.paymentDetails.city,
    paymentsData.paymentDetails.card,
    paymentsData.paymentDetails.month,
    paymentsData.paymentDetails.year
  );
});

When("the user clicks on the Purchase button", () => {
  paymentPage.clickOnPurchaseConfirmationButton();
});

Then("the payment should be completed successfully", () => {
  paymentPage.validatePurchaseConfirmationText(
    paymentsData.purchaseConfirmationText
  );
});

import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { paymentsPagePO } from "../page_objects/payments/payments_PO";
import paymentsData from "../../fixtures/payments.json";

When("the user clicks on the Place Order button", () => {
  paymentsPagePO.clickOnOrderButton();
});

When("the user enters payment details", () => {
  paymentsPagePO.typePaymentName(paymentsData.paymentDetails.name);
  paymentsPagePO.typePaymentCountry(paymentsData.paymentDetails.country);
  paymentsPagePO.typePaymentCity(paymentsData.paymentDetails.city);
  paymentsPagePO.typePaymentCard(paymentsData.paymentDetails.card);
  paymentsPagePO.typePaymentMonth(paymentsData.paymentDetails.month);
  paymentsPagePO.typePaymentYear(paymentsData.paymentDetails.year);
});

When("the user clicks on the Purchase button", () => {
  paymentsPagePO.clickOnPurchaseConfirmationButton();
});

Then("the payment should be completed successfully", () => {
  paymentsPagePO.validatePurchaseConfirmationText(
    paymentsData.purchaseConfirmationText
  );
});

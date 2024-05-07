@regression
Feature: Payments

    Background:
        Given a user is on the Demoblaze homepage
        When the user navigates to the login page
        And the user enters username and password
        And clicks the login button
        Then the user should be logged in
        And the user opens the chosen category
        And the products list is fetched and saved through API
        And the user opens a specific product page
        And the user clicks on the Add to cart button
        And the user opens the cart

    Scenario: Proceed to payment:
        And the user clicks on the Place Order button
        And the user enters payment details
        And the user clicks on the Purchase button
        Then the payment should be completed successfully

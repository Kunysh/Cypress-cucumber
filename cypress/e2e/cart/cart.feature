@regression
Feature: Shopping Cart on demoblaze.com

  Background:
    Given a user is on the Demoblaze homepage
    When the user navigates to the login page
    And the user enters username and password
    And clicks the login button
    Then the user should be logged in
    And the user opens the chosen category
    And the user opens a specific product page
    And the user clicks on the Add to cart button

  Scenario: Displaying/Removing a product from the cart
    When the user opens the cart
    Then the user should see all added products in the cart
    When the user removes a selected product
    Then the product should be removed from the cart

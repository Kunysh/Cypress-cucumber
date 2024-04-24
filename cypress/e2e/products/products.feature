@regression
Feature: Products Functionality on demoblaze.com

  Background: Pre conditions
    Given a user is on the Demoblaze homepage
    When the user navigates to the login page
    And the user enters username and password
    And clicks the login button
    Then the user should be logged in

  Scenario: Display and add product to cart
    When the user opens the chosen category
    And the products list is fetched and saved through API
    And the user opens a specific product page
    And the user clicks on the Add to cart button
    Then the product should be added to the cart

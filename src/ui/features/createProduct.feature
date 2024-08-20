Feature: [UI] [Products]

    Background:
        Given I open Sales Portal
        When I login as Admin


    Scenario: Successfully created product
        Then I click on "Products button" on "Home" page
        Then I should be on "Products List" page
        When I click on "Add New Product button" on "Products List" page
        Then I should be on "Add New Product" page
        When I enter "Sony" in "Name input" on "Add New Product" page
        Then I select "Sony" in "Manufacturer dropdown" on "Add New Product" page
        Then I enter "1122" in "Price input" on "Add New Product" page
        And I enter "2" in "Amount input" on "Add New Product" page
        Then I enter "your notes" in "Notes textarea" on "Add New Product" page
        Then I click on "Save New Product button" on "Add New Product" page
        Then I should be on "Products List" page
        Then I should see "Notification" contains text "Product was successfully created" on "Products List" page
# need to delete created product manually
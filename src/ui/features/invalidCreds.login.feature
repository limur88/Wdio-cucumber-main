Feature: [UI] [Login]

    Scenario Outline: Not logged in with invalid credentials
        Given I open Sales Portal
        Then I should be on "Sign In" page
        When I enter "<username>" in "Email Field" on "Sign In" page
        And I enter "<password>" in "Password Field" on "Sign In" page
        And I click on "Login Button" on "Sign In" page
        Then I should be on "Sign In" page
        Then I should see "Notification Label" contains text "<message>" on "Sign In" page

        Examples:
            | username            | password | message               |
            | aaa@aa.com          | password | Incorrect credentials |
            | aqacourse@gmail.com | pass!23  | Incorrect credentials |
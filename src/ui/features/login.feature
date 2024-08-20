Feature: [UI] [Login]

    Scenario: Successfully logged in with valid credentials
        #Given I open "https://anatoly-karpovich.github.io/aqa-course-project" url
        Given I open Sales Portal
        Then I should be on "Sign In" page
        #Then I should see "div.col-xl-4 form"
        # When I enter "aqacourse@gmail.com" in "#emailinput"
        # When I enter "aqacourse@gmail.com" in "Email Field" on "Sign In" page
        # And I enter "password" in "Password field" on "Sign In" page
        When I enter "aqacourse@gmail.com" in "Email Field" on "Sign In" page
        And I enter "password" in "Password Field" on "Sign In" page
        # And I enter "password" in "#passwordinput"
        # And I click on ".btn-primary"
        And I click on "Login Button" on "Sign In" page
        #Then I should see "strong" with text "AQA User"
        #Then I should see "strong" contains text "AQA "
        Then I should be on "Home" page
        Then I should see "User Label" contains text "AQA " on "Home" page
        #Then I should not see "#emailinput"
        Then I should verify user



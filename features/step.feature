Feature: Calculator


    Scenario: adding "15" and "15"

        Given go to website 'http://juliemr.github.io/protractor-demo/'
        When I enter "15" in the first field
        When I enter "15" in the second field
        When I click Go button
        Then displayed output should be "30"

    Scenario: adding "50" and "50"

        Given go to website 'http://juliemr.github.io/protractor-demo/'
        When I enter "50" in the first field
        When I enter "50" in the second field
        When I click Go button
        Then displayed output should be "100"

    Scenario: adding "31" and "32"

        Given go to website 'http://juliemr.github.io/protractor-demo/'
        When I enter "31" in the first field
        When I enter "32" in the second field
        When I click Go button
        Then displayed output should be "73"

    Scenario: adding "44" and "46"

        Given go to website 'http://juliemr.github.io/protractor-demo/'
        When I enter "31" in the first field
        When I enter "32" in the second field
        When I click Go button
        Then displayed output should be "100"
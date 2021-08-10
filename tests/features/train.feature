Feature: tiket product train

Background: Open Tiket
Given user at login page

#hotelCase Create transaction with non-instant payment for one-way trip, xx adults and xx infants and select seats
Scenario: login using Facebook
When user click button login with facebook
  # put your Facebook email here
  And user input email "your_mail@facebook.com" 
  And user input password
  And user click login button
Then user will see intial name
When user click menu train
    And user click OK notif kereta bandara
    And user input from station
    And user input to station 
    And user select to station 
    And select departure date
    And user add random adults 
    And user add random infants 
    And user click button done
    And user click search train
Then user will see select departure train page
When user click button select train
Then user will see detail order train
When user input passenger name
    And user input ID card number
    # And user input infant name
    # And user input infant birth date
    And user click button select seats
    And user click selected seats
    And user click button continue to payment
    And user click button confirmation continue
Then user will see payment page
When user click ATM for payment
  And user click pay
Then user will see detail payment
#already add after function client.end() it's should be close browser and fresh start
When user click logo tiket
  And user click initial name
  And user click logout
Then user will see menu login
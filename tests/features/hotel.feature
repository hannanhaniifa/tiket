Feature: tiket product hotel

Background: Open Tiket Login page
Given user at login page

#hotelCase Create transaction with non-instant payment for xx guest and xx room and login using Facebook
Scenario: Booking room and login using Facebook 
When user click button login with facebook
  # put your Facebook email here
  And user input email "your_mail@facebook.com" 
  And user input password
  And user click login button
Then user will see intial name
When user click menu hotel 
  And user input hotel destination
  And user click selected hotel
  And user select start date
  And user select end date
  And user add random room and random guest
  And user click button selesai
  And user click button search hotel
Then user will see detail hotel selected
When user click button filter breakfast
  And user click choose hotel
Then user will see detail order
When user click button payment
Then user will see payment page
When user click ATM for payment
  And user click pay
Then user will see detail payment
#already add after function client.end() it's should be close browser and fresh start
When user click logo tiket
  And user click initial name
  And user click logout
Then user will see menu login
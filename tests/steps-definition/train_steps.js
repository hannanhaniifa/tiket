const { client } = require('nightwatch-cucumber');
const { Given, Then, When, After, Before } = require('cucumber');
const browser = client.page.train_page();
var randomstring = require("randomstring");

var adults = Math.floor(Math.random() * 1);
var infants = Math.floor(Math.random() * 1);
var passengerName = randomstring.generate({length: 7,charset: 'alphabetic'}) + " AT UI";
var infantName = randomstring.generate({length: 9,charset: 'alphabetic'}) + " AT UI";
var idCard = Math.floor(Math.random()*1E16);
// console.log(adults, infants, passengerName, idCard);
var passengers = adults + infants + 1;
// console.log(passengers);



After(function (scenario) {
  return client.end();
});

When (/^user click menu train$/, () => {
  return browser.clickBtnTrain();
});

When (/^user click OK notif kereta bandara$/, () => {
  return browser.clickOkBandara();
});

When (/^user input from station$/, () => {
  return browser.inputFromStation();
});

When (/^user input to station$/, () => {
  return browser.inputToStation();
});

When (/^user select to station$/, () => {
  return browser.selectToStation();
});

When (/^select departure date$/, () => {
  return browser.selectDepartureDate();
});

When (/^user add random adults$/, () => {
  return browser.addAdults(adults);
});

When (/^user add random infants$/, () => {
  return browser.addInfants(infants);
});

When (/^user click button done$/, () => {
  return browser.clickBtnDone();
});

When (/^user click search train$/, () => {
  return browser.clickBtnSearchTrain();
});

Then(/^user will see select departure train page$/, () => {
  return browser.assertTrainFilter(passengers);
});

When (/^user click button select train$/, () => {
  return browser.clickBtnSelect();
});

Then(/^user will see detail order train$/, () => {
  return browser.assertDetailOrderTrain(passengers);
});

When (/^user input passenger name$/, () => {
  return browser.inputPassengerName(passengerName);
});

When (/^user input ID card number$/, () => {
  return browser.inputIDCard(idCard,infantName);
});

When (/^user input infant name$/, () => {
  return browser.inputInfantName(infantName);
});

When (/^user input infant birth date$/, () => {
  return browser.inputBirthDate();
});

When (/^user click button select seats$/, () => {
  return browser.clickBtnSelectSeat();
});

When (/^user click selected seats$/, () => {
  return browser.clickSeatSelected();
});

When (/^user click button continue to payment$/, () => {
  return browser.clickBtnToPayment();
});

When (/^user click button confirmation continue$/, () => {
  return browser.clickBtnContinue();
});
Then(/^user will see payment method page$/, () => {
  return browser.assertPaymentMethod();
});


  







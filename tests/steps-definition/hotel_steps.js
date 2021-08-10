const { client } = require('nightwatch-cucumber');
const { Given, Then, When, After, Before } = require('cucumber');
const browser = client.page.hotel_page();

var room = Math.floor(Math.random() * 2)+1;
var guest = Math.floor(Math.random() * 3)+1;
// console.log(room, guest);

After(function (scenario) {
  return client.end();
});

Given(/^user at login page$/, () => {
  return browser.navigateToLogin();
});

Given(/^user at tiket page$/, () => {
  return browser.navigateToPage();
});

When(/^user click menu login$/, () => {
  return browser.clickLogin();
});

When(/^user click button login with facebook$/, () => {
  return browser.clickButtonFB();
});

When(/^user input email "([^"]*)"$/, (email) => {
  return browser.inputEmail(email);
});

When(/^user input password$/, () => {
  return browser.inputPwd();
});

When(/^user click login button$/, () => {
  return browser.clickBtnLogin();
});

Then(/^user will see intial name$/, () => {
  return browser.assertInitial();
});

When (/^user click menu hotel$/, () => {
  return browser.clickBtnHotel();
});

When (/^user input hotel destination$/, () => {
  return browser.inputHotel();
});

When (/^user click selected hotel$/, () => {
  return browser.selectHotel();
});

When (/^user select start date$/, () => {
  return browser.selectStartDate();
});

When (/^user select end date$/, () => {
  return browser.selectEndDate();
});

When (/^user add random room and random guest$/, () => {
  return browser.addRoomGuest(guest,room);
});

When (/^user click button selesai$/, () => {
  return browser.clickBtnSelesai();
});

When (/^user click button search hotel$/, () => {
  return browser.clickBtnSearchHotel();
});
  
Then(/^user will see detail hotel selected$/, () => {
  return browser.assertCheckFilter();
});

When (/^user click button filter breakfast$/, () => {
  return browser.clickBtnBreakfast();
});

When (/^user click choose hotel$/, () => {
  return browser.clickBtnPilihHotel();
});

Then(/^user will see detail order$/, () => {
  return browser.assertDetailOrder();
});

When (/^user click button payment$/, () => {
  return browser.clickBtnPayment();
});

Then(/^user will see payment page$/, () => {
  return browser.assertMetodePembayaran();
});


When (/^user click ATM for payment$/, () => {
  return browser.clickATM();
});

When(/^user click pay$/, () => {
  return browser.clickBtnPayment();
});

Then(/^user will see detail payment$/, () => {
  return browser.assertDetailPayment();
});

//logout
When(/^user click logo tiket$/, () => {
  return browser.clickLogoTiket();
});

When(/^user click initial name$/, () => {
  return browser.clickInitialname();
});

When(/^user click logout$/, () => {
  return browser.clickLogout();
});

Then(/^user will see menu login$/, () => {
  return browser.assertLogin();
});

const { client } = require('nightwatch-cucumber');

const train = {

  testData: {
    fromStation: 'Gambir',
    toStation: 'Malang',
    trainDateSelected: 'Jum, 27 Agt',
    dPemesanTrain: 'Detail Pemesan',
    paymentMethod: 'Metode Pembayaran',
    birthDate: '2020-01-01'
  },
  elements: {
    btnTrain: 'a[href="/kereta-api"]',
    okBandara: '.train-mode-container>section>div.coach-mark>button',
    fromStation: '.part-component.part-depart>div.content>div.user-area>div>input',
    selectFrom: '.station-text>div.station-city',
    toStation: '.part-component.part-return>div.content>div.user-area>div>input',
    selectTo: '.content>ul>li:nth-child(1)>div.station-text>div.station-city>span',
    selectDate: '.widget-datepicker-content>div>div>div:nth-child(1)>div.DayPicker_focusRegion.DayPicker_focusRegion_1>div.DayPicker_transitionContainer.DayPicker_transitionContainer_1.DayPicker_transitionContainer__horizontal.DayPicker_transitionContainer__horizontal_2>div>div:nth-child(2)>div>table>tbody>tr:nth-child(4)>td:nth-child(6)>div',
    adultsAdd: '.passenger-box>div:nth-child(1)>div.right>div:nth-child(3)>button>i',
    infantsAdd: '.passenger-box>div:nth-child(2)>div.right>div:nth-child(3)>button>i',
    btnDone: '.part-component.part-passenger>div.content>div>div>div.foot>button',
    btnSearchTrain: '.train-form.z-index-999>div.footer-part>button',
    fromStationSelected: '.text-section-desc>div>div:nth-child(1)',
    toStationSelected: '.text-section-desc>div>div:nth-child(3)',
    trainDateSelected: '.text-section-desc > div > div:nth-child(5)',
    passengers: '.text-section-desc>div>div:nth-child(7)',
    btnSelect: '.col-result.padding-content.list-horizontal__top>div:nth-child(2)>div:nth-child(1)>div>div:nth-child(2)>div.col-3.right>button',
    dPemesanTrain: '.content-with-title-template:nth-child(1)>div.template-title>p',
    passengerName: '#adult-form-0>div.body-part>div>div>div.form-row.fullName>div>input',
    idCard: '.form-row.identityNumber>div>input',
    btnSelectSeat: '.btn.flat.btn-choose-seat',
    seatSelected: '.wagon-layout>table>tr:nth-child(5)>td:nth-child(7)>div>div',
    btnToPayment: '.action-area>button',
    btnConfirmationCont: '.button-area>button:nth-child(1)',
    paymentMethod: '.col-xs-12>h2',
    infantName: '#infant-form-0>div.body-part>div>div>div.form-row.fullName>div>input',
    birthDate: '.form-row.birthDate>div>input[type=hidden]',
  },

  commands: [{
    clickBtnTrain(){
      client.click(train.elements.btnTrain);
      this.waitForElementVisible(train.elements.btnTrain, 5000);
      return this.click(train.elements.btnTrain);
    },
    clickOkBandara(){
      client.acceptAlert();
      this.waitForElementVisible(train.elements.okBandara, 5000);
      return this.click(train.elements.okBandara);
    },
    inputFromStation() {
      this.waitForElementVisible(train.elements.fromStation, 5000);      
      this.setValue(train.elements.fromStation, train.testData.fromStation);
      this.waitForElementVisible(train.elements.selectFrom, 5000);
      return this.click(train.elements.selectFrom);
    },
    inputToStation() {
      this.waitForElementVisible(train.elements.toStation, 5000);
      this.clearValue(train.elements.toStation);      
      return this.setValue(train.elements.toStation, train.testData.toStation);
    },
    selectToStation() {
      this.waitForElementPresent(train.elements.selectTo, 5000);
      return this.click(train.elements.selectTo);
    },
    selectDepartureDate() {
      this.waitForElementVisible(train.elements.selectDate, 5000);
      return this.click(train.elements.selectDate);
    },
    addAdults(adults){
      this.waitForElementVisible(train.elements.adultsAdd, 5000);
      var a;
      for (let a = 0; a < adults; a++) { 
        client.pause(1000);
        client.click(train.elements.adultsAdd);
      }
      return client.pause(1000);
    },
    addInfants(infants){
      client.waitForElementVisible(train.elements.infantsAdd, 5000);
      var i;
      for (let i = 0; i < infants; i++) {
        client.click(train.elements.infantsAdd);
      }
      return client.pause(1000);
    },
    clickBtnDone() {
      this.waitForElementVisible(train.elements.btnDone, 5000);
      return this.click(train.elements.btnDone);
    },
    clickBtnSearchTrain() {
        client.waitForElementPresent(train.elements.btnSearchTrain, 5000);
        client.pause(1000);
        return client.click(train.elements.btnSearchTrain);
    },
    assertTrainFilter(passengers) {
      this.waitForElementVisible(train.elements.fromStationSelected, 9000);      
      this.assert.containsText(train.elements.fromStationSelected, train.testData.fromStation);

      this.waitForElementVisible(train.elements.toStationSelected, 5000);
      this.assert.containsText(train.elements.toStationSelected, train.testData.toStation);

      this.waitForElementVisible(train.elements.trainDateSelected, 5000);
      return this.assert.containsText(train.elements.trainDateSelected, train.testData.trainDateSelected);

      //it's random i can't assert bcs of some reason (infant <= adult, so need adjust random function)
      // this.waitForElementVisible(train.elements.passengers, 5000);
      // return this.assert.containsText(train.elements.passengers, (passengers+' Penumpang'));
    },
    clickBtnSelect() {
      this.waitForElementVisible(train.elements.btnSelect, 5000);
      return this.click(train.elements.btnSelect);
    },
    assertDetailOrderTrain() {
      this.waitForElementVisible(train.elements.dPemesanTrain, 5000);
      this.assert.containsText(train.elements.dPemesanTrain, train.testData.dPemesanTrain)
      && client.pause(1000);
    },
    inputPassengerName(passengerName) {
      this.waitForElementVisible(train.elements.passengerName, 5000);
      return client
      .click(train.elements.passengerName)
      .keys([client.Keys.COMMAND, "Backspace", client.Keys.NULL])
      .keys(passengerName);
    },
    inputIDCard(idCard,infantName) {
      this.waitForElementVisible(train.elements.idCard, 5000);
      this.setValue(train.elements.idCard, idCard);
      // this.waitForElementVisible(train.elements.infantName, 5000, results => {
      //   if (results.value === true) { 
      //     this.setValue(train.elements.infantName, infantName);
      //     return client.click(train.elements.birthDate).keys(['\uE015', '\uE006']) && client.pause(5000);
      //     // return client.click(train.elements.birthDate).keys(train.testData.birthDate) && client.pause(5000);

      //   }
      //   else { 
      //     client.pause(5000);
      //   }
      // });
    },
    clickBtnSelectSeat(){
      this.waitForElementVisible(train.elements.btnSelectSeat, 5000);
      return this.click(train.elements.btnSelectSeat);
    },
    clickSeatSelected(){
      this.waitForElementVisible(train.elements.seatSelected, 5000);
      return this.click(train.elements.seatSelected);
    },
    clickBtnToPayment(){
      this.waitForElementVisible(train.elements.btnToPayment, 5000);
      return this.click(train.elements.btnToPayment);
    },
    clickBtnContinue(){
      this.waitForElementVisible(train.elements.btnConfirmationCont, 5000);
      return this.click(train.elements.btnConfirmationCont);
    },
    assertPaymentMethod(){
      this.waitForElementVisible(train.elements.paymentMethod, 5000);
      return this.assert.containsText(train.elements.paymentMethod, train.testData.paymentMethod);
    }
  }],
};
module.exports = train;

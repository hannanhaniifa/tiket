const { client } = require('nightwatch-cucumber');

const hotel = {
  url() {
    const url = `https://www.tiket.com/${tiket.dynamicUrl.path}`;
    return url;
  },
  testData: {
    toLogin: 'login?ref=https://www.tiket.com',
    txtFB:'Email atau Telepon:',
    pwd: '', //input your password FB here
    initial: '', //input your password FB here
    destName: 'Alila Seminyak',
    btnSearchHotel: 'CARI HOTEL',
    btnPilihHotel: 'PILIH',
    sDateSelected: 'Kam, 16 Sep 2021',
    eDateSelected: 'Jum, 17 Sep 2021',
    dPemesanHotel: 'Detail Pemesan',
    dTamuHotel: 'Detail Tamu',
    dPemesananHotel: 'Detail Pemesanan',
    paymentPage: 'Metode Pembayaran',
    dTrf: 'Silahkan Transfer ke',
    howToPay: 'Cara Pembayaran',
    login: 'Login',

  },
  elements: {
    login: 'a[href="/login?ref=https://www.tiket.com"]',
    buttonFB: '.btn-signup.waves-effect.waves-light.btn-socmed.facebook',
    txtFB: '#email_container',
    email: '#email',
    pwd: '#pass',
    btnLogin: '#loginbutton',
    initial: '.header-right-side>div>span',
    btnHotel: 'a[href="/hotel"]',
    btnSelesai: '#guestAndRoom>div>div>div>div>div.done-button>button',
    destName: '#destination-input',
    selectedHotel: '#autocomplete-list-item>div.main-container>div>div.name>span',
    startDate: '#checkinDate>div>div>div>div>div>div:nth-child(3)>div>div>div.DayPicker>div>div.DayPicker-Months>div:nth-child(2)>div.DayPicker-Body>div:nth-child(3)>div:nth-child(5)>div>div.day-mod>div.day-mod-body',
    endDate: '#checkoutDate>div>div>div>div>div>div:nth-child(3)>div>div>div.DayPicker>div>div.DayPicker-Months>div:nth-child(1)>div.DayPicker-Body>div:nth-child(3)>div.DayPicker-Day.DayPicker-Day--endDate>div>div.day-mod>div.day-mod-body',
    roomAdd: '#guestAndRoom>div>div>div>div>div:nth-child(1)>div.number-input>div:nth-child(3)>i',
    guestAdd: '#guestAndRoom>div>div>div>div>div:nth-child(2)>div.number-input>div:nth-child(3)>i',
    btnSearchHotel: '.hero-section>div.widget-container>div>div.button-container>button',
    btnPilihHotel: '#Suite>div.room-card-list>div:nth-child(1)>div.right-side>div.bottom-right>button',
    hotelName: '.hotel-info__wrapper>div:nth-child(1)>h1',
    btnSarapan: '.room-filter-wrapper>div>div>div:nth-child(1)',
    sDateSelected: '#date-input-startdate',
    eDateSelected: '#date-input-enddate',
    dPemesanHotel: '#app>div>div>div.booking-form-container>div.main-content>div:nth-child(2)>div',
    dTamuHotel: '.main-content>div:nth-child(3)>div.title',
    dPemesananHotel: '.booking-information__header>div',
    btnPayment: '.button.default.primary',
    paymentPage: '.container>div:nth-child(1)>div>h2',
    ATM: '.container>div:nth-child(2)>div.col-xs-8>div>div:nth-child(2)>div:nth-child(7)>div>a>div>div>span',
    dTrf: '.card-body>h2',
    howToPay: '.instructions-payment>h2',
    logout: '.account-item-container:nth-child(7)>span',
    btnOut: '.button.default.secondary',
    tiketLogo: 'a.navbar-brand',

  },
  dynamicUrl: {
    path: '',
  },
  commands: [{
    navigateToLogin() {
      hotel.dynamicUrl.path = hotel.testData.toLogin;
      return this.navigate();
    },
    navigateToPage() {
      return this.navigate();
    },
    
    clickLogin() {
      this.waitForElementVisible(hotel.elements.login, 5000);
      return this.click(hotel.elements.login);
    },
    clickButtonFB() {
      this.waitForElementVisible(hotel.elements.buttonFB, 9000);
      this.click(hotel.elements.buttonFB);
      return client
      .windowHandles(function (result) {
        var handle = result.value[1];
        this.switchWindow(handle);
      })
    },
    inputEmail(email) {
      client.waitForElementVisible(hotel.elements.email, 5000);  
      return client.click(hotel.elements.email).keys(email);
    },
    inputPwd() {
      client.waitForElementVisible(hotel.elements.pwd, 5000);      
      return client.setValue(hotel.elements.pwd, hotel.testData.pwd);
    },
    clickBtnLogin() {
      client.waitForElementVisible(hotel.elements.btnLogin, 5000);
      client.click(hotel.elements.btnLogin);
      return client
      .windowHandles(function (result) {
        var popup = result.value[0];
        this.switchWindow(popup);
      })
    },
    assertInitial() {
      this.waitForElementVisible(hotel.elements.initial, 9000);
      return this.assert.containsText(hotel.elements.initial, hotel.testData.initial);
    },
    clickBtnHotel(){
      this.waitForElementVisible(hotel.elements.btnHotel, 5000);
      return this.click(hotel.elements.btnHotel);
    },
    inputHotel() {
      this.waitForElementVisible(hotel.elements.destName, 5000);      
      return this.setValue(hotel.elements.destName, hotel.testData.destName);
    },
    selectHotel() {
      this.waitForElementVisible(hotel.elements.selectedHotel, 5000);
      return this.click(hotel.elements.selectedHotel);
    },
    selectStartDate() {
      this.waitForElementVisible(hotel.elements.startDate, 5000);
      return this.click(hotel.elements.startDate);
    },
    selectEndDate() {
      this.waitForElementVisible(hotel.elements.endDate, 5000);
      return this.click(hotel.elements.endDate);
    },
    addRoomGuest(guest,room) {
      this.waitForElementVisible(hotel.elements.roomAdd, 5000);
      var g;
      for (let g = 0; g < guest; g++) { 
        this.click(hotel.elements.roomAdd);
      }
      this.waitForElementVisible(hotel.elements.guestAdd, 5000);
      var r;
      for (let r = 0; r < room; r++) {
        this.click(hotel.elements.guestAdd);
      }
      return client.pause(10000);
    },
    clickBtnSelesai() {
      this.waitForElementVisible(hotel.elements.btnSelesai, 5000);
      return this.click(hotel.elements.btnSelesai);
    },
    clickBtnSearchHotel() {
      client.waitForElementPresent(hotel.elements.btnSearchHotel, 5000);
      client.pause(5000);
      return client.click(hotel.elements.btnSearchHotel);
    },
    assertCheckFilter() {
      this.waitForElementVisible(hotel.elements.hotelName, 9000);      
      this.assert.containsText(hotel.elements.hotelName, hotel.testData.destName);

      this.waitForElementVisible(hotel.elements.sDateSelected, 5000);
      this.assert.value(hotel.elements.sDateSelected, hotel.testData.sDateSelected);

      this.waitForElementVisible(hotel.elements.eDateSelected, 5000);
      return this.assert.value(hotel.elements.eDateSelected, hotel.testData.eDateSelected);
    },
    clickBtnBreakfast() {
      this.waitForElementVisible(hotel.elements.btnSarapan, 5000);
      return this.click(hotel.elements.btnSarapan);
    },
    clickBtnPilihHotel() {
      client.waitForElementPresent(hotel.elements.btnPilihHotel, 5000);
      client.pause(5000);
      return client.click(hotel.elements.btnPilihHotel) 
      && client.pause(5000);
    },
    assertDetailOrder() {
      this.waitForElementVisible(hotel.elements.dPemesanHotel, 5000);
      this.assert.containsText(hotel.elements.dPemesanHotel, hotel.testData.dPemesanHotel);

      // should be assert name, no hp, and email 
      // but because i will not share my account so this will be need to be adjust
      // that's why i just assert the title of each content

      this.waitForElementVisible(hotel.elements.dTamuHotel, 5000);
      this.assert.containsText(hotel.elements.dTamuHotel, hotel.testData.dTamuHotel);

      this.waitForElementVisible(hotel.elements.dPemesananHotel, 5000);
      return this.assert.containsText(hotel.elements.dPemesananHotel, hotel.testData.dPemesananHotel)
      && client.pause(1000);
    },
    clickBtnPayment() {
      this.waitForElementVisible(hotel.elements.btnPayment, 5000);
      return this.click(hotel.elements.btnPayment) && client.pause(10000);
    },
    assertMetodePembayaran(){
      this.waitForElementVisible(hotel.elements.paymentPage, 5000);
      return this.assert.containsText(hotel.elements.paymentPage, hotel.testData.paymentPage);
    },
    clickATM() {
      this.waitForElementVisible(hotel.elements.ATM, 5000);
      return this.click(hotel.elements.ATM);
    },
    assertDetailPayment(){
      this.waitForElementVisible(hotel.elements.dTrf, 5000); 
      this.assert.containsText(hotel.elements.dTrf, hotel.testData.dTrf);

      this.waitForElementVisible(hotel.elements.howToPay, 5000); 
      return this.assert.containsText(hotel.elements.howToPay, hotel.testData.howToPay);
    },
    clickLogoTiket() {
      this.waitForElementVisible(hotel.elements.tiketLogo, 5000); 
      return this.click(hotel.elements.tiketLogo);
    },
    clickInitialname() {
      this.waitForElementVisible(hotel.elements.initial, 5000);
      return this.click(hotel.elements.initial)
      && client.pause(5000);
    },
    clickLogout() {
      this.waitForElementVisible(hotel.elements.logout, 5000);
      this.click(hotel.elements.logout);
      return client.click(hotel.elements.btnOut);
      
    },
    assertLogin(){
      this.waitForElementVisible(hotel.elements.login, 5000); 
      return this.assert.containsText(hotel.elements.login, hotel.testData.login);
    },
  }],
};
module.exports = hotel;

const chromedriver = require('chromedriver'); // seleniium chrome driver

require('nightwatch-cucumber')({
    nightwatchOutput: true,
    cucumberArgs: [
        '--require', 'tests/steps-definition', // include step_definitions folder
        '--format', 'json:reports/cucumber.json', // include cucumber.json folder
        '--format', 'node_modules/cucumber-pretty', // print nice looking cucumber in console
        'tests/features'
    ],
});

const nighwatchConfig = {
    test_workers: false, // for paralel test
    page_objects_path: 'tests/page-objects', // page object options
    output_folder: 'reports', // output reports
    src_folder: ['tests'],

    test_settings: {
        default: { // default test settings
            selenium_port: 4444,
            selenium_host: 'localhost',
            screenshots: {
                enabled: true,
                on_failure: true,
                path: 'screenshots',
            },
            desiredCapabilities: {
                browserName: 'chrome',
                chromeOptions: { args: [ 'window-size=1920,1080', '--disable-popup-blocking', '--disable-notifications', '--disable-infobars' ]},
            },
        },
    },
};

module.exports = nighwatchConfig;
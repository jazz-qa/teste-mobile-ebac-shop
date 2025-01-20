export const config = {

    //runner: 'local',
    //port: 4723,
    user: 'oauth-jazzkoliver-2dbeb',
    key: '3435b9ae-bf99-480d-9a7a-5855be271539',
    hostname: 'ondemand.us-west-1.saucelabs.com',
    port: 443,
    baseUrl: 'wd/hub',
    specs: [
        './test/specs/**/*.js'
    ],
    maxInstances: 1,
    capabilities: [{
        // emulador inicio
        //platformName: 'Android',
        //'appium:deviceName': 'ebac',
        //'appium:platformVersion': '11.0',
        //'appium:automationName': 'UiAutomator2',
        //'appium:app': `${process.cwd()}/app/ebacshop.apks`,
        //'appium:appWaitActivity': '.MainActivity',
        //'appium:disableIdLocatorAutocompletion': true
        // emulador fim
        platformName: 'Android',
        'appium:app': 'storage:filename=ebacshop.aab', // The filename of the mobile app
        'appium:deviceName': 'Google Pixel 4 GoogleAPI Emulator',
        'appium:platformVersion': '15.0',
        'appium:automationName': 'UiAutomator2',
        'appium:disableIdLocatorAutocompletion': true,
        'sauce:options': {
            build: 'appium-build-teste-ebacshop',
            name: 'Teste EBAC Shop',
            deviceOrientation: 'PORTRAIT',
            appiumVersion: '2.11.0'
        }
    }],
    logLevel: 'info',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    framework: 'mocha',
    reporters: ['spec',
        ['allure', {
            outputDir: 'allure-results',
            disableWebdriverStepsReporting: true,
            disableWebdriverScreenshotsReporting: true,
        }]
    ],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    }
}

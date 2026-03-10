export const config = {

    //runner: 'local',
    //port: 4723,
    user: 'oauth-jazzkoliver-8d45f',
    key: 'f51c61f0-5a30-4e64-8257-2a9ec38bfcf2',
    hostname: 'ondemand.us-west-1.saucelabs.com',
    port: 443,
    protocol: 'https',
    path: '/wd/hub',
    //baseUrl: 'wd/hub',
    specs: [
        './test/specs/**/*.js'
    ],
    maxInstances: 1,
    capabilities: [{
        "platformName": "iOS",
        "appium:app": 'storage:filename=LojaEBAC-sim.zip',
        "appium:deviceName": "iPhone 15 Simulator",
        "appium:platformVersion": "17.0",
        "appium:automationName": "XCUITest",
        "appium:snapshotMaxDepth": 50
    }],
    logLevel: 'info',
    waitforTimeout: 10000,
    connectionRetryTimeout: 300000,
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

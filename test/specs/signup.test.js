import { expect, driver } from '@wdio/globals'
import { faker } from '@faker-js/faker';
import homePage from '../pageobjects/home.page.js'
import loginPage from '../pageobjects/login.page.js'
import signUpPage from '../pageobjects/signup.page.js'

describe('My Sign Up application', () => {
    
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();
    const phoneNumber = faker.phone.number({ style: 'international' });
    const emailAddress = faker.internet.email();
    const password = "TesteEBAC";
    it('should sign up with valid informations', async () => {
        await homePage.openMenu('profile')
        await loginPage.signUp()
        await signUpPage.create(firstName, lastName, phoneNumber, emailAddress, password, password)
        expect((await homePage.searchIcon()).isDisplayed()).toBeTruthy()
        await driver.pause(1000)
    })
})


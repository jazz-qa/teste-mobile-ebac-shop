import { $ } from '@wdio/globals'

class SignUpPage {
    get firstName() {
        return $('id:firstName')
    }
    get lastName() {
        return $('id:lastName')
    }
    get phoneNumber() {
        return $('id:phone')
    }
    get emailAddress() {
        return $('id:email')
    }
    get password() {
        return $('id:password')
    }
    get rePassword() {
        return $('id:repassword')
    }
    get btnCreate() {
        return $('~Create')
    }
    async create(firstName, lastName, phoneNumber, emailAddress, password, rePassword){
        await this.firstName.setValue(firstName)
        await this.lastName.setValue(lastName)
        await this.phoneNumber.setValue(phoneNumber)
        await this.emailAddress.setValue(emailAddress)
        await this.password.setValue(password)
        await this.rePassword.setValue(rePassword)
        await this.btnCreate.click()
    }
}

export default new SignUpPage();

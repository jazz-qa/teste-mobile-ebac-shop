import { $ } from '@wdio/globals'

class LoginPage {
    get email() {
        return $('id:email')
    }
    get password() {
        return $('id:password')
    }
    get btnLogin() {
        return $('~Login')
    }
    get btnSignUp() {
        return $('id:signUp')
    }
    async signUp() {
        await this.btnSignUp.click()
    }
    async login(email, password){
        await this.email.setValue(email)
        await this.password.setValue(password)
        await this.btnLogin.click()
    }
}

export default new LoginPage();

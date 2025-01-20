import { $ } from '@wdio/globals'

class HomePage {

    async searchIcon () {
        return $('id:search-icon')
    }
    
    async openMenu(menu){
        await $(`id:tab-${menu}`).click()
    }
}

export default new HomePage();

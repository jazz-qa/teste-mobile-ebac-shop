import { $ } from "@wdio/globals";

class AddressPage {
  get inputName() {

    return $(`-ios predicate string:value == "Enter your name"`);
  }
  get inputNumber() {

    return $(`-ios predicate string:value == "Enter your mobile number"`);
  }
  get inputAddress() {

    return $(`-ios predicate string:value == "Enter your address"`);
  }
  get inputCity() {

    return $(
      `-ios predicate string:value == "City" AND type == "XCUIElementTypeTextField"`
    );
  }
  get inputState() {

    return $(
      `-ios predicate string:value == "State" AND type == "XCUIElementTypeTextField"`
    );
  }
  get inputZipCode() {
    return $(
      `-ios predicate string:value == "ZipCode" AND type == "XCUIElementTypeTextField"`
    );
  }
  get btnSave() {
    return $(`~save`);
  }

  async addNewAddress() {
    await (await this.inputName).setValue("Teste Endereço");
    await (await this.inputNumber).setValue("55719999999");
    await (await this.inputAddress).setValue("Rua Deputado Fernando Ferrari");
    await (await this.inputCity).setValue("Curitiba");
    await (await this.inputState).setValue("Paraná");
    await (await this.inputZipCode).setValue("82200010\uE007");
  }
}

export default new AddressPage();
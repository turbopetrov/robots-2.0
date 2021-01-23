import $ from 'jquery';
import Wallet from './wallet';
import Shop from './shop';
import Storage from './storage';
import Factory from './factory';
import Robots from './robots';

export default class App {
  constructor() {
    this.wallet = new Wallet(1);
    this.shop = new Shop();
    this.storage = new Storage();
    this.factory = new Factory();
    this.robots = new Robots();
  }

  getCoins() {
    this.wallet.btn.on('click', () => {
      (this.wallet.checkbox.is(':checked'))
        ? this.wallet.addCoins(5) : this.wallet.addCoins(1);
      this.shop.changeBtnStatus(this.wallet.ballance);
      this.activateParts();
      this.changeBuildBtnStatus();
      this.factory.changeMessage(this.factoryMessage());
    });
  }

  buyPart() {
    for (const i in this.shop.catalog) {
      const shopCard = this.shop.catalog[i];
      const { type } = shopCard;
      shopCard.buyBtn.on('click', () => {
        this.wallet.removeCoins(shopCard.cost);
        this.shop.changeBtnStatus(this.wallet.ballance);
        this.storage.catalog[type].addPart();
        this.storage.changeBtnStatus(type);
        this.factory.catalog[type].changePartStatus(this.storage.catalog[type].partValue, 4);
        this.activateParts();
        this.changeBuildBtnStatus();
        this.factory.changeMessage(this.factoryMessage());
      });
    }
  }

  sellPart() {
    for (const k in this.storage.catalog) {
      const storageCard = this.storage.catalog[k];
      const { type } = storageCard;
      storageCard.sellBtn.on('click', () => {
        this.wallet.addCoins(storageCard.cost);
        storageCard.removePart(1);
        this.storage.changeBtnStatus(type);
        this.shop.changeBtnStatus(this.wallet.ballance);
        this.factory.catalog[type].changePartStatus(this.storage.catalog[type].partValue, 4);
        this.activateParts();
        this.changeBuildBtnStatus();
        this.factory.changeMessage(this.factoryMessage());
      });
    }
  }

  selectRoboType() {
    $('.radio__input').on('click', () => {
      const userSelect = this.robots.userSelect();
      this.robots.changeSelectedRobot(this.robots.catalog[userSelect].imgDisable);
      $('.js-checkBox').prop('checked', false);
      this.factory.disableBtn();
    });
  }

  activateParts() {
    for (const i in this.factory.catalog) {
      const barItem = this.factory.catalog[i];
      barItem.checkedPartCounter();
      if (barItem.partCounter >= this.robots.selectedRobot.cost[barItem.type]) {
        barItem.readyStatus = true;
      } else barItem.readyStatus = false;
    }
  }

  changeBuildBtnStatus() {
    const arr = [];
    for (const i in this.factory.catalog) {
      arr.push(this.factory.catalog[i].readyStatus);
    }
    if (arr.every((i) => i === true) && this.wallet.ballance >= 10) {
      this.factory.activateBtn();
      this.robots.changeRoboImage(this.robots.selectedRobot.imgActive);
    } else {
      this.factory.disableBtn();
      this.robots.changeRoboImage(this.robots.selectedRobot.imgDisable);
    }
  }

  factoryMessage() {
    const messageArr = [];
    const basicMessage = 'Для производства биоробота вам не хватает ';
    for (const i in this.factory.catalog) {
      const factoryBar = this.factory.catalog[i];
      if (factoryBar.message(this.robots.selectedRobot.cost[factoryBar.type]) !== null) {
        messageArr.push(factoryBar.message(this.robots.selectedRobot.cost[factoryBar.type]));
      }
    }
    if (this.wallet.message() !== null) {
      messageArr.push(this.wallet.message());
    }

    switch (messageArr.length) {
      case 0:
        return 'Можно произвести биоробота';
      case 1:
        return basicMessage + messageArr[0];
      case 2:
        return `${basicMessage + messageArr[0]} и ${messageArr[1]}`;
      case 3:
        return `${basicMessage + messageArr[0]}, ${messageArr[1]} и ${messageArr[2]}`;
      case 4:
        return `${basicMessage + messageArr[0]}, ${messageArr[1]}, ${messageArr[2]} и ${messageArr[3]}`;
    }
  }

  installPart() {
    $('.js-checkBox').on('click', () => {
      this.activateParts();
      this.changeBuildBtnStatus();
      this.factory.changeMessage(this.factoryMessage());
    });
  }

  buildRobot() {
    this.factory.buildBtn.on('click', () => {
      $('.js-checkBox').prop('checked', false);
      this.factory.disableBtn();
      this.robots.changeRoboImage(this.robots.selectedRobot.imgReady);
      for (const i in this.storage.catalog) {
        const card = this.storage.catalog[i];
        card.removePart(this.factory.catalog[i].partCounter);
        this.storage.changeBtnStatus(card.type);
      }
      this.wallet.removeCoins(10);
      for (const k in this.factory.catalog) {
        const barItem = this.factory.catalog[k];
        barItem.changePartStatus(this.storage.catalog[k].partValue);
      }
      this.shop.changeBtnStatus(this.wallet.ballance);
      this.factory.changeMessage(this.factoryMessage());
      $('.popup_factory').removeClass('hiden');
    });
  }

  closePopup() {
    $('.js-closePopup').on('click', function () { // Почему, есл и пишем функцию вида ()=>{} this определяется как app?
      $(this).parents('.popup').addClass('hiden');
    });
  }
}

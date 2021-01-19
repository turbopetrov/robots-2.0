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
        ? this.wallet.addCoins(50) : this.wallet.addCoins(1);
      this.changeBuildBtnStatus();
    });
  }

  buyPart() {
    for (const i in this.shop.catalog) {
      const shopCard = this.shop.catalog[i];
      const { type } = shopCard;
      shopCard.buyBtn.on('click', () => {
        if (this.wallet.ballance < shopCard.cost) {
          $('.popup_shop').removeClass('hiden');
        } else {
          this.wallet.removeCoins(shopCard.cost);
          this.storage.catalog[type].addPart();
          this.factory.catalog[type].changePartStatus(this.storage.catalog[type].partValue, 4);
          this.changeBuildBtnStatus();
        }
      });
    }
  }

  sellPart() {
    for (const k in this.storage.catalog) {
      const storageCard = this.storage.catalog[k];
      const { type } = storageCard;
      storageCard.sellBtn.on('click', () => {
        if (storageCard.partValue > 0) {
          this.wallet.addCoins(storageCard.cost);
          storageCard.removePart(1);
          this.factory.catalog[type].changePartStatus(this.storage.catalog[type].partValue, 4);
          this.changeBuildBtnStatus();
        } else {
          $('.popup_storage').removeClass('hiden');
        }
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

  changeBuildBtnStatus() {
    for (const i in this.factory.catalog) {
      const barItem = this.factory.catalog[i];
      barItem.checkedPartCounter();
      if (barItem.partCounter >= this.robots.selectedRobot.cost[barItem.type]) {
        barItem.readyStatus = true;
      } else barItem.readyStatus = false;
      // Добавить метод для каждой детали, который в зависмости от тру фолз будет менять мессадж
    }
    const arr = [];
    for (const i in this.factory.catalog) {
      arr.push(this.factory.catalog[i].readyStatus);
    }
    if (arr.every((i) => i == true) && this.wallet.ballance >= 10) {
      this.factory.activateBtn();
      this.robots.changeRoboImage(this.robots.selectedRobot.imgActive);
    } else {
      this.factory.disableBtn();
      this.robots.changeRoboImage(this.robots.selectedRobot.imgDisable);
    }
  }

  installPart() {
    $('.js-checkBox').on('click', () => { this.changeBuildBtnStatus(); });
  }

  buildRobot() {
    this.factory.buildBtn.on('click', () => {
      $('.js-checkBox').prop('checked', false);
      this.factory.disableBtn();
      this.robots.changeRoboImage(this.robots.selectedRobot.imgReady);
      for (const i in this.storage.catalog) {
        const card = this.storage.catalog[i];
        card.removePart(this.factory.catalog[i].partCounter);
      }
      this.wallet.removeCoins(10);
      for (const k in this.factory.catalog) {
        const barItem = this.factory.catalog[k];
        barItem.changePartStatus(this.storage.catalog[k].partValue);
      }
      $('.popup_factory').removeClass('hiden');
    });
  }

  closePopup() {
    $('.js-closePopup').on('click', function () { // Почему, есл и пишем функцию вида ()=>{} this определяется как app?
      $(this).parents('.popup').addClass('hiden');
    });
  }
}

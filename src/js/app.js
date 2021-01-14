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
        ? this.wallet.addCoins(5) : this.wallet.addCoins(99);
    });
  }

  buyPart() {
    for (const i in this.shop.catalog) {
      const shopCard = this.shop.catalog[i];
      const { type } = shopCard;
      shopCard.buyBtn.on('click', () => {
        if (this.wallet.ballance < shopCard.cost) {
          alert('не хватает монет');
        } else {
          this.wallet.removeCoins(shopCard.cost);
          this.storage.catalog[type].addPart();
          this.factory.catalog[type].changePartStatus(this.storage.catalog[type].partValue, 4);
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
        } else {
          alert('недостаточно деталей на складе');
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

  activateBuildBtn() {
    $('.js-checkBox').on('click', () => {
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
      if (arr.every((i) => i == true)) {
        this.factory.activateBtn();
        this.robots.changeRoboImage(this.robots.selectedRobot.imgActive);
      } else {
        this.factory.disableBtn();
        this.robots.changeRoboImage(this.robots.selectedRobot.imgDisable);
      }
    });
  }

  buildRobot() {
    this.factory.buildBtn.on('click', () => {
      $('.js-checkBox').prop('checked', false);
      this.factory.disableBtn();
      this.robots.changeRoboImage(this.robots.selectedRobot.imgReady);
      for (let i in this.storage.catalog){
        const card =this.storage.catalog[i];
        card.removePart(this.factory.catalog[i].partCounter);
      }


    });
  }
}

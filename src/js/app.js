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
          storageCard.removePart();
          this.factory.catalog[type].changePartStatus(this.storage.catalog[type].partValue, 4);
        } else {
          alert('недостаточно деталей на складе');
        }
      });
    }
  }

  changeRoboType() {
    $('.radio__input').on('click', () => {
      const userSelect = this.robots.userSelect();
      this.robots.changeRoboImage(this.robots.catalog[userSelect].imgDisable);
    });
  }
}

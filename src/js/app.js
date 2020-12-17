import Wallet from './wallet';
import ShopCard from './shop';

export default class App {
  constructor() {
    this.wallet = new Wallet(1);
    this.shopCardBiomech = new ShopCard('biomech');
    this.shopCardProcessor = new ShopCard('processor');
    this.shopCardSoul = new ShopCard('soul');
  }

  getCoins() {
    this.wallet.getCoins();
  }

  buyPart() {
    this.shopCardBiomech.buyPart();
    this.shopCardProcessor.buyPart();
    this.shopCardSoul.buyPart();
  }
}

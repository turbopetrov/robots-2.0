import $ from 'jquery';
import { app } from './index';

export default class ShopCard {
  constructor(type) {
    this.dom = $(`.shop-card[data-type =${type}]`);
    this.btn = this.dom.children('.buyBtn');
    this.cost = parseInt(this.dom.children('.buyCost').text().match(/\d+/));
  }

  buyPart() {
    this.btn.on('click', () => {
      (this.cost > app.wallet.ballance)
        ? alert('Не хватает монет') : app.wallet.removeCoins(this.cost);
    });
  }
}

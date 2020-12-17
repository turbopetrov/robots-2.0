import Wallet from './wallet';
import Shop from './shop';
import { app } from '.';
export default class App {
  constructor() {
    this.wallet = new Wallet(1);
    this.shop = new Shop;
  }

  getCoins() {
    this.wallet.btn.on('click', () => {
      (this.wallet.checkbox.is(':checked'))
        ? this.wallet.addCoins(5) : this.wallet.addCoins(1);
    });
  }
  
  buyPart() {
    for (let i in this.shop.catalog){
      let card = this.shop.catalog[i]
      card.buyBtn.on('click',()=>{
        (app.wallet.ballance<card.cost)
          ?alert('не хватает монет'):
          app.wallet.removeCoins(card.cost);
      });
    }
  }
}

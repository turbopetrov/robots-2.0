import Wallet from './wallet';
import Shop from './shop';
import Storage from './storage'
import { app } from '.';
export default class App {
  constructor() {
    this.wallet = new Wallet(1);
    this.shop = new Shop;
    this.storage = new Storage;
  }

  getCoins() {
    this.wallet.btn.on('click', () => {
      (this.wallet.checkbox.is(':checked'))
        ? this.wallet.addCoins(5) : this.wallet.addCoins(1);
    });
  }
  
  buyPart() {
    for (let i in this.shop.catalog){
      let shopCard = this.shop.catalog[i]
      let type = shopCard.type
      shopCard.buyBtn.on('click',()=>{
        if (app.wallet.ballance < shopCard.cost){
          alert('не хватает монет')
        } else{
            app.wallet.removeCoins(shopCard.cost);
            app.storage.catalog[type].addPart();          
        }          
      });
    }    
  }
  sellPart(){
    for(let k in this.storage.catalog){
      let storageCard = this.storage.catalog[k];
      let type = storageCard.type;
      storageCard.sellBtn.on('click', ()=>{
        if(storageCard.partValue > 0){
          app.wallet.addCoins(storageCard.cost);
          storageCard.removePart();
        } else{
          alert('недостаточно деталей на складе');
        }
      })
    }
  }
}

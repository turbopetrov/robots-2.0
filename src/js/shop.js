import ShopCard from './shopCard';

export default class Shop {
  constructor() {
    this.catalog = [
      new ShopCard('biomech', '7'),
      new ShopCard('processor', '5'),
      new ShopCard('soul', '25'),
    ];
  }

  changeBtnStatus(type, ballance) {
    if (this.catalog[type].cost > ballance) {
      this.catalog[type].disableBtn();
    } else {
      this.catalog[type].activateBtn();
    }
  }
}

import ShopCard from './shopCard';

export default class Shop {
  constructor() {
    this.catalog = [
      new ShopCard('biomech', '7'),
      new ShopCard('processor', '5'),
      new ShopCard('soul', '25'),
    ];
  }

  changeBtnStatus(ballance) {
    for (const y in this.catalog) {
      if (this.catalog[y].cost > ballance) {
        this.catalog[y].disableBtn();
      } else {
        this.catalog[y].activateBtn();
      }
    }
  }
}

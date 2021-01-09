import ShopCard from './shopCard';

export default class Shop {
  constructor() {
    this.catalog = [
      new ShopCard('biomech', '7'),
      new ShopCard('processor', '5'),
      new ShopCard('soul', '25'),
    ];
  }
}

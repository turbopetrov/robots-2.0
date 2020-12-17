import $ from 'jquery';
import ShopCard from './shopCard';


export default class Shop {
  constructor() {
    this.catalog = [
      new ShopCard('biomech','7'),
      new ShopCard('processor', '5'),
      new ShopCard('soul', '25'),
    ]        
  } 
  
}
// this.biomech = new ShopCard('biomech','5');
    // this.processor = new ShopCard('processor', '7');
    // this.soul = new ShopCard('soul', '25');
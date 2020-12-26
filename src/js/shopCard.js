import $ from 'jquery';
export default class ShopCard {
    constructor(type, cost) {
        this.type = type;
        this.cost = parseInt(cost);
        this.dom = $(`.shop-card[data-type =${type}]`);
        this.buyBtn = this.dom.children('.buyBtn');
    }    
}
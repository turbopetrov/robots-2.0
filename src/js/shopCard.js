import $ from 'jquery';

export default class ShopCard {
  constructor(type, cost) {
    this.type = type;
    this.cost = parseInt(cost);
    this.dom = $(`.shop-card[data-type =${type}]`);
    this.buyBtn = this.dom.children('.buyBtn');
  }

  activateBtn() {
    this.buydBtn.removeClass('btn_type1_disable');
    this.buyBtn.addClass('btn_type1_normal');
    this.buyBtn.attr('disabled', false);
  }

  disableBtn() {
    this.buyBtn.removeClass('btn_type1_normal');
    this.buyBtn.addClass('btn_type1_disable');
    this.buyBtn.attr('disabled', true);
  }
}

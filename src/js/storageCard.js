import $ from 'jquery';

export default class StorageCard {
  constructor(type, cost) {
    this.type = type;
    this.partValue = 0;
    this.cost = cost;
    this.dom = $(`.storage-card[data-type =${type}]`);
    this.sellBtn = this.dom.children('.sellBtn');
  }

  addPart() {
    this.partValue += 1;
    this.dom.find('.partValue').text(this.partValue);
  }

  removePart(quantity) {
    this.partValue -= quantity;
    this.dom.find('.partValue').text(this.partValue);
  }

  activateBtn() {
    this.selldBtn.removeClass('btn_type1_disable');
    this.sellBtn.addClass('btn_type1_normal');
    this.sellBtn.attr('disabled', false);
  }

  disableBtn() {
    this.sellBtn.removeClass('btn_type1_normal');
    this.sellBtn.addClass('btn_type1_disable');
    this.sellBtn.attr('disabled', true);
  }
}

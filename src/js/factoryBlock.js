import $ from 'jquery';

export default class FactoryBar {
  constructor(type) {
    this.type = type;
    this.dom = $(`.js-factory-bar[data-type =${type}]`).find('.js-checkBox');
  }

  changePartStatus(partQ, maxPartQ) {
    this.dom.removeClass('_active');
    this.dom.addClass('_disable');
    for (let i = 0; i < partQ; i++) {
      if (i > (maxPartQ - 1)) { break; }
      $(this.dom[i]).removeClass('_disable');
      $(this.dom[i]).addClass('_active');
    }
  }
}

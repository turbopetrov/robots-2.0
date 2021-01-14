import $ from 'jquery';

export default class FactoryBar {
  constructor(type, message) {
    this.type = type;
    this.domFake = $(`.js-factory-bar[data-type =${type}]`).find('.js-fakeCheckBox');
    this.domCheck = $(`.js-factory-bar[data-type =${type}]`).find('.js-checkBox');
    this.partCounter = 0;
    this.message = 0;
    this.readyStatus = false;
  }

  changePartStatus(partQ, maxPartQ) {
    this.domFake.removeClass('_active');
    this.domFake.addClass('_disable');
    this.domCheck.attr('disabled', true);

    for (let i = 0; i < partQ; i++) {
      if (i > (maxPartQ - 1)) { break; }
      $(this.domFake[i]).removeClass('_disable');
      $(this.domFake[i]).addClass('_active');
      $(this.domCheck[i]).attr('disabled', false);
    }
  }

  checkedPartCounter() {
    this.partCounter = $(`.js-factory-bar[data-type =${this.type}]`).find('.js-checkBox:checked').length;
  }
}

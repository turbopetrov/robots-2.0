import $ from 'jquery';

export default class FactoryBar {
  constructor(type, rus) {
    this.type = type;
    this.typeRus = rus;
    this.domFake = $(`.js-factory-bar[data-type =${type}]`).find('.js-fakeCheckBox');
    this.domCheck = $(`.js-factory-bar[data-type =${type}]`).find('.js-checkBox');
    this.partCounter = 0;
    this.readyStatus = false;
  }

  changePartStatus(partQ, maxPartQ) {
    this.domFake.removeClass('_active');
    this.domFake.addClass('_disable');
    this.domCheck.attr('disabled', true);
    this.domCheck.prop('checked', false);

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

  message(partCost) {
    const partNeed = (partCost - this.partCounter);
    if (this.type === 'soul') {
      switch (partNeed) {
        case 0:
          return null;
        case 1:
          return 'души';
        default:
          return 'душ';
      }
    } else {
      switch (partNeed) {
        case 0:
          return null;
        case 1:
          return `${this.typeRus}а`;
        default:
          return `${this.typeRus}ов`;
      }
    }
  }
}

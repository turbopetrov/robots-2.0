import $ from 'jquery';

export default class FactoryBar {
  constructor(type) {
    this.type = type;
    this.domFake = $(`.js-factory-bar[data-type =${type}]`).find('.js-fakeCheckBox');
    this.domCheck = $(`.js-factory-bar[data-type =${type}]`).find('.js-checkBox');         
  }

  changePartStatus(partQ, maxPartQ) {
    this.domFake.removeClass('_active');
    this.domFake.addClass('_disable')
    this.domCheck.attr('disabled', true);    
    
    for (let i = 0; i < partQ; i++) {
      if (i > (maxPartQ - 1)) { break; }
      $(this.domFake[i]).removeClass('_disable');
      $(this.domFake[i]).addClass('_active');
      $(this.domCheck[i]).attr('disabled', false);
    }
  }

}

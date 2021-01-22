import $ from 'jquery';
import regexp3 from './vars';

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
    let partNeed = (partCost - this.partCounter);
    switch (partNeed){
      case 0: 
        return null; 
        break;        
      case 1: 
        return this.typeRus + 'а'; 
        break;
      default: 
        return this.typeRus + 'ов'; 
        break;        
    }
  }
}

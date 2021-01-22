import $ from 'jquery';
import FactoryBar from './factoryBlock';

export default class Factory {
  constructor() {
    this.catalog = {
      biomech: new FactoryBar('biomech', 'биомеханизм'),
      processor: new FactoryBar('processor', 'процессор'),
      soul: new FactoryBar('soul', 'души'),
    };
    this.buildBtn = $('.js-buildBtn');
  }

  activateBtn() {
    this.buildBtn.removeClass('btn_type3_disable');
    this.buildBtn.addClass('btn_type3_normal');
    this.buildBtn.attr('disabled', false);
  }

  disableBtn() {
    this.buildBtn.removeClass('btn_type3_normal');
    this.buildBtn.addClass('btn_type3_disable');
    this.buildBtn.attr('disabled', true);
  }
  
  changeMessage(message) {
    $('.js-factoryMessage').text(message);
  }
}

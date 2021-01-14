import $ from 'jquery';
import FactoryBar from './factoryBlock';

export default class Factory {
  constructor() {
    this.catalog = {
      biomech: new FactoryBar('biomech'),
      processor: new FactoryBar('processor'),
      soul: new FactoryBar('soul'),
    };
    this.buildBtn = $('.js-buildBtn');
  }

  activateBtn() {
    this.buildBtn.removeClass('btn_type3_disable');
    this.buildBtn.addClass('btn_type3_normal');
  }

  disableBtn() {
    this.buildBtn.removeClass('btn_type3_normal');
    this.buildBtn.addClass('btn_type3_disable');
  }
}

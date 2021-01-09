import FactoryBar from './factoryBlock';

export default class Factory {
  constructor() {
    this.catalog = {
      biomech: new FactoryBar('biomech'),
      processor: new FactoryBar('processor'),
      soul: new FactoryBar('soul'),
    };
  }
}

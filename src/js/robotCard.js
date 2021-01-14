import $ from 'jquery';

export default class RobotCard {
  constructor(roboType, biomechCost, processorCost, soulCost) {
    this.imgDisable = $(`.factory-section__robot-img[data-RoboType =${roboType}-disable]`);
    this.imgActive = $(`.factory-section__robot-img[data-RoboType =${roboType}-active]`);
    this.imgReady = $(`.factory-section__robot-img[data-RoboType =${roboType}-ready]`);
    this.cost = {
      biomech: biomechCost,
      processor: processorCost,
      soul: soulCost,
    };
  }
}

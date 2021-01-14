import $ from 'jquery';
import RobotCard from './robotCard';

export default class Robots {
  constructor() {
    this.catalog = {
      DesignMale: new RobotCard('dm', 4, 4, 1),
      DesignFemale: new RobotCard('df', 4, 4, 1),
      FrontMale: new RobotCard('fm', 4, 4, 1),
      FrontFemale: new RobotCard('ff', 4, 4, 1),
    };
    this.selectedRobot = this.catalog[$('input[name="type"]:checked').val() + $('input[name="gender"]:checked').val()];
  }

  userSelect() {
    return $('input[name="type"]:checked').val()
            + $('input[name="gender"]:checked').val();
  }

  changeRoboImage(targetImg) {
    const imgCatalog = $('.factory-section__robot-img');
    imgCatalog.each((i) => { $(imgCatalog[i]).addClass('hiden'); });
    targetImg.removeClass('hiden');
  }

  changeSelectedRobot(targetImg) {
    this.selectedRobot = this.catalog[this.userSelect()];
    this.changeRoboImage(targetImg);
  }
}

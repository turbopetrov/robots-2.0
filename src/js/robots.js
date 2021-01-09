import $ from 'jquery';
import RobotCard from './robotCard';

export default class Robots {
  constructor() {
    this.catalog = {
      DesignMale: new RobotCard('dm'),
      DesignFemale: new RobotCard('df'),
      FrontMale: new RobotCard('fm'),
      FrontFemale: new RobotCard('ff'),
    };
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
}

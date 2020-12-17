import $ from 'jquery';
import { regexp1, regexp2 } from './vars';

export default class Wallet {
  constructor(ballance) {
    this.coin = $('.jsCoin');
    this.coinsBlock = $('.coins-block__coins');
    this.btn = $('#getCoinsBtn');
    this.checkbox = $('#coinsCheckbox');
    this.ballance = ballance;
  }

  checkMessage() {
    if (regexp1.test(this.ballance)) {
      return ' biorobo монет';
    } if (regexp2.test(this.ballance)) {
      return ' biorobo монеты';
    } return ' biorobo монета';
  }

  changeMessage() {
    $('#coinsQuantity').text(this.ballance + this.checkMessage());
  }

  addCoins(quantity) {
    if ((this.ballance + quantity) > 100) {
      alert('Столько в кошелек не влзет');
    } else {
      for (let i = 0; i < quantity; i++) {
        this.coin.clone(true).appendTo(this.coinsBlock);
      }
      this.ballance += quantity;
      this.changeMessage();
    }
  }

  removeCoins(quantity) {
    for (let i = 0; i < quantity; i++) {
      this.coin.clone(true).appendTo(this.coinsBlock);
    }
    this.ballance -= quantity;
    this.changeMessage();
  }

  getCoins() {
    this.btn.on('click', () => {
      (this.checkbox.is(':checked'))
        ? this.addCoins(5) : this.addCoins(1);
    });
  }
}

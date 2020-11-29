import $ from 'jquery';
import {regexp1, regexp2, coins} from '../vars';
 function walletMessage(){
    if(regexp1.test(coins.quantity)){
        return ' biorobo монет'
    }
    else if(regexp2.test(coins.quantity)){
        return ' biorobo монеты'
    }
    else return ' biorobo монета'
}
export function changeWalletMessage(){
    $('#coinsQuantity').text(coins.quantity+walletMessage());
}

import {$coin, $wallet, coins} from '../vars';
import {changeWalletMessage} from './walletMessage';
export function addCoins(quantity){
    if((coins.quantity+quantity)>100){
        alert('Столько в кошелек не влезет')
    }
    else{
      for(let i=0; i<quantity; i++){
    $coin.clone(true).appendTo($wallet);
    }
    coins.quantity+=quantity;
    changeWalletMessage();  
    }
    
}

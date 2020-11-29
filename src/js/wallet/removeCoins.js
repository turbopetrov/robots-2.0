import {$wallet, coins} from '../vars';
import {changeWalletMessage} from './walletMessage';
export function removeCoins(quantity){
    for(let i=0; i<quantity; i++){
    $wallet.children('img:last').remove();
    }
    coins.quantity-=quantity;
    changeWalletMessage();
};
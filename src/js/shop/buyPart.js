import {addPart} from '../storage/addPart';
import {removeCoins} from '../wallet/removeCoins';
export function buyPart(buyCost, partName){
    removeCoins(buyCost);
    addPart(partName);    
}
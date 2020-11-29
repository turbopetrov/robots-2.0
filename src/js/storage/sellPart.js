import {addCoins} from '../wallet/addCoins'
export function sellPart(storageCard, quantity){
    let sellValue = storageCard.find('.sellValue').text();
    if(sellValue>0){
        storageCard.find('.sellValue').text(sellValue-1);  
        addCoins(quantity);
    }
    else alert('Нет на складе');
}
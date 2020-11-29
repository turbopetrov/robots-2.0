import { addCoins } from './addCoins';
import {$getCoinsBtn, $coinsCheckbox} from '../vars';

export default $getCoinsBtn.on('click', ()=>{
    ($coinsCheckbox.is(':checked'))? 
    addCoins(5):addCoins(1);
})

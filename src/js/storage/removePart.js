import $ from 'jquery';
import {sellPart} from './sellPart';
import {$sellBtn} from '../vars';
export default $sellBtn.on('click', function(){
    const $storageCard = $(this).parent();
    const sellCost = parseInt($storageCard.children('.sellCost').text().match(/\d+/));
    sellPart($storageCard, sellCost);    
})
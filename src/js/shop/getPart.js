import $ from 'jquery';
import{buyPart} from './buyPart';
import {$buyBtn, coins} from '../vars';
export default $buyBtn.on('click', function(){
    const $shopCard = $(this).parent();
    let partName = $(this).parent().children('.partName').text();
    const buyCost = parseInt($shopCard.children('.buyCost').text().match(/\d+/));
    (buyCost>coins.quantity)?
    alert('Не хватает монет'):buyPart(buyCost, partName);          
});
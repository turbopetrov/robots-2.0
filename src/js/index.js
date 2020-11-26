import $ from 'jquery';

const $getCoinsBtn = $('#getCoinsBtn');
const $coinsCheckbox = $('#coinsCheckbox');
const $coin = $('.jsCoin');
const $coinsQuantity = ('#coinsQuantity');

function getFiveCoins(){    
    for (let i=0; i<5; i++){
        $coin.clone(true).appendTo('.coins-block__coins');        
    }    
}
function getOneCoins(){
    $coin.clone(true).appendTo('.coins-block__coins')
}


//----------------------------scripts------------------------------//

$getCoinsBtn.on('click', ()=>{
    ($coinsCheckbox.is(':checked'))? 
    getFiveCoins():getOneCoins();     
})

import $ from 'jquery';

const $getCoinsBtn = $('#getCoinsBtn');
const $coinsCheckbox = $('#coinsCheckbox');
const $coin = $('.jsCoin');
let coinsQuantity = 1;
let regexp1 =/(11|12|13|14|0|5|6|7|8|9)$/;
let regexp2 =/(2|3|4)$/;
let regexp3 =/1$/;

function walletMessage(){
    if(regexp1.test(coinsQuantity)){
        return ' biorobo монет'
    }
    else if(regexp2.test(coinsQuantity)){
        return ' biorobo монеты'
    }
    else return ' biorobo монета'
}
function getFiveCoins(){  
    if((coinsQuantity+5)>100){
        alert('Больше в кошелек не влезет');
    }
    else{  
        for (let i=0; i<5; i++){
            $coin.clone(true).appendTo('.coins-block__coins');        
        } 
    coinsQuantity+=5;
    }  
}
function getOneCoins(){
    if((coinsQuantity+1)>100){
        alert('Больше в кошелек не влезет')
    }
    else{
        $coin.clone(true).appendTo('.coins-block__coins')
        coinsQuantity++;
    }    
}


//----------------------------scripts------------------------------//

$getCoinsBtn.on('click', ()=>{
    ($coinsCheckbox.is(':checked'))? 
    getFiveCoins():getOneCoins();
    $('#coinsQuantity').text(coinsQuantity+walletMessage());     
})

import $ from 'jquery';
//btns
const $getCoinsBtn = $('#getCoinsBtn');


//elements
const $wallet = $('.coins-block__coins');
let $coin = $('.jsCoin');
const $coinsCheckbox = $('#coinsCheckbox');
let coinsQuantity = 1;
let regexp1 =/(11|12|13|14|0|5|6|7|8|9)$/;
let regexp2 =/(2|3|4)$/;


//------------------wallet------------------//
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
    ((coinsQuantity+5)>100)?
        alert('Столько в кошелек не влезет'):           
        addCoins(5);    
}
function getOneCoins(){
    ((coinsQuantity+1)>100)?
        alert('Столько в кошелек не влезет'):    
        addCoins(1);
}
function changeWalletMessage(){
    $('#coinsQuantity').text(coinsQuantity+walletMessage());
}
function addCoins(quantity){
    for(let i=0; i<quantity; i++){
    $coin.clone(true).appendTo($wallet);
    }
    coinsQuantity+=quantity;
}
function removeCoins(quantity){
    for(let i=0; i<quantity; i++){
    $wallet.children('img:last').remove();
    }
    coinsQuantity-=quantity;
}

$getCoinsBtn.on('click', ()=>{
    ($coinsCheckbox.is(':checked'))? 
    getFiveCoins():getOneCoins();
    changeWalletMessage()
    console.log(coinsQuantity);     
})

//-----------------shop-section------------//
const $buyBtn = $('.buyBtn');
$buyBtn.on('click', function(){
    const shopCard = $(this).parent();
    const buyCost = parseInt(shopCard.children('.buyCost').text().match(/\d+/));
    if(buyCost>coinsQuantity){
        alert('Не хватает монет');        
    }
    else{      
        removeCoins(buyCost);
        changeWalletMessage();
    }
    console.log(coinsQuantity);
})


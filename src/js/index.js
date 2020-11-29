import $, { contains } from 'jquery';
// btns
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
    changeWalletMessage()
};
function removeCoins(quantity){
    for(let i=0; i<quantity; i++){
    $wallet.children('img:last').remove();
    }
    coinsQuantity-=quantity;
    changeWalletMessage();
};

$getCoinsBtn.on('click', ()=>{
    ($coinsCheckbox.is(':checked'))? 
    getFiveCoins():getOneCoins();          
});
function addPart(partName){    
   $('.storage-card').each(function(){
       let sellValue = parseInt($(this).find('.sellValue').text())
    if($(this).children('.partName').text() == partName){
        $(this).find('.sellValue').text(sellValue+1);
        }
    }); 
}
function buyPart(buyCost, partName){
    removeCoins(buyCost);
    addPart(partName);    
}

function sellPart(storageCard, quantity){
    let sellValue = storageCard.find('.sellValue').text();
    if(sellValue>0){
        storageCard.find('.sellValue').text(sellValue-1);  
        addCoins(quantity);
    }
    else alert('Нет на складе');
}

//-----------------shop-section------------//

const $buyBtn = $('.buyBtn');
$buyBtn.on('click', function(){
    const $shopCard = $(this).parent();
    let partName = $(this).parent().children('.partName').text();
    const buyCost = parseInt($shopCard.children('.buyCost').text().match(/\d+/));
    (buyCost>coinsQuantity)?
    alert('Не хватает монет'):buyPart(buyCost, partName);
          
});

// -------------storage-section ------------//
const $sellBtn = $('.sellBtn');
$sellBtn.on('click', function(){
    const $storageCard = $(this).parent();
    const sellCost = parseInt($storageCard.children('.sellCost').text().match(/\d+/));
    sellPart($storageCard, sellCost);
    
    
})

 


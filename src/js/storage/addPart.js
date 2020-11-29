import $ from 'jquery';
export function addPart(partName){    
    $('.storage-card').each(function(){
        let sellValue = parseInt($(this).find('.sellValue').text())
     if($(this).children('.partName').text() == partName){
         $(this).find('.sellValue').text(sellValue+1);
         }
     }); 
 }

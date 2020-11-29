import $, { contains } from 'jquery';
//elements
export const $getCoinsBtn = $('#getCoinsBtn');
export const $buyBtn = $('.buyBtn'); 
export const $sellBtn = $('.sellBtn');
export const $wallet = $('.coins-block__coins');
export const $coin = $('.jsCoin');
export const $coinsCheckbox = $('#coinsCheckbox');

//vars
export let coins = {quantity:1}

//utils
export let regexp1 =/(11|12|13|14|0|5|6|7|8|9)$/;
export let regexp2 =/(2|3|4)$/;

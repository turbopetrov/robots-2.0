import $ from 'jquery';
export default class StorageCard {
    constructor(type) {
        this.type = type;
        this.partValue = 0;
        this.dom = $(`.storage-card[data-type =${type}]`);
        this.buyBtn = this.dom.children('.sellBtn');
    }
    addPart() {
        this.partValue+=1;
        this.dom.find('.partValue').text(this.partValue);
    }
    removePart() {
        this.partValue-=1;
        this.dom.find('.partValue').text(this.partValue); 
    }
}
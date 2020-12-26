import StorageCard from './storageCard';
export default class Storage {
    constructor() {
      this.catalog = {
       'biomech': new StorageCard('biomech', 5),
       'processor': new StorageCard('processor', 3),
       'soul': new StorageCard('soul', 15),
      }        
    } 
    
  }
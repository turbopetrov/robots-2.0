import StorageCard from './storageCard';
export default class Storage {
    constructor() {
      this.catalog = {
       'biomech': new StorageCard('biomech'),
       'processor': new StorageCard('processor'),
       'soul': new StorageCard('soul'),
      }        
    } 
    
  }
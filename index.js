class SortedList {

  constructor() {

    this.items = [];
    this.length = this.items.length;

  }

  add(item) {

    this.items.push(item);
    this.items.sort( (a,b) =>{
      return a-b;
    });

    this.length = this.items.length;

  }

  get(pos) {

    if(pos > this.length){

      throw new Error('OutOfBounds');

    }
    else{

      return this.items[pos];

    }

  }

  max() {
    
    let maxVal = 0;

    if(this.length === 0){
      
      throw new Error('EmptySortedList');

    }
    else{

      this.items.forEach( (item) => {

        if(item>maxVal){

          maxVal = item;

        }

      });

      return maxVal;

    }
  
  }

  min() {

    if(this.length === 0){
      
      throw new Error('EmptySortedList');

    }
    else{

      let minVal = this.items[0];

      this.items.forEach( (item) => {

        if(item<minVal){

          minVal = item;

        }

      });

      return minVal;

    }

  }

  sum() {

    let sum = 0;

    this.items.forEach( (item) => {

      this.sum+=item;

    });

    return sum;

  }

  avg() {



  }
}

module.exports = SortedList;

import React, {FC} from 'react';

class GenericArray<T> {
  constructor() {
    this.value = [];
    this.add = function(item: T) {
      this.value.push(item);
    }
  };

  value: Array<T>;
  add: (item: T) => void;
}

let NumberArray = new GenericArray<number>();
NumberArray.value = [];
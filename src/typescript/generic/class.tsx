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



class BusDriver {
  category: string;
  constructor() {
    this.category = ''
  }
}

class ShipDriver {
  shipLength: number;
  constructor() {
    this.shipLength = 1;
  }
}

class Transport {
  maxSpeed: number;
  constructor() {
    this.maxSpeed = 1;
  }
}

class Bus extends Transport {
  driver: BusDriver;
  constructor() {
    super();
    this.driver = new BusDriver();
  }
}

class Ship extends Transport {
  driver: ShipDriver;
  constructor() {
    super();
    this.driver = new ShipDriver();
  }
}

function createInstance<T extends Transport>(c: new() => T) {
  return new c();
}
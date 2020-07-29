import React from 'react';

export namespace Inside {
  export class StrangeClass {
    value: string = '';
    setValue(val: string) : void {
      this.value = val;
    }
  }
}

import NewClass = Inside.StrangeClass;

export class StrangeClass {
  value: number = 0;
  setValue(value: number) : number {
    this.value = value;
    return value;
  }
}
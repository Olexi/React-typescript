import React from 'react'

class Activatable {
  isActive: boolean;
  activate() {
      this.isActive = true;
  }
  deactivate() {
      this.isActive = false;
  }
  constructor(isActive = false) {
    this.isActive = isActive;
  }
}

class NewSuperString {
  string: string;
  setString(value: string): void {
    this.string = value;
  }
  constructor(string = '') {
    this.string = string;
  }
}

class ActivatableSuperString {
  constructor() {
      setInterval(() => console.log(this.isActive + " : " + this.string), 500);
  }

  interact() {
      this.activate();
  }
}

interface ActivatableSuperString extends Activatable, NewSuperString {}

function applyMixins(derivedCtor: any, baseCtors: any[]) {
  baseCtors.forEach(baseCtor => {
      Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
            Object.defineProperty(derivedCtor.prototype, name, Object.getOwnPropertyDescriptor(baseCtor.prototype, name) || '');
      });
  });
}

applyMixins(ActivatableSuperString, [Activatable, NewSuperString]);
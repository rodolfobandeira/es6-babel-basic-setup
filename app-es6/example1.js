class Example1 {
  constructor() {
    this.parameter = '123';
  }

  _myPrivateMethod() {
    ['a', 'b', 'c', 'd'].some(letra => letra == 'b')
  }

  static myStaticMethod() {
    console.log("staticMethod");
  }
}

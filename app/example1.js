'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Example1 = function () {
  function Example1() {
    _classCallCheck(this, Example1);

    this.parameter = '123';
  }

  _createClass(Example1, [{
    key: '_myPrivateMethod',
    value: function _myPrivateMethod() {
      ['a', 'b', 'c', 'd'].some(function (letra) {
        return letra == 'b';
      });
    }
  }], [{
    key: 'myStaticMethod',
    value: function myStaticMethod() {
      console.log("staticMethod");
    }
  }]);

  return Example1;
}();
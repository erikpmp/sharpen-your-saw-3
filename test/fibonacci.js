const assert = require("chai").assert;
const fib = require("../lib/fibonacci");
const _ = require('lodash');

//1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377

var testData = [
  { entry: 1, fibValue: [1] },
  { entry: 2, fibValue: [1,2] },
  { entry: 3, fibValue: [1,2,3] },
  { entry: 4, fibValue: [1,2,3,5] },
  { entry: 5, fibValue: [1,2,3,5,8] },
  { entry: 6, fibValue: [1,2,3,5,8,13] },
  { entry: 7, fibValue: [1,2,3,5,8,13,21] },
  { entry: 8, fibValue: [1,2,3,5,8,13,21,34] }
];

describe("The fibonacci function", function () {
  _.forEach(testData, function(x) {
    it(x.entry + " fibonacci works", function () {
      assert.equal(fib(x.entry).join(','), x.fibValue.join(','));
    });
  });
});

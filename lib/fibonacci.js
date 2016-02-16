"use strict";

var _ = require('lodash');

function fibanacci (length) {
  let twoBack = 0;
  let oneBack = 0;
  let current = 1;

  var results = _.times(length, (n) => {
    twoBack = oneBack;
    oneBack = current;
    current = current + twoBack;
    return current;
  });

  return results;
}

module.exports = fibanacci;

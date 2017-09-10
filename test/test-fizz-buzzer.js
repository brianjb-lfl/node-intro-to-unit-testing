'use strict';

const should = require('chai').should();
const fizzBuzzer = require('../fizzBuzzer');

describe('fizzBuzzer', function() {

  it('should apply fizz-buzz rules to input numbers', function() {
    const normalCases = [
      {n: 3, expected: 'fizz'},
      {n: 5, expected: 'buzz'},
      {n: 15, expected: 'fizz-buzz'},
      {n: 30, expected: 'fizz-buzz'},
      {n: 7, expected: 7},
      {n: 22, expected: 22}
    ];
    normalCases.forEach(function(input) {
      const answer = fizzBuzzer(input.n);
      answer.should.equal(input.expected);
    });
  });
  
  it('should throw error on non-numerical input', function() {
    const badCases = [
      false, 'brian', '3'
    ];
    badCases.forEach(function(input) {
      (function() {
        fizzBuzzer(input);
      }).should.throw(Error);
    });
  });
});
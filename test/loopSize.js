const assert = require('assert');
const chai = require('chai');
const expect = chai.expect;
import loop_size from '../src/loopSize';

// These are some CW specific test methods available:
//    Test.expect(boolean, [optional] message)
//    Test.assertEquals(actual, expected, [optional] message)
//    Test.assertSimilar(actual, expected, [optional] message)
//    Test.assertNotEquals(actual, expected, [optional] message)

// NodeJS assert is also automatically required for you.
//    assert(true)
//    assert.strictEqual({a: 1}, {a: 1})
//    assert.deepEqual({a: [{b: 1}]}, {a: [{b: 1}]})

// You can also use Chai (http://chaijs.com/) by requiring it yourself
// var expect = require("chai").expect;
// var assert = require("chai").assert;
// require("chai").should();

describe("Solution", function(){
  it("should test for something", function(){
    let node4 = {
      getNext: function(){return node2}
    };

    let node3 = {
      getNext: function(){return node4}
    };

    let node2 = {
      getNext: function(){return node3}
    };

    let node1 = {
      getNext: function(){return node2}
    };

    let node = {
      getNext: function(){return node1}
    };
    assert.equal(loop_size(node), 3);
    assert.equal(loop_size(node), 3);
  });
});
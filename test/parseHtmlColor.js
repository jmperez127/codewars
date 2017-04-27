import parseHTMLColor from '../src/parseHtmlColor'
const assert = require('assert');
const chai = require('chai');
const expect = chai.expect;

assert.deepEqual(parseHTMLColor('#80FFA0'), {r: 128, g: 255, b: 160});
assert.deepEqual(parseHTMLColor('#3B7'), {r: 51, g: 187, b: 119});
assert.deepEqual(parseHTMLColor('LimeGreen'), {r: 50, g: 205, b: 50});

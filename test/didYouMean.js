// Kata URL https://www.codewars.com/kata/5259510fc76e59579e0009d4/train/javascript
import Dictionary from '../src/didYouMean';
const expect = require('chai').expect;
const assert = require('assert');

function TestDictionary(spec) {
  var matcher = new Dictionary(spec.words);
  spec.expectations.forEach(function (e) {
    assert.deepEqual(
      matcher.findMostSimilar(e.query), e.nearest, 'expected findMostSimilar("' + e.query + '") == "' + e.nearest + '"'
    );
  });
}

TestDictionary({
  words: ['cherry', 'pineapple', 'melon', 'strawberry', 'raspberry'],
  expectations: [
    { query:   'strawbery',
      nearest: 'strawberry'
    },
    { query:   'berry',
      nearest: 'cherry'
    }
  ],
});


TestDictionary({
  words: [ 'ppctybxgtleipb',
    'jcocndjkyb',
    'xuwahveztwoor',
    'tdvibqccxr',
    'hrwuhmtxxvmygb',
    'xrgdgqfrldwk',
    'npyrgrpbdfqhhncdi',
    'ggcvrtxrtnafw',
    'vkholxrvjwisrk',
    'znystgvifufptxr',
    'ucxmdeudiycokfnb',
    'kqijoorfkejdcxr',
    'zqdrhpviqslik',
    'xikoctmrhpvi',
    'pxyousorusjxxbt',
    'tklquxrnhfiggb',
    'emvquxrvvlvwvsi',
    'ljxzjjorwgb',
    'xffrkbdyjveb',
    'hwzsemiqxjwfk',
    'clxmqmiycvidiyr',
    'jhjyasikwyufr',
    'pdyjrkaylryr',
    'afirbipbmkamjzw',
    'sefsknopiffajor',
    'hirldidcuzbyb',
    'psaysnhfrrqgxwik',
    'osbednerciaai',
    'iroezmixmberfr',
    'hkldhadcxrjbmkmcdi',
    'iqkyztorburjgiudi',
    'dihhiczkdwiofpr',
    'ntwmwwmicnjvhtt',
    'ajacizfrgxfumzpvi',
    'cfvditwcxr',
    'qojfrlhufr',
    'nnsoamjkrzgldi',
    'dyhxgviphoptak',
    'fgtrjakzlnaebxr',
    'fxpvfhfrujjaifr',
    'riyhpvimgaliuxr',
    'fxjskybblljqr',
    'cwhyyzaorpvtnlfr',
    'karpscdigdvucfr',
    'cpnqknjyviusknmte',
    'loogviwcojxgvi',
    'qifwqgdsijibor',
    'lnjhrzfrosinb',
    'mhmkakybpczjbb',
    'eglanhfredaykxr' ] ,
  expectations: [
    { query:   'rkacypviuburk',
      nearest: 'zqdrhpviqslik'
    }
  ],
});

// TestDictionary({
//   words: Test.randomize(['javascript', 'java', 'ruby', 'php', 'python', 'coffeescript']),
//   expectations: [
//     { query:   'heaven',
//       nearest: 'java'
//     },
//     { query:   'javascript',
//       nearest: 'javascript'
//     }
//   ],
// });
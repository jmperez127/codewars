class Dictionary {
  constructor(words) {
    this.words = words;
  }

  _calculate(str, term) {
    if (str === term) return 0;
    if (str.length === 0) return term.Length;
    if (term.length === 0) return str.Length;

    let vector1 = [];
    let vector2 = [];

    for (let i = 0; i < term.length+1; i++){
      vector1.push(i);
      vector2.push(0);
    }

    for (let i = 0; i < str.length; i++)
    {
      vector2[0] = i + 1;

      for (let j = 0; j < term.length; j++)
      {
        let cost = (str[i] === term[j]) ? 0 : 1;
        vector2[j + 1] = Math.min(vector2[j] + 1, vector1[j + 1] + 1, vector1[j] + cost);
      }

      for (let j = 0; j < vector1.length; j++)
        vector1[j] = vector2[j];
    }
    return vector2[term.length];
  }

  findMostSimilar(term) {
    let preVal = 100, val = 100, ret = term;

    for (let i = 0; i < this.words.length; i++) {
      val = this._calculate(term, this.words[i]);
      if (val < preVal) {
        ret = this.words[i];
        preVal = val;
      }
    }
    return ret;
  }
}

export default Dictionary;
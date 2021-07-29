const transpose = function (matrix) {
  const result = [];
  for (const i in matrix[0]) {
    const resultEl = [];
    for (const element of matrix) {
      resultEl.push(element[i]);
    }
    result.push(resultEl);
  }
  return result;
};

const wordSearch = (letters, word) => {
  const horizontalJoin = letters.map((ls) => ls.join(""));
  for (l of horizontalJoin) {
    if (l.includes(word)) {
      return true;
    }
  }
  const verticaljoin = transpose(letters).map((ls) => ls.join(""));
  for (c of verticaljoin) {
    if (c.includes(word)) {
      return true;
    }
  }
  return false;
};

module.exports = wordSearch;

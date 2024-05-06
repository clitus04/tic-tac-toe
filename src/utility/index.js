export const checkFilled = (array) => {
  for (let row of array) {
    for (let col of row) {
      if (col === "") {
        return false;
      }
    }
  }

  return true;
};

const rules = [
  [
    [0, 0],
    [0, 1],
    [0, 2],
  ],
  [
    [1, 0],
    [1, 1],
    [1, 2],
  ],
  [
    [2, 0],
    [2, 1],
    [2, 2],
  ],
  [
    [0, 0],
    [1, 0],
    [2, 0],
  ],
  [
    [0, 1],
    [1, 1],
    [2, 1],
  ],
  [
    [0, 2],
    [1, 2],
    [2, 2],
  ],
  [
    [0, 0],
    [1, 1],
    [2, 2],
  ],
  [
    [0, 2],
    [1, 1],
    [2, 0],
  ],
];

export const checkWin = (array) => {
  for (let rule of rules) {
    const value = array[rule[0][0]][rule[0][1]];
    if (
      value !== "" &&
      rule.every((item) => array[item[0]][item[1]] === value)
    ) {
      return value;
    }
  }
  return null;
};

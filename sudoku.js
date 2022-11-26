/**
 * Принимает игровое поле в формате строки — как в файле sudoku-puzzles.txt.
 * Возвращает игровое поле после попытки его решить.
 * Договорись со своей командой, в каком формате возвращать этот результат.
 */ 
function solve(boardString) {
}

/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает булевое значение — решено это игровое поле или нет.
 */
 function isSolved(arrBoard) {
  arrBoard.every((line) => {
    if (line.reduce((a, b) => a + Number(b), 0) !== 45) return false;
  });
  for (let i = 0; i < size; i += 1) {
    const result = [];
    for (let j = 0; j < size; j += 1) {
      result.push(arrBoard[j][i]);
    }
    if (result.reduce((a, b) => a + Number(b), 0) !== 45) {
      return false;
    }
  }
  if (
    arrToString(arrBoard)
      .split('')
      .reduce((a, b) => a + Number(b), 0) !== 405
  ) {
    return false;
  }
  return true;
}

function arrToString(stepdBoardArr) {
  return stepdBoardArr
    .map((line) => {
      return line.join('');
    })
    .join('');
}

/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает строку с игровым полем для последующего вывода в консоль.
 * Подумай, как симпатичнее сформировать эту строку.
 */
function prettyBoard(board) {

}

// Экспортировать функции для использования в другом файле (например, readAndSolve.js).
module.exports = {
  solve,
  isSolved,
  prettyBoard,
};

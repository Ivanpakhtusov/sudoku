/**
 * Принимает игровое поле в формате строки — как в файле sudoku-puzzles.txt.
 * Возвращает игровое поле после попытки его решить.
 * Договорись со своей командой, в каком формате возвращать этот результат.
 */
function solve(boardString) {}

/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает булевое значение — решено это игровое поле или нет.
 */
function isSolved(board) {
  for (let i = 0; i < board.length; i += 1) {
    for (let j = 0; j < board[i].length; j += 1) {
      if (board[i][j] === "-") {
        return false;
      }
    }
  }
  for (let i = 0; i < board.length; i += 1) {
    for (let j = 0; j < board[i].length; j += 1) {
      if (
        board[i].filter((el) => el === board[i][j]).length !== 1 ||
        board[i].filter((el) => el === board[j][i]).length !== 1
      ) {
        return false;
      }
    }
  }
  let sqArr = [[], [], [], [], [], [], [], [], []];
  for (let i = 0; i < board.length; i += 1) {
    for (let j = 0; j < board[i].length; j += 1) {
      sqArr[Math.floor(i / 3) * 3 + Math.floor(j / 3)].push(board[i][j]);
    }
  }

  for (let i = 0; i < sqArr.length; i += 1) {
    for (let j = 0; j < sqArr[i].length; j += 1) {
      if (sqArr[i].filter((el) => el === sqArr[i][j]).length !== 1) {
        return false;
      }
    }
  }
  return true;
}

/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает строку с игровым полем для последующего вывода в консоль.
 * Подумай, как симпатичнее сформировать эту строку.
 */
function prettyBoard(board) {}

// Экспортировать функции для использования в другом файле (например, readAndSolve.js).
module.exports = {
  solve,
  isSolved,
  prettyBoard,
};

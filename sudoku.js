/**
 * Принимает игровое поле в формате строки — как в файле sudoku-puzzles.txt.
 * Возвращает игровое поле после попытки его решить.
 * Договорись со своей командой, в каком формате возвращать этот результат.
 */
function solve(boardString) {}

let boardString = '1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--';

function solve(boardString) {

  const array = boardString.split('');

  const newArrayHor =[];
  const arrV = [];


  for (let i = 0; i < 9; i+=1) {
  newArrayHor.push(array.splice(0,9))
  };


let out=0;

while(true){

out+=1;

for(let i=0; i<81; i++){

const prom = getMin(newArrayHor);

if(!prom){return newArrayHor}

 const cell = prom.arr[Math.floor(Math.random()*prom.arr.length)]

newArrayHor[prom.v][prom.h]=cell;

};

if(out===10000000){return newArrayHor};
};

return newArrayHor

};






function getMin(arg){


const acc = [];
for(let i=0; i<arg.length; i++){
  for(let k=0; k<arg[i].length; k++){

const m=getColumn(i,k,arg,[]);

const sv =[];     
for(let j=9; j>=1; j--){
if(m.indexOf(String(j))===-1){

sv.push(String(j));

}; 
};

arg[i][k]==='-' ? acc.push({v:i, h:k, n:sv.length, arr:sv}) : false;

  }
}
  

return acc.sort((a,b) => a.n-b.n)[0]
};










let mass=[];

function getColumn(ver,hor,a,stp) {

 const arrV = [];

for(let i=0; i<9; i++){
 a[i][hor] !=='-' && stp.indexOf(a[i][hor] )=== -1 ? stp.push(a[i][hor]) : false;
};


for(let i=0; i<9; i++){
 a[ver][i] !=='-' && stp.indexOf(a[ver][i])=== -1 ? stp.push(a[ver][i]) : false;
};

const startH = Math.floor((hor/3))*3;
const startV = Math.floor((ver/3))*3;

for(let i =startV; i <startV+3; i++){
for(let k= startH; k<startH+3; k++) {
    mass.push(a[i][k]) 
  
    a[i][k] !=='-' && stp.indexOf(a[i][k])=== -1 ? stp.push(a[i][k]) : false;

}
};

return stp;

};



console.log(solve(boardString));








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

  function prettyBoard(board) {
    let prettyBoardStr = '';
    for(let i = 0; i < board.length; i += 1) {
      if(i % 3 === 0 && i !== 0) {
        prettyBoardStr += '---------------\n';
      }
      for(let j = 0; j < board[i].length; j += 1) {
        if(j % 3 === 0 && j !== 0) {
          prettyBoardStr += ' | ';
        }
        if(board[i][j] === null || board[i][j] === undefined) {
          prettyBoardStr += ' ';
        } else {
          prettyBoardStr += board[i][j] + '';
        }
      }
      prettyBoardStr += '\n';
    }
    return prettyBoardStr;
   }


 
// Экспортировать функции для использования в другом файле (например, readAndSolve.js).
module.exports = {
  solve,
  isSolved,
  prettyBoard,
};

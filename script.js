const PLAYER_X_CLASS = 'X';
const PLAYER_O_CLASS = 'O';
const WINNING_COMBINATIONS = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8]
];
const cellElements = document.querySelectorAll('[data-cell]');
const boardELement = document.getElementById('board');
const winningMessageElement = document.getElementById('winningMessage');
const restartButton = document.getElementById('restartButton');
const winngingMessageTextElement = document.getElementById('winningMessageText');
let isPlayer_O_Turn = false;

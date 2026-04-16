"use strict";
const whiteCell = '  ';
const blackCell = '██';
const size = 8;
const drawBoard = () => {
    let board = '';
    for (let row = 0; row < size; row++) {
        for (let col = 0; col < size; col++) {
            ((row + col) % 2 === 0) ? board += whiteCell : board += blackCell;
        }
        board += '\n';
    }
    console.log(board);
};
drawBoard();

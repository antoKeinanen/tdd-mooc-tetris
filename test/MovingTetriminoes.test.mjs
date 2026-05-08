import { beforeEach, describe, test } from "vitest";
import { expect } from "chai";
import { Board } from "../src/Board.mjs";
import { Tetromino } from "../src/Tetromino.mjs";

describe("a falling tetromino can be moved", () => {
  let board;
  beforeEach(() => {
    board = new Board(10, 6);
    board.drop(Tetromino.T_SHAPE);
  });


  test("left", () => {
    board.left();

    expect(board.toString()).to.equalShape(
      `...T......
       ..TTT.....
       ..........
       ..........
       ..........
       ..........`
    );
   });

  test("right", () => {
    board.right();

    expect(board.toString()).to.equalShape(
      `.....T....
       ....TTT...
       ..........
       ..........
       ..........
       ..........`
    );
   });

  test("down", () => {
    board.down();

    expect(board.toString()).to.equalShape(
      `..........
       ....T.....
       ...TTT....
       ..........
       ..........
       ..........`
    );
  });
});

describe("it cannot be moved", () => {
    let board;
    beforeEach(() => {
        board = new Board(10, 6);
        board.drop(Tetromino.T_SHAPE);
    });
    
    test("left beyond the board", () => {
        board.left();
        board.left();
        board.left();
        board.left();
        board.left();


    expect(board.toString()).to.equalShape(
      `.T........
       TTT.......
       ..........
       ..........
       ..........
       ..........`
    );
    });

    test("right beyond the board", () => {
        board.right();
        board.right();
        board.right();
        board.right();
        board.right();
        board.right();
        board.right();
        board.right();


    expect(board.toString()).to.equalShape(
      `........T.
       .......TTT
       ..........
       ..........
       ..........
       ..........`
    );
    });

    test("down beyond the board", () => {
        board.down();
        board.down();
        board.down();
        board.down();
        board.down();
        board.down();
        board.down();
        board.down();


    expect(board.toString()).to.equalShape(
      `..........
       ..........
       ..........
       ..........
       ....T.....
       ...TTT....`
    );
    });
});

describe("it cannot be moved", () => {
    let board;
    beforeEach(() => {
        board = new Board(10, 6);
        board.drop(Tetromino.O_SHAPE);
        board.tick();
        board.tick();
        board.tick();
        board.tick();
        board.tick();

        board.drop(Tetromino.O_SHAPE);
        board.tick();
        board.tick();
        board.tick();
        board.tick();
    });

    test("left through other blocks", () => {
        board.drop(Tetromino.O_SHAPE);
        board.right();
        board.right();
        board.tick();
        board.tick();
        board.tick();
        board.left();

        expect(board.toString()).to.equalShape(
            `..........
             ..........
             ....OO....
             ....OOOO..
             ....OOOO..
             ....OO....`
        )
    });
});


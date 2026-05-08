import { beforeEach, describe, test } from "vitest";
import { expect } from "chai";
import { Board } from "../src/Board.mjs";
import { Tetromino } from "../src/Tetromino.mjs";

describe("a falling tetromino can be moved", () => {
  let board;
  beforeEach(() => {
    board = new Board(10, 6);
  });


  test("left", () => {
    board.drop(Tetromino.T_SHAPE);
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
    board.drop(Tetromino.T_SHAPE);
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

  test.skip("down", () => {
    expect(shape.rotateLeft().toString()).to.equalShape(
      `CFI
       BEH
       ADG`
    );
  });
});
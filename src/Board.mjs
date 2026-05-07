export class Board {
  width;
  height;
  board;
  moving;

  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.board = Array(width * height).fill(".");
    this.moving = [];
  }

  toString() {
    return this.board.reduce((p, c, i) => p + (i % this.width === 0 && i != 0 ? "\n" : "") + c) + "\n";
  }

  drop(shape) {
    const blockCoord = Math.floor(this.width / 2);
    this.board[blockCoord] = shape;
    this.moving.push(blockCoord);
  }
}

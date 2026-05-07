export class Board {
  width;
  height;
  board;

  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.board = Array(width * height).fill(".")
  }

  toString() {
    return this.board.reduce((p, c, i) => p  + (i % this.width === 0 && i != 0 ? "\n" : "") + c) + "\n"
  }

  drop(shape) {
    this.board[Math.floor(this.width / 2)] = shape;
  }
}

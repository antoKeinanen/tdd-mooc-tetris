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

  hasFalling() {
    return this.moving.length > 0;
  }

  drop(shape) {
    if (this.moving.length != 0) {
      throw new Error("already falling");
    }

    const blockCoord = Math.floor(this.width / 2);
    this.board[blockCoord] = shape;
    this.moving.push(blockCoord);
  }

  tick() {
    const updatedMoving = [];
    this.moving.forEach((coord) => {
      if (coord + this.width > this.width * this.height) 
        return;
      if (this.board[coord + this.width] != ".")
        return;

      const block = this.board[coord];
      this.board[coord] = ".";
      this.board[coord + this.width] = block;
      updatedMoving.push(coord + this.width);
    });

    this.moving = updatedMoving;
  }
}

import { RotatingShape } from "./RotatingShape.mjs";

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

    const s = shape instanceof RotatingShape ? shape : RotatingShape.fromString(shape);
    const o = Math.floor((this.width - s.width) / 2);
    s.shape.forEach((c, i) => { if (c !== ".") { const p = Math.floor(i / s.width) * this.width + o + i % s.width; this.board[p] = c; this.moving.push(p); } });
  }
  left() {
    const updatedMoving = [];
    this.moving.forEach((coord) => {
      const block = this.board[coord];
      this.board[coord] = ".";
      this.board[coord - 1] = block;
      updatedMoving.push(coord-1);
    });
    this.moving = updatedMoving;
  }

  tick() {
    if (!this.moving.every(c => c + this.width < this.width * this.height && (this.board[c + this.width] === "." || this.moving.includes(c + this.width)))) { this.moving = []; return; }
    this.moving.sort((a, b) => b - a);
    
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

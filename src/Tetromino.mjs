import { RotatingShape } from "./RotatingShape.mjs";

export class Tetromino extends RotatingShape {
    static T_SHAPE = Tetromino.fromString(".T.\nTTT\n...");
    static I_SHAPE = Tetromino.fromString(".....\n.....\nIIII.\n.....\n.....", 2);
}
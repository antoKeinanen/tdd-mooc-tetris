export class RotatingShape {
    shape;
    width;
    height;

    constructor(shape, width, height) {
        this.shape = shape;
        this.width = width;
        this.height = height;
    }

    static fromString(string) {
        const rows = string.replaceAll(" ", "").split("\n");
        const width = rows[0].length;
        const height = rows.length;
        return new RotatingShape(string.replaceAll(" ", "") + "\n", width, height);
    }

    toString() {
        return this.shape;
    }
}

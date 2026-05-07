export class RotatingShape {
    shape;
    width;
    height;
    orientations;

    constructor(shape, width, height, orientations = 4) {
        this.shape = shape;
        this.width = width;
        this.height = height;
        this.orientations = orientations;
    }

    static fromString(string, orientations = 4) {
        const rows = string.replaceAll(" ", "").split("\n");
        const width = rows[0].length;
        const height = rows.length;
        const shape = rows.reduce((prev, row) => [...prev, ...row.split("")], []);
        return new RotatingShape(shape, width, height, orientations);
    }

    toString() {
        return this.shape.reduce((p, c, i) => p + (i % this.width === 0 && i != 0 ? "\n" : "") + c) + "\n";
    }

    rotateRight() {
        const newShape = this.shape.map((_, i) => {
            return this.shape[(this.width - 1 - (i % this.width)) * this.width + Math.floor(i / this.width)];
        });
        return new RotatingShape(newShape, this.width, this.height, this.orientations);
    }

    rotateLeft() {
        const newShape = this.shape.map((_, i) => {
            return this.shape[i % this.width * this.width + (this.width - 1 - Math.floor(i / this.width))];
        });
        return new RotatingShape(newShape, this.width, this.height, this.orientations);
    }
}

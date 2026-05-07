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
        const shape = rows.reduce((prev, row) => [...prev, ...row.split("")], []);
        return new RotatingShape(shape, width, height);
    }

    toString() {
        return this.shape.reduce((p, c, i) => p + (i % this.width === 0 && i != 0 ? "\n" : "") + c) + "\n";
    }

    rotateRight() {
        this.shape = this.shape.map((_, i) => {
            return this.shape[(this.width - 1 - (i % this.width)) * this.width + Math.floor(i / this.width)];
        });
        return this;
    }
}

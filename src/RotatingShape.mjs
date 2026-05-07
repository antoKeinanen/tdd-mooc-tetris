export class RotatingShape {
    shape;
    width;
    height;
    orientations;
    rotations;

 constructor(shape, width, height, orientations = 4, rotations = 0, _baseShape = null) {
        this._baseShape = _baseShape ?? shape;
        this.shape = shape;
        this.width = width;
        this.height = height;
        this.orientations = orientations;
        this.rotations = rotations;
    }

    static fromString(string, orientations = 4, rotations = 0) {
        const rows = string.replaceAll(" ", "").split("\n");
        const width = rows[0].length;
        const height = rows.length;
        const shape = rows.reduce((prev, row) => [...prev, ...row.split("")], []);
        return new RotatingShape(shape, width, height, orientations, rotations);
    }

    toString() {
        return this.shape.reduce((p, c, i) => p + (i % this.width === 0 && i != 0 ? "\n" : "") + c) + "\n";
    }

    rotateRight() {
        if (this.orientations === 1) {
            return this;
        }
        const newRotations = (this.rotations + 1) % this.orientations;
        const newShape = this.shape.map((_, i) => {
            return this.shape[(this.width - 1 - (i % this.width)) * this.width + Math.floor(i / this.width)];
        });
        const shape = newRotations === 0 ? this._baseShape : newShape;
        return new RotatingShape(shape, this.width, this.height, this.orientations, newRotations, this._baseShape);
    }

    rotateLeft() {
        if (this.orientations === 1) {
            return this;
        }
        if (this.orientations === 2) {
            return this.rotateRight();
        }
        const newShape = this.shape.map((_, i) => {
            return this.shape[i % this.width * this.width + (this.width - 1 - Math.floor(i / this.width))];
        });
        return new RotatingShape(newShape, this.width, this.height, this.orientations, (this.rotations - 1 + this.orientations) % this.orientations);
    }
}

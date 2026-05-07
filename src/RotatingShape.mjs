export class RotatingShape {
    shape;

    constructor(string) {
        this.shape = string;
    }

    static fromString(string) {
        return new RotatingShape(string.replaceAll(" ", "") + "\n")
    }

    toString() {
        return this.shape;
    }
}

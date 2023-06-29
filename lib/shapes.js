class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  getSvgMarkup() {
    return `<circle cx="50" cy="50" r="${this.radius}" fill="currentColor" />`;
  }
}

class Square {
  constructor(sideLength) {
    this.sideLength = sideLength;
  }

  getSvgMarkup() {
    return `<rect x="0" y="0" width="${this.sideLength}" height="${this.sideLength}" fill="currentColor" />`;
  }
}

class Triangle {
  constructor(sideLength) {
    this.sideLength = sideLength;
  }

  getSvgMarkup() {
    const halfSideLength = this.sideLength / 2;
    const points = `0,${this.sideLength} ${this.sideLength},${this.sideLength} ${halfSideLength},0`;

    return `<polygon points="${points}" fill="currentColor"/>`;
  }
}

export { Circle, Square, Triangle };

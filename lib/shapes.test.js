import { Circle, Square, Triangle } from "./shapes";

describe("Circle", () => {
  test("should generate the correct SVG markup", () => {
    const circle = new Circle(50);
    const svgMarkup = circle.getSvgMarkup();

    expect(svgMarkup).toContain("<circle");
    expect(svgMarkup).toContain('r="50"');
  });
});

describe("Square", () => {
  test("should generate the correct SVG markup", () => {
    const square = new Square(100);
    const svgMarkup = square.getSvgMarkup();

    expect(svgMarkup).toContain("<rect");
    expect(svgMarkup).toContain('width="100"');
    expect(svgMarkup).toContain('height="100"');
  });
});

describe("Triangle", () => {
  test("should generate the correct SVG markup", () => {
    const triangle = new Triangle(100);
    const svgMarkup = triangle.getSvgMarkup();

    expect(svgMarkup).toContain("<polygon");
    expect(svgMarkup).toContain('points="0,100 100,100 50,0"');
  });
});

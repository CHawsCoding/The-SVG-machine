import fs from "fs";
import inquirer from "inquirer";
import { Circle, Square, Triangle } from "./lib/shapes.js";

async function promptUser() {
  const answers = await inquirer.prompt([
    {
      type: "list",
      name: "shape",
      message: "Select a shape:",
      choices: ["Circle", "Square", "Triangle"],
    },
    {
      type: "input",
      name: "color",
      message: 'Enter the color (e.g., "red", "#FF0000"):',
    },
    {
      type: "input",
      name: "text",
      message: "Enter the text for the logo:",
    },
  ]);

  return answers;
}

function generateLogo(shape, color, text) {
  let logo;

  switch (shape) {
    case "Circle":
      logo = new Circle(50); 
      break;
    case "Square":
      logo = new Square(100); 
      break;
    case "Triangle":
      logo = new Triangle(100); 
      break;
    default:
      throw new Error("Invalid shape selected");
  }

  const shapeMarkup = logo
    .getSvgMarkup()
    .replace(/fill="[^"]+"/g, `fill="${color}"`);
  const svgMarkup = `
    <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 100 100">
      ${shapeMarkup}
      <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle">${text}</text>
    </svg>
  `;

  return svgMarkup;
}

async function run() {
  try {
    const { shape, color, text } = await promptUser();
    const svgMarkup = generateLogo(shape, color, text);

    const timestamp = Date.now();
    const fileName = `logo_${timestamp}`;
    const filePath = `examples/${fileName}.svg`;

    fs.writeFileSync(filePath, svgMarkup);

    console.log(`SVG file saved as ${filePath}`);
  } catch (error) {
    console.error("An error occurred:", error);
  }
}

run();

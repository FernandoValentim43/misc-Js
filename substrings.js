let string =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua";

string = string.replaceAll(" ", ""); //formata a string

let subString = ["a", "em", "i", "el"];
let grid = [...Array(subString.length)].map((e) => Array(2));

for (let i = 0; i < subString.length; i++) {
  grid[i][0] = string.split(subString[i]).length - 1;
  grid[j][1] = subString[i];
}

console.log(grid);

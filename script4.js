//Convert array of numbers in string format into number array
// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  //start-here
    let x = userInput[0].split(" ");
    console.log(x);
    let y = x.map(Number);
    console.log(y);

  //end-here
});
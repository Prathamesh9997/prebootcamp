const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {

let i =0 ;
for(i=0;i<userInput.length;i++)
{
    console.log(typeof(userInput[i]))
}
let intvar = parseFloat(userInput[0]); // string to float
let strvar = userInput[1]; //by default string
let bvar = (userInput[2] == 'true'); //string to bool
let arrvar = userInput[3].split(","); //string to array

console.log (typeof(intvar));
console.log (typeof(strvar));
console.log (typeof(bvar));
console.log (bvar);
console.log (arrvar);
console.log (typeof(arrvar));

});

/*Multiline Input:
10.123
"10"
true
10,10.3,"a","arun",23,false
*/

//By default all the input from console will be taken as string.

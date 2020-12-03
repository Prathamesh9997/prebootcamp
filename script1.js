const readline = require('readline');
const inp = readline.createInterface({input: process.stdin});

const userInput = [];
inp.on("line", (data) => {
    userInput.push(data);
    
});

inp.on("close", () => {
    //start-here
     var dd = 0;
    for(var i =0; i<userInput.length; i++){
        var something = userInput[i].split(" ");
       
        for(var j=0; j<something.length; j++){
         dd = dd +  parseInt(something[j]);
        }
    }
   console.log(dd);
    //end-here
});
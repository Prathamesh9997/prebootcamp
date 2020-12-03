let intvar = 10;
let strvar = "10";
let bvar = false;
let arrvar = [10, 10.3, "prathamesh", false];
let objvar = {
    "name": "Prathamesh",
    "age" : 24,
    "city" : "Kolhapur"
}

console.log(intvar, typeof(intvar), strvar, typeof(strvar),bvar, typeof(bvar));
for(let i=0;i<arrvar.length;i++){
    console.log(arrvar[i]);
}

console.log(arrvar);
console.log(objvar);
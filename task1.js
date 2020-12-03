let array = [12,12,12,34,34,45,45,56,67,67,78,78,78,78,78]
count = {}
for(let i =0; i<array.length; i++){
    if(count[array[i]] === undefined){
        count[array[i]]=1;
    } else{
        count[array[i]]=count[array[i]]+1;
    }
   
}
console.log(count);
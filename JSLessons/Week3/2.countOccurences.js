let count = 0;
let str = "Hellooooo";//H e l l o o o 
                     // 0 1 2 3 4 5 6
let char = "o";

for(let i=0;i<str.length;i++){
    //console.log(str[i])
    if(str[i] === char){
        // count+=1;    
        count++;
    }
}
console.log(count)
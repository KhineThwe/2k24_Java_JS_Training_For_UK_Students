function countOccurrences(str,char){
  let count = 0;
  for(let i=0;i<str.length;i++){
    if(str[i] === char){
        count++;
    }
  }
  return count;
}

let result = countOccurrences("Helloooooooo","o")
console.log(result)





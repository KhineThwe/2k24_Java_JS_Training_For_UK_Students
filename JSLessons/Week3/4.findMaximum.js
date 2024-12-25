//array [1,2,3,4,5,6]
//['a'.'b','c']

function findMaxNumber(arr){
    //declare
    let max = arr[0]//1
    //loop
    //current element is greater than
    for(let i=1;i<arr.length;i++){
        if(arr[i] > max){//2>1
           max = arr[i] //max = 2
        }
    }
    console.log("Maximum number of the array",max)
}

findMaxNumber([1,2,33,4,5,6,88])

//12-25 ---> A , C 
//count Occurences ACM's algorithm
//findMinimum


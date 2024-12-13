var x = 330;
var x = 30;
console.log(x)

// let y = 200;
// let y = 20;
// console.log(y)

// const z = 500;
// const z = 60;
// console.log(z)

//let and const ==> block scoped
//var ==> function scoped ==> can be redeclared in the same scope but let and const cannot be redeclared.
const ob = { a: 10 }
console.log(ob)
ob.a = 20;
console.log(ob)


const arr = [10,20,30,40]
console.log(arr)
arr[2] = 60
console.log(arr)
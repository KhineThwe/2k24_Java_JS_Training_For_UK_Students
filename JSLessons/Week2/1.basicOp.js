//basic op
//1.Arithmetic Op
// console.log(5 + 3);  // 8 (Addition)
// console.log(10 - 4); // 6 (Subtraction)
// console.log(2 * 3);  // 6 (Multiplication)
// console.log(8 / 2);  // 4 (Division)
// console.log(7 % 3);  // 1 (Modulus)
// console.log(2 ** 3); // 8 (Exponentiation)

// let a = 5;
// console.log(a);
// a++;//post increment  a = a+1 
// console.log(a);      // 6 (Increment)

// let b = 5;
// console.log(b);//5
// b--;//b = b - 1
// console.log(b);      // 4 (Decrement)

// //2. Assignment Operators
// let x = 10;          // Assignment
// console.log(x);      // 10

// x += 5;              // x = x + 5
// console.log(x);      // 15

// x -= 3;              // x = x - 3
// console.log(x);      // 12

// x *= 2;              // x = x * 2
// console.log(x);      // 24

// x /= 4;              // x = x / 4
// console.log(x);      // 6

// x %= 2;              // x = x % 2
// console.log(x);      // 0

//3.Comparison Operators
console.log(5 == '5');   // true (Loose equality)
console.log(5 === '5');  // false (Strict equality)
console.log(5 != '5');   // false (Loose inequality)
console.log(5 !== '5');  // true (Strict inequality)
console.log(3 < 5);      // true (Less than)
console.log(5 > 3);      // true (Greater than)
console.log(3 <= 3);     // true (Less than or equal)
console.log(5 >= 3);     // true (Greater than or equal)


//4. Logical Operators
//AND OR NOT
console.log(5 > 3 && 2 < 4);  // true (AND)   
console.log(5 > 3 || 2 > 4);  // true (OR)
console.log(!(5 > 3));        // false (NOT)

//5. Bitwise Operators
console.log(5 & 1);  // 1 (Binary AND: 0101 & 0001 = 0001)
console.log(5 | 1);  // 5 (Binary OR: 0101 | 0001 = 0101)
console.log(5 ^ 1);  // 4 (Binary XOR: 0101 ^ 0001 = 0100)
console.log(~5);     // -6 (Binary NOT: Inverts all bits)
console.log(5 << 1); // 10 (Left shift: 0101 << 1 = 1010)
console.log(5 >> 1); // 2 (Right shift: 0101 >> 1 = 0010)

//6. String Operators
console.log('Hello ' + 'World');  // "Hello World" (Concatenation)

let str = 'Hello';
str += 'World';
console.log(str);//"Hello World"

//7.Type Operators
console.log(typeof 123);          // "number" (Type check)
console.log(typeof 'Hello');      // "string"

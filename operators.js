// // 1. What is the result of 10 + '5'?
let x=10;
let y="5"

console.log(`1) ${x+y}`)
//=============================================================
// // 2. What is the value of x after x = 10; x += 5;? 
let x11=10;
console.log(`2) ${x11+=5}`);
//=============================================================
// // 3. What is the result of 10 - null?

console.log(`3) ${10-null}`)
//=============================================================
// // 4. What is the value of x after x = 10; x *= 2;?
let x12=10;
console.log(`4) ${x12*2}`)
//=============================================================
// // 5. What is the result of 10 / '2'?
// // JavaScript converts '2' (string) to a number for arithmetic operations.
console.log(`5) ${10/'2'}`)
//=============================================================
// // 6. What is the result of 10 % 3? 
console.log(`6) ${10%3}`)
//=============================================================
// // 7.  What is the value of x after x = 10; x = x ** 2;?
let x13=10;
console.log(`7) ${x13=x13**2}`);
//=============================================================
// // 8. What is the result of 10 > 5 && 5 < 10?
// // Both conditions are true, so the && (logical AND) operator returns true.


console.log(`8) ${(10 > 5 && 5< 10)}`)
//=============================================================

// // 9. What is the result of 10 === '10'? 
// // The === operator checks for strict equality, and a number is not equal to a string.
console.log(`9) ${10==='10'}`)
//=============================================================

// // 10. What is the result of null ?? 'default'?
// // The nullish coalescing operator (??) returns the right operand if the left is null or undefined.
console.log(`10) ${null??'default'}`)
//=============================================================

// // 11. What is the result of 10 || 'default'? 
// // The logical OR (||) operator returns the first truthy operand, which is 10.
console.log(`11) ${10||"default"}`)
//=============================================================

// // 12. What is the result of !true? 
// // The ! operator negates the boolean value.
console.log(`12) ${!true}`)
//=============================================================

// // 13. What is the result of 10 & 5? 
// // Bitwise AND (&) compares the binary representations: 1010 & 0101 = 0000.
console.log(`13) ${10&5}`)
//=============================================================

// // 14. What is the result of 10 | 5? 
// // Bitwise OR (|) compares binary representations: 1010 | 0101 = 1111 (decimal 15).
console.log(`14) ${10|5}`)
//=============================================================

// // 15. What is the result of 10 ^ 5?
// // Bitwise XOR (^) compares binary representations: 1010 ^ 0101 = 1111 (decimal 15).
console.log(`15) ${10^5}`)
// ================================================================================================
// 16. What is the result of x = 10; y = ++x;?  
// What are the values of x and y? 
let x14=10;
let y11=++x14;
console.log(`16) x14= ${x14}`)
console.log(`y11= ${y11}`)
//=============================================================

// 17. What is the result of x = 10; y = x++;?  
// What are the values of x and y?
let x15=10;
let y12=x15++;
console.log(`17) x14= ${x15}`)
console.log(`y11= ${y12}`)
//=============================================================
// 18. What is the result of x = 10; console.log(++x);?
let x16=10;
console.log(`18) ${++x16}`)
//=============================================================
// 19. What is the result of x = 10; console.log(x++);?
let x17=10;
console.log(`19) ${x17++}`)
//=============================================================
// 20. What is the result of x = 10; y = --x;? 
// What are the values of x and y? 
let x18=10;
let y13=--x18;
console.log(`20) x14= ${x15}`)
console.log(`y11= ${y12}`)
//=============================================================
// 21. What is the result of x = 10; y = x > 5 ? 'yes' : 'no';?  
// What is the value of y?
let x19=10;
let y14=x19 > 5 ? 'yes' : 'no';
console.log(`21) ${y14}`)
//=============================================================
// 22. What is the result of x = 10; y = x--;? What are the values of x and y? 
let x20=10;
let y15=x20--;
console.log(`22) ${y15}`);
//=============================================================
// 23. What is the result of x = 10; y = x > 5 ? 'yes' : x > 3 ? 'maybe' : 'no';? 
//  What is the value of y? 
x21=10;
y16=x21>5?"yes":x>3?'maybe':'no';
console.log(`23) ${y16}`);
//=============================================================
// 24. What is the result of const obj = { a: { b: 'c' } }; console.log(obj?.a?.b);? 
// optional chaining:The ?. operator checks if the preceding property is null or undefined before attempting to access the next property.
// If obj, obj.a, or obj.a.b were null or undefined, the expression would short-circuit and return undefined without throwing an error.
const obj = { a: { b: 'c' } };
console.log(`24) ${obj?.a?.b}`);
//=============================================================
// 25.  What is the result of const obj = { a: { b: 'c' } }; console.log(obj?.a?.c);? 

// EXPLANATION:The Object Structure:

// obj is defined as { a: { b: 'c' } }.
// obj.a exists and is { b: 'c' }.
// obj.a.c does not exist.
// Output:

// Since obj.a.c is not defined, the result of obj?.a?.c is undefined, which is logged to the console.
const obj1 = { a: { b: 'c' } };
console.log(`25) ${obj1?.a?.c}`);
//=============================================================
// 26. What is the result of const obj = { a: { b: 'c' } }; console.log(obj?.b?.c);?
// EXPLANATION:The Object Structure:

// obj is defined as { a: { b: 'c' } }.
// obj.b does not exist (since b is a property of obj.a, not obj directly).
// Output:

// Since obj.b is undefined, the optional chaining operator prevents the code from trying to access c on undefined.
// As a result, obj?.b?.c evaluates to undefined, which is logged to the console.

const obj2 = { a: { b: 'c' } };
console.log(`26) ${obj2?.b?.c}`);

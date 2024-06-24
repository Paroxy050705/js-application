let value=3;
let negValue=(-value);
console.log(negValue); //-3
console.log(2+2); //4
console.log(3-2);  //1
console.log(3*2);  //6
console.log(10/5); //2
console.log(5**2);  //25
console.log(5%2);   //1

let str1="hi";
let str2=" paramita";
let str3=str1 + str2;
console.log(str3);  //hi paramita

console.log(2+3); //5
console.log("1" + 2); //12
console.log(2+"1");  //21
console.log("1" +2+2);  //122   //1st a string tai purota string
console.log(1+2+"2");  //32

console.log(true); //true
console.log(+true);  //1
// console.log(true+); //error
console.log(+"");  //0


let num1,num2,num3;
num1=num2=num3=2+2;
console.log(num1);  //4
console.log(num2);  //4
console.log(num3);   //4



//postfix operator
// 10++  ==> at first print then increase
let a=10;
console.log(a++); //10
console.log(a);


//prefix operator
// ++20  ==> at first increment then print
let b=20;
console.log(++b); //21

let score="33abc";  //null=0,undefined=NaN,string=NaN,""=0

console.log(typeof score);     //string

let value=Number(score);   /*in this we convert the string into number
but the number is not a proper number because abc is not type of number.*/
console.log(typeof value);   //number
console.log(value);      //NaN (Not a Number)


let marks=null;
console.log(marks); //null

let number=undefined;
console.log(number);  //undefined

//"33" =>33
//"33abc"=>NaN
//true =>1 ;false =>0


let isloggedIn=1;

let booleanIsLoggedIn=Boolean(isloggedIn);  //1 ke boolean a convert kora holo so 1=true
console.log(booleanIsLoggedIn);  //true

//1 => true
//"" =>false
//"paramita" => true
//0 =>false
//null=false
//undefined=false

let someNumber=33;
let stringNumber=String(someNumber);
console.log(stringNumber);  //33
console.log(typeof stringNumber);  //string
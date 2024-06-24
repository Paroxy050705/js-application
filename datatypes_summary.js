//primitive data types

let num=2;  //number
let name="Paramita"; //string
let x; //undefined
let value=null; //it is null
let bigNumber=12345678967456n;  //bigint

//symbol
const id=Symbol('123');
const newid=Symbol('123');
console.log(id === newid);  //false because symbol provide uniqueness values are same but they are different because of symbol


let accountPassword=true;  //boolean



//nonprimitive data types

const cartoons=["doraemon","shinchan","pokemon"];  //array

const obj={
    name:"Paramita",
    age:18,
    college:"Kalyani Mahabidyalay",
}     //object

const myfunction=function(){
    console.log("hello world");

}//function

//data type
console.log(typeof num);
console.log(typeof name);
console.log(typeof x);
console.log(typeof value);
console.log(typeof bigNumber);
console.log(typeof id);
console.log(typeof newid);
console.log(typeof accountPassword);
console.log(typeof cartoons);
console.log(typeof obj);
console.log(typeof myfunction);


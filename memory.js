//stack memory  (primitive)

let myName="Paroxy";
let anotherName=myName;
anotherName="Paramita";
console.log(anotherName);   //Paramita
console.log(myName);    //Paroxy



//heap memory(non primitive)

let userone={
    mail:"Hi@mail.com",
    id:'12'
};
let usertwo=userone;
console.log(usertwo);
usertwo.mail="Hello@gmail.com";
console.log(userone);
console.log(usertwo);
// const now = new Date();
// console.log(now);
// console.log(now.getFullYear());
// console.log(now.getMonth());
// console.log(now.getDate());
// console.log(now.getHours());
// console.log(now.getMinutes());
// console.log(now.getSeconds());


// const birthday = new Date(2000,5,15);
// console.log(birthday);

// const exam=new Date(2026,2,10,9,30,0);
// console.log(exam);


//holi days:4-2-26

// console.log("javascript tutorial 3 var let or const")
// var a=45;
// var b="harry";
// var c=null
// var d=undefined
// {
    // var b='this'
    //here let is block scope variable
//     let b='this'
//     console.log(b)
// }
// console.log(b)


// let b='harry';
// const author="harry"
// author=5 //throws an error because constant changed
// b=4
// let c=null
// let d=undefined
// {
//     let b='this'
//     console.log(b)
    //first here block execute then outer
// }
// console.log(b)

// nn bb ss u(primitive data type)
// let a=null;
// let b=345;

// let c=true;//can also be false
// let d=BigInt("567") + BigInt("3")

// let e="harry"
// let f=Symbol("i am a nice symbol")

// let g =undefined 

// console.log(a, b,c,d,e,f,g)
// console.log(typeof d) 


//objects in js 
// const item = {
//     "harry": true,
//     "shub": false,
//     "loviesh": 67,
//     "Rohan": undefined
// }
// console.log(item["shub"])


//chapter2
//operator(arthmentic)
// 77;
// "renu"
// negi(error defined)
// console.log("operators in js")
// console.log("arthmentic operator")
// let a=10;
// let b=4;
// console.log("a+b =",a+b) 
// console.log("a-b =",a-b)
// console.log("a**b =",a*b)
// console.log("a/b =",a/b)
// console.log("a%b =",a%b)
// console.log("a*b =",a*b)

// console.log("++a=",++a) 
// console.log("a++ =",a++)
// console.log("a-- =",a--)
// console.log("--a =",--a)
// console.log("a =",a)

//operator(assignment)
// let a=1
// a +=5 //same as a += a+5
// console.log(a)

//comparition
// let com1=6;
// let com2=7;
// console.log("comp1==comp2",com1==com2)
// console.log("comp1==comp2",com1!=com2)
// console.log("comp1===comp2",com1===com2)
// console.log("comp1!==comp2",com1!==com2)
// console.log("comp>comp2",com1>com2)

// logical
// x=5;
// y=6;
// console.log(x<y && x==5)
// console.log(x>y || x==5)
// console.log(!true)


//condition experession(if)
// let a = prompt(" hey whts your age?");
// a=Number.parseInt(a);//converting the string into the number
// console.log(typeof a)
// if(a>0){
//     alert("this is valid age")
// }

//if-else
// let a = prompt("hey whtas yoyr age ");
// a=Number.parseInt(a);
// if(a<0){
//     alert("this is Invalid age");
// }
// else if(a<9){
//     alert("your are kid ");
// }
// else if(a<18 && a>=9){
//     alert("you are a kid and after 18 you can drive ")
// }
// else{
//     alert("you can now drive you are above 18")
// }
// console.log("Done")

//console.log("you can", (a<18? "not drive":"drive"))



//homework -explore switch statement 
// const expr='papayas';
// switch(expr){
//     case 'orange':
//         console.log("orange are $44 a pound");
//         break;
//     case 'mangos':
//     case'papayas':
//     console.log("both are 20$");
//     break;
//     default:
//         console.log(`sorry,we are out of${expr}.`);
// }


//loops
let sum=0
let n=prompt("enter the value of n")
n = Number.parseInt(n)
for (let i=0; i<5; i++){
    sum +=(i+1)
    
}
console.log("sum of first" + n + "natural number is " +sum)

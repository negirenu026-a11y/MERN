// chapter-1-Q1
// create a variable of type string and try to add a number to it

// let a="renu"
// let b=6
// console.log(a+b)

//  Q2-use typeof operator to find the data-type of the string in last question



// console.log(typeof (a+b))

//Q3- create a const object in javascript can you change it to hold a number later?

// const a1={
//     name:"harry",
//     section: 1,
//     isprincipal:false
// }
// a1=72


//Q4-try to add a new key to the const object in problem 3 where you able to do itn ?

// const a1={
//     name:"harry",
//     section: 1,
//     isprincipal:false
// }
// a1['friend']="shubham"
// a1['name']="renu"

// console.log(a1)


// Q5-write a js program to create a word-meaning dictonatry of 5 words?
// const dict ={
//     appreciate:"to understand a problem, situation, etc",
//     hogwah:"talk or writing that is meaningless or insincere",
//     yaw:"to deviate from a straight course, as a ship",
//     lodestar:"something that serves as a guide or on which attention is fixed",
//     yakka:"work ,especially hard work",
// }
// console.log(dict['yakka'])


//chapter2-Q1
//use logical operatos to find wheather (id between =)the age of a person lies between 10 and 20?

// let age=prompt("ehaqt is your age")
//age = Number.parseInt(age)
// if(age>10 && age<20){
//     console.log("your age is lies between 10 and 20")
// }else{
//     console.log("your age does not lies between 10 and 20")
// }

//Q2-demostrate the use of switch case statement in js ?

// let age = prompt("what is your age ")
// switch(age){
//     case '12':
//         console.log("your age is 12")
//         break
//     case '13':
//         console.log("your age is 13")
//         break
//     case '14':
//         console.log("your age is 14")
//         break
//     case '15':
//         console.log("your age is 15")
//         break
//     default:
//         console.log("your age is not special")
// }

//Q3-write a js program to find wheather a number is divisble by either 2 and 3?
// let num=prompt("ehaqt is your age")
// num = Number.parseInt(num)
// if(num%2==0 && num%3==0 ){
//     console.log("your number is divisible by 2 and 3")
// }else{
//     console.log("your number is not divisible by 2 and 3")
// }

//Q4-write a js program to find wheather a number is divisble by either 2 or 3
function isDivisibleByTwoOrThree(num){
if(num%2==0 || num%3==0 ){
    return true;
}else{
    return false;
}
}


//Q6-print "you can drive" or "you  cannot drive" based on age begin grater then 18 using ternary operator
// let age = 19
// let a =age>18 ? "you can drive" :"you cannot drive" 
// console.log(a)
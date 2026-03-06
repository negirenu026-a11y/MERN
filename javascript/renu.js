// setTimeout(() => {
//   console.log("Hello after 2 seconds");
// }, 2000);

let counter=0
const id = setInterval (function (){
counter = counter +1
console.log(counter)
// if(counter === 10){
//     clearInterval(id)

},1000)

// clearInterval(id)

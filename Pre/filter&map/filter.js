let arr = ["apple","banana","orange","watermelon"]

let narr = [];

// for(let i=0;i<arr.length;i++){
//     let fruit= arr[i];
//     if(fruit.length>6){
//         narr.push(fruit);
//     }
// }

narr = arr.filter((fruits)=>{
   return fruits.length>6;
})



console.log(arr);
console.log(narr);
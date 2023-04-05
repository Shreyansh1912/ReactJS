let arr = [1,2,3,4,5]

let narr = [];

// for(let i=0;i<arr.length;i++){
//     narr[i]=arr[i]*2;
// }

narr = arr.map((ele,idx)=>{
    return ele*2;
})

console.log(arr);
console.log(narr);
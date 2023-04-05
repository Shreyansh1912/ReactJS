//destructing=> it is the way by which we extract properties of array and objects

let arr = ["Hi","I","am","Udai"];

// let a = arr[0];
// let b = arr[1];

//Destructuring
// let [a,b,c,d] = arr

// let [a,b,,d] = arr => skip value means u print those val who u want to dispal

let [a,b,c,d,extra='Hlo'] = arr //=>we can add extra things also

console.log(a,b,d,extra);
// for(i=0;i<5;i++){
//     console.log(`Role number ${i}`);
// }


// for of

// let arr = [1,2,3,4,5,6,7];

// for (const value of arr) {
//     console.log(value);
// }

// const greetings = "Hello Atul";

// for (const gree of greetings) {
//     console.log(gree);
// }

let obj = {
    Firstname : "Atul",
    Lastname: "Kumar",
    Date_of_birth : "11/11/1998"    
}

// for (const [key, value] of obj) {
//     console.log(key,` : `,value);
// }

for (const key in obj) {
    console.log(obj[key]);
}




let arr2 = ["Mac","Win","Android"]

// for in loop

for (const key in arr2) {
    console.log(arr2[key]);
}


//foreach loop 

arr2.forEach((value)=>{console.log(value)});
arr2.forEach((value,num,ar)=>console.log(value,num,ar));


// obj.forEach((item)=>console.log(item));




const response = [
    {
        username : "Atul",
        age :25
    },
    {
        username : "Garima",
        age :29
    },
    {
        username : "Tripti",
        age :30
    }
]




response.forEach((value)=>console.log(value.username));


let output = arr2.filter((item)=>(item.includes("i")))

console.log(output);




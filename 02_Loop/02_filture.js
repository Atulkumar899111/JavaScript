
let arr2 = [1,2,3,4,5,6]

console.log(arr2.filter((num)=>(num>5)))

let result = arr2.filter(function(num){
    return num>5;
})
console.log(result);



let shop = [
    {
        item : "Phone",
        prise : 15000
    },
    {
        item : "Laptop",
        prise : 90000
    },
    {
        item : "Monitor",
        prise : 7000
    }
]

// let checkNumber = (num)=>{
//     if(num === 'number'){
//         console.log(num)
//         return num;
//     }else{
//         return 0;
//     }
// }

let cardTotal = shop.reduce((acc,item)=>(acc + item.prise)
    ,0);



console.log(cardTotal);



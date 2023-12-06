// const promiseOne = new Promise(function(resolve, reject){
//     //Do an async task
//     // DB calls, cryptography, network
//     setTimeout(function(){
//         console.log('Async task is compelete')
//         resolve()
//     },1000)
// })

// promiseOne.then(function(){
//     console.log('promise consumed');
// })



// new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("Async task 2");
//         resolve()
//     },1000)
// }).then(()=>{
//     console.log('end')
// })


// const promisefour = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log('start asy');
//         resolve({"name":"Atul","surname":"Kumar"})
//     },1000)
// })

// promisefour.then((user)=>{
//     console.log(user);
// })



// const promisesix = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         let error = true;
//         if(!error){
//             resolve({"name":"Atul","surname":"Kumar"})
//         }else{
//             reject('Error : Something Went Worng')
//         }
//     },1000)
// });

// promisesix.then((user)=>{
//     console.log(user)
//     return user.surname
// }).then((username)=>{
//     console.log(username);
// }).catch((error)=>{
//     console.log(error);
// }).finally(()=>{
//     console.log("Promis is either resolved or rejected");
// })




// async function callValue(){

//     try {
//         const respo = await promisesix
//         console.log(respo)
//     } catch (error) {
//         console.log(error);
//     }
// }
// callValue()


// async function getApiValue(){
//     try {
//         const response = await fetch('https://api.github.com/users/hiteshchaudhary')
        
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E : ", error);
//     }
    
// }

// getApiValue()

fetch('https://api.github.com/users/hiteshchaudhary').then((res)=>{
    return res.json()
}).then((data)=>{
    console.log(data);
}).catch((error)=>{
    console.log(error)
})
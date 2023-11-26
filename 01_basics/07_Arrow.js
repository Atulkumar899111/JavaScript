//this only works in side the object 


let newValue = (num)=>{
    return num + 33;
}

let newValue1 = (num)=>(num + 33)

console.log(newValue(5));
console.log(newValue1(5));


const user = {
    username : "Atul",
    price : 23,
    welcomeMessage : function(){
            return `${this.username} welcome`
    }
}

console.log(user.welcomeMessage());


const user2 = {
    username : "Atul",
    price : 23,
    welcomeMessage :()=>(`${this.username} welcome`)
}

console.log(user2.welcomeMessage());





function print(){
  console.log(arguments);  
}

print(11,23,"dada");
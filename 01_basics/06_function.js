function welcomeUser(username = "sam"){
    if(!username){
        return "Please complete you profile";
    }
    return `welcome ${username}`;
}

console.log(welcomeUser("Atul"));
console.log(welcomeUser());


function getValue(value1, value2, ...num1){
    return num1;
}

console.log(getValue(23,34,32,23,34,45,7));

let user = {

    username : "Atul",
    prise : 123
}

function getobject(myobject){
    return `Hi ${myobject.username} your total ammount is ${myobject.prise}`;
}

console.log(getobject(user));



let newfun = function(num){
    return num + 1;
}

console.log(newfun(3));
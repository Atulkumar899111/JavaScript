const accountId = 1232 
// the value is locked in case of "const"
// accountId = 5    //not allowed
let email = "atul@gmail.com"
var password = "A@123"
/*
Prefer not to use var
because of issue in block scope and functional scope
*/

email = "new@gmail.com"

password = "test@12"

console.table([accountId,email,password])

console.log(`
    With Unique ID: ${accountId}
    and his email is: ${email}
    and uses the password: ${password}
`);
let fullname = null
fullname = prompt("Enter your name")
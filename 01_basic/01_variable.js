const accountId = 144553
let accountEmail = "email@gmail.com"
var accountPassword ="12345"
accountCity = "Lahore"
let accountState;

// accountId = 2 // not allowed
accountEmail = "2nd@gmail.com"
accountPassword = "1255"
accountCity = "Islambad"
// console.log(accountId);

/*
Prefer not to use var
becasus of issue in block scope an functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity,accountState])
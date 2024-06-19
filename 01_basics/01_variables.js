const accountId = 144553
let accountEmail = "aditya@google.com"
var accountPassword = "12345"
accountCity = "jaipur"
let accountState;
// accountId = 2 //not allowed
accountEmail = "hc@hc.com"
accountPassword = "21212"
accountCity = "Bengaluru"

/*
prefer not to use var because of issue in block scope and functional scope
*/
console.log(accountId);
console.table([accountEmail,accountPassword,accountCity,accountState]);
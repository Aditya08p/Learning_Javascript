let myDate = new Date()
// console.log('date :                 ' + myDate);
// console.log('string :               ' + myDate.toString());
// console.log('DateString :           ' + myDate.toDateString());
// console.log('ISOString :            ' + myDate.toISOString());
// console.log('JSON :                 ' + myDate.toJSON());
// console.log('LocaleDateString :     ' + myDate.toLocaleDateString());
// console.log('UTCString :            ' + myDate.toUTCString());
// console.log('GetTimezoneOffset :    ' + myDate.getTimezoneOffset());
// console.log('LocaleString :         ' + myDate.toLocaleString());
// console.log('LocaleTimeString :     ' + myDate.toLocaleTimeString());
// console.log('TimeString :           ' + myDate.toTimeString());

// console.log(typeof myDate);
// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23 , 5, 3)
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth());
// console.log(newDate.getDay());

// console.log(`${newDate.getDay()} and the time ${newDate.getTime()}`);

newDate.toLocaleString('default',{
    weekday: "long",
    
})


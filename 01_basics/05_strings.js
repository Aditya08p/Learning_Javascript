const name = "aditya";
const repoCount = 50;
// console.log(name + repoCount + "value"); // not prefered way, old ❌
//  console.log(`hello my name is ${name} and my repo count is ${repoCount}`); // prefered way, modern ✅

 const gameName = new String('aditya-hc')
//  console.log(gameName[0]);
//  console.log(gameName.__proto__);

//  console.log(gameName.length);
//  console.log(gameName.toUpperCase());
//  console.log(gameName.charAt(5));
//  console.log(gameName.indexOf('t'));

const newString =gameName.substring(0,4) // cant gie negative values
// console.log(newString);

const anotherString = gameName.slice(-8,4) // can give negative values
// console.log(anotherString);

const newStringOne = "    aditya     "
// console.log(newStringOne);
// console.log(newStringOne.trim());
const url = "https://aditya.com/adtiya%20chaudhary"

// console.log(url.replace('%20','-'));

// console.log(url.includes('hello'));

console.log(gameName.split('-'));

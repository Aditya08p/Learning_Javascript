const myArr = [0, 1, 2, 3, 4, 5,]
const myHeros =["ironman", "hulk", "captain marvel"]
const myArr2 = new Array(0,1,2,3,4,5,6,7,8,9,10);
// console.log(myArr2[8]);

// array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()
// myArr.unshift(9) // adds elements in the start
// myArr.shift() // removes element from the start
// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));
const newArr = myArr.join() // conerts array to string as well
// console.log(myArr);
// console.log(newArr);

// slice , splice

console.log("A ", myArr);

const myn1 = myArr.slice(1,3);

console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1,3);
console.log("C ", myArr);
console.log(myn2);
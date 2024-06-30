const marvel = ["thor", "spiderman", "hulk"];
const dc = ["superman", "batman", "wonderwoman"];
// console.log(marvel);

// marvel.push(dc);
// console.log(marvel[3][0]);

// marvel.concat(dc) //  value is not stored in orig arr, rather returns a new modified array
// console.log(marvel.concat(dc));


const allNH = [...marvel, ...dc] // spread operator ...
// console.log(allNH);

//  push vs concat vs spread
// concat does not modify original array like push does, but also these can only use one values at a time
// spread operate is able to concatanate mulitple ararys together

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_arr = another_array.flat(Infinity);
// console.log(real_arr);

// console.log(Array.isArray("Aditya"))
// console.log(Array.from("Aditya"))
// console.log(Array.from({name: "aditya"})) // returns an empty array if can not convert into array


let score1=100;
let score2=200;
let score3=300;
console.log(Array.of(score1,score2,score3));
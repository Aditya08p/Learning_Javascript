// for

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        // console.log("5 is best number");
    }
    // console.log(element);

}


// for (let i = 1; i <= 5; i++) {
//     console.log(`outer loop: ${i}`);
//     for (let j = 1; j <= 5; j++) {
//         // console.log(`inner loop: ${j} and outer loop: ${i}`);
//         console.log(i , '*' , j , '=' , i*j);
        
//     }    
// }
let myArray = ["flash", "batman", "superman"]
// console.log(myArray.length);

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);   
}

// break and continue

for (let index = 1; index <= 20; index++) {
    if (index==5) {
        console.log("detected 5");
        // break;
        continue;
    }
    console.log(`value of i is : ${index}`);
      
}
const coding = ["js","cpp","java","python","ruby"]

// coding.forEach( function (item) {
//     console.log(item);
// } )

// coding.forEach( (list)=>{
//     console.log(list);
// } )

// function printMe(item){
//     console.log(item);    
// }

// coding.forEach( printMe )

// coding.forEach( (item, index, arr)=>{
//     console.log(item,index,arr);
// } )

const myCoding = [
    {
        languageName: "javascript",
        languageFilename: "js"
    },
    {
        languageName: "java",
        languageFilename: "java"
    },
    {
        languageName: "python",
        languageFilename: "py"
    }
]

myCoding.forEach( (item) => {
    console.log(item.languageName);
});
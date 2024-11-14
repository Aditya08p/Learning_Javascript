const coding= ["js","ruby", "c++", "java", "python"]

// const values= coding.forEach((item)=> {
//    console.log(item);
//     return item
// })
// console.log(values);


const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNums.filter((num) => {
//     return num > 4
// })

// const newNums = []
// myNums.forEach( (num) => {
//     if(num > 4){
//         newNums.push(num)
//     }
// })

// console.log(newNums);

const books = [
    {title: 'Book One', genre: 'Fiction', publish:'1989',edition:'2004'},
    {title: 'Book Two', genre: 'Non-Fiction', publish:'1999',edition:'2024'},
    {title: 'Book Three', genre: 'History', publish:'1987',edition:'2014'},
    {title: 'Book Four', genre: 'Science', publish:'1983',edition:'2010'},
    {title: 'Book Five', genre: 'Classical', publish:'1996',edition:'2011'},
    {title: 'Book Six', genre: 'Fiction', publish:'1983',edition:'2008'},
    {title: 'Book Seven', genre: 'History', publish:'1984',edition:'2004'},
    {title: 'Book Eight', genre: 'Non-Fiction', publish:'1974',edition:'2007'},
    {title: 'Book Nine', genre: 'Fiction', publish:'1995',edition:'2001'},
];

let userBooks = books.filter( (bk) => bk.genre ==='History' )
userBooks = books.filter( (bk) => {
    return bk.publish >= 1990 && bk.genre==='Fiction';
})

console.log(userBooks);

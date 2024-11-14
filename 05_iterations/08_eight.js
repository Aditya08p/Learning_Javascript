const myNums = [1,2,3]
// const myNums = ["one","two","three","four"]

// const myTotal = myNums.reduce( function(acc,currval ) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0 )

// const myTotal = myNums.reduce( (acc,currval) => acc + currval ,0 )
// let myTotal=0;
// myNums.forEach( (item) => myTotal+=item )
// console.log(myTotal);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "cpp course",
        price: 999
    },
    {
        itemName: "data science course",
        price: 12999
    },
    {
        itemName: "ml course",
        price: 7999
    },
    {
        itemName: "app dev course",
        price: 14999
    },
]

const totalPrice= shoppingCart.reduce( (acc,item) => acc+item.price, 8.79 )
console.log(totalPrice);

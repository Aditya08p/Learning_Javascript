// const tinderUser = new Object() // singletone object
const tinderUser = {} // non - singletone object

tinderUser.id = "123abc"
tinderUser.name = "sam"
tinderUser.isLoggedIn = false
// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "aditya",
            lastname: "patil"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"c", 4:"d"}
const obj4 = {5:"e", 6:"f"}

// const obj3 = { obj1, obj2 } // incorrect way
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2, ...obj4}

// console.log(obj3);

const users = [
    {
        id: 1,
        email: "a@gmail.com"
    },
    {
        id: 2,
        email: "b@gmail.com"
    },
    {
        id: 3,
        email: "c@gmail.com"
    },
]
users[0].email
// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty('isLoggedI'));

//
const course = {
    courseName: "JS in Hindi",
    price: "999",
    courseInstructor: "aditya"
}

// course.courseInstructor

const {courseInstructor : instructor} = course

// console.log(courseInstructor);
console.log(instructor);


// {
//     "name": "hitesh",
//     "courseName": "js in ihndi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]
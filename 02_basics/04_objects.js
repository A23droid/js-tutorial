const user = Object()
user.id = "123abc";
user.name = "Sam";
user.isLoggedIn = false

const regularUser = {
    email: "sone@gmail.com",
    fullname: {
        userfullname : {
            firstname: "aditya",
            lastname: "pillai"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2 :"b", 3: "c"}
const obj2 = {4: "d", 5: "e", 6: "f"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2) // (target, source)

const obj3 = {...obj1, ...obj2} // ... => Spread Opr
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
    {
        id: 4,
        email: "d@gmail.com"
    },
    {
        id: 5,
        email: "e@gmail.com"
    }
]

// console.log(user);
// console.log(Object.keys(user)); // returns an array of keys
// console.log(Object.values(user)); // returns an array of values
// console.log(Object.entries(user)); // 2d arr => [key, val] type element 
// console.log(user.hasOwnProperty('isLoggedIn')); // returns bool

const course = {
    courseName: "JS",
    price: 999,
    courseInstructor: "aditya"
}

// course.courseInstructor // course[courseInstructor]

const {courseInstructor: instructor} = course // object destructure
console.log(instructor);

//const , let and var

const { password } = require("pg/lib/defaults");

// function count(a, b, c) {
//   const sum = a + b + c;
//     // console.log(sum);
//     return sum;
// }

// const ans = count(4, 7, 8);
// console.log(ans);
// const result = (a, b, c) => {
//   const sum = a + b + c;
//   return sum;
// };
// console.log(result)
// console.log(result(1, 2, 3));

// const arr = [1, 4, 5, 6];

// for (let i = 0; i < arr.length; i++){
//     console.log(arr[i]);
// }

// const num = 7;
// if (num % 2 == 0) {
//     console.log("Number is even")
// }
// else {
//     console.log("Number is odd")
// }

// const lotteryNumber = "8";
// if (lotteryNumber === 8) {
//     console.log("you win lottery")
// }
// else {
//     console.log("you lose lottery")
// }

// == means only value checkk
// ==== value and type check

// let a = 6;
// while (a > 0) {
//     a--;
//     console.log(a)
// }
// const arr = [1, 2, 3, 4, 5]
// const arr = [1, "anurag", true, 2.5];

//key: pair value
const obj = {
    name: "Dipikesh",
    age: 23,
    address: "Gaya",
    height: "5 7",
    isMarried: false,
    favFoods: ["dhosa", "pizzas"],
    relations: {
        father: {
            name: "Dinesh",
            age: 54,
            address:"Gaya"
        },
        nephew: {
            name: "chiku",
            age: 2,
            address:"Madhubani"
        }
       
    }
}
// console.log(obj.relations.father.age)

// const arr = [2, 3, 4, 5];
// arr.forEach()

const products = [
  { id: 1, product_name: "Soap", price: 20 },
  { id: 2, product_name: "Milt", price: 20 },
  { id: 3, product_name: "FOAM", price: 20 },
  { id: 4, product_name: "Pillow", price: 20 },
];

products.forEach(v => {
    console.log(v.product_name)
})

const req = {
    // body: {
        // email: "dipikesh.singh",
        // password:"password"
    // }
}
console.log(req.body.email)
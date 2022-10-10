//  1  let const 
const myName = 'Akib Rayhan';
let year = 2022;

const todos = {
    userId: 1,
    id: 1,
    title: "delectus aut autem",
    completed: false,
};

// 2 templete string 

const sentence = `
 Hey my name is: ${myName}
 And I wish this ${year}.I am a wev developer.
 My Id is : ${todos.userId}.
 My Designation: ${todos.title}
`;
// console.log(sentence);

// 3.1 Arrow Function 1 parameter

const divisibleBy5 = number => number / 2;
// console.log(divisibleBy5(10));

// 3.2 Arrow function 2 parameter

const addTwoParameterMultiply = (num1, num2) => {
    const number1 = num1 + 2;
    const number2 = num2 + 2;
    return number1 * number2;
};

// console.log(addTwoParameterMultiply(2,2));

// 3.3 Arrow function 3 parameter

const threeParameterMultiply = (num1, num2, num3 = 1) => num1 * num2 * num3;
// console.log(threeParameterMultiply(5, 5, 5));

// 4 Using Map 
/* অনেকগুলা সংখ্যার একটা array হবে। তারপর তোমার কাজ হবে array এর উপরে map ইউজ করে। প্রত্যেকটা উপাদানকে ৫ দিয়ে গুন্ করে গুনফল আরেকটা array হিসেবে রাখবে। পুরা কাজটা এক লাইনে হবে।  */

const array = [1, 2, 3, 4, 5, 6];
const newArray = array.map(arr => arr * 5);
// console.log(newArray);

/* ৬. [ চ্যালেঞ্জিং। গুগলে সার্চ দিয়ে বের করো ] অনেকগুলা সংখ্যার একটা array থেকে শুধু বিজোড় সংখ্যা বের করে নিয়ে আসার জন্য filter ইউজ করো */

const numbers = [2, 5, 7, 8, 10, 13, 16];
const oddNumbers = numbers.filter(number => number % 2 === 1);
console.log(oddNumbers);

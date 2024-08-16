// alert("hello world")

// console.log("hello fomr console")
// assigning a variable//

//  var name = "loyus"
//  var lastName = "maharjan"
//  counter = 0

//  camel case
// firstNAme = 10;
// pascal case
// FirsName = 11;
//  snake case
// first_name = 1;
// kebab case
// first-name-last-name;
// UPPER_SNAKE_CASE
// alert(firstNAme)

// addition

// console.log(1+2)
// console.log(100*2)
// console.log(100/2)
// console.log(2 ** 5)
// console.log(103 % 5)
// increment_variable = 10;
// console.log(++increment_variable)
// console.log(increment_variable--)

// first_var = 10
// secong_var = 20
// console.log(first_var==secong_var)
// console.log(0 == false)
// console.log(10 <= 2)

// logical operator

// var object = {
//     name : "loyus",
//     lastname : "maharjan",
//     phone : 123123123
// }
// console.log(object.phone)

// array_num = [ 1000, 200,30000]
// console.log(array_num[2])

// array_string = ["apple" , "mango" , "banana" , 12323,123123 ]
// console.log(array_string)

// function sum(a, b){
//     return a*b
// }
// console.log(sum(10,10))
// today = new Date()
// console.log(today)

// console.log(typeof true)
// console.log(typeof "name")
// console.log(typeof 123123)
// console.log(typeof false)
// console.log(typeof 'true')
// // console.log(today)
// console.log(typeof Array)

// console.log(typeof object)

// console.log(Math.PI)
// console.log(Math.round(10.2))
// console.log(Math.floor(4.5))
// console.log(Math.ceil(4.5))

// console.log(Math.min(10,20,30,50,60))
// console.log(Math.max(10,20,30,50,60))
// console.log(Math.random())

///IF conditoon
// var temp = 10;
// if (temp < 30 || temp >= 15){
//     alert("nince one")

// }
// var temp = 45;
// if (temp >= 30){
//     alert("very danger temp")

// }
//  var temp = 20;

//  if(temp  == 20) {
//     alert("odd one")
//  } else  if(temp == 30){
//     alert("nice one");
//  } else{
//     alert("random")
//  }
//// write code to display grade of the student
// A grade for 80% and above
// B grade for 60% and above
// C grade for 40% and above
// F grade for others

// let grade = prompt("Please enter your %")
// if(grade >= 80){
//     console.log("grade A")
// } else if ( grade >= 60 ){
//     console.log("grade B")
// }else if (grade >= 40){
//     console.log
//        ( "grade C")

// } else{console.log("Fail grade")}

// grade = prompt("grade ");
// switch(grade){
//     case "A":
//         alert("you got dist");
//         break;
//     case"B":
//          alert("you giot first");
//         break;
//     case"c":
//         alert("you failed");
//         break;
//     default:
//         alert("not graded")
// }
//////////Important////////////
// var ternary = 10;
// var tempValue = 100;
// tempValue = ternary == 10 ? ternary : 100;
// console.log(ternary)
// imp//////

// try{
//     let variable = 10
// } catch(error){
//     console.log(error)
// }finally{
//     console.log("finally")
// }
// console.log("after");
///loops///
// for (i=0; i < 10 ; i++){
//     console.log(i)
// }
// i = 0
// while(i < 10 || i < 100) {
//     console.log(i)
//     i++;
// }
// i = 10;
// do{
//     console.log("hello world");
//     i++;
// } while(i < 10)
// var object = {
//     name : "loyus",
//     Phone : 213213123,
//     lastname : "maharjan",
// };
// for (let key in object){
//     console.log(object[key])
// }
// var array = [1,2,3,4,"banana"]
//  for (let item of array){
//     console.log(item)
//  }

// let num = Number("123");
// console.log(num)

// stringVariable = "hello funny world";
// let sliced = stringVariable.slice(2)
// console.log(sliced)
// let subStiring = stringVariable.substring(2, 11)
// console.log(subStiring)

//7//
// function countVowel(str) {
// const count = str.match(/[aeiou]/gi).length;
// return count;
// }
// const string = prompt('Enter a string: ');
// const result = countVowel(string);
// console.log(result);
// diff
// let trim = "helloooowwwww"
// console.log(trim.split(""))
// let array = [1,2,3,4,5]
// array.slice(2,3,6,7,8)
// console.log(array)``

// Home Work////

// Display reverse string
// let userInput = prompt("please enter your name")
// const str = "hellow World this is a reverse one"
// const newStr = str.split("")
// console.log(newStr.reverse().join(""))
// ///Sum of array elements
// const result = [13 + 24 + 35]
// console.log(result)
// //palindromes
// let palindrome = function(word){
//     let length =  word.length;
//     let start = word.substring(0 , Math.floor(length / 2))
//     let end = word.substring(length - Math.floor(length / 2))
//     let flip = end.split("").reverse().join()
//     return (start == end)
// }
// console.log(palindrome('dad'))
// console.log(palindrome('window'))
// console.log(palindrome('radar'))
//Pring all factors

//1//
// let inputString = prompt("Enter a string")
// let reversedString = inputString.split('').reverse().join("")
// console.log("reverse String of the input is" , reversedString)

//2//
// let number = [1,2,3,4,5]
// let sum = 0;
// for(let i = 0; i < number.length; i++){
//     sum += number[i]
// }
// console.log("sum of the following", sum)

//3//
// let inputString =  prompt("give me a word")
// let normalString = inputString.toLowerCase();
// let reverseString = normalString.split('').reverse('').join('')

// if(normalString == reverseString){
//     console.log("palinnnndskfkjhajkfhjksdf")
// }
// else{
//     console.log("not a pallindrome")
// }

//4//
// let givenNumber = prompt("Enter a number")
// let factors = []
// for ( let i = 1; i<= givenNumber; i++){
//     if(givenNumber % i === 0){
//         factors.push(i)

//     }
// }
// console.log(factors)

//5//

// let number = [100,200,250,50,10];
// let largest = number[0]
// for(let i = 1; i < number.length ; i++){
//     if(number[i] > largest){
//         largest = number[i]
//     }
// }
// console.log(largest)

//6//

// var celcius = 0
// var far = celcius * 9/5 + 32
// console.log(far);

// program to count the number of vowels in a string

// let inputString = prompt("Give me a word");
// let normalString = inputString.toLowerCase();
// let vowels = "aeiou";
// let vowelsCount = 0;
// for (let i = 0; i < normalString.length; i++)
//      {
//   if (vowels.includes(normalString[i])) {
//     vowelsCount++;

//   }
// }
// console.log(vowelsCount);

//remove duplicate number
// let array= [1, 2, 2, 3, 4, 5, 6, 6, 7, 7, 7, 9];
// let array2 = array.slice([2],[5])
// // let array2 = array.splice([2],[5])
// let uniqueArray = [...new Set(array)];
// console.log(uniqueArray);

// factorial of a number

// let number = prompt("Give me a number");
// let factorial = 1;
// for (let i = 1; i <= number; i++) {
//   factorial *= i;
// }
// console.log(factorial);

//count string

// let str = "myworld world world";
// let chatactertoCount = "l";
// let count = 0;
// for (let i = 0; i <= str.length; i++) {
//   if (str[i] === chatactertoCount) {
//     count++;
//   }
// }
// console.log(count);

// number = 1;
// isPrime = true;

// for (i = 2; i < number; i++) {
//   if (number % i == 0) {
//     isPrime = false;
//   }
// }
// if (isPrime) {
//   console.log("prime number");
// } else console.log("not a prime number");


///////ES6//////
// let name = "loyus"
// let age = 27
// var string = `${name } is ${age} old`
// console.log(string);

// function sum (a,b) {
//     /////code execution///
//     return a + b
//     // console.log(`sum is ${a +b}`);
// }
// let sumtab = sum(100 , 300)
// console.log(sumtab);

// let person = prompt("enter data")
// function celTofar (celcius){
// let far = celcius * 9/5 + 32
// return far
// }

// console.log(celTofar(person));

// let sum = function(a,b){
//  return a + b
// }
// d = sum(a,b)

// let multi = (a,b) => {return a * b}
// console.log(multi(3,5));

// (function() {
//     console.log("object");
// })();
////create a function create a prime check
// let person = prompt("enter number")
// const dataPrime = (number)=>{
//     for (i = 2; i < number; i++) {
//         if (number % i == 0) {
//           return false;
//         }
//       }
//       return true;
      
// }
// if (dataPrime(person)) {
//     console.log("prime number");
//   } else console.log("not a prime number")


//  const evenNumber = (number) => {
//     for (i = 2 ; i = number ; i++){
//         if (i == 0)
//     }
//  }




// const animal = {
//     firstName : "lion",
//     lastName : "baag",
//     age :  "20",
//     legs : "4",
//     fullName : function (){
//         return this.firstName + " " + this.lastName 
//     },
  
// }
// const { firstName , lastName, age } = animal
// console.log(firstName,  lastName,  age);
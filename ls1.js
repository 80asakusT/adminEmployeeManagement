// 1
// input = Number(prompt("Nhập số: "));
// let status = input % 2 === 0 ? "even" : "odd";
// alert(status);

// 2
// age = Number(prompt("Nhập tuổi: "));
// if (age < 18){
//     console.log("Trẻ em");
// }
// else if (age < 50){
//     console.log("Thanh niên");
// }
// else console.log("Người già");

// 3
// let p = 2*Math.PI*5;
// let a = Math.PI*5*5;
// console.log(`Chu vi hình tròn: ${p}`);
// console.log(`Diện tích hình tròn: ${a}`);

// 4
// month = Number(prompt("Nhập tháng: "));
// if (month < 1 || month > 12) console.log("Tháng không hợp lệ");
// else if (month >= 1 && month <= 3) console.log("Xuân");
// else if (month >= 4 && month <= 6) console.log("Hè");
// else if (month >= 7 && month <= 9) console.log("Thu");
// else if (month >= 10 && month <= 12) console.log("Đông");

// 5
// input = Number(prompt("Nhập số: "));
// let status = input > 0 ? "positive" : input < 0 ? "negative" : "zero";
// console.log(status);

// 6
// input = Number(prompt("Nhập số: "));
// let res = 1;
// while (input > 0){
//     res *= input;
//     input -= 1;
// }
// console.log(res);

// 7 !!!
// input = Number(prompt("Nhập số: "));
// let count = 0;
// for (let i = 1; i <= input; i++){
//     if (input % i == 0) count += 1;
// }
// if (count == 2) console.log(`${input} là số nguyên tố`);
// else console.log(`${input} không là số nguyên tố`);


// 8
// input = Number(prompt("Nhập số: "));
// num1 = 1;
// num2 = 1;
// sum = 0;
// for (let i = 2; i < input; i++){
//     sum = num1 + num2;
//     num1 = num2;
//     num2 = sum;
// }
// console.log(sum);


// 9
// let a = Number(prompt("Nhập cạnh a: "));
// let b = Number(prompt("Nhập cạnh b: "));
// let c = Number(prompt("Nhập cạnh c: "));

// if (a+ b > c && a + c > b && b + c > a){
//     if (a == b && a == c) console.log("Tam giác đều");
//     else if ((a == b || a == c || b == c) && (a*a + b*b == c*c || b*b + c*c == a*a || a*a + c*c == b*b)) console.log("Tam giác vuông cân");
//     else if (a == b || a == c || b == c) console.log("Tam giác cân");
//     else if (a*a + b*b == c*c || b*b + c*c == a*a || a*a + c*c == b*b) console.log("Tam giác vuông");
//     else console.log("Tam giác thường");
// }
// else console.log("Không phải tam giác");


//Loop hw

// 10
// for (let i = 1; i <= 100; i++){
//     if (i % 3 == 0 && i % 5 == 0) console.log(i);
// }

// 11
// let s = 0;
// let n = Number(prompt("Nhập số n: "));
// for (let i = 1; i <= n; i++){
//     s += i;
// }
// console.log(s);

// 12
// for (let i = 1; i <= 9; i++){
//     console.log(`Bảng cửu chương ${i}:`); 
//     for (let j = 1; j <= 10; j++){
//         console.log(`${i} x ${j} = ${i*j}`);
//     }
// }

// 13
// let s = String(prompt("Nhập chuỗi s:"));
// let rev = "";
// for(let i = s.length - 1; i >= 0; i--){
//     rev += s[i];
// }
// console.log(rev);

// 14
// let n = Number(prompt("Nhập số n:"));
// let rev = 0;
// let temp = n;
// while (temp > 0){
//     rev = rev*10 + temp % 10;
//     temp = Math.floor(temp/10);
// }
// console.log(rev);
// if (n == rev) console.log(`${n} là số đối xứng`);
// else console.log(`${n} không là số đối xứng`);

// 19
// let n = Number(prompt("Nhập số n:"));
// let sum = 0;
// let temp = n;
// while (temp > 0) {
//   sum += (temp % 10);
//   temp = Math.floor(temp / 10);
// }
// console.log(sum);

// 23
// let a = Number(prompt("Nhập chiều cao a:"));
// let b = Number(prompt("Nhập chiều dài b:"));
// let s = "";
// for (let i = 1; i <= a; i++) {
//   for (let j = 1; j <= b; j++) {
//     s += "*";
//   }
//   s += "\n"; 
// }
// console.log(s);

// Function

// 4
// function revString(s){
//     let rev = "";
//     for(let i = s.length - 1; i >= 0; i--){
//         rev += s[i];
//     }
//     return rev
// }
// let s = String(prompt("Nhập chuỗi s:"));
// console.log(revString(s));

// 6
// function gcd(a, b){
//     if (b == 0)
//         return a;
//     return gcd(b, a % b);
// }
// function lcm(a, b){
//     return(a/gcd(a, b)*b);
// }
// let a = Number(prompt("Nhập số a:"));
// let b = Number(prompt("Nhập số b:"));
// console.log(lcm(a, b));



// 7
// function symmetricString(s){
//     let rev = "";
//     for (let i = s.length - 1; i >= 0; i--) {
//       rev += s[i];
//     }
//     return(rev == s);
// }
// let s = String(prompt("Nhập chuỗi s:"));
// console.log(symmetricString(s));

// 10
// function perfectNum(n){
//     let s = 1;
//     for (let i = 2; i <= Math.sqrt(n); i++){
//         if (n % i == 0) s += i + n/i;
//     }
//     return (s == n);
// }
// let n = Number(prompt("Nhập số n"));
// console.log(perfectNum(n));

// Array

// 1
// function findMax(arr) {
//   let max = arr[0];
//   let max2 = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > max){ 
//         max2 = max; 
//         max = arr[i];
//     }
//     else if (arr[i] < max && arr[i] > max2) max2 = arr[i];
//   }
//   return max2;
// }
// console.log(findMax([1, 5, 3, 9, 2]));

// 2
// function removeDuplicates(arr) {
//     res = [];
//     for (let i = 0; i < arr.length; i++){
//         if(!res.includes(arr[i])) res.push(arr[i]);
//     }
//     return res;
// }
// console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));

// 3
// function sortArray(arr){
//     for(let i = 0; i <= arr.length - 2; i++){
//         for(let j =  i + 1; j <= arr.length - 1; j++){
//             if (arr[i] > arr[j]){
//                 let temp = arr[i];
//                 arr[i] = arr[j];
//                 arr[j] = temp;
//             }
//         }
//     }
//     return arr;
// }
// console.log(sortArray([3, 1, 4, 1, 5, 9]));

// Object
// 1
// function objectToArray(obj) {
//     let arr = [];
//     for (let key in obj) {
//         arr.push([key, obj[key]]);
//     }
//     return arr;
// }
// console.log(objectToArray({ name: "Alice", age: 30 }));


// Method

// const words = ["apple", "banana", "cherry"];
// let lengths = words.map((word) =>
// {   
//     return word.length;
// });
// console.log(lengths);

// const fruits = [
//   "apple",
//   "banana",
//   "orange",
//   "apple",
//   "orange",
//   "banana",
//   "apple",
// ];

// let fruitCount = fruits.reduce((obj, fruit) =>{
//     if(obj[fruit]) obj[fruit] += 1;
//     else obj[fruit] = 1;
//     return obj;
// }, {})

// console.log(fruitCount);

// const words = ["apple", "banana", "cherry", "date", "fig", "grape"];
// let longWords = words.filter((word) => word.length > 5);
// console.log(longWords);



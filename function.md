# **Bài giảng: Cấu trúc lặp và Function trong JavaScript**

## **1. Cấu trúc lặp trong JavaScript**

### **1.1 Vòng lặp for**

- Dùng khi biết trước số lần lặp.

```javascript
for (let i = 0; i < 5; i++) {
  console.log("Lần lặp: ", i);
}
```

### **1.2 Vòng lặp while**

- Dùng khi không biết trước số lần lặp.

```javascript
let i = 0;
while (i < 5) {
  console.log("Giá trị i: ", i);
  i++;
}
```

### **1.3 Vòng lặp do...while**

- Chạy ít nhất một lần.

```javascript
let j = 0;
do {
  console.log("Lần lặp: ", j);
  j++;
} while (j < 5);
```

### **1.4 Bài tập:**

Bài 1: Tính tổng các số từ 1 đến n
Viết một hàm sumTo(n) nhận vào một số n và trả về tổng các số từ 1 đến n bằng cách sử dụng vòng lặp.
Bài 2: In bảng cửu chương
Viết một hàm multiplicationTable(n) nhận vào số n và in ra bảng cửu chương của 1 => n

---

## **2. Function trong JavaScript**

### **2.1 Ý nghĩa của function**

- Function giúp chia nhỏ bài toán lớn thành nhiều phần nhỏ, giúp tái sử dụng code và dễ duy trì.
- Function nhận vào tham số (parameters), thực hiện các tính toán và trả về kết quả (return value).

### **2.2 Khai báo function**

```javascript
function sayHello() {
  console.log("Hello, world!");
}
sayHello();
```

### **2.3 Arrow function**

```javascript
const greet = () => console.log("Hello, world!");
greet();
```

### **2.4 Quy tắc đặt tên function**

- Tên rõ nghĩa, dễ hiểu.
- Dùng camelCase.
- Diễn tả chức năng function thực hiện.

### **2.5 Function với parameter**

```javascript
function sum(a, b) {
  return a + b;
}
console.log(sum(3, 5)); // Output: 8
```

### **2.6 Function với giá trị trả về (return)**

```javascript
function square(num) {
  return num * num;
}
console.log(square(4)); // Output: 16
```

### **2.7 Tư duy phân rã hàm chức năng**

- Chia function lớn thành nhiều function nhỏ dễ quản lý.

### **2.8 Import và Export module**

- **export.js:**

```javascript
export function add(a, b) {
  return a + b;
}
```

- **import.js:**

```javascript
import { add } from "./export.js";
console.log(add(2, 3)); // Output: 5
```

### **2.9 Bài tập nâng cao**

1. **Viết function tính giai thừa**

   - Input: `5`
   - Output: `120`

2. **Kiểm tra số nguyên tố**

   - Input: `7`
   - Output: `true`

3. **Viết function tính dãy Fibonacci**

   - Input: `6`
   - Output: `[0, 1, 1, 2, 3, 5]`

4. **Viết function đảo ngược chuỗi**

   - Input: `"hello"`
   - Output: `"olleh"`

5. **Xây dựng module tính toán (cộng, trừ, nhân, chia)**

   - Input: `add(4, 5)`
   - Output: `9`

6. **Tìm bội chung nhỏ nhất (LCM) của hai số**

   - Input: `(4, 6)`
   - Output: `12`

7. **Viết function kiểm tra chuỗi đối xứng (palindrome)**

   - Input: `"racecar"`
   - Output: `true`

8. **Viết function tìm số Fibonacci thứ n**

   - Input: `7`
   - Output: `13`

9. **Viết function sắp xếp mảng theo thứ tự giảm dần**

   - Input: `[5, 2, 8, 1, 3]`
   - Output: `[8, 5, 3, 2, 1]`

10. **Viết function kiểm tra số hoàn hảo**

- Input: `28`
- Output: `true`

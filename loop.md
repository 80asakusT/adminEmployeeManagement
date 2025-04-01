# **Bài giảng: Vòng lặp trong JavaScript**

## 1. **Vòng lặp for**

- Dùng khi số lần lặp biết trước.
- Cú pháp:
  ```javascript
  for (khởi_tạo; điều_kiện; bước_lặp) {
    // Khối lệnh
  }
  ```
- Ví dụ:
  ```javascript
  for (let i = 0; i < 5; i++) {
    console.log("Lần lặp: ", i);
  }
  ```

## 2. **Vòng lặp while**

- Dùng khi số lần lặp không xác định trước.
- Cú pháp:
  ```javascript
  while (điều_kiện) {
    // Khối lệnh
  }
  ```
- Ví dụ:
  ```javascript
  let i = 0;
  while (i < 5) {
    console.log("Giá trị i: ", i);
    i++;
  }
  ```

## 3. **Vòng lặp do-while**

- Luôn chạy ít nhất một lần, dù điều kiện sai ngay từ đầu.
- Cú pháp:
  ```javascript
  do {
    // Khối lệnh
  } while (điều_kiện);
  ```
- Ví dụ:
  ```javascript
  let j = 0;
  do {
    console.log("Lần lặp: ", j);
    j++;
  } while (j < 5);
  ```

## 4. **Duyệt mảng với forEach**

- Dùng để duyệt từng phần tử của mảng.
- Ví dụ:
  ```javascript
  let numbers = [1, 2, 3, 4, 5];
  numbers.forEach((num) => console.log(num));
  ```

## 5. **Duyệt mảng với for...of**

- Dùng để duyệt từng phần tử trong iterable (mảng, chuỗi,...).
- Ví dụ:
  ```javascript
  for (let num of numbers) {
    console.log(num);
  }
  ```

## 6. **Duyệt object với for...in**

- Dùng để duyệt các thuộc tính của object.
- Ví dụ:
  ```javascript
  let person = { name: "Alice", age: 25, city: "New York" };
  for (let key in person) {
    console.log(`${key}: ${person[key]}`);
  }
  ```

## 7. **Tối ưu hóa vòng lặp**

- Hạn chế lặp lại tính toán trong điều kiện vòng lặp.
- Ví dụ tối ưu:
  ```javascript
  let arr = [1, 2, 3, 4, 5];
  let length = arr.length;
  for (let i = 0; i < length; i++) {
    console.log(arr[i]);
  }
  ```

---

# **Bài tập nâng cao**

10. **In các số từ 1 đến 100 chia hết cho 3 và 5.**
11. **Tính tổng các số từ 1 đến n bằng vòng lặp.**
12. **In bảng cửu chương từ 1 đến 9.**
13. **Viết chương trình đảo ngược chuỗi.**
14. **Kiểm tra số đối xứng (palindrome).**
15. **In dãy Fibonacci tới số n.**
16. **Tính giai thừa của một số.**
17. **Kiểm tra số nguyên tố trong một khoảng.**
18. **Vẽ tam giác sao đầy.**
19. **Tính tổng các chữ số của một số.**
20. **Tìm số nguyên tố lớn nhất trong một mảng.**
21. **Kiểm tra một số có phải là số hoàn hảo hay không.**
22. **Viết chương trình kiểm tra một số có phải là số Armstrong không.**
23. **Dùng vòng lặp lồng nhau để in hình chữ nhật bằng ký tự '\*'.**
24. **Viết chương trình tìm bội số chung nhỏ nhất của hai số.**

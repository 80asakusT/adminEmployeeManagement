# **Bài giảng: Biến và các kiểu dữ liệu cơ bản**

## 1. **Khái niệm về biến, khai báo biến và quy tắc đặt tên**

- **Biến** là một khu vực trong bộ nhớ được dùng để lưu trữ dữ liệu.
- **Khai báo biến** trong JavaScript:
  ```javascript
  let age = 25;
  const name = "John";
  var city = "Hanoi";
  ```
- **Quy tắc đặt tên biến:**
  - Chỉ dùng chữ, số, “$”, “\_”.
  - Phải bắt đầu bằng chữ, “$” hoặc “\_”.
  - Phân biệt chữ hoa, chữ thường.
  - Không dùng từ khoá.

## 2. **So sánh let và const**

| Thuộc tính               | let                     | const                      |
| ------------------------ | ----------------------- | -------------------------- |
| Khả năng gán lại giá trị | Có thể thay đổi giá trị | Không thể thay đổi giá trị |
| Phạm vi hoạt động        | Block scope             | Block scope                |

## 3. **Kiểu dữ liệu cơ bản**

- **Number:**
  ```javascript
  let x = 10;
  ```
- **String:**
  ```javascript
  let message = "Hello World";
  ```
- **Boolean:**
  ```javascript
  let isAvailable = true;
  ```
- **In ra màn hình với console.log:**
  ```javascript
  console.log(x);
  console.log(typeof x);
  ```

## 4. **Xử lý toán cơ bản**

```javascript
let a = 10,
  b = 5;
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
```

## 5. **Sử dụng module Math**

```javascript
console.log(Math.max(10, 20, 30));
console.log(Math.min(10, 20, 30));
console.log(Math.round(4.7));
console.log(Math.sqrt(16));
```

## 6. **Format String**

```javascript
let name = "Alice";
let age = 25;
console.log(`Tên: ${name}, Tuổi: ${age}`);
```

---

# **Bài giảng: Cấu trúc điều kiện**

## 1. **Giá trị Boolean**

```javascript
let isLoggedIn = true;
console.log(isLoggedIn);
```

## 2. **Toán tử so sánh và logic**

```javascript
console.log(5 > 3);
console.log(5 < 3);
console.log(true && false);
console.log(true || false);
console.log(!true);
```

## 3. **Cấu trúc if-else**

```javascript
let score = 80;
if (score >= 90) {
  console.log("Xuất sắc");
} else if (score >= 70) {
  console.log("Khá");
} else {
  console.log("Trung bình");
}
```

## 4. **Cấu trúc switch-case**

```javascript
let day = 2;
switch (day) {
  case 1:
    console.log("Thứ hai");
    break;
  case 2:
    console.log("Thứ ba");
    break;
  default:
    console.log("Không xác định");
}
```

## 5. **Toán tử 3 ngôi**

```javascript
let age = 18;
let status = age >= 18 ? "Người lớn" : "Trẻ em";
console.log(status);
```

---

# **Bài tập**

1. **Viết chương trình kiểm tra số lẻ hay chẵn.**
2. **Viết chương trình nhập tuổi và xác định nhóm tuổi (“Trẻ em”, “Thanh niên”, “Người già”).**
3. **Tính chu vi và diện tích hình tròn, biết r = 5.**
4. **Nhập tháng (1-12) và in ra mùa tương ứng (“Xuân, Hè, Thu, Đông”).**
5. **Sử dụng toán tử 3 ngôi để kiểm tra số dương hay âm.**
6. **Tính giai thừa của một số n.**
7. **Viết chương trình kiểm tra số nguyên tố.**
8. **Tính Fibonacci của số n.**
9. **Viết chương trình kiểm tra tam giác hợp lệ.**

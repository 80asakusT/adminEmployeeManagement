# **Giáo Trình Chi Tiết: Các Phương Thức Xử Lý Mảng trong JavaScript**

## **1. Phương Thức map()**

### **1.1. Khái niệm**

- map() là một phương thức của mảng, dùng để tạo ra một mảng mới bằng cách áp dụng một hàm lên từng phần tử của mảng gốc.
- Mảng gốc không bị thay đổi.

### **1.2. Cú pháp**

```js
let newArray = arr.map(function callback(currentValue, index, array) {
  // Trả về giá trị mới cho phần tử hiện tại
}, thisArg);
```

- currentValue: Giá trị của phần tử hiện tại.
- index: Chỉ số của phần tử hiện tại.
- array: Mảng gốc.
- thisArg (tùy chọn): Giá trị của từ khóa this bên trong hàm callback.

### **1.3. Ví dụ minh họa**

```js
const numbers = [1, 2, 3, 4];
const doubled = numbers.map((num) => num * 2);
console.log(doubled); // [2, 4, 6, 8]
```

### **1.4. Ứng dụng thực tế**

1. Chuyển đổi mảng số thành mảng chuỗi:

- Bài tập: Cho một mảng các số nguyên, hãy chuyển đổi mỗi số thành chuỗi có dạng "Số: x", với x là giá trị số nguyên tương ứng.

* Đầu vào:

```js
const numbers = [1, 2, 3, 4, 5];
```

- Đầu ra:

```js
console.log(stringNumbers);
// Kết quả: ["Số: 1", "Số: 2", "Số: 3", "Số: 4", "Số: 5"]
```

2. Cho một mảng các chuỗi, hãy tạo một mảng mới chứa độ dài của từng chuỗi tương ứng.​

- Đầu vào:

```js
const words = ["apple", "banana", "cherry"];
```

- Đầu ra:

```js
console.log(lengths);
// Kết quả: [5, 6, 6]
```

## **2. Phương Thức forEach()**

### **2.1. Khái niệm**

- forEach() cho phép duyệt qua từng phần tử của mảng và thực hiện một hàm nào đó. Nó không trả về giá trị (luôn trả về undefined).

### **2.2. Cú pháp**

```js
arr.forEach(function callback(currentValue, index, array) {
  // Xử lý phần tử hiện tại
}, thisArg);
```

- Các tham số của callback tương tự như trong map().

### **2.3. Ví dụ minh họa**

```js
const fruits = ["apple", "banana", "cherry"];
fruits.forEach((fruit, index) => {
  console.log(`${index}: ${fruit}`);
});
```

- Lưu ý: Sử dụng forEach() khi bạn muốn thực hiện thao tác phụ (side effect) như in ra màn hình, ghi log,…

## **3. Phương Thức reduce()**

### **3.1. Khái niệm**

reduce() được dùng để “rút gọn” mảng thành một giá trị duy nhất bằng cách thực hiện một hàm cộng dồn trên các phần tử của mảng.

### **3.2. Cú pháp**

```js
let result = arr.reduce(function callback(
  accumulator,
  currentValue,
  index,
  array
) {
  // Trả về giá trị tích lũy mới
},
initialValue);
```

- accumulator: Giá trị tích lũy, là kết quả của lần gọi callback trước đó.
- currentValue: Giá trị của phần tử hiện tại.
- initialValue (tùy chọn): Giá trị khởi tạo của accumulator.

### **3.3. Ví dụ minh họa**

```js
const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum); // 10
```

### **3.4. Ứng dụng thực tế**

Tính tổng, tính tích, chuyển đổi mảng thành đối tượng,…

1. Tính tổng giá trị của các phần tử trong mảng:

- Bài tập: Cho một mảng các số nguyên, hãy sử dụng phương thức reduce để tính tổng tất cả các phần tử trong mảng.

* Đầu vào:

```js
const numbers = [10, 20, 30, 40, 50];
```

- Đầu ra:

```js
console.log(total);
// Kết quả: 150
```

2. Tạo một đối tượng đếm số lần xuất hiện của từng phần tử trong mảng:​

- Bài tập: Cho một mảng các chuỗi, hãy sử dụng phương thức reduce để tạo một đối tượng mà mỗi khóa là một phần tử trong mảng và giá trị tương ứng là số lần phần tử đó xuất hiện.

* Đầu vào:

```js
const fruits = [
  "apple",
  "banana",
  "orange",
  "apple",
  "orange",
  "banana",
  "apple",
];
```

- Đầu ra:

```js
console.log(fruitCount);
// Kết quả: { apple: 3, banana: 2, orange: 2 }
```

## **4. Phương Thức filter()**

### **4.1. Khái niệm**

- filter() dùng để tạo ra một mảng mới chứa các phần tử của mảng gốc mà thỏa mãn điều kiện xác định trong hàm callback.

### **4.2. Cú pháp**

```js
let newArray = arr.filter(function callback(currentValue, index, array) {
  // Trả về true (bao gồm phần tử) hoặc false (bỏ qua phần tử)
}, thisArg);
```

### **4.3. Ví dụ minh họa**

```js
const numbers = [1, 2, 3, 4, 5, 6];
const evens = numbers.filter((num) => num % 2 === 0);
console.log(evens); // [2, 4, 6]
```

### **4.4. Ứng dụng thực tế**

Lọc dữ liệu: tìm các phần tử thỏa điều kiện (ví dụ: lọc các sản phẩm có giá trên 1000,…)

1. Lọc ra các số chẵn từ mảng số nguyên:​

- Bài tập: Cho một mảng các số nguyên, hãy sử dụng phương thức filter để tạo một mảng mới chỉ chứa các số chẵn từ mảng ban đầu.

* Đầu vào:

```js
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
```

- Đầu ra:

```js
console.log(evenNumbers);
// Kết quả: [2, 4, 6, 8, 10]
```

2. Lọc ra các chuỗi có độ dài lớn hơn 5 ký tự:

- Bài tập: Cho một mảng các chuỗi, hãy sử dụng phương thức filter để tạo một mảng mới chỉ chứa các chuỗi có độ dài lớn hơn 5 ký tự.

* Đầu vào:

```js
const words = ["apple", "banana", "cherry", "date", "fig", "grape"];
```

- Đầu ra:

```js
console.log(longWords);
// Kết quả: ["banana", "cherry"]
```

## **5. Các Phương Thức find(), findIndex(), findLast(), và findLastIndex()**

### **5.1. find()**

#### Khái niệm:

- Trả về phần tử đầu tiên trong mảng thỏa mãn điều kiện của hàm callback. Nếu không tìm thấy, trả về undefined.

#### Cú pháp:

```js
let element = arr.find(function callback(currentValue, index, array) {
  // Trả về true khi tìm thấy phần tử cần tìm
}, thisArg);
```

#### Ví dụ:

```js
const numbers = [5, 12, 8, 130, 44];
const found = numbers.find((num) => num > 10);
console.log(found); // 12
```

### **5.2. findIndex()**

#### Khái niệm:

Tương tự find(), nhưng trả về chỉ số của phần tử đầu tiên thỏa mãn điều kiện. Nếu không tìm thấy, trả về -1.

#### Ví dụ:

```js
const index = numbers.findIndex((num) => num > 10);
console.log(index); // 1 (vì 12 nằm ở vị trí index 1)
```

### **5.3. findLast() và findLastIndex() (Có trong ES2022 trở đi)**

#### Khái niệm:

- findLast(): Trả về phần tử cuối cùng thỏa mãn điều kiện của hàm callback.
- findLastIndex(): Trả về chỉ số của phần tử cuối cùng thỏa mãn điều kiện. Nếu không tìm thấy, trả về -1.

#### Ví dụ:

```js
const numbers = [5, 12, 8, 130, 44, 12];
const lastFound = numbers.findLast((num) => num > 10);
console.log(lastFound); // 12 (phần tử cuối cùng > 10 là 12)
const lastIndex = numbers.findLastIndex((num) => num > 10);
console.log(lastIndex); // 5 (chỉ số của phần tử cuối cùng > 10)
```

#### Lưu ý: Các phương thức findLast và findLastIndex chỉ khả dụng ở các môi trường hỗ trợ ES2022 trở đi. Trước đó, có thể áp dụng các biện pháp khác như đảo ngược mảng rồi dùng find().

## **6. Phương Thức splice()**

### **6.1. Khái niệm**

- splice() được dùng để thay đổi nội dung của mảng bằng cách xóa, thêm, hoặc thay thế các phần tử tại vị trí xác định.
- Phương thức này sẽ thay đổi mảng gốc và trả về mảng chứa các phần tử đã bị xóa.

### **6.2. Cú pháp**

```js
array.splice(start);
array.splice(start, deleteCount);
array.splice(start, deleteCount, item1);
array.splice(start, deleteCount, item1, item2);
array.splice(start, deleteCount, item1, item2, /* …, */ itemN);
```

- start: Vị trí bắt đầu thay đổi.
- deleteCount (tùy chọn): Số lượng phần tử cần xóa. Nếu không chỉ định, các phần tử từ start đến hết mảng sẽ bị xóa.
- item1, item2, ... (tùy chọn): Các phần tử sẽ được thêm vào bắt đầu từ vị trí start.

### **6.3. Ví dụ minh họa**

- Xóa phần tử:

```js
let arr = [1, 2, 3, 4, 5];
let removed = arr.splice(2, 1); // Tại vị trí index 2, xóa 1 phần tử
console.log(arr); // [1, 2, 4, 5]
console.log(removed); // [3]
```

- Thêm phần tử:

```js
let arr2 = [1, 2, 3, 4, 5];
arr2.splice(2, 0, 99); // Tại vị trí index 2, không xóa phần tử nào, chỉ thêm 99
console.log(arr2); // [1, 2, 99, 3, 4, 5]
```

- Thay thế phần tử:

```js
let arr3 = [1, 2, 3, 4, 5];
arr3.splice(2, 2, 100, 101); // Tại vị trí index 2, xóa 2 phần tử và thêm 100, 101
console.log(arr3); // [1, 2, 100, 101, 5]
```

## **7. Tổng Kết và Ứng Dụng**

### **7.1. Khi nào sử dụng từng phương thức:**

- **map()**: Khi bạn cần tạo ra một mảng mới từ mảng gốc bằng cách biến đổi từng phần tử.

- **forEach()**: Khi bạn cần duyệt qua mảng để thực hiện các thao tác (side effects) mà không cần tạo mảng mới.

- **reduce()**: Khi bạn cần “rút gọn” mảng thành một giá trị duy nhất (tổng, tích, hoặc chuyển đổi cấu trúc dữ liệu).

- **filter()**: Khi bạn cần lấy ra một tập hợp các phần tử thỏa mãn điều kiện cụ thể.

- **find() & findIndex()**: Khi bạn cần tìm phần tử hoặc chỉ số của phần tử đầu tiên thỏa điều kiện.

- **findLast() & findLastIndex()**: Khi bạn cần tìm phần tử hoặc chỉ số của phần tử cuối cùng thỏa điều kiện (ES2022+).

- **splice()**: Khi bạn cần thay đổi nội dung của mảng (thêm, xóa, hoặc thay thế phần tử) tại vị trí xác định.

### **7.2. Bài tập thực hành**

**Bài Tập: Hệ Thống Quản Lý Nhân Viên**

- Mô tả bài toán:
  Giả sử bạn có một danh sách các nhân viên dưới dạng mảng các đối tượng, mỗi đối tượng chứa các thông tin:
- **id**: Mã nhân viên (số nguyên)
- **name**: Tên nhân viên (chuỗi)
- **age**: Tuổi (số nguyên)
- **salary**: Mức lương (số thực)
- **department**: Phòng ban (chuỗi)

#### Ví dụ:

```js
const employees = [
  { id: 1, name: "Alice", age: 28, salary: 3000, department: "IT" },
  { id: 2, name: "Bob", age: 34, salary: 3500, department: "HR" },
  { id: 3, name: "Charlie", age: 25, salary: 2800, department: "IT" },
  { id: 4, name: "David", age: 45, salary: 4000, department: "Finance" },
  { id: 5, name: "Eve", age: 30, salary: 3200, department: "IT" },
];
```

## Yêu cầu bài tập:

1. Tính tổng lương của tất cả các nhân viên
   Sử dụng reduce() để tính tổng mức lương trong danh sách.

2. Tìm nhân viên có mức lương cao nhất và thấp nhất

3. Tạo danh sách tên nhân viên thuộc phòng "IT"
   Sử dụng filter() để lọc các nhân viên thuộc phòng "IT" và sau đó dùng map() để tạo ra mảng chỉ chứa tên của họ.

4. Tìm vị trí (index) của nhân viên có id bằng 3
   Sử dụng findIndex() để xác định vị trí của nhân viên với id === 3.

5. Cập nhật mức lương của nhân viên có id bằng 2
   Tăng mức lương của nhân viên này lên 10%. Bạn có thể dùng findIndex() để tìm vị trí và sau đó dùng splice() để thay thế đối tượng đó trong mảng.

6. Xóa nhân viên có id bằng 5
   Sử dụng findIndex() và splice() để xóa nhân viên có id === 5 khỏi danh sách.

7. Sắp xếp danh sách nhân viên theo mức lương tăng dần
   Dùng phương thức sort() (không thuộc danh sách các phương thức đã học, nhưng rất hữu ích) để sắp xếp mảng theo thuộc tính salary.

8. In thông tin tất cả nhân viên ra màn hình
   Sử dụng forEach() để duyệt mảng và in từng đối tượng ra console theo định dạng:
   "ID: [id], Name: [name], Age: [age], Salary: [salary], Department: [department]".

```js
// --- Sử dụng các hàm trên với mảng employees ban đầu ---
const employees = [
  { id: 1, name: "Alice", age: 28, salary: 3000, department: "IT" },
  { id: 2, name: "Bob", age: 34, salary: 3500, department: "HR" },
  { id: 3, name: "Charlie", age: 25, salary: 2800, department: "IT" },
  { id: 4, name: "David", age: 45, salary: 4000, department: "Finance" },
  { id: 5, name: "Eve", age: 30, salary: 3200, department: "IT" },
];

console.log("Tổng lương:", calculateTotalSalary(employees));
console.log(
  "Nhân viên có lương cao nhất:",
  findHighestSalaryEmployee(employees)
);
console.log(
  "Nhân viên có lương thấp nhất:",
  findLowestSalaryEmployee(employees)
);
console.log("Tên nhân viên phòng IT:", getITEmployeeNames(employees));
console.log("Vị trí nhân viên có id=3:", getEmployeeIndexById(employees, 3));

updateSalaryById(employees, 2, 10);
console.log("Cập nhật lương nhân viên id=2:");
printEmployees(employees);

removeEmployeeById(employees, 5);
console.log("Sau khi xóa nhân viên id=5:");
printEmployees(employees);

console.log("Sắp xếp nhân viên theo lương tăng dần:");
sortEmployeesBySalary(employees);
printEmployees(employees);
```

## Phần Nâng Cao:

1. Thống kê theo phòng ban (Group By Department)
   Yêu cầu:
   Tạo một hàm nhóm các nhân viên theo phòng ban và tính tổng mức lương, số lượng nhân viên và mức lương trung bình cho từng phòng ban.

```js
const departmentStats = groupByDepartment(employees);
console.log(departmentStats);
```

Gợi ý:
Sử dụng các phương thức như reduce() để gom nhóm dữ liệu và tính toán.

2. Tìm nhân viên theo nhiều tiêu chí
   Yêu cầu:
   Viết hàm findEmployees(criteria) cho phép tìm nhân viên theo một hoặc nhiều tiêu chí (ví dụ: phòng ban, tuổi, mức lương dưới/ trên một ngưỡng).

```js
// Ví dụ: Tìm nhân viên phòng "IT" có tuổi từ 25 trở lên và lương dưới 3500
const advancedSearch = findEmployees(employees, {
  department: "IT",
  age: { min: 25 },
  salary: { max: 3500 },
});
console.log(advancedSearch);
```

Gợi ý:
Sử dụng filter() để duyệt mảng và kiểm tra từng tiêu chí trong đối tượng criteria.

3. Xử lý cập nhật dữ liệu theo chuỗi các thao tác (Chaining Operations)
   Yêu cầu:
   Giả sử bạn có một chuỗi các thao tác cần thực hiện: tăng lương cho nhân viên phòng "HR" lên 15%, sau đó lọc ra những nhân viên có lương trên 3500, và cuối cùng sắp xếp theo tuổi giảm dần.

```js
const processed = processEmployees(employees);
console.log(processed);
```

Gợi ý:
Kết hợp các phương thức map(), filter() và sort() theo chuỗi.

4. Tìm và thay thế nhân viên dựa trên ID (Advanced Update)
   Yêu cầu:
   Viết hàm updateEmployee(employees, id, updateCallback) nhận vào mảng nhân viên, ID của nhân viên cần cập nhật, và một callback trả về đối tượng cập nhật. Hàm sẽ tìm nhân viên theo ID và thay thế đối tượng đó bằng kết quả của callback.

```js
// Ví dụ: Cập nhật nhân viên có id = 3, tăng tuổi lên 1 năm và tăng lương thêm 200
const updatedEmployees = updateEmployee(employees, 3, (emp) => ({
  ...emp,
  age: emp.age + 1,
  salary: emp.salary + 200,
}));
console.log(updatedEmployees);
```

Gợi ý:
Dùng findIndex() kết hợp với splice() để thay thế đối tượng.

5. Xóa tất cả nhân viên thỏa điều kiện (Bulk Delete)
   Yêu cầu:
   Viết hàm removeEmployees(employees, criteria) xóa tất cả nhân viên thỏa mãn một tiêu chí cho trước (ví dụ: xóa tất cả nhân viên của phòng "Finance").

```js
// Ví dụ: Xóa tất cả nhân viên phòng "Finance"
const remainingEmployees = removeEmployees(employees, {
  department: "Finance",
});
console.log(remainingEmployees);
```

Gợi ý:
Sử dụng filter() để giữ lại các nhân viên không thỏa tiêu chí.

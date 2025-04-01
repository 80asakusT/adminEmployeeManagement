# **Giáo Trình Mảng (Array) và Đối Tượng (Object) trong JavaScript**

## **1. Mảng (Array) trong JavaScript**

### **1.1. Khái niệm và cách tạo mảng**

- Mảng là một cấu trúc dữ liệu dùng để lưu trữ danh sách các giá trị theo chỉ mục.
- Cách tạo mảng:

```js
// Cách 1: Sử dụng dấu ngoặc vuông []
let arr1 = [1, 2, 3, 4, 5];

// Cách 2: Sử dụng constructor Array
let arr2 = new Array(1, 2, 3, 4, 5);
```

### **1.2. Truy cập và sửa đổi phần tử trong mảng**

```js
let numbers = [10, 20, 30, 40];
console.log(numbers[0]); // 10

// Sửa giá trị
numbers[1] = 25;
console.log(numbers); // [10, 25, 30, 40]
```

### **1.3. Các phương thức cơ bản của mảng**

- **`push()`**: Thêm phần tử vào cuối mảng.
- **`pop()`**: Xóa phần tử cuối mảng.
- **`shift()`**: Xóa phần tử đầu mảng.
- **`unshift()`**: Thêm phần tử vào đầu mảng.

```js
let arr = [1, 2, 3];
arr.push(4); // [1, 2, 3, 4]
arr.pop(); // [1, 2, 3]
arr.shift(); // [2, 3]
arr.unshift(0); // [0, 2, 3]
```

### **1.4. Vòng lặp qua mảng và thao tác với mảng**

```js
let numbers = [10, 20, 30, 40];
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

// Sử dụng forEach
numbers.forEach((num) => console.log(num));
```

## **2. Đối tượng (Object) trong JavaScript**

### **2.1. Tạo và sử dụng đối tượng**

```js
let person = {
  name: "John",
  age: 25,
  city: "New York",
};
```

### **2.2. Cách truy cập và xử lý dữ liệu trong Object**

```js
console.log(person.name); // John
console.log(person["age"]); // 25
```

### **2.3. Thêm, sửa, xóa dữ liệu trong Object**

```js
// Thêm thuộc tính
person.gender = "Male";

// Sửa thuộc tính
person.age = 30;

// Xóa thuộc tính
delete person.city;
```

### **2.4. Ứng dụng của Object trong lập trình**

- Lưu trữ dữ liệu dạng key-value.
- Biểu diễn một đối tượng thực tế (người dùng, sản phẩm, v.v.).
- Truyền dữ liệu giữa các phần trong ứng dụng.

## **3. Bài tập nâng cao**

### **Bài tập về Mảng (Array)**

#### **Bài 1: Tìm phần tử lớn thứ 2 trong mảng**

Viết hàm `findMax(arr)` trả về phần tử lớn thứ 2 trong mảng.

```js
function findMax(arr) {
  // Viết code ở đây
}
console.log(findMax([1, 5, 3, 9, 2])); // Output: 5
```

#### **Bài 2: Loại bỏ phần tử trùng lặp trong mảng**

Viết hàm `removeDuplicates(arr)` trả về mảng không chứa phần tử trùng lặp.

```js
function removeDuplicates(arr) {
  // Viết code ở đây
}
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // Output: [1, 2, 3, 4, 5]
```

#### **Bài 3: Sắp xếp mảng theo thứ tự tăng dần**

Viết hàm `sortArray(arr)` sắp xếp mảng theo thứ tự tăng dần mà không dùng `sort()`.

```js
function sortArray(arr) {
  // Viết code ở đây
}
console.log(sortArray([3, 1, 4, 1, 5, 9])); // Output: [1, 1, 3, 4, 5, 9]
```

### **Bài tập về Đối tượng (Object)**

#### **Bài 1: Chuyển Object thành mảng key-value**

Viết hàm `objectToArray(obj)` chuyển Object thành mảng các cặp key-value.

```js
function objectToArray(obj) {
  // Viết code ở đây
}
console.log(objectToArray({ name: "Alice", age: 30 }));
// Output: [["name", "Alice"], ["age", 30]]
```

#### **Bài 2: Hợp nhất hai Object**

Viết hàm `mergeObjects(obj1, obj2)` hợp nhất hai Object, nếu trùng key thì lấy giá trị của obj2.

```js
function mergeObjects(obj1, obj2) {
  // Viết code ở đây
}
console.log(mergeObjects({ a: 1, b: 2 }, { b: 3, c: 4 }));
// Output: { a: 1, b: 3, c: 4 }
```

#### **Bài 3: Lọc thuộc tính theo danh sách cho trước**

Viết hàm `filterObject(obj, keys)` chỉ giữ lại các thuộc tính có trong danh sách `keys`.

```js
function filterObject(obj, keys) {
  // Viết code ở đây
}
console.log(
  filterObject({ name: "Alice", age: 30, city: "London" }, ["name", "city"])
);
// Output: { name: "Alice", city: "London" }
```

---

Đây là giáo trình chi tiết và các bài tập nâng cao về **Mảng (Array) và Đối tượng (Object)** trong JavaScript. Hãy thử làm các bài tập này và kiểm tra lại kết quả của bạn! 🚀

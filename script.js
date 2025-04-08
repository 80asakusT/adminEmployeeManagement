const employees = [
  { id: 1, name: "Alice", age: 28, salary: 3000, department: "IT" },
  { id: 2, name: "Bob", age: 34, salary: 3500, department: "HR" },
  { id: 3, name: "Charlie", age: 25, salary: 2800, department: "IT" },
  { id: 4, name: "David", age: 45, salary: 4000, department: "Finance" },
  { id: 5, name: "Eve", age: 30, salary: 3200, department: "IT" },
];
const tbody = document.querySelector("#listEmployees");

function renderEmployees(listEmployees) {
  tbody.innerHTML = "";
  listEmployees.forEach((employee) => {
    // const tr = document.createElement("tr");
    // tr.innerHTML = `
    //   <td>${employee.id}</td>
    //   <td>${employee.name}</td>
    //   <td>${employee.age}</td>
    //   <td>${employee.salary}</td>
    //   <td>${employee.department}</td>
    // `;
    // tbody.appendChild(tr);
    tbody.innerHTML += `
      <tr>
        <td>${employee.id}</td>
        <td>${employee.name}</td>
        <td>${employee.age}</td>
        <td>${employee.department}</td>
        <td>${employee.salary}</td>
        <td>
          <div
            style="width: 100%; display: flex; justify-content: center; cursor: pointer;"
          >
            <i class="fa-solid fa-pen"></i>
          </div>
        </td>
      </tr>
    `;
  });
}

renderEmployees(employees);

// Làm sao để lấy được giá trị của input Name => value

// Khi click nút Apply Filters => addEventListener("click", () => {})

const button = document.getElementById("applyFilters");
button.addEventListener("click", function () {
  renderEmployees(filterEmployees(employees));
});

// cần hàm filterEmployees(cần 1 danh sách nhân viên theo điều kiện đã lọc)

function filterEmployees(arr) {
  var employeeCriteria = { name: "", department: "", age: "", salary: "" };
  const temp = employeeCriteria;
  employeeCriteria.name = document.getElementById("filterName").value;
  employeeCriteria.department =
    departments.options[departments.selectedIndex].text;
  employeeCriteria.age = document.getElementById("filterAge").value;
  employeeCriteria.salary = document.getElementById("filterSalary").value;
  let filtered = arr.filter(
    (employee) =>
      employee.name.includes(employeeCriteria.name) &&
      (employee.department == employeeCriteria.department ||
        employeeCriteria.department == "All") &&
      (employee.age == employeeCriteria.age || employeeCriteria.age == "") &&
      (employee.salary == employeeCriteria.salary ||
        employeeCriteria.salary == "")
  );
  return filtered;
}

// Form add Employee
// B1: Lấy các value của input trong form
const formAddEmployee = document.querySelector("#addEmployeeForm");

let errName = document.querySelector("#errName");
let errAge = document.querySelector("#errAge");
let errDepartment = document.querySelector("#errDepartment");
let errSalary = document.querySelector("#errSalary");

function validate(name, age, department, salary) {
  if (name == "") errName.innerHTML = "Vui lòng điền tên";
  else errName.innerHTML = "";
  if (age < 18 || age > 60 || age == "")
    errAge.innerHTML = "Tuổi không hợp lệ";
  else errAge.innerHTML = "";
  if (department == "") errDepartment.innerHTML = "Vui lòng chọn phòng ban";
  else errDepartment.innerHTML = "";
  if (salary < 0 || salary == "")
    errSalary.innerHTML = "Lương không hợp lệ";
  else errSalary.innerHTML = "";
  return !(
    errName.innerText ||
    errAge.innerText ||
    errDepartment.innerText ||
    errSalary.innerText
  );
}

// B2: Validate các value: (các trường không được để trống, tuổi nằm trong khoảng > 0, < 60 or < 70, department trong danh sách department không All)
formAddEmployee.addEventListener("submit", function (event) {
  event.preventDefault();
  let nameAdd = document.getElementById("nameAdd");
  let ageAdd = document.getElementById("ageAdd");
  let departmentAdd = document.getElementById("departmentAdd");
  let salaryAdd = document.getElementById("salaryAdd");
  console.log(nameAdd, ageAdd, departmentAdd, salaryAdd);
  if (!validate(nameAdd.value, ageAdd.value, departmentAdd.value, salaryAdd.value)) return;
  employees.push({ id: employees.length+1, name: nameAdd.value, age: ageAdd.value, salary: salaryAdd.value, department: departmentAdd.value});
  formAddEmployee.reset();
  renderEmployees(employees);
});
// B3: Show lỗi ở dưới value không hợp lệ
// B4: Nếu không có lỗi => thêm nhân viên vào danh sách employees
// B5: Render lại danh sách nhân viên

// nameAdd.addEventListener("input", (e) => {
//   if (nameAdd == "") errName.innerHTML = "Vui lòng điền tên";
//   else errName.innerHTML = "";
// });

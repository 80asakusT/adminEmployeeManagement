// const employees = [
//   { id: 1, name: "Alice", age: 28, salary: 3000, department: "IT" },
//   { id: 2, name: "Bob", age: 34, salary: 3500, department: "HR" },
//   { id: 3, name: "Charlie", age: 25, salary: 2800, department: "IT" },
//   { id: 4, name: "David", age: 45, salary: 4000, department: "Finance" },
//   { id: 5, name: "Eve", age: 30, salary: 3200, department: "IT" },
// ];
// localStorage.setItem("employees", JSON.stringify(employees));
const employees = JSON.parse(localStorage.getItem("employees")) || [];
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
            onclick = "editEmployee(${employee.id})" style="width: 100%; display: flex; justify-content: center; cursor: pointer;" 
          >
            <i class="fa-solid fa-pen"></i>
          </div>
        </td>
        <td>
          <div
            id = "deleteButton" onclick = "pendingEmployee(${employee.id})" style="width: 100%; display: flex; justify-content: center; cursor: pointer;" 
          >
            <i class="fa-solid fa-trash-can"></i>
          </div>
        </td>
      </tr>
    `;
  });
}

renderEmployees(employees);




// Làm sao để lấy được giá trị của input Name => value

// Khi click nút Apply Filters => addEventListener("click", () => {})

// Filter employee

const filter = document.getElementById("applyFilters");
filter.addEventListener("click", () => { renderEmployees(filterEmployees(employees)); });

// cần hàm filterEmployees(cần 1 danh sách nhân viên theo điều kiện đã lọc)

function filterEmployees(arr) {
  var employeeCriteria = { name: "", department: "", age: "", salary: "" };
  const temp = employeeCriteria;
  employeeCriteria.name = document.getElementById("filterName").value;
  employeeCriteria.department = document.getElementById("filterDepartment").value;
  employeeCriteria.age = document.getElementById("filterAge").value;
  employeeCriteria.salary = document.getElementById("filterSalary").value;
  let filtered = arr.filter(
    (employee) =>
      employee.name.includes(employeeCriteria.name) &&
      (employee.department == employeeCriteria.department || employeeCriteria.department == "") &&
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
  if (age < 18 || age > 60 || age == "") errAge.innerHTML = "Tuổi không hợp lệ";
  else errAge.innerHTML = "";
  if (department == "") errDepartment.innerHTML = "Vui lòng chọn phòng ban";
  else errDepartment.innerHTML = "";
  if (salary < 0 || salary == "") errSalary.innerHTML = "Lương không hợp lệ";
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
  if (
    !validate(nameAdd.value, ageAdd.value, departmentAdd.value, salaryAdd.value)
  )
    return;
  employees.push({
    id: employees.length + 1,
    name: nameAdd.value,
    age: ageAdd.value,
    department: departmentAdd.value,
    salary: salaryAdd.value
  });

  // Noti
  Toastify({
    text: `Tạo nhân viên ${nameAdd.value} thành công`,
    duration: 3000,
    destination: "https://github.com/apvarun/toastify-js",
    newWindow: true,
    close: true,
    gravity: "bottom", // `top` or `bottom`
    position: "left", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: "linear-gradient(to right, #00b09b, #96c93d)",
    },
    onClick: function () {}, // Callback after click
  }).showToast();

  localStorage.setItem("employees", JSON.stringify(employees));
  formAddEmployee.reset();
  renderEmployees(employees);
});
// B3: Show lỗi ở dưới value không hợp lệ
// B4: Nếu không có lỗi => thêm nhân viên vào danh sách employees
// B5: Render lại danh sách nhân viên

nameAdd.addEventListener("input", (e) => {
  if (nameAdd.value == "") errName.innerHTML = "Vui lòng điền tên";
  else errName.innerHTML = "";
});
ageAdd.addEventListener("input", (e) => {
  if (ageAdd.value == "") errAge.innerHTML = "Vui lòng điền tuổi";
  else errAge.innerHTML = "";
});
departmentAdd.addEventListener("input", (e) => {
  if (departmentAdd.value == "") errDepartment.innerHTML = "Vui lòng chọn phòng ban";
  else errDepartment.innerHTML = "";
});
salaryAdd.addEventListener("input", (e) => {
  if (salaryAdd.value == "") errSalary.innerHTML = "Vui lòng điền lương";
  else errSalary.innerHTML = "";
});

// Form Update Employee

function editEmployee(idEmp){
  console.log(idEmp);
  emp = employees.find((employee) => employee.id == idEmp);

  console.log(emp);

  document.getElementById("idEmp").value = emp.id;

  let currentName = document.getElementById("updateName");
  let currentAge = document.getElementById("updateAge");
  let currentDepartment = document.getElementById("updateDepartment")
  let currentSalary = document.getElementById("updateSalary");
  
  currentName.value = emp.name;
  currentAge.value = emp.age;
  currentDepartment.value = emp.department;
  currentSalary.value = emp.salary;
}

const updateEmployeeForm = document.getElementById("updateEmployeeForm");
updateEmployeeForm.addEventListener("submit", function(event){
  event.preventDefault();
})

const update = document.getElementById("update");
update.addEventListener("click", () => {

  let updatedEmp = employees.find(
    (employee) => employee.id == document.getElementById("idEmp").value
  );

  console.log(updatedEmp);  
  
  updatedEmp.name = document.getElementById("updateName").value;
  updatedEmp.age = document.getElementById("updateAge").value;
  updatedEmp.department = document.getElementById("updateDepartment").value;
  updatedEmp.salary = document.getElementById("updateSalary").value;

  localStorage.setItem("employees", JSON.stringify(employees));
  
  // Noti
  Toastify({
    text: "Cập nhật thông tin của nhân viên thành công",
    duration: 3000,
    destination: "https://github.com/apvarun/toastify-js",
    newWindow: true,
    close: true,
    gravity: "top", // `top` or `bottom`
    position: "center", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: "linear-gradient(to right, #00b09b, #96c93d)",
    },
    onClick: function () {}, // Callback after click
  }).showToast();

  window.scrollTo({
    top: 200,
    behavior: "smooth", // hoặc "auto"
  });

  updateEmployeeForm.reset();
  renderEmployees(employees);
})


// Delete

function pendingEmployee(idEmp){
  emp = employees.find((employee) => employee.id == idEmp);
  var delText = document.getElementById("delText");
  delText.innerHTML = `Bạn có chắc chắn muốn xóa nhân viên tên <b>${emp.name}</b>, ID: <b>${idEmp}</b>`;
  modal.style.display = "flex";
  let choice = document.getElementById("choice");
  choice.innerHTML = `
    <button id = "cancel" onclick = "closeModal()">Hủy</button>
    <button id = "confirm" onclick = "deleteEmployee(${idEmp})">Xác nhận</button>
  `;
}

function deleteEmployee(idEmp){
  employees.splice(idEmp - 1, 1);
  console.log(employees);
  localStorage.setItem("employees", JSON.stringify(employees));
  modal.style.display = "none";
  renderEmployees(employees);


  Toastify({
    text: "Xóa nhân viên thành công",
    duration: 3000,
    destination: "https://github.com/apvarun/toastify-js",
    newWindow: true,
    close: true,
    gravity: "top", // `top` or `bottom`
    position: "center", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: "linear-gradient(to right, #00b09b, #96c93d)",
    },
    onClick: function () {}, // Callback after click
  }).showToast();
}

function closeModal(){
  console.log("test");
  modal.style.display = "none";
}

// Get the modal
var modal = document.getElementById("myModal");

var deleteButton = document.getElementById("deleteButton");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
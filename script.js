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

// cần hàm filterEmployess(cần 1 danh sách nhân viên theo điều kiện đã lọc)

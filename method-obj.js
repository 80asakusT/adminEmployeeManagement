const employees = [
  { id: 1, name: "Alice", age: 28, salary: 3000, department: "IT" },
  { id: 2, name: "Bob", age: 34, salary: 3500, department: "HR" },
  { id: 3, name: "Charlie", age: 25, salary: 2800, department: "IT" },
  { id: 4, name: "David", age: 45, salary: 4000, department: "Finance" },
  { id: 5, name: "Eve", age: 30, salary: 3200, department: "IT" },
];

// Advanced

// 1
// function groupByDepartment(arr) {
//   let groups = arr.reduce((dpm, employee) => {
//     if (dpm[employee.department]) dpm[employee.department].push(employee);
//     else dpm[employee.department] = [employee];
//     return dpm;
//   }, []);
//   console.log(groups);
//   let res = [];
//   for (let key in groups) {
//     let dpm = groups[key];
//     res.push(key);
//     let totalSalary = dpm.reduce((total, employee) => total + employee.salary, 0);
//     res.push(`Tổng mức lương: ${totalSalary}`);
//     let numEmp = dpm.length;
//     res.push(`Số thành viên: ${numEmp}`); 
//     let avgSalary = totalSalary / numEmp;
//     res.push(`Mức lương trung bình: ${avgSalary}`);
//     // console.log(`Tổng mức lương của phòng ban ${key} là: ${totalSalary}`);
//     // console.log(`Số thành viên của phòng ban ${key} là: ${numEmp}`);
//     // console.log(`Mức lương trung bình của phòng ban ${key} là: ${avgSalary}`);
//   }
//   return res;
// }

// const departmentStats = groupByDepartment(employees);
// console.log(departmentStats);

// 2
// function findEmployees(arr, criteria){
//   let res = arr;
//   for(let key in criteria){
//     res = res.filter((employee) => {
//       if (key == "age" || key == "salary"){
//         if(criteria[key].min) return employee[key] > criteria[key].min;
//         else if (criteria[key].max) return employee[key] < criteria[key].max;
//       }
//       else return employee[key] == criteria[key];
//     });
//   }
//   return res;
// }

// const advancedSearch = findEmployees(employees, {
//   department: "IT",
//   age: { min: 25 },
//   salary: { max: 3500 },
// });
// console.log(advancedSearch);

// 3
function processEmployees(arr){
  let newArr = arr.map((employee) => {
    if (employee.department == "HR") employee.salary += employee.salary*15/100;
    return employee;
  });
  let filtered = newArr.filter((employee) => employee.salary > 3500);
  return filtered.sort((employee1, employee2) => employee2.age - employee1.age);
}

const processed = processEmployees(employees);
console.log(processed);

// 4

function updateEmployee(arr, index, criteria){}

const updatedEmployees = updateEmployee(employees, 3, (emp) => ({
  ...emp,
  age: emp.age + 1,
  salary: emp.salary + 200,
}));
console.log(updatedEmployees);

// 5
function removeEmployees(arr, criteria){
  let res = arr;
  for(key in criteria){
    res = res.filter((employee) => employee[key] != criteria[key]);
  }
  return res;
}

// const remainingEmployees = removeEmployees(employees, {
//   department: "Finance",
// });
// console.log(remainingEmployees);



// // --- //



// // 1
// function calculateTotalSalary(arr){
//     return arr.reduce((sum, employee) => sum += employee.salary, 0);
// }

// // 2
// function findHighestSalaryEmployee(arr){
//     return arr.reduce((max, employee) => {
//         if(employee.salary > max) max = employee.salary;
//         return max;
//     }, 0);
// }

// function findLowestSalaryEmployee(arr){
//     return arr.reduce((min, employee) => {
//       if (employee.salary < min) min = employee.salary;
//       return min;
//     }, arr[0].salary);
// }

// // 3
// function getITEmployeeNames(arr){
//     return arr.filter((employee) => employee.department == "IT").map((employee) => employee.name);
//     // return IT.map((employee) => employee.name);
// }

// // 4
// function getEmployeeIndexById(arr, numID){
//     return arr.findIndex((employee) => employee.id == numID);
// }

// // 5
// function updateSalaryById(arr, numID, percent){
//     let updateIndex = arr.findIndex((employee) => employee.id == numID);
//     arr[updateIndex].salary += arr[updateIndex].salary*percent/100;
//     // arr.splice(updateIndex, 1, arr[updateIndex].salary += arr[updateIndex].salary*percent/100);
// }

// // 6
// function removeEmployeeById(arr, numID){
//     let removeIndex= arr.findIndex((employee) => employee.id == numID);
//     arr.splice(removeIndex, 1);
//     return arr;
// }

// // 7
// function sortEmployeesBySalary(arr){
//     return arr.sort((employee1, employee2) => employee1.salary - employee2.salary);
// }

// // 8
// function printEmployees(arr){
//     arr.forEach((employee) => console.log(`ID: ${employee.id}, Name: ${employee.name}, Age: ${employee.age}, Salary: ${employee.salary}, Department: ${employee.department}`));
// }

// // ---

// console.log("Tổng lương:", calculateTotalSalary(employees));

// console.log(
//   "Nhân viên có lương cao nhất:",
//   findHighestSalaryEmployee(employees)
// );

// console.log(
//   "Nhân viên có lương thấp nhất:",
//   findLowestSalaryEmployee(employees)
// );

// console.log("Tên nhân viên phòng IT:", getITEmployeeNames(employees));

// console.log("Vị trí nhân viên có id=3:", getEmployeeIndexById(employees, 3));

// updateSalaryById(employees, 2, 10);
// console.log("Cập nhật lương nhân viên id=2:");
// printEmployees(employees);

// removeEmployeeById(employees, 5);
// console.log("Sau khi xóa nhân viên id=5:");
// printEmployees(employees);

// console.log("Sắp xếp nhân viên theo lương tăng dần:");
// sortEmployeesBySalary(employees);
// printEmployees(employees);

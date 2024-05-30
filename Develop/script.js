// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');
let employeeInfo = [];

// Collect employee data
const collectEmployees = function() {
  // TODO: Get user input to create and return an array of employee objects
  const individual = {};
  let addEmployee = true;
  while (addEmployee){
    individual.firstName = prompt("Enter first name:");
    if (typeof individual.firstName !== 'string'){
      alert("You entered an incorrect name. Try again.");
    }
    individual.lastName = prompt("Enter last name:");
    if (typeof individual.lastName !== 'string'){
      alert("You entered an incorrect name. Try again.");
    }
    individual.salary = prompt("Enter salary:");
    if (isNaN(individual.salary)){
      individual.salary = 0;
    }
    employeeInfo.push(individual);
    let isAddEmployee = confirm("Do you want to add another employee?");
    if (!isAddEmployee){
      addEmployee = false;
    }
  }
  return employeeInfo;
};


// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // TODO: Calculate and display the average salary
  let sum;
  let avg;
  for (const person in employeesArray){
    sum += Number(person.salary);
  };
  avg = sum/(employeesArray.length - 1);
  console.log(`There are ${employeesArray.length} employees with an average
  salary of \$${avg}.`);
}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee
  let i = Math.floor(Math.random() * (employeesArray.length - 1));
  console.log(`Congratulations to ${employeesArray[i].firstName} ${employeesArray[i].lastName}!
  You have been selected to win a special prize. Please see HR for details.`);
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);

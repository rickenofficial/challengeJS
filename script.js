// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function() {
  // TODO: Get user input to create and return an array of employee objects
  const employees = [];

  let addEmployee = true;
  while (addEmployee) {
    const firstName = prompt("Enter first name:");
    const lastName = prompt("Enter last name:");
    let salary = prompt("Enter salary:");
    
    // making verification if salary its a number
    salary = isNaN(parseFloat(salary)) ? 0 : parseFloat(salary);
    
    // add first name, last name and salary
    employees.push({ firstName, lastName, salary });
    
    // ask to the user if he wants add another employee
    addEmployee = confirm("Do you want to add another employee?");
  }
  employees.sort(function(a, b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else if (a.lastName > b.lastName) {
      return 1;
    } else {
      return 0;
    }
  });

  return employees;
}

// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // TODO: Calculate and display the average salary
  const totalSalary = employeesArray.reduce((acc, employee) => acc + employee.salary, 0);
  
  // avergare calculation
  const averageSalary = totalSalary / employeesArray.length;

  // logs message at the console
  console.log(`The Average employee salary between our  ${employeesArray.length} employee(s):   $${averageSalary.toFixed(2)}`);
}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee
  const randomIndex = Math.floor(Math.random() * employeesArray.length);
  
  // this is for the random employee
  const randomEmployee = employeesArray[randomIndex];
  
  // shows the employee full name  
  console.log(`Congratulations to  ${randomEmployee.firstName} ${randomEmployee.lastName} our random drawing winner!!!`);
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

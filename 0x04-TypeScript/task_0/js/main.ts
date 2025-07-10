// 1. Define the Student interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// 2. Create two Student objects
const student1: Student = {
  firstName: "John",
  lastName: "Doe",
  age: 20,
  location: "Nairobi",
};

const student2: Student = {
  firstName: "Jane",
  lastName: "Smith",
  age: 22,
  location: "Mombasa",
};

// 3. Put the students in an array
const studentsList: Student[] = [student1, student2];

// 4. Create and render a table using Vanilla JS
const table = document.createElement("table");
table.border = "1";

// Optional: Add table headers
const headerRow = document.createElement("tr");
const nameHeader = document.createElement("th");
nameHeader.textContent = "First Name";
const locationHeader = document.createElement("th");
locationHeader.textContent = "Location";
headerRow.appendChild(nameHeader);
headerRow.appendChild(locationHeader);
table.appendChild(headerRow);

// 5. Populate table rows from studentsList
studentsList.forEach((student) => {
  const row = document.createElement("tr");

  const firstNameCell = document.createElement("td");
  firstNameCell.textContent = student.firstName;

  const locationCell = document.createElement("td");
  locationCell.textContent = student.location;

  row.appendChild(firstNameCell);
  row.appendChild(locationCell);
  table.appendChild(row);
});

// 6. Append the table to the document body
document.body.appendChild(table);

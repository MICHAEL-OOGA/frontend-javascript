// Define Teacher interface
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any; // Allows adding any other properties
}

// Define Directors interface extending Teacher
interface Directors extends Teacher {
  numberOfReports: number;
}

// Example Teacher object
const teacher1: Teacher = {
  firstName: "John",
  lastName: "Doe",
  fullTimeEmployee: true,
  location: "Nairobi",
  contract: false,
};

// Example Director object
const director1: Directors = {
  firstName: "Jane",
  lastName: "Smith",
  fullTimeEmployee: true,
  location: "Mombasa",
  numberOfReports: 10,
  contract: true,
};

console.log(teacher1);
console.log(director1);

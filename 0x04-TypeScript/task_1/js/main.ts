// ==================== Teacher Interface ====================

interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any; // Allows adding other properties
}

// Example Teacher object
const teacher1: Teacher = {
  firstName: "John",
  lastName: "Doe",
  fullTimeEmployee: true,
  location: "Nairobi",
  contract: false, //
};

// ==================== Directors Interface ====================

interface Directors extends Teacher {
  numberOfReports: number;
}

// Example Directors object
const director1: Directors = {
  firstName: "Jane",
  lastName: "Smith",
  fullTimeEmployee: true,
  location: "Mombasa",
  numberOfReports: 5,
  contract: true,
};

// ==================== printTeacher Function ====================

// Function interface
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Function implementation
const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

// Example
console.log(teacher1);
console.log(director1);
console.log(printTeacher("John", "Doe")); // Output: J. Doe

// ==================== Interfaces ====================

interface StudentConstructor {
  new (firstName: string, lastName: string): StudentClass;
}

interface StudentClass {
  workOnHomework(): string;
  displayName(): string;
}

// ==================== Class Implementation ====================

class Student implements StudentClass {
  constructor(private firstName: string, private lastName: string) {}

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}

// ==================== Example Use ====================

const student1 = new Student("John", "Doe");

console.log(student1.displayName()); // John
console.log(student1.workOnHomework()); // Currently working

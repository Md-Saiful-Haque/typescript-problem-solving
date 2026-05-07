// Problem 1

const filterEvenNumbers = (numbers: number[]): number[] => {
    return numbers.filter((num) => num % 2 === 0);
}



// Problem 2

const reverseString = (isReverse: string): string => {
    return isReverse.split("").reverse().join("")
}



// Problem 3

type StringOrNumber = string | number;

const checkType = (value: StringOrNumber) => {
    if (typeof value === 'string') {
        return "String";
    }
    else if (typeof value === 'number') {
        return "Number";
    }
}



// Problem 4

const getProperty = <T, K extends keyof T>(obj: T, key: K): T[K] => {
    return obj[key];
}

const user = { id: 1, name: "John Doe", age: 21 };



// Problem 5

interface Book {
    title: string;
    author: string;
    publishedYear: number;
}

const toggleReadStatus = (book: Book): Book & { isRead: boolean } => {
    return {
        ...book,
        isRead: true,
    };
}

const myBook = {
    title: "TypeScript Guide",
    author: "Jane Doe",
    publishedYear: 2024,
};



// Problem 6

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

class Student extends Person {
  grade: string;

  constructor(name: string, age: number, grade: string) {
    super(name, age);
    this.grade = grade;
  }

  getDetails(): string {
    return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
  }
}

const student = new Student("Alice", 20, "A");




// Problem 7

const getIntersection = (arr1: number[], arr2: number[]): number[] => {
    return arr1.filter((num) => arr2.includes(num));
}

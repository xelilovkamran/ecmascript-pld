class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet = () => {
        return `my name is ${this.name} and l'm ${this.age}`;
    };
}

class Student extends Person {
    constructor(name, age, grade) {
        super(name, age);
        this.grade = grade;
    }

    greet = () => {
        return `my name is ${this.name} and l'm ${this.age} and my grade is ${this.grade}`;
    };

    study = (hours) => {
        return `studied hours of ${this.name} is ${hours}`;
    };
}

class Teacher extends Student {
    constructor(name, age, grade, subject) {
        super(name, age, grade);
        this.subject = subject;
    }

    greet = () => {
        return `Subject of ${this.name} is ${this.subject}`;
    };

    teach = (hours) => {
        return `teached hours of ${this.name} is ${hours}`;
    };
}

// const person1 = new Person("kamran", 18);
// const student1 = new Student("kamran", 18, 80);
// const teacher1 = new Teacher("Ruslan", 23, 150);

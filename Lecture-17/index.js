class emplyee {
    #name
    #id
    #salary
    
    constructor(name, id, salary,) {
        this.name = name;
        this.id = id;
        this.#salary = salary;
    }
    display() {
        console.log(`Name: ${this.name}, ID: ${this.id}, Salary: ${this.salary}`);
    }
    increaseSalary(percentage) {
        let increase = this.#salary;
        this.#salary += increase;
        console.log(`Salary increased by `, this.#salary); 
    }
}

class manager extends emplyee {
    #name
    #id
    #salary
    #project
    #department

    constructor(name, id, salary, department) {
        super(name, id, salary);
        this.#department = department;
    }
    display() {
        super.display();
        console.log(`Department: ${this.#department}`);
    }
    increaseSalary(percentage) {
        super.increaseSalary(percentage);
        this.#salary += this.#salary;
        console.log(`Bonus added for manager`);
    }
}

class devloper extends emplyee {
    #name
    #id
    #salary
    #project
    #department
    #experience

    constructor(name, id, salary, project, experience) {
        super(name, id, salary);
        this.project = project;
        this.experience = experience;
    }
    display() {
        super.display();
        console.log(`Project: ${this.#project}`);
    }
    getbonus() {
        console.log("bonus salary: " + this.#salary);
    }
}


let e1 = new emplyee("raj", 1234, 50000);
let e2 = new manager("dev", 9999, 80000, 'Marketing');
let e3 = new devloper("om", 2345, 40000, "Creat some projects", '2 Years Experience')

e1.display();
e1.increaseSalary(10000);
e2.display();
e3.display();
e3.getbonus(10000);

      
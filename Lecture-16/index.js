
class Student{
    constructor(name, age, grade, course,Fees){
        this.name=name;
        this.age=age;
        this.grade=grade;
        this.course=course;
        this.Fees=Fees;
    }
    leave(){
        console.log(this.name, "you can take leave");
    }
}

let student1=new Student("John", 18, "A", "Full stack",1200000);
console.log(student1);
student1.leave();

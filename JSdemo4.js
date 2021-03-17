//class in JS

class student
{
   
    constructor(name, age)
    {
        this.a = age;
        this.n = name;
    }

    stu()
    {
        console.log("Name of the student "+ this.n);
        console.log("Age of the student "+ this.a);
    }
}

 stuObj = new student("Penelope", 27);
stuObj.stu();
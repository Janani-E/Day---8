class Person{
    constructor(name,age,gender,occupation){
        this.name=name;
        this.age=age;
        this.gender=gender;
        this.occupation=occupation;
    }
    getName(){
        return this.name;
    }
    getAge(){
        return this.age;
    }
    getGender(){
        return this.gender;
    }
    getOccupation()
    {
        return this.occupation;
    }
}
let person1 = new Person("Janani",29,"F","Analyst");
function Person(firstName, lastName,dob){

    this.firstName=firstName;
    this.lastName=lastName;
    this.dob=new Date(dob);
    this.getBirthYear=function(dob){
        return this.dob.getFullYear();
    }

    this.FullName= function(){
        return `${this.firstName} ${this.lastName}`;
    }

}

//Instantiate object

const person1=new Person('Uvindu', 'Karalliyadda', '1999-12-30');

console.log(person1);

console.log(person1.firstName);
console.log(person1.dob);
console.log(person1.getBirthYear());
console.log(person1.FullName());


class Person{
    constructor(firstName,lastName,dob){
        this.firstName=firstName;
        this.lastName=lastName;
        this.dob=new Date(dob);
    }

    getBirthYear(){
        return this.dob.getFullYear();
    }
}
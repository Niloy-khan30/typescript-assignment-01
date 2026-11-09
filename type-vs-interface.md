**Title** : What are the core differences between type aliases and interface in typescript ? When should we use choose one over other?

**Introduction** 

Type aliases and Interface both are used to define custom data types. they give us type safety and the structure of objects in Typescript.Despite of having similarities they have some important differences.

**Interface** 

An interface is used for describing the structure of objects. It ensure which properties and method an object should contain. such as;

interface User {
    id : number
    name: string
    dept : string
}

const user : User {
    id : 2301,
    name : 'Niloy Khan'
    dept : 'CSE'
}

**Type alias**

Type alias is used to create a name for any type including objects , literal, unions, intersections and tuple 

type User = {
    id : number
    name : string
}

const user:User = {
    id : 2301,
    name : 'Niloy'

}

Though both of them supports object structure but primitive types, unions types are not supported by the interface. 

for intersection types interface uses 'Extends' and Type alias uses '&'.Interface supports declaration marging meaning if two interface have the same name, typescript combine their properties which is not allowed in case of type alias.

**Extending types** 

interface Person {
    name: string;
}

interface Student extends Person {
    studentId: number;
}

type Person = {
    name: string;
};

type Student = Person & {
    studentId: number;
}

**Declaration merging** 

interface Student {
    id: number;
}

interface Student {
    name: string;
}

const student: Student = {
    id: 101,
    name: "Niloy"
};


**Conclusion**

We use interface when defining object, moreover when we expect them to be extended of merged. Type alias should be used when working with unions, intersections, tuples or more complex type combinations. Both are useful depending on the requirement.

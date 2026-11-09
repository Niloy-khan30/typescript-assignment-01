**Title**: What is Type Narrowing in TypeScript? Provide practical examples using typeof, instanceof, and the in operator.


**Introduction**
Type narrowing is a feature of typescript which allows developers to reduce a variable's possible type using conditional check. It is useful when working with unions types.


**Typeof**

With the help of this operation we can check the primitive type of a value. In case of type narrowing typescript use this operator.

const print = (value : string | number) {
    if (typeof value == "string"){
        return value
    }
    else {
        return value * 10
    }
}

**instanceof**

instanceof checks whether an object is created from a perticular class or has that class in its prototype chain 

class Cat {
    meow(): void {
        console.log('Cat is meowing');
    }
}

class Dog {
    bark() : void {
        console.log('Dog is barking')
    } 
}

function makeSound(animal: Dog | Cat): void {
    if (animal instanceof Dog) {
        animal.bark();
    } else {
        animal.meow();
    }
}


**In Operator**

In operator checks whether a property exist in an object 

type Admin = {
    name: string;
    privileges: string[];
};

type Member = {
    name: string;
    subscription: string;
};

function showUser(user: Admin | Member): void {
    if ("privileges" in user) {
        console.log(user.privileges);
    } else {
        console.log(user.subscription);
    }
}

showUser({
    name: "Niloy",
    privileges: ["Create", "Delete"]
});

showUser({
    name: "Rahim",
    subscription: "Premium"
});

**Conclusion**
when working with multiple possible types type narrowing makes it easier to find the current type of variable. For primitive values typeof is used, for class intances instanceof is used and for checking object properties in operator is used.With the help of these techniques we can reduce runtime error and improve code reliability.
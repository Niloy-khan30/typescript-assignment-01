const multiplyValue = (val1:number, val2:number = 2): number =>{
    return val1 * val2
}

console.log(multiplyValue(7, 0))


const processInput = (value:string|number|boolean)=>{

    if (typeof value == 'string'){
        return value.trim()
    }

    if (typeof value == 'number'){
        return value * 10
    }

    if (typeof value == 'boolean'){
        if (value == true) {
            return 'Active'
        }
        else{
            return 'Inactive'
        }
    }
}

console.log(processInput("  TypeScript  "));
console.log(processInput(7));
console.log(processInput(true));
console.log(processInput(false));


const formatCoordinate = (coordinate : readonly [number, number, string]) : string =>{
    return `Location: ${coordinate[2]} (${coordinate[0]}, ${coordinate[1]})`
}

console.log(formatCoordinate([22.35, 91.78, "Chittagong"]))


const concatenateArrays = <T>(...arrays : T[][]) : T[] =>{
    let result : T[] = []
    for (const arr of arrays){
        result = result.concat(arr)
    }
    return result
}

concatenateArrays([1, 2], [3, 4], [5])
concatenateArrays(["a", "b"], ["c", "d"]);

interface Course {
    title : string
    students : number
    isPublished : boolean
}

const getPopularCourses = (courses: Course[], minStudents : number) : Course[] =>{
    const result : Course[] = []
    for (const course of courses){
        if (course.isPublished == true && course.students >= minStudents){
            result.push(course)
        }
    }

    return result
}
const courses = [
  { title: "TypeScript Mastery", students: 120, isPublished: true },
  { title: "Draft Course", students: 200, isPublished: false },
  { title: "Basic HTML", students: 45, isPublished: true },
  { title: "Next.js Pro", students: 85, isPublished: true }
];
console.log(getPopularCourses(courses, 80))


const pluckValues = <T, K extends keyof T>(items : T[], key:K) =>{
    let result : T[K][] = []

    for (const item of items){
        result.push(item[key])
    }

    return result
}

const users = [
  { id: 1, name: "Rakib", role: "Admin" },
  { id: 2, name: "Sadia", role: "Editor" },
  { id: 3, name: "Tariq", role: "Subscriber" }
];

console.log(pluckValues(users, "name"));
console.log(pluckValues(users, "id"));

class Employee {
    constructor(
        protected name : string,
        private baseSalary : number,
    ){}

    getDetails():string {
        return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`
    } 
}

class Manager extends Employee {
    constructor(
        name:string,
        baseSalary:number,
        private department : string,
    ){
        super(name, baseSalary)
    }

    getRoleInfo():string {
        return `Manager of ${this.department}: ${this.name}`
    }
}

const manager = new Manager("Alice", 50000, "Engineering");
console.log(manager.getDetails());
console.log(manager.getRoleInfo());


const validateAgeAsync = async(age:number) : Promise<string> =>{
    return new Promise((resolve, reject)=>{
        if (age < 18){
            reject(new Error('Error: Access Denied: Must be 18 or older'))
        }
        else{
            setTimeout(() => {
                resolve('Access Granted')
            },1000);
        }
    })
}

async function main() {
   await validateAgeAsync(20)
   .then(res => console.log(res))
   .catch(error=> console.log(error.message))

   await validateAgeAsync(10)
   .then(res => console.log(res))
   .catch(error=> console.log(error.message))



}

main();

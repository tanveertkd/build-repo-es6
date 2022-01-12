//Exercises from https://javascript.info/destructuring-assignment

let user = {
    name: "John",
    years: 30
};

let {name, years: age, isAdmin=false} = user;

console.log(name);
console.log(age);
console.log(isAdmin)

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

const topSalaries = (salaries  => {
    let maxSalary = 0, maxName=null;

    for(const [name, salary] of Object.entries(salaries)){
        if(maxSalary<salary){
            maxSalary = salary;
            maxName = name;
        }
    }
    console.log(maxName)
})(salaries)
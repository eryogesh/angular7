function greeter(person) {
    return "Hello, " + person;
}

let user = "Jane User";

document.body.innerHTML = greeter(user);

class Employee {
    name: string;
    id: number;
}

let emp = new Employee();
emp.id = 1;
emp.name = "Yogesh";

console.log(emp);

import { Person } from './models/person.model';
import { Student } from './models/student.model';

function greeter(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

let user = new Student("Andre", "W.", "Shen");

console.log(greeter(user));

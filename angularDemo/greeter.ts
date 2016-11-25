class Student {
	fullName: string;
	constructor(public firstName, public middleName, public lastName) {
		this.fullName = firstName + " " + middleName + " " + lastName;
	}
}
interface Person {
  firstName: string;
  lastName: string;
}

function greeter(person: Person) {
  return "hello, " + person.firstName + " " + person.lastName;
}

var user = new Student ("andre", "shen", "shen");
//document.body.innerHTML = greeter(user);
console.log(greeter(user));

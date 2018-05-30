import { Component, OnInit } from '@angular/core';

class Greeting {
  message: string;
  constructor(message: string) {
    this.message = message;
  }

  greet() {
    return 'Hello, ' + this.message;
  }
}

class Animal {
  private name: string;

  constructor(animalName: string) {
    this.name = animalName;
  }


  move(distance: number = 0) {
    console.log(`${this.name} moved ${distance}m.`);
  }
}

class Dog extends Animal {
  constructor(name: string) {
    super(name);
  }

  bark() {
    console.log('Woof!');
  }

  move(distanceMovedByDog: number = 5) {
    console.log('dog is moving...');
    super.move(distanceMovedByDog);
  }
}

class Horse extends Animal {
  // Create constructor to set animal name
  // Create move to set default distance to 45
  constructor(name: string) {
    super(name);
  }
  move(distanceMovedByHorse: number = 45) {
    console.log('This horse is galloping majesticlly!');
    super.move(distanceMovedByHorse);
  }
}

class User {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }
}


class John extends User {
  constructor() {
    super('John');
  }
}

class Employee {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }
}

class Poodle extends Dog {

  constructor(name: string) {
    super(name);
  }

  move() {
    let moving = super.move();
    console.log('poodle is walking');
  }
}

class Person {
  protected name: string;

  constructor(name: string) {
    this.name = name;
  }
}

class Worker extends Person {
  private department: string;

  constructor(name: string, department: string) {
    super(name);
    this.department = department;
  }

  getDetails() {
    return `My name is ${this.name} and I work in ${this.department}.`;
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  ngOnInit() {
    // this.classTesting();
    // this.animalClassTesting();
    // this.classCompatabilityTesting();
    // this.extendedDerivedClassTesting();
    this.protectedTesting();
  }

  classTesting() {
    const greeter = new Greeting('World!');
    console.log(greeter.greet());
  }

  animalClassTesting() {
    const dog = new Dog('Goofy');
    dog.bark();
    dog.move();
    const horse = new Horse('Debby');
    horse.move();
  }

  classCompatabilityTesting() {
    let user = new User('Doe');
    const john = new John();

    console.log(user);
    console.log(john);

    const employee = new Employee('Smith');
    console.log(employee);

    user = john;
    console.log(user);
  }

  extendedDerivedClassTesting() {
    const poodle = new Poodle('Tom');
    poodle.move();

  }

  protectedTesting() {
    const worker = new Worker('Steve', 'Sales');
    console.log(worker.getDetails());
    // console.log(worker.name);

    const person = new Person('Patrick');
    console.log(person);
  }
}

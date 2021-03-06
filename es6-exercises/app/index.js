function butter(...b) {
  let a = [1, 2, 3, ...b];
  return a;
}

console.log(butter(4, 5, 6));

//Anonymous function examples

//function blastoff(){
//  console.log('1...2...3...blastoff');
//}

setTimeout(() => {
  console.log('1...2...3...blastoff');
}, 1000);

const blastoff = () => {
  console.log('1...2...3...blastoff');
}

blastoff();

// Map with arrow function
let points = [10, 20, 30];
points = points.map(element => element + 1);
console.log(points)

// Filtering with arrow function
let score = [90, 45, 67, 99, 87, 70];
/*
let isPassing = (grade) => {
  return grade >= 70;
}
let passing = score.filter(isPassing);
console.log(passing);
*/

let passing = score.filter(element => element >= 70)
console.log(passing);

// Using export variables
import { students, total_score} from './student'

console.log(students);
console.log(total_score);

// Importing Add and Multiply Export function
//import { add, multiply} from './calculator.js';
import multiply from './calculator'
//console.log(add(5, 4))
console.log(multiply(6, 6));

//Using Class and Inheritance.
class EntityA {
  constructor(name, height){
    this.name = name;
    this.height = height;
  }

  greet() {
    console.log(`Hi! I'm ${this.name} from middle earth!`);
  }
}

let Merry = new EntityA("Merry", 4.6);
Merry.greet();

// Imported from other filter
import Entity from './classes'

class Hobbit extends Entity {
  constructor(name, height){
    super(name, height);
  }
  greet(){
    console.log(`Hello!, I'm ${this.name} from the Shire`);
  }
}

let Frodo = new Hobbit("Frodo Baggins", 4.5);
Frodo.greet();

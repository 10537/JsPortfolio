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

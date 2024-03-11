// const students = [`billy`, `jenny`, `peter`, `mary`, `sarah`]; // length = 5
// //                  0         1       2         3       4



// const ages = [5, 16, 13, 17, 12, 8];
// const groceryItems = [`banana`, .8, `apple`, .1, `kiwi`, .5, `boat`, 10000];
// const emptyArray = [];

// // const studentCount = students.length;
// // console.log(`STUDENT COUNT:`, studentCount);

// console.log(`BEFORE:`, students);

// const newLength = students.push(`milly`, 'riley');
// console.log(`AFTER PUSH:`, students);
// console.log(`NEW LENGTH:`, newLength);

// const lastStudent = students.pop();

// console.log(`AFTER POP:`, students);
// console.log(`LAST STUDENT:`, lastStudent);

// const firstStudent = students.shift();
// console.log(`AFTER SHIFT:`, students);
// console.log(`FIRST STUDENT:`, firstStudent);

// const unshiftedLength = students.unshift(`harriet`);
// console.log(`AFTER UNSHIFT:`, students);
// console.log(`UNSHIFTED LENGTH:`, unshiftedLength);

// const studentCount = students.length;
// console.log(`STUDENT COUNT:`, studentCount);
// console.log(`STUDENTS:`, students);

// console.log(`SLICED:`, students.slice(-1));
// console.log(`STUDENTS AFTER SLICE:`, students);

// const removedStudents = students.splice(2, 1, `paul`, `sally`);
// console.log(`REMOVED STUDENTS:`, removedStudents);
// console.log(`STUDENTS AFTER SPLICE:`, students);

// const studentAtIndexZero = students[0];
// console.log(`STUDENT AT INDEX ZERO:`, studentAtIndexZero);

// const studentAtTheLastIndex = students[ students.length - 1 ];
// console.log(`STUDENT AT LAST INDEX:`, studentAtTheLastIndex);





// for loop
// for(let counter = 1; counter <= 100; counter = counter + 1) {
//   console.log(counter);
// }


// while loop
// let counter = 10;

// while(counter > 0) {
//   console.log(counter);
//   counter = counter - 1;
// }

// let i = 0;
// i = i + 1
// const num1 = i++;
// const num1 = ++i;
// console.log(num1);
// console.log(i);

// for(let i = 0; i < students.length; i++) {
//   console.log(students[ i ]);
// }

// for(let i = students.length - 1; i >= 0; i--) {
//   console.log(students[ i ]);
// }

const getFavoriteAnimal = (favoriteAnimal) => {
  let result = 0;
  const animalOptions = [`narwhal`, `velociraptor`, `kitten`];
  let favNum = 22;

  if(animalOptions[0] === `narwhal`) {
    const favoriteAnimal = 't-rex';
    favNum = favNum + 5;
    result++;
  } else {
    result--;
  }

  return result;
}

const favoriteAnimal = `bunny`;
const otherFavoriteAnimal = `llama`;

// getFavoriteAnimal(favoriteAnimal);
getFavoriteAnimal(otherFavoriteAnimal);
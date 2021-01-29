"use strict";

let submissions = [
  {
    name: `Jane`,
    score: 95,
    date: `2020-01-24`,
    passed: true,
  },
  {
    name: `Joe`,
    score: 77,
    date: `2018-05-14`,
    passed: true,
  },
  {
    name: `Jack`,
    score: 59,
    date: `2019-07-05`,
    passed: false,
  },
  {
    name: `Jill`,
    score: 88,
    date: `2020-04-22`,
    passed: true,
  },
];

// 1.
const addSubmission = (array, newName, newScore, newDate) => {
  const newStudent = {
    name: newName,
    score: newScore,
    date: newDate,
    passed: newScore >= 60,
  };
  array.push(newStudent);
};

// 2.
addSubmission(submissions, `Andrea`, 90, `2021 - 01 - 27`);
console.log(JSON.parse(JSON.stringify(submissions)));

// 3.
const deleteSubmissionByIndex = (array, index) => {
  array.splice(index, 1);
};

deleteSubmissionByIndex(submissions, 4);
console.log(submissions);

// 4.
const deleteSubmissionByName = (array, name) => {
  const index = array.findIndex((student) => {
    return student.name === name;
  });
  // array.splice(index, 1);
  deleteSubmissionByIndex(array, index);
};

deleteSubmissionByName(submissions, `Joe`);
console.log(submissions);

// 5
const editSubmission = (array, index, score) => {
  array[index].score = score;
  array[index].passed = score >= 60;
};

editSubmission(submissions, 1, 50);
console.log(submissions);

// 6.
const findSubmissionByName = (array, name) => {
  return array.find((student) => {
    return student.name === name;
  });
};

console.log(findSubmissionByName(submissions, `Jill`));

// 7.
// const findLowestScore = (array) => {
//   let currentLowest = array[0];
//   array.forEach((submission) => {
//     if (submission.score < currentLowest.score) {
//       currentLowest = submission;
//     }
//   });
//   return currentLowest;
// };

// console.log(findLowestScore(submissions));

// doing 7 with reduce method
const findLowestScore = (array) => {
  return array.reduce((accumulator, currentValue) => {
    return currentValue.score < accumulator.score ? currentValue : accumulator;
  });
};

console.log(findLowestScore(submissions));

// // 8.
const findAverageScore = (array) => {
  let classTotalScore = 0;
  for (let submission of array) {
    classTotalScore += submission.score;
  }
  return classTotalScore / array.length;
};

// const findAverageScore = (array) => {
//   return (
//     array.reduce(
//       (accumulator, currentValue) => accumulator + currentValue.score,
//       0
//     ) / array.length
//   );
// };

console.log(findAverageScore(submissions));

// 9.
const filterPassing = (array) => {
  return array.filter((student) => {
    return student.passed;
  });
};

console.log(filterPassing(submissions));

// 10.
const filter90AndAbove = (array) => {
  return array.filter((student) => {
    return student.score >= 90;
  });
};

console.log(filter90AndAbove(submissions));

// extras -------------------------------------

// 1.
const createRange = (start, end) => {
  let array = [];
  for (let i = start; i <= end; i++) {
    array.push(i);
  }
  return array;
};

console.log(createRange(5, 10));

// 2.
let strings = [`a`, `a`, `b`, `b`, `b`, `c`];

const countElements = (array) => {
  let newObject = {};
  for (let item of array) {
    if (newObject[item] === undefined) {
      newObject[item] = 1;
    } else {
      newObject[item]++;
    }
  }
  return newObject;
};

console.log(countElements(strings));

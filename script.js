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
console.log(submissions);

// 3.
const deleteSubmissionByIndex = (array, index) => {
  array.splice(index, 1);
};

deleteSubmissionByIndex(submissions, 4);
console.log(submissions);

// 4.
const deleteSubmissionByName = (array, name) => {
  let index = array.findIndex((student) => {
    return student.name === name;
  });
  array.splice(index, 1);
};

deleteSubmissionByName(submissions, `Joe`);
console.log(submissions);

// 5.
// const editSubmission = (array, index, score) => {
//   array.splice(index, score);
//   return score;
// };

// editSubmission(submissions, 1, 50);
// console.log(submissions);

// ---------------------------------------

// const editSubmission = (array, index, score) => {
//   index = array.findIndex((student) => {
//     return student.score;
//   });
//   array.splice(1, 0);
// };

// editSubmission(submissions, 1, 50);
// console.log(submissions);

// 6.
const findSubmissionByName = (array, name) => {
  return array.find((item) => {
    return item.name === name;
  });
};

console.log(findSubmissionByName(submissions, `Jill`));

// // 7.
// const findLowestScore = (array) => {
//     array.forEach((student)=>{

//     })
// }

// // 8.
// const findAverageScore = (array) => {

// };

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

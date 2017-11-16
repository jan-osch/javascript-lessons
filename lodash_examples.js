// Lodash is a great all-round utility library for javascript.
// First, you must have node & npm installed locally
// $ npm init
// This will create an empty npm package
// $ npm i --save lodash
// $ node lodash_examples.js


const _ = require('lodash');

const arrays = [[7, 2, 5], [3, 1, 6], [8, 10, 9], [4, 1, 6]];


// Example 1 - analyze this
console.log(_.flatten(arrays));
console.log(_.max(_.flatten(arrays)));
console.log(_.uniq(_.flatten(arrays)));
console.log(_.sortBy(_.uniq(_.flatten(arrays))));

//
// // Example 2
// const animals = [
//   { type: 'cat', name: 'felix', props: { age: 2 } },
//   { type: 'dog', name: 'max', props: { age: 1 } },
//   { type: 'parrot', name: 'birdy' },
//   { type: 'cat', name: 'garfield', props: { age: 5 } },
//   { type: 'dog', name: 'reksio', props: { age: 3 } },
//   { type: 'cat', name: 'puszek' },
// ];
//
// const expectedResult = {
//   cat: [
//     { type: 'cat', name: 'garfield', props: { age: 5 } },
//     { type: 'cat', name: 'felix', props: { age: 2 } },
//     { type: 'cat', name: 'puszek' },
//   ],
//   dog: [
//     { type: 'dog', name: 'reksio', props: { age: 3 } },
//     { type: 'dog', name: 'max', props: { age: 1 } },
//   ],
//   parrot: [
//     { type: 'parrot', name: 'birdy' },
//   ],
// };
//
// const solution2 = (input) => {
//   // your solution here
// };
//
// require('assert').deepEqual(solution2(animals), expectedResult);

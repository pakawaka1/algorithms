///////////////////////////////Section 3: Big O//////////////////////////////////////////////////////////////////////////////////////////
// O(n) = for loops, while loops through n items

// const nemo = ['nemo'];
// const everyone = [
//   'dory',
//   'bruce',
//   'marlin',
//   'nemo',
//   'gill',
//   'bloat',
//   'nigel',
//   'squirt',
//   'darla',
//   'hank'
// ];
// const large = new Array(100000).fill('nemo');

// function findNemo(array) {
//   let t0 = performance.now();
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] === 'nemo') {
//       console.log('found NEMO Yolo!!');
//     }
//   }
//   let t1 = performance.now();
//   console.log('Call to find Nemo took ' + (t1 - t0) + ' milliseconds');
// }

// findNemo(large);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// O(1) Constant - no loops
//  Always going to run the same all the time

// const boxes = [0, 1, 2, 3, 4, 5];

// function logFirstTwoBoxes(boxes) {
//     console.log(boxes[0]);
//     console.log(boxes[1]);
// }

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Exercise 1  - Big O Notation
// n = input

function funChallenge(input) {
  let a = 10; //O(1)
  a = 50 + 3; //O(1)

  for (let i = 0; i < input.length; i++) {
    //O(n)
    anotherFunction(); //O(n)
    let stranger = true; //O(n)
    a++; //O(n)
  }
  return a; //O(1)
}

funChallenge();

// big O notation = 3 + 4n

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Exercise 3 - Big O Notation #2
// n = input

// What is the Big O of the below function? (Hint, you may want to go line by line)
function anotherFunChallenge(input) {
  let a = 5; //O(1)
  let b = 10; //O(1)
  let c = 50; //O(1)
  for (let i = 0; i < input; i++) {
    //O(n)
    let x = i + 1; //O(n)
    let y = i + 2; //O(n)
    let z = i + 3; //O(n)
  }
  for (let j = 0; j < input; j++) {
    //O(n)
    let p = j * 2; //O(n)
    let q = j * 2; //O(n)
  }
  let whoAmI = "I don't know"; //O(1)
}
anotherFunChallenge();

//big O Notation = 4 + 7n

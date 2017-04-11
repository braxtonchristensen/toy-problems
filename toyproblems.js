//use reduce
var sumThis = [1, 2, 3, 4, 5, 6];
sumThis.reduce(function(acc, val) {
  return acc + val;
},0);

var list1 = [[0, 1], [2, 3], [4, 5]];
var list2 = [0, [1, [2, [3, [4, [5]]]]]];

const flatten = arr => arr.reduce(
  (acc, val) => acc.concat(
    Array.isArray(val) ? flatten(val) : val
  ),
  []
);
flatten(list1); // returns [0, 1, 2, 3, 4, 5]
flatten(list2); // returns [0, 1, 2, 3, 4, 5]

//fib
function impFib(n) {
  var fib = [0, 1];
  for(var i = 1; i < n; i++) {
    fib.push(fib[i] + fib[i - 1]);
  }
  return fib[n];
}
impFib(5);

function fibonacci(num, memo) {
  memo = memo || {};

  if (memo[num]) return memo[num];
  if (num <= 1) return num;

  return memo[num] = fibonacci(num - 1, memo) + fibonacci(num - 2, memo);
}
fibonacci(8);

//constructor example(prototypal inheritance)
function Person(name) {
  this.name = name;
  this.say = () => {
    return (
      `My name is ${this.name}`
    );
  };
}

const braxton = new Person('Braxton');

braxton.say();

//higest product of 3
function highestProductOf3(arrayOfInts) {
  if (arrayOfInts.length < 3) {
      throw new Error('Less than 3 items!');
  }

  // We're going to start at the 3rd item (at index 2)
  // so pre-populate highests and lowests based on the first 2 items.
  // we could also start these as null and check below if they're set
  // but this is arguably cleaner
  var highest = Math.max(arrayOfInts[0], arrayOfInts[1]);
  var lowest  = Math.min(arrayOfInts[0], arrayOfInts[1]);

  var highestProductOf2 = arrayOfInts[0] * arrayOfInts[1];
  var lowestProductOf2  = arrayOfInts[0] * arrayOfInts[1];

  // except this one--we pre-populate it for the first *3* items.
  // this means in our first pass it'll check against itself, which is fine.
  var highestProductOf3 = arrayOfInts[0] * arrayOfInts[1] * arrayOfInts[2];

  // walk through items, starting at index 2
  for (var i = 2; i < arrayOfInts.length; i++) {
      var current = arrayOfInts[i];

      // do we have a new highest product of 3?
      // it's either the current highest,
      // or the current times the highest product of two
      // or the current times the lowest product of two
      highestProductOf3 = Math.max(
          highestProductOf3,
          current * highestProductOf2,
          current * lowestProductOf2
      );

      // do we have a new highest product of two?
      highestProductOf2 = Math.max(
          highestProductOf2,
          current * highest,
          current * lowest
      );

      // do we have a new lowest product of two?
      lowestProductOf2 = Math.min(
          lowestProductOf2,
          current * highest,
          current * lowest
      );

      // do we have a new highest?
      highest = Math.max(highest, current);

      // do we have a new lowest?
      lowest = Math.min(lowest, current);
  }

  return highestProductOf3;
}

highestProductOf3([12, 2, 4, -10, -100]);

//Time Merge
var testTimes = [
  {startTime: 0,  endTime: 1},
  {startTime: 3,  endTime: 5},
  {startTime: 4,  endTime: 8},
  {startTime: 10, endTime: 12},
  {startTime: 9,  endTime: 10},
];

function mergeRanges(meetings) {

  // sort by start times
  var sortedMeetings = meetings.slice().sort(function(a, b) {
      return a.startTime > b.startTime ? 1 : -1;
  });

  // initialize mergedMeetings with the earliest meeting
  var mergedMeetings = [sortedMeetings[0]];

  for (var i = 1; i < sortedMeetings.length; i++) {

      var currentMeeting    = sortedMeetings[i];
      var lastMergedMeeting = mergedMeetings[mergedMeetings.length - 1];

      // if the current and last meetings overlap, use the latest end time
      if (currentMeeting.startTime <= lastMergedMeeting.endTime) {
          lastMergedMeeting.endTime = Math.max(lastMergedMeeting.endTime, currentMeeting.endTime);

      // add the current meeting since it doesn't overlap
      } else {
          mergedMeetings.push(currentMeeting);
      }
  }

  return mergedMeetings;
}

mergeRanges(testTimes);

//bottom up possiblitys
function changePossibilitiesBottomUp(amount, denominations) {

    // intialize an array of zeros with indices up to amount
    var waysOfDoingNcents = [];
    for (var i = 0; i <= amount; i++) {
        waysOfDoingNcents[i] = 0;
    }
    waysOfDoingNcents[0] = 1;

    denominations.forEach(function(coin) {
        for (var higherAmount = coin; higherAmount <= amount; higherAmount++) {
            var higherAmountRemainder = higherAmount - coin;
            waysOfDoingNcents[higherAmount] += waysOfDoingNcents[higherAmountRemainder];
        }
    });

    return waysOfDoingNcents[amount];
}

changePossibilitiesBottomUp(20, [1, 5, 10, 25]);

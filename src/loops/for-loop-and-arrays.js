const nums = [1, 3, 12, 5, 1, 6, 4, 1, 10]
const letters = ['H', 'e', 'l', 'l', 'o']
let sum = 0
let word = ''

// TODO: Add code below this line to make the tests pass

// Use a for loop to set the sum variable to the sum of all the values in nums
sum = 0
for (let i = 0; i < nums.length; i++) {
  // I need to get number at i from nums array
  const number = nums[i] // right had side = get the value inside nums at index = i
  // left hand side = create variable called "number" that stores the value from right hand side
  // I need to add number to sum
  sum = number + sum
  
}

// Use a for loop to populate doubledNums with every value from nums array doubled (i.e [2, 6, 24, etc...])
const doubledNums = []

for (let i = 0; i < nums.length; i++) {
  
  //I need to double nums array and set it to a new constant
  const doubled = nums[i] * 2 
  // I need to get this value and set it to doubleNumbs
  doubledNums.push(doubled)
}

// Use a for loop to set word equal to all the letters in the letters array
word = ''

// Use a for loop to populate everySecondNum with every second number from the nums array
const everySecondNum = []

// Use a for loop to populate numsReversed with the numbers from nums in reverse order
const numsReversed = []

// do not change below this line
module.exports = {
  a: sum,
  b: doubledNums,
  c: word,
  d: everySecondNum,
  e: numsReversed
}

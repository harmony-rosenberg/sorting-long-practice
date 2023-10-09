function ageSort(users) {
  users.sort((a, b) => Number(a.age) - Number(b.age))
  return users
}


function oddEvenSort(arr) {

  let evenNum = arr.filter((el) => el % 2 === 0)
  let oddNum = arr.filter((el) => el % 2 !== 0)

  evenNum.sort((a, b) => Number(a) - Number(b))
  oddNum.sort((a, b) => Number(a) - Number(b))
    // console.log(evenNum)
    // console.log(oddNum)

    return [...oddNum, ...evenNum]
  // return oddNum.concat(evenNum) // alternative method
}

function validAnagrams(s, t) {
  if(s.length !== t.length) return false

  let charCount = {
  }

  for(let char of s) {
    if(!charCount[char]) {
      charCount[char] = 1
    } else {
      charCount[char] += 1
    }
  }

  for(let char of t) {
    if(!charCount[char]) return false
    charCount[char]--
  }

  for(let char in charCount) {
    if (charCount[char] === 0) return true
  }
}

function reverseBaseSort(arr) {
  // Your code here
}

function frequencySort(arr) {
  // Your code here
}

module.exports = [
  oddEvenSort,
  validAnagrams,
  reverseBaseSort,
  frequencySort,
  ageSort,
];

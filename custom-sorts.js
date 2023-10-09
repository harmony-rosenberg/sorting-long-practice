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
  // Your code here
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

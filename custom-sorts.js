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
  arr.sort((a , b) => b - a)
  let res = []
  let nums = {
  }

  for(let i = 0; i < arr.length; i ++) {
    let length = arr[i].toString().length
    if(!nums[length]) {
      nums[length] = [arr[i]]
    } else {
      nums[length].push(arr[i])
    }
  }

  let vals = [...Object.values(nums)]
  for(let el of vals) {
    el.reverse()
    for(let i = el.length - 1; i >= 0; i--) {
      res.push(el[i])
    }
  }
  return res.reverse()
}

function frequencySort(arr) {//need to figure out how to print it out in correct order
  let result=[]
  let sorted = {}

  for(let el of arr) {//create object
    if(!sorted[el]) {//if the object does not have the el
      sorted[el]=1//create a key:value pair
    }else {
      sorted[el]+=1;//if it already exists, incrememnt by 1
    }
  }
  console.log(sorted)
  for (key in sorted) {
    let value=parseInt(key);//the numbers we want to repeat are keys so they need to be converted to numbers
    let count=sorted[key]//grab how many times we are to repeat
    result.push(...Array(count).fill(value))//create a new empty array with 'x' slots corresponding to count
    //fill those empty slots with the value
  }

  return result
  }


module.exports = [
  oddEvenSort,
  validAnagrams,
  reverseBaseSort,
  frequencySort,
  ageSort,
];

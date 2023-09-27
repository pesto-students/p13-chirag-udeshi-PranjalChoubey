
function divideArray(numbers) {
  let evenNums = [];
  let oddNums = [];

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      evenNums.push(numbers[i]);
    } else {
      oddNums.push(numbers[i]);
    }
  }

  if (evenNums.length === 0) {
    console.log("Even numbers: None");
  } else {
    evenNums.sort(function(a, b) {
      return a - b;
    });
    console.log("Even numbers:");
    for (let i = 0; i < evenNums.length; i++) {
      console.log(evenNums[i]);
    }
  }

  if (oddNums.length === 0) {
    console.log("Odd numbers: None");
  } else {
    oddNums.sort(function(a, b) {
      return a - b;
    });
    console.log("Odd numbers:");
    for (let i = 0; i < oddNums.length; i++) {
      console.log(oddNums[i]);
    }
  }
}
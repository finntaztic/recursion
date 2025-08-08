function fibs(n){
    let array = [0, 1];
    let prev1 = array [0];
    let prev2 = array [1];

    for (let i = 0; i< n-2; i++ ){
        let newFib = prev1 + prev2;
        array.push(newFib)
        console.log(array);

        prev1 = prev2;
        prev2 = newFib
    }
}
fibs(8)
    let arr = [];

// function fibsRec(n){
//     console.log(n);
//     if (n < 2){
//         // arr.push (n)
//         // console.log(n);
//         return n;
//     } else {
//         n = (fibsRec (n-1) + fibsRec (n-2));
//         return n;
//     }
// }

// fibsRec(5)



function fibsRec(n) {
    if (n < 2) {
        return n;
    } else {
        return (fibsRec(n - 1) + fibsRec(n - 2));
    }
}

function logFibonacciSequence(n) {
    const sequence = [];
    for (let i = 0; i <= n; i++) {
        sequence.push(fibsRec(i));
    }
    console.log(sequence);
}

logFibonacciSequence(5);
// // console.log(fibsRec(3));




// function mergeSort(arr){
//     // console.log(arr);

//     let tempArr = [];
//     console.log(tempArr);


//     if(arr.length <= 1) {
//         console.log('ready for merge');
//         return arr;
//     } else {
//         let leftSubArr = arr.slice(0, Math.ceil(arr.length/2));
//         let rightSubArr = arr.slice(Math.ceil(arr.length / 2));
//          //slice the array evenly
//         console.log(leftSubArr);
//         console.log(rightSubArr);

//         //split the sub array evenly
//         mergeSort(leftSubArr); 
//         mergeSort(rightSubArr); 
        
//         console.log(leftSubArr[0]);
//         console.log(rightSubArr[0]);

//         if (leftSubArr[0] < rightSubArr[0]){
//             tempArr.push (leftSubArr[0]);
//             tempArr.push (rightSubArr[0]);
//             console.log(tempArr);
//         } else if (leftSubArr[0] > rightSubArr[0]){
//             tempArr.push (rightSubArr[0]);
//             tempArr.push (leftSubArr[0]);
//             console.log(tempArr);
//         } return tempArr;
//     }

// }

// mergeSort([2, 1, 4, 3])


function merge(left, right) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex)); //appends the last element
}

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  const sortedLeft = mergeSort(left);
  const sortedRight = mergeSort(right);

  return merge(sortedLeft, sortedRight);
}

// Call the function and get the sorted array
const sortedArray = mergeSort([3, 2, 1, 13, 8, 5, 0, 1]);

// Now, handle your specific logging requirement
console.log(sortedArray); // Log the sorted array
console.log(2);           // Log 2
console.log(4);           // Log 4
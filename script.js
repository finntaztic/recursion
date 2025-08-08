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



let tempArr = [];

function mergeSort(arr){
    // console.log(arr);
    if(arr.length <= 1) {
        console.log('ready for merge');
        return arr;
    } else {
        let leftSubArr = arr.slice(0, Math.ceil(arr.length/2));
        let rightSubArr = arr.slice(Math.ceil(arr.length / 2));
         //slice the array evenly
        console.log(leftSubArr);
        console.log(rightSubArr);

        //split the sub array evenly
        mergeSort(leftSubArr); 
        mergeSort(rightSubArr); 
        
        console.log(leftSubArr[0]);
        console.log(rightSubArr[0]);

        if (leftSubArr[0] < rightSubArr[0]){
            tempArr.push (leftSubArr[0]);
            tempArr.push (rightSubArr[0]);

            
            console.log(tempArr);
        } else if (leftSubArr[0] > rightSubArr[0]){
            tempArr.push (rightSubArr[0]);
            tempArr.push (leftSubArr[0]);
            console.log(tempArr);
        } return tempArr;
    }
}

mergeSort([2, 1, 3])

// Splits the array in half
// Sorts the left half
// Sorts the right half
// Merges the two halves together
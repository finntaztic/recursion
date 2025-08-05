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


function mergeSort(arr){
    console.log(arr);

}

mergeSort([2, 1, 3, 0])
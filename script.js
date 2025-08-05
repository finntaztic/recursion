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

function fibsRec(n){
    if (n < 2){
        // arr.push (n)
        console.log(n);   
        return n;
    } else {
        newN = (fibsRec (n-1) + fibsRec (n-2));
        // arr.push (n)
        console.log(newN);
        console.log(n);
        return n;
    }
}
console.log(fibsRec(2));

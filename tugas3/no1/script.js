function bilanganFibonacci(n) {
    let bilfib = [];
    let a = 0, b = 1, temp;

    for (let i = 0; i < n; i++) {
        bilfib.push(a);
        temp = a + b;
        a = b;
        b = temp;
    }

    return bilfib;
}

function printFibonacci(n) {
    const bilfib = bilanganFibonacci(n);
    console.log(`Deret Fibonacci hingga ke-${n}:`);
    console.log(bilfib.join(', '));
}

// Contoh pemanggilan dengan n = 20
printFibonacci(20);

const kalkulator ={
    add : (a, b) => a + b,
    subtract : (a, b) => a - b,
    multiply : (a, b) => a * b,
    divede: (a, b) => a / b,
    modulus: (a, b) => a % b,
};

const result = kalkulator.add(10, 20);

console.log(result);
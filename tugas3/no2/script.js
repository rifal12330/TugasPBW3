function calculate() {
    const operator = document.getElementById("operator").value;
    const operand1 = parseFloat(document.getElementById("operand1").value);
    const operand2 = parseFloat(document.getElementById("operand2").value);

    const result = calculator(operator, operand1, operand2);

    document.getElementById("hasil").innerText = `hasil: ${result}`;
}

const calculator = (operator, ...operands) => {
    switch (operator) {
        case '+':
            return operands.reduce((acc, curr) => acc + curr, 0);
        case '-':
            return operands.reduce((acc, curr) => acc - curr);
        case '*':
            return operands.reduce((acc, curr) => acc * curr, 1);
        case '/':
            return operands.reduce((acc, curr) => acc / curr);
        case '%':
            return operands.reduce((acc, curr) => acc % curr);
        default:
            return 'Operator tidak valid!';
    }
}
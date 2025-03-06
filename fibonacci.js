function calcularFibonacci() {
    let n = parseInt(prompt("Digite a quantidade de elementos da sequência de Fibonacci:"));

    // Verifica se a entrada é válida
    if (isNaN(n) || n <= 0) {
        alert("Por favor, insira um número inteiro positivo.");
        return;
    }

    let fibonacci = [0, 1];

    for (let i = 2; i < n; i++) {
        fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
    }

    alert(`Série de Fibonacci (${n} elementos): ${fibonacci.slice(0, n).join(", ")}`);
}

calcularFibonacci();

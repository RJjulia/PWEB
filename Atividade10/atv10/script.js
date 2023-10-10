function encontrarMaiorNumero(num1, num2, num3) {
    return Math.max(num1, num2, num3);
}

function ordenarNumerosCrescente(num1, num2, num3) {
    const numeros = [num1, num2, num3];
    numeros.sort(function(a, b) {
        return a - b;
    });

    return numeros;
}
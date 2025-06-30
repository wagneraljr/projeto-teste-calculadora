// Função para somar dois números
const somar = (a, b) => a + b;

// Função para subtrair dois números
const subtrair = (a, b) => a - b;

// Função para multiplicar dois números
const multiplicar = (a, b) => a * b;

// Função para dividir dois números
const dividir = (a, b) => {
    // Um caso especial: não podemos dividir por zero!
    if (b === 0) {
        // Lançamos um erro para sinalizar o problema.
        throw new Error("Divisão por zero não é permitida.");
    }
    return a / b;
};

// Exportamos as funções para que outros arquivos possam usá-las.
module.exports = { somar, subtrair, multiplicar, dividir };
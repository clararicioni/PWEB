function mostrarMaior() {
    const n1 = Number(document.getElementById("num1").value);
    const n2 = Number(document.getElementById("num2").value);
    const n3 = Number(document.getElementById("num3").value);
    const maior = Math.max(n1, n2, n3);
    document.getElementById("maiorResultado").textContent = `Maior número: ${maior}`;
}

function ordenarNumeros() {
    const n1 = parseFloat(document.getElementById("ordem1").value);
    const n2 = parseFloat(document.getElementById("ordem2").value);
    const n3 = parseFloat(document.getElementById("ordem3").value);

    if (isNaN(n1) || isNaN(n2) || isNaN(n3)) {
        document.getElementById("ordemResultado").textContent = "Preencha todos os números.";
        return;
    }

    const numeros = [n1, n2, n3];
    numeros.sort((a, b) => a - b);

    document.getElementById("ordemResultado").textContent = "Ordem crescente: " + numeros.join(", ");
}

function verificarPalindromo() {
    const str = document.getElementById("palavra").value.toUpperCase();
    const invertida = str.split("").reverse().join("");
    const resultado = (str === invertida) ? "É um palíndromo!" : "Não é um palíndromo.";
    document.getElementById("palindromoResultado").textContent = resultado;
}

function verificarTriangulo() {
    const a = Number(document.getElementById("lado1").value);
    const b = Number(document.getElementById("lado2").value);
    const c = Number(document.getElementById("lado3").value);

    if (a + b > c && a + c > b && b + c > a) {
        let tipo = "";
        if (a === b && b === c) {
            tipo = "Equilátero";
        } else if (a === b || a === c || b === c) {
            tipo = "Isósceles";
        } else {
            tipo = "Escaleno";
        }
        document.getElementById("trianguloResultado").textContent = `Forma um triângulo ${tipo}.`;
    } else {
        document.getElementById("trianguloResultado").textContent = "Não forma um triângulo.";
    }
}

function limparCampos() {
    document.querySelectorAll("input").forEach(input => input.value = "");
    document.getElementById("maiorResultado").textContent = "";
    document.getElementById("ordemResultado").textContent = "";
    document.getElementById("palindromoResultado").textContent = "";
    document.getElementById("trianguloResultado").textContent = "";
}
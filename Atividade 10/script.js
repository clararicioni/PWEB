function resultado() {
    var altura = parseFloat(document.getElementById("inputAltura").value);
    var peso = parseFloat(document.getElementById("inputPeso").value);
    var imc = peso / Math.pow(altura, 2);

    var classific, obesidade;
    if (imc < 18.5) {
        classific = "Magreza";
        obesidade = "0";
    } else if (imc < 24.9) {
        classific = "Normal";
        obesidade = "0";
    } else if (imc < 29.9) {
        classific = "Sobrepeso";
        obesidade = "I";
    } else if (imc < 39.9) {
        classific = "Obesidade";
        obesidade = "II";
    } else {
        classific = "Obesidade grave";
        obesidade = "III";
    }

    document.getElementById("resultado").innerHTML = "Seu IMC é: " + imc.toFixed(2);
    document.getElementById("classificacao").innerHTML = "Clasificação: " + classific;
    document.getElementById("obesidade").innerHTML = "Nível de obesidade: " + obesidade;
}




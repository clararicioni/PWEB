const campoTexto = document.getElementById("campoTexto");
const maiusculas = document.getElementById("maiusculas");
const minusculas = document.getElementById("minusculas");

maiusculas.addEventListener('change', () => {
    if (maiusculas.checked) {
        campoTexto.value = campoTexto.value.toUpperCase();
    }
});

minusculas.addEventListener('change', () => {
    if (minusculas.checked) {
        campoTexto.value = campoTexto.value.toLowerCase();
    }
});
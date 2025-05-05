const respostas = [];

function adicionarResposta() {
    const idade = parseInt(document.getElementById("idade").value);
    const sexo = document.getElementById("sexo").value;
    const opiniao = parseInt(document.getElementById("opiniao").value);

    if (isNaN(idade)) {
        alert("Preencha todos os campos corretamente!");
        return;
    }

    respostas.push({ idade, sexo, opiniao });
    alert("Resposta adicionada com sucesso!");
    document.getElementById("idade").value = '';
}

function mostrarResultados() {
    if (respostas.length === 0) {
        alert("Nenhuma resposta registrada!");
        return;
    }

    const idades = respostas.map(r => r.idade);
    const mediaIdade = (idades.reduce((a, b) => a + b, 0) / idades.length).toFixed(1);
    const maisVelha = Math.max(...idades);
    const maisNova = Math.min(...idades);
    const pessimos = respostas.filter(r => r.opiniao === 1).length;
    const otimosEBons = respostas.filter(r => r.opiniao === 3 || r.opiniao === 4).length;
    const porcentagemOtimoBom = ((otimosEBons / respostas.length) * 100).toFixed(2);

    const mulheres = respostas.filter(r => r.sexo === "feminino").length;
    const homens = respostas.filter(r => r.sexo === "masculino").length;
    const outros = respostas.filter(r => r.sexo === "outro").length;

    document.getElementById("resultados").innerHTML = `
    <p><strong>Média de idade:</strong> ${mediaIdade}</p>
    <p><strong>Idade da pessoa mais velha:</strong> ${maisVelha}</p>
    <p><strong>Idade da pessoa mais nova:</strong> ${maisNova}</p>
    <p><strong>Quantidade de pessoas que responderam péssimo:</strong> ${pessimos}</p>
    <p><strong>Porcentagem de ótimo e bom:</strong> ${porcentagemOtimoBom}%</p>
    <p><strong>Total:</strong> Mulheres: ${mulheres}, Homens: ${homens}, Outros: ${outros}</p>
  `;
}

function limpar() {
    respostas.length = 0;
    document.getElementById("resultados").innerHTML = ''; 
    alert("Dados e resultados foram apagados!");
  }
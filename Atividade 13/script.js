const imagem = document.getElementById('imagemJanela');
const titulo = document.getElementById('titulo');

let quebrada = false;

imagem.addEventListener('mouseover', () => {
    if (!quebrada) {
        imagem.src = 'img/janelaaberta.png';
        titulo.textContent = 'Janela Aberta';
    }
});

imagem.addEventListener('mouseout', () => {
    if (!quebrada) {
        imagem.src = 'img/janelafechada.png';
        titulo.textContent = 'Janela Fechada';
    }
});

imagem.addEventListener('click', () => {
    imagem.src = 'img/janelaquebra.png';
    titulo.textContent = 'Janela Quebrada';
    quebrada = true;
});
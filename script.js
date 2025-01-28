const imagens = [
    'imagem/img1.jpg', 
    'imagem/img2.jpg', 
    'imagem/img3.jpg', 
    'imagem/img4.jpg', 
    'imagem/img5.jpg'
];

let indiceAtual = 0;

document.getElementById('trocar-imagem').addEventListener('click', () => {
    // Incrementa o índice, e se ultrapassar o limite do array, volta para 0
    indiceAtual = (indiceAtual + 1) % imagens.length;
    
    // Atualiza a imagem de fundo usando o índice atual
    document.body.style.backgroundImage = `url(${imagens[indiceAtual]})`;
});

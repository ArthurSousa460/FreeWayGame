let estradaImagem
let atorImagem
let carroImagem1
let carroImagem2
let carroImagem3
let imagemCarros



let somTrilha
let somPonto
let somColisao

function preload(){
    estradaImagem = loadImage('images/estrada.png')
    atorImagem = loadImage('images/ator-1.png')
    carroImagem1 = loadImage('images/carro-1.png')
    carroImagem2 = loadImage('images/carro-2.png')
    carroImagem3 = loadImage('images/carro-3.png')
    imagemCarros = [carroImagem1, carroImagem2, carroImagem3, carroImagem1, carroImagem2, carroImagem3]

    somTrilha = loadSound("songs/trilha.mp3")
    somColisao = loadSound("songs/colidiu.mp3")
    somPonto = loadSound("songs/pontos.wav")

  }
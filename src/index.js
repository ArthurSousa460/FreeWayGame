

function setup() {
  createCanvas(500, 600)
  somTrilha.loop()
}

function draw() {
  background(estradaImagem)
  mostrarAtor()
  mostraCarro()
  movimentarCarro()
  movimentarAtor()
  verificarColisao()
  mostrarPontos()
  verificarPonto()
 
}

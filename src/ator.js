let xAtorImage = 80
let yAtorImage = 555
let movimentoAtor = 3
let colisao = false
let pontos = 0 

function mostrarAtor(){
    image(atorImagem, xAtorImage, yAtorImage, 30, 30)
  }
  
function movimentarAtor(){
    if(keyIsDown(UP_ARROW) && yAtorImage > 0){
      yAtorImage -= movimentoAtor
    }
    if(keyIsDown(DOWN_ARROW) && yAtorImage < 555){
      yAtorImage += movimentoAtor
    }
    
}
function reiniciarPosicaoAtor(){
  yAtorImage = 555
}

function perderPonto(){
  if(pontos > 0){
    pontos -= 1
  }
}

function verificarColisao(){
  for(let i = 0; i < imagemCarros.length; i++){
    colisao = collideRectCircle(xCarro[i], yCarro[i], 60, 40, xAtorImage, yAtorImage, 15)
    if(colisao){
      reiniciarPosicaoAtor()
      perderPonto()
      somColisao.play()
    }
  }
  }

function mostrarPontos(){
  textAlign(CENTER)
  textSize(25)
  fill(color(225,240,60))
  text(pontos, 90, 30)
}

function marcarPonto(){
  pontos += 1
  somPonto.play()
}

function verificarPonto(){
  if(yAtorImage < 30){
    marcarPonto()
    reiniciarPosicaoAtor()
  }
}
  
  
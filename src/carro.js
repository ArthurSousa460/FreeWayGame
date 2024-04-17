let xCarro = [450,450,450,450,450,450]
let yCarro = [76, 150, 230, 320, 412, 490]
let velocidaCarro = [2,4,5,1,4,3]
let comprimentoCarro = 60
let alturaCarro  = 40


function mostraCarro(){
    for(let i = 0; i < xCarro.length; i++){
        image(imagemCarros[i], xCarro[i], yCarro[i], comprimentoCarro, alturaCarro)
    }
}


function movimentarCarro(){
    for(let i = 0; i < velocidaCarro.length; i++){
        xCarro[i] -= velocidaCarro[i]
        if(xCarro[i] < - 50){
            xCarro[i] = 450
        }
    }
}

let xCarros = [600, 600, 600];
let xCarrosContrario = [0, 0, 0];
let yCarros = [40, 96,150];
let yCarrosContrario =[210, 270, 318];
let velocidadeCarros = [2, 3.2, 2.5];
let velocidadeCarrosContrario = [5, 2.3, 3.2]
let comprimentoCarro = 50;
let alturaCarro = 40;


function mostraCarro(){
  for(let i = 0; i < imagemCarros.length;i++){
    image(imagemCarros[i], xCarros[i], yCarros[i], comprimentoCarro, alturaCarro);
  }
}

function movimentaCarro(){
  for(let i=0; i < imagemCarros.length; i++){
    xCarros[i] -= velocidadeCarros[i];
  }
}

function voltaPosicaoInicialCarro(){
  for(let i=0; i < imagemCarros.length; i++){
    if(passouTodaTela(xCarros[i])){
      xCarros[i] = 600;
    }
  }
}

function passouTodaTela(xCarros){
  return xCarros < -50;
}

function mostraCarroContrario(){
  for(let i = 0; i < imagemCarrosContrario.length;i++){
    image(imagemCarrosContrario[i], xCarrosContrario[i], yCarrosContrario[i], comprimentoCarro, alturaCarro);
  }
}

function movimentaCarroContrario(){
  for(let i=0; i < imagemCarrosContrario.length; i++){
    xCarrosContrario[i] += velocidadeCarrosContrario[i];
  }
}

function voltaPosicaoInicialCarroContrario(){
  for(let i=0; i < imagemCarrosContrario.length; i++){
    if(passouTodaTelaContrario(xCarrosContrario[i])){
      xCarrosContrario[i] = 0;
    }
  }
}

function passouTodaTelaContrario(xCarrosContrario){
  return xCarrosContrario > 650;
}

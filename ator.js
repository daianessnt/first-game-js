//ator
let xAtor = 90;
let yAtor = 366;
let colisao = false;
let meusPontos = 0;

function mostraAtor(){
  image(imagemDoAtor, xAtor, yAtor, 30, 30);
}

function movimentaAtor () {
  if (keyIsDown(UP_ARROW)) {
    yAtor -= 6
  }
  if (keyIsDown(DOWN_ARROW)) {
    yAtor += 6
  }
  if (keyIsDown(RIGHT_ARROW)) {
    xAtor -= -6
  }
  if (keyIsDown(LEFT_ARROW)) {
    xAtor -= 6
  }
}

function verificaColisao(){
  //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  for(let i = 0; i < imagemCarros.length; i++){
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 15)
    if(colisao){
       posicaoInicial();
      somColisao.play();
      if(pontosMaiorQueZero()){
        meusPontos -= 1;
      } 
    }
  }
}

function verificaColisaoContrario(){
  //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  for(let i = 0; i < imagemCarros.length; i++){
    colisao = collideRectCircle(xCarrosContrario[i], yCarrosContrario[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 15)
    if(colisao){
      posicaoInicial();
      somColisao.play();
      if(pontosMaiorQueZero()){
        meusPontos -= 1;
     }
    }
  }
}

function pontosMaiorQueZero(){
  return meusPontos > 0  
}

function posicaoInicial(){
  yAtor = 366;
}

function marcaPonto(){
  if(yAtor < 15){
    meusPontos += 1;
    somPonto.play();
    posicaoInicial();
  }
}

function incluiPontos(){
  textAlign (CENTER);
  textSize (25);
  fill(color(255,165,50));
  text(meusPontos, width/5, 25);
}

function podeDescer(){
  return yAtor < 366;
}







function setup() {
  createCanvas(windowWidth, windowHeight);
  jogo = new Jogo();
  telaInicial = new TelaInicial();
  jogo.setup();
  frameRate(40);
  cenas ={jogo,telaInicial};
  botao = new Botao('Jogar',0,0);
  somDoJogo.loop();
}

function keyPressed() 
{
  jogo.keyPressed(keyCode);
}

function draw() {  
  cenas[cenaAtual].draw();
}





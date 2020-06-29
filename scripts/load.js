
function preload(){
  
//cenarios
imagemCenario = loadImage('cenario/floresta.png');
imagemGround = loadImage('cenario/floresta1/Ground.png');
imagemCenario2 =loadImage('cenario/floresta2/floresta2.png');
imagemCenario3 =loadImage('cenario/cenario3/cenario3.png');
imagemCenario4 =loadImage('cenario/cenario4/cenario4.png');
imagemCenario5 =loadImage('cenario/cenario5/cenario5.png');
imagemCenario6 =loadImage('cenario/cenario6/cenario6.png');
//personagem
imagemPersonagem = loadImage('personagem/correndo.png');
  
//assets
imagemGameOver = loadImage('assets/game-over.png');
imagemTelaInicial=loadImage('assets/telaInicial.png');
imagemVida = loadImage('assets/coracao.png');

//fontes
fonteTextoTelaInicial = loadFont('assets/fonteTelaInicial.otf');
  
//inimigos
imagemInimigo = loadImage('inimigos/gotinha.png');
imagemInimigoGrande = loadImage('inimigos/troll.png');
imagemInimigoVoador = loadImage('inimigos/gotinha-voadora.png');
  
//sons
somDoJogo = loadSound('sons/trilha_jogo.mp3');
somDoPulo = loadSound('sons/somPulo.mp3');
somMoeda = loadSound('sons/coin.mp3');

//moedas
for(var i=1;i<31;i++){
arrayMoedaGold[i] = loadImage('item/moedaGold/Gold_' + i +'.png');
arrayMoedaPrata[i] = loadImage('item/moedaSilver/Silver_' + i +'.png');
arrayMoedaBronze[i] = loadImage('item/moedaBronze/Bronze_' + i +'.png');
}
  
  //json
cartucho = loadJSON('cartucho/cartucho.json');
  

  
}
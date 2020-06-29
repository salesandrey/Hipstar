class Jogo{
 constructor(){
  this.indice = 0;
  this.mapa = cartucho.mapa
 }
  
  setup(){
  cenario = new Cenario(imagemCenario,3);  
  ground = new Cenario(imagemGround,3);
  
  cenario2 = new Cenario(imagemCenario2,3);
  cenario3 = new Cenario(imagemCenario3,4);
  cenario4 = new Cenario(imagemCenario4,4);
  cenario5 = new Cenario(imagemCenario5,5);
  cenario6 = new Cenario(imagemCenario6,5);
    
  loading = new Loading(0);
  
  cenarios.push(cenario,cenario2,cenario3,cenario4,cenario5,cenario6);

  vida = new Vida(cartucho.configuracao.vidaMaxima,cartucho.configuracao.vidaInicial);
  
  personagem = new Personagem(matrizPersonagem,imagemPersonagem,
                             0,30,110,135,220,270);
inimigoGota = new Inimigo(matrizInimigo,imagemInimigo,
                        width-52,30,52,52,
                        104,104,5);
inimigoGrande = new InimigoSprite(matrizInimigoGrande,
                              imagemInimigoGrande,width,0,
                             200,200,400,400,4);
 inimigoVoador = new InimigoSprite(matrizInimigoVoador,
                              imagemInimigoVoador,width,200,
                             100,75,200,150,10);
  
  inimigos.push(inimigoGota);
  inimigos.push(inimigoGrande);
  inimigos.push(inimigoVoador);
  
  fabricaMoeda = new FabricaMoeda(moedas,arrayMoedaGold,
               arrayMoedaPrata,arrayMoedaBronze);
  pontos = new Pontuacao();
  }
  keyPressed(keyCode){
    if (keyCode === 32 && personagem.contador<2) { 
      personagem.pula();
      somDoPulo.play();
      personagem.contador++;
    }
    if(keyCode==13 && vida.vidas<=0)
    {
     window.location.reload();
    }
  }
  draw(){
    
  this.mostrarCenario();
  personagem.exibe();
  personagem.aplicarGravidade();

  pontos.exibiPontos();
  vida.draw();
  const linhaAtual = this.mapa[this.indice];
  const inimigo = inimigos[linhaAtual.inimigo];
  const inimigoVisivel = inimigo.x < - inimigo.largura;
  inimigo.velocidade = linhaAtual.velocidade;
  inimigo.exibe();
  inimigo.move();
    


  if(inimigoVisivel){
    this.indice++;
    inimigo.aparece();
    
    if(this.indice > this.mapa.length-1)
    {
     this.indice = 0; 
    }   
    
  }

 
  this.movimentarMoedas();
    
  if (personagem.estaColidindo(inimigo)) {
    vida.perdeVida();
    personagem.tornarInvensivel();
   
    if(vida.vidas==0){
      image(imagemGameOver, width/2 - 200, height/3);
      textAlign(CENTER);
      textSize(30);
      text('Score: ' + parseInt(pontos.pontos),width/2,
height/2+100);
      textAlign(CENTER);
      textSize(30);
      text('Pressione Enter para Voltar',width/2,
height/2+150);
      vida.perdeVida();
      noLoop();
    }
  }
  
  
}
  movimentarMoedas(){
  fabricaMoeda.fabricar();
     
    moedas.forEach(moeda=>{
        moeda.anima();     
    if (personagem.estaColidindo(moeda)) {
      somMoeda.play();
      pontos.adicionarPonto(moeda)
      moedas.splice(moeda,1);
      
    }})
  
}
  mostrarCenario(){
      
     if(pontos.pontos <= 1500){
       cenarios[0].exibe();
       cenarios[0].move();
     }
     else if(pontos.pontos>1500 && pontos.pontos <=2500){
       cenarios[1].exibe();
       cenarios[1].move();
     }
     else if(pontos.pontos>2500 && pontos.pontos <=3500){
       cenarios[2].exibe();
       cenarios[2].move();
     }
     else if(pontos.pontos>3500 && pontos.pontos <=4500){
       cenarios[3].exibe();
       cenarios[3].move();
     }
     else if(pontos.pontos>4500 && pontos.pontos <=5500){
       cenarios[4].exibe();
       cenarios[4].move();
     }
     else if(pontos.pontos>5500){
       cenarios[5].exibe();
       cenarios[5].move();
     }   
  }
}
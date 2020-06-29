class Personagem extends Animacao{
  constructor(matriz,imagem,x,variacaoY,largura,altura,larguraSprite,
              alturaSprite){
   super(matriz,imagem,x,variacaoY,largura,altura,larguraSprite,
              alturaSprite)
    this.variacaoY = variacaoY;
    this.yInicial = height - this.altura-variacaoY;
    this.y = this.yInicial;
    this.velocidadeDoPulo =0;
    this.gravidade = 3;
    this.contador = 0;
    this.invensivel = false;

  }
  
  pula(){
    this.velocidadeDoPulo = -30;
  }
  
  aplicarGravidade(){
    this.y = this.y + this.velocidadeDoPulo;
    this.velocidadeDoPulo = this.velocidadeDoPulo + this.gravidade;
    if(this.y > this.yInicial){
      this.y = this.yInicial;
      this.contador=0
       }
  }
  tornarInvensivel(){
    this.invensivel = true;
    
    setTimeout(() => {
      
      this.invensivel = false
    },1000)
  }
  
  estaColidindo(inimigo) {
    
    if(this.invensivel){
     return false; 
    }
    
    const precisao = .7
    const colisao = collideRectRect(
      this.x, 
      this.y, 
      this.largura * precisao, 
      this.altura * precisao,
      inimigo.x,
      inimigo.y,
      inimigo.largura * precisao,
      inimigo.altura * precisao
    );
    
    return colisao;
  }
  
}
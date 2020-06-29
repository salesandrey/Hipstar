class Moeda{
  
  constructor(listaMoeda,imagemAtual,x,y,largura,altura,tipo){
  
  this.listaMoeda = listaMoeda;
  this.imagemAtual = imagemAtual;
  this.x = x;
  this.y = y;
  this.largura = largura;
  this.altura = altura;
  this.velocidade = 5;
  this.tipo = tipo;
  
  }
  
anima(){

    image(this.listaMoeda[this.imagemAtual],
          this.x,this.y,this.largura,
          this.altura)
    this.imagemAtual++;
    if(this.imagemAtual>=this.listaMoeda.length-1)
    {
      this.imagemAtual=1;
    }
  this.move();
}

move(){
  this.x = this.x -this.velocidade;
    if(this.x < -this.largura){
      this.x = width;
    }
}

  
  
  
  
  
}

